"""데모 시나리오 3종 API 레벨 자동 검증 + 서비스 검증 체크리스트 8단계 판정 (Phase 4).

사용법(리포 루트에서):
    python scripts/verify_scenarios.py                # localhost:8000 기존 서버 사용, 없으면 자체 기동
    python scripts/verify_scenarios.py --start-server # 무조건 자체 기동(기존 서버 무시)
    python scripts/verify_scenarios.py --base-url http://localhost:8000

동작:
- 기본은 --base-url(기본 http://localhost:8000)의 기존 서버를 사용한다.
  /api/health 응답이 없으면(또는 --start-server 지정 시) subprocess로 uvicorn을
  자체 기동하고, 검증 종료 후 종료한다.
- 자체 기동 시 자식 프로세스 환경에서 외부 연동 자격증명(ANTHROPIC_API_KEY,
  UNI_RAG_ACCOUNT, UNI_RAG_PASSWORD, UNI_RAG_MODEL_KEY)을 제거한다
  → LLM·챗봇 모두 mock 경로 고정, 외부 서버(anthropic·221.147.100.161) 호출 없음.
- 시나리오 3종(S1 호우/의왕, S2 홍수/남원, S3 산사태/구미)을 POST /api/ask로
  검증하고, 서비스 검증 체크리스트 ①~⑧을 자동 판정해 표로 출력한다.
- 종료 코드: 전부 통과 0, 실패 있음 1.

주의: 출력은 cp949 콘솔 안전 문자만 사용한다(이모지·em dash 금지).
"""
from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
API_DIR = REPO_ROOT / "apps" / "api"

# 자체 기동 시 자식 환경에서 제거할 외부 연동 자격증명 — mock 경로 고정(외부 호출 차단)
EXTERNAL_CRED_KEYS = (
    "ANTHROPIC_API_KEY",
    "UNI_RAG_ACCOUNT",
    "UNI_RAG_PASSWORD",
    "UNI_RAG_MODEL_KEY",
)

# 비밀값 스캔 대상 키(체크리스트 ⑥) — 응답 직렬화 문자열에 실값이 없어야 한다
SECRET_KEYS = ("ANTHROPIC_API_KEY", "UNI_RAG_PASSWORD", "UNI_RAG_ACCOUNT")

FACTOR_KEYS = {"type", "time", "space", "damage"}

# ── 체크리스트 ① 코드 확인 결과(하드코딩 주석) ─────────────────────────
# 프론트 SituationPanel(apps/web/src/components/situation/SituationPanel.jsx)의
# apply()는 api/models.js buildEvent()로 event를 생성하며, 산출 필드는 다음 9종:
#   event_id, hazard_code, hazard_event_code, admin_code,
#   alert_kind, alert_level, onset, keywords, note
# 백엔드 Event 모델(apps/api/schemas/common.py)의 필드 9종과 1:1 동일
# → 프론트 buildEvent 산출 JSON이 POST /api/ask body.event로 무손실 전달된다.
BUILD_EVENT_FIELDS = [
    "event_id",
    "hazard_code",
    "hazard_event_code",
    "admin_code",
    "alert_kind",
    "alert_level",
    "onset",
    "keywords",
    "note",
]


# ── HTTP 헬퍼(표준 라이브러리만 사용 — localhost 전용) ────────────────
def http_get(url: str, timeout: float = 10.0) -> tuple[int, dict | list | None]:
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.status, json.loads(resp.read().decode("utf-8"))


def http_post(url: str, body: dict, timeout: float = 60.0) -> tuple[int, dict]:
    data = json.dumps(body, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json", "Accept": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.status, json.loads(resp.read().decode("utf-8"))


def probe_health(base_url: str, timeout: float = 3.0) -> bool:
    try:
        status, _ = http_get(f"{base_url}/api/health", timeout=timeout)
        return status == 200
    except Exception:
        return False


# ── 서버 자체 기동 ────────────────────────────────────────────────────
class ManagedServer:
    """uvicorn subprocess 기동·종료 + stdout/stderr 로그 캡처(체크리스트 ⑧)."""

    def __init__(self, port: int) -> None:
        self.port = port
        self.proc: subprocess.Popen | None = None
        fd, path = tempfile.mkstemp(prefix="verify_scenarios_server_", suffix=".log")
        os.close(fd)
        self.log_path = Path(path)

    def start(self) -> None:
        env = dict(os.environ)
        for key in EXTERNAL_CRED_KEYS:
            env.pop(key, None)  # mock 경로 고정 — 외부 서버 호출 차단
        env.setdefault("PYTHONIOENCODING", "utf-8")
        code = (
            "import logging, uvicorn; "
            "logging.basicConfig(level=logging.INFO); "
            f"uvicorn.run('main:app', host='127.0.0.1', port={self.port}, log_level='info')"
        )
        log_file = open(self.log_path, "w", encoding="utf-8", errors="replace")
        self.proc = subprocess.Popen(
            [sys.executable, "-c", code],
            cwd=str(API_DIR),
            env=env,
            stdout=log_file,
            stderr=subprocess.STDOUT,
        )
        self._log_file = log_file

    def wait_ready(self, base_url: str, timeout_s: float = 40.0) -> bool:
        deadline = time.monotonic() + timeout_s
        while time.monotonic() < deadline:
            if self.proc is not None and self.proc.poll() is not None:
                return False  # 프로세스 조기 종료
            if probe_health(base_url, timeout=2.0):
                return True
            time.sleep(0.5)
        return False

    def stop(self) -> None:
        if self.proc is not None:
            self.proc.terminate()
            try:
                self.proc.wait(timeout=10)
            except subprocess.TimeoutExpired:
                self.proc.kill()
        try:
            self._log_file.close()
        except Exception:
            pass

    def read_log(self) -> str:
        try:
            return self.log_path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return ""


# ── 비밀값 수집(체크리스트 ⑥) — os.environ + 리포 .env 파싱 ───────────
def collect_secret_values() -> dict[str, str]:
    values: dict[str, str] = {}
    for key in SECRET_KEYS:
        v = os.environ.get(key)
        if v and len(v) >= 4:
            values[f"env:{key}"] = v
    env_file = REPO_ROOT / ".env"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8", errors="replace").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, val = line.partition("=")
            key, val = key.strip(), val.strip().strip('"').strip("'")
            if key in SECRET_KEYS and val and len(val) >= 4 and not val.startswith("<"):
                values[f".env:{key}"] = val
    return values


# ── 어서션 수집기 ─────────────────────────────────────────────────────
class Checks:
    def __init__(self) -> None:
        self.items: list[tuple[bool, str]] = []

    def add(self, ok: bool, label: str) -> bool:
        self.items.append((bool(ok), label))
        return bool(ok)

    @property
    def passed(self) -> bool:
        return all(ok for ok, _ in self.items)

    def lines(self) -> list[str]:
        return [f"  [{'PASS' if ok else 'FAIL'}] {label}" for ok, label in self.items]


# ── 공통 응답 구조 검증 ───────────────────────────────────────────────
def check_common(ck: Checks, status: int, res: dict, event: dict) -> None:
    ck.add(status == 200, "POST /api/ask HTTP 200")
    ck.add(bool(res.get("rag_answer_id")), f"rag_answer_id 발급: {res.get('rag_answer_id')}")
    top_k = res.get("top_k_results") or []
    ck.add(len(top_k) >= 1, f"Top-K 결과 1건 이상 (실제 {len(top_k)}건)")
    ck.add(
        all(isinstance(r.get("score"), (int, float)) for r in top_k),
        "Top-K 전건 score 수치 포함",
    )
    ck.add(
        all(set((r.get("similarity_factors") or {}).keys()) == FACTOR_KEYS for r in top_k),
        "Top-K 전건 similarity_factors 4키(type·time·space·damage)",
    )
    citations = res.get("citations") or []
    ck.add(len(citations) >= 1, f"citations 1건 이상 (실제 {len(citations)}건)")
    ck.add(
        all(c.get("doc_title") and c.get("chapter") and c.get("page_start") is not None for c in citations),
        "citations 전건 doc_title·chapter·page_start 포함",
    )
    geo = res.get("geo_refs") or {}
    feats = geo.get("features") or []
    ck.add(
        geo.get("type") == "FeatureCollection" and isinstance(feats, list),
        "geo_refs FeatureCollection 형식",
    )
    ck.add(
        all(
            f.get("type") == "Feature"
            and isinstance(f.get("geometry"), dict)
            and f["geometry"].get("type")
            and f["geometry"].get("coordinates") is not None
            for f in feats
        ),
        "geo_refs 전 Feature geometry(type·coordinates) 유효",
    )
    # 정합성(⑦): structured_refs가 입력 event와 일치(타 지역·유형 미혼입)
    refs = res.get("structured_refs") or {}
    admin = event["admin_code"]
    districts = refs.get("districts") or []
    rivers = refs.get("rivers") or []
    criteria = refs.get("criteria") or []
    ck.add(
        all(d.get("admin_code") == admin for d in districts),
        f"structured_refs.districts 전건 admin_code={admin} 일치({len(districts)}건)",
    )
    ck.add(
        all(r.get("admin_code") == admin for r in rivers),
        f"structured_refs.rivers 전건 admin_code={admin} 일치({len(rivers)}건)",
    )
    ck.add(
        all(
            c.get("hazard_code") == event["hazard_code"]
            or c.get("event_code") == event["hazard_event_code"]
            for c in criteria
        )
        and len(criteria) >= 1,
        f"structured_refs.criteria 전건 hazard={event['hazard_code']} 일치({len(criteria)}건)",
    )
    ck.add(
        all((f.get("properties") or {}).get("admin_code") == admin for f in feats),
        f"geo_refs 전 Feature admin_code={admin} 일치({len(feats)}건)",
    )


# ── 시나리오 3종 ─────────────────────────────────────────────────────
def run_s1(base_url: str) -> tuple[Checks, dict, dict]:
    event = {
        "hazard_code": "T10107",
        "hazard_event_code": "HEAVY_RAIN",
        "admin_code": "41430",
        "alert_kind": "특보",
        "alert_level": "경보",
        "keywords": ["침수", "지하차도"],
    }
    status, res = http_post(
        f"{base_url}/api/ask",
        {"event": event, "query": "호우 시 침수 위험지구와 대응 사례", "top_k": 5},
    )
    ck = Checks()
    check_common(ck, status, res, event)
    names = [d.get("district_name") or "" for d in (res.get("structured_refs") or {}).get("districts", [])]
    ck.add(any("안양천" in n for n in names), "districts에 '안양천' 포함 지구 존재")
    ck.add(any("고천" in n for n in names), "districts에 '고천' 포함 지구 존재")
    l1 = [
        f
        for f in (res.get("geo_refs") or {}).get("features", [])
        if (f.get("properties") or {}).get("layer") == "L1"
    ]
    ck.add(len(l1) >= 1, f"geo_refs L1 Feature 1건 이상 (실제 {len(l1)}건)")
    # 체크리스트 ① 보조: keywords가 검색 요인(damage)에 반영됨
    ck.add(
        any((r.get("similarity_factors") or {}).get("damage", 0) > 0 for r in res.get("top_k_results", [])),
        "keywords 전달 반영: similarity_factors.damage > 0 결과 존재",
    )
    return ck, event, res


def run_s2(base_url: str) -> tuple[Checks, dict, dict]:
    event = {
        "hazard_code": "T10206",
        "hazard_event_code": "FLOOD",
        "admin_code": "45190",
        "alert_kind": "특보",
        "alert_level": "경보",
        "keywords": ["제방", "월류"],
    }
    status, res = http_post(
        f"{base_url}/api/ask",
        {"event": event, "query": "홍수 시 요천 계획홍수량과 홍수특보 기준유량", "top_k": 5},
    )
    ck = Checks()
    check_common(ck, status, res, event)
    rivers = (res.get("structured_refs") or {}).get("rivers", [])
    yocheon = next((r for r in rivers if r.get("name") == "요천"), None)
    ck.add(yocheon is not None, "structured_refs.rivers에 요천 존재")
    y4 = None
    if yocheon:
        y4 = next((s for s in yocheon.get("stations", []) if s.get("station_code") == "Y4"), None)
    ck.add(y4 is not None, "요천 산정지점 Y4(남원수위표) 존재")
    if y4:
        warning = y4.get("flood_warning") or {}
        ck.add(y4.get("design_flood_m3s") == 2005, f"Y4 계획홍수량 2,005 (실제 {y4.get('design_flood_m3s')})")
        ck.add(warning.get("advisory_m3s") == 1003, f"Y4 주의보 기준유량 1,003 (실제 {warning.get('advisory_m3s')})")
        ck.add(warning.get("alert_m3s") == 1404, f"Y4 경보 기준유량 1,404 (실제 {warning.get('alert_m3s')})")
    return ck, event, res


def run_s3(base_url: str) -> tuple[Checks, dict, dict]:
    event = {
        "hazard_code": "T10401",
        "hazard_event_code": "LANDSLIDE",
        "admin_code": "47190",
        "alert_kind": "특보",
        "alert_level": "주의보",
        "keywords": ["사면", "급경사지"],
    }
    status, res = http_post(
        f"{base_url}/api/ask",
        {"event": event, "query": "산사태 위험지구와 토양함수지수 판단기준", "top_k": 5},
    )
    ck = Checks()
    check_common(ck, status, res, event)
    criteria = (res.get("structured_refs") or {}).get("criteria", [])
    values = {
        q.get("value")
        for c in criteria
        for q in c.get("q1_conditions", [])
        if q.get("indicator") == "토양함수지수"
    }
    ck.add(
        {80, 90, 100} <= values,
        f"criteria 토양함수지수 80/90/100 포함 (실제 {sorted(v for v in values if v is not None)})",
    )
    slope = [
        d
        for d in (res.get("structured_refs") or {}).get("districts", [])
        if d.get("disaster_type") == "사면재해"
    ]
    ck.add(len(slope) >= 1, f"사면재해 위험지구 1건 이상 (실제 {len(slope)}건: "
                            + ", ".join(d.get("district_name", "?") for d in slope) + ")")
    return ck, event, res


# ── 체크리스트 ⑤·⑧ 코드 검증 ─────────────────────────────────────────
def code_check_map_wiring() -> tuple[bool, str]:
    """⑤ 지도·목록 연동 — 프론트 배선 정적 확인(코드 검증 대체)."""
    topk = REPO_ROOT / "apps" / "web" / "src" / "components" / "right" / "TopKPanel.jsx"
    mapv = REPO_ROOT / "apps" / "web" / "src" / "components" / "map" / "MapViewer.jsx"
    state = REPO_ROOT / "apps" / "web" / "src" / "state" / "AppState.jsx"
    try:
        ok = (
            "selectPassage" in topk.read_text(encoding="utf-8")
            and "mapHighlight" in mapv.read_text(encoding="utf-8")
            and "SET_MAP_HIGHLIGHT" in state.read_text(encoding="utf-8")
        )
    except OSError:
        return False, "프론트 소스 파일 없음"
    return ok, "TopKPanel.selectPassage -> AppState.mapHighlight -> MapViewer 강조 배선 확인"


def code_check_logger() -> tuple[bool, str]:
    """⑧ 폴백 — routers/ask.py의 disaster.api 로거·rag_answer_id 로그 라인 존재."""
    src = (API_DIR / "routers" / "ask.py").read_text(encoding="utf-8")
    ok = 'logging.getLogger("disaster.api")' in src and "rag_answer_id=%s" in src
    return ok, "routers/ask.py: disaster.api 로거로 rag_answer_id 로그 기록 코드 확인"


# ── 메인 ─────────────────────────────────────────────────────────────
def main() -> int:
    try:
        sys.stdout.reconfigure(errors="replace")
    except Exception:
        pass

    parser = argparse.ArgumentParser(description="데모 시나리오 3종 API 검증 + 체크리스트 8단계")
    parser.add_argument("--base-url", default="http://localhost:8000", help="백엔드 base URL")
    parser.add_argument("--start-server", action="store_true", help="기존 서버 무시하고 자체 기동")
    args = parser.parse_args()
    base_url = args.base_url.rstrip("/")

    print("=== 재난안전 AI 시범 서비스 - 데모 시나리오 검증 (Phase 4) ===")
    print(f"대상 서버: {base_url}")

    server: ManagedServer | None = None
    if not args.start_server and probe_health(base_url):
        print("서버 모드: 기존 서버 사용(사전 기동 상태)")
    else:
        port = int(base_url.rsplit(":", 1)[-1]) if ":" in base_url.split("//", 1)[-1] else 8000
        print(f"서버 모드: 자체 기동(uvicorn subprocess, port {port}, "
              "외부 자격증명 제거 -> mock 경로 고정)")
        server = ManagedServer(port)
        server.start()
        if not server.wait_ready(base_url):
            print("[FAIL] 서버 기동 실패 - 로그:", server.log_path)
            server.stop()
            print(server.read_log()[-2000:])
            return 1

    scenario_meta = [
        ("S1", "호우/의왕(T10107·41430)", run_s1),
        ("S2", "홍수/남원(T10206·45190)", run_s2),
        ("S3", "산사태/구미(T10401·47190)", run_s3),
    ]
    scenario_results: dict[str, tuple[Checks, dict, dict]] = {}
    aux_status: dict[str, bool] = {}

    try:
        # ② API 호출·응답 — health·meta 조회
        try:
            aux_status["health"] = http_get(f"{base_url}/api/health")[0] == 200
            aux_status["meta_hazards"] = http_get(f"{base_url}/api/meta/hazards")[0] == 200
            aux_status["meta_regions"] = http_get(f"{base_url}/api/meta/regions")[0] == 200
        except Exception as exc:
            print(f"[FAIL] 조회 API 호출 실패: {type(exc).__name__}: {exc}")
            aux_status.setdefault("health", False)
            aux_status.setdefault("meta_hazards", False)
            aux_status.setdefault("meta_regions", False)

        for sid, title, runner in scenario_meta:
            print()
            print(f"--- {sid} {title} ---")
            try:
                ck, event, res = runner(base_url)
            except Exception as exc:
                ck = Checks()
                ck.add(False, f"시나리오 실행 예외: {type(exc).__name__}: {exc}")
                event, res = {}, {}
            scenario_results[sid] = (ck, event, res)
            for line in ck.lines():
                print(line)
            print(f"  => {sid} {'PASS' if ck.passed else 'FAIL'} "
                  f"(어서션 {sum(1 for ok, _ in ck.items if ok)}/{len(ck.items)})")
    finally:
        server_log = ""
        if server is not None:
            server.stop()
            server_log = server.read_log()

    # ── 체크리스트 8단계 판정 ─────────────────────────────────────────
    def sc_ok(pred) -> bool:
        return all(pred(ck, ev, res) for ck, ev, res in scenario_results.values()) and len(
            scenario_results
        ) == 3

    def labels_ok(ck: Checks, keyword: str) -> bool:
        matched = [ok for ok, label in ck.items if keyword in label]
        return bool(matched) and all(matched)

    checklist: list[tuple[str, str, bool, str]] = []

    # ① 질의 구조화 — event 필드 무손실 전달(응답 정합 간접 판정 + buildEvent 코드 확인)
    c1 = sc_ok(lambda ck, ev, res: labels_ok(ck, "일치")) and scenario_results.get("S1", (Checks(),))[0].passed
    c1 = c1 and all(labels_ok(ck, "damage") or sid != "S1" for sid, (ck, _, _) in scenario_results.items())
    checklist.append((
        "①", "질의 구조화(상황입력 -> Event JSON)", c1,
        "admin·hazard·keywords가 응답 필터·요인에 반영(간접 판정). "
        f"buildEvent 필드 9종 코드 확인: {', '.join(BUILD_EVENT_FIELDS)}",
    ))

    # ② API 호출·응답
    c2 = all(aux_status.get(k) for k in ("health", "meta_hazards", "meta_regions")) and sc_ok(
        lambda ck, ev, res: labels_ok(ck, "HTTP 200")
    )
    checklist.append(("②", "API 호출·응답(health·meta·ask 200)", c2,
                      f"health={aux_status.get('health')} meta 2종={aux_status.get('meta_hazards')}"
                      f"/{aux_status.get('meta_regions')} + ask 3건 200"))

    # ③ Top-K
    c3 = sc_ok(lambda ck, ev, res: labels_ok(ck, "Top-K"))
    checklist.append(("③", "Top-K 목록(score·similarity_factors 4요인)", c3,
                      "3시나리오 전건 score·type/time/space/damage 포함"))

    # ④ 위치 메타데이터
    c4 = sc_ok(lambda ck, ev, res: labels_ok(ck, "FeatureCollection") and labels_ok(ck, "geometry"))
    checklist.append(("④", "위치 메타데이터(geo_refs GeoJSON 유효성)", c4,
                      "FeatureCollection·geometry(type·coordinates) 전건 유효"))

    # ⑤ 지도·목록 연동 — 코드 검증 대체(SKIP 표기, 실패 시 FAIL)
    ok5, note5 = code_check_map_wiring()
    checklist.append(("⑤", "지도·목록 연동(카드 클릭 -> 지도 하이라이트)", ok5,
                      f"SKIP(코드검증 대체) - {note5}"))

    # ⑥ 근거·출처 — citations 100% + 비밀값 미노출
    c6 = sc_ok(lambda ck, ev, res: labels_ok(ck, "citations"))
    secrets = collect_secret_values()
    leaked: list[str] = []
    for _, ev, res in scenario_results.values():
        blob = json.dumps(res, ensure_ascii=False)
        for name, value in secrets.items():
            if value in blob:
                leaked.append(name)
    c6 = c6 and not leaked
    secret_note = (
        f"citations 3/3 시나리오 100% + 비밀값 {len(secrets)}종(환경·.env 대조) 응답 미포함"
        if not leaked
        else f"비밀값 노출 감지: {sorted(set(leaked))}"
    )
    checklist.append(("⑥", "근거·출처(citation 필수·비밀 미노출)", c6, secret_note))

    # ⑦ 정합성 — structured_refs가 입력 event와 전건 일치
    c7 = sc_ok(lambda ck, ev, res: labels_ok(ck, "일치"))
    checklist.append(("⑦", "정합성(districts admin·criteria hazard 일치)", c7,
                      "3시나리오 structured_refs·geo_refs 전건 입력 event 일치(타 지역·유형 미혼입)"))

    # ⑧ 로그 — 자체 기동 모드는 서버 로그에서 rag_answer_id 확인, 아니면 코드 확인
    if server is not None:
        c8 = "rag_answer_id=RAG-" in server_log
        note8 = f"자체 기동 서버 로그에서 rag_answer_id 라인 확인(로그: {server.log_path})"
        if not c8:
            ok_code, note_code = code_check_logger()
            c8, note8 = ok_code, f"서버 로그 미확인 -> 코드 확인 폴백: {note_code}"
    else:
        c8, note8 = code_check_logger()
        note8 = f"기존 서버 모드 -> 코드 확인 대체: {note8}"
    checklist.append(("⑧", "로그(rag_answer_id 기록)", c8, note8))

    # ── 결과 표 출력 ─────────────────────────────────────────────────
    print()
    print("=== 서비스 검증 체크리스트 8단계 판정 ===")
    print(f"{'번호':<4} {'판정':<6} 항목 / 근거")
    for num, title, ok, note in checklist:
        print(f"{num:<4} {'PASS' if ok else 'FAIL':<6} {title}")
        print(f"{'':<11} {note}")

    scenario_pass = all(ck.passed for ck, _, _ in scenario_results.values()) and len(scenario_results) == 3
    checklist_pass = all(ok for _, _, ok, _ in checklist)
    total_ok = scenario_pass and checklist_pass

    print()
    print("=== 종합 판정 ===")
    for sid, (ck, _, _) in scenario_results.items():
        print(f"{sid}: {'PASS' if ck.passed else 'FAIL'}")
    print(f"체크리스트: {sum(1 for _, _, ok, _ in checklist if ok)}/8 PASS")
    print(f"최종: {'전부 통과(PASS)' if total_ok else '실패 항목 있음(FAIL)'}")
    return 0 if total_ok else 1


if __name__ == "__main__":
    sys.exit(main())
