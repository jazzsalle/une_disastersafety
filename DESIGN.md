# 재난안전 AI 시범 서비스 — 설계서 (1차 POC)

- 작성일: 2026-07-23 · 버전 v0.1
- 상위 문서: `docs/01_기획서.md` (목적·범위·시나리오) · `docs/02_데이터분석.md` (원시자료 분석)
- 화면 설계: `docs/03_화면설계.md`

## 1. 시스템 개요

```
[원시자료 PDF/XLSX]                       [사용자 브라우저]
  저감종합계획(구미·의왕)                     React + UNE Design System
  하천기본계획(요천·구미천)                          │
  재난메타·판단기준 v0.6                             ▼
        │                                   [Frontend  apps/web]
        ▼  (오프라인 배치)                    상황입력 패널 / 질의응답 / 시각화
[데이터 파이프라인  pipeline/]                        │ HTTP(JSON)
  1. PDF 텍스트·표 추출                              ▼
  2. 청킹(장·절·지구 단위)                   [Backend  apps/api  FastAPI]
  3. 재난메타 태깅(T코드·지자체·문서유형)      /api/situation  /api/search  /api/ask
  4. 판단기준·정형데이터 JSON화               /api/criteria   /api/districts  /api/rivers
        │                                            │
        ▼                                            ▼
[코퍼스  data/processed/]  ◄──────────  [검색: BM25(rank-bm25) + 메타 필터]
  chunks.jsonl · districts.json                      │
  rivers.json · criteria.json                        ▼
                                          [LLM: Claude API (RAG 응답 생성)]
                                            미설정 시 mock 응답 폴백
```

## 2. 기술 스택

| 계층 | 선택 | 근거 |
|---|---|---|
| 데이터 파이프라인 | Python 3.11, PyMuPDF(텍스트 — poppler 계열은 한글 유실 확인됨) + pdfplumber(표), openpyxl | 로컬 배치 처리, 표 추출 필요 |
| 검색 | rank-bm25 (한국어 형태 정규화: kiwipiepy 선택 적용) | POC 규모(문서 4종)에 벡터DB 불요, 재현성 |
| 백엔드 | FastAPI + uvicorn | 경량 API, pydantic 스키마로 메타 정의 반영 |
| LLM | Claude API `claude-sonnet-5` (환경변수 `ANTHROPIC_API_KEY`) | RAG 응답 생성·인용. 키 없으면 결정적 mock 폴백 |
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
  "record_id": "REC-GM-JGP-3-0412",
  "doc_id": "GM-JGP-2021",
  "doc_title": "구미시 자연재해저감종합계획(2021.9)",
  "doc_type": "자연재해저감종합계획",          // | 하천기본계획
  "publisher": "구미시",
  "admin_code": "47190",                      // 행정구역코드(ARU-04)
  "admin_name": "경상북도 구미시",
  "hazard_codes": ["T10107", "T10206"],       // 관련 재난유형(EVT-08/09 대응)
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

### 4.2 정형 데이터
- `districts.json` — 위험지구: 지구명·지자체·재해유형(8종)·위험요인·등급·저감대책·사업비·시행주체·근거 페이지
- `rivers.json` — 하천: 하천명·등급(국가/지방)·지자체·유역면적·연장·시점/종점·지점별 계획홍수량(m³/s)·계획홍수위·빈도·근거 페이지
- `criteria.json` — 판단기준_5종 v0.6 그대로 구조화: 유형(T코드)별 판단조건(Q1)·등급 세분화(Q2)·근거 출처(S#·URL)

### 4.3 상황(사건) 모델 — API 공통 스키마
```json
{
  "event": {
    "hazard_code": "T10107",
    "admin_code": "41430",              // 의왕시
    "alert_kind": "특보|위기경보",
    "alert_level": "경보",               // 주의보/경보 | 관심/주의/경계/심각
    "onset": "2026-07-23T14:00+09:00",
    "note": "3시간 90mm 예상"
  }
}
```

## 5. API 설계 (1차 POC)

| Method·Path | 설명 | 응답 핵심 |
|---|---|---|
| GET `/api/meta/hazards` | 대상 재난유형 5종(T코드·명칭·판단주체) | criteria.json 요약 |
| GET `/api/meta/regions` | 지자체 3종(행정코드·명칭·보유 문서·하천) | 지역·문서 매핑 |
| GET `/api/criteria/{hazard_code}` | 판단조건·등급 세분화·근거출처 | Q1·Q2 구조체 |
| GET `/api/districts?admin=&hazard=&kind=` | 위험지구 목록/필터 | districts.json |
| GET `/api/rivers?admin=` | 하천 제원·계획홍수량 | rivers.json |
| POST `/api/search` | {event, query, top_k} → 메타 필터+BM25 검색 | 청크 목록(+점수·출처) |
| POST `/api/ask` | {event, query} → 검색 후 LLM 응답 생성 | answer, citations[], used_chunks[], structured_refs(관련 지구·하천·기준) |

- `/api/ask` 응답의 `citations[]`는 {doc_title, chapter, page_start, page_end, quote} — 근거 표기 필수(F6).
- LLM 프롬프트 원칙: 검색 청크 밖 정보로 답하지 않음 · 수치는 출처 페이지와 함께 제시 · 판단기준 언급 시 criteria.json 값 사용.
- mock 모드: `ANTHROPIC_API_KEY` 미설정 시 검색 상위 청크 요약+citations로 구성된 결정적 응답 반환(데모·테스트 재현성).

## 6. 화면 설계 요약 (상세: docs/03_화면설계.md)

3패널 대시보드 (UNE DS · 라이트 테마 기본, 다크 지원):

```
┌────────────────────────────────────────────────────────────┐
│ Header: "une 재난안전 AI" · 지자체 선택 · 위기경보 배지          │
├────────────┬───────────────────────────┬───────────────────┤
│ 상황입력    │  AI 질의응답               │  시각화            │
│ 패널(L)    │  (C)                      │  패널(R)          │
│ 재난유형    │  대화 스레드               │  판단기준 게이지    │
│ 경보단계    │  근거 인용 카드            │  위험지구 카드      │
│ 상황 메모   │  질의 입력창               │  하천 제원 표       │
└────────────┴───────────────────────────┴───────────────────┘
```

- 컴포넌트 매핑: 재난유형=ChoiceChip, 경보단계=Segment, 질의=Input+Button, 응답=Card+Badge, 근거=ListItem, 판단기준=Table(HeaderCell/BodyCell)+DotBadge, 위기경보=Badge(Blue/Yellow/Orange/Red 시맨틱 컬러 매핑)
- 아이콘은 UNE 250종 아이콘만 사용(신규 드로잉 금지), 이모지 금지, UI 문구는 한국어 명사구.

## 7. 품질·검증
- 파이프라인: 문서별 추출 페이지 수·청크 수·표 수 리포트 출력, 샘플 20청크 육안 검수 체크리스트
- 백엔드: pytest — 코퍼스 로드, 검색 필터, ask mock 경로, 스키마 검증
- 프론트: `npm run build` 통과 + 시나리오 S1~S3 수동 데모 절차서(docs/04_데모시나리오.md, Phase 4 산출)
- 평가 기준: `evaluation_criteria.md` (Phase별 체크리스트)

## 8. 고도화 설계 메모 (2차 — 부산/인제/영천)
- 하천 식별: river.go.kr/basicPlan/basicPlan.do(하천기본계획 고시 목록)·rimMap.do(하천망 지도) 크롤링/조회 + 웹 검색으로 「지자체→통과 하천명→기본계획 문서」 매핑 테이블 자동 구축
- HWP: hwp5txt 등 변환 도구 도입 또는 발주처에 PDF 원본 요청
- 실시간 관측 연계: 판단기준의 제공 시스템(기상자료개방포털·WAMIS·산사태정보시스템) API 연동으로 게이지에 실황 주입
- 재난데이터메타 수령 시: schemas/ 계층 교체 및 태깅 필드 확장
