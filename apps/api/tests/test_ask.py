"""POST /api/ask — 근거 기반 RAG 응답 계약 테스트 (완료 기준 1~6).

모든 테스트는 monkeypatch로 ANTHROPIC_API_KEY를 제거해 mock 경로를 강제한다
(.env에 키가 있어도 실 API 호출 없음). Claude 경로는 _call_claude를
monkeypatch한 가짜 구현으로만 검증한다.
"""
from __future__ import annotations

import inspect
import re

import pytest

from services import llm

RAG_ID_RE = re.compile(r"^RAG-\d{8}T\d{6}Z-[0-9a-f]{8}$")

# 데모 시나리오 3종 (S1 호우/의왕, S2 홍수/남원, S3 산사태/구미)
SCENARIOS = [
    ("호우 침수 대응", "T10107", "41430"),
    ("계획홍수량 초과", "T10206", "45190"),
    ("산사태 위험", "T10401", "47190"),
]


@pytest.fixture(autouse=True)
def force_mock(monkeypatch):
    """mock 경로 강제 — 테스트에서 실 Claude API 호출 금지."""
    monkeypatch.delenv("ANTHROPIC_API_KEY", raising=False)


def _post(client, query, hazard_code=None, admin_code=None, **extra):
    body = {"event": {"hazard_code": hazard_code, "admin_code": admin_code}, "query": query}
    body.update(extra)
    return client.post("/api/ask", json=body)


# ── 1. 응답 스키마 ──
def test_response_schema(client):
    res = _post(client, "호우 침수 대응", "T10107", "41430")
    assert res.status_code == 200
    body = res.json()

    # rag_answer_id 형식
    assert RAG_ID_RE.match(body["rag_answer_id"]), body["rag_answer_id"]
    # answer·mode (키 제거 상태 → mock)
    assert isinstance(body["answer"], str) and body["answer"].strip()
    assert body["mode"] == "mock"
    assert body["no_evidence"] is False

    # top_k_results: SearchResult 구조(score·similarity_factors 포함)
    assert 0 < len(body["top_k_results"]) <= 5
    for r in body["top_k_results"]:
        assert "passage" in r and "passage_id" in r["passage"]
        assert isinstance(r["score"], (int, float)) and r["score"] > 0
        assert set(r["similarity_factors"]) == {"type", "time", "space", "damage"}

    # citations 필드
    assert body["citations"], "citations 필수 — 근거 없는 답변 금지"
    for c in body["citations"]:
        for key in ("passage_id", "doc_title", "chapter", "page_start", "page_end", "quote"):
            assert key in c, f"citation.{key} 누락"
        assert c["passage_id"] and c["doc_title"]
        assert c["quote"], "quote는 해당 청크 발췌여야 함"

    # structured_refs / geo_refs 존재
    assert set(body["structured_refs"]) == {"districts", "rivers", "criteria"}
    assert body["geo_refs"]["type"] == "FeatureCollection"


def test_rag_answer_id_unique_per_call(client):
    ids = {_post(client, "호우 침수 대응", "T10107", "41430").json()["rag_answer_id"] for _ in range(3)}
    assert len(ids) == 3, "rag_answer_id는 호출마다 유일해야 함"


# ── 2. 근거 제시율 100% (시나리오 3종) ──
@pytest.mark.parametrize("query,hazard_code,admin_code", SCENARIOS)
def test_evidence_rate_100(client, query, hazard_code, admin_code):
    body = _post(client, query, hazard_code, admin_code).json()
    assert body["citations"], f"citations 비어있음 — 근거 제시율 위반 ({query})"
    assert body["no_evidence"] is False
    # citations의 passage_id는 top_k_results에 실존해야 한다
    top_ids = {r["passage"]["passage_id"] for r in body["top_k_results"]}
    for c in body["citations"]:
        assert c["passage_id"] in top_ids, f"citation passage_id가 검색 결과 밖: {c['passage_id']}"
        # quote는 해당 청크(발췌 content)에서 나온 텍스트
        matched = next(r for r in body["top_k_results"] if r["passage"]["passage_id"] == c["passage_id"])
        assert c["quote"].rstrip("…") in (matched["passage"]["content"] or "")


# ── 3. 검색 결과 0건 엣지 케이스 — 자유 생성 금지 ──
def test_no_evidence_edge_case(client):
    res = _post(client, "xqzv wvkj qpxx", None, "00000")
    assert res.status_code == 200
    body = res.json()
    assert body["no_evidence"] is True
    assert body["citations"] == []
    assert body["top_k_results"] == []
    assert "근거 문서 없음" in body["answer"]
    assert body["mode"] == "mock"


# ── 4. mock 응답 결정성·출처 병기 ──
def test_mock_answer_deterministic(client):
    b1 = _post(client, "계획홍수량 초과", "T10206", "45190").json()
    b2 = _post(client, "계획홍수량 초과", "T10206", "45190").json()
    assert b1["answer"] == b2["answer"], "mock 응답은 결정적(랜덤 없음)이어야 함"
    assert b1["citations"] == b2["citations"]
    assert b1["rag_answer_id"] != b2["rag_answer_id"]


def test_mock_answer_cites_source_pages(client):
    body = _post(client, "호우 침수 대응", "T10107", "41430").json()
    # 발췌·수치에 출처 페이지 병기(장-쪽번호 라벨 '쪽' 표기)
    assert "쪽" in body["answer"]
    assert "《" in body["answer"], "출처 문서명 병기 필요"


# ── structured_refs·geo_refs 필터 ──
@pytest.mark.parametrize("query,hazard_code,admin_code", SCENARIOS)
def test_structured_refs_filtered(client, query, hazard_code, admin_code):
    refs = _post(client, query, hazard_code, admin_code).json()["structured_refs"]
    assert refs["districts"], f"{admin_code} 지구 목록이 있어야 함"
    assert all(d["admin_code"] == admin_code for d in refs["districts"])
    assert refs["rivers"] and all(r["admin_code"] == admin_code for r in refs["rivers"])
    assert refs["criteria"] and all(c["hazard_code"] == hazard_code for c in refs["criteria"])


def test_geo_refs_filtered_l1_l3(client):
    geo = _post(client, "호우 침수 대응", "T10107", "41430").json()["geo_refs"]
    assert geo["type"] == "FeatureCollection"
    assert geo["features"], "의왕(41430) Feature가 있어야 함"
    for f in geo["features"]:
        assert f["properties"]["admin_code"] == "41430"
        assert f["properties"]["layer"] in ("L1", "L2", "L3")


def test_structured_geo_refs_empty_without_admin(client):
    body = _post(client, "침수 피해", None, None).json()
    assert body["structured_refs"]["districts"] == []
    assert body["structured_refs"]["rivers"] == []
    assert body["geo_refs"]["features"] == []


# ── 5. Claude 경로 (가짜 _call_claude — 실 API 호출 없음) ──
def test_claude_mode_when_key_set(client, monkeypatch):
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    monkeypatch.setattr(llm, "_call_claude", lambda *a, **k: "가짜 Claude 근거 기반 응답")
    body = _post(client, "호우 침수 대응", "T10107", "41430").json()
    assert body["mode"] == "claude"
    assert body["answer"] == "가짜 Claude 근거 기반 응답"
    assert body["citations"], "Claude 경로도 citations 필수"


def test_claude_failure_falls_back_to_mock(client, monkeypatch):
    def _raise(*a, **k):
        raise RuntimeError("SDK 미설치·API 오류 모사")

    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    monkeypatch.setattr(llm, "_call_claude", _raise)
    body = _post(client, "호우 침수 대응", "T10107", "41430").json()
    assert body["mode"] == "mock"
    assert body["citations"], "폴백 후에도 citations 필수"


def test_llm_module_lazy_imports_anthropic():
    """anthropic SDK 미설치여도 llm 모듈 임포트에 에러가 없어야 한다(지연 임포트)."""
    import importlib

    importlib.reload(llm)
    assert llm.generate_answer is not None


# ── 6. 어댑터 시그니처 고정(T3Q 교체 대비) ──
def test_adapter_signature_fixed():
    sig = inspect.signature(llm.generate_answer)
    assert list(sig.parameters) == ["event", "query", "search_results"]


# ── 요청 검증 ──
def test_empty_query_422(client):
    assert client.post("/api/ask", json={"event": {}, "query": ""}).status_code == 422
    assert client.post("/api/ask", json={"event": {}, "query": "  "}).status_code == 422
