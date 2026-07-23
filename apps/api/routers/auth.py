"""POST /api/auth/* — UNI RAG 개인 계정 로그인 프록시 (로그인 게이트용).

- 개인별 UNE 계정으로 상류 /auth/login 호출 → JWT를 httpOnly 쿠키로 발급.
  자격증명·JWT는 응답 본문·로그에 노출하지 않는다(services/uni_rag.py 보안 규약).
- 쿠키 Secure 플래그는 배포 환경(VERCEL 환경변수)에서만 켠다 —
  로컬 dev(http://localhost·내부 IP)에서는 Secure 쿠키가 저장되지 않기 때문.
- 서버는 자격증명·토큰을 저장하지 않는다(무상태 — 서버리스 대응).
"""
from __future__ import annotations

import logging
import os

from fastapi import APIRouter, Cookie, HTTPException, Response
from pydantic import BaseModel, Field

from services import uni_rag

logger = logging.getLogger("disaster.api")

router = APIRouter(tags=["auth"])

COOKIE_NAME = "uni_rag_token"
COOKIE_MAX_AGE = 8 * 60 * 60  # 8시간 — 상류 JWT 만료 시 chat 401로 재로그인 유도


def _cookie_secure() -> bool:
    """Vercel 등 HTTPS 배포에서만 Secure — 호출 시점 평가(테스트 monkeypatch 대응)."""
    return bool(os.environ.get("VERCEL"))


class LoginBody(BaseModel):
    """POST /api/auth/login 요청 본문 — 개인 UNE 계정."""

    account: str = Field(min_length=1, description="UNE 계정")
    password: str = Field(min_length=1, description="비밀번호")


@router.post("/auth/login")
def login(body: LoginBody, response: Response) -> dict:
    """상류 로그인 프록시 — 성공 시 JWT httpOnly 쿠키 발급."""
    try:
        token = uni_rag.login_with(body.account, body.password)
    except uni_rag.UniRagAuthError:
        logger.info("auth login 거부 account_len=%d", len(body.account))
        raise HTTPException(status_code=401, detail="계정 또는 비밀번호가 올바르지 않습니다")
    except Exception as exc:  # noqa: BLE001 — 상류 연결 실패는 502로 구분
        logger.warning("auth login 연결 실패 (%s)", type(exc).__name__)
        raise HTTPException(status_code=502, detail="UNI RAG 서버에 연결할 수 없습니다")
    response.set_cookie(
        COOKIE_NAME,
        token,
        max_age=COOKIE_MAX_AGE,
        httponly=True,
        secure=_cookie_secure(),
        samesite="lax",
        path="/",
    )
    logger.info("auth login 성공 account_len=%d", len(body.account))
    return {"ok": True}


@router.post("/auth/logout")
def logout(response: Response) -> dict:
    """로그아웃 — 토큰 쿠키 삭제."""
    response.delete_cookie(COOKIE_NAME, path="/")
    return {"ok": True}


@router.get("/auth/me")
def me(uni_rag_token: str | None = Cookie(default=None, alias=COOKIE_NAME)) -> dict:
    """로그인 여부 — 쿠키 존재만 확인(상류 검증은 chat 호출 시 401로 판별)."""
    return {"logged_in": bool(uni_rag_token)}
