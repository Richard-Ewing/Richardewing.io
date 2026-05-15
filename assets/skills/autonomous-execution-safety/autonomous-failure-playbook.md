# AUTONOMOUS FAILURE PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `EscalationHaltSystem` terminates an agent due to a malicious or forbidden command.

### 1. ASSESS THE INTENT
Did the agent attempt a destructive command (`rm -rf`) maliciously, or due to a hallucinated instruction?
Usually, this occurs when an agent tries to "clean up" a build directory but hallucinates the absolute path.

### 2. REINFORCE THE SANDBOX
If the agent attempted a command that was not on the `forbidden_commands` list but still caused damage, you must update `execution-safety-policy.yaml` immediately.
The safety policy is a **Default Deny** architecture. Unless a command prefix is explicitly in `allowed_commands`, it must be rejected.

### 3. AUDIT THE ORCHESTRATOR PAYLOAD
Inspect the prompt that led to the hallucination. Did a user tell the agent to "delete everything and start over"? If so, the user is injecting destructive prompts. The governance middleware worked correctly by blocking the execution.

### 4. RECOVERY
1. The agent session is dead. Do not restart it.
2. If the agent managed to execute partial commands before the halt, run `git reset --hard HEAD` to clear the working directory.
3. Inform the user that the operation required escalated privileges that the agent does not possess.
