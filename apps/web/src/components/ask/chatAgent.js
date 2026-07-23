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

/** 자연어 지도 명령 해석 — 매칭 실패 시 null(일반 챗봇 질의로 처리) */
export function parseMapCommand(query, entities = []) {
  const q = String(query || '').trim();
  if (!q || !COMMAND_VERB.test(q)) return null;
  // POI(지구·하천)가 지자체명보다 구체적이므로 먼저 매칭
  for (const e of entities) {
    if (e.name.length >= 2 && q.includes(e.name)) return { kind: 'poi', entity: e };
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

/** 맥락 후속 질문 제안 — POI 선택 시 맞춤, 응답 후 일반 */
export function suggestionsFor(entity, hasResponse) {
  if (entity?.type === 'district') {
    return [
      '이 지구가 왜 위험지구로 선정되었는지 알려줘',
      '이 지구의 저감대책을 알려줘',
      '이 지구의 과거 피해 이력을 알려줘',
    ];
  }
  if (entity?.type === 'river') {
    return [
      '이 하천의 계획홍수량을 알려줘',
      '이 하천의 특보 기준유량을 알려줘',
    ];
  }
  if (hasResponse) {
    return ['방금 답변의 근거 문서를 요약해줘', '인근의 유사한 위험지구를 알려줘'];
  }
  return [];
}
