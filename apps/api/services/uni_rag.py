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

from services import corpus

logger = logging.getLogger("disaster.api.uni_rag")

DEFAULT_BASE_URL = "http://221.147.100.161:8000"
MOCK_NOTICE = "UNI RAG 미연결 mock 응답"

# 연결은 짧게(5s) — 실패 시 조용히 mock 폴백. 스트리밍 read는 여유(60s).
_TIMEOUT = httpx.Timeout(connect=5.0, read=60.0, write=10.0, pool=5.0)

_TOKEN_SPLIT = re.compile(r"[\s,;·/]+")


class UniRagError(RuntimeError):
    """UNI RAG 연동 실패(로그인·chat 오류) — 상위에서 mock 폴백 처리."""


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
    def login(self) -> str:
        """POST /auth/login {account, password} → JWT 발급·캐시.

        응답 구조 편차 대응: 최상위 token/access_token, data.token/access_token 모두 인식.
        """
        account = self._env("UNI_RAG_ACCOUNT")
        password = self._env("UNI_RAG_PASSWORD")
        if not account:
            raise UniRagError("UNI_RAG_ACCOUNT 미설정")
        resp = self._client_http().post(
            "/auth/login", json={"account": account, "password": password}
        )
        resp.raise_for_status()
        payload = resp.json()
        token: str | None = None
        if isinstance(payload, dict):
            token = payload.get("token") or payload.get("access_token")
            data = payload.get("data")
            if not token and isinstance(data, dict):
                token = data.get("token") or data.get("access_token")
        if not isinstance(token, str) or not token:
            raise UniRagError("로그인 응답에 토큰 없음")
        self._token = token
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
def chat(
    query: str, history: list[dict] | None = None, event: dict | None = None
) -> StreamingResponse | dict:
    """/api/chat 처리 — UNI RAG SSE 중계 또는 결정적 mock 응답(dict).

    - UNI_RAG_ACCOUNT 미설정 → mock dict
    - 로그인·chat 실패(timeout·4xx·5xx 등) → 서버 로그 warning + mock dict
    - 성공 → text/event-stream 중계(StreamingResponse, X-Chat-Mode: uni_rag)
    """
    history = history or []
    if not os.environ.get("UNI_RAG_ACCOUNT"):
        return build_mock_answer(query, history, event)
    try:
        upstream = get_client().chat_stream(query, history, event)
        prelude, tail = _peek_prelude(upstream)
    except Exception as exc:  # noqa: BLE001 — 연동 실패는 조용히 mock 폴백
        # 주의: 자격증명·토큰이 로그에 남지 않도록 예외 타입·요약만 기록
        logger.warning("UNI RAG 연동 실패 — mock 폴백 (%s: %s)", type(exc).__name__, exc)
        return build_mock_answer(query, history, event)
    error = _sse_first_error(prelude)
    if error is not None:
        # HTTP 200이어도 첫 이벤트가 오류 페이로드면 실질 실패(모델 서버 미가동 등)
        upstream.close()
        logger.warning("UNI RAG 스트림 오류 이벤트 — mock 폴백 (%s)", error)
        return build_mock_answer(query, history, event)
    return StreamingResponse(
        _relay(upstream, prelude, tail),
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
