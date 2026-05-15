# CONTEXT ISOLATION FRAMEWORK

## THE GLOBAL ACCESS VULNERABILITY
When an agent is initialized with an MCP Server (e.g., SQLite, Filesystem, GitHub), the default behavior in most orchestrators is to expose the *entire* toolset to the agent's context window.
This is a fatal security flaw. If an agent task is to "write a CSS button," it does not need access to the `query_database` tool.

## CONTEXT ISOLATION ARCHITECTURE

Context Isolation mandates that MCP servers are dynamically spun up and torn down per-task, with their toolset strictly scoped to the exact requirements of the agentic prompt.

### 1. Task-Scoped Provisioning
Instead of starting the agent with `--mcp github sqlite filesystem`, the agent is passed a deterministic task manifest.

```yaml
task: "Update Login Button Styles"
allowed_mcp_servers:
  - filesystem:
      allowed_tools: ["read_file", "write_file"]
      scope: "/src/components/ui"
```

### 2. The Context Sandbox
The `ToolAccessMiddleware` enforces the sandbox. If the LLM hallucinates a `query_database` command because it "remembers" the tool from a previous session, the middleware physically blocks the request because the tool is not provisioned in the current execution scope.

### 3. Exfiltration Boundaries
Even within an allowed tool (e.g., `read_file`), the middleware validates the argument payload. If the agent attempts to read `/.env`, the request is blocked, logged as a security breach, and the session is terminated.
