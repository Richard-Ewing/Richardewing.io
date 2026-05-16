#!/bin/bash
# tool-permission-governance — path guard
# Usage: bash tools/path-guard.sh

echo "=== PATH GUARD ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: tool-permission-governance"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: path-guard.sh [tool-permission-governance]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
