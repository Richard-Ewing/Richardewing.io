#!/bin/bash
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
  echo "Total spend: $$TOTAL"
else
  echo "No spend data found."
fi

if [ -f ".claude/error-fingerprints.log" ]; then
  echo ""
  echo "--- Error Recurrence ---"
  cut -d' ' -f1 .claude/error-fingerprints.log | sort | uniq -c | sort -rn | head -5
fi