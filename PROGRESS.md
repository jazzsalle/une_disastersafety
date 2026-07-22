# PROGRESS

## Last updated
2026-07-23

## Current goal
재난안전 AI 시범 서비스: 기획·설계 문서 확정 → 1차 POC 개발 (대상: 의왕/구미/남원, 자연재해저감종합계획·하천기본계획 기반)

## Done this session
- 지침 확인.txt / init-harness-prompt.md 검토
- 원시자료 분석: 재난메타_정의서_v0.6.xlsx(6패싯·L0~L3·사건중심 EVT/REC/ARU), 재난판단기준_5종_v0.6.xlsx(태풍/풍수해/호우/홍수/산사태 판단조건·등급), UNE Design System 구조, 구미/의왕 자연재해저감종합계획 PDF, 요천/구미천 하천기본계획 PDF
- **착수 사업수행계획서 v0.9(80p) 분석 → docs/00_사업수행계획서_분석.md 작성, 기획·설계 전면 보완**: 재난유형 5종을 사업 기준(호우/홍수/수해·침수/태풍/산사태)으로 조정, 시범서비스 모듈 5종(입력 패널·지도 뷰어 L1~L4·Top-K 목록·상세조회·정합성) 반영, T3Q RAG API 연계 계약·식별자 체계(source_asset_id→…→rag_answer_id)·근거 제시율 100% 원칙 채택
- 기획·설계 문서 작성 (docs/00~03, DESIGN.md — v0.2)
- 하네스 구성 (.claude/agents, .claude/skills, evaluation_criteria.md, CLAUDE.md)

## In progress
- (없음 — Phase 1 착수 대기)

## Next steps
1. Claude Code 세션 재시작 (subagent·스킬 로드)
2. `/phase-run 1` 실행 — POC 스캐폴딩
3. 이후 Phase 순차 진행

## Blockers
- 남원시 자연재해저감종합계획·안양천(의왕) 하천기본계획은 .hwp 원본만 있어 자동 텍스트 추출 불가 → POC는 PDF 자료(구미/의왕 저감계획, 요천/구미천 하천기본계획) 중심으로 진행
- 재난데이터메타(속성 데이터 정의서)는 T3Q에서 설계 중으로 아직 미제공 → 재난메타·판단기준 v0.6 기준으로 선반영, 수령 시 갱신

## Notes
- VWorld 개발키 발급·API 신청 완료(모바일·3D 데스크톱 제외 전 API) — 키는 로컬 .env에만 있음(git 미포함). 집 등 다른 환경에서는 .env.example 복사 후 동일 키 재기입 필요 (docs/05 참조)

## How to run
- (Phase 1 완료 후 기입)
