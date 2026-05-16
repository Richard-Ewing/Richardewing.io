const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'assets/skills');

const upgrades = {
  'context-rot-prevention': {
    csv: `Metric,Without System,With System,Improvement
Avg Session Token Cost,$12-$45/session,$4-$8/session,70% reduction
Developer Remediation Hours,2-6 hrs/incident,0.25 hrs/incident,92% reduction
Files Corrupted Per Incident,8-47 files,0-2 files,96% reduction
Monthly Agentic Failure Cost (team of 5),$3200-$8500,$400-$900,88% reduction
Session Stability Duration,45-90 min,4+ hours,300% improvement
Recursive Patch Chains/Week,3-8,0,100% elimination`,
    mmd: `graph TD
    A["Agent Request"] --> B["Context Health Monitor"]
    B --> C{"Window Usage Check"}
    C -- "< 65%" --> D["Execute Normally"]
    C -- "65-85%" --> E["Checkpoint Rotation"]
    E --> F["Prune Stale Context"]
    F --> D
    C -- "> 85%" --> G["CRITICAL: Semantic Reset"]
    G --> H["Preserve Architecture State"]
    H --> I["Purge Interaction History"]
    I --> J["Reload Core Context"]
    J --> D
    D --> K["Post-Flight Audit"]
    K --> L{"Patch Chain Check"}
    L -- "< 3 patches" --> M["Continue"]
    L -- ">= 3 patches" --> N["HALT + Human Escalation"]`
  },
  'runtime-governance': {
    csv: `Metric,Without System,With System,Improvement
Production Incidents from Agent Actions/Year,4-12,0,100% elimination
Average Incident Cost,$5000-$50000,$0,Total prevention
Security Audit Findings from Agents/Quarter,3-8,0,100% elimination
Unauthorized Shell Commands Blocked/Month,0 (undetected),15-30,Full visibility
Config File Mutation Attempts Blocked/Month,0 (undetected),5-12,Full prevention`,
    mmd: `graph TD
    A["Agent Action Request"] --> B["Execution Interceptor"]
    B --> C{"Command Classification"}
    C -- "Whitelisted" --> D["Admissibility Engine"]
    D --> E{"Payload Validation"}
    E -- "Valid" --> F["Execute in Sandbox"]
    E -- "Invalid" --> G["BLOCK + Log"]
    C -- "Unknown" --> H["Human Approval Queue"]
    H -- "Approved" --> D
    H -- "Denied" --> G
    C -- "Blacklisted" --> I["IMMEDIATE BLOCK"]
    I --> J["Security Alert"]
    F --> K["Post-Execution Audit"]
    K --> L{"State Integrity Check"}
    L -- "Clean" --> M["Commit Changes"]
    L -- "Corrupted" --> N["Rollback Circuit"]`
  },
  'retry-inflation-control': {
    csv: `Metric,Without System,With System,Improvement
Avg Retry Chain Cost,$15-$400+,$2-$8 (capped),95% reduction
Monthly Wasted Token Spend (team of 5),$2000-$6000,$200-$500,92% reduction
Developer Hours Lost to Retry Cleanup,4-10 hrs/week,0.5 hrs/week,92% reduction
Longest Undetected Retry Chain,89 retries ($412),5 retries ($8 max),94% cap
Identical Error Recurrence Detection,0% detected,100% detected,Complete`,
    mmd: `graph TD
    A["Agent Retry Attempt"] --> B["Retry Burn Engine"]
    B --> C{"Budget Check"}
    C -- "Within Budget" --> D{"Error Fingerprint Check"}
    D -- "New Error" --> E["Allow Retry"]
    E --> F["Decrement Budget"]
    D -- "Same Error" --> G{"Recurrence Count"}
    G -- "< 3" --> H["Context Wipe + Fresh Retry"]
    G -- ">= 3" --> I["HALT: Recursive Loop"]
    I --> J["Human Escalation"]
    C -- "Budget Exceeded" --> K["FINANCIAL CIRCUIT BREAKER"]
    K --> L["Kill Process"]
    L --> M["Audit Log"]`
  },
  'orchestration-entropy': {
    csv: `Metric,Without System,With System,Improvement
Agreement Loop Token Waste/Incident,$200-$900,$0 (halted at 10 turns),100% prevention
Delegation Ping-Pong Incidents/Month,3-8,0,100% elimination
Wasted Compute on Runaway Orchestration,$1500-$4000/month,<$100/month,97% reduction
Max Undetected Agreement Loop Duration,6+ hours,10 turns (~2 min),99% faster detection
Sub-Agent Explosion Events/Quarter,2-5,0,100% prevention`,
    mmd: `graph TD
    A["Agent Message"] --> B["Orchestrator Governor"]
    B --> C{"Turn Counter"}
    C -- "< max turns" --> D{"Tool Invocation Check"}
    D -- "Tools Used" --> E["Allow + Checkpoint State"]
    D -- "No Tools" --> F{"Agreement Counter"}
    F -- "< 10 consecutive" --> G["Allow with Warning"]
    F -- ">= 10" --> H["HALT: Agreement Loop"]
    C -- ">= max turns" --> I["HALT: Workflow Timeout"]
    B --> J{"Delegation Depth Check"}
    J -- "< max depth" --> K["Allow Delegation"]
    J -- ">= max depth" --> L["BLOCK: Force Execution"]
    H --> M["Human Escalation"]
    I --> M`
  },
  'mcp-governance': {
    csv: `Metric,Without System,With System,Improvement
Credential Exposure Incidents/Year,2-6,0,100% prevention
Unauthorized Data Access Events/Month,5-15,0,100% blocking
Tool Chain Contamination Events/Quarter,3-8,0,100% isolation
MCP Server Supply Chain Incidents/Year,1-3,0,100% validation
Security Audit MCP Findings,8-15/audit,0,Clean audits`,
    mmd: `graph TD
    A["Agent Tool Call"] --> B["MCP Gateway"]
    B --> C{"Capability Manifest Check"}
    C -- "In Manifest" --> D{"Context Isolation Check"}
    D -- "Isolated" --> E["Execute in Sandbox"]
    D -- "Leaks Context" --> F["BLOCK: Context Leak"]
    C -- "Not in Manifest" --> G["BLOCK: Unauthorized Tool"]
    E --> H{"Output Validation"}
    H -- "Clean" --> I["Return Result"]
    H -- "Sensitive Data" --> J["BLOCK: Data Exfiltration"]
    G --> K["Security Alert"]
    F --> K
    J --> K`
  },
  'verification-burden-collapse': {
    csv: `Metric,Without System,With System,Improvement
Senior Engineer Review Hours/Week,12-20 hrs,4-6 hrs,65% reduction
Average PR Review Duration,45 min,12 min,73% reduction
Rubber-Stamp Approval Rate,25-40%,<5%,87% reduction
Post-Merge Bug Rate from AI Code,8-15%,<2%,85% reduction
Engineer Burnout Risk (review fatigue),High,Low,Significant`,
    mmd: `graph TD
    A["AI Code Output"] --> B["Verification Router"]
    B --> C{"Confidence Scoring"}
    C -- ">= 0.95" --> D["Fast-Track Queue"]
    C -- "0.85-0.95" --> E["Standard Review"]
    C -- "0.75-0.85" --> F["Deep Review Required"]
    C -- "< 0.75" --> G["Auto-Reject"]
    G --> H["Structured Feedback to Agent"]
    D --> I["Lightweight Human Check"]
    E --> J["Standard Human Review"]
    F --> K["Senior Engineer Review"]
    I --> L{"Approved?"}
    J --> L
    K --> L
    L -- "Yes" --> M["Merge"]
    L -- "No" --> H`
  },
  'repository-drift-prevention': {
    csv: `Metric,Without System,With System,Improvement
Files Corrupted Per Incident,8-47,0-1,98% reduction
Rollback Time Per Incident,2-8 hours,5 minutes,97% reduction
Ghost Dependency Production Incidents/Quarter,2-5,0,100% elimination
Monthly Dev Hours Lost to Drift Cleanup,15-40 hrs,1-3 hrs,93% reduction
Unauthorized File Mutation Detection,0%,100%,Complete visibility`,
    mmd: `graph TD
    A["Agent File Write"] --> B["Repository Validator"]
    B --> C{"Scope Check"}
    C -- "In Scope" --> D{"Import Resolution"}
    D -- "All Valid" --> E["Allow Write"]
    D -- "Ghost Import" --> F["BLOCK: Phantom Dependency"]
    C -- "Out of Scope" --> G{"Override Check"}
    G -- "Has Approval" --> D
    G -- "No Approval" --> H["BLOCK: Scope Violation"]
    E --> I["Post-Write Audit"]
    I --> J{"Diff Size Check"}
    J -- "< 200 lines" --> K["Auto-Commit"]
    J -- ">= 200 lines" --> L["Human Review Required"]
    F --> M["Dependency Audit Alert"]
    H --> N["Escalation Alert"]`
  },
  'autonomous-execution-safety': {
    csv: `Metric,Without System,With System,Improvement
Destructive Commands Executed/Year,3-8,0,100% prevention
Unauthorized Package Installations/Month,5-12,0,100% blocking
Production Data Loss Incidents/Year,1-3,0,100% prevention
Shell Command Audit Trail,0% logged,100% logged,Complete audit
Blocked Dangerous Operations/Month,0 (undetected),8-20,Full prevention`,
    mmd: `graph TD
    A["Agent Shell Command"] --> B["Command Whitelist Engine"]
    B --> C{"Classification"}
    C -- "Safe (read, ls, cat)" --> D["Execute"]
    C -- "Restricted (npm, git)" --> E{"Permission Check"}
    E -- "Approved" --> D
    E -- "Not Approved" --> F["BLOCK + Human Approval"]
    C -- "Dangerous (rm, DROP)" --> G["IMMEDIATE BLOCK"]
    G --> H["Security Alert"]
    C -- "Unknown" --> I["Sandbox Execution"]
    I --> J{"Side Effect Check"}
    J -- "No Side Effects" --> K["Allow + Log"]
    J -- "Side Effects" --> F
    D --> L["Audit Log Entry"]`
  },
  'agentic-change-management': {
    csv: `Metric,Without System,With System,Improvement
Unapproved Agent Deployments/Year,4-10,0,100% prevention
Shadow AI Changes Detected/Month,0 (invisible),15-30,Full visibility
Production Incidents from Agent Changes/Year,3-8,0,100% prevention
Change Audit Trail Completeness,0-30%,100%,Complete compliance
Time to Detect Unauthorized Change,Days-weeks,Immediate,Real-time`,
    mmd: `graph TD
    A["Agent Change Request"] --> B["Change Approval Engine"]
    B --> C{"Risk Assessment"}
    C -- "Low Risk" --> D["Auto-Approve with Log"]
    C -- "Medium Risk" --> E["Peer Review Required"]
    C -- "High Risk" --> F["CAB Approval Required"]
    C -- "Critical" --> G["CTO + Security Review"]
    D --> H["Execute Change"]
    E --> I{"Reviewer Approval"}
    F --> J{"CAB Approval"}
    G --> K{"Executive Approval"}
    I -- "Approved" --> H
    J -- "Approved" --> H
    K -- "Approved" --> H
    I -- "Denied" --> L["BLOCK + Feedback"]
    J -- "Denied" --> L
    K -- "Denied" --> L
    H --> M["Post-Change Validation"]
    M --> N["Audit Trail Entry"]`
  },
  'tool-permission-governance': {
    csv: `Metric,Without System,With System,Improvement
Credential Exposure via Tools/Year,2-6,0,100% prevention
Capability Escalation Events/Month,3-8,0,100% blocking
Over-Permissioned Tool Calls/Month,50-200,0,100% enforcement
Data Exfiltration Attempts Blocked/Month,0 (undetected),5-15,Full detection
Permission Audit Score,30-50%,100%,Complete compliance`,
    mmd: `graph TD
    A["Agent Tool Request"] --> B["Scope Engine"]
    B --> C{"Task Manifest Check"}
    C -- "Tool in Manifest" --> D{"Permission Level Check"}
    D -- "Sufficient" --> E["Execute Tool"]
    D -- "Escalation Needed" --> F["BLOCK: Capability Escalation"]
    C -- "Tool NOT in Manifest" --> G["BLOCK: Unauthorized Tool"]
    E --> H{"Output Sensitivity Check"}
    H -- "Non-sensitive" --> I["Return Result"]
    H -- "Contains Secrets" --> J["REDACT + Alert"]
    F --> K["Security Alert"]
    G --> K`
  },
  'context-window-compression': {
    csv: `Metric,Without System,With System,Improvement
Session Stability Duration,45-90 min,4+ hours,300% improvement
Instruction Recall at Session End,40-60%,>90%,50% improvement
Token Waste from Stale Context,30-50%,<10%,70% reduction
Context-Related Build Failures/Week,5-12,0-1,92% reduction
Avg Useful Interactions Per Session,15-20,50+,150% improvement`,
    mmd: `graph TD
    A["New Interaction"] --> B["Context Monitor"]
    B --> C{"Usage Level"}
    C -- "< 50%" --> D["Normal Operation"]
    C -- "50-65%" --> E["Begin Passive Pruning"]
    E --> F["Remove Stale Turns"]
    F --> D
    C -- "65-85%" --> G["Active Checkpoint Rotation"]
    G --> H["Preserve Current Architecture State"]
    H --> I["Compress Historical Interactions"]
    I --> J["Rebuild Priority Context"]
    J --> D
    C -- "> 85%" --> K["Emergency Compression"]
    K --> L["Extract Only Critical State"]
    L --> M["Full History Purge"]
    M --> N["Reload from Checkpoint"]
    N --> D`
  },
  'ai-cost-containment': {
    csv: `Metric,Without System,With System,Improvement
Monthly AI Infrastructure Spend,$4800-$6200,$900-$1500,75% reduction
Weekend/Overnight Burn Incidents/Quarter,3-6,0,100% prevention
Runaway Token Tasks Detected,0% (invisible),100%,Complete visibility
Average Task Cost Variance,-200% to +500%,+/-15%,Predictable
Negative ROI Tasks Running,Unknown (many),0 (auto-halted),Total prevention`,
    mmd: `graph TD
    A["Agent Task Start"] --> B["Cost Containment Engine"]
    B --> C["Initialize Budget"]
    C --> D["Track Token Consumption"]
    D --> E{"Budget Check"}
    E -- "< 50% budget" --> F["Continue"]
    E -- "50-80% budget" --> G["Warning: Approaching Limit"]
    G --> F
    E -- "80-100% budget" --> H["Alert: Near Limit"]
    H --> I{"Human Override?"}
    I -- "Yes" --> J["Extend Budget"]
    I -- "No" --> K["Prepare to Halt"]
    E -- "> 100% budget" --> L["FINANCIAL CIRCUIT BREAKER"]
    L --> M["Kill Agent Process"]
    M --> N["Audit Log + Cost Report"]`
  },
  'deterministic-agentic-engineering': {
    csv: `Metric,Without System,With System,Improvement
Production Incidents from AI Agents/Year,12-30+,0,100% elimination
Total Governance Bypass Events/Year,50-200+,0,100% prevention
Cascading Failure Incidents/Year,4-8,0,100% containment
Total AI Infrastructure Risk Exposure,$180K+/year,$0,Complete de-risk
Runtime Governance Coverage,0% (prompt-only),100% (middleware),Complete enforcement`,
    mmd: `graph TD
    A["Agent Trigger"] --> B["EXOGRAM RUNTIME COMPILER"]
    B --> C["Load Identity Layer"]
    B --> D["Resolve Skill Layer"]
    B --> E["Authorize Tool Layer"]
    B --> F["Load Environment Slice"]
    C --> G["Assemble Runtime Context"]
    D --> G
    E --> G
    F --> G
    G --> H["Compile Immutable Payload"]
    H --> I["Constrained LLM Execution"]
    I --> J{"Output Validation"}
    J -- "Admissible" --> K["State Mutation"]
    J -- "Inadmissible" --> L["Reject + Feedback"]
    K --> M["Update Memory"]
    K --> N["Update Environment"]
    K --> O["Audit Log"]`
  }
};

for (const [slug, files] of Object.entries(upgrades)) {
  const dir = path.join(base, slug);
  if (files.csv) fs.writeFileSync(path.join(dir, 'financial-model.csv'), files.csv);
  if (files.mmd) fs.writeFileSync(path.join(dir, 'architecture.mmd'), files.mmd);
  console.log(`Upgraded ${slug}: architecture.mmd + financial-model.csv`);
}

console.log('Done — all systems upgraded with differentiated diagrams and financial models.');
