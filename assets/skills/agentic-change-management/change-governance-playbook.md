# CHANGE GOVERNANCE PLAYBOOK

## PROTOCOL FOR CRITICAL MUTATIONS
When the `ChangeApprovalEngine` intercepts and blocks an agent from executing a CRITICAL mutation, follow this playbook.

### 1. The Interception Event
The agent proposes a change to a database schema or infrastructure state.
The orchestrator logs a `[GOVERNANCE REJECT]`.
The agent's session is placed in a `PENDING_EXECUTIVE_SIGNOFF` state. The agent is paused, NOT terminated.

### 2. Executive Review
A human executive must review the exact `diff` payload the agent attempted to execute.
- Do NOT read the agent's explanation of what it did. (Agents can hallucinate their summaries).
- Read the raw code.
- Validate that the infrastructure mutation aligns with the current sprint objectives.

### 3. Cryptographic Sign-off
If the change is approved, the human executive uses a dedicated terminal command or internal UI to inject a cryptographic approval token into the agent's session:
`exogram approve --session-id <ID> --override-tier CRITICAL`

### 4. Resumption
The orchestrator reads the approval token, bypasses the `ExecutionAuthorityPolicy`, and allows the agent to execute the mutation.

## THE GOLDEN RULE OF AGENTIC CAB
**Never give an agent global Admin rights.** Agents must operate on the Principle of Least Privilege, requesting elevated access at runtime via the CAB middleware, exactly like a human engineer requesting a temporary production credential.
