"""POST /api/cases/search — 유사 재난 사례 검색(사례 단위·전 지자체) 테스트.

핵심 계약: admin_code는 필터가 아니다 — 타 지자체 사례가 후보·결과에 포함되어야
하며(설계 원안 "매칭 사건 리스트"), 모든 사례·피해이력은 원문 근거를 보유한다.
"""
from __future__ import annotations

from services import corpus


def _post(client, body):
    return client.post("/api/cases/search", json=body)


# ── 1. 응답 스키마 ──
def test_response_schema(client):
    res = _post(
        client,
        {"event": {"hazard_code": "T10206", "admin_code": "45190", "keywords": ["침수"]}},
    )
    assert res.status_code == 200
    body = res.json()
    assert "cases" in body and "total_candidates" in body
    assert 0 < len(body["cases"]) <= 5
    for c in body["cases"]:
        for key in (
            "case_id", "district_code", "district_name", "admin_code", "admin_name",
            "disaster_type", "hazard_codes", "risk_factors", "mitigation",
            "damage_events", "score", "similarity_factors", "evidence",
        ):
            assert key in c, f"case.{key} 누락"
        assert set(c["similarity_factors"]) == {"type", "time", "space", "damage"}
        assert all(0.0 <= v <= 1.0 for v in c["similarity_factors"].values())
        # 근거 표기 필수 — 사례 자체의 evidence(관리대장·주요현황)
        assert c["evidence"] and c["evidence"].get("doc_title")


# ── 2. 타 지자체 사례 포함(admin 하드 필터 없음) ──
def test_cross_admin_cases_included(client):
    """남원 홍수 상황 → 의왕·구미의 하천재해 사례가 함께 나와야 한다."""
    res = _post(
        client,
        {"event": {"hazard_code": "T10206", "admin_code": "45190"}, "top_k": 20},
    )
    body = res.json()
    admins = {c["admin_code"] for c in body["cases"]}
    assert "45190" in admins, "동일 지자체 사례 포함"
    assert admins - {"45190"}, "타 지자체 사례가 반드시 포함되어야 함(하드 필터 금지)"


# ── 3. 유형 불일치 배제 ──
def test_hazard_mismatch_excluded(client):
    """산사태(T10401) 상황 → 하천·내수재해 전용 지구는 후보에서 제외."""
    res = _post(client, {"event": {"hazard_code": "T10401"}, "top_k": 20})
    body = res.json()
    assert body["cases"], "산사태 유형 지구(사면재해)가 존재해야 함"
    for c in body["cases"]:
        assert "T10401" in c["hazard_codes"], f"{c['district_name']} 유형 불일치 혼입"
        assert c["similarity_factors"]["type"] == 1.0


# ── 4. 피해이력 보유 사례 우대 + 계절(time) 요인 ──
def test_history_boost_and_time_factor(client):
    """8월 홍수 상황 → 2020-08 집중호우 이력의 남원 요천지구가 최상위권."""
    res = _post(
        client,
        {
            "event": {
                "hazard_code": "T10206",
                "admin_code": "45190",
                "onset": "2026-08-01T09:00:00+09:00",
            },
            "top_k": 5,
        },
    )
    body = res.json()
    top_names = [c["district_name"] for c in body["cases"][:3]]
    assert "요천지구" in top_names, f"이력 보유·계절 일치 지구가 상위여야 함: {top_names}"
    top = next(c for c in body["cases"] if c["district_name"] == "요천지구")
    assert top["similarity_factors"]["time"] == 1.0  # 8월 == 2020-08
    assert top["damage_events"], "요천지구 damage_events 시드 존재"


# ── 5. 피해이력 시드 무결성 — 근거 필수 + passage_id 실재 ──
def test_damage_events_evidence_integrity(client):
    districts = corpus.get_districts().get("districts", [])
    seeded = [d for d in districts if d.get("damage_events")]
    assert len(seeded) >= 5, "피해이력 시드 지구가 있어야 함"
    chunk_ids = {c.get("passage_id") for c in corpus.get_chunks()}
    for d in seeded:
        for ev in d["damage_events"]:
            assert ev.get("occurred") and ev.get("event_name") and ev.get("description")
            evd = ev.get("evidence") or {}
            assert evd.get("doc_title") and evd.get("page") is not None, (
                f"{d['district_name']} 피해이력 근거 누락"
            )
            pid = evd.get("passage_id")
            if pid and chunk_ids:
                assert pid in chunk_ids, f"코퍼스에 없는 passage_id: {pid}"


# ── 6. hazard 미지정 — 전건 중립 후보 ──
def test_no_hazard_neutral(client):
    res = _post(client, {"event": {}, "top_k": 20})
    body = res.json()
    assert body["total_candidates"] == len(corpus.get_districts().get("districts", []))
    for c in body["cases"]:
        assert c["similarity_factors"]["type"] == 0.5


# ── 7. 검색범위(scope) — 보완사항 반영 ──
def test_scope_default_local_first(client):
    """기본 scope=local_first — 전국 후보 + 관내 우선 노출(상위에 관내 사례)."""
    res = _post(client, {"event": {"hazard_code": "T10206", "admin_code": "45190"}})
    body = res.json()
    assert body["scope"] == "local_first"
    assert body["cases"][0]["admin_code"] == "45190", "관내 사례가 최상위여야 함"
    assert body["cases"][0]["region_relation"] == "관내"


def test_scope_local_only(client):
    res = _post(
        client,
        {"event": {"hazard_code": "T10206", "admin_code": "45190"}, "scope": "local", "top_k": 20},
    )
    body = res.json()
    assert body["cases"], "관내 사례 존재"
    assert all(c["admin_code"] == "45190" for c in body["cases"])


def test_scope_invalid_rejected(client):
    res = _post(client, {"event": {}, "scope": "galaxy"})
    assert res.status_code == 422


def test_region_relation_badge(client):
    """전국 범위에서 타 지자체 사례는 '타 지역' 배지."""
    res = _post(
        client,
        {"event": {"hazard_code": "T10206", "admin_code": "45190"}, "scope": "national", "top_k": 20},
    )
    body = res.json()
    relations = {c["region_relation"] for c in body["cases"]}
    assert "관내" in relations and "타 지역" in relations
    for c in body["cases"]:
        if c["admin_code"] == "45190":
            assert c["region_relation"] == "관내"
        else:
            assert c["region_relation"] in ("동일 유역", "타 지역")
