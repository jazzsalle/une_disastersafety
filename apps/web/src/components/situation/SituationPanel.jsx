/**
 * SituationPanel — 모듈① 상황입력 패널 (T3 구현).
 *
 * 사용 계약(스텁 계약 유지):
 * - 읽는 상태 : state.adminCode, state.event
 * - 호출 액션 : actions.setEvent(buildEvent({...})) — 상황 확정
 *               actions.setRightTab('criteria')     — 재난유형 선택 시 판단기준 탭 전환
 *               actions.showToast(kind, message)    — 필수값 미선택 안내
 * - 상수·API : HAZARDS·ALERT_KINDS·ALERT_LEVELS·buildEvent·findRegion(api/models.js)
 * - 구성     : 재난유형 ChoiceChip 5종(T코드 병기) / 경보종류·단계 Segment(동적) /
 *              발생일시 Datepicker / 피해·통제 키워드 InputChip / 상황 메모 / [적용]
 * - 레이아웃 : 좌측 300px 열 전체 높이(부모 flex가 관리)
 */
import { useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import {
  HAZARDS,
  ALERT_KINDS,
  ALERT_LEVELS,
  buildEvent,
  findRegion,
} from '../../api/models.js';
import { ChoiceChip } from '../../ds/components/display/ChoiceChip.jsx';
import { Segment } from '../../ds/components/inputs/Segment.jsx';
import { Button } from '../../ds/components/actions/Button.jsx';
import { Clickable, Field, fieldBoxStyle } from './controls.jsx';
import DatetimeField, { toLocalIso } from './DatetimeField.jsx';
import KeywordField from './KeywordField.jsx';

/** 경보종류·재난유형별 단계 목록 — 산사태 특보는 주의보·예비경보·경보 3단 */
function levelsFor(kind, eventCode) {
  if (kind === '특보' && eventCode === 'LANDSLIDE') {
    return ['주의보', '예비경보', '경보'];
  }
  return ALERT_LEVELS[kind] ?? [];
}

export default function SituationPanel() {
  const { state, actions } = useAppState();
  const region = findRegion(state.adminCode);

  const [eventCode, setEventCode] = useState(null);
  const [alertKind, setAlertKind] = useState('특보');
  const [alertLevel, setAlertLevel] = useState('주의보');
  const [onset, setOnset] = useState(() => new Date());
  const [keywords, setKeywords] = useState([]);
  const [note, setNote] = useState('');

  const levels = levelsFor(alertKind, eventCode);

  const pickHazard = (code) => {
    setEventCode(code);
    const next = levelsFor(alertKind, code);
    if (!next.includes(alertLevel)) setAlertLevel(next[0]);
    // 유형 선택 시 판단기준 탭 자동 전환
    actions.setRightTab('criteria');
  };

  const pickKind = (kind) => {
    setAlertKind(kind);
    const next = levelsFor(kind, eventCode);
    if (!next.includes(alertLevel)) setAlertLevel(next[0]);
  };

  const apply = () => {
    if (!eventCode || !region) {
      actions.showToast('error', '재난유형·지자체 선택 필수');
      return;
    }
    const event = buildEvent({
      event_code: eventCode,
      admin_code: state.adminCode,
      alert_kind: alertKind,
      alert_level: alertLevel,
      onset: toLocalIso(onset),
      keywords,
      note: note.trim() || null,
    });
    actions.setEvent(event);
    actions.showToast('success', `상황 적용 완료 · ${event.event_id}`);
  };

  return (
    <section
      style={{
        background: 'var(--color-surface-primary)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 8,
        padding: 16,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div>
        <h2 className="typo-heading-md" style={{ margin: 0 }}>
          상황 입력
        </h2>
        <p
          className="typo-body-sm"
          style={{ margin: '4px 0 0', color: 'var(--color-text-secondary-2)' }}
        >
          대상 지자체 — {region ? region.admin_name : '지자체 미선택'}
        </p>
      </div>

      {/* 재난유형 — ChoiceChip 5종 (name_ko + T코드 병기) */}
      <Field label="재난유형">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {HAZARDS.map((h) => (
            <Clickable
              key={h.event_code}
              onClick={() => pickHazard(h.event_code)}
              ariaLabel={`재난유형 ${h.name_ko}`}
              ariaPressed={eventCode === h.event_code}
              style={{ borderRadius: 1000 }}
            >
              <ChoiceChip
                label={`${h.name_ko} ${h.hazard_code}`}
                variant={eventCode === h.event_code ? 'fill' : 'outline'}
                selected={eventCode === h.event_code}
                state="default"
                size="md"
              />
            </Clickable>
          ))}
        </div>
      </Field>

      {/* 경보 종류 — Segment */}
      <Field label="경보 종류">
        <div
          style={{
            display: 'inline-flex',
            gap: 2,
            padding: 2,
            borderRadius: 8,
            background: 'var(--color-surface-gray-subtle)',
            alignSelf: 'flex-start',
          }}
        >
          {ALERT_KINDS.map((kind) => (
            <Clickable
              key={kind}
              onClick={() => pickKind(kind)}
              ariaLabel={`경보 종류 ${kind}`}
              ariaPressed={alertKind === kind}
            >
              <Segment
                lablel={kind}
                icon={false}
                intent={alertKind === kind ? 'primary' : 'none'}
                selected={alertKind === kind}
                state="default"
                size="sm"
              />
            </Clickable>
          ))}
        </div>
      </Field>

      {/* 경보 단계 — 경보종류·재난유형에 따라 동적 */}
      <Field label="경보 단계">
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: 2,
            padding: 2,
            borderRadius: 8,
            background: 'var(--color-surface-gray-subtle)',
            alignSelf: 'flex-start',
          }}
        >
          {levels.map((level) => (
            <Clickable
              key={level}
              onClick={() => setAlertLevel(level)}
              ariaLabel={`경보 단계 ${level}`}
              ariaPressed={alertLevel === level}
            >
              <Segment
                lablel={level}
                icon={false}
                intent={alertLevel === level ? 'primary' : 'none'}
                selected={alertLevel === level}
                state="default"
                size="sm"
              />
            </Clickable>
          ))}
        </div>
      </Field>

      {/* 발생 일시 — 기본 현재 */}
      <Field label="발생 일시">
        <DatetimeField value={onset} onChange={setOnset} />
      </Field>

      {/* 피해·통제 키워드 */}
      <Field label="피해·통제 키워드">
        <KeywordField value={keywords} onChange={setKeywords} />
      </Field>

      {/* 상황 메모 */}
      <Field label="상황 메모">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="시간당 50mm 강우 예상"
          aria-label="상황 메모"
          rows={3}
          style={{
            ...fieldBoxStyle,
            height: 'auto',
            minHeight: 72,
            padding: '8px 12px',
            borderRadius: 8,
            resize: 'vertical',
            lineHeight: 1.5,
          }}
        />
      </Field>

      {/* 적용 — 상황 확정 → event 생성·헤더 배지 반영 */}
      <Clickable
        onClick={apply}
        ariaLabel="상황 적용"
        style={{ width: '100%', borderRadius: 8 }}
      >
        <Button
          label="적용"
          variant="fill"
          color="primary"
          state="default"
          size="lg"
          leftIcon={false}
          rightIcon={false}
          style={{ width: '100%' }}
        />
      </Clickable>

      {/* 현재 적용된 상황 표시 */}
      {state.event && (
        <p
          className="typo-body-sm"
          style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
        >
          적용 사건 ID — {state.event.event_id}
        </p>
      )}
    </section>
  );
}
