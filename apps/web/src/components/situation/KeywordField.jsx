/**
 * KeywordField — 피해·통제 키워드 입력 (T3 소유).
 *
 * 선택 키워드: DS InputChip(클릭 시 삭제) / 프리셋 제안: DS ActionChip(클릭 시 추가)
 * 자유 입력: 네이티브 input(Enter·플러스 버튼으로 추가).
 * props: { value: string[], onChange(string[]) }
 */
import { useState } from 'react';
import { InputChip } from '../../ds/components/display/InputChip.jsx';
import { ActionChip } from '../../ds/components/display/ActionChip.jsx';
import Icon from '../../ds/assets/icons/Icon.jsx';
import { Clickable, fieldBoxStyle } from './controls.jsx';

/** 사업수행계획서 예시 키워드 프리셋 */
export const KEYWORD_PRESETS = [
  '침수',
  '지하차도',
  '하수 역류',
  '차량고립',
  '반지하',
];

export default function KeywordField({ value, onChange }) {
  const [draft, setDraft] = useState('');

  const add = (raw) => {
    const kw = String(raw).trim();
    if (!kw || value.includes(kw)) return;
    onChange([...value, kw]);
  };

  const remove = (kw) => onChange(value.filter((v) => v !== kw));

  const submitDraft = () => {
    add(draft);
    setDraft('');
  };

  const remainingPresets = KEYWORD_PRESETS.filter((p) => !value.includes(p));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* 선택된 키워드 — 클릭 시 삭제 */}
      {value.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {value.map((kw) => (
            <Clickable
              key={kw}
              onClick={() => remove(kw)}
              title="키워드 삭제"
              ariaLabel={`키워드 삭제 ${kw}`}
              style={{ borderRadius: 1000 }}
            >
              <InputChip label={kw} leftIcon={false} variant="fill" size="sm" />
            </Clickable>
          ))}
        </div>
      )}

      {/* 프리셋 제안 — 클릭 시 추가 */}
      {remainingPresets.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {remainingPresets.map((kw) => (
            <Clickable
              key={kw}
              onClick={() => add(kw)}
              title="키워드 추가"
              ariaLabel={`키워드 추가 ${kw}`}
              style={{ borderRadius: 1000 }}
            >
              <ActionChip
                label={kw}
                variant="outline"
                color="grayscale"
                size="sm"
              />
            </Clickable>
          ))}
        </div>
      )}

      {/* 자유 입력 */}
      <div style={{ display: 'flex', gap: 6 }}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              e.preventDefault();
              submitDraft();
            }
          }}
          placeholder="키워드 입력"
          aria-label="키워드 입력"
          style={{ ...fieldBoxStyle, flex: 1, minWidth: 0 }}
        />
        <Clickable
          onClick={submitDraft}
          title="키워드 추가"
          ariaLabel="키워드 추가"
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            borderRadius: 4,
            border: '1px solid var(--color-border-default)',
            background: 'var(--color-surface-primary)',
            flexShrink: 0,
          }}
        >
          <Icon
            name="플러스"
            size={16}
            style={{ color: 'var(--color-text-secondary)' }}
          />
        </Clickable>
      </div>
    </div>
  );
}
