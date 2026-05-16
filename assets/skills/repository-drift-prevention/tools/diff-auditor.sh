#!/bin/bash
# Repository Drift Prevention — Diff Size Auditor
# Usage: bash tools/diff-auditor.sh [max_lines]

MAX=${1:-200}
echo "=== DIFF SIZE AUDIT ==="
LINES=$(git diff --stat 2>/dev/null | tail -1 | grep -oP '\d+' | head -1)
echo "Lines changed: ${LINES:-0}"
if [ "${LINES:-0}" -gt "$MAX" ]; then
  echo "ALERT: Diff exceeds $MAX lines. Human review required."
  exit 1
fi
echo "✓ Diff size within limits."