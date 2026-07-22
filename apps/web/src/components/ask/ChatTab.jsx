/**
 * ChatTab — 챗봇 대화 탭(모듈⑥, /api/chat SSE·mock 분기는 api/client.js 단일 구현 사용).
 *
 * - 대화 목록: state.chatMessages(user/assistant 말풍선), 자동 스크롤
 * - 전송: history=[{role,content}] + event 전달, onDelta 스트리밍 갱신(updateLastChatMessage)
 * - mock: onMock 완성 응답 + "mock 응답" Badge + notice 문구 + excerpts 출처 표기
 */
import { useEffect, useRef, useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import { chat } from '../../api/client.js';
import Button from '../../ds/components/actions/Button.jsx';
import Badge from '../../ds/components/display/Badge.jsx';
import Spinner from '../../ds/components/feedback/Spinner.jsx';
import { citeLoc, truncate } from './askUtils.js';

export default function ChatTab() {
  const { state, actions } = useAppState();
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);

  // 새 메시지·스트리밍 갱신 시 하단 자동 스크롤
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [state.chatMessages]);

  const submit = async () => {
    if (sending) return;
    const q = input.trim();
    if (!q) {
      actions.showToast('info', '질의 입력 필요');
      return;
    }
    // history: 전송 이전까지의 완결 메시지만 [{role, content}]로 구성
    const history = state.chatMessages
      .filter((m) => !m.streaming && m.content)
      .map((m) => ({ role: m.role, content: m.content }));

    setInput('');
    setSending(true);
    actions.addChatMessage({ role: 'user', content: q });
    actions.addChatMessage({ role: 'assistant', content: '', streaming: true });
    try {
      await chat({
        query: q,
        history,
        event: state.event,
        onDelta: (_delta, fullText) => {
          actions.updateLastChatMessage({ content: fullText });
        },
        onMock: (data) => {
          actions.updateLastChatMessage({
            content: data?.answer || '',
            mode: 'mock',
            notice: data?.notice || 'UNI RAG 미연결 mock 응답',
            excerpts: Array.isArray(data?.excerpts) ? data.excerpts : [],
            streaming: false,
          });
        },
        onDone: ({ mode }) => {
          actions.updateLastChatMessage({ streaming: false, mode });
        },
      });
    } catch (err) {
      actions.updateLastChatMessage({
        content: '응답 수신 실패',
        streaming: false,
        error: true,
      });
      actions.showToast('error', err?.detail || err?.message || '챗봇 응답 실패');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ask-body">
      <div className="ask-chatlist" ref={listRef} aria-live="polite">
        {state.chatMessages.length === 0 && (
          <p
            className="typo-body-sm"
            style={{ margin: 0, color: 'var(--color-text-secondary-2)' }}
          >
            대화 기록 없음 — 하단 입력창에서 질의 전송
          </p>
        )}
        {state.chatMessages.map((m, i) => (
          <div
            key={i}
            className={`ask-bubble ${
              m.role === 'user' ? 'ask-bubble-user' : 'ask-bubble-assistant'
            }`}
          >
            {m.role === 'assistant' && m.mode === 'mock' && (
              <div className="ask-bubble-meta">
                {/* DS Badge 변형은 mode=light·size md/lg/xl만 존재 — light·md 고정 */}
                <Badge
                  label="mock 응답"
                  variant="outline"
                  color="warning"
                  size="md"
                  leftIcon={false}
                  mode="light"
                />
                {m.notice && (
                  <span
                    className="typo-body-sm"
                    style={{ color: 'var(--color-text-helper)' }}
                  >
                    {m.notice}
                  </span>
                )}
              </div>
            )}
            {m.streaming && !m.content ? (
              <div className="ask-loading" style={{ padding: 0 }}>
                <Spinner size="sm" />
                <span className="typo-body-sm">응답 생성 중</span>
              </div>
            ) : (
              <p
                className="ask-bubble-text typo-body-md"
                style={m.error ? { color: 'var(--color-text-error)' } : undefined}
              >
                {m.content}
              </p>
            )}
            {m.role === 'assistant' && Array.isArray(m.excerpts) && m.excerpts.length > 0 && (
              <ol className="ask-bubble-excerpts typo-body-sm">
                {m.excerpts.map((ex, j) => (
                  <li key={ex.passage_id || j}>
                    {citeLoc(ex)}
                    {ex.quote ? ` — ${truncate(ex.quote, 40)}` : ''}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="ask-inputrow" style={{ borderTop: '1px solid var(--color-border-muted)' }}>
        <input
          className="ask-input"
          type="text"
          value={input}
          placeholder="챗봇 질의 입력"
          aria-label="챗봇 질의 입력"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) submit();
          }}
        />
        <button
          type="button"
          className="ask-pressable"
          disabled={sending}
          aria-label="챗봇 질의 전송"
          onClick={submit}
        >
          <Button
            label="전송"
            variant="fill"
            color="primary"
            size="md"
            leftIcon={false}
            rightIcon={false}
            state={sending ? 'disabled' : 'default'}
          />
        </button>
      </div>
    </div>
  );
}
