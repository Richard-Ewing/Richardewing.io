# COST CONTAINMENT PLAYBOOK

## PROTOCOL FOR BUDGET BREACHES
When an agent session triggers the `RETRY_INFLATION_CIRCUIT_BREAKER`, follow this strict operational protocol to diagnose the financial leak.

### Step 1: Secure the Environment
Ensure the orchestration thread is completely severed. An agent caught in a recursive loop can burn hundreds of dollars in minutes if the circuit breaker fails. 

### Step 2: Audit the Token Burn
Review the `retry-telemetry-model.csv`.
- Was the burn caused by a massive context window (e.g., passing the entire Next.js `/app` directory into the prompt)?
- Or was the burn caused by high frequency (e.g., passing a small file 50 times in a row)?

### Step 3: Implement Context Compression
If the burn was caused by a massive context window, the task must be broken down. Do not ask an agent to "Refactor the UI." Ask the agent to "Update the color variable in `Button.tsx`." Smaller context windows equal lower baseline costs and faster deterministic validation.

### Step 4: Adjust the YAML Policy
If the task inherently requires a high token count (e.g., processing a large architectural document) and the agent was successful but tripped the breaker prematurely, update the `max_usd_per_session` in `retry-budget-policy.yaml` for that specific task class.
