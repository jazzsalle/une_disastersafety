"""POST /api/chat — 로컬 챗봇(외부 연동·로그인 없음, public-demo) 테스트.

외부 서버 호출 경로 자체가 없다 — services/chatbot은 로컬 코퍼스·정형 JSON만
조회한다. BM25(retrieval.search)는 monkeypatch로 결정적으로 고정한다.
"""
from __future__ import annotations

from types import SimpleNamespace

import pytest

from services import chatbot, corpus

FAKE_CHUNKS = [
    {
        "passage_id": "P-0002",
        "doc_title": "의왕시 자연재해저감종합계획",
        "chapter": "제3장",
        "page_start": 12,
        "page_end": 13,
        "content": "오전동 침수 위험지구는 호우 시 내수배제 불량으로 침수 피해가 반복되었다.",
    },
    {
        "passage_id": "P-0001",
        "doc_title": "구미시 자연재해저감종합계획",
        "chapter": "제2장",
        "page_start": 7,
        "page_end": 8,
        "content": "산사태 위험지구 사면 붕괴 이력과 급경사지 관리 현황.",
    },
]


def _raise_search(event, query, top_k=3):
    raise RuntimeError("BM25 비활성(테스트)")


def _bm25_stub(passages):
    return lambda event, query, top_k=3: [SimpleNamespace(passage=p) for p in passages]


@pytest.fixture(autouse=True)
def _isolate(monkeypatch):
    """결정적 코퍼스 주입 + BM25는 기본 비활성(키워드 폴백 경로 고정)."""
    monkeypatch.setattr(corpus, "get_chunks", lambda: FAKE_CHUNKS)
    monkeypatch.setattr(chatbot.retrieval, "search", _raise_search)
    yield


# ── 1. 기본 계약 — JSON mock 응답·결정성 ─────────────────────────────
def test_local_answer_contract_and_determinism(client):
    res = client.post("/api/chat", json={"query": "침수 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
    body = res.json()
    assert body["mode"] == "mock"
    assert body["notice"] == chatbot.NOTICE
    # 키워드 매칭 발췌: "침수"×2 + "피해"×1 → P-0002 단독 상위
    assert [ex["passage_id"] for ex in body["excerpts"]] == ["P-0002"]
    assert body["excerpts"][0]["doc_title"] == "의왕시 자연재해저감종합계획"
    assert "의왕시 자연재해저감종합계획" in body["answer"]
    # 결정적(랜덤 없음): 동일 입력 → 동일 응답
    res2 = client.post("/api/chat", json={"query": "침수 피해"})
    assert res2.json() == body


def test_no_match_is_deterministic(client):
    res = client.post("/api/chat", json={"query": "존재하지않는어휘질의"})
    assert res.status_code == 200
    body = res.json()
    assert body["mode"] == "mock"
    assert body["excerpts"] == []
    assert "근거를 찾지 못했습니다" in body["answer"]


def test_query_required(client):
    assert client.post("/api/chat", json={}).status_code == 422


# ── 2. BM25 경로 — 검색 성공 시 상위 발췌 사용 ───────────────────────
def test_bm25_excerpts_preferred(client, monkeypatch):
    monkeypatch.setattr(
        chatbot.retrieval,
        "search",
        _bm25_stub(
            [
                {
                    "passage_id": "P-BM25-1",
                    "doc_title": "남원시 자연재해저감종합계획",
                    "chapter": "제4장",
                    "page_start": 21,
                    "page_end": 22,
                    "content": "요천 합류부 홍수 범람 이력 근거 본문",
                }
            ]
        ),
    )
    res = client.post(
        "/api/chat",
        json={"query": "요천 홍수", "event": {"hazard_event_code": "FLOOD", "admin_code": "45190"}},
    )
    assert res.status_code == 200
    body = res.json()
    assert [ex["passage_id"] for ex in body["excerpts"]] == ["P-BM25-1"]
    assert "요천 합류부 홍수 범람 이력 근거 본문" in body["answer"]


def test_bm25_failure_falls_back_to_keyword(client):
    """BM25 실패(autouse 픽스처) 시 키워드 count 매칭으로 폴백한다."""
    res = client.post("/api/chat", json={"query": "산사태 사면"})
    assert res.status_code == 200
    assert [ex["passage_id"] for ex in res.json()["excerpts"]] == ["P-0001"]


# ── 3. POI 컨텍스트 ──────────────────────────────────────────────────
FAKE_DISTRICTS = {
    "districts": [
        {
            "district_code": "TW-Z-99",
            "district_name": "오랑개천지구",
            "disaster_type": "토사재해",
            "disaster_subtype": "토석류위험지구",
            "admin_name": "전북 남원시",
            "location": "남원시 오랑길 1",
            "river_name": "오랑개천",
            "risk_factors": ["급경사지 토석류 발생 이력", "배수시설 용량 부족"],
        }
    ]
}


def test_poi_district_context_in_query(client, monkeypatch):
    """지도에서 지구 POI 선택 후 질의하면 검색 질의에 속성정보가 첨부된다."""
    monkeypatch.setattr(corpus, "get_districts", lambda: FAKE_DISTRICTS)
    seen: dict = {}

    def capture_search(event, query, top_k=3):
        seen["query"] = query
        return []

    monkeypatch.setattr(chatbot.retrieval, "search", capture_search)
    res = client.post(
        "/api/chat",
        json={
            "query": "왜 토사재해구역으로 선정되었는지 알려줘",
            "poi": {"type": "district", "id": "TW-Z-99"},
        },
    )
    assert res.status_code == 200
    # 사용자 질의 원문 + 지구 속성정보(지구명·재해유형·위치·위험요인)가 함께 검색됨
    assert "왜 토사재해구역으로 선정되었는지 알려줘" in seen["query"]
    assert "오랑개천지구" in seen["query"]
    assert "토사재해" in seen["query"]
    assert "남원시 오랑길 1" in seen["query"]
    assert "급경사지 토석류 발생 이력" in seen["query"]
    # 응답 payload의 query에도 동일 첨부(프론트 디버깅용 계약)
    assert "[선택 위험지구 정보]" in res.json()["query"]


def test_poi_unknown_id_leaves_query_unchanged(client, monkeypatch):
    """미존재 POI id는 무시하고 원 질의 그대로 처리한다."""
    monkeypatch.setattr(corpus, "get_districts", lambda: FAKE_DISTRICTS)
    res = client.post(
        "/api/chat",
        json={"query": "질의", "poi": {"type": "district", "id": "NO-SUCH"}},
    )
    assert res.status_code == 200
    assert "[선택 위험지구 정보]" not in res.json()["query"]


# ── 하천 POI — 기준지점·계획홍수량·기준유량 주입("어떤 수위계?" 질의 대응) ──
def test_poi_river_context_includes_stations():
    q = chatbot._query_with_poi("어떤 수위계를 모니터링해야 해?", {"type": "river", "id": "RIV-YC"})
    assert "남원수위표" in q, "홍수특보 기준 수위관측 지점 주입 필요"
    assert "2005" in q and "1404" in q, "Y4 계획홍수량·경보 기준유량 주입 필요"
    assert "주의보=계획홍수량 50%" in q


# ── 4. 판단기준(Q1 수치) 병기 — "시간당 30mm면 어느 단계?" 판정용 ────
def test_event_hazard_appends_official_criteria(client):
    """event.hazard_code가 있으면 공식 판단기준 수치 블록이 응답에 병기된다."""
    res = client.post(
        "/api/chat",
        json={
            "query": "지금 시간당 30mm면 어느 단계야?",
            "event": {"hazard_code": "T10107", "admin_code": "45190", "alert_kind": "특보"},
        },
    )
    assert res.status_code == 200
    answer = res.json()["answer"]
    assert "[공식 판단기준" in answer and "호우" in answer
    # 호우 Q1: 주의보 3시간 60mm / 경보 3시간 90mm (criteria.json)
    assert "60" in answer and "90" in answer
    assert "기상청" in answer  # 판단주체 명시


def test_event_without_hazard_no_criteria_block(client):
    """hazard_code 없는 event에는 판단기준 블록을 붙이지 않는다."""
    res = client.post(
        "/api/chat", json={"query": "질의", "event": {"admin_code": "45190"}}
    )
    assert "[공식 판단기준" not in res.json()["answer"]


# ── 5. 인증 제거 확인 — auth 라우트 부재·쿠키 불필요 ─────────────────
def test_auth_routes_removed(client):
    assert client.post("/api/auth/login", json={"account": "a", "password": "b"}).status_code == 404
    assert client.get("/api/auth/me").status_code == 404


def test_chat_needs_no_cookie(client):
    """로그인 쿠키 없이도 200 — 외부 공개 버전 핵심 계약."""
    res = client.post("/api/chat", json={"query": "호우 피해"})
    assert res.status_code == 200
    assert res.headers["x-chat-mode"] == "mock"
