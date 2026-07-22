/**
 * DatetimeField — 발생 일시 입력 (T3 소유).
 *
 * 트리거(일시 표기 + 달력 아이콘) 클릭 → 미니 캘린더 팝오버.
 * 날짜 셀은 UNE DS Datepicker(일자 셀) 컴포넌트, 시각은 네이티브 time 입력.
 * props: { value: Date, onChange(Date) }
 */
import { useState } from 'react';
import { Datepicker } from '../../ds/components/inputs/Datepicker.jsx';
import Icon from '../../ds/assets/icons/Icon.jsx';
import { Clickable, fieldBoxStyle } from './controls.jsx';

const p2 = (n) => String(n).padStart(2, '0');

/** Date → "YYYY-MM-DD HH:mm" 표기 */
export function formatDateTime(d) {
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())} ${p2(d.getHours())}:${p2(d.getMinutes())}`;
}

/** Date → 로컬 오프셋 포함 ISO8601 (예: 2026-07-23T14:00+09:00) */
export function toLocalIso(d) {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? '+' : '-';
  const abs = Math.abs(off);
  return (
    `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}` +
    `T${p2(d.getHours())}:${p2(d.getMinutes())}` +
    `${sign}${p2(Math.floor(abs / 60))}:${p2(abs % 60)}`
  );
}

const sameYmd = (a, y, m, day) =>
  a.getFullYear() === y && a.getMonth() === m && a.getDate() === day;

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function DatetimeField({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value.getFullYear());
  const [viewMonth, setViewMonth] = useState(value.getMonth());
  const now = new Date();

  const moveMonth = (delta) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const pickDay = (day) => {
    const d = new Date(value);
    d.setFullYear(viewYear, viewMonth, day);
    onChange(d);
    setOpen(false);
  };

  const pickTime = (hhmm) => {
    const [h, m] = hhmm.split(':').map(Number);
    if (Number.isNaN(h) || Number.isNaN(m)) return;
    const d = new Date(value);
    d.setHours(h, m, 0, 0);
    onChange(d);
  };

  const firstOffset = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [
    ...Array.from({ length: firstOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* 트리거 — 일시 표기 + 달력 아이콘 */}
      <Clickable
        onClick={() => {
          setViewYear(value.getFullYear());
          setViewMonth(value.getMonth());
          setOpen((o) => !o);
        }}
        ariaLabel="발생 일시 선택"
        style={{ width: '100%', borderRadius: 4 }}
      >
        <span
          style={{
            ...fieldBoxStyle,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <span className="typo-body-md">{formatDateTime(value)}</span>
          <Icon
            name="달력"
            size={16}
            style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}
          />
        </span>
      </Clickable>

      {open && (
        <>
          {/* 바깥 클릭 시 닫기 */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 90 }}
          />
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              zIndex: 100,
              background: 'var(--color-surface-primary)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 8,
              boxShadow: '0 4px 6px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.08)',
              padding: 12,
            }}
          >
            {/* 월 이동 헤더 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Clickable
                onClick={() => moveMonth(-1)}
                ariaLabel="이전 달"
                style={{ padding: 4 }}
              >
                <Icon
                  name="왼쪽"
                  size={16}
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </Clickable>
              <span className="typo-body-md" style={{ fontWeight: 700 }}>
                {viewYear}년 {viewMonth + 1}월
              </span>
              <Clickable
                onClick={() => moveMonth(1)}
                ariaLabel="다음 달"
                style={{ padding: 4 }}
              >
                <Icon
                  name="오른쪽"
                  size={16}
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </Clickable>
            </div>

            {/* 요일 헤더 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 34px)',
                justifyItems: 'center',
                marginBottom: 2,
              }}
            >
              {WEEKDAYS.map((w) => (
                <span
                  key={w}
                  className="typo-body-sm"
                  style={{ color: 'var(--color-text-secondary-2)' }}
                >
                  {w}
                </span>
              ))}
            </div>

            {/* 일자 그리드 — DS Datepicker 셀 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 34px)',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              {cells.map((day, i) =>
                day === null ? (
                  <span key={`b${i}`} />
                ) : (
                  <Clickable
                    key={day}
                    onClick={() => pickDay(day)}
                    ariaLabel={`${viewYear}-${p2(viewMonth + 1)}-${p2(day)}`}
                    style={{ borderRadius: 1000 }}
                  >
                    <Datepicker
                      text={String(day)}
                      badge={false}
                      today={sameYmd(now, viewYear, viewMonth, day)}
                      selected={sameYmd(value, viewYear, viewMonth, day)}
                      state="default"
                      range="none"
                    />
                  </Clickable>
                ),
              )}
            </div>

            {/* 시각 입력 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 10,
              }}
            >
              <Icon
                name="시간"
                size={16}
                style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}
              />
              <input
                type="time"
                value={`${p2(value.getHours())}:${p2(value.getMinutes())}`}
                onChange={(e) => pickTime(e.target.value)}
                aria-label="발생 시각"
                style={{ ...fieldBoxStyle, flex: 1 }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
