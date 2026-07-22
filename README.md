# 재난안전 AI 시범 서비스 (1차 POC)

NIA 「재난안전 AI데이터 구축」 사업(티쓰리큐 컨소시엄)에서 **유엔이(UNE) 담당분인 AI Agent 실증 서비스·시각화 화면**의 선행 1차 POC.
자연재해저감종합계획·하천기본계획 문서를 재난메타 체계로 구조화해, **재난 상황 입력 → RAG 검색(유사사례) → 근거 기반 응답 → 지도·시각화 표출**을 실증한다.

- **대상 지자체(1차 POC)**: 의왕시 · 구미시 · 남원시 (본사업 목표: 부산/인제/영천)
- **대상 재난 5종**: 호우(HEAVY_RAIN·T10107) · 홍수(FLOOD·T10206) · 수해/침수(INUNDATION·T10106) · 태풍(TYPHOON·T10105) · 산사태(LANDSLIDE·T10401)
- **코퍼스**: 문서 6종(구미·의왕·남원 자연재해저감종합계획, 요천·구미천·안양천 하천기본계획) → `data/processed/chunks.jsonl` **3,974청크** (passage_id·evidence_unit_id 부여, 남원=전라북도 45190 태깅, 안양천=plan_version 2015/2020 구분)
- **근거 원칙(XAI)**: 모든 AI 응답·정형 데이터에 출처(문서명·장·페이지) 필수 — 근거 없는 답변 금지

## 시범서비스 모듈

| 모듈 | 내용 |
|---|---|
| ① 상황입력 패널 | 재난 유형·지역·상황 입력, 키워드 Chip |
| ② 지도 통합 뷰어 | VWorld 2D 지도(WMTS) + Leaflet, L1~L4 레이어, 라이트=Base/다크=midnight |
| ③ 유사사례 Top-K 목록 | BM25+메타 필터 검색 결과 카드, 지도 하이라이트 연동 |
| ④ 상세조회 | 위험지구·하천(산정지점·특보 기준유량, 안양천 plan_version 배지) |
| ⑤ 정합성 | Citation(출처)·유사도 요인 기여도 표시 |
| ⑥ 챗봇 | UNI RAG System 연계(SSE 스트리밍, 미설정·장애 시 mock 폴백) |

## 빠른 시작

### 요구사항
- Python 3.11
- Node 18+

### 1) 데이터 파이프라인 (선택)

```bash
pip install -r pipeline/requirements.txt
python pipeline/run_all.py
```

- 산출: `data/processed/`(chunks.jsonl, criteria/districts/rivers/geo.json, report.md)
- 원시자료 폴더(`자연재해저감종합계획 및 하천기본계획/`)가 필요하다. **원시자료가 없어도 `data/manual/` 시드(커밋됨)만으로 백엔드 기동이 가능**하다.

### 2) 백엔드 (FastAPI, 포트 8000)

```bash
cd apps/api && pip install -r requirements.txt && uvicorn main:app --reload --port 8000
```

테스트:

```bash
cd apps/api && python -m pytest
```

### 3) 프론트엔드 (React 18 + Vite, 포트 5173)

```bash
cd apps/web && npm install && npm run dev
```

- 개발 서버는 `/api` 요청을 `http://localhost:8000`으로 프록시한다.
- 빌드 검증: `npm run build`

## 환경변수

루트의 `.env.example`을 `.env`로 복사해 값을 기입한다(`.env`는 gitignore 대상 — 자격증명 커밋 금지).

```bash
cp .env.example .env
```

| 변수 | 필수 | 설명 |
|---|---|---|
| `ANTHROPIC_API_KEY` | 선택 | Claude API(claude-sonnet-5) 키. 미설정 시 ask는 mock 응답 모드 |
| `VITE_VWORLD_API_KEY` | 선택 | VWorld 인증키(프론트 지도 타일용). 미설정 시 지도 영역에 키 발급 안내 표시 |
| `VWORLD_API_KEY` | 선택 | VWorld 인증키(파이프라인 지오코더·2D데이터용). 위 키와 동일 값 공용 기입 |
| `UNI_RAG_BASE_URL` | 선택 | UNI RAG System 주소(챗봇 연계, docs/06 참조) |
| `UNI_RAG_ACCOUNT` | 선택 | UNI RAG 계정. 미설정 시 챗봇 mock 폴백 |
| `UNI_RAG_PASSWORD` | 선택 | UNI RAG 비밀번호. 미설정 시 챗봇 mock 폴백 |
| `UNI_RAG_MODEL_KEY` | 선택 | 모델 키(qwen3.5-35b, exaone-32b, qwen3-coder-next). 미설정 시 서버 기본 |

- VWorld 인증키는 www.vworld.kr 발급·도메인 등록 후 하나의 키를 두 변수에 공용으로 사용한다.

## 프로젝트 구조

```
disaster/
├─ apps/
│  ├─ api/                  # FastAPI 백엔드 (라우터 8종: meta/criteria/districts/rivers/geo/search/ask/chat)
│  │  ├─ routers/ services/ schemas/ tests/
│  │  └─ main.py
│  └─ web/                  # React 18 + Vite 프론트엔드 (UNE Design System, SpoqaHanSansNeo)
│     └─ src/
├─ pipeline/                # PDF 추출(PyMuPDF)→청킹→메타 태깅→정형화→지오코딩 파이프라인
│  └─ run_all.py
├─ data/
│  ├─ manual/               # 수동 검수 시드 (criteria/districts/rivers/geo.json — 커밋 대상)
│  └─ processed/            # 파이프라인 산출물 (chunks.jsonl 등 — gitignore, 커밋 금지)
├─ docs/                    # 설계 문서 (아래 목차 참조)
├─ DESIGN.md                # 아키텍처 설계서
└─ evaluation_criteria.md   # Phase별 합격 기준
```

## 설계 문서

| 문서 | 내용 |
|---|---|
| `docs/00_사업수행계획서_분석.md` | 착수 사업수행계획서 분석 — 사업 컨텍스트·반영사항 |
| `DESIGN.md` | 아키텍처 설계서 (LLM 이원화: ask=Claude/mock, chat=UNI RAG 프록시) |
| `docs/01_기획서.md` | 서비스 기획서 |
| `docs/02_데이터분석.md` | 원시자료(PDF 6종) 분석서 |
| `docs/03_화면설계.md` | 화면설계서 (시범서비스 모듈·레이아웃) |
| `docs/04_데모시나리오.md` | 데모 시나리오·검증 체크리스트 |
| `docs/05_VWorld_API_활용계획.md` | VWorld 오픈 API 발급·사용 계획 |
| `docs/06_UNI_RAG_챗봇_연동.md` | UNI RAG System 챗봇 연동 계획 |
| `evaluation_criteria.md` | Phase별 합격 기준 (evaluator 검증 항목) |

### Phase별 산출물 요약

| Phase | 산출물 |
|---|---|
| Phase 1 | 저장소 골격 + PDF 6종 추출·청킹·메타 태깅 파이프라인, 코퍼스 3,974청크, `data/manual/` 시드 |
| Phase 2 | FastAPI 백엔드 — BM25+메타 필터 검색, 근거 기반 응답(rag_answer_id·citations), 라우터 8종, pytest 통과 |
| Phase 3 | React 대시보드 — UNE DS 기반 모듈 6종 + 판단기준 탭, 라이트/다크, `npm run build` 통과 |
| Phase 4 | 프론트↔백엔드 통합, 데모 시나리오 3종 E2E 검증·문서화(README, docs/04) |

## 데모 시나리오

| 시나리오 | 재난 유형 | 지역 |
|---|---|---|
| S1 | 호우 | 의왕시 |
| S2 | 홍수 | 남원시 |
| S3 | 산사태 | 구미시 |

실행 절차·예상 결과·검증 체크리스트는 `docs/04_데모시나리오.md` 참조.
