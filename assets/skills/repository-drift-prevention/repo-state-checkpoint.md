# REPOSITORY STATE CHECKPOINTING

## THE CONCURRENCY PROBLEM
Agents operate much faster than human reviewers. If Agent A creates a PR on Monday morning, and Agent B creates a PR on Monday afternoon, Agent B's internal model of the repository is already stale because it does not account for the pending mutations proposed by Agent A.
If both PRs are merged, structural divergence occurs.

## CHECKPOINT DOCTRINE
Before an agent is allowed to execute a single line of code, the orchestrator MUST perform a State Checkpoint.

### 1. Hard Synchronization
The orchestrator must run `git fetch` and `git rebase origin/main`. If the rebase fails, the agent session is immediately terminated. Agents are not permitted to resolve complex human merge conflicts autonomously.

### 2. Repo-Map Ingestion
The agent must read the generated `repo-map.txt` (a tree of all files and core abstractions) and log an acknowledgment: `[SYSTEM] REPO_MAP_INGESTED`. 

### 3. Divergence Scanning
Upon task completion, before the PR is opened, the `RepoDivergenceDetector` scans the AST of the modified files. If the agent introduced deprecated libraries, bypassed the ORM, or violated the design system, the PR is blocked and the agent is forced to rewrite the implementation using the correct architectural primitives.
