/**
 * CriteriaPanel — 판단기준 탭(criteria.json 5종).
 *
 * event.hazard_code(미설정 시 기본 T10107 호우)로 criteria(code)를 로드해
 * 판단주체 Badge + Q1 정량 기준 표(단계·지표·조건·값·단위) + Q2 등급 스테퍼
 * (DotBadge — 현재 event.alert_level 하이라이트) + 근거 출처 ListItem을 표출한다.
 * 상황입력의 재난 유형 변경에 useEffect로 반응한다.
 */
import { useEffect, useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import { criteria as fetchCriteria } from '../../api/client.js';
import { alertColor, ALERT_COLORS } from '../../api/models.js';
import Badge from '../../ds/components/display/Badge.jsx';
import DotBadge from '../../ds/components/actions/DotBadge.jsx';
import ListItem from '../../ds/components/display/ListItem.jsx';
import {
  SurfaceCard,
  SectionTitle,
  FieldRow,
  KTable,
  MiniBadge,
  EmptyBox,
  LoadingText,
  fmtNum,
} from './shared.jsx';

const DEFAULT_CODE = 'T10107'; // 기본: 호우

/** 위험 4단 색 토큰(green→yellow→orange→red) — 발령 단계 미매핑 등급의 폴백 */
const STEP_SCALE = [
  'var(--color-green-500)',
  'var(--color-yellow-400)',
  'var(--color-orange-500)',
  'var(--color-red-500)',
];

/** 등급명("관심(Blue)" 등) → 기본명("관심") */
function baseGrade(grade) {
  return String(grade || '').replace(/\(.*\)$/, '').trim();
}

/** 등급 도트 색 — 발령 단계 색 매핑 우선, 아니면 순서 기반 4단 스케일 */
function stepDotColor(grade, order, total) {
  const base = baseGrade(grade);
  if (ALERT_COLORS[base]) return alertColor(base).token;
  const t = Math.max(total, 1);
  const idx = Math.min(
    STEP_SCALE.length - 1,
    Math.max(0, Math.round(((order - 1) / Math.max(t - 1, 1)) * (STEP_SCALE.length - 1))),
  );
  return STEP_SCALE[idx];
}

export default function CriteriaPanel() {
  const { state, actions } = useAppState();
  const code =
    state.event?.hazard_code || state.event?.hazard_event_code || DEFAULT_CODE;
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | done | error

  // 상황입력의 재난 유형 변경 시 재조회
  useEffect(() => {
    let alive = true;
    setStatus('loading');
    fetchCriteria(code)
      .then((d) => {
        if (!alive) return;
        setData(d);
        setStatus('done');
      })
      .catch((e) => {
        if (!alive) return;
        setStatus('error');
        actions.showToast('error', `판단기준 조회 실패: ${e.detail || e.message || ''}`);
      });
    return () => {
      alive = false;
    };
  }, [code, actions]);

  if (status === 'loading') return <LoadingText label="판단기준 조회 중" />;
  if (status === 'error' || !data) {
    return <EmptyBox title="판단기준 조회 실패" desc="백엔드 연결 확인" />;
  }

  const currentLevel = state.event?.alert_level || null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SurfaceCard>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 6,
          }}
        >
          <span
            className="typo-heading-sm"
            style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}
          >
            {data.name_ko} 판단기준
          </span>
          <Badge
            label={data.judgment_subject || '판단주체 미상'}
            leftIcon={false}
            mode="light"
            size="md"
            variant="solid"
            color="primary"
            shape="round-square"
          />
          <MiniBadge tone="gray" label={data.hazard_code} />
        </div>
        <p className="typo-body-sm" style={{ margin: 0, color: 'var(--color-text-primary)' }}>
          {data.judgment_concept}
        </p>
        {(data.related_variables || []).length > 0 && (
          <FieldRow label="관련 변수">
            {(data.related_variables || []).join(' · ')}
          </FieldRow>
        )}
        {data.no_single_criterion && (
          <p
            className="typo-body-sm"
            style={{ margin: '6px 0 0', color: 'var(--color-text-secondary-2)' }}
          >
            단일 정량 기준 없음 —{' '}
            {Array.isArray(data.composite_of)
              ? `${data.composite_of.join(' · ')} 복합 판단`
              : '복합 판단'}
          </p>
        )}
      </SurfaceCard>

      <SectionTitle>Q1 정량 기준</SectionTitle>
      <KTable
        columns={[
          { key: 'level', label: '단계' },
          { key: 'indicator', label: '지표' },
          { key: 'operator', label: '조건', align: 'center' },
          { key: 'value', label: '값', align: 'right' },
          { key: 'unit', label: '단위' },
        ]}
        rows={(data.q1_conditions || []).map((q, i) => ({
          key: `${q.level}-${i}`,
          level: (
            <span title={q.note || undefined} style={{ whiteSpace: 'nowrap' }}>
              {q.level}
              {q.condition_group ? (
                <span style={{ display: 'block' }}>
                  <MiniBadge tone="gray" label={q.condition_group} />
                </span>
              ) : null}
            </span>
          ),
          indicator: `${q.indicator}${q.period ? `(${q.period})` : ''}`,
          operator: q.operator || '—',
          value: fmtNum(q.value),
          unit: q.unit || '—',
        }))}
        emptyText="정량 기준 기재 없음"
      />

      <SectionTitle>Q2 등급 체계</SectionTitle>
      {(data.q2_grades || []).map((sys) => (
        <SurfaceCard key={sys.system}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              flexWrap: 'wrap',
              marginBottom: 8,
            }}
          >
            <span
              className="typo-body-sm"
              style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}
            >
              {sys.system}
            </span>
            <span className="typo-body-sm" style={{ color: 'var(--color-text-secondary-2)' }}>
              {sys.operator_org}
            </span>
            {(sys.source_refs || []).map((ref) => (
              <MiniBadge key={ref} tone="gray" label={ref} />
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {(sys.grades || []).map((g) => {
              const isCurrent =
                Boolean(currentLevel) && baseGrade(g.grade) === currentLevel;
              return (
                <span
                  key={`${g.order}-${g.grade}`}
                  title={[g.criteria, g.meaning].filter(Boolean).join(' — ')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 10px',
                    borderRadius: 1000,
                    border: `1px solid ${
                      isCurrent ? 'var(--color-border-brand)' : 'var(--color-border-default)'
                    }`,
                    background: isCurrent
                      ? 'var(--color-surface-brand-subtle)'
                      : 'transparent',
                  }}
                >
                  <DotBadge
                    size="xl"
                    style={{
                      backgroundColor: stepDotColor(g.grade, g.order, (sys.grades || []).length),
                    }}
                  />
                  <span
                    className="typo-body-sm"
                    style={{
                      color: 'var(--color-text-primary)',
                      fontWeight: isCurrent ? 700 : 400,
                    }}
                  >
                    {g.grade}
                  </span>
                </span>
              );
            })}
          </div>
        </SurfaceCard>
      ))}
      {currentLevel && (
        <p className="typo-body-sm" style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}>
          현재 입력 단계 · {currentLevel}
          {state.event?.alert_kind ? ` (${state.event.alert_kind})` : ''}
        </p>
      )}

      {data.legal_basis && <FieldRow label="법적 근거">{data.legal_basis}</FieldRow>}

      <SectionTitle>근거 출처</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {(data.sources || []).map((s) => (
          <a
            key={s.ref}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <ListItem
              label={`${s.ref} · ${s.title}`}
              helperText
              helperText2={`${s.publisher || '—'} · ${s.url || ''}`}
              showCheckbox={false}
              leftIcon={false}
              rightIcon={false}
              selected={false}
              size="sm"
              state="default"
              style={{ width: '100%', height: 'auto', minHeight: 40, paddingLeft: 8, paddingRight: 8 }}
            />
          </a>
        ))}
        {(data.sources || []).length === 0 && (
          <p className="typo-body-sm" style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}>
            출처 기재 없음
          </p>
        )}
      </div>
    </div>
  );
}
