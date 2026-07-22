/**
 * AskAnswerTab — 근거 응답 탭(질의 입력 → /api/ask → 응답+⑤정합성).
 *
 * - 질의 입력(Enter 전송)·askLoading 중 Spinner·disabled, event 미설정 시 Toast
 * - 빈 상태: 예시 질의 ActionChip 3개(클릭 시 입력 채움)
 * - 응답: answer 본문 + 재난유형 Badge + mode Badge + rag_answer_id Tooltip
 * - ⑤정합성: Citation ListItem(클릭 → 전문 Modal) / 요인 기여도 바 / 검증정보 Switch
 * - structured_refs 요약 ActionChip → 우측 탭·지도 하이라이트 연동
 * - 하단 고지: "본 응답은 계획 문서 기반 참고 정보입니다."
 */
import { useState } from 'react';
import {
  useAppState,
  selectHazard,
  selectCitations,
  selectTopKResults,
  selectStructuredRefs,
} from '../../state/AppState.jsx';
import { ask } from '../../api/client.js';
import Button from '../../ds/components/actions/Button.jsx';
import Badge from '../../ds/components/display/Badge.jsx';
import ActionChip from '../../ds/components/display/ActionChip.jsx';
import ListItem from '../../ds/components/display/ListItem.jsx';
import Switch from '../../ds/components/inputs/Switch.jsx';
import Spinner from '../../ds/components/feedback/Spinner.jsx';
import Tooltip from '../../ds/components/feedback/Tooltip.jsx';
import FactorBars from './FactorBars.jsx';
import CitationModal from './CitationModal.jsx';
import { citeLoc, truncate } from './askUtils.js';

/** 빈 상태 예시 질의 3종 — 클릭 시 입력 채움 */
const EXAMPLE_QUERIES = [
  { label: '호우 침수 대응', query: '호우 특보 발령 시 침수 우려 지구의 대응 사례' },
  { label: '계획홍수량 초과', query: '계획홍수량 초과 우려 시 홍수특보 판단 기준' },
  { label: '산사태 위험', query: '산사태 위험지구의 위험요인과 저감대책' },
];

export default function AskAnswerTab() {
  const { state, actions } = useAppState();
  const [query, setQuery] = useState('');
  const [verifyOn, setVerifyOn] = useState(false); // 검증정보 기본 off
  const [modalCitation, setModalCitation] = useState(null);
  const [showId, setShowId] = useState(false);

  const res = state.askResponse;
  const hazard = selectHazard(state);
  const citations = selectCitations(state);
  const topK = selectTopKResults(state);
  const refs = selectStructuredRefs(state);

  const submit = async () => {
    if (state.askLoading) return;
    const q = query.trim();
    if (!q) {
      actions.showToast('info', '질의 입력 필요');
      return;
    }
    if (!state.event) {
      actions.showToast('info', '상황 적용 필요 — 좌측 상황입력 패널에서 상황 적용 후 질의 가능');
      return;
    }
    actions.askStart();
    try {
      const response = await ask({ event: state.event, query: q, top_k: 5 });
      actions.askSuccess(response);
    } catch (err) {
      actions.askError(err?.detail || err?.message || 'RAG 응답 실패');
    }
  };

  const onCitationClick = (c) => {
    if (c.passage_id) actions.selectPassage(c.passage_id); // 지도·우측 패널 하이라이트 동기
    setModalCitation(c);
  };

  const onDistrictsChip = () => {
    actions.setRightTab('detail');
    const first = refs.districts?.[0];
    if (first?.district_code) actions.selectDistrict(first.district_code);
  };

  const onRiversChip = () => {
    actions.setRightTab('detail');
    const first = refs.rivers?.[0];
    if (first?.river_id) actions.selectRiver(first.river_id);
  };

  const onCriteriaChip = () => {
    actions.setRightTab('criteria');
  };

  const refChips = [
    { key: 'districts', label: `위험지구 ${refs.districts?.length ?? 0}`, count: refs.districts?.length ?? 0, onClick: onDistrictsChip },
    { key: 'rivers', label: `하천 ${refs.rivers?.length ?? 0}`, count: refs.rivers?.length ?? 0, onClick: onRiversChip },
    { key: 'criteria', label: `판단기준 ${refs.criteria?.length ?? 0}`, count: refs.criteria?.length ?? 0, onClick: onCriteriaChip },
  ];

  return (
    <div className="ask-body">
      {/* 질의 입력 행 */}
      <div className="ask-inputrow">
        <input
          className="ask-input"
          type="text"
          value={query}
          placeholder="재난 상황 질의 입력 (예: 호우 시 침수 우려 지구 대응 사례)"
          disabled={state.askLoading}
          aria-label="질의 입력"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) submit();
          }}
        />
        <button
          type="button"
          className="ask-pressable"
          disabled={state.askLoading}
          aria-label="질의 전송"
          onClick={submit}
        >
          <Button
            label="전송"
            variant="fill"
            color="primary"
            size="md"
            leftIcon={false}
            rightIcon={false}
            state={state.askLoading ? 'disabled' : 'default'}
          />
        </button>
      </div>

      <div className="ask-scroll">
        {/* 로딩 */}
        {state.askLoading && (
          <div className="ask-loading">
            <Spinner size="sm" />
            <span className="typo-body-sm">근거 기반 응답 생성 중</span>
          </div>
        )}

        {/* 빈 상태 — 예시 질의 */}
        {!state.askLoading && !res && (
          <div className="ask-empty">
            <p className="typo-body-sm ask-section-title" style={{ margin: 0 }}>
              {state.event
                ? '예시 질의 선택 또는 직접 입력'
                : '좌측 상황입력 패널에서 상황 적용 후 질의 가능'}
            </p>
            <div className="ask-chiprow">
              {EXAMPLE_QUERIES.map((ex) => (
                <button
                  key={ex.label}
                  type="button"
                  className="ask-pressable"
                  onClick={() => setQuery(ex.query)}
                >
                  <ActionChip label={ex.label} variant="outline" color="primary" size="sm" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 응답 카드 */}
        {!state.askLoading && res && (
          <>
            <div className="ask-card">
              <div className="ask-card-head">
                {/* DS Badge 변형은 mode=light·size md/lg/xl만 존재 — sm·dark 지정 시
                    변형 미스매치로 기본(브랜드 solid) 폴백되므로 light·md 고정 사용
                    (색 토큰이 data-theme를 따르므로 다크 테마에서도 정상) */}
                <Badge
                  label={hazard?.name_ko ?? '재난유형 미지정'}
                  variant="solid-pastel"
                  color="primary"
                  size="md"
                  leftIcon={false}
                  mode="light"
                />
                <Badge
                  label={res.mode === 'mock' ? 'mock 응답' : 'Claude 응답'}
                  variant="outline"
                  color={res.mode === 'mock' ? 'warning' : 'secondary'}
                  size="md"
                  leftIcon={false}
                  mode="light"
                />
                <span className="ask-idwrap">
                  <button
                    type="button"
                    className="ask-pressable ask-idtrigger"
                    aria-label={`rag_answer_id ${res.rag_answer_id}`}
                    onMouseEnter={() => setShowId(true)}
                    onMouseLeave={() => setShowId(false)}
                    onFocus={() => setShowId(true)}
                    onBlur={() => setShowId(false)}
                  >
                    응답 ID
                  </button>
                  {showId && (
                    <div className="ask-tooltip-pop">
                      <Tooltip
                        icon={false}
                        title
                        title2="rag_answer_id"
                        button={false}
                        size="sm"
                        placement="bottom"
                        pointer="left"
                        text1={res.rag_answer_id}
                      />
                    </div>
                  )}
                </span>
              </div>

              {res.no_evidence && (
                <div className="ask-noevidence typo-body-sm">
                  근거 문서 없음 — 코퍼스 내 관련 근거 미확인으로 참고 응답 불가
                </div>
              )}

              <p className="ask-answer-text typo-body-md">{res.answer}</p>
            </div>

            {/* ⑤ 정합성 — Citation */}
            {citations.length > 0 && (
              <div className="ask-card">
                <h3 className="ask-section-title typo-heading-sm">근거 출처 (Citation)</h3>
                <div className="ask-citations">
                  {citations.map((c, i) => (
                    <button
                      key={`${c.passage_id}-${i}`}
                      type="button"
                      className="ask-pressable ask-pressable-block"
                      onClick={() => onCitationClick(c)}
                    >
                      <ListItem
                        label={truncate(citeLoc(c), 52)}
                        helperText
                        helperText2={truncate(c.quote || '(인용문 없음)', 56)}
                        showCheckbox={false}
                        leftIcon={false}
                        rightIcon={false}
                        selected={state.selectedPassageId === c.passage_id}
                        size="sm"
                        state="default"
                        style={{ width: '100%' }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ⑤ 정합성 — 요인 기여도(상위 결과 기준) + 검증정보 */}
            {topK.length > 0 && (
              <div className="ask-card">
                <h3 className="ask-section-title typo-heading-sm">
                  유사도 요인 기여도 (상위 결과 기준)
                </h3>
                <FactorBars factors={topK[0]?.similarity_factors} />
                <div className="ask-switchrow">
                  <span className="typo-body-sm ask-section-title">검증 정보</span>
                  <button
                    type="button"
                    className="ask-pressable"
                    role="switch"
                    aria-checked={verifyOn}
                    aria-label="검증 정보 표시"
                    onClick={() => setVerifyOn((v) => !v)}
                  >
                    <Switch size="sm" checked={verifyOn} state="default" />
                  </button>
                </div>
                {verifyOn && (
                  <div className="ask-verify-detail">
                    {topK.map((r, i) => {
                      const f = r.similarity_factors || {};
                      return (
                        <span key={r.passage?.passage_id || i}>
                          {i + 1}. {r.passage?.passage_id || '-'} · 점수{' '}
                          {Number(r.score ?? 0).toFixed(3)} · 유형 {Number(f.type ?? 0).toFixed(2)}{' '}
                          · 시간 {Number(f.time ?? 0).toFixed(2)} · 공간{' '}
                          {Number(f.space ?? 0).toFixed(2)} · 피해 {Number(f.damage ?? 0).toFixed(2)}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* 구조화 참조 요약 → 우측 탭 연동 */}
            <div className="ask-card">
              <h3 className="ask-section-title typo-heading-sm">연계 정형 데이터</h3>
              <div className="ask-chiprow">
                {refChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    className="ask-pressable"
                    disabled={chip.count === 0}
                    onClick={chip.onClick}
                  >
                    <ActionChip
                      label={chip.label}
                      variant="outline"
                      color="grayscale"
                      size="sm"
                      state={chip.count === 0 ? 'disabled' : 'default'}
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <p className="ask-notice typo-body-sm">본 응답은 계획 문서 기반 참고 정보입니다.</p>

      <CitationModal citation={modalCitation} onClose={() => setModalCitation(null)} />
    </div>
  );
}
