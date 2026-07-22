"""앱 설정·경로 상수.

- 리포 루트: apps/api/config.py 기준 두 단계 상위.
- 데이터 경로: data/processed/ 우선, 없으면 data/manual/ 폴백
  (processed는 gitignore 대상 — 신규 클론에서도 기동 가능해야 한다).
"""
from __future__ import annotations

import os
from pathlib import Path

# 리포 루트 (D:\vibecoding\disaster)
REPO_ROOT: Path = Path(__file__).resolve().parents[2]

DATA_PROCESSED: Path = REPO_ROOT / "data" / "processed"
DATA_MANUAL: Path = REPO_ROOT / "data" / "manual"

# CORS 허용 오리진 (프론트 dev 서버)
CORS_ORIGINS: list[str] = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# LLM: 미설정 시 mock 폴백
ANTHROPIC_API_KEY: str | None = os.environ.get("ANTHROPIC_API_KEY") or None
ANTHROPIC_MODEL: str = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-5")

# VWorld (파이프라인·2D 데이터 API용 — 미설정 허용)
VWORLD_API_KEY: str | None = os.environ.get("VWORLD_API_KEY") or None


def data_path(filename: str) -> Path:
    """data/processed/{filename} 우선, 없으면 data/manual/{filename} 폴백.

    둘 다 없으면 processed 경로를 그대로 반환한다(존재 검사는 호출부 책임).
    """
    processed = DATA_PROCESSED / filename
    if processed.exists():
        return processed
    manual = DATA_MANUAL / filename
    if manual.exists():
        return manual
    return processed
