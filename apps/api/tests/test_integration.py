"""T6 통합 스모크 — TestClient로 전 엔드포인트 전수 확인.

외부 서버 호출 금지: autouse 픽스처가 ANTHROPIC_API_KEY(api.anthropic.com)와
UNI_RAG_ACCOUNT(221.147.100.161)를 monkeypatch로 제거해 mock 경로를 고정하고,
방어적으로 UNI_RAG_BASE_URL도 테스트 전용 호스트로 격리한다.
"""
from __future__ import annotations

import re

import pytest

from services import uni_rag

RAG_ID_RE = re.compile(r"^RAG-\d{8}T\d{6}Z-[0-9a-f]{8}$")

EXPECTED_EVENT_CODES = {"HEAVY_RAIN", "FLOOD", "INUNDATION", "TYPHOON", "LANDSLIDE"}
EXPECTED_HAZARD_CODES = {"T10107", "T10206", "T10106", "T10105", "T10401"}
EXPECTED_ADMIN_CODES = {"41430", "47190", "45190"}


@pytest.fixture(autouse=True)
def _no_external_calls(monkeypatch):
    """실외부 서버(api.anthropic.com·221.147.100.161) 호출 차단 — mock 경로 고정."""
    monkeypatch.delenv("ANTHROPIC_API_KEY", raising=False)
    for name in ("UNI_RAG_ACCOUNT", "UNI_RAG_PASSWORD", "UNI_RAG_MODEL_KEY"):
        monkeypatch.delenv(name, raising=False)
    monkeypatch.setenv("UNI_RAG_BASE_URL", "http://uni-rag.invalid")
    uni_rag.reset_client()
    yield
    uni_rag.reset_client()


# ── GET 조회 계열 ─────────────────────────────────────────────────────
def test_health(client):
    res = client.get("/api/health")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "ok"
    corpus_stat = body["corpus"]
    assert corpus_stat["chunks"] > 0
    assert corpus_stat["criteria"] == 5
    assert corpus_stat["districts"] == 29
    assert corpus_stat["rivers"] == 3
    assert corpus_stat["geo_features"] == 35


def test_meta_hazards_5(client):
    res = client.get("/api/meta/hazards")
    assert res.status_code == 200
    items = res.json()
    assert len(items) == 5
    assert {h["event_code"] for h in items} == EXPECTED_EVENT_CODES
    assert {h["hazard_code"] for h in items} == EXPECTED_HAZARD_CODES


def test_meta_regions_3(client):
    res = client.get("/api/meta/regions")
    assert res.status_code == 200
    regions = res.json()
    assert len(regions) == 3
    assert {r["admin_code"] for r in regions} == EXPECTED_ADMIN_CODES


def test_criteria_heavy_rain_values(client):
    res = client.get("/api/criteria/T10107")
    assert res.status_code == 200
    c = res.json()
    assert c["event_code"] == "HEAVY_RAIN"
    conds = c["q1_conditions"]
    assert any(
        q["level"] == "주의보" and q["period"] == "3시간" and q["value"] == 60 and q["unit"] == "mm"
        for q in conds
    ), "호우 주의보 3시간 60mm 조건 누락"
    assert any(
        q["level"] == "경보" and q["period"] == "3시간" and q["value"] == 90 and q["unit"] == "mm"
        for q in conds
    ), "호우 경보 3시간 90mm 조건 누락"


def test_districts_uiwang_17(client):
    res = client.get("/api/districts", params={"admin": "41430"})
    assert res.status_code == 200
    body = res.json()
    assert body["count"] == 17
    assert len(body["districts"]) == 17
    assert all(d["admin_code"] == "41430" for d in body["districts"])


def test_rivers_yocheon_y4(client):
    res = client.get("/api/rivers", params={"admin": "45190"})
    assert res.status_code == 200
    rivers = res.json()["rivers"]
    assert len(rivers) == 1
    yc = rivers[0]
    assert yc["name"] == "요천"
    y4 = next(s for s in yc["stations"] if s["station_code"] == "Y4")
    assert y4["design_flood_m3s"] == 2005
    assert y4["flood_warning"]["advisory_m3s"] == 1003
    assert y4["flood_warning"]["alert_m3s"] == 1404


def test_geo_35_features(client):
    res = client.get("/api/geo")
    assert res.status_code == 200
    body = res.json()
    assert body["type"] == "FeatureCollection"
    assert len(body["features"]) == 35
    for f in body["features"]:
        assert f["type"] == "Feature"
        assert f["properties"]["admin_code"] in EXPECTED_ADMIN_CODES
        assert f["properties"]["layer"] in {"L1", "L2", "L3"}


# ── POST 검색·RAG·챗봇 계열 ───────────────────────────────────────────
def test_search_s1_heavy_rain_uiwang(client):
    """S1 호우/의왕 — 메타 필터 검색 결과 1건 이상 + SearchResult 계약."""
    res = client.post(
        "/api/search",
        json={
            "event": {"hazard_code": "T10107", "admin_code": "41430"},
            "query": "호우 침수 피해 대응",
            "top_k": 5,
        },
    )
    assert res.status_code == 200
    results = res.json()["results"]
    assert len(results) >= 1
    for r in results:
        assert r["passage"]["passage_id"]
        assert r["score"] > 0
        assert r["similarity_factors"]
        assert r["source"]


def test_ask_citations_and_rag_answer_id(client):
    res = client.post(
        "/api/ask",
        json={
            "event": {"hazard_code": "T10107", "admin_code": "41430"},
            "query": "호우 침수 대응",
        },
    )
    assert res.status_code == 200
    body = res.json()
    assert RAG_ID_RE.match(body["rag_answer_id"]), body["rag_answer_id"]
    assert body["mode"] == "mock"  # 키 제거 → 실 Claude 호출 없음
    assert len(body["citations"]) >= 1, "citations 필수 — 근거 없는 답변 금지"
    for c in body["citations"]:
        assert c["passage_id"] and c["doc_title"]
    assert body["geo_refs"]["type"] == "FeatureCollection"


def test_chat_mock_mode_fixed(client):
    """UNI_RAG_ACCOUNT 제거 상태 — mock 경로 고정(외부 호출 없음)."""
    res = client.post("/api/chat", json={"query": "침수 피해 사례"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    body = res.json()
    assert body["mode"] == "mock"
    assert uni_rag.MOCK_NOTICE in body["answer"]


# ── OpenAPI 문서 ──────────────────────────────────────────────────────
def test_openapi_document(client):
    res = client.get("/openapi.json")
    assert res.status_code == 200
    spec = res.json()
    assert spec["info"]["title"] == "재난안전 AI 시범 서비스 API"
    paths = set(spec["paths"])
    expected = {
        "/api/health",
        "/api/meta/hazards",
        "/api/meta/regions",
        "/api/criteria",
        "/api/criteria/{code}",
        "/api/districts",
        "/api/rivers",
        "/api/geo",
        "/api/search",
        "/api/ask",
        "/api/chat",
    }
    missing = expected - paths
    assert not missing, f"OpenAPI 경로 누락: {missing}"
