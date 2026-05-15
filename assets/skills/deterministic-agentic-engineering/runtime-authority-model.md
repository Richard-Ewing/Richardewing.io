# RUNTIME AUTHORITY MODEL

## THE ZERO-TRUST AGENTIC PYRAMID

### 1. The LLM (Level 0 - Zero Authority)
The raw LLM client (Anthropic, OpenAI) possesses zero execution authority. It is treated as a highly capable but fundamentally untrusted external text generator. It cannot touch the file system. It cannot deploy code. It can only emit JSON.

### 2. The Deterministic Runtime (Level 1 - Execution Context)
This is the sandbox where the LLM operates. It provisions temporary, scoped access to specific files and injects context based on the Memory Priority Policy.

### 3. The 14 Governance Engines (Level 2 - Mathematical Enforcement)
The output from Level 1 must pass through the gauntlet of the 14 Governance Subsystems. 
- *Is it too expensive?* (Cost Containment)
- *Did it hallucinate?* (Hallucination Debt)
- *Did it access forbidden files?* (Autonomous Execution Safety)

### 4. The Governance Orchestrator (Level 3 - The Kernel)
If and only if the output survives Level 2, the master orchestrator takes the output and grants it physical reality by committing it to the repository or executing the deployment pipeline.

### 5. The Human Executive (Level 4 - Ultimate Override)
The human sits entirely outside the execution loop, managing the YAML policies that define Level 2. The human is only pinged when Level 2 mathematical thresholds require an escalation override.
