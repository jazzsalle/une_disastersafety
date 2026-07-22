/**
 * RightTabs — 우측 탭 패널(모듈③ 유사사례 Top-K · 모듈④ 상세조회 · 판단기준).
 *
 * - 탭 전환 : state.rightTab("topk"|"detail"|"criteria") ↔ actions.setRightTab
 *             (DS TabFill 3분할 — 라이트/다크 테마 연동, 생성형 TabFill에
 *              onClick이 없어 버튼 래퍼 사용)
 * - topk    : TopKPanel — askResponse.top_k_results 카드 + 전문 Modal +
 *             selectPassage(지도 하이라이트 동기)
 * - detail  : DetailPanel — 위험지구(DistrictsSection) + 하천(RiversSection),
 *             adminCode 변경 반응·selectDistrict/selectRiver 지도 연동
 * - criteria: CriteriaPanel — event.hazard_code 기준 판단기준 5종
 * - 레이아웃: 우측 400px 열 전체(1280px 미만 하단 스택 — 부모 flex가 관리)
 */
import { useAppState } from '../../state/AppState.jsx';
import TabFill from '../../ds/components/navigation/TabFill.jsx';
import TopKPanel from './TopKPanel.jsx';
import DetailPanel from './DetailPanel.jsx';
import CriteriaPanel from './CriteriaPanel.jsx';

const TABS = [
  { id: 'topk', label: '유사사례' },
  { id: 'detail', label: '상세조회' },
  { id: 'criteria', label: '판단기준' },
];

export default function RightTabs() {
  const { state, actions } = useAppState();
  const mode = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <section
      aria-label="유사사례·상세조회·판단기준"
      style={{
        background: 'var(--color-surface-primary)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', padding: 12, flexShrink: 0 }} role="tablist">
        {TABS.map((t, i) => {
          const pos = i === 0 ? 'first' : i === TABS.length - 1 ? 'last' : 'middle';
          const active = state.rightTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => actions.setRightTab(t.id)}
              style={{ all: 'unset', cursor: 'pointer', flex: 1, display: 'flex', minWidth: 0 }}
            >
              <TabFill
                prop={t.label}
                prop2={mode}
                prop3="md"
                prop4={active ? 'selected' : 'default'}
                prop5={pos}
                style={{ width: '100%', flex: 1 }}
              />
            </button>
          );
        })}
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '0 12px 12px' }}>
        {state.rightTab === 'topk' && <TopKPanel />}
        {state.rightTab === 'detail' && <DetailPanel />}
        {state.rightTab === 'criteria' && <CriteriaPanel />}
      </div>
    </section>
  );
}
