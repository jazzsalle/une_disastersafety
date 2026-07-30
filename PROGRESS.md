# PROGRESS

## Last updated
2026-07-30 (T3Q 데이터 구축 테스트 사이트 조회 분석 — docs/08 신규)

## 2026-07-30 — T3Q 플랫폼(메타·온톨로지·MCP) 사이트 조회 분석
- T3Q 테스트 사이트(dev165.rootsall.net, MOIS 계정 — 접속정보 별도 보관, 리포 미기재) 전 메뉴 18종
  **조회 전용** 탐색 완료(수정·실행 버튼 일절 미클릭). 산출: **docs/08_T3Q_플랫폼_분석.md**
- 핵심 확인: ①Event Master 허브 온톨로지(EVENT_ID `{YYYYMMDD}-{유형}-{행정5}-{순번3}`, RefDisasterEventID 역참조)
  ②T코드 택사노미 TTAK.KO-10.1047 77노드 탑재(우리 hazard_codes와 동일 표준) ③위기경보 4단계·저감계획
  재해구분 9종 동일 ④홍수취약지구 관리카드 249건 인스턴스화(계획홍수량·주의보/경보 제공수위 = 우리
  rivers.json과 동일 도메인) ⑤정형 DB 행 단위 lineage(source_rows) = 우리 evidence 체인과 동일 철학
  ⑥소하천정비종합계획 전국 원시 적재(의왕·구미·인제·영천 포함), 저감계획 비정형 본문은 미착수
- 반영 예정(docs/08 §7.3): 재난유형 코드 매핑표(Event↔T3Q 간이코드↔T코드), 시연 멘트에 정합 근거,
  event_id T3Q 형식 변환 유틸, 하천 상세 화면 참조관측소·단계별 제공수위 필드 정렬
- 조회 원자료: 세션 스크래치패드 t3q/ (대시보드~그래프 JSON 602KB) — 리포 미포함
- **docs/09_POC2_설계브리핑.md 신규**: POC2 기획(ChatGPT 작업)용 자기완결 브리핑 팩 — POC1 계약·데이터
  자산·T3Q 정합·확장 3축(실시간 관측 API·T3Q 규격·지자체 확대) 설계 입력 + 업로드 문서 목록·프롬프트 가이드.
  ChatGPT 업로드 시 자격증명·VWorld 키 금지, T3Q 내용은 내부용 명시(docs/09 §G)

## 2026-07-30 — 외부 공개용 public-demo 브랜치 (master는 그대로)
- **`public-demo` 브랜치 신설**(최신 master c630da2 기반): 외부 공개용으로 로그인 게이트·
  `/api/auth/*`·UNI RAG 연동 전부 제거, 챗봇은 로컬 데이터 직조회(services/chatbot.py —
  BM25+키워드 폴백, 판단기준·하천 정형값 주입 유지). 질문 칩·정형 즉답 하이브리드는 그대로 동작
- **공개 URL**: https://une-disaster-demo.vercel.app (프리뷰 배포 + 별칭).
  public-demo에 푸시 → 자동 재배포 후 `npx vercel alias set <새 배포 URL>
  une-disaster-demo.vercel.app` 재실행 필요. **master로 머지 금지**(공개 데모 전용)
- **Vercel 계정 설정 변경 2건(전 브랜치 영향)**: ① Deployment Protection(Vercel
  Authentication) 해제 — 모든 프리뷰 URL이 공개됨 ② `VITE_VWORLD_API_KEY`를 Preview
  환경에도 추가(기존 Production 전용이라 프리뷰 빌드에서 지도 미표시였음)
- VWorld 키 등록 도메인에 `une-disaster-demo.vercel.app` 추가됨(타일 200 확인)
- 구버전 기반 `public-mock` 브랜치는 원격·로컬 모두 삭제

## 회사 PC 인계 사항 (2026-07-27)
1. **git pull만 하면 됨** — 전부 push·Vercel 배포 반영 완료(최종 7445d74).
   충돌 요소 없음. 환경변수 변경 없음(회사 PC .env 그대로 사용 가능)
2. **시연 대본은 docs/07** — "시간당 60mm·특보 발표 전" 3막 스토리(~5분).
   챗봇 칩 6종 순서대로 클릭만 하면 됨(타이핑 불필요). 실연동(40~60초)은
   「특보 유량 1100 주의보 판단」 1개뿐 — 나머지는 전부 즉답
3. **시연 직전**: UNI `/models/`에서 qwen3.5-397b available:true 확인(변동 잦음)
   + 챗봇 예열 1회. 죽어 있으면 1100 질문 생략해도 스토리 성립(mock 폴백 배지 주의)
4. 미커밋 로컬 파일: outputs/(캡처)·유사사례 보완사항.txt — 개인 자료로 리포 미포함
5. 잔여(선택): 브라우저 리허설에서 유형 명령 지도 이동·플로팅 창 드래그 실확인,
   ANTHROPIC_API_KEY 설정 시 근거응답 실 LLM 전환

## (이전) 집 PC 인계 사항 (2026-07-24 저녁)
1. **git pull 주의**: 이번에 `data/processed/` 런타임 5종(chunks.jsonl 등)이 커밋 대상이 됨 —
   집 PC에 같은 경로의 로컬 산출물이 있으면 pull이 거부될 수 있음. 그 경우
   `data/processed/chunks.jsonl·criteria.json·districts.json·rivers.json·geo.json` 5개를 지우고
   pull(커밋본과 동일 내용이라 안전). `report.md`·`extracted/` 등 나머지는 그대로 둬도 됨
2. **.env 갱신 필요**: 집 PC .env에 `UNI_RAG_MODEL_KEY=qwen3.5-397b` 추가
   (기존 3종 모델 미가동 — 신규 397b만 가동 중, 기본 모델 경로는 무응답 행)
3. **Vercel**: GitHub master push → 자동 배포 정상 동작 확인됨. CLI 배포·env 관리가 필요하면
   집 PC에서 `npx vercel login` 별도 필요. 대시보드 Production Branch가 master인지 확인 권장
4. 회사 PC `outputs/`(오류 캡처 2장)는 리포 미포함 — 분석 완료된 자료

## 집 PC 리허설 (2026-07-26 — 헤드리스 API 검증 완료)
- 배포 URL 대상 `verify_scenarios.py --base-url` 실행: S1 17/17·S2 18/18·S3 15/15,
  체크리스트 8/8 전부 PASS (배포 서버리스 환경에서 재확인)
- 로그인 게이트: `/api/auth/login` 200 + `uni_rag_token` httpOnly 쿠키, `/auth/me` logged_in=true
- **UNI RAG 실연동 확인**: `/models/` — qwen3.5-397b **available:true**(나머지 3종 false).
  챗봇 표 질의("요천의 산정지점별 계획홍수량을 표로 정리해줘", POI RIV-YC) →
  **X-Chat-Mode=uni_rag**(mock 아님), 로컬 근거 발췌 3건, thinking 노출 없음,
  GFM 표(빈도별 수치) 정상 응답. 소요 약 41초 — 시연 시 대기 안내 멘트 필요
- VWorld 타일: Referer=`une-disastersafety.vercel.app` 으로 WMTS 200(39KB PNG) — 배포 도메인에서 지도 타일 정상
- 잔여: 브라우저 UI 인터랙션(POI 클릭·지명 링크·자연어 지도 제어·로그아웃 등 A1~A3 클릭 절차)은
  화면에서 직접 확인 필요 — 아래 Next steps 1

## 2026-07-27 작업 — 시연 스크립트 + 유사사례 사례 단위 검색 전환
- **docs/07_시연스크립트_남원.md 신규**: 남원 1곳·홍수 단일 서사(로그인→상황입력→판단기준→
  지도·상세조회→근거응답·사례→챗봇→로그아웃), 장면별 마우스 액션·발화체 멘트·Q&A 5종·체크리스트.
  UI 문구는 프론트 코드 실라벨 대조(레이어 토글·범례는 화면에 없음 — 스크립트에 금지 명시)
- **유사사례 개념 결함 확정(사용자 지적 → 코드 검증)**: 기존 Top-K는 동일 지자체 청크
  BM25 순위(retrieval.py admin 하드 필터) — 설계 원안 "매칭 사건 리스트"에서 축소된 구현
- **사례 단위 검색 구현**:
  - 시드: districts.json v0.2 — damage_events(구조화 피해이력) 7지구 9건, **전건 코퍼스
    실기록 근거**(의왕 2009 호우·2010 곤파스 / 구미 2012 태풍 산바 / 남원 2020·2010 집중호우,
    doc·page·passage_id 부착, 가상 사례 없음). build_structured.py에 근거 필수 검증 추가
  - 백엔드: services/cases.py + POST /api/cases/search — **admin 하드 필터 없음**(타 지자체
    포함이 계약), 요인 4종 재정의(type=유형 일치 필수·time=계절 근접·space=표시용·damage=키워드),
    ask/search 계약 무변경. pytest 97건(신규 6) 통과
  - 프론트: 유사사례 탭 2섹션(「유사 재난 사례」 카드+상세 Modal+지도에서 보기(타 지자체 전환),
    「근거 문서 발췌」=기존 Top-K), 상황 적용 시 사례 자동 조회. npm run build 통과
  - 데모 확인: 남원 홍수(8월·제방/월류) → top5 = 구미천지구(산바)·안양천/오전천지구(의왕)·
    주촌/요천지구(남원) — 교차 지자체 혼합 랭킹 동작

## 2026-07-27 보완 2차 — "유사사례 보완사항.txt" 반영 + UI 피드백
- **검색범위 4종**(services/cases.py scope): 관내 우선(기본 — 전국 검색+관내 가중 0.25)·
  관내·동일 유역(수계 매핑: 한강/낙동강/섬진강)·전국(지역 가중 0). 사례별
  **region_relation 배지**(관내/동일 유역/타 지역 — 파란색 solid Badge로 명확 표시)
- **사례 카드 클릭 → 지도 이동**: 타 지자체면 지자체 전환 + 지구 하이라이트(panTo)
- **DetailModal → 비모달 플로팅 창**: 배경 차단 제거, 헤더 드래그 이동, 기본 위치
  지도 우측 — 창 띄운 채 지도 확인 가능(유사사례·상세조회 공용). 닫기 버튼은
  **X자 아이콘**(DS InputChip 삭제 패스 재사용 — icon-data.js의 '닫기'/'엑스' 라벨은
  실형상과 불일치해 사용 불가 확인)
- 사례 조회 시점 이동: SituationPanel → TopKPanel useEffect(event·scope 변경 반응)
- pytest 101건(신규 scope·배지 4) 통과, npm run build 통과, docs/07 장면4 갱신
- 기본 범위 랭킹 확인: 남원 홍수 8월 → 남원 주촌·요천(관내) 상위, 구미·의왕(타 지역) 후순위

## 2026-07-27 UI 보완 3차 — outputs/ 캡처 3장 피드백 반영
- **재난유형**: ChoiceChip(T코드 병기) → 경보종류와 동일한 Segment 토글(유형명만,
  T코드는 aria-label로만 유지)
- **피해·통제 키워드**: 프리셋 5종을 Segment 토글(추가/해제)로, 자유 입력분만 InputChip 유지
- **탭바 2곳 교체**: 우측(유사사례/상세조회/판단기준)·하단(근거 응답/챗봇 대화)의
  생성형 TabFill/Tab이 미완성 테두리로 렌더되던 문제 → Segment 스타일 탭바로 통일
- npm run build 통과(미사용 DS Tab 계열 제거로 번들 4.47→3.78MB)

## 2026-07-27 임장 질문 대응 보강 — outputs/"공무원 임장에서 할만한 질문들.txt" 분석 반영
- 분석: 10개 질문 중 ◎5·△3·✕2(실황 기상·대피 대상 — 본사업 확장 항목) — 대응표를
  docs/07 §5 Q&A 하위에 수록, Q6(실황 미연동)·Q7(행동매뉴얼) 방어 답변 추가
- **챗봇 판단기준 주입**(uni_rag._criteria_context): event.hazard_code의 Q1 공식 수치를
  상류 질의에 자동 첨부 — "시간당 30mm면 어느 단계?"를 기상청 기준으로 판정. pytest 103건(신규 2)
- **유형 단위 자연어 명령**(chatAgent KIND_SYNONYMS): "산사태/저지대/토사/범람 위험지구
  보여줘" → 상세조회 재해유형 필터(districtKindFilter 원샷 상태) + 탭 전환. npm run build 통과
- docs/07 장면 5에 여유 질문 7·8(판단기준 판정·유형 명령) 추가

## 2026-07-27 근거응답 표 표출 — outputs/근거응답 개선사항 캡처 2장 반영
- 원인: PDF 표가 본문 텍스트 추출에서 셀 세로 나열로 뭉개짐. 청크에 보존된
  구조화 표(tables — pdfplumber)를 미사용이었음
- 백엔드(llm.py): mock 답변에 상위 청크 원문 표를 GFM 마크다운 표로 조립,
  Claude 프롬프트에 (원문 표) 구조 병기 + 표 형식 지시(시스템 프롬프트 6항),
  citations에 구조화 tables(caption·정규화 rows, 최대 2표·12행) 추가(Citation 스키마 확장)
- 프론트: MarkdownAnswer.jsx 신규 — 근거응답 답변도 챗봇과 동일한 GFM 표 렌더.
  CitationModal을 DetailModal(플로팅 창·X 닫기)로 교체 + 원문 표를 KTable로 렌더
- 챗봇(UNI RAG) 경로는 기존 표 렌더 유지 — 실모델이 표로 답하면 그대로 표출
- pytest 105건(신규 2)·npm run build 통과

## 2026-07-27 시연 편의 — 질문 칩 상시 표시·응답시간 명시
- 챗봇 하단에 **시연 질문 7종 칩 상시 표시**(chatAgent DEMO_QUESTIONS — docs/07 장면5
  순서, POI 맞춤 제안과 병합·중복 제거) — 시연 중 타이핑 불필요
- docs/07 응답시간 정정: 40초는 **실연동(397B) 생성 시간**이며 자연어 명령·mock은
  즉시(1초 미만) — 장면5 안내문·행별 표기 명확화, 전 행 칩 클릭 방식으로 갱신
- POI 해제 버튼 아이콘을 X자(XIcon)로 통일(기존 '닫기' 라벨 아이콘은 형상 불일치)
- npm run build 통과

## 2026-07-27 근거응답 시연 칩·경보 미발령 옵션
- 근거응답 예시 칩 3종을 시연 순서(①요천 계획홍수량·기준유량 ②침수 위험지구·사례
  ③산사태·판단기준)로 교체 — 입력행 아래 **상시 표시 + 클릭 즉시 전송**
- **경보 「미발령」 옵션 추가**(사용자 지적 반영): 경보 종류·단계는 기상청·행안부가
  발령·통보한 값의 "수신 등록"임을 도움말로 명시, 발령 전 상황은 미발령 선택
  (단계 세그 숨김, event.alert_* = null, 헤더 배지 「{유형} · 특보 미발령」 회색)
- docs/07 장면1 멘트(수신 등록 취지+미발령)·장면4 칩 클릭 방식 갱신
- npm run build·pytest 105건 통과

## 2026-07-27 시연 스토리 개편 — 메모 반영 실증·질문 5종 확정·문서 3막 재작성
- **상황 메모→LLM 실증**: 메모 "시간당 60mm" + "어떤 하천이 범람 위험?" 실호출 →
  실모델이 여유고 부족 하천 표(풍촌천 등) + 60mm의 기준 대비 판정(주의보·극한호우 해당)
  답변 확인. 단 언급 하천(소하천 137곳 후보지)은 지도 L2(주요 3하천)에 없음 —
  Q8 방어 답변으로 처리(문서 범위>지도 범위, 본사업 하천망 레이어 확장)
- **실패 질문 원인 수정**: "수위계/기준유량" 질의가 발췌 미포착으로 "문서에 없다" 응답
  → 하천 POI 컨텍스트에 특보 기준지점(남원수위표)·산정지점별 계획홍수량·기준유량 주입
  (uni_rag._query_with_poi), pytest 106건(신규 1)
- **챗봇 칩 5종 확정**(사용자 지정, 전건 실응답 검증): 요천 보여줘 / 범람 위험 /
  수위계 / 저지대 / 산사태 — 맥락 제안 병합 제거(질문 과다 방지)
- **docs/07 3막 스토리 재작성**: 메뉴 나열 제거 — "시간당 60mm·특보 발표 전" 단일
  서사(1막 상황 등록(미발령+메모) → 2막 챗봇 3문답 → 3막 근거·보고), 총 5분.
  대응표 갱신(범람·수위계 ◎), Q8 추가

## 2026-07-27 챗봇 하이브리드 — 정형 질문 JSON 즉답 + 종합 판단만 UNI
- 진단: "정보 없음" 답변의 원인은 UNI 학습 부족이 아니라 **주입 컨텍스트 누락** —
  정형 데이터에 답이 있는 질문까지 LLM(40~60초)에 보내는 구조 문제
- `chatAgent.answerFromData`: 수위계/계획홍수량·기준유량(하천)·저감대책·선정 이유·
  피해 이력(지구) 5규칙 — 관리대장·rivers.json에서 즉시 조합(표+출처 병기, LLM 미호출),
  POI 미선택 시 선택 안내. 미매칭(범람 판정 등)만 UNI 실연동. 「정형 데이터 즉답」 배지
- node 단위 검증: 5규칙+미선택+미매칭 전 케이스 정상(남원수위표·1,003/1,404 표 등)
- docs/07: 2막 수위계 행 즉답으로, Q2를 하이브리드 구조 답변으로 갱신
- npm run build 통과. 실연동 대기는 이제 시연 전체에서 범람 질문 1회뿐

## 2026-07-27 챗봇 칩 최종 확정(사용자 지정) + 유형 명령 지도 이동
- 칩 6종: 요천 보여줘 → **특보 기준유량은?**(정형 즉답 표) → **특보 유량이 1100인데
  어떤 하천에 주의보를 내려야 하는가?**(유일한 UNI 실연동 — 지점별 판단 표
  Y2·Y4·Y5 주의보 대상, 실검증 49초) → 수위계(즉답) → 저지대/산사태(즉시)
- answerFromData에 판단 질문 가드(내려야/발령해야 → LLM 경로) — 1100 질문이
  정형 규칙에 가로채이지 않도록
- 유형 명령(저지대/산사태 보여줘) 시 **지도도 이동**: 해당 유형 첫 지구
  selectDistrict(하이라이트·panTo) + 개소 수 안내 메시지
- docs/07 2막 재작성(기준유량 즉답 → 1100 판단 스토리), 예열 질문 교체

## Next steps
1. 브라우저 데모 리허설: 배포 URL 로그인 → **docs/07 3막 스토리** 순서대로
   (칩 6종 — 기준유량 즉답 표, 1100 판단 실연동, 유형 명령 지도 이동 확인)
2. 커밋·push 후 Vercel 자동 배포 확인
2. VWorld 키 등록 도메인에 `une-disastersafety.vercel.app` 추가 여부 확인(지도 타일)
3. 하천 형상 정밀화(선택): 공공데이터포털 'RIMGIS 하천관리지리정보 WFS' 활용신청 검토 —
   승인 시 fetch_geo 소스 체인 최상위에 추가
4. UNI RAG 모델 상태 변동 잦음 — 시연 직전 `/models/` 가용성 확인 습관화

## 2026-07-24 작업

## 2026-07-24 작업
- **챗봇 504 해소**: UNI RAG 모델 미가동 시 상류 지연(10s+)+대기 60s가 Vercel 함수 한도 초과
  → 상류 read 25s 축소(mock 폴백 확정)·maxDuration 300·프론트 부분응답 복원 (2ad74c1)
- **모델 전환**: 기존 3종 미가동, 신규 qwen3.5-397b 가동 확인 → `UNI_RAG_MODEL_KEY=qwen3.5-397b`
  로컬 .env·Vercel env 설정(기본 모델 경로는 이벤트 없이 행 — 25s 폴백으로 커버)
- **마크다운 표 렌더링**: 챗봇 응답의 GFM 표를 DS 스타일 표로(경량 파서, 셀에도 지명 링크),
  컨텍스트에 표 유도 지시 추가. E2E: 요천 계획홍수량 질의 → 발췌 근거 실수치 표 확인 (3d7f8a4)
- **하천 실형상**: OSM 중심선 시도 후 사용자 판단으로 revert(3ff8894) — WKMSTRM 면형 유지
  (베이스맵 대비 수십 m 오프셋은 원천 특성. 항구 대안: 공공데이터포털 RIMGIS WFS 활용신청)

## (이전) 2026-07-23 오전 세션

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
- (없음 — Vercel 배포 + AI Agent 인터랙션 완료)

## AI Agent 인터랙션 (2026-07-23 오후 완료)
- **thinking 제거**: UNI RAG 실모델이 영어 추론을 본문으로 스트리밍(`…</think>\n\n실답변`, 여는 태그 없음 — 실캡처 확인). client.js SSE 파서에서 `</think>` 전까지 표시 억제, 이후만 스트리밍. 마커 없으면 전체 표시(안전)
- **POI→챗봇 컨텍스트**: 지도 지구·하천 클릭 시 입력창 위 POI 칩 표시, 질의에 poi 전달 → 백엔드가 districts/rivers.json에서 속성(지구명·재해유형·위치·위험요인) 병합해 UNI RAG로 전송. 실검증: "왜 위험지구로 선정?" → 모델이 주입된 위험요인(제방고 부족) 기반으로 정확 답변
- **로컬 근거 주입(D)**: chat 시 BM25 상위 3건 발췌를 상류 질의에 첨부 + 스트림 첫 이벤트 `__local_excerpts__`로 프론트 출처 표기(UNI RAG 자체 `__sources__`는 무시)
- **응답 속 지명→지도(A)**: 답변 텍스트의 지구·하천명 자동 링크 → 클릭 시 (타 지자체면 전환 후) 지도 하이라이트+상세조회
- **후속 질문 제안(B)**: POI 선택·응답 완료 맥락별 질문 칩(클릭 즉시 질의)
- **자연어 지도 제어(C)**: "남원으로 이동"·"안양천지구 보여줘" → 규칙 파서(chatAgent.js)가 LLM 없이 지도 조작+확인 메시지
- pytest 91건(신규 3) 통과, 로컬 실 UNI RAG 엔드투엔드 검증 완료

## Vercel 배포 (2026-07-23 완료)
- **https://une-disastersafety.vercel.app** 프로덕션 가동: root 200, /api/health chunks=3974, auth(잘못된 계정 401 — Vercel→UNI RAG 연결 확인), ask(mock)·chat(비로그인 mock) 정상
- 구성: GitHub 연동(jazzsalle/une_disastersafety) + CLI 배포 병용. feature/vercel-deploy → master merge 완료
- **GitHub 자동 배포 주의**: 최초 import 시 빈 빌드(Builds 0ms)가 도메인을 점유했었음 — CLI `npx vercel deploy --prod`로 해소. 이후 push 자동 배포가 정상인지 다음 push에서 확인 필요
- `.vercelignore` 신설 — CLI 업로드에서 원시 PDF 3.7GB·폰트 원본·중간 산출물 제외(없으면 100MB 한도 초과로 실패)
- Vercel 환경변수(production): VITE_VWORLD_API_KEY(사용자 등록)·UNI_RAG_BASE_URL. 계정류는 개인 로그인 방식이라 불필요
- 로컬 Vercel CLI 로그인됨(.vercel/ 링크 — gitignore)

## Next steps
1. **VWorld 키에 배포 도메인 등록(사용자)**: vworld.kr 키 설정에 `une-disastersafety.vercel.app` 추가 — 등록 전엔 지도 타일 대신 키 안내 표시
2. 브라우저 데모: 배포 URL 접속 → 개인 UNE 계정 로그인 → S1~S3 시나리오(docs/04) 확인
3. Vercel 프로덕션 브랜치 설정을 master로 확인/복원(사용자 — 현재 feature/vercel-deploy로 변경해둔 상태)
4. UNI RAG GPU 서버 가동 시 챗봇 실중계 재확인(코드 수정 불필요), ANTHROPIC_API_KEY 기입 시 ask 실 LLM 경로 확인

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
