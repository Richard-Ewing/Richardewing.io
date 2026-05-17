#!/bin/bash
# contrast-check.sh — Scan TSX files for dark background contrast violations
# Part of: Antigravity Operational Governance Skill

echo "============================================"
echo "CONTRAST VIOLATION SCANNER"
echo "============================================"

VIOLATIONS=0

# Pattern 1: Dark background with gray text (the recurring problem)
echo ""
echo "Scanning for dark bg + low-contrast text..."
HITS=$(grep -rn 'bg-\[#1A1A1A\]' app/ components/ --include="*.tsx" 2>/dev/null | grep -v 'text-white\|text-zinc-100\|text-zinc-200' | grep -v 'CTA\|cta' || true)

if [ -n "$HITS" ]; then
    echo "  ✗ VIOLATIONS FOUND:"
    echo "$HITS" | while read -r line; do
        echo "    $line"
        VIOLATIONS=$((VIOLATIONS + 1))
    done
else
    echo "  ✓ No dark bg contrast violations found"
fi

# Pattern 2: Body text that's too light
echo ""
echo "Scanning for light body text on light backgrounds..."
HITS2=$(grep -rn 'text-gray-[34]00' app/ components/ --include="*.tsx" 2>/dev/null | grep -v 'bg-\[#1A1A1A\]\|bg-zinc-9\|bg-black' || true)

if [ -n "$HITS2" ]; then
    echo "  ⚠ POTENTIAL ISSUES (review manually):"
    echo "$HITS2" | head -5 | while read -r line; do
        echo "    $line"
    done
else
    echo "  ✓ No light text on light bg issues found"
fi

echo ""
echo "============================================"
if [ $VIOLATIONS -eq 0 ]; then
    echo "✓ CONTRAST CHECK PASSED"
else
    echo "✗ FIX VIOLATIONS BEFORE SHIPPING"
fi
echo "============================================"
