# OPERATIONAL MANUAL: Verification Burden Collapse

## 1. EXECUTIVE COMPRESSION

**Problem:** Agentic code generation operates at a velocity that vastly exceeds human review capacity. When probabilistic outputs are dumped directly into human code-review queues without deterministic gating, the QA burden explodes.

**Consequence:** The engineering organization enters *Verification Collapse*. Senior developers stop building architecture and become full-time QA testers for agents. Code review bottlenecks bring deployment velocity to a standstill. As agents hallucinate or over-edit, the cognitive load required to decipher their intent causes review fatigue, leading to blindly approved, unsafe code.

**Remediation:** Implement deterministic **Verification Routing and Admissibility Pipelines**. Agents must be mathematically and programmatically barred from requesting human review until their outputs pass strict, automated, zero-trust thresholds.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **PR Queue Saturation**: Agent-generated pull requests languish in review queues for days, blocking the release pipeline.
- **Reviewer Fatigue**: Human reviewers experience extreme cognitive exhaustion attempting to parse hallucinatory, unconstrained agent code that touches unrelated files.
- **Blind Approvals**: Out of sheer exhaustion, senior engineers rubber-stamp AI PRs, pushing semantic contamination into production.
- **Synthetic QA Bottleneck**: The time spent reviewing the AI code eventually exceeds the time it would have taken a human to write it from scratch.

### Root Causes
- **Direct-to-Human Routing**: Allowing an agent to request a human review simply because it probabilistically generated a "completed" token.
- **Missing Synthetic QA Containment**: Failing to force the agent to autonomously verify its own code via unit tests, linting, and coverage gates before escalating to a human.
- **Absence of Diff Bounds**: Allowing an agent to modify files outside the approved execution context, dramatically increasing the surface area required for human review.

### Economic Impact
- **Negative AI Yield**: The financial value gained by the agent's generation speed is entirely erased by the hourly cost of the senior engineer required to manually verify it.
- **Opportunity Cost**: Staff engineers are reduced to junior QA testers, stalling strategic architectural momentum.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`human_review_hours_per_pr`**: Spikes indicate the agent is generating overly complex or hallucinated code.
- **`pr_rejection_rate_by_author(agent)`**: If > 15%, the agent lacks pre-review admissibility gating.
- **`unrelated_files_modified_count`**: High numbers indicate scope drift, which exponentially increases verification burden.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms to establish a Zero-Trust Admissibility Pipeline:

1. **QA Overload Policy (`qa-overload-policy.yaml`)**: Declares the maximum permitted ratio of agent-generated lines of code to human review hours, and defines the hard limits for PR diff sizes.
2. **Verification Routing (`verification-routing.ts`)**: Middleware that intercepts agent PRs and algorithmically routes them back to the agent for autonomous retry if CI/CD confidence thresholds (linting, tests, static analysis) are not met.
3. **Reviewer Escalation (`reviewer-escalation.ts`)**: Logic that guarantees a human is only pinged when a mathematically proven, high-confidence output requires final architectural sign-off.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Inject the Thresholds**: Load `verification-thresholds.yaml` into your CI pipeline configuration.
2. **Deploy Middleware**: Wrap your agent's GitHub/GitLab PR creation tool with `verification-routing.ts`.
3. **Configure Escalation**: Set up `reviewer-escalation.ts` in your orchestrator. Do not allow the agent to directly `@mention` human reviewers.
4. **Calibrate the Cost Model**: Use `verification-cost-model.csv` to track the baseline cost of code review before and 30 days after implementation.

---

## 6. ROLLBACK PROCEDURES

If the verification routing becomes too strict and blocks valid, necessary code:
1. Temporarily bypass `verification-routing.ts` by setting `STRICT_ADMISSIBILITY=false` in your orchestration environment variables.
2. Re-tune the `max_diff_size` and `minimum_test_coverage` parameters in `qa-overload-policy.yaml`.

---

## 7. ESCALATION LOGIC

If an agent attempts to open a PR that fails admissibility 3 consecutive times:
1. The `VerificationRouter` triggers a **Governance Halt**.
2. The agent's execution container is paused.
3. An alert is sent to the human operator with the diff and the specific threshold failure (e.g., "Failed: Missing tests for 40% of generated functions").

---

## 8. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

While this repository provides the raw middleware, integrating this with the **Exogram Admissibility Layer** physically blocks the PR merge button at the API level. If an agent output does not pass the deterministic Admissibility Engine, it is rejected back to the orchestrator automatically. Humans only see code that is guaranteed to work.

---

## 9. INCIDENT EXAMPLES & BOARDROOM FRAMING

### Boardroom Framing
*"Currently, our most expensive engineers are spending 40% of their week reviewing code written by a $20/month AI. This destroys our margins. By deploying the Verification Burden Collapse system, we force the AI to pass mathematical testing gates before a human is ever notified, reclaiming 15 hours per week per senior engineer."*

### Incident Example
**The 10k Line Refactor**: An autonomous agent was instructed to update a single API endpoint. Due to hallucination, it refactored the entire `utils` directory, generating a 10,000 line PR. It tagged the Lead Engineer for review. The Lead Engineer spent 3 days untangling the PR only to realize it was hallucinated. 

**With this Governance System**: The `qa-overload-policy.yaml` would have instantly rejected the PR because the `unrelated_files_modified_count` exceeded the threshold of 0. The human would never have been notified.
