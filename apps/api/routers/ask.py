"""POST /api/ask — 근거 기반 RAG 응답 라우터.

처리 흐름(어댑터 2단 — T3Q 교체 시에도 본 라우터·프론트 계약 불변):
1. services/retrieval.search(event, query, top_k) — BM25+메타 필터 검색
2. services/llm.generate_answer(event, query, search_results) — 근거 기반 응답
3. 코퍼스 접근자(corpus)로 정형 참조(structured_refs)·지리 참조(geo_refs) 결합

응답 필수 항목: rag_answer_id(호출마다 유일)·answer·mode·top_k_results·
citations(근거 표기 — 없으면 no_evidence=True로 명시)·structured_refs·geo_refs.
"""
from __future__ import annotations

import uuid
from datetime import datetime, timezone

from fastapi import APIRouter
from pydantic import BaseModel, Field, field_validator

from schemas.common import Citation, Event, SearchResult
from services import corpus, llm, retrieval

router = APIRouter(tags=["ask"])

_GEO_LAYERS = ("L1", "L2", "L3")  # L4(격자·시뮬레이션)는 POC 범위 외


class AskRequest(BaseModel):
    """RAG 질의 요청 — {event: 상황(부분 입력 허용), query: 질의문, top_k: 검색 결과 수}."""

    event: Event = Field(default_factory=Event)
    query: str
    top_k: int = Field(default=5, ge=1, le=20)

    @field_validator("query")
    @classmethod
    def _query_not_blank(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("query는 빈 문자열일 수 없습니다")
        return v


class StructuredRefs(BaseModel):
    """정형 참조 — event 기준 지자체 위험지구·하천, 재난 유형 판단기준."""

    districts: list[dict] = Field(default_factory=list)
    rivers: list[dict] = Field(default_factory=list)
    criteria: list[dict] = Field(default_factory=list)


class AskResponse(BaseModel):
    """RAG 응답 — citations 없는 자유 생성 없음(no_evidence 플래그로 명시)."""

    rag_answer_id: str
    answer: str
    mode: str  # "claude" | "mock"
    no_evidence: bool = False
    top_k_results: list[SearchResult]
    citations: list[Citation]
    structured_refs: StructuredRefs
    geo_refs: dict  # FeatureCollection (event.admin의 L1~L3 Feature만)


def _new_rag_answer_id() -> str:
    """RAG-{UTC타임스탬프}-{uuid8} — 호출마다 유일."""
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    return f"RAG-{ts}-{uuid.uuid4().hex[:8]}"


def _structured_refs(event: Event) -> StructuredRefs:
    """코퍼스 접근자 조회 — admin_code로 지구·하천, hazard 코드로 판단기준."""
    districts: list[dict] = []
    rivers: list[dict] = []
    if event.admin_code:
        districts = [
            d
            for d in corpus.get_districts().get("districts", [])
            if d.get("admin_code") == event.admin_code
        ]
        rivers = [
            r
            for r in corpus.get_rivers().get("rivers", [])
            if r.get("admin_code") == event.admin_code
        ]
    criteria = [
        c
        for c in corpus.get_criteria().get("criteria", [])
        if (event.hazard_code and c.get("hazard_code") == event.hazard_code)
        or (event.hazard_event_code and c.get("event_code") == event.hazard_event_code)
    ]
    return StructuredRefs(districts=districts, rivers=rivers, criteria=criteria)


def _geo_refs(event: Event) -> dict:
    """event.admin의 L1~L3 Feature만 필터한 FeatureCollection."""
    features: list[dict] = []
    if event.admin_code:
        features = [
            f
            for f in corpus.get_geo().get("features", [])
            if (f.get("properties") or {}).get("admin_code") == event.admin_code
            and (f.get("properties") or {}).get("layer") in _GEO_LAYERS
        ]
    return {"type": "FeatureCollection", "features": features}


@router.post("/ask", response_model=AskResponse)
def post_ask(req: AskRequest) -> AskResponse:
    results = retrieval.search(req.event, req.query, req.top_k)
    generated = llm.generate_answer(req.event, req.query, results)
    return AskResponse(
        rag_answer_id=_new_rag_answer_id(),
        answer=generated["answer"],
        mode=generated["mode"],
        no_evidence=generated.get("no_evidence", False),
        top_k_results=results,
        citations=generated["citations"],
        structured_refs=_structured_refs(req.event),
        geo_refs=_geo_refs(req.event),
    )
