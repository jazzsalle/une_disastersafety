# 06. UNI RAG System 챗봇 연동 계획

- 작성일: 2026-07-23 · 버전 v0.1
- 요구사항: 시범서비스의 LLM 대화 기능(챗봇)은 사내 **UNI RAG System**의 **main chat API**를 연계한다.
- 근거 자료: UNI RAG OpenAPI(`http://221.147.100.161:8000/docs`, v1.1.0) · UNE HR 외부 연동 가이드(`https://hr.unes.kr/api/external/guide` — 토큰 링크는 별도 보관, 커밋 금지)

## 1. 연동 대상 시스템

| 항목 | 값 |
|---|---|
| 시스템명 | UNI RAG System (v1.1.0, FastAPI) |
| Base URL | `http://221.147.100.161:8000` (환경변수 `UNI_RAG_BASE_URL`) |
| 인증 | `POST /auth/login` — **UNE 계정**(account/password)으로 로그인 → 자체 JWT 발급 |
| 헬스체크 | `GET /health` → `{"status":"ok"}` (2026-07-23 확인) |

UNE HR 외부 연동 API(`https://hr.unes.kr/api/external/*`)는 UNI RAG 서버가 내부적으로 계정 검증에 사용하는 상위 시스템이다. **클라이언트(본 POC)는 UNI RAG의 `/auth/login`만 호출하면 되고, HR API를 직접 호출할 필요는 없다**(HR 가이드는 참고용: JWT 24시간 유효, 레이트리밋 15분당 300회, POST `/api/external/auth`·`/verify` 등).

## 2. main chat API (챗봇이 사용할 엔드포인트)

### 2.1 `POST /chat/` — 메인 채팅 (JWT 필요) ★ 챗봇 연결 대상
- `stream=true`(기본): **SSE 스트리밍** 응답(StreamingResponse)
- `stream=false`: 일반 JSON 응답(`rag_query()` 결과)

요청 스키마 `ChatRequest`:

```json
{
  "query": "필수. 사용자 질의",
  "model_key": "선택. 기본 qwen3.5-35b",
  "history": [ { "role": "...", "content": "..." } ],
  "stream": true,
  "top_k": 5,
  "session_id": "선택. 세션 관리 API로 생성 시 대화 연속성",
  "thinking": false,
  "source": "선택. 참조 코퍼스 지정(문자열)"
}
```

### 2.2 보조 엔드포인트
| Method·Path | 용도 | 인증 |
|---|---|---|
| `POST /auth/login` | UNE 계정 로그인 → JWT | - |
| `GET /models/` | 모델 목록·가용 여부 | - |
| `POST /chat/json` | 비스트리밍 간이 질의(JsonChatRequest: query·model_key·top_k) | - (무인증) |
| `POST /sessions/` · `GET /sessions/{id}` 등 | 대화 세션 생성·조회·모델 변경 | JWT |
| `GET /chat/files/{file_id}` | 서버 생성 파일 다운로드(json·hwpx·svg) | - |
| `POST /documents/upload` 등 | 코퍼스 문서 업로드/관리 | JWT |

### 2.3 모델 목록 (2026-07-23 조회)
| model_key | 라벨 | 비고 |
|---|---|---|
| `qwen3.5-35b` | Qwen3.5 35B | 복잡·장문 처리, **세션 기본값** |
| `exaone-32b` | EXAONE 4.0 32B | 한국어 메인 |
| `qwen3-coder-next` | Qwen3-Coder-Next | 코딩·분석 특화 |

주의: 조회 시점에 3종 모두 `available: false`(GPU 서버 대기 상태로 추정) — 실 연동 시 `GET /models/`로 가용 모델 확인 후 선택 필요.

## 3. POC 통합 설계

```
[apps/web ChatPanel] ── POST /api/chat (SSE 중계) ──▶ [apps/api services/uni_rag.py]
                                                        │ ①기동/만료 시 POST /auth/login → JWT 캐시
                                                        │ ②POST /chat/ (Bearer JWT, stream=true)
                                                        ▼
                                                  [UNI RAG System :8000]
```

- **어댑터 분리 원칙(T3Q 연계 대비와 동일)**: UNI RAG 호출은 `apps/api/services/uni_rag.py` 어댑터로 격리. 라우터(`/api/chat`)·프론트 계약은 향후 T3Q AI Agent로 교체돼도 불변.
- **자격증명은 백엔드 전용**: `UNI_RAG_ACCOUNT`/`UNI_RAG_PASSWORD`는 apps/api의 환경변수(.env)로만 관리, 프론트에 JWT·계정 노출 금지. `/api/chat`가 서버사이드 프록시로 SSE를 중계한다.
- **JWT 수명 관리**: 로그인 토큰 캐시 후 401 응답 시 1회 재로그인·재시도(HR 가이드 기준 24시간 유효 추정).
- **mock 폴백**: `UNI_RAG_ACCOUNT` 미설정 또는 로그인/호출 실패 시 결정적 mock 응답(로컬 검색 상위 청크 기반)으로 폴백 — 데모 재현성 보장, 프론트에 "mock 모드" 배지 표기.
- **역할 분담(권장안)**:
  - 대화형 챗봇(자유 질의) → UNI RAG `POST /chat/` (main chat API)
  - 근거 기반 RAG 응답(모듈⑤ 정합성·citations) → 기존 로컬 BM25+Claude/mock (`/api/ask`) 유지 — UNI RAG에는 아직 재난 코퍼스가 없으므로 citations 체계(passage_id·장-쪽)는 로컬 엔진이 담당
- 환경변수: `UNI_RAG_BASE_URL`(기본 `http://221.147.100.161:8000`) · `UNI_RAG_ACCOUNT` · `UNI_RAG_PASSWORD` · `UNI_RAG_MODEL_KEY`(선택, 미설정 시 서버 기본)

## 4. 미결정 사항 (사용자 확인 필요 — PROGRESS.md 참조)
1. **UNE 계정**: 챗봇 연동에 사용할 계정(개인 계정 vs 서비스 계정) 미정 — 자격증명 미보유로 실 로그인·chat 호출 미검증(구현은 mock 폴백으로 진행)
2. **모델 가용성**: 3종 모두 `available:false` 상태 — 실 데모 시점 GPU 서버 가동 여부 확인 필요
3. **재난 코퍼스 업로드 여부**: `POST /documents/upload`로 chunks 코퍼스를 UNI RAG에 올려 `source` 파라미터로 참조시킬지(현재 권장: 보류 — 로컬 RAG가 근거응답 담당)
4. **세션 관리 사용 여부**: `session_id` 기반 대화 연속성(권장: POC는 프론트 history 전달로 단순화, 세션 API는 2차)
