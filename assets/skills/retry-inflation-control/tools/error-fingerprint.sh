#!/bin/bash
# Retry Inflation Control — Error Fingerprint Comparison
# Usage: bash tools/error-fingerprint.sh "error message text"

ERROR_MSG="$1"
FINGERPRINT_FILE=".claude/error-fingerprints.log"
mkdir -p "$(dirname "$FINGERPRINT_FILE")"
touch "$FINGERPRINT_FILE"

HASH=$(echo "$ERROR_MSG" | md5sum | cut -d' ' -f1)
echo "Error fingerprint: $HASH"

COUNT=$(grep -c "$HASH" "$FINGERPRINT_FILE" 2>/dev/null || echo 0)
echo "$HASH $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$FINGERPRINT_FILE"

if [ "$COUNT" -ge 3 ]; then
  echo "HALT: Error fingerprint seen $COUNT times. Recursive loop detected."
  exit 1
elif [ "$COUNT" -ge 1 ]; then
  echo "WARNING: Error fingerprint seen $COUNT times. Consider context wipe."
else
  echo "OK: New error pattern."
fi