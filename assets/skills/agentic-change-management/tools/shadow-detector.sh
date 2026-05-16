#!/bin/bash
# agentic-change-management — shadow detector
# Usage: bash tools/shadow-detector.sh

echo "=== SHADOW DETECTOR ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: agentic-change-management"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: shadow-detector.sh [agentic-change-management]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
