#!/bin/bash
# context-window-compression — emergency compress
# Usage: bash tools/emergency-compress.sh

echo "=== EMERGENCY COMPRESS ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: context-window-compression"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: emergency-compress.sh [context-window-compression]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
