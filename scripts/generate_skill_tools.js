const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'assets/skills');

const allTools = {
  'context-rot-prevention': {
    'check-context-health.sh': `#!/bin/bash
# Context Rot Prevention — Context Health Check
# Usage: bash tools/check-context-health.sh [session_log_file]
# Returns: context health score and recommendations

SESSION_LOG=\${1:-".claude/session.log"}
echo "=== CONTEXT HEALTH CHECK ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Check session duration
if [ -f "$SESSION_LOG" ]; then
  START=$(head -1 "$SESSION_LOG" | grep -oP '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}')
  echo "Session start: $START"
fi

# Check for patch chains (same file modified 3+ times)
echo ""
echo "--- Patch Chain Detection ---"
git diff --stat HEAD~5 2>/dev/null | awk '{print $1}' | sort | uniq -c | sort -rn | head -5 | while read count file; do
  if [ "$count" -ge 3 ]; then
    echo "WARNING: $file modified $count times — possible recursive patch loop"
  else
    echo "OK: $file modified $count times"
  fi
done

# Check for large diffs indicating drift
echo ""
echo "--- Diff Size Analysis ---"
TOTAL_LINES=$(git diff --stat 2>/dev/null | tail -1 | grep -oP '\\d+' | head -1)
echo "Total lines changed: \${TOTAL_LINES:-0}"
if [ "\${TOTAL_LINES:-0}" -gt 500 ]; then
  echo "ALERT: Large diff detected. Consider checkpoint rotation."
fi

echo ""
echo "=== Health check complete ==="`,

    'checkpoint-rotate.sh': `#!/bin/bash
# Context Rot Prevention — Checkpoint Rotation
# Usage: bash tools/checkpoint-rotate.sh [checkpoint_name]
# Saves architecture state and creates rotation checkpoint

CHECKPOINT=\${1:-"checkpoint-$(date +%Y%m%d-%H%M%S)"}
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
echo "Restore with: git checkout $(cat "$CHECKPOINT_DIR/$CHECKPOINT.head" 2>/dev/null || echo 'HEAD')"`,

    'semantic-reset.sh': `#!/bin/bash
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
echo "  - Current git HEAD"`,

    'patch-chain-detector.sh': `#!/bin/bash
# Context Rot Prevention — Patch Chain Detector
# Usage: bash tools/patch-chain-detector.sh [max_patches]
# Detects recursive patch loops across recent commits

MAX=\${1:-3}
echo "=== PATCH CHAIN DETECTION ==="
echo "Threshold: $MAX patches to same file"
echo ""

VIOLATIONS=0
git log --oneline -20 --diff-filter=M --name-only 2>/dev/null | grep -v '^[a-f0-9]' | sort | uniq -c | sort -rn | while read count file; do
  if [ -n "$file" ] && [ "$count" -ge "$MAX" ]; then
    echo "VIOLATION: $file patched $count times in last 20 commits"
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
done

if [ "$VIOLATIONS" -eq 0 ]; then
  echo "✓ No patch chain violations detected"
fi`
  },

  'retry-inflation-control': {
    'retry-budget-tracker.sh': `#!/bin/bash
# Retry Inflation Control — Budget Tracker
# Usage: bash tools/retry-budget-tracker.sh [max_budget_usd]

MAX_BUDGET=\${1:-25}
BUDGET_FILE=".claude/retry-budget.log"
mkdir -p "$(dirname "$BUDGET_FILE")"
touch "$BUDGET_FILE"

echo "=== RETRY BUDGET STATUS ==="
TOTAL=$(awk '{sum+=$1} END {printf "%.2f", sum}' "$BUDGET_FILE" 2>/dev/null || echo "0.00")
echo "Current spend: \$$TOTAL / \$$MAX_BUDGET"
PCT=$(echo "$TOTAL $MAX_BUDGET" | awk '{printf "%.0f", ($1/$2)*100}')
echo "Budget used: $PCT%"

if [ "$PCT" -ge 100 ]; then
  echo "CIRCUIT BREAKER: Budget exceeded. Agent execution must halt."
  exit 1
elif [ "$PCT" -ge 80 ]; then
  echo "WARNING: Approaching budget limit."
elif [ "$PCT" -ge 50 ]; then
  echo "NOTICE: 50% of budget consumed."
else
  echo "STATUS: Budget healthy."
fi`,

    'error-fingerprint.sh': `#!/bin/bash
# Retry Inflation Control — Error Fingerprint Comparison
# Usage: bash tools/error-fingerprint.sh "error message text"

ERROR_MSG="$1"
FINGERPRINT_FILE=".claude/error-fingerprints.log"
mkdir -p "$(dirname "$FINGERPRINT_FILE")"
touch "$FINGERPRINT_FILE"

HASH=$(echo "$ERROR_MSG" | md5sum | cut -d' ' -f1)
echo "Error fingerprint: $HASH"

COUNT=$(grep -c "$HASH" "$FINGERPRINT_FILE" 2>/dev/null || echo 0)
echo "$HASH $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$FINGERPRINT_FILE"

if [ "$COUNT" -ge 3 ]; then
  echo "HALT: Error fingerprint seen $COUNT times. Recursive loop detected."
  exit 1
elif [ "$COUNT" -ge 1 ]; then
  echo "WARNING: Error fingerprint seen $COUNT times. Consider context wipe."
else
  echo "OK: New error pattern."
fi`,

    'kill-retry-loop.sh': `#!/bin/bash
# Retry Inflation Control — Kill Retry Loop
# Usage: bash tools/kill-retry-loop.sh

echo "=== RETRY LOOP TERMINATION ==="
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) RETRY_LOOP_KILLED" >> .claude/governance-audit.log
echo "Retry loop terminated. Agent must:"
echo "  1. Stop current task"
echo "  2. Report failure to human"
echo "  3. Wait for new instructions"
echo "  4. Do NOT retry the same approach"`,

    'cost-audit.sh': `#!/bin/bash
# Retry Inflation Control — Cost Audit Report
# Usage: bash tools/cost-audit.sh

echo "=== COST AUDIT REPORT ==="
echo "Generated: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo ""
if [ -f ".claude/retry-budget.log" ]; then
  echo "--- Token Spend Log ---"
  cat .claude/retry-budget.log
  echo ""
  TOTAL=$(awk '{sum+=$1} END {printf "%.2f", sum}' .claude/retry-budget.log)
  echo "Total spend: \$$TOTAL"
else
  echo "No spend data found."
fi

if [ -f ".claude/error-fingerprints.log" ]; then
  echo ""
  echo "--- Error Recurrence ---"
  cut -d' ' -f1 .claude/error-fingerprints.log | sort | uniq -c | sort -rn | head -5
fi`
  },

  'runtime-governance': {
    'command-validator.sh': `#!/bin/bash
# Runtime Governance — Command Validator
# Usage: bash tools/command-validator.sh "command to validate"

CMD="$1"
echo "=== COMMAND VALIDATION ==="
echo "Command: $CMD"

# Blacklist check
BLACKLIST="rm -rf|DROP TABLE|FORMAT|curl |wget |ssh |scp |chmod 777"
if echo "$CMD" | grep -qiE "$BLACKLIST"; then
  echo "BLOCKED: Command matches blacklist pattern."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) BLOCKED: $CMD" >> .claude/governance-audit.log
  exit 1
fi

# Whitelist check
WHITELIST="^(cat|ls|pwd|echo|grep|find|head|tail|wc|diff|git status|git log|git diff)"
if echo "$CMD" | grep -qE "$WHITELIST"; then
  echo "APPROVED: Command is whitelisted (safe read-only)."
  exit 0
fi

# Restricted check
RESTRICTED="^(npm|npx|git|node|python|pip)"
if echo "$CMD" | grep -qE "$RESTRICTED"; then
  echo "RESTRICTED: Command requires explicit approval."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) RESTRICTED: $CMD" >> .claude/governance-audit.log
  exit 2
fi

echo "UNKNOWN: Command not classified. Routing to human approval."
exit 2`,

    'file-guard.sh': `#!/bin/bash
# Runtime Governance — File Guard
# Usage: bash tools/file-guard.sh "path/to/file"

FILE="$1"
echo "=== FILE GUARD CHECK ==="

PROTECTED=".env|.env.*|*.key|*.pem|config/production|docker-compose.prod"
if echo "$FILE" | grep -qE "$PROTECTED"; then
  echo "BLOCKED: $FILE is a protected file."
  echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) FILE_BLOCKED: $FILE" >> .claude/governance-audit.log
  exit 1
fi
echo "OK: $FILE is not protected."`,

    'rollback-snapshot.sh': `#!/bin/bash
# Runtime Governance — Pre-Execution Snapshot
# Usage: bash tools/rollback-snapshot.sh [snapshot_name]

NAME=\${1:-"pre-exec-$(date +%Y%m%d-%H%M%S)"}
echo "=== ROLLBACK SNAPSHOT ==="
git stash push -m "$NAME" --include-untracked 2>/dev/null
echo "Snapshot saved: $NAME"
echo "Restore with: git stash pop"`,

    'audit-log.sh': `#!/bin/bash
# Runtime Governance — Audit Log Entry
# Usage: bash tools/audit-log.sh "action description"

LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) $1" >> "$LOG_FILE"
echo "Logged: $1"`
  },

  'repository-drift-prevention': {
    'import-validator.sh': `#!/bin/bash
# Repository Drift Prevention — Import Validator
# Usage: bash tools/import-validator.sh [file_or_directory]

TARGET=\${1:-"src/"}
echo "=== IMPORT VALIDATION ==="

# Extract all imports
IMPORTS=$(grep -rh "from ['\"]" "$TARGET" 2>/dev/null | grep -oP "from ['\"]\\K[^'\"]*" | grep -v "^\\." | sort -u)

PHANTOM=0
for imp in $IMPORTS; do
  PKG=$(echo "$imp" | sed 's|/.*||' | sed 's|^@[^/]*/[^/]*|&|')
  if ! grep -q "\\"$PKG\\"" package.json 2>/dev/null; then
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
fi`,

    'scope-checker.sh': `#!/bin/bash
# Repository Drift Prevention — Scope Checker
# Usage: bash tools/scope-checker.sh "file1.ts,file2.ts" (comma-separated allowed files)

ALLOWED="$1"
echo "=== SCOPE CHECK ==="
CHANGED=$(git diff --name-only 2>/dev/null)

for file in $CHANGED; do
  if ! echo "$ALLOWED" | grep -q "$file"; then
    echo "VIOLATION: $file modified but not in scope [$ALLOWED]"
  fi
done`,

    'diff-auditor.sh': `#!/bin/bash
# Repository Drift Prevention — Diff Size Auditor
# Usage: bash tools/diff-auditor.sh [max_lines]

MAX=\${1:-200}
echo "=== DIFF SIZE AUDIT ==="
LINES=$(git diff --stat 2>/dev/null | tail -1 | grep -oP '\\d+' | head -1)
echo "Lines changed: \${LINES:-0}"
if [ "\${LINES:-0}" -gt "$MAX" ]; then
  echo "ALERT: Diff exceeds $MAX lines. Human review required."
  exit 1
fi
echo "✓ Diff size within limits."`,

    'ghost-dep-scanner.sh': `#!/bin/bash
# Repository Drift Prevention — Ghost Dependency Scanner
# Usage: bash tools/ghost-dep-scanner.sh

echo "=== GHOST DEPENDENCY SCAN ==="
if [ -f "package.json" ]; then
  DEPS=$(node -e "const p=require('./package.json');console.log(Object.keys({...p.dependencies,...p.devDependencies}).join('\\n'))" 2>/dev/null)
  USED=$(grep -rh "from ['\"]" src/ lib/ 2>/dev/null | grep -oP "from ['\"]\\K[^'\"]*" | grep -v "^\\." | sed 's|/.*||' | sort -u)
  
  echo "Declared dependencies: $(echo "$DEPS" | wc -l)"
  echo "Actually imported: $(echo "$USED" | wc -l)"
fi`
  }
};

// Generate tool scripts for remaining skills with common patterns
const simpleToolSkills = {
  'orchestration-entropy': ['turn-counter.sh', 'agreement-detector.sh', 'delegation-depth.sh', 'workflow-checkpoint.sh'],
  'hallucination-debt-reduction': ['phantom-import-scanner.sh', 'confidence-scorer.sh', 'api-validator.sh', 'review-router.sh'],
  'mcp-governance': ['manifest-checker.sh', 'secret-scanner.sh', 'context-isolator.sh', 'server-verifier.sh'],
  'verification-burden-collapse': ['review-timer.sh', 'confidence-router.sh', 'burnout-monitor.sh', 'quality-gate.sh'],
  'autonomous-execution-safety': ['whitelist-checker.sh', 'package-auditor.sh', 'permission-gate.sh', 'authority-logger.sh'],
  'tool-permission-governance': ['scope-enforcer.sh', 'path-guard.sh', 'output-redactor.sh', 'escalation-detector.sh'],
  'context-window-compression': ['context-monitor.sh', 'passive-prune.sh', 'checkpoint-save.sh', 'emergency-compress.sh'],
  'ai-cost-containment': ['budget-tracker.sh', 'spend-alert.sh', 'kill-runaway.sh', 'cost-report.sh'],
  'ai-engineering-economics': ['cogs-tracker.sh', 'roi-calculator.sh', 'cost-per-feature.sh', 'quarterly-report.sh'],
  'agentic-change-management': ['risk-classifier.sh', 'approval-router.sh', 'audit-trail.sh', 'shadow-detector.sh'],
  'deterministic-agentic-engineering': ['runtime-assembler.sh', 'identity-loader.sh', 'skill-resolver.sh', 'environment-snapshot.sh']
};

// Write detailed tools for the first 4 skills
for (const [slug, tools] of Object.entries(allTools)) {
  const toolsDir = path.join(base, slug, 'tools');
  if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir, { recursive: true });
  for (const [name, content] of Object.entries(tools)) {
    fs.writeFileSync(path.join(toolsDir, name), content);
  }
  console.log(`✓ ${slug}/tools/ (${Object.keys(tools).length} scripts)`);
}

// Write stub tools for remaining skills
for (const [slug, toolNames] of Object.entries(simpleToolSkills)) {
  const toolsDir = path.join(base, slug, 'tools');
  if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir, { recursive: true });
  
  for (const name of toolNames) {
    const desc = name.replace('.sh','').replace(/-/g, ' ');
    const content = `#!/bin/bash
# ${slug} — ${desc}
# Usage: bash tools/${name}

echo "=== ${desc.toUpperCase()} ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Skill: ${slug}"
echo "Layer: $(grep 'runtime_layer' ../policy.yaml 2>/dev/null | cut -d'"' -f2 || echo 'unknown')"
echo ""

# Log to governance audit trail
LOG_FILE=".claude/governance-audit.log"
mkdir -p "$(dirname "$LOG_FILE")"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) TOOL_RUN: ${name} [${slug}]" >> "$LOG_FILE"

echo "Tool execution logged."
echo "=== Complete ==="
`;
    fs.writeFileSync(path.join(toolsDir, name), content);
  }
  console.log(`✓ ${slug}/tools/ (${toolNames.length} scripts)`);
}

console.log('\nDone — all tool scripts generated.');
