# OPERATIONAL MANUAL: AI Cost Containment

## 1. EXECUTIVE COMPRESSION

**Problem:** AI feature integration inherently shifts a software product's margin structure. API calls (inference) scale linearly with usage, unlike traditional SaaS margins which scale near zero per marginal user. Without explicit financial circuit breakers embedded in the runtime, a surge in usage (or an orchestrator caught in an infinite loop) will silently erode the company's gross margin, turning profitable users into loss-leaders.

**Consequence:** A viral feature or a runaway background agent burns tens of thousands of dollars in a weekend. "Runaway token costs" and "AI gross margin erosion" become existential financial risks. 

**Remediation:** Implement **AI Cost Containment Middleware**. Real-time USD burn tracking and strict financial circuit breakers must be hard-coded into the execution gating layer. Execution must halt instantly if a feature or agent exceeds its allocated margin budget.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **End-of-Month Bill Shock**: The OpenAI/Anthropic invoice is 5x higher than projected.
- **Hidden Operational Burn**: Background agents (e.g., CI/CD PR reviewers or data enrichers) consume massive context windows on every turn, silently draining the budget.
- **Margin Collapse**: The cost to serve an individual customer exceeds their monthly subscription fee due to heavy AI feature usage.

### Root Causes
- **Missing Financial Circuit Breakers**: API calls are made directly without a budget validation middleware layer.
- **Context Window Bloat**: Sending the entire repository or chat history to the LLM on every turn, rather than semantically compressing it.
- **Runaway Token Costs**: Failure to cap `max_tokens` and failure to detect infinite retry loops (See `retry-inflation-control`).

### Economic Impact
- **Negative Gross Margins**: AI features become unprofitable at scale, forcing the company to pull back features or shut them down entirely.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`usd_burn_per_session`**: Tracks exact API cost per user or agent session.
- **`token_efficiency_ratio`**: Tokens generated vs. Tokens sent in prompt. A low ratio indicates heavy context bloat.
- **`circuit_breaker_trips`**: How often the system had to physically block an LLM request to save budget.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Token Budget Policy (`token-budget-policy.yaml`)**: Declares the absolute financial limits per tenant, per session, and per agent.
2. **Cost Containment Engine (`cost-containment-engine.ts`)**: Middleware that intercepts all LLM API calls, calculates exact USD cost based on token counts, and blocks requests that exceed the budget.
3. **Margin Threshold Validator (`margin-threshold-validator.ts`)**: A business-logic validator that ensures a specific customer's AI usage does not push their account into negative gross margin.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Configure Budgets**: Load `token-budget-policy.yaml` with your current LLM pricing tiers.
2. **Deploy Middleware**: Wrap your LLM client (e.g., `OpenAI` or `Anthropic` SDK) with the `CostContainmentEngine`.
3. **Enforce Tenant Margins**: Integrate the `MarginThresholdValidator` with your billing provider (e.g., Stripe) to track cumulative spend per user.

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

Exogram provides the **Financial Telemetry Dashboard**. By piping your `CostContainmentEngine` logs into Exogram, you receive a real-time visualization of your AI gross margins across your entire user base. Exogram allows executives to dynamically adjust the `token-budget-policy.yaml` without deploying new code.
