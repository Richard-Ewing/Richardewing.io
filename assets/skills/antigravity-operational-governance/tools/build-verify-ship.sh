#!/bin/bash
# build-verify-ship.sh — Complete deployment pipeline
# Part of: Antigravity Operational Governance Skill
# Usage: bash tools/build-verify-ship.sh "commit message"

COMMIT_MSG="${1:-feat: update}"

echo "============================================"
echo "ANTIGRAVITY BUILD-VERIFY-SHIP PIPELINE"
echo "============================================"

# Step 1: Build
echo ""
echo "[1/4] Building..."
npm run build 2>&1
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
    echo ""
    echo "✗ BUILD FAILED — Fix errors before committing."
    echo "  Do NOT push broken code to production."
    exit 1
fi

echo "✓ Build passed"

# Step 2: Commit
echo ""
echo "[2/4] Committing..."
git add .
git commit -m "$COMMIT_MSG"

# Step 3: Push
echo ""
echo "[3/4] Pushing..."
git push

# Step 4: IndexNow
echo ""
echo "[4/4] Pinging IndexNow..."
node ping-all.js

echo ""
echo "============================================"
echo "✓ PIPELINE COMPLETE"
echo "============================================"
