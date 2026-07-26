/**
 * chatAgent — 챗봇 AI Agent 인터랙션 헬퍼 (ChatTab 전용).
 *
 * - buildEntities(districts, rivers) : 지구·하천 → 엔티티 목록(지명 링크·명령 파서 공용)
 * - parseMapCommand(query, entities) : 자연어 지도 명령 해석(규칙 기반, LLM 미호출)
 *     "남원으로 이동" → {kind:'region', region}
 *     "안양천지구 보여줘" → {kind:'poi', entity}
 *     오인식 방지: 명령 동사 + 대상명이 함께 있어야 발동, 그 외 null(일반 질의)
 * - splitByEntities(text, entities)  : 응답 텍스트를 지명 기준 분할 → 링크 렌더용
 * - suggestionsFor(entity|null, hasResponse) : 맥락 후속 질문 목록
 */
import { REGIONS } from '../../api/models.js';

/** districts()·rivers() 응답 → 엔티티 목록 [{type, id, name, kind, admin}] */
export function buildEntities(districtList = [], riverList = []) {
  const entities = [];
  for (const d of districtList) {
    if (!d?.district_code || !d?.district_name) continue;
    entities.push({
      type: 'district',
      id: d.district_code,
      name: d.district_name,
      kind: d.disaster_type || '',
      admin: d.admin_code || '',
    });
  }
  for (const r of riverList) {
    if (!r?.river_id || !r?.name) continue;
    entities.push({
      type: 'river',
      id: r.river_id,
      name: r.name,
      kind: r.grade || '하천',
      admin: r.admin_code || '',
    });
  }
  // 긴 이름 우선 매칭(부분 문자열 충돌 방지 — 예: "안양천" vs "안양천지구")
  return entities.sort((a, b) => b.name.length - a.name.length);
}

const COMMAND_VERB = /(이동|전환|보여\s*줘|띄워|찾아\s*줘?|위치\s*알려)/;

/** 재해유형 단위 명령 사전 — "저지대/산사태 위험지구 보여줘"(임장 질문 ③④ 대응) */
const KIND_SYNONYMS = [
  { kind: '사면재해', words: ['산사태', '사면재해', '사면', '급경사지'] },
  { kind: '내수재해', words: ['저지대', '내수재해', '내수'] },
  { kind: '하천재해', words: ['하천재해', '범람'] },
  { kind: '토사재해', words: ['토사재해', '토석류', '토사'] },
];

/** 자연어 지도 명령 해석 — 매칭 실패 시 null(일반 챗봇 질의로 처리) */
export function parseMapCommand(query, entities = []) {
  const q = String(query || '').trim();
  if (!q || !COMMAND_VERB.test(q)) return null;
  // POI(지구·하천)가 가장 구체적이므로 먼저 매칭
  for (const e of entities) {
    if (e.name.length >= 2 && q.includes(e.name)) return { kind: 'poi', entity: e };
  }
  // 재해유형 단위 — "산사태 위험지구 보여줘" 류(개별 지구명 없이 유형만 언급)
  for (const { kind, words } of KIND_SYNONYMS) {
    if (words.some((w) => q.includes(w))) return { kind: 'kind_filter', disasterKind: kind };
  }
  for (const r of REGIONS) {
    if (q.includes(r.short_name) || q.includes(r.admin_name)) {
      return { kind: 'region', region: r };
    }
  }
  return null;
}

/**
 * 텍스트를 엔티티 지명 기준으로 분할 — [{text}, {text, entity}, ...] 순서 보존.
 * ChatTab이 entity 조각을 클릭 가능한 칩으로 렌더한다.
 */
export function splitByEntities(text, entities = []) {
  const parts = [{ text: String(text || '') }];
  for (const entity of entities) {
    if (!entity.name || entity.name.length < 2) continue;
    for (let i = 0; i < parts.length; i += 1) {
      const part = parts[i];
      if (part.entity) continue;
      const idx = part.text.indexOf(entity.name);
      if (idx < 0) continue;
      const replaced = [];
      if (idx > 0) replaced.push({ text: part.text.slice(0, idx) });
      replaced.push({ text: entity.name, entity });
      const rest = part.text.slice(idx + entity.name.length);
      if (rest) replaced.push({ text: rest });
      parts.splice(i, 1, ...replaced);
      i += replaced.length - 1;
    }
  }
  return parts;
}

// ── 마크다운 표 파서 (GFM 표 블록만 — 외부 라이브러리 없이) ──────────

const TABLE_ROW = /^\s*\|.*\|\s*$/;
const TABLE_SEPARATOR = /^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/;

/** 표 행 1줄 → 셀 배열 (이스케이프 \| 보존) */
function splitCells(row) {
  const cells = [];
  let cur = '';
  const inner = row.trim().replace(/^\|/, '').replace(/\|$/, '');
  for (let i = 0; i < inner.length; i += 1) {
    if (inner[i] === '\\' && inner[i + 1] === '|') {
      cur += '|';
      i += 1;
    } else if (inner[i] === '|') {
      cells.push(cur.trim());
      cur = '';
    } else {
      cur += inner[i];
    }
  }
  cells.push(cur.trim());
  return cells;
}

function cellAlign(sep) {
  const s = sep.trim();
  if (s.startsWith(':') && s.endsWith(':')) return 'center';
  if (s.endsWith(':')) return 'right';
  return 'left';
}

/**
 * 텍스트를 마크다운 표 기준으로 분할 —
 * [{type:'text', text} | {type:'table', header:[], align:[], rows:[][]}] 순서 보존.
 * 표 블록 = `|…|` 행 + 둘째 행이 구분행(|---|)인 연속 구간.
 */
export function splitMarkdownTables(text) {
  const lines = String(text || '').split('\n');
  const segments = [];
  let textBuf = [];
  const flushText = () => {
    const t = textBuf.join('\n');
    if (t.trim()) segments.push({ type: 'text', text: t });
    textBuf = [];
  };
  let i = 0;
  while (i < lines.length) {
    if (
      TABLE_ROW.test(lines[i]) &&
      i + 1 < lines.length &&
      TABLE_SEPARATOR.test(lines[i + 1])
    ) {
      const header = splitCells(lines[i]);
      const align = splitCells(lines[i + 1]).map(cellAlign);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && TABLE_ROW.test(lines[j]) && !TABLE_SEPARATOR.test(lines[j])) {
        const cells = splitCells(lines[j]);
        // 셀 수 불일치 — 헤더 기준 패딩/절삭(모델 출력 편차 방어)
        while (cells.length < header.length) cells.push('');
        rows.push(cells.slice(0, header.length));
        j += 1;
      }
      flushText();
      segments.push({ type: 'table', header, align, rows });
      i = j;
    } else {
      textBuf.push(lines[i]);
      i += 1;
    }
  }
  flushText();
  return segments.length ? segments : [{ type: 'text', text: String(text || '') }];
}

/** 시연 질문 세트 — docs/07 업무 흐름 순서, 전건 실응답 검증(2026-07-27).
 *  3번(1100 판단)만 UNI 실연동(지점별 기준유량 대비 판단 표 — 실검증 49초),
 *  나머지는 지도 명령·정형 데이터 즉답으로 즉시 */
export const DEMO_QUESTIONS = [
  '요천 보여줘',
  '특보 기준유량은?',
  '특보 유량이 1100인데 어떤 하천에 주의보를 내려야 하는가?',
  '어떤 수위계를 모니터링해야 해?',
  '저지대 위험지구 보여줘',
  '산사태 위험지구 보여줘',
];

/** 챗봇 하단 질문 칩 — 시연 질문 5종 고정(과다 방지, 사용자 결정 2026-07-27) */
export function suggestionsFor() {
  return DEMO_QUESTIONS;
}

// ── 정형 데이터 즉답(하이브리드) ─────────────────────────────────────
// 관리대장·하천기본계획 정형 JSON에 답이 그대로 있는 질문은 LLM(UNI)을 거치지
// 않고 즉시 조합해 답한다 — 대기 0초, 수치 오류 0(출처 병기). 매칭 실패 시
// null을 반환해 기존 UNI 실연동 경로로 넘어간다(종합 판단 질문 담당).

const RE_GAUGE = /(수위계|우량계|수위 ?관측|모니터링)/;
const RE_FLOW = /(계획홍수량|기준유량|특보.*유량)/;
const RE_MITIGATION = /저감\s*대책/;
const RE_WHY = /(왜.*(위험|선정)|선정.*(이유|사유)|위험\s*요인)/;
const RE_HISTORY = /(피해\s*이력|과거.*피해)/;

/** 하천 산정지점 → GFM 표(계획홍수량·홍수특보 기준유량) */
function stationTable(river) {
  const rows = (river.stations || []).slice(0, 12);
  if (!rows.length) return '';
  const lines = [
    '| 부호 | 산정지점 | 계획홍수량(㎥/s) | 주의보(50%) | 경보(70%) |',
    '| --- | --- | --- | --- | --- |',
  ];
  for (const s of rows) {
    const fw = s.flood_warning || {};
    lines.push(
      `| ${s.station_code || ''} | ${s.station_name || ''} | ` +
        `${fmt(s.design_flood_m3s)}(${s.design_frequency_yr || ''}년) | ` +
        `${fmt(fw.advisory_m3s)} | ${fmt(fw.alert_m3s)} |`,
    );
  }
  return lines.join('\n');
}

function fmt(n) {
  return n === null || n === undefined ? '—' : Number(n).toLocaleString('ko-KR');
}

function riverSource(river) {
  return `\n\n— 출처: ${river.plan_name || '하천기본계획'}`;
}

function districtSource(d) {
  const ev = d.evidence || {};
  const page = ev.page_label || (ev.pdf_page != null ? `p.${ev.pdf_page}` : '');
  return `\n\n— 출처: ${ev.doc_title || '관리대장'}${page ? ` · ${page}` : ''}`;
}

const NEED_DISTRICT = '어느 위험지구인지 먼저 알려주세요 — 지도에서 지구를 클릭하거나 "○○지구 보여줘"라고 말하면 됩니다.';
const NEED_RIVER = '어느 하천인지 먼저 알려주세요 — 지도에서 하천을 클릭하거나 "요천 보여줘"라고 말하면 됩니다.';

/**
 * 정형 질의 즉답 — 매칭 시 {text}(마크다운, 출처 병기), 아니면 null.
 * @param {string} query
 * @param {{type:string,id:string}|undefined} poi  선택 POI(entities 항목)
 * @param {Array} districtList  districts() 원본 레코드(전 지자체)
 * @param {Array} riverList     rivers() 원본 레코드(전 지자체)
 * @param {string} adminCode    현재 지자체(하천 질의의 POI 부재 시 폴백)
 */
export function answerFromData(query, poi, districtList = [], riverList = [], adminCode = '') {
  const q = String(query || '');
  // 판단·발령 질문("유량이 1100인데 어디에 주의보를 내려야?")은 정형 조회가 아니라
  // 종합 판단 — LLM(UNI) 경로로 보낸다(기준유량 표는 POI 컨텍스트로 주입됨)
  if (/(내려야|발령해야|발령할|판단해)/.test(q)) return null;
  const district =
    poi?.type === 'district'
      ? districtList.find((d) => d.district_code === poi.id)
      : undefined;
  const river =
    poi?.type === 'river'
      ? riverList.find((r) => r.river_id === poi.id)
      : riverList.find((r) => r.admin_code === adminCode); // POI 없으면 현 지자체 하천

  // 1·2. 수위계/기준지점·계획홍수량/기준유량 — 하천 정형
  if (RE_GAUGE.test(q) || RE_FLOW.test(q)) {
    if (!river) return { text: NEED_RIVER };
    const parts = [];
    const ref = river.warning_reference_station || {};
    if (RE_GAUGE.test(q) && ref.name) {
      parts.push(
        `${river.name}의 홍수특보 기준 수위관측 지점은 **${ref.name}(${ref.station_code || ''}` +
          `${ref.station_no ? `, ${ref.station_no}` : ''})** 입니다. ` +
          `이 지점의 유량이 홍수주의보 기준(계획홍수량의 50%)·홍수경보 기준(70%)에 ` +
          `접근하는지 감시합니다.`,
      );
    } else {
      parts.push(`${river.name}(${river.grade || '하천'})의 산정지점별 계획홍수량과 홍수특보 기준유량입니다.`);
    }
    const table = stationTable(river);
    if (table) parts.push(table);
    return { text: parts.join('\n\n') + riverSource(river) };
  }

  // 3. 저감대책 — 지구 정형
  if (RE_MITIGATION.test(q)) {
    if (!district) return { text: NEED_DISTRICT };
    const items = (district.mitigation || []).map((m) => `- ${m}`).join('\n');
    const extra = [];
    if (district.implementation_method) extra.push(`시행방법 ${district.implementation_method}`);
    if (district.cost_million_krw != null) extra.push(`사업비 ${fmt(district.cost_million_krw)}백만원`);
    if (district.priority) extra.push(`우선순위 ${district.priority}`);
    return {
      text:
        `**${district.district_name}**(${district.disaster_type || ''})의 저감대책입니다.\n\n` +
        (items || '- 관리대장에 저감대책 미기재') +
        (extra.length ? `\n\n${extra.join(' · ')}` : '') +
        districtSource(district),
    };
  }

  // 4. 선정 이유·위험요인 — 지구 정형
  if (RE_WHY.test(q)) {
    if (!district) return { text: NEED_DISTRICT };
    const factors = (district.risk_factors || []).map((f) => `- ${f}`).join('\n');
    const gradeLine = district.grade ? `\n\n위험등급: ${district.grade}` : '';
    return {
      text:
        `**${district.district_name}**은(는) **${district.disaster_type || '재해'} 위험지구**로 관리되고 있으며, ` +
        `관리대장에 기재된 위험요인은 다음과 같습니다.\n\n` +
        (factors || '- 위험요인 상세 미기재') +
        gradeLine +
        districtSource(district),
    };
  }

  // 5. 피해 이력 — 지구 정형(damage_events 시드)
  if (RE_HISTORY.test(q)) {
    if (!district) return { text: NEED_DISTRICT };
    const events = district.damage_events || [];
    if (!events.length && !district.damage_history) {
      return {
        text:
          `**${district.district_name}**은(는) 관리대장·저감계획에 구조화된 피해이력이 기재되어 있지 않습니다.` +
          districtSource(district),
      };
    }
    const lines = events.map((de) => {
      const ev = de.evidence || {};
      const src = ev.doc_title ? ` (출처: ${ev.doc_title}${ev.page != null ? ` p.${ev.page}` : ''})` : '';
      return `- **${de.occurred || ''} ${de.event_name || ''}** — ${de.description || ''}${src}`;
    });
    if (district.damage_history) lines.push(`- 관리대장 피해이력: ${district.damage_history}`);
    return {
      text: `**${district.district_name}**의 피해 이력입니다.\n\n${lines.join('\n')}`,
    };
  }

  return null;
}
