"""POST /api/chat — UNI RAG 챗봇 서버사이드 프록시 (docs/06_UNI_RAG_챗봇_연동.md).

- 자격증명(UNI_RAG_ACCOUNT/PASSWORD)·JWT는 백엔드 전용 — 프론트에 노출 금지.
- 실연동 성공: UNI RAG SSE를 text/event-stream으로 중계(X-Chat-Mode: uni_rag).
- 미설정·실패: 결정적 mock 응답 JSON(mode: "mock", X-Chat-Mode: mock).
- 어댑터 분리: 실제 호출은 services/uni_rag.chat()만 사용 — 향후 T3Q AI Agent
  교체 시에도 본 라우터·프론트 계약은 불변.
"""
from __future__ import annotations

import logging

from fastapi import APIRouter
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel, Field

from services import uni_rag

logger = logging.getLogger("disaster.api")

router = APIRouter(tags=["chat"])


class ChatMessage(BaseModel):
    """대화 이력 1건 — UNI RAG history 항목과 동일 구조."""

    role: str
    content: str


class ChatBody(BaseModel):
    """POST /api/chat 요청 본문."""

    query: str = Field(min_length=1, description="사용자 질의(필수)")
    history: list[ChatMessage] = Field(default_factory=list, description="대화 이력")
    event: dict | None = Field(default=None, description="상황(사건) 컨텍스트 — 선택")


@router.post("/chat")
def post_chat(body: ChatBody):
    """챗봇 질의 — UNI RAG SSE 중계 또는 mock 폴백 JSON."""
    result = uni_rag.chat(
        query=body.query,
        history=[m.model_dump() for m in body.history],
        event=body.event,
    )
    mode = "uni_rag" if isinstance(result, StreamingResponse) else "mock"
    # 요청 단위 로그 — 서비스 검증 체크리스트 ⑧. 질의 원문 대신 길이만 기록
    # (개인정보 유입 가능성 차단), 자격증명·JWT 등 비밀값 미포함.
    logger.info("chat mode=%s query_len=%d history_len=%d", mode, len(body.query), len(body.history))
    if isinstance(result, StreamingResponse):
        return result
    return JSONResponse(content=result, headers={"X-Chat-Mode": "mock"})
