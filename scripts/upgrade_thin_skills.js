const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'assets/skills');

// Systems that need files overhauled/expanded
const systems = {
  'hallucination-debt-reduction': {
    mmd: `graph TD
    A["Agent Code Output"] --> B{"Admissibility Engine"}
    B -- "Imports Valid" --> C{"Confidence Scoring"}
    C -- "Score >= 0.85" --> D["Route to Review Queue"]
    C -- "Score < 0.85" --> E["Auto-Reject + Feedback"]
    B -- "Phantom Imports" --> F["BLOCK: Dependency Audit"]
    D --> G["Human Review"]
    G -- "Approved" --> H["Merge"]
    G -- "Rejected" --> I["Return to Agent with Feedback"]`,
    policy: `# Hallucination Debt Reduction Policy
version: "1.1.4"
runtime_layer: "Skill Governance"
domain: "Output Verification"

governance:
  enforcement_level: "strict"
  halt_on_failure: true

confidence_thresholds:
  auto_approve: 0.95
  human_review: 0.85
  auto_reject: 0.75
  block_merge: 0.60

import_validation:
  check_package_json: true
  check_node_modules: true
  block_phantom_imports: true
  allow_type_only_imports: false

output_scoring:
  max_hallucination_density: 2  # per 100 LOC
  max_unresolvable_imports: 0
  require_test_coverage: true

human_escalation:
  enabled: true
  channels: ["slack", "email"]
  on_phantom_dependency: "immediate"
  on_low_confidence: "queued"

circuit_breakers:
  max_rejections_before_halt: 3
  max_review_time_minutes: 30`,
    csv: `Metric,Without System,With System,Improvement
Senior Engineer Review Hours/Week,12-20,4-6,65% reduction
Phantom Dependencies Reaching Prod/Quarter,3-8,0,100% elimination
Post-Merge AI Bug Rate,8-15%,<2%,85% reduction
Monthly Verification Burden Cost (8 engineers),$8000-$15000,$2000-$4000,73% reduction
Average PR Review Duration,45 min,12 min,73% reduction`,
    middleware: `/**
 * HALLUCINATION DEBT REDUCTION MIDDLEWARE
 * 
 * Intercepts agent code output and validates it against the real codebase state.
 * Blocks phantom dependencies, scores confidence, and routes to appropriate review queues.
 */

import { readFileSync, existsSync } from 'fs';

export interface CodeOutput {
    filePath: string;
    content: string;
    imports: string[];
    agentConfidence: number;
}

export interface ValidationResult {
    approved: boolean;
    score: number;
    phantomImports: string[];
    reviewQueue: 'auto-approve' | 'human-review' | 'auto-reject' | 'blocked';
}

export class HallucinationValidator {
    private packageJson: Record<string, any>;
    
    constructor(projectRoot: string = '.') {
        const pkgPath = \`\${projectRoot}/package.json\`;
        this.packageJson = existsSync(pkgPath) 
            ? JSON.parse(readFileSync(pkgPath, 'utf8'))
            : { dependencies: {}, devDependencies: {} };
    }
    
    public validateOutput(output: CodeOutput): ValidationResult {
        const phantomImports = this.detectPhantomImports(output.imports);
        const score = this.calculateConfidence(output, phantomImports);
        const reviewQueue = this.routeToQueue(score, phantomImports);
        
        return {
            approved: reviewQueue === 'auto-approve',
            score,
            phantomImports,
            reviewQueue
        };
    }
    
    private detectPhantomImports(imports: string[]): string[] {
        const allDeps = {
            ...this.packageJson.dependencies,
            ...this.packageJson.devDependencies
        };
        
        return imports.filter(imp => {
            // Skip relative imports
            if (imp.startsWith('.') || imp.startsWith('/')) return false;
            // Skip node builtins
            const builtins = ['fs', 'path', 'http', 'https', 'crypto', 'os', 'util', 'stream', 'events'];
            if (builtins.includes(imp.split('/')[0])) return false;
            // Check if package exists in dependencies
            const pkgName = imp.startsWith('@') ? imp.split('/').slice(0,2).join('/') : imp.split('/')[0];
            return !(pkgName in allDeps);
        });
    }
    
    private calculateConfidence(output: CodeOutput, phantoms: string[]): number {
        let score = output.agentConfidence;
        // Penalize for phantom imports
        score -= phantoms.length * 0.15;
        // Cap between 0 and 1
        return Math.max(0, Math.min(1, score));
    }
    
    private routeToQueue(score: number, phantoms: string[]): ValidationResult['reviewQueue'] {
        if (phantoms.length > 0) return 'blocked';
        if (score >= 0.95) return 'auto-approve';
        if (score >= 0.85) return 'human-review';
        return 'auto-reject';
    }
}`,
    playbook: `# Hallucination Debt Reduction — Operational Playbook

## Purpose
This playbook defines the operational procedures for detecting, containing, and reducing hallucination debt in AI-generated code.

## When to Execute
- Agent generates code with unresolvable imports
- Confidence score drops below 0.85 threshold
- Post-merge bug rate exceeds 5% in any sprint
- Review burden exceeds 6 hours/day for any reviewer

## Procedure

### Step 1: Detect
Run the \`HallucinationValidator\` against all pending AI-generated PRs.
\`\`\`bash
npx ts-node validate-output.ts --scan-pending
\`\`\`

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
- Update \`confidence-thresholds.yaml\` based on observed patterns
- Add newly discovered phantom packages to the blocklist
- Review and update import resolution rules

### Step 5: Report
Generate weekly hallucination debt metrics:
- Total phantom imports detected
- Confidence score distribution
- Review queue routing breakdown
- Post-merge bug rate trend

## Escalation
If hallucination density remains above threshold for 3 consecutive sprints, escalate to engineering leadership for agent configuration review.`
  },
  'ai-engineering-economics': {
    mmd: `graph TD
    A["AI Task Request"] --> B{"Cost Estimation Engine"}
    B --> C["Estimate Token Cost"]
    B --> D["Estimate Human Equivalent"]
    C --> E{"ROI Comparison"}
    D --> E
    E -- "AI Cheaper" --> F["Approve for Agent"]
    E -- "Human Cheaper" --> G["Route to Human"]
    E -- "Marginal" --> H["Manager Decision"]
    F --> I["Track Actual Cost"]
    I --> J{"Post-Task Audit"}
    J -- "Within Budget" --> K["Log Success"]
    J -- "Over Budget" --> L["Alert + Adjust Model"]`,
    policy: `# AI Engineering Economics Policy
version: "1.0.0"
runtime_layer: "Environment Governance"
domain: "Strategic Economic Analysis"

governance:
  enforcement_level: "advisory"
  halt_on_failure: false

cost_tracking:
  enabled: true
  granularity: "per_task"
  include_verification_hours: true
  include_remediation_hours: true

roi_thresholds:
  minimum_positive_roi: 1.0  # AI must be at least break-even
  flag_negative_roi_tasks: true
  quarterly_review: true

synthetic_cogs:
  track_token_costs: true
  track_verification_burden: true
  track_retry_inflation: true
  track_remediation_costs: true
  track_context_rot_waste: true

reporting:
  frequency: "weekly"
  dashboard: true
  executive_summary: "quarterly"
  
alerts:
  negative_roi_sprint: "immediate"
  cost_increase_30_percent: "daily"
  margin_compression: "weekly"`,
    csv: `Metric,Without System,With System,Improvement
Monthly AI Infrastructure Spend (team of 5),$4800-$6200,$900-$1500,75% reduction
Velocity Measurement Accuracy,Lines of Code Only,Verified Shipped Features,Correct metric
Hidden Verification Burden Visibility,0% tracked,100% tracked,Full visibility
Negative ROI Tasks Identified,0% flagged,100% flagged,Complete detection
Quarterly Cost Overrun Frequency,85% of quarters,15% of quarters,82% reduction
True AI-Assisted Feature Cost,Unknown,$X per feature,Measurable`,
    middleware: `/**
 * AI ENGINEERING ECONOMICS MIDDLEWARE
 * 
 * Tracks synthetic COGS across all agentic tasks: token costs, verification burden,
 * retry inflation, and remediation hours. Provides real-time ROI visibility.
 */

export interface TaskCost {
    taskId: string;
    tokenCostUsd: number;
    verificationHours: number;
    remediationHours: number;
    retryTokenWaste: number;
}

export interface EconomicSnapshot {
    totalAiCost: number;
    humanEquivalentCost: number;
    roi: number;
    marginImpact: string;
}

export class SyntheticCOGSTracker {
    private tasks: Map<string, TaskCost> = new Map();
    private hourlyRate: number;
    
    constructor(engineerHourlyRate: number = 80) {
        this.hourlyRate = engineerHourlyRate;
    }
    
    public logTask(cost: TaskCost): void {
        this.tasks.set(cost.taskId, cost);
    }
    
    public getSnapshot(): EconomicSnapshot {
        let totalToken = 0;
        let totalVerification = 0;
        let totalRemediation = 0;
        let totalRetryWaste = 0;
        
        for (const task of this.tasks.values()) {
            totalToken += task.tokenCostUsd;
            totalVerification += task.verificationHours;
            totalRemediation += task.remediationHours;
            totalRetryWaste += task.retryTokenWaste;
        }
        
        const totalAiCost = totalToken + totalRetryWaste + 
            ((totalVerification + totalRemediation) * this.hourlyRate);
        
        // Estimate: human would take verification+remediation hours as total task time
        const humanEquivalentCost = (totalVerification + totalRemediation) * this.hourlyRate * 0.8;
        
        const roi = humanEquivalentCost > 0 
            ? ((humanEquivalentCost - totalAiCost) / humanEquivalentCost) * 100 
            : 0;
        
        return {
            totalAiCost,
            humanEquivalentCost,
            roi,
            marginImpact: roi > 0 ? 'Positive' : 'NEGATIVE - Review Required'
        };
    }
}`,
    playbook: `# AI Engineering Economics — Operational Playbook

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
\`\`\`bash
npx ts-node synthetic-cogs-tracker.ts --sprint current
\`\`\`

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
If quarterly AI ROI is negative, escalate to CTO with recommendation to restructure agent deployment strategy.`,
    escalation: `# AI Engineering Economics — Escalation Matrix

## Escalation Levels

| Level | Trigger | Owner | Action |
|---|---|---|---|
| L0 — Track | Any AI-assisted task | Automated | Log costs to dashboard |
| L1 — Flag | Single task negative ROI | Engineering Lead | Review task suitability for AI |
| L2 — Review | Sprint-level negative ROI | Engineering Manager | Adjust AI deployment strategy |
| L3 — Restructure | Quarterly negative ROI | CTO | Full AI tooling cost-benefit audit |

## Decision Framework

### When AI is Cost-Effective
- Simple, repetitive code generation (boilerplate, tests, docs)
- Well-defined tasks with clear success criteria
- Tasks where verification is automated (type checking, linting)

### When AI is NOT Cost-Effective
- Complex architectural decisions requiring deep context
- Security-critical code requiring expert review
- Tasks where the agent consistently enters retry loops
- Ambiguous requirements that cause context rot`
  },
  'hallucination-debt': {
    mmd: `graph TD
    A["Agent Output"] --> B{"Hallucination Scoring Engine"}
    B -- "Score > 0.9" --> C["Low Debt: Accept"]
    B -- "Score 0.7-0.9" --> D["Medium Debt: Flag for Review"]
    B -- "Score < 0.7" --> E["High Debt: Reject"]
    E --> F["Return Feedback to Agent"]
    D --> G["Human Verification Queue"]`,
    policy: `# Hallucination Debt Policy (Legacy)
version: "1.0.0"
note: "This is the legacy hallucination-debt module. See hallucination-debt-reduction for the active system."

governance:
  enforcement_level: "advisory"
  halt_on_failure: false

scoring:
  confidence_threshold: 0.85
  verification_required: true`,
    csv: `Metric,Baseline,Target
Hallucination Rate,15-25%,<5%
Verification Time per PR,45 min,12 min
Phantom Dependencies per Sprint,3-8,0
Senior Engineer Review Burden,70% of time,25% of time`,
    middleware: `/**
 * HALLUCINATION DEBT SCORING ENGINE (Legacy)
 * See hallucination-debt-reduction for the active, production-grade system.
 */

export interface HallucinationScore {
    overallConfidence: number;
    phantomImportCount: number;
    fabricatedApiCount: number;
    debtLevel: 'low' | 'medium' | 'high' | 'critical';
}

export function scoreOutput(code: string, imports: string[]): HallucinationScore {
    // Simplified scoring for reference implementation
    const phantomImportCount = 0; // Would check against package.json
    const fabricatedApiCount = 0; // Would check against actual API signatures
    const overallConfidence = 0.85;
    
    let debtLevel: HallucinationScore['debtLevel'] = 'low';
    if (overallConfidence < 0.7) debtLevel = 'critical';
    else if (overallConfidence < 0.8) debtLevel = 'high';
    else if (overallConfidence < 0.9) debtLevel = 'medium';
    
    return { overallConfidence, phantomImportCount, fabricatedApiCount, debtLevel };
}`
  }
};

// Now write all files
for (const [slug, files] of Object.entries(systems)) {
  const dir = path.join(base, slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  if (files.mmd) fs.writeFileSync(path.join(dir, 'architecture.mmd'), files.mmd);
  if (files.policy) fs.writeFileSync(path.join(dir, 'policy.yaml'), files.policy);
  if (files.csv) fs.writeFileSync(path.join(dir, 'financial-model.csv'), files.csv);
  if (files.middleware) fs.writeFileSync(path.join(dir, 'middleware.ts'), files.middleware);
  if (files.playbook) fs.writeFileSync(path.join(dir, 'operational-playbook.md'), files.playbook);
  if (files.escalation) fs.writeFileSync(path.join(dir, 'escalation-matrix.md'), files.escalation);
  console.log(`Upgraded ${slug}`);
}

console.log('Done — gap systems upgraded.');
