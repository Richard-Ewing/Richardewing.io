#!/bin/bash
# Repository Drift Prevention — Scope Checker
# Usage: bash tools/scope-checker.sh "file1.ts,file2.ts" (comma-separated allowed files)

ALLOWED="$1"
echo "=== SCOPE CHECK ==="
CHANGED=$(git diff --name-only 2>/dev/null)

for file in $CHANGED; do
  if ! echo "$ALLOWED" | grep -q "$file"; then
    echo "VIOLATION: $file modified but not in scope [$ALLOWED]"
  fi
done