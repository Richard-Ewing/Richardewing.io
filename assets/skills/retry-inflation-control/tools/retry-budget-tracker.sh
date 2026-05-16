#!/bin/bash
# Retry Inflation Control — Budget Tracker
# Usage: bash tools/retry-budget-tracker.sh [max_budget_usd]

MAX_BUDGET=${1:-25}
BUDGET_FILE=".claude/retry-budget.log"
mkdir -p "$(dirname "$BUDGET_FILE")"
touch "$BUDGET_FILE"

echo "=== RETRY BUDGET STATUS ==="
TOTAL=$(awk '{sum+=$1} END {printf "%.2f", sum}' "$BUDGET_FILE" 2>/dev/null || echo "0.00")
echo "Current spend: $$TOTAL / $$MAX_BUDGET"
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
fi