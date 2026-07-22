/**
 * FactorBars — ⑤정합성 유사도 요인 기여도 수평 바 4종(유형·시간·공간·피해).
 * similarity_factors(0~1, 백엔드 services/retrieval.py) 상위 결과 기준 표출.
 * 색상만으로 의미 전달 금지 — 라벨·백분율 텍스트 병기(docs/03_화면설계.md §3).
 */

const FACTORS = [
  { key: 'type', label: '유형', color: 'var(--color-light-blue-500)' },
  { key: 'time', label: '시간', color: 'var(--color-green-500)' },
  { key: 'space', label: '공간', color: 'var(--color-orange-500)' },
  { key: 'damage', label: '피해', color: 'var(--color-red-500)' },
];

export default function FactorBars({ factors = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {FACTORS.map((f) => {
        const raw = Number(factors[f.key] ?? 0);
        const v = Number.isFinite(raw) ? Math.max(0, Math.min(1, raw)) : 0;
        const pct = Math.round(v * 100);
        return (
          <div key={f.key} className="ask-factor-row">
            <span className="ask-factor-label typo-body-sm">{f.label}</span>
            <div
              className="ask-factor-track"
              role="img"
              aria-label={`${f.label} 유사도 기여 ${pct}%`}
            >
              <div
                className="ask-factor-fill"
                style={{ width: `${pct}%`, background: f.color }}
              />
            </div>
            <span className="ask-factor-value typo-body-sm">{pct}%</span>
          </div>
        );
      })}
    </div>
  );
}
