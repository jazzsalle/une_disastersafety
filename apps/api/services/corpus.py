"""코퍼스·정형 데이터 로더 (기동 시 1회 로드, 모듈 캐시 싱글턴).

데이터 경로는 config.data_path()가 결정한다(data/processed/ 우선, data/manual/ 폴백).

T2~T5가 공유하는 고정 접근자(반환 구조는 원본 파일 루트 그대로):
- get_chunks()    -> list[dict]  : chunks.jsonl 청크 목록(파일 없으면 빈 리스트 —
                                   processed는 gitignore라 신규 클론에서도 기동해야 함).
                                   각 청크: passage_id, evidence_unit_id, source_asset_id,
                                   doc_title, doc_type, publisher, admin_code, admin_name,
                                   hazard_codes[], hazard_event_codes[], disaster_kind,
                                   river_name, chapter, section, page_start, page_end,
                                   content, tables[], page_label_start, page_label_end,
                                   page_label_fallback, file, (plan_version — 안양천만)
- get_criteria()  -> dict        : criteria.json 루트 {dataset, ..., criteria:[5종]}
- get_districts() -> dict        : districts.json 루트 {dataset, counts, districts:[29건]}
- get_rivers()    -> dict        : rivers.json 루트 {dataset, warning_flow_rule, rivers:[3건]}
- get_geo()       -> dict        : geo.json FeatureCollection {type, metadata, features:[35]}
"""
from __future__ import annotations

import json
import threading
from typing import Any

from config import data_path

_lock = threading.Lock()
_cache: dict[str, Any] = {}


def _load_json(filename: str) -> dict:
    path = data_path(filename)
    if not path.exists():
        raise FileNotFoundError(
            f"데이터 파일 없음: {filename} (data/processed·data/manual 모두 부재)"
        )
    return json.loads(path.read_text(encoding="utf-8"))


def _load_chunks() -> list[dict]:
    path = data_path("chunks.jsonl")
    if not path.exists():
        # processed는 gitignore — 신규 클론에서는 파이프라인 실행 전이므로 빈 코퍼스로 기동
        return []
    chunks: list[dict] = []
    with path.open(encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                chunks.append(json.loads(line))
    return chunks


def _get(key: str, loader) -> Any:
    if key not in _cache:
        with _lock:
            if key not in _cache:
                _cache[key] = loader()
    return _cache[key]


def get_chunks() -> list[dict]:
    """chunks.jsonl 청크 목록 (문서 6종 코퍼스, 3,974건 — 파일 없으면 [])."""
    return _get("chunks", _load_chunks)


def get_criteria() -> dict:
    """criteria.json 루트 dict — criteria[] 5종(HEAVY_RAIN·FLOOD·INUNDATION·TYPHOON·LANDSLIDE)."""
    return _get("criteria", lambda: _load_json("criteria.json"))


def get_districts() -> dict:
    """districts.json 루트 dict — districts[] 29건(의왕 17·구미 6·남원 6)."""
    return _get("districts", lambda: _load_json("districts.json"))


def get_rivers() -> dict:
    """rivers.json 루트 dict — rivers[] 3건(RIV-YC·RIV-GMC·RIV-AYC)·warning_flow_rule."""
    return _get("rivers", lambda: _load_json("rivers.json"))


def get_geo() -> dict:
    """geo.json GeoJSON FeatureCollection — metadata.layer_counts {L1:29, L2:3, L3:3}."""
    return _get("geo", lambda: _load_json("geo.json"))


def reset_cache() -> None:
    """모듈 캐시 초기화(테스트용)."""
    with _lock:
        _cache.clear()
