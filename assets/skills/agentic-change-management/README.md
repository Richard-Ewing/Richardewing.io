# OPERATIONAL MANUAL: Agentic Change Management

## 1. EXECUTIVE COMPRESSION

**Problem:** Autonomous infrastructure mutations bypass traditional ITIL and CAB (Change Advisory Board) processes. When an agent has the credentials to provision AWS instances, modify Terraform states, or push to production branches, a hallucination can cause catastrophic downtime or security breaches without any human awareness until the incident occurs.

**Consequence:** "Governance Bypass". The enterprise loses cryptographic control over its own infrastructure. Unapproved architectural changes are deployed autonomously, voiding compliance frameworks (SOC2, ISO27001) and exposing the company to unquantifiable liability.

**Remediation:** Implement **Agentic Change Management**. High-risk operations must be intercepted by a Mutation Risk Detector. If a requested action exceeds risk thresholds, the execution is mathematically halted and routed to a cryptographic human approval engine (an automated, high-speed CAB) before the agent is allowed to proceed.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **Unauthorized Deployments**: Agents pushing code to production environments outside of approved release windows.
- **Infrastructure Mutation**: Terraform or Kubernetes manifests being altered without a corresponding Jira ticket or CAB approval.
- **Compliance Violations**: Automated compliance scanners flagging unauthorized port openings or permission escalations caused by agentic actions.

### Root Causes
- **Implicit Trust**: Assuming that because an agent generated the code, it is safe to execute the deployment tool.
- **Lack of High-Speed CAB**: Traditional change management is too slow for agentic workflows, so teams bypass it entirely instead of automating the approval gating.

### Economic Impact
- **Compliance Fines**: Violating strict regulatory frameworks due to untracked infrastructure changes.
- **Catastrophic Downtime**: A hallucinated agent tears down a production database, causing massive revenue loss and SLA penalties.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`high_risk_mutations_attempted`**: Total count of interceptable high-risk operations per hour.
- **`cab_rejection_rate`**: If humans are rejecting > 20% of agentic change requests, the agent lacks structural alignment.
- **`unapproved_architectural_changes`**: Any value > 0 means the Change Approval Engine failed to intercept an action.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Execution Authority Policy (`execution-authority-policy.yaml`)**: Declares the exact mapping of operations to their required approval tier (Auto-Approve, Code Owner, SecOps CAB).
2. **Mutation Risk Detector (`mutation-risk-detector.ts`)**: Middleware that intercepts commands and calculates the blast radius and risk score of the proposed mutation.
3. **Change Approval Engine (`change-approval-engine.ts`)**: The cryptographic execution gate that forces the agent into a "Wait State" while polling for a signed human approval token.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Define Authority**: Map your infrastructure operations (e.g., `aws_apply`, `kubectl_delete`) in `execution-authority-policy.yaml`.
2. **Deploy the Detector**: Wrap your agent's shell/infrastructure execution tools with `mutation-risk-detector.ts`.
3. **Integrate the CAB**: Connect `change-approval-engine.ts` to your human escalation pipeline (e.g., Slack Interactive Blocks, Jira Approvals).

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

Exogram provides the **Agentic CAB Interface**. When the Change Approval Engine intercepts a high-risk mutation, Exogram immediately pings the designated human authority with a clear diff of the proposed change, the calculated risk score, and explicit Approve/Reject buttons. If approved, Exogram cryptographically signs the payload and unlocks the agent's execution container.
