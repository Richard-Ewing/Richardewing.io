#!/bin/bash
# Context Rot Prevention — Context Health Check
# Usage: bash tools/check-context-health.sh [session_log_file]
# Returns: context health score and recommendations

SESSION_LOG=${1:-".claude/session.log"}
echo "=== CONTEXT HEALTH CHECK ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Check session duration
if [ -f "$SESSION_LOG" ]; then
  START=$(head -1 "$SESSION_LOG" | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}')
  echo "Session start: $START"
fi

# Check for patch chains (same file modified 3+ times)
echo ""
echo "--- Patch Chain Detection ---"
git diff --stat HEAD~5 2>/dev/null | awk '{print $1}' | sort | uniq -c | sort -rn | head -5 | while read count file; do
  if [ "$count" -ge 3 ]; then
    echo "WARNING: $file modified $count times — possible recursive patch loop"
  else
    echo "OK: $file modified $count times"
  fi
done

# Check for large diffs indicating drift
echo ""
echo "--- Diff Size Analysis ---"
TOTAL_LINES=$(git diff --stat 2>/dev/null | tail -1 | grep -oP '\d+' | head -1)
echo "Total lines changed: ${TOTAL_LINES:-0}"
if [ "${TOTAL_LINES:-0}" -gt 500 ]; then
  echo "ALERT: Large diff detected. Consider checkpoint rotation."
fi

echo ""
echo "=== Health check complete ==="