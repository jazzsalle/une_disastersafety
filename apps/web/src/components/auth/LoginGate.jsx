/**
 * LoginGate — 앱 진입 로그인 게이트 (UNI RAG 개인 UNE 계정, /api/auth/*).
 *
 * - 마운트 시 GET /api/auth/me → 미로그인이면 로그인 화면만 표출, 성공 시 children 렌더
 * - JWT는 백엔드가 httpOnly 쿠키로 관리 — 클라이언트 저장 없음
 * - 세션 만료: 패널이 window에 'auth:required' 이벤트를 디스패치하면 게이트로 복귀
 *   (chat 401 시 ChatTab이 발화 — requireLogin() 헬퍼 사용)
 */
import { useEffect, useState } from 'react';
import { authLogin, authMe } from '../../api/client.js';
import Button from '../../ds/components/actions/Button.jsx';
import Spinner from '../../ds/components/feedback/Spinner.jsx';

/** 세션 만료 시 로그인 게이트 복귀 트리거 — 패널 공용 */
export function requireLogin() {
  window.dispatchEvent(new Event('auth:required'));
}

const FIELD_STYLE = {
  width: '100%',
  height: 40,
  boxSizing: 'border-box',
  padding: '0 12px',
  borderRadius: 6,
  border: '1px solid var(--color-border-default)',
  background: 'var(--color-surface-primary)',
  color: 'var(--color-text-primary)',
  outline: 'none',
};

export default function LoginGate({ children }) {
  const [status, setStatus] = useState('checking'); // checking | anon | authed
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    authMe()
      .then((r) => alive && setStatus(r?.logged_in ? 'authed' : 'anon'))
      .catch(() => alive && setStatus('anon'));
    const onRequired = () => {
      setStatus('anon');
      setError('세션이 만료되었습니다. 다시 로그인해 주세요');
    };
    window.addEventListener('auth:required', onRequired);
    return () => {
      alive = false;
      window.removeEventListener('auth:required', onRequired);
    };
  }, []);

  const submit = async () => {
    if (pending) return;
    if (!account.trim() || !password) {
      setError('계정과 비밀번호 입력 필요');
      return;
    }
    setPending(true);
    setError('');
    try {
      await authLogin({ account: account.trim(), password });
      setPassword('');
      setStatus('authed');
    } catch (err) {
      setError(
        err?.status === 401
          ? '계정 또는 비밀번호가 올바르지 않습니다'
          : 'UNI RAG 서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요',
      );
    } finally {
      setPending(false);
    }
  };

  if (status === 'authed') return children;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-surface-muted)',
        padding: 24,
      }}
    >
      {status === 'checking' ? (
        <Spinner size="md" />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          style={{
            width: 360,
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: 32,
            borderRadius: 12,
            background: 'var(--color-surface-primary)',
            border: '1px solid var(--color-border-default)',
            boxShadow:
              '0 0 5px var(--shadow-color-ambient-2, rgba(0,0,0,0.06)), 0 0 15px var(--shadow-color-key-3, rgba(0,0,0,0.15))',
          }}
        >
          <h1
            className="typo-heading-sm"
            style={{ margin: 0, color: 'var(--color-text-primary)' }}
          >
            재난안전 AI 시범 서비스
          </h1>
          <p
            className="typo-body-sm"
            style={{ margin: '0 0 8px', color: 'var(--color-text-secondary-2)' }}
          >
            UNE 계정 로그인 (UNI RAG System 연동)
          </p>
          <input
            type="text"
            value={account}
            placeholder="계정"
            aria-label="UNE 계정"
            autoComplete="username"
            autoFocus
            onChange={(e) => setAccount(e.target.value)}
            style={FIELD_STYLE}
          />
          <input
            type="password"
            value={password}
            placeholder="비밀번호"
            aria-label="비밀번호"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            style={FIELD_STYLE}
          />
          {error && (
            <p
              className="typo-body-sm"
              role="alert"
              style={{ margin: 0, color: 'var(--color-text-error)' }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            aria-label="로그인"
            style={{
              border: 'none',
              background: 'none',
              padding: 0,
              cursor: pending ? 'default' : 'pointer',
              alignSelf: 'stretch',
            }}
          >
            <Button
              label={pending ? '로그인 중' : '로그인'}
              variant="fill"
              color="primary"
              size="lg"
              leftIcon={false}
              rightIcon={false}
              state={pending ? 'disabled' : 'default'}
              style={{ width: '100%' }}
            />
          </button>
        </form>
      )}
    </div>
  );
}
