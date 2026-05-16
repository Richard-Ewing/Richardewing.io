#!/bin/bash
# Runtime Governance — Command Validator
# Usage: bash tools/command-validator.sh "command to validate"

CMD="$1"
echo "=== COMMAND VALIDATION ==="
echo "Command: $CMD"

# Blacklist check
BLACKLIST="rm -rf|DROP TABLE|FORMAT|curl |wget |ssh |scp |chmod 777"
if echo "$CMD" | grep -qiE "$BLACKLIST"; then
  echo "BLOCKED: Command matches blacklist pattern."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) BLOCKED: $CMD" >> .claude/governance-audit.log
  exit 1
fi

# Whitelist check
WHITELIST="^(cat|ls|pwd|echo|grep|find|head|tail|wc|diff|git status|git log|git diff)"
if echo "$CMD" | grep -qE "$WHITELIST"; then
  echo "APPROVED: Command is whitelisted (safe read-only)."
  exit 0
fi

# Restricted check
RESTRICTED="^(npm|npx|git|node|python|pip)"
if echo "$CMD" | grep -qE "$RESTRICTED"; then
  echo "RESTRICTED: Command requires explicit approval."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) RESTRICTED: $CMD" >> .claude/governance-audit.log
  exit 2
fi

echo "UNKNOWN: Command not classified. Routing to human approval."
exit 2