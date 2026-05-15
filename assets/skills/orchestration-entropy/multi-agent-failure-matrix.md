# MULTI-AGENT FAILURE MATRIX

Use this matrix to diagnose the specific type of Orchestration Entropy affecting your agent network.

| Entropy Type | Symptom | Telemetry Signal | Remediation Action |
|--------------|---------|------------------|--------------------|
| **Agreement Loop** | Agents infinitely compliment/agree with each other's plans without executing tools. | `max_idle_time` exceeded; high token count, 0 tool calls. | Inject system interrupt: `EXECUTE_OR_TERMINATE`. Limit chain depth. |
| **Semantic Drift** | The final agent's output has nothing to do with the original prompt. | Payload variance score `> 0.15`. | Enforce `require_schema_match_on_handoff`. Pass original intent in every payload. |
| **Recursion Spiral** | Agent A asks Agent B for data. Agent B asks Agent A for clarification. Repeat. | Rapidly increasing `chain_depth`. | Implement `OrchestratorGovernor` to strictly kill chains where `depth > 5`. |
| **Tool Execution Hang** | Agent chain freezes while waiting for a single agent to finish a long-running/failed tool. | `max_workflow_duration` breached. | Implement deterministic timeouts on all MCP tool calls. |
