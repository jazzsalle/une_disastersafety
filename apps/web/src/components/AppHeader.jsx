/**
 * AppHeader — 상단 헤더 (T3 구현).
 *
 * 사용 계약(스텁 계약 유지):
 * - 읽는 상태 : state.theme("light"|"dark"), state.adminCode, state.event
 * - 호출 액션 : actions.toggleTheme() — 라이트/다크 전환
 *               actions.setAdminCode(code) — 지자체 전환
 * - 상수      : REGIONS·findHazard·alertColor(api/models.js)
 * - 구성      : 좌 서비스명 "une 재난안전 AI" / 중 지자체 Select /
 *               우 현재 event 위기경보·특보 Badge(색+텍스트 라벨 병기) + 테마 토글
 * - 레이아웃  : App.jsx의 <header className="app-header"> 내부에 렌더(전폭)
 */
import { useState } from 'react';
import { useAppState } from '../state/AppState.jsx';
import { REGIONS, findRegion, findHazard, alertColor } from '../api/models.js';
import { authLogout } from '../api/client.js';
import { requireLogin } from './auth/LoginGate.jsx';
import { Badge } from '../ds/components/display/Badge.jsx';
import { IconButton } from '../ds/components/actions/IconButton.jsx';
import Icon from '../ds/assets/icons/Icon.jsx';
import { Clickable } from './situation/controls.jsx';

export default function AppHeader() {
  const { state, actions } = useAppState();
  const [open, setOpen] = useState(false);
  const region = findRegion(state.adminCode);
  const dark = state.theme === 'dark';

  const event = state.event;
  const hazard = event
    ? findHazard(event.hazard_event_code || event.hazard_code)
    : undefined;
  const alert = event ? alertColor(event.alert_level) : null;

  const pickRegion = (code) => {
    actions.setAdminCode(code);
    setOpen(false);
  };

  return (
    <>
      {/* 좌 — 서비스명(플레인 타입 로고) */}
      <span
        className="typo-title-sm"
        style={{ fontWeight: 700, whiteSpace: 'nowrap' }}
      >
        <span
          style={{
            color:
              'var(--color-text-brand, var(--color-light-blue-500, #3C69FC))',
          }}
        >
          une
        </span>{' '}
        재난안전 AI
      </span>

      {/* 중 — 지자체 Select */}
      <div style={{ position: 'relative' }}>
        <Clickable
          onClick={() => setOpen((o) => !o)}
          ariaLabel="지자체 선택"
          style={{ borderRadius: 4 }}
        >
          <span
            style={{
              height: 36,
              minWidth: 200,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '0 12px',
              borderRadius: 4,
              border: '1px solid var(--color-border-default)',
              background: 'var(--color-surface-primary)',
            }}
          >
            <Icon
              name="위치_Line"
              size={16}
              style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}
            />
            <span className="typo-body-md" style={{ flex: 1, textAlign: 'left' }}>
              {region ? region.admin_name : '지자체 선택'}
            </span>
            <Icon
              name="화살표_아래"
              size={16}
              style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}
            />
          </span>
        </Clickable>

        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 90 }}
            />
            <ul
              role="listbox"
              aria-label="지자체 목록"
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                zIndex: 100,
                margin: 0,
                padding: 4,
                listStyle: 'none',
                minWidth: '100%',
                background: 'var(--color-surface-primary)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 8,
                boxShadow:
                  '0 4px 6px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              {REGIONS.map((r) => {
                const active = r.admin_code === state.adminCode;
                return (
                  <li key={r.admin_code} role="option" aria-selected={active}>
                    <Clickable
                      onClick={() => pickRegion(r.admin_code)}
                      ariaLabel={r.admin_name}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        gap: 8,
                        borderRadius: 4,
                        background: active
                          ? 'var(--color-interaction-primary-bg-subtle-default, var(--color-surface-brand-subtle))'
                          : 'transparent',
                      }}
                    >
                      <span
                        className="typo-body-md"
                        style={{
                          flex: 1,
                          textAlign: 'left',
                          color: active
                            ? 'var(--color-interaction-primary-text-default)'
                            : 'var(--color-text-primary)',
                        }}
                      >
                        {r.admin_name}
                      </span>
                      {active && (
                        <Icon
                          name="체크"
                          size={16}
                          style={{
                            color:
                              'var(--color-interaction-primary-icon-default)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </Clickable>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>

      {/* 우 — 현재 상황 경보 Badge + 테마 토글 */}
      <div
        style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {event && alert && (
          <Badge
            label={[
              hazard?.name_ko,
              `${event.alert_kind ?? '경보'} ${alert.label}`,
            ]
              .filter(Boolean)
              .join(' · ')}
            leftIcon={false}
            mode="light"
            size="md"
            variant="solid"
            color="primary"
            shape="cylinder"
            style={{
              backgroundColor: alert.token,
              borderRadius: 1000,
              height: 28,
              padding: '0 12px',
            }}
          />
        )}
        <Clickable
          onClick={async () => {
            try {
              await authLogout();
            } catch {
              // 로그아웃 API 실패해도 게이트 복귀(쿠키 만료 시 등)
            }
            requireLogin();
          }}
          title="로그아웃"
          ariaLabel="로그아웃"
          style={{ borderRadius: 8 }}
        >
          <IconButton
            variant="ghost"
            color="grayscale"
            state="default"
            size="md"
            badge={false}
            icon2={
              <Icon
                name="로그아웃"
                size={20}
                style={{ color: 'var(--color-text-secondary)' }}
              />
            }
          />
        </Clickable>
        <Clickable
          onClick={actions.toggleTheme}
          title={dark ? '라이트 모드 전환' : '다크 모드 전환'}
          ariaLabel={dark ? '라이트 모드 전환' : '다크 모드 전환'}
          ariaPressed={dark}
          style={{ borderRadius: 8 }}
        >
          <IconButton
            variant="ghost"
            color="grayscale"
            state="default"
            size="md"
            badge={false}
            icon2={
              <Icon
                name={dark ? '플래쉬 on' : '플래쉬 off'}
                size={20}
                style={{ color: 'var(--color-text-secondary)' }}
              />
            }
          />
        </Clickable>
      </div>
    </>
  );
}
