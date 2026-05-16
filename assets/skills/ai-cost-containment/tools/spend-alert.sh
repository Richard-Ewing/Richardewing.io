#!/bin/bash
# ai-cost-containment — spend alert
# Usage: bash tools/spend-alert.sh

echo "=== SPEND ALERT ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: ai-cost-containment"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: spend-alert.sh [ai-cost-containment]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
