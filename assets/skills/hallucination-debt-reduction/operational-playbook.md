# Hallucination Debt Reduction — Operational Playbook

## Purpose
This playbook defines the operational procedures for detecting, containing, and reducing hallucination debt in AI-generated code.

## When to Execute
- Agent generates code with unresolvable imports
- Confidence score drops below 0.85 threshold
- Post-merge bug rate exceeds 5% in any sprint
- Review burden exceeds 6 hours/day for any reviewer

## Procedure

### Step 1: Detect
Run the `HallucinationValidator` against all pending AI-generated PRs.
```bash
npx ts-node validate-output.ts --scan-pending
```

### Step 2: Classify
- **Phantom Imports**: Immediately block merge. Return to agent with explicit dependency list.
- **Low Confidence (<0.75)**: Auto-reject. Provide structured feedback for re-generation.
- **Medium Confidence (0.75-0.85)**: Route to standard human review queue.
- **High Confidence (>0.85)**: Fast-track review queue.

### Step 3: Contain
If hallucination density exceeds 2 per 100 LOC:
1. Halt agent generation for the current task
2. Audit last 5 committed PRs for latent hallucinations
3. Tighten confidence thresholds by 0.05

### Step 4: Remediate
- Update `confidence-thresholds.yaml` based on observed patterns
- Add newly discovered phantom packages to the blocklist
- Review and update import resolution rules

### Step 5: Report
Generate weekly hallucination debt metrics:
- Total phantom imports detected
- Confidence score distribution
- Review queue routing breakdown
- Post-merge bug rate trend

## Escalation
If hallucination density remains above threshold for 3 consecutive sprints, escalate to engineering leadership for agent configuration review.