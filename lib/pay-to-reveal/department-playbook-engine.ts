/**
 * Standalone Product #3: Department AI Risk & SOP Playbook Generator Engine (ADR-0021)
 *
 * Clean-room synthesis of governed department AI operating procedures across 5 operating
 * functions (Finance, Operations, Customer Support, HR, and Owner-Led Small Business).
 * Generates stack-customized SOPs, SOX / EU AI Act human sign-off boundaries, and
 * 5-tab ECMA-376 `.xlsx` financial reconciliation workbooks with live Excel formulas.
 */

import type { XlsxWorksheetSpec } from './xlsx-compiler';

export type DepartmentId = 'finance' | 'operations' | 'support' | 'hr' | 'small_business';

export interface PlaybookCompileInput {
  department: DepartmentId;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
}

export interface GovernedSopFull {
  sopNumber: number;
  code: string;
  department: DepartmentId;
  departmentLabel: string;
  title: string;
  ownerRole: string;
  approverRole: string;
  riskTier: 'HIGH_CONTROL' | 'GUARDED' | 'LOW_RISK';
  monthlyHoursSaved: number;
  monthlyDollarRecovery: number;
  triggerCondition: string;
  autonomousSteps: string[];
  hardStopBoundary: string;
  humanSignOffRule: string;
  sanitizedPromptTemplate: string;
  auditTrailSpec: string;
}

export interface GovernedSopStub {
  sopNumber: number;
  code: string;
  title: string;
  ownerRole: string;
  riskTier: GovernedSopFull['riskTier'];
  monthlyHoursSaved: number;
  monthlyDollarRecovery: number;
}

export interface DepartmentPlaybookSealedPayload {
  department: DepartmentId;
  departmentLabel: string;
  buyerTitles: string;
  compiledAt: string;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
  monthlyRecoverableUsd: number;
  annualRecoverableUsd: number;
  monthlyHoursRecovered: number;
  estimatedMonthlyTokenCostUsd: number;
  netAnnualSavingsUsd: number;
  redLineWarning: {
    headline: string;
    controlStandard: string;
    prohibitedAction: string;
    financialConsequence: string;
    mandatoryGate: string;
  };
  sops: GovernedSopFull[];
  allDepartmentsBundle: Record<DepartmentId, GovernedSopFull[]>;
}

export interface DepartmentPlaybookPublicResponse {
  runId: string;
  department: DepartmentId;
  departmentLabel: string;
  buyerTitles: string;
  compiledAt: string;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
  monthlyRecoverableUsd: number;
  annualRecoverableUsd: number;
  monthlyHoursRecovered: number;
  estimatedMonthlyTokenCostUsd: number;
  netAnnualSavingsUsd: number;
  redLineWarning: DepartmentPlaybookSealedPayload['redLineWarning'];
  freeSop: GovernedSopFull;
  lockedSopStubs: GovernedSopStub[];
  workbookTabPreview: string[];
  sealedEnvelope: string;
}

export const DEPARTMENT_CATALOG: Record<
  DepartmentId,
  {
    label: string;
    buyerTitles: string;
    defaultHeadcount: number;
    defaultHourlyUsd: number;
    defaultMonthlyVolume: number;
    volumeUnitLabel: string;
    recommendedStack: string[];
  }
> = {
  finance: {
    label: 'Finance & Month-End Close',
    buyerTitles: 'CFO, VP of Finance, Controller, Director of Accounting',
    defaultHeadcount: 8,
    defaultHourlyUsd: 78,
    defaultMonthlyVolume: 1200,
    volumeUnitLabel: 'Monthly Invoices, Close Entries & Vendor Bills',
    recommendedStack: ['NetSuite', 'Ramp', 'Stripe', 'Excel', 'Slack'],
  },
  operations: {
    label: 'Operations, Vendors & Procurement',
    buyerTitles: 'COO, VP of Operations, Director of Supply Chain, Procurement Lead',
    defaultHeadcount: 12,
    defaultHourlyUsd: 62,
    defaultMonthlyVolume: 1800,
    volumeUnitLabel: 'Monthly POs, Vendor Renewals & Ops Exceptions',
    recommendedStack: ['Salesforce', 'Jira', 'Ramp', 'Google Sheets', 'Slack'],
  },
  support: {
    label: 'Customer Support & Revenue Retention',
    buyerTitles: 'Customer Support Manager, VP of Customer Experience, RevOps Lead',
    defaultHeadcount: 15,
    defaultHourlyUsd: 44,
    defaultMonthlyVolume: 6500,
    volumeUnitLabel: 'Monthly Support Tickets, Refund Requests & Escalations',
    recommendedStack: ['Zendesk', 'Stripe', 'Salesforce', 'Slack', 'Jira'],
  },
  hr: {
    label: 'HR, Recruiting & People Operations',
    buyerTitles: 'HR Director, VP of People, Talent Acquisition Lead, People Ops Manager',
    defaultHeadcount: 6,
    defaultHourlyUsd: 64,
    defaultMonthlyVolume: 900,
    volumeUnitLabel: 'Monthly Candidate Screens, Onboarding Packets & Policy Queries',
    recommendedStack: ['Workday', 'Greenhouse', 'Slack', 'Google Sheets', 'Excel'],
  },
  small_business: {
    label: 'Owner-Led Small Business Floor',
    buyerTitles: 'CEO, Founder, General Manager, Operations Manager',
    defaultHeadcount: 10,
    defaultHourlyUsd: 52,
    defaultMonthlyVolume: 1400,
    volumeUnitLabel: 'Monthly Quotes, Collections, Schedules & Customer Replies',
    recommendedStack: ['QuickBooks', 'Stripe', 'HubSpot', 'Excel', 'Slack'],
  },
};

export const AVAILABLE_STACK_TOOLS = [
  'NetSuite',
  'QuickBooks',
  'Ramp',
  'Stripe',
  'Zendesk',
  'Intercom',
  'Salesforce',
  'HubSpot',
  'Workday',
  'Greenhouse',
  'Jira',
  'Slack',
  'Excel',
  'Google Sheets',
] as const;

interface RawSopBlueprint {
  code: string;
  title: string;
  ownerRole: string;
  approverRole: string;
  riskTier: GovernedSopFull['riskTier'];
  minutesSavedPerItem: number;
  shareOfVolume: number;
  triggerTemplate: string;
  stepsTemplate: string[];
  hardStopBoundary: string;
  humanSignOffRule: string;
  promptTemplate: string;
  auditTrailSpec: string;
}

function pickTool(stack: string[], candidates: string[], fallback: string): string {
  const lowerMap = new Map(stack.map((s) => [s.toLowerCase(), s]));
  for (const c of candidates) {
    const hit = lowerMap.get(c.toLowerCase());
    if (hit) return hit;
  }
  return fallback;
}

function getBlueprintsForDepartment(dept: DepartmentId, stack: string[]): RawSopBlueprint[] {
  const erp = pickTool(stack, ['NetSuite', 'QuickBooks'], dept === 'small_business' ? 'QuickBooks' : 'NetSuite');
  const spend = pickTool(stack, ['Ramp', 'Stripe'], 'Ramp');
  const billing = pickTool(stack, ['Stripe', 'NetSuite', 'QuickBooks'], 'Stripe');
  const crm = pickTool(stack, ['Salesforce', 'HubSpot'], 'Salesforce');
  const desk = pickTool(stack, ['Zendesk', 'Intercom'], 'Zendesk');
  const hris = pickTool(stack, ['Workday', 'Greenhouse'], 'Workday');
  const ats = pickTool(stack, ['Greenhouse', 'Workday'], 'Greenhouse');
  const sheet = pickTool(stack, ['Excel', 'Google Sheets'], 'Excel');
  const chat = pickTool(stack, ['Slack'], 'Slack');
  const tracker = pickTool(stack, ['Jira'], 'Jira');

  const matrix: Record<DepartmentId, RawSopBlueprint[]> = {
    finance: [
      {
        code: 'FIN-SOP-01',
        title: `Three-Way Vendor Invoice & PO Variance Triage (${erp} + ${spend})`,
        ownerRole: 'Senior AP Accountant',
        approverRole: 'Controller',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 7.5,
        shareOfVolume: 0.28,
        triggerTemplate: `New vendor PDF invoice lands in ${spend} or AP inbox referencing an open PO in ${erp}.`,
        stepsTemplate: [
          `Extract line-item quantities, unit prices, tax, and payment terms from ${spend} OCR payload.`,
          `Cross-match against approved PO and receiving log in ${erp}; compute line-level dollar and percentage variance.`,
          `Draft coded GL expense distribution in ${sheet} staging tab and post exception card to ${chat} #ap-close.`,
        ],
        hardStopBoundary: `AI agent is strictly blocked from posting approved bills to the ${erp} General Ledger, editing vendor ACH bank routing numbers, or releasing wire/ACH disbursements.`,
        humanSignOffRule: `Controller must sign off on any price/quantity variance above $250 or 2.0%; CFO dual-approval required above $10,000.`,
        promptTemplate: `ROLE: AP Variance Analyst (${erp} + ${spend}). Redact vendor bank routing/TIN fields before analysis. Compare PO JSON vs Invoice JSON. Output strict table: [Line | PO Qty | Inv Qty | Unit Delta $ | GL Account Code | Exception Flag]. Flag REVIEW_REQUIRED if |Unit Delta| > 2.0% or total delta > $250.`,
        auditTrailSpec: `Log invoice_id, po_id, model_version, variance_usd, and Controller approval timestamp in ${erp} close binder.`,
      },
      {
        code: 'FIN-SOP-02',
        title: `Month-End Accrual & Prepaid Amortization Prep (${erp} + ${sheet})`,
        ownerRole: 'Accounting Manager',
        approverRole: 'Controller',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 9.0,
        shareOfVolume: 0.12,
        triggerTemplate: `Business Day -2 of monthly close calendar in ${erp}.`,
        stepsTemplate: [
          `Scan unbilled vendor contracts and active SaaS subscriptions in ${spend} with service periods crossing month-end.`,
          `Calculate straight-line prepaid amortization and unbilled expense accruals inside ${sheet} close workbook.`,
          `Generate balanced draft journal entry CSV ready for ${erp} sandbox validation.`,
        ],
        hardStopBoundary: `Never auto-post adjusting journal entries to closed or live ${erp} periods without human preparer + reviewer separation.`,
        humanSignOffRule: `Prepared by Accounting Manager; independent SOX review and post execution by Controller.`,
        promptTemplate: `Given contract start_date, end_date, total_value_usd, and billed_to_date_usd, compute current-month recognized expense, prepaid asset balance, and accrued liability. Return balanced Debit/Credit rows with exact contract citations.`,
        auditTrailSpec: `Retain calculation formula tab in ${sheet} alongside signed Controller close checklist.`,
      },
      {
        code: 'FIN-SOP-03',
        title: `ASC 606 Contract Revenue Recognition & Clawback Check (${crm} + ${billing})`,
        ownerRole: 'Revenue Accountant',
        approverRole: 'VP of Finance',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 11.0,
        shareOfVolume: 0.1,
        triggerTemplate: `Closed-Won enterprise order form (> $15,000 ARR) marked signed in ${crm}.`,
        stepsTemplate: [
          `Compare signed MSA/Order Form terms against ${billing} subscription schedule for non-standard termination, ramp pricing, or acceptance clauses.`,
          `Flag multi-element performance obligations (setup sprint vs recurring SaaS) for ASC 606 allocation.`,
          `Post 5-bullet RevRec risk memo to ${chat} #deal-desk-finance.`,
        ],
        hardStopBoundary: `Never alter recognized revenue schedules in ${erp} or issue credit memos in ${billing}.`,
        humanSignOffRule: `VP of Finance or Controller approves ASC 606 allocation memo on every non-standard contract.`,
        promptTemplate: `Inspect redacted Order Form clauses against standard SaaS terms. Highlight: (1) convenience termination rights, (2) refund/SLA credits, (3) custom milestone deliverables, (4) extended net-60+ payment terms.`,
        auditTrailSpec: `Attach RevRec memo ID to ${crm} Opportunity and ${erp} revenue arrangement.`,
      },
      {
        code: 'FIN-SOP-04',
        title: `Corporate Card Receipt & Policy Audit (${spend} + ${chat})`,
        ownerRole: 'Staff Accountant',
        approverRole: 'Accounting Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 4.5,
        shareOfVolume: 0.22,
        triggerTemplate: `Card transaction settles in ${spend} above $75.`,
        stepsTemplate: [
          `Verify itemized receipt presence, attendee business purpose, and spend category alignment against company T&E policy.`,
          `Send polite automated ${chat} nudge to cardholder for missing receipts or out-of-policy alcohol/upgrade lines.`,
        ],
        hardStopBoundary: `Cannot freeze executive cards or deduct payroll reimbursements autonomously.`,
        humanSignOffRule: `Accounting Manager reviews weekly flagged exceptions digest before month-end lock.`,
        promptTemplate: `Evaluate card expense JSON against T&E rules: itemized receipt required >= $75, business attendees required on meals, coach airfare baseline. Output PASS or MISSING_INFO with 1-sentence employee message.`,
        auditTrailSpec: `Archive receipt match status in ${spend} audit export.`,
      },
      {
        code: 'FIN-SOP-05',
        title: `Budget-vs-Actual (BvA) Department Variance Commentary (${erp} + ${sheet})`,
        ownerRole: 'FP&A Analyst',
        approverRole: 'CFO',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 8.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Trial balance lock on Business Day +4 in ${erp}.`,
        stepsTemplate: [
          `Pull department GL actuals vs approved forecast into ${sheet} BvA tab.`,
          `Identify top 5 vendor and payroll drivers behind any line item drifting > $5,000 or > 8%.`,
          `Draft plain-English variance questions for department heads in ${chat}.`,
        ],
        hardStopBoundary: `Never overwrite board forecast baselines or reallocate department headcount budgets.`,
        humanSignOffRule: `CFO reviews consolidated BvA narrative prior to board deck distribution.`,
        promptTemplate: `Analyze department BvA table. List every GL line with variance > 8% and > $5,000, rank by dollar impact, and draft 2 specific operational questions for the department VP.`,
        auditTrailSpec: `Version-lock ${sheet} snapshot prior to board packet PDF export.`,
      },
      {
        code: 'FIN-SOP-06',
        title: `SaaS Zombie Seat & Duplicate AI Subscription Hunter (${spend} + ${erp})`,
        ownerRole: 'Director of Finance',
        approverRole: 'CFO',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 6.0,
        shareOfVolume: 0.07,
        triggerTemplate: `Monthly recurring software vendor charge posts in ${spend}.`,
        stepsTemplate: [
          `Group recurring software charges across corporate cards and AP bills to spot duplicate LLM, BI, and seat tools.`,
          `Flag contracts within 45 days of auto-renewal window and post cancellation ROI brief to ${chat}.`,
        ],
        hardStopBoundary: `Cannot terminate production infrastructure contracts (AWS, Cloudflare, Stripe, Supabase) autonomously.`,
        humanSignOffRule: `Department owner + Director of Finance co-sign vendor non-renewal notice.`,
        promptTemplate: `Group vendor charges by normalized merchant name. Flag overlapping seat tools, month-over-month spend jumps > 15%, and upcoming 45-day auto-renewal cliffs.`,
        auditTrailSpec: `Record realized annualized SaaS savings in ${sheet} OpEx tracker.`,
      },
      {
        code: 'FIN-SOP-07',
        title: `AR Collections Aging & Contextual Dunning Drafts (${billing} + ${crm})`,
        ownerRole: 'AR Specialist',
        approverRole: 'Controller',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 5.5,
        shareOfVolume: 0.09,
        triggerTemplate: `B2B invoice passes 7, 15, or 30 days past due in ${billing}.`,
        stepsTemplate: [
          `Check ${crm} and support queue first to ensure no unresolved P1 outage or active billing dispute exists on the account.`,
          `Draft polite, invoice-specific collection email for AR Specialist review.`,
        ],
        hardStopBoundary: `Never send past-due threats to accounts with open P1 escalations or suspend production tenant access automatically.`,
        humanSignOffRule: `AR Specialist approves outbound dunning batch; Controller approves any account suspension.`,
        promptTemplate: `Draft concise AR reminder for Invoice #{{inv_id}} ({{days_overdue}} days past due, USD {{amount}}). Tone: constructive executive partner. Halt and flag HOLD_OPEN_TICKET if open_sev1_tickets > 0.`,
        auditTrailSpec: `Log dunning touchpoint in ${crm} account timeline.`,
      },
      {
        code: 'FIN-SOP-08',
        title: `13-Week Cash Flow & Cloud Inference Burn Stress-Test (${erp} + ${sheet})`,
        ownerRole: 'FP&A Lead',
        approverRole: 'CFO',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 10.0,
        shareOfVolume: 0.04,
        triggerTemplate: `Monday 8:00 AM weekly treasury refresh.`,
        stepsTemplate: [
          `Aggregate cleared bank balances, ${billing} net settlements, scheduled payroll, and cloud/LLM API run-rate into ${sheet}.`,
          `Simulate base vs 25% collection-delay scenarios and flag cash runway delta.`,
        ],
        hardStopBoundary: `Read-only bank feed aggregation; zero treasury sweep or wire initiation authority.`,
        humanSignOffRule: `CFO signs weekly Monday cash flash readout.`,
        promptTemplate: `Summarize weekly cash inflows, committed payroll/AP outflows, variable AI/cloud spend delta, and net 13-week minimum cash trough in 5 executive bullets.`,
        auditTrailSpec: `Store weekly treasury readout in ${sheet} historical archive.`,
      },
    ],
    operations: [
      {
        code: 'OPS-SOP-01',
        title: `Vendor Renewal & Auto-Escalation Clause Redline Audit (${spend} + ${crm})`,
        ownerRole: 'Procurement Lead',
        approverRole: 'VP of Operations',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 8.5,
        shareOfVolume: 0.18,
        triggerTemplate: `Vendor MSA or Order Form uploaded 60 days prior to renewal in ${spend}.`,
        stepsTemplate: [
          `Scan vendor renewal PDF for automatic CPI/7%+ price uplifts, 90-day notice traps, and uncapped usage overages.`,
          `Benchmark seat utilization and prepare counter-offer redline brief in ${sheet}.`,
        ],
        hardStopBoundary: `AI agent must never execute vendor e-signatures, bind multi-year commitments, or waive data-processing liability caps.`,
        humanSignOffRule: `VP of Operations approves renewals <= $25,000; COO + CFO co-sign > $25,000.`,
        promptTemplate: `Review redacted vendor order form. Extract: (1) auto-renewal notice deadline, (2) annual uplift cap %, (3) SLA uptime credits, (4) AI training rights on company data. Draft negotiation counter-points.`,
        auditTrailSpec: `Log renewal decision and negotiated savings in ${sheet} vendor ledger.`,
      },
      {
        code: 'OPS-SOP-02',
        title: `Cross-Team SLA Breach & Bottleneck Root-Cause Triage (${tracker} + ${chat})`,
        ownerRole: 'Business Operations Manager',
        approverRole: 'COO',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 6.0,
        shareOfVolume: 0.22,
        triggerTemplate: `Onboarding, fulfillment, or ops ticket breaches 24-hour SLA in ${tracker}.`,
        stepsTemplate: [
          `Cluster blocked tickets in ${tracker} by handoff dependency (Legal, Security, Finance, Engineering).`,
          `Post daily 9:00 AM unblocker digest to ${chat} with exact owner names and aging hours.`,
        ],
        hardStopBoundary: `Never auto-close customer-impacting tickets or alter SLA contractual timestamps.`,
        humanSignOffRule: `Business Operations Manager confirms priority re-assignments during daily standup.`,
        promptTemplate: `Group overdue ${tracker} issues by blocking team. Calculate median wait hours and surface the top 3 recurring handoff bottlenecks delaying customer go-live.`,
        auditTrailSpec: `Snapshot weekly SLA compliance rate in ${sheet}.`,
      },
      {
        code: 'OPS-SOP-03',
        title: `Purchase Requisition Intake & Duplicate Request Gate (${spend} + ${sheet})`,
        ownerRole: 'Operations Coordinator',
        approverRole: 'VP of Operations',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 5.5,
        shareOfVolume: 0.16,
        triggerTemplate: `New software or contractor purchase request submitted in ${spend}.`,
        stepsTemplate: [
          `Check active vendor catalog in ${sheet} to verify no existing licensed tool already covers the capability.`,
          `Verify SOC2 Type II / DPA attachment completeness before routing to security and finance.`,
        ],
        hardStopBoundary: `Cannot issue approved PO numbers or provision production SSO scopes autonomously.`,
        humanSignOffRule: `VP of Operations approves operational need; Security signs off on vendor data access.`,
        promptTemplate: `Compare requested tool capability against active vendor list. If >= 70% overlap exists, recommend seat reassignment instead of net-new vendor onboarding.`,
        auditTrailSpec: `Attach intake scorecard to ${spend} requisition ID.`,
      },
      {
        code: 'OPS-SOP-04',
        title: `Enterprise Customer Onboarding Milestone Tracker (${crm} + ${tracker})`,
        ownerRole: 'Implementation Lead',
        approverRole: 'VP of Operations',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 7.0,
        shareOfVolume: 0.12,
        triggerTemplate: `Deal moves to Closed-Won in ${crm}.`,
        stepsTemplate: [
          `Generate standardized onboarding task checklist in ${tracker} mapped to purchased SKU deliverables.`,
          `Draft kickoff agenda and data-import checklist for Implementation Lead review.`,
        ],
        hardStopBoundary: `Never email external client stakeholders directly without Implementation Lead review.`,
        humanSignOffRule: `Implementation Lead reviews and dispatches client kickoff packet.`,
        promptTemplate: `From ${crm} Closed-Won scope JSON, build a 30-day implementation checklist with owner roles, client prerequisites, and go-live verification gates.`,
        auditTrailSpec: `Track time-to-first-value days in ${crm}.`,
      },
      {
        code: 'OPS-SOP-05',
        title: `SOP Drift & Undocumented Tribal Process Harvester (${tracker} + ${chat})`,
        ownerRole: 'Process Excellence Lead',
        approverRole: 'COO',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 8.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Bi-weekly operational retro export from ${tracker}.`,
        stepsTemplate: [
          `Compare actual resolution steps on recurring operational exceptions against documented SOPs.`,
          `Draft redlined SOP vNext updates where manual workarounds occurred >= 3 times.`,
        ],
        hardStopBoundary: `Cannot publish compliance-governed SOP changes without owner sign-off.`,
        humanSignOffRule: `Department owner approves SOP revision before publishing to team handbook.`,
        promptTemplate: `Compare current SOP steps against 20 recent resolved exception tickets. Identify steps employees skip or improvise, and propose clearer decision rules.`,
        auditTrailSpec: `Maintain versioned SOP changelog with approver signature.`,
      },
      {
        code: 'OPS-SOP-06',
        title: `Contractor & Agency Deliverable Timesheet Reconciliation (${spend} + ${tracker})`,
        ownerRole: 'Operations Manager',
        approverRole: 'VP of Operations',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 6.5,
        shareOfVolume: 0.1,
        triggerTemplate: `External agency or contractor submits bi-weekly hours invoice in ${spend}.`,
        stepsTemplate: [
          `Reconcile billed hours against shipped tickets/artifacts in ${tracker} and SOW hourly cap.`,
          `Flag unverified "general consulting / meetings" blocks exceeding 15% of invoice.`,
        ],
        hardStopBoundary: `Never approve contractor payouts or amend SOW budget caps autonomously.`,
        humanSignOffRule: `VP of Operations approves reconciled contractor invoice prior to AP release.`,
        promptTemplate: `Match contractor invoice line items against ${tracker} completed deliverables. Flag hours lacking linked artifacts or exceeding SOW weekly cap.`,
        auditTrailSpec: `Store SOW burn-down percentage in ${sheet}.`,
      },
      {
        code: 'OPS-SOP-07',
        title: `Weekly COO Operational Health & Margin Flash (${crm} + ${sheet})`,
        ownerRole: 'Chief of Staff / BizOps',
        approverRole: 'COO',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 9.5,
        shareOfVolume: 0.06,
        triggerTemplate: `Friday 2:00 PM weekly metrics rollup.`,
        stepsTemplate: [
          `Consolidate throughput, backlog aging, vendor spend spikes, and onboarding cycle time into ${sheet}.`,
          `Draft 1-page COO Monday executive brief highlighting red/amber KPIs only.`,
        ],
        hardStopBoundary: `Read-only synthesis; never modifies source CRM or financial numbers.`,
        humanSignOffRule: `COO reviews prior to Monday leadership distribution.`,
        promptTemplate: `Synthesize weekly ops KPIs into Red / Amber / Green status. Lead with metrics off-track by > 10% and state owner + 7-day corrective action.`,
        auditTrailSpec: `Archive weekly scorecard row in ${sheet}.`,
      },
      {
        code: 'OPS-SOP-08',
        title: `Incident Post-Mortem Action Item Enforcement (${tracker} + ${chat})`,
        ownerRole: 'Operations Program Manager',
        approverRole: 'VP of Operations',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 5.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Post-incident review document created after customer-facing disruption.`,
        stepsTemplate: [
          `Extract every promised remediation item, convert into tracked ${tracker} tickets with due dates, and audit completion at Day 7 and Day 14.`,
        ],
        hardStopBoundary: `Never publish external customer RCA statements without Legal and Executive clearance.`,
        humanSignOffRule: `VP of Operations + Engineering Manager sign off on external RCA summaries.`,
        promptTemplate: `Extract concrete remediation tasks from incident timeline. Reject vague items like "be more careful"; require deterministic check, owner role, and due date.`,
        auditTrailSpec: `Link ${tracker} remediation IDs to incident log.`,
      },
    ],
    support: [
      {
        code: 'SUP-SOP-01',
        title: `Tier-1 Ticket Classification, Log Context & Draft Reply (${desk} + ${billing})`,
        ownerRole: 'Customer Support Specialist',
        approverRole: 'Customer Support Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 4.2,
        shareOfVolume: 0.36,
        triggerTemplate: `New inbound customer ticket arrives in ${desk}.`,
        stepsTemplate: [
          `Classify intent, account ARR tier from ${crm}, and recent ${billing} invoice status.`,
          `Draft grounded internal note + verified KB response inside ${desk} composer without sending externally.`,
        ],
        hardStopBoundary: `AI agent is strictly blocked from issuing ${billing} refunds, granting SLA credits, promising roadmap dates, or exposing another tenant's data.`,
        humanSignOffRule: `Support Specialist verifies draft for Tier-1 replies; Customer Support Manager approves any refund/credit > $50.`,
        promptTemplate: `Draft internal ${desk} response using ONLY verified KB articles cited by URL. If customer requests refund, legal waiver, or account deletion, output ESCALATE_HUMAN immediately.`,
        auditTrailSpec: `Log cited KB IDs and human edit distance on ${desk} ticket.`,
      },
      {
        code: 'SUP-SOP-02',
        title: `Refund, Credit & Chargeback Eligibility Verification (${desk} + ${billing})`,
        ownerRole: 'Billing Support Lead',
        approverRole: 'Customer Support Manager',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 6.5,
        shareOfVolume: 0.14,
        triggerTemplate: `Ticket tagged "billing_refund" or "dispute" in ${desk}.`,
        stepsTemplate: [
          `Pull charge date, plan terms, usage activity since purchase, and prior refund count from ${billing} (read-only).`,
          `Compute exact contractual eligibility under refund policy and stage structured decision card in ${desk}.`,
        ],
        hardStopBoundary: `Zero write access to ${billing} refunds.create or subscription price overrides. Unsupervised refund bots get socially engineered via prompt injection within hours.`,
        humanSignOffRule: `Billing Support Lead approves <= $100; Customer Support Manager approves $101 to $500; Controller approves > $500.`,
        promptTemplate: `Evaluate refund request against policy: purchase_date, usage_events_count, prior_refunds_12m. Output ELIGIBLE or OUT_OF_POLICY with exact calculation and draft polite reply.`,
        auditTrailSpec: `Record ${billing} charge ID, policy rule, and approver ID in ${sheet} refund log.`,
      },
      {
        code: 'SUP-SOP-03',
        title: `Churn-Risk & Renewal Save Escalation Radar (${desk} + ${crm})`,
        ownerRole: 'Customer Success Operations',
        approverRole: 'VP of Customer Experience',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 5.5,
        shareOfVolume: 0.12,
        triggerTemplate: `Customer mentions cancellation, competitor migration, or executive frustration in ${desk}.`,
        stepsTemplate: [
          `Cross-check account ARR and renewal date in ${crm}.`,
          `Alert assigned Account Owner in ${chat} #retention-saves within 5 minutes with ticket history digest.`,
        ],
        hardStopBoundary: `Never offer unauthorized discounting or custom contract terms in ${desk} replies.`,
        humanSignOffRule: `VP of Customer Experience or Account Executive leads outbound save call on accounts > $5,000 ARR.`,
        promptTemplate: `Detect explicit or implicit churn signals in ticket transcript. Summarize root operational frustration in 3 bullets without defensive language.`,
        auditTrailSpec: `Update ${crm} churn-risk flag and save outcome.`,
      },
      {
        code: 'SUP-SOP-04',
        title: `Bug Reproduction Packet & Engineering Handoff (${desk} + ${tracker})`,
        ownerRole: 'Tier-2 Technical Support',
        approverRole: 'Customer Support Manager',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 7.0,
        shareOfVolume: 0.12,
        triggerTemplate: `Confirmed product defect escalated from ${desk} to ${tracker}.`,
        stepsTemplate: [
          `Scrub customer PII/tokens from HAR/console snippets and format deterministic reproduction steps, browser/OS, and ARR impact for ${tracker}.`,
        ],
        hardStopBoundary: `Never copy raw bearer tokens, session cookies, or customer passwords into ${tracker} tickets.`,
        humanSignOffRule: `Tier-2 Specialist confirms reproduction steps and PII redaction before creating ${tracker} issue.`,
        promptTemplate: `Redact all emails, JWTs, cookies, and API keys -> [REDACTED]. Format bug report: Environment, Exact Steps to Reproduce, Expected vs Actual, Affected ARR.`,
        auditTrailSpec: `Link ${desk} ticket ID bidirectionally to ${tracker} issue key.`,
      },
      {
        code: 'SUP-SOP-05',
        title: `Knowledge Base Gap & Stale Article Updater (${desk})`,
        ownerRole: 'Support Enablement Lead',
        approverRole: 'Customer Support Manager',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 6.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Weekly cluster of >= 5 resolved tickets lacking a linked KB article in ${desk}.`,
        stepsTemplate: [
          `Draft step-by-step help center article from verified human resolutions and flag outdated UI screenshots.`,
        ],
        hardStopBoundary: `Never publish public KB changes live without Support Enablement review.`,
        humanSignOffRule: `Customer Support Manager approves public KB publication.`,
        promptTemplate: `Turn these 5 verified human ticket resolutions into one clear, jargon-free customer help guide with numbered steps and common pitfalls.`,
        auditTrailSpec: `Track ticket deflection rate 30 days post-publish.`,
      },
      {
        code: 'SUP-SOP-06',
        title: `Enterprise Security & Privacy Questionnaire Pre-Fill (${desk} + ${crm})`,
        ownerRole: 'Solutions Support Engineer',
        approverRole: 'VP of Customer Experience',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 9.0,
        shareOfVolume: 0.05,
        triggerTemplate: `Prospect or enterprise buyer sends CAIQ / SIG-Lite security spreadsheet via ${desk} or ${crm}.`,
        stepsTemplate: [
          `Match buyer questions strictly against approved Trust Center / SOC2 control matrix in ${sheet}; mark uncertain items NEEDS_SECURITY_REVIEW.`,
        ],
        hardStopBoundary: `Zero hallucinated compliance claims: never invent encryption standards, sub-processors, or ISO certifications.`,
        humanSignOffRule: `Security Lead + VP of Customer Experience sign off before returning questionnaire to buyer.`,
        promptTemplate: `Answer ONLY using exact verbatim citations from our approved Security Control Matrix. If confidence < 100%, write [NEEDS_SECURITY_SIGN_OFF] and leave answer blank.`,
        auditTrailSpec: `Archive signed questionnaire version under ${crm} account record.`,
      },
      {
        code: 'SUP-SOP-07',
        title: `P1 Outage Mass-Ticket Broadcast & Recovery Queue (${desk} + ${chat})`,
        ownerRole: 'Support Duty Manager',
        approverRole: 'Customer Support Manager',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 3.5,
        shareOfVolume: 0.08,
        triggerTemplate: `Incident declared in ${chat} #incident-command.`,
        stepsTemplate: [
          `Auto-group incoming duplicate incident tickets in ${desk} under master problem ticket and stage approved status update macro.`,
        ],
        hardStopBoundary: `Never broadcast unapproved root-cause or SLA credit promises to customers during an active incident.`,
        humanSignOffRule: `Customer Support Manager triggers outbound macro batch after incident commander clearance.`,
        promptTemplate: `Match inbound ticket symptoms against active Incident #{{inc_id}}. Tag matching tickets for master incident linking; leave unrelated tickets in standard queue.`,
        auditTrailSpec: `Log mass-notification timestamp and affected customer count.`,
      },
      {
        code: 'SUP-SOP-08',
        title: `Weekly Voice-of-Customer Revenue Blocker Readout (${desk} + ${sheet})`,
        ownerRole: 'Customer Support Manager',
        approverRole: 'VP of Customer Experience',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 7.5,
        shareOfVolume: 0.05,
        triggerTemplate: `Friday 4:00 PM weekly ${desk} export.`,
        stepsTemplate: [
          `Quantify top 5 friction themes weighted by affected customer ARR (not raw ticket noise) in ${sheet}.`,
        ],
        hardStopBoundary: `Read-only reporting; strips customer PII from executive quotes.`,
        humanSignOffRule: `Customer Support Manager presents ARR-weighted top 3 product fixes to Product & Engineering weekly sync.`,
        promptTemplate: `Rank weekly ticket themes by total affected ARR from ${crm}, not ticket count. Include 2 anonymized verbatim customer quotes per theme.`,
        auditTrailSpec: `Store weekly ARR-weighted friction index in ${sheet}.`,
      },
    ],
    hr: [
      {
        code: 'HR-SOP-01',
        title: `Structured Rubric Resume & Work-Sample Evidence Screen (${ats})`,
        ownerRole: 'Talent Acquisition Lead',
        approverRole: 'HR Director',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 6.5,
        shareOfVolume: 0.28,
        triggerTemplate: `Application submitted to open requisition in ${ats}.`,
        stepsTemplate: [
          `Strip candidate name, graduation years, address, and demographic proxies prior to rubric mapping.`,
          `Map explicit work artifacts and shipped outcomes against the 5 job-description must-have skills in ${ats} notes.`,
        ],
        hardStopBoundary: `EU AI Act High-Risk Annex III & NYC Local Law 144 red-line: AI must NEVER auto-reject candidates, assign opaque personality scores, or make hiring/advancement decisions.`,
        humanSignOffRule: `Recruiter reviews every candidate disposition personally; HR Director audits rubric fairness monthly.`,
        promptTemplate: `PII/protected-attribute blind mode active. Extract verifiable shipped outcomes matching these 4 concrete job skills: {{skills}}. Do NOT score or rank candidates; list observed evidence + 2 interview verification questions.`,
        auditTrailSpec: `Log rubric version and human recruiter disposition in ${ats}.`,
      },
      {
        code: 'HR-SOP-02',
        title: `Interview Debrief Synthesis & Contradiction Check (${ats} + ${sheet})`,
        ownerRole: 'Recruiting Partner',
        approverRole: 'Talent Acquisition Lead',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 8.0,
        shareOfVolume: 0.14,
        triggerTemplate: `All 4 panel scorecards submitted independently in ${ats}.`,
        stepsTemplate: [
          `Compile interviewer notes by competency, highlighting specific areas where two interviewers recorded conflicting evidence.`,
        ],
        hardStopBoundary: `Never generate hire/no-hire verdicts or summarize before all interviewers submit independent scorecards.`,
        humanSignOffRule: `Hiring Manager + Talent Acquisition Lead run live human calibration debrief.`,
        promptTemplate: `Summarize independent panel notes mapped strictly to approved job competencies. Highlight missing competencies nobody tested and flag subjective/non-job-related phrasing for HR cleanup.`,
        auditTrailSpec: `Retain individual human scorecards in ${ats} compliance archive.`,
      },
      {
        code: 'HR-SOP-03',
        title: `Offer Letter & Compensation Band Parity Check (${hris} + ${sheet})`,
        ownerRole: 'People Ops Manager',
        approverRole: 'HR Director',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 9.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Hiring manager requests offer packet generation in ${ats}.`,
        stepsTemplate: [
          `Verify proposed base, bonus, and equity grant against approved level band in ${sheet} and internal peer pay-equity range in ${hris}.`,
          `Populate standard approved offer template fields.`,
        ],
        hardStopBoundary: `Never dispatch offer letters, modify standard IP/at-will legal clauses, or approve out-of-band compensation.`,
        humanSignOffRule: `HR Director + CFO dual sign-off on all offers and any out-of-band exception.`,
        promptTemplate: `Validate proposed base={{base}}, equity={{equity}}, level={{level}} against approved band JSON. Flag OUT_OF_BAND if above P75 or creating >10% internal level compression.`,
        auditTrailSpec: `Attach CFO + HR Director compensation approval to ${hris} employee record.`,
      },
      {
        code: 'HR-SOP-04',
        title: `Day-1 Onboarding Provisioning & Compliance Checklist (${hris} + ${chat})`,
        ownerRole: 'People Operations Specialist',
        approverRole: 'People Ops Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 7.5,
        shareOfVolume: 0.12,
        triggerTemplate: `Signed offer letter recorded in ${ats} / ${hris}.`,
        stepsTemplate: [
          `Generate role-based least-privilege IT access request, I-9 / background check reminders, and 30-60-90 onboarding schedule.`,
        ],
        hardStopBoundary: `Never grant production database or financial admin permissions without IT/Security approval.`,
        humanSignOffRule: `People Ops Manager verifies background check clearance prior to Day-1 system activation.`,
        promptTemplate: `Generate Day-1 onboarding checklist for role={{role}}, department={{dept}}, state={{state}}. Include mandatory state-specific labor notices and least-privilege tool list.`,
        auditTrailSpec: `Record completed onboarding acknowledgments in ${hris}.`,
      },
      {
        code: 'HR-SOP-05',
        title: `Employee Handbook & Benefits Policy Helpdesk (${chat} + ${hris})`,
        ownerRole: 'People Ops Specialist',
        approverRole: 'HR Director',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 4.0,
        shareOfVolume: 0.2,
        triggerTemplate: `Employee asks PTO, parental leave, 401(k), or reimbursement question in ${chat} #ask-people.`,
        stepsTemplate: [
          `Cite exact section and page of current year Employee Handbook; route any medical/FMLA, accommodation, or harassment disclosure privately to HR Director.`,
        ],
        hardStopBoundary: `Immediately halt AI processing and route confidentially to human HR Director on any medical, ADA, FMLA, retaliation, or workplace conduct matter.`,
        humanSignOffRule: `HR Director handles 100% of employee relations, medical leave, and legal accommodations personally.`,
        promptTemplate: `Answer strictly from verbatim 2026 Employee Handbook sections with citation. If query touches medical leave, disability, pay dispute, or conduct, output PRIVATE_HR_ESCALATION only.`,
        auditTrailSpec: `Zero retention of sensitive employee DMs in shared model logs.`,
      },
      {
        code: 'HR-SOP-06',
        title: `Offboarding Access Revocation & Asset Recovery Audit (${hris} + ${sheet})`,
        ownerRole: 'People Ops Manager',
        approverRole: 'HR Director',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 8.5,
        shareOfVolume: 0.06,
        triggerTemplate: `Separation workflow initiated by HR Director in ${hris}.`,
        stepsTemplate: [
          `Cross-check active SaaS seats, GitHub/Cloudflare/SSO tokens, corporate cards, and laptop return tracking into a timestamped SOC2 revocation checklist.`,
        ],
        hardStopBoundary: `Never initiate termination notices, calculate final state severance/PTO payout law without payroll validation, or lock accounts prior to scheduled HR meeting.`,
        humanSignOffRule: `HR Director + IT Lead co-sign 100% access revocation within 15 minutes of separation time.`,
        promptTemplate: `Compile SOC2 offboarding revocation checklist across SSO, GitHub, cloud consoles, CRM, corporate card, and hardware serial asset tag.`,
        auditTrailSpec: `Store timestamped revocation evidence for annual SOC2 audit.`,
      },
      {
        code: 'HR-SOP-07',
        title: `Performance Cycle Calibration Bias & Vagueness Check (${hris})`,
        ownerRole: 'VP of People',
        approverRole: 'HR Director',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 7.0,
        shareOfVolume: 0.06,
        triggerTemplate: `Managers submit draft semi-annual performance reviews in ${hris}.`,
        stepsTemplate: [
          `Flag vague personality feedback lacking concrete work examples and return private coaching prompts to managers before calibration.`,
        ],
        hardStopBoundary: `AI never assigns performance ratings, PIPs, bonus multipliers, or promotion decisions.`,
        humanSignOffRule: `Department VP + HR Director run live human calibration and sign all final ratings.`,
        promptTemplate: `Review draft manager feedback for specificity. Flag unsupported generalizations and ask manager to supply 2 concrete project examples from the review period.`,
        auditTrailSpec: `Keep manager coaching nudges ephemeral; store only human-authored final review in ${hris}.`,
      },
      {
        code: 'HR-SOP-08',
        title: `Headcount Plan vs Payroll Burn Reconciliation (${hris} + ${sheet})`,
        ownerRole: 'People Analytics Lead',
        approverRole: 'HR Director',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 9.0,
        shareOfVolume: 0.06,
        triggerTemplate: `Monthly sync between ${hris} roster, ${ats} open reqs, and Finance ${sheet} budget.`,
        stepsTemplate: [
          `Reconcile active roster, start dates, attrition, and open requisitions against approved quarterly headcount budget.`,
        ],
        hardStopBoundary: `Read-only roster reconciliation; cannot open or freeze headcount reqs.`,
        humanSignOffRule: `HR Director + CFO co-sign monthly headcount reconciliation.`,
        promptTemplate: `Compare ${hris} active employees + ${ats} open reqs against approved Finance headcount plan. Highlight unbudgeted reqs, start-date slippage, and salary variance.`,
        auditTrailSpec: `Archive monthly HR-Finance reconciliation tab in ${sheet}.`,
      },
    ],
    small_business: [
      {
        code: 'SMB-SOP-01',
        title: `Same-Day Quote & Scope Estimate Builder (${crm} + ${sheet})`,
        ownerRole: 'General Manager',
        approverRole: 'CEO / Founder',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 8.5,
        shareOfVolume: 0.24,
        triggerTemplate: `New inbound customer lead or RFP inquiry lands in ${crm} or inbox.`,
        stepsTemplate: [
          `Map requested job scope against approved price book and minimum gross-margin floor (55%+) in ${sheet}.`,
          `Stage clean itemized quote draft and follow-up email for owner/GM review.`,
        ],
        hardStopBoundary: `AI agent must never send binding customer quotes with custom discounts, below-floor margins, or non-standard warranty commitments without human sign-off.`,
        humanSignOffRule: `General Manager approves standard price-book quotes; CEO / Founder approves any discount > 10% or custom scope.`,
        promptTemplate: `Using ONLY our approved 2026 Price Book JSON, calculate line-item pricing, labor hours, and gross margin %. Flag MARGIN_FLOOR_BREACH if gross margin < 55%.`,
        auditTrailSpec: `Save quote margin sheet and approver initials in ${crm}.`,
      },
      {
        code: 'SMB-SOP-02',
        title: `Bookkeeping Categorization & Receipt Reconciliation (${erp} + ${billing})`,
        ownerRole: 'Office / Finance Manager',
        approverRole: 'CEO / Founder',
        riskTier: 'HIGH_CONTROL',
        minutesSavedPerItem: 5.5,
        shareOfVolume: 0.22,
        triggerTemplate: `Weekly bank, card, and ${billing} payout feed syncs into ${erp}.`,
        stepsTemplate: [
          `Match payouts less processing fees to paid customer invoices and suggest chart-of-accounts categories for recurring vendor expenses.`,
        ],
        hardStopBoundary: `Never file sales/payroll tax returns, initiate ACH vendor transfers, or overwrite reconciled prior-month ${erp} periods.`,
        humanSignOffRule: `Office Manager + CPA/Founder review and lock monthly ${erp} reconciliation.`,
        promptTemplate: `Match bank feed lines to historical ${erp} vendor categories. Mark any new vendor or charge > $500 as NEEDS_OWNER_REVIEW instead of guessing.`,
        auditTrailSpec: `Export monthly ${erp} audit log before CPA close.`,
      },
      {
        code: 'SMB-SOP-03',
        title: `Overdue Invoice Friendly Follow-Up & Cash Collection (${erp} + ${billing})`,
        ownerRole: 'Operations Manager',
        approverRole: 'General Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 5.0,
        shareOfVolume: 0.14,
        triggerTemplate: `Customer invoice reaches 5, 14, or 30 days overdue in ${erp}.`,
        stepsTemplate: [
          `Verify job completion status and payment link validity in ${billing}, then stage personalized follow-up email draft.`,
        ],
        hardStopBoundary: `Never threaten legal action or charge stored cards without explicit customer authorization.`,
        humanSignOffRule: `General Manager reviews 5-minute daily outbound collection queue before send.`,
        promptTemplate: `Write a warm, clear small-business payment check-in for Invoice #{{inv_id}} (USD {{amount}}) including direct payment link placeholder. Keep under 90 words.`,
        auditTrailSpec: `Log collection contact date in ${erp} customer notes.`,
      },
      {
        code: 'SMB-SOP-04',
        title: `After-Hours Lead & Customer Inquiry Triage (${crm} + ${chat})`,
        ownerRole: 'Customer Service Lead',
        approverRole: 'General Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 4.0,
        shareOfVolume: 0.16,
        triggerTemplate: `Inbound web form or email arrives outside business hours.`,
        stepsTemplate: [
          `Capture contact details in ${crm}, send transparent acknowledgment ("Our team reviews at 8:00 AM"), and alert on-call ${chat} channel for true emergencies.`,
        ],
        hardStopBoundary: `Never pretend to be a human employee or quote binding pricing/refunds in automated acknowledgments.`,
        humanSignOffRule: `Customer Service Lead reviews morning priority queue at 8:00 AM.`,
        promptTemplate: `Classify inbound inquiry as URGENT_SERVICE, HIGH_VALUE_LEAD, or ROUTINE_SUPPORT. Draft morning callback brief for ${chat}.`,
        auditTrailSpec: `Track lead response SLA in ${crm}.`,
      },
      {
        code: 'SMB-SOP-05',
        title: `Weekly Crew / Team Schedule & Overtime Alert (${sheet} + ${chat})`,
        ownerRole: 'Operations Manager',
        approverRole: 'General Manager',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 7.0,
        shareOfVolume: 0.08,
        triggerTemplate: `Thursday afternoon next-week shift & job scheduling in ${sheet}.`,
        stepsTemplate: [
          `Match booked customer jobs against staff availability and flag any schedule projected to cross 40-hour overtime thresholds.`,
        ],
        hardStopBoundary: `Cannot alter employee hourly pay rates or approve overtime payroll runs.`,
        humanSignOffRule: `General Manager approves and publishes final weekly schedule.`,
        promptTemplate: `Check draft shift table for coverage gaps, back-to-back clopen shifts, and projected weekly hours > 38 per team member.`,
        auditTrailSpec: `Archive approved weekly schedule in ${sheet}.`,
      },
      {
        code: 'SMB-SOP-06',
        title: `Supplier Price Creep & Reorder Alert (${erp} + ${sheet})`,
        ownerRole: 'Purchasing Coordinator',
        approverRole: 'CEO / Founder',
        riskTier: 'GUARDED',
        minutesSavedPerItem: 6.0,
        shareOfVolume: 0.06,
        triggerTemplate: `Supplier invoice enters ${erp} for repeat materials or software.`,
        stepsTemplate: [
          `Compare unit cost against trailing 90-day purchase price in ${sheet} and flag silent supplier price hikes > 3%.`,
        ],
        hardStopBoundary: `Never place automated supplier purchase orders without human quantity and cash verification.`,
        humanSignOffRule: `Founder / GM approves supplier POs and challenges unannounced price hikes.`,
        promptTemplate: `Compare current supplier invoice unit prices against 90-day baseline CSV. Highlight every SKU up > 3% and calculate annualized margin hit.`,
        auditTrailSpec: `Record supplier credit recoveries in ${sheet}.`,
      },
      {
        code: 'SMB-SOP-07',
        title: `5-Star Review Request & Unhappy Customer Intercept (${crm} + ${chat})`,
        ownerRole: 'Customer Service Lead',
        approverRole: 'General Manager',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 3.5,
        shareOfVolume: 0.06,
        triggerTemplate: `Job or order marked completed in ${crm}.`,
        stepsTemplate: [
          `Check if customer had any delay or complaint; queue review invite for smooth jobs and route bumpy jobs to GM for personal recovery call first.`,
        ],
        hardStopBoundary: `Never post fake reviews or send public review asks to customers with open complaints.`,
        humanSignOffRule: `General Manager personally calls any dissatisfied customer before closure.`,
        promptTemplate: `Inspect job notes for delays, callbacks, or billing friction. Output READY_FOR_REVIEW_ASK or ROUTE_TO_GM_CALL with 1-line summary.`,
        auditTrailSpec: `Log customer follow-up status in ${crm}.`,
      },
      {
        code: 'SMB-SOP-08',
        title: `Friday 10-Minute Owner Cash, Margin & Pipeline Scorecard (${erp} + ${sheet})`,
        ownerRole: 'Office Manager',
        approverRole: 'CEO / Founder',
        riskTier: 'LOW_RISK',
        minutesSavedPerItem: 8.5,
        shareOfVolume: 0.04,
        triggerTemplate: `Friday 3:00 PM weekly owner flash.`,
        stepsTemplate: [
          `Pull bank cash on hand, overdue AR, next week's payroll/AP commitments, and new quotes won into 1 clean ${sheet} owner tab.`,
        ],
        hardStopBoundary: `Read-only summary; zero bank or payroll write permissions.`,
        humanSignOffRule: `CEO / Founder reviews Friday afternoon to set Monday priorities.`,
        promptTemplate: `Format 6-number Friday Owner Flash: Cash on Hand, 14-Day Committed Outflows, Overdue AR > 15d, Gross Margin %, Quotes Sent vs Won, Top Operational Risk.`,
        auditTrailSpec: `Maintain 52-week rolling owner scoreboard in ${sheet}.`,
      },
    ],
  };

  return matrix[dept];
}

function getRedLineForDepartment(
  dept: DepartmentId,
  stack: string[]
): DepartmentPlaybookSealedPayload['redLineWarning'] {
  const erp = pickTool(stack, ['NetSuite', 'QuickBooks'], dept === 'small_business' ? 'QuickBooks' : 'NetSuite');
  const billing = pickTool(stack, ['Stripe', 'Ramp'], 'Stripe');
  const ats = pickTool(stack, ['Greenhouse', 'Workday'], 'Greenhouse');

  const map: Record<DepartmentId, DepartmentPlaybookSealedPayload['redLineWarning']> = {
    finance: {
      headline: `#1 Finance Red-Line: Never Grant an AI Agent Write Access to ${erp} Journal Entries or Vendor ACH Routing`,
      controlStandard: 'SOX Section 404 Segregation of Duties & AICPA SOC2 CC6.1',
      prohibitedAction: `Autonomous posting of adjusting GL entries in ${erp} or updating vendor bank instructions from emailed PDFs.`,
      financialConsequence:
        'A single prompt-injected vendor invoice can rewrite ACH routing details or post unbalanced close entries, triggering wire loss and external audit material weakness.',
      mandatoryGate: `Stage drafts in read-only ${erp} sandbox CSV; enforce dual human approval (Accounting Manager + Controller) on every GL post and vendor bank change.`,
    },
    operations: {
      headline: '#1 Operations Red-Line: Never Allow Autonomous Vendor Contract Binding or Production Kill-Switches',
      controlStandard: 'Corporate Delegation of Authority (DoA) & Vendor Risk Governance',
      prohibitedAction:
        'Allowing procurement or workflow agents to execute e-signatures, accept updated vendor AI data-training terms, or auto-cancel live cloud services.',
      financialConsequence:
        'Silent multi-year SaaS lock-in at 9% annual uplift or accidental termination of production DNS/storage infrastructure.',
      mandatoryGate:
        'Restrict AI strictly to contract extraction and redline drafting; require VP of Operations + CFO sign-off above Delegation of Authority thresholds.',
    },
    support: {
      headline: `#1 Support Red-Line: Never Connect an AI Support Bot Directly to ${billing} Refund or Credit Write Scopes`,
      controlStandard: 'PCI-DSS / SOC2 Financial Transaction Authorization',
      prohibitedAction: `Granting customer-facing chat or ticket agents live API tokens with ${billing} refunds.create or account-plan override permissions.`,
      financialConsequence:
        'Adversarial users routinely share copy-paste jailbreak prompts on social forums that trick autonomous support bots into issuing full refunds and free enterprise upgrades.',
      mandatoryGate: `Keep ${billing} strictly read-only for eligibility calculation; queue every refund > $0 for one-click human approval by Billing Support Lead or Customer Support Manager.`,
    },
    hr: {
      headline: `#1 HR Red-Line: Never Allow Automated Candidate Rejection or Algorithmic Ranking in ${ats}`,
      controlStandard: 'EU AI Act Annex III (High-Risk Employment AI) & NYC Local Law 144 (AEDT)',
      prohibitedAction: `Using LLMs to auto-reject applicants, infer protected traits, or assign numeric "culture fit" scores in ${ats}.`,
      financialConsequence:
        'Statutory fines up to 7% of global turnover under EU AI Act high-risk rules plus EEOC disparate-impact litigation exposure.',
      mandatoryGate:
        'Enforce PII-blind factual skill extraction only; require a named human recruiter to review and disposition 100% of applicants.',
    },
    small_business: {
      headline: `#1 Owner Red-Line: Never Let an AI Agent Send Unreviewed Custom Quotes or Initiate ${erp} Payouts`,
      controlStandard: 'Gross Margin Floor Protection & Dual-Control Treasury Rule',
      prohibitedAction:
        'Allowing an inbox or quoting bot to email binding customer prices, waive deposits, or trigger vendor/payroll transfers without owner eyes.',
      financialConsequence:
        'One underpriced custom job or hallucinated warranty promise can wipe out an entire month of net operating profit on a 10-person team.',
      mandatoryGate:
        'Enforce a hard 55%+ gross-margin floor check in quote staging and require a 60-second Founder or General Manager sign-off before send.',
    },
  };

  return map[dept];
}

function compileSingleDepartmentSops(
  dept: DepartmentId,
  headcount: number,
  avgLoadedHourlyUsd: number,
  monthlyVolume: number,
  softwareStack: string[]
): GovernedSopFull[] {
  const meta = DEPARTMENT_CATALOG[dept];
  const blueprints = getBlueprintsForDepartment(dept, softwareStack);

  // Realistic capacity cap: recoverable hours per month cannot exceed 34% of total department hours (headcount * 160 * 0.34)
  const maxRecoverableTeamHours = Math.max(12, Math.round(headcount * 160 * 0.34));
  const rawHoursList = blueprints.map(
    (b) => (monthlyVolume * b.shareOfVolume * b.minutesSavedPerItem) / 60
  );
  const rawTotalHours = rawHoursList.reduce((a, b) => a + b, 0) || 1;
  const scaleFactor = rawTotalHours > maxRecoverableTeamHours ? maxRecoverableTeamHours / rawTotalHours : 1;

  return blueprints.map((bp, idx) => {
    const hours = Math.max(2, Math.round(rawHoursList[idx] * scaleFactor * 10) / 10);
    const dollars = Math.round(hours * avgLoadedHourlyUsd);
    return {
      sopNumber: idx + 1,
      code: bp.code,
      department: dept,
      departmentLabel: meta.label,
      title: bp.title,
      ownerRole: bp.ownerRole,
      approverRole: bp.approverRole,
      riskTier: bp.riskTier,
      monthlyHoursSaved: hours,
      monthlyDollarRecovery: dollars,
      triggerCondition: bp.triggerTemplate,
      autonomousSteps: bp.stepsTemplate,
      hardStopBoundary: bp.hardStopBoundary,
      humanSignOffRule: bp.humanSignOffRule,
      sanitizedPromptTemplate: bp.promptTemplate,
      auditTrailSpec: bp.auditTrailSpec,
    };
  });
}

export function compileDepartmentPlaybook(
  input: PlaybookCompileInput
): DepartmentPlaybookSealedPayload {
  const meta = DEPARTMENT_CATALOG[input.department];
  const headcount = Math.max(1, Math.min(500, Math.round(input.headcount || meta.defaultHeadcount)));
  const avgLoadedHourlyUsd = Math.max(
    20,
    Math.min(350, Math.round(input.avgLoadedHourlyUsd || meta.defaultHourlyUsd))
  );
  const monthlyVolume = Math.max(
    25,
    Math.min(100000, Math.round(input.monthlyVolume || meta.defaultMonthlyVolume))
  );
  const cleanStack =
    input.softwareStack && input.softwareStack.length > 0
      ? input.softwareStack.slice(0, 10)
      : meta.recommendedStack;

  const sops = compileSingleDepartmentSops(
    input.department,
    headcount,
    avgLoadedHourlyUsd,
    monthlyVolume,
    cleanStack
  );

  const monthlyHoursRecovered =
    Math.round(sops.reduce((sum, s) => sum + s.monthlyHoursSaved, 0) * 10) / 10;
  const monthlyRecoverableUsd = sops.reduce((sum, s) => sum + s.monthlyDollarRecovery, 0);
  const annualRecoverableUsd = monthlyRecoverableUsd * 12;

  // Deterministic inference cost estimate ($0.018 per processed workflow item including 1.2x retry buffer + $25 floor)
  const estimatedMonthlyTokenCostUsd = Math.max(25, Math.round(monthlyVolume * 0.018 * 1.2));
  const netAnnualSavingsUsd = Math.max(0, annualRecoverableUsd - estimatedMonthlyTokenCostUsd * 12);

  const allDepartmentsBundle = (Object.keys(DEPARTMENT_CATALOG) as DepartmentId[]).reduce(
    (acc, deptKey) => {
      const dMeta = DEPARTMENT_CATALOG[deptKey];
      acc[deptKey] =
        deptKey === input.department
          ? sops
          : compileSingleDepartmentSops(
              deptKey,
              deptKey === input.department ? headcount : dMeta.defaultHeadcount,
              deptKey === input.department ? avgLoadedHourlyUsd : dMeta.defaultHourlyUsd,
              deptKey === input.department ? monthlyVolume : dMeta.defaultMonthlyVolume,
              cleanStack
            );
      return acc;
    },
    {} as Record<DepartmentId, GovernedSopFull[]>
  );

  return {
    department: input.department,
    departmentLabel: meta.label,
    buyerTitles: meta.buyerTitles,
    compiledAt: new Date().toISOString(),
    headcount,
    avgLoadedHourlyUsd,
    monthlyVolume,
    softwareStack: cleanStack,
    monthlyRecoverableUsd,
    annualRecoverableUsd,
    monthlyHoursRecovered,
    estimatedMonthlyTokenCostUsd,
    netAnnualSavingsUsd,
    redLineWarning: getRedLineForDepartment(input.department, cleanStack),
    sops,
    allDepartmentsBundle,
  };
}

export function buildPublicPlaybookResponse(
  runId: string,
  payload: DepartmentPlaybookSealedPayload,
  sealedEnvelope: string
): DepartmentPlaybookPublicResponse {
  const freeSop = payload.sops[0];
  const lockedSopStubs: GovernedSopStub[] = payload.sops.slice(1).map((s) => ({
    sopNumber: s.sopNumber,
    code: s.code,
    title: s.title,
    ownerRole: s.ownerRole,
    riskTier: s.riskTier,
    monthlyHoursSaved: s.monthlyHoursSaved,
    monthlyDollarRecovery: s.monthlyDollarRecovery,
  }));

  return {
    runId,
    department: payload.department,
    departmentLabel: payload.departmentLabel,
    buyerTitles: payload.buyerTitles,
    compiledAt: payload.compiledAt,
    headcount: payload.headcount,
    avgLoadedHourlyUsd: payload.avgLoadedHourlyUsd,
    monthlyVolume: payload.monthlyVolume,
    softwareStack: payload.softwareStack,
    monthlyRecoverableUsd: payload.monthlyRecoverableUsd,
    annualRecoverableUsd: payload.annualRecoverableUsd,
    monthlyHoursRecovered: payload.monthlyHoursRecovered,
    estimatedMonthlyTokenCostUsd: payload.estimatedMonthlyTokenCostUsd,
    netAnnualSavingsUsd: payload.netAnnualSavingsUsd,
    redLineWarning: payload.redLineWarning,
    freeSop,
    lockedSopStubs,
    workbookTabPreview: [
      'Busywork OpEx Model (Live Formulas)',
      'SOX RACI Thresholds',
      'Variance Exception Log',
      'Inference Spend Caps',
      '90-Day Rollout Plan',
    ],
    sealedEnvelope,
  };
}

export function buildDepartmentXlsxSheets(
  payload: DepartmentPlaybookSealedPayload,
  includeAllDepartmentsMasterTab = false
): XlsxWorksheetSpec[] {
  const sopStartRow = 5;
  const sopEndRow = sopStartRow + payload.sops.length - 1; // Row 12 for 8 SOPs
  const totalRow = sopEndRow + 1; // Row 13
  const perSopMonthlyTokenUsd = Math.max(
    4,
    Math.round(payload.estimatedMonthlyTokenCostUsd / payload.sops.length)
  );

  const sheet1Rows: XlsxWorksheetSpec['rows'] = [
    [
      { value: `RICHARD EWING - ${payload.departmentLabel.toUpperCase()} AI OPEX & ROI WORKBOOK`, style: 'header' },
      { value: `Stack: ${payload.softwareStack.join(', ')}`, style: 'header' },
      { value: `Headcount: ${payload.headcount}`, style: 'header' },
      { value: `Loaded Rate: $${payload.avgLoadedHourlyUsd}/hr`, style: 'header' },
      { value: `Volume: ${payload.monthlyVolume}/mo`, style: 'header' },
      { value: 'Annualized Gross', style: 'header' },
      { value: 'Annual Token Cost', style: 'header' },
      { value: 'Net Annual Margin Gain', style: 'header' },
    ],
    [
      { value: 'Executive Governance Rule', style: 'subheader' },
      { value: payload.redLineWarning.headline, style: 'alert' },
      { value: payload.redLineWarning.controlStandard, style: 'subheader' },
      null,
      null,
      null,
      null,
      null,
    ],
    [],
    [
      { value: 'SOP Code', style: 'subheader' },
      { value: 'Governed Workflow Name', style: 'subheader' },
      { value: 'Loaded Hourly Rate ($)', style: 'subheader' },
      { value: 'Monthly Hours Saved', style: 'subheader' },
      { value: 'Monthly OpEx Recovery ($)', style: 'subheader' },
      { value: 'Annual OpEx Recovery ($)', style: 'subheader' },
      { value: 'Est. Annual AI API Cost ($)', style: 'subheader' },
      { value: 'Net Annual Savings ($)', style: 'subheader' },
    ],
  ];

  payload.sops.forEach((sop, idx) => {
    const r = sopStartRow + idx;
    const annualToken = perSopMonthlyTokenUsd * 12;
    const monthlyDollars = Math.round(payload.avgLoadedHourlyUsd * sop.monthlyHoursSaved);
    const annualDollars = monthlyDollars * 12;
    sheet1Rows.push([
      sop.code,
      sop.title,
      { value: payload.avgLoadedHourlyUsd, style: 'currency' },
      { value: sop.monthlyHoursSaved, style: 'default' },
      { formula: `ROUND(C${r}*D${r},0)`, value: monthlyDollars, style: 'currency' },
      { formula: `E${r}*12`, value: annualDollars, style: 'currency' },
      { value: annualToken, style: 'currency' },
      { formula: `F${r}-G${r}`, value: annualDollars - annualToken, style: 'currency_bold' },
    ]);
  });

  sheet1Rows.push([
    { value: 'TOTAL', style: 'subheader' },
    { value: 'Department Governed Portfolio (8 SOPs)', style: 'subheader' },
    { value: payload.avgLoadedHourlyUsd, style: 'currency_bold' },
    {
      formula: `SUM(D${sopStartRow}:D${sopEndRow})`,
      value: payload.monthlyHoursRecovered,
      style: 'subheader',
    },
    {
      formula: `SUM(E${sopStartRow}:E${sopEndRow})`,
      value: payload.monthlyRecoverableUsd,
      style: 'currency_bold',
    },
    {
      formula: `SUM(F${sopStartRow}:F${sopEndRow})`,
      value: payload.annualRecoverableUsd,
      style: 'currency_bold',
    },
    {
      formula: `SUM(G${sopStartRow}:G${sopEndRow})`,
      value: perSopMonthlyTokenUsd * 12 * payload.sops.length,
      style: 'currency_bold',
    },
    {
      formula: `F${totalRow}-G${totalRow}`,
      value: payload.netAnnualSavingsUsd,
      style: 'currency_bold',
    },
  ]);

  const sheet2: XlsxWorksheetSpec = {
    name: 'SOX RACI Thresholds',
    columnWidths: [14, 34, 16, 22, 22, 42, 38],
    rows: [
      [
        { value: 'SOP Code', style: 'header' },
        { value: 'Workflow Title', style: 'header' },
        { value: 'Control Tier', style: 'header' },
        { value: 'Operator Role (R)', style: 'header' },
        { value: 'Sign-Off Role (A)', style: 'header' },
        { value: 'Hard-Stop AI Boundary (Never Autonomous)', style: 'header' },
        { value: 'Human Approval Threshold & Audit Evidence', style: 'header' },
      ],
      ...payload.sops.map((s) => [
        s.code,
        s.title,
        { value: s.riskTier, style: s.riskTier === 'HIGH_CONTROL' ? ('alert' as const) : ('default' as const) },
        s.ownerRole,
        s.approverRole,
        s.hardStopBoundary,
        `${s.humanSignOffRule} | Audit: ${s.auditTrailSpec}`,
      ]),
    ],
  };

  const sheet3: XlsxWorksheetSpec = {
    name: 'Variance Exception Log',
    columnWidths: [14, 16, 22, 18, 18, 18, 24, 34],
    rows: [
      [
        { value: 'Exception ID', style: 'header' },
        { value: 'SOP Code', style: 'header' },
        { value: 'Source System Ref', style: 'header' },
        { value: 'Expected Amount ($)', style: 'header' },
        { value: 'Actual Amount ($)', style: 'header' },
        { value: 'Variance ($)', style: 'header' },
        { value: 'Required Approver', style: 'header' },
        { value: 'Resolution Notes', style: 'header' },
      ],
      [
        'EXC-0001',
        payload.sops[0].code,
        `${payload.softwareStack[0] || 'System'} #10482`,
        { value: 4200, style: 'currency' },
        { value: 4680, style: 'currency' },
        { formula: 'E2-D2', value: 480, style: 'currency_bold' },
        payload.sops[0].approverRole,
        'Sample row: held in staging queue pending human variance sign-off.',
      ],
      [
        'EXC-0002',
        payload.sops[1].code,
        `${payload.softwareStack[1] || 'System'} #10499`,
        { value: 12500, style: 'currency' },
        { value: 12500, style: 'currency' },
        { formula: 'E3-D3', value: 0, style: 'currency_bold' },
        payload.sops[1].approverRole,
        'Sample row: matched within 0.0% tolerance; human one-click approved.',
      ],
    ],
  };

  const sheet4: XlsxWorksheetSpec = {
    name: 'Inference Spend Caps',
    columnWidths: [14, 32, 18, 18, 18, 22, 20],
    rows: [
      [
        { value: 'SOP Code', style: 'header' },
        { value: 'Workflow', style: 'header' },
        { value: 'Est. Monthly Runs', style: 'header' },
        { value: 'Cost / Run ($)', style: 'header' },
        { value: 'Retry Buffer (1.2x)', style: 'header' },
        { value: 'Monthly Token Forecast ($)', style: 'header' },
        { value: 'Hard Circuit-Breaker Cap ($)', style: 'header' },
      ],
      ...payload.sops.map((s, idx) => {
        const r = idx + 2;
        const runs = Math.max(10, Math.round(payload.monthlyVolume / payload.sops.length));
        const expected = Math.round(runs * 0.018 * 1.2);
        return [
          s.code,
          s.title,
          { value: runs, style: 'integer' as const },
          0.018,
          1.2,
          { formula: `ROUND(C${r}*D${r}*E${r},2)`, value: expected, style: 'currency' as const },
          { formula: `ROUND(F${r}*1.35+10,0)`, value: Math.round(expected * 1.35 + 10), style: 'currency_bold' as const },
        ];
      }),
    ],
  };

  const sheet5: XlsxWorksheetSpec = {
    name: '90-Day Rollout Plan',
    columnWidths: [18, 26, 24, 44, 30],
    rows: [
      [
        { value: 'Rollout Window', style: 'header' },
        { value: 'Operating Mode', style: 'header' },
        { value: 'Accountable Lead', style: 'header' },
        { value: 'Implementation Milestone', style: 'header' },
        { value: 'Go / No-Go Exit Gate', style: 'header' },
      ],
      [
        'Days 1 to 14',
        'Phase 1: Read-Only Shadow',
        payload.sops[0].ownerRole,
        `Connect read-only exports from ${payload.softwareStack.slice(0, 3).join(', ')}; run SOP-01 and SOP-02 in shadow comparison against human baseline.`,
        'Zero PII leakage + >= 95% classification parity with human reviewer.',
      ],
      [
        'Days 15 to 45',
        'Phase 2: Staged Human Queue',
        payload.sops[0].approverRole,
        'Enable draft staging for SOP-01 through SOP-05 with mandatory human click-to-approve and hard token spend caps.',
        '100% of HIGH_CONTROL mutations logged in Exception Register with zero unauthorized writes.',
      ],
      [
        'Days 46 to 90',
        'Phase 3: Full 8-SOP Cadence',
        payload.buyerTitles.split(',')[0].trim(),
        'Roll out SOP-06 through SOP-08 and institute monthly BvA time-recovered audit in Finance close.',
        `Verified run-rate recovery tracking toward $${payload.monthlyRecoverableUsd.toLocaleString()}/mo target.`,
      ],
    ],
  };

  const sheets: XlsxWorksheetSpec[] = [
    {
      name: 'Busywork OpEx Model',
      columnWidths: [14, 38, 20, 20, 22, 22, 22, 24],
      rows: sheet1Rows,
    },
    sheet2,
    sheet3,
    sheet4,
    sheet5,
  ];

  if (includeAllDepartmentsMasterTab) {
    const allDepts = Object.keys(DEPARTMENT_CATALOG) as DepartmentId[];
    const masterRows: XlsxWorksheetSpec['rows'] = [
      [
        { value: 'Department', style: 'header' },
        { value: 'SOP Code', style: 'header' },
        { value: 'Governed Workflow Title', style: 'header' },
        { value: 'Operator Role', style: 'header' },
        { value: 'Approver Role', style: 'header' },
        { value: 'Control Tier', style: 'header' },
        { value: 'Est. Monthly Recovery ($)', style: 'header' },
      ],
    ];
    for (const dKey of allDepts) {
      for (const sop of payload.allDepartmentsBundle[dKey] || []) {
        masterRows.push([
          sop.departmentLabel,
          sop.code,
          sop.title,
          sop.ownerRole,
          sop.approverRole,
          sop.riskTier,
          { value: sop.monthlyDollarRecovery, style: 'currency' },
        ]);
      }
    }
    sheets.push({
      name: 'All 5 Depts Master',
      columnWidths: [26, 14, 38, 22, 22, 16, 22],
      rows: masterRows,
    });
  }

  return sheets;
}
