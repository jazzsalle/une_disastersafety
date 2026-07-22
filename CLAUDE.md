# CLAUDE.md — 재난안전 AI 시범 서비스 (1차 POC)

## 프로젝트 개요
NIA 「재난안전 AI데이터 구축」 사업(티쓰리큐 컨소시엄)에서 **유엔이(UNE) 담당분인 AI Agent 실증 서비스·시각화 화면**의 선행 POC. 자연재해저감종합계획·하천기본계획 문서를 재난메타 체계로 구조화해, 재난 상황 입력 → RAG 검색(유사사례) → 근거 기반 응답 → 지도·시각화 표출을 실증한다.
- 1차 POC 대상 지자체: 의왕시·구미시·남원시 (본사업 목표: 부산/인제/영천)
- 대상 재난 5종(사업 기준): 호우(HEAVY_RAIN·T10107)·홍수(FLOOD·T10206)·수해/침수(INUNDATION·T10106)·태풍(TYPHOON·T10105)·산사태(LANDSLIDE·T10401)
- 시범서비스 모듈 5종: ①상황입력 패널 ②지도 통합 뷰어(L1~L4) ③유사사례 Top-K 목록 ④상세조회 ⑤정합성(Citation·요인 기여도)
- 설계 문서: `docs/00_사업수행계획서_분석.md`(사업 컨텍스트) → `DESIGN.md`(아키텍처) → `docs/01_기획서.md`, `docs/02_데이터분석.md`, `docs/03_화면설계.md`

## 프로젝트 규칙
- **디자인**: UNE Design System만 사용(`UNE Design System/une-design-system/project/` — 읽기 전용, 필요 자산은 `apps/web/src/ds/`로 복사). 아이콘은 UNE 250종만, 이모지 금지, UI 문구는 한국어 명사구.
- **글꼴**: SpoqaHanSansNeo(로컬 `SpoqaHanSansNeo-Regular/*.ttf` → `apps/web/public/fonts/` 복사, CDN 로드 금지), letter-spacing -3%.
- **PDF 추출**: PyMuPDF(fitz) 사용(poppler 계열은 한글 유실). 표는 pdfplumber. 원시자료 폴더는 읽기 전용.
- **근거 표기**: 모든 AI 응답·정형 데이터에 출처(문서명·장·페이지) 필수 — 근거 없는 답변 금지(사업수행계획서 XAI 원칙). 문서의 "장-쪽번호" 체계 사용. 식별자 체계: source_asset_id→evidence_unit_id→passage_id→event_id→rag_answer_id.
- **T3Q 연계 대비**: RAG/LLM 호출은 services/ 어댑터로 분리(향후 T3Q RAG API·AI Agent로 교체 시 라우터·프론트 계약 불변).
- **원시자료·대용량 산출물은 커밋 금지**(.gitignore 참조). `data/manual/`(수동 검수 시드)만 커밋.
- 파이썬은 3.11, 프론트는 React 18+Vite. 커밋 메시지는 conventional commits(한국어 본문 허용).

## 빌드·실행 명령
- 파이프라인: `python pipeline/run_all.py` (산출: `data/processed/`)
- 백엔드: `cd apps/api && pip install -r requirements.txt && uvicorn main:app --reload --port 8000`
- 백엔드 테스트: `cd apps/api && python -m pytest`
- 프론트: `cd apps/web && npm install && npm run dev` (빌드 검증: `npm run build`)
- LLM: 환경변수 `ANTHROPIC_API_KEY` 설정 시 Claude API(claude-sonnet-5), 미설정 시 mock 폴백

## Phase

### Phase 1 — 스캐폴딩·데이터 파이프라인
- 목표: 저장소 골격(apps/api·apps/web·pipeline·data) 생성 + PDF 4종(구미·의왕 저감계획, 요천·구미천 하천기본계획) 추출→청킹(passage_id·evidence_unit_id 부여)→메타 태깅 파이프라인 완성
- 산출물: `pipeline/*.py`, `data/processed/chunks.jsonl`(문서 4종 코퍼스), `data/manual/` 시드(criteria.json — 판단기준 5종, districts 대표 지구, rivers 산정지점·특보 기준유량, geo.json — 지자체 경계·지구 좌표), 추출 리포트

### Phase 2 — 검색·RAG API (T3Q 연계 계약의 mock)
- 목표: FastAPI 백엔드 — 코퍼스 로드, BM25+메타 필터 검색(유사도 요인 포함), Claude/mock 근거 기반 응답(rag_answer_id·citations 필수), 메타·판단기준·위험지구·하천·지도 조회 API
- 산출물: `apps/api/` 전체(라우터: meta/criteria/districts/rivers/geo/search/ask), pytest 통과(근거 제시율 검증 포함)

### Phase 3 — 프론트엔드 UI (시범서비스 모듈 5종)
- 목표: UNE DS 기반 대시보드 — ①상황입력 패널(키워드 Chip 포함) ②지도 통합 뷰어(Leaflet, L1~L4) ③유사사례 Top-K 목록 ④상세조회(위험지구·하천) ⑤정합성(Citation·요인 기여도) + 판단기준 탭, 로컬 폰트, 라이트/다크
- 산출물: `apps/web/` 전체, `npm run build` 통과, docs/03_화면설계.md 반영

### Phase 4 — 통합·시나리오 검증
- 목표: 프론트↔백엔드 연동, 데모 시나리오 3종(S1 호우/의왕, S2 홍수/남원, S3 산사태/구미) E2E 동작 + 서비스 검증 체크리스트 8단계(사업수행계획서) 수행, 문서화
- 산출물: `docs/04_데모시나리오.md`(실행 절차·예상 결과·체크리스트 결과), README.md(설치·실행 안내), PROGRESS.md 갱신
