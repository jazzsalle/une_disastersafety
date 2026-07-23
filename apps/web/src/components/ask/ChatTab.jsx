/**
 * ChatTab — 챗봇 대화 탭(모듈⑥, /api/chat SSE·mock 분기는 api/client.js 단일 구현 사용).
 *
 * AI Agent 인터랙션(chatAgent.js):
 * - 지도 선택 POI(지구·하천) 칩 표시 + 질의에 poi 자동 첨부(백엔드가 속성정보 병합)
 * - 응답 텍스트 속 지구·하천명 → 클릭 시 지도 이동·상세조회(splitByEntities)
 * - 후속 질문 제안 칩(suggestionsFor) — 클릭 즉시 질의
 * - 자연어 지도 명령("남원으로 이동", "안양천지구 보여줘") → parseMapCommand로
 *   LLM 호출 없이 지도 조작 + 확인 메시지
 * - 대화 목록: state.chatMessages(user/assistant 말풍선), 자동 스크롤
 * - mock: onMock 완성 응답 + "mock 응답" Badge + notice 문구 + excerpts 출처 표기
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAppState } from '../../state/AppState.jsx';
import { chat, districts, rivers } from '../../api/client.js';
import { requireLogin } from '../auth/LoginGate.jsx';
import {
  buildEntities,
  parseMapCommand,
  splitByEntities,
  suggestionsFor,
} from './chatAgent.js';
import Button from '../../ds/components/actions/Button.jsx';
import Badge from '../../ds/components/display/Badge.jsx';
import Spinner from '../../ds/components/feedback/Spinner.jsx';
import Icon from '../../ds/assets/icons/Icon.jsx';
import { citeLoc, truncate } from './askUtils.js';

export default function ChatTab() {
  const { state, actions } = useAppState();
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [entities, setEntities] = useState([]);
  const listRef = useRef(null);

  // 지구·하천 엔티티 목록(전 지자체) — POI 칩·지명 링크·명령 파서 공용
  useEffect(() => {
    let alive = true;
    Promise.all([districts(), rivers()])
      .then(([d, r]) => {
        if (alive) setEntities(buildEntities(d?.districts, r?.rivers));
      })
      .catch(() => {}); // 목록 실패 시 부가기능만 비활성(챗봇 자체는 동작)
    return () => {
      alive = false;
    };
  }, []);

  // 지도에서 선택된 POI(지구 우선 — reducer가 상호 배타 보장)
  const selectedEntity = useMemo(() => {
    if (state.selectedDistrictId) {
      return entities.find(
        (e) => e.type === 'district' && e.id === state.selectedDistrictId,
      );
    }
    if (state.selectedRiverId) {
      return entities.find((e) => e.type === 'river' && e.id === state.selectedRiverId);
    }
    return undefined;
  }, [entities, state.selectedDistrictId, state.selectedRiverId]);

  const hasResponse = state.chatMessages.some(
    (m) => m.role === 'assistant' && !m.streaming && m.content,
  );
  const suggestions = sending ? [] : suggestionsFor(selectedEntity, hasResponse);

  // 새 메시지·스트리밍 갱신 시 하단 자동 스크롤
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [state.chatMessages]);

  /** 지명 클릭·명령 공용 — 지도 이동 + 상세조회 열기(타 지자체면 전환 포함) */
  const goToEntity = (entity) => {
    if (!entity) return;
    if (entity.admin && entity.admin !== state.adminCode) {
      actions.setAdminCode(entity.admin);
    }
    if (entity.type === 'river') actions.selectRiver(entity.id);
    else actions.selectDistrict(entity.id);
    actions.setRightTab('detail');
  };

  const clearPoi = () => {
    if (state.selectedDistrictId) actions.selectDistrict(null);
    if (state.selectedRiverId) actions.selectRiver(null);
  };

  const submit = async (textArg) => {
    if (sending) return;
    const q = (typeof textArg === 'string' ? textArg : input).trim();
    if (!q) {
      actions.showToast('info', '질의 입력 필요');
      return;
    }

    // 자연어 지도 명령 — LLM 호출 없이 즉시 실행(오인식 방지: 동사+대상명 필수)
    const cmd = parseMapCommand(q, entities);
    if (cmd) {
      setInput('');
      actions.addChatMessage({ role: 'user', content: q });
      let confirm;
      if (cmd.kind === 'region') {
        actions.setAdminCode(cmd.region.admin_code);
        confirm = `${cmd.region.admin_name}로 지도를 이동했습니다.`;
      } else {
        goToEntity(cmd.entity);
        confirm = `${cmd.entity.name} 위치로 지도를 이동하고 상세조회를 열었습니다.`;
      }
      actions.addChatMessage({ role: 'assistant', content: confirm, mode: 'agent' });
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
        poi: selectedEntity ? { type: selectedEntity.type, id: selectedEntity.id } : null,
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
        onDone: ({ mode, text, excerpts }) => {
          actions.updateLastChatMessage({
            streaming: false,
            mode,
            ...(text ? { content: text } : {}),
            ...(excerpts?.length ? { excerpts } : {}),
          });
        },
      });
    } catch (err) {
      if (err?.status === 401) {
        // 세션 만료 — 로그인 게이트로 복귀
        actions.updateLastChatMessage({
          content: '세션이 만료되었습니다. 다시 로그인해 주세요',
          streaming: false,
          error: true,
        });
        requireLogin();
        return;
      }
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
                {m.role === 'assistant' && !m.streaming && !m.error && entities.length
                  ? splitByEntities(m.content, entities).map((part, k) =>
                      part.entity ? (
                        <button
                          key={k}
                          type="button"
                          className="ask-entitylink"
                          title={`${part.entity.name} — 지도에서 보기`}
                          onClick={() => goToEntity(part.entity)}
                        >
                          {part.text}
                        </button>
                      ) : (
                        <span key={k}>{part.text}</span>
                      ),
                    )
                  : m.content}
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

      {(selectedEntity || suggestions.length > 0) && (
        <div className="ask-agentbar">
          {selectedEntity && (
            <span className="ask-poichip" title="지도에서 선택된 POI — 질의에 속성정보 자동 첨부">
              <Icon
                name="위치_Line"
                size={14}
                style={{ color: 'var(--color-light-blue-500)', flexShrink: 0 }}
              />
              <span className="typo-body-sm">
                {selectedEntity.name}
                {selectedEntity.kind ? ` · ${selectedEntity.kind}` : ''}
              </span>
              <button
                type="button"
                className="ask-poichip-clear"
                aria-label="POI 선택 해제"
                onClick={clearPoi}
              >
                <Icon name="닫기" size={12} />
              </button>
            </span>
          )}
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              className="ask-suggestchip typo-body-sm"
              onClick={() => submit(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

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
