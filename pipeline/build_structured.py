"""정형데이터 빌더 — data/manual 시드 4종 검증 후 data/processed/ 반영.

DESIGN.md 4.2(DAR-008 정형화 항목)의 정형 데이터 4종을 산출한다:
- `criteria.json`  — 재난판단기준 5종(Q1 판단조건·Q2 등급세분화·근거출처)
- `districts.json` — 위험지구 29건(의왕 17·구미 6·남원 6) + evidence
- `rivers.json`    — 하천 3종(요천·구미천·안양천) 지점별 계획홍수량·홍수특보 기준유량
- `geo.json`       — 지도 표출용 GeoJSON FeatureCollection(L1 지구·L2 하천·L3 경계)

검증 규칙(실패 시 파일·레코드·필드 명시 후 exit≠0):
1. criteria  — 사업 대상 재난 5종의 Event/T코드 쌍(config.HAZARD_CODES)이 모두 존재
2. districts — 의왕(41430) 정확히 17건, 전 레코드 evidence(source_asset_id·페이지) 보유
3. rivers    — 홍수특보 기준유량 = 계획홍수량×0.5(주의보)/×0.7(경보) 산술 일치.
   반올림 규칙은 파일 내 warning_flow_rule.rounding 준수(요천·구미천 정수 반올림 →
   허용오차 ±0.5, 안양천 소수 1자리 → 허용오차 ±0.05). 안양천 전 지점 plan_version 존재
4. geo       — FeatureCollection 유효성(type·features·각 Feature의 geometry·properties.layer)

Phase 2 백엔드(apps/api)가 data/processed/의 산출물을 그대로 로드하므로,
파일명·구조는 data/manual 시드와 동일하게 유지한다(복사+직렬화 정규화).
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))

# Windows 콘솔(cp949)에서 한국어·특수문자 출력 보장
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from config import (  # noqa: E402
    HAZARD_CODES,
    MANUAL_DIR,
    PROCESSED_DIR,
    ensure_output_dirs,
)

#: 시드 파일명 4종(data/manual → data/processed 동일 파일명 반영)
SEED_FILES: tuple[str, ...] = ("criteria.json", "districts.json", "rivers.json", "geo.json")

#: 검증 상수
UIWANG_ADMIN_CODE = "41430"
UIWANG_EXPECTED_COUNT = 17
ADVISORY_RATIO = 0.5   # 홍수주의보 = 계획홍수량 × 0.5
ALERT_RATIO = 0.7      # 홍수경보  = 계획홍수량 × 0.7
TOL_INTEGER = 0.5 + 1e-6   # 요천·구미천: 정수 반올림 → ±0.5
TOL_ONE_DECIMAL = 0.05 + 1e-6  # 안양천: 소수 1자리 → ±0.05
GEO_VALID_LAYERS = {"L1", "L2", "L3", "L4"}
GEOMETRY_TYPES = {
    "Point", "MultiPoint", "LineString", "MultiLineString",
    "Polygon", "MultiPolygon", "GeometryCollection",
}


class ValidationError:
    """검증 실패 1건 — 어떤 파일·어떤 레코드·어떤 필드가 문제인지 보존한다."""

    def __init__(self, file: str, record: str, field: str, message: str) -> None:
        self.file = file
        self.record = record
        self.field = field
        self.message = message

    def __str__(self) -> str:
        return f"[{self.file}] 레코드={self.record} 필드={self.field} — {self.message}"


def load_seed(filename: str, errors: list[ValidationError]) -> Any | None:
    """data/manual 시드 1종을 로드한다. 부재·파싱 실패는 검증 오류로 기록."""
    path = MANUAL_DIR / filename
    if not path.is_file():
        errors.append(ValidationError(filename, "-", "-", f"시드 파일 없음: {path}"))
        return None
    try:
        with path.open(encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError as exc:
        errors.append(ValidationError(filename, "-", "-", f"JSON 파싱 실패: {exc}"))
        return None


# ---------------------------------------------------------------------------
# 1. criteria.json — 재난 5종 Event/T코드 쌍
# ---------------------------------------------------------------------------

def validate_criteria(data: Any, errors: list[ValidationError]) -> dict[str, Any]:
    """재난 5종 Event 코드 ↔ T코드 쌍이 config.HAZARD_CODES와 일치하는지 검증."""
    fname = "criteria.json"
    summary: dict[str, Any] = {"criteria_count": 0, "hazard_pairs_ok": False}
    if not isinstance(data, dict) or not isinstance(data.get("criteria"), list):
        errors.append(ValidationError(fname, "-", "criteria", "최상위 criteria 배열 없음"))
        return summary

    entries = data["criteria"]
    summary["criteria_count"] = len(entries)
    found: dict[str, str] = {}
    for i, entry in enumerate(entries):
        rec = str(entry.get("event_code") or f"criteria[{i}]")
        event_code = entry.get("event_code")
        hazard_code = entry.get("hazard_code")
        if not event_code:
            errors.append(ValidationError(fname, rec, "event_code", "event_code 누락"))
            continue
        if not hazard_code:
            errors.append(ValidationError(fname, rec, "hazard_code", "hazard_code 누락"))
            continue
        found[event_code] = hazard_code

    for event_code, expected_t in HAZARD_CODES.items():
        if event_code not in found:
            errors.append(ValidationError(
                fname, event_code, "event_code",
                f"재난 5종 중 {event_code}({expected_t}) 항목 부재"))
        elif found[event_code] != expected_t:
            errors.append(ValidationError(
                fname, event_code, "hazard_code",
                f"T코드 불일치: 기대={expected_t}, 실제={found[event_code]}"))

    summary["hazard_pairs_ok"] = all(
        found.get(e) == t for e, t in HAZARD_CODES.items())
    summary["source_registry_count"] = len(data.get("source_registry", []))
    return summary


# ---------------------------------------------------------------------------
# 2. districts.json — 의왕 17건·전 레코드 evidence
# ---------------------------------------------------------------------------

def validate_districts(data: Any, errors: list[ValidationError]) -> dict[str, Any]:
    """의왕(41430) 정확히 17건, 전 레코드 evidence(source_asset_id·페이지) 검증."""
    fname = "districts.json"
    summary: dict[str, Any] = {"total": 0, "by_admin": {}}
    if not isinstance(data, dict) or not isinstance(data.get("districts"), list):
        errors.append(ValidationError(fname, "-", "districts", "최상위 districts 배열 없음"))
        return summary

    records = data["districts"]
    summary["total"] = len(records)
    by_admin: dict[str, int] = {}
    for i, rec in enumerate(records):
        rec_id = str(rec.get("district_code") or f"districts[{i}]")
        admin = rec.get("admin_code")
        if not admin:
            errors.append(ValidationError(fname, rec_id, "admin_code", "admin_code 누락"))
        else:
            by_admin[admin] = by_admin.get(admin, 0) + 1

        evidence = rec.get("evidence")
        if not isinstance(evidence, dict):
            errors.append(ValidationError(fname, rec_id, "evidence", "evidence 객체 누락"))
            continue
        if not evidence.get("source_asset_id"):
            errors.append(ValidationError(
                fname, rec_id, "evidence.source_asset_id", "source_asset_id 누락"))
        if evidence.get("pdf_page") is None and not evidence.get("page_label"):
            errors.append(ValidationError(
                fname, rec_id, "evidence.pdf_page",
                "페이지 정보(pdf_page·page_label) 누락"))

    summary["by_admin"] = by_admin
    uiwang = by_admin.get(UIWANG_ADMIN_CODE, 0)
    if uiwang != UIWANG_EXPECTED_COUNT:
        errors.append(ValidationError(
            fname, f"admin_code={UIWANG_ADMIN_CODE}", "admin_code",
            f"의왕시 위험지구 수 불일치: 기대={UIWANG_EXPECTED_COUNT}건, 실제={uiwang}건"))
    return summary


# ---------------------------------------------------------------------------
# 3. rivers.json — 특보 기준유량 산술·안양천 plan_version
# ---------------------------------------------------------------------------

def _station_design_flood(river_id: str, station: dict[str, Any],
                          rec_id: str, errors: list[ValidationError]) -> float | None:
    """지점의 검증 기준 계획홍수량을 얻는다(안양천은 채택 plan_version 수치)."""
    fname = "rivers.json"
    if "design_flood_m3s" in station:  # 요천·구미천 — 단일 수치
        value = station.get("design_flood_m3s")
        if not isinstance(value, (int, float)):
            errors.append(ValidationError(
                fname, rec_id, "design_flood_m3s", f"계획홍수량 수치 아님: {value!r}"))
            return None
        return float(value)

    # 안양천 — plan_version 이중 수치(design_floods 배열)
    floods = station.get("design_floods")
    if not isinstance(floods, list) or not floods:
        errors.append(ValidationError(
            fname, rec_id, "design_floods",
            "design_flood_m3s·design_floods 모두 부재"))
        return None

    basis = (station.get("flood_warning") or {}).get("basis_plan_version")
    chosen: dict[str, Any] | None = None
    for entry in floods:
        if basis and entry.get("plan_version") == basis:
            chosen = entry
            break
    if chosen is None:
        for entry in floods:
            if entry.get("adopted"):
                chosen = entry
                break
    if chosen is None:
        chosen = floods[-1]

    value = chosen.get("design_flood_m3s")
    if not isinstance(value, (int, float)):
        errors.append(ValidationError(
            fname, rec_id, "design_floods.design_flood_m3s",
            f"채택 plan_version({chosen.get('plan_version')}) 계획홍수량 수치 아님: {value!r}"))
        return None
    return float(value)


def validate_rivers(data: Any, errors: list[ValidationError]) -> dict[str, Any]:
    """특보 기준유량=계획홍수량×0.5/0.7 산술 일치·안양천 plan_version 존재 검증."""
    fname = "rivers.json"
    summary: dict[str, Any] = {"rivers": 0, "stations": 0, "warning_checked": 0}
    if not isinstance(data, dict) or not isinstance(data.get("rivers"), list):
        errors.append(ValidationError(fname, "-", "rivers", "최상위 rivers 배열 없음"))
        return summary

    if not isinstance(data.get("warning_flow_rule"), dict):
        errors.append(ValidationError(
            fname, "-", "warning_flow_rule", "warning_flow_rule(반올림 규칙) 누락"))

    summary["rivers"] = len(data["rivers"])
    for river in data["rivers"]:
        river_id = str(river.get("river_id") or river.get("name") or "?")
        # 반올림 규칙(warning_flow_rule.rounding): 요천·구미천 정수, 안양천 소수 1자리
        tolerance = TOL_ONE_DECIMAL if river_id == "RIV-AYC" else TOL_INTEGER
        stations = river.get("stations")
        if not isinstance(stations, list) or not stations:
            errors.append(ValidationError(fname, river_id, "stations", "stations 배열 부재"))
            continue
        summary["stations"] += len(stations)

        for j, station in enumerate(stations):
            rec_id = f"{river_id}/{station.get('station_code') or f'stations[{j}]'}"

            # 안양천 전 지점: design_floods 각 항목 plan_version 필수
            if river_id == "RIV-AYC":
                floods = station.get("design_floods")
                if not isinstance(floods, list) or not floods:
                    errors.append(ValidationError(
                        fname, rec_id, "design_floods", "안양천 지점 design_floods 부재"))
                else:
                    for k, entry in enumerate(floods):
                        if not entry.get("plan_version"):
                            errors.append(ValidationError(
                                fname, rec_id, f"design_floods[{k}].plan_version",
                                "plan_version 누락"))

            design_flood = _station_design_flood(river_id, station, rec_id, errors)
            warning = station.get("flood_warning")
            if not isinstance(warning, dict):
                errors.append(ValidationError(
                    fname, rec_id, "flood_warning", "flood_warning 객체 누락"))
                continue
            if design_flood is None:
                continue

            for field, ratio, label in (
                ("advisory_m3s", ADVISORY_RATIO, "주의보(×0.5)"),
                ("alert_m3s", ALERT_RATIO, "경보(×0.7)"),
            ):
                recorded = warning.get(field)
                if not isinstance(recorded, (int, float)):
                    errors.append(ValidationError(
                        fname, rec_id, f"flood_warning.{field}",
                        f"{label} 기준유량 수치 아님: {recorded!r}"))
                    continue
                expected = design_flood * ratio
                if abs(float(recorded) - expected) > tolerance:
                    errors.append(ValidationError(
                        fname, rec_id, f"flood_warning.{field}",
                        f"{label} 산술 불일치: 계획홍수량 {design_flood:g}×{ratio}"
                        f"={expected:g}, 기재값={recorded:g}, 허용오차=±{tolerance:.2f}"))
                else:
                    summary["warning_checked"] += 1
    return summary


# ---------------------------------------------------------------------------
# 4. geo.json — FeatureCollection 유효성
# ---------------------------------------------------------------------------

def validate_geo(data: Any, errors: list[ValidationError]) -> dict[str, Any]:
    """FeatureCollection 유효성(type·features·geometry·properties.layer) 검증."""
    fname = "geo.json"
    summary: dict[str, Any] = {"features": 0, "by_layer": {}}
    if not isinstance(data, dict):
        errors.append(ValidationError(fname, "-", "-", "최상위가 객체가 아님"))
        return summary
    if data.get("type") != "FeatureCollection":
        errors.append(ValidationError(
            fname, "-", "type", f"FeatureCollection 아님: {data.get('type')!r}"))
    features = data.get("features")
    if not isinstance(features, list) or not features:
        errors.append(ValidationError(fname, "-", "features", "features 배열 부재/비어 있음"))
        return summary

    summary["features"] = len(features)
    by_layer: dict[str, int] = {}
    for i, feature in enumerate(features):
        props = feature.get("properties") if isinstance(feature, dict) else None
        rec_id = str((props or {}).get("id") or f"features[{i}]")
        if not isinstance(feature, dict) or feature.get("type") != "Feature":
            errors.append(ValidationError(
                fname, rec_id, "type", "Feature 타입 아님"))
            continue
        geometry = feature.get("geometry")
        if not isinstance(geometry, dict):
            errors.append(ValidationError(fname, rec_id, "geometry", "geometry 객체 누락"))
        else:
            if geometry.get("type") not in GEOMETRY_TYPES:
                errors.append(ValidationError(
                    fname, rec_id, "geometry.type",
                    f"유효하지 않은 geometry 타입: {geometry.get('type')!r}"))
            if not geometry.get("coordinates"):
                errors.append(ValidationError(
                    fname, rec_id, "geometry.coordinates", "coordinates 부재"))
        if not isinstance(props, dict):
            errors.append(ValidationError(fname, rec_id, "properties", "properties 객체 누락"))
            continue
        layer = props.get("layer")
        if layer not in GEO_VALID_LAYERS:
            errors.append(ValidationError(
                fname, rec_id, "properties.layer",
                f"layer 값 없음/무효(L1~L4 아님): {layer!r}"))
        else:
            by_layer[layer] = by_layer.get(layer, 0) + 1
    summary["by_layer"] = by_layer
    return summary


# ---------------------------------------------------------------------------
# 산출 — data/processed/ 반영
# ---------------------------------------------------------------------------

def write_output(filename: str, data: Any) -> Path:
    """검증 통과한 시드를 data/processed/에 동일 파일명·구조로 직렬화한다."""
    out_path = PROCESSED_DIR / filename
    with out_path.open("w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    return out_path


def main() -> int:
    ensure_output_dirs()
    errors: list[ValidationError] = []
    loaded: dict[str, Any] = {}

    for filename in SEED_FILES:
        data = load_seed(filename, errors)
        if data is not None:
            loaded[filename] = data

    summaries: dict[str, dict[str, Any]] = {}
    validators = {
        "criteria.json": validate_criteria,
        "districts.json": validate_districts,
        "rivers.json": validate_rivers,
        "geo.json": validate_geo,
    }
    for filename, validator in validators.items():
        if filename in loaded:
            summaries[filename] = validator(loaded[filename], errors)

    print("=" * 64)
    print("정형데이터 빌더 — data/manual 시드 4종 검증 결과")
    print("=" * 64)

    if errors:
        print(f"검증 실패 {len(errors)}건:")
        for err in errors:
            print(f"  - {err}")
        print("\ndata/processed/ 반영 중단 (원본 data/manual 수정 후 재실행)")
        return 1

    # 전 항목 통과 시에만 산출
    written: list[Path] = []
    for filename in SEED_FILES:
        written.append(write_output(filename, loaded[filename]))

    c = summaries["criteria.json"]
    d = summaries["districts.json"]
    r = summaries["rivers.json"]
    g = summaries["geo.json"]
    print(f"criteria.json  : 판단기준 {c['criteria_count']}종 — Event/T코드 5쌍 일치, "
          f"근거출처 {c['source_registry_count']}건")
    print(f"districts.json : 위험지구 {d['total']}건 "
          f"(의왕 {d['by_admin'].get('41430', 0)}·구미 {d['by_admin'].get('47190', 0)}"
          f"·남원 {d['by_admin'].get('45190', 0)}) — 전 레코드 evidence 확인")
    print(f"rivers.json    : 하천 {r['rivers']}종·지점 {r['stations']}개 — "
          f"특보 기준유량(×0.5/×0.7) 산술검증 {r['warning_checked']}건 통과, "
          f"안양천 plan_version 확인")
    print(f"geo.json       : FeatureCollection {g['features']} Feature "
          f"(L1 {g['by_layer'].get('L1', 0)}·L2 {g['by_layer'].get('L2', 0)}"
          f"·L3 {g['by_layer'].get('L3', 0)})")
    print("-" * 64)
    print(f"산출 완료 → {PROCESSED_DIR}")
    for path in written:
        print(f"  - {path.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
