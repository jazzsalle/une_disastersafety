"""POST /api/cases/search — 유사 재난 사례 검색 라우터(사례 단위, 전 지자체).

사례 로직은 services/cases.search_cases(고정 어댑터 시그니처)만 호출한다 —
향후 T3Q 재난 사례 API로 교체해도 이 라우터와 프론트 계약은 불변.
기존 POST /api/search(문서 청크 검색)와 별개 모듈 — ask/search 계약 무변경.
"""
from __future__ import annotations

import logging

from fastapi import APIRouter
from pydantic import BaseModel, Field

from schemas.common import Event
from services import cases

logger = logging.getLogger("disaster.api")

router = APIRouter(tags=["cases"])


class CasesRequest(BaseModel):
    """사례 검색 요청 — {event: 상황(부분 입력 허용), top_k: 결과 수}."""

    event: Event = Field(default_factory=Event)
    top_k: int = Field(default=5, ge=1, le=20)


class CasesResponse(BaseModel):
    """사례 검색 응답 — cases: 사례 카드 목록, total_candidates: 유형 일치 후보 수."""

    cases: list[dict]
    total_candidates: int


@router.post("/cases/search", response_model=CasesResponse)
def post_cases_search(req: CasesRequest) -> CasesResponse:
    result = cases.search_cases(req.event, req.top_k)
    # 요청 단위 로그 — 서비스 검증 체크리스트 ⑧(비밀값 미포함)
    logger.info(
        "cases results=%d candidates=%d admin_code=%s hazard_code=%s",
        len(result["cases"]),
        result["total_candidates"],
        req.event.admin_code,
        req.event.hazard_code,
    )
    return CasesResponse(**result)
