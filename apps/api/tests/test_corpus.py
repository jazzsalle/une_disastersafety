"""T1 공통 기반 검증 — 코퍼스 로더·앱 기동·CORS."""
from __future__ import annotations

from schemas import Citation, Event, SearchResult
from services import corpus

EXPECTED_EVENT_CODES = {"HEAVY_RAIN", "FLOOD", "INUNDATION", "TYPHOON", "LANDSLIDE"}
EXPECTED_HAZARD_CODES = {"T10107", "T10206", "T10106", "T10105", "T10401"}


# ── 코퍼스 로더 ──────────────────────────────────────────────


def test_chunks_loaded():
    chunks = corpus.get_chunks()
    assert len(chunks) == 3974
    first = chunks[0]
    for key in (
        "passage_id",
        "evidence_unit_id",
        "source_asset_id",
        "doc_title",
        "admin_code",
        "hazard_codes",
        "chapter",
        "page_start",
        "page_end",
        "content",
    ):
        assert key in first, f"청크 필수 필드 누락: {key}"
    # plan_version은 안양천 105건만 보유(Optional)
    plan_versioned = [c for c in chunks if c.get("plan_version")]
    assert len(plan_versioned) == 105


def test_chunks_cached_singleton():
    assert corpus.get_chunks() is corpus.get_chunks()


def test_criteria_loaded():
    data = corpus.get_criteria()
    assert "criteria" in data
    items = data["criteria"]
    assert len(items) == 5
    assert {c["event_code"] for c in items} == EXPECTED_EVENT_CODES
    assert {c["hazard_code"] for c in items} == EXPECTED_HAZARD_CODES
    for c in items:
        assert isinstance(c["q1_conditions"], list)
        assert isinstance(c["q2_grades"], list)


def test_districts_loaded():
    data = corpus.get_districts()
    assert len(data["districts"]) == 29
    assert data["counts"]["total"] == 29


def test_rivers_loaded():
    data = corpus.get_rivers()
    rivers = data["rivers"]
    assert len(rivers) == 3
    assert {r["river_id"] for r in rivers} == {"RIV-YC", "RIV-GMC", "RIV-AYC"}
    assert "warning_flow_rule" in data


def test_geo_loaded():
    geo = corpus.get_geo()
    assert geo["type"] == "FeatureCollection"
    assert len(geo["features"]) == 35
    counts = geo["metadata"]["layer_counts"]
    assert counts["L1"] == 29
    assert counts["L2"] == 3
    assert counts["L3"] == 3


# ── 앱 기동·health·CORS ─────────────────────────────────────


def test_health(client):
    res = client.get("/api/health")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "ok"
    assert body["corpus"]["chunks"] == 3974
    assert body["corpus"]["criteria"] == 5
    assert body["corpus"]["districts"] == 29
    assert body["corpus"]["rivers"] == 3
    assert body["corpus"]["geo_features"] == 35


def test_cors_allows_frontend_origin(client):
    res = client.get("/api/health", headers={"Origin": "http://localhost:5173"})
    assert res.status_code == 200
    assert res.headers.get("access-control-allow-origin") == "http://localhost:5173"


# ── 공통 스키마 계약 ─────────────────────────────────────────


def test_event_schema_contract():
    # 전체 필드
    ev = Event(
        event_id="HEAVY_RAIN-20260723-41430-0001",
        hazard_code="T10107",
        hazard_event_code="HEAVY_RAIN",
        admin_code="41430",
        alert_kind="특보",
        alert_level="경보",
        onset="2026-07-23T14:00+09:00",
        keywords=["침수", "지하차도"],
        note="3시간 90mm 예상",
    )
    assert ev.hazard_code == "T10107"
    # 부분 입력 허용(대부분 Optional)
    empty = Event()
    assert empty.keywords == []
    assert empty.event_id is None


def test_citation_schema_contract():
    c = Citation(
        passage_id="P-0001",
        doc_title="의왕시 자연재해저감종합계획",
        chapter="제3장",
        page_start=412,
        page_end=415,
        quote="…",
    )
    assert c.passage_id == "P-0001"
    # chapter·페이지·quote는 Optional
    assert Citation(passage_id="P-0002", doc_title="문서").chapter is None


def test_search_result_schema_contract():
    chunk = corpus.get_chunks()[0]
    r = SearchResult(
        passage=chunk,
        score=12.3,
        similarity_factors={"type": 0.4, "space": 0.3},
        source={"doc_title": chunk["doc_title"]},
    )
    assert r.score == 12.3
    assert r.similarity_factors["type"] == 0.4
    # similarity_factors·source는 기본값 {}
    assert SearchResult(passage={}, score=0.0).similarity_factors == {}
