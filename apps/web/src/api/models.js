/**
 * 이벤트(상황) 모델·상수 — 백엔드 schemas/common.py Event 계약과 1:1.
 *
 * 고정 인터페이스(T3~T6 패널이 그대로 사용, 재정의 금지):
 * - HAZARDS      : 대상 재난 5종 [{event_code, hazard_code, name_ko}]
 * - REGIONS      : 1차 POC 지자체 3곳 [{admin_code, admin_name, short_name}]
 * - ALERT_KINDS  : 발령 구분 ["특보", "위기경보"]
 * - ALERT_LEVELS : 구분별 단계 {특보:[주의보,경보], 위기경보:[관심,주의,경계,심각]}
 * - ALERT_COLORS : 단계별 색 매핑 {level: {color, token, label}}
 * - alertColor(level) : 단계 → 색 엔트리(미지정 시 기본 회색)
 * - buildEvent(input) : Event 객체 생성(event_id 자동 부여)
 */

/**
 * Event 구조 (백엔드 Event pydantic 모델 — 부분 입력 허용)
 * @typedef {Object} Event
 * @property {string|null} event_id          - [유형코드]-[YYYYMMDDHHmm]-[행정코드]-[순번4]
 * @property {string|null} hazard_code       - T코드 (예: "T10107")
 * @property {string|null} hazard_event_code - Event 코드 (예: "HEAVY_RAIN")
 * @property {string|null} admin_code        - 행정코드 (예: "41430")
 * @property {string|null} alert_kind        - "특보" | "위기경보"
 * @property {string|null} alert_level       - 주의보/경보 | 관심/주의/경계/심각
 * @property {string|null} onset             - ISO8601 (예: "2026-07-23T14:00+09:00")
 * @property {string[]} keywords             - 피해·통제 키워드
 * @property {string|null} note              - 비고
 */

/** 대상 재난 5종 (사업 기준 코드 고정) */
export const HAZARDS = [
  { event_code: 'HEAVY_RAIN', hazard_code: 'T10107', name_ko: '호우' },
  { event_code: 'FLOOD', hazard_code: 'T10206', name_ko: '홍수' },
  { event_code: 'INUNDATION', hazard_code: 'T10106', name_ko: '수해·침수' },
  { event_code: 'TYPHOON', hazard_code: 'T10105', name_ko: '태풍' },
  { event_code: 'LANDSLIDE', hazard_code: 'T10401', name_ko: '산사태' },
];

/** 1차 POC 지자체 3곳 */
export const REGIONS = [
  { admin_code: '41430', admin_name: '경기도 의왕시', short_name: '의왕' },
  { admin_code: '47190', admin_name: '경상북도 구미시', short_name: '구미' },
  { admin_code: '45190', admin_name: '전라북도 남원시', short_name: '남원' },
];

/** 발령 구분 */
export const ALERT_KINDS = ['특보', '위기경보'];

/** 발령 구분별 단계 */
export const ALERT_LEVELS = {
  특보: ['주의보', '경보'],
  위기경보: ['관심', '주의', '경계', '심각'],
};

/**
 * 위기경보 4단계 색 매핑 — color: 고정 hex, token: UNE DS 토큰(있으면 우선 사용).
 * 특보 2단계(주의보·경보)는 위기경보 색으로 별칭 매핑(주의보→주의, 경보→심각).
 */
export const ALERT_COLORS = {
  관심: { color: '#3C69FC', token: 'var(--color-light-blue-500)', label: '관심' },
  주의: { color: '#E89A00', token: '#E89A00', label: '주의' },
  경계: { color: '#FC6B19', token: 'var(--color-orange-500)', label: '경계' },
  심각: { color: '#D92D20', token: 'var(--color-red-500)', label: '심각' },
  // 특보 별칭
  주의보: { color: '#E89A00', token: '#E89A00', label: '주의보' },
  경보: { color: '#D92D20', token: 'var(--color-red-500)', label: '경보' },
};

/** 단계 미지정·미지원 값의 기본 색(회색) */
export const ALERT_COLOR_DEFAULT = {
  color: '#6B7280',
  token: 'var(--color-text-secondary-2)',
  label: '미지정',
};

/**
 * 발령 단계 → 색 엔트리 조회.
 * @param {string|null|undefined} level
 * @returns {{color: string, token: string, label: string}}
 */
export function alertColor(level) {
  return (level && ALERT_COLORS[level]) || ALERT_COLOR_DEFAULT;
}

/** event_code → HAZARDS 항목 (없으면 undefined) */
export function findHazard(code) {
  if (!code) return undefined;
  const key = String(code).toUpperCase();
  return HAZARDS.find((h) => h.event_code === key || h.hazard_code === key);
}

/** admin_code → REGIONS 항목 (없으면 undefined) */
export function findRegion(adminCode) {
  return REGIONS.find((r) => r.admin_code === adminCode);
}

// event_id 순번 — 세션 내 증가(4자리 0패딩)
let _eventSeq = 0;

/** Date → 로컬시각 "YYYYMMDDHHmm" */
function stamp12(d) {
  const p = (n, w = 2) => String(n).padStart(w, '0');
  return (
    `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}` +
    `${p(d.getHours())}${p(d.getMinutes())}`
  );
}

/**
 * Event 객체 생성 — event_id `${event_code}-${YYYYMMDDHHmm}-${admin_code}-${순번4}`.
 * hazard_code는 event_code로 자동 보완(HAZARDS 매핑), onset 미지정 시 현재 시각(ISO).
 *
 * @param {Object} input
 * @param {string} input.event_code       - HAZARDS event_code (예: "HEAVY_RAIN")
 * @param {string} input.admin_code       - REGIONS admin_code (예: "41430")
 * @param {string} [input.hazard_code]    - T코드(생략 시 HAZARDS에서 보완)
 * @param {string} [input.alert_kind]     - "특보" | "위기경보"
 * @param {string} [input.alert_level]
 * @param {string} [input.onset]          - ISO8601(생략 시 현재 시각)
 * @param {string[]} [input.keywords]
 * @param {string} [input.note]
 * @returns {Event}
 */
export function buildEvent({
  event_code,
  admin_code,
  hazard_code,
  alert_kind = null,
  alert_level = null,
  onset,
  keywords = [],
  note = null,
} = {}) {
  const hazard = findHazard(event_code);
  const onsetIso = onset || new Date().toISOString();
  const onsetDate = new Date(onsetIso);
  const ts = stamp12(Number.isNaN(onsetDate.getTime()) ? new Date() : onsetDate);
  _eventSeq += 1;
  const seq = String(_eventSeq).padStart(4, '0');
  return {
    event_id: `${event_code || 'UNKNOWN'}-${ts}-${admin_code || '00000'}-${seq}`,
    hazard_code: hazard_code || hazard?.hazard_code || null,
    hazard_event_code: event_code || null,
    admin_code: admin_code || null,
    alert_kind,
    alert_level,
    onset: onsetIso,
    keywords: Array.isArray(keywords) ? keywords : [],
    note,
  };
}
