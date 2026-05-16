#!/bin/bash
# Repository Drift Prevention — Ghost Dependency Scanner
# Usage: bash tools/ghost-dep-scanner.sh

echo "=== GHOST DEPENDENCY SCAN ==="
if [ -f "package.json" ]; then
  DEPS=$(node -e "const p=require('./package.json');console.log(Object.keys({...p.dependencies,...p.devDependencies}).join('\n'))" 2>/dev/null)
  USED=$(grep -rh "from ['"]" src/ lib/ 2>/dev/null | grep -oP "from ['"]\K[^'"]*" | grep -v "^\." | sed 's|/.*||' | sort -u)
  
  echo "Declared dependencies: $(echo "$DEPS" | wc -l)"
  echo "Actually imported: $(echo "$USED" | wc -l)"
fi