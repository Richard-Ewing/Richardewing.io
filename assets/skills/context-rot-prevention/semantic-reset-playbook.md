# SEMANTIC RESET PLAYBOOK

## PURPOSE
To provide a deterministic, step-by-step protocol for nuking a poisoned agentic session and rehydrating a clean instance when context rot is detected.

## TRIGGERS
Execute this playbook immediately if any of the following are true:
[ ] The agent has proposed the exact same failing code twice.
[ ] The agent is attempting to modify core architecture to fix a local styling bug.
[ ] The session length exceeds 15 prompts for a single feature.
[ ] The `RetryCircuitBreaker` has thrown a `[GOVERNANCE HALT]`.

## PHASE 1: CONTAINMENT
1. **Halt Execution**: Force-stop the IDE agent or CI/CD runner. Do not let it output another token.
2. **Isolate the Diff**: Run `git diff > agent-rot.patch` to capture the failing logic. Do NOT commit.

## PHASE 2: PURGE
1. **Nuke Context**: Close the agent chat window entirely. Do not say "Let's start over." You must sever the session ID.
2. **Rollback State**: Run `git reset --hard HEAD` and `git clean -fd` to wipe the probabilistic garbage.

## PHASE 3: REHYDRATION
1. **Extract Intent**: Review `agent-rot.patch`. Extract the *actual goal* of the agent, ignoring its hallucinated implementation.
2. **Update Repo Map**: If the agent failed because it didn't understand the architecture, update `repo-map-template.md` to explicitly define the missing boundaries.
3. **Initialize Clean Session**: Open a new agent session. Provide ONLY the updated Repo Map and the precise, constrained goal. Do not feed it the old patch.

## POST-INCIDENT REVIEW
Log the reset in the Operational Failure Database to track retry inflation metrics and calculate the Synthetic COGS burned during the rot.
