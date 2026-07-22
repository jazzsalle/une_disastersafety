/**
 * askUtils — 질의응답 패널 공용 헬퍼(출처 표기·말줄임).
 * 출처 표기 규칙: 「문서명 · 장 · p.시작-끝」 (CLAUDE.md 근거 표기 원칙).
 */

/**
 * Citation·발췌 객체 → 출처 문자열 「문서명 · 장 · p.시작-끝」.
 * @param {{doc_title?:string, chapter?:string, page_start?:number, page_end?:number}} c
 * @returns {string}
 */
export function citeLoc(c = {}) {
  const parts = [];
  if (c.doc_title) parts.push(c.doc_title);
  if (c.chapter) parts.push(c.chapter);
  if (c.page_start !== null && c.page_start !== undefined) {
    const range =
      c.page_end !== null && c.page_end !== undefined && c.page_end !== c.page_start
        ? `p.${c.page_start}-${c.page_end}`
        : `p.${c.page_start}`;
    parts.push(range);
  }
  return parts.join(' · ') || '출처 정보 없음';
}

/**
 * 문자열 말줄임(1줄 표시용).
 * @param {string} s
 * @param {number} n 최대 길이
 * @returns {string}
 */
export function truncate(s, n = 60) {
  const t = String(s ?? '');
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
