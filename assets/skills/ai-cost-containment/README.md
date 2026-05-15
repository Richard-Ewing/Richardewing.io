# OPERATIONAL MANUAL: AI Cost Containment

## 1. EXECUTIVE COMPRESSION

**Problem:** Engineering teams traditionally treat compute infrastructure as a fixed or highly predictable cost (e.g., EC2 instances). Agentic engineering introduces variable inference costs that scale exponentially with task complexity and failure rates. Without strict cost boundaries, a single automated workflow can burn through thousands of dollars in tokens overnight.
**Consequence:** *Negative Feature Margins*. The API inference cost of generating a feature via an agent exceeds the cost of a human engineer writing it from scratch, destroying the fundamental economic thesis of AI adoption.
**Remediation:** Implement AI Cost Containment. Treat inference APIs as a financial liability, not just a technical utility. Enforce hard USD token budgets per session, per task, and per developer, with automatic circuit breakers that physically sever the LLM connection when limits are breached.

## 2. FAILURE TAXONOMY

### Symptoms
- Sudden $500+ spikes in the Anthropic/OpenAI billing dashboard over a weekend.
- Agents generating 150,000-token payloads to fix a 3-line CSS bug because they lack context compression.
- ROI calculations for AI tooling turning deeply negative.

### Root Causes
- **Missing Telemetry:** Failing to instrument the exact USD cost of a session in real-time.
- **Unbounded Retries:** Allowing agents to enter infinite failure loops without an economic ceiling. (See: *Retry Inflation Control*).
- **Global Context Dumps:** Passing the entire repository state to the LLM on every turn instead of implementing *Context Window Compression*.

### Economic Impact
- **Runaway Synthetic COGS:** The "Cost of Goods Sold" for building software becomes entirely unpredictable.

## 3. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Cost Containment Engine (`cost-containment-engine.ts`)**: Middleware that intercepts every API request, calculates the rolling USD cost of the session based on token counts, and enforces the budget policy.
2. **Token Budget Policy (`token-budget-policy.yaml`)**: The declarative financial rules defining the maximum allowed spend for specific task tiers.
3. **Margin Threshold Validator (`margin-threshold-validator.ts`)**: Logic that predicts the final cost of a task before it runs. If the predicted inference cost is higher than the economic value of the feature, it blocks the execution entirely.

## 4. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

Exogram acts as the CFO of your agent network. It intercepts orchestrator traffic, applies real-time token pricing models, and mathematically severs the LLM connection if an agent violates its financial mandate.
