# The First-30-Days Product P&L Turnaround Runbook
**Author**: Richard Ewing (VP of Product / AI Economist)  
**Target Audience**: Incoming CPO, VP of Product, Head of Product, or Founder taking over an underperforming product organization.  
**Standard**: Human Writing Standard (HWS v2.0 / REWS v2.0) - Battle-tested operational reality.

---

## Phase 1: Days 1 to 7 - The Forensic Financial Autopsy

### Day 1: Cloud & Model Bill Forensics
Do not look at Jira tickets. Look at the money.
- Obtain read-only access to AWS Cost Explorer, GCP Billing, Azure Cost Management, and OpenAI/Anthropic/Cohere admin dashboards.
- Break down cloud infrastructure into 4 buckets:
  1. Persistent Compute (EC2, EKS, Cloud Run)
  2. Database & Storage Carry (RDS, BigQuery, S3, Redis)
  3. Third-Party Model Inference (OpenAI, Anthropic)
  4. Observability & SaaS Tooling (Datadog, New Relic, LaunchDarkly, Segment)
- **Immediate Diagnostic Check**: What percentage of your total monthly cloud bill is unallocated or tagged as "shared/staging"? If >25%, flag immediate governance breakdown.

### Day 2: Jira / Linear Commit-to-Feature Reconciliation
- Export the last 6 months of merged pull requests and closed epics.
- Match engineering hours against product modules.
- **The Metric**: Calculate the Innovation-to-Maintenance Ratio.  
  Formula: `Innovation % = (Hours on New ARR Features) / (Total Engineering Hours)`.  
  If this number is below 40%, your team is operating in survival mode.

### Day 3: Customer Support Ticket Cost Mapping
- Export the last 90 days of Zendesk / Intercom / Jira Service Management tickets.
- Categorize by product feature.
- Calculate **Support Burden Cost**: `(Tickets per Feature) * ($35 average fully-loaded support cost)`.
- Identify the "Toxic Five": The 5 features generating 60% of customer rage and support tickets.

### Day 4: Revenue & Contract SOW Forensic Review
- Meet with Director of Revenue Operations / VP Sales.
- Identify every customer contract containing custom SLA guarantees, custom feature promises, or unmetered API access.
- List all accounts where ARR is lower than direct infrastructure cost to serve.

### Day 5: Lead Architect & Principal Engineer Alignment
- 1-on-1 interviews with your top 3 system architects.
- Ask one question: *"If you had a magic wand and could delete 20% of our codebase by midnight with zero customer complaints, which directories would you delete?"*
- Write down their answers. These are your prime Zombie Feature candidates.

### Days 6-7: Weekend Synthesis - The Baseline Flash Report
- Compile your findings into the **Baseline Product P&L Flash Report** (Template below).
- Deliver to the CEO and CFO before Monday 9:00 AM.

---

## Phase 2: Days 8 to 14 - Stakeholder & Customer Reality Check

### Day 8: Sales Leadership Reality Audit
- Ask the VP of Sales:
  1. Which 3 features actually close enterprise deals?
  2. Which features on our marketing website do customers never use after onboarding?
  3. What is the single biggest reason deals stall in security review?

### Day 9: Customer Success & Churn Autopsy
- Review the last 10 churned customer exit interviews.
- Disregard polite answers ("budget cuts"). Look for operational failure:
  - Did the product feel too complex?
  - Was onboarding too slow?
  - Did performance degrade under heavy usage?

### Day 10: The Top 20 Customer Usage Audit
- Run SQL queries on active tenant event tables.
- Cross-reference with billing data.
- Identify the **P99 Whales**: Customers consuming 10x the median system resources.

### Day 11: Vendor & Model Rate Negotiation
- Contact your account reps at OpenAI, Anthropic, AWS, or GCP.
- Request volume commit pricing tiers.
- Enable prompt caching across all static system prompts (immediate 30-50% savings).

### Day 12-14: Draft the Zombie Feature Kill-List
- Populate Instrument 02 (The Zombie Feature Matrix).
- Score every feature launched more than 18 months ago.
- Calculate the total engineering capacity trapped in maintenance.

---

## Phase 3: Days 15 to 21 - Emergency Margin Stopgaps & Sunsetting

### Day 15: Implement the 3 AI Cost Emergency Brakes
1. **Prompt Truncation**: Cap chat history sent to the model to the last 6 turns (eliminates 40% of context inflation).
2. **Rate Limiting**: Enforce a hard ceiling of 60 requests/minute per tenant to prevent looping automation scripts.
3. **Model Fallback**: Route basic classification and extraction tasks from frontier models (Sonnet/GPT-4o) to lightweight models (Haiku/4o-mini).

### Day 16: Announce the First Deprecation Sequence
- Select the top 2 features with <1% adoption and zero contractual SLA obligations.
- Send the **Customer Deprecation Notice** (Template below) giving 45 days notice.
- Provide a simple native export or alternative workaround.

### Day 17-18: The Roadmap Pruning Session
- Cut the product backlog by 50%.
- Delete every backlog ticket older than 90 days that has not been touched. (If it was truly critical, someone would have complained).

### Day 19-21: Reallocate Engineering Squads
- Disband feature maintenance triage rotations.
- Create two dedicated squads:
  1. **Core Growth & AI Innovation Squad** (65% of capacity)
  2. **Platform Efficiency & Foundation Squad** (35% of capacity)

---

## Phase 4: Days 22 to 30 - The 90-Day Operating Plan & Board Review

### Day 22-25: Build the 12-Slide Board Deck
- Use Instrument 03 (The CFO & Board Defense Blueprint).
- Plug in your audited numbers from Weeks 1-3.
- Rehearse the talking tracks with the CFO before the board meeting.

### Day 26-28: Align the Executive Team
- Walk the CEO, COO, and VP Sales through the presentation.
- Secure explicit agreement on the deprecation timeline and gross margin covenants.

### Day 29: Deliver the Board Presentation
- Present the 90-day turnaround plan.
- Secure board approval for the R&D capital reallocation.

### Day 30: Celebrate & Institutionalize
- Hold an all-hands product & engineering meeting.
- Show the engineers exactly how their work saved money, recovered velocity, and expanded company gross margin.

---

## Included Execution Templates

### Template A: The Weekly CEO/CFO 1-Page Product P&L Flash Report
```markdown
# Weekly Product P&L Flash Report - Week ending [Date]
**To**: CEO, CFO  
**From**: VP of Product / CPO

## 1. Topline Financial Health
- Monthly AI & Cloud COGS: $42,150 (Down 14% WoW from $49,000)
- Blended Gross Margin: 77.4% (Target: 78.0% | +180 bps improvement WoW)
- Unallocated Cloud Spend: $1,200 (Down from $8,400)

## 2. Engineering Capital Allocation Mix
- Growth & New ARR Delivery: 58% (Target: 65%)
- Platform Scale & Refactoring: 24%
- Legacy Zombie Maintenance: 18% (Down from 38% at Day 1)

## 3. Margin & Operational Interventions Executed
- Shipped prompt caching on main copilot: -$3,800/mo token savings.
- Dispatched 45-day sunset notice for FEAT-102 (Ad-hoc report builder).
- Renegotiated Anthropic commit tier: Saved $1,200/mo on input tokens.

## 4. Red Flags & Executive Decisions Needed
- Enterprise Account [Client Name] exceeded 4,000 queries this week on a $49 flat seat.
  Action: Scheduling account review with VP Sales to transition to metered enterprise add-on.
```

### Template B: High-Empathy Customer Deprecation Notice
```text
Subject: Important update regarding [Feature Name] in [Product Name]

Hi [First Name],

Over the past year, we have been investing heavily in rebuilding [Product Name]'s core architecture to give your team faster page loads, 99.99% reliability, and powerful new AI workflows.

As part of this focus, we will be officially retiring [Feature Name] on [Date - 45 days away].

Why we are making this change:
Less than 1% of our customer community actively uses this tool, while maintaining it takes significant engineering focus away from the features your team uses every single day.

What this means for you:
Starting [Date], [Feature Name] will no longer appear in your navigation bar. 
If your team needs to export this historical data, you can download a full CSV archive in one click right here: [Direct Export Link].

For ongoing workflows, we recommend using [Alternative Native Feature / Zapier Webhook], which is faster, fully supported, and continuously updated.

We know changes to existing tools can be disruptive, and our team is here to help your workflow transition smoothly. If you have any questions or need custom assistance, reply directly to this email or book 15 minutes with our product team here: [Calendar Link].

Thank you for partnering with us as we build a faster, stronger platform for your business.

Warmly,
[Your Name]
VP of Product, [Company Name]
```
