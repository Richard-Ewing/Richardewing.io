# TOOL CHAIN ESCALATION PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `CapabilityValidator` intercepts a malicious payload, or when an agent attempts to access a tool outside its provisioned scope.

### 1. SEVER THE SESSION
An agent attempting to access `.env` files or execute `DROP TABLE` is exhibiting severe hallucination or has been compromised via prompt injection. Do not allow it to retry. Terminate the session immediately.

### 2. AUDIT THE MCP LOGS
Review the payload the agent generated.
- Was the agent tricked into accessing the `.env` file because a user prompt told it to "find the Stripe key"?
- If yes, the governance middleware successfully stopped a Prompt Injection attack.
- If no, the agent hallucinated the need for the file.

### 3. REFINE TOOL SCOPES
Review the `ToolScopeEngine`. Is the `FRONTEND_UI_UPDATE` task mistakenly provisioned with the `execute_sql` tool? If an agent doesn't need a tool to accomplish its specific atomic task, it must not have access to it.

### 4. THE GOLDEN RULE OF MCP
**Default to Zero.** An agent should be initialized with zero tools. Tools are injected at runtime based *only* on the deterministic requirements of the current execution node.
