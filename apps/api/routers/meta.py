"""메타 조회 라우터 — 대상 재난 5종·지자체 3곳.

- GET /api/meta/hazards : 재난 5종(criteria.json 기반 — name_ko·event_code·hazard_code·judgment_subject)
- GET /api/meta/regions : 지자체 3곳(백엔드 상수 — 보유 문서 source_asset_id·하천명 매핑)
"""
from __future__ import annotations

from fastapi import APIRouter

from services import corpus

router = APIRouter(prefix="/meta", tags=["meta"])

# 1차 POC 지자체 3곳 — 보유 문서(저감계획+하천기본계획)·대표 하천 매핑 상수
REGIONS: list[dict] = [
    {
        "admin_code": "41430",
        "admin_name": "경기도 의왕시",
        "short_name": "의왕",
        "source_asset_ids": ["SRC-UW-JGP-2022", "SRC-AYC-RVP-2020"],
        "river_id": "RIV-AYC",
        "river_name": "안양천",
    },
    {
        "admin_code": "47190",
        "admin_name": "경상북도 구미시",
        "short_name": "구미",
        "source_asset_ids": ["SRC-GM-JGP-2021", "SRC-GMC-RVP-2025"],
        "river_id": "RIV-GMC",
        "river_name": "구미천",
    },
    {
        "admin_code": "45190",
        "admin_name": "전라북도 남원시",
        "short_name": "남원",
        "source_asset_ids": ["SRC-NW-JGP-2022", "SRC-YC-RVP-2021"],
        "river_id": "RIV-YC",
        "river_name": "요천",
    },
]


@router.get("/hazards")
def list_hazards() -> list[dict]:
    """대상 재난 5종 — 호우·홍수·수해/침수·태풍·산사태 (criteria.json 시드 기준)."""
    return [
        {
            "name_ko": c["name_ko"],
            "event_code": c["event_code"],
            "hazard_code": c["hazard_code"],
            "judgment_subject": c["judgment_subject"],
            "judgment_concept": c.get("judgment_concept"),
        }
        for c in corpus.get_criteria().get("criteria", [])
    ]


@router.get("/regions")
def list_regions() -> list[dict]:
    """1차 POC 지자체 3곳 — 보유 문서 source_asset_id 목록·대표 하천 매핑."""
    return REGIONS
