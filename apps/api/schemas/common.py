"""API 공통 스키마 (pydantic v2) — DESIGN.md 4.3·5장 계약.

T2~T5 라우터·서비스가 공유하는 고정 인터페이스:
- Event: 상황(사건) 모델 — Event Master 축약. 대부분 Optional(부분 입력 허용).
- Citation: 근거 표기(F6 필수) — {passage_id, doc_title, chapter, page_start, page_end, quote}.
- SearchResult: /api/search 결과 1건 — {passage, score, similarity_factors, source}.
"""
from __future__ import annotations

from pydantic import BaseModel, Field


class Event(BaseModel):
    """상황(사건) 모델 — DESIGN.md 4.3 (Event Master 축약).

    예: {"event_id": "HEAVY_RAIN-20260723-41430-0001", "hazard_code": "T10107",
         "hazard_event_code": "HEAVY_RAIN", "admin_code": "41430",
         "alert_kind": "특보", "alert_level": "경보",
         "onset": "2026-07-23T14:00+09:00", "keywords": ["침수"], "note": "..."}
    """

    event_id: str | None = None  # [유형코드]-[일시]-[행정코드]-[순번]
    hazard_code: str | None = None  # T코드 (예: T10107)
    hazard_event_code: str | None = None  # Event 코드 (예: HEAVY_RAIN)
    admin_code: str | None = None  # 행정코드 (예: 41430 의왕시)
    alert_kind: str | None = None  # 특보 | 위기경보
    alert_level: str | None = None  # 주의보/경보 | 관심/주의/경계/심각
    onset: str | None = None  # ISO8601 (예: 2026-07-23T14:00+09:00)
    keywords: list[str] = Field(default_factory=list)  # 피해·통제 키워드
    note: str | None = None


class Citation(BaseModel):
    """근거 표기 — 응답·검색 결과의 출처(문서명·장·페이지) 필수 항목."""

    passage_id: str
    doc_title: str
    chapter: str | None = None
    page_start: int | None = None
    page_end: int | None = None
    quote: str | None = None


class SearchResult(BaseModel):
    """POST /api/search 결과 1건.

    - passage: chunks.jsonl 청크(dict 그대로 — passage_id·content·chapter 등)
    - score: 검색 점수(BM25+메타 필터 결합)
    - similarity_factors: 유형·시간·공간·피해 등 요인별 기여도(정합성 패널 표출용)
    - source: 출처 요약(doc_title·chapter·page_start·page_end 등)
    """

    passage: dict
    score: float
    similarity_factors: dict[str, float] = Field(default_factory=dict)
    source: dict = Field(default_factory=dict)
