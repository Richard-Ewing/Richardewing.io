# PLAYBOOK: Tool Chain Escalation

When the `CapabilityValidator` intercepts an unauthorized tool execution attempt, a critical security event has occurred. The agent has hallucinated access to infrastructure it does not own.

## Scenario 1: Sub-Agent Inherits Global Scope (Contamination)
**Trigger:** A `frontend_coder` agent attempts to execute `db_drop_table`.

**Human Action:**
1. Do **not** allow the agent to continue execution. The container is compromised.
2. Investigate the orchestrator's initialization logic. Ensure that the `ToolScopeEngine` is being called *per-agent*, rather than pushing the entire MCP server capability list into a global LLM prompt template.
3. Check the prompt injection vectors. Did the user or the orchestrator paste instructions containing database schemas, tricking the `frontend_coder` into assuming it had database responsibilities?

## Scenario 2: Globally Restricted Tool Invocation
**Trigger:** The orchestrator attempts to invoke `execute_bash_sudo`.

**Human Action:**
1. This is a severe architectural violation.
2. Immediate SecOps audit of the LLM context to determine how the agent learned of the `execute_bash_sudo` tool's existence. (Often, tools are accidentally leaked in system prompt instructions like "Do not use execute_bash_sudo").
3. Do not list globally restricted tools in system prompts; the LLM will hallucinate them. Remove all references to the tool from the context window entirely.
