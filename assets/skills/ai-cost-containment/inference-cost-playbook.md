# INFERENCE COST PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `CostContainmentEngine` severs an API connection due to a budget breach.

### 1. SEVER AND ISOLATE
The agent session has hit its USD ceiling. Do not increase the budget and click "retry". This is the sunk cost fallacy applied to agentic engineering. The agent has proven it cannot solve the problem efficiently.

### 2. AUDIT THE BURN
Check the `cost-governance-dashboard.csv` to identify the token leak.
- **High Input Tokens, Low Output:** The context window is too large. The agent is repeatedly reading a massive repo map or 50 irrelevant files. *Fix: Implement Context Compression or narrow the task scope.*
- **High Output Tokens, High Input Tokens:** The agent is stuck in an infinite retry loop, generating massive patches that fail validation over and over. *Fix: Check the Test logs. Why is the code failing?*

### 3. THE "FALLBACK TO MINI" STRATEGY
If a task is repeatedly hitting the `MEDIUM_COMPLEXITY` budget of $2.50 using `claude-3-5-sonnet`, do not upgrade the budget. Instead, break the task into three smaller tasks and run them using `gpt-4o-mini`. 
Smaller, more atomic tasks executed on cheaper models yield higher deterministic reliability than massive, complex tasks executed on expensive models.
