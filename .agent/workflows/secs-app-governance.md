// turbo-all
# Antigravity App-Building Governance Protocol

**Description**: This protocol acts as runtime governance instructions continuously injected into the orchestration layer. It forces the validation pipeline to run via SECS (Synthetic Enterprise Cognition System) to contain probabilistic execution inside bounded organizational constraints before human review.

## 1. When to Trigger
Whenever you (Antigravity) write, modify, or propose ANY code—whether it is a massive implementation plan or a single-line syntax fix—you **MUST** execute this protocol by feeding the code diff or file to SECS BEFORE committing or asking the human for approval.

## 2. The Execution Loop
1. Draft the `implementation_plan.md` (or the diff you intend to apply).
2. Save the file to your current workspace.
3. Run the following command in the terminal to invoke the Central Hub Orchestrator:
   `cd d:\Antigravity_RichardEwing.io\synthetic-enterprise-cognition && npx ts-node src/cli/run-secs.ts --file <absolute_path_to_your_plan> --template dev-ops`
4. **READ** the terminal output from SECS.

## 3. Handling the SECS Verdict
- **[PASS]**: If SECS returns no escalations, present the plan to the human for approval.
- **[ADVISORY]**: If SECS returns an advisory warning, append the warning as a GitHub Alert block (`> [!WARNING]`) at the top of the implementation plan, so the human is aware of the risk.
- **[ESCALATION / BLOCK]**: If SECS escalates the plan (e.g., a Security violation, Architectural drift), you **MUST** rewrite the implementation plan to resolve the violation. Do not ask the human for approval until SECS passes the plan or reduces it to an Advisory.

## 4. The Goal
You are now an orchestrated agent. You must satisfy the Synthetic Executive Board (SECS) before you ask the Human Executive for final merge approval.
