# evaluation_criteria.md — Phase별 합격 기준

evaluator는 각 항목을 파일 존재·내용 확인 또는 명령 실행으로 객관적으로 검증하고 PASS/FAIL을 판정한다.

## Phase 1 — 스캐폴딩·데이터 파이프라인
- [ ] 디렉터리 골격 존재: `apps/api/`, `apps/web/`, `pipeline/`, `data/manual/`
- [ ] `pipeline/run_all.py` 실행이 에러 없이 완료되고 `data/processed/chunks.jsonl` 생성
- [ ] chunks.jsonl에 문서 4종(doc_id 4개: 구미 저감계획·의왕 저감계획·요천·구미천)의 청크가 모두 존재
- [ ] 청크 스키마 준수: record_id·doc_id·doc_title·doc_type·admin_code·hazard_codes·chapter·page_start·content 필드 존재 (DESIGN.md 4.1)
- [ ] `data/manual/criteria.json`에 판단기준 5종(T10105·T10106·T10107·T10206·T10401)의 판단조건(Q1)·등급(Q2)·출처 포함
- [ ] `data/manual/districts.json`에 위험지구 최소 10건(의왕 17건 전체 + 구미 대표 지구 포함, 지구명·유형·위치·등급·저감대책·사업비·근거 페이지)
- [ ] `data/manual/rivers.json`에 요천·구미천 제원과 산정지점별 계획홍수량(요천 Y4=2,005㎥/s, 구미천 GM00=390㎥/s 포함)
- [ ] 추출 리포트(문서별 페이지 수·청크 수) 출력 또는 파일 생성

## Phase 2 — 검색·RAG API
- [ ] `uvicorn main:app` 기동 성공 (임포트 에러 0)
- [ ] GET /api/meta/hazards → 5종, GET /api/meta/regions → 3개 지자체 반환
- [ ] GET /api/criteria/T10107 → 호우 주의보 3h 60mm/경보 3h 90mm 값 포함
- [ ] GET /api/districts?admin=41430 → 의왕 위험지구 17건, hazard/kind 필터 동작
- [ ] GET /api/rivers?admin=45190 → 요천 계획홍수량 지점 데이터 반환
- [ ] POST /api/search → 메타 필터(admin·hazard)가 적용된 청크와 점수·출처 반환
- [ ] POST /api/ask (mock 모드) → answer + citations[](doc_title·chapter·page) + structured_refs 반환, 인용 없는 응답 없음
- [ ] `python -m pytest` 전체 통과 (검색 필터·ask mock·스키마 테스트 포함)

## Phase 3 — 프론트엔드 UI
- [ ] `npm run build` 에러 0으로 통과
- [ ] 3패널 레이아웃 구현: SituationPanel(재난유형 ChoiceChip 5·경보 Segment·Textarea), ChatPanel(스레드·인용 ListItem·입력), VizPanel(탭 3종: 판단기준·위험지구·하천)
- [ ] UNE DS 토큰(styles.css)·컴포넌트 사용, 하드코딩 색상 대신 토큰 변수 사용(주요 화면 기준)
- [ ] SpoqaHanSansNeo가 `public/fonts/` 로컬 @font-face로 로드(CDN 참조 없음)
- [ ] 위기경보 4단계 배지 색상 매핑(관심=파랑·주의=노랑·경계=주황·심각=빨강) + 텍스트 라벨 병기
- [ ] 다크 모드 토글 동작(`data-theme` 스코프)
- [ ] 이모지·신규 드로잉 아이콘 미사용 (UNE 아이콘만)

## Phase 4 — 통합·시나리오 검증
- [ ] 프론트에서 백엔드 API 호출로 3개 시나리오 전 과정 동작:
  - S1 호우/의왕: 위험지구 응답에 의왕 지구(안양천·고천A 등)와 인용 표기
  - S2 홍수/남원: 요천 계획홍수량(2,005㎥/s)과 50%/70% 기준 표출
  - S3 산사태/구미: 판단기준 3단계(80/90/100%) 게이지·사면재해 지구 표출
- [ ] `docs/04_데모시나리오.md` 존재(시나리오별 입력값·클릭 절차·예상 결과·스크린샷 또는 응답 예시)
- [ ] `README.md`에 설치·실행·환경변수(ANTHROPIC_API_KEY 선택) 안내
- [ ] 백엔드 pytest·프론트 build 모두 통과 상태 유지
- [ ] PROGRESS.md 갱신(Last updated·Done·Next steps)
