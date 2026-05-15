# OPERATIONAL MANUAL: Retry Inflation Control

## 1. EXECUTIVE COMPRESSION

**Problem:** Agentic infrastructure defaults to "try again" when it encounters an error. Without economic governance, a single logic error can trigger an infinite loop of retries, causing API costs to skyrocket exponentially while producing zero usable code.
**Consequence:** *Retry Inflation* destroys the financial viability of agentic engineering. A feature that should cost $0.50 in API inference ends up costing $50.00 because the agent got stuck trying to resolve a missing dependency.
**Remediation:** Deploy strict Cost Containment and Burn Engines. Every agentic session must be assigned a hard USD budget and a maximum retry threshold. If the budget is breached, the orchestration thread is physically severed.

## 2. FAILURE TAXONOMY

### Symptoms
- Sudden, unexplained spikes in your OpenAI or Anthropic billing dashboard.
- Agent sessions running for 45 minutes on simple tasks (e.g., "change the button color").
- CI/CD logs filled with hundreds of identical error messages as the agent repeatedly submits the exact same failing patch.

### Root Causes
- **Unbounded Loops:** Writing orchestration logic like `while (error) { agent.fix(error) }` without a hard circuit breaker.
- **Lack of Economic Telemetry:** Failing to calculate the USD cost of the session *in real-time* as tokens are burned.
- **Context Blindness:** The agent doesn't realize it has already tried the current solution because its context window is saturated.

### Economic Impact
- **Runaway Synthetic COGS:** The cost of generating software becomes entirely unpredictable, ruining enterprise forecasting and ROI calculations.

## 3. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Retry Burn Engine (`retry-burn-engine.ts`)**: Real-time telemetry that calculates the exact USD cost of the current session after every LLM generation.
2. **Retry Budget Policy (`retry-budget-policy.yaml`)**: The mathematical policy defining the maximum allowable spend per feature and the hard limit on consecutive retry loops.
3. **Recursive Loop Detector (`recursive-loop-detector.ts`)**: AST-level logic that detects if the agent is proposing the exact same syntax it proposed 3 retries ago, short-circuiting the loop before more money is burned.

## 4. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

Exogram acts as the financial circuit breaker. By routing all orchestrator execution through Exogram's Burn Engine, the agent is physically blocked from sending another request to Anthropic/OpenAI once the session budget is exhausted, guaranteeing cost predictability.
