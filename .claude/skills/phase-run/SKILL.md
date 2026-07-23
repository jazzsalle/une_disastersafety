---
name: phase-run
description: /phase-run N 또는 "Phase N 실행" 요청 시 호출. planner→generator(병렬)→evaluator 사이클로 해당 Phase를 오케스트레이션한다.
allowed-tools: Read, Edit, Write, Bash(git *), Task
---

# /phase-run N — Phase 오케스트레이션

사용자가 `/phase-run N`(또는 "Phase N 실행")을 요청하면 **메인 세션이 직접** 아래 사이클을 오케스트레이션한다.
N은 `CLAUDE.md`의 "## Phase" 섹션에 정의된 Phase 번호다.

## 절차

### a) 분해 (planner)
`@planner` subagent를 Task 도구로 호출해 Phase N을 태스크로 분해한다.
프롬프트에 Phase N의 목표·산출물(CLAUDE.md 기준)을 포함한다.

### b) 병렬 디스패치 (generator)
planner 출력의 태스크 목록을 실행한다:
- `[PARALLEL]` 표기 태스크들 → 각각 `@generator`를 **Task 도구로 동시에**(한 메시지에 여러 Task 호출) 띄워 병렬 처리한다.
- `[AFTER: X]` 표기 태스크 → 선행 태스크 X 완료 후 순차 실행한다.
- 병렬화는 generator 내부가 아니라 **phase-run에서 Task를 여러 개 띄우는 방식**으로 한다.
- 각 generator 프롬프트에는 해당 태스크의 목표·대상 파일·완료 기준을 그대로 전달한다.

### c) 검증 (evaluator)
모든 태스크 완료 후 `@evaluator`를 호출해 `evaluation_criteria.md`의 Phase N 체크리스트로 채점한다.

### d) FAIL 시 재시도
- evaluator의 **거절 노트를 generator에 그대로 전달**해 수정시킨다.
- 수정 후 다시 c) 검증. **최대 3회 반복.**
- 3회 후에도 FAIL이면 멈추고 사용자에게 미달 항목과 시도 내역을 보고한다.

### e) PASS 시 마무리 ★
1. **`PROGRESS.md`를 갱신한다** (핸드오프 장치와의 연결선 — 반드시 수행):
   - `Last updated`: 오늘 날짜
   - `Done this session`: 이번 Phase에서 완료한 내용
   - `Next steps`: 다음 Phase(또는 남은 작업)
2. "Phase N 완료"를 선언한다.
3. 커밋 메시지를 제안한다 (`git add` 대상 포함). **자동 push는 하지 않는다.**
