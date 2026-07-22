/**
 * 전역 상태 — React Context + useReducer (고정 인터페이스, T3~T6 패널 공용).
 *
 * 상태 구조(initialState 참조):
 * - theme              : "light" | "dark" — Provider가 <html data-theme>에 반영
 * - adminCode          : 선택 지자체 행정코드("41430" 기본)
 * - event              : 현재 상황(Event 객체, api/models.js buildEvent 산출) | null
 * - askResponse        : POST /api/ask 응답 전체 | null
 * - askLoading         : ask 호출 중 여부
 * - selectedPassageId  : 선택 근거 청크 passage_id | null
 * - selectedDistrictId : 선택 위험지구 id | null
 * - selectedRiverId    : 선택 하천 id | null
 * - rightTab           : "topk" | "detail" | "criteria"
 * - mapHighlight       : {type:"district"|"river"|"passage", id} | null
 * - chatMessages       : [{role:"user"|"assistant", content, mode?, excerpts?, streaming?}]
 * - toast              : {kind:"info"|"error"|"success", message} | null
 *
 * 사용법(각 패널):
 *   const { state, actions } = useAppState();
 *   actions.setRightTab("detail"); actions.selectDistrict("DST-...");
 *
 * 액션(모두 actions.*로 바인딩 제공 — 패널은 dispatch 직접 호출 불필요):
 *   setTheme(theme) / toggleTheme()
 *   setAdminCode(adminCode)              — 지자체 변경(선택·하이라이트 초기화 포함)
 *   setEvent(event)                      — 상황 확정(상황입력 패널)
 *   askStart() / askSuccess(response) / askError(message)
 *   selectPassage(id) / selectDistrict(id) / selectRiver(id)  — 지도 하이라이트 동기
 *   setRightTab(tab)
 *   setMapHighlight(highlight|null)
 *   addChatMessage(message) / updateLastChatMessage(patch) / resetChat()
 *   showToast(kind, message) / clearToast()
 */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { findHazard, findRegion } from '../api/models.js';

// ── 초기 상태 ────────────────────────────────────────────────────────

export const initialState = {
  theme: 'light',
  adminCode: '41430',
  event: null,
  askResponse: null,
  askLoading: false,
  selectedPassageId: null,
  selectedDistrictId: null,
  selectedRiverId: null,
  rightTab: 'topk',
  mapHighlight: null,
  chatMessages: [],
  toast: null,
};

// ── 액션 타입 ────────────────────────────────────────────────────────

export const ActionTypes = {
  SET_THEME: 'SET_THEME',
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_ADMIN_CODE: 'SET_ADMIN_CODE',
  SET_EVENT: 'SET_EVENT',
  ASK_START: 'ASK_START',
  ASK_SUCCESS: 'ASK_SUCCESS',
  ASK_ERROR: 'ASK_ERROR',
  SELECT_PASSAGE: 'SELECT_PASSAGE',
  SELECT_DISTRICT: 'SELECT_DISTRICT',
  SELECT_RIVER: 'SELECT_RIVER',
  SET_RIGHT_TAB: 'SET_RIGHT_TAB',
  SET_MAP_HIGHLIGHT: 'SET_MAP_HIGHLIGHT',
  ADD_CHAT_MESSAGE: 'ADD_CHAT_MESSAGE',
  UPDATE_LAST_CHAT_MESSAGE: 'UPDATE_LAST_CHAT_MESSAGE',
  RESET_CHAT: 'RESET_CHAT',
  SHOW_TOAST: 'SHOW_TOAST',
  CLEAR_TOAST: 'CLEAR_TOAST',
};

// ── 리듀서 ───────────────────────────────────────────────────────────

export function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.theme === 'dark' ? 'dark' : 'light' };
    case ActionTypes.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case ActionTypes.SET_ADMIN_CODE:
      // 지자체 변경 시 선택·하이라이트 초기화(다른 지자체 잔상 방지)
      return {
        ...state,
        adminCode: action.adminCode,
        selectedPassageId: null,
        selectedDistrictId: null,
        selectedRiverId: null,
        mapHighlight: null,
      };
    case ActionTypes.SET_EVENT:
      return { ...state, event: action.event };
    case ActionTypes.ASK_START:
      return { ...state, askLoading: true };
    case ActionTypes.ASK_SUCCESS:
      return {
        ...state,
        askLoading: false,
        askResponse: action.response,
        rightTab: 'topk', // 응답 도착 시 유사사례 탭으로 전환
        selectedPassageId: null,
      };
    case ActionTypes.ASK_ERROR:
      return {
        ...state,
        askLoading: false,
        toast: { kind: 'error', message: action.message || 'RAG 응답 실패' },
      };
    case ActionTypes.SELECT_PASSAGE:
      return {
        ...state,
        selectedPassageId: action.id,
        mapHighlight: action.id ? { type: 'passage', id: action.id } : null,
      };
    case ActionTypes.SELECT_DISTRICT:
      return {
        ...state,
        selectedDistrictId: action.id,
        selectedRiverId: null,
        mapHighlight: action.id ? { type: 'district', id: action.id } : null,
      };
    case ActionTypes.SELECT_RIVER:
      return {
        ...state,
        selectedRiverId: action.id,
        selectedDistrictId: null,
        mapHighlight: action.id ? { type: 'river', id: action.id } : null,
      };
    case ActionTypes.SET_RIGHT_TAB:
      return { ...state, rightTab: action.tab };
    case ActionTypes.SET_MAP_HIGHLIGHT:
      return { ...state, mapHighlight: action.highlight || null };
    case ActionTypes.ADD_CHAT_MESSAGE:
      return { ...state, chatMessages: [...state.chatMessages, action.message] };
    case ActionTypes.UPDATE_LAST_CHAT_MESSAGE: {
      if (state.chatMessages.length === 0) return state;
      const msgs = state.chatMessages.slice();
      msgs[msgs.length - 1] = { ...msgs[msgs.length - 1], ...action.patch };
      return { ...state, chatMessages: msgs };
    }
    case ActionTypes.RESET_CHAT:
      return { ...state, chatMessages: [] };
    case ActionTypes.SHOW_TOAST:
      return { ...state, toast: { kind: action.kind || 'info', message: action.message } };
    case ActionTypes.CLEAR_TOAST:
      return { ...state, toast: null };
    default:
      return state;
  }
}

// ── 셀렉터 (state → 파생값) ──────────────────────────────────────────

/** 현재 event의 재난 항목({event_code, hazard_code, name_ko}) | undefined */
export const selectHazard = (state) =>
  findHazard(state.event?.hazard_event_code || state.event?.hazard_code);

/** 현재 adminCode의 지자체 항목({admin_code, admin_name, short_name}) | undefined */
export const selectRegion = (state) => findRegion(state.adminCode);

/** ask 응답의 유사사례 Top-K 결과 배열(없으면 []) */
export const selectTopKResults = (state) => state.askResponse?.top_k_results ?? [];

/** ask 응답의 citations 배열(없으면 []) */
export const selectCitations = (state) => state.askResponse?.citations ?? [];

/** ask 응답의 정형 참조 {districts, rivers, criteria} (없으면 빈 배열) */
export const selectStructuredRefs = (state) =>
  state.askResponse?.structured_refs ?? { districts: [], rivers: [], criteria: [] };

/** ask 응답의 지리 참조 FeatureCollection (없으면 빈 컬렉션) */
export const selectGeoRefs = (state) =>
  state.askResponse?.geo_refs ?? { type: 'FeatureCollection', features: [] };

/** selectedPassageId에 해당하는 Top-K 결과 1건 | undefined */
export const selectSelectedResult = (state) =>
  selectTopKResults(state).find(
    (r) => r?.passage?.passage_id === state.selectedPassageId,
  );

// ── Context·Provider·훅 ──────────────────────────────────────────────

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 테마 → <html data-theme> 반영(fig-tokens.css :root[data-theme="dark"] 셀렉터)
  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);

  const actions = useMemo(
    () => ({
      setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, theme }),
      toggleTheme: () => dispatch({ type: ActionTypes.TOGGLE_THEME }),
      setAdminCode: (adminCode) =>
        dispatch({ type: ActionTypes.SET_ADMIN_CODE, adminCode }),
      setEvent: (event) => dispatch({ type: ActionTypes.SET_EVENT, event }),
      askStart: () => dispatch({ type: ActionTypes.ASK_START }),
      askSuccess: (response) =>
        dispatch({ type: ActionTypes.ASK_SUCCESS, response }),
      askError: (message) => dispatch({ type: ActionTypes.ASK_ERROR, message }),
      selectPassage: (id) => dispatch({ type: ActionTypes.SELECT_PASSAGE, id }),
      selectDistrict: (id) => dispatch({ type: ActionTypes.SELECT_DISTRICT, id }),
      selectRiver: (id) => dispatch({ type: ActionTypes.SELECT_RIVER, id }),
      setRightTab: (tab) => dispatch({ type: ActionTypes.SET_RIGHT_TAB, tab }),
      setMapHighlight: (highlight) =>
        dispatch({ type: ActionTypes.SET_MAP_HIGHLIGHT, highlight }),
      addChatMessage: (message) =>
        dispatch({ type: ActionTypes.ADD_CHAT_MESSAGE, message }),
      updateLastChatMessage: (patch) =>
        dispatch({ type: ActionTypes.UPDATE_LAST_CHAT_MESSAGE, patch }),
      resetChat: () => dispatch({ type: ActionTypes.RESET_CHAT }),
      showToast: (kind, message) =>
        dispatch({ type: ActionTypes.SHOW_TOAST, kind, message }),
      clearToast: () => dispatch({ type: ActionTypes.CLEAR_TOAST }),
    }),
    [dispatch],
  );

  const value = useMemo(() => ({ state, actions, dispatch }), [state, actions]);
  return (
    <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
  );
}

/**
 * 전역 상태 훅 — Provider 외부 호출 시 명시적 오류.
 * @returns {{state: typeof initialState, actions: Object, dispatch: Function}}
 */
export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error('useAppState는 AppStateProvider 내부에서만 사용할 수 있습니다');
  }
  return ctx;
}
