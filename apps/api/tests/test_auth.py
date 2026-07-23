"""POST /api/auth/* — UNI RAG 개인 계정 로그인 프록시 테스트.

전 시나리오 httpx.MockTransport·monkeypatch 사용 — 실서버에 요청을 보내지 않는다.
"""
from __future__ import annotations

import httpx
import pytest

from services import uni_rag

ACCOUNT = "person-account"
PASSWORD = "person-pw"
TOKEN = "personal-jwt-token-abc"

SSE_BODY = b'data: {"delta": "\xec\x9d\x91\xeb\x8b\xb5"}\n\ndata: [DONE]\n\n'


@pytest.fixture(autouse=True)
def _isolate(monkeypatch):
    """환경변수·싱글턴·쿠키 격리 + 실서버 접근 차단."""
    for name in ("UNI_RAG_ACCOUNT", "UNI_RAG_PASSWORD", "UNI_RAG_MODEL_KEY", "VERCEL"):
        monkeypatch.delenv(name, raising=False)
    monkeypatch.setenv("UNI_RAG_BASE_URL", "http://uni-rag.test")
    uni_rag.reset_client()
    yield
    uni_rag.reset_client()


@pytest.fixture(autouse=True)
def _clear_cookies(client):
    """세션 스코프 TestClient의 쿠키가 테스트 간 전파되지 않도록 초기화."""
    client.cookies.clear()
    yield
    client.cookies.clear()


def _use_transport(monkeypatch, handler) -> uni_rag.UniRagClient:
    injected = uni_rag.UniRagClient(transport=httpx.MockTransport(handler))
    monkeypatch.setattr(uni_rag, "_client", injected)
    return injected


def _login_ok_handler(request: httpx.Request) -> httpx.Response:
    if request.url.path == "/auth/login":
        return httpx.Response(200, json={"access_token": TOKEN})
    return httpx.Response(404)


# ── 로그인 성공 — httpOnly 쿠키 발급·비밀 미노출 ─────────────────────
def test_login_success_sets_httponly_cookie(client, monkeypatch):
    _use_transport(monkeypatch, _login_ok_handler)
    res = client.post(
        "/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD}
    )
    assert res.status_code == 200
    assert res.json() == {"ok": True}
    set_cookie = res.headers.get("set-cookie", "")
    assert "uni_rag_token=" in set_cookie
    assert "HttpOnly" in set_cookie
    assert "Secure" not in set_cookie  # 로컬(VERCEL 미설정)에서는 Secure 제외
    # 응답 본문에 자격증명·토큰 미노출
    assert ACCOUNT not in res.text
    assert PASSWORD not in res.text
    assert TOKEN not in res.text


def test_login_secure_cookie_on_vercel(client, monkeypatch):
    monkeypatch.setenv("VERCEL", "1")
    _use_transport(monkeypatch, _login_ok_handler)
    res = client.post(
        "/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD}
    )
    assert res.status_code == 200
    assert "Secure" in res.headers.get("set-cookie", "")


# ── 로그인 실패 경로 ──────────────────────────────────────────────────
def test_login_bad_credentials_401(client, monkeypatch):
    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(401, json={"detail": "invalid"})

    _use_transport(monkeypatch, handler)
    res = client.post(
        "/api/auth/login", json={"account": ACCOUNT, "password": "wrong"}
    )
    assert res.status_code == 401
    assert "set-cookie" not in res.headers


def test_login_upstream_down_502(client, monkeypatch):
    def handler(request: httpx.Request) -> httpx.Response:
        raise httpx.ConnectTimeout("connect timeout")

    _use_transport(monkeypatch, handler)
    res = client.post(
        "/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD}
    )
    assert res.status_code == 502


def test_login_body_required(client):
    assert client.post("/api/auth/login", json={}).status_code == 422


# ── me·logout ─────────────────────────────────────────────────────────
def test_me_and_logout_roundtrip(client, monkeypatch):
    assert client.get("/api/auth/me").json() == {"logged_in": False}

    _use_transport(monkeypatch, _login_ok_handler)
    client.post("/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD})
    assert client.get("/api/auth/me").json() == {"logged_in": True}

    client.post("/api/auth/logout")
    assert client.get("/api/auth/me").json() == {"logged_in": False}


# ── chat — 로그인 쿠키 토큰 사용 ──────────────────────────────────────
def test_chat_uses_cookie_token(client, monkeypatch):
    """로그인 쿠키가 있으면 서버 계정 로그인 없이 그 JWT로 상류 chat을 호출한다."""
    seen = {"login_calls": 0}

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            seen["login_calls"] += 1
            return httpx.Response(200, json={"access_token": TOKEN})
        if request.url.path == "/chat/":
            seen["auth"] = request.headers.get("authorization")
            return httpx.Response(
                200, content=SSE_BODY, headers={"content-type": "text/event-stream"}
            )
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    client.post("/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD})
    res = client.post("/api/chat", json={"query": "질의"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "uni_rag"
    assert seen["auth"] == f"Bearer {TOKEN}"
    assert seen["login_calls"] == 1  # /api/auth/login 1회뿐 — chat이 재로그인 안 함


def test_chat_401_when_token_rejected(client, monkeypatch):
    """상류가 토큰을 거부(401)하면 mock 폴백 대신 401 — 프론트 재로그인 유도."""
    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/auth/login":
            return httpx.Response(200, json={"access_token": TOKEN})
        if request.url.path == "/chat/":
            return httpx.Response(401, json={"detail": "expired"})
        return httpx.Response(404)

    _use_transport(monkeypatch, handler)
    client.post("/api/auth/login", json={"account": ACCOUNT, "password": PASSWORD})
    res = client.post("/api/chat", json={"query": "질의"})
    assert res.status_code == 401
