#!/bin/bash
# Context Rot Prevention — Patch Chain Detector
# Usage: bash tools/patch-chain-detector.sh [max_patches]
# Detects recursive patch loops across recent commits

MAX=${1:-3}
echo "=== PATCH CHAIN DETECTION ==="
echo "Threshold: $MAX patches to same file"
echo ""

VIOLATIONS=0
git log --oneline -20 --diff-filter=M --name-only 2>/dev/null | grep -v '^[a-f0-9]' | sort | uniq -c | sort -rn | while read count file; do
  if [ -n "$file" ] && [ "$count" -ge "$MAX" ]; then
    echo "VIOLATION: $file patched $count times in last 20 commits"
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
done

if [ "$VIOLATIONS" -eq 0 ]; then
  echo "✓ No patch chain violations detected"
fi