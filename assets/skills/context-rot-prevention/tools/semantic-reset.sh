#!/bin/bash
# Context Rot Prevention — Semantic Reset
# Usage: bash tools/semantic-reset.sh
# Emergency context purge — preserves critical state only

echo "=== SEMANTIC RESET ==="
echo "WARNING: This will purge interaction history and reload core context."
echo ""

# Preserve critical files
PRESERVE_DIR=".claude/preserved-state"
mkdir -p "$PRESERVE_DIR"

# Save current CLAUDE.md and policies
cp CLAUDE.md "$PRESERVE_DIR/" 2>/dev/null
cp .claude/skills/*/policy.yaml "$PRESERVE_DIR/" 2>/dev/null
echo "✓ Governance policies preserved"

# Save package.json and tsconfig
cp package.json "$PRESERVE_DIR/" 2>/dev/null
cp tsconfig.json "$PRESERVE_DIR/" 2>/dev/null
echo "✓ Project configuration preserved"

# Log the reset
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) SEMANTIC_RESET triggered" >> .claude/governance-audit.log
echo "✓ Reset logged to audit trail"

echo ""
echo "=== Reset complete ==="
echo "Agent should now reload context from:"
echo "  - CLAUDE.md"
echo "  - policy.yaml"
echo "  - package.json"
echo "  - Current git HEAD"