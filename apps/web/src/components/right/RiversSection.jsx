/**
 * RiversSection — 모듈④ 상세조회 · 하천.
 *
 * rivers({admin: adminCode})를 지자체 변경에 반응해 로드하고, 하천 개요 카드
 * (등급·유역면적·연장) + 계획홍수량 표(지점·측점 No.·홍수량·주의보 50%·경보 70%)를
 * 표출한다. 안양천은 plan_version(기수립-2015/금회-2020)을 MiniBadge로 병기한다.
 * 개요 카드 클릭 시 selectRiver(지도 연동).
 */
import { useEffect, useMemo, useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import { rivers as fetchRivers } from '../../api/client.js';
import Badge from '../../ds/components/display/Badge.jsx';
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

/** 하천 등급 → Badge color */
function riverGradeColor(grade) {
  return grade === '국가하천' ? 'primary' : 'grayscale';
}

/** 측점 1건 → 표 행 — 안양천(design_floods[])은 계획 버전별 수치 병기 */
function stationRow(st) {
  let flood;
  if (Array.isArray(st.design_floods) && st.design_floods.length > 0) {
    const adopted =
      st.design_floods.find((f) => f.adopted) || st.design_floods[st.design_floods.length - 1];
    const others = st.design_floods.filter((f) => f !== adopted);
    flood = (
      <span style={{ whiteSpace: 'nowrap' }}>
        <span style={{ fontWeight: 500 }}>{fmtNum(adopted.design_flood_m3s)}</span>{' '}
        <MiniBadge tone="brand" label={adopted.plan_version || '금회'} />
        {others.map((f) => (
          <span key={f.plan_version} style={{ display: 'block' }}>
            <span style={{ color: 'var(--color-text-secondary-2)' }}>
              {fmtNum(f.design_flood_m3s)}
            </span>{' '}
            <MiniBadge tone="gray" label={f.plan_version || '기수립'} />
          </span>
        ))}
      </span>
    );
  } else {
    flood = fmtNum(st.design_flood_m3s);
  }
  return {
    key: st.station_code,
    name: `${st.station_name || '—'}${st.station_code ? ` (${st.station_code})` : ''}`,
    no: st.station_no || '—',
    flood,
    advisory: fmtNum(st.flood_warning?.advisory_m3s),
    alert: fmtNum(st.flood_warning?.alert_m3s),
  };
}

export default function RiversSection() {
  const { state, actions } = useAppState();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | done | error

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    fetchRivers({ admin: state.adminCode })
      .then((d) => {
        if (!alive) return;
        setData(d);
        setStatus('done');
      })
      .catch((e) => {
        if (!alive) return;
        setStatus('error');
        actions.showToast('error', `하천 조회 실패: ${e.detail || e.message || ''}`);
      });
    return () => {
      alive = false;
    };
  }, [state.adminCode, actions]);

  const rivers = useMemo(() => data?.rivers ?? [], [data]);
  const rule = data?.warning_flow_rule;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SectionTitle>하천</SectionTitle>

      {status === 'loading' && <LoadingText label="하천 조회 중" />}
      {status === 'error' && <EmptyBox title="하천 조회 실패" desc="백엔드 연결 확인" />}
      {status === 'done' && rivers.length === 0 && (
        <EmptyBox title="하천 자료 없음" desc="해당 지자체 하천기본계획 자료 없음" />
      )}

      {status === 'done' &&
        rivers.map((rv) => (
          <div key={rv.river_id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <SurfaceCard
              selected={state.selectedRiverId === rv.river_id}
              onClick={() => actions.selectRiver(rv.river_id)}
            >
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
                  {rv.name}
                </span>
                <Badge
                  label={rv.grade || '하천'}
                  leftIcon={false}
                  mode="light"
                  size="md"
                  variant="solid"
                  color={riverGradeColor(rv.grade)}
                  shape="round-square"
                />
                {(rv.plan_versions || []).map((pv) => (
                  <MiniBadge
                    key={pv.plan_version}
                    tone={pv.adopted ? 'brand' : 'gray'}
                    label={pv.plan_version}
                    title={pv.plan_name}
                  />
                ))}
              </div>
              <FieldRow label="유역면적">{fmtNum(rv.basin_area_km2)} km²</FieldRow>
              <FieldRow label="연장">{fmtNum(rv.length_km)} km</FieldRow>
              <FieldRow label="계획빈도">{rv.design_frequency_yr || '—'}</FieldRow>
              <FieldRow label="시점">{rv.start_point || '—'}</FieldRow>
              <FieldRow label="종점">{rv.end_point || '—'}</FieldRow>
              {rv.warning_reference_station && (
                <FieldRow label="특보 기준지점">
                  <span title={rv.warning_reference_station.note || undefined}>
                    {rv.warning_reference_station.name}
                    {rv.warning_reference_station.station_code
                      ? ` (${rv.warning_reference_station.station_code})`
                      : ''}
                  </span>
                </FieldRow>
              )}
              <p
                className="typo-body-sm"
                style={{ margin: '6px 0 0', color: 'var(--color-text-secondary-2)' }}
              >
                근거 · {rv.plan_name}
                {rv.profile_evidence?.chapter_page
                  ? ` · ${rv.profile_evidence.chapter_page}쪽`
                  : ''}
              </p>
            </SurfaceCard>

            <KTable
              columns={[
                { key: 'name', label: '지점' },
                { key: 'no', label: '측점 No.' },
                { key: 'flood', label: '계획홍수량(m³/s)', align: 'right' },
                { key: 'advisory', label: '주의보 50%', align: 'right' },
                { key: 'alert', label: '경보 70%', align: 'right' },
              ]}
              rows={(rv.stations || []).map(stationRow)}
              emptyText="측점 자료 없음"
            />

            {rv.limitations && (
              <p
                className="typo-body-sm"
                style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
              >
                유의 · {rv.limitations}
              </p>
            )}
          </div>
        ))}

      {status === 'done' && rule && (
        <SurfaceCard style={{ background: 'var(--color-surface-muted)' }}>
          <div
            className="typo-body-sm"
            style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}
          >
            홍수특보 기준유량 산정 기준
          </div>
          <p className="typo-body-sm" style={{ margin: 0, color: 'var(--color-text-primary)' }}>
            주의보 {rule.advisory} · 경보 {rule.alert}
          </p>
          <p
            className="typo-body-sm"
            style={{ margin: '4px 0 0', color: 'var(--color-text-secondary-2)' }}
          >
            {rule.basis}
          </p>
        </SurfaceCard>
      )}
    </div>
  );
}
