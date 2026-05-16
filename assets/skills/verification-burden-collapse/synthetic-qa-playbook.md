# PLAYBOOK: Resolving Synthetic QA Escalations

This playbook defines the exact deterministic steps a human operator must take when the Verification Router triggers a **Governance Halt**.

## Scenario 1: Agent Reaches `max_autonomous_retries`
**Trigger:** The agent failed the admissibility tests 3 times in a row and its execution container was frozen.

**Human Action:**
1. Do **not** merge the code.
2. Review the `violations` array dumped by the `VerificationRouter`.
3. If the failure is `Diff size exceeds maximum allowed`:
   - The agent hallucinated a massive refactor. Run the Rollback Handler.
   - Restrict the agent's prompt to be explicitly bounded (e.g., "ONLY edit lines 45-50 in auth.ts").
4. If the failure is `Test coverage is below minimum threshold`:
   - The agent cannot figure out how to mock the required dependencies.
   - Do not write the tests for the agent. Provide the agent with an example test payload or update its system prompt with the mock structure, then unfreeze the container.

## Scenario 2: Agent Trips Scope Drift
**Trigger:** The agent modified files outside `allowed_directories`.

**Human Action:**
1. This is a severe architectural violation. The agent's reasoning engine has drifted.
2. Hard reset the agent's context window (See `context-window-compression` skill).
3. Do not attempt to cherry-pick the valid code from the invalid files. Discard the entire execution attempt and restart.

## Scenario 3: Agent Routes to Junior Engineer but Requires Staff Architect
**Trigger:** The `EscalationMatrix` routed a PR to a Junior QA based on file extensions, but the logic inside fundamentally alters the application.

**Human Action:**
1. Close the PR immediately.
2. The `riskScore` parameter calculation is flawed. Update your telemetry ingestion to more accurately parse semantic risk, not just file extensions.
