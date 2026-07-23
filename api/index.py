"""Vercel Python 서버리스 엔트리 — apps/api FastAPI 앱을 그대로 노출.

- apps/api는 flat 임포트(from config import …) 구조라 sys.path에 추가한다.
- Vercel 런타임이 ASGI(app)를 직접 서빙 — uvicorn 불필요.
- 데이터(data/processed·data/manual)는 vercel.json functions.includeFiles로 번들.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "apps" / "api"))

from main import app  # noqa: E402, F401 — Vercel이 참조하는 ASGI 앱
