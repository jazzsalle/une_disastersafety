# evaluation_criteria.md — Phase별 합격 기준

evaluator는 각 항목을 파일 존재·내용 확인 또는 명령 실행으로 객관적으로 검증하고 PASS/FAIL을 판정한다.
(v0.2 — 착수 사업수행계획서의 시범서비스 모듈 5종·검증 체크리스트 반영)

## Phase 1 — 스캐폴딩·데이터 파이프라인
- [ ] 디렉터리 골격 존재: `apps/api/`, `apps/web/`, `pipeline/`, `data/manual/`
- [ ] `pipeline/run_all.py` 실행이 에러 없이 완료되고 `data/processed/chunks.jsonl` 생성
- [ ] chunks.jsonl에 문서 4종(source_asset_id 4개: 구미 저감계획·의왕 저감계획·요천·구미천)의 청크가 모두 존재
- [ ] 청크 스키마 준수: passage_id·evidence_unit_id·source_asset_id·doc_title·doc_type·admin_code·hazard_codes·hazard_event_codes·chapter·page_start·content 필드 존재 (DESIGN.md 4.1)
- [ ] `data/manual/criteria.json`에 판단기준 5종(HEAVY_RAIN/FLOOD/INUNDATION/TYPHOON/LANDSLIDE, T코드 병기)의 판단조건(Q1)·등급(Q2)·출처 포함
- [ ] `data/manual/districts.json`에 위험지구 최소 10건(의왕 17건 전체 + 구미 대표 지구 포함, 지구명·유형·위치·등급·위험조건 임계값·저감대책·사업비·우선순위·근거 페이지)
- [ ] `data/manual/rivers.json`에 요천·구미천 제원과 산정지점별 계획홍수량 + 홍수특보 기준유량(요천 Y4=2,005㎥/s→주의보 1,003/경보 1,404, 구미천 GM00=390㎥/s→195/273 포함)
- [ ] `data/manual/geo.json`(또는 geo 산출)에 지자체 3곳 경계와 위험지구 대표 좌표(L1)·하천 구간(L2) GeoJSON 존재
- [ ] 추출 리포트(문서별 페이지 수·청크 수) 출력 또는 파일 생성

## Phase 2 — 검색·RAG API
- [ ] `uvicorn main:app` 기동 성공 (임포트 에러 0)
- [ ] GET /api/meta/hazards → 5종(UI명·Event 코드·T코드), GET /api/meta/regions → 3개 지자체 반환
- [ ] GET /api/criteria/T10107 → 호우 주의보 3h 60mm/경보 3h 90mm 값 포함
- [ ] GET /api/districts?admin=41430 → 의왕 위험지구 17건, hazard/kind 필터 동작
- [ ] GET /api/rivers?admin=45190 → 요천 계획홍수량·특보 기준유량 반환
- [ ] GET /api/geo?admin= → 경계·마커·구간 GeoJSON 반환 (FeatureCollection 유효성)
- [ ] POST /api/search → 메타 필터(admin·hazard) 적용 결과 + score·similarity_factors·source 반환
- [ ] POST /api/ask (mock 모드) → rag_answer_id + answer + top_k_results[](유사도) + citations[](doc_title·chapter·page) + structured_refs + geo_refs 반환
- [ ] **근거 제시율 100%**: ask 응답에 citations가 비어 있는 경우가 없음(테스트로 검증) — 근거 없는 답변 금지
- [ ] `python -m pytest` 전체 통과 (검색 필터·ask mock·근거 제시율·스키마 테스트 포함)

## Phase 3 — 프론트엔드 UI (시범서비스 모듈 5종)
- [ ] `npm run build` 에러 0으로 통과
- [ ] ① 상황입력 패널: 재난유형 ChoiceChip 5종(호우/홍수/수해·침수/태풍/산사태)·경보 Segment·Datepicker·피해/통제 키워드 InputChip·Textarea·적용 버튼 → 구조화 질의 JSON 생성
- [ ] ② 지도 통합 뷰어: Leaflet 지도에 지자체 경계(L3)·위험지구 마커(L1)·하천 구간(L2) 표출, 좌표 불명확 항목은 목록 폴백(L4)
- [ ] ③ 유사사례 Top-K 목록: 결과 카드에 유사도 점수·재해유형 Badge·요약·출처, 카드 선택 시 지도 하이라이트 연동
- [ ] ④ 상세조회: 위험지구 카드→상세 Modal(위험요인·저감대책·사업비·우선순위·근거), 하천 제원·계획홍수량 표
- [ ] ⑤ 정합성: 모든 응답에 Citation ListItem 표시 + 요인별 기여도 바 + 검증 정보 토글
- [ ] 판단기준 탭: 기준표·게이지·단계 배지(선택 유형 연동)
- [ ] UNE DS 토큰(styles.css)·컴포넌트 사용, SpoqaHanSansNeo 로컬 @font-face(CDN 참조 없음)
- [ ] 위기경보 4단계 배지 색상 매핑 + 텍스트 라벨 병기, 다크 모드 토글 동작
- [ ] 이모지·신규 드로잉 아이콘 미사용 (UNE 아이콘만)

## Phase 4 — 통합·시나리오 검증
- [ ] 프론트에서 백엔드 API 호출로 3개 시나리오 전 과정 동작:
  - S1 호우/의왕: 위험지구 응답에 의왕 지구(안양천·고천A 등)와 인용 표기 + 지도 마커 표출
  - S2 홍수/남원: 요천 계획홍수량(2,005㎥/s)과 50%/70% 기준유량 표출
  - S3 산사태/구미: 판단기준 3단계(80/90/100%) 게이지·사면재해 지구 표출
- [ ] 서비스 검증 체크리스트 8단계(사업수행계획서) 수행·기록: ①질의 구조화 무손실 ②API 호출·응답 ③Top-K 수신 ④위치 메타데이터 ⑤지도 표출·목록 연동 ⑥근거 Passage·출처(내부정보 미노출) ⑦응답 정합성(입력과 다른 유형·지역 미생성) ⑧로그 기록
- [ ] `docs/04_데모시나리오.md` 존재(시나리오별 입력값·클릭 절차·예상 결과·체크리스트 결과)
- [ ] `README.md`에 설치·실행·환경변수(ANTHROPIC_API_KEY 선택) 안내
- [ ] 백엔드 pytest·프론트 build 모두 통과 상태 유지
- [ ] PROGRESS.md 갱신(Last updated·Done·Next steps)
