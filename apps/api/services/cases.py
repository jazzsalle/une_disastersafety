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
- space  : 동일 지자체=1.0 / 동일 수계=0.7 / 그 외=0.5 — 참고 표시용(필터 아님)
- damage : event.keywords가 risk_factors·damage_history·damage_events 서술에
           매칭된 비율. 키워드 없으면 중립 0.5

score = W_TYPE·type + 0.20·damage + 0.15·time + W_SPACE·space + 0.10·(피해이력 보유)

검색범위(scope — "유사사례 보완사항" 반영. 기본값은 사업 취지에 따라 전국+관내 우선):
- local_first : 전국 후보 + 관내 가중 강화(W_SPACE 0.25) — 기본값
- local       : 관내(event.admin_code) 사례만
- basin       : 동일 수계(관내 포함) — 행정구역보다 하천·유역 관계 중심
- national    : 전국, 지역 가중 없음(W_SPACE 0) — 조건 유사도 순수 랭킹

각 사례에는 region_relation("관내"|"동일 유역"|"타 지역")을 부여해 화면 배지로
지역적 관련성을 즉시 판단하게 한다(공무원 활용 관점).
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
_W_HISTORY = 0.10

#: scope별 space(지역) 가중 — local_first는 관내 우선 노출, national은 지역 무관
_SPACE_WEIGHT = {"local_first": 0.25, "local": 0.10, "basin": 0.10, "national": 0.0}

VALID_SCOPES = tuple(_SPACE_WEIGHT)

#: 지자체 → 수계(유역) — POC 3개 지자체 기준. 동일 수계 = basin 스코프·배지 판단 근거
_BASINS = {
    "41430": "한강(안양천)",
    "47190": "낙동강(구미천·한천)",
    "45190": "섬진강(요천)",
}


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


def _same_basin(admin_a: str | None, admin_b: str | None) -> bool:
    """동일 수계 여부 — 수계 미등록 지자체는 False."""
    if not admin_a or not admin_b:
        return False
    basin_a, basin_b = _BASINS.get(admin_a), _BASINS.get(admin_b)
    return basin_a is not None and basin_a == basin_b


def _region_relation(event: Event, district: dict) -> str:
    """지역 관계 배지 — 관내 / 동일 유역 / 타 지역."""
    if not event.admin_code:
        return "타 지역"
    d_admin = district.get("admin_code")
    if d_admin == event.admin_code:
        return "관내"
    if _same_basin(event.admin_code, d_admin):
        return "동일 유역"
    return "타 지역"


def _factors(event: Event, district: dict) -> dict[str, float]:
    """유사도 요인 4종 — 모듈 docstring의 산정 기준 참조."""
    hazard_codes = district.get("hazard_codes") or []
    if event.hazard_code:
        type_f = float(event.hazard_code in hazard_codes)
    else:
        type_f = _NEUTRAL

    if event.admin_code:
        if district.get("admin_code") == event.admin_code:
            space_f = 1.0
        elif _same_basin(event.admin_code, district.get("admin_code")):
            space_f = 0.7
        else:
            space_f = _NEUTRAL
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


def _score(factors: dict[str, float], has_history: bool, space_weight: float) -> float:
    return (
        _W_TYPE * factors["type"]
        + _W_DAMAGE * factors["damage"]
        + _W_TIME * factors["time"]
        + space_weight * factors["space"]
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


def _in_scope(scope: str, event: Event, district: dict) -> bool:
    """scope별 후보 포함 여부 — local_first·national은 전국 후보."""
    if scope == "local":
        return district.get("admin_code") == event.admin_code
    if scope == "basin":
        return (
            district.get("admin_code") == event.admin_code
            or _same_basin(event.admin_code, district.get("admin_code"))
        )
    return True


def search_cases(event: Event, top_k: int = 5, scope: str = "local_first") -> dict:
    """유사 재난 사례 Top-K — scope 기본 local_first(전국 검색 + 관내 우선 노출).

    반환: {"cases": [...], "total_candidates": 유형 일치 후보 수, "scope": 적용 범위}
    """
    if scope not in _SPACE_WEIGHT:
        scope = "local_first"
    space_weight = _SPACE_WEIGHT[scope]
    districts = corpus.get_districts().get("districts", [])
    scored: list[tuple[float, dict, dict]] = []
    for d in districts:
        if event.admin_code and not _in_scope(scope, event, d):
            continue
        factors = _factors(event, d)
        # 유형 불일치 사례는 '유사 유형' 요건 미달 — 후보 제외
        if event.hazard_code and factors["type"] == 0.0:
            continue
        has_history = bool(d.get("damage_events"))
        scored.append((_score(factors, has_history, space_weight), d, factors))

    scored.sort(key=lambda t: (-t[0], str(t[1].get("district_code"))))
    cases = []
    for s, d, f in scored[: max(0, top_k)]:
        case = _to_case(d, s, f)
        case["region_relation"] = _region_relation(event, d)
        cases.append(case)
    return {"cases": cases, "total_candidates": len(scored), "scope": scope}
