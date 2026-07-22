/**
 * AppToast — 전역 토스트 표시(T7 통합).
 *
 * 각 패널이 actions.showToast(kind, message)로 쌓는 state.toast를
 * 화면 하단 중앙에 DS Toast로 표출한다(결합 전에는 표시 주체가 없던 결합 버그 보완).
 * - kind("info"|"error"|"success") → DS Toast intent 매핑
 * - 4초 후 자동 해제(clearToast), 클릭 시 즉시 해제
 */
import { useEffect } from 'react';
import { useAppState } from '../state/AppState.jsx';
import Toast from '../ds/components/feedback/Toast.jsx';

const AUTO_DISMISS_MS = 4000;

export default function AppToast() {
  const { state, actions } = useAppState();
  const toast = state.toast;

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => actions.clearToast(), AUTO_DISMISS_MS);
    return () => clearTimeout(t);
  }, [toast, actions]);

  if (!toast) return null;

  const intent = ['info', 'error', 'success', 'warning'].includes(toast.kind)
    ? toast.kind
    : 'info';

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={actions.clearToast}
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 24,
        transform: 'translateX(-50%)',
        zIndex: 3000,
        cursor: 'pointer',
        maxWidth: 'min(560px, calc(100vw - 32px))',
      }}
    >
      <Toast intent={intent} iconButton={false} text={toast.message} />
    </div>
  );
}
