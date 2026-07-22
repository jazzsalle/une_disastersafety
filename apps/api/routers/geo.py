"""지도 GeoJSON 조회 라우터 — geo.json FeatureCollection 35 Feature(L1 29·L2 3·L3 3).

- GET /api/geo?admin=&layer= : 유효 FeatureCollection 유지, features만 서버 필터
  - admin : 행정코드(properties.admin_code)
  - layer : 레이어(properties.layer — L1 위험지구점·L2 하천선·L3 경계)
"""
from __future__ import annotations

from fastapi import APIRouter, Query

from services import corpus

router = APIRouter(prefix="/geo", tags=["geo"])


@router.get("")
def get_geo(
    admin: str | None = Query(default=None, description="행정코드(properties.admin_code)"),
    layer: str | None = Query(default=None, description="레이어(properties.layer — L1~L4)"),
) -> dict:
    """GeoJSON FeatureCollection — admin·layer 필터 후에도 유효한 FeatureCollection 구조 유지."""
    root = corpus.get_geo()
    features = root.get("features", [])

    if admin:
        features = [f for f in features if f.get("properties", {}).get("admin_code") == admin]
    if layer:
        code = layer.strip().upper()
        features = [f for f in features if f.get("properties", {}).get("layer") == code]

    # 캐시된 원본 dict를 변경하지 않도록 얕은 복사 후 필터 결과로 교체
    body = {k: v for k, v in root.items() if k != "features"}
    body["features"] = features
    return body
