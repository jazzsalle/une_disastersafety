"""POST /api/chat — UNI RAG 프록시·mock 폴백 테스트.

전 시나리오 httpx.MockTransport·monkeypatch 사용 — 실서버(221.147.100.161)에
어떤 요청도 보내지 않는다(기본 base_url도 http://uni-rag.test로 격리).
"""
from __future__ import annotations

import json

import httpx
import pytest

from services import corpus, uni_rag

ACCOUNT = "svc-poc-account"
PASSWORD = "poc-secret-pw"

FAKE_CHUNKS = [
    {
        "passage_id": "P-0002",
        "doc_title": "의왕시 자연재해저감종합계획",
        "chapter": "제3장",
        "page_start": 12,
        "page_end": 13,
        "content": "오전동 침수 위험지구는 호우 시 내수배제 불량으로 침수 피해가 반복되었다.",
    },
    {
        "passage_id": "P-0001",
        "doc_title": "구미시 자연재해저감종합계획",
        "chapter": "제2장",
        "page_start": 7,
        "page_end": 8,
        "content": "산사태 위험지구 사면 붕괴 이력과 급경사지 관리 현황.",
    },
]

SSE_BODY = b'data: {"delta": "\xec\x9d\x91\xeb\x8b\xb5"}\n\ndata: [DONE]\n\n'


@pytest.fixture(autouse=True)
def _isolate(monkeypatch):
    """환경변수·싱글턴 격리 + 실서버 접근 차단 + 결정적 코퍼스 주입."""
    for name in ("UNI_RAG_ACCOUNT", "UNI_RAG_PASSWORD", "UNI_RAG_MODEL_KEY"):
        monkeypatch.delenv(name, raising=False)
    monkeypatch.setenv("UNI_RAG_BASE_URL", "http://uni-rag.test")
    monkeypatch.setattr(corpus, "get_chunks", lambda: FAKE_CHUNKS)
    uni_rag.reset_client()
    yield
    uni_rag.reset_client()


def _set_credentials(monkeypatch):
    monkeypatch.setenv("UNI_RAG_ACCOUNT", ACCOUNT)
    monkeypatch.setenv("UNI_RAG_PASSWORD", PASSWORD)


def _use_transport(monkeypatch, handler) -> uni_rag.UniRagClient:
    """모듈 싱글턴을 MockTransport 주입 클라이언트로 교체."""
    injected = uni_rag.UniRagClient(transport=httpx.MockTransport(handler))
    monkeypatch.setattr(uni_rag, "_client", injected)
    return injected


def _assert_no_secret(response, secrets) -> None:
    """응답 본문·헤더에 자격증명·JWT 문자열 미노출 검증."""
    for secret in secrets:
        assert secret not in response.text
        for key, value in response.headers.items():
            assert secret not in key
            assert secret not in value


# ── 1. 자격증명 미설정 → 결정적 mock 응답 ─────────────────────────────
def test_mock_mode_without_credentials(client):
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    body = res.json()
    assert body["mode"] == "mock"
    assert uni_rag.MOCK_NOTICE in body["answer"]  # "UNI RAG 미연결 mock 응답" 명시
    # 키워드 매칭 발췌: "침수"×2 + "피해"×1 → P-0002 단독 상위
    assert [ex["passage_id"] for ex in body["excerpts"]] == ["P-0002"]
    assert body["excerpts"][0]["doc_title"] == "의왕시 자연재해저감종합계획"
    # 결정적(랜덤 없음): 동일 입력 → 동일 응답
    res2 = client.post("/api/chat", json={"query": "침수 피해"})
    assert res2.json() == body


def test_mock_mode_no_match_is_deterministic(client):
    res = client.post("/api/chat", json={"query": "존재하지않는어휘질의"})
    assert res.status_code == 200
    body = res.json()
    assert body["mode"] == "mock"
    assert body["excerpts"] == []
    assert uni_rag.MOCK_NOTICE in body["answer"]


def test_query_required(client):
    assert client.post("/api/chat", json={}).status_code == 422


# ── 2. 실연동 성공 — SSE 중계 + 비밀 미노출 ──────────────────────────
def test_stream_relay_success_and_no_secret_leak(client, monkeypatch):
    _set_credentials(monkeypatch)
    token = "jwt-secret-token-xyz"
    seen: dict = {}

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            seen["login_body"] = json.loads(request.read())
            return httpx.Response(200, json={"token": token})
        if request.url.path == "/chat/":
            seen["auth"] = request.headers.get("authorization")
            seen["chat_body"] = json.loads(request.read())
            return httpx.Response(
                200, content=SSE_BODY, headers={"content-type": "text/event-stream"}
            )
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    res = client.post(
        "/api/chat",
        json={
            "query": "안양천 계획홍수량",
            "history": [{"role": "user", "content": "이전 질문"}],
            "event": {"hazard_event_code": "FLOOD", "admin_code": "41430"},
        },
    )
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "uni_rag"  # mode 구분 헤더
    assert res.headers["content-type"].startswith("text/event-stream")
    assert "data:" in res.text and "[DONE]" in res.text  # SSE 그대로 중계
    # 상류 호출 계약: Bearer JWT + ChatRequest(stream=true, history 전달)
    assert seen["login_body"] == {"account": ACCOUNT, "password": PASSWORD}
    assert seen["auth"] == f"Bearer {token}"
    assert seen["chat_body"]["stream"] is True
    assert seen["chat_body"]["top_k"] == 5
    assert seen["chat_body"]["history"] == [{"role": "user", "content": "이전 질문"}]
    assert "안양천 계획홍수량" in seen["chat_body"]["query"]
    # 보안: 응답 본문·헤더에 계정·비밀번호·JWT 미노출
    _assert_no_secret(res, (ACCOUNT, PASSWORD, token))


# ── 3-①. 로그인 실패(401·timeout) → mock 폴백 ────────────────────────
def test_login_401_falls_back_to_mock(client, monkeypatch):
    _set_credentials(monkeypatch)

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            return httpx.Response(401, json={"detail": "invalid credentials"})
        return httpx.Response(500)

    _use_transport(monkeypatch, handler)
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    body = res.json()
    assert body["mode"] == "mock"
    assert uni_rag.MOCK_NOTICE in body["answer"]
    _assert_no_secret(res, (ACCOUNT, PASSWORD))


def test_login_timeout_falls_back_to_mock(client, monkeypatch):
    _set_credentials(monkeypatch)

    def handler(request: httpx.Request) -> httpx.Response:
        raise httpx.ConnectTimeout("connect timeout")

    _use_transport(monkeypatch, handler)
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.json()["mode"] == "mock"
    _assert_no_secret(res, (ACCOUNT, PASSWORD))


# ── 3-②. chat 5xx → mock 폴백 ────────────────────────────────────────
def test_chat_5xx_falls_back_to_mock(client, monkeypatch):
    _set_credentials(monkeypatch)

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            return httpx.Response(200, json={"access_token": "tok-a"})
        if request.url.path == "/chat/":
            return httpx.Response(503, json={"detail": "model unavailable"})
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    assert res.json()["mode"] == "mock"
    _assert_no_secret(res, (ACCOUNT, PASSWORD, "tok-a"))


# ── 3-③. chat 200 + 첫 이벤트 오류 페이로드 → mock 폴백 ─────────────
def test_stream_error_event_falls_back_to_mock(client, monkeypatch):
    """모델 서버 미가동 시 UNI RAG가 200 + data:{"error":...}를 주는 케이스."""
    _set_credentials(monkeypatch)
    error_sse = b'data: {"error": "LLM \xec\x97\xb0\xea\xb2\xb0 \xec\x8b\xa4\xed\x8c\xa8"}\n\ndata: [DONE]\n\n'

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            return httpx.Response(200, json={"token": "tok-e"})
        if request.url.path == "/chat/":
            return httpx.Response(
                200, content=error_sse, headers={"content-type": "text/event-stream"}
            )
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    body = res.json()
    assert body["mode"] == "mock"
    assert uni_rag.MOCK_NOTICE in body["answer"]
    _assert_no_secret(res, (ACCOUNT, PASSWORD, "tok-e"))


# ── 3-④. JWT 캐시 후 401 → 1회 재로그인·재시도 성공 ──────────────────
def test_relogin_once_on_401_with_cached_jwt(client, monkeypatch):
    _set_credentials(monkeypatch)
    state = {"login": 0, "chat": 0, "valid": None}

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            state["login"] += 1
            token = f"tok-{state['login']}"
            state["valid"] = token
            return httpx.Response(200, json={"access_token": token})
        if request.url.path == "/chat/":
            state["chat"] += 1
            if request.headers.get("authorization") != f"Bearer {state['valid']}":
                return httpx.Response(401, json={"detail": "token expired"})
            return httpx.Response(
                200, content=SSE_BODY, headers={"content-type": "text/event-stream"}
            )
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)

    # 1차 요청: 로그인 1회(tok-1 캐시) + chat 성공
    res1 = client.post("/api/chat", json={"query": "질의 일"})
    assert res1.status_code == 200
    assert res1.headers["x-chat-mode"] == "uni_rag"
    assert state == {"login": 1, "chat": 1, "valid": "tok-1"}

    # 서버측 토큰 만료 시뮬레이션 — 캐시된 tok-1은 이제 401
    state["valid"] = "revoked"

    # 2차 요청: 캐시 tok-1 → 401 → 1회 재로그인(tok-2) → 재시도 성공
    res2 = client.post("/api/chat", json={"query": "질의 이"})
    assert res2.status_code == 200
    assert res2.headers["x-chat-mode"] == "uni_rag"
    assert "[DONE]" in res2.text
    assert state["login"] == 2  # 재로그인 정확히 1회 추가
    assert state["chat"] == 3  # 401 응답 1회 + 재시도 성공 1회
    _assert_no_secret(res2, (ACCOUNT, PASSWORD, "tok-1", "tok-2"))


def test_relogin_still_401_falls_back_to_mock(client, monkeypatch):
    """재로그인 후에도 401이면 무한 재시도 없이 mock 폴백한다."""
    _set_credentials(monkeypatch)
    state = {"login": 0, "chat": 0}

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            state["login"] += 1
            return httpx.Response(200, json={"token": f"tok-{state['login']}"})
        if request.url.path == "/chat/":
            state["chat"] += 1
            return httpx.Response(401, json={"detail": "unauthorized"})
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.json()["mode"] == "mock"
    assert state["login"] == 2  # 최초 1회 + 재로그인 1회(그 이상 없음)
    assert state["chat"] == 2  # 재시도도 1회로 제한
