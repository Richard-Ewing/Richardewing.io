# PLAYBOOK: Retry Inflation Incident Response

When the `RetryBurnEngine` triggers a Governance Halt, human operators must intervene to prevent total state loss and token burn.

## Scenario 1: Financial Circuit Breaker Tripped
**Trigger:** Agent task exceeded `$2.50` API spend.

**Human Action:**
1. Do not increase the budget limit.
2. Review the context window dump. The agent is likely processing a massive file (e.g., a 4000-line minified JSON or raw data dump) on every execution turn.
3. Exclude the massive file from the agent's context (`.agentignore` or explicit context rules).
4. Restart the objective with a compressed context window.

## Scenario 2: Identical Error Loop
**Trigger:** Agent received the exact same error 3 times in a row.

**Human Action:**
1. The agent's proposed fix is failing compilation, but the agent cannot "see" the actual root cause (e.g., a missing environment variable or an out-of-scope dependency).
2. Manually fix the dependency issue in the local environment.
3. Run the test suite manually to ensure the environment is clean.
4. Provide the agent with the exact terminal output of the passing test, and instruct it to proceed.

## Scenario 3: Thrashing Halt (Semantic Loop)
**Trigger:** The `RecursiveLoopDetector` caught the agent reverting its own code or editing the same block repeatedly.

**Human Action:**
1. The agent has lost the logical thread of the architecture.
2. Execute a **Hard Semantic Reset**.
3. Revert the repository to the commit exactly prior to the agent's first execution attempt for this task.
4. Rewrite the prompt to break the logic down into smaller, strictly sequential steps. "Do X, verify X. Then do Y."
