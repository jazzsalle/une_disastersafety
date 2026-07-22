/**
 * DistrictsSection — 모듈④ 상세조회 · 위험지구.
 *
 * districts({admin: adminCode})를 지자체 변경에 반응해 로드하고,
 * 요약 스탯(지구 수·총사업비) + 재해유형 FilterChip 필터 + 지구 카드 목록을
 * 표출한다. 카드 클릭 시 selectDistrict(지도 연동) + 상세 Modal
 * (위험요인·임계값 표·저감대책·사업비·우선순위·근거 페이지).
 */
import { useEffect, useMemo, useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import { districts as fetchDistricts } from '../../api/client.js';
import Badge from '../../ds/components/display/Badge.jsx';
import DotBadge from '../../ds/components/actions/DotBadge.jsx';
import {
  SurfaceCard,
  SectionTitle,
  StatBox,
  FieldRow,
  KTable,
  DetailModal,
  EmptyBox,
  LoadingText,
  ChipButton,
  gradeInfo,
  kindBadgeColor,
  costEok,
  fmtNum,
} from './shared.jsx';

/** 등급 도트 + 라벨(색상만으로 의미 전달 금지 — 텍스트 병기) */
function GradeDot({ grade }) {
  const g = gradeInfo(grade);
  return (
    <span
      title={g.full}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}
    >
      <DotBadge size="xl" style={{ backgroundColor: g.color }} />
      <span className="typo-body-sm" style={{ color: 'var(--color-text-primary)' }}>
        {g.label}
      </span>
    </span>
  );
}

export default function DistrictsSection() {
  const { state, actions } = useAppState();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | done | error
  const [kindFilter, setKindFilter] = useState('전체');
  const [openCode, setOpenCode] = useState(null);

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    setKindFilter('전체');
    setOpenCode(null);
    fetchDistricts({ admin: state.adminCode })
      .then((d) => {
        if (!alive) return;
        setData(d);
        setStatus('done');
      })
      .catch((e) => {
        if (!alive) return;
        setStatus('error');
        actions.showToast('error', `위험지구 조회 실패: ${e.detail || e.message || ''}`);
      });
    return () => {
      alive = false;
    };
  }, [state.adminCode, actions]);

  const list = useMemo(() => data?.districts ?? [], [data]);
  const kinds = useMemo(
    () => ['전체', ...new Set(list.map((d) => d.disaster_type).filter(Boolean))],
    [list],
  );
  const filtered =
    kindFilter === '전체' ? list : list.filter((d) => d.disaster_type === kindFilter);
  const totalCost = list.reduce((sum, d) => sum + (Number(d.cost_million_krw) || 0), 0);
  const openDistrict = list.find((d) => d.district_code === openCode);

  const handleSelect = (d) => {
    actions.selectDistrict(d.district_code); // mapHighlight({type:"district"}) 동기
    setOpenCode(d.district_code);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SectionTitle>위험지구</SectionTitle>

      {status === 'loading' && <LoadingText label="위험지구 조회 중" />}
      {status === 'error' && <EmptyBox title="위험지구 조회 실패" desc="백엔드 연결 확인" />}

      {status === 'done' && list.length === 0 && (
        <EmptyBox title="위험지구 없음" desc="해당 지자체 관리대장 자료 없음" />
      )}

      {status === 'done' && list.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: 8 }}>
            <StatBox label="위험지구 수" value={`${list.length}개소`} />
            <StatBox label="총사업비" value={costEok(totalCost)} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {kinds.map((k) => (
              <ChipButton
                key={k}
                label={k}
                selected={kindFilter === k}
                onClick={() => setKindFilter(k)}
              />
            ))}
          </div>

          {filtered.map((d) => (
            <SurfaceCard
              key={d.district_code}
              selected={state.selectedDistrictId === d.district_code}
              onClick={() => handleSelect(d)}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 4,
                }}
              >
                <span
                  className="typo-heading-sm"
                  style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}
                >
                  {d.district_name}
                </span>
                <Badge
                  label={d.disaster_type || '기타'}
                  leftIcon={false}
                  mode="light"
                  size="md"
                  variant="solid"
                  color={kindBadgeColor(d.disaster_type)}
                  shape="round-square"
                />
                <GradeDot grade={d.grade} />
              </div>
              <div
                className="typo-body-sm"
                style={{ color: 'var(--color-text-secondary-2)', marginBottom: 4 }}
              >
                {d.location || '위치 미상'}
              </div>
              <div className="typo-body-sm" style={{ color: 'var(--color-text-primary)' }}>
                사업비 {costEok(d.cost_million_krw)}
                {d.priority ? ` · 우선순위 ${d.priority}` : ''}
              </div>
            </SurfaceCard>
          ))}
        </>
      )}

      {openDistrict && (
        <DetailModal
          title={openDistrict.district_name}
          badge={
            <Badge
              label={openDistrict.disaster_type || '기타'}
              leftIcon={false}
              mode="light"
              size="md"
              variant="solid"
              color={kindBadgeColor(openDistrict.disaster_type)}
              shape="round-square"
            />
          }
          onClose={() => setOpenCode(null)}
        >
          <FieldRow label="위치">{openDistrict.location || '위치 미상'}</FieldRow>
          <FieldRow label="재해유형">
            {[openDistrict.disaster_type, openDistrict.disaster_subtype]
              .filter(Boolean)
              .join(' · ') || '—'}
          </FieldRow>
          <FieldRow label="위험등급">
            <GradeDot grade={openDistrict.grade} />{' '}
            <span style={{ color: 'var(--color-text-secondary-2)' }}>
              {gradeInfo(openDistrict.grade).full}
            </span>
          </FieldRow>
          {openDistrict.river_name && (
            <FieldRow label="관련 하천">
              {openDistrict.river_name}
              {openDistrict.station ? ` (${openDistrict.station})` : ''}
            </FieldRow>
          )}

          <SectionTitle>위험요인</SectionTitle>
          <ul
            className="typo-body-sm"
            style={{ margin: '0 0 8px', paddingLeft: 18, color: 'var(--color-text-primary)' }}
          >
            {(openDistrict.risk_factors || []).map((f) => (
              <li key={f} style={{ marginBottom: 2 }}>
                {f}
              </li>
            ))}
            {(openDistrict.risk_factors || []).length === 0 && <li>기재 없음</li>}
          </ul>

          <SectionTitle>위험조건 임계값</SectionTitle>
          <KTable
            columns={[
              { key: 'target', label: '대상' },
              { key: 'operator', label: '조건' },
              { key: 'value', label: '값', align: 'right' },
              { key: 'unit', label: '단위' },
              { key: 'basis', label: '산정근거' },
            ]}
            rows={(openDistrict.risk_thresholds || []).map((t, i) => ({
              key: `${t.target}-${i}`,
              target: t.target,
              operator: t.operator,
              value: fmtNum(t.value),
              unit: t.unit || '—',
              basis: (
                <span title={t.evidence ? `${t.evidence.doc_title} ${t.evidence.page_label}` : undefined}>
                  {t.basis || '—'}
                  {t.evidence?.page_label ? (
                    <span style={{ color: 'var(--color-text-secondary-2)' }}>
                      {' '}
                      ({t.evidence.page_label}쪽)
                    </span>
                  ) : null}
                </span>
              ),
            }))}
            emptyText="임계값 기재 없음"
          />

          <SectionTitle>저감대책</SectionTitle>
          <ul
            className="typo-body-sm"
            style={{ margin: '0 0 4px', paddingLeft: 18, color: 'var(--color-text-primary)' }}
          >
            {(openDistrict.mitigation || []).map((m) => (
              <li key={m} style={{ marginBottom: 2 }}>
                {m}
              </li>
            ))}
            {(openDistrict.mitigation || []).length === 0 && <li>기재 없음</li>}
          </ul>
          {openDistrict.implementation_method && (
            <FieldRow label="시행방법">{openDistrict.implementation_method}</FieldRow>
          )}
          {openDistrict.implementation_period && (
            <FieldRow label="시행시기">{openDistrict.implementation_period}</FieldRow>
          )}
          {openDistrict.project_status && (
            <FieldRow label="사업상태">{openDistrict.project_status}</FieldRow>
          )}

          <SectionTitle>사업비·우선순위</SectionTitle>
          <FieldRow label="사업비">{costEok(openDistrict.cost_million_krw)}</FieldRow>
          {openDistrict.expected_damage_million_krw != null && (
            <FieldRow label="예상피해액">
              {costEok(openDistrict.expected_damage_million_krw)}
            </FieldRow>
          )}
          <FieldRow label="우선순위">{openDistrict.priority || '—'}</FieldRow>
          {openDistrict.implementer && (
            <FieldRow label="시행주체">{openDistrict.implementer}</FieldRow>
          )}

          {openDistrict.evidence && (
            <>
              <SectionTitle>근거</SectionTitle>
              <p
                className="typo-body-sm"
                style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
              >
                {openDistrict.evidence.doc_title}
                {openDistrict.evidence.page_label
                  ? ` · ${openDistrict.evidence.page_label}`
                  : ''}
              </p>
            </>
          )}
          {openDistrict.note && (
            <p
              className="typo-body-sm"
              style={{ margin: '8px 0 0', color: 'var(--color-text-secondary-2)' }}
            >
              비고 · {openDistrict.note}
            </p>
          )}
        </DetailModal>
      )}
    </div>
  );
}
