---
name: resume-work
description: "이어서", "계속", "resume", "어디까지 했지" 등 이전 작업을 이어가려는 요청 시 호출. PROGRESS.md와 git 상태를 읽어 기록된 Next steps부터 재개한다. (SessionStart hook이 비었거나 실패했을 때의 수동 폴백)
---

# /resume-work — 작업 재개

이전 세션의 진행 상황을 복원해 이어서 작업한다.

## 절차

1. 진행 기록을 읽는다:

!`cat PROGRESS.md`

2. git 상태를 확인한다:

!`git branch --show-current && git log --oneline -5 && git status --short`

3. 위 내용을 바탕으로:
   - `PROGRESS.md`의 **Current goal / In progress / Next steps / Blockers**를 1~3줄로 요약해 사용자에게 보여준다.
   - 미커밋 변경이 있으면 함께 알린다.
   - **기록된 Next steps의 첫 항목부터** 이어서 작업을 시작한다. Next steps가 `/phase-run N`이면 phase-run 스킬 절차를 따른다.
   - PROGRESS.md가 없거나 비어 있으면, git 로그와 CLAUDE.md의 Phase 정의로 현재 위치를 추정해 사용자에게 확인받는다.
