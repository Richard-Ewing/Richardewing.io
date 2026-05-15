# RETRY ESCALATION MATRIX

## 1. THE 3-STRIKE RULE

**Strike 1 (Test Failure):** 
- *Action:* Autonomous correction. The orchestrator feeds the error logs back to the agent.
- *Cost Impact:* Minimal token burn.

**Strike 2 (Recursive Failure):**
- *Action:* Warning generated. The `RecursiveLoopDetector` analyzes the patch. If the agent is trying the same approach, the orchestrator injects a "Pattern Interrupt" prompt to force a new tactical approach.
- *Cost Impact:* Moderate token burn.

**Strike 3 (Budget Breach or Loop Confirmed):**
- *Action:* `RETRY_INFLATION_CIRCUIT_BREAKER_TRIPPED`. The session is physically severed. The repository is rolled back to the pre-session state.
- *Cost Impact:* Budget ceiling hit.

## 2. HUMAN ESCALATION
When Strike 3 is triggered, a human engineer is required to intervene. The engineer must NOT attempt to "help the agent fix the code." 
Instead, the engineer must debug the *prompt constraints* or the *repo map*. Why did the agent fail? 
- Did it hallucinate an API endpoint?
- Were the architectural boundaries poorly defined?
Update the deterministic context, then spawn a clean agent session.
