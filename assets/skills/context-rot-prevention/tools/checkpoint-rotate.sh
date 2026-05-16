#!/bin/bash
# Context Rot Prevention — Checkpoint Rotation
# Usage: bash tools/checkpoint-rotate.sh [checkpoint_name]
# Saves architecture state and creates rotation checkpoint

CHECKPOINT=${1:-"checkpoint-$(date +%Y%m%d-%H%M%S)"}
CHECKPOINT_DIR=".claude/checkpoints"
mkdir -p "$CHECKPOINT_DIR"

echo "=== CHECKPOINT ROTATION ==="
echo "Creating checkpoint: $CHECKPOINT"

# Save current file tree
find src/ lib/ -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" | sort > "$CHECKPOINT_DIR/$CHECKPOINT.files"
echo "✓ File tree saved ($(wc -l < "$CHECKPOINT_DIR/$CHECKPOINT.files") files)"

# Save package state
cp package.json "$CHECKPOINT_DIR/$CHECKPOINT.package.json" 2>/dev/null
echo "✓ Package state saved"

# Save git state
git rev-parse HEAD > "$CHECKPOINT_DIR/$CHECKPOINT.head" 2>/dev/null
git diff --stat > "$CHECKPOINT_DIR/$CHECKPOINT.diff-stat" 2>/dev/null
echo "✓ Git state saved"

# Save architecture summary
echo "# Architecture Checkpoint: $CHECKPOINT" > "$CHECKPOINT_DIR/$CHECKPOINT.md"
echo "Created: $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$CHECKPOINT_DIR/$CHECKPOINT.md"
echo "" >> "$CHECKPOINT_DIR/$CHECKPOINT.md"
echo "## Files" >> "$CHECKPOINT_DIR/$CHECKPOINT.md"
cat "$CHECKPOINT_DIR/$CHECKPOINT.files" >> "$CHECKPOINT_DIR/$CHECKPOINT.md"
echo "✓ Architecture summary saved"

echo ""
echo "=== Checkpoint $CHECKPOINT created ==="
echo "Restore with: git checkout $(cat "$CHECKPOINT_DIR/$CHECKPOINT.head" 2>/dev/null || echo 'HEAD')"