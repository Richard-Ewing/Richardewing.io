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
    },
    {
        slug: 'frontier-model-economics-framework',
        title: 'Frontier Model Economics Framework',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Frontier Model Economics is an analytical framework establishing that frontier AI represents an expensive, moving empirical threshold rather than a permanent category or static map. What normal people call this: knowing when a task actually needs an expensive, cutting-edge AI model and when using one is just burning money on work that cheap, ordinary software can do for pennies.\n\nWhile everyday AI automates structured, narrow tasks at near-zero marginal cost, frontier systems are deployed when tasks present high ambiguity, multi-step execution paths, conflicting contracts, and code generation across unprogrammed domains.\n\nWeighing closed commercial APIs against open-weight private deployment requires balancing $78M to $191M training compute floors against compounding multi-step inference costs and strict operational authority limits. Enterprises that default to frontier models for simple classification suffer massive gross margin compression, while teams that underestimate private cluster infrastructure overhead face severe capital misallocation.`,
        whyItMatters: `Prevents organizations from overpaying for frontier reasoning on trivial automation tasks or underestimating the infrastructure and inference compounding costs of deploying frontier models into multi-agent workflows.`,
        howToMeasure: `1. Audit task ambiguity across customer workflows.\n2. Model multi-turn compounding inference costs against single-turn prompt baselines.\n3. Benchmark private cluster hosting vs. API tokens with the AUEB Calculator.\n4. Deploy dynamic model routing to reserve frontier reasoning for high-ambiguity exceptions.`,
        faqs: [
            { question: 'What is Frontier Model Economics in plain English?', answer: 'A financial framework that tells companies when to pay for expensive leading-edge AI models versus when to use cheap, everyday automation tools.' },
            { question: 'When should you use a frontier model?', answer: 'Only when the problem has high ambiguity and edge cases that break cheaper everyday software, such as conflicting enterprise contracts or legacy architectural refactoring.' }
        ],
        relatedTerms: ['aueb-framework', 'the-turing-tax', 'synthetic-cogs', 'slm-vs-api-arbitrage'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }]
    },
    {
        slug: 'persistence-vs-authority-framework',
        title: 'Persistence vs. Authority Framework',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Persistence vs. Authority is a systems governance principle distinguishing runtime execution duration from state-altering permission scope. What normal people call this: understanding that just because an AI agent can run in the background for three days without crashing does not mean it should have permission to rewrite your company database or send emails to your clients.\n\nPersistence measures how long an AI agent can execute unattended across background servers and workspace applications (such as Gemini Spark); Authority measures what records, databases, financial ledgers, and external communications the software is authorized to modify independently.\n\nConflating persistence with authority allows flawed assumptions to silently spread across connected systems, creating compounding state drift and forensic recovery nightmares. Operating safely requires narrow read triggers, deterministic write allowlists, and unified rollback mechanics.`,
        whyItMatters: `Extending agent runtime without strict write boundaries creates silent distributed failures. While terminal-interactive tools (Claude Code) contain blast radius through human presence, unattended background agents require mechanical write allowlists and deterministic rollbacks.`,
        howToMeasure: `1. Audit persistent service account tokens and revoke wildcard write scopes.\n2. Separate background read triggers from state-mutating API endpoints.\n3. Measure state drift risk thresholds across multi-turn agent loops using the Agentic Drift Matrix.\n4. Deploy cryptographic state-hashing to intercept unauthorized write attempts.`,
        faqs: [
            { question: 'What is Persistence vs. Authority in plain English?', answer: 'The rule that running an AI agent unattended for hours does not give it permission to change critical business records or spend money without human sign-off.' },
            { question: 'Why are unattended background agents dangerous?', answer: 'Because subtle errors in reasoning compound silently over hours of background execution, corrupting databases and external systems before humans notice.' }
        ],
        relatedTerms: ['agentic-drift', 'shadow-agents', 'deterministic-control-layer', 'the-transaction-that-succeeds'],
        relatedTools: [{ name: 'Agentic Drift Risk Matrix', url: '/tools/agentic-drift-matrix' }]
    },
    {
        slug: 'supervisory-review-queue-framework',
        title: 'Supervisory Review Queue Framework',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Supervisory Review Queue is an engineering productivity framework demonstrating that delegating tasks to autonomous AI agents does not eliminate workloads, but shifts human labor into an air traffic control supervisory review queue. What normal people call this: why hiring a team of AI bots to write your code or manage your to-do list often leaves you more exhausted because you spend all day reading, verifying, and fixing slightly broken work.\n\nWhile agents deliver immense leverage on bounded, mechanically verifiable tasks (CI monitoring, DOM accessibility audits, syntax validation), they fail silently with perfect syntax during complex architectural refactors and struggle with physical reality collisions and interpersonal nuance.\n\nReal leverage requires four operational laws: start with read-only triggers, enforce narrow definitions of done, require human approval on external actions, and treat all output as junior drafts.`,
        whyItMatters: `Unbounded agent delegation creates severe review fatigue and silent architectural regressions. Restricting agentic PRs to bounded tasks with mechanical pass/fail criteria reclaims senior engineering capacity.`,
        howToMeasure: `1. Track senior engineer review hours spent debugging plausible AI pull requests.\n2. Measure review cycle time and queue inflation with the Code Review Bottleneck Calculator.\n3. Enforce the 4 operating rules across all automated workflows.\n4. Deploy automated compiler gates to verify syntax, types, and tests prior to human review.`,
        faqs: [
            { question: 'What is the Supervisory Review Queue in plain English?', answer: 'The hidden trap where delegating work to AI agents replaces your to-do list with a massive pile of junior drafts you have to carefully verify.' },
            { question: 'How do you get real productivity out of AI agents?', answer: 'Assign them narrow, bounded chores with clear pass/fail criteria (like running test suites), and never delegate complex strategy or un-gated architectural changes.' }
        ],
        relatedTerms: ['vibe-coding-debt', 'induced-demand-in-software-delivery', 'payroll-absorbed-ai-costs', 'aper-metric'],
        relatedTools: [{ name: 'AI Code Review Bottleneck Calculator', url: '/tools/code-review-bottleneck-calc' }]
    },
    {
        slug: 'the-transaction-that-succeeds-framework',
        title: 'The Transaction That Succeeds Framework',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Transaction That Succeeds is an enterprise AI governance failure mode where an automated agent transaction completes with perfect technical execution (glowing green operations dashboards, 240ms latency, zero server errors), but completely violates internal business policy, financial controls, or procurement rules. What normal people call this: when an AI bot successfully executes an action without crashing your servers, but gives away an unauthorized discount, violates a law, or approves an illegal purchase order.\n\nBecause technical monitoring verifies mechanics rather than business authorization, enterprises must enforce the 4 Pillars of Agent Governance: Monitoring, Auditability, Authorization, and Accountability.\n\nWith Gartner forecasting 40% of enterprise agents decommissioned by 2027 due to post-incident governance gaps, organizations must decouple technical uptime from business permissioning.`,
        whyItMatters: `Traditional IT monitoring alarms on broken systems; AI creates transactions that succeed technically while failing legally and financially. Enterprises must install deterministic signing limits and demand answers to the 6 executive procurement questions.`,
        howToMeasure: `1. Audit automated execution logs against corporate signing and authorization matrices.\n2. Implement the 4 Pillars of Agent Governance: Monitoring, Auditability, Authorization, Accountability.\n3. Demand the 6 Executive Procurement Questions for all third-party AI agents.\n4. Score corporate fiduciary risk using the Board AI Governance Scorecard.`,
        faqs: [
            { question: 'What is The Transaction That Succeeds in plain English?', answer: 'An AI action that runs with zero technical errors on server dashboards, but completely breaks corporate rules, spending limits, or legal compliance.' },
            { question: 'How do you prevent silent policy failures by AI agents?', answer: 'Deploy runtime authorization boundaries with hard financial signing caps and immutable audit trails outside the model cognition layer.' }
        ],
        relatedTerms: ['board-ai-metric-theater', 'shadow-agents', 'persistence-vs-authority', 'sovereign-ai'],
        relatedTools: [{ name: 'Board AI Governance Scorecard', url: '/tools/board-risk-scorecard' }]
    },
    {
        slug: 'innovation-tax',
        title: 'Innovation Tax',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Innovation Tax is the percentage of software R&D spend consumed by unrecorded maintenance, architectural drift, and technical debt rather than net-new customer value. Introduced by Richard Ewing in CIO.com. While executive leadership assumes 70% of engineering payroll builds new capability, forensic audits reveal that 40% to 60% is silently diverted into patching brittle systems, maintaining zombie features, and nursing legacy integrations.\n\nWhat normal people call this: paying full price for software innovation while receiving maintenance disguised as progress.`,
        whyItMatters: `The Innovation Tax turns high-growth software investments into operational dead weight. Without forensic audit, companies overstate their capitalization rates and deceive investors on true R&D efficiency.`,
        howToMeasure: `1. Audit sprint allocations against ASC 350-40 criteria.\n2. Calculate the ratio of bug-fix and maintenance tickets disguised as feature work.\n3. Run the Innovation Tax Calculator at richardewing.io/tools/innovation-tax-calculator.`,
        faqs: [
            { question: 'What is the Innovation Tax in plain English?', answer: 'The hidden share of engineering payroll that gets swallowed by fixing broken code and nursing old systems instead of building new product features.' },
            { question: 'How do you calculate your Innovation Tax?', answer: 'Compare claimed innovation spending on sprint boards against actual time spent on maintenance and bug fixes using the Innovation Tax Calculator.' }
        ],
        relatedTerms: ['r-and-d-capitalization', 'product-debt-index', 'technical-insolvency-date', 'aper-metric'],
        relatedTools: [{ name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator' }],
        relatedArticles: [{ title: 'The Innovation Tax: Is Your R&D Actually Just OpEx?', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html' }]
    },
    {
        slug: 'technical-insolvency-date',
        title: 'Technical Insolvency Date',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Technical Insolvency Date is the projected calendar date at which an engineering organization's compounding technical debt consumes 100% of available developer hours, reducing net-new feature delivery to absolute zero. Formulated by Richard Ewing. Borrowed from corporate insolvency: just as financial insolvency occurs when liabilities exceed assets, technical insolvency occurs when maintenance overhead completely eclipses development bandwidth.\n\nWhat normal people call this: the day your engineering team becomes completely paralyzed by their own mess, unable to ship anything new ever again.`,
        whyItMatters: `Passing the Technical Insolvency Date means every additional engineer hired is consumed by coordination overhead and bug triage. Product roadmaps freeze, competitors pull ahead, and enterprise valuation multiples collapse during acquisition due diligence.`,
        howToMeasure: `1. Plot historical velocity trends against maintenance ticket volume.\n2. Measure the degradation of feature lead time over trailing 12 months.\n3. Project the intersection where maintenance velocity equals total team capacity.`,
        faqs: [
            { question: 'What is the Technical Insolvency Date in plain English?', answer: 'The exact date when bad code and technical debt will consume 100% of your engineers time, meaning you can never release a new feature again.' },
            { question: 'Can a company recover from Technical Insolvency?', answer: 'Yes, through surgical code retirement (Sunset Protocol) and debt remediation, but it requires stopping new feature work and deleting non-performing code.' }
        ],
        relatedTerms: ['product-debt-index', 'innovation-tax', 'sunset-protocol', 'technical-debt'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
        relatedArticles: [{ title: 'The Technical Insolvency Date', url: '/articles/technical-insolvency-date' }]
    },
    {
        slug: 'air-traffic-control-tax',
        title: 'Air Traffic Control Tax',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Air Traffic Control Tax is the cognitive overhead and calendar drag created when autonomous AI agents shift human developers and managers from direct execution into supervisory audit queues. Coined by Richard Ewing in Built In. While agents produce code or drafts in seconds, humans spend minutes reading, verifying, sanity-checking, and correcting slightly plausible but fundamentally flawed outputs.\n\nWhat normal people call this: why having AI bots do your chores leaves you more exhausted because you spend the entire day proofreading their junior work.`,
        whyItMatters: `Delegation does not automatically yield leverage. When verification time exceeds manual writing time, autonomous agents create negative productivity carry.`,
        faqs: [
            { question: 'What is the Air Traffic Control Tax in plain English?', answer: 'The mental fatigue and wasted hours spent monitoring, checking, and correcting AI agents that do tasks almost right.' },
            { question: 'How do you minimize the Air Traffic Control Tax?', answer: 'Only give agents tasks with deterministic, automated pass/fail verification (like compiler checks or DOM contrast tests) and avoid unconstrained creative delegation.' }
        ],
        relatedTerms: ['supervisory-review-queue', 'silent-syntax-failure', 'review-debt', 'vibe-coding-debt'],
        relatedTools: [{ name: 'AI Code Review Bottleneck Calculator', url: '/tools/code-review-bottleneck-calc' }],
        relatedArticles: [{ title: 'I Put AI Agents in Charge of My To-Do List', url: 'https://builtin.com/articles/ai-agents-to-do-list' }]
    },
    {
        slug: 'silent-syntax-failure',
        title: 'Silent Syntax Failure',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `A Silent Syntax Failure is an insidious failure mode in autonomous software engineering where AI-generated code compiles with zero errors, passes basic type checks, and follows standard formatting, but silently violates domain rules, breaks cross-service contracts, or corrupts background financial ledgers. Analyzed by Richard Ewing in Built In. The code looks flawless on a quick pull-request inspection, but is functionally toxic in production.\n\nWhat normal people call this: code that compiles perfectly with no red squiggly lines, but quietly destroys your business logic behind the scenes.`,
        whyItMatters: `Standard CI pipelines test syntax and unit mocks, not domain coherence. Silent syntax failures slip past traditional automated gates and corrupt data stores before monitoring triggers alerts.`,
        faqs: [
            { question: 'What is a Silent Syntax Failure in plain English?', answer: 'When an AI writes code that runs without any crash or syntax error, but breaks an unwritten business rule or corrupts a database ledger.' },
            { question: 'Why does traditional CI miss Silent Syntax Failures?', answer: 'Compilers only verify grammar and type contracts. They do not know corporate business policies or cross-system ledger rules.' }
        ],
        relatedTerms: ['deterministic-execution-control', 'systems-governor', 'the-transaction-that-succeeds'],
        relatedArticles: [{ title: 'I Put AI Agents in Charge of My To-Do List', url: 'https://builtin.com/articles/ai-agents-to-do-list' }]
    },
    {
        slug: 'synthetic-cogs',
        title: 'Synthetic COGS',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Synthetic COGS describes variable runtime compute costs (LLM token calls, vector database queries, multi-agent retry loops) misclassified as fixed cloud hosting instead of Cost of Goods Sold. Formulated by Richard Ewing across CIO.com and Built In. Because AI features scale linearly or exponentially with customer usage, treating inference as overhead masks margin collapse and produces deceptive 85% gross margin metrics that are actually sub-50% in reality.\n\nWhat normal people call this: pretending your massive AI token bill is just general IT overhead instead of acknowledging it costs you real money every single time a user clicks a button.`,
        whyItMatters: `Misclassifying Synthetic COGS blinds executive leadership to the point where power users become margin-negative liabilities.`,
        faqs: [
            { question: 'What are Synthetic COGS in plain English?', answer: 'The direct API and GPU compute bills you pay every time an AI feature runs for a customer, which must be accounted for as direct cost of sales.' },
            { question: 'Why does Synthetic COGS break traditional SaaS?', answer: 'Traditional software has zero marginal cost per user click. AI features have variable per-query costs that destroy margins if bundled into flat subscriptions.' }
        ],
        relatedTerms: ['ai-unit-economics', 'cost-of-predictivity', 'variable-cost-of-intelligence', 'aueb-framework'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        relatedArticles: [{ title: 'Your Claude API Bill is Higher Than Your Revenue', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }]
    },
    {
        slug: 'semantic-caching',
        title: 'Semantic Caching',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `Semantic Caching is an infrastructure optimization technique where AI query intents and vector embeddings are stored and resolved at the network edge before dispatching calls to commercial foundation models. Published by Richard Ewing in The AI Economist. Replaces expensive round-trip inference ($0.03-$0.15 per query) with sub-millisecond similarity lookups, reducing model API spend by 40% to 75% on repetitive enterprise workflows.\n\nWhat normal people call this: remembering the answers to similar questions so you do not have to pay OpenAI or Anthropic five cents every time someone asks the same thing.`,
        whyItMatters: `Eliminates redundant calls to external LLM providers and drastically cuts inference latency without degrading answer quality.`,
        faqs: [
            { question: 'What is Semantic Caching in plain English?', answer: 'A smart cache that recognizes when two different users are asking the same question in different words, serving the saved answer without paying for a new AI model call.' },
            { question: 'How much money does Semantic Caching save?', answer: 'Between 40% and 75% of foundation model API costs for enterprise support, search, and knowledge retrieval workloads.' }
        ],
        relatedTerms: ['synthetic-cogs', 'ai-unit-economics', 'slm-repatriation'],
        relatedArticles: [{ title: 'Semantic Caching Playbook for Enterprise LLMs', url: 'https://theaieconomist.beehiiv.com/p/semantic-caching-playbook-for-enterprise-llms' }]
    },
    {
        slug: 'coordination-tax',
        title: 'Coordination Tax',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `The Coordination Tax is the non-linear communication overhead, cross-functional alignment drag, and meeting inflation that degrades developer output as engineering teams grow. Formulated by Richard Ewing in Mind the Product and Beehiiv. In modern SaaS companies, as headcount doubles, interaction channels scale quadratically, forcing engineers to spend more time syncing than shipping.\n\nWhat normal people call this: spending 30 hours a week in meetings talking about work instead of actually doing the work.`,
        whyItMatters: `Explains why adding engineers to a slowing project makes it slower (Brooks' Law quantified in modern R&D balance sheets).`,
        faqs: [
            { question: 'What is the Coordination Tax in plain English?', answer: 'The massive waste of time spent in status meetings, Slack threads, and alignment syncs when an engineering team gets too large.' }
        ],
        relatedTerms: ['aper-metric', 'innovation-tax', 'feature-bloat-calculus'],
        relatedTools: [{ name: 'APER Calculator', url: '/tools/aper' }]
    },
    {
        slug: 'zombie-code',
        title: 'Zombie Code',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `Zombie Code refers to deprecated, abandoned, or unmaintained code paths that remain active in production environments, continuing to consume compute and security patch cycles without generating user value or revenue. Analyzed by Richard Ewing in Built In and Beehiiv. Unlike dead code that is never reached, zombie code is executed by legacy cron jobs or forgotten integrations, creating silent surface vulnerabilities.\n\nWhat normal people call this: old, abandoned code running on live servers that nobody remembers writing and everyone is terrified to touch.`,
        whyItMatters: `Reclaiming 30% of engineering efficiency often comes down to surgically excising zombie code through rigorous deprecation protocols.`,
        faqs: [
            { question: 'What is Zombie Code in plain English?', answer: 'Forgotten software features that still run in production and consume server resources, but produce zero value for customers.' }
        ],
        relatedTerms: ['sunset-protocol', 'zombie-features', 'technical-debt'],
        relatedArticles: [{ title: 'Zombie Code Remediation: Reclaiming 30% R&D Efficiency', url: 'https://theaieconomist.beehiiv.com/p/zombie-code-remediation-reclaiming-30-percent-rd-efficiency' }]
    },
    {
        slug: 'four-pillars-of-agent-governance',
        title: '4 Pillars of Agent Governance',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The 4 Pillars of Agent Governance is the foundational enterprise risk architecture formulated by Richard Ewing in CIO.com separating technical uptime from business permissioning across four discrete disciplines: 1. Monitoring (mechanical health and latency), 2. Auditability (cryptographic trace of inputs, outputs, and intent), 3. Authorization (runtime verification of financial and policy signing limits), and 4. Accountability (designated human ownership and blast radius insurance).\n\nWhat normal people call this: the four rules a company must put in place so an autonomous AI bot does not spend corporate money or break the law without anyone noticing.`,
        whyItMatters: `Prevents "the transaction that succeeds" where green system dashboards conceal catastrophic unauthorized business decisions.`,
        faqs: [
            { question: 'What are the 4 Pillars of Agent Governance?', answer: 'Monitoring (uptime), Auditability (logs), Authorization (permission limits), and Accountability (human ownership).' },
            { question: 'Why is standard IT monitoring insufficient for AI agents?', answer: 'Standard monitoring only tests whether an API returned status 200. It does not verify whether the action obeyed corporate policy or financial limits.' }
        ],
        relatedTerms: ['the-transaction-that-succeeds', 'systems-governor', 'deterministic-execution-control'],
        relatedTools: [{ name: 'Board AI Governance Scorecard', url: '/tools/board-risk-scorecard' }],
        relatedArticles: [{ title: 'Your AI Agent May Have Made the Decision, but Your Company Owns the Risk', url: 'https://www.cio.com/article/4223955/your-ai-agent-may-have-made-the-decision-but-your-company-owns-the-risk.html' }]
    },
    {
        slug: 'state-drift-in-persistent-agents',
        title: 'State Drift in Persistent Agents',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `State Drift in Persistent Agents is the gradual, compounding deviation between an autonomous background agent's internal model assumptions and the true physical state of production systems. Analyzed by Richard Ewing in Built In. Over hours or days of unattended execution, minor misunderstandings amplify exponentially, culminating in corrupted databases and broken downstream workflows.\n\nWhat normal people call this: when a background AI bot works on your files for hours, slowly misunderstands what it is doing, and ends up wrecking your system before you check on it.`,
        whyItMatters: `Persistence without continuous state verification guarantees eventual data corruption.`,
        faqs: [
            { question: 'What is State Drift in plain English?', answer: 'The way an AI agent running unattended in the background gets progressively more confused about what is happening in reality, creating silent bugs.' }
        ],
        relatedTerms: ['persistence-vs-authority', 'admissibility-allowlist', 'deterministic-execution-control'],
        relatedArticles: [{ title: 'Claude Code vs. Google Gemini Spark: Architectural Divergence', url: 'https://builtin.com/articles/claude-code-vs-google-gemini-spark' }]
    },
    {
        slug: 'enterprise-governance-vacuum',
        title: 'Enterprise Governance Vacuum',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `The Enterprise Governance Vacuum is the organizational void that emerges when enterprises deploy autonomous AI agents without a designated executive role or deterministic control layer bridging technical IT operations, legal compliance, and financial controllership. Coined by Richard Ewing in CIO.com. While CISOs manage perimeters and VPs of Engineering validate deterministic code, no traditional role owns the probabilistic boundary.\n\nWhat normal people call this: the dangerous gap in a company where nobody knows who is actually in charge of keeping AI bots from causing multimillion-dollar disasters.`,
        whyItMatters: `Leads to unmonitored aggregate corporate liability where autonomous software commits company capital without authorization.`,
        faqs: [
            { question: 'What is the Enterprise Governance Vacuum?', answer: 'The organizational gap where neither IT, security, nor legal assumes responsibility for what autonomous AI agents actually decide and execute.' }
        ],
        relatedTerms: ['systems-governor', 'four-pillars-of-agent-governance', 'the-transaction-that-succeeds'],
        relatedArticles: [{ title: 'Your AI Agent May Have Made the Decision, but Your Company Owns the Risk', url: 'https://www.cio.com/article/4223955/your-ai-agent-may-have-made-the-decision-but-your-company-owns-the-risk.html' }]
    },
    {
        slug: 'review-debt',
        title: 'Review Debt',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `Review Debt is the accumulating backlog of plausible, unverified AI-generated code, documentation, and design assets awaiting senior human verification. Coined by Richard Ewing in Built In. While generative models produce pull requests in seconds, human verification bandwidth remains fixed, leading to PR review gridlock and developer burnout.\n\nWhat normal people call this: drowning in a pile of AI-written code that takes longer to proofread than it would have taken to write yourself.`,
        whyItMatters: `Review debt clogs deployment pipelines and turns senior software engineers into exhausted proofreaders.`,
        faqs: [
            { question: 'What is Review Debt in plain English?', answer: 'The massive pile of pull requests generated by AI tools that human engineers do not have time to review, slowing down the entire engineering team.' }
        ],
        relatedTerms: ['air-traffic-control-tax', 'supervisory-review-queue', 'software-factory-overproduction'],
        relatedTools: [{ name: 'AI Code Review Bottleneck Calculator', url: '/tools/code-review-bottleneck-calc' }],
        relatedArticles: [{ title: 'I Put AI Agents in Charge of My To-Do List', url: 'https://builtin.com/articles/ai-agents-to-do-list' }]
    },
    {
        slug: 'ai-volatility-tax',
        title: 'AI Volatility Tax',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The AI Volatility Tax is the financial premium paid by enterprises due to unhedged, fluctuating API token pricing, silent foundation model version updates, and non-deterministic latency spikes. Formulated by Richard Ewing across Built In and CIO.com. When cloud providers adjust underlying model weights or pricing tiers, downstream enterprise agent pipelines suffer margin degradation and unexpected system retries.\n\nWhat normal people call this: getting hit with unexpected cloud bill spikes and broken software whenever OpenAI, Google, or Anthropic pushes a model update behind your back.`,
        whyItMatters: `Turns predictable software operational expenses into unhedged, volatile liabilities.`,
        faqs: [
            { question: 'What is the AI Volatility Tax in plain English?', answer: 'The extra money you waste fixing broken prompts, paying for silent retry loops, and eating margin hits when model providers change their APIs.' }
        ],
        relatedTerms: ['variable-cost-of-intelligence', 'synthetic-cogs', 'aueb-framework'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }]
    },
    {
        slug: 'context-rot',
        title: 'Context Rot',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Context Rot is the progressive degradation of an LLM or autonomous agent's reasoning fidelity as the conversation context window fills with tool-call results, irrelevant history, and noisy data payloads. Formulated by Richard Ewing in Built In. As context grows, models experience lost-in-the-middle attention failure, hallucinate missing instructions, and introduce catastrophic regressions into previously clean code.\n\nWhat normal people call this: why an AI coding assistant gets dumber and starts breaking things the longer you chat with it.`,
        whyItMatters: `Proves that giving an AI agent a bigger context window is often like giving a confused worker a bigger inbox.`,
        faqs: [
            { question: 'What is Context Rot in plain English?', answer: 'The way an AI model loses track of earlier instructions and starts making careless mistakes as the conversation gets too long.' },
            { question: 'How do you prevent Context Rot?', answer: 'Keep context windows lean, enforce strict session hygiene, and run fresh subagents in isolated worktrees rather than maintaining massive conversational threads.' }
        ],
        relatedTerms: ['context-engineering', 'silent-syntax-failure', 'state-drift-in-persistent-agents'],
        relatedArticles: [{ title: 'How to Prevent Memory Loss in AI Applications', url: 'https://theaieconomist.beehiiv.com/p/how-to-prevent-memory-loss-in-ai-applications' }]
    },
    {
        slug: 'shadow-delegation',
        title: 'Shadow Delegation',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `Shadow Delegation is an unauthorized organizational practice where individual developers, product managers, or business operators unofficially delegate sensitive decision-making, code generation, or client data processing to unmonitored AI agents without executive visibility or deterministic audit trails. Coined by Richard Ewing in Built In and CIO.com.\n\nWhat normal people call this: employees secretly using unauthorized ChatGPT or AI bots to write client proposals and company code without telling their boss.`,
        whyItMatters: `Creates invisible corporate risk where confidential intellectual property and customer records are leaked to commercial model providers without IT authorization.`,
        faqs: [
            { question: 'What is Shadow Delegation in plain English?', answer: 'When workers secretly hand off company work to AI bots without permission or security reviews.' }
        ],
        relatedTerms: ['shadow-ai', 'four-pillars-of-agent-governance', 'enterprise-governance-vacuum'],
        relatedTools: [{ name: 'Shadow AI Scanner', url: '/tools/shadow-ai' }]
    },
    {
        slug: 'product-economist',
        title: 'Product Economist',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `The Product Economist is an evolved product management executive archetype championed by Richard Ewing in Mind the Product and Built In. Unlike traditional product managers who optimize for shipped feature velocity and roadmap output, the Product Economist manages gross margin contribution, COGS efficiency, maintenance cost ratios, and R&D capital allocation per feature.\n\nWhat normal people call this: a product leader who actually understands the math of the business and makes sure software features make money instead of burning cash.`,
        whyItMatters: `Transforms PMs from feature factory operators into financial fiduciaries who ensure AI features generate durable net margin rather than cash burn.`,
        faqs: [
            { question: 'What is a Product Economist in plain English?', answer: 'A product manager who treats software features like investments on a balance sheet, managing their profit margins and maintenance costs.' }
        ],
        relatedTerms: ['pl-ownership-for-pms', 'synthetic-cogs', 'feature-bloat-calculus'],
        relatedArticles: [{ title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' }]
    },
    {
        slug: 'r-and-d-ponzi',
        title: 'R&D Ponzi Scheme',
        tier: 'standard',
        category: 'Richard Ewing Frameworks',
        definition: `The R&D Ponzi Scheme is a software corporate finance trap where an engineering organization continuously justifies hiring new developers to build new features in order to hit quarterly product goals, while concealing that the majority of existing developer payroll is consumed by unaddressed technical debt and maintenance overhead. Coined by Richard Ewing in CIO.com.\n\nWhat normal people call this: hiring more and more programmers to build new stuff because all your current programmers are busy babysitting old, broken code.`,
        whyItMatters: `Creates an exponential cost spiral that collapses when headcount growth slows or revenue multiples contract.`,
        faqs: [
            { question: 'What is the R&D Ponzi Scheme in plain English?', answer: 'When a company has to keep hiring engineers just to maintain their existing software, hiding how much maintenance actually costs.' }
        ],
        relatedTerms: ['innovation-tax', 'technical-insolvency-date', 'product-debt-index']
    },
    {
        slug: 'feature-bloat-calculus',
        title: 'Feature Bloat Calculus',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Feature Bloat Calculus is an economic formula introduced by Richard Ewing in Built In quantifying the true, compounding annual cost of maintaining unnecessary software features. Total Feature Cost = Direct Maintenance Hours + Opportunity Cost Multiplier + Complexity Tax. Doubling features quadruples interaction complexity, creating exponential drag on engineering velocity.\n\nWhat normal people call this: doing the math on how much money and time your company wastes maintaining features nobody uses.`,
        whyItMatters: `Proves that subtraction (retiring code) generates higher ROI than building new features.`,
        faqs: [
            { question: 'What is Feature Bloat Calculus in plain English?', answer: 'A formula showing that every new feature added to software makes all existing features harder and more expensive to maintain.' }
        ],
        relatedTerms: ['sunset-protocol', 'zombie-features', 'complexity-tax', 'negative-carry-features'],
        relatedArticles: [{ title: 'Real Innovation Requires Deleting Code, Not Writing It', url: 'https://builtin.com/articles/innovation-requires-deleting-code' }]
    },
    {
        slug: 'inference-economics',
        title: 'Inference Economics',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Inference Economics is the micro-economic study of per-token computing costs, latency trade-offs, and gross margin scaling laws in generative AI software. Formulated by Richard Ewing across Built In and CIO.com. Maps the transition from zero-marginal-cost traditional software to variable-COGS AI systems.\n\nWhat normal people call this: calculating whether your AI product makes a profit or loses money on every customer interaction.`,
        whyItMatters: `Essential for pricing AI products and avoiding margin collapse as user activity scales.`,
        faqs: [
            { question: 'What is Inference Economics in plain English?', answer: 'The business math behind how much compute and money it takes to run AI features for users.' }
        ],
        relatedTerms: ['ai-unit-economics', 'synthetic-cogs', 'variable-cost-of-intelligence', 'cost-of-predictivity'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }]
    },
    {
        slug: 'shadow-agents',
        title: 'Shadow Agents',
        tier: 'pillar',
        category: 'Richard Ewing Frameworks',
        definition: `Shadow Agents refers to autonomous AI agents deployed, configured, or invoked by internal employees without centralized security authorization, observability, or permission boundaries. Coined by Richard Ewing in CIO.com and Built In. Shadow agents run scripts, access customer databases, and trigger webhooks invisibly, creating severe enterprise compliance and data exfiltration liabilities.\n\nWhat normal people call this: autonomous AI bots running inside your company network that the IT or security team has no clue about.`,
        whyItMatters: `Represents the modern evolution of Shadow IT, where unauthorized software does not just store data, but autonomously executes actions.`,
        faqs: [
            { question: 'What are Shadow Agents in plain English?', answer: 'Unapproved AI bots that employees set up to do work without getting permission from IT or security.' }
        ],
        relatedTerms: ['shadow-ai', 'shadow-delegation', 'four-pillars-of-agent-governance', 'mcp-governance'],
        relatedTools: [{ name: 'Shadow AI Scanner', url: '/tools/shadow-ai' }],
        relatedArticles: [{ title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch' }]
    }
];
