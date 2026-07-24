"""UNI RAG System 연동 어댑터 (docs/06_UNI_RAG_챗봇_연동.md).

- UniRagClient: POST /auth/login JWT 발급·캐시 → POST /chat/ SSE 스트리밍,
  401 수신 시 1회 재로그인·재시도.
- chat(): 라우터(/api/chat) 전용 진입점 — 자격증명(UNI_RAG_ACCOUNT) 미설정
  또는 연동 실패 시 결정적 mock 폴백(로컬 코퍼스 키워드 매칭 발췌 기반).
- 보안: 자격증명·JWT는 응답 본문·헤더에 노출하지 않으며, 로그에도 남기지 않는다.
- 환경변수는 config.py 대신 본 모듈에서 os.environ 직접 참조(병렬 작업 충돌 방지):
  UNI_RAG_BASE_URL(기본 http://221.147.100.161:8000) · UNI_RAG_ACCOUNT ·
  UNI_RAG_PASSWORD · UNI_RAG_MODEL_KEY(선택, 미설정 시 서버 기본 qwen3.5-35b)
"""
from __future__ import annotations

import json
import logging
import os
import re
import threading
from collections.abc import Iterator

import httpx
from fastapi.responses import StreamingResponse

from schemas.common import Event
from services import corpus, retrieval

logger = logging.getLogger("disaster.api.uni_rag")

DEFAULT_BASE_URL = "http://221.147.100.161:8000"
MOCK_NOTICE = "UNI RAG 미연결 mock 응답"

# 연결은 짧게(5s) — 실패 시 조용히 mock 폴백.
# read(첫 이벤트·청크 간 대기)는 25s: 모델 서버 미가동 시 상류가 오류 이벤트까지
# 10초대를 끄는데, 60s로 두면 서버리스(Vercel maxDuration) 한도를 넘겨 504가 난다.
# 정상 스트림은 청크 간격이 짧아 25s로 충분.
_TIMEOUT = httpx.Timeout(connect=5.0, read=25.0, write=10.0, pool=5.0)

_TOKEN_SPLIT = re.compile(r"[\s,;·/]+")


class UniRagError(RuntimeError):
    """UNI RAG 연동 실패(로그인·chat 오류) — 상위에서 mock 폴백 처리."""


class UniRagAuthError(UniRagError):
    """인증 실패(자격증명 오류·토큰 만료) — mock 폴백 대신 401로 구분 처리."""


class UniRagClient:
    """UNI RAG System HTTP 어댑터 — JWT 캐시·재로그인 포함.

    transport 주입(httpx.MockTransport)으로 실서버 없이 테스트 가능하다.
    환경변수는 호출 시점에 평가한다(테스트 monkeypatch 대응).
    """

    def __init__(self, transport: httpx.BaseTransport | None = None) -> None:
        self._transport = transport
        self._http: httpx.Client | None = None
        self._token: str | None = None
        self._lock = threading.Lock()

    @staticmethod
    def _env(name: str, default: str | None = None) -> str | None:
        value = os.environ.get(name)
        return value if value else default

    def _client_http(self) -> httpx.Client:
        if self._http is None:
            self._http = httpx.Client(
                base_url=self._env("UNI_RAG_BASE_URL", DEFAULT_BASE_URL) or DEFAULT_BASE_URL,
                timeout=_TIMEOUT,
                transport=self._transport,
            )
        return self._http

    def close(self) -> None:
        """HTTP 커넥션·토큰 캐시 해제."""
        if self._http is not None:
            self._http.close()
            self._http = None
        self._token = None

    # ── 인증 ──────────────────────────────────────────────────────────
    @staticmethod
    def _parse_token(payload) -> str | None:
        """응답 구조 편차 대응: 최상위 token/access_token, data.token/access_token 모두 인식."""
        if not isinstance(payload, dict):
            return None
        token = payload.get("token") or payload.get("access_token")
        data = payload.get("data")
        if not token and isinstance(data, dict):
            token = data.get("token") or data.get("access_token")
        return token if isinstance(token, str) and token else None

    def login(self) -> str:
        """POST /auth/login {account, password}(환경변수 계정) → JWT 발급·캐시."""
        account = self._env("UNI_RAG_ACCOUNT")
        password = self._env("UNI_RAG_PASSWORD")
        if not account:
            raise UniRagError("UNI_RAG_ACCOUNT 미설정")
        resp = self._client_http().post(
            "/auth/login", json={"account": account, "password": password}
        )
        resp.raise_for_status()
        token = self._parse_token(resp.json())
        if not token:
            raise UniRagError("로그인 응답에 토큰 없음")
        self._token = token
        return token

    def login_with(self, account: str, password: str) -> str:
        """개인 계정 로그인(/api/auth/login 프록시용) — 토큰 반환만, 캐시 안 함.

        자격증명 오류(400/401/403)는 UniRagAuthError, 그 외 실패는 UniRagError.
        """
        resp = self._client_http().post(
            "/auth/login", json={"account": account, "password": password}
        )
        if resp.status_code in (400, 401, 403):
            raise UniRagAuthError(f"로그인 거부 HTTP {resp.status_code}")
        resp.raise_for_status()
        token = self._parse_token(resp.json())
        if not token:
            raise UniRagError("로그인 응답에 토큰 없음")
        return token

    # ── 채팅 ──────────────────────────────────────────────────────────
    def build_payload(self, query: str, history: list[dict], event: dict | None) -> dict:
        """UNI RAG ChatRequest 본문 구성 — stream=true SSE, 세션 API 미사용(history 전달)."""
        payload: dict = {
            "query": _query_with_event(query, event),
            "history": history or [],
            "stream": True,
            "top_k": 5,
            "session_id": None,
            "thinking": False,
            "source": None,
        }
        model_key = self._env("UNI_RAG_MODEL_KEY")
        if model_key:
            payload["model_key"] = model_key
        return payload

    def _send_chat(self, token: str, payload: dict) -> httpx.Response:
        http = self._client_http()
        request = http.build_request(
            "POST",
            "/chat/",
            json=payload,
            headers={"Authorization": f"Bearer {token}"},
        )
        return http.send(request, stream=True)

    def chat_stream(
        self, query: str, history: list[dict], event: dict | None = None
    ) -> httpx.Response:
        """POST /chat/ SSE 스트리밍 응답 반환. 401이면 1회 재로그인 후 재시도.

        실패(그 외 4xx·5xx)는 UniRagError — 호출부(chat)가 mock 폴백한다.
        """
        payload = self.build_payload(query, history, event)
        with self._lock:
            token = self._token or self.login()
        resp = self._send_chat(token, payload)
        if resp.status_code == 401:
            resp.close()
            with self._lock:
                token = self.login()  # 캐시 토큰 만료 — 1회 재로그인
            resp = self._send_chat(token, payload)
        if resp.status_code >= 400:
            status = resp.status_code
            resp.close()
            raise UniRagError(f"chat HTTP {status}")
        return resp

    def chat_stream_with_token(
        self, token: str, query: str, history: list[dict], event: dict | None = None
    ) -> httpx.Response:
        """개인 토큰(로그인 쿠키)으로 POST /chat/ SSE.

        401은 서버측 재로그인이 불가하므로 UniRagAuthError — 라우터가 401을 반환해
        프론트가 재로그인을 유도한다. 그 외 4xx·5xx는 UniRagError(mock 폴백).
        """
        payload = self.build_payload(query, history, event)
        resp = self._send_chat(token, payload)
        if resp.status_code == 401:
            resp.close()
            raise UniRagAuthError("토큰 만료·무효")
        if resp.status_code >= 400:
            status = resp.status_code
            resp.close()
            raise UniRagError(f"chat HTTP {status}")
        return resp


# ── 모듈 싱글턴 ───────────────────────────────────────────────────────
_client: UniRagClient | None = None
_client_lock = threading.Lock()


def get_client() -> UniRagClient:
    global _client
    if _client is None:
        with _client_lock:
            if _client is None:
                _client = UniRagClient()
    return _client


def reset_client() -> None:
    """싱글턴·토큰 캐시 해제(테스트용)."""
    global _client
    with _client_lock:
        if _client is not None:
            _client.close()
        _client = None


# ── 라우터 진입점 ─────────────────────────────────────────────────────
def login_with(account: str, password: str) -> str:
    """/api/auth/login 프록시 — 개인 계정으로 상류 로그인, JWT 반환(캐시 안 함)."""
    return get_client().login_with(account, password)


def chat(
    query: str,
    history: list[dict] | None = None,
    event: dict | None = None,
    token: str | None = None,
    poi: dict | None = None,
) -> StreamingResponse | dict:
    """/api/chat 처리 — UNI RAG SSE 중계 또는 결정적 mock 응답(dict).

    - poi(지도 선택 지구·하천) 있으면 속성정보를 질의에 첨부(_query_with_poi)
    - 실연동 경로는 로컬 BM25 발췌를 컨텍스트로 첨부하고(_query_with_excerpts),
      스트림 첫 이벤트로 {"__local_excerpts__": [...]}를 내보내 프론트가 출처 표기
    - token(개인 로그인 쿠키) 있음 → 그 토큰으로 상류 호출.
      401은 UniRagAuthError로 전파(라우터가 401 반환 — 프론트 재로그인 유도)
    - token 없음: UNI_RAG_ACCOUNT 환경변수 있으면 서버 계정 경로(로컬 개발용),
      없으면 mock dict
    - 연동 실패(timeout·4xx·5xx·오류 이벤트) → 서버 로그 warning + mock dict
    - 성공 → text/event-stream 중계(StreamingResponse, X-Chat-Mode: uni_rag)
    """
    history = history or []
    query = _query_with_poi(query, poi)
    if token:
        excerpts = _local_excerpts(query, event)
        upstream_query = _query_with_excerpts(query, excerpts)
        try:
            upstream = get_client().chat_stream_with_token(token, upstream_query, history, event)
            prelude, tail = _peek_prelude(upstream)
        except UniRagAuthError:
            raise  # 라우터에서 401 처리
        except Exception as exc:  # noqa: BLE001 — 연동 실패는 조용히 mock 폴백
            logger.warning("UNI RAG 연동 실패 — mock 폴백 (%s: %s)", type(exc).__name__, exc)
            return build_mock_answer(query, history, event)
        return _stream_or_mock(upstream, prelude, tail, query, history, event, excerpts)
    if not os.environ.get("UNI_RAG_ACCOUNT"):
        return build_mock_answer(query, history, event)
    excerpts = _local_excerpts(query, event)
    upstream_query = _query_with_excerpts(query, excerpts)
    try:
        upstream = get_client().chat_stream(upstream_query, history, event)
        prelude, tail = _peek_prelude(upstream)
    except Exception as exc:  # noqa: BLE001 — 연동 실패는 조용히 mock 폴백
        # 주의: 자격증명·토큰이 로그에 남지 않도록 예외 타입·요약만 기록
        logger.warning("UNI RAG 연동 실패 — mock 폴백 (%s: %s)", type(exc).__name__, exc)
        return build_mock_answer(query, history, event)
    return _stream_or_mock(upstream, prelude, tail, query, history, event, excerpts)


def _stream_or_mock(
    upstream: httpx.Response,
    prelude: bytes,
    tail: Iterator[bytes] | None,
    query: str,
    history: list[dict],
    event: dict | None,
    excerpts: list[dict] | None = None,
) -> StreamingResponse | dict:
    """첫 이벤트가 오류 페이로드면 mock 폴백, 아니면 SSE 중계 응답 구성.

    중계 시 첫 이벤트로 로컬 발췌({"__local_excerpts__": [...]})를 내보낸다.
    """
    error = _sse_first_error(prelude)
    if error is not None:
        # HTTP 200이어도 첫 이벤트가 오류 페이로드면 실질 실패(모델 서버 미가동 등)
        upstream.close()
        logger.warning("UNI RAG 스트림 오류 이벤트 — mock 폴백 (%s)", error)
        return build_mock_answer(query, history, event)
    header = (
        b"data: "
        + json.dumps({"__local_excerpts__": excerpts or []}, ensure_ascii=False).encode("utf-8")
        + b"\n\n"
    )
    return StreamingResponse(
        _relay(upstream, header + prelude, tail),
        media_type="text/event-stream",
        headers={"X-Chat-Mode": "uni_rag", "Cache-Control": "no-cache"},
    )


# 첫 이벤트 오류 검사용 선독 한도 — 이 안에 이벤트 경계가 없으면 정상 스트림으로 간주
_PEEK_MAX = 2048


def _peek_prelude(upstream: httpx.Response) -> tuple[bytes, Iterator[bytes] | None]:
    """스트림 앞부분(첫 이벤트 경계 또는 _PEEK_MAX까지)을 선독해 반환한다."""
    if upstream.is_stream_consumed:
        # 이미 로드된 응답(비스트림 전송·테스트 MockTransport 등)
        return upstream.content, None
    tail = upstream.iter_raw()
    buffer = b""
    for chunk in tail:
        buffer += chunk
        if b"\n\n" in buffer or len(buffer) >= _PEEK_MAX:
            break
    return buffer, tail


def _sse_first_error(prelude: bytes) -> str | None:
    """선독 버퍼의 첫 SSE 이벤트가 {"error": ...} JSON이면 오류 메시지를 반환."""
    head = prelude.split(b"\n\n", 1)[0].strip()
    if not head.startswith(b"data:"):
        return None
    try:
        payload = json.loads(head[len(b"data:"):].decode("utf-8").strip())
    except (ValueError, UnicodeDecodeError):
        return None
    if isinstance(payload, dict) and payload.get("error"):
        return str(payload["error"])
    return None


def _relay(
    upstream: httpx.Response, prelude: bytes, tail: Iterator[bytes] | None
) -> Iterator[bytes]:
    """선독분·잔여 SSE 바이트를 그대로 중계하고 종료 시 커넥션을 닫는다."""
    try:
        if prelude:
            yield prelude
        if tail is not None:
            yield from tail
    finally:
        upstream.close()


# ── mock 폴백 (결정적 — 랜덤 없음) ────────────────────────────────────
def _query_with_event(query: str, event: dict | None) -> str:
    """event 컨텍스트를 질의 뒤에 결정적 형식으로 덧붙인다."""
    if not event:
        return query
    parts = []
    for key in sorted(event):
        value = event[key]
        if value in (None, "", []):
            continue
        if isinstance(value, list):
            value = ",".join(str(v) for v in value)
        parts.append(f"{key}={value}")
    if not parts:
        return query
    return f"{query}\n\n[상황 정보] " + " · ".join(parts)


def _query_with_poi(query: str, poi: dict | None) -> str:
    """선택 POI(위험지구·하천) 속성정보를 질의 뒤에 결정적 형식으로 덧붙인다.

    poi = {"type": "district"|"river", "id": district_code|river_id} — 프론트 지도
    클릭 선택. 레코드 미조회·형식 오류 시 원 질의 그대로(방어적).
    """
    if not isinstance(poi, dict) or not poi.get("id"):
        return query
    poi_id = str(poi["id"])
    if poi.get("type") == "river":
        rec = next(
            (r for r in corpus.get_rivers().get("rivers", []) if r.get("river_id") == poi_id),
            None,
        )
        if not rec:
            return query
        parts = [f"하천명: {rec.get('name')}({poi_id})"]
        for label, key in (("등급", "grade"), ("관할", "admin_name"), ("계획빈도", "design_frequency_yr")):
            if rec.get(key):
                parts.append(f"{label}: {rec[key]}")
        return f"{query}\n\n[선택 하천 정보] " + " · ".join(parts)
    rec = next(
        (d for d in corpus.get_districts().get("districts", []) if d.get("district_code") == poi_id),
        None,
    )
    if not rec:
        return query
    parts = [f"지구명: {rec.get('district_name')}({poi_id})"]
    kind = rec.get("disaster_type")
    if rec.get("disaster_subtype"):
        kind = f"{kind}({rec['disaster_subtype']})" if kind else rec["disaster_subtype"]
    if kind:
        parts.append(f"재해유형: {kind}")
    for label, key in (("관할", "admin_name"), ("위치", "location"), ("관련 하천", "river_name")):
        if rec.get(key):
            parts.append(f"{label}: {rec[key]}")
    factors = [f for f in (rec.get("risk_factors") or []) if isinstance(f, str)][:2]
    if factors:
        parts.append("위험요인: " + " / ".join(factors))
    return f"{query}\n\n[선택 위험지구 정보] " + " · ".join(parts)


def _local_excerpts(query: str, event: dict | None) -> list[dict]:
    """로컬 BM25 상위 3건 발췌 — UNI RAG 컨텍스트 주입·프론트 출처 표기 공용.

    검색 실패는 챗봇 동작을 막지 않는다(빈 목록).
    """
    try:
        fields = {k: v for k, v in (event or {}).items() if k in Event.model_fields}
        results = retrieval.search(Event(**fields), query, top_k=3)
    except Exception as exc:  # noqa: BLE001 — 근거 주입은 보조 기능
        logger.warning("로컬 근거 검색 실패 — 발췌 없이 진행 (%s)", type(exc).__name__)
        return []
    excerpts: list[dict] = []
    for r in results[:3]:
        p = r.passage if hasattr(r, "passage") else (r.get("passage") or {})
        excerpts.append(
            {
                "passage_id": p.get("passage_id"),
                "doc_title": p.get("doc_title"),
                "chapter": p.get("chapter"),
                "page_start": p.get("page_start"),
                "page_end": p.get("page_end"),
                "quote": (p.get("content") or "")[:300],
            }
        )
    return excerpts


def _query_with_excerpts(query: str, excerpts: list[dict]) -> str:
    """로컬 코퍼스 발췌를 질의 뒤에 참고자료로 덧붙인다(에이전트 근거 유도)."""
    if not excerpts:
        return query
    lines = ["[참고 문서 발췌 — 아래 내용을 근거로 답하고, 근거가 없으면 모른다고 답할 것]"]
    for i, ex in enumerate(excerpts, 1):
        loc_bits = [str(ex.get("doc_title") or "")]
        if ex.get("chapter"):
            loc_bits.append(str(ex["chapter"]))
        if ex.get("page_start"):
            loc_bits.append(f"p.{ex['page_start']}")
        lines.append(f"{i}. ({' '.join(loc_bits).strip()}) {ex.get('quote') or ''}")
    return query + "\n\n" + "\n".join(lines)


def _match_terms(query: str, event: dict | None) -> list[str]:
    terms = [t for t in _TOKEN_SPLIT.split(query.strip()) if len(t) >= 2]
    for kw in (event or {}).get("keywords") or []:
        if isinstance(kw, str) and len(kw) >= 2 and kw not in terms:
            terms.append(kw)
    return terms


def build_mock_answer(
    query: str, history: list[dict] | None = None, event: dict | None = None
) -> dict:
    """로컬 코퍼스(chunks) 단순 문자열 매칭 상위 1~2건 발췌 기반 결정적 mock 응답.

    services/retrieval.py(병렬 작성 중)에 의존하지 않는다 — count 기반 매칭·안정 정렬.
    """
    terms = _match_terms(query, event)
    scored: list[tuple[int, str, dict]] = []
    if terms:
        for ch in corpus.get_chunks():
            content = ch.get("content") or ""
            score = sum(content.count(t) for t in terms)
            if score > 0:
                scored.append((-score, str(ch.get("passage_id") or ""), ch))
    scored.sort(key=lambda item: (item[0], item[1]))  # 점수 내림차순·passage_id 오름차순

    excerpts: list[dict] = []
    for _neg_score, _pid, ch in scored[:2]:
        excerpts.append(
            {
                "passage_id": ch.get("passage_id"),
                "doc_title": ch.get("doc_title"),
                "chapter": ch.get("chapter"),
                "page_start": ch.get("page_start"),
                "page_end": ch.get("page_end"),
                "quote": (ch.get("content") or "")[:120],
            }
        )

    lines = [f"[{MOCK_NOTICE}] 질의: {query}"]
    if excerpts:
        lines.append("로컬 코퍼스 키워드 매칭 상위 발췌:")
        for idx, ex in enumerate(excerpts, start=1):
            loc = str(ex.get("doc_title") or "")
            if ex.get("chapter"):
                loc += f" · {ex['chapter']}"
            if ex.get("page_start") is not None:
                loc += f" · p.{ex['page_start']}"
            lines.append(f"{idx}. ({loc}) {ex['quote']}")
    else:
        lines.append("로컬 코퍼스에서 일치하는 발췌 없음.")

    return {
        "mode": "mock",
        "notice": MOCK_NOTICE,
        "answer": "\n".join(lines),
        "excerpts": excerpts,
        "query": query,
    }
