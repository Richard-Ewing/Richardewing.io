# Capability Routing Matrix

This matrix defines the Weighted Activation protocol for the Synthetic Enterprise. When a task is ingested, the engine evaluates its properties and routes it to the most capable persona based on predefined weights.

## Persona Weights

- **Architect Persona**: 
  - Complexity: High (80-100)
  - Abstraction: High
  - Execution Speed: Low
  - Primary Tooling: Architecture Design, System Review, Memory Injection

- **Operator Persona**:
  - Complexity: Medium (40-79)
  - Abstraction: Low
  - Execution Speed: High
  - Primary Tooling: Code Writing, Debugging, Script Execution

- **QA/Verification Persona**:
  - Complexity: Low-Medium
  - Abstraction: Low
  - Execution Speed: High
  - Primary Tooling: Testing Frameworks, Linting, Dependency Auditing

## Dynamic Re-Routing

If an Operator Persona encounters an abstraction error or architectural blocker, the Weighted Activation engine dynamically pauses the task and routes it to an Architect Persona for a `THINK` and `PLAN` cycle.
