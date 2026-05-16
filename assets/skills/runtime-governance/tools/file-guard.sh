#!/bin/bash
# Runtime Governance — File Guard
# Usage: bash tools/file-guard.sh "path/to/file"

FILE="$1"
echo "=== FILE GUARD CHECK ==="

PROTECTED=".env|.env.*|*.key|*.pem|config/production|docker-compose.prod"
if echo "$FILE" | grep -qE "$PROTECTED"; then
  echo "BLOCKED: $FILE is a protected file."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) FILE_BLOCKED: $FILE" >> .claude/governance-audit.log
  exit 1
fi
echo "OK: $FILE is not protected."