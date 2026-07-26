"""근거 기반 응답 생성 어댑터 (T3Q AI Agent 교체 대비).

고정 어댑터 시그니처(라우터는 이 함수만 호출한다 — 향후 T3Q AI Agent로 교체 시
이 함수 내부만 바꾸면 라우터·프론트 계약은 불변):

    generate_answer(event, query, search_results) -> dict
    반환: {"answer": str, "mode": "claude"|"mock", "citations": list[dict],
           "no_evidence": bool}

원칙(사업수행계획서 XAI — 근거 없는 답변 금지):
- 검색 결과 0건이면 자유 생성을 하지 않는다 — "근거 문서 없음" 안내 +
  citations 빈 목록 + no_evidence=True.
- citations는 검색 상위 청크에서만 생성한다(passage_id·문서명·장·페이지·발췌 필수).
- Claude 경로: 환경변수 ANTHROPIC_API_KEY 설정 시(호출 시점 평가 — 테스트
  monkeypatch 대응). anthropic SDK는 지연 임포트 — 미설치여도 앱 임포트 에러 없음.
  호출 실패는 조용히 mock 폴백(mode="mock").
- mock 경로: 결정적(랜덤 없음) — 검색 상위 청크 요약 조립, 수치·발췌에는
  출처(문서명·장·페이지)를 병기한다.
"""
from __future__ import annotations

import logging
import os

from schemas.common import Event, SearchResult
from services import corpus

logger = logging.getLogger("disaster.api.llm")

DEFAULT_MODEL = "claude-sonnet-5"
NO_EVIDENCE_ANSWER = (
    "근거 문서 없음 — 입력 상황·질의와 일치하는 코퍼스 근거를 찾지 못했습니다. "
    "근거 없는 자유 생성은 제공하지 않습니다(XAI 원칙). "
    "질의어·행정구역·재난 유형을 조정해 다시 시도하십시오."
)

_QUOTE_LEN = 200  # citation 발췌 길이
_MOCK_TOP = 3  # mock 요약에 조립하는 상위 청크 수
_CLAUDE_MAX_TOKENS = 1500
_TABLE_MAX_ROWS = 12  # 표 변환 시 본문 최대 행(초과분은 생략 표기)
_CITATION_MAX_TABLES = 2  # citation당 포함하는 원문 표 수

# 대상 재난 5종 한국어 명칭(mock 상황 요약용)
_HAZARD_NAMES = {
    "T10107": "호우",
    "T10206": "홍수",
    "T10106": "수해·침수",
    "T10105": "태풍",
    "T10401": "산사태",
}


# ── 공통 헬퍼 ─────────────────────────────────────────────────────────
def _page_label(passage: dict) -> str:
    """출처 페이지 문자열 — 문서의 '장-쪽번호' 라벨 우선, 없으면 PDF 물리 쪽."""
    ps = passage.get("page_label_start") or passage.get("page_start")
    pe = passage.get("page_label_end") or passage.get("page_end")
    if ps is None:
        return ""
    if pe is None or str(pe) == str(ps):
        return f"{ps}쪽"
    return f"{ps}~{pe}쪽"


def _source_label(passage: dict) -> str:
    """출처 표기 문자열 — 《문서명》 장 · 페이지."""
    parts = [f"《{passage.get('doc_title') or '문서명 미상'}》"]
    if passage.get("chapter"):
        parts.append(str(passage["chapter"]))
    page = _page_label(passage)
    if page:
        parts.append(page)
    return " · ".join(parts)


# ── 원문 표(청크 tables) 헬퍼 ─────────────────────────────────────────
# PDF 표는 본문 텍스트로는 셀이 세로 나열로 뭉개진다(추출 특성). 청크에 보존된
# 구조화 표(pdfplumber {caption, rows[][]})를 답변·인용에서 표로 되살린다.

def _chunk_by_id() -> dict[str, dict]:
    """passage_id → 원본 청크(tables 포함). 검색 결과 passage는 tables가 제거되어
    있으므로(응답 경량화) 코퍼스에서 재조회한다."""
    return {c.get("passage_id"): c for c in corpus.get_chunks()}


def _clean_cell(value) -> str:
    """셀 정규화 — 셀 내 개행·연속 공백 제거, 마크다운 파이프 이스케이프."""
    return " ".join(str(value if value is not None else "").split()).replace("|", "\\|")


def _usable_table(table: dict) -> list[list[str]] | None:
    """렌더 가치가 있는 표만 — 비어있지 않은 행 2개(헤더+본문)·열 2개 이상."""
    rows = [r for r in (table.get("rows") or []) if any(_clean_cell(c) for c in r)]
    if len(rows) < 2 or len(rows[0]) < 2:
        return None
    return rows


def _table_to_markdown(table: dict) -> str | None:
    """청크 표 → GFM 마크다운 표(캡션 병기, 본문 _TABLE_MAX_ROWS행 제한)."""
    rows = _usable_table(table)
    if rows is None:
        return None
    header = [_clean_cell(c) or " " for c in rows[0]]
    lines = []
    if table.get("caption"):
        lines.append(str(table["caption"]))
    lines.append("| " + " | ".join(header) + " |")
    lines.append("|" + " --- |" * len(header))
    body = rows[1 : 1 + _TABLE_MAX_ROWS]
    for r in body:
        cells = [_clean_cell(c) for c in r]
        while len(cells) < len(header):
            cells.append("")
        lines.append("| " + " | ".join(cells[: len(header)]) + " |")
    omitted = len(rows) - 1 - len(body)
    if omitted > 0:
        lines.append(f"(이하 {omitted}행 생략 — 전체는 출처 페이지 참조)")
    return "\n".join(lines)


def build_citations(search_results: list[SearchResult]) -> list[dict]:
    """검색 상위 청크 → Citation dict 목록 (quote 발췌 + 원문 표 구조체)."""
    chunks = _chunk_by_id()
    citations: list[dict] = []
    for r in search_results:
        p = r.passage
        content = (p.get("content") or "").strip()
        quote = content[:_QUOTE_LEN].rstrip()
        if len(content) > _QUOTE_LEN:
            quote += "…"
        tables = []
        for t in (chunks.get(p.get("passage_id")) or {}).get("tables") or []:
            rows = _usable_table(t)
            if rows is None:
                continue
            tables.append(
                {
                    "caption": t.get("caption"),
                    "rows": [[_clean_cell(c) for c in row] for row in rows[: 1 + _TABLE_MAX_ROWS]],
                }
            )
            if len(tables) >= _CITATION_MAX_TABLES:
                break
        citations.append(
            {
                "passage_id": p.get("passage_id") or "",
                "doc_title": p.get("doc_title") or "",
                "chapter": p.get("chapter"),
                "page_start": p.get("page_start"),
                "page_end": p.get("page_end"),
                "quote": quote,
                "tables": tables,
            }
        )
    return citations


def _event_summary(event: Event) -> str:
    """상황 요약 한 줄(결정적) — mock 답변·Claude 프롬프트 공용."""
    parts: list[str] = []
    if event.hazard_code:
        name = _HAZARD_NAMES.get(event.hazard_code)
        parts.append(f"재난 유형 {name}({event.hazard_code})" if name else f"재난 유형 {event.hazard_code}")
    if event.admin_code:
        parts.append(f"행정구역 {event.admin_code}")
    if event.alert_kind or event.alert_level:
        parts.append(f"발령 {event.alert_kind or ''} {event.alert_level or ''}".strip())
    if event.keywords:
        parts.append("키워드 " + "·".join(event.keywords))
    return " · ".join(parts) if parts else "상황 정보 없음"


def _criteria_for_event(event: Event) -> list[dict]:
    """event 재난 유형에 해당하는 판단기준(criteria.json) 목록."""
    return [
        c
        for c in corpus.get_criteria().get("criteria", [])
        if (event.hazard_code and c.get("hazard_code") == event.hazard_code)
        or (event.hazard_event_code and c.get("event_code") == event.hazard_event_code)
    ]


# ── mock 경로 (결정적 — 랜덤 없음) ────────────────────────────────────
def _mock_answer(event: Event, query: str, search_results: list[SearchResult]) -> str:
    """검색 상위 청크 요약 조립 — 발췌·수치에 출처(문서명·장·페이지) 병기."""
    lines = [
        "[근거 기반 요약 — mock 응답(LLM 미연결, 검색 상위 청크 발췌 조립)]",
        f"상황: {_event_summary(event)}",
        f"질의: {query}",
        "",
        "근거 발췌(출처 병기):",
    ]
    for idx, r in enumerate(search_results[:_MOCK_TOP], start=1):
        p = r.passage
        excerpt = (p.get("content") or "").strip()[:150].rstrip()
        lines.append(f"{idx}. ({_source_label(p)}) {excerpt}")
    # 상위 청크에 원문 표가 있으면 첫 표를 마크다운 표로 제시(세로 나열 방지)
    chunks = _chunk_by_id()
    for r in search_results[:_MOCK_TOP]:
        p = r.passage
        chunk_tables = (chunks.get(p.get("passage_id")) or {}).get("tables") or []
        md = next((m for m in (_table_to_markdown(t) for t in chunk_tables) if m), None)
        if md:
            lines.append("")
            lines.append(f"원문 표 ({_source_label(p)}):")
            lines.append("")
            lines.append(md)
            break
    lines.append("")
    lines.append(
        f"위 발췌는 검색 상위 {min(len(search_results), _MOCK_TOP)}건이며, "
        "본문 수치·기준값은 각 항목에 병기한 출처 페이지를 따른다. "
        "전체 근거 목록은 citations 참조."
    )
    return "\n".join(lines)


# ── Claude 경로 (anthropic SDK 지연 임포트) ───────────────────────────
_SYSTEM_PROMPT = (
    "당신은 재난안전 AI 시범 서비스의 근거 기반 응답 생성기다. 다음 원칙을 반드시 지켜라.\n"
    "1. 아래 [근거 청크]에 있는 정보만 사용한다 — 청크 밖 지식으로 답하지 않는다.\n"
    "2. 모든 수치는 출처(문서명·장·페이지)를 병기한다. 예: (《OO계획》 3장 · 3-12쪽)\n"
    "3. 특보·위기경보 등 판단기준 수치는 [판단기준]에 제공된 값만 사용한다.\n"
    "4. 근거가 부족한 내용은 '근거 없음'이라고 명시하고 추정하지 않는다.\n"
    "5. 한국어로 간결하게 답한다.\n"
    "6. 지점별·항목별 수치처럼 표가 적합한 내용은 GFM 마크다운 표(|헤더|…)로 정리한다. "
    "[근거 청크]의 (원문 표) 블록이 있으면 그 구조를 우선 사용한다."
)


def _build_claude_prompt(event: Event, query: str, search_results: list[SearchResult]) -> str:
    """상황·판단기준·근거 청크·질의를 결정적 형식으로 조립한 사용자 프롬프트."""
    parts = [f"[상황]\n{_event_summary(event)}"]

    criteria = _criteria_for_event(event)
    if criteria:
        crit_lines = []
        for c in criteria:
            crit_lines.append(f"- {c.get('name_ko')}({c.get('hazard_code')}): {c.get('judgment_concept') or ''}")
            for cond in c.get("q1_conditions") or []:
                crit_lines.append(
                    f"  · {cond.get('level')} {cond.get('indicator')} {cond.get('period') or ''} "
                    f"{cond.get('operator')} {cond.get('value')}{cond.get('unit') or ''}".strip()
                )
        parts.append("[판단기준] (criteria.json — 기준 수치는 이 값만 사용)\n" + "\n".join(crit_lines))

    chunks = _chunk_by_id()
    chunk_lines = []
    for idx, r in enumerate(search_results, start=1):
        p = r.passage
        block = (
            f"[{idx}] passage_id={p.get('passage_id')} · 출처: {_source_label(p)}\n"
            f"{(p.get('content') or '').strip()}"
        )
        # 원문 표(구조화) — 본문 텍스트는 표 셀이 세로 나열로 뭉개져 있으므로 병기
        chunk_tables = (chunks.get(p.get("passage_id")) or {}).get("tables") or []
        for t in chunk_tables[:_CITATION_MAX_TABLES]:
            md = _table_to_markdown(t)
            if md:
                block += f"\n(원문 표)\n{md}"
        chunk_lines.append(block)
    parts.append("[근거 청크] (이 안의 정보만 사용)\n" + "\n\n".join(chunk_lines))
    parts.append(f"[질의]\n{query}")
    return "\n\n".join(parts)


def _call_claude(event: Event, query: str, search_results: list[SearchResult], api_key: str) -> str:
    """Claude API 호출 — anthropic SDK 지연 임포트(미설치 시 ImportError → mock 폴백)."""
    from anthropic import Anthropic  # 지연 임포트 — 앱 기동 시 미설치여도 무관

    client = Anthropic(api_key=api_key)
    message = client.messages.create(
        model=os.environ.get("ANTHROPIC_MODEL", DEFAULT_MODEL),
        max_tokens=_CLAUDE_MAX_TOKENS,
        system=_SYSTEM_PROMPT,
        messages=[{"role": "user", "content": _build_claude_prompt(event, query, search_results)}],
    )
    text = "".join(block.text for block in message.content if getattr(block, "type", None) == "text")
    if not text.strip():
        raise RuntimeError("Claude 응답 본문 없음")
    return text


# ── 어댑터 (고정 시그니처 — T3Q AI Agent 교체 지점) ───────────────────
def generate_answer(event: Event, query: str, search_results: list[SearchResult]) -> dict:
    """근거 기반 응답 생성.

    - 검색 결과 0건: 자유 생성 금지 — "근거 문서 없음" 안내(no_evidence=True).
    - ANTHROPIC_API_KEY 설정: Claude 경로(mode="claude"), 실패 시 mock 폴백.
    - 미설정: 결정적 mock(mode="mock").
    citations는 두 경로 공통으로 검색 상위 청크에서 생성한다.
    """
    if not search_results:
        return {
            "answer": NO_EVIDENCE_ANSWER,
            "mode": "mock",
            "citations": [],
            "no_evidence": True,
        }

    citations = build_citations(search_results)
    api_key = os.environ.get("ANTHROPIC_API_KEY")  # 호출 시점 평가(monkeypatch 대응)
    if api_key:
        try:
            answer = _call_claude(event, query, search_results, api_key)
            return {"answer": answer, "mode": "claude", "citations": citations, "no_evidence": False}
        except Exception as exc:  # noqa: BLE001 — SDK 미설치·API 오류는 조용히 mock 폴백
            logger.warning("Claude 호출 실패 — mock 폴백 (%s: %s)", type(exc).__name__, exc)

    return {
        "answer": _mock_answer(event, query, search_results),
        "mode": "mock",
        "citations": citations,
        "no_evidence": False,
    }
