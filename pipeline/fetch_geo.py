"""지리 시드 생성·VWorld 배치 조회 — `data/manual/geo.json` (T8).

레이어 구성(docs/03 화면설계 L1~L4, docs/05 §3.2~3.3):
- L3: 시군구 경계 3건(의왕 41430·구미 47190·남원 45190).
  기본은 내장 근사 폴리곤(``provisional: true``) — `VWORLD_API_KEY` 설정 시
  VWorld 2D데이터 API(`LT_C_ADSIGG_INFO`) 실경계로 교체.
- L1: 위험지구 대표점(Point) — districts.json의 관리대장 경위도 우선.
- L4: 좌표 없는 지구(남원 6건) — geometry null·주소만 유지(목록 폴백).
  키 설정 시 지오코더 API(type=PARCEL)로 좌표 보완 → L1 승격.
- L2: 하천 구간 3건(요천·구미천·안양천 의왕구간) — 대표 좌표 근사선
  LineString(``provisional: true``). 하천중심선(`LT_C_WKMSTRM`) 실선형
  교체는 레이어 필터 확정 후 적용(docs/05 §3.3).

동작 원칙:
- 이 스크립트는 geo.json을 시드(districts.json·rivers.json·내장 근사 도형)와
  캐시(`data/processed/geo_cache/`)로부터 **결정적으로 재생성**한다.
- `VWORLD_API_KEY` 미설정 시: VWorld 호출 없이 시드/캐시만으로 생성하고
  안내를 출력한 뒤 정상 종료(exit 0).
- 호출 결과는 캐시에 저장 — 재실행 시 재호출하지 않는다(docs/05 §3.2).
- 키는 os.environ만 참조(하드코딩 금지). 로컬 `.env`가 있으면 로드한다
  (.env는 gitignore 대상 — 커밋 금지).

실행: `python pipeline/fetch_geo.py`
"""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import MANUAL_DIR, PROCESSED_DIR, REPO_ROOT  # noqa: E402

GEO_PATH = MANUAL_DIR / "geo.json"
DISTRICTS_PATH = MANUAL_DIR / "districts.json"
RIVERS_PATH = MANUAL_DIR / "rivers.json"
CACHE_DIR = PROCESSED_DIR / "geo_cache"

VWORLD_DATA_URL = "https://api.vworld.kr/req/data"
VWORLD_ADDRESS_URL = "https://api.vworld.kr/req/address"
REQUEST_TIMEOUT_SEC = 15

# ---------------------------------------------------------------------------
# L3 — 시군구 근사 경계(provisional). fetch 성공 시 실경계로 교체된다.
# 좌표는 십진도(EPSG:4326) [lon, lat]. 행정경계 개형을 근사한 폴리곤.
# ---------------------------------------------------------------------------

ADMIN_REGIONS: list[dict[str, Any]] = [
    {
        "admin_code": "41430",
        "admin_name": "경기도 의왕시",
        "short_name": "의왕시",
        "provisional_ring": [
            [126.930, 37.285], [126.905, 37.325], [126.910, 37.365],
            [126.950, 37.405], [126.995, 37.420], [127.040, 37.410],
            [127.065, 37.375], [127.050, 37.330], [127.000, 37.295],
            [126.930, 37.285],
        ],
    },
    {
        "admin_code": "47190",
        "admin_name": "경상북도 구미시",
        "short_name": "구미시",
        "provisional_ring": [
            [128.200, 36.060], [128.150, 36.150], [128.180, 36.280],
            [128.280, 36.400], [128.420, 36.420], [128.550, 36.330],
            [128.560, 36.180], [128.450, 36.060], [128.300, 36.020],
            [128.200, 36.060],
        ],
    },
    {
        "admin_code": "45190",
        "admin_name": "전라북도 남원시",
        "short_name": "남원시",
        # 2024년 전북특별자치도 출범으로 VWorld 최신 경계 레이어의 시군구코드가
        # 45190→52190으로 변경 — 프로젝트 태깅(45190)은 유지하고 조회만 폴백.
        "query_codes": ["45190", "52190"],
        "provisional_ring": [
            [127.300, 35.290], [127.230, 35.370], [127.250, 35.480],
            [127.350, 35.580], [127.500, 35.630], [127.650, 35.580],
            [127.730, 35.460], [127.680, 35.340], [127.500, 35.270],
            [127.300, 35.290],
        ],
    },
]

# ---------------------------------------------------------------------------
# L2 — 하천 구간 근사선(provisional). river_id는 rivers.json과 일치.
# ---------------------------------------------------------------------------

RIVER_LINES: dict[str, dict[str, Any]] = {
    "RIV-YC": {
        "coordinates": [
            [127.462, 35.443], [127.428, 35.425], [127.398, 35.408],
            [127.372, 35.386], [127.348, 35.362], [127.322, 35.341],
        ],
        "geometry_note": "요천 국가하천 구간(이백면 척문리 시점→금지면 하도리 섬진강 합류점) 근사 중심선 — 대표 좌표 6점",
    },
    "RIV-GMC": {
        "coordinates": [
            [128.318, 36.082], [128.325, 36.100], [128.331, 36.118],
            [128.335, 36.134], [128.348, 36.142], [128.358, 36.147],
        ],
        "geometry_note": "구미천 지정구간(수점동 시점→신평동 낙동강 합류점) 근사 중심선 — 대표 좌표 6점",
    },
    "RIV-AYC": {
        "coordinates": [
            [126.985, 37.332], [126.979, 37.341], [126.972, 37.350],
            [126.965, 37.356], [126.958, 37.361],
        ],
        "geometry_note": "안양천 의왕 과업구간(No.8+122~No.11+411, 왕곡동→오전동 의왕·군포시계) 근사 중심선 — 대표 좌표 5점",
    },
}


# ---------------------------------------------------------------------------
# 유틸
# ---------------------------------------------------------------------------

def load_dotenv(path: Path) -> None:
    """로컬 .env를 파싱해 os.environ에 없는 항목만 채운다(커밋 금지 파일)."""
    if not path.is_file():
        return
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key, value = key.strip(), value.strip().strip('"').strip("'")
        if key and value and key not in os.environ:
            os.environ[key] = value


def read_json(path: Path) -> Any:
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def write_json(path: Path, obj: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(obj, fh, ensure_ascii=False, indent=2)
        fh.write("\n")


def http_get_json(base_url: str, params: dict[str, str]) -> Any:
    url = f"{base_url}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"Referer": "http://localhost"})
    with urllib.request.urlopen(req, timeout=REQUEST_TIMEOUT_SEC) as resp:
        return json.loads(resp.read().decode("utf-8"))


def normalize_address(admin_name: str, location: str) -> str:
    """지오코더(type=PARCEL) 입력용 지번주소 정규화 — '일원'·괄호 제거."""
    addr = location
    for token in (" 일원", "일원"):
        addr = addr.replace(token, "")
    if "(" in addr:
        addr = addr.split("(")[0]
    addr = addr.replace("번지", "").strip()
    prefix = admin_name.split()[0]  # "전라북도" 등 시도명
    if not addr.startswith(prefix):
        addr = f"{prefix} {addr}"
    return addr


# ---------------------------------------------------------------------------
# VWorld 호출(캐시 우선)
# ---------------------------------------------------------------------------

def fetch_sigungu_boundary(admin_code: str, key: str | None,
                           query_codes: list[str] | None = None) -> dict[str, Any] | None:
    """시군구 실경계 geometry(GeoJSON) — 캐시 우선, 키 있으면 VWorld 2D데이터 API.

    query_codes: VWorld 레이어 조회용 시군구코드 후보(행정코드 개편 폴백).
    """
    cache_path = CACHE_DIR / f"sigungu_{admin_code}.json"
    if cache_path.is_file():
        cached = read_json(cache_path)
        return cached.get("geometry")
    if not key:
        return None
    for query_code in query_codes or [admin_code]:
        params = {
            "service": "data",
            "request": "GetFeature",
            "data": "LT_C_ADSIGG_INFO",
            "attrFilter": f"sig_cd:=:{query_code}",
            "key": key,
            "format": "json",
            "geometry": "true",
            "crs": "EPSG:4326",
            "size": "10",
            "domain": os.environ.get("VWORLD_DOMAIN", "localhost"),
        }
        try:
            data = http_get_json(VWORLD_DATA_URL, params)
            response = data.get("response", {})
            if response.get("status") != "OK":
                print(f"  [경고] LT_C_ADSIGG_INFO {query_code} 응답 상태: "
                      f"{response.get('status')} — {response.get('error', {})}")
                continue
            features = (
                response.get("result", {})
                .get("featureCollection", {})
                .get("features", [])
            )
            if not features:
                print(f"  [경고] LT_C_ADSIGG_INFO {query_code} 결과 없음")
                continue
            geometry = features[0].get("geometry")
            if geometry:
                write_json(cache_path, {"admin_code": admin_code,
                                        "query_code": query_code,
                                        "geometry": geometry,
                                        "api": "LT_C_ADSIGG_INFO"})
                return geometry
        except (urllib.error.URLError, OSError, ValueError) as exc:
            print(f"  [경고] LT_C_ADSIGG_INFO {query_code} 호출 실패: {exc}")
    return None


def fetch_geocode(district_code: str, address: str, key: str | None) -> dict[str, float] | None:
    """지번주소 → 좌표(지오코더 API type=PARCEL) — 캐시 우선."""
    cache_path = CACHE_DIR / f"geocode_{district_code}.json"
    if cache_path.is_file():
        cached = read_json(cache_path)
        return cached.get("point")
    if not key:
        return None
    params = {
        "service": "address",
        "request": "getcoord",
        "version": "2.0",
        "crs": "epsg:4326",
        "type": "PARCEL",
        "address": address,
        "refine": "true",
        "simple": "false",
        "format": "json",
        "key": key,
        "domain": os.environ.get("VWORLD_DOMAIN", "localhost"),
    }
    try:
        data = http_get_json(VWORLD_ADDRESS_URL, params)
        response = data.get("response", {})
        if response.get("status") != "OK":
            print(f"  [경고] 지오코더 {district_code}({address}) 응답 상태: "
                  f"{response.get('status')} — {response.get('error', {})}")
            return None
        point_raw = response.get("result", {}).get("point", {})
        point = {"lon": float(point_raw["x"]), "lat": float(point_raw["y"])}
        write_json(cache_path, {"district_code": district_code, "address": address,
                                "point": point, "api": "geocoder(getcoord/PARCEL)"})
        return point
    except (urllib.error.URLError, OSError, ValueError, KeyError) as exc:
        print(f"  [경고] 지오코더 {district_code}({address}) 호출 실패: {exc}")
        return None


# ---------------------------------------------------------------------------
# Feature 빌더
# ---------------------------------------------------------------------------

def build_l3_features(key: str | None) -> tuple[list[dict[str, Any]], int, int]:
    features: list[dict[str, Any]] = []
    fetched = 0
    provisional = 0
    for region in ADMIN_REGIONS:
        geometry = fetch_sigungu_boundary(region["admin_code"], key,
                                          region.get("query_codes"))
        if geometry is not None:
            fetched += 1
            source = "VWorld 2D데이터 API LT_C_ADSIGG_INFO(sig_cd=" + region["admin_code"] + ") 실경계"
            is_provisional = False
        else:
            provisional += 1
            geometry = {"type": "Polygon", "coordinates": [region["provisional_ring"]]}
            source = ("행정경계 개형 근사 폴리곤(시드) — pipeline/fetch_geo.py 실행 시 "
                      "VWorld LT_C_ADSIGG_INFO 실경계로 교체")
            is_provisional = True
        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": {
                "id": region["admin_code"],
                "name": region["admin_name"],
                "admin_code": region["admin_code"],
                "layer": "L3",
                "provisional": is_provisional,
                "source": source,
            },
        })
    return features, fetched, provisional


def build_district_features(districts: list[dict[str, Any]],
                            key: str | None) -> tuple[list[dict[str, Any]], int]:
    """L1(좌표 보유)·L4(좌표 없음 폴백) Feature 목록과 지오코딩 성공 수를 반환."""
    features: list[dict[str, Any]] = []
    geocoded = 0
    for d in districts:
        evidence = d.get("evidence") or {}
        props: dict[str, Any] = {
            "id": d["district_code"],
            "name": d["district_name"],
            "admin_code": d["admin_code"],
            "admin_name": d.get("admin_name"),
            "layer": "L1",
            "disaster_type": d.get("disaster_type"),
            "hazard_codes": d.get("hazard_codes", []),
            "location": d.get("location"),
            "river_name": d.get("river_name"),
            "source": {
                "source_asset_id": evidence.get("source_asset_id"),
                "doc_title": evidence.get("doc_title"),
                "page_label": evidence.get("page_label"),
            },
        }
        coords = d.get("coordinates")
        if coords and coords.get("lat") is not None and coords.get("lon") is not None:
            geometry = {"type": "Point",
                        "coordinates": [coords["lon"], coords["lat"]]}
            props["coord_source"] = coords.get("source", "관리대장 경위도")
        else:
            address = normalize_address(d.get("admin_name") or "", d.get("location") or "")
            point = fetch_geocode(d["district_code"], address, key)
            if point is not None:
                geocoded += 1
                geometry = {"type": "Point",
                            "coordinates": [point["lon"], point["lat"]]}
                props["coord_source"] = "VWorld 지오코더 API(getcoord/PARCEL) 주소 변환"
                props["geocoded_address"] = address
            else:
                geometry = None
                props["layer"] = "L4"
                props["coord_source"] = None
                props["fallback_reason"] = ("원문(주요현황 서식) 경위도 미기재 — "
                                            "지오코딩 전 목록(L4) 폴백, 주소만 유지")
        features.append({"type": "Feature", "geometry": geometry, "properties": props})
    return features, geocoded


def build_l2_features(rivers: list[dict[str, Any]]) -> list[dict[str, Any]]:
    features: list[dict[str, Any]] = []
    for river in rivers:
        river_id = river["river_id"]
        line = RIVER_LINES[river_id]
        profile = river.get("profile_evidence") or {}
        features.append({
            "type": "Feature",
            "geometry": {"type": "LineString", "coordinates": line["coordinates"]},
            "properties": {
                "id": river_id,
                "name": river["name"],
                "admin_code": river["admin_code"],
                "admin_name": river.get("admin_name"),
                "layer": "L2",
                "grade": river.get("grade"),
                "provisional": True,
                "geometry_note": line["geometry_note"],
                "source": {
                    "source_asset_id": river.get("source_asset_id"),
                    "plan_name": river.get("plan_name"),
                    "doc": profile.get("doc"),
                    "chapter_page": profile.get("chapter_page"),
                },
            },
        })
    return features


# ---------------------------------------------------------------------------
# 메인
# ---------------------------------------------------------------------------

def main() -> int:
    # Windows 콘솔(cp949)에서 유니코드 문구 출력 오류 방지
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(encoding="utf-8", errors="replace")
    load_dotenv(REPO_ROOT / ".env")
    key = os.environ.get("VWORLD_API_KEY") or None
    if key:
        print("VWORLD_API_KEY 설정 확인 — VWorld 실경계·지오코딩 조회 시도(캐시 우선)")
        CACHE_DIR.mkdir(parents=True, exist_ok=True)
    else:
        print("VWORLD_API_KEY 미설정 — VWorld 호출 없이 시드/캐시만으로 geo.json 생성")
        print("(실경계·지오코딩 보완은 .env에 VWORLD_API_KEY 기입 후 재실행)")

    districts = read_json(DISTRICTS_PATH)["districts"]
    rivers = read_json(RIVERS_PATH)["rivers"]

    l3_features, l3_fetched, l3_provisional = build_l3_features(key)
    district_features, geocoded = build_district_features(districts, key)
    l2_features = build_l2_features(rivers)

    features = l3_features + l2_features + district_features
    counts = {
        "L1": sum(1 for f in features if f["properties"]["layer"] == "L1"),
        "L2": len(l2_features),
        "L3": len(l3_features),
        "L4": sum(1 for f in features if f["properties"]["layer"] == "L4"),
    }
    geo = {
        "type": "FeatureCollection",
        "name": "disaster_poc_geo_seed",
        "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
        "metadata": {
            "dataset": "geo",
            "version": "0.1",
            "description": ("지자체 3곳 경계(L3)·위험지구 대표점(L1/L4 폴백)·하천 구간 근사선(L2) "
                            "GeoJSON 시드 — pipeline/fetch_geo.py가 districts.json·rivers.json·캐시로부터 생성"),
            "crs_note": "EPSG:4326(경도, 위도 순)",
            "layer_counts": counts,
            "l3_realboundary_count": l3_fetched,
            "provisional_note": "provisional=true Feature는 근사 도형 — VWorld 조회 성공 시 실도형으로 교체",
        },
        "features": features,
    }
    write_json(GEO_PATH, geo)

    provisional_total = sum(
        1 for f in features if f["properties"].get("provisional") is True
    )
    print(f"geo.json 생성 완료: {GEO_PATH}")
    print(f"  Feature {len(features)}건 — L1 {counts['L1']} / L2 {counts['L2']} / "
          f"L3 {counts['L3']} / L4 {counts['L4']}")
    print(f"  L3 실경계 {l3_fetched}건 · L3 근사 {l3_provisional}건 · "
          f"지오코딩 보완 {geocoded}건 · provisional {provisional_total}건")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
