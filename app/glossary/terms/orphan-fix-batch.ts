import { GlossaryTerm } from '../types';

// =============================================================================
// BATCH FIX: 24 orphaned relatedTerms slugs + 8 Exogram AI governance terms
// Every slug in this file was referenced by other glossary terms but had no
// definition, causing 404s when users clicked "Related Terms" links.
// =============================================================================

export const orphanFixTerms: GlossaryTerm[] = [

    // =========================================================================
    // ORPHAN FIXES  -  24 terms that were referenced but had no page
    // =========================================================================

    {
        title: 'AI Bias & Fairness',
        slug: 'ai-bias-fairness',
        definition: `AI bias refers to systematic errors in AI system outputs that create unfair outcomes for certain groups. Bias can enter AI systems through training data (historical bias), feature selection (measurement bias), or model design (algorithmic bias).\n\nFairness in AI requires defining what "fair" means for each use case  -  equal outcome rates across groups, equal error rates, individual fairness (similar people get similar results), or procedural fairness (the process is transparent and consistent).\n\nThe 2026 regulatory landscape (EU AI Act, NIST AI RMF) requires organizations to assess and mitigate AI bias in high-risk applications including hiring, lending, healthcare, and criminal justice.`,
        whyItMatters: `AI bias creates legal liability, reputational damage, and regulatory penalties. The EU AI Act classifies biased AI in high-risk domains as a violation subject to fines up to 6% of global revenue. Beyond compliance, biased AI systems make worse decisions  -  they systematically exclude or disadvantage segments of customers or employees.\n\nRichard Ewing's AI governance framework evaluates bias risk as part of the AI Liability Gradient  -  bias in autonomous agents compounds liability because biased decisions are made at machine speed.`,
        howToMeasure: 'Track outcome rates across demographic groups. Compare error rates (false positives, false negatives) across groups. Use fairness metrics like demographic parity, equalized odds, and calibration.',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-governance', 'ai-agent', 'ai-hallucination', 'ai-liability-gradient'],
        faqs: [
            { question: 'Can AI be truly unbiased?', answer: 'No AI system is perfectly unbiased  -  bias exists in all data. The goal is to identify, measure, and mitigate bias to acceptable levels for each use case, and to continuously monitor for drift.' },
        ],
    },
    {
        title: 'AI Guardrails',
        slug: 'ai-guardrails',
        definition: `AI guardrails are technical and procedural controls that constrain AI system behavior within acceptable boundaries. They prevent AI from generating harmful, inaccurate, off-topic, or policy-violating outputs.\n\nTypes of guardrails include: input filtering (blocking malicious prompts), output filtering (detecting harmful content), topic constraints (keeping AI on-task), factual grounding (requiring source citations), rate limiting (preventing abuse), and human-in-the-loop gates (requiring approval for high-risk actions).\n\nExogram's Constraint Engine represents the most sophisticated approach to AI guardrails  -  lockable rules that no model can violate, enforced at the infrastructure level rather than the prompt level.`,
        whyItMatters: 'Without guardrails, AI systems can generate harmful content, leak sensitive data, make unauthorized commitments, or take actions outside their intended scope. Guardrails are essential for production AI deployment.',
        howToMeasure: 'Track guardrail trigger rate (how often guardrails block actions), false positive rate (legitimate actions blocked), and bypass rate (harmful actions that slip through).',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-governance', 'ai-agent', 'action-admissibility', 'ai-liability-gradient'],
        faqs: [
            { question: 'Are prompt-level guardrails sufficient?', answer: 'No. Prompt-level guardrails can be bypassed through prompt injection, jailbreaking, and adversarial inputs. Infrastructure-level guardrails (like Exogram\'s Constraint Engine) are necessary for production systems.' },
        ],
    },
    {
        title: 'AI Hallucination Debt',
        slug: 'ai-hallucination-debt',
        definition: `AI Hallucination Debt is a term coined by Richard Ewing describing the accumulated organizational risk from AI-generated falsehoods that are accepted as truth and propagated through business decisions, customer communications, and downstream systems.\n\nUnlike technical debt (a known trade-off), hallucination debt is invisible  -  the organization doesn't know it's accumulating because hallucinated outputs look correct. It compounds through decision chains: one hallucination informs a business decision, which informs downstream decisions, creating a cascade of conclusions built on false premises.\n\nHallucination debt is uniquely dangerous because it compounds exponentially rather than linearly. Each downstream system that consumes hallucinated data becomes a new source of misinformation.`,
        whyItMatters: `Hallucination debt is the most dangerous hidden cost in AI systems. Unlike compute costs (visible) or model retraining (budgeted), hallucination debt is invisible until a catastrophic failure  -  a wrong recommendation to a customer, a compliance violation based on fabricated data, or a strategic decision built on AI-generated fiction.\n\nExogram's Truth Ledger was designed specifically to prevent hallucination debt by ensuring every fact is versioned, source-attributed, and conflict-checked.`,
        howToMeasure: 'Track AI output accuracy rates over time. Monitor downstream decisions made based on AI outputs. Audit for propagated hallucinations in customer-facing systems.',
        category: 'AI & Machine Learning',
        relatedTerms: ['ai-hallucination', 'truth-ledger', 'ai-governance', 'cost-of-predictivity'],
        faqs: [
            { question: 'How is this different from regular AI errors?', answer: 'Regular errors are caught and corrected. Hallucination debt is the accumulated damage from errors NOT caught  -  plausible outputs accepted as truth and propagated into decisions, systems, and customer communications.' },
        ],
    },
    {
        title: 'AI Unit Economics',
        slug: 'ai-unit-economics',
        tier: 'pillar',
        definition: `While reviewing SaaS margins for portfolio companies, I observed a repeating vulnerability: impressive generative AI features that demoed perfectly but quietly destroyed unit economics. Unlike traditional software with near-zero marginal costs, AI unit economics requires measuring the per-interaction profitability where every token processed, API call made, and vector query run costs real cents.\n\n**The AI Unit Economics Formula:**\nRevenue per AI interaction − Cost per AI interaction = Margin per interaction\n\nCosts include: LLM API fees, embedding generation, vector database queries, retrieval pipeline compute, post-processing, monitoring, and error handling. Many AI features are margin-negative  -  they cost more to serve than the revenue they generate. Read more at [How to Calculate Your AI Unit Economics in 30 Minutes](/blog/ai-unit-economics-30-minutes).`,
        whyItMatters: 'Most AI product failures are economic, not technical. Teams build impressive AI capabilities without modeling whether the feature can be profitable at scale. The AUEB tool prevents the most expensive mistake in AI product development.',
        howToMeasure: 'Calculate fully loaded cost per AI interaction (API + compute + retrieval + monitoring). Compare to revenue per interaction. Track margin trend over time.',
        category: 'AI & Machine Learning',
        relatedTerms: ['cost-of-predictivity', 'gross-margin-preservation', 'evergreen-ratio', 'model-right-sizing'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        faqs: [
            { question: 'What percentage of AI features are margin-negative?', answer: 'Industry estimates suggest 60-80% of AI features in production are margin-negative when fully loaded costs are included.' },
        ],
    },
    {
        title: 'API Design',
        slug: 'api-design',
        definition: `API design is the practice of defining the interface through which software components communicate. Good API design creates clear, consistent, well-documented contracts that are easy to use correctly and hard to use incorrectly.\n\n**Key principles:** consistency (similar operations work similarly), simplicity (minimal surface area), versioning (backward compatibility), error handling (clear, actionable error messages), and documentation (complete, accurate, with examples).\n\n**Common patterns:** REST (resource-oriented), GraphQL (query-based), gRPC (performance-oriented), WebSocket (real-time). Each has trade-offs for different use cases.`,
        whyItMatters: 'Poor API design creates integration debt  -  every consumer of a bad API builds workarounds that compound maintenance burden. APIs are contracts; changing them is expensive and risky.',
        howToMeasure: 'Track API adoption rate, time-to-first-successful-call, error rate by endpoint, breaking change frequency, and developer satisfaction scores.',
        category: 'API & Integration',
        relatedTerms: ['microservices', 'platform-engineering', 'devops'],
        faqs: [
            { question: 'REST vs GraphQL vs gRPC?', answer: 'REST for most web APIs (simple, well-understood). GraphQL for complex data needs (mobile apps, multiple consumers). gRPC for high-performance internal services. Most organizations use multiple patterns.' },
        ],
    },
    {
        title: 'Career Levels in Engineering',
        slug: 'career-levels',
        definition: `Engineering career levels (also called career ladders or leveling frameworks) define the progression path for software engineers from junior through staff, principal, and distinguished levels. Well-designed levels create clarity about expectations, compensation, and growth.\n\n**Common IC track:** Junior (L3) → Mid (L4) → Senior (L5) → Staff (L6) → Senior Staff (L7) → Principal (L8) → Distinguished (L9)\n\n**Common management track:** Tech Lead → Engineering Manager → Senior EM → Director → VP Engineering → CTO\n\nThe transition from Senior to Staff is the most critical inflection point  -  it requires shifting from individual contribution to force multiplication.`,
        whyItMatters: 'Clear career levels reduce attrition, improve hiring, and create alignment between employee expectations and organizational needs. Unclear leveling is the #1 cause of engineering attrition after compensation.',
        category: 'People & Culture',
        relatedTerms: ['staff-engineer-role', 'engineering-management-role', 'hiring-bar-calibration'],
        faqs: [
            { question: 'How many levels should an engineering ladder have?', answer: '6-8 IC levels is standard. Too few (3-4) creates stagnation. Too many (10+) creates confusion about the difference between adjacent levels.' },
        ],
    },
    {
        title: 'Change Failure Rate',
        slug: 'change-failure-rate',
        definition: `Change Failure Rate (CFR) is one of the four DORA metrics. It measures the percentage of deployments to production that cause a failure requiring remediation  -  a rollback, hotfix, or incident response.\n\n**Benchmarks (DORA State of DevOps):**\n- Elite: 0-15%\n- High: 16-30%\n- Medium: 16-30%\n- Low: 46-60%\n\nChange failure rate is the quality counterpart to deployment frequency and lead time. High deployment frequency with high CFR means you're shipping bugs faster.`,
        whyItMatters: 'CFR directly measures release quality. A rising CFR indicates deteriorating code quality, insufficient testing, or growing technical debt  -  all inputs to the Product Debt Index assessment.',
        howToMeasure: 'Failed deployments (requiring rollback, hotfix, or incident) ÷ total deployments × 100. Track monthly and quarterly.',
        category: 'Engineering Management',
        relatedTerms: ['dora-metrics', 'devops', 'cicd-pipeline', 'continuous-deployment'],
        faqs: [
            { question: 'What if our CFR is above 30%?', answer: 'Above 30% CFR indicates systemic quality issues. Investigate: insufficient automated testing, pressured releases, lack of staging environments, or growing technical debt.' },
        ],
    },
    {
        title: 'Continuous Deployment',
        slug: 'continuous-deployment',
        definition: `Continuous Deployment is the practice of automatically deploying every code change that passes automated tests to production  -  without any manual approval step. It is the most aggressive form of CI/CD and the hallmark of elite engineering teams.\n\nContinuous Deployment requires: comprehensive automated test suites, feature flags for risk control, robust monitoring and alerting, fast rollback capability, and a culture of small, incremental changes.\n\n**Not to be confused with Continuous Delivery**, which automatically *prepares* code for release but requires manual approval to deploy.`,
        whyItMatters: 'Organizations practicing continuous deployment achieve the highest DORA metrics  -  deploying hundreds of times per day with low failure rates. It reduces risk by making each change small and reversible.',
        howToMeasure: 'Deployment frequency, time from commit to production, change failure rate, and MTTR (mean time to recovery).',
        category: 'Engineering Management',
        relatedTerms: ['devops', 'cicd-pipeline', 'dora-metrics', 'feature-flags', 'change-failure-rate'],
        faqs: [
            { question: 'Is continuous deployment safe?', answer: 'When implemented correctly (comprehensive tests, feature flags, monitoring, fast rollback), continuous deployment is SAFER than manual releases because each change is small and easy to diagnose.' },
        ],
    },
    {
        title: 'Engineering Manager',
        slug: 'engineering-management-role',
        definition: `An Engineering Manager (EM) is a people leader responsible for the productivity, growth, and well-being of a software engineering team. Unlike tech leads (who lead through technical influence), EMs lead through people management  -  hiring, coaching, performance reviews, career development, and organizational design.\n\n**Core responsibilities:** hiring and team building, 1:1s and career development, performance management, process optimization, stakeholder communication, and shielding the team from organizational chaos.\n\nThe best EMs are force multipliers  -  they make their entire team more productive rather than being the most productive individual.`,
        whyItMatters: 'Engineering managers are the transmission between engineering teams and business objectives. Great EMs increase team output by 2-3x. Poor EMs drive attrition and reduce velocity.',
        category: 'Engineering Management',
        relatedTerms: ['one-on-one', 'career-levels', 'hiring-bar-calibration', 'engineering-productivity'],
        faqs: [
            { question: 'Should engineering managers write code?', answer: 'Front-line EMs (managing 5-8 engineers) may spend 20-30% of time coding. Directors and VPs should spend 0% coding  -  their leverage is organizational, not technical.' },
        ],
    },
    {
        title: 'Evergreen Ratio',
        slug: 'evergreen-ratio',
        tier: 'pillar',
        definition: `The Evergreen Ratio is a framework coined by Richard Ewing that measures the balance between fixed-cost software (traditional code with near-zero marginal cost) and variable-cost AI features (code with per-interaction costs) in a product.\n\n**Formula:** Evergreen Ratio = Fixed-Cost Code Revenue ÷ Variable-Cost AI Revenue\n\nA high Evergreen Ratio (>3:1) means most of your revenue comes from traditional software with high margins. A low ratio (<1:1) means AI features dominate, compressing margins.\n\nThe Evergreen Ratio helps teams decide when to replace AI features with deterministic code  -  if an AI feature's behavior becomes predictable enough, converting it to rules-based logic eliminates the variable cost entirely.`,
        whyItMatters: 'SaaS companies are valued on gross margins. AI features that compress margins reduce enterprise value. The Evergreen Ratio helps teams protect margin by identifying which AI features should be converted to deterministic code.',
        howToMeasure: 'Categorize all revenue-generating features as fixed-cost or variable-cost. Calculate the ratio. Track over time  -  a declining ratio means margin erosion.',
        category: 'Richard Ewing Frameworks',
        relatedTerms: ['cost-of-predictivity', 'gross-margin-preservation', 'ai-unit-economics', 'model-right-sizing'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        faqs: [
            { question: 'What is a good Evergreen Ratio?', answer: 'Above 3:1 is healthy (most revenue from fixed-cost code). Below 1:1 is dangerous  -  AI costs are dominating margins. Between 1:1 and 3:1 requires active margin management.' },
        ],
    },
    {
        title: 'GDPR',
        slug: 'gdpr',
        definition: `The General Data Protection Regulation (GDPR) is the European Union's comprehensive data privacy law enacted in 2018. It governs how organizations collect, store, process, and delete personal data of EU residents.\n\n**Key requirements:** lawful basis for processing, explicit consent, data minimization, right to access, right to deletion (right to be forgotten), data portability, breach notification (72 hours), Data Protection Officer (DPO) requirement, and Privacy Impact Assessments.\n\n**Penalties:** Up to €20M or 4% of global annual revenue, whichever is higher. Major fines have been issued to Meta ($1.3B), Amazon ($887M), and Google ($57M).`,
        whyItMatters: 'GDPR compliance is mandatory for any organization processing EU residents\' data  -  regardless of where the organization is located. Non-compliance carries severe financial penalties and reputational damage.',
        category: 'Compliance & Regulation',
        relatedTerms: ['soc-2', 'security-compliance', 'zero-trust', 'ai-governance'],
        faqs: [
            { question: 'Does GDPR apply outside the EU?', answer: 'Yes  -  GDPR applies to any organization processing data of EU residents, regardless of where the company is headquartered. A US company with EU customers must comply.' },
        ],
    },
    {
        title: 'Hiring Bar Calibration',
        slug: 'hiring-bar-calibration',
        definition: `Hiring bar calibration is the process of aligning interviewers on what constitutes a "pass" or "fail" for engineering candidates. Without calibration, hiring decisions depend on which interviewers conduct the loop  -  creating inconsistent and unfair outcomes.\n\nCalibration involves: defining competency matrices for each level, conducting mock interview scoring sessions, tracking interviewer pass rates (too high = low bar, too low = blocking good candidates), and regular review of hire quality outcomes.\n\nRichard Ewing's Audit Interview Protocol provides a calibrated alternative to traditional coding interviews  -  a standardized assessment that measures verification judgment rather than code generation speed.`,
        whyItMatters: 'Uncalibrated hiring leads to inconsistent quality, bias, and poor candidate experience. Organizations with calibrated hiring bars make 3x better hiring decisions.',
        category: 'People & Culture',
        relatedTerms: ['audit-interview-protocol', 'career-levels', 'engineering-management-role'],
        relatedTools: [{ name: 'Audit Interview Tool', url: '/tools/audit-interview' }],
        faqs: [
            { question: 'How do you calibrate interviewers?', answer: 'Have multiple interviewers score the same candidate independently, then compare. Discuss disagreements. Create rubrics. Track interviewer pass rates and correlate with new hire performance.' },
        ],
    },
    {
        title: 'Microservices',
        slug: 'microservices', tier: 'pillar',
        definition: `Microservices architecture structures an application as a collection of small, independent services that communicate over APIs. Each service is owned by a single team, deployable independently, and organized around a specific business capability.\n\n**Benefits:** independent deployment, technology flexibility, team autonomy, fault isolation, and scalability for specific components.\n\n**Costs:** distributed systems complexity, network latency, data consistency challenges, operational overhead, and debugging difficulty across service boundaries.\n\nMicroservices are not inherently better than monoliths. They trade local complexity (large codebase) for distributed complexity (network, consistency, observability).`,
        whyItMatters: 'The monolith vs. microservices decision is one of the highest-stakes architectural choices. Wrong choice in either direction costs years of engineering effort. The decision should be driven by economics and team structure, not technology fashion.',
        category: 'Architecture Patterns',
        relatedTerms: ['monolith', 'monolith-to-microservices', 'api-design', 'kubernetes'],
        faqs: [
            { question: 'When should you use microservices?', answer: 'When you have multiple teams needing independent deployment, different scaling requirements per component, or need technology flexibility. If one team can manage the whole codebase, a monolith is usually better.' },
        ],
    },
    {
        title: 'Monolith Architecture',
        slug: 'monolith',
        definition: `A monolith is a software application built as a single, unified codebase where all components share the same process, database, and deployment pipeline. Monoliths are the default architecture for most applications and remain the right choice for many organizations.\n\n**Advantages:** simpler development, easier debugging, single deployment, no network overhead between components, straightforward data consistency, and lower operational complexity.\n\n**Disadvantages at scale:** deployment bottlenecks (one team's change blocks everyone), scaling limitations (must scale everything together), technology lock-in, and growing build/test times.`,
        whyItMatters: 'Despite industry hype around microservices, monoliths are the right choice for most startups and small teams. Premature decomposition into microservices creates distributed monoliths  -  all the downsides of both approaches.',
        category: 'Architecture Patterns',
        relatedTerms: ['microservices', 'monolith-to-microservices', 'technical-debt', 'legacy-code'],
        faqs: [
            { question: 'Are monoliths bad?', answer: 'No. Monoliths are the right architecture for most startups and small teams. They become problematic only when team size and deployment frequency outgrow the single-codebase model.' },
        ],
    },
    {
        title: 'One-on-One Meetings',
        slug: 'one-on-one',
        definition: `One-on-one (1:1) meetings are regular, private conversations between a manager and their direct report. They are the single most important management practice for building trust, providing feedback, and supporting career development.\n\n**Best practices:** weekly cadence (30-60 minutes), employee-driven agenda, avoid status updates (use standups for that), focus on coaching and career growth, discuss blockers and frustrations, and never cancel  -  rescheduling is fine, canceling signals deprioritization.\n\nEffective 1:1s cover three domains: tactical (current work blockers), developmental (skill growth and career goals), and relational (trust, satisfaction, engagement).`,
        whyItMatters: 'Engineering managers who hold effective 1:1s have 40-60% lower attrition rates. 1:1s are the primary mechanism for early detection of disengagement, burnout, and retention risk.',
        category: 'People & Culture',
        relatedTerms: ['engineering-management-role', 'career-levels', 'staff-engineer-role'],
        faqs: [
            { question: 'How often should 1:1s happen?', answer: 'Weekly for direct reports. Biweekly at minimum. Skip-levels monthly. Never cancel  -  if you must reschedule, do so proactively and explain why.' },
        ],
    },
    {
        title: 'Platform Engineering',
        slug: 'platform-engineering', tier: 'pillar',
        definition: `Platform Engineering is the discipline of building and maintaining internal developer platforms (IDPs) that abstract away infrastructure complexity and provide self-service capabilities to engineering teams.\n\nPlatform engineering evolved from DevOps as organizations recognized that expecting every team to manage their own infrastructure creates duplication and inconsistency. Instead, a dedicated platform team builds tools, templates, and automation that other teams consume.\n\n**Components:** CI/CD pipelines, infrastructure provisioning, monitoring and observability, secrets management, deployment automation, environment management, and developer documentation.`,
        whyItMatters: 'Platform engineering reduces cognitive load on product teams, standardizes infrastructure patterns, and improves developer productivity. Organizations with mature internal platforms ship 2-4x faster than those without.',
        category: 'Platform Engineering',
        relatedTerms: ['devops', 'infrastructure-as-code', 'kubernetes', 'site-reliability-engineering'],
        faqs: [
            { question: 'Platform Engineering vs DevOps?', answer: 'DevOps is a culture. Platform Engineering is an organization design  -  a dedicated team building self-service tools that embody DevOps principles for the rest of engineering.' },
        ],
    },
    {
        title: 'AI Economics',
        slug: 'product-economics',
        tier: 'pillar',
        definition: `AI Economics is the discipline of treating every product decision as an economic decision  -  evaluating features, sprints, and roadmaps through the lens of capital allocation, ROI, and margin impact rather than velocity or feature count.\n\nCoined and developed by Richard Ewing, AI Economics encompasses: the Product Debt Index (quantifying technical debt in dollar terms), the Innovation Tax (measuring hidden maintenance burden), the Cost of Predictivity (exponential AI accuracy costs), the Kill Switch Protocol (deprecating zombie features), and the Feature Bloat Calculus (when maintenance exceeds value).\n\nThe AI Economist Doctrine holds four principles: Capital Allocation > Agile Theater, The Truth is in the P&L, Kill Zombies Ruthlessly, and Sovereignty Over Dependency.`,
        whyItMatters: 'AI Economics fills the gap between engineering metrics (velocity, story points) and financial metrics (revenue, margin). It gives CTOs, CPOs, and boards a common language for evaluating engineering as a capital function.',
        category: 'Richard Ewing Frameworks',
        relatedTerms: ['product-economist', 'product-debt-index', 'innovation-tax', 'cost-of-predictivity'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }, { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        faqs: [
            { question: 'Who coined AI Economics?', answer: 'Richard Ewing coined the term and developed the underlying frameworks. He is published in CIO.com, Built In, Mind the Product, and HackerNoon on AI economics topics.' },
        ],
    },
    {
        title: 'Product Management',
        slug: 'product-management',
        definition: `Product Management is the function responsible for defining what to build, for whom, and why  -  then ensuring it gets built, launched, and iterated on to maximize business value. Product managers (PMs) sit at the intersection of business, technology, and user experience.\n\n**Core PM activities:** customer research, market analysis, prioritization (RICE, WSJF), roadmapping, writing requirements (PRDs, user stories), collaborating with engineering and design, launch coordination, and metrics analysis.\n\nIn the AI era, PMs must also understand AI unit economics, the Cost of Predictivity, and the trade-offs between AI-powered and deterministic features.`,
        whyItMatters: 'Product management determines what engineering builds  -  and therefore how engineering capital is allocated. PMs who understand AI economics prevent the most common form of capital destruction: building features that cost more to maintain than they generate in value.',
        category: 'Product Management',
        relatedTerms: ['product-market-fit', 'rice-framework', 'north-star-metric', 'pl-ownership-product-managers'],
        faqs: [
            { question: 'What is the difference between a PM and a project manager?', answer: 'A product manager decides WHAT to build (strategy, prioritization, requirements). A project manager ensures it gets built ON TIME (schedules, resources, tracking). They are different roles.' },
        ],
    },
    {
        title: 'Security & Compliance',
        slug: 'security-compliance',
        definition: `Security and compliance are two related disciplines that protect organizations from threats and ensure adherence to regulatory requirements.\n\n**Security** focuses on protecting systems, data, and users from unauthorized access, breaches, and attacks. Key areas: application security, network security, identity and access management, encryption, vulnerability management, and incident response.\n\n**Compliance** ensures organizational practices meet regulatory and industry standards. Key frameworks: SOC 2, GDPR, HIPAA, PCI-DSS, ISO 27001, NIST CSF, and the EU AI Act.\n\nIn the AI era, security and compliance extend to model security, training data privacy, inference access control, and AI-specific regulations.`,
        whyItMatters: 'Security breaches cost an average of $4.45M per incident (IBM 2025). Compliance violations carry regulatory fines, legal liability, and loss of customer trust. Both are table stakes for enterprise customers.',
        category: 'Security & Compliance',
        relatedTerms: ['soc-2', 'gdpr', 'zero-trust', 'vulnerability-management'],
        faqs: [
            { question: 'What is the difference between security and compliance?', answer: 'Security protects against threats. Compliance ensures you meet regulatory requirements. You can be compliant but not secure (meeting minimum standards while having vulnerabilities) or secure but not compliant (good practices but lacking required documentation).' },
        ],
    },
    {
        title: 'SOC 2',
        slug: 'soc-2',
        definition: `SOC 2 (Service Organization Control Type 2) is an auditing standard developed by the AICPA that evaluates an organization's controls related to security, availability, processing integrity, confidentiality, and privacy (the Trust Service Criteria).\n\nA SOC 2 Type I report evaluates whether controls are properly designed at a point in time. A SOC 2 Type II report evaluates whether controls operated effectively over a period (typically 6-12 months). Type II is the gold standard.\n\nSOC 2 compliance is the most commonly required security certification for B2B SaaS companies. Enterprise customers and investors expect SOC 2 Type II.`,
        whyItMatters: 'SOC 2 is the price of admission for enterprise SaaS sales. Without it, enterprise procurement teams will block your deal. SOC 2 compliance also forces good security hygiene.',
        category: 'Compliance & Regulation',
        relatedTerms: ['security-compliance', 'gdpr', 'zero-trust'],
        faqs: [
            { question: 'How long does SOC 2 take?', answer: 'SOC 2 Type I: 3-6 months to prepare, point-in-time audit. Type II: requires 6-12 months of evidence collection after Type I. Total timeline: 9-18 months from zero to Type II.' },
        ],
    },
    {
        title: 'Staff Engineer',
        slug: 'staff-engineer-role',
        definition: `A Staff Engineer (also Staff+ Engineer) is a senior individual contributor role that operates at the intersection of technical depth and organizational influence. Staff engineers solve problems that span multiple teams, define architectural direction, and mentor senior engineers.\n\nWill Larson's four archetypes of Staff Engineers: Tech Lead (team-scoped leadership), Architect (cross-team technical vision), Solver (hard problem specialist), and Right Hand (executive-partnered leadership).\n\nThe Staff level is the most critical inflection point in an engineering career  -  it requires shifting from deep individual contribution to force multiplication through influence, mentorship, and organizational design.`,
        whyItMatters: 'Staff engineers are force multipliers. A great staff engineer makes 10 other engineers more productive. An organization without staff-level ICs loses architectural coherence and defaults to management-driven technical decisions.',
        category: 'People & Culture',
        relatedTerms: ['career-levels', 'engineering-management-role', 'engineering-productivity'],
        faqs: [
            { question: 'Staff engineer vs engineering manager?', answer: 'Staff engineers lead through technical influence and architectural decisions. Engineering managers lead through people management and organizational design. Both are essential  -  the best organizations have parallel IC and management tracks.' },
        ],
    },
    {
        title: 'Team Topologies',
        slug: 'team-topologies',
        definition: `Team Topologies is a framework by Matthew Skelton and Manuel Pais that defines four fundamental team types and three interaction modes for organizing engineering teams.\n\n**Four team types:** Stream-aligned (delivers value to users), Enabling (helps stream-aligned teams adopt new capabilities), Complicated Subsystem (owns technically complex domains), Platform (provides self-service internal tools).\n\n**Three interaction modes:** Collaboration (teams work closely together), X-as-a-Service (one team consumes another's output), Facilitating (one team coaches another).\n\nTeam Topologies uses Conway's Law intentionally  -  designing team structures that produce the desired software architecture.`,
        whyItMatters: 'Conway\'s Law means your org chart determines your software architecture. Team Topologies provides a deliberate framework for organizing teams to produce the architecture you want, rather than the one your org chart accidentally creates.',
        category: 'Engineering Management',
        relatedTerms: ['engineering-management-role', 'platform-engineering', 'microservices'],
        faqs: [
            { question: 'What is Conway\'s Law?', answer: 'Conway\'s Law states that organizations design systems that mirror their communication structure. If you have four teams, you\'ll get a four-component architecture  -  regardless of what architecture you intended.' },
        ],
    },
    {
        title: 'Vulnerability Management',
        slug: 'vulnerability-management',
        definition: `Vulnerability management is the continuous process of identifying, evaluating, treating, and reporting security vulnerabilities in software systems and infrastructure. It encompasses vulnerability scanning, penetration testing, patch management, and risk prioritization.\n\n**Key practices:** regular automated vulnerability scanning (SAST, DAST, SCA), CVSS-based risk scoring, SLA-driven remediation timelines (critical: 24hrs, high: 7 days, medium: 30 days), dependency monitoring (Dependabot, Snyk), and vulnerability disclosure programs.\n\nIn the AI era, vulnerability management extends to model vulnerabilities (prompt injection, data poisoning, model extraction) and AI supply chain risks.`,
        whyItMatters: 'Unpatched vulnerabilities are the #1 attack vector for breaches. Organizations with mature vulnerability management programs experience 60% fewer breaches.',
        howToMeasure: 'Track mean time to remediation (MTTR) by severity, vulnerability density (vulns per 1000 lines of code), patch currency (% of systems fully patched), and open vulnerability aging.',
        category: 'Security & Compliance',
        relatedTerms: ['security-compliance', 'soc-2', 'zero-trust', 'devops'],
        faqs: [
            { question: 'What is CVSS?', answer: 'CVSS (Common Vulnerability Scoring System) rates vulnerability severity on a 0-10 scale. Critical: 9.0-10.0, High: 7.0-8.9, Medium: 4.0-6.9, Low: 0.1-3.9.' },
        ],
    },
    {
        title: 'Zero Trust Architecture',
        slug: 'zero-trust',
        tier: 'pillar',
        definition: `Zero Trust is a security model based on the principle "never trust, always verify." Unlike traditional perimeter-based security (castle-and-moat), Zero Trust assumes that threats exist both outside and inside the network. Every access request is verified regardless of where it originates.\n\n**Core principles:** verify explicitly (authenticate and authorize every request), least-privilege access (minimum permissions needed), assume breach (design systems expecting compromise), micro-segmentation (isolate network segments), and continuous verification (re-authenticate based on risk signals).\n\nThe 2021 US Executive Order on Cybersecurity mandated Zero Trust adoption for federal agencies, accelerating enterprise adoption.`,
        whyItMatters: 'Perimeter-based security fails in a world of remote work, cloud infrastructure, and AI agents. Zero Trust is the security model for modern organizations and is increasingly required by enterprise customers and regulators.',
        category: 'Security & Compliance',
        relatedTerms: ['security-compliance', 'soc-2', 'vulnerability-management', 'gdpr'],
        faqs: [
            { question: 'Is Zero Trust a product or a principle?', answer: 'Zero Trust is a principle and architecture, not a product. No single vendor provides "Zero Trust"  -  it requires a combination of identity management, network segmentation, endpoint security, and policy enforcement.' },
        ],
    },

    // =========================================================================
    // EXOGRAM AI GOVERNANCE TERMS  -  8 terms from exogram.ai
    // =========================================================================

    {
        title: 'Truth Ledger',
        slug: 'truth-ledger',
        tier: 'pillar',
        definition: `The Truth Ledger is Exogram's core innovation  -  a versioned, timestamped, source-attributed knowledge store that serves as the single source of truth for AI agents. Unlike RAG systems that retrieve documents without verifying their accuracy, the Truth Ledger ensures every fact is provenance-tracked, conflict-checked, and temporally valid.\n\n**Key properties:**\n- **Versioned:** Every fact has a version history. No silent overwrites.\n- **Timestamped:** Facts have creation and expiration times. Expired context is explicitly marked.\n- **Source-attributed:** Every fact traces to its original source (user statement, document, API response).\n- **Conflict-detected:** Contradictions are flagged immediately  -  no silent merging of conflicting facts.\n\nThe Truth Ledger prevents AI Hallucination Debt by ensuring an AI agent cannot present unverified information as truth.`,
        whyItMatters: 'RAG answers "what documents are relevant?" The Truth Ledger answers "are those documents TRUE?" In high-stakes AI deployments (finance, healthcare, legal), this distinction is the difference between defensible and indefensible.',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-agent', 'hallucination-debt', 'retrieval-augmented-generation', 'provenance-registry'],
        faqs: [
            { question: 'How is the Truth Ledger different from RAG?', answer: 'RAG retrieves relevant documents. The Truth Ledger verifies that those documents are accurate, current, non-contradictory, and source-attributed. RAG is retrieval. Truth Ledger is verification.' },
        ],
    },
    {
        title: 'Constraint Engine',
        slug: 'constraint-engine',
        tier: 'pillar',
        definition: `The Constraint Engine is Exogram's policy enforcement layer  -  lockable rules that no AI model can violate, regardless of prompt or context. Unlike prompt-level guardrails (which can be bypassed through prompt injection), Constraint Engine rules are enforced at the infrastructure level.\n\n**Types of constraints:**\n- **Architectural:** "Never expose internal API endpoints"\n- **Business:** "Never promise delivery dates without checking inventory"\n- **Compliance:** "Never persist PII without explicit consent"\n- **Security:** "Never execute code outside the sandbox"\n- **Operational:** "Never exceed $0.50 per inference request"\n\nConstraints are lockable  -  once set by an authorized administrator, they cannot be overridden by the AI model, even if instructed to do so.`,
        whyItMatters: 'Prompt-level guardrails fail. Constraint Engines don\'t. When deploying AI agents in production, the difference between "the AI usually follows rules" and "the AI cannot violate rules" is the difference between acceptable and unacceptable risk.',
        category: 'AI Governance & Verification',
        relatedTerms: ['action-admissibility', 'ai-guardrails', 'execution-control-plane', 'ai-governance'],
        faqs: [
            { question: 'Can an AI model bypass Constraint Engine rules?', answer: 'No. Constraint Engine rules are enforced at the infrastructure layer, below the model. The model never sees the option to violate a constraint  -  invalid actions are filtered before the model can select them.' },
        ],
    },
    {
        title: 'Action Admissibility',
        slug: 'action-admissibility',
        definition: `Action Admissibility is Exogram's core filtering concept. When an autonomous AI agent proposes an action, Action Admissibility determines whether that action is permitted given the current truth state, constraints, scope, provenance, and temporal context.\n\n**How it works:** An AI agent faces 17 possible actions. Exogram's Action Admissibility filter evaluates each against all active constraints, truth ledger state, and scope boundaries. Result: 9 violate constraints (removed), 3 rely on missing facts (blocked), 2 contradict verified state (rejected). Only 3 admissible actions remain for the model to choose from.\n\nThis is fundamentally different from guardrails (which filter outputs)  -  Action Admissibility filters the decision space itself.`,
        whyItMatters: 'Action Admissibility is the mechanism that makes AI agents safe for production. Instead of hoping the AI makes good decisions and catching bad ones, Admissibility ensures the AI can only choose from pre-validated options.',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-agent', 'constraint-engine', 'execution-control-plane', 'agentic-workflow'],
        faqs: [
            { question: 'How is Action Admissibility different from output filtering?', answer: 'Output filtering checks AFTER the AI decides. Action Admissibility filters BEFORE  -  removing invalid options from the decision space entirely. The AI never considers actions that violate constraints.' },
        ],
    },
    {
        title: 'Execution Control Plane',
        slug: 'execution-control-plane',
        tier: 'pillar',
        definition: `The Execution Control Plane is Exogram's product category  -  described as "IAM for autonomous AI agents." Just as IAM (Identity and Access Management) governs what humans and services can do in cloud infrastructure, the Execution Control Plane governs what AI agents can do in production.\n\n**Components:** Truth Ledger (verified knowledge), Constraint Engine (policy enforcement), Action Admissibility (decision filtering), Provenance Registry (source tracking), Audit System (immutable logging), PII Air Gap (data protection), and Multi-LLM Consistency (truth unification across models).\n\nThe Execution Control Plane sits between AI agents and external systems  -  every action passes through governance before execution.`,
        whyItMatters: 'AI agents without an Execution Control Plane are like cloud services without IAM  -  they can do anything, to anyone, at any time. The Execution Control Plane makes AI deployment defensible and auditable.',
        category: 'AI Governance & Verification',
        relatedTerms: ['action-admissibility', 'constraint-engine', 'truth-ledger', 'ai-agent'],
        faqs: [
            { question: 'What is IAM for AI?', answer: 'Exogram\'s Execution Control Plane applies the IAM (Identity and Access Management) paradigm to AI agents  -  governing what each agent can do, what data it can access, and what actions it can take, with full audit logging.' },
        ],
    },
    {
        title: 'AI Liability Gradient',
        slug: 'ai-liability-gradient',
        tier: 'pillar',
        definition: `The AI Liability Gradient is a framework coined by Richard Ewing that maps the relationship between AI agent autonomy and organizational liability. As AI systems move from assistive to autonomous, liability increases non-linearly.\n\n**The Gradient:**\n- **Level 1 (Assistive):** AI suggests, human decides and acts. Liability: minimal  -  the human is accountable.\n- **Level 2 (Augmented):** AI recommends with high confidence, human approves. Liability: moderate  -  the organization shares accountability.\n- **Level 3 (Supervised Autonomous):** AI acts independently within defined bounds, human monitors. Liability: high  -  the organization is accountable for the bounds.\n- **Level 4 (Fully Autonomous):** AI acts without human oversight. Liability: maximum  -  the organization is fully responsible for all agent actions.\n\nMost production AI agents in 2026 operate at Level 2-3. Exogram's governance infrastructure enables safe operation at Level 3.`,
        whyItMatters: 'The AI Liability Gradient helps boards and legal teams understand the risk profile of AI deployment decisions. Moving from Level 2 to Level 3 autonomy may double productivity but can increase liability exposure by 10x.',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-agent', 'action-admissibility', 'execution-control-plane', 'ai-governance'],
        faqs: [
            { question: 'What autonomy level should we target?', answer: 'It depends on the use case risk. Customer support: Level 2-3 is appropriate. Financial transactions: Level 1-2 maximum. The governance infrastructure must match the autonomy level.' },
        ],
    },
    {
        title: 'Provenance Registry',
        slug: 'provenance-registry',
        definition: `The Provenance Registry is Exogram's source attribution system  -  every fact stored in the Truth Ledger is permanently linked to its original source. You always know WHERE information came from, WHEN it was recorded, WHO provided it, and WHAT evidence supports it.\n\n**Source types tracked:** user statements, document uploads, API responses, web scrapes, model outputs (labeled), third-party integrations, and manual administrator entries.\n\nProvenance is essential for regulatory compliance (GDPR right to explanation), audit trails (SOC 2), and trust calibration (should the AI weigh a user's casual remark the same as an official document?).`,
        whyItMatters: 'When an AI agent makes a decision, "because the model said so" is not a defensible answer. Provenance provides the chain of evidence: the AI decided X because of fact Y, which came from source Z, recorded at time T.',
        category: 'AI Governance & Verification',
        relatedTerms: ['truth-ledger', 'execution-control-plane', 'ai-governance', 'gdpr'],
        faqs: [
            { question: 'Why is provenance important for AI?', answer: 'Provenance creates auditable AI. When regulators, customers, or legal teams ask "why did the AI do that?", provenance provides a complete, verifiable chain of evidence from source to decision.' },
        ],
    },
    {
        title: 'PII Air Gap',
        slug: 'pii-air-gap',
        definition: `The PII Air Gap is Exogram's data protection mechanism that automatically detects and scrubs personally identifiable information (PII) before it enters persistent storage. SSNs, email addresses, phone numbers, credentials, and other sensitive data are blocked at the ingestion layer  -  they are never persisted in the Truth Ledger.\n\n**How it works:** All incoming data passes through a PII detection pipeline before storage. Detected PII is: flagged, stripped or tokenized, logged (that PII was detected, not the PII itself), and optionally routed to a separate, encrypted PII vault with strict access controls.\n\nThe Air Gap principle: sensitive data should never accidentally enter AI context. If it's never stored, it can never be leaked, hallucinated, or exposed.`,
        whyItMatters: 'AI systems are notorious for memorizing and regurgitating PII from training data and context. The PII Air Gap prevents this at the infrastructure level  -  making GDPR right-to-deletion enforceable and AI-driven data leaks impossible.',
        category: 'AI Governance & Verification',
        relatedTerms: ['gdpr', 'security-compliance', 'truth-ledger', 'execution-control-plane'],
        faqs: [
            { question: 'Can the PII Air Gap be bypassed?', answer: 'No. The Air Gap operates at the storage layer, before data enters the Truth Ledger. PII cannot "slip through" because the detection pipeline runs on every write operation.' },
        ],
    },
    {
        title: 'Multi-LLM Consistency',
        slug: 'multi-llm-consistency',
        definition: `Multi-LLM Consistency is Exogram's capability to maintain a single, verified truth layer across multiple AI model providers  -  ChatGPT, Claude, Gemini, Llama, and any other LLM an organization uses.\n\n**The problem:** Organizations using multiple LLMs (for cost optimization, capability matching, or vendor diversification) face truth fragmentation. Each model has different training data, different knowledge cutoffs, and different hallucination patterns. Without a shared truth layer, different models give different (sometimes contradictory) answers about the same facts.\n\n**The solution:** Exogram's Truth Ledger serves as the single source of truth for ALL models. Regardless of which LLM processes a request, the facts it can access are identical, verified, and consistent.`,
        whyItMatters: 'Multi-LLM strategies are increasingly common (use the cheapest model for simple tasks, frontier model for complex ones). Without consistency infrastructure, different models give different answers  -  confusing users and creating liability.',
        category: 'AI Governance & Verification',
        relatedTerms: ['truth-ledger', 'execution-control-plane', 'model-right-sizing', 'retrieval-augmented-generation'],
        faqs: [
            { question: 'Why use multiple LLMs?', answer: 'Cost optimization (small models for simple tasks), capability matching (different models excel at different tasks), vendor diversification (reducing dependency on any single provider), and reliability (failover across providers).' },
        ],
    },
];
