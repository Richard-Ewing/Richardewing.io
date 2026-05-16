#!/bin/bash
# Retry Inflation Control — Kill Retry Loop
# Usage: bash tools/kill-retry-loop.sh

echo "=== RETRY LOOP TERMINATION ==="
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) RETRY_LOOP_KILLED" >> .claude/governance-audit.log
echo "Retry loop terminated. Agent must:"
echo "  1. Stop current task"
echo "  2. Report failure to human"
echo "  3. Wait for new instructions"
echo "  4. Do NOT retry the same approach"