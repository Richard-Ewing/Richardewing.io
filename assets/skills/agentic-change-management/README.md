# OPERATIONAL MANUAL: Agentic Change Management

## 1. EXECUTIVE COMPRESSION

**Problem:** Traditional ITIL/Change Management processes rely on human velocity (e.g., Change Advisory Boards meeting weekly). Agentic workflows deploy infrastructure and code mutations at machine speed, bypassing traditional CABs entirely.
**Consequence:** *Operational Blindness.* Agents modify cloud infrastructure, database schemas, and core routing logic without formal human approval, creating massive compliance and security liabilities. 
**Remediation:** Implement Agentic Change Management (ACM). Rebuild the CAB as a programmatic, real-time middleware layer. Agents must mathematically prove the safety of their mutations and secure deterministic approval before execution.

## 2. FAILURE TAXONOMY

### Symptoms
- An agent autonomously updates a Terraform state file, taking down a staging environment without an audit trail.
- Vercel or AWS bills spike because an agent deployed 40 unapproved test branches.
- SOC2/ISO auditors flag unauthorized automated deployments to production.

### Root Causes
- **Missing Execution Authority:** Treating an LLM as a "Super Admin" rather than a zero-trust external actor.
- **Human-Speed CABs:** Trying to govern a 10-second agentic deployment with a 7-day human approval process.

### Economic Impact
- **Compliance Failure & Downtime:** Unapproved structural mutations cause cascading outages that cost millions in SLAs and regulatory fines.

## 3. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Change Approval Engine (`change-approval-engine.ts`)**: Middleware that intercepts all deployment and structural mutation commands, forcing them through an algorithmic Change Advisory Board.
2. **Execution Authority Policy (`execution-authority-policy.yaml`)**: Defines what tier of mutations an agent can execute autonomously (e.g., CSS changes) vs what requires human cryptographic sign-off (e.g., Database migrations).
3. **Mutation Risk Detector (`mutation-risk-detector.ts`)**: Analyzes the blast radius of the agent's proposed code before it is allowed to execute.

## 4. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

Exogram *is* your automated Change Advisory Board. It sits between the orchestrator and your infrastructure, scoring the risk of every agentic mutation in milliseconds. If the risk exceeds the autonomous threshold, Exogram physically blocks the deployment and routes an approval ticket to the human executive.
