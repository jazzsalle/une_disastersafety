"""POST /api/cases/search — 유사 재난 사례 검색 라우터(사례 단위, 전 지자체).

사례 로직은 services/cases.search_cases(고정 어댑터 시그니처)만 호출한다 —
향후 T3Q 재난 사례 API로 교체해도 이 라우터와 프론트 계약은 불변.
기존 POST /api/search(문서 청크 검색)와 별개 모듈 — ask/search 계약 무변경.
"""
from __future__ import annotations

import logging

from fastapi import APIRouter
from pydantic import BaseModel, Field, field_validator

from schemas.common import Event
from services import cases

logger = logging.getLogger("disaster.api")

router = APIRouter(tags=["cases"])


class CasesRequest(BaseModel):
    """사례 검색 요청 — {event, top_k, scope(검색범위)}.

    scope: local_first(기본 — 전국 검색+관내 우선) | local(관내) |
           basin(동일 유역) | national(전국·지역 가중 없음)
    """

    event: Event = Field(default_factory=Event)
    top_k: int = Field(default=5, ge=1, le=20)
    scope: str = Field(default="local_first")

    @field_validator("scope")
    @classmethod
    def _scope_valid(cls, v: str) -> str:
        if v not in cases.VALID_SCOPES:
            raise ValueError(f"scope는 {cases.VALID_SCOPES} 중 하나여야 합니다")
        return v


class CasesResponse(BaseModel):
    """사례 검색 응답 — cases(region_relation 배지 포함), total_candidates, scope."""

    cases: list[dict]
    total_candidates: int
    scope: str


@router.post("/cases/search", response_model=CasesResponse)
def post_cases_search(req: CasesRequest) -> CasesResponse:
    result = cases.search_cases(req.event, req.top_k, req.scope)
    # 요청 단위 로그 — 서비스 검증 체크리스트 ⑧(비밀값 미포함)
    logger.info(
        "cases results=%d candidates=%d scope=%s admin_code=%s hazard_code=%s",
        len(result["cases"]),
        result["total_candidates"],
        result["scope"],
        req.event.admin_code,
        req.event.hazard_code,
    )
    return CasesResponse(**result)
