/**
 * TopKPanel — 모듈③ 유사사례 Top-K 목록.
 *
 * askResponse.top_k_results([{passage, score, similarity_factors, source}])를
 * 카드 목록으로 표출한다. 카드 클릭 시 selectPassage(지도 하이라이트 동기) +
 * 전문 Modal. 유사도 %는 최고 점수 대비 정규화(BM25 결합 점수는 절대 스케일이
 * 아니므로 상대 비율로 표기).
 */
import { useMemo, useState } from 'react';
import { useAppState, selectTopKResults } from '../../state/AppState.jsx';
import Badge from '../../ds/components/display/Badge.jsx';
import {
  SurfaceCard,
  DetailModal,
  FieldRow,
  EmptyBox,
  hazardBadgeItems,
} from './shared.jsx';

/** score → 최고 점수 대비 % (최소 1%) */
function scorePct(score, maxScore) {
  if (!maxScore || maxScore <= 0) return 0;
  return Math.max(1, Math.round((score / maxScore) * 100));
}

/** 출처 문자열 — 「문서명 · 장 · 쪽」 */
function sourceLabel(result) {
  const p = result.passage || {};
  const s = result.source || {};
  return [s.doc_title || p.doc_title, p.chapter, s.page].filter(Boolean).join(' · ');
}

export default function TopKPanel() {
  const { state, actions } = useAppState();
  const results = selectTopKResults(state);
  const [openId, setOpenId] = useState(null);

  const maxScore = useMemo(
    () => results.reduce((m, r) => Math.max(m, r?.score || 0), 0),
    [results],
  );

  if (!state.askResponse || results.length === 0) {
    return <EmptyBox title="유사사례 없음" desc="상황 적용 후 질의 실행" />;
  }

  const openResult = results.find((r) => r?.passage?.passage_id === openId);

  const handleSelect = (passageId) => {
    // selectPassage가 mapHighlight({type:"passage"})까지 동기화한다(AppState reducer)
    actions.selectPassage(passageId);
    setOpenId(passageId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p
        className="typo-body-sm"
        style={{ margin: '4px 0 0', color: 'var(--color-text-secondary-2)' }}
      >
        유사사례 Top-{results.length} · 카드 선택 시 지도 연동
      </p>
      {results.map((r, idx) => {
        const p = r.passage || {};
        const pct = scorePct(r.score, maxScore);
        const selected = state.selectedPassageId === p.passage_id;
        return (
          <SurfaceCard
            key={p.passage_id || idx}
            selected={selected}
            onClick={() => handleSelect(p.passage_id)}
          >
            <div
              className="typo-body-sm"
              style={{
                color: 'var(--color-text-secondary-2)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {p.doc_title}
            </div>
            <div
              className="typo-heading-sm"
              style={{ fontWeight: 700, color: 'var(--color-text-primary)', margin: '2px 0 6px' }}
            >
              {p.chapter || p.section || '본문'}
              {p.section && p.chapter ? (
                <span
                  className="typo-body-sm"
                  style={{ fontWeight: 400, color: 'var(--color-text-secondary-2)' }}
                >
                  {' '}
                  · {p.section}
                </span>
              ) : null}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 6 }}>
              {hazardBadgeItems(p).map((h) => (
                <Badge
                  key={h.name}
                  label={h.name}
                  leftIcon={false}
                  mode="light"
                  size="md"
                  variant="solid"
                  color={h.color}
                  shape="round-square"
                />
              ))}
              <Badge
                label={`유사도 ${pct}%`}
                leftIcon={false}
                mode="light"
                size="md"
                variant="solid"
                color="primary"
                shape="round-square"
              />
            </div>
            <p
              className="typo-body-sm"
              style={{
                margin: 0,
                color: 'var(--color-text-primary)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {p.content}
            </p>
            <div
              className="typo-body-sm"
              style={{ marginTop: 6, color: 'var(--color-text-secondary-2)' }}
            >
              출처 · {sourceLabel(r)}
            </div>
          </SurfaceCard>
        );
      })}

      {openResult && (
        <DetailModal
          title={openResult.passage?.chapter || openResult.passage?.doc_title || '유사사례 상세'}
          badge={
            <Badge
              label={`유사도 ${scorePct(openResult.score, maxScore)}%`}
              leftIcon={false}
              mode="light"
              size="md"
              variant="solid"
              color="primary"
              shape="round-square"
            />
          }
          onClose={() => setOpenId(null)}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
            {hazardBadgeItems(openResult.passage).map((h) => (
              <Badge
                key={h.name}
                label={h.name}
                leftIcon={false}
                mode="light"
                size="md"
                variant="solid"
                color={h.color}
                shape="round-square"
              />
            ))}
          </div>
          <FieldRow label="문서">{openResult.passage?.doc_title || '—'}</FieldRow>
          <FieldRow label="장·절">
            {[openResult.passage?.chapter, openResult.passage?.section]
              .filter(Boolean)
              .join(' · ') || '—'}
          </FieldRow>
          <FieldRow label="출처 쪽">{openResult.source?.page || '—'}</FieldRow>
          <FieldRow label="식별자">{openResult.passage?.passage_id || '—'}</FieldRow>
          <div
            className="typo-body-md"
            style={{
              marginTop: 12,
              padding: 12,
              background: 'var(--color-surface-muted)',
              borderRadius: 8,
              color: 'var(--color-text-primary)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {openResult.passage?.content || '본문 없음'}
          </div>
          <p
            className="typo-body-sm"
            style={{ margin: '10px 0 0', color: 'var(--color-text-secondary-2)' }}
          >
            본 발췌는 계획 문서 기반 참고 정보입니다.
          </p>
        </DetailModal>
      )}
    </div>
  );
}
