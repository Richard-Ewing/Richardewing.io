# PLAYBOOK: Context Collapse Remediation

When the `ContextCompressionEngine` fails to keep the LLM within deterministic bounds, or when the `CheckpointRotation` is triggered, human operators must ensure the agent is successfully restored.

## Scenario 1: Token Ceiling Warning
**Trigger:** `ContextCompressionEngine` reports: `Payload > 16k Tokens`.

**Human Action:**
1. The agent's tools are returning massive payloads. Check the `Tier 3` (Tool Outputs) logs.
2. Did the agent run `cat package-lock.json`? This will instantly blow out the context window.
3. Update the `memory-priority-policy.yaml` to enforce a stricter `TRUNCATE_OR_SUMMARIZE` limit on tool outputs.

## Scenario 2: Hallucinated Checkpoint State
**Trigger:** After a Checkpoint Rotation, the agent complains that it is missing variables or context that it "thought" it had.

**Human Action:**
1. The `ExecutionState` passed into the Checkpoint Rotation was incomplete.
2. The agent relied on implicit memory that was evicted during the semantic reset.
3. Review the `criticalLearnings` array. Instruct the agent to explicitly write down environmental assumptions (e.g., "The auth token is in local storage, not cookies") before triggering a rotation.

## Scenario 3: System Prompt Attention Loss
**Trigger:** The agent begins violating explicit negative constraints (e.g., "NEVER write Python") deep into a session.

**Human Action:**
1. The context window is too full, and the LLM's attention mechanism has diluted the System Prompt (the "Lost in the Middle" phenomenon).
2. Manually trigger a Checkpoint Rotation immediately.
3. Lower the `max_total_context` in `memory-priority-policy.yaml`. A smaller context window forces the model to pay more attention to the Tier 1 System Prompt.
