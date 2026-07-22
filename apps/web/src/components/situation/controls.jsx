/**
 * controls — 상황입력·헤더 공용 소형 컨트롤 (T3 소유).
 *
 * UNE DS 컴포넌트는 정적 변형 렌더러(이벤트 prop 없음)이므로
 * Clickable(무장식 button)로 감싸 상호작용을 부여한다.
 * 색·간격은 UNE 토큰 변수만 사용.
 */

/** 무장식 버튼 래퍼 — DS 비주얼을 감싸 클릭·키보드 접근 제공 */
export function Clickable({
  onClick,
  disabled = false,
  title,
  ariaLabel,
  ariaPressed,
  style,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        font: 'inherit',
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: 8,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/** 필드 래퍼 — 레이블(typo-body-sm) + 콘텐츠 세로 배치 */
export function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        className="typo-body-sm"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

/** 네이티브 입력 요소용 DS 필드 룩 공통 스타일 */
export const fieldBoxStyle = {
  height: 32,
  borderRadius: 4,
  border: '1px solid var(--color-border-default)',
  background: 'var(--field-bg-surface, var(--color-surface-primary))',
  color: 'var(--color-text-primary)',
  fontFamily: 'inherit',
  fontSize: 14,
  letterSpacing: '-0.03em',
  padding: '0 12px',
  outline: 'none',
  boxSizing: 'border-box',
};
