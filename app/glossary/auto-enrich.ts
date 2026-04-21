// Auto-generation helpers for glossary term rich content
// Every term gets metrics, maturity models, comparisons, quizzes, diagrams,
// common mistakes, best practices, and industry benchmarks automatically

export function autoKeyMetrics(category: string, title: string): { label: string; value: string; description: string }[] {
    const metrics: Record<string, { label: string; value: string; description: string }[]> = {
        'Technical Debt & Code Quality': [
            { label: 'Avg. Debt Ratio', value: '23-42%', description: 'Engineering time consumed by maintenance vs. innovation' },
            { label: 'Remediation ROI', value: '3-5x', description: 'Return on every $1 invested in debt reduction' },
            { label: 'Velocity Recovery', value: '+35%', description: 'Velocity improvement after systematic debt remediation' },
            { label: 'Innovation Tax', value: '40-70%', description: 'Percentage of sprint capacity lost to maintenance work' },
            { label: 'Insolvency Risk', value: '18-24 mo', description: 'Typical time from first warning signs to Technical Insolvency' },
            { label: 'Defect Density Drop', value: '-45%', description: 'Defect reduction after structured remediation program' },
        ],
        'AI & Machine Learning': [
            { label: 'AI COGS Impact', value: '15-40%', description: 'AI inference costs as percentage of total COGS' },
            { label: 'Optimization Potential', value: '60-80%', description: 'Cost reduction via model routing and caching' },
            { label: 'Margin Risk', value: 'High', description: 'AI costs scale with usage — success can destroy margins' },
            { label: 'Model Routing Savings', value: '70%', description: 'Savings from routing 70% of queries to cheaper models' },
            { label: 'Hallucination Rate', value: '2-15%', description: 'Range of AI factual errors requiring guardrail investment' },
            { label: 'Fine-Tuning ROI', value: '4-8x', description: 'Return from fine-tuning vs. using frontier models for all queries' },
        ],
        'Engineering Metrics & Performance': [
            { label: 'Elite Benchmark', value: 'Top 15%', description: 'Only 15% of orgs achieve elite DORA performance' },
            { label: 'Productivity Gap', value: '4-10x', description: 'Difference between elite and low-performing orgs' },
            { label: 'Measurement Impact', value: '+25%', description: 'Improvement when teams begin measuring metrics' },
            { label: 'Deploy Frequency', value: 'Multiple/day', description: 'Elite teams deploy multiple times per day' },
            { label: 'Lead Time', value: '<1 hour', description: 'Elite commit-to-production lead time' },
            { label: 'Change Failure', value: '<5%', description: 'Elite change failure rate benchmark' },
        ],
        'Cloud & Infrastructure': [
            { label: 'Waste Rate', value: '30-35%', description: 'Average cloud spend wasted on unused resources' },
            { label: 'Optimization Window', value: '20-40%', description: 'Savings via right-sizing and reserved capacity' },
            { label: 'Downtime Cost', value: '$5,600/min', description: 'Average cost of unplanned downtime' },
            { label: 'Multi-Cloud Premium', value: '+15-30%', description: 'Extra cost of multi-cloud vs. single-cloud strategy' },
            { label: 'Reserved Savings', value: '30-60%', description: '1yr-3yr commitment discount vs. on-demand' },
            { label: 'Auto-Scale Efficiency', value: '40-60%', description: 'Cost reduction from proper auto-scaling configuration' },
        ],
        'Security & Compliance': [
            { label: 'Breach Cost', value: '$4.45M', description: 'Average total cost of a data breach (IBM 2024)' },
            { label: 'Prevention ROI', value: '10-50x', description: 'Return on security investment vs. breach costs' },
            { label: 'Compliance Cost', value: '$50K-500K', description: 'Annual compliance program cost' },
            { label: 'Detection Time', value: '204 days', description: 'Average time to identify a data breach' },
            { label: 'Containment Time', value: '73 days', description: 'Average time to contain a breach after detection' },
            { label: 'Automation Savings', value: '65%', description: 'Cost reduction from security automation vs. manual' },
        ],
        'DevOps & CI/CD': [
            { label: 'Deploy Frequency', value: 'Multiple/day', description: 'Elite teams deploy multiple times per day' },
            { label: 'Lead Time', value: '<1 hour', description: 'Elite commit-to-production lead time' },
            { label: 'Change Failure', value: '<5%', description: 'Elite change failure rate' },
            { label: 'MTTR', value: '<1 hour', description: 'Elite mean time to recovery' },
            { label: 'Pipeline Cost', value: '$2-10/build', description: 'Typical CI/CD pipeline cost per build' },
            { label: 'Automation ROI', value: '5-15x', description: 'Return from CI/CD automation investment' },
        ],
        'Product Management': [
            { label: 'Feature Adoption', value: '20-30%', description: 'Average percentage of features actively used' },
            { label: 'Time-to-Value', value: '2-4 weeks', description: 'Optimal feature release to business impact' },
            { label: 'Decision Cost', value: '$50K-200K', description: 'Cost of a wrong prioritization decision per quarter' },
            { label: 'Zombie Features', value: '30-50%', description: 'Features with <5% monthly active usage' },
            { label: 'Discovery ROI', value: '10x', description: 'Value of proper discovery vs. building wrong thing' },
            { label: 'PRD Accuracy', value: '40-60%', description: 'Requirements that survive contact with users' },
        ],
        'SaaS & Metrics': [
            { label: 'Rule of 40', value: '40%+', description: 'Growth + profit margin threshold for healthy SaaS' },
            { label: 'Net Retention', value: '120%+', description: 'Top-quartile NRR indicates expansion exceeds churn' },
            { label: 'CAC Payback', value: '<18 months', description: 'Healthy customer acquisition cost payback' },
            { label: 'Gross Margin', value: '75-85%', description: 'Healthy SaaS gross margin range' },
            { label: 'Burn Multiple', value: '<2x', description: 'Net burn / net new ARR for efficient growth' },
            { label: 'Magic Number', value: '>0.75', description: 'Sales efficiency metric: new ARR / sales spend' },
        ],
        'Data Engineering': [
            { label: 'Data Quality', value: '85-95%', description: 'Target accuracy rate for production pipelines' },
            { label: 'Pipeline SLA', value: '99.5%+', description: 'Target uptime for critical data infrastructure' },
            { label: 'Processing Cost', value: '$2-10/TB', description: 'Cloud data processing cost per terabyte' },
            { label: 'Freshness SLA', value: '<15 min', description: 'Real-time data pipeline latency target' },
            { label: 'Schema Drift', value: '<1%/month', description: 'Acceptable rate of unexpected schema changes' },
            { label: 'Data Debt', value: '20-30%', description: 'Engineering time spent on data quality issues' },
        ],
        'Organizational Design': [
            { label: 'Span of Control', value: '5-8', description: 'Optimal direct reports per engineering manager' },
            { label: 'Coordination Tax', value: '15-30%', description: 'Time lost to cross-team coordination' },
            { label: 'Team Size', value: '5-9', description: 'Optimal team size for velocity and communication' },
            { label: 'Key-Person Risk', value: '2-3 per team', description: 'Critical knowledge holders to cross-train' },
            { label: 'Onboarding Time', value: '2-4 weeks', description: 'Time to first meaningful contribution' },
            { label: 'Attrition Cost', value: '$150K-250K', description: 'Full cost of replacing one senior engineer' },
        ],
    };
    return metrics[category] || [
        { label: 'Implementation Time', value: '2-6 weeks', description: `Typical time to implement ${title} practices` },
        { label: 'Expected ROI', value: '2-5x', description: `Return from properly implementing ${title}` },
        { label: 'Adoption Rate', value: '35-60%', description: `Organizations actively using ${title} frameworks` },
        { label: 'Maturity Gap', value: '2-3 levels', description: `Average gap between current and target state` },
        { label: 'Quick Win Window', value: '30 days', description: `Time to see first measurable improvements` },
        { label: 'Full Impact', value: '6-12 months', description: `Time for comprehensive ${title} transformation` },
    ];
}

export function autoMaturityLevels(category: string, title: string): { level: string; description: string }[] {
    const models: Record<string, { level: string; description: string }[]> = {
        'Technical Debt & Code Quality': [
            { level: 'Unaware', description: `No tracking of ${title}. Debt accumulates silently. Teams don't know what they don't know.` },
            { level: 'Reactive', description: `${title} addressed only when causing incidents. Firefighting mode. No proactive management.` },
            { level: 'Measured', description: `${title} quantified with economic impact. PDI tracked quarterly. Leadership receives reports.` },
            { level: 'Managed', description: `Dedicated 15-20% sprint capacity for ${title} remediation. Predictable reduction trajectory.` },
            { level: 'Proactive', description: `${title} prevented at design time. Architecture reviews include debt impact analysis.` },
            { level: 'Strategic', description: `${title} is a board-level discussion. Innovation Tax optimized below 30%. Competitive advantage.` },
            { level: 'Industry Leader', description: `Organization sets ${title} benchmarks others follow. Published frameworks and thought leadership.` },
        ],
        'AI & Machine Learning': [
            { level: 'Experimental', description: `${title} explored ad-hoc. No cost tracking, governance, or production SLAs.` },
            { level: 'Pilot', description: `${title} in production for 1-2 features. Basic cost monitoring. Manual model management.` },
            { level: 'Operational', description: `${title} across multiple features. MLOps pipeline established. Unit economics tracked.` },
            { level: 'Scaled', description: `Model routing, caching, and batching reduce ${title} costs 40-60%. A/B testing active.` },
            { level: 'Optimized', description: `Fine-tuning and distillation further reduce costs. Automated quality monitoring. Feature-level P&L.` },
            { level: 'Strategic', description: `${title} is a competitive moat. Margins healthy at 100x scale. Custom models deployed.` },
            { level: 'Market Leading', description: `Organization innovates on ${title} economics. Published benchmarks and open-source contributions.` },
        ],
        'Cloud & Infrastructure': [
            { level: 'Ad-Hoc', description: `${title} managed manually. No automation, monitoring, or cost tracking.` },
            { level: 'Standardized', description: `Documented procedures exist. Basic alerting. Manual provisioning with templates.` },
            { level: 'Automated', description: `Infrastructure-as-Code deployed. Auto-scaling enabled. CI/CD for infrastructure.` },
            { level: 'Measured', description: `Costs tracked and allocated to teams. FinOps practices active. Right-sizing scheduled.` },
            { level: 'Optimized', description: `Reserved capacity strategy. Spot instances for appropriate workloads. 99.9%+ availability.` },
            { level: 'Resilient', description: `Multi-region DR. Chaos engineering practiced. Self-healing infrastructure. Zero-downtime deployments.` },
            { level: 'Cloud Native', description: `Serverless-first architecture. Event-driven. Auto-optimizing cost management. Industry-leading efficiency.` },
        ],
    };
    return models[category] || [
        { level: 'Initial', description: `No formal ${title} processes. Ad-hoc and inconsistent across the organization.` },
        { level: 'Developing', description: `Basic ${title} practices adopted by some teams. Documentation exists but is incomplete.` },
        { level: 'Defined', description: `${title} processes standardized. Training available. Metrics established but not yet optimized.` },
        { level: 'Managed', description: `${title} measured with KPIs. Continuous improvement active. Cross-team consistency achieved.` },
        { level: 'Optimized', description: `${title} is a strategic advantage. Automated where possible. Data-driven decision making.` },
        { level: 'Leading', description: `Organization sets industry standards for ${title}. Published thought leadership and benchmarks.` },
        { level: 'Transformative', description: `${title} drives business model innovation. Competitive moat. External recognition and awards.` },
    ];
}

export function autoComparisons(category: string, title: string): { vs: string; advantage: string; disadvantage: string }[] {
    const comps: Record<string, { vs: string; advantage: string; disadvantage: string }[]> = {
        'Technical Debt & Code Quality': [
            { vs: 'Manual Code Reviews Only', advantage: `${title} provides quantified economic impact in dollars`, disadvantage: 'Reviews catch nuanced design issues better' },
            { vs: 'Static Analysis Only', advantage: `${title} includes business context and ROI prioritization`, disadvantage: 'Static analysis runs automatically in CI/CD' },
            { vs: 'Ignoring the Problem', advantage: `${title} prevents Technical Insolvency — the silent killer`, disadvantage: 'Short-term velocity feels faster (but compounds risk)' },
            { vs: 'Rewrite from Scratch', advantage: `${title} enables incremental improvement with measurable ROI`, disadvantage: 'Rewrites solve all debt in one shot (but often fail)' },
            { vs: 'Heroic Individual Effort', advantage: `${title} makes debt reduction sustainable and repeatable`, disadvantage: 'Individual heroics can be faster for acute issues' },
            { vs: 'Story Point Estimation', advantage: `${title} translates to financial language boards understand`, disadvantage: 'Story points are more familiar to engineering teams' },
        ],
        'AI & Machine Learning': [
            { vs: 'Traditional Software', advantage: `${title} enables intelligent automation at scale`, disadvantage: 'Traditional software is deterministic and debuggable' },
            { vs: 'Rule-Based Systems', advantage: `${title} handles ambiguity, edge cases, and natural language`, disadvantage: 'Rules are predictable, auditable, and zero variable cost' },
            { vs: 'Human Processing', advantage: `${title} scales infinitely at fraction of human cost`, disadvantage: 'Humans handle novel situations and nuanced judgment better' },
            { vs: 'Outsourced Labor', advantage: `${title} delivers consistent quality 24/7 without management`, disadvantage: 'Outsourcing handles unstructured tasks that AI cannot' },
            { vs: 'No AI (Status Quo)', advantage: `${title} creates competitive advantage in speed and intelligence`, disadvantage: 'No AI means zero AI COGS and simpler architecture' },
            { vs: 'Build Custom Models', advantage: `${title} via API is faster to deploy and iterate`, disadvantage: 'Custom models offer better performance for specific tasks' },
        ],
        'SaaS & Metrics': [
            { vs: 'Gut-Feel Decisions', advantage: `${title} provides data-driven clarity and accountability`, disadvantage: 'Gut feel requires zero instrumentation investment' },
            { vs: 'Revenue-Only Tracking', advantage: `${title} reveals unit economics and margin health`, disadvantage: 'Revenue tracking is simpler to implement' },
            { vs: 'Annual Reviews', advantage: `${title} enables real-time course correction`, disadvantage: 'Annual reviews require less frequent effort' },
            { vs: 'Competitor Benchmarking', advantage: `${title} focuses on your specific business dynamics`, disadvantage: 'Benchmarking provides external market context' },
            { vs: 'Vanity Metrics', advantage: `${title} drives actionable business decisions`, disadvantage: 'Vanity metrics are easier to collect and look good' },
            { vs: 'Manual Reporting', advantage: `${title} automation reduces error and latency`, disadvantage: 'Manual reports can include qualitative context' },
        ],
    };
    return comps[category] || [
        { vs: 'Ad-Hoc Approach', advantage: `${title} provides structure, repeatability, and measurement`, disadvantage: 'Ad-hoc requires zero upfront investment' },
        { vs: 'Industry Alternatives', advantage: `${title} is tailored to your specific organizational context`, disadvantage: 'Alternatives may have larger community support' },
        { vs: 'Doing Nothing', advantage: `${title} creates measurable, compounding improvement`, disadvantage: 'Status quo requires zero effort or change management' },
        { vs: 'Consultant-Led Only', advantage: `${title} builds internal capability that scales`, disadvantage: 'Consultants bring external perspective and benchmarks' },
        { vs: 'Tool-Only Solution', advantage: `${title} combines process, culture, and measurement`, disadvantage: 'Tools provide immediate automation without culture change' },
        { vs: 'One-Time Project', advantage: `${title} as ongoing practice delivers compounding returns`, disadvantage: 'One-time projects have clear scope and end date' },
    ];
}

export function autoQuiz(category: string, title: string): { question: string; options: string[]; answer: number; explanation: string }[] {
    const quizzes: Record<string, { question: string; options: string[]; answer: number; explanation: string }[]> = {
        'Technical Debt & Code Quality': [
            { question: `What percentage of sprint capacity should be allocated to ${title} remediation?`, options: ['5%', '10%', '15-20%', '50%'], answer: 2, explanation: '15-20% is optimal — enough to make progress without sacrificing feature velocity.' },
            { question: `What framework quantifies ${title} in financial terms?`, options: ['Story Points', 'Lines of Code', 'Product Debt Index (PDI)', 'Code Coverage'], answer: 2, explanation: 'PDI translates technical metrics into dollar values leadership understands.' },
            { question: `What happens when ${title} is ignored long-term?`, options: ['Nothing significant', 'Technical Insolvency', 'Faster development', 'Lower costs'], answer: 1, explanation: 'Unchecked accumulation leads to Technical Insolvency — maintenance consumes all capacity.' },
            { question: `What is the "Innovation Tax" in the context of ${title}?`, options: ['Government R&D tax credit', 'Percentage of time on maintenance vs. innovation', 'Cost of new feature development', 'Revenue lost to competitors'], answer: 1, explanation: 'Innovation Tax measures how much of your engineering investment goes to maintenance rather than new value creation.' },
            { question: `Which reporting style is most effective for communicating ${title} to the board?`, options: ['Story points burned', 'Lines of code refactored', 'Financial impact in dollars and ROI', 'Number of bugs fixed'], answer: 2, explanation: 'Boards respond to financial language: dollars at risk, ROI of remediation, and trend direction.' },
            { question: `What is the typical ROI of a structured ${title} remediation program?`, options: ['0.5x (loss)', '1-2x (break even)', '3-5x (strong return)', '20x+ (exceptional)'], answer: 2, explanation: 'Structured programs typically return 3-5x through velocity recovery, reduced incidents, and improved retention.' },
        ],
        'AI & Machine Learning': [
            { question: `What cost reduction does model routing typically achieve for ${title}?`, options: ['10-20%', '30-40%', '60-80%', '95%+'], answer: 2, explanation: 'Model routing directs queries to the cheapest capable model, typically reducing costs 60-80%.' },
            { question: `Which cost component is usually largest in ${title}?`, options: ['Training costs', 'Inference/serving costs', 'Data labeling', 'Hardware purchase'], answer: 1, explanation: 'For production AI, inference costs typically dwarf one-time training costs.' },
            { question: `What margin should AI features target to be sustainable?`, options: ['10%+', '30%+', '50%+', '90%+'], answer: 2, explanation: 'AI features need >50% contribution margin to absorb scaling costs and remain profitable.' },
            { question: `What is "Cost of Predictivity"?`, options: ['Cost of making predictions', 'Total AI infrastructure cost', 'Marginal cost of each percentage point of AI accuracy improvement', 'Price of GPU compute time'], answer: 2, explanation: 'Cost of Predictivity measures how much each incremental accuracy improvement costs — going from 90% to 95% often costs 10x more than 80% to 90%.' },
            { question: `What is the recommended first step in optimizing ${title} costs?`, options: ['Buy more GPUs', 'Implement comprehensive monitoring and measurement', 'Switch to open-source models', 'Hire ML engineers'], answer: 1, explanation: 'You cannot optimize what you cannot measure. Start with per-request cost tracking across all AI features.' },
            { question: `What percentage of AI features typically have negative unit economics at launch?`, options: ['5-10%', '20-30%', '40-60%', '80%+'], answer: 2, explanation: '40-60% of AI features launch with negative or unknown unit economics, requiring post-launch optimization.' },
        ],
        'Cloud & Infrastructure': [
            { question: `What percentage of cloud spend is typically wasted?`, options: ['5-10%', '15-20%', '30-35%', '50%+'], answer: 2, explanation: 'Studies consistently show 30-35% of cloud spend is wasted on unused or oversized resources.' },
            { question: `What is the average cost of unplanned downtime per minute?`, options: ['$100', '$1,000', '$5,600', '$50,000'], answer: 2, explanation: 'Gartner estimates the average cost at $5,600/minute, varying by industry.' },
            { question: `Which approach best reduces ${title} costs long-term?`, options: ['Bigger instances', 'Right-sizing + reserved capacity', 'On-premises migration', 'Free tier only'], answer: 1, explanation: 'Right-sizing eliminates waste; reserved capacity provides 30-60% discounts on committed usage.' },
            { question: `What is the recommended cloud resource tagging coverage target?`, options: ['50%', '75%', '90%', '95%+'], answer: 3, explanation: 'Target 95%+ tag coverage to enable accurate cost allocation, showback, and optimization.' },
            { question: `What is "FinOps"?`, options: ['Financial operations for banks', 'Cloud financial management practice', 'Financial technology software', 'Finance team operations'], answer: 1, explanation: 'FinOps is the practice of bringing financial accountability to cloud spending through collaboration between engineering, finance, and business teams.' },
            { question: `What savings do 1-year reserved instances typically provide vs. on-demand?`, options: ['5-10%', '15-20%', '30-40%', '60-70%'], answer: 2, explanation: '1-year commitments typically save 30-40%, while 3-year commitments save 50-60%.' },
        ],
    };
    return quizzes[category] || [
        { question: `What is the first step in implementing ${title}?`, options: ['Jump to solutions', 'Assess current state', 'Hire consultants', 'Buy tools'], answer: 1, explanation: 'Always start by assessing current state to understand gaps and prioritize improvements.' },
        { question: `How should ${title} progress be reported to leadership?`, options: ['Technical jargon', 'Financial impact and trends', 'Story points', 'Lines of code'], answer: 1, explanation: 'Leadership responds to financial language: dollars invested, dollars returned, risk mitigated.' },
        { question: `What timeframe is realistic for ${title} results?`, options: ['1 week', '1 month', '1-2 quarters', '2+ years'], answer: 2, explanation: 'Most improvements show measurable results within 1-2 quarters with sustained effort.' },
        { question: `What is the biggest risk of NOT implementing ${title}?`, options: ['Nothing changes', 'Competitors gain advantage', 'Compounding degradation over time', 'Both B and C'], answer: 3, explanation: 'The risk of inaction compounds: competitors advance, technical debt grows, and team morale degrades simultaneously.' },
        { question: `Who should own ${title} in the organization?`, options: ['IT department only', 'Engineering manager', 'Cross-functional team with executive sponsor', 'External consultant'], answer: 2, explanation: 'Sustainable transformation requires a cross-functional team with executive sponsorship and clear accountability.' },
        { question: `What is the best way to build organizational support for ${title}?`, options: ['Mandate from the top', 'Start with a pilot that demonstrates ROI', 'Full company training', 'Hire new team'], answer: 1, explanation: 'Start with a focused pilot that demonstrates clear ROI. Success spreads naturally when results are visible.' },
    ];
}

export function autoDiagram(category: string, title: string): string {
    const diagrams: Record<string, string> = {
        'Technical Debt & Code Quality':
`┌──────────────────────────────────────────────────────────┐
│                 ${title} Lifecycle                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────────┐       │
│   │ Identify │───▶│ Quantify │───▶│  Prioritize  │       │
│   │  (Audit) │    │  (PDI $) │    │  (ICE/WSJF)  │       │
│   └──────────┘    └──────────┘    └──────┬───────┘       │
│                                          │               │
│   ┌──────────┐    ┌──────────┐    ┌──────▼───────┐       │
│   │ Monitor  │◀───│ Measure  │◀───│  Remediate   │       │
│   │ (Trends) │    │ (Verify) │    │ (15-20% cap) │       │
│   └──────────┘    └──────────┘    └──────────────┘       │
│                                                          │
│   📊 PDI Score tracks economic impact over time          │
│   💰 Every step uses financial language for leadership   │
│   📈 Board receives quarterly technology capital report  │
│   🎯 Target: Innovation Tax below 30% within 12 months  │
└──────────────────────────────────────────────────────────┘`,
        'AI & Machine Learning':
`┌──────────────────────────────────────────────────────────┐
│                ${title} Cost Architecture                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   User Request ──▶ ┌─────────────┐                       │
│                    │ Smart Router │                       │
│                    └──────┬──────┘                        │
│                     ┌─────┼─────┐                        │
│                     ▼     ▼     ▼                        │
│                  ┌─────┐┌────┐┌────────┐                 │
│                  │Small││ Mid││Frontier│                  │
│                  │ 70% ││20% ││  10%   │                 │
│                  │$0.01││$0.1││ $1.00  │                 │
│                  └──┬──┘└──┬─┘└───┬────┘                 │
│                     └──────┼──────┘                       │
│                            ▼                             │
│                  ┌─────────────────┐                     │
│                  │   Guardrails    │                      │
│                  │ + Quality Check │                      │
│                  └────────┬────────┘                      │
│                           ▼                              │
│                     User Response                        │
│                                                          │
│   💰 70% of queries handled by cheapest model            │
│   🎯 Quality maintained through smart routing            │
│   📊 Per-query cost tracked in real-time                 │
└──────────────────────────────────────────────────────────┘`,
        'DevOps & CI/CD':
`┌──────────────────────────────────────────────────────────┐
│                ${title} Pipeline                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   Code ──▶ Build ──▶ Test ──▶ Stage ──▶ Production       │
│    │        │        │        │            │              │
│    ▼        ▼        ▼        ▼            ▼              │
│   Lint    Compile  Unit +   Smoke      Monitor           │
│   SAST   Package  Integ.    E2E        Observe           │
│   Scan   Artifact  Perf     Load        Alert            │
│                                                          │
│   ⏱️  Elite: < 1 hour end-to-end                         │
│   🎯  Target: < 5% change failure rate                   │
│   📊  Track DORA metrics continuously                    │
│   🔄  Rollback capability within 5 minutes               │
└──────────────────────────────────────────────────────────┘`,
    };
    return diagrams[category] ||
`┌──────────────────────────────────────────────────────────┐
│                ${title} Framework                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────────┐       │
│   │  Assess  │───▶│   Plan   │───▶│   Execute    │       │
│   │ (Where?) │    │ (What?)  │    │   (How?)     │       │
│   └──────────┘    └──────────┘    └──────┬───────┘       │
│                                          │               │
│                                   ┌──────▼───────┐       │
│        ◀──── Iterate ◀────────────│   Measure    │       │
│                                   │  (Results?)  │       │
│                                   └──────────────┘       │
│                                                          │
│   📊 Define success metrics upfront                      │
│   💰 Quantify impact in financial terms                  │
│   📈 Report progress to stakeholders quarterly           │
│   🎯 Continuous improvement cycle                        │
└──────────────────────────────────────────────────────────┘`;
}

// NEW: Common Mistakes auto-generation
export function autoCommonMistakes(category: string, title: string): { mistake: string; consequence: string; fix: string }[] {
    const mistakes: Record<string, { mistake: string; consequence: string; fix: string }[]> = {
        'Technical Debt & Code Quality': [
            { mistake: `Treating ${title} as "we'll fix it later"`, consequence: 'Debt compounds at 20-30% per quarter. "Later" becomes "never" until crisis.', fix: 'Allocate 15-20% of every sprint to debt remediation. Make it non-negotiable.' },
            { mistake: 'Using technical jargon when reporting to leadership', consequence: 'Leadership dismisses the issue as "engineering complaining." No budget allocated.', fix: 'Use PDI framework to translate into dollars: cost of delay, remediation ROI, insolvency date.' },
            { mistake: 'Prioritizing by technical severity instead of business impact', consequence: 'Team fixes elegant but low-impact issues while critical debt grows.', fix: 'Score every debt item by economic impact: revenue risk × probability × time urgency.' },
            { mistake: 'Not tracking debt accumulation rate', consequence: 'No visibility into whether debt is growing faster than remediation.', fix: 'Measure: new debt introduced per sprint vs. debt remediated. Net must be negative.' },
        ],
        'AI & Machine Learning': [
            { mistake: 'Using the most powerful model for every request', consequence: 'Costs 10-50x more than necessary. Margins destroyed at scale.', fix: 'Implement model routing: use the cheapest model that meets quality threshold per query.' },
            { mistake: 'Not tracking per-request AI costs', consequence: 'Cannot calculate feature-level margins. Growth may accelerate losses.', fix: 'Instrument per-request cost tracking from day one. Include compute, tokens, and storage.' },
            { mistake: 'Ignoring the Cost of Predictivity curve', consequence: 'Committing to accuracy targets without understanding the exponential cost.', fix: 'Model the accuracy-cost curve before committing to SLAs. Each 1% costs exponentially more.' },
            { mistake: 'Launching AI features without unit economics', consequence: '40-60% of AI features launch unprofitable. Scaling accelerates losses.', fix: 'Require feature-level P&L before launch. Must show >50% contribution margin path.' },
        ],
        'Cloud & Infrastructure': [
            { mistake: 'Defaulting to oversized instances "just in case"', consequence: '30-35% of cloud spend wasted. $100K+ per year for mid-size companies.', fix: 'Right-size based on actual utilization data. Review every 90 days.' },
            { mistake: 'No cost allocation or tagging strategy', consequence: 'No team accountability. Waste is invisible and unchallenged.', fix: 'Tag everything: team, environment, project. Implement showback/chargeback.' },
            { mistake: 'Paying on-demand prices for predictable workloads', consequence: 'Missing 30-60% savings from reservations and commitments.', fix: 'Reserve 60-70% of baseline load. Use on-demand only for variable peaks.' },
            { mistake: 'No cost anomaly detection', consequence: 'Runaway costs from misconfigured services or forgotten resources discovered at month-end.', fix: 'Set daily alerts for >20% deviation from 7-day average. Review weekly.' },
        ],
    };
    return mistakes[category] || [
        { mistake: `Implementing ${title} without executive sponsorship`, consequence: 'Initiatives stall when competing with feature work for resources.', fix: 'Secure VP+ sponsor who can protect budget and prioritize the initiative.' },
        { mistake: `Treating ${title} as a one-time project instead of ongoing practice`, consequence: 'Initial improvements erode within 2-3 quarters without sustained effort.', fix: 'Embed into regular rituals: quarterly reviews, team OKRs, and reporting cadence.' },
        { mistake: `Not measuring ${title} baseline before starting`, consequence: 'Cannot demonstrate improvement. ROI narrative impossible to build.', fix: 'Spend the first 2 weeks establishing baseline measurements before any changes.' },
        { mistake: `Copying another company's ${title} approach without adaptation`, consequence: 'Context mismatch leads to poor results and wasted effort.', fix: 'Use frameworks as starting points. Adapt to your team size, stage, and culture.' },
    ];
}

// NEW: Best Practices auto-generation
export function autoBestPractices(category: string, title: string): { practice: string; impact: string }[] {
    const practices: Record<string, { practice: string; impact: string }[]> = {
        'Technical Debt & Code Quality': [
            { practice: `Treat ${title} like financial debt: track principal, interest rate, and minimum payments`, impact: 'Leadership understands urgency. Budget discussions become data-driven.' },
            { practice: 'Include debt impact assessment in every architecture decision record', impact: 'Prevents debt from being created unknowingly. Decisions include economic trade-offs.' },
            { practice: 'Create a "Debt Ceiling" — maximum acceptable Innovation Tax percentage', impact: 'Clear threshold triggers action. Typically set at 35-40% Innovation Tax.' },
            { practice: 'Run quarterly R&D Capital Audits using PDI framework', impact: 'Continuous visibility into technology capital health. Trend tracking enables early intervention.' },
            { practice: 'Celebrate debt remediation wins publicly', impact: 'Creates positive culture around maintenance work. Teams volunteer for remediation.' },
        ],
        'AI & Machine Learning': [
            { practice: 'Implement tiered model routing from day one', impact: 'Saves 60-80% on inference costs without quality degradation for most queries.' },
            { practice: 'Require feature-level P&L for every AI initiative before approval', impact: 'Prevents unprofitable features from reaching production. Focuses investment on winners.' },
            { practice: 'Design for graceful degradation when AI services fail or are slow', impact: 'Users still get value. System resilience prevents revenue loss during outages.' },
            { practice: 'Cache frequently requested AI responses with semantic similarity matching', impact: 'Reduces redundant API calls 40-60%. Improves latency for common queries.' },
            { practice: 'Establish AI cost budgets per team, with weekly visibility', impact: 'Teams self-optimize when they can see their spend. 20-30% natural cost reduction.' },
        ],
        'SaaS & Metrics': [
            { practice: 'Track leading indicators (activation, engagement) not just lagging (churn)', impact: 'Enable proactive intervention before customers churn. 3-6 month early warning.' },
            { practice: 'Segment metrics by cohort, plan tier, and acquisition channel', impact: 'Reveals which segments are profitable and which are destroying value.' },
            { practice: 'Connect engineering velocity metrics to business outcome metrics', impact: 'Demonstrates engineering ROI. Enables data-driven sprint planning.' },
            { practice: 'Automate metric collection and dashboarding', impact: 'Removes human error and lag. Real-time visibility enables real-time decisions.' },
            { practice: 'Review metrics in cross-functional forums (eng + product + finance)', impact: 'Breaks silos. Ensures engineering investments align with business priorities.' },
        ],
    };
    return practices[category] || [
        { practice: `Start with a 90-day pilot of ${title} in one team before rolling out`, impact: 'Validates approach, builds evidence, and creates internal champions.' },
        { practice: `Measure and report ${title} impact in financial terms to leadership`, impact: 'Ensures continued investment and executive support for the initiative.' },
        { practice: `Create a ${title} playbook documenting processes, tools, and decision frameworks`, impact: 'Enables consistency across teams and reduces onboarding time for new team members.' },
        { practice: `Schedule quarterly ${title} reviews with cross-functional stakeholders`, impact: 'Maintains momentum, surfaces issues early, and keeps the initiative visible.' },
        { practice: `Invest in training and certification for ${title} across the organization`, impact: 'Builds internal capability and reduces dependency on external consultants.' },
    ];
}

// NEW: Industry Benchmarks auto-generation
export function autoIndustryBenchmarks(category: string, title: string): { industry: string; metric: string; low: string; median: string; elite: string }[] {
    const benchmarks: Record<string, { industry: string; metric: string; low: string; median: string; elite: string }[]> = {
        'Technical Debt & Code Quality': [
            { industry: 'SaaS (B2B)', metric: 'Innovation Tax', low: '60-70%', median: '40-50%', elite: '<30%' },
            { industry: 'FinTech', metric: 'Critical Debt Items', low: '50+', median: '15-25', elite: '<10' },
            { industry: 'E-Commerce', metric: 'Debt Remediation Rate', low: '<5%/quarter', median: '10-15%/quarter', elite: '20%+/quarter' },
            { industry: 'HealthTech', metric: 'Compliance Debt', low: 'Untracked', median: 'Quarterly review', elite: 'Continuous monitoring' },
        ],
        'AI & Machine Learning': [
            { industry: 'AI-First SaaS', metric: 'AI COGS/Revenue', low: '>40%', median: '15-25%', elite: '<10%' },
            { industry: 'Enterprise AI', metric: 'Inference Cost/Request', low: '>$0.10', median: '$0.01-$0.05', elite: '<$0.005' },
            { industry: 'Consumer AI', metric: 'Model Routing Coverage', low: '<30%', median: '50-70%', elite: '>85%' },
            { industry: 'All Sectors', metric: 'AI Feature Profitability', low: '<30% profitable', median: '50-60%', elite: '>80%' },
        ],
        'SaaS & Metrics': [
            { industry: 'Early-Stage', metric: 'Net Revenue Retention', low: '<90%', median: '100-110%', elite: '>130%' },
            { industry: 'Growth Stage', metric: 'CAC Payback (months)', low: '>24', median: '12-18', elite: '<12' },
            { industry: 'Enterprise', metric: 'Gross Margin', low: '<60%', median: '70-80%', elite: '>85%' },
            { industry: 'All Stages', metric: 'Rule of 40 Score', low: '<20%', median: '30-40%', elite: '>60%' },
        ],
    };
    return benchmarks[category] || [
        { industry: 'Technology', metric: `${title} Adoption`, low: 'Ad-hoc', median: 'Standardized', elite: 'Optimized' },
        { industry: 'Financial Services', metric: `${title} Maturity`, low: 'Level 1-2', median: 'Level 3', elite: 'Level 4-5' },
        { industry: 'Healthcare', metric: `${title} Compliance`, low: 'Reactive', median: 'Proactive', elite: 'Predictive' },
        { industry: 'E-Commerce', metric: `${title} ROI`, low: '<1x', median: '2-3x', elite: '>5x' },
    ];
}

// NEW: Auto-generated Hub-and-Spoke SEO Article matrix
export function autoSpokes(category: string, title: string, slug: string): { title: string; url: string; description: string }[] {
    const spokes: Record<string, { title: string; url: string; description: string }[]> = {
        'Technical Debt & Code Quality': [
            { title: `Calculating ${title} EBITDA Impact for Private Equity`, url: `/articles/calculating-${slug}-ebitda-impact-private-equity`, description: `How investors quantify the hidden liabilities of ${title} during M&A due diligence.` },
            { title: `How to Translate DORA Metrics into Financial ${title}`, url: `/articles/how-to-translate-dora-metrics-into-financial-${slug}`, description: `A bridge for CTOs to explain engineering constraints to the CFO.` },
            { title: `${title} Governance Frameworks for Scale-Ups`, url: `/articles/${slug}-governance-frameworks-for-scaleups`, description: `Board-ready policies to prevent technical insolvency at scale.` }
        ],
        'AI & Machine Learning': [
            { title: `${title} Unit Economics: The Ultimate CTO Guide`, url: `/articles/${slug}-unit-economics-cto-guide`, description: `Detailed breakdown of the fixed vs. variable cost structures limiting AI profitability.` },
            { title: `Mitigating ${title} Risk in Enterprise Deployments`, url: `/articles/mitigating-${slug}-risk-enterprise`, description: `Ensuring compliance, data security, and margin preservation at 100x scale.` },
            { title: `The Cost of Predictivity: Why ${title} Defies Software Economics`, url: `/articles/cost-of-predictivity-defies-${slug}`, description: `Understanding why AI scaling costs compound differently than traditional SaaS.` }
        ],
        'SaaS Metrics & Finance': [
            { title: `Leveraging ${title} to Drive Rule of 40 Valuations`, url: `/articles/leveraging-${slug}-rule-of-40`, description: `How top-quartile companies engineer their metrics for venture funding.` },
            { title: `${title} Benchmarks for Series B and Beyond`, url: `/articles/${slug}-benchmarks-series-b-beyond`, description: `The exact financial milestones required to unlock late-stage growth capital.` },
            { title: `The Board's Guide to Interpreting ${title}`, url: `/articles/boards-guide-interpreting-${slug}`, description: `How sophisticated investors strip away vanity metrics to find truth.` }
        ],
    };
    return spokes[category] || [
        { title: `The Enterprise Guide to Scaling ${title}`, url: `/articles/enterprise-guide-scaling-${slug}`, description: `Architectural constraints and organizational requirements for enterprise-wide adoption.` },
        { title: `${title} ROI Models for Chief Financial Officers`, url: `/articles/${slug}-roi-models-cfo`, description: `Quantifying the CapEx vs. OpEx trade-offs of modern engineering practices.` },
        { title: `Overcoming Implementation Friction with ${title}`, url: `/articles/overcoming-implementation-friction-${slug}`, description: `Change management strategies to drive adoption and compliance across 500+ engineer orgs.` }
    ];
}

// NEW: Auto-generated Curriculum pathways
export function autoCurriculum(category: string, title: string, slug: string): { track: string; title: string; url: string; price: string }[] {
    const tracks: Record<string, { track: string; title: string; url: string; price: string }[]> = {
        'Technical Debt & Code Quality': [
            { track: 'Engineering Economics', title: `Quantifying ${title} for the Boardroom`, url: `/curriculum/engineering-economics/${slug}-quantification`, price: '$199' }
        ],
        'AI & Machine Learning': [
            { track: 'AI Unit Economics', title: `Architecting Profitable ${title} Systems`, url: `/curriculum/ai-economics/architecting-${slug}`, price: '$199' }
        ],
        'Leadership & Governance': [
            { track: 'Technology Leadership', title: `Executive Governance of ${title}`, url: `/curriculum/technology-leadership/governance-${slug}`, price: '$199' }
        ]
    };
    return tracks[category] || [
        { track: 'Digital Transformation', title: `Operationalizing ${title} at Scale`, url: `/curriculum/digital-transformation/operationalizing-${slug}`, price: '$199' }
    ];
}

// NEW: Auto-generated Executive Guides
export function autoGuides(category: string, title: string, slug: string): { title: string; url: string; type: string }[] {
    return [
        { title: `Private Equity Due Diligence Checklist for ${title}`, url: `/vault/curriculum/tracks`, type: 'Executive Brief' },
        { title: `The ${category.split(' & ')[0]} Investment Thesis (2026-2028)`, url: `/vault/curriculum/tracks`, type: 'Market Report' }
    ];
}

// NEW: Auto-generated Premium Diagnostic Mapping
export function autoPremiumTool(category: string, title: string, slug: string): { name: string; tag: string; icon: string; url: string; price: string; description: string } {
    if (category.includes('AI') || category.includes('Machine Learning')) {
        return {
            name: 'AI Unit Economics Builder',
            tag: 'AUEB Framework',
            icon: '🧠',
            url: '/tools/aueb',
            price: '$10k Value',
            description: `Run a definitive financial audit to determine if your ${title} infrastructure is destroying margins at scale.`
        };
    }
    
    return {
        name: 'Product Debt Index',
        tag: 'PDI Diagnostic',
        icon: '⚖️',
        url: '/tools/pdi',
        price: '$10k Value',
        description: `Quantify the hidden economic liability of ${title} across your architecture using the world's leading valuation impact framework.`
    };
}

// NEW: Auto-generated Where Is It Used sections
export function autoWhereIsItUsed(category: string, title: string): string {
    const context: Record<string, string> = {
        'Technical Debt & Code Quality': `${title} typically manifests within rapidly scaling engineering organizations where delivery speed was temporarily prioritized over architectural integrity.\n\nIt is most frequently encountered during M&A due diligence, post-IPO architecture simplification, and during major platform modernization initiatives.`,
        'AI & Machine Learning': `${title} is deployed within the production inference path of intelligent applications.\n\nIt is heavily utilized by organizations scaling generative workflows, operating large language models at enterprise volumes, and architecting agentic AI systems that require strict cost controls and guardrails.`,
        'Cloud & Infrastructure': `${title} forms the operational backbone of modern, distributed cloud architectures.\n\nIt is essential within hyper-growth SaaS platforms, high-availability enterprise environments, and multi-region deployments where resilience, auto-scaling, and FinOps unit economics dictate survival.`,
        'Security & Compliance': `${title} is implemented across the entire software supply chain—from code commit to runtime telemetry.\n\nIt is mandated within regulated environments (FinTech, HealthTech), high-compliance SaaS dealing with SOC2/ISO requirements, and organizations adopting Zero Trust architecture.`,
        'Product Management': `${title} is leveraged heavily during the product discovery and strategic roadmapping phases of software development.\n\nIt is central to cross-functional alignment between engineering, design, and go-to-market teams to ensure R&D capital is deployed efficiently toward validated market motion.`,
        'SaaS & Metrics': `${title} surfaces primarily in the boardroom and during executive capital allocation planning.\n\nIt is used by CFOs, Private Equity sponsors, and technical leadership to track unit economics, calculate the Rule of 40, and model the financial efficiency of the engineering engine.`,
    };
    return context[category] || `${title} is implemented across modern technology organizations navigating complex digital transformation.\n\nIt is particularly relevant to teams scaling beyond their initial product-market fit, where operational maturity, predictability, and economic efficiency are required by leadership and investors.`;
}

// NEW: Auto-generated Who Uses It sections
export function autoWhoUsesIt(category: string, title: string): string {
    const context: Record<string, string> = {
        'Technical Debt & Code Quality': `**CTOs & VPs of Engineering** use ${title} parameters to negotiate R&D budget allocation with the finance department and justify modernization efforts.\n\n**Private Equity & M&A Teams** leverage these insights during due diligence to calculate valuation impairment and model technical debt recovery costs.`,
        'AI & Machine Learning': `**AI Engineering Leads** utilize ${title} to architect scalable, high-performance model pipelines without destroying unit economics.\n\n**Product Managers** rely on this to balance token expenditure against feature profitability, ensuring the AI functionality remains accretive to gross margin.`,
        'Cloud & Infrastructure': `**Site Reliability Engineers (SREs) & Platform Teams** construct ${title} to guarantee five-nines availability and automate developer velocity.\n\n**FinOps Analysts** monitor this architecture to prevent cloud sprawl, eliminate OPEX waste, and enforce tagging compliance across the org.`,
        'Security & Compliance': `**Chief Information Security Officers (CISOs)** enforce ${title} to maintain continuous compliance posture and minimize blast radius during an event.\n\n**DevSecOps Teams** integrate these concepts directly into the CI/CD pipeline to shift security left and prevent vulnerabilities from surviving code review.`,
        'Product Management': `**Chief Product Officers (CPOs) & Product Leads** operationalize ${title} to translate raw engineering velocity into measurable business outcomes.\n\n**Founders** use this methodology to navigate the transition from a sales-led motion to a product-led growth (PLG) vector.`,
    };
    return context[category] || `**Technology Executives (CTO/CIO)** leverage ${title} to align their technical strategy with overriding business constraints and board expectations.\n\n**Staff Engineers & Architects** rely on this framework to implement scalable, predictable patterns throughout their domains.`;
}

