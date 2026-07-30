"""로컬 챗봇 응답기 — 외부 공개 버전(public-demo 브랜치, 로그인·외부 RAG 없음).

- UNI RAG 프록시(services/uni_rag.py)를 대체: 외부 서버 호출 없이 로컬
  코퍼스(chunks.jsonl)·정형 JSON(criteria/districts/rivers)을 직접 조회해
  결정적(랜덤 없음) 응답 dict를 만든다.
- 발췌 선정: 1순위 BM25(services/retrieval — /api/search와 동일 엔진),
  실패·무결과 시 단순 키워드 count 매칭 폴백.
- event.hazard_code가 있으면 공식 판단기준(Q1 수치)을 응답에 병기 —
  "시간당 30mm면 어느 단계?" 류 판정 질문에 공식 기준 수치로 근거 제시.
- 계약: routers/chat.py가 JSON으로 반환(mode "mock", X-Chat-Mode: mock) —
  프론트 api/client.js의 onMock 분기·출처 표기 UI를 그대로 사용.
  정형 질문 즉답(수위계·계획홍수량·저감대책 등)은 프론트 chatAgent.js
  answerFromData가 백엔드 호출 없이 처리한다(하이브리드 유지).
"""
from __future__ import annotations

import logging
import re

from schemas.common import Event
from services import corpus, retrieval

logger = logging.getLogger("disaster.api.chatbot")

NOTICE = "로컬 데이터 기반 응답 (외부 RAG 미연동)"

_TOKEN_SPLIT = re.compile(r"[\s,;·/]+")


def _criteria_context(event: dict | None) -> str:
    """event.hazard_code의 공식 판단기준(Q1 정량 조건)을 결정적 문자열로 요약한다.

    기준 미존재 시 빈 문자열. 로컬 응답 본문에 병기해 판정 질문에 공식 수치를 제시.
    """
    hazard = (event or {}).get("hazard_code")
    if not hazard:
        return ""
    rec = next(
        (c for c in corpus.get_criteria().get("criteria", []) if c.get("hazard_code") == hazard),
        None,
    )
    if not rec or not rec.get("q1_conditions"):
        return ""
    lines = []
    for c in rec["q1_conditions"]:
        seg = [str(c.get("level") or "")]
        cond = f"{c.get('period') or ''} {c.get('indicator') or ''} {c.get('operator') or '>='} {c.get('value')}{c.get('unit') or ''}".strip()
        seg.append(cond)
        if c.get("condition_group"):
            seg.append(f"({c.get('logic')} {c['condition_group']})")
        lines.append(": ".join(s for s in seg if s))
    header = f"[공식 판단기준 — {rec.get('name_ko')}({hazard}) · 판단주체 {rec.get('judgment_subject')}]"
    return header + "\n" + "\n".join(lines)


def _query_with_poi(query: str, poi: dict | None) -> str:
    """선택 POI(위험지구·하천) 속성정보를 질의 뒤에 결정적 형식으로 덧붙인다.

    poi = {"type": "district"|"river", "id": district_code|river_id} — 프론트 지도
    클릭 선택. 레코드 미조회·형식 오류 시 원 질의 그대로(방어적).
    """
    if not isinstance(poi, dict) or not poi.get("id"):
        return query
    poi_id = str(poi["id"])
    if poi.get("type") == "river":
        rec = next(
            (r for r in corpus.get_rivers().get("rivers", []) if r.get("river_id") == poi_id),
            None,
        )
        if not rec:
            return query
        parts = [f"하천명: {rec.get('name')}({poi_id})"]
        for label, key in (("등급", "grade"), ("관할", "admin_name"), ("계획빈도", "design_frequency_yr")):
            if rec.get(key):
                parts.append(f"{label}: {rec[key]}")
        # 홍수특보 기준 수위관측 지점 — "어떤 수위계를 모니터링?" 질의 대응
        ref = rec.get("warning_reference_station") or {}
        if ref.get("name"):
            ref_bits = [ref["name"]]
            if ref.get("station_code"):
                ref_bits.append(str(ref["station_code"]))
            if ref.get("station_no"):
                ref_bits.append(str(ref["station_no"]))
            parts.append("홍수특보 기준 수위관측 지점: " + " ".join(ref_bits))
        # 산정지점별 계획홍수량·홍수특보 기준유량 — 문서 발췌만으로는 표가 잘리는
        # 케이스가 있어 정형값(rivers.json)을 직접 주입(주의보=50%·경보=70%)
        st_lines = []
        for s in (rec.get("stations") or [])[:12]:
            fw = s.get("flood_warning") or {}
            st_lines.append(
                f"{s.get('station_code')} {s.get('station_name')}: "
                f"계획홍수량 {s.get('design_flood_m3s')}㎥/s({s.get('design_frequency_yr')}년), "
                f"홍수주의보 {fw.get('advisory_m3s')}·홍수경보 {fw.get('alert_m3s')}㎥/s"
            )
        if st_lines:
            parts.append(
                f"산정지점별 계획홍수량·홍수특보 기준유량(주의보=계획홍수량 50%·경보=70%, "
                f"근거 {rec.get('plan_name') or '하천기본계획'}): " + " / ".join(st_lines)
            )
        return f"{query}\n\n[선택 하천 정보] " + " · ".join(parts)
    rec = next(
        (d for d in corpus.get_districts().get("districts", []) if d.get("district_code") == poi_id),
        None,
    )
    if not rec:
        return query
    parts = [f"지구명: {rec.get('district_name')}({poi_id})"]
    kind = rec.get("disaster_type")
    if rec.get("disaster_subtype"):
        kind = f"{kind}({rec['disaster_subtype']})" if kind else rec["disaster_subtype"]
    if kind:
        parts.append(f"재해유형: {kind}")
    for label, key in (("관할", "admin_name"), ("위치", "location"), ("관련 하천", "river_name")):
        if rec.get(key):
            parts.append(f"{label}: {rec[key]}")
    factors = [f for f in (rec.get("risk_factors") or []) if isinstance(f, str)][:2]
    if factors:
        parts.append("위험요인: " + " / ".join(factors))
    return f"{query}\n\n[선택 위험지구 정보] " + " · ".join(parts)


def _bm25_excerpts(query: str, event: dict | None) -> list[dict]:
    """BM25 상위 3건 발췌 — /api/search와 동일 엔진. 실패 시 빈 목록(폴백 위임)."""
    try:
        fields = {k: v for k, v in (event or {}).items() if k in Event.model_fields}
        results = retrieval.search(Event(**fields), query, top_k=3)
    except Exception as exc:  # noqa: BLE001 — 검색 실패는 키워드 폴백으로 흡수
        logger.warning("BM25 검색 실패 — 키워드 매칭 폴백 (%s)", type(exc).__name__)
        return []
    excerpts: list[dict] = []
    for r in results[:3]:
        p = r.passage if hasattr(r, "passage") else (r.get("passage") or {})
        excerpts.append(
            {
                "passage_id": p.get("passage_id"),
                "doc_title": p.get("doc_title"),
                "chapter": p.get("chapter"),
                "page_start": p.get("page_start"),
                "page_end": p.get("page_end"),
                "quote": (p.get("content") or "")[:300],
            }
        )
    return excerpts


def _match_terms(query: str, event: dict | None) -> list[str]:
    terms = [t for t in _TOKEN_SPLIT.split(query.strip()) if len(t) >= 2]
    for kw in (event or {}).get("keywords") or []:
        if isinstance(kw, str) and len(kw) >= 2 and kw not in terms:
            terms.append(kw)
    return terms


def _keyword_excerpts(query: str, event: dict | None) -> list[dict]:
    """코퍼스 단순 문자열 count 매칭 상위 2건 — 결정적(점수·passage_id 안정 정렬)."""
    terms = _match_terms(query, event)
    scored: list[tuple[int, str, dict]] = []
    if terms:
        for ch in corpus.get_chunks():
            content = ch.get("content") or ""
            score = sum(content.count(t) for t in terms)
            if score > 0:
                scored.append((-score, str(ch.get("passage_id") or ""), ch))
    scored.sort(key=lambda item: (item[0], item[1]))
    return [
        {
            "passage_id": ch.get("passage_id"),
            "doc_title": ch.get("doc_title"),
            "chapter": ch.get("chapter"),
            "page_start": ch.get("page_start"),
            "page_end": ch.get("page_end"),
            "quote": (ch.get("content") or "")[:300],
        }
        for _neg_score, _pid, ch in scored[:2]
    ]


def _cite(ex: dict) -> str:
    loc = str(ex.get("doc_title") or "")
    if ex.get("chapter"):
        loc += f" · {ex['chapter']}"
    if ex.get("page_start") is not None:
        loc += f" · p.{ex['page_start']}"
    return loc


def answer(
    query: str,
    history: list[dict] | None = None,
    event: dict | None = None,
    poi: dict | None = None,
) -> dict:
    """/api/chat 처리 — 로컬 데이터 직조회 결정적 응답(dict).

    - poi(지도 선택 지구·하천) 있으면 속성정보를 질의에 첨부(_query_with_poi)
    - 발췌: BM25 상위 3건, 무결과·실패 시 키워드 count 매칭 상위 2건
    - event.hazard_code 있으면 공식 판단기준(Q1 수치) 블록을 응답에 병기
    - history는 계약 유지용으로 받되 로컬 응답 생성에는 사용하지 않는다
    """
    del history  # 계약 유지용 — 로컬 결정적 응답에는 미사용
    query = _query_with_poi(query, poi)
    excerpts = _bm25_excerpts(query, event) or _keyword_excerpts(query, event)

    if excerpts:
        lines = [f"질의 관련 로컬 문서 근거 {len(excerpts)}건:"]
        for idx, ex in enumerate(excerpts, start=1):
            quote = (ex.get("quote") or "")[:160]
            lines.append(f"{idx}. ({_cite(ex)}) {quote}")
    else:
        lines = [
            "로컬 자료에서 관련 근거를 찾지 못했습니다.",
            "재난 유형(호우·홍수·침수·태풍·산사태)·지역명(의왕·구미·남원) 등 구체 키워드로 다시 질의해 주세요.",
        ]

    criteria = _criteria_context(event)
    if criteria:
        lines.append("")
        lines.append(criteria)
    if excerpts:
        lines.append("")
        lines.append("상세 근거·유사사례는 좌측 상황입력 후 유사사례 목록·근거 응답 탭에서 확인할 수 있습니다.")

    return {
        "mode": "mock",
        "notice": NOTICE,
        "answer": "\n".join(lines),
        "excerpts": excerpts,
        "query": query,
    }
