# CLAUDE.md — 재난안전 AI 시범 서비스 (1차 POC)

## 프로젝트 개요
자연재해저감종합계획·하천기본계획 문서를 재난메타 체계로 구조화해, 재난 상황 입력 → RAG 검색 → LLM 질의응답 → 시각화 표출을 실증하는 시범 서비스.
- 1차 POC 대상 지자체: 의왕시·구미시·남원시 (본사업 목표: 부산/인제/영천)
- 대상 재난 5종: 태풍(T10105)·풍수해(T10106)·호우(T10107)·홍수(T10206)·산사태(T10401)
- 설계 문서: `DESIGN.md`(아키텍처), `docs/01_기획서.md`, `docs/02_데이터분석.md`, `docs/03_화면설계.md`

## 프로젝트 규칙
- **디자인**: UNE Design System만 사용(`UNE Design System/une-design-system/project/` — 읽기 전용, 필요 자산은 `apps/web/src/ds/`로 복사). 아이콘은 UNE 250종만, 이모지 금지, UI 문구는 한국어 명사구.
- **글꼴**: SpoqaHanSansNeo(로컬 `SpoqaHanSansNeo-Regular/*.ttf` → `apps/web/public/fonts/` 복사, CDN 로드 금지), letter-spacing -3%.
- **PDF 추출**: PyMuPDF(fitz) 사용(poppler 계열은 한글 유실). 표는 pdfplumber. 원시자료 폴더는 읽기 전용.
- **근거 표기**: 모든 AI 응답·정형 데이터에 출처(문서명·장·페이지) 필수. 문서의 "장-쪽번호" 체계 사용.
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
- 목표: 저장소 골격(apps/api·apps/web·pipeline·data) 생성 + PDF 4종(구미·의왕 저감계획, 요천·구미천 하천기본계획) 추출→청킹→메타 태깅 파이프라인 완성
- 산출물: `pipeline/*.py`, `data/processed/chunks.jsonl`(문서 4종 코퍼스), `data/manual/` 시드(criteria.json — 판단기준 5종, districts 대표 지구, rivers 산정지점), 추출 리포트

### Phase 2 — 검색·RAG API
- 목표: FastAPI 백엔드 — 코퍼스 로드, BM25+메타 필터 검색, Claude/mock RAG 응답(인용 포함), 메타·판단기준·위험지구·하천 조회 API
- 산출물: `apps/api/` 전체(라우터 7종: meta/criteria/districts/rivers/search/ask), pytest 통과

### Phase 3 — 프론트엔드 UI
- 목표: UNE DS 기반 3패널 대시보드(상황입력·질의응답·시각화 탭 3종), 로컬 폰트, 라이트/다크
- 산출물: `apps/web/` 전체, `npm run build` 통과, docs/03_화면설계.md 반영

### Phase 4 — 통합·시나리오 검증
- 목표: 프론트↔백엔드 연동, 데모 시나리오 3종(S1 호우/의왕, S2 홍수/남원, S3 산사태/구미) E2E 동작, 문서화
- 산출물: `docs/04_데모시나리오.md`(실행 절차·예상 결과), README.md(설치·실행 안내), PROGRESS.md 갱신
