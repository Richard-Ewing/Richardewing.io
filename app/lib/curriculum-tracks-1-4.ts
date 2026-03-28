import { type CurriculumModule, m, l, d } from './curriculum-data';

export function populateTracks1To4(modules: Record<string, CurriculumModule>) {
    
    // Helper to generate the next href automatically
    const getNext = (trackStr: string, index: number, total: number) => {
        return index < total - 1 ? `/vault/curriculum/tracks/${trackStr}/${trackStr === 'cto' ? 1 : trackStr === 'pm' ? 2 : trackStr === 'investor' ? 3 : 4}-${index + 2}` : undefined;
    };

    // ═══════════════════ TRACK 1: CTO / Engineering Leader ═══════════════════
    const t1 = 'Track 1 — CTO / Engineering Leader';
    const ctoMods: [string, string, string, string[]][] = [
        ['1-1', 'Foundation: Technical Debt Economics', 'Master the valuation, interest rates, and structural impact of technical debt.', ['Define the Innovation Tax', 'Calculate Technical Insolvency', 'Map the Product Debt Index', 'Structure refactoring investments']],
        ['1-2', 'Engineering Metrics That Matter', 'Move beyond lines of code and story points to metrics that executives care about.', ['Implement DORA metrics correctly', 'Calculate APER (Revenue/Eng)', 'Measure true organizational velocity', 'Correlate deployment to revenue']],
        ['1-3', 'Architecture & Operations', 'The economic tradeoffs of architectural design choices and modernization.', ['Evaluate Monolith vs Microservices', 'Calculate the ROI of CI/CD', 'Structure SRE error budgets', 'Optimize Cloud Architecture spend']],
        ['1-4', 'AI Economics', 'Quantify the financial impact and risk of AI integrations in enterprise.', ['Build the AUEB framework', 'Measure the Cost of Predictivity', 'Evaluate Hallucination risk costs', 'Design AI Governance models']],
        ['1-5', 'Leadership & Governance', 'Operating as an executive, scaling teams, and structuring engineering governance.', ['Master the Fractional CTO playbook', 'Decide Build vs. Buy with ROI', 'Implement Team Topologies', 'Execute massive Change Management']],
    ];

    ctoMods.forEach(([id, title, desc, takeaways], i) => {
        modules[`cto/${id}`] = m(id, title, desc, t1, takeaways, [
            l(`Lesson 1: Mastering ${title.split(':')[0]}`, `Core concepts defining ${title.toLowerCase()} in modern software ecosystems.`, [
                d('Primary Economic Driver', 'The core business metric impacted.', 'Measure in Monthly Recurring Revenue (MRR)'),
                d('Efficiency Drag', 'The hidden cost of ignoring this domain.', 'Calculated as % of engineering capacity lost'),
                d('Target Benchmark', 'The industry standard for top quartile teams.', 'Optimize to top 25% threshold')
            ], `Audit your current organizational posture against the ${title} frameworks and identify the largest capital leak.`),
            l(`Lesson 2: Executive Communication`, `Translating technical constraints in ${title.toLowerCase()} into executive-level financial discussions.`, [
                d('Board Transparency', 'Reporting format for stakeholders.', 'Quarterly Trend Lines'),
                d('Budget Justification', 'How to ask for budget to fix this.', 'Present 3x ROI minimums'),
                d('Risk Quantification', 'Putting a dollar value on technical risks.', 'Use EV-SE modeling')
            ], `Draft a one-page board summary explaining your current status and investment request for this domain.`),
            l(`Lesson 3: Execution Playbook`, `The 90-day plan to architect and implement changes regarding ${title.toLowerCase()}.`, [
                d('Milestone 1 (Day 30)', 'Initial audit and quick wins.', 'Deliver 15% improvement'),
                d('Milestone 2 (Day 60)', 'Process rollout and metric tracking.', 'Measure baseline shift'),
                d('Milestone 3 (Day 90)', 'Cultural integration and steady-state.', 'Achieve autonomous operation')
            ], `Define your custom 30-60-90 day KPIs for rolling out this curriculum standard in your teams.`)
        ], getNext('cto', i, ctoMods.length));
    });

    // ═══════════════════ TRACK 2: PM / CPO ═══════════════════
    const t2 = 'Track 2 — Product Manager / CPO';
    const pmMods: [string, string, string, string[]][] = [
        ['2-1', 'Foundation: Product Economics', 'Transition from feature planning to acting as a true Product Economist.', ['Calculate Unit Economics', 'Audit Feature Bloat Calculus', 'Implement the Kill Switch Protocol', 'Drive margin expansion']],
        ['2-2', 'Prioritization Frameworks', 'The science of prioritizing engineering capital allocation.', ['Master RICE & Kano models', 'Deploy Jobs To Be Done (JTBD)', 'Define your North Star Metric', 'Quantify Product-Market Fit']],
        ['2-3', 'Product Operations', 'Scaling the product management function with rigorous operations.', ['Structure the Product Roadmap', 'Align OKRs to financial growth', 'Measure A/B testing ROI', 'Optimize Product Analytics']],
        ['2-4', 'AI Product Leadership', 'Designing, managing, and launching AI-native product features.', ['Master the AUEB Framework', 'Structure RAG product features', 'Calculate Prompt Engineering ROI', 'Lead Vibe Coding workflows']],
    ];

    pmMods.forEach(([id, title, desc, takeaways], i) => {
        modules[`pm/${id}`] = m(id, title, desc, t2, takeaways, [
            l(`Lesson 1: Product Economics of ${title}`, `Applying product economic theory to ${title.toLowerCase()} to maximize Average Revenue Per User (ARPU).`, [
                d('Capital Allocation', 'R&D investment required for feature success.', 'Target: <10% overhead'),
                d('Margin Expansion', 'How this framework increases profit margins.', 'Target: 80%+ Gross Margin'),
                d('Market Share', 'Winning competitive advantages.', 'Network Effects & Switching Costs')
            ], `Calculate the exact feature cost for your most recent ship using the Feature Bloat Calculus.`),
            l(`Lesson 2: Execution & Adoption`, `Rolling out framework changes for ${title.toLowerCase()} without disrupting engineering flow.`, [
                d('Engineering Alignment', 'Bridging the PM/Eng divide.', 'Shared OKRs'),
                d('Customer Validation', 'Proving the hypothesis fast.', 'Time to Value < 14 days'),
                d('Usage Telemetry', 'Measuring distinct active adoption.', 'DAU/MAU ratios')
            ], `Design a telemetry schema that proves your feature generated ROI within 30 days.`),
            l(`Lesson 3: Capstone Product Strategy`, `Synthesizing ${title.toLowerCase()} into your overarching CPO playbook.`, [
                d('Portfolio View', 'Managing multiple bets simultaneously.', 'Matrix Resource Allocation'),
                d('Sunset Economics', 'Knowing when to retire products.', 'The Kill Switch Protocol'),
                d('Value Pricing', 'Charging for the value, not the feature.', 'Value-Based Pricing Tiers')
            ], `Draft a feature sunset memo using the Kill Switch Protocol for your lowest performing product line.`)
        ], getNext('pm', i, pmMods.length));
    });

    // ═══════════════════ TRACK 3: Investor / PE / VC ═══════════════════
    const t3 = 'Track 3 — PE / VC / Investor';
    const invMods: [string, string, string, string[]][] = [
        ['3-1', 'Foundation: SaaS Metrics', 'Evaluating target companies using strict financial engineering principles.', ['Calculate Net Revenue Retention', 'Evaluate Rule of 40 compliance', 'Audit Annual Recurring Revenue', 'Model SaaS Valuations']],
        ['3-2', 'Technical Due Diligence', 'Exposing hidden technical risks that destroy M&A enterprise value.', ['Execute Technical Due Diligence', 'Calculate the Product Debt Index', 'Identify the Technical Insolvency Date', 'Run an R&D Capital Audit']],
        ['3-3', 'AI Risk Assessment', 'Auditing AI infrastructure for hallucinations, lock-in, and unit losses.', ['Model the Cost of Predictivity', 'Audit AI Governance & Hallucinations', 'Identify Vendor Lock-In risks', 'Run the AUEB test']],
        ['3-4', 'Financial Engineering', 'Connecting software metrics to fundamental balance sheet realities.', ['Calculate Burn Rate & Runway', 'Model Cap Table dilution', 'Evaluate Software Gross Margins', 'Optimize LTV to CAC ratios']],
    ];

    invMods.forEach(([id, title, desc, takeaways], i) => {
        modules[`investor/${id}`] = m(id, title, desc, t3, takeaways, [
            l(`Lesson 1: Deal Thesis & ${title}`, `Incorporating ${title.toLowerCase()} into the core investment diligence thesis.`, [
                d('Enterprise Value Impact', 'How this metric multiples valuation.', 'EBITDA expansion'),
                d('Red Flags', 'Warning signs during the data room review.', 'High technical debt indices'),
                d('Post-Close Value Creation', '100-day plan after acquisition.', 'Immediate margin recovery')
            ], `Execute a mock diligence audit on your current or target company using the frameworks provided.`),
            l(`Lesson 2: Auditing the Data Room`, `Exactly what to ask the CTO and what documents to request regarding ${title.toLowerCase()}.`, [
                d('Information Request (RFI)', 'The checklist to send the target.', 'Mandatory Architecture Schematics'),
                d('Interview Tactics', 'Probing the engineering leadership.', 'Look for blameless culture'),
                d('Code Risk', 'Evaluating the actual asset.', 'Automated static analysis + PDI')
            ], `Draft a 5-point diligence questionnaire addressing the highest risk factors in this domain.`),
            l(`Lesson 3: Financial Synthesis`, `Mapping technical findings directly to the CAP table and acquisition modeling.`, [
                d('R&D Capitalization', 'ASC 350-40 accounting impacts.', 'EBITDA adjustments'),
                d('Margin Degradation', 'Forecasting hidden infrastructure costs.', 'Cloud spend explosion'),
                d('Remediation Budget', 'The cost to fix the target company.', 'Subtract from purchase price')
            ], `Model the exact cost to remedy a high PDI score and adjust the mock EBITDA multiple accordingly.`)
        ], getNext('investor', i, invMods.length));
    });

    // ═══════════════════ TRACK 4: AI Enterprise Architect ═══════════════════
    const t4 = 'Track 4 — AI & Enterprise Architect';
    const aiMods: [string, string, string, string[]][] = [
        ['4-1', 'AI Operations & Governance', 'Deploying enterprise AI models securely, affordably, and accurately.', ['Optimize AI Model Selection', 'Calculate Prompt Engineering ROI', 'Audit AI Testing & Evaluations', 'Model Hallucination Costs']],
        ['4-2', 'AI Agent & Automation Economics', 'Structuring autonomous workflows without destroying cloud margins.', ['Audit Agentic Cost Structures', 'Decide Agent Build vs. Buy', 'Optimize RAG Pipelines', 'Perform Inference Cost Modeling']],
        ['4-3', 'Enterprise Architecture', 'Building resilient platforms that can handle high-frequency scaling.', ['Launch an Architecture Review Board', 'Calculate API Gateway Economics', 'Design Event-Driven Architectures', 'Model Legacy Modernization ROI']],
        ['4-4', 'AI Career Pivots', 'Transitioning engineering roles to AI-centric leadership positions.', ['Pivot to AI Product Manager', 'Master the DevOps to MLOps jump', 'Transition from SWE to AI Engineer', 'Ascend from VP Eng to VP AI']],
        ['4-5', 'Cloud FinOps', 'Mastering the discipline of cloud cost control and infrastructure accounting.', ['Internalize FinOps Fundamentals', 'Execute Cloud Cost Allocation', 'Control Kubernetes spend', 'Evaluate Serverless vs Containers']],
    ];

    aiMods.forEach(([id, title, desc, takeaways], i) => {
        modules[`ai-enterprise/${id}`] = m(id, title, desc, t4, takeaways, [
            l(`Lesson 1: Architecture & ${title}`, `Designing systems that scale beautifully while managing ${title.toLowerCase()}.`, [
                d('System Latency', 'The speed of execution and inference.', 'Target: <200ms TTFB'),
                d('Payload Cost', 'The token or compute cost per request.', 'Optimize <$0.01 per execution'),
                d('Data Gravity', 'Moving compute to the data.', 'Edge execution strategies')
            ], `Draw a system sequence diagram integrating these principles into your core application loop.`),
            l(`Lesson 2: Resilience & Security`, `Ensuring your architecture survives black-swan events and bad actors.`, [
                d('Blast Radius', 'Limiting damage from systemic failures.', 'Zero-Trust Architecture'),
                d('Rate Limiting', 'Preventing runaway agent loops.', 'Hard API caps per user'),
                d('Model Fallbacks', 'Routing to backup SLMs during outages.', '100% Uptime SLAs')
            ], `Implement the Kill Switch Protocol mapping for your primary AI integration flow.`),
            l(`Lesson 3: Economic Scaling`, `Scaling from 1,000 to 1,000,000 users without breaking the bank.`, [
                d('Unit Economics at Scale', 'Does the margin hold when volumes spike?', 'Logarithmic cost decay'),
                d('Batch Processing', 'Aggregating workloads for efficiency.', 'Off-peak asynchronous queues'),
                d('Caching ROI', 'Saving token generation costs.', 'Semantic caching (e.g., Redis vector)')
            ], `Compute your application's current Cost of Predictivity and project it out to 1M Daily Active Users.`)
        ], getNext('ai-enterprise', i, aiMods.length));
    });
}
