#!/bin/bash
# Runtime Governance — Pre-Execution Snapshot
# Usage: bash tools/rollback-snapshot.sh [snapshot_name]

NAME=${1:-"pre-exec-$(date +%Y%m%d-%H%M%S)"}
echo "=== ROLLBACK SNAPSHOT ==="
git stash push -m "$NAME" --include-untracked 2>/dev/null
echo "Snapshot saved: $NAME"
echo "Restore with: git stash pop"