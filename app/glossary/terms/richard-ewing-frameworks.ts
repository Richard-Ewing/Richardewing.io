import { GlossaryTerm } from '../types';

export const richardEwingFrameworksTerms: GlossaryTerm[] = [
    { 
        slug: 'product-debt-index', 
        title: 'Product Debt Index (PDI)', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Product Debt Index (PDI) is a diagnostic metric that quantifies an organization's total technical debt in dollar terms. What normal people call this: calculating how much messy, buggy code and bad architecture are actually costing your business in cash and lost engineering hours.\n\nUnlike traditional engineering metrics that measure story points or arbitrary code smell counts, the PDI translates engineering drag into financial numbers that CEOs, CFOs, and board members can act on.\n\nThe PDI evaluates: maintenance-to-innovation ratio, dependency health, code coverage, deployment frequency, incident rate, team velocity trends, and infrastructure costs. Each dimension is scored and weighted to produce a composite score from 0 (debt-free) to 100 (technical insolvency).\n\nPDI score ranges: 0-20 (Healthy: debt is managed and minimal), 20-40 (Moderate: debt is accumulating but manageable), 40-60 (Critical: debt is hurting velocity and requires immediate intervention), 60-80 (Severe: approaching Technical Insolvency Date), 80-100 (Terminal: engineering capacity is entirely consumed by maintenance).\n\nThe free PDI calculator at richardewing.io/tools/pdi provides an automated assessment based on organizational inputs.`, 
        whyItMatters: `The PDI provides a single, trackable metric for communicating software health to non-technical leaders. It transforms technical debt from a vague engineering complaint into a quantified balance sheet risk.`, 
        howToMeasure: `1. Calculate your maintenance-to-innovation ratio.\n2. Assess dependency health and vulnerability count.\n3. Measure code coverage and deployment frequency.\n4. Track incident rate and MTTR.\n5. Calculate APER (revenue per engineer).\n6. Run the PDI calculator at richardewing.io/tools/pdi.`, 
        faqs: [
            { question: 'What is the Product Debt Index in plain English?', answer: 'It is a financial scorecard (0-100) that calculates the exact dollar cost of technical debt and messy code inside a company. It translates engineering problems into language finance leaders and investors understand.' }, 
            { question: 'How do I calculate my PDI?', answer: 'Use the free calculator at richardewing.io/tools/pdi. It measures maintenance ratio, dependency health, code coverage, deployment frequency, incident rate, and team velocity.' }
        ], 
        relatedTerms: ['technical-debt', 'technical-insolvency-date', 'innovation-tax', 'api-janitor-trap'], 
        relatedTools: [{ name: 'Product Debt Index Calculator', url: '/tools/pdi' }] 
    },
    { 
        slug: 'ev-se-framework', 
        title: 'Enterprise Value Scenario Engine (EV-SE)', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Enterprise Value Scenario Engine (EV-SE) is an economic model connecting technical architecture decisions directly to company valuation multipliers. What normal people call this: figuring out how much bad code, technical debt, and runaway AI costs reduce the sale price of your business when investors or buyers look at your books.\n\nThe EV-SE models the relationship between: ARR multiples and technical health, gross margin impact of AI costs, customer revenue retention and technical debt, engineering efficiency and EBITDA, and technology risk factors on deal pricing.\n\nThe tool provides scenario analysis: "If we reduce technical debt by 30%, what happens to our valuation multiple? If AI costs grow 15% per quarter, what is the impact on gross margins by Year 3?"\n\nFor private equity and venture capital firms, the EV-SE quantifies the post-acquisition technology investment required to modernize the codebase beyond the purchase price.`, 
        whyItMatters: `Technical decisions directly impact enterprise value, yet most organizations cannot model the financial relationship. The EV-SE bridges the gap between software metrics and M&A valuation multiples.`, 
        faqs: [
            { question: 'What is the EV-SE in plain English?', answer: 'It is a financial model that shows how software health, technical debt, and AI bills directly increase or decrease what a buyer or investor will pay for your company.' }, 
            { question: 'Who uses the EV-SE?', answer: 'Founders preparing for a fundraise or sale, CTOs and CFOs evaluating R&D capital ROI, and private equity firms conducting technical due diligence.' }
        ], 
        relatedTerms: ['saas-valuation', 'technical-debt', 'gross-margin', 'product-debt-index'], 
        relatedTools: [{ name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se' }] 
    },
    { 
        slug: 'aueb-framework', 
        title: 'AI Unit Economics Benchmark (AUEB)', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The AI Unit Economics Benchmark (AUEB) is a framework for calculating whether an AI feature makes or loses money per customer. What normal people call this: finding out if your AI feature is secretly burning more cash on API tokens than what customers pay you in subscriptions.\n\nIt goes beyond simple raw token invoices to calculate the full economic picture: cost per useful output, hallucination cost, verification overhead, and net commercial value created.\n\nThe AUEB calculates: Cost of Predictivity (total cost per accurate AI output including failed attempts and retries), Hallucination Cost (economic damage of incorrect outputs), Verification Overhead (human review hours required), Net AI Margin (revenue generated minus compute costs), and Break-Even Volume (queries needed for an AI feature to turn profitable).\n\nThe free AUEB tool at richardewing.io/tools/aueb provides automated unit economics analysis.`, 
        whyItMatters: `Most AI features are launched without unit margin models. The AUEB prevents companies from launching negative-carry features that lose more money the more customers use them.`, 
        faqs: [
            { question: 'What is the AUEB in plain English?', answer: 'A benchmark that proves whether your AI feature is profitable on a per-user basis or quietly bankrupting your gross margins.' }, 
            { question: 'Why do AI features lose money on subscriptions?', answer: 'Traditional software costs nothing when users click a button. AI features incur variable API token costs on every query. Bundling unlimited AI into flat subscriptions creates negative gross margins.' }
        ], 
        relatedTerms: ['cost-of-predictivity', 'ai-inference', 'retry-inflation', 'gross-margin'], 
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }] 
    },
    { 
        slug: 'aper-metric', 
        title: 'APER (Annualized Productivity to Engineering Ratio)', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `APER measures revenue generated per engineer, annualized. What normal people call this: finding out if your engineering team is actually producing business value, or if adding AI tools and more hires is giving you diminishing returns.\n\nAPER = Annual Recurring Revenue (ARR) ÷ Total Engineering Headcount\n\nBenchmarks: early-stage startups typically have APER of $100K to $200K. Growth-stage companies target $200K to $400K. Mature SaaS companies achieve $400K to $800K. Best-in-class software factories exceed $1M per engineer.\n\nAPER trends are more important than absolute numbers. Rising APER means engineering is becoming more capital-efficient. Declining APER means each new hire or AI tool produces less commercial value, signaling organizational bloat, code debt, or broken product discovery.`, 
        whyItMatters: `APER is the most honest measure of engineering efficiency because it connects payroll investment directly to revenue outcomes instead of vanity metrics like story points or code commits.`, 
        howToMeasure: `1. Calculate Total APER: ARR divided by total engineering headcount.\n2. Calculate Product APER: ARR divided by core product engineering headcount.\n3. Track quarterly trend: declining APER is an early warning sign of technical drag.\n4. Compare against industry benchmarks for your stage.`, 
        faqs: [
            { question: 'What is APER in plain English?', answer: 'It is the annual revenue generated per software engineer. It is the best metric to see if engineering investments and AI tools are actually helping the company grow.' }, 
            { question: 'What is a healthy APER benchmark?', answer: 'Early-stage: $100K-$200K. Growth: $200K-$400K. Scale-up: $400K-$800K. Top tier: $1M+ per engineer.' }
        ], 
        relatedTerms: ['engineering-velocity', 'engineering-productivity', 'innovation-tax', 'synthetic-spec-inflation'], 
        relatedTools: [{ name: 'APER Calculator', url: '/tools/aper' }] 
    },
    { 
        slug: 'r-and-d-capital-audit', 
        title: 'R&D Capital Audit', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The R&D Capital Audit is a forensic examination of how an organization allocates its engineering and product development budget. What normal people call this: an independent check to find where millions in software payroll are being wasted on maintenance, broken AI experiments, and technical debt.\n\nThe audit process covers: stakeholder interviews (CEO, CTO, VPs, engineers), codebase architecture review, financial modeling (PDI, Innovation Tax, Technical Insolvency Date), and team productivity benchmarking (APER).\n\nKey questions the audit answers: How much of our R&D spend is actually producing new revenue? Where are we wasting engineering payroll? What is our true cost per AI feature? What changes will maximize engineering ROI?`, 
        whyItMatters: `Most executive teams do not know where software payroll actually goes. The audit reveals the 30% to 50% gap between perceived and actual engineering efficiency, identifying millions in misallocated capital.`, 
        faqs: [
            { question: 'What is an R&D Capital Audit in plain English?', answer: 'A forensic audit that shows CEOs, CFOs, and boards where engineering money is leaking and how to reallocate budget toward high-margin growth.' }, 
            { question: 'How long does an audit take?', answer: 'Standard forensic assessments take 2 weeks and deliver board-ready findings with actionable financial recommendations.' }
        ], 
        relatedTerms: ['product-debt-index', 'technical-insolvency-date', 'innovation-tax', 'aper-metric'], 
        relatedTools: [{ name: 'Product Debt Index Calculator', url: '/tools/pdi' }] 
    },
    { 
        slug: 'retry-inflation', 
        title: 'Retry Inflation', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `Retry Inflation is the rapid multiplication of cloud and AI compute costs when autonomous agentic loops or backend APIs fail silently and retry in an unmonitored loop. What normal people call this: why your monthly OpenAI or Anthropic bill suddenly jumped 40% even though website visitors did not change at all.\n\nIn traditional software, retries are virtually free. In LLM systems, every retry resends the entire conversation history, system prompt, and context documents. A 3-retry backoff on a 15,000-token prompt burns 45,000 extra tokens on a single failure.\n\nWithout hard cost caps and circuit breakers, unmonitored retry loops can burn thousands of dollars in hours.`, 
        whyItMatters: `Retry inflation is the primary cause of surprise AI cloud invoices. Setting deterministic retry budgets and proxy cost ceilings stops runaway spending while maintaining reliability.`, 
        faqs: [
            { question: 'What causes retry inflation?', answer: 'Automated software libraries attempting to self-heal JSON parsing errors or model timeouts by quietly retrying the entire prompt multiple times in the background.' }, 
            { question: 'How do you fix retry inflation?', answer: 'Cap automated retries at 1, use semantic caching, set hard dollar ceilings per session, and switch to cheaper fallback models on timeout.' }
        ], 
        relatedTerms: ['ai-unit-economics', 'cost-of-predictivity', 'aueb-framework', 'exogram-runtime-proxy'], 
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }] 
    },
    { 
        slug: 'synthetic-spec-inflation', 
        title: 'Synthetic Spec Inflation', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `Synthetic Spec Inflation is the explosion of massive, AI-generated product requirement documents that look polished but lack real customer validation. What normal people call this: product managers using AI to write 30-page spec documents in 20 minutes that engineering spends three months building for features nobody wants.\n\nBecause generating text with LLMs is now frictionless, teams mistake document length for strategic thinking. Producing 5,000 words of plausible corporate requirements takes seconds, but reading, designing, coding, and testing that spec costs tens of thousands in engineering payroll.`, 
        whyItMatters: `Synthetic spec inflation wastes high-cost software engineering capacity on unvalidated feature factories. Enforcing strict 1-page limits restores rigorous customer discovery.`, 
        faqs: [
            { question: 'What is Synthetic Spec Inflation in plain English?', answer: 'The problem where AI makes it so easy to write long product specs that teams build massive features without ever checking if customers actually want them.' }, 
            { question: 'How do you prevent spec bloat?', answer: 'Cap initial product specs at 1 page (under 500 words) and mandate at least three verified customer interview quotes before engineering estimation.' }
        ], 
        relatedTerms: ['aper-metric', 'innovation-tax', 'product-debt-index'], 
        relatedTools: [{ name: 'APER Calculator', url: '/tools/aper' }] 
    },
    { 
        slug: 'api-janitor-trap', 
        title: 'The API Janitor Trap', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The API Janitor Trap occurs when high-paid software engineers spend the majority of their sprint capacity babysitting AI prompts, fixing fragile vector pipelines, and debugging model provider updates instead of building core product features. What normal people call this: your $200,000 developers spending all day tweaking adjectives in system prompts instead of writing software.\n\nCompanies often classify this work as innovative R&D. In reality, it is ongoing operational maintenance caused by lack of deterministic runtime validation.`, 
        whyItMatters: `The API Janitor Trap destroys engineering morale and slows feature delivery. Senior developers get burned out playing thesaurus with language models instead of solving durable systems problems.`, 
        faqs: [
            { question: 'What is an API Janitor?', answer: 'A software engineer whose time is consumed by manual prompt adjustments, fixing broken JSON parsers, and patching third-party AI wrapper quirks.' }, 
            { question: 'How do you liberate engineering time from prompt babysitting?', answer: 'Decouple prompt management from application code, use schema validation libraries (Pydantic/Zod), and enforce runtime proxy guardrails.' }
        ], 
        relatedTerms: ['product-debt-index', 'retry-inflation', 'model-version-depreciation-cliff'], 
        relatedTools: [{ name: 'Product Debt Index Calculator', url: '/tools/pdi' }] 
    },
    { 
        slug: 'zombie-feature-drain', 
        title: 'Zombie Feature Inference Drain', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `Zombie Feature Inference Drain is the ongoing cloud and vector database cost generated by low-usage AI features that were launched during the hype cycle and abandoned. What normal people call this: paying thousands of dollars a month for vector databases and cloud GPUs for an AI feature that only 15 people actually use.\n\nBecause vector search (RAG) systems continuously embed customer records in the background, companies pay ongoing cloud costs to index data that nobody ever queries.`, 
        whyItMatters: `Zombie features quietly eat cloud margins while internal politics prevent anyone from admitting the feature failed. Enforcing automated sunset rules frees up cloud budget.`, 
        faqs: [
            { question: 'What is a Zombie AI Feature?', answer: 'An AI feature with almost no active users that continues to generate thousands of dollars in background cloud, embedding, and vector database expenses.' }, 
            { question: 'How do you stop zombie feature costs?', answer: 'Switch from continuous pre-indexing to on-demand indexing, and deprecate features that fail to achieve 15% active user engagement within 60 days.' }
        ], 
        relatedTerms: ['aueb-framework', 'retry-inflation', 'gross-margin'], 
        relatedTools: [{ name: 'SLM vs API Calculator', url: '/tools/slm-vs-api' }] 
    },
    { 
        slug: 'shadow-ai-vendor-tax', 
        title: 'Shadow AI Vendor Tax', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Shadow AI Vendor Tax represents the hidden financial waste and compliance liability when employees secretly expense unapproved AI tools on corporate credit cards. What normal people call this: finding out your employees are expensing 20 different AI tools and pasting confidential customer contracts into them without IT knowing.\n\nWhile IT reports 3 to 5 approved AI tools, corporate audits routinely uncover 15 to 25 shadow subscriptions, creating duplicated license fees, lost volume discounts, and massive regulatory exposure.`, 
        whyItMatters: `Shadow AI is the fastest way to fail enterprise security reviews and GDPR/SOC2 audits. Consolidating teams into a single enterprise account eliminates risk and cuts software spend.`, 
        faqs: [
            { question: 'What is Shadow AI?', answer: 'Unapproved AI tools used by employees for work tasks without IT, security, or legal authorization.' }, 
            { question: 'How do you stop shadow AI?', answer: 'Do not issue blanket bans. Provide a sanctioned, enterprise-grade AI portal with zero-data-retention guarantees so employees do not need to sneak around IT.' }
        ], 
        relatedTerms: ['board-ai-metric-theater', 'aueb-framework'], 
        relatedTools: [{ name: 'Shadow AI Scanner', url: '/tools/shadow-ai' }] 
    },
    { 
        slug: 'board-ai-metric-theater', 
        title: 'Board AI Metric Theater', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `Board AI Metric Theater is the practice of presenting superficial adoption stats (like prompt counts, code commits, and PRD volume) to the board of directors without demonstrating any tangible impact on profit margins, revenue, or delivery speed. What normal people call this: showing flashy AI slides to investors that sound impressive but mean nothing to the bottom line.\n\nSophisticated investors and private equity firms increasingly reject vanity metrics and demand proof of gross margin expansion and revenue generated per engineer.`, 
        whyItMatters: `Board AI Metric Theater creates a false sense of security. When leadership tracks activity instead of financial return, margin decay and technical debt accumulate undetected.`, 
        faqs: [
            { question: 'What is Board AI Metric Theater?', answer: 'Using vanity stats like number of AI prompts or lines of code generated to make the company look innovative while ignoring financial returns.' }, 
            { question: 'What AI metrics should you report to your board?', answer: 'Net AI Gross Margin, Revenue per Engineer (APER), and Incident Rate per Release.' }
        ], 
        relatedTerms: ['aper-metric', 'ev-se-framework', 'aueb-framework'], 
        relatedTools: [{ name: 'Board Risk Scorecard', url: '/tools/board-risk-scorecard' }] 
    },
    { 
        slug: 'model-version-depreciation-cliff', 
        title: 'Model Version Depreciation Cliff', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Model Version Depreciation Cliff is the sudden technical breakage that happens when an AI vendor retires or silently updates an underlying model checkpoint. What normal people call this: when OpenAI or Anthropic updates a model, and suddenly your customer reports break or give completely different answers.\n\nUnlike traditional databases, AI models break silently: returning subtly different tone, looser schema adherence, or hallucinations without throwing explicit runtime error codes.`, 
        whyItMatters: `Model deprecations force engineering teams into emergency prompt rewrites. Pinning dated model snapshots and building automated evaluation suites prevents unexpected production failures.`, 
        faqs: [
            { question: 'What causes model version breakage?', answer: 'Relying on moving alias tags like latest rather than pinning static, dated model checkpoints.' }, 
            { question: 'How do you protect your app from model updates?', answer: 'Pin dated model versions, enforce strict schema validation, and test new models against 50 gold-standard customer queries before upgrading.' }
        ], 
        relatedTerms: ['retry-inflation', 'api-janitor-trap', 'product-debt-index'], 
        relatedTools: [{ name: 'Product Debt Index Calculator', url: '/tools/pdi' }] 
    },
    { 
        slug: 'exogram-runtime-proxy', 
        title: 'Exogram Runtime Architecture', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `Exogram is an intelligent runtime proxy and cost-governance substrate that sits between production software applications and foundation AI models (OpenAI, Anthropic, Google). What normal people call this: a smart traffic controller and safety guardrail that stops runaway AI bills, catches bad answers, and keeps your software running when models glitch.\n\nExogram enforces deterministic budget caps, prevents silent retry spirals, handles automatic fallback to cheaper models on latency spikes, and guarantees zero customer data leakage.`, 
        whyItMatters: `Connecting applications directly to raw AI APIs is like running a database without a firewall. Exogram provides the architectural guardrails required to run AI features profitably at enterprise scale.`, 
        faqs: [
            { question: 'What is Exogram in plain English?', answer: 'An intelligent runtime proxy that sits between your app and AI providers to stop runaway token bills, enforce rate limits, and catch hallucinations before customers see them.' }, 
            { question: 'How does Exogram cut AI costs?', answer: 'By caching duplicate requests, terminating infinite retry loops, and automatically routing simple tasks to smaller, cheaper models.' }
        ], 
        relatedTerms: ['retry-inflation', 'aueb-framework', 'model-version-depreciation-cliff'], 
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }] 
    },
    { 
        slug: 'four-tiers-of-autonomy', 
        title: 'Four Tiers of Autonomy', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Four Tiers of Autonomy is a diagnostic model for evaluating employee maturity, ownership, and problem-solving capability. It establishes a four-tier hierarchy that every professional should strive to climb, regardless of role or seniority.\n\nTier 1 (The Reporter): Identifies an issue, escalates it, and expects management to resolve it.\nTier 2 (The Solver): Identifies an issue, investigates the root cause, and resolves the immediate problem independently.\nTier 3 (The Communicator): Identifies and resolves the issue, then proactively manages communications to all affected stakeholders.\nTier 4 (The Architect / The Apex): Identifies, resolves, and communicates the issue, then collaborates cross-functionally to design a permanent prevention mechanism, actively monitoring the fix over subsequent weeks.\n\nTrue leadership requires coaching employees to systematically ascend this hierarchy.`, 
        whyItMatters: `Most organizations are bottlenecked by Tier 1 and Tier 2 employees, forcing management to constantly fight fires rather than focus on strategy. High-performing cultures coach teams to operate at Tier 4, transforming unpredictable issues into systemic resilience.`, 
        faqs: [
            { question: 'What are the Four Tiers of Autonomy?', answer: 'A four-stage problem-solving hierarchy: 1. Escalate the problem. 2. Resolve the problem. 3. Resolve and communicate. 4. Resolve, communicate, and permanently prevent the problem from recurring.' }, 
            { question: 'Why is Tier 4 considered the Apex?', answer: 'Tier 4 employees do not just fix immediate symptoms; they collaborate across departments to design permanent prevention mechanisms that eliminate the class of error entirely.' }
        ], 
        relatedTerms: ['intelligence-problem-solving-continuum', 'double-diamond-career-trajectory'], 
        relatedTools: [] 
    },
    { 
        slug: 'double-diamond-career-trajectory', 
        title: 'Double Diamond Career Trajectory', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Double Diamond Career Trajectory is a visual and structural framework mapping the lifecycle of professional growth from Individual Contributor (IC) to Leadership across any industry.\n\nDiamond 1 (The IC Journey): The career starts narrow at the bottom (low skill and experience), widens as the employee gains functional skills, assumes more responsibility, and executes efficiently. It then narrows again as the IC hits a skill or organizational plateau.\n\nDiamond 2 (The Leadership Reset): When promoted to management, the employee starts at the bottom of the second diamond: narrow again, possessing zero leadership skills despite prior IC expertise. As they navigate trials, tribulations, mistakes, and learning, the diamond widens, leading to larger teams and greater organizational impact, until they hit the next executive plateau.\n\nThe framework illustrates the fundamental truth that skills from Diamond 1 do not automatically transfer to Diamond 2.`, 
        whyItMatters: `It normalizes the Leadership Reset. Many top individual contributors struggle in management because they assume IC skills carry over directly to leadership. This framework provides vocabulary for navigating the uncomfortable transition from executing work to scaling people.`, 
        faqs: [
            { question: 'What is the Double Diamond Career Trajectory?', answer: 'A framework showing that moving from individual contributor to leadership requires starting over at the bottom of a new diamond to build management skills from scratch.' }, 
            { question: 'Why do employees plateau at the top of a diamond?', answer: 'They have mastered skills for that specific tier of work. To grow further, they must embrace being a beginner again at the next level of leadership.' }
        ], 
        relatedTerms: ['four-tiers-of-autonomy', 'intelligence-problem-solving-continuum'], 
        relatedTools: [] 
    },
    { 
        slug: 'intelligence-problem-solving-continuum', 
        title: 'Intelligence Problem-Solving Continuum', 
        tier: 'pillar', 
        category: 'Richard Ewing Frameworks', 
        definition: `The Intelligence Problem-Solving Continuum is an operational definition of applied intelligence in a corporate environment. True organizational intelligence is not measured by IQ or domain knowledge; it is the ability to navigate three sequential phases of friction in any field.\n\nPhase 1: Problem Identification (seeing invisible friction and naming the dysfunction).\nPhase 2: Problem Mitigation (stopping the bleeding, adapting, and pivoting in real time).\nPhase 3: Problem Prevention (designing root-cause systemic fixes so the problem never happens again).\n\nThis continuum rolls critical thinking, root-cause analysis, adaptation, and pivoting into a single measurable trajectory.`, 
        whyItMatters: `It redefines talent in an organization. Employees who can execute all three phases autonomously are the most valuable assets in any company. Organizations that optimize for this continuum build inherently resilient cultures.`, 
        faqs: [
            { question: 'What is the Intelligence Problem-Solving Continuum?', answer: 'An operational definition of intelligence focused on three stages: Problem Identification, Problem Mitigation, and Problem Prevention.' }, 
            { question: 'How does this relate to critical thinking?', answer: 'It proves critical thinking through concrete action. Anyone can complain about a problem, but true operators stop the bleeding and design a systemic prevention.' }
        ], 
        relatedTerms: ['four-tiers-of-autonomy', 'double-diamond-career-trajectory'], 
        relatedTools: [] 
    },
    {
        slug: 'portfolio-intelligence-architecture',
        title: 'One Intelligence Architecture (Three Levels of Application)',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Portfolio Intelligence Architecture is the single technological and economic framework that connects Exogram, CareerWin, and RichardEwing.io. What normal people call this: how Richard Ewing's software products and advisory services fit together as one connected system instead of separate side projects.\n\nIt operates across five foundational layers: (1) The Ledger for immutable truth tracking, (2) Context for maintaining runtime environment without degradation, (3) Meaning for semantic schema stability across changing models, (4) Inference Management for controlling token costs and latency, and (5) Admissibility for deterministic execution guardrails.\n\nThis architecture is deployed at three levels: (1) Exogram as the core enterprise runtime engine, (2) CareerWin as the first vertical application to human work and career evidence, and (3) RichardEwing.io as the executive advisory practice applying the same governance principles to company balance sheets.`,
        whyItMatters: `It unifies runtime software controls with corporate capital allocation. Whether evaluating human career progression or autonomous AI agents, the problem is identical: verifying ground truth and stopping unauthorized or hallucinated actions before damage occurs.`,
        faqs: [
            { question: 'What is the Portfolio Intelligence Architecture in plain English?', answer: 'A single five-layer system (Ledger, Context, Meaning, Inference, Admissibility) that powers Exogram for enterprise AI safety, CareerWin for human career verification, and Richard Ewing advisory for corporate AI budgets.' },
            { question: 'Why does CareerWin share the same engine as Exogram?', answer: 'Because both solve the problem of unverified assertions. Exogram stops AI agents from hallucinating code; CareerWin stops resumes from trading in unverified buzzwords by checking admissible work evidence.' }
        ],
        relatedTerms: ['exogram-runtime-proxy', 'action-admissibility', 'context-rot', 'aueb-framework'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }]
    },
    {
        slug: 'payroll-absorbed-ai-costs',
        title: 'Payroll-Absorbed AI Costs',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Payroll-Absorbed AI Costs are the invisible engineering salaries burned when senior developers spend hours validating, debugging, and babysitting flaky AI outputs instead of building products. What normal people call this: the hidden fortune you spend on engineering payroll because your developers are stuck reviewing messy AI code and tweaking system prompts all day.\n\nWhile corporate FP&A reports track visible monthly cloud invoices and token bills, payroll-absorbed costs routinely exceed raw API costs by 5x to 10x. If a senior engineer earning $200,000 spends 5 hours a week cleaning up AI-generated bugs, that is a $25,000 hidden annual tax per engineer.`,
        whyItMatters: `Tracking raw token spend without accounting for developer validation hours produces a false illusion of productivity. Real AI ROI requires measuring total verification overhead.`,
        faqs: [
            { question: 'What are Payroll-Absorbed AI Costs in plain English?', answer: 'The high-dollar engineering salaries lost when developers have to constantly babysit, fix, and review flaky AI code rather than shipping new features.' },
            { question: 'How do you calculate payroll-absorbed AI costs?', answer: 'Multiply the hours per week engineers spend reviewing and fixing AI code by their hourly loaded payroll rate, then add that to your cloud token invoices.' }
        ],
        relatedTerms: ['api-janitor-trap', 'product-debt-index', 'innovation-tax', 'aper-metric'],
        relatedTools: [{ name: 'Product Debt Index Calculator', url: '/tools/pdi' }]
    },
    {
        slug: 'ai-pilot-purgatory',
        title: 'AI Pilot Purgatory',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `AI Pilot Purgatory is the organizational deadlock where enterprise AI initiatives remain stuck in perpetual demo mode without ever reaching profitable production. What normal people call this: spending hundreds of thousands of dollars on flashy AI experiments that look cool in a boardroom demo but can never be deployed to real customers because they are too buggy, slow, or expensive.\n\nIn 2026, research indicates up to 95% of enterprise generative AI pilots fail to deliver measurable P&L return. The root cause is lack of upfront unit economics modeling and absence of hard kill criteria before engineering begins.`,
        whyItMatters: `CFOs and boards are shutting down unmeasured AI pilots. Escaping pilot purgatory requires defining hard financial kill criteria, calculating cost per useful output, and installing deterministic execution controls before scaling.`,
        faqs: [
            { question: 'What is AI Pilot Purgatory in plain English?', answer: 'The trap where companies spend huge budgets building AI demos that can never actually launch to paying customers because they are unreliable or lose money on every query.' },
            { question: 'How do you get an AI pilot into real production?', answer: 'Install hard token cost caps, measure net AI margin per customer, and enforce pre-execution guardrails so the model cannot cause outages.' }
        ],
        relatedTerms: ['board-ai-metric-theater', 'aueb-framework', 'technical-insolvency-date', 'retry-inflation'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }, { name: 'AI ROI Timeline Simulator', url: '/tools/ai-roi-timeline' }]
    }
];
