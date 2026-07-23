---
name: handoff
description: 자리를 옮기기 전(회사↔집) 진행 상황을 PROGRESS.md에 기록하고 커밋하는 인계 명령. 사용자가 /handoff를 직접 실행할 때만 동작한다.
disable-model-invocation: true
---

# /handoff — 작업 인계

떠나기 전 진행 상황을 기록하고 커밋한다.

## 절차

1. 이번 세션에서 한 일·하던 일·다음 할 일을 정리해 **`PROGRESS.md`를 아래 섹션 구조로 갱신**한다
   (기존 내용을 유지·보강하되, 오래된 항목은 정리):

   - `## Last updated` — 오늘 날짜 (YYYY-MM-DD)
   - `## Current goal` — 지금 향하고 있는 목표 (1~2줄)
   - `## Done this session` — 이번 세션에서 완료한 것
   - `## In progress` — 하다 만 것 (파일·위치까지 구체적으로)
   - `## Next steps` — 다음 세션에서 이어갈 순서 (첫 항목부터 바로 실행 가능하게)
   - `## Blockers` — 막힌 것·결정 대기 사항
   - `## How to run` — 빌드·실행·테스트 명령

2. 커밋한다:
   ```
   git add -A && git commit -m "chore: handoff — <오늘 날짜> 진행 상황 기록"
   ```

3. push는 **안내만** 한다 (자동 실행 금지):
   > 원격에 올리려면 `git push` 를 실행하세요. 다음 자리에서는 `git pull` 후 Claude를 시작하면 진행 상황이 자동 주입됩니다.
