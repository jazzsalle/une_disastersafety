/**
 * AskChatPanel — 질의응답 패널(모듈⑤ 정합성 + 모듈⑥ 챗봇, docs/03_화면설계.md §2.4).
 *
 * 상단 Tab 2종 전환:
 * - "근거 응답" : /api/ask 근거 기반 응답 + ⑤정합성(Citation·요인 기여도·검증정보)
 * - "챗봇 대화" : /api/chat 스트리밍(SSE)·mock 분기 대화(api/client.js 단일 구현 사용)
 *
 * 읽는 상태: state.event·askResponse·askLoading·chatMessages
 * 호출 액션: askStart/askSuccess/askError, addChatMessage/updateLastChatMessage,
 *            selectPassage/selectDistrict/selectRiver/setRightTab, showToast
 */
import { useState } from 'react';
import Tab from '../../ds/components/navigation/Tab.jsx';
import AskAnswerTab from './AskAnswerTab.jsx';
import ChatTab from './ChatTab.jsx';
import './ask.css';

const TABS = [
  { id: 'ask', label: '근거 응답' },
  { id: 'chat', label: '챗봇 대화' },
];

export default function AskChatPanel() {
  const [tab, setTab] = useState('ask');

  return (
    <section className="ask-panel" aria-label="질의응답 패널">
      <div className="ask-tabbar" role="tablist" aria-label="질의응답 탭">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className="ask-pressable"
            onClick={() => setTab(t.id)}
          >
            <Tab
              label={t.label}
              selected={tab === t.id}
              leftIcon={false}
              badge={false}
              size="md"
              state="default"
            />
          </button>
        ))}
      </div>
      {tab === 'ask' ? <AskAnswerTab /> : <ChatTab />}
    </section>
  );
}
