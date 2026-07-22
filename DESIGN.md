# 재난안전 AI 시범 서비스 — 설계서 (1차 POC)

- 작성일: 2026-07-23 · 버전 v0.2 (착수 사업수행계획서 v0.9 반영)
- 상위 문서: `docs/00_사업수행계획서_분석.md` (사업 컨텍스트) · `docs/01_기획서.md` (목적·범위·시나리오) · `docs/02_데이터분석.md` (원시자료 분석)
- 화면 설계: `docs/03_화면설계.md`

## 1. 시스템 개요

시범서비스(유엔이 담당)는 T3Q의 RAG API/AI Agent와 연계되는 실증 화면이다. 1차 POC에서는 T3Q API가 미제공이므로, **동일 계약(구조화 질의 JSON → Top-K·유사도·근거 Passage·GeoJSON)을 구현한 자체 백엔드가 mock 겸 대체 엔진** 역할을 한다.

```
[원시자료 PDF/XLSX]                       [사용자 브라우저]
  저감종합계획(구미·의왕)                     React + UNE Design System
  하천기본계획(요천·구미천)                    ①상황입력 ②지도뷰어 ③Top-K목록
  재난메타·판단기준 v0.6                       ④상세조회 ⑤정합성(Citation)
        │                                            │ HTTP(JSON)
        ▼  (오프라인 배치)                            ▼
[데이터 파이프라인  pipeline/]              [Backend  apps/api  FastAPI]
  1. PDF 텍스트·표 추출(PyMuPDF)             ┌ RAG 연계 계약(T3Q 규격 정합) ┐
  2. 청킹(장·절·지구, passage_id)            │ /api/ask  /api/search        │
  3. 재난메타 태깅(T코드·지자체)              │ /api/criteria /api/districts │
  4. 판단기준·정형 JSON화                     │ /api/rivers  /api/geo        │
        │                                    └──────────────┬───────────────┘
        ▼                                                   ▼
[코퍼스  data/processed/]  ◄────  [검색: BM25 + 메타 필터 (Milvus/OpenSearch 대체)]
  chunks.jsonl · districts.json                             │
  rivers.json · criteria.json · geo.json                    ▼
                                     [LLM: Claude API 응답 생성 · 미설정 시 mock]
                                     (T3Q 연계 시: RAG API/AI Agent 어댑터로 교체)
```

- 식별자 체계(사업수행계획서 정합): `source_asset_id`(원본 문서) → `evidence_unit_id`(페이지·문단) → `passage_id`(청크) → `event_id`(상황) → `rag_answer_id`(응답). 근거 없는 답변 금지.
- Event ID 형식: `[재난유형코드]-[발생일시]-[행정코드]-[순번]` 예: `INUNDATION-20260723-41430-0001` (코드: HEAVY_RAIN/FLOOD/INUNDATION/TYPHOON/LANDSLIDE)

## 2. 기술 스택

| 계층 | 선택 | 근거 |
|---|---|---|
| 데이터 파이프라인 | Python 3.11, PyMuPDF(텍스트 — poppler 계열은 한글 유실 확인됨) + pdfplumber(표), openpyxl | 로컬 배치 처리, 표 추출 필요 |
| 검색 | rank-bm25 (한국어 형태 정규화: kiwipiepy 선택 적용) | POC 규모(문서 4종)에 벡터DB 불요, 재현성. 본사업 스택(Milvus/OpenSearch/Neo4j/PostGIS)은 T3Q 연계 시 교체 |
| 백엔드 | FastAPI + uvicorn | 경량 API, pydantic 스키마로 메타 정의 반영. T3Q RAG API 계약의 mock 서버 겸용 |
| LLM | Claude API `claude-sonnet-5` (환경변수 `ANTHROPIC_API_KEY`) | RAG 응답 생성·인용. 키 없으면 결정적 mock 폴백 (본사업은 Llama3 — 어댑터로 분리) |
| 지도 | **VWorld 2D 지도**(국토교통부 공간정보 오픈플랫폼) XYZ/WMTS 타일 + Leaflet 렌더링. 배경: Base(라이트)/midnight(다크), 필요 시 Satellite·Hybrid. API 키 `VWORLD_API_KEY`(api.vworld.kr 발급, 도메인 등록) | 지도 통합 뷰어(L1~L4 공간표현). 국내 공공 서비스 표준 배경지도 — 시범서비스 지도는 VWorld 2D 기반으로 확정 |
| 프론트엔드 | React 18 + Vite | UNE DS가 React JSX 컴포넌트로 제공됨 |
| 디자인 | UNE Design System (styles.css 토큰 509종·컴포넌트·아이콘 250종) + SpoqaHanSansNeo(로컬 폰트 자체 호스팅) | 지침 2·3 |

## 3. 저장소 구조

```
disaster/
├── apps/
│   ├── api/                  # FastAPI 백엔드
│   │   ├── main.py           # 앱 엔트리·라우터 등록
│   │   ├── routers/          # situation, search, ask, criteria, districts, rivers
│   │   ├── services/         # retrieval(BM25), llm(claude/mock), corpus 로더
│   │   ├── schemas/          # pydantic 모델(재난메타 EVT/REC/ARU 반영)
│   │   └── tests/
│   └── web/                  # React + Vite 프론트엔드
│       ├── src/
│       │   ├── ds/           # UNE DS에서 복사한 토큰·컴포넌트·아이콘
│       │   ├── components/   # SituationPanel, ChatPanel, VizPanel, ...
│       │   ├── pages/
│       │   └── api/          # 백엔드 클라이언트
│       └── public/fonts/     # SpoqaHanSansNeo *.ttf (로컬 서빙)
├── pipeline/                 # 데이터 파이프라인 (배치)
│   ├── extract_pdf.py        # PDF → 페이지 텍스트·표(JSON)
│   ├── chunk.py              # 장·절·지구 단위 청킹
│   ├── tag_meta.py           # 재난메타 태깅(T코드·지자체·문서유형·페이지)
│   ├── build_structured.py   # 위험지구·하천제원·판단기준 정형 JSON 생성
│   └── run_all.py            # 전체 실행 (data/processed/ 산출)
├── data/
│   ├── manual/               # 수동 검수 정형 데이터(위험지구·하천제원 등 시드)
│   └── processed/            # (gitignore) chunks.jsonl · *.json 산출물
├── docs/                     # 기획·분석·화면설계 문서
├── DESIGN.md · CLAUDE.md · PROGRESS.md · evaluation_criteria.md
└── .claude/                  # 하네스(agents·skills·hook)
```

## 4. 데이터 설계

### 4.1 코퍼스 청크 (`data/processed/chunks.jsonl`)
재난메타 v0.6의 정보자원(레코드)·사건·지역 계층을 축약 반영한다.

```json
{
  "passage_id": "PSG-GM-JGP-3-0412-01",       // RAG 근거 단위(사업수행계획서 식별자 체계)
  "evidence_unit_id": "EVD-GM-JGP-p0412",     // 페이지·문단 위치 근거
  "source_asset_id": "SRC-GM-JGP-2021",       // 원본 문서 자산 ID
  "doc_title": "구미시 자연재해저감종합계획(2021.9)",
  "doc_type": "자연재해저감종합계획",          // | 하천기본계획
  "publisher": "구미시",
  "admin_code": "47190",                      // 행정구역코드(ARU-04)
  "admin_name": "경상북도 구미시",
  "hazard_codes": ["T10107", "T10206"],       // 재난메타 T코드(EVT-08/09 대응)
  "hazard_event_codes": ["HEAVY_RAIN", "FLOOD"], // 사업 Event 코드 병기
  "disaster_kind": "내수재해",                 // 저감계획 8종 재해구분(해당 시)
  "river_name": null,                          // 하천기본계획일 때 하천명
  "chapter": "제3장 자연재해 위험지구 선정 및 저감대책 수립",
  "section": "3.2 내수재해 위험지구",
  "page_start": 412, "page_end": 415,
  "content": "…청크 본문…",
  "tables": [ { "caption": "…", "rows": [["…"]] } ]
}
```

- 청킹 규칙: ① 장·절 경계 우선 ② 위험지구 단위 표·분석표는 지구 1건=1청크 ③ 본문 800~1,500자 슬라이딩(오버랩 15%)
- `hazard_codes` 태깅: 재해구분 키워드 사전(하천재해→T10206·T10107, 내수재해→T10107, 사면재해·토사재해→T10401, 바람재해→T10105·T10101 등)

### 4.2 정형 데이터 (DAR-008 정형화 항목 정합)
- `districts.json` — 위험지구: 지구명·지자체·재해유형(8종)·위험요인·**위험조건 임계값 구조체(값·단위·비교연산·대상 — 예: 제방여유고 -0.83m)**·등급·저감대책·**사업상태(구축완료/구축중/구축필요)**·사업비·연차별 계획·투자우선순위·시행주체·좌표(가능 시)·근거(문서·페이지·표)
- `rivers.json` — 하천: 하천명·등급(국가/지방)·지자체·유역면적·연장·시점/종점·지점(측점 No.)별 계획홍수량(m³/s)·계획홍수위·빈도·홍수특보 기준유량(50%/70% 산출값)·근거 페이지
- `criteria.json` — 판단기준_5종 v0.6 구조화: 유형(T코드+Event 코드)별 판단조건(Q1)·등급 세분화(Q2)·근거 출처(S#·URL)
- `geo.json` — 지도 표출용: 지자체 경계(L3)·위험지구 대표점(L1)·하천 구간(L2) GeoJSON. 좌표 미확보 항목은 L4(목록 폴백) 처리

### 4.3 상황(사건) 모델 — API 공통 스키마 (Event Master 축약)
```json
{
  "event": {
    "event_id": "HEAVY_RAIN-20260723-41430-0001",  // [유형코드]-[일시]-[행정코드]-[순번]
    "hazard_code": "T10107",
    "hazard_event_code": "HEAVY_RAIN",
    "admin_code": "41430",              // 의왕시
    "alert_kind": "특보|위기경보",
    "alert_level": "경보",               // 주의보/경보 | 관심/주의/경계/심각
    "onset": "2026-07-23T14:00+09:00",
    "keywords": ["침수", "지하차도", "하수 역류"],   // 피해·통제 키워드(입력 패널)
    "note": "3시간 90mm 예상"
  }
}
```
입력 패널이 이 구조화 질의(JSON)를 생성하는 것이 사업수행계획서의 Query Builder 단계에 해당한다.

## 5. API 설계 (1차 POC)

T3Q RAG API 연계 구조(사업수행계획서 4.2(7))의 "질의 구조화 → 도구 호출 → 응답 수신(Top-K·유사도·근거 Passage·지도 레이어)" 계약을 따른다.

| Method·Path | 설명 | 응답 핵심 |
|---|---|---|
| GET `/api/meta/hazards` | 대상 재난유형 5종(UI명·Event 코드·T코드·판단주체) | criteria.json 요약 |
| GET `/api/meta/regions` | 지자체 3종(행정코드·명칭·보유 문서·하천) | 지역·문서 매핑 |
| GET `/api/criteria/{hazard_code}` | 판단조건·등급 세분화·근거출처 | Q1·Q2 구조체 |
| GET `/api/districts?admin=&hazard=&kind=` | 위험지구 목록/필터 | districts.json |
| GET `/api/rivers?admin=` | 하천 제원·계획홍수량·특보 기준유량 | rivers.json |
| GET `/api/geo?admin=&layer=` | 지도 레이어(경계·지구 마커·하천 구간) | GeoJSON (L1~L3) |
| POST `/api/search` | {event, query, top_k} → 메타 필터+BM25 검색 | results[]: {passage, score, similarity_factors, source} |
| POST `/api/ask` | {event, query} → 검색 후 근거 기반 응답 생성 | rag_answer_id, answer, top_k_results[](유사도 점수 포함), citations[], structured_refs(지구·하천·기준), geo_refs(GeoJSON) |

- `citations[]` = {passage_id, doc_title, chapter, page_start, page_end, quote} — 근거 표기 필수(F6). 응답마다 `rag_answer_id` 발급(추적성).
- `similarity_factors` = 유형·시간·공간·피해 요인별 기여(Event Match Score 축약판) — ⑤정합성 패널의 요인 기여도 표출용.
- LLM 프롬프트 원칙: 검색 청크 밖 정보로 답하지 않음(근거 없는 답변 금지) · 수치는 출처 페이지와 함께 제시 · 판단기준 언급 시 criteria.json 값 사용.
- mock 모드: `ANTHROPIC_API_KEY` 미설정 시 검색 상위 청크 요약+citations로 구성된 결정적 응답 반환(데모·테스트 재현성).
- T3Q 연계 시: services/llm·retrieval 어댑터만 T3Q RAG API/AI Agent(MCP) 호출로 교체 — 라우터·프론트 계약 불변.

## 6. 화면 설계 요약 (상세: docs/03_화면설계.md)

사업수행계획서 시범서비스 모듈 5종을 3열 레이아웃에 배치 (UNE DS · 라이트 기본, 다크 지원):

```
┌──────────────────────────────────────────────────────────────────┐
│ Header: "une 재난안전 AI" · 지자체 선택 · 위기경보 배지 · 테마 토글    │
├────────────┬──────────────────────────────┬──────────────────────┤
│ ①상황입력   │ ②지도 통합 뷰어               │ [Tab]                │
│ 패널(L)    │   마커(L1)·폴리곤(L2)·        │ ③유사사례 Top-K 목록  │
│ 재난유형    │   행정구역(L3)                │   결과 카드+유사도     │
│ 경보단계    │ ─────────────────────────    │ ④상세조회(지구·하천)  │
│ 키워드     │ 질의 입력 + 근거 기반 응답      │ 판단기준(기준표·게이지)│
│ 상황 메모   │  └ ⑤정합성: Citation·        │                      │
│ [적용]     │     요인별 기여도             │                      │
└────────────┴──────────────────────────────┴──────────────────────┘
```

- 컴포넌트 매핑: 재난유형=ChoiceChip(5종), 경보단계=Segment, 키워드=InputChip, 질의=Input+Button, 응답=Card+Badge, Citation=ListItem+Modal, 판단기준=Table(HeaderCell/BodyCell)+DotBadge, Top-K 카드=Card+Badge(유사도), 위기경보=Badge(관심 파랑/주의 노랑/경계 주황/심각 빨강)
- 지도·목록 연동: Top-K 카드 선택 ↔ 지도 마커 하이라이트 (동일 사건 기준 연동 — 검증 체크리스트 5단계)
- 아이콘은 UNE 250종만 사용(신규 드로잉 금지), 이모지 금지, UI 문구는 한국어 명사구.

## 7. 품질·검증 (사업수행계획서 TER-004 지표 정합)
- 파이프라인: 문서별 추출 페이지 수·청크 수·표 수 리포트 출력, 샘플 20청크 육안 검수 체크리스트
- 백엔드: pytest — 코퍼스 로드, 검색 필터, ask mock 경로(근거 제시율 100% 검증 포함), 스키마 검증
- 프론트: `npm run build` 통과 + 시나리오 S1~S3 수동 데모 절차서(docs/04_데모시나리오.md, Phase 4 산출)
- 서비스 검증 체크리스트 8단계(사업수행계획서): ①질의 구조화(입력→JSON 무손실) ②API 호출·응답 ③Top-K 결과 수신(유사도·사건 정보) ④위치 메타데이터(GeoJSON) ⑤지도 표출·목록 연동 ⑥근거 Passage·출처 표시(내부정보 미노출) ⑦응답 정합성(입력과 다른 유형·지역 생성 금지 — 환각 점검) ⑧로그 기록
- 응답 품질 지표(고도화 시 정량화): Groundedness·Faithfulness·Source Traceability·근거 제시율 / 검색: Top-K 적중률·MRR·NDCG·Geo Relevance
- 평가 기준: `evaluation_criteria.md` (Phase별 체크리스트)

## 8. 고도화 설계 메모 (2차 — 부산/인제/영천 및 본사업 연계)
- **T3Q RAG API/AI Agent(MCP) 실연계**: services/ 어댑터 교체(라우터·프론트 계약 불변). VectorDB(Milvus)·OpenSearch Hybrid·KG(Neo4j)·PostGIS 스택은 T3Q 플랫폼 측 제공
- **공개용/내부용 화면 분리·RBAC**: 관리자/행안부·책임기관/연구자/대국민 4역할 노출 차등, 개인정보 필터링 파이프라인(질의 사전검사→내부 출처 Citation 제거→응답 후처리)
- 하천 식별: river.go.kr/basicPlan/basicPlan.do(하천기본계획 고시 목록)·rimMap.do(하천망 지도) 크롤링/조회 + 웹 검색으로 「지자체→통과 하천명→기본계획 문서」 매핑 테이블 자동 구축
- HWP: hwp5txt 등 변환 도구 도입 또는 발주처에 PDF 원본 요청 (남원 저감계획·안양천 기본계획)
- 실시간 관측 연계: 판단기준의 제공 시스템(기상자료개방포털·WAMIS·산사태정보시스템) API 연동으로 게이지에 실황 주입
- 재난데이터메타 수령 시: schemas/ 계층 교체 및 태깅 필드 확장. Event 매칭(Event Match Score)·중대본/상황일지 코퍼스 확장은 본사업 데이터셋(DAR-002~006) 공급 시 반영
