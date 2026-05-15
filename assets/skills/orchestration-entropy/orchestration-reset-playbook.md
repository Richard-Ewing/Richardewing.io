# ORCHESTRATION RESET PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `OrchestratorGovernor` trips the `ENTROPY_CIRCUIT_BREAKER`.

### 1. TERMINATE THE RUNTIME
If the governor has halted the workflow, all active LLM threads must be physically killed. Do not allow "Agent A" to send a final apology message to "Agent B". Terminate the orchestration process at the OS level.

### 2. AUDIT THE HANDOFF LOGS
Check the agent telemetry to find the exact node where semantic drift occurred.
Example:
`Agent_Planner` generated a valid task list. `Agent_Coder` executed the list. `Agent_Reviewer` hallucinated a new requirement that wasn't in the original prompt, causing `Agent_Coder` to enter a recursive loop trying to satisfy the hallucinated requirement.

### 3. RECOVER FROM CHECKPOINT
Do not restart the workflow from the beginning.
Use the `WorkflowCheckpointEngine` to read `.agent/workflow-state.json`.
Restore the state to `Agent_Coder`'s successful output, bypassing the hallucinated failure state of `Agent_Reviewer`.

### 4. TIGHTEN ENTROPY BOUNDARIES
If the network collapsed due to an agreement loop, update `entropy-thresholds.yaml` to enforce a strict `max_idle_time_seconds`. Agents must generate code or terminate; they are not allowed to chat indefinitely.
