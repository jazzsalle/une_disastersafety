"""POST /api/search — BM25+메타 필터 검색 계약 테스트 (완료 기준 1~5)."""
from __future__ import annotations

import inspect

from schemas.common import Event, SearchResult
from services import retrieval


def _post(client, body):
    return client.post("/api/search", json=body)


# ── 1. 응답 스키마 ──
def test_response_schema(client):
    res = _post(
        client,
        {
            "event": {"hazard_code": "T10107", "admin_code": "41430", "keywords": ["침수"]},
            "query": "호우 침수 피해",
        },
    )
    assert res.status_code == 200
    body = res.json()
    assert "results" in body and "filter_relaxed" in body
    assert 0 < len(body["results"]) <= 5  # top_k 기본 5
    for r in body["results"]:
        # passage: 식별·출처·발췌 필드
        p = r["passage"]
        for key in ("passage_id", "doc_title", "chapter", "section", "page_start", "page_end", "content"):
            assert key in p, f"passage.{key} 누락"
        assert "page_label_start" in p and "page_label_end" in p
        # content는 발췌(전문 미반환) — 300자 + 말줄임 허용
        assert len(p["content"]) <= 310
        assert "tables" not in p
        # score·similarity_factors·source
        assert isinstance(r["score"], (int, float)) and r["score"] > 0
        assert set(r["similarity_factors"]) == {"type", "time", "space", "damage"}
        assert all(0.0 <= v <= 1.0 for v in r["similarity_factors"].values())
        for key in ("source_asset_id", "doc_title", "page"):
            assert key in r["source"], f"source.{key} 누락"


# ── 2. admin 하드 필터 + 완화 ──
def test_admin_hard_filter(client):
    res = _post(client, {"event": {"admin_code": "41430"}, "query": "침수 피해", "top_k": 10})
    body = res.json()
    assert body["results"], "의왕(41430) 코퍼스에서 결과가 있어야 함"
    assert all(r["passage"]["admin_code"] == "41430" for r in body["results"])
    assert body["filter_relaxed"] is False


def test_admin_filter_relaxed_when_no_match(client):
    # 코퍼스에 없는 행정코드 → 전체 코퍼스로 완화 + filter_relaxed 표시
    res = _post(client, {"event": {"admin_code": "99999"}, "query": "침수 피해"})
    body = res.json()
    assert body["filter_relaxed"] is True
    assert body["results"], "완화 후 전체 코퍼스에서 결과가 있어야 함"
    assert all(r["passage"]["admin_code"] != "99999" for r in body["results"])


# ── 3. hazard 부스트(일치 청크 우선) ──
def test_hazard_boost_prefers_matching_chunks(client):
    res = _post(
        client,
        {
            "event": {"hazard_code": "T10401", "admin_code": "47190"},
            "query": "산사태 급경사지 붕괴",
        },
    )
    results = res.json()["results"]
    assert results
    # top1은 hazard 일치 청크(type=1.0)여야 한다
    assert results[0]["similarity_factors"]["type"] == 1.0
    # 정렬 검증: 일치 청크(부스트)가 비일치 청크보다 앞서는 점수 내림차순
    scores = [r["score"] for r in results]
    assert scores == sorted(scores, reverse=True)


# ── 4. top_k 준수·빈 query 422 ──
def test_top_k_respected(client):
    res = _post(client, {"event": {}, "query": "하천 정비", "top_k": 3})
    assert res.status_code == 200
    assert len(res.json()["results"]) <= 3


def test_empty_query_422(client):
    assert _post(client, {"event": {}, "query": ""}).status_code == 422
    assert _post(client, {"event": {}, "query": "   "}).status_code == 422


# ── 5. 어댑터 시그니처 고정(T3Q 교체 대비) ──
def test_adapter_signature_fixed():
    sig = inspect.signature(retrieval.search)
    assert list(sig.parameters) == ["event", "query", "top_k"]
    assert sig.parameters["top_k"].default == 5


# ── 폴백 토크나이저 품질: 대표 질의가 관련 청크를 상위 반환 ──
def test_fallback_tokenizer_quality_inundation():
    results = retrieval.search(Event(), "침수", top_k=3)
    assert results
    assert isinstance(results[0], SearchResult)
    top1 = results[0].passage
    assert "침수" in (top1.get("content") or "") or "침수" in (top1.get("section") or "")


def test_fallback_tokenizer_quality_design_flood():
    results = retrieval.search(Event(admin_code="45190"), "계획홍수량", top_k=3)
    assert results
    top1 = results[0].passage
    assert top1["admin_code"] == "45190"
    assert "계획홍수량" in (top1.get("content") or "") or "홍수량" in (top1.get("section") or "")


# ── 유사도 요인 산정 ──
def test_similarity_factors_semantics():
    results = retrieval.search(
        Event(hazard_code="T10107", admin_code="41430", keywords=["침수"]),
        "호우 침수 피해",
        top_k=5,
    )
    assert results
    f = results[0].similarity_factors
    assert f["space"] == 1.0  # admin 하드 필터 통과 → 공간 일치
    assert f["time"] == 0.5  # 시간 축은 중립 고정(문서에 시점 정보 제한)
    assert f["type"] in (0.0, 1.0)
    assert 0.0 <= f["damage"] <= 1.0
