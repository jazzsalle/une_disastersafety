"""T7 — 메타 태깅: chunks_raw.jsonl에 재난메타를 부여 → 최종 코퍼스 chunks.jsonl.

규칙(DESIGN.md 4.1):
- 문서 레지스트리(config.DOCUMENTS_BY_ID)에서 doc_type·publisher·admin_code·
  admin_name·river_name을 승계 — 남원(SRC-NW-JGP-2022)은 레지스트리가 이미
  전라북도(45190)로 교정돼 있으므로 폴더명 오기("전라남도")가 자동 보정된다.
- hazard_codes 키워드 사전(section 제목 우선, 없으면 content):
    하천재해 → [T10206, T10107] / 내수재해 → [T10107, T10106]
    사면재해·토사재해 → [T10401]   / 바람재해 → [T10105, T10101]
  하천기본계획(RVP) 문서는 홍수 관련 키워드(계획홍수량·홍수위·치수 등) 매칭 시
  T10206 포함.
- hazard_event_codes: T10107→HEAVY_RAIN, T10206→FLOOD, T10106→INUNDATION,
  T10105→TYPHOON, T10401→LANDSLIDE. 매핑 외 코드(T10101 등)는 병기 생략.
- disaster_kind: 관리대장·위험요인 분석표 지구 청크는 본문 "자연재해 유형" 표기
  기반 단일 재해구분, 그 외는 절 제목 기반 추정 또는 null.
- 안양천(SRC-AYC-RVP-2020) 청크는 plan_version(2020 금회/2015 기수립) 필수 —
  chunks_raw에서 승계, 누락 시 파일 경로("2.기수립…")로 보정.
- 매칭 안 되는 청크(서론·목차 등)는 hazard_codes=[] 허용.

실행: `python pipeline/tag_meta.py`  →  `data/processed/chunks.jsonl`
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import (  # noqa: E402
    CHUNKS_PATH,
    DOC_TYPE_RVP,
    DOCUMENTS_BY_ID,
    PROCESSED_DIR,
    ensure_output_dirs,
)

CHUNKS_RAW_PATH = PROCESSED_DIR / "chunks_raw.jsonl"

# ---------------------------------------------------------------------------
# 키워드 사전 — 저감계획 재해구분 → 재난메타 T코드 (DESIGN.md 4.1)
# ---------------------------------------------------------------------------

#: 재해구분(disaster_kind) → hazard_codes. 선언 순서가 코드 병기 순서.
KIND_TO_CODES: dict[str, list[str]] = {
    "하천재해": ["T10206", "T10107"],
    "내수재해": ["T10107", "T10106"],
    "사면재해": ["T10401"],
    "토사재해": ["T10401"],
    "바람재해": ["T10105", "T10101"],
}

#: T코드 → 사업 Event 코드. 매핑 외 코드(T10101 등)는 event 병기 생략.
CODE_TO_EVENT: dict[str, str] = {
    "T10107": "HEAVY_RAIN",
    "T10206": "FLOOD",
    "T10106": "INUNDATION",
    "T10105": "TYPHOON",
    "T10401": "LANDSLIDE",
}

#: 하천기본계획(RVP) 문서의 홍수 관련 키워드 → T10206 포함
RE_RVP_FLOOD = re.compile(
    r"계획홍수량|계획홍수위|홍수위|홍수량|홍수특보|홍수예보|치수|하도계획|"
    r"제방|호안|배수시설|침수흔적|범람"
)

#: 관리대장·위험요인 분석표(지구 1건=1청크) 장 제목 — disaster_kind 단일 태깅 대상
RE_LEDGER_CHAPTER = re.compile(r"관리대장|위험요인 분석")

#: 지구 청크 본문의 "자연재해 유형 … ○○재해" 표기
RE_KIND_AFTER_TYPE = re.compile(
    r"자연재해\s*유형[\s\S]{0,40}?(하천재해|내수재해|사면재해|토사재해|바람재해|"
    r"가뭄재해|대설재해|해안재해|기타재해)"
)

#: 재해구분 8종(하천/내수/사면/토사/바람/가뭄/대설/기타 + 해안) 일반 탐지
RE_ANY_KIND = re.compile(
    r"(하천재해|내수재해|사면재해|토사재해|바람재해|가뭄재해|대설재해|해안재해|기타재해)"
)


def _codes_for_kinds(kinds: list[str]) -> list[str]:
    """재해구분 목록 → 중복 제거 T코드 목록(선언 순서 유지)."""
    codes: list[str] = []
    for kind in kinds:
        for code in KIND_TO_CODES.get(kind, []):
            if code not in codes:
                codes.append(code)
    return codes


def _find_kinds(text: str) -> list[str]:
    """텍스트에서 매핑 대상 재해구분 키워드를 등장 순서대로 수집한다."""
    found: list[str] = []
    for m in RE_ANY_KIND.finditer(text):
        kind = m.group(1)
        if kind in KIND_TO_CODES and kind not in found:
            found.append(kind)
    return found


def tag_chunk(raw: dict, doc) -> dict:
    """청크 1건에 재난메타를 태깅해 최종 스키마(dict)로 반환한다."""
    chapter = raw.get("chapter") or ""
    section = raw.get("section") or ""
    content = raw.get("content") or ""
    is_ledger = bool(RE_LEDGER_CHAPTER.search(chapter))

    # -- disaster_kind --------------------------------------------------
    disaster_kind: str | None = None
    if is_ledger:
        # 지구 카드 본문의 "자연재해 유형 … ○○재해" 우선, 없으면 첫 등장 재해구분
        m = RE_KIND_AFTER_TYPE.search(content)
        if m:
            disaster_kind = m.group(1)
        else:
            m2 = RE_ANY_KIND.search(chapter + " " + section + " " + content)
            disaster_kind = m2.group(1) if m2 else None
    else:
        m = RE_ANY_KIND.search(section) or RE_ANY_KIND.search(chapter)
        disaster_kind = m.group(1) if m else None

    # -- hazard_codes: 절 제목 우선, 없으면 본문 ------------------------
    kinds = _find_kinds(chapter + " " + section)
    if not kinds:
        if is_ledger and disaster_kind in KIND_TO_CODES:
            kinds = [disaster_kind]  # 지구 청크는 해당 재해유형만
        else:
            kinds = _find_kinds(content)
    codes = _codes_for_kinds(kinds)

    # 하천기본계획 홍수 관련 청크 → T10206 포함
    if doc.doc_type == DOC_TYPE_RVP and RE_RVP_FLOOD.search(section + " " + content):
        if "T10206" not in codes:
            codes.append("T10206")

    events = [CODE_TO_EVENT[c] for c in codes if c in CODE_TO_EVENT]

    out = {
        "passage_id": raw["passage_id"],
        "evidence_unit_id": raw["evidence_unit_id"],
        "source_asset_id": raw["source_asset_id"],
        "doc_title": doc.doc_title,
        "doc_type": doc.doc_type,
        "publisher": doc.publisher,
        "admin_code": doc.admin_code,
        "admin_name": doc.admin_name,
        "hazard_codes": codes,
        "hazard_event_codes": events,
        "disaster_kind": disaster_kind,
        "river_name": doc.river_name,
        "chapter": raw.get("chapter"),
        "section": raw.get("section"),
        "page_start": raw["page_start"],
        "page_end": raw["page_end"],
        "content": content,
        "tables": raw.get("tables", []),
        # 부가 필드(장-쪽 라벨·원본 파일) — 근거 표기·추적용
        "page_label_start": raw.get("page_label_start"),
        "page_label_end": raw.get("page_label_end"),
        "page_label_fallback": raw.get("page_label_fallback", False),
        "file": raw.get("file"),
    }

    # -- plan_version(안양천 기수립 2015/금회 2020) ---------------------
    plan_version = raw.get("plan_version")
    if raw["source_asset_id"] == "SRC-AYC-RVP-2020" and not plan_version:
        # 누락 보정: 레지스트리 파일 경로 기준(기수립 파일 → 2015)
        plan_version = "2015" if "기수립" in (raw.get("file") or "") else "2020"
    if plan_version is not None:
        out["plan_version"] = plan_version
    return out


REQUIRED_FIELDS = (
    "passage_id", "evidence_unit_id", "source_asset_id", "doc_title", "doc_type",
    "publisher", "admin_code", "admin_name", "hazard_codes", "hazard_event_codes",
    "disaster_kind", "river_name", "chapter", "section", "page_start", "page_end",
    "content", "tables",
)


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    if not CHUNKS_RAW_PATH.is_file():
        raise SystemExit(f"입력 없음: {CHUNKS_RAW_PATH} — 먼저 pipeline/chunk.py 실행")
    ensure_output_dirs()

    tagged: list[dict] = []
    with CHUNKS_RAW_PATH.open(encoding="utf-8") as f:
        for line in f:
            raw = json.loads(line)
            doc = DOCUMENTS_BY_ID[raw["source_asset_id"]]
            tagged.append(tag_chunk(raw, doc))

    # -- 검증 -----------------------------------------------------------
    by_src = Counter(c["source_asset_id"] for c in tagged)
    missing_src = set(DOCUMENTS_BY_ID) - set(by_src)
    assert not missing_src, f"source_asset_id 누락: {missing_src}"

    for c in tagged:
        for fld in REQUIRED_FIELDS:
            assert fld in c, f"필드 누락 {fld}: {c['passage_id']}"

    nw = [c for c in tagged if c["source_asset_id"] == "SRC-NW-JGP-2022"]
    assert nw and all(
        c["admin_code"] == "45190" and c["admin_name"] == "전라북도 남원시" for c in nw
    ), "남원 admin_code/admin_name 오류"

    ayc = [c for c in tagged if c["source_asset_id"] == "SRC-AYC-RVP-2020"]
    assert ayc and all(c.get("plan_version") in ("2015", "2020") for c in ayc), \
        "안양천 plan_version 누락"

    pids = [c["passage_id"] for c in tagged]
    assert len(pids) == len(set(pids)), "passage_id 중복"

    # -- 저장 -----------------------------------------------------------
    with CHUNKS_PATH.open("w", encoding="utf-8", newline="\n") as f:
        for c in tagged:
            f.write(json.dumps(c, ensure_ascii=False) + "\n")

    # -- 통계 출력 ------------------------------------------------------
    total = len(tagged)
    print(f"메타 태깅 완료 → {CHUNKS_PATH} (청크 {total:,}건)")
    print("\n[문서별 청크 수·hazard 태깅 커버리지]")
    for sid in DOCUMENTS_BY_ID:
        sub = [c for c in tagged if c["source_asset_id"] == sid]
        hit = sum(1 for c in sub if c["hazard_codes"])
        print(f"  {sid:<18} {len(sub):>5}건  hazard {hit:>5}건 ({hit / len(sub):6.1%})")
    hit_all = sum(1 for c in tagged if c["hazard_codes"])
    print(f"  {'전체':<18} {total:>5}건  hazard {hit_all:>5}건 ({hit_all / total:6.1%})")

    print(f"\n남원(45190) 청크: {len(nw)}건 — 전건 admin_code=45190 확인")
    pv = Counter(c["plan_version"] for c in ayc)
    print(f"안양천 plan_version 분포: {dict(sorted(pv.items()))} (총 {len(ayc)}건)")

    kind_dist = Counter(c["disaster_kind"] for c in tagged if c["disaster_kind"])
    print(f"disaster_kind 분포: {dict(kind_dist.most_common())}")


if __name__ == "__main__":
    main()
