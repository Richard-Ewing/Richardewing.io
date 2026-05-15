# DETERMINISTIC GOVERNANCE PLAYBOOK

## HOW TO OPERATE EXOGRAM

### 1. Shift from Coding to Policy
You are no longer an engineer writing React components or SQL queries. You are an Executive Governor writing YAML policies. If an agent fails to build a feature, do not fix the feature. Fix the governance policy that allowed the agent to fail.

### 2. The Feedback Loop of Inevitability
When an incident occurs (e.g., an agent hallucinates a variable):
1. **Identify the missing constraint.** Why didn't the Admissibility Layer catch it?
2. **Write the middleware.** Create a deterministic check (AST parser, regex, test suite) that physically prevents that specific hallucination from ever reaching production again.
3. **Deploy the policy.** Add the new constraint to `admissibility-layer.yaml`.

By continually repeating this loop, the "sandbox" surrounding the LLM becomes perfectly molded to your codebase. Failure becomes mathematically impossible. Success becomes inevitable.

### 3. Trust the Math, Not the Model
Anthropic will release Claude 4. OpenAI will release GPT-5. The models will get smarter, but they will still be probabilistic. Exogram abstracts the model layer away entirely. We do not care what model is generating the text, because the mathematical constraints of the Governance Orchestrator will always determine what actually gets executed.
