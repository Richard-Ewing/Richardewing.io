# OPERATIONAL MANUAL: Retry Inflation Control

## 1. EXECUTIVE COMPRESSION

**Problem:** Probabilistic coding agents inherently fail. When an agent receives an error (e.g., from a test suite or compiler), its default behavior is to retry. However, without deterministic bounding, agents enter *Retry Hell*—a state of infinite recursive patching where they repeatedly try failed logic, rapidly consuming API tokens with zero engineering yield.

**Consequence:** API budgets are destroyed. A simple bug fix that should cost $0.05 suddenly costs $15 as the agent recursively loops 100 times overnight. Furthermore, the context window fills with failed code, leading to complete semantic collapse.

**Remediation:** Implement a **Retry Burn Engine**. This middleware tracks, scores, and mathematically bounds recursive execution loops. It forces the agent to halt and escalate to a human before API budgets are exhausted.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **Infinite Patch Loops**: The agent repeatedly edits the same 5 lines of code, running tests, failing, and editing them again in a slightly different but equally incorrect way.
- **Token Burn Explosions**: API dashboards show massive, unexpected spikes in token usage from a single task ID.
- **Context Window Rot**: The agent begins outputting completely unrelated code because its context window is overflowing with 20 previous failed attempts.

### Root Causes
- **Unbounded Autonomy**: The orchestrator allows the agent to retry indefinitely without a hard compute circuit breaker.
- **Missing State Checkpoints**: The agent forgets what it already tried, leading it to repeat past mistakes.

### Economic Impact
- **Margin Collapse**: Unchecked retry loops destroy the economic viability of AI software engineering. $15 API burns for a syntax error erase the ROI of the agent entirely.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`recursive_retry_count`**: If an agent retries the exact same function > 3 times, it is stuck.
- **`token_burn_velocity`**: Tokens consumed per minute. Sudden spikes indicate a tight retry loop.
- **`same_error_frequency`**: The agent is receiving the exact same stderr output consecutively.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Retry Budget Policy (`retry-budget-policy.yaml`)**: Declares the hard token limits and max retry counts per objective.
2. **Retry Burn Engine (`retry-burn-engine.ts`)**: Middleware that intercepts execution attempts and calculates the financial and compute burn rate.
3. **Recursive Loop Detector (`recursive-loop-detector.ts`)**: Analyzes the semantic similarity of the agent's proposed patches to detect if it's "patching its own patches."

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Configure Budgets**: Load `retry-budget-policy.yaml` into your orchestration environment.
2. **Deploy Middleware**: Wrap your agent's execution tool (e.g., the bash tool or terminal interface) with `retry-burn-engine.ts`.
3. **Calibrate the Loop Detector**: Ensure `recursive-loop-detector.ts` has access to the agent's previous 5 diffs to calculate semantic similarity.

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

When connected to Exogram, the Retry Burn Engine acts as a financial circuit breaker. Exogram visualizes the `token_burn_velocity` in real-time. If the threshold is breached, Exogram forcefully severs the agent's API keys for that specific task ID, guaranteeing that the loop is killed at the network layer.
