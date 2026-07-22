"""T2 조회 라우터 5종 검증 — meta·criteria·districts·rivers·geo."""
from __future__ import annotations

EXPECTED_EVENT_CODES = {"HEAVY_RAIN", "FLOOD", "INUNDATION", "TYPHOON", "LANDSLIDE"}
EXPECTED_HAZARD_CODES = {"T10107", "T10206", "T10106", "T10105", "T10401"}


# ── /api/meta ────────────────────────────────────────────────


def test_meta_hazards(client):
    res = client.get("/api/meta/hazards")
    assert res.status_code == 200
    items = res.json()
    assert len(items) == 5
    assert {h["event_code"] for h in items} == EXPECTED_EVENT_CODES
    assert {h["hazard_code"] for h in items} == EXPECTED_HAZARD_CODES
    for h in items:
        assert h["name_ko"]
        assert h["judgment_subject"]


def test_meta_regions(client):
    res = client.get("/api/meta/regions")
    assert res.status_code == 200
    regions = {r["admin_code"]: r for r in res.json()}
    assert set(regions) == {"41430", "47190", "45190"}

    uw = regions["41430"]
    assert set(uw["source_asset_ids"]) == {"SRC-UW-JGP-2022", "SRC-AYC-RVP-2020"}
    assert uw["river_name"] == "안양천"
    assert "의왕" in uw["admin_name"]

    gm = regions["47190"]
    assert set(gm["source_asset_ids"]) == {"SRC-GM-JGP-2021", "SRC-GMC-RVP-2025"}
    assert gm["river_name"] == "구미천"
    assert "구미" in gm["admin_name"]

    nw = regions["45190"]
    assert set(nw["source_asset_ids"]) == {"SRC-NW-JGP-2022", "SRC-YC-RVP-2021"}
    assert nw["river_name"] == "요천"
    # 남원은 전라북도(45190) — 폴더명 "전라남도"는 오기
    assert "전라북도 남원시" == nw["admin_name"]


# ── /api/criteria ────────────────────────────────────────────


def test_criteria_root(client):
    res = client.get("/api/criteria")
    assert res.status_code == 200
    body = res.json()
    assert body["dataset"] == "criteria"
    assert len(body["criteria"]) == 5


def test_criteria_by_hazard_code(client):
    res = client.get("/api/criteria/T10107")
    assert res.status_code == 200
    c = res.json()
    assert c["event_code"] == "HEAVY_RAIN"
    assert c["name_ko"] == "호우"
    conds = c["q1_conditions"]
    # 주의보 3시간 60mm
    assert any(
        q["level"] == "주의보" and q["period"] == "3시간" and q["value"] == 60 and q["unit"] == "mm"
        for q in conds
    )
    # 경보 3시간 90mm
    assert any(
        q["level"] == "경보" and q["period"] == "3시간" and q["value"] == 90 and q["unit"] == "mm"
        for q in conds
    )


def test_criteria_by_event_code(client):
    res = client.get("/api/criteria/HEAVY_RAIN")
    assert res.status_code == 200
    assert res.json()["hazard_code"] == "T10107"
    # 대소문자 무관 허용
    res2 = client.get("/api/criteria/landslide")
    assert res2.status_code == 200
    assert res2.json()["hazard_code"] == "T10401"


def test_criteria_not_found(client):
    assert client.get("/api/criteria/T99999").status_code == 404


# ── /api/districts ───────────────────────────────────────────


def test_districts_all(client):
    res = client.get("/api/districts")
    assert res.status_code == 200
    body = res.json()
    assert body["count"] == 29
    assert len(body["districts"]) == 29


def test_districts_by_admin(client):
    res = client.get("/api/districts", params={"admin": "41430"})
    assert res.status_code == 200
    body = res.json()
    assert body["count"] == 17
    assert len(body["districts"]) == 17
    assert all(d["admin_code"] == "41430" for d in body["districts"])


def test_districts_by_hazard(client):
    res = client.get("/api/districts", params={"hazard": "T10401"})
    assert res.status_code == 200
    items = res.json()["districts"]
    assert len(items) > 0
    assert all("T10401" in d["hazard_codes"] for d in items)


def test_districts_by_kind(client):
    res = client.get("/api/districts", params={"kind": "하천재해"})
    assert res.status_code == 200
    items = res.json()["districts"]
    assert len(items) > 0
    assert all(d["disaster_type"] == "하천재해" for d in items)


def test_districts_filter_combination(client):
    # 의왕(41430)의 T10401 지구 3건은 전건 토사재해
    res = client.get(
        "/api/districts", params={"admin": "41430", "hazard": "T10401", "kind": "토사재해"}
    )
    assert res.status_code == 200
    items = res.json()["districts"]
    assert len(items) == 3
    for d in items:
        assert d["admin_code"] == "41430"
        assert "T10401" in d["hazard_codes"]
        assert d["disaster_type"] == "토사재해"
    # 불일치 조합은 0건
    empty = client.get(
        "/api/districts", params={"admin": "41430", "hazard": "T10401", "kind": "하천재해"}
    )
    assert empty.json()["count"] == 0


# ── /api/rivers ──────────────────────────────────────────────


def _station(river: dict, code: str) -> dict:
    return next(s for s in river["stations"] if s["station_code"] == code)


def test_rivers_all(client):
    res = client.get("/api/rivers")
    assert res.status_code == 200
    body = res.json()
    assert "warning_flow_rule" in body
    assert {r["river_id"] for r in body["rivers"]} == {"RIV-YC", "RIV-GMC", "RIV-AYC"}


def test_rivers_namwon_yocheon(client):
    res = client.get("/api/rivers", params={"admin": "45190"})
    assert res.status_code == 200
    rivers = res.json()["rivers"]
    assert len(rivers) == 1
    yc = rivers[0]
    assert yc["river_id"] == "RIV-YC"
    assert yc["name"] == "요천"
    y4 = _station(yc, "Y4")
    assert y4["design_flood_m3s"] == 2005
    assert y4["flood_warning"]["advisory_m3s"] == 1003
    assert y4["flood_warning"]["alert_m3s"] == 1404


def test_rivers_gumi_gumicheon(client):
    res = client.get("/api/rivers", params={"admin": "47190"})
    assert res.status_code == 200
    rivers = res.json()["rivers"]
    assert len(rivers) == 1
    gmc = rivers[0]
    assert gmc["river_id"] == "RIV-GMC"
    assert gmc["name"] == "구미천"
    gm00 = _station(gmc, "GM00")
    assert gm00["design_flood_m3s"] == 390
    assert gm00["flood_warning"]["advisory_m3s"] == 195
    assert gm00["flood_warning"]["alert_m3s"] == 273


def test_rivers_uiwang_anyangcheon_plan_versions(client):
    res = client.get("/api/rivers", params={"admin": "41430"})
    assert res.status_code == 200
    rivers = res.json()["rivers"]
    assert len(rivers) == 1
    ayc = rivers[0]
    assert ayc["river_id"] == "RIV-AYC"
    assert ayc["name"] == "안양천"
    ay09 = _station(ayc, "AY09")
    floods = {f["plan_version"]: f for f in ay09["design_floods"]}
    # 금회-2020 채택 315㎥/s → 주의보 157.5 / 경보 220.5
    assert floods["금회-2020"]["design_flood_m3s"] == 315
    assert floods["금회-2020"].get("adopted") is True
    assert ay09["flood_warning"]["advisory_m3s"] == 157.5
    assert ay09["flood_warning"]["alert_m3s"] == 220.5
    assert ay09["flood_warning"]["basis_plan_version"] == "금회-2020"
    # 기수립-2015 270㎥/s 구분 존재
    assert floods["기수립-2015"]["design_flood_m3s"] == 270


# ── /api/geo ─────────────────────────────────────────────────


def test_geo_all(client):
    res = client.get("/api/geo")
    assert res.status_code == 200
    body = res.json()
    assert body["type"] == "FeatureCollection"
    assert len(body["features"]) == 35


def test_geo_filtered(client):
    res = client.get("/api/geo", params={"admin": "41430", "layer": "L1"})
    assert res.status_code == 200
    body = res.json()
    # 필터 후에도 유효한 FeatureCollection 구조
    assert body["type"] == "FeatureCollection"
    features = body["features"]
    assert len(features) == 17
    for f in features:
        assert f["type"] == "Feature"
        assert f["properties"]["admin_code"] == "41430"
        assert f["properties"]["layer"] == "L1"
        assert f["geometry"] is not None


def test_geo_layer_only(client):
    res = client.get("/api/geo", params={"layer": "L3"})
    assert res.status_code == 200
    features = res.json()["features"]
    assert len(features) == 3
    assert {f["properties"]["admin_code"] for f in features} == {"41430", "47190", "45190"}
