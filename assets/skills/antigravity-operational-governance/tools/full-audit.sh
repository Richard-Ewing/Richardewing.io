#!/bin/bash
# full-audit.sh — Audit all governance skills for file completeness
# Part of: Antigravity Operational Governance Skill

SKILLS_DIR="${1:-assets/skills}"
REQUIRED_FILES=("CLAUDE.md" "README.md" "GETTING-STARTED.md" "policy.yaml" "middleware.ts" "architecture.mmd" "financial-model.csv")
MIN_TOOLS=4
PASS=0
FAIL=0
TOTAL=0

echo "============================================"
echo "ANTIGRAVITY FULL SKILL AUDIT"
echo "============================================"
echo ""

for dir in "$SKILLS_DIR"/*/; do
    slug=$(basename "$dir")
    # Skip non-skill directories
    [[ "$slug" == "ai-economics" || "$slug" == "hallucination-debt" ]] && continue
    
    TOTAL=$((TOTAL + 1))
    missing=()
    
    for f in "${REQUIRED_FILES[@]}"; do
        if [ ! -f "$dir$f" ]; then
            missing+=("$f")
        fi
    done
    
    tool_count=$(find "$dir/tools/" -name "*.sh" 2>/dev/null | wc -l)
    if [ "$tool_count" -lt "$MIN_TOOLS" ]; then
        missing+=("tools (only $tool_count, need $MIN_TOOLS)")
    fi
    
    if [ ${#missing[@]} -eq 0 ]; then
        echo "  ✓ PASS | $slug"
        PASS=$((PASS + 1))
    else
        echo "  ✗ FAIL | $slug | Missing: ${missing[*]}"
        FAIL=$((FAIL + 1))
    fi
done

echo ""
echo "============================================"
echo "RESULTS: $PASS/$TOTAL passed, $FAIL failed"
echo "============================================"

if [ "$FAIL" -gt 0 ]; then
    echo "ACTION REQUIRED: Complete missing files before shipping."
    exit 1
fi
