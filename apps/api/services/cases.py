"""유사 재난 사례 검색 — districts(위험지구 관리대장 정형) 기반 사례 단위 Top-K.

기존 retrieval(문서 청크 BM25 — 동일 지자체 하드 필터)과 달리, 본 모듈은
**타 지자체·타 지구의 유사 유형 사례**를 찾는 것이 목적이다(사업수행계획서
"매칭 사건 리스트" 원안 복원). admin_code는 필터가 아니라 표시용 요인으로만 쓴다.

사례 단위 = data/manual/districts.json의 위험지구 레코드(v0.2 damage_events 포함).
모든 사례는 관리대장·저감계획 원문 evidence를 보유한다(근거 없는 사례 없음).

유사도 요인(0~1, 프론트 FactorBars 4요인과 동일 키):
- type   : event.hazard_code가 지구 hazard_codes에 포함(1/0) — 0이면 후보 제외
           (유사 '유형' 사례 요건). hazard 미지정 시 중립 0.5로 전건 후보
- time   : damage_events.occurred(월)와 event.onset(월)의 계절 근접도(원형 월차)
           — 피해이력이 없으면 중립 0.5
- space  : 동일 지자체=1.0 / 타 지자체=0.5 — 참고 표시용(필터 아님)
- damage : event.keywords가 risk_factors·damage_history·damage_events 서술에
           매칭된 비율. 키워드 없으면 중립 0.5

score = 0.45·type + 0.20·damage + 0.15·time + 0.10·space + 0.10·(피해이력 보유)
"""
from __future__ import annotations

from datetime import datetime

from schemas.common import Event
from services import corpus

_NEUTRAL = 0.5

#: score 가중치 — type(유형 일치)이 지배적, 이력 보유 사례를 우대
_W_TYPE = 0.45
_W_DAMAGE = 0.20
_W_TIME = 0.15
_W_SPACE = 0.10
_W_HISTORY = 0.10


def _event_month(event: Event) -> int | None:
    """event.onset(ISO8601)에서 월 추출 — 실패 시 None."""
    if not event.onset:
        return None
    try:
        return datetime.fromisoformat(event.onset.replace("Z", "+00:00")).month
    except ValueError:
        return None


def _occurred_month(occurred: str) -> int | None:
    """damage_events.occurred('YYYY-MM')에서 월 추출."""
    try:
        return int(occurred.split("-")[1])
    except (IndexError, ValueError, AttributeError):
        return None


def _time_factor(event: Event, damage_events: list[dict]) -> float:
    """계절 근접도 — 사건 월과 이력 월의 원형 월차(0~6)를 1~0으로 환산, 최대값."""
    ev_month = _event_month(event)
    if ev_month is None or not damage_events:
        return _NEUTRAL
    best = None
    for de in damage_events:
        m = _occurred_month(de.get("occurred") or "")
        if m is None:
            continue
        diff = abs(ev_month - m)
        diff = min(diff, 12 - diff)
        closeness = 1.0 - diff / 6.0
        best = closeness if best is None else max(best, closeness)
    return best if best is not None else _NEUTRAL


def _damage_text(district: dict) -> str:
    """damage 요인 매칭 대상 텍스트 — 위험요인·피해이력 서술 결합."""
    parts: list[str] = []
    parts.extend(district.get("risk_factors") or [])
    if district.get("damage_history"):
        parts.append(str(district["damage_history"]))
    for de in district.get("damage_events") or []:
        parts.append(str(de.get("description") or ""))
        parts.append(str(de.get("event_name") or ""))
    return " ".join(parts)


def _factors(event: Event, district: dict) -> dict[str, float]:
    """유사도 요인 4종 — 모듈 docstring의 산정 기준 참조."""
    hazard_codes = district.get("hazard_codes") or []
    if event.hazard_code:
        type_f = float(event.hazard_code in hazard_codes)
    else:
        type_f = _NEUTRAL

    if event.admin_code:
        space_f = 1.0 if district.get("admin_code") == event.admin_code else _NEUTRAL
    else:
        space_f = _NEUTRAL

    if event.keywords:
        text = _damage_text(district)
        matched = sum(1 for kw in event.keywords if kw and kw in text)
        damage_f = matched / len(event.keywords)
    else:
        damage_f = _NEUTRAL

    time_f = _time_factor(event, district.get("damage_events") or [])
    return {"type": type_f, "time": time_f, "space": space_f, "damage": damage_f}


def _score(factors: dict[str, float], has_history: bool) -> float:
    return (
        _W_TYPE * factors["type"]
        + _W_DAMAGE * factors["damage"]
        + _W_TIME * factors["time"]
        + _W_SPACE * factors["space"]
        + _W_HISTORY * float(has_history)
    )


def _to_case(district: dict, score: float, factors: dict[str, float]) -> dict:
    """지구 레코드 → 사례 카드 dict(프론트 표출·근거 표기용 필드만)."""
    return {
        "case_id": district.get("district_code"),
        "district_code": district.get("district_code"),
        "district_name": district.get("district_name"),
        "admin_code": district.get("admin_code"),
        "admin_name": district.get("admin_name"),
        "disaster_type": district.get("disaster_type"),
        "hazard_codes": district.get("hazard_codes") or [],
        "location": district.get("location"),
        "grade": district.get("grade"),
        "risk_factors": district.get("risk_factors") or [],
        "mitigation": district.get("mitigation") or [],
        "damage_history": district.get("damage_history"),
        "damage_events": district.get("damage_events") or [],
        "cost_million_krw": district.get("cost_million_krw"),
        "priority": district.get("priority"),
        "score": round(float(score), 4),
        "similarity_factors": factors,
        "evidence": district.get("evidence"),
    }


def search_cases(event: Event, top_k: int = 5) -> dict:
    """유사 재난 사례 Top-K — 전 지자체 위험지구 후보(admin 하드 필터 없음).

    반환: {"cases": [...], "total_candidates": 유형 일치 후보 수}
    """
    districts = corpus.get_districts().get("districts", [])
    scored: list[tuple[float, dict, dict]] = []
    for d in districts:
        factors = _factors(event, d)
        # 유형 불일치 사례는 '유사 유형' 요건 미달 — 후보 제외
        if event.hazard_code and factors["type"] == 0.0:
            continue
        has_history = bool(d.get("damage_events"))
        scored.append((_score(factors, has_history), d, factors))

    scored.sort(key=lambda t: (-t[0], str(t[1].get("district_code"))))
    cases = [_to_case(d, s, f) for s, d, f in scored[: max(0, top_k)]]
    return {"cases": cases, "total_candidates": len(scored)}
