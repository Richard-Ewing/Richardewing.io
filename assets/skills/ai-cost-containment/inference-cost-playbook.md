# PLAYBOOK: Inference Cost Containment

When the `CostContainmentEngine` or `MarginThresholdValidator` triggers a Governance Halt or Degrade action, human operators must review the tenant's architecture to prevent churn.

## Scenario 1: Tenant Reaches Margin Threshold
**Trigger:** `MarginThresholdValidator` downgraded the tenant's requests from `gpt-4o` to `claude-3-haiku` because their AI COGS reached 20% of their subscription revenue.

**Human Action:**
1. The tenant is receiving a degraded experience. This is a churn risk.
2. Review the tenant's token usage. Are they submitting massive context windows (e.g., pasting raw PDFs into the feature)?
3. If yes, implement **Context Window Compression** on the backend to silently truncate their inputs before inference.
4. If the usage is legitimate, the tenant requires an Enterprise pricing tier. Trigger an upsell alert to Sales.

## Scenario 2: Single Call Cost Halt
**Trigger:** A single LLM request exceeded the `$0.15` max limit defined in `token-budget-policy.yaml`.

**Human Action:**
1. The feature attempted to send an illegally large payload (Context Window Attack) or the developer accidentally configured `max_tokens` to an unbounded number.
2. Review the specific `featureId` that triggered the error.
3. Hardcode a `max_tokens` bound in the API payload for that feature to guarantee it cannot request an infinite completion.
