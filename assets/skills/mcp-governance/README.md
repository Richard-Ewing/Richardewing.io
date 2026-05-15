# OPERATIONAL MANUAL: MCP Governance

## 1. EXECUTIVE COMPRESSION

**Problem:** The Model Context Protocol (MCP) gives agents unprecedented access to local infrastructure, APIs, and databases. However, granting global MCP tool access to an LLM creates an unconstrained attack vector and massive data exfiltration risk.
**Consequence:** An agent tasked with writing a React component uses its MCP database tool to drop a production table, or uses an MCP file tool to read and leak `.env` secrets into the context window.
**Remediation:** Establish enterprise-grade protocol governance. Tool access must be contextually isolated, strictly permissioned via policy-as-code, and gated by admissibility middleware.

## 2. FAILURE TAXONOMY

### Symptoms
- **Unintended Tool Execution:** An agent uses a "search web" tool when asked to read a local file.
- **Data Exfiltration:** An agent reads a file containing API keys and logs them to an external endpoint or includes them in its text generation payload.
- **Server Overload:** An agent gets caught in a loop repeatedly querying an MCP database tool, causing a localized DDoS.

### Root Causes
- **Global Tool Provisioning:** Giving an agent access to all available MCP tools regardless of the specific task scope.
- **Lack of Payload Inspection:** Failing to inspect the arguments an agent passes to an MCP tool before the tool executes.

### Economic Impact
- **Security Breaches:** The cost of a leaked API key or a wiped database is devastating to enterprise value.
- **Compliance Violations:** Failing audits due to the inability to prove deterministic access control for autonomous systems.

### Governance Implications
- MCP is powerful infrastructure. Deploying it without a governance layer violates zero-trust principles. Agents must operate under the principle of least privilege.

## 3. REAL PAIN SIGNALS

If your security team is saying these things, you need MCP Governance:
> *"Why did the agent try to read the `.aws/credentials` file?"*
> *"The orchestrator just sent 500 requests to our internal API in 2 minutes."*
> *"We can't prove to auditors what the agent is actually allowed to do."*

## 4. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The MCP Policy (`mcp-policy.yaml`)**: The strict declarative manifest that defines exactly which tools are allowed, rate limits, and which files/endpoints are mathematically off-limits.
2. **Tool Access Middleware (`tool-access-middleware.ts`)**: The interceptor that parses the LLM's `tool_calls` payload, validates the arguments against the policy, and either permits or blocks the execution.
3. **Context Isolation Framework (`context-isolation.md`)**: The architectural pattern for spinning up scoped MCP servers tailored to the specific agentic task, eliminating global access entirely.

## 5. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

By placing Exogram between the Orchestrator and the MCP Server, every single tool call is cryptographically validated, rate-limited, and audited. Exogram turns the Model Context Protocol from a security liability into a governed enterprise asset.
