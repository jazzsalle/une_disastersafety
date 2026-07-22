/**
 * API 클라이언트 — FastAPI 백엔드(/api, vite dev 프록시 경유) 단일 진입점.
 *
 * 고정 인터페이스(T3~T6 패널이 그대로 사용, 재구현 금지 — 특히 chat SSE 파서):
 * - health()
 * - metaHazards() / metaRegions()
 * - criteria(code)                       — 단건(hazard_code·event_code 허용), code 생략 시 루트 전체
 * - districts({admin, hazard, kind})     — {count, districts:[...]} (루트 구조 보존)
 * - rivers({admin})                      — {count, rivers:[...]}
 * - geo({admin, layer})                  — GeoJSON FeatureCollection
 * - search({event, query, top_k})        — {results:[{passage,score,similarity_factors,source}], filter_relaxed}
 * - ask({event, query, top_k})           — {rag_answer_id, answer, mode, no_evidence,
 *                                           top_k_results[], citations[], structured_refs{districts,rivers,criteria}, geo_refs}
 * - chat({query, history, event, onDelta, onDone, onMock, signal})
 *     응답 헤더 X-Chat-Mode / Content-Type으로 분기:
 *     - text/event-stream → SSE 파싱(data: 라인 누적) → onDelta(delta, fullText) 반복
 *     - JSON(mock)        → onMock({mode:"mock", notice, answer, excerpts[], query})
 *     종료 시 onDone({mode, text}) 호출, 동일 값 resolve.
 *
 * 오류: HTTP !ok 시 ApiError(status·detail) throw — 호출부(패널)가 toast 처리.
 */

const BASE = '/api';

/** HTTP 오류 — status(응답 코드)·detail(백엔드 detail 또는 본문 요약) 포함 */
export class ApiError extends Error {
  constructor(status, detail, path) {
    super(`API ${status} ${path}: ${detail}`);
    this.name = 'ApiError';
    this.status = status;
    this.detail = detail;
    this.path = path;
  }
}

async function raiseForStatus(res, path) {
  if (res.ok) return;
  let detail = res.statusText;
  try {
    const body = await res.json();
    detail = body?.detail ? JSON.stringify(body.detail) : JSON.stringify(body);
  } catch {
    // 본문 파싱 실패 시 statusText 유지
  }
  throw new ApiError(res.status, detail, path);
}

function qs(params = {}) {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') sp.set(k, String(v));
  }
  const s = sp.toString();
  return s ? `?${s}` : '';
}

async function getJson(path, params) {
  const url = `${BASE}${path}${qs(params)}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  await raiseForStatus(res, path);
  return res.json();
}

async function postJson(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  await raiseForStatus(res, path);
  return res.json();
}

// ── GET ──────────────────────────────────────────────────────────────

/** GET /api/health → {status, corpus:{chunks, criteria, districts, rivers, geo_features}} */
export function health() {
  return getJson('/health');
}

/** GET /api/meta/hazards → [{name_ko, event_code, hazard_code, judgment_subject, judgment_concept}] */
export function metaHazards() {
  return getJson('/meta/hazards');
}

/** GET /api/meta/regions → [{admin_code, admin_name, short_name, source_asset_ids, river_id, river_name}] */
export function metaRegions() {
  return getJson('/meta/regions');
}

/**
 * GET /api/criteria/{code} — 단건(T10107·HEAVY_RAIN 모두 허용, 미존재 404).
 * code 생략 시 GET /api/criteria — 루트 전체 {criteria:[...], source_registry}.
 */
export function criteria(code) {
  return code ? getJson(`/criteria/${encodeURIComponent(code)}`) : getJson('/criteria');
}

/** GET /api/districts?admin=&hazard=&kind= → {count, districts:[...]} */
export function districts({ admin, hazard, kind } = {}) {
  return getJson('/districts', { admin, hazard, kind });
}

/** GET /api/rivers?admin= → {count, rivers:[...]} (warning_flow_rule 등 루트 보존) */
export function rivers({ admin } = {}) {
  return getJson('/rivers', { admin });
}

/** GET /api/geo?admin=&layer= → GeoJSON FeatureCollection (layer: L1 지구점·L2 하천선·L3 경계) */
export function geo({ admin, layer } = {}) {
  return getJson('/geo', { admin, layer });
}

// ── POST ─────────────────────────────────────────────────────────────

/**
 * POST /api/search — {event: Event(부분 허용), query, top_k}.
 * @returns {Promise<{results: Array<{passage:Object, score:number, similarity_factors:Object, source:Object}>, filter_relaxed: boolean}>}
 */
export function search({ event = {}, query, top_k = 5 }) {
  return postJson('/search', { event, query, top_k });
}

/**
 * POST /api/ask — 근거 기반 RAG 응답.
 * @returns {Promise<{rag_answer_id:string, answer:string, mode:string, no_evidence:boolean,
 *   top_k_results:Array, citations:Array, structured_refs:{districts:Array,rivers:Array,criteria:Array},
 *   geo_refs:Object}>}
 */
export function ask({ event = {}, query, top_k = 5 }) {
  return postJson('/ask', { event, query, top_k });
}

// ── chat (SSE / mock 분기 — 단일 구현, 재구현 금지) ──────────────────

/** SSE data 페이로드(JSON)에서 텍스트 델타 추출 — 필드명 편차 흡수 */
function extractDelta(obj) {
  if (typeof obj === 'string') return obj;
  if (!obj || typeof obj !== 'object') return '';
  const cand =
    obj.delta ??
    obj.content ??
    obj.text ??
    obj.token ??
    obj.answer ??
    obj.message?.content ??
    obj.choices?.[0]?.delta?.content;
  if (typeof cand === 'string') return cand;
  return '';
}

/**
 * POST /api/chat — UNI RAG SSE 중계 또는 mock JSON 폴백 (백엔드 routers/chat.py 계약).
 *
 * @param {Object} opts
 * @param {string} opts.query                    - 사용자 질의(필수)
 * @param {Array<{role:string, content:string}>} [opts.history] - 대화 이력
 * @param {Object|null} [opts.event]             - 상황(사건) 컨텍스트
 * @param {(delta: string, fullText: string) => void} [opts.onDelta] - SSE 텍스트 조각 콜백
 * @param {(result: {mode: string, text: string}) => void} [opts.onDone] - 종료 콜백(SSE·mock 공통)
 * @param {(data: {mode:"mock", notice:string, answer:string, excerpts:Array}) => void} [opts.onMock] - mock 응답 콜백
 * @param {AbortSignal} [opts.signal]
 * @returns {Promise<{mode: string, text: string, data?: Object}>}
 */
export async function chat({
  query,
  history = [],
  event = null,
  onDelta,
  onDone,
  onMock,
  signal,
} = {}) {
  const res = await fetch(`${BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, history, event }),
    signal,
  });
  await raiseForStatus(res, '/chat');

  const chatMode = res.headers.get('X-Chat-Mode') || '';
  const contentType = res.headers.get('Content-Type') || '';
  const isStream = contentType.includes('text/event-stream');

  // mock 분기 — X-Chat-Mode: mock 또는 event-stream 아님 → JSON 본문
  if (chatMode === 'mock' || !isStream) {
    const data = await res.json();
    const text = typeof data?.answer === 'string' ? data.answer : '';
    onMock?.(data);
    onDone?.({ mode: 'mock', text });
    return { mode: 'mock', text, data };
  }

  // SSE 분기 — data: 라인 누적(이벤트 단위: 빈 줄 구분, 멀티 data: 라인은 \n 결합)
  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let fullText = '';
  let dataLines = [];
  let finished = false;

  const flushEvent = () => {
    if (dataLines.length === 0) return;
    const payload = dataLines.join('\n');
    dataLines = [];
    if (payload === '[DONE]') {
      finished = true;
      return;
    }
    let delta = payload;
    try {
      const obj = JSON.parse(payload);
      if (obj && typeof obj === 'object' && obj.done === true) {
        finished = true;
      }
      delta = extractDelta(obj);
    } catch {
      // JSON 아님 — 원문 문자열을 델타로 사용
    }
    if (delta) {
      fullText += delta;
      onDelta?.(delta, fullText);
    }
  };

  const consumeLine = (rawLine) => {
    const line = rawLine.endsWith('\r') ? rawLine.slice(0, -1) : rawLine;
    if (line === '') {
      flushEvent(); // 빈 줄 = 이벤트 경계
      return;
    }
    if (line.startsWith('data:')) {
      dataLines.push(line.slice(5).replace(/^ /, ''));
    }
    // event:·id:·retry:·주석(:)은 무시
  };

  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let nl;
    while ((nl = buffer.indexOf('\n')) >= 0) {
      consumeLine(buffer.slice(0, nl));
      buffer = buffer.slice(nl + 1);
    }
    if (finished) break;
  }
  buffer += decoder.decode(); // 잔여 바이트 플러시
  if (buffer) consumeLine(buffer);
  flushEvent();
  try {
    reader.releaseLock();
  } catch {
    // 이미 해제된 경우 무시
  }

  const mode = chatMode || 'uni_rag';
  onDone?.({ mode, text: fullText });
  return { mode, text: fullText };
}
