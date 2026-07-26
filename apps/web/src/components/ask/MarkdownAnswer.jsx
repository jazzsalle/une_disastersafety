/**
 * MarkdownAnswer — 답변 텍스트를 GFM 마크다운 표와 함께 렌더(근거응답 탭 전용).
 *
 * ChatTab의 표 렌더와 동일한 파서(splitMarkdownTables)·스타일(ask-md-table)을
 * 재사용한다. PDF 표가 본문 텍스트로는 세로 나열로 뭉개지므로, 백엔드가 답변에
 * 조립한 마크다운 표를 실제 표로 표출한다(지명 링크는 챗봇 전용 — 여기선 미적용).
 */
import { splitMarkdownTables } from './chatAgent.js';

export default function MarkdownAnswer({ text }) {
  const segments = splitMarkdownTables(text);
  return (
    <>
      {segments.map((seg, si) =>
        seg.type === 'table' ? (
          <div key={si} className="ask-md-tablewrap">
            <table className="ask-md-table typo-body-sm">
              <thead>
                <tr>
                  {seg.header.map((h, hi) => (
                    <th key={hi} style={{ textAlign: seg.align[hi] }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seg.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ textAlign: seg.align[ci] }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p key={si} className="ask-answer-text typo-body-md">
            {seg.text}
          </p>
        ),
      )}
    </>
  );
}
