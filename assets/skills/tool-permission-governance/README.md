# OPERATIONAL MANUAL: Tool Permission Governance

## 1. EXECUTIVE COMPRESSION

**Problem:** Agents connected via the Model Context Protocol (MCP) or direct function calling are frequently over-permissioned. Giving an agent global access to `execute_bash`, `write_file`, and `github_commit` across the entire workspace creates a massive blast radius. If the agent hallucinates, it can rewrite core infrastructure or exfiltrate environment variables.

**Consequence:** "Capability Escalation" and "Tool-chain Contamination". An agent tasked with writing a simple unit test hallucinates and decides to refactor the database schema because it has access to the database tool. 

**Remediation:** Implement **Dynamic Scope Engines and Capability Validators**. Tools must be provisioned dynamically based on a strict task manifest, and every tool execution must be cryptographically validated against the agent's explicit permissions.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **Unrestricted MCP Access**: Agents invoke tools entirely unrelated to their assigned objective.
- **Over-Permissioned Agents**: Agents use global read/write access to mutate files outside their working directory.
- **Capability Escalation**: A sub-agent inherits global admin rights from the Master Orchestrator, bypassing the principle of least privilege.

### Root Causes
- **Global Tool Initialization**: Passing the entire array of MCP tools into the LLM context regardless of the specific task.
- **Missing Runtime Validators**: Trusting the LLM to only use the tools it "needs", rather than enforcing a hard rejection at the tool execution layer.

### Economic Impact
- **Security Liability**: Unbounded agents present a massive data exfiltration and compliance risk.
- **Architectural Destruction**: Accidental deletion or mutation of production infrastructure.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`unauthorized_tool_invocations`**: High counts indicate an agent is hallucinating capabilities it shouldn't have.
- **`tool_execution_rejections`**: Tracks how effectively the Capability Validator is blocking unsafe requests.
- **`average_tools_per_context`**: If this number is consistently > 10, your agents are over-permissioned and your context window is bloated.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Permission Boundary Policy (`permission-boundary-policy.yaml`)**: Defines the exact mapping of objectives to permitted tools.
2. **Tool Scope Engine (`tool-scope-engine.ts`)**: Dynamically provisions only the required tools into the LLM's context window based on the current objective.
3. **Capability Validator (`capability-validator.ts`)**: The hard execution gate. Even if an LLM hallucinates a tool call, this middleware intercepts the function execution and throws a Governance Halt if the agent lacks the specific role.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Map the Boundaries**: Edit `permission-boundary-policy.yaml` to map your specific MCP tools to discrete Agent Roles (e.g., `role_frontend_coder`, `role_db_admin`).
2. **Deploy the Engine**: Intercept your LangChain/CrewAI agent initialization with `tool-scope-engine.ts` so agents are born with restricted capabilities.
3. **Secure the Execution Layer**: Wrap the actual execution logic of your tools with `capability-validator.ts`.

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

By piping the Capability Validator logs into Exogram, Security teams can view a real-time RBAC (Role-Based Access Control) matrix of all autonomous agents. Exogram instantly flags and visualizes any agent attempting "Capability Escalation," allowing SecOps to kill the container at the network level.
