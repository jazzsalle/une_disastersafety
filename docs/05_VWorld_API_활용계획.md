# VWorld 오픈 API 활용계획 — 발급·사용 API 도출

- 작성일: 2026-07-23 · 버전 v0.2

## 0. 발급 현황 (2026-07-23 기준)
- **개발키 발급 완료** — 로컬 `.env`에 기입됨(`VITE_VWORLD_API_KEY`·`VWORLD_API_KEY`, git 미포함). 다른 작업 환경에서는 `.env.example` 복사 후 동일 키 기입 필요
- **API 신청 완료**: 모바일 API(2D/3D)·3D 데스크톱 API를 **제외한 전 API** 신청 — 1차 필수 3종(WMTS/TMS·지오코더·2D데이터)과 선택·고도화 API(이미지·WMS/WFS·범례·검색·3D 지도·2D 지도 JS 등) 모두 사용 가능 상태
- 미신청: 2D/3D 모바일 API, 3D 데스크톱 API (웹 기반 시범서비스 범위 외 — 필요 시 추가 신청)
- 등록 도메인 현황: **`localhost` 단독 등록(2026-07-23, www.unes.co.kr 삭제)** — 집/회사 PC 공통으로 개발 서버(localhost) 타일·API 호출 가능. ※ 등록 기준은 "브라우저에 뜨는 서비스 주소"이므로 PC 이동 시 변경 불필요
- 시연/운영 도메인: **현재 별도 발급·등록 계획 없음** (개발·로컬 데모는 localhost로 충분). 향후 외부 도메인 배포가 결정되는 경우에만 해당 도메인 추가 등록
- 근거: 시범서비스 설계안(DESIGN.md·docs/03 화면설계 — 지도 통합 뷰어 F7, L1~L4 공간표현 전략) ↔ VWorld 오픈 API 레퍼런스(https://www.vworld.kr/dev/v4apiRefer.do)
- VWorld 제공 API 전체: 3D 지도, 2D 지도, 배경지도, WMS/WFS, WMTS/TMS, 2D데이터, 지오코더, 검색, 이미지(StaticMap), 범례 등 — 모두 **동일 인증키**(www.vworld.kr 인증키 발급, 사용 도메인 등록) 사용

## 1. 결론 — 발급·사용 API 목록

| 구분 | API | 시범서비스 용도 (설계 매핑) | 사용 시점 |
|---|---|---|---|
| **필수** | **WMTS/TMS API** | ② 지도 통합 뷰어의 **배경지도 타일**. 라이트=`Base`, 다크=`midnight` (Leaflet TileLayer로 로드) | Phase 3 (프론트) |
| **필수** | **지오코더 API** | 위험지구 위치(지번 주소) → 좌표 변환. 관리대장에 좌표가 없거나 주소만 있는 지구의 **L1 마커 좌표 생성**(geo.json 구축) | Phase 1 (파이프라인 배치) |
| **필수** | **2D데이터 API** | **행정구역 경계**(시도 `LT_C_ADSIDO_INFO`·시군구 `LT_C_ADSIGG_INFO`) 조회 → L3 경계 하이라이트. 하천망(`LT_C_WKMSTRM` 하천중심선) 조회 → L2 하천 구간 표출 | Phase 1 (경계 GeoJSON 사전 확보) |
| 선택 | 이미지 API (StaticMap) | ④ 상세조회 카드·데모 문서용 정적 지도 썸네일 | Phase 4 (선택) |
| 고도화 | WMS/WFS API | 본사업 취약지역 GIS 연계 시 국가 공간 레이어(침수흔적도·하천범람 등) 오버레이 | 2차 고도화 |
| 고도화 | 범례 API | WMS 레이어 도입 시 레이어별 범례 이미지 표출 | 2차 고도화 (WMS와 세트) |
| 고도화 | 검색 API | ① 입력 패널의 주소/장소 검색(부산·인제·영천 확장 시 지역 자유 검색) | 2차 고도화 |
| 미사용 | 3D 지도 API (WebGL) | 시범서비스는 **2D 지도 기반**(지침) — 범위 외. 3D 시각화 필요 시 별도 검토 | — |
| 미사용 | 2D 지도 API (JS) | VWorld 자체 JS 지도 라이브러리(OpenLayers 3.10 기반). 구버전 종속·React 통합 부담으로 미채택 — **WMTS 타일 + Leaflet 조합으로 대체**(아래 2절) | — |
| 미사용 | 배경지도 API 1.0 | WMTS/TMS API와 동일 목적의 구버전 — WMTS로 갈음 | — |

## 2. 채택 구성: WMTS 타일 + Leaflet (2D 지도 구현 방식)

"VWorld 2D 지도 기반" 요구를 **WMTS/TMS 타일을 Leaflet으로 렌더링**하는 방식으로 구현한다.
(VWorld 2D 지도 JS API는 OpenLayers 3.10(2015) 종속으로 React 18 통합·UNE DS 오버라이드에 불리 — 타일 방식이 표준적이고 경량)

```
타일 URL: https://api.vworld.kr/req/wmts/1.0.0/{VITE_VWORLD_API_KEY}/{레이어}/{z}/{y}/{x}.{포맷}
  - Base     (png)  : 기본 2D 지도 — 라이트 테마
  - midnight (png)  : 야간 스타일 — 다크 테마
  - gray     (png)  : 회색조 — (선택) 데이터 강조 모드
  - Satellite(jpeg) : 항공영상 — (선택) 현장 확인용 토글
  - Hybrid   (png)  : 라벨 오버레이 — Satellite와 세트
Capabilities: https://api.vworld.kr/req/wmts/1.0.0/{키}/WMTSCapabilities.xml
좌표계: EPSG:3857 (Web Mercator) — Leaflet 기본과 일치. GeoJSON 데이터는 EPSG:4326으로 관리
```

## 3. API별 상세 활용 설계

### 3.1 WMTS/TMS API (필수 — 배경지도)
- 프론트 `MapViewer` 컴포넌트에서 Leaflet `L.tileLayer`로 로드. 테마 토글 시 Base↔midnight 레이어 교체
- 키 미설정(`VITE_VWORLD_API_KEY` 없음) 시: 타일 로드 대신 Empty 안내("VWorld 인증키를 설정하십시오") — 다른 배경지도로 대체하지 않음(CLAUDE.md 규칙)
- 지도 하단 VWorld 출처 표기(attribution) 필수

### 3.2 지오코더 API (필수 — 주소→좌표 배치 변환)
- 엔드포인트: `https://api.vworld.kr/req/address?service=address&request=getcoord&type=PARCEL&address={지번주소}&key={키}`
- 파이프라인 `build_structured.py`에서 위험지구 주소(예: "의왕시 고천동 332-37") 일괄 변환 → `geo.json` L1 마커
- 관리대장에 경위도(도분초)가 있는 지구는 그 값을 우선 사용, 지오코더는 보완용. 변환 실패 항목은 L4(목록 폴백) 처리
- 배치(1회성) 호출이므로 일일 호출 한도 내 처리 가능. 결과는 data/에 캐시(재실행 시 재호출 없음)

### 3.3 2D데이터 API (필수 — 행정경계·하천망)
- 엔드포인트: `https://api.vworld.kr/req/data?service=data&request=GetFeature&data={레이어}&attrFilter={필터}&key={키}` (GeoJSON 응답)
- 시군구 경계: `LT_C_ADSIGG_INFO` + 행정코드 필터(의왕 41430·구미 47190·남원 45190) → L3 경계
- 하천망: `LT_C_WKMSTRM` + `attrFilter=riv_nm:=:{하천명}` + `geomFilter=BOX({지자체 경계 bbox±0.03°})`
  → L2 하천 실형상. **실조회 확인(2026-07-23): 본 레이어는 면형(MultiPolygon — 하천 수면 형상)**이며
  bbox 필터로 전국 동명 하천 오매칭·광역 하천(안양천)의 타 지자체 구간 유입을 방지한다.
  조회 실패 시 기존 대표좌표 근사선(provisional) 폴백 — `pipeline/fetch_geo.py fetch_river_geometry()`
- Phase 1에서 1회 조회해 `data/manual/geo.json`에 저장(런타임 의존 없음 — 오프라인 데모 가능)

### 3.4 선택·고도화 API
- **이미지 API(StaticMap)**: 데모 문서·카드 썸네일용 정적 지도 — Phase 4에서 필요 시
- **WMS/WFS + 범례 API**: 2차에서 취약지역 GIS 레이어(침수흔적도·하천범람지도 등) 오버레이 + 범례 표출 — 본사업 GeoAI/GIS 연계와 함께 도입
- **검색 API**: 부산/인제/영천 확장 시 입력 패널에 주소·장소 자유 검색 추가

## 4. 인증키 발급·운영 체크리스트
1. www.vworld.kr 회원가입 → 오픈API → **인증키 발급** (하나의 키로 위 API 전부 사용)
2. 사용 도메인 등록: 개발 `localhost`(포트 포함), 데모/운영 도메인 추가 등록 (미등록 도메인은 타일·API 호출 거부됨)
3. 키 보관: 프론트 `.env`의 `VITE_VWORLD_API_KEY`(타일·클라이언트 호출용), 파이프라인은 `VWORLD_API_KEY` — `.env`는 gitignore, `.env.example`에 항목만 기재
4. 호출 한도: 발급 시 안내되는 일일 한도 확인 — 지오코더·2D데이터는 배치 캐시 방식이라 영향 없음, 타일은 통상 한도 내
5. 출처 표기: 지도 화면에 VWorld(국토교통부) 저작자 표시 유지

## 참고
- API 레퍼런스: https://www.vworld.kr/dev/v4apiRefer.do
- WMTS 레퍼런스: https://vworld.kr/dev/v4dv_wmtsguide_s001.do
