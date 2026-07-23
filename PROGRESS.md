# PROGRESS

## Last updated
2026-07-23 오전 (회사 PC 세션 — clone·환경 재구축·env 배선 수정·UNI RAG 재확인)

## Current goal
재난안전 AI 시범 서비스 1차 POC: Phase 1~4 완료 — 회사 PC 데모 리허설 준비 완료

## Done this session (회사 PC, 2026-07-23 오전)
- **회사 PC 환경 재구축**: clone(04922fe — 어젯밤 push 반영 확인)·venv·npm 설치, 사용자 제공 .env(VWorld·UNI RAG 기입, ANTHROPIC 비어있음→ask mock)·원시 PDF 폴더 복사
- **파이프라인 재실행**: chunks.jsonl 3,974청크 — 집 PC와 동일, report.md 검증 전 항목 통과 (extract 약 15분)
- **pytest 80건 통과**(신규 1건 포함) · verify_scenarios.py S1·S2·S3 PASS, 체크리스트 8/8
- **env 배선 수정(신규 발견 버그)**: README는 루트 .env 하나로 안내하지만 백엔드·프론트 모두 이를 로드하지 않았음(파이프라인만 자체 로더 보유) → apps/api/config.py에 루트 .env 로더 추가(셸 환경변수 우선, 테스트는 delenv 격리라 안전), apps/web/vite.config.js에 envDir:'../..' 추가(VITE_ 접두사만 클라이언트 노출 — 비밀 안전). 빌드 산출물에 VWorld 키 주입 확인
- **UNI RAG 실연동 재확인**: 로그인 200·JWT·SSE 중계까지 실연동(uni_rag 모드) 동작 확인. 단 모델 3종 여전히 available:false(GPU 미가동) → 서버가 **HTTP 200 + data:{"error":...}** SSE를 반환하는 케이스 발견
- **챗봇 폴백 보강**: 첫 SSE 이벤트가 오류 페이로드면 mock 폴백(services/uni_rag.py _peek_prelude/_sse_first_error, 테스트 추가). GPU 가동 시 첫 이벤트가 delta라 코드 수정 없이 실중계됨

## Done (어젯밤 야간 자율 세션)
- **Phase 1 완료 — evaluator PASS(9개 기준 전 항목)**: planner→generator(T1~T10)→evaluator 오케스트레이션
  - 저장소 골격: apps/api·apps/web·pipeline·data/manual
  - `pipeline/`: config.py(문서 6종 레지스트리, PDF 29개)·extract_pdf.py·chunk.py·tag_meta.py·build_structured.py·fetch_geo.py·run_all.py
  - 코퍼스: `data/processed/chunks.jsonl` **3,974청크**(GM 1,421/UW 773/NW 989/요천 516/구미천 170/안양천 105), passage_id 유일 100%, hazard 태깅 커버리지 54.7%, 남원 전건 45190, 안양천 전건 plan_version(2015=61/2020=44)
  - 시드: criteria.json(재난 5종 Q1/Q2/출처)·districts.json(29건: 의왕 17 전체·구미 6·남원 6)·rivers.json(요천 6·구미천 10·안양천 16지점, 특보 기준유량 검증값 일치)·geo.json(35 Feature — VWorld 실경계 3·지오코딩 완료, 남원 6건도 지오코더로 L1 승격)
  - `python pipeline/run_all.py` 멱등 실행·report.md 생성 확인
- **UNI RAG 챗봇 연동 설계 반영(사용자 취침 전 지시)**: `docs/06_UNI_RAG_챗봇_연동.md` 신규 작성, DESIGN.md v0.3(LLM 이원화: ask=Claude/mock, chat=UNI RAG main chat API 프록시)·CLAUDE.md(모듈 ⑥ 챗봇, Phase 2/3 산출물 확장)·evaluation_criteria.md(Phase 2 /api/chat·Phase 3 챗봇 패널 기준 추가)·.env.example(UNI_RAG_* 4종) 갱신
  - UNI RAG OpenAPI(http://221.147.100.161:8000/docs) 분석: main chat = `POST /chat/`(JWT·SSE), 로그인 = `POST /auth/login`(UNE 계정), 모델 3종(qwen3.5-35b 기본)
- **Phase 2 완료 — evaluator PASS(11항목 전부)**: apps/api FastAPI 백엔드
  - 라우터 8종(meta/criteria/districts/rivers/geo/search/ask/chat, 자동 등록)·services 어댑터 4종(corpus/retrieval/llm/uni_rag — T3Q 교체 대비 시그니처 고정)
  - BM25+메타필터 검색(similarity_factors 4요인, kiwipiepy 폴백 토크나이저), ask 근거 제시율 100%(no_evidence 엣지 포함), chat=UNI RAG 프록시(JWT 캐시·401 재로그인·SSE 중계·mock 폴백·비밀 미노출)
  - pytest **77건 통과**(외부 호출 격리 — 죽은 프록시 재실행으로 검증)
- **UNI RAG 실연동 확인(사용자 제공 계정)**: `/auth/login` **성공(HTTP 200, JWT 발급)** — 계정 .env에만 기록(커밋 안 됨). `POST /chat/`은 **HTTP 500**(모델 3종 available:false, GPU 서버 미가동 추정) → 백엔드는 5xx 시 mock 폴백으로 정상 동작. **서버 가동되면 코드 수정 없이 즉시 실연동됨**
- **Phase 3 완료 — evaluator PASS(10항목 전부)**: apps/web React18+Vite 대시보드
  - UNE DS 사본(src/ds, CDN 제거·SpoqaHanSansNeo 로컬 폰트)·3열 레이아웃·다크 토글
  - 패널: ①상황입력(ChoiceChip 5종·동적 Segment·키워드 Chip·buildEvent) ②VWorld WMTS 지도(Base/midnight, L1~L3, 키 미설정 시 안내) ③Top-K 카드(지도 하이라이트 연동) ④상세조회(지구 Modal·하천 표·안양천 plan_version 배지) ⑤정합성(Citation·기여도 바·검증 토글) ⑥챗봇(SSE 스트리밍·mock 배지·history) + 판단기준 탭
  - `npm run build` 통과, 통합 검증서 결합 버그 5건 수정(Toast 배선·Badge 변형·passage 하이라이트·IME·card.html CDN 제거)
- **Phase 4 완료**: 통합·시나리오 검증
  - `/api/ask·search·chat` 요청 단위 로그(disaster.api, 비밀값 미포함 — 체크리스트 ⑧), pytest 79건
  - `scripts/verify_scenarios.py`: S1 호우/의왕 17건·S2 홍수/남원 18건·S3 산사태/구미 15건 어서션 전부 통과, 서비스 검증 체크리스트 8/8(①⑤는 코드 검증 대체)
  - `docs/04_데모시나리오.md`(입력값·클릭 절차·예상 결과·체크리스트 표)·`README.md`(설치·실행·환경변수) 작성

## In progress
- 서버 기동 중(회사 PC): 백엔드 8000·프론트 5173 — 브라우저 리허설 대기

## Next steps
1. **브라우저 실 데모 리허설(사용자)**: http://localhost:5173 접속, docs/04 절차대로 화면 확인 — 특히 VWorld 타일 표출(도메인 등록에 localhost 필요할 수 있음 — 안 뜨면 vworld.kr 키 설정에서 localhost 추가)·다크 모드
2. env 배선 수정분 push 여부 결정(로컬 커밋됨)
3. UNI RAG GPU 서버 가동 시 챗봇 실중계 재확인(코드 수정 불필요), ANTHROPIC_API_KEY 기입 시 ask 실 LLM 경로 확인

## 결정 필요 (사용자 확인 대기 — 권장안으로 우선 구현함)
1. ~~UNI RAG 계정~~ **(해소 — 취침 중 사용자 제공)**: 계정 .env 기입 완료, 로그인 성공 확인. 잔여: **chat 실호출은 UNI RAG 모델 서버(GPU) 가동 후 재확인 필요**(현재 500 → mock 폴백 동작). 이 계정이 개인 계정이므로 데모용 서비스 계정 전환 여부는 추후 판단
2. **UNI RAG 모델 가용성**: `GET /models/` 조회 결과 3종(qwen3.5-35b·exaone-32b·qwen3-coder-next) 모두 `available:false`(2026-07-23 23시경, GPU 서버 대기 추정). 실 데모 전 가동 확인 필요. 권장 기본값 qwen3.5-35b로 구현
3. **재난 코퍼스 UNI RAG 업로드 여부**: `POST /documents/upload` + `source` 파라미터로 재난 문서를 UNI RAG 쪽에서 참조시킬지 → **권장(채택): 보류** — 근거응답(citations)은 로컬 BM25+Claude/mock이 담당, 챗봇은 자유 대화용
4. **세션 관리**: UNI RAG `session_id` 대화 연속성 → **권장(채택): POC는 프론트 history 전달로 단순화**, 세션 API는 2차
5. **원격 반영(push)**: 회사 PC에서 이어받으려면 push 필요 — 자동 push 금지 규칙에 따라 **로컬 커밋만 해둠**. 내일 아침 `git push` 직접 실행 요망(또는 이 PC에서 지시)
6. (기존) 재난데이터메타 T3Q 미제공 — v0.6 기준 선반영 유지

## Blockers
- UNI RAG 실연동 검증 불가(자격증명 없음 — 위 결정 필요 1) / 모델 available:false(결정 필요 2)
- 재난데이터메타(T3Q 설계 중) 미제공 — v0.6 선반영
- 남원 부록 A·B(HWP)·안양천 기타사항(스캔) 미확보 — 코퍼스 제외 상태

## Notes
- VWorld 키: 로컬 .env에만 존재(git 미포함). fetch_geo.py 서버사이드 호출 정상 동작 확인(등록 도메인 이슈 없음). 남원 경계는 45190이 VWorld에서 NOT_FOUND → 전북특별자치도 개편 코드 52190 폴백 조회(프로젝트 태깅은 45190 유지)
- 남원시는 전라북도(45190) — 원시자료 폴더명 "전라남도"는 오기(태깅 시 교정 완료)
- 안양천 수치는 기수립(2015, 270㎥/s)/금회(2020, 315㎥/s) 이중 체계 — plan_version 메타로 구분 완료
- HR 외부 연동 가이드 URL의 토큰 파라미터(t=...)는 커밋 문서에 미기재(보안) — 필요 시 사용자 보관 링크 사용
- 구미천 GM01·GM03·GM07은 계획홍수량 결정표 미수록 → 계획홍수위표 구간 배분값 적용(rivers.json adoption_note 참조)

## How to run
- 파이프라인: `python pipeline/run_all.py` (extract는 산출물 있으면 자동 skip, `--force`로 전체 재실행) → `data/processed/` 산출 + report.md
- 백엔드/프론트: Phase 2·3 완료 후 기입 (CLAUDE.md 빌드·실행 명령 참조)
