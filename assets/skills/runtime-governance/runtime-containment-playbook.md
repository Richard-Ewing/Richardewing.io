# RUNTIME CONTAINMENT PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `RollbackCircuit` triggers a `[FATAL] GOVERNANCE CONTAINMENT PROTOCOL INITIATED`.

### 1. SEVER AND ISOLATE
The agent orchestration thread has already been terminated by the circuit breaker. 
**DO NOT ATTEMPT TO RESUME THE SESSION.** The context window contains intent for destructive execution and is considered highly compromised.

### 2. AUDIT THE ADMISSIBILITY LOGS
Review the interceptor logs to determine the exact payload the agent attempted to execute.
Example:
```txt
[GOVERNANCE REJECT] Command blocked by policy: rm -rf /var/lib/postgresql
```

### 3. DIAGNOSE THE PROBABILITY DRIFT
Agents rarely execute destructive commands maliciously. They execute them because of *probabilistic state decay*.
- Did the agent hallucinate the location of a cache folder and attempt to delete a database volume instead?
- Was the agent caught in a retry loop and attempted to unilaterally wipe the environment to "start fresh"?

### 4. UPDATE GOVERNANCE BOUNDARIES
If the agent attempted an action that was blocked, but the action *should* be admissible under certain contexts, DO NOT bypass the interceptor. Instead, update `runtime-policy.yaml` to explicitly whitelist the exact execution vector.

### 5. REINITIALIZE WITH CONSTRAINTS
Initialize a clean orchestrator session. Provide the agent with the explicit architectural boundaries it hallucinated, ensuring deterministic constraints are re-established before runtime access is granted.
