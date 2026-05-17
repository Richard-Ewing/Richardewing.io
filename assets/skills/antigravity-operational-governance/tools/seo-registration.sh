#!/bin/bash
# seo-registration.sh — Verify new pages have complete SEO registration
# Part of: Antigravity Operational Governance Skill
# Usage: bash tools/seo-registration.sh "/new-page-path"

PAGE_PATH="${1}"

if [ -z "$PAGE_PATH" ]; then
    echo "Usage: bash tools/seo-registration.sh /page-path"
    exit 1
fi

echo "============================================"
echo "SEO REGISTRATION CHECK: $PAGE_PATH"
echo "============================================"

SITEMAP_HIT=$(grep -c "$PAGE_PATH" app/sitemap.ts 2>/dev/null || echo "0")
LLMS_HIT=$(grep -c "$PAGE_PATH" app/llms.txt/route.ts 2>/dev/null || echo "0")

echo ""
PASS=0
FAIL=0

if [ "$SITEMAP_HIT" -gt 0 ]; then
    echo "  ✓ sitemap.ts — registered"
    PASS=$((PASS + 1))
else
    echo "  ✗ sitemap.ts — MISSING"
    FAIL=$((FAIL + 1))
fi

if [ "$LLMS_HIT" -gt 0 ]; then
    echo "  ✓ llms.txt — registered"
    PASS=$((PASS + 1))
else
    echo "  ✗ llms.txt — MISSING"
    FAIL=$((FAIL + 1))
fi

echo ""
if [ $FAIL -gt 0 ]; then
    echo "ACTION REQUIRED: Register page in missing locations."
    echo "  Then run: node ping-all.js"
    exit 1
else
    echo "✓ All SEO registrations complete."
    echo "  Remember to run: node ping-all.js after deploy."
fi
