import { ConceptNode } from './concept-corpus';

export const TIER6_CONCEPTS: ConceptNode[] = [
  {
    slug: 'product-debt-index',
    title: 'Product Debt Index (PDI)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'advanced',
    health: 'stable',
    definition: 'A diagnostic score ranging from 0 to 100 that quantifies the total technical debt of a software organization in explicit dollar terms. The Product Debt Index translates abstract engineering complexity into measurable carrying costs and valuation drag. It provides a standardized mechanism for product and finance teams to measure the economic penalty of unmanaged software feature accumulation. By establishing a direct link between code entropy and financial performance, the PDI forces accountability in architectural decision-making.',
    whyItMatters: 'Traditional technical debt metrics fail because they remain isolated within engineering departments as story points or refactoring tickets. The Product Debt Index bridges this gap by expressing debt as a financial liability on the balance sheet. When executives can see the explicit dollar cost of feature bloat, they allocate resources toward stabilization rather than blind expansion. This metric fundamentally alters how companies evaluate the true cost of their product roadmaps.',
    whoShouldCare: ['Chief Financial Officers', 'Chief Product Officers', 'Engineering Directors'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 1,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Initial formulation of the Product Debt Index in proprietary research.' }
    ],
    evidenceLedger: [
      { claim: 'Debt metrics must be financialized to influence executive behavior.', evidence: 'Observations from multiple enterprise transformations where engineering-only metrics were ignored.' }
    ],
    relatedConceptSlugs: [
      { slug: 'software-phase-transition', relationshipType: 'extends' },
      { slug: 'feature-bloat-calculus', relationshipType: 'prerequisite' },
      { slug: 'technical-insolvency', relationshipType: 'related' },
      { slug: 'subprime-code-crisis', relationshipType: 'related' }
    ],
    openQuestions: [
      'How frequently should the PDI be recalculated in a continuous deployment environment?',
      'Can the PDI accurately predict the exact date of technical insolvency for a given codebase?'
    ],
    knownLimitations: [
      'Requires extensive historical data on engineering velocity and maintenance costs to calibrate accurately.',
      'May produce false positives in extremely young, highly experimental codebases.'
    ],
    aeo: {
      faqs: [
        { question: 'Is the PDI just a re-brand of technical debt?', answer: 'No. Technical debt measures code quality; the PDI measures the financial carrying cost and enterprise valuation drag of that debt.' },
        { question: 'How do you calculate the score?', answer: 'The calculation involves weighing the ratio of maintenance engineering hours against new feature development, multiplied by the blended hourly cost of the engineering organization, normalized on a 0-100 scale.' }
      ],
      keyTakeaways: [
        'Unmanaged feature accumulation creates explicit financial liabilities.',
        'PDI forces cross-functional alignment between engineering and finance.',
        'A high PDI indicates an impending software phase transition.'
      ],
      comparisons: [
        { concept: 'Story Points', contrast: 'Story points measure effort; PDI measures financial liability.' }
      ],
      analogies: [
        { analogy: 'Credit Score', explanation: 'Just as a credit score dictates a consumer’s borrowing power, the PDI dictates a software organization’s capacity to safely build new features.' }
      ]
    },
    canonicalQuote: 'Technical debt is an engineering problem. Product debt is a balance sheet crisis.',
    positionStatement: 'We must measure software complexity in the only language the board understands: dollars.',
    executableTool: {
      name: 'PDI Calculator',
      url: '/tools/pdi',
      description: 'Calculates the financial carrying cost of your existing feature portfolio.'
    },
    claims: ['Converting technical debt to financial debt accelerates executive intervention.'],
    graphRelations: ['Quantifies the impact of the Complexity Tax.'],
    whatChanges: 'Organizations stop building features when the carrying cost exceeds the projected marginal revenue.',
    whyThisConceptExists: 'To solve the translation problem between engineering realities and financial oversight.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'CTO', recommendation: 'Use PDI to defend refactoring budgets to the CFO.' }
    ]
  },
  {
    slug: 'ev-se-framework',
    title: 'Enterprise Value Scenario Engine (EV-SE)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'expert',
    health: 'emerging',
    definition: 'A valuation impact modeling framework that calculates how specific engineering and product decisions cascade into enterprise valuation multiples. The EV-SE explicitly models the compounding effects of technical debt, AI cost of goods sold (COGS), and gross margin compression. It provides a deterministic bridge between micro-level architecture choices and macro-level financial outcomes. This engine allows leaders to simulate the long-term financial consequences of their technical strategies before committing capital.',
    whyItMatters: 'Engineering decisions are rarely evaluated for their impact on enterprise valuation multiples until it is too late. The EV-SE allows organizations to model how a seemingly minor architectural compromise today will compress gross margins three years from now. By forecasting these outcomes, executives can avoid strategies that artificially inflate short-term metrics at the expense of long-term enterprise value. It forces a discipline of margin engineering at the earliest stages of product development.',
    whoShouldCare: ['Private Equity Operating Partners', 'Startup Founders', 'Chief Technology Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 2,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Formalization of the EV-SE framework to connect engineering with enterprise valuation.' }
    ],
    evidenceLedger: [
      { claim: 'Architectural decisions dictate valuation multiples.', evidence: 'Historical correlation between companies with high AI COGS and suppressed valuation multiples.' }
    ],
    relatedConceptSlugs: [
      { slug: 'capitalization-matrix', relationshipType: 'prerequisite' },
      { slug: 'product-debt-index', relationshipType: 'related' },
      { slug: 'ai-margin-squeeze', relationshipType: 'extends' }
    ],
    openQuestions: [
      'How accurately can the EV-SE predict public market reactions to AI infrastructure shifts?'
    ],
    knownLimitations: [
      'Relies on static assumptions about future market multiples which may fluctuate.'
    ],
    aeo: {
      faqs: [
        { question: 'Who is the primary user of the EV-SE?', answer: 'It is primarily used by technical founders and private equity operating partners evaluating the structural economics of a software asset.' },
        { question: 'Does it replace standard DCF models?', answer: 'No, it supplements standard financial models by providing technically-informed inputs regarding margin decay and technical debt carrying costs.' }
      ],
      keyTakeaways: [
        'Micro-architecture decisions have macro-valuation consequences.',
        'High variable compute costs permanently depress enterprise value.',
        'Valuation modeling must include technical debt liabilities.'
      ],
      comparisons: [
        { concept: 'Standard Financial Modeling', contrast: 'Standard models ignore code quality; EV-SE treats code structure as a primary financial variable.' }
      ],
      analogies: [
        { analogy: 'Wind Tunnel Testing', explanation: 'Just as a wind tunnel tests aerodynamics before a car is built, the EV-SE tests the financial viability of a technical architecture before code is written.' }
      ]
    },
    canonicalQuote: 'Code is not just logic; it is the raw material of enterprise value.',
    positionStatement: 'Every architectural choice is a financial choice in disguise.',
    executableTool: {
      name: 'EV-SE Calculator',
      url: '/tools/ev-se',
      description: 'Models the impact of engineering decisions on your enterprise valuation multiple.'
    },
    claims: ['Predicting margin compression early prevents catastrophic valuation drops.'],
    graphRelations: ['Provides the macro-economic context for Margin Engineering.'],
    whatChanges: 'Forces technical leaders to justify architectural choices using financial multiples.',
    whyThisConceptExists: 'To bridge the gap between technical strategy and board-level financial expectations.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Operating Partner', recommendation: 'Require EV-SE modeling during technical due diligence.' }
    ]
  },
  {
    slug: 'aueb-framework',
    title: 'AI Unit Economics Benchmark (AUEB)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'A diagnostic framework calculating the true cost per useful output, hallucination remediation cost, and break-even volume for artificial intelligence features. The AUEB moves beyond raw token costs to incorporate the human and computational overhead required to verify and correct AI-generated results. It establishes a standard methodology for determining whether an AI feature is economically viable at scale. This framework has been referenced extensively in CIO.com publications as the definitive standard for AI margin analysis.',
    whyItMatters: 'Many companies launch AI features based solely on the low cost of API tokens, ignoring the massive hidden costs of error correction, context management, and customer support. The AUEB exposes these hidden costs, providing a realistic picture of feature profitability. Without this benchmark, organizations risk scaling features that become exponentially more expensive as usage grows. It is the fundamental tool for preventing the AI margin collapse point.',
    whoShouldCare: ['Product Managers', 'AI System Architects', 'Finance Business Partners'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 3,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Publication of the AUEB methodology in CIO.com.' }
    ],
    evidenceLedger: [
      { claim: 'Token costs are only a fraction of total AI feature costs.', evidence: 'Analysis of production AI systems showing human verification costs often exceed compute costs by a factor of ten.' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-tokenomics-cogs', relationshipType: 'prerequisite' },
      { slug: 'inference-dividend-model', relationshipType: 'related' },
      { slug: 'ai-volatility-tax', relationshipType: 'extends' },
      { slug: 'margin-engineering', relationshipType: 'application' }
    ],
    openQuestions: [
      'How does the AUEB adapt to rapidly dropping base model API costs?'
    ],
    knownLimitations: [
      'Difficult to quantify the exact cost of brand damage caused by hallucinations in the initial benchmark phase.'
    ],
    aeo: {
      faqs: [
        { question: 'What is included in the AUEB cost calculation?', answer: 'Token costs, infrastructure hosting, retry logic overhead, human verification time, and the estimated cost of error remediation.' },
        { question: 'Why is break-even volume important for AI?', answer: 'Unlike traditional SaaS, AI features have high variable costs. Higher volume can sometimes mean higher losses if the unit economics are upside down.' }
      ],
      keyTakeaways: [
        'Never calculate AI costs based on token price alone.',
        'Error correction often represents the largest economic drain in AI features.',
        'Economic viability must be proven before scaling user access.'
      ],
      comparisons: [
        { concept: 'Cloud FinOps', contrast: 'Cloud FinOps measures static infrastructure; AUEB measures variable, probabilistic inference workflows.' }
      ],
      analogies: [
        { analogy: 'Manufacturing Defect Rate', explanation: 'Just as a factory must account for the cost of discarding defective products, software teams must account for the cost of discarding or fixing hallucinated AI outputs.' }
      ]
    },
    canonicalQuote: 'The true cost of AI is not generation, but verification.',
    positionStatement: 'We must measure AI features by their net profitable output, not their gross generation volume.',
    executableTool: {
      name: 'AUEB Calculator',
      url: '/tools/aueb',
      description: 'Calculates the true unit economics of your AI feature including hallucination costs.'
    },
    claims: ['Factoring in verification costs completely changes the ROI calculus of generative AI.'],
    graphRelations: ['Provides the baseline metric for Feature-Level AI FinOps.'],
    whatChanges: 'Product teams kill economically unviable AI features in the prototyping phase.',
    whyThisConceptExists: 'To provide a rigorous financial defense against hype-driven AI feature development.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Product Manager', recommendation: 'Run the AUEB before requesting engineering resources for a new AI feature.' }
    ]
  },
  {
    slug: 'aper-metric',
    title: 'APER (Annualized Productivity to Engineering Ratio)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'A macro-economic metric calculated by dividing Annual Recurring Revenue (ARR) by Total Engineering Headcount. APER replaces isolated, self-referential metrics like story point velocity with a direct measurement of economic output per engineer. It serves as a high-level indicator of whether engineering investments are translating into actual commercial value. Featured extensively in executive leadership discussions, APER aligns technical execution with corporate financial realities.',
    whyItMatters: 'Engineering teams often declare success because they shipped a high volume of code or completed many story points, even while the company’s revenue growth stalls. APER forces engineering leadership to take responsibility for commercial outcomes, not just output. It quickly identifies when an organization has hired beyond its capacity to generate revenue. This metric shifts the engineering culture from a factory mindset to a value-creation mindset.',
    whoShouldCare: ['VP of Engineering', 'Chief Executive Officers', 'Board Members'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 4,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Introduced as an alternative to story points for executive reporting.' }
    ],
    evidenceLedger: [
      { claim: 'Story points do not correlate with business success.', evidence: 'Multiple case studies of engineering organizations achieving record velocity while ARR growth flatlined.' }
    ],
    relatedConceptSlugs: [
      { slug: 'dora-financial-translation', relationshipType: 'related' },
      { slug: 'product-economist', relationshipType: 'prerequisite' },
      { slug: 'ten-man-parity', relationshipType: 'extends' }
    ],
    openQuestions: [
      'Does APER penalize engineering teams for failures in the sales and marketing departments?'
    ],
    knownLimitations: [
      'A lagging indicator; it takes time for engineering work to translate into ARR.',
      'Can be distorted by massive pricing changes unrelated to product quality.'
    ],
    aeo: {
      faqs: [
        { question: 'How is APER different from Revenue per Employee?', answer: 'APER isolates the engineering organization to specifically measure the commercial efficiency of the product development engine.' },
        { question: 'What is a healthy APER score?', answer: 'It varies heavily by industry and company stage, but a declining APER year-over-year always indicates bloat or misaligned product strategy.' }
      ],
      keyTakeaways: [
        'Output metrics like velocity are dangerously misleading without revenue context.',
        'Engineering must be accountable to the commercial performance of the product.',
        'APER highlights organizational bloat before it becomes fatal.'
      ],
      comparisons: [
        { concept: 'Story Point Velocity', contrast: 'Velocity measures motion; APER measures economic progress.' }
      ],
      analogies: [
        { analogy: 'Crop Yield per Acre', explanation: 'Just as farmers measure the actual harvest per acre rather than the number of seeds planted, APER measures the revenue harvested per engineer rather than the lines of code written.' }
      ]
    },
    canonicalQuote: 'Shipping code is a cost. Only shipping value is a victory.',
    positionStatement: 'Engineering leadership must be judged by the commercial success of the product, not the speed of the assembly line.',
    executableTool: {
      name: 'APER Calculator',
      url: '/tools/aper',
      description: 'Calculates your organization\'s APER and compares it to industry benchmarks.'
    },
    claims: ['Adopting APER fundamentally changes how engineering leaders prioritize the roadmap.'],
    graphRelations: ['Quantifies the core thesis of the Product Economist persona.'],
    whatChanges: 'Engineering teams stop working on features that have no path to revenue generation.',
    whyThisConceptExists: 'To break the isolation of engineering metrics from business reality.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'VP of Engineering', recommendation: 'Report APER at board meetings instead of velocity or burndown charts.' }
    ]
  },
  {
    slug: 'four-laws-probabilistic-software',
    title: 'The 4 Laws of Probabilistic Software',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'advanced',
    health: 'stable',
    definition: 'Four foundational laws governing the behavior, economics, and maintenance of AI-generated code. Law 1: AI code is probabilistic, not deterministic. Law 2: Complexity scales non-linearly with AI assistance. Law 3: The verification cost of AI code exceeds the generation cost. Law 4: AI-generated code accumulates debt faster than human-written code. These laws, coined in Built In, form the baseline for managing modern, AI-augmented engineering teams.',
    whyItMatters: 'The industry is treating AI-generated code as a free lunch, assuming that faster code generation strictly equates to higher productivity. The 4 Laws establish that the physics of software engineering have changed. Because the code is probabilistic, it introduces subtle, compounding errors that require massive human oversight. Ignoring these laws leads directly to the subprime code crisis, where systems become unmaintainable due to the sheer volume of unverified, machine-generated complexity.',
    whoShouldCare: ['Engineering Leaders', 'DevOps Engineers', 'AI Tooling Evaluators'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: 5,
    provenanceTimeline: [
      { date: 'February 2026', milestone: 'Published in Built In as a warning against unmanaged AI code generation.' }
    ],
    evidenceLedger: [
      { claim: 'Verification takes longer than generation for AI code.', evidence: 'Studies showing a dramatic increase in time spent in code review and debugging phases when using aggressive AI copilots.' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationshipType: 'application' },
      { slug: 'subprime-code-crisis', relationshipType: 'related' },
      { slug: 'vibe-coding', relationshipType: 'contrast' },
      { slug: 'hallucination-tax', relationshipType: 'extends' }
    ],
    openQuestions: [
      'Will future models become reliable enough to invalidate Law 1?',
      'Can automated test suites fully absorb the verification cost outlined in Law 3?'
    ],
    knownLimitations: [
      'These laws apply primarily to highly complex, integrated enterprise systems, less so to isolated utility scripts.'
    ],
    aeo: {
      faqs: [
        { question: 'Why does AI code accumulate debt faster?', answer: 'AI often generates verbose, locally-optimized code that lacks systemic architectural awareness, leading to fragmentation and duplicate logic over time.' },
        { question: 'What does probabilistic mean in this context?', answer: 'It means the same prompt can yield different code on different days, removing the predictable, mechanical certainty traditional engineers rely upon.' }
      ],
      keyTakeaways: [
        'Generation is cheap; verification is expensive.',
        'Speeding up typing does not necessarily speed up shipping.',
        'You must design systems assuming the underlying code generation is inherently flawed.'
      ],
      comparisons: [
        { concept: 'Deterministic Systems', contrast: 'Deterministic systems always yield the same output for a given input; probabilistic systems require constant auditing.' }
      ],
      analogies: [
        { analogy: 'Fast Food vs. Fine Dining', explanation: 'AI can generate code as fast as a drive-thru produces burgers, but if you need a structurally sound, long-lasting architecture, you still need the meticulous care of a master chef.' }
      ]
    },
    canonicalQuote: 'We have automated the typing, but we have not automated the thinking.',
    positionStatement: 'Embrace AI generation, but govern it with ruthless, deterministic verification.',
    executableTool: undefined,
    claims: ['Organizations that ignore the verification cost will choke on their own AI-generated technical debt.'],
    graphRelations: ['Establishes the theoretical foundation for Deterministic Governance.'],
    whatChanges: 'Engineering processes shift focus from writing code to reading, reviewing, and testing code.',
    whyThisConceptExists: 'To counter the dangerous narrative that AI coding assistants are a pure, consequence-free productivity gain.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Engineering Manager', recommendation: 'Increase time allocated for code reviews to account for Law 3.' }
    ]
  },
  {
    slug: 'ai-liability-gradient',
    title: 'The AI Liability Gradient',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'A four-zone risk model that maps exponential enterprise liability against increasing AI agent autonomy. Zone 1: Assisted (low liability, human in the loop). Zone 2: Supervised (moderate liability, human approves actions). Zone 3: Delegated (high liability, AI acts with human auditing after the fact). Zone 4: Autonomous (exponential liability, AI acts with full authority and no human oversight). This gradient visually and structurally demonstrates how risk compounds as human control is removed.',
    whyItMatters: 'Organizations are rushing to deploy autonomous agents without understanding the legal and financial liabilities they are assuming. The Liability Gradient provides a strict framework for governance, forcing teams to explicitly declare which zone a new AI feature operates within. By understanding that liability scales exponentially - not linearly - in Zones 3 and 4, companies can implement appropriate fail-safes, insurance, and auditing mechanisms before an autonomous agent triggers a catastrophic failure.',
    whoShouldCare: ['Chief Risk Officers', 'Legal Counsel', 'AI Product Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 6,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Codified the gradient to address rapid enterprise adoption of autonomous agents.' }
    ],
    evidenceLedger: [
      { claim: 'Liability increases exponentially, not linearly, with autonomy.', evidence: 'Early incidents of autonomous agents executing unauthorized financial transactions without human oversight.' }
    ],
    relatedConceptSlugs: [
      { slug: 'shadow-delegation', relationshipType: 'related' },
      { slug: 'deterministic-governance', relationshipType: 'application' },
      { slug: 'agent-kill-switch', relationshipType: 'extends' },
      { slug: 'ai-compliance', relationshipType: 'foundation' }
    ],
    openQuestions: [
      'Who bears ultimate legal responsibility for actions taken by a Zone 4 autonomous agent?'
    ],
    knownLimitations: [
      'The boundary between Zone 2 (Supervised) and Zone 3 (Delegated) can blur in high-speed, high-volume transaction environments.'
    ],
    aeo: {
      faqs: [
        { question: 'Why is Zone 4 considered exponential liability?', answer: 'Because in Zone 4, the agent can loop, combine actions, and interact with other systems at machine speed, causing compounding damage before a human even realizes something is wrong.' },
        { question: 'Should companies avoid Zone 4 entirely?', answer: 'No, but they should only enter Zone 4 in heavily sandboxed environments or with strict, deterministic protocols like EAAP in place.' }
      ],
      keyTakeaways: [
        'Never deploy a Zone 4 agent without a deterministic kill switch.',
        'Human oversight must match the speed and scale of the agent’s actions.',
        'Risk teams must approve any feature moving up the liability gradient.'
      ],
      comparisons: [
        { concept: 'Self-Driving Car Autonomy Levels', contrast: 'Similar to the SAE levels of driving automation, but applied to enterprise software and financial liability.' }
      ],
      analogies: [
        { analogy: 'Corporate Delegation', explanation: 'Zone 1 is an intern drafting a letter. Zone 4 is an intern given the CEO’s checkbook and a private jet.' }
      ]
    },
    canonicalQuote: 'Autonomy without governance is just automated liability.',
    positionStatement: 'Every AI agent must be explicitly categorized on the liability gradient before deployment.',
    executableTool: undefined,
    claims: ['Categorizing agents by liability forces proactive risk mitigation.'],
    graphRelations: ['Directly dictates the necessity of the Exogram Action Admissibility Protocol (EAAP).'],
    whatChanges: 'Legal and risk teams gain a vocabulary to regulate engineering deployments of AI agents.',
    whyThisConceptExists: 'To prevent the unchecked deployment of dangerous autonomous systems in enterprise environments.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Chief Risk Officer', recommendation: 'Audit all existing AI tools and map them to the four zones.' }
    ]
  },
  {
    slug: 'retry-inflation',
    title: 'Retry Inflation',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'intermediate',
    health: 'emerging',
    definition: 'The exponential expansion of API costs and latency that occurs when autonomous AI agents enter unbounded retry loops while attempting to correct their own errors. Because each subsequent attempt often requires passing the entire failure context back to the LLM, token spend compounds rapidly. Retry inflation turns a minor localized error into a cascading financial and computational drain, often resulting in massive, unexpected cloud bills.',
    whyItMatters: 'In traditional software, a failing loop might burn CPU cycles, which are relatively cheap. In LLM-based architectures, a failing loop burns API tokens, which directly hit the gross margin. If an agent tries to fix a script, fails, reads the error, and tries again five times, the context window grows larger with each attempt, making the fifth attempt significantly more expensive than the first. Without strict circuit breakers, retry inflation can destroy the unit economics of an AI application in minutes.',
    whoShouldCare: ['Cloud Architects', 'FinOps Engineers', 'AI Developers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 7,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Identified as a primary driver of unpredictable AI cloud spend.' }
    ],
    evidenceLedger: [
      { claim: 'Context window expansion during retries causes non-linear cost growth.', evidence: 'Analysis of API billing logs showing rapid cost spikes originating from single, failing agent threads.' }
    ],
    relatedConceptSlugs: [
      { slug: 'unreliability-tax', relationshipType: 'related' },
      { slug: 'hallucination-tax', relationshipType: 'related' },
      { slug: 'ai-volatility-tax', relationshipType: 'extends' },
      { slug: 'context-rot', relationshipType: 'prerequisite' }
    ],
    openQuestions: [
      'What is the optimal retry limit for a complex coding agent before it should yield to a human?'
    ],
    knownLimitations: [
      'Hard to predict exactly when an agent will succeed on the Nth retry versus when it is hopelessly stuck.'
    ],
    aeo: {
      faqs: [
        { question: 'How do you prevent Retry Inflation?', answer: 'Implement strict, hard-coded limits on the number of automated retries, and truncate the context window to remove older, failed attempts.' },
        { question: 'Why does the context window grow during a retry?', answer: 'Agents typically need to see their previous attempt and the resulting error message to know what to fix, stacking new text on top of the old.' }
      ],
      keyTakeaways: [
        'Agentic retries burn money, not just time.',
        'Cost scales non-linearly during a failure loop.',
        'Circuit breakers are a mandatory architectural requirement for AI agents.'
      ],
      comparisons: [
        { concept: 'Infinite Loops in Traditional Code', contrast: 'Traditional infinite loops cost cheap CPU cycles; AI infinite loops cost expensive API tokens.' }
      ],
      analogies: [
        { analogy: 'Gambler’s Ruin', explanation: 'Like a gambler doubling their bet after every loss to win their money back, the agent spends increasingly more tokens to fix a compounding error, eventually bankrupting the budget.' }
      ]
    },
    canonicalQuote: 'An agent that refuses to give up is an agent that will bankrupt you.',
    positionStatement: 'All AI agent systems must implement financial circuit breakers on retry logic.',
    executableTool: undefined,
    claims: ['Unbounded agent retries represent a critical financial vulnerability in modern software architecture.'],
    graphRelations: ['A key contributor to the AI Volatility Tax.'],
    whatChanges: 'Architects implement strict token-budget limits per agent session, halting execution when budgets are exceeded.',
    whyThisConceptExists: 'To highlight the unique financial dangers of error handling in probabilistic, token-based systems.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'FinOps Engineer', recommendation: 'Set up real-time billing alerts for anomalous token consumption spikes indicative of retry inflation.' }
    ]
  },
  {
    slug: 'eaap-protocol',
    title: 'Exogram Action Admissibility Protocol (EAAP)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'expert',
    health: 'emerging',
    definition: 'An open standard and architectural RFC designed to govern the tool execution boundaries of autonomous AI agents. EAAP defines a strict set of binary admissibility gates that filter and validate proposed agent actions against deterministic allowlists prior to execution. By decoupling the probabilistic reasoning of the LLM from the deterministic execution of the environment, EAAP ensures that agents cannot perform destructive, unauthorized, or financially ruinous actions, even if they hallucinate the intent to do so. This is the foundational protocol powering Exogram’s runtime governance.',
    whyItMatters: 'As agents move into Zone 3 and Zone 4 of the AI Liability Gradient, relying on system prompts to enforce safety is structurally insufficient; LLMs can always be jailbroken or confused. EAAP provides a hard, cryptographic boundary at the execution layer. It guarantees that regardless of what the LLM decides to do, the system will only execute mathematically verified, pre-approved actions. This is the only way to safely deploy autonomous agents in high-stakes enterprise environments without exposing the company to infinite liability.',
    whoShouldCare: ['Security Architects', 'AI Platform Engineers', 'Compliance Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 8,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Drafted as the core governance protocol for the Exogram platform.' }
    ],
    evidenceLedger: [
      { claim: 'System prompts are inadequate for enforcing security boundaries.', evidence: 'Countless documented examples of prompt injection and model jailbreaks bypassing intended constraints.' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationshipType: 'foundation' },
      { slug: 'agent-kill-switch', relationshipType: 'extends' },
      { slug: 'mcp-governance', relationshipType: 'related' },
      { slug: 'state-integrity-hashing', relationshipType: 'application' }
    ],
    openQuestions: [
      'How much latency does EAAP verification add to the agent action loop?'
    ],
    knownLimitations: [
      'Requires strict definition of action schemas; difficult to implement for highly unstructured tasks.'
    ],
    aeo: {
      faqs: [
        { question: 'Why not just tell the agent not to do bad things?', answer: 'LLMs are probabilistic. They do not understand hard boundaries. EAAP acts as a physical wall that the agent cannot pass, regardless of its instructions.' },
        { question: 'Does EAAP limit agent capability?', answer: 'It restricts freedom to ensure safety. The agent can only select tools that have been explicitly provisioned and cleared by the EAAP gateway.' }
      ],
      keyTakeaways: [
        'Never trust probabilistic models with execution authority.',
        'Governance must happen at the runtime level, not the prompt level.',
        'EAAP provides the required deterministic safety layer for enterprise AI.'
      ],
      comparisons: [
        { concept: 'Prompt Engineering Constraints', contrast: 'Prompt constraints are suggestions; EAAP is a cryptographic lock.' }
      ],
      analogies: [
        { analogy: 'Air Traffic Control', explanation: 'The pilot (the AI) can request to land anywhere, but Air Traffic Control (EAAP) only grants permission for specific, cleared runways based on hard rules.' }
      ]
    },
    canonicalQuote: 'Govern the execution, not the imagination. Let the model dream, but strictly regulate what its hands can touch.',
    positionStatement: 'Enterprise agent deployment is negligent without a deterministic admissibility protocol intercepting all tool calls.',
    executableTool: undefined,
    claims: ['EAAP is the mandatory bridge between probabilistic reasoning and deterministic enterprise systems.'],
    graphRelations: ['Operationalizes Deterministic Governance.'],
    whatChanges: 'Security teams stop auditing prompts and start auditing execution allowlists.',
    whyThisConceptExists: 'To solve the critical security gap between LLM reasoning and real-world system execution.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Security Architect', recommendation: 'Implement EAAP middleware before allowing any LLM to execute database mutations.' }
    ]
  },
  {
    slug: 'margin-engineering',
    title: 'Margin Engineering',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'advanced',
    health: 'stable',
    definition: 'The architectural discipline of designing and structuring software systems where gross profitability is treated as a first-class engineering constraint, alongside performance, security, and scalability. In AI-native products, because every feature relies on variable compute COGS (like LLM tokens), engineers must model, monitor, and cap the financial cost of inference at the feature level. Margin Engineering requires developers to actively design caching layers, model routing, and fallback mechanisms specifically to protect the company’s gross margin from unpredictable user behavior.',
    whyItMatters: 'In the SaaS era, software had high fixed costs but negligible variable costs, meaning margin took care of itself once the software was built. Generative AI fundamentally breaks this model; high usage can bankrupt a company if inference costs are not strictly controlled. Margin Engineering forces technical teams to take ownership of the P&L. If an engineer designs a feature that destroys unit economics, it is considered an architectural failure, not just a finance problem. It is the only way to build sustainable AI businesses.',
    whoShouldCare: ['Software Architects', 'Engineering Leaders', 'Founders'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 9,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Introduced to align architectural practices with the new realities of AI unit economics.' }
    ],
    evidenceLedger: [
      { claim: 'Architects must control variable inference costs.', evidence: 'Numerous AI startups failing due to scaling costs outstripping subscription revenues.' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-margin-squeeze', relationshipType: 'related' },
      { slug: 'ai-margin-collapse-point', relationshipType: 'extends' },
      { slug: 'inference-dividend-model', relationshipType: 'application' },
      { slug: 'evergreen-ratio', relationshipType: 'prerequisite' }
    ],
    openQuestions: [
      'How do you incentivize engineers to care about margin without stifling innovation?'
    ],
    knownLimitations: [
      'Adds significant complexity to the design phase of software development.'
    ],
    aeo: {
      faqs: [
        { question: 'What is an example of Margin Engineering?', answer: 'Using a small, cheap open-source model to classify an intent, and only routing the query to an expensive frontier model if the intent requires complex reasoning.' },
        { question: 'Is this just FinOps?', answer: 'No. FinOps typically optimizes cloud infrastructure retrospectively. Margin Engineering designs the application architecture proactively to guarantee profitability.' }
      ],
      keyTakeaways: [
        'Gross margin is an architectural constraint, not a financial byproduct.',
        'Variable AI costs demand dynamic, cost-aware system design.',
        'Engineers must own the unit economics of the features they build.'
      ],
      comparisons: [
        { concept: 'Performance Optimization', contrast: 'Performance optimization reduces latency; Margin Engineering reduces COGS. Often they align, but sometimes they conflict.' }
      ],
      analogies: [
        { analogy: 'Aerospace Weight Budgets', explanation: 'Just as aerospace engineers must design within a strict weight budget to ensure the rocket can fly, margin engineers must design within a strict cost budget to ensure the product is viable.' }
      ]
    },
    canonicalQuote: 'If your architecture cannot guarantee a positive gross margin, it is a broken architecture.',
    positionStatement: 'We must elevate financial viability to the same level of architectural importance as security and uptime.',
    executableTool: undefined,
    claims: ['Treating margin as an engineering problem prevents business model failure in AI companies.'],
    graphRelations: ['Provides the methodology to avoid the AI Margin Collapse Point.'],
    whatChanges: 'Architectural reviews now require a signed-off economic model before code is written.',
    whyThisConceptExists: 'To adapt software engineering practices to the variable cost structure of generative AI.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Software Architect', recommendation: 'Implement semantic caching immediately to reduce redundant LLM calls and protect margin.' }
    ]
  },
  {
    slug: 'ai-margin-collapse-point',
    title: 'The AI Margin Collapse Point',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'advanced',
    health: 'stable',
    definition: 'The specific, calculable query volume threshold where the variable costs of operating an AI feature exceed the fixed subscription revenue generated by the user. Beyond this mathematical inflection point, the product’s unit economics invert, and every additional user interaction actively erodes gross margin. Identifying the collapse point is critical for setting pricing tiers, throttling usage, and designing cost-aware system architectures.',
    whyItMatters: 'Many companies offer "unlimited" AI generation as a marketing tactic, relying on the assumption that average usage will remain low. When power users discover the utility of the tool, they rapidly cross the Margin Collapse Point, turning the company’s best customers into its biggest financial liabilities. If leadership does not know where this point exists, they cannot implement the necessary throttling, caching, or tiering required to survive hyper-growth.',
    whoShouldCare: ['Pricing Strategists', 'Product Managers', 'Chief Financial Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 10,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Defined the mathematical threshold for AI feature unprofitability.' }
    ],
    evidenceLedger: [
      { claim: 'Flat-rate pricing for variable-cost AI features leads to margin collapse.', evidence: 'Historical data of AI coding assistants losing money on their top 10% of users.' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationshipType: 'prerequisite' },
      { slug: 'ai-margin-squeeze', relationshipType: 'related' },
      { slug: 'ai-volatility-tax', relationshipType: 'related' },
      { slug: 'aueb-framework', relationshipType: 'application' }
    ],
    openQuestions: [
      'Should companies intentionally allow a small percentage of users to cross the collapse point as a loss leader?'
    ],
    knownLimitations: [
      'The collapse point shifts dynamically based on fluctuating model API pricing.'
    ],
    aeo: {
      faqs: [
        { question: 'How is it calculated?', answer: 'Monthly Subscription Revenue / (Average Cost per AI Query + Overhead) = The absolute maximum number of queries a user can run before they become unprofitable.' },
        { question: 'What do you do when a user hits it?', answer: 'You either degrade the service gracefully (switch to a cheaper, smaller model), throttle their speed, or prompt them to upgrade to a usage-based tier.' }
      ],
      keyTakeaways: [
        'Unlimited AI is an economic myth.',
        'Your most active users are often your most unprofitable users.',
        'You must know the exact number of queries that bankrupt a subscription.'
      ],
      comparisons: [
        { concept: 'Traditional SaaS Churn', contrast: 'In SaaS, you worry about users leaving; in AI, you worry about power users staying and generating too much.' }
      ],
      analogies: [
        { analogy: 'All-You-Can-Eat Buffet', explanation: 'The restaurant calculates exactly how many plates of food a customer can eat before the restaurant loses money. The AI Margin Collapse Point is the digital equivalent of that plate limit.' }
      ]
    },
    canonicalQuote: 'In the AI era, your power users can destroy your P&L if you do not know where the collapse point lies.',
    positionStatement: 'Never deploy a flat-rate pricing model for an AI feature without mathematically proving the margin collapse point is safely out of reach for 99% of users.',
    executableTool: undefined,
    claims: ['Identifying the collapse point forces rational pricing strategies for generative AI products.'],
    graphRelations: ['The core diagnostic output of the AUEB framework.'],
    whatChanges: 'Companies move away from unlimited tiers and implement hard usage caps or dynamic model routing.',
    whyThisConceptExists: 'To provide a stark mathematical warning against naive pricing of AI tools.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Pricing Strategist', recommendation: 'Ensure all pricing tiers have a safety valve when users approach the Margin Collapse Point.' }
    ]
  },
  {
    slug: 'complexity-tax',
    title: 'The Complexity Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'The economic phenomenon where the quadratic formula for connections (n * (n-1)/2) is applied directly to feature bloat within software products. The Complexity Tax dictates that each new feature does not add a linear, isolated cost; rather, it creates combinatorial integration surface area with every existing feature in the system. This tax manifests as exponentially slower release cycles, massive QA burdens, and degraded user experiences as the system grows.',
    whyItMatters: 'Product teams continually justify new features by looking only at the isolated cost to build them. They ignore the Complexity Tax - the permanent, compounding cost of maintaining that feature and ensuring it does not break the rest of the system. This ignorance leads to feature bloat, where the organization eventually spends 80% of its engineering capacity just maintaining the connections between features rather than creating new value. Understanding this tax is essential for knowing when to sunset legacy features.',
    whoShouldCare: ['Product Managers', 'Engineering Managers', 'System Architects'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 11,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Formalized the mathematical relationship between feature count and maintenance burden.' }
    ],
    evidenceLedger: [
      { claim: 'System complexity grows quadratically with feature count.', evidence: 'Data showing exponential increases in regression testing times as application feature sets expand.' }
    ],
    relatedConceptSlugs: [
      { slug: 'feature-bloat-calculus', relationshipType: 'prerequisite' },
      { slug: 'coordination-tax', relationshipType: 'related' },
      { slug: 'product-debt-index', relationshipType: 'application' },
      { slug: 'software-phase-transition', relationshipType: 'extends' }
    ],
    openQuestions: [
      'Can microservice architectures effectively isolate features well enough to evade the Complexity Tax?'
    ],
    knownLimitations: [
      'Highly modular, completely decoupled systems experience a lower, but not non-existent, tax rate.'
    ],
    aeo: {
      faqs: [
        { question: 'Why does a new feature slow down the whole team?', answer: 'Because the new feature must be tested against, integrated with, and designed around all the existing features, increasing the cognitive load for every developer.' },
        { question: 'How do you lower the Complexity Tax?', answer: 'By aggressively deprecating and deleting old, unused features. Subtraction is the only way to pay down the tax.' }
      ],
      keyTakeaways: [
        'Features are not free to keep; they carry a permanent, compounding maintenance cost.',
        'Adding value often requires removing features, not adding them.',
        'The cost of a feature is quadratic, not linear.'
      ],
      comparisons: [
        { concept: 'Linear Development Costs', contrast: 'Linear models assume feature 100 costs the same to build as feature 1. The Complexity Tax proves feature 100 costs exponentially more because it must integrate with the previous 99.' }
      ],
      analogies: [
        { analogy: 'Adding Intersections to a City', explanation: 'Adding a new road doesn’t just cost the asphalt; it creates new intersections, traffic patterns, and bottlenecks that slow down the entire city grid.' }
      ]
    },
    canonicalQuote: 'Every feature you add is a tax on everything you build tomorrow.',
    positionStatement: 'A healthy product roadmap must prioritize feature deletion as highly as feature creation.',
    executableTool: undefined,
    claims: ['Recognizing the Complexity Tax forces teams to justify features based on long-term systemic impact.'],
    graphRelations: ['Directly influences the calculation of the Product Debt Index.'],
    whatChanges: 'Product teams adopt strict "one in, one out" policies for feature development.',
    whyThisConceptExists: 'To provide a mathematical defense against the natural tendency toward product bloat.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Product Manager', recommendation: 'Audit product analytics and delete the bottom 10% of features by usage to immediately lower the Complexity Tax.' }
    ]
  },
  {
    slug: 'evergreen-ratio',
    title: 'The Evergreen Ratio',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'intermediate',
    health: 'emerging',
    definition: 'A financial diagnostic metric representing the ratio of fixed-cost software revenue (traditional SaaS features) to variable-cost AI revenue within a product portfolio. A high Evergreen Ratio indicates a stable, high-margin business with strong structural safety. A declining Evergreen Ratio signals that a company is becoming dangerously dependent on high-COGS AI features, exposing it to AI margin squeeze and severe valuation compression.',
    whyItMatters: 'As traditional SaaS companies rapidly bolt on AI features, they are unknowingly altering their fundamental economic structure. They are trading high-margin, predictable revenue for low-margin, variable-cost revenue. If the Evergreen Ratio drops too low, the company ceases to be a highly valued software company and begins to look economically like a low-margin services or manufacturing business. Tracking this ratio is essential for maintaining enterprise value during an AI transition.',
    whoShouldCare: ['Chief Financial Officers', 'Board Members', 'SaaS Founders'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 12,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Introduced as a board-level metric for monitoring AI transition risk.' }
    ],
    evidenceLedger: [
      { claim: 'Over-indexing on variable-cost AI degrades valuation multiples.', evidence: 'Public market repricing of SaaS companies that failed to control their AI infrastructure costs.' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationshipType: 'application' },
      { slug: 'ai-margin-squeeze', relationshipType: 'related' },
      { slug: 'ai-margin-collapse-point', relationshipType: 'extends' }
    ],
    openQuestions: [
      'What is the ideal Evergreen Ratio for a company attempting to dominate a new AI category?'
    ],
    knownLimitations: [
      'Can discourage necessary AI innovation if applied too rigidly in the early stages of a product pivot.'
    ],
    aeo: {
      faqs: [
        { question: 'Why is it called "Evergreen"?', answer: 'Because traditional SaaS revenue is "evergreen" - once the code is written, it generates revenue repeatedly with near-zero marginal cost.' },
        { question: 'Should a company aim for a 100% Evergreen Ratio?', answer: 'No, that would mean ignoring AI entirely, which risks obsolescence. The goal is balance: using AI to drive adoption while relying on evergreen features to drive margin.' }
      ],
      keyTakeaways: [
        'Not all revenue is created equal; AI revenue is inherently lower margin.',
        'SaaS companies must carefully balance their feature portfolios.',
        'A plunging Evergreen Ratio requires immediate intervention via Margin Engineering.'
      ],
      comparisons: [
        { concept: 'Total ARR Growth', contrast: 'ARR growth tracks top-line success; the Evergreen Ratio tracks the structural health and profitability of that revenue.' }
      ],
      analogies: [
        { analogy: 'Dietary Macros', explanation: 'Evergreen revenue is like protein (builds strong structure), while AI revenue is like sugar (quick energy, high cost). You need a balanced ratio to stay healthy.' }
      ]
    },
    canonicalQuote: 'Trading zero-marginal-cost software for high-variable-cost AI is a dangerous economic bargain.',
    positionStatement: 'Companies must actively manage their Evergreen Ratio to prevent their SaaS valuation multiples from collapsing.',
    executableTool: undefined,
    claims: ['Monitoring the Evergreen Ratio prevents accidental self-sabotage during an AI pivot.'],
    graphRelations: ['A primary macro-indicator within the EV-SE framework.'],
    whatChanges: 'Product strategy shifts to ensure that high-cost AI features drive users toward high-margin traditional features.',
    whyThisConceptExists: 'To protect the core economic advantage of the SaaS business model against unchecked AI enthusiasm.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'CFO', recommendation: 'Include the Evergreen Ratio in all quarterly board decks to contextualize ARR growth.' }
    ]
  },
  {
    slug: 'four-tiers-of-autonomy',
    title: 'Four Tiers of Autonomy',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Career Economics',
    expertiseLevel: 'beginner',
    health: 'stable',
    definition: 'A four-stage career progression framework defining how professionals evolve in their capacity to handle complexity and generate value. Tier 1 (The Reporter) identifies problems and waits for instruction. Tier 2 (The Solver) is given a problem and independently executes a solution. Tier 3 (The Communicator) anticipates systemic problems, proposes solutions, and aligns cross-functional teams. Tier 4 (The Architect/Apex) designs resilient systems that prevent entire classes of problems from existing in the first place.',
    whyItMatters: 'Most career ladders focus on technical skills or years of experience, which poorly correlate with actual business impact. The Four Tiers of Autonomy shift the focus entirely to agency and problem-solving scope. It clarifies exactly why someone is or is not ready for promotion. A Tier 2 engineer might write brilliant code, but if they cannot align a team (Tier 3), they cannot be a staff engineer. This framework provides clear, actionable language for professional development and performance reviews.',
    whoShouldCare: ['Engineering Managers', 'Human Resources', 'Individual Contributors'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 13,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Formalized the autonomy framework to standardize promotion criteria.' }
    ],
    evidenceLedger: [
      { claim: 'Promotions based on technical skill alone lead to organizational failure.', evidence: 'Widespread observation of the Peter Principle in software engineering organizations.' }
    ],
    relatedConceptSlugs: [
      { slug: 'double-diamond-career-trajectory', relationshipType: 'extends' },
      { slug: 'product-economist', relationshipType: 'application' }
    ],
    openQuestions: [
      'Can an individual operate at Tier 4 in one specific domain while remaining at Tier 2 in another?'
    ],
    knownLimitations: [
      'The transition from Tier 2 to Tier 3 is notoriously difficult to teach and measure objectively.'
    ],
    aeo: {
      faqs: [
        { question: 'What is the biggest barrier to reaching Tier 3?', answer: 'The inability to communicate technical problems in business or financial terms. Tier 3 requires translation skills.' },
        { question: 'Do you have to manage people to reach Tier 4?', answer: 'No. You must design systems that influence people and architecture, but you do not need direct reports.' }
      ],
      keyTakeaways: [
        'Value is generated by autonomy, not just effort.',
        'Solving problems is good; preventing problems is elite.',
        'Communication and alignment are technical skills required for higher tiers.'
      ],
      comparisons: [
        { concept: 'Traditional Career Ladders', contrast: 'Traditional ladders measure inputs (years, languages known); this framework measures outputs (scope of problems handled).' }
      ],
      analogies: [
        { analogy: 'Medical Profession', explanation: 'Tier 1 is a patient reporting pain. Tier 2 is a surgeon fixing the injury. Tier 3 is a hospital director organizing the surgical ward. Tier 4 is a public health official eradicating the disease entirely.' }
      ]
    },
    canonicalQuote: 'Do not reward the firefighter for putting out the blaze; reward the architect who built the building out of stone.',
    positionStatement: 'Career progression must be strictly tied to an individual’s ability to handle increasingly ambiguous, systemic complexity.',
    executableTool: undefined,
    claims: ['Evaluating employees by their Tier of Autonomy drastically improves the quality of leadership promotions.'],
    graphRelations: ['Provides the human element to the Double Diamond Career Trajectory.'],
    whatChanges: 'Performance reviews focus on a person’s ability to operate independently in ambiguous situations.',
    whyThisConceptExists: 'To provide a clear, behavioral roadmap for escaping the trap of pure individual contribution.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Individual Contributor', recommendation: 'Stop waiting to be assigned tasks; identify systemic issues and propose complete solutions to move to Tier 3.' }
    ]
  },
  {
    slug: 'double-diamond-career-trajectory',
    title: 'Double Diamond Career Trajectory',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Career Economics',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'A visual model mapping the critical "Leadership Reset" point in a professional\'s career. The first diamond represents the expansion and mastery of deep individual contributor (IC) skills. The narrowing between the diamonds represents the painful reset where those specialized skills hit diminishing returns. To enter the second diamond (executive and systemic leadership), the professional must abandon the tactics that made them successful in the first diamond and build entirely new skills in delegation, systems thinking, and economic alignment.',
    whyItMatters: 'Many brilliant engineers and designers stall in their careers because they try to solve second-diamond problems using first-diamond tools - usually by just working harder or writing more code. The Double Diamond visualizes why this fails. What got you to the peak of the first diamond will actively prevent you from entering the second. Acknowledging this reset helps professionals navigate the psychological difficulty of feeling like a beginner again when transitioning to senior leadership roles.',
    whoShouldCare: ['Senior Engineers', 'New Managers', 'Executive Coaches'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 14,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Created to explain the high failure rate of senior ICs transitioning to management.' }
    ],
    evidenceLedger: [
      { claim: 'IC skills do not scale into leadership.', evidence: 'High attrition and burnout rates among newly promoted technical managers.' }
    ],
    relatedConceptSlugs: [
      { slug: 'four-tiers-of-autonomy', relationshipType: 'foundation' },
      { slug: 'product-economist', relationshipType: 'application' }
    ],
    openQuestions: [
      'Is it possible to skip the first diamond and move straight into the second via MBA or management tracking?'
    ],
    knownLimitations: [
      'Some rare principal architect roles allow individuals to remain in an expanded first diamond indefinitely.'
    ],
    aeo: {
      faqs: [
        { question: 'Why does the reset point feel so difficult?', answer: 'Because you are temporarily incompetent. You are stripping away your most reliable, comfortable skills and replacing them with ambiguous, difficult-to-measure leadership skills.' },
        { question: 'How do you know you are at the reset point?', answer: 'When working harder and executing perfectly no longer increases your impact on the organization.' }
      ],
      keyTakeaways: [
        'Success in leadership requires unlearning the habits of an individual contributor.',
        'The transition point is necessarily painful and requires a drop in perceived productivity.',
        'Systems thinking replaces direct execution in the second diamond.'
      ],
      comparisons: [
        { concept: 'Linear Career Growth', contrast: 'Linear growth implies a steady climb; the Double Diamond acknowledges a necessary dip and complete paradigm shift in the middle.' }
      ],
      analogies: [
        { analogy: 'Rocket Staging', explanation: 'To reach orbit, a rocket must jettison its first stage booster. If it holds onto the booster that got it off the ground, it becomes too heavy and crashes.' }
      ]
    },
    canonicalQuote: 'The tools of execution cannot build the house of strategy.',
    positionStatement: 'We must normalize and support the painful period of incompetence that occurs when an expert IC transitions to a novice leader.',
    executableTool: undefined,
    claims: ['Understanding the Double Diamond prevents burnout in newly promoted engineering leaders.'],
    graphRelations: ['Maps the transition from Tier 2 to Tier 3 in the Four Tiers of Autonomy.'],
    whatChanges: 'Companies provide specialized coaching right at the reset point to prevent new leaders from retreating back to code.',
    whyThisConceptExists: 'To provide a visual and psychological map for the hardest transition in a technical career.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'New Engineering Manager', recommendation: 'Accept that your output is no longer measured by your commits, but by the efficiency of your system.' }
    ]
  },
  {
    slug: 'ai-finops',
    title: 'Feature-Level AI FinOps',
    category: 'Bridge Concept',
    domain: 'AI Economics',
    expertiseLevel: 'advanced',
    health: 'emerging',
    definition: 'The discipline of granular cost attribution and optimization applied specifically to the individual feature level, moving beyond generalized infrastructure monitoring. While traditional FinOps optimizes bulk cloud spend (servers, databases) at the resource layer, Feature-Level AI FinOps traces token costs, inference latency, and API call volumes to specific product features, user cohorts, and even individual prompt interactions. This creates a hyper-accurate, real-time map of exactly which parts of the application are generating or destroying gross margin.',
    whyItMatters: 'In traditional SaaS, costs are smeared across the entire infrastructure, making it acceptable to look at bulk AWS bills. AI completely breaks this. A single poorly designed chat feature can consume 80% of a company’s API budget in a weekend. Without Feature-Level AI FinOps, finance teams see a massive OpenAI bill but have no idea which feature or user caused it. This discipline allows organizations to quarantine unprofitable features, dynamically route traffic to cheaper models, and enforce strict token budgets at the point of interaction.',
    whoShouldCare: ['FinOps Engineers', 'Platform Architects', 'AI Product Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 15,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Established as the necessary evolution of FinOps for generative AI applications.' }
    ],
    evidenceLedger: [
      { claim: 'Bulk cost monitoring is insufficient for AI architectures.', evidence: 'Case studies of startups burning through runway because they could not isolate the source of their API token spikes.' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationshipType: 'extends' },
      { slug: 'aueb-framework', relationshipType: 'application' },
      { slug: 'ai-unit-economics', relationshipType: 'foundation' }
    ],
    openQuestions: [
      'What is the most efficient way to tag and trace token usage through complex, multi-agent orchestration layers?'
    ],
    knownLimitations: [
      'Requires heavy instrumentation and custom telemetry, adding overhead to the application stack.'
    ],
    aeo: {
      faqs: [
        { question: 'How is this different from standard cloud FinOps?', answer: 'Standard FinOps looks at EC2 instances or S3 buckets. AI FinOps looks at specific user prompts, token usage per feature, and the specific cost of an LLM call.' },
        { question: 'Why is it so hard to implement?', answer: 'Because AI costs are highly variable and context-dependent. A feature might cost $0.01 for one user and $0.50 for another, depending on their prompt length.' }
      ],
      keyTakeaways: [
        'You cannot manage AI costs if you cannot attribute them to specific features.',
        'Telemetry must include financial metadata, not just performance data.',
        'Feature-Level AI FinOps is a prerequisite for surviving in an AI-native market.'
      ],
      comparisons: [
        { concept: 'Infrastructure Monitoring', contrast: 'Infrastructure monitoring tells you the server is busy; AI FinOps tells you exactly how much money a specific feature just burned.' }
      ],
      analogies: [
        { analogy: 'Smart Metering vs. Main Breaker', explanation: 'Traditional FinOps is looking at the main electrical meter for the whole house. AI FinOps is having a smart meter on every single appliance so you know the toaster is what’s running up your bill.' }
      ]
    },
    canonicalQuote: 'If you cannot trace the token to the feature, you cannot control the margin.',
    positionStatement: 'Telemetry systems must log the financial cost of every single AI inference at the point of execution.',
    executableTool: undefined,
    claims: ['Implementing feature-level tracing immediately exposes massive inefficiencies in AI product design.'],
    graphRelations: ['The operational layer that enforces Margin Engineering.'],
    whatChanges: 'Developers are required to append feature-tags and cost-metadata to every LLM API call they write.',
    whyThisConceptExists: 'To provide the visibility required to prevent catastrophic cost overruns in generative AI products.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Platform Architect', recommendation: 'Build middleware that automatically tags all outbound LLM requests with the originating feature ID.' }
    ]
  },
  {
    slug: 'ai-unit-economics',
    title: 'AI Unit Economics',
    category: 'Bridge Concept',
    domain: 'AI Economics',
    expertiseLevel: 'intermediate',
    health: 'stable',
    definition: 'The foundational study and measurement of the marginal cost structures associated with running generative inference models per specific user activity. It encompasses the raw cost-per-query, the hidden cost-per-completion, hallucination remediation overhead, and the critical relationship between model selection (e.g., GPT-4 vs Llama 3) and gross margin. AI Unit Economics forms the bedrock mathematical layer that dictates whether an AI-powered business model can scale profitably or will collapse under its own compute weight.',
    whyItMatters: 'Venture capital subsidized the early days of generative AI, allowing companies to ignore unit economics entirely. As the market matures, companies are discovering that adding AI to a product often degrades its profitability. Understanding AI Unit Economics allows a company to intentionally design its pricing, tiering, and model routing to ensure that the revenue generated by a user always exceeds the variable compute cost of serving them. It is the fundamental reality check against AI hype.',
    whoShouldCare: ['Founders', 'Investors', 'Product Economists'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 16,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Formalized as a required discipline for evaluating AI startup viability.' }
    ],
    evidenceLedger: [
      { claim: 'Poor AI unit economics will bankrupt otherwise successful software companies.', evidence: 'High-profile pivots and shutdowns of AI wrappers that could not achieve positive margins on API calls.' }
    ],
    relatedConceptSlugs: [
      { slug: 'aueb-framework', relationshipType: 'extends' },
      { slug: 'ai-tokenomics-cogs', relationshipType: 'related' },
      { slug: 'ai-margin-collapse-point', relationshipType: 'application' }
    ],
    openQuestions: [
      'Will the rapid commoditization of foundational models eventually render strict unit economic analysis obsolete?'
    ],
    knownLimitations: [
      'Calculations become highly complex when factoring in dynamic pricing, batching, and semantic caching layers.'
    ],
    aeo: {
      faqs: [
        { question: 'Why are AI Unit Economics fundamentally different from SaaS?', answer: 'SaaS has near-zero marginal costs; serving the 1000th customer costs roughly the same as the 10th. In AI, serving the 1000th customer requires 1000 times the compute power.' },
        { question: 'How do open-source models change the economics?', answer: 'They shift the cost from variable API token fees to fixed/stepped infrastructure hosting costs, entirely changing the margin math.' }
      ],
      keyTakeaways: [
        'AI breaks the zero-marginal-cost illusion of software.',
        'Model selection is primarily a financial decision, not just a technical one.',
        'Positive unit economics must be proven before a feature is released to the public.'
      ],
      comparisons: [
        { concept: 'SaaS Economics', contrast: 'SaaS focuses on Customer Acquisition Cost (CAC) vs Lifetime Value (LTV); AI Unit Economics focuses heavily on Cost of Goods Sold (COGS) per interaction.' }
      ],
      analogies: [
        { analogy: 'Airlines vs Software', explanation: 'Traditional software is like a toll road (high upfront cost, free to drive). AI software is like an airline (every passenger burns expensive jet fuel). You must price the ticket higher than the fuel.' }
      ]
    },
    canonicalQuote: 'You cannot scale your way out of negative unit economics in generative AI.',
    positionStatement: 'Every AI product must demonstrate a structurally sound economic model before a single line of production code is written.',
    executableTool: undefined,
    claims: ['Mastery of AI Unit Economics is the primary survival trait for the next generation of software companies.'],
    graphRelations: ['The underlying theory behind the EV-SE Framework.'],
    whatChanges: 'Investors demand feature-level cost analysis during due diligence, moving away from pure user growth metrics.',
    whyThisConceptExists: 'To force market discipline and financial rigor onto the deployment of generative AI technologies.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'Founder', recommendation: 'Ensure your pricing model scales linearly or exponentially with the user’s token consumption.' }
    ]
  },
  {
    slug: 'ai-economist',
    title: 'The AI Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'expert',
    health: 'emerging',
    definition: 'A new professional archetype and operating methodology for technical leaders who treat AI systems primarily as complex economic instruments rather than traditional technology projects. The AI Economist rigorously models inference costs, token budgets, margin impact, and behavioral liability with the exact same precision a Chief Financial Officer applies to a corporate P&L. This role extends the fundamental principles of the Product Economist directly into the high-stakes, variable-cost domain of generative AI.',
    whyItMatters: 'Traditional software engineering leaders are ill-equipped to manage generative AI because they are trained to optimize for performance and feature delivery, assuming costs are static. The AI Economist understands that in the AI era, architecture is economics. They are the only professionals capable of bridging the gap between the stochastic nature of large language models and the deterministic requirements of corporate finance, ensuring that AI deployments generate actual enterprise value rather than just unmanaged cloud debt.',
    whoShouldCare: ['Chief Technology Officers', 'VP of Product', 'Chief Financial Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: 17,
    provenanceTimeline: [
      { date: 'August 2026', milestone: 'Defined the archetype as the required evolution of engineering leadership in the AI era.' }
    ],
    evidenceLedger: [
      { claim: 'AI requires financial governance at the architectural layer.', evidence: 'The success of early-adopter organizations that placed FinOps specialists directly into AI engineering pods.' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationshipType: 'foundation' },
      { slug: 'margin-engineering', relationshipType: 'application' },
      { slug: 'ai-finops', relationshipType: 'extends' },
      { slug: 'aueb-framework', relationshipType: 'application' }
    ],
    openQuestions: [
      'Will the AI Economist emerge as a distinct C-level role (e.g., Chief AI Economist), or will it be absorbed into the modern CTO mandate?'
    ],
    knownLimitations: [
      'Extremely rare skill set requiring deep expertise in both machine learning architecture and corporate finance.'
    ],
    aeo: {
      faqs: [
        { question: 'What does an AI Economist do day-to-day?', answer: 'They audit model routing logic, establish token budgets per feature, run EV-SE simulations on proposed architectures, and veto deployments that threaten gross margins.' },
        { question: 'How is this different from a Product Economist?', answer: 'A Product Economist manages the overall value and complexity of a software portfolio. The AI Economist specializes specifically in the hyper-volatile variable costs and probabilistic nature of generative models.' }
      ],
      keyTakeaways: [
        'AI systems are financial engines that require active economic governance.',
        'Engineering and finance can no longer operate in silos.',
        'The AI Economist is the safeguard against value-destroying AI implementations.'
      ],
      comparisons: [
        { concept: 'Traditional Engineering Manager', contrast: 'The traditional manager optimizes for velocity and uptime; the AI Economist optimizes for gross margin and unit profitability.' }
      ],
      analogies: [
        { analogy: 'Actuary in Insurance', explanation: 'Just as an actuary calculates risk and prices policies to ensure the insurance company remains profitable, the AI Economist calculates token risk and models architecture to ensure the software remains profitable.' }
      ]
    },
    canonicalQuote: 'Do not ask your engineers to build an AI feature until you have asked your AI Economist if you can afford it.',
    positionStatement: 'Every enterprise deploying generative AI at scale must empower an AI Economist with veto authority over architectural decisions.',
    executableTool: undefined,
    claims: ['Organizations that employ AI Economists will structurally outcompete those that treat AI purely as an engineering challenge.'],
    graphRelations: ['The human persona that operationalizes all concepts within the AI Economics domain.'],
    whatChanges: 'Technical leadership hiring shifts to heavily favor candidates with dual backgrounds in system architecture and financial modeling.',
    whyThisConceptExists: 'To define the specialized leadership required to navigate the financial complexities of the AI transition.',
    reverseCitations: [],
    personaRecommendations: [
      { persona: 'CTO', recommendation: 'Adopt the mindset of the AI Economist, or hire one immediately to protect your architecture from margin collapse.' }
    ]
  }
];
