/**
 * CitationModal — Citation 클릭 시 인용 전문+출처 표시.
 *
 * DetailModal(비모달 플로팅 창 — 드래그 이동·X 닫기)을 사용해 창을 띄운 채
 * 지도 하이라이트를 볼 수 있다. 인용 청크에 원문 표(citation.tables —
 * pdfplumber 구조화)가 있으면 실제 표로 렌더한다(본문 텍스트의 세로 나열 보완).
 */
import { DetailModal, FieldRow, KTable, SectionTitle } from '../right/shared.jsx';
import { citeLoc } from './askUtils.js';

/** 원문 표 rows[][] → KTable 계약({key,label} 컬럼 + key 접근 행) 변환 */
function toKTable(rows) {
  const columns = rows[0].map((label, i) => ({ key: `c${i}`, label: label || ' ' }));
  const body = rows.slice(1).map((r) =>
    Object.fromEntries(columns.map((c, i) => [c.key, r[i] || '—'])),
  );
  return { columns, body };
}

export default function CitationModal({ citation, onClose }) {
  if (!citation) return null;

  const tables = (citation.tables || []).filter(
    (t) => Array.isArray(t?.rows) && t.rows.length >= 2,
  );

  return (
    <DetailModal title={citation.doc_title || '근거 인용 전문'} onClose={onClose}>
      <p className="ask-answer-text typo-body-md">{citation.quote || '(인용문 없음)'}</p>

      {tables.length > 0 && (
        <>
          <SectionTitle>원문 표</SectionTitle>
          {tables.map((t, ti) => {
            const { columns, body } = toKTable(t.rows);
            return (
              <div key={ti} style={{ marginBottom: 10 }}>
                {t.caption && (
                  <p
                    className="typo-body-sm"
                    style={{ margin: '0 0 4px', color: 'var(--color-text-secondary-2)' }}
                  >
                    {t.caption}
                  </p>
                )}
                <KTable columns={columns} rows={body} />
              </div>
            );
          })}
        </>
      )}

      <div style={{ marginTop: 12 }}>
        <FieldRow label="출처">{citeLoc(citation)}</FieldRow>
        <FieldRow label="식별자">{citation.passage_id || '—'}</FieldRow>
      </div>
      <p
        className="typo-body-sm"
        style={{ margin: '10px 0 0', color: 'var(--color-text-secondary-2)' }}
      >
        본 인용은 계획 문서 원문 발췌입니다.
      </p>
    </DetailModal>
  );
}
