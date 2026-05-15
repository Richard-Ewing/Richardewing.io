# SEMANTIC CONTAMINATION DETECTOR

> Use this checklist to deterministically identify if an agentic session has entered Context Rot and requires a semantic reset.

## THE BINARY ROT CHECKLIST

If ANY of these boxes are checked, the session is corrupted. **HALT EXECUTION IMMEDIATELY.**

- [ ] **Recursive Patching**: Is the agent proposing a fix for an error that was caused by its own previous fix within the same session?
- [ ] **Architectural Hallucination**: Is the agent referencing files, directories, or libraries that do not exist in the repository?
- [ ] **Constraint Amnesia**: Has the agent violated a core system prompt or architectural directive (e.g., using dark mode in a strictly light-mode application)?
- [ ] **Over-Scoping**: Did you ask for a minor UI tweak, and the agent is attempting to rewrite the entire routing infrastructure or global state manager?
- [ ] **Apology Loops**: Has the agent output "I apologize for the confusion" more than two times without successfully advancing the code state?
- [ ] **Synthetic QA Dominance**: Are you spending more time reading the agent's code to verify it than it would have taken to write the code yourself?

## GOVERNANCE DIRECTIVE
Do not attempt to "correct" an agent that triggers this checklist. You cannot prompt your way out of semantic contamination. The context window is poisoned. 
**Action:** Execute the Semantic Reset Playbook immediately.
