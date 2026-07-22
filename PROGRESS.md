# PROGRESS

## Last updated
2026-07-23 (야간 자율 진행 세션 — 사용자 취침 중 /phase-run 연속 실행)

## Current goal
재난안전 AI 시범 서비스 1차 POC: Phase 1 완료(PASS) → Phase 2~4 순차 진행 중 (대상: 의왕/구미/남원)

## Done this session
- **Phase 1 완료 — evaluator PASS(9개 기준 전 항목)**: planner→generator(T1~T10)→evaluator 오케스트레이션
  - 저장소 골격: apps/api·apps/web·pipeline·data/manual
  - `pipeline/`: config.py(문서 6종 레지스트리, PDF 29개)·extract_pdf.py·chunk.py·tag_meta.py·build_structured.py·fetch_geo.py·run_all.py
  - 코퍼스: `data/processed/chunks.jsonl` **3,974청크**(GM 1,421/UW 773/NW 989/요천 516/구미천 170/안양천 105), passage_id 유일 100%, hazard 태깅 커버리지 54.7%, 남원 전건 45190, 안양천 전건 plan_version(2015=61/2020=44)
  - 시드: criteria.json(재난 5종 Q1/Q2/출처)·districts.json(29건: 의왕 17 전체·구미 6·남원 6)·rivers.json(요천 6·구미천 10·안양천 16지점, 특보 기준유량 검증값 일치)·geo.json(35 Feature — VWorld 실경계 3·지오코딩 완료, 남원 6건도 지오코더로 L1 승격)
  - `python pipeline/run_all.py` 멱등 실행·report.md 생성 확인
- **UNI RAG 챗봇 연동 설계 반영(사용자 취침 전 지시)**: `docs/06_UNI_RAG_챗봇_연동.md` 신규 작성, DESIGN.md v0.3(LLM 이원화: ask=Claude/mock, chat=UNI RAG main chat API 프록시)·CLAUDE.md(모듈 ⑥ 챗봇, Phase 2/3 산출물 확장)·evaluation_criteria.md(Phase 2 /api/chat·Phase 3 챗봇 패널 기준 추가)·.env.example(UNI_RAG_* 4종) 갱신
  - UNI RAG OpenAPI(http://221.147.100.161:8000/docs) 분석: main chat = `POST /chat/`(JWT·SSE), 로그인 = `POST /auth/login`(UNE 계정), 모델 3종(qwen3.5-35b 기본)
- Phase 2 진행 (아래 In progress 참조)

## In progress
- Phase 2 (검색·RAG API + UNI RAG 챗봇 프록시) — 진행 중이면 이 항목이 최신이 아닐 수 있음. git log와 아래 기록 참조

## Next steps
1. Phase 2 → 3 → 4 순차 진행 (각각 planner→generator→evaluator, PASS 시 커밋)
2. **내일(회사 PC) 사용자 결정·보완 필요 사항 — 아래 "결정 필요" 섹션 처리**

## 결정 필요 (사용자 확인 대기 — 권장안으로 우선 구현함)
1. **UNI RAG 계정**: `/auth/login`에 쓸 UNE 계정(개인 vs 서비스 계정) 미정. 자격증명 미보유로 **실 로그인·chat 실호출 미검증** — mock 폴백으로 구현·테스트함. → 회사에서 .env에 `UNI_RAG_ACCOUNT/PASSWORD` 기입 후 실연동 확인 필요
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
