#!/usr/bin/env bash
# SessionStart hook: PROGRESS.md + git 상태를 additionalContext로 주입한다.
# 내용은 명령문이 아닌 사실 진술로 구성한다. 9,000자에서 UTF-8 안전 절단.

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

CONTEXT=""

if [ -f "PROGRESS.md" ]; then
  CONTEXT+="[이전 세션 진행 기록 — PROGRESS.md 내용]
$(cat PROGRESS.md)

"
fi

if git rev-parse --git-dir >/dev/null 2>&1; then
  BRANCH=$(git branch --show-current 2>/dev/null)
  COMMITS=$(git log --oneline -5 2>/dev/null)
  DIRTY=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
  CONTEXT+="[git 상태]
현재 브랜치: ${BRANCH:-"(없음)"}
최근 커밋 5개:
${COMMITS:-"(커밋 없음)"}
미커밋 변경 파일 수: ${DIRTY}
"
fi

[ -z "$CONTEXT" ] && exit 0

# python으로 JSON 직렬화(한글 안전). 없으면 plain stdout 폴백.
# 주의: 멀티라인 `python -c`는 Windows 셔임(.bat)에서 깨질 수 있어 stdin 스크립트 방식 사용.
if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  PY=""
fi

if [ -n "$PY" ]; then
  CLAUDE_PROGRESS_CONTEXT="$CONTEXT" PYTHONIOENCODING=utf-8 "$PY" - <<'PYEOF'
import json, os, sys
text = os.environ.get("CLAUDE_PROGRESS_CONTEXT", "")
enc = text.encode("utf-8")
if len(enc) > 9000:
    text = enc[:9000].decode("utf-8", errors="ignore")
out = json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": text,
    }
}, ensure_ascii=False)
sys.stdout.buffer.write(out.encode("utf-8"))
sys.stdout.buffer.write(b"\n")
PYEOF
else
  printf '%s' "$CONTEXT" | head -c 9000
fi
