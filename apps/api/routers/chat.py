"""POST /api/chat — 로컬 데이터 직조회 챗봇 (외부 공개 버전, 로그인 없음).

- public-demo 브랜치: UNI RAG 프록시·로그인 쿠키를 제거하고 services/chatbot이
  로컬 코퍼스·정형 JSON을 직접 조회해 결정적 응답을 만든다.
- 응답은 항상 JSON(mode "mock", X-Chat-Mode: mock) — 프론트 api/client.js의
  onMock 분기·출처 표기 UI 계약 불변. 정형 질문 즉답은 프론트 answerFromData가
  백엔드 호출 없이 처리(하이브리드 유지).
- 어댑터 분리: 향후 T3Q AI Agent 연동 시 services/chatbot만 교체.
"""
from __future__ import annotations

import logging

from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

from services import chatbot

logger = logging.getLogger("disaster.api")

router = APIRouter(tags=["chat"])


class ChatMessage(BaseModel):
    """대화 이력 1건."""

    role: str
    content: str


class ChatBody(BaseModel):
    """POST /api/chat 요청 본문."""

    query: str = Field(min_length=1, description="사용자 질의(필수)")
    history: list[ChatMessage] = Field(default_factory=list, description="대화 이력")
    event: dict | None = Field(default=None, description="상황(사건) 컨텍스트 — 선택")
    poi: dict | None = Field(
        default=None,
        description='지도 선택 POI — {"type": "district"|"river", "id": 지구코드|하천ID}',
    )


@router.post("/chat")
def post_chat(body: ChatBody):
    """챗봇 질의 — 로컬 코퍼스·정형 JSON 직조회 결정적 응답."""
    result = chatbot.answer(
        query=body.query,
        history=[m.model_dump() for m in body.history],
        event=body.event,
        poi=body.poi,
    )
    # 요청 단위 로그 — 질의 원문 대신 길이만 기록(개인정보 유입 가능성 차단)
    logger.info("chat mode=mock query_len=%d history_len=%d", len(body.query), len(body.history))
    return JSONResponse(content=result, headers={"X-Chat-Mode": "mock"})
