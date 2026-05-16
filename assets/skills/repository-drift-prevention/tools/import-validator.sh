#!/bin/bash
# Repository Drift Prevention — Import Validator
# Usage: bash tools/import-validator.sh [file_or_directory]

TARGET=${1:-"src/"}
echo "=== IMPORT VALIDATION ==="

# Extract all imports
IMPORTS=$(grep -rh "from ['"]" "$TARGET" 2>/dev/null | grep -oP "from ['"]\K[^'"]*" | grep -v "^\." | sort -u)

PHANTOM=0
for imp in $IMPORTS; do
  PKG=$(echo "$imp" | sed 's|/.*||' | sed 's|^@[^/]*/[^/]*|&|')
  if ! grep -q "\"$PKG\"" package.json 2>/dev/null; then
    # Check if it's a Node builtin
    BUILTINS="fs|path|http|https|crypto|os|util|stream|events|url|querystring|child_process|assert|buffer"
    if ! echo "$PKG" | grep -qE "^($BUILTINS)$"; then
      echo "PHANTOM: $PKG (imported but not in package.json)"
      PHANTOM=$((PHANTOM + 1))
    fi
  fi
done

if [ "$PHANTOM" -gt 0 ]; then
  echo ""
  echo "ALERT: $PHANTOM phantom dependencies detected."
  exit 1
else
  echo "✓ All imports resolve to package.json dependencies."
fi