#!/bin/bash
# Runtime Governance — Audit Log Entry
# Usage: bash tools/audit-log.sh "action description"

LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) $1" >> "$LOG_FILE"
echo "Logged: $1"