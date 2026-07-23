/**
 * MapViewer — 모듈② 지도 통합 뷰어 (VWorld WMTS 타일 + Leaflet, L1~L4)
 *
 * 사용 계약:
 * - 읽는 상태 : state.adminCode(지자체 이동·재조회), state.theme(라이트=Base/다크=midnight),
 *               state.mapHighlight({type:"district"|"river"|"passage", id}|null),
 *               state.askResponse?.geo_refs(질의 결과 지리 참조 FeatureCollection — 강조 레이어)
 * - 호출 액션 : actions.selectDistrict(id)·actions.selectRiver(id)·actions.setRightTab("detail")
 * - API      : geo({admin})(api/client.js) — L1 지구점·L2 하천선·L3 경계
 * - 키 미설정 : VITE_VWORLD_API_KEY 없으면 DS Empty로 발급 안내(다른 배경지도 대체 금지)
 * - L4 폴백  : geometry 없는 항목은 지도 미표출(우측 목록에서만 취급)
 */
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppState } from '../../state/AppState.jsx';
import { geo } from '../../api/client.js';
import { KIND_COLORS } from '../../api/models.js';
import Empty from '../../ds/components/feedback/Empty.jsx';
import './map.css';

// ── VWorld WMTS (docs/05_VWorld_API_활용계획.md §2) ──────────────────
const VWORLD_KEY = import.meta.env.VITE_VWORLD_API_KEY || '';
const VWORLD_ATTRIBUTION = 'VWorld(국토교통부)';
const VWORLD_STYLE = { light: 'Base', dark: 'midnight' };

function vworldTileUrl(theme) {
  const style = theme === 'dark' ? VWORLD_STYLE.dark : VWORLD_STYLE.light;
  return `https://api.vworld.kr/req/wmts/1.0.0/${VWORLD_KEY}/${style}/{z}/{y}/{x}.png`;
}

// ── UNE 토큰 색 판독(라이트/다크 <html data-theme> 반영값) ───────────
function tokenColor(name, fallback) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

/** 재해유형별 마커 색 — 우측 패널 Badge와 단일 소스(models.js KIND_COLORS) */
function disasterColors() {
  return Object.fromEntries(
    Object.entries(KIND_COLORS).map(([kind, entry]) => [
      kind,
      tokenColor(entry.token, entry.fallback),
    ]),
  );
}

function escapeHtml(s) {
  return String(s ?? '').replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
}

function popupHtml({ name, meta, sub }) {
  const metaLine = meta
    ? `<span class="map-popup__meta">${escapeHtml(meta)}</span>`
    : '';
  const subLine = sub
    ? `<span class="map-popup__sub">${escapeHtml(sub)}</span>`
    : '';
  return `<div class="map-popup"><span class="map-popup__name">${escapeHtml(
    name,
  )}</span>${metaLine}${subLine}</div>`;
}

/** geometry 유효 여부 — 좌표 없는 항목(L4 폴백)은 지도 미표출 */
function hasGeometry(feature) {
  return Boolean(
    feature?.geometry?.coordinates && feature.geometry.coordinates.length > 0,
  );
}

const MARKER_BASE = { radius: 7, weight: 2, fillOpacity: 0.85, opacity: 1 };
const MARKER_ACTIVE = { radius: 11, weight: 3 };
const RIVER_BASE = { weight: 3, opacity: 0.9 };
const RIVER_ACTIVE = { weight: 6, opacity: 1 };

export default function MapViewer() {
  const { state, actions } = useAppState();
  const { adminCode, theme, mapHighlight, askResponse } = state;
  const geoRefs = askResponse?.geo_refs || null;

  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const tileRef = useRef(null);
  const overlayRef = useRef(null); // L1~L3 기본 레이어 그룹
  const emphasisRef = useRef(null); // geo_refs 강조 레이어 그룹
  const featureIndexRef = useRef(new Map()); // id → {layer, kind, baseStyle}
  const highlightedRef = useRef(null); // 직전 하이라이트 id
  const fitPendingRef = useRef(false);
  const actionsRef = useRef(actions);
  actionsRef.current = actions;

  const [geoData, setGeoData] = useState(null);

  // ── 지도 초기화(React 18 StrictMode 이중 마운트 대응: cleanup에서 remove) ──
  useEffect(() => {
    if (!VWORLD_KEY || !containerRef.current || mapRef.current) return undefined;
    const map = L.map(containerRef.current, {
      center: [37.36, 126.97],
      zoom: 12,
      minZoom: 6,
      maxZoom: 19,
      zoomControl: true,
    });
    map.attributionControl.setPrefix(false);
    mapRef.current = map;

    // 부모 flex 크기 변화 대응
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
      tileRef.current = null;
      overlayRef.current = null;
      emphasisRef.current = null;
      featureIndexRef.current = new Map();
      highlightedRef.current = null;
    };
  }, []);

  // ── VWorld 타일 — 테마 변화 감지 자동 전환(라이트=Base/다크=midnight) ──
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (tileRef.current) tileRef.current.remove();
    tileRef.current = L.tileLayer(vworldTileUrl(theme), {
      minZoom: 6,
      maxZoom: 19,
      attribution: VWORLD_ATTRIBUTION,
    }).addTo(map);
  }, [theme]);

  // ── /api/geo 로드 — admin 변경 시 재조회·fitBounds 예약 ──
  useEffect(() => {
    if (!VWORLD_KEY) return undefined;
    let cancelled = false;
    geo({ admin: adminCode })
      .then((fc) => {
        if (cancelled) return;
        fitPendingRef.current = true;
        setGeoData(fc);
      })
      .catch(() => {
        if (!cancelled) {
          actionsRef.current.showToast('error', '지도 데이터 조회 실패');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [adminCode]);

  // ── L1~L3 오버레이 구성(테마 변경 시 토큰 색 재적용 위해 재구성) ──
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !geoData) return;

    if (overlayRef.current) overlayRef.current.remove();
    const group = L.layerGroup().addTo(map);
    overlayRef.current = group;
    const index = new Map();
    featureIndexRef.current = index;
    highlightedRef.current = null;

    const colors = disasterColors();
    const boundaryColor = tokenColor('--color-light-blue-500', 'rgb(60,105,252)');
    const riverColor = tokenColor('--color-light-blue-500', 'rgb(60,105,252)');
    const markerStroke = tokenColor('--color-surface-primary', '#ffffff');

    const features = (geoData.features || []).filter(hasGeometry);
    const byLayer = (code) =>
      features.filter((f) => f.properties?.layer === code);

    // L3 지자체 경계 — 테두리 + 반투명 채움
    const l3Style = {
      color: boundaryColor,
      weight: 2,
      opacity: 0.9,
      fillColor: boundaryColor,
      fillOpacity: 0.06,
      interactive: false,
    };
    const l3 = L.geoJSON(
      { type: 'FeatureCollection', features: byLayer('L3') },
      { style: l3Style },
    ).addTo(group);

    // L2 하천 라인 — 클릭 시 하천 선택·상세 탭
    L.geoJSON(
      { type: 'FeatureCollection', features: byLayer('L2') },
      {
        style: { ...RIVER_BASE, color: riverColor },
        onEachFeature: (feature, layer) => {
          const p = feature.properties || {};
          const baseStyle = { ...RIVER_BASE, color: riverColor };
          if (p.id) {
            index.set(p.id, { layer, kind: 'river', baseStyle, name: p.name });
          }
          layer.bindPopup(
            popupHtml({
              name: p.name || '하천',
              meta: p.grade || '하천 구간',
              sub: p.admin_name,
            }),
          );
          layer.on('click', () => {
            if (!p.id) return;
            actionsRef.current.selectRiver(p.id);
            actionsRef.current.setRightTab('detail');
          });
        },
      },
    ).addTo(group);

    // L1 위험지구 마커 — 재해유형별 색 CircleMarker + 팝업(지구명·유형)
    L.geoJSON(
      { type: 'FeatureCollection', features: byLayer('L1') },
      {
        pointToLayer: (feature, latlng) => {
          const p = feature.properties || {};
          const fill = colors[p.disaster_type] || colors['기타'];
          return L.circleMarker(latlng, {
            ...MARKER_BASE,
            color: markerStroke,
            fillColor: fill,
          });
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties || {};
          const fill = colors[p.disaster_type] || colors['기타'];
          const baseStyle = {
            ...MARKER_BASE,
            color: markerStroke,
            fillColor: fill,
          };
          if (p.id) index.set(p.id, { layer, kind: 'district', baseStyle });
          layer.bindPopup(
            popupHtml({
              name: p.name || '위험지구',
              meta: p.disaster_type || '재해유형 미상',
              sub: p.location,
            }),
          );
          layer.on('click', () => {
            if (!p.id) return;
            actionsRef.current.selectDistrict(p.id);
            actionsRef.current.setRightTab('detail');
          });
        },
      },
    ).addTo(group);

    // admin 변경 직후 1회 fitBounds(경계 우선, 없으면 전체 피처)
    if (fitPendingRef.current) {
      fitPendingRef.current = false;
      let bounds = l3.getBounds();
      if (!bounds.isValid()) {
        bounds = L.geoJSON({ type: 'FeatureCollection', features }).getBounds();
      }
      if (bounds.isValid()) {
        map.fitBounds(bounds.pad(0.05), { maxZoom: 14 });
      }
    }
  }, [geoData, theme]);

  // ── geo_refs 강조 레이어 — 질의 결과 우선 표출 ──
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (emphasisRef.current) {
      emphasisRef.current.remove();
      emphasisRef.current = null;
    }
    const features = (geoRefs?.features || []).filter(hasGeometry);
    if (features.length === 0) return;

    const accent = tokenColor('--color-orange-500', 'rgb(234,88,12)');
    const halo = tokenColor('--color-surface-primary', '#ffffff');
    const group = L.layerGroup().addTo(map);
    emphasisRef.current = group;

    const layer = L.geoJSON(
      { type: 'FeatureCollection', features },
      {
        style: { color: accent, weight: 4, opacity: 1, fillOpacity: 0.15 },
        pointToLayer: (feature, latlng) =>
          L.circleMarker(latlng, {
            radius: 10,
            weight: 3,
            color: halo,
            fillColor: accent,
            fillOpacity: 0.95,
          }),
        onEachFeature: (feature, lyr) => {
          const p = feature.properties || {};
          lyr.bindPopup(
            popupHtml({
              name: p.name || '질의 결과 위치',
              meta: p.disaster_type || p.grade || '질의 결과 참조',
              sub: p.location || p.admin_name,
            }),
          );
          lyr.on('click', () => {
            if (!p.id) return;
            if (p.layer === 'L2') {
              actionsRef.current.selectRiver(p.id);
            } else {
              actionsRef.current.selectDistrict(p.id);
            }
            actionsRef.current.setRightTab('detail');
          });
        },
      },
    ).addTo(group);

    const bounds = layer.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.2), { maxZoom: 14 });
    }
  }, [geoRefs, theme]);

  // ── mapHighlight — 해당 피처 강조(색·반경)·panTo ──
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const index = featureIndexRef.current;

    // 직전 하이라이트 원복
    if (highlightedRef.current) {
      const prev = index.get(highlightedRef.current);
      if (prev?.layer?.setStyle) prev.layer.setStyle(prev.baseStyle);
      highlightedRef.current = null;
    }

    if (!mapHighlight?.id) return;
    let entry = index.get(mapHighlight.id);
    let entryId = mapHighlight.id;
    if (!entry && mapHighlight.type === 'passage') {
      // passage → 관련 하천(L2) 근사 매핑: Top-K 결과의 passage.river_name에
      // 하천명이 포함되면 해당 하천 구간을 강조(유사사례 카드 ↔ 지도 연동)
      const passage = (askResponse?.top_k_results || [])
        .map((r) => r?.passage)
        .find((p) => p?.passage_id === mapHighlight.id);
      if (passage?.river_name) {
        for (const [id, e] of index) {
          if (e.kind === 'river' && e.name && String(passage.river_name).includes(e.name)) {
            entry = e;
            entryId = id;
            break;
          }
        }
      }
    }
    if (!entry) return; // 지오 매핑 없는 하이라이트는 무시(우측 목록에서만 취급)

    const accentText = tokenColor('--color-text-primary', '#111111');
    if (entry.kind === 'district') {
      entry.layer.setStyle({
        ...entry.baseStyle,
        ...MARKER_ACTIVE,
        color: accentText,
      });
      if (entry.layer.bringToFront) entry.layer.bringToFront();
      map.panTo(entry.layer.getLatLng());
    } else if (entry.kind === 'river') {
      entry.layer.setStyle({ ...entry.baseStyle, ...RIVER_ACTIVE });
      if (entry.layer.bringToFront) entry.layer.bringToFront();
      const bounds = entry.layer.getBounds?.();
      if (bounds?.isValid()) map.panTo(bounds.getCenter());
    }
    highlightedRef.current = entryId;
  }, [mapHighlight, geoData, theme, askResponse]);

  // ── 키 미설정 — DS Empty 안내(다른 배경지도 대체 없음) ──
  if (!VWORLD_KEY) {
    return (
      <section className="map-viewer" aria-label="지도 통합 뷰어">
        <div className="map-viewer__empty">
          <Empty
            size="md"
            title="VWorld 인증키 설정 필요"
            description2="apps/web/.env의 VITE_VWORLD_API_KEY에 www.vworld.kr 발급 인증키 입력 후 개발 서버 재시작"
            actions={false}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="map-viewer" aria-label="지도 통합 뷰어">
      <div ref={containerRef} className="map-viewer__canvas" />
    </section>
  );
}
