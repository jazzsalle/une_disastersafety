/**
 * App — 전역 상태 Provider + 3열 레이아웃 조립(고정 — 패널 태스크는 수정 금지).
 *
 * 구조: AppHeader(상단) / 좌 300px SituationPanel / 중 유동(min 480px)
 *       MapViewer(상단)+AskChatPanel(하단) / 우 400px RightTabs.
 * 1280px 미만에서 우측 열은 하단 전폭 스택(app.css @media).
 * 패널 교체는 각 스텁 파일(components/**)만 대상 — 사용 계약은 스텁 상단 주석 참조.
 */
import { AppStateProvider } from './state/AppState.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppToast from './components/AppToast.jsx';
import SituationPanel from './components/situation/SituationPanel.jsx';
import MapViewer from './components/map/MapViewer.jsx';
import AskChatPanel from './components/ask/AskChatPanel.jsx';
import RightTabs from './components/right/RightTabs.jsx';
import './app.css';

export default function App() {
  return (
    <AppStateProvider>
      <div className="app-shell">
        <header className="app-header">
          <AppHeader />
        </header>
        <main className="app-main">
          <aside className="app-col-left">
            <SituationPanel />
          </aside>
          <section className="app-col-center">
            <div className="app-map">
              <MapViewer />
            </div>
            <div className="app-chat">
              <AskChatPanel />
            </div>
          </section>
          <aside className="app-col-right">
            <RightTabs />
          </aside>
        </main>
        <AppToast />
      </div>
    </AppStateProvider>
  );
}
