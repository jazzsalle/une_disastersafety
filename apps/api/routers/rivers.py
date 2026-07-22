"""하천 조회 라우터 — rivers.json 3건(요천·구미천·안양천)·산정지점·특보 기준유량.

- GET /api/rivers?admin= : 루트 구조 보존(warning_flow_rule 포함), rivers만 서버 필터
  - admin : 행정코드(admin_code — 45190=요천, 47190=구미천, 41430=안양천)
"""
from __future__ import annotations

from fastapi import APIRouter, Query

from services import corpus

router = APIRouter(prefix="/rivers", tags=["rivers"])


@router.get("")
def list_rivers(
    admin: str | None = Query(default=None, description="행정코드(admin_code)"),
) -> dict:
    """하천 목록 — 산정지점(stations)·홍수특보 기준유량(flood_warning) 포함, 원본 구조 보존."""
    root = corpus.get_rivers()
    items = root.get("rivers", [])

    if admin:
        items = [r for r in items if r.get("admin_code") == admin]

    # 캐시된 원본 dict를 변경하지 않도록 얕은 복사 후 필터 결과로 교체
    body = {k: v for k, v in root.items() if k != "rivers"}
    body["count"] = len(items)
    body["rivers"] = items
    return body
