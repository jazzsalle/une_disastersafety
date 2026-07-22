"""BM25 + 메타 필터 검색 서비스 (T3Q RAG API 교체 대비 어댑터).

고정 어댑터 시그니처(라우터는 이 함수만 호출한다 — 향후 T3Q RAG API로 교체 시
이 함수 내부만 바꾸면 라우터·프론트 계약은 불변):

    search(event: Event, query: str, top_k: int = 5) -> list[SearchResult]

동작:
- BM25 인덱스는 최초 검색 시(lazy) 1회 구축해 모듈 캐시(색인 텍스트:
  content + chapter + section + doc_title, rank-bm25 BM25Okapi).
- 토크나이저: kiwipiepy 가용 시 형태소 분석, 실패 시 정규식 폴백
  (한글 음절 bigram + 영숫자 토큰).
- admin 하드 필터: event.admin_code가 있으면 해당 지자체 청크만 대상.
  결과 0건이면 전체 코퍼스로 완화(완화 여부는 결과의 admin_code로 판별 가능 —
  완화 시 반환 결과에 event.admin_code와 일치하는 청크가 포함될 수 없음.
  BM25 점수는 코퍼스 전역으로 계산되고 결합 점수는 BM25에 곱연산 부스트라,
  필터 대상에서 0점이던 청크는 완화 후에도 0점으로 제외되기 때문).
- hazard 부스트: event.hazard_code가 청크 hazard_codes에 포함되면 가중치 부스트.

similarity_factors (0~1, 정합성 패널 표출용):
- type  : event.hazard_code(또는 hazard_event_code)와 청크 hazard 코드 교집합(1/0).
          이벤트에 재난 코드가 없으면 중립 0.5.
- space : event.admin_code와 청크 admin_code 일치(1/0, 하천기본계획 등도
          admin_code로 지역 매칭). 이벤트에 행정코드가 없으면 중립 0.5.
- damage: event.keywords와 청크 본문(content) 매칭 비율(매칭 키워드 수/전체).
          키워드가 없으면 중립 0.5.
- time  : 중립 0.5 고정 — 저감계획·하천기본계획 문서에는 사건 시점 정보가
          제한적이라 시간 축 유사도는 산정하지 않는다(POC 한계 명기).
"""
from __future__ import annotations

import re
import threading

from rank_bm25 import BM25Okapi

from schemas.common import Event, SearchResult
from services import corpus

# ── 결합 점수 가중치 (곱연산 부스트: score = bm25 * (1 + Σ w·factor)) ──
_W_TYPE = 0.30  # hazard 일치 부스트 (완료 기준 3 — hazard 일치 청크 우선)
_W_SPACE = 0.10
_W_DAMAGE = 0.10

_NEUTRAL = 0.5  # 판단 근거가 없을 때의 중립값
_EXCERPT_LEN = 300  # passage.content 발췌 길이(전문 미반환)

# ── 토크나이저: kiwipiepy 임포트 가드 ──
try:  # pragma: no cover - 환경 의존
    from kiwipiepy import Kiwi

    _kiwi = Kiwi()

    def _tokenize(text: str) -> list[str]:
        """형태소 분석 토큰(명사·동사 어간 등 실질 형태소 위주)."""
        return [
            t.form.lower()
            for t in _kiwi.tokenize(text)
            if t.tag[0] in ("N", "V", "S") or t.tag in ("XR", "SL", "SN")
        ]

except Exception:  # noqa: BLE001 - kiwipiepy 부재 시 정규식 폴백
    _kiwi = None
    _TOKEN_RE = re.compile(r"[가-힣]+|[a-zA-Z0-9]+")

    def _tokenize(text: str) -> list[str]:
        """정규식 폴백: 한글 연속열은 음절 bigram(+길이 1은 단일 음절),
        영숫자는 소문자 토큰. 질의·문서에 동일 적용되므로
        '침수'·'계획홍수량' 같은 질의도 부분 일치로 상위 반환이 가능하다."""
        tokens: list[str] = []
        for m in _TOKEN_RE.finditer(text):
            run = m.group()
            if run[0].isascii():
                tokens.append(run.lower())
            elif len(run) == 1:
                tokens.append(run)
            else:
                tokens.extend(run[i : i + 2] for i in range(len(run) - 1))
        return tokens


# ── BM25 인덱스 (lazy 1회 구축·모듈 캐시) ──
_index_lock = threading.Lock()
_index: tuple[BM25Okapi, list[dict]] | None = None


def _get_index() -> tuple[BM25Okapi, list[dict]]:
    """최초 검색 시 1회 구축하는 BM25 인덱스(3,974건, 이후 모듈 캐시 재사용)."""
    global _index
    if _index is None:
        with _index_lock:
            if _index is None:
                chunks = corpus.get_chunks()
                docs = [
                    _tokenize(
                        " ".join(
                            str(c.get(k) or "")
                            for k in ("content", "chapter", "section", "doc_title")
                        )
                    )
                    for c in chunks
                ]
                # 빈 코퍼스(신규 클론)에서도 기동은 가능해야 한다
                bm25 = BM25Okapi(docs) if docs else None
                _index = (bm25, chunks)
    return _index


def reset_index() -> None:
    """인덱스 캐시 초기화(테스트용)."""
    global _index
    with _index_lock:
        _index = None


# ── 유사도 요인 ──
def _factors(event: Event, chunk: dict) -> dict[str, float]:
    """요인별 기여도(0~1) — 모듈 docstring의 산정 기준 참조."""
    # type: hazard 코드 교집합(1/0), 이벤트에 코드가 없으면 중립
    if event.hazard_code or event.hazard_event_code:
        type_f = float(
            bool(event.hazard_code and event.hazard_code in (chunk.get("hazard_codes") or []))
            or bool(
                event.hazard_event_code
                and event.hazard_event_code in (chunk.get("hazard_event_codes") or [])
            )
        )
    else:
        type_f = _NEUTRAL

    # space: 행정코드 일치(1/0), 이벤트에 행정코드가 없으면 중립
    if event.admin_code:
        space_f = float(chunk.get("admin_code") == event.admin_code)
    else:
        space_f = _NEUTRAL

    # damage: 키워드 본문 매칭 비율, 키워드가 없으면 중립
    if event.keywords:
        content = chunk.get("content") or ""
        matched = sum(1 for kw in event.keywords if kw and kw in content)
        damage_f = matched / len(event.keywords)
    else:
        damage_f = _NEUTRAL

    # time: 중립 고정 — 문서에 사건 시점 정보가 제한적(모듈 docstring 참조)
    return {"type": type_f, "time": _NEUTRAL, "space": space_f, "damage": damage_f}


def _combined_score(bm25_score: float, factors: dict[str, float]) -> float:
    """곱연산 부스트 — BM25 0점 청크는 부스트로도 살아나지 않는다."""
    boost = 1.0 + _W_TYPE * factors["type"] + _W_SPACE * factors["space"] + _W_DAMAGE * factors["damage"]
    return bm25_score * boost


def _page_str(chunk: dict) -> str:
    """출처 페이지 문자열 — 문서의 '장-쪽번호' 라벨 우선, 없으면 PDF 물리 쪽."""
    ps = chunk.get("page_label_start") or chunk.get("page_start")
    pe = chunk.get("page_label_end") or chunk.get("page_end")
    if ps is None:
        return ""
    if pe is None or str(pe) == str(ps):
        return f"{ps}쪽"
    return f"{ps}~{pe}쪽"


def _to_result(chunk: dict, score: float, factors: dict[str, float]) -> SearchResult:
    """청크 → SearchResult (content는 발췌만 — 전문은 상세조회 API 담당)."""
    passage = {k: v for k, v in chunk.items() if k != "tables"}
    content = chunk.get("content") or ""
    if len(content) > _EXCERPT_LEN:
        passage["content"] = content[:_EXCERPT_LEN].rstrip() + "…"
    return SearchResult(
        passage=passage,
        score=round(float(score), 4),
        similarity_factors=factors,
        source={
            "source_asset_id": chunk.get("source_asset_id"),
            "doc_title": chunk.get("doc_title"),
            "page": _page_str(chunk),
        },
    )


def _rank(
    event: Event, scores, chunks: list[dict], indices: list[int], top_k: int
) -> list[SearchResult]:
    """후보 인덱스 집합에서 결합 점수 상위 top_k 결과 생성(0점 제외)."""
    scored: list[tuple[float, int, dict[str, float]]] = []
    for i in indices:
        base = float(scores[i])
        if base <= 0.0:
            continue
        factors = _factors(event, chunks[i])
        scored.append((_combined_score(base, factors), i, factors))
    scored.sort(key=lambda t: t[0], reverse=True)
    return [_to_result(chunks[i], s, f) for s, i, f in scored[:top_k]]


# ── 어댑터 (고정 시그니처 — T3Q RAG API 교체 지점) ──
def search(event: Event, query: str, top_k: int = 5) -> list[SearchResult]:
    """BM25+메타 필터 검색.

    - event.admin_code: 하드 필터(일치 청크만). 결과 0건이면 전체 코퍼스로 완화.
    - event.hazard_code: 일치 청크 가중치 부스트(우선 정렬).
    - 반환: 결합 점수 내림차순 상위 top_k (BM25 0점 청크 제외).
    """
    bm25, chunks = _get_index()
    if bm25 is None or not chunks:
        return []
    q_tokens = _tokenize(query)
    if not q_tokens:
        return []
    scores = bm25.get_scores(q_tokens)

    all_indices = list(range(len(chunks)))
    if event.admin_code:
        filtered = [i for i in all_indices if chunks[i].get("admin_code") == event.admin_code]
        results = _rank(event, scores, chunks, filtered, top_k)
        if results:
            return results
        # 필터 완화: 해당 지자체에서 결과 0건 → 전체 코퍼스로 재검색
        return _rank(event, scores, chunks, all_indices, top_k)
    return _rank(event, scores, chunks, all_indices, top_k)
