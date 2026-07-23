"""앱 설정·경로 상수.

- 리포 루트: apps/api/config.py 기준 두 단계 상위.
- 데이터 경로: data/processed/ 우선, 없으면 data/manual/ 폴백
  (processed는 gitignore 대상 — 신규 클론에서도 기동 가능해야 한다).
- 환경변수: 리포 루트 .env를 기동 시 로드(셸에 이미 설정된 값이 우선).
  테스트는 monkeypatch.delenv로 격리하므로 로드돼 있어도 외부 호출 없음.
"""
from __future__ import annotations

import os
from pathlib import Path

# 리포 루트 (D:\vibecoding\disaster)
REPO_ROOT: Path = Path(__file__).resolve().parents[2]


def _load_dotenv(path: Path) -> None:
    """루트 .env를 파싱해 os.environ에 없는 항목만 채운다(pipeline/fetch_geo.py와 동일 규약)."""
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


_load_dotenv(REPO_ROOT / ".env")

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
