"""위험지구 조회 라우터 — districts.json 29건(의왕 17·구미 6·남원 6).

- GET /api/districts?admin=&hazard=&kind= : 루트 구조 보존, districts만 서버 필터
  - admin  : 행정코드(admin_code — 41430·47190·45190)
  - hazard : 재난 hazard 코드(hazard_codes 포함 여부 — 예: T10401)
  - kind   : 재해 유형(disaster_type 일치 — 예: 하천재해·내수재해·사면재해)
"""
from __future__ import annotations

from fastapi import APIRouter, Query

from services import corpus

router = APIRouter(prefix="/districts", tags=["districts"])


@router.get("")
def list_districts(
    admin: str | None = Query(default=None, description="행정코드(admin_code)"),
    hazard: str | None = Query(default=None, description="재난 hazard 코드(hazard_codes 포함)"),
    kind: str | None = Query(default=None, description="재해 유형(disaster_type 일치)"),
) -> dict:
    """위험지구 목록 — 필터 조합(admin·hazard·kind) 지원, 원본 JSON 구조 보존."""
    root = corpus.get_districts()
    items = root.get("districts", [])

    if admin:
        items = [d for d in items if d.get("admin_code") == admin]
    if hazard:
        code = hazard.strip().upper()
        items = [d for d in items if code in (d.get("hazard_codes") or [])]
    if kind:
        items = [d for d in items if d.get("disaster_type") == kind]

    # 캐시된 원본 dict를 변경하지 않도록 얕은 복사 후 필터 결과로 교체
    body = {k: v for k, v in root.items() if k != "districts"}
    body["count"] = len(items)
    body["districts"] = items
    return body
