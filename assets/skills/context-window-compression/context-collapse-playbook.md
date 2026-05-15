# CONTEXT COLLAPSE PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `ContextBoundaryValidator` detects that the agent has violated a P0 rule, indicating full Context Saturation Collapse.

### 1. HALT THE SESSION
The agent has gone "blind" to its instructions. Allowing it to continue will only cause it to compound its errors and hallucinate further.

### 2. AUDIT THE PAYLOAD
Inspect the token payload that was sent to the LLM immediately prior to the collapse.
- Was the `System Prompt` present?
- Was the `ContextCompressionEngine` properly engaged, or did a massive block of uncompressed code push the constraints out of the attention window?

### 3. FORCE A CHECKPOINT ROTATION
When an agent suffers context collapse, you cannot simply remind it of the rules. The context window is too full.
1. Sever the session.
2. Run the `CheckpointRotation` engine to summarize the agent's progress so far.
3. Spawn a *brand new* agent session.
4. Pass the new agent the P0 System Prompt and the compressed summary.
5. Do NOT pass the new agent the raw conversation history of the failed session.

### 4. RE-EVALUATE THE TASK SCOPE
If an agent consistently suffers context collapse on a specific task, the task is too broad. "Build a website" is a guaranteed context collapse. "Create the CSS for the login button" is a mathematically bounded, high-fidelity task.
