#!/bin/bash
# content-saturation-check.sh — Verify content saturation across all surfaces
# Part of: Antigravity Operational Governance Skill

SKILLS_DATA="${1:-lib/content/skills.ts}"
SITEMAP="${2:-app/sitemap.ts}"
LLMS_TXT="${3:-app/llms.txt/route.ts}"

echo "============================================"
echo "CONTENT SATURATION VERIFICATION"
echo "============================================"
echo ""

PASS=0
FAIL=0

# CHECK 1: Data parity
echo "--- CHECK 1: DATA PARITY ---"

FAILURE_COUNT=$(grep -c 'slug:' "$SKILLS_DATA" 2>/dev/null | head -1)
echo "  Total slug entries in skills.ts: $FAILURE_COUNT"

# Count ecosystemPainQuotes
QUOTES=$(grep -c 'ecosystemPainQuotes' "$SKILLS_DATA" 2>/dev/null || echo "0")
echo "  Skills with ecosystemPainQuotes: $QUOTES"

FAQS=$(grep -c 'faqs:' "$SKILLS_DATA" 2>/dev/null || echo "0")
echo "  Skills with faqs: $FAQS"

KEYWORDS=$(grep -c 'searchKeywords' "$SKILLS_DATA" 2>/dev/null || echo "0")
echo "  Skills with searchKeywords: $KEYWORDS"

echo ""

# CHECK 2: SEO parity
echo "--- CHECK 2: SEO PARITY ---"

SITEMAP_ENTRIES=$(grep -c 'url:' "$SITEMAP" 2>/dev/null || echo "0")
echo "  Sitemap entries: $SITEMAP_ENTRIES"

LLMS_ENTRIES=$(grep -c 'richardewing.io' "$LLMS_TXT" 2>/dev/null || echo "0")
echo "  llms.txt entries: $LLMS_ENTRIES"

echo ""

# CHECK 3: Key pages exist
echo "--- CHECK 3: KEY PAGES ---"

KEY_PAGES=("/skills" "/runtime-architecture" "/compare/ai-coding-agents" "/case-studies/runtime-incidents" "/skills/getting-started")
for page in "${KEY_PAGES[@]}"; do
    HIT=$(grep -c "$page" "$SITEMAP" 2>/dev/null || echo "0")
    if [ "$HIT" -gt 0 ]; then
        echo "  ✓ $page"
        PASS=$((PASS + 1))
    else
        echo "  ✗ MISSING: $page"
        FAIL=$((FAIL + 1))
    fi
done

echo ""

# CHECK 4: Asset completeness per skill
echo "--- CHECK 4: SKILL ASSETS ---"
SKILL_DIRS=$(find assets/skills -maxdepth 1 -type d 2>/dev/null | tail -n +2 | wc -l)
echo "  Total skill directories: $SKILL_DIRS"

READMES=$(find assets/skills -name "README.md" 2>/dev/null | wc -l)
echo "  README.md files: $READMES"

CLAUDES=$(find assets/skills -name "CLAUDE.md" 2>/dev/null | wc -l)
echo "  CLAUDE.md files: $CLAUDES"

POLICIES=$(find assets/skills -name "policy.yaml" 2>/dev/null | wc -l)
echo "  policy.yaml files: $POLICIES"

echo ""
echo "============================================"
if [ $FAIL -eq 0 ]; then
    echo "✓ SATURATION CHECK PASSED"
else
    echo "✗ $FAIL GAPS FOUND — FIX BEFORE SHIPPING"
fi
echo "============================================"
