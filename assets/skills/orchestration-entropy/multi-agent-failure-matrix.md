# MULTI-AGENT FAILURE MATRIX

This matrix correlates the observed multi-agent telemetry with the specific architectural failure and the required governance intervention.

| Observed Telemetry Signal | Diagnostic Root Cause | Orchestrator Governor Intervention | Exogram Impact |
| :--- | :--- | :--- | :--- |
| **Turns per objective > 35** | Agent confusion or recursive patching | `max_turns_per_workflow` limit breached -> HALT | Prevents massive token API burn. |
| **Messages contain "I agree" / "Let's do it" > 3 times** | Polite Alignment Protocol override | `max_consecutive_agreements` limit breached -> HALT | Forces tool usage over conversation. |
| **Sub-agent nesting > 3 levels** | Delegation hallucination | `max_delegation_depth` limit breached -> HALT | Maintains context clarity and prevents runaway spawning. |
| **Handoff lacks JSON schema** | Hallucinated completion state | `WorkflowCheckpointEngine` rejects payload -> RETRY | Guarantees downstream agents receive parseable data. |
| **Agent invokes tool with same params 4 times** | Tool execution loop | Governor detects duplicate params -> HALT | Prevents spamming internal APIs or shell commands. |
