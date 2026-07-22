"""재난판단기준 조회 라우터 — criteria.json 5종.

- GET /api/criteria          : 루트 dict 전체(criteria 5종 + source_registry)
- GET /api/criteria/{code}   : 단건 — hazard_code(T10107) 또는 event_code(HEAVY_RAIN) 허용, 미존재 404
"""
from __future__ import annotations

from fastapi import APIRouter, HTTPException

from services import corpus

router = APIRouter(prefix="/criteria", tags=["criteria"])


@router.get("")
def list_criteria() -> dict:
    """재난판단기준 루트 dict 전체(원본 구조 보존)."""
    return corpus.get_criteria()


@router.get("/{code}")
def get_criterion(code: str) -> dict:
    """판단기준 단건 조회 — hazard_code(T10107)·event_code(HEAVY_RAIN) 모두 허용."""
    key = code.strip().upper()
    for c in corpus.get_criteria().get("criteria", []):
        if key in (c.get("hazard_code", "").upper(), c.get("event_code", "").upper()):
            return c
    raise HTTPException(status_code=404, detail=f"판단기준 없음: {code}")
