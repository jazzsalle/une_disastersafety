/**
 * 우측 탭 공용 프리미티브 — UNE DS 토큰 기반 카드·모달·표·배지 헬퍼.
 *
 * 생성형 DS 컴포넌트 중 Card·Modal·HeaderCell·BodyCell은 텍스트 슬롯이 없어
 * (고정 placeholder만 렌더) 실데이터 표출이 불가하므로, 동일 토큰(테두리·패딩·
 * radius·그림자)을 그대로 옮긴 로컬 프리미티브로 구성한다.
 * Badge·DotBadge·FilterChip·ListItem·TabFill·Empty는 DS 원본을 사용한다.
 */
import { useEffect, useRef, useState } from 'react';
import Empty from '../../ds/components/feedback/Empty.jsx';
import FilterChip from '../../ds/components/display/FilterChip.jsx';
import { findHazard, kindColor } from '../../api/models.js';

// ── 서식 헬퍼 ────────────────────────────────────────────────────────

/** 숫자 → 천단위 콤마(널이면 "—") */
export function fmtNum(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return '—';
  return Number(n).toLocaleString('ko-KR');
}

/** 사업비(백만원) → "N억원" 표기 */
export function costEok(millionKrw) {
  if (millionKrw === null || millionKrw === undefined) return '—';
  const eok = Number(millionKrw) / 100;
  const digits = eok >= 100 ? 0 : 1;
  return `${eok.toLocaleString('ko-KR', { maximumFractionDigits: digits })}억원`;
}

// ── 재해유형·등급 매핑 ───────────────────────────────────────────────

/** 재난 5종 → Badge color(DS Badge props) */
const HAZARD_BADGE_COLOR = {
  HEAVY_RAIN: 'primary',
  FLOOD: 'success',
  INUNDATION: 'secondary',
  TYPHOON: 'grayscale',
  LANDSLIDE: 'warning',
};

/** passage(청크) → 재해유형 배지 목록 [{name, color}] */
export function hazardBadgeItems(passage) {
  const codes =
    (passage?.hazard_event_codes?.length && passage.hazard_event_codes) ||
    passage?.hazard_codes ||
    [];
  const seen = new Set();
  const items = [];
  for (const code of codes) {
    const h = findHazard(code);
    if (!h || seen.has(h.event_code)) continue;
    seen.add(h.event_code);
    items.push({ name: h.name_ko, color: HAZARD_BADGE_COLOR[h.event_code] || 'grayscale' });
  }
  return items;
}

/** 위험지구 재해유형(하천재해 등 8종) → Badge color — 지도 마커와 단일 소스(KIND_COLORS) */
export function kindBadgeColor(kind) {
  return kindColor(kind).badge;
}

/** 위험 4단 색 토큰 — green → yellow → orange → red (docs/03 §3) */
const GRADE_COLORS = {
  저위험: 'var(--color-green-500)',
  중위험: 'var(--color-yellow-400)',
  고위험: 'var(--color-orange-500)',
  초고위험: 'var(--color-red-500)',
};

/** 등급 문자열("상세 위험도지수 6.4(고위험)" 등) → {label, color, full} */
export function gradeInfo(grade) {
  if (!grade) {
    return { label: '등급 미상', color: 'var(--color-surface-gray)', full: '등급 미상' };
  }
  const full = String(grade);
  const m = full.match(/(초고위험|고위험|중위험|저위험)/);
  const label = m ? m[1] : full;
  return { label, color: GRADE_COLORS[label] || 'var(--color-surface-gray)', full };
}

// ── 레이아웃 프리미티브 ──────────────────────────────────────────────

/** 섹션 제목(한국어 명사구) */
export function SectionTitle({ children, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0' }}>
      <h3
        className="typo-heading-sm"
        style={{ margin: 0, fontWeight: 700, color: 'var(--color-text-primary)', flex: 1 }}
      >
        {children}
      </h3>
      {right}
    </div>
  );
}

/** DS Card(outline) 토큰을 따르는 콘텐츠 카드 — 선택 시 브랜드 테두리 */
export function SurfaceCard({ selected = false, onClick, style, children }) {
  const clickable = typeof onClick === 'function';
  return (
    <div
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
      style={{
        background: 'var(--color-surface-primary)',
        border: `1px solid ${
          selected ? 'var(--color-border-brand)' : 'var(--color-border-default)'
        }`,
        boxShadow: selected ? 'inset 0 0 0 1px var(--color-border-brand)' : 'none',
        borderRadius: 8,
        padding: 12,
        cursor: clickable ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** 요약 스탯 박스(지구 수·총사업비 등) */
export function StatBox({ label, value }) {
  return (
    <div
      style={{
        flex: 1,
        background: 'var(--color-surface-muted)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 8,
        padding: '8px 12px',
      }}
    >
      <div className="typo-body-sm" style={{ color: 'var(--color-text-secondary-2)' }}>
        {label}
      </div>
      <div
        className="typo-heading-md"
        style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}
      >
        {value}
      </div>
    </div>
  );
}

/** 라벨-값 행(상세 필드) */
export function FieldRow({ label, children }) {
  return (
    <div
      className="typo-body-sm"
      style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 8, padding: '2px 0' }}
    >
      <span style={{ color: 'var(--color-text-secondary-2)', flexShrink: 0 }}>{label}</span>
      <span style={{ color: 'var(--color-text-primary)', minWidth: 0, wordBreak: 'break-all' }}>
        {children}
      </span>
    </div>
  );
}

/** 인라인 미니 배지(표 셀 내 plan_version 구분 등) */
export function MiniBadge({ label, tone = 'gray', title }) {
  const tones = {
    brand: {
      background: 'var(--color-surface-brand-subtle)',
      color: 'var(--color-light-blue-500)',
    },
    gray: {
      background: 'var(--color-surface-gray-subtle)',
      color: 'var(--color-text-secondary-2)',
    },
  };
  return (
    <span
      title={title}
      style={{
        display: 'inline-block',
        fontSize: 11,
        lineHeight: '16px',
        letterSpacing: '-0.03em',
        padding: '1px 6px',
        borderRadius: 4,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        ...(tones[tone] || tones.gray),
      }}
    >
      {label}
    </span>
  );
}

/** DS HeaderCell·BodyCell 토큰(테두리·패딩)을 따르는 데이터 표 */
export function KTable({ columns, rows, emptyText = '자료 없음' }) {
  const cell = (align) => ({
    border: '1px solid var(--color-border-default)',
    padding: '6px 8px',
    textAlign: align || 'left',
    color: 'var(--color-text-primary)',
    verticalAlign: 'top',
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        className="typo-body-sm"
        style={{ borderCollapse: 'collapse', width: '100%', minWidth: 320 }}
      >
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  ...cell(c.align),
                  background: 'var(--color-surface-muted)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  width: c.width,
                }}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={cell('center')}>
                {emptyText}
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={r.key ?? i}>
                {columns.map((c) => (
                  <td key={c.key} style={cell(c.align)}>
                    {r[c.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

/** 상세 Modal — DS Modal 토큰(radius lg·2레이어 그림자) 준수, ESC·백드롭 닫기 */
/** X자 닫기 아이콘 — DS InputChip 삭제 아이콘과 동일 패스(DS 자산 재사용) */
export function XIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

/**
 * DetailModal — 이름과 달리 **비모달 플로팅 창**(배경 차단 없음, 드래그 이동 가능).
 *
 * 시연 요구: 상세 창을 띄운 채 밑의 지도를 보고 조작할 수 있어야 한다.
 * - 헤더를 잡고 드래그해 위치 이동(pointer 이벤트, 뷰포트 밖 이탈 방지)
 * - 기본 위치는 지도 위 우측(우측 탭 열 왼쪽 옆) — 지도가 항상 보인다
 * - 닫기: 우상단 X 버튼(DS InputChip X 패스) 또는 ESC
 */
export function DetailModal({ title, badge, onClose, children }) {
  const [pos, setPos] = useState(null); // null=기본 위치, {x,y}=드래그 후
  const panelRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const startDrag = (e) => {
    if (e.button !== 0) return;
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const offX = e.clientX - rect.left;
    const offY = e.clientY - rect.top;
    const onMove = (ev) => {
      const x = Math.min(Math.max(ev.clientX - offX, 8 - rect.width + 80), window.innerWidth - 80);
      const y = Math.min(Math.max(ev.clientY - offY, 8), window.innerHeight - 48);
      setPos({ x, y });
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    e.preventDefault();
  };

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label={typeof title === 'string' ? title : undefined}
      style={{
        position: 'fixed',
        ...(pos ? { left: pos.x, top: pos.y } : { top: 84, right: 428 }),
        zIndex: 1500,
        background: 'var(--color-surface-primary)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 12,
        width: 'min(460px, calc(100vw - 48px))',
        maxHeight: '62vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow:
          '0 0 5px var(--shadow-color-ambient-2, rgba(0,0,0,0.06)), 0 0 15px var(--shadow-color-key-3, rgba(0,0,0,0.15))',
      }}
    >
      <div
        onPointerDown={startDrag}
        title="드래그하여 이동"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 16px',
          borderBottom: '1px solid var(--color-border-default)',
          flexShrink: 0,
          cursor: 'move',
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        <span
          className="typo-heading-md"
          style={{
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </span>
        {badge}
        <button
          type="button"
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="닫기"
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--color-text-secondary-2)',
            display: 'flex',
            padding: 6,
          }}
        >
          <XIcon size={14} />
        </button>
      </div>
      <div style={{ padding: 16, overflowY: 'auto', minHeight: 0 }}>{children}</div>
    </div>
  );
}

/** 빈 상태 래퍼 — DS Empty(size sm) 중앙 배치 */
export function EmptyBox({ title, desc }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
      <Empty
        visual
        title={title}
        description={Boolean(desc)}
        description2={desc || ''}
        size="sm"
        actions={false}
      />
    </div>
  );
}

/** 로딩 표시(한국어 명사구) */
export function LoadingText({ label = '조회 중' }) {
  return (
    <p className="typo-body-sm" style={{ color: 'var(--color-text-secondary-2)', margin: '8px 0' }}>
      {label}
    </p>
  );
}

/** DS FilterChip 클릭 래퍼(생성형 칩에 onClick 미지원) */
export function ChipButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex' }}
    >
      <FilterChip
        label={label}
        selected={selected}
        variant="outline"
        state="default"
        size="sm"
        leftIcon={false}
      />
    </button>
  );
}
