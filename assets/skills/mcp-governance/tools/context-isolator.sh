#!/bin/bash
# mcp-governance — context isolator
# Usage: bash tools/context-isolator.sh

echo "=== CONTEXT ISOLATOR ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: mcp-governance"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: context-isolator.sh [mcp-governance]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
