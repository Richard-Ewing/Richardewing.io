# AI Engineering Economics — Operational Playbook

## Purpose
This playbook defines procedures for measuring, tracking, and optimizing the true total cost of AI-assisted development, including hidden synthetic COGS.

## Key Metrics to Track

### Direct Costs
- API token spend per task, per developer, per sprint
- Retry inflation waste (tokens burned on failed attempts)

### Hidden Costs (Synthetic COGS)
- Senior engineer verification hours per AI PR
- Remediation hours for AI-introduced bugs
- Context rot waste (sessions that produce no usable output)
- Orchestration overhead (multi-agent coordination failures)

## Weekly Review Procedure

### Step 1: Collect
Run the COGS tracker against the sprint's task log:
```bash
npx ts-node synthetic-cogs-tracker.ts --sprint current
```

### Step 2: Analyze
- Compare AI-assisted feature cost vs human baseline
- Identify tasks with negative ROI
- Flag cost outliers (>3x estimated budget)

### Step 3: Optimize
- Route negative-ROI task categories to human developers
- Tighten token budgets for high-waste task types
- Adjust model tier routing (use cheaper models for simple tasks)

### Step 4: Report
Generate executive summary with:
- Total AI infrastructure spend
- True cost per shipped feature
- ROI by task category
- Trend analysis (improving or degrading)

## Escalation
If quarterly AI ROI is negative, escalate to CTO with recommendation to restructure agent deployment strategy.