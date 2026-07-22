"""재난안전 AI 시범 서비스 — FastAPI 앱 엔트리.

- CORS: 프론트 dev 서버(http://localhost:5173) 허용
- GET /api/health: 코퍼스 로드 상태 요약
- routers/ 하위 모듈의 `router`(APIRouter)를 자동 등록 — 후속 태스크(T2~T5)가
  모듈만 추가하면 되고, 라우터 부재·개별 임포트 실패로 기동이 막히지 않는다.
"""
from __future__ import annotations

import importlib
import logging
import pkgutil

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import CORS_ORIGINS
from services import corpus

logger = logging.getLogger("disaster.api")

app = FastAPI(
    title="재난안전 AI 시범 서비스 API",
    description="자연재해저감종합계획·하천기본계획 코퍼스 기반 검색·RAG API (1차 POC)",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _register_routers(target: FastAPI) -> None:
    """routers/ 패키지의 모든 모듈을 순회하며 `router` 속성이 있으면 등록한다."""
    import routers as routers_pkg

    for mod_info in pkgutil.iter_modules(routers_pkg.__path__):
        name = f"{routers_pkg.__name__}.{mod_info.name}"
        try:
            module = importlib.import_module(name)
        except Exception:  # noqa: BLE001 — 개별 라우터 실패가 앱 기동을 막지 않도록
            logger.exception("라우터 모듈 임포트 실패(건너뜀): %s", name)
            continue
        router = getattr(module, "router", None)
        if router is not None:
            target.include_router(router, prefix="/api")
            logger.info("라우터 등록: %s", name)


_register_routers(app)


@app.get("/api/health")
def health() -> dict:
    """기동·데이터 로드 상태 확인."""
    return {
        "status": "ok",
        "corpus": {
            "chunks": len(corpus.get_chunks()),
            "criteria": len(corpus.get_criteria().get("criteria", [])),
            "districts": len(corpus.get_districts().get("districts", [])),
            "rivers": len(corpus.get_rivers().get("rivers", [])),
            "geo_features": len(corpus.get_geo().get("features", [])),
        },
    }
