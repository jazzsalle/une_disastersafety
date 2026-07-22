"""POST /api/search — 유사사례 검색 라우터.

검색 로직은 services/retrieval.search(고정 어댑터 시그니처)만 호출한다 —
향후 T3Q RAG API로 교체해도 이 라우터와 프론트 계약은 불변.
"""
from __future__ import annotations

from fastapi import APIRouter
from pydantic import BaseModel, Field, field_validator

from schemas.common import Event, SearchResult
from services import retrieval

router = APIRouter(tags=["search"])


class SearchRequest(BaseModel):
    """검색 요청 — {event: 상황(부분 입력 허용), query: 질의문, top_k: 결과 수}."""

    event: Event = Field(default_factory=Event)
    query: str
    top_k: int = Field(default=5, ge=1, le=20)

    @field_validator("query")
    @classmethod
    def _query_not_blank(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("query는 빈 문자열일 수 없습니다")
        return v


class SearchResponse(BaseModel):
    """검색 응답 — filter_relaxed: admin 하드 필터 완화(전체 코퍼스 재검색) 여부."""

    results: list[SearchResult]
    filter_relaxed: bool = False


@router.post("/search", response_model=SearchResponse)
def post_search(req: SearchRequest) -> SearchResponse:
    results = retrieval.search(req.event, req.query, req.top_k)
    # 필터 완화 판별: admin 하드 필터가 적용됐다면 결과 전건이 해당 admin_code다.
    # 완화된 경우 일치 청크는 결합 점수 구조상(BM25 곱연산 부스트) 포함될 수 없으므로,
    # "요청 admin_code와 일치하는 결과가 하나도 없음"이 완화 여부와 동치다.
    relaxed = bool(
        req.event.admin_code
        and results
        and all(r.passage.get("admin_code") != req.event.admin_code for r in results)
    )
    return SearchResponse(results=results, filter_relaxed=relaxed)
