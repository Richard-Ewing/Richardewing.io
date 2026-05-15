# APPROVAL ESCALATION MATRIX

## TIER 1: LOW RISK (AUTONOMOUS)
- **Mutation Type:** UI updates, CSS changes, static documentation edits.
- **Approval Required:** None.
- **Workflow:** Agent executes changes immediately. Changes are pushed directly to the feature branch.

## TIER 2: HIGH RISK (PEER REVIEW)
- **Mutation Type:** API logic, state management, dependency upgrades.
- **Approval Required:** Standard Human PR Review.
- **Workflow:** Agent generates the code locally but is mathematically blocked from executing `git merge main`. It must submit a Pull Request and await human peer review.

## TIER 3: CRITICAL RISK (EXECUTIVE OVERRIDE)
- **Mutation Type:** Database migrations, infrastructure/Terraform state, CI/CD pipeline modifications, governance policy changes.
- **Approval Required:** Cryptographic Executive Sign-off.
- **Workflow:** Agent execution is immediately paused. A secure webhook sends the exact mutation payload to the SRE/DevOps team. The agent cannot proceed until an external override token is injected into its orchestration loop.
