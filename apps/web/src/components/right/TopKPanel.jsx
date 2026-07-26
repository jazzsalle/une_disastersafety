/**
 * TopKPanel — 모듈③ 유사사례 탭.
 *
 * 두 섹션으로 구성한다(사업수행계획서 "매칭 사건 리스트" 원안 복원):
 * 1) 유사 재난 사례 — /api/cases/search 결과(caseList). 위험지구 관리대장 기반
 *    사례 단위 카드로, **타 지자체 사례 포함**(admin 하드 필터 없음). 상황 적용 시 갱신.
 *    카드 클릭 → 사례 상세 Modal(피해이력·근거), 「지도에서 보기」 → (타 지자체면
 *    전환 후) selectDistrict + 상세조회 탭.
 * 2) 근거 문서 발췌 — askResponse.top_k_results(문서 청크 BM25). 카드 클릭 시
 *    selectPassage(지도 하이라이트 동기) + 전문 Modal. 유사도 %는 최고 점수 대비
 *    정규화(BM25 결합 점수는 절대 스케일이 아니므로 상대 비율로 표기).
 */
import { useMemo, useState } from 'react';
import {
  useAppState,
  selectTopKResults,
  selectCases,
} from '../../state/AppState.jsx';
import Badge from '../../ds/components/display/Badge.jsx';
import { Button } from '../../ds/components/actions/Button.jsx';
import {
  SurfaceCard,
  DetailModal,
  FieldRow,
  EmptyBox,
  SectionTitle,
  MiniBadge,
  hazardBadgeItems,
  kindBadgeColor,
} from './shared.jsx';

/** score → 최고 점수 대비 % (최소 1%) — 근거 발췌(BM25 상대 스케일)용 */
function scorePct(score, maxScore) {
  if (!maxScore || maxScore <= 0) return 0;
  return Math.max(1, Math.round((score / maxScore) * 100));
}

/** 사례 score(0~1 절대 스케일) → % */
function caseScorePct(score) {
  return Math.max(1, Math.round((score || 0) * 100));
}

/** 출처 문자열 — 「문서명 · 장 · 쪽」 */
function sourceLabel(result) {
  const p = result.passage || {};
  const s = result.source || {};
  return [s.doc_title || p.doc_title, p.chapter, s.page].filter(Boolean).join(' · ');
}

/** 피해이력 1건 요약 — 「2020-08 집중호우」 */
function eventLabel(de) {
  return [de?.occurred, de?.event_name].filter(Boolean).join(' ');
}

export default function TopKPanel() {
  const { state, actions } = useAppState();
  const results = selectTopKResults(state);
  const cases = selectCases(state);
  const [openId, setOpenId] = useState(null);
  const [openCaseId, setOpenCaseId] = useState(null);

  const maxScore = useMemo(
    () => results.reduce((m, r) => Math.max(m, r?.score || 0), 0),
    [results],
  );

  if (cases.length === 0 && (!state.askResponse || results.length === 0)) {
    return <EmptyBox title="유사사례 없음" desc="상황 적용 후 표시" />;
  }

  const openResult = results.find((r) => r?.passage?.passage_id === openId);
  const openCase = cases.find((c) => c?.case_id === openCaseId);

  const handleSelect = (passageId) => {
    // selectPassage가 mapHighlight({type:"passage"})까지 동기화한다(AppState reducer)
    actions.selectPassage(passageId);
    setOpenId(passageId);
  };

  // 사례 → 지도·상세조회 — 타 지자체 사례는 지자체 전환 후 선택(ChatTab goToEntity 패턴)
  const goToCase = (c) => {
    if (!c) return;
    if (c.admin_code && c.admin_code !== state.adminCode) {
      actions.setAdminCode(c.admin_code);
    }
    actions.selectDistrict(c.district_code);
    actions.setRightTab('detail');
    setOpenCaseId(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* ── 1. 유사 재난 사례 (사례 단위 · 전 지자체) ── */}
      <SectionTitle>유사 재난 사례</SectionTitle>
      {cases.length === 0 ? (
        <p
          className="typo-body-sm"
          style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
        >
          사례 없음 — 상황 적용 시 전 지자체 위험지구에서 검색
        </p>
      ) : (
        <>
          <p
            className="typo-body-sm"
            style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
          >
            유사 유형 사례 Top-{cases.length} · 타 지자체 포함 · 카드 선택 시 상세
          </p>
          {cases.map((c) => {
            const firstEvent = (c.damage_events || [])[0];
            const otherAdmin = c.admin_code !== state.adminCode;
            return (
              <SurfaceCard key={c.case_id} onClick={() => setOpenCaseId(c.case_id)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    className="typo-heading-sm"
                    style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}
                  >
                    {c.district_name}
                  </span>
                  <MiniBadge
                    label={c.admin_name || c.admin_code}
                    tone={otherAdmin ? 'brand' : 'gray'}
                    title={otherAdmin ? '타 지자체 사례' : '현재 지자체'}
                  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, margin: '6px 0' }}>
                  <Badge
                    label={c.disaster_type || '기타'}
                    leftIcon={false}
                    mode="light"
                    size="md"
                    variant="solid"
                    color={kindBadgeColor(c.disaster_type)}
                    shape="round-square"
                  />
                  <Badge
                    label={`유사도 ${caseScorePct(c.score)}%`}
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
                  {firstEvent
                    ? `${eventLabel(firstEvent)} — ${firstEvent.description}`
                    : (c.risk_factors || []).join(' · ') || '피해이력 미기재'}
                </p>
                <div
                  className="typo-body-sm"
                  style={{ marginTop: 6, color: 'var(--color-text-secondary-2)' }}
                >
                  출처 ·{' '}
                  {firstEvent?.evidence
                    ? [firstEvent.evidence.doc_title, `p.${firstEvent.evidence.page}`]
                        .filter(Boolean)
                        .join(' · ')
                    : [c.evidence?.doc_title, c.evidence?.page_label].filter(Boolean).join(' · ')}
                </div>
              </SurfaceCard>
            );
          })}
        </>
      )}

      {/* ── 2. 근거 문서 발췌 (문서 청크 · 질의 기준) ── */}
      <SectionTitle>근거 문서 발췌</SectionTitle>
      {!state.askResponse || results.length === 0 ? (
        <p
          className="typo-body-sm"
          style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
        >
          발췌 없음 — 근거 응답 질의 실행 시 표시
        </p>
      ) : (
        <>
          <p
            className="typo-body-sm"
            style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
          >
            관련 근거 Top-{results.length} · 카드 선택 시 지도 연동
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
        </>
      )}

      {/* ── 사례 상세 Modal ── */}
      {openCase && (
        <DetailModal
          title={openCase.district_name}
          badge={
            <Badge
              label={`유사도 ${caseScorePct(openCase.score)}%`}
              leftIcon={false}
              mode="light"
              size="md"
              variant="solid"
              color="primary"
              shape="round-square"
            />
          }
          onClose={() => setOpenCaseId(null)}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
            <Badge
              label={openCase.disaster_type || '기타'}
              leftIcon={false}
              mode="light"
              size="md"
              variant="solid"
              color={kindBadgeColor(openCase.disaster_type)}
              shape="round-square"
            />
            <MiniBadge
              label={openCase.admin_name || openCase.admin_code}
              tone={openCase.admin_code !== state.adminCode ? 'brand' : 'gray'}
            />
          </div>
          <FieldRow label="위치">{openCase.location || '—'}</FieldRow>
          <FieldRow label="재해유형">{openCase.disaster_type || '—'}</FieldRow>
          <FieldRow label="위험등급">{openCase.grade || '—'}</FieldRow>

          <SectionTitle>피해이력(사례)</SectionTitle>
          {(openCase.damage_events || []).length === 0 ? (
            <p
              className="typo-body-sm"
              style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
            >
              {openCase.damage_history || '구조화 피해이력 미기재 — 위험요인 기반 유사 지구'}
            </p>
          ) : (
            openCase.damage_events.map((de, i) => (
              <div
                key={i}
                className="typo-body-sm"
                style={{
                  padding: 10,
                  background: 'var(--color-surface-muted)',
                  borderRadius: 8,
                  color: 'var(--color-text-primary)',
                  marginBottom: 6,
                }}
              >
                <strong>{eventLabel(de)}</strong>
                <p style={{ margin: '4px 0 0' }}>{de.description}</p>
                {de.evidence && (
                  <p
                    style={{ margin: '6px 0 0', color: 'var(--color-text-secondary-2)' }}
                  >
                    근거 · {de.evidence.doc_title}
                    {de.evidence.chapter ? ` · ${de.evidence.chapter}` : ''} · p.
                    {de.evidence.page}
                  </p>
                )}
              </div>
            ))
          )}

          {(openCase.risk_factors || []).length > 0 && (
            <>
              <SectionTitle>위험요인</SectionTitle>
              <ul className="typo-body-sm" style={{ margin: 0, paddingLeft: 18 }}>
                {openCase.risk_factors.map((rf, i) => (
                  <li key={i}>{rf}</li>
                ))}
              </ul>
            </>
          )}

          {(openCase.mitigation || []).length > 0 && (
            <>
              <SectionTitle>저감대책(대응 내역)</SectionTitle>
              <ul className="typo-body-sm" style={{ margin: 0, paddingLeft: 18 }}>
                {openCase.mitigation.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </>
          )}

          <div style={{ marginTop: 14 }}>
            <Button
              label="지도에서 보기"
              variant="fill"
              color="primary"
              size="md"
              leftIcon={false}
              rightIcon={false}
              onClick={() => goToCase(openCase)}
            />
          </div>
          <p
            className="typo-body-sm"
            style={{ margin: '10px 0 0', color: 'var(--color-text-secondary-2)' }}
          >
            본 사례는 관리대장·계획 문서 기반 참고 정보입니다.
          </p>
        </DetailModal>
      )}

      {/* ── 근거 발췌 전문 Modal ── */}
      {openResult && (
        <DetailModal
          title={openResult.passage?.chapter || openResult.passage?.doc_title || '근거 발췌 상세'}
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
