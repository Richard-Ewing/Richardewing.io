import { ConceptNode } from './concept-corpus';

export const TIER6_CONCEPTS: ConceptNode[] = [
  {
    slug: 'product-debt-index',
    title: 'Product Debt Index (PDI)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 2, knownLimitationsCount: 2 },
    definition: 'A diagnostic score ranging from 0 to 100 that quantifies the total technical debt of a software organization in explicit dollar terms. The Product Debt Index translates abstract engineering complexity into measurable carrying costs and valuation drag. It provides a standardized mechanism for product and finance teams to measure the economic penalty of unmanaged software feature accumulation. By establishing a direct link between code entropy and financial performance, the PDI forces accountability in architectural decision-making.',
    whyItMatters: 'Traditional technical debt metrics fail because they remain isolated within engineering departments as story points or refactoring tickets. The Product Debt Index bridges this gap by expressing debt as a financial liability on the balance sheet. When executives can see the explicit dollar cost of feature bloat, they allocate resources toward stabilization rather than blind expansion. This metric fundamentally alters how companies evaluate the true cost of their product roadmaps.',
    whoShouldCare: ['Chief Financial Officers', 'Chief Product Officers', 'Engineering Directors'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The PDI Framework', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/pdi' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Initial framework', publisher: 'Internal Research', date: 'August 2026', summary: 'Initial formulation of the Product Debt Index in proprietary research.' }
    ],
    evidenceLedger: [
      { id: 'cio-shipping-faster', title: 'Hey, Senior PMs: Shipping Faster Won\'t Get You Promoted', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'mtp-3-financial-metrics', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: '#', publisher: 'Mind the Product', type: 'Industry Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'beehiiv-negative-carry-code-crisis', title: 'The Negative-Carry Code Crisis', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'software-phase-transition', relationship: 'extends' },
      { slug: 'feature-bloat-calculus', relationship: 'depends_on' },
      { slug: 'complexity-tax', relationship: 'extends' },
      { slug: 'technical-insolvency', relationship: 'extends' }
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
        { vsConceptSlug: 'story-points', vsTitle: 'Story Points', keyDifferences: ['Story points measure effort; PDI measures financial liability.'], whenToUseWhich: 'Use story points for sprint planning, use PDI for board reporting.' }
      ],
      examples: {
        enterprise: 'A legacy bank recalculating PDI to justify a core system rewrite to the board.',
        startup: 'A Series B startup using PDI to halt feature development and refactor before scale.',
        antiPattern: 'Using PDI to punish individual engineering teams for taking on strategic technical debt.',
        commonMistake: 'Calculating PDI without including the loaded cost of engineering salaries.'
      }
    },
    canonicalQuote: 'Technical debt is an engineering problem. Product debt is a balance sheet crisis.',
    positionStatement: 'We must measure software complexity in the only language the board understands: dollars.',
    executableTool: {
      name: 'PDI Calculator',
      url: '/tools/pdi',
      description: 'Calculates the financial carrying cost of your existing feature portfolio.',
      type: 'Diagnostic Calculator'
    },
    claims: [
      { statement: 'Converting technical debt to financial debt accelerates executive intervention.', confidence: 0.95, counterarguments: ['Financializing technical concepts confuses non-technical stakeholders.'], supportingData: 'Case studies showing immediate budget accesses for refactoring post-PDI presentation.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'feature-bloat-calculus', title: 'Feature Bloat Calculus' }],
      applications: ['Board reporting'],
      contrastingConcepts: [{ slug: 'story-points', title: 'Story Points', distinction: 'Effort vs Financial Liability' }]
    },
    whatChanges: {
      engineering: 'Refactoring becomes a financially justified priority.',
      finance: 'Can accurately measure the ROI of technical debt repayment.',
      product: 'Must account for carrying costs before proposing new features.',
      security: 'Improved baseline quality reduces systemic vulnerabilities.'
    },
    whyThisConceptExists: {
      problem: 'Engineering cannot get funding to fix technical debt because executives only see new features as valuable.',
      existingApproaches: 'Complaining about code quality using story points or technical jargon.',
      gap: 'No shared language between engineering realities and financial oversight.',
      solution: 'A financial index that quantifies technical debt in terms of enterprise carrying cost.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CTO', takeaway: 'Use PDI to defend refactoring budgets to the CFO.', recommendedNextSlug: 'ev-se-framework' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 2026',
        primaryVenue: 'CIO.com & Mind the Product',
        canonicalPublicationId: 'cio-hey-senior-pms-shipping-faster-wont-get-you-promoted',
        genesisThesis: 'Quantifying technical debt as explicit dollar carrying costs and valuation drag on the balance sheet.'
      },
      internalCorpus: {
        publicationsCount: 3,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 2,
        bookChaptersCount: 1
      },
      humanEvidenceSummary: {
        independentAuthorsCount: 0,
        independentOrganizationsCount: 0,
        uniqueDomainsCount: 0,
        formalCitationsCount: 0,
        derivativesCount: 0,
        implementationsCount: 0,
        adoptionsCount: 0
      },
      humanSignals: [],
      evolutionTimeline: [
        {
          date: 'August 2026',
          phase: 'ORIGIN',
          headline: 'PDI Formulation & Financial Metric Specification',
          summary: 'Formulated the Product Debt Index diagnostic model connecting code entropy with explicit carrying costs.',
          linkedArtifactUrl: '/research/pdi'
        },
        {
          date: 'August 2026',
          phase: 'INTERNAL_EXPANSION',
          headline: 'Interactive Diagnostic Calculator Released',
          summary: 'Deployed the PDI calculator allowing product leaders to compute debt drag on a 0-100 scale.',
          linkedArtifactUrl: '/tools/pdi'
        }
      ]
    },
    entityUri: 'https://www.richardewing.io/concepts/product-debt-index#entity',
    problemMapping: {
      problemStatement: 'Technical debt remains isolated in engineering as story points, preventing executive intervention while compounding balance sheet liabilities.',
      financialImpact: 'Unmanaged feature accumulation drags enterprise valuation multiples by 20-40% during M&A and due diligence.',
      operationalBottleneck: 'Engineering and finance lack a shared quantitative language connecting code entropy to explicit carrying costs.',
      primaryPathway: {
        destination: 'RICHARD_EWING_ADVISORY',
        relationshipType: 'ADVISES_ON',
        channel: 'EXECUTIVE_ADVISORY',
        headline: 'Commission a Technical Due Diligence & PDI Audit',
        subtext: 'Retain Richard Ewing to calculate your organization’s Product Debt Index and present financial stabilization roadmaps to the board.',
        actionUrl: '/services/technical-due-diligence',
        actionLabel: 'Book Technical Due Diligence ↗',
        targetRole: 'PE Operating Partners & CPOs'
      },
      secondaryPathway: {
        destination: 'RICHARD_EWING_ADVISORY',
        relationshipType: 'MEASURES',
        channel: 'EXECUTIVE_ADVISORY',
        headline: 'Calculate Carrying Costs via Interactive Tool',
        subtext: 'Run the interactive PDI calculator to quantify technical debt carrying cost in dollars.',
        actionUrl: '/tools/pdi',
        actionLabel: 'Launch PDI Calculator ↗',
        targetRole: 'Engineering Directors & CFOs'
      }
    }
  },
  {
    slug: 'ev-se-framework',
    title: 'Enterprise Value Scenario Engine (EV-SE)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.90, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A valuation impact modeling framework that calculates how specific engineering and product decisions cascade into enterprise valuation multiples. The EV-SE explicitly models the compounding effects of technical debt, AI cost of goods sold (COGS), and gross margin compression. It provides a deterministic bridge between micro-level architecture choices and macro-level financial outcomes. This engine allows leaders to simulate the long-term financial consequences of their technical strategies before committing capital.',
    whyItMatters: 'Engineering decisions are rarely evaluated for their impact on enterprise valuation multiples until it is too late. The EV-SE allows organizations to model how a seemingly minor architectural compromise today will compress gross margins three years from now. By forecasting these outcomes, executives can avoid strategies that artificially inflate short-term metrics at the expense of long-term enterprise value. It forces a discipline of margin engineering at the earliest stages of product development.',
    whoShouldCare: ['Private Equity Operating Partners', 'Startup Founders', 'Chief Technology Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'EV-SE Modeling', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/ev-se' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Framework Design', publisher: 'Internal Research', date: 'August 2026', summary: 'Formalization of the EV-SE framework to connect engineering with enterprise valuation.' }
    ],
    evidenceLedger: [
      { id: 'cio-shipping-faster', title: 'Hey, Senior PMs: Shipping Faster Won\'t Get You Promoted', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'mtp-3-financial-metrics', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: '#', publisher: 'Mind the Product', type: 'Industry Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'linkedin-real-ai-opportunity', title: 'The Real AI Opportunity Isn\'t a Chatbot', url: '#', publisher: 'LinkedIn', type: 'Post', strength: 3 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'capitalization-matrix', relationship: 'depends_on' },
      { slug: 'ai-margin-squeeze', relationship: 'extends' },
      { slug: 'product-debt-index', relationship: 'extends' },
      { slug: 'dora-financial-translation', relationship: 'extends' }
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
        { vsConceptSlug: 'dcf-model', vsTitle: 'Standard Financial Modeling', keyDifferences: ['Standard models ignore code quality; EV-SE treats code structure as a primary financial variable.'], whenToUseWhich: 'Use DCF for baseline finance; EV-SE for technical strategy alignment.' }
      ],
      examples: {
        enterprise: 'A PE firm using EV-SE to accurately price a target SaaS company carrying heavy AI technical debt.',
        startup: 'A founder modeling the future valuation impact of choosing Llama-3 over GPT-4.',
        antiPattern: 'Ignoring technical debt inputs to make the EV-SE produce artificially high valuations.',
        commonMistake: 'Failing to model the variable cost curve of inference.'
      }
    },
    canonicalQuote: 'Code is not just logic; it is the raw material of enterprise value.',
    positionStatement: 'Every architectural choice is a financial choice in disguise.',
    executableTool: {
      name: 'EV-SE Calculator',
      url: '/tools/ev-se',
      description: 'Models the impact of engineering decisions on your enterprise valuation multiple.',
      type: 'Diagnostic Calculator'
    },
    claims: [
      { statement: 'Predicting margin compression early prevents catastrophic valuation drops.', confidence: 0.9, counterarguments: ['Valuation is driven purely by macro market conditions, not architecture.'], supportingData: 'Correlation data between AI variable costs and multiple compression.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'capitalization-matrix', title: 'Capitalization Matrix' }],
      applications: ['Due Diligence'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Forced to model long-term financial impacts of architecture.',
      finance: 'Gains visibility into technical drivers of valuation.',
      product: 'Prevents features that compress margin multiples.',
      security: 'Aligns security investments with valuation protection.'
    },
    whyThisConceptExists: {
      problem: 'Technical strategy is divorced from board-level financial expectations.',
      existingApproaches: 'Standard financial modeling that treats software architecture as a black box.',
      gap: 'No mechanism to translate code choices directly into valuation impacts.',
      solution: 'A scenario engine linking architecture directly to enterprise multiples.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Operating Partner', takeaway: 'Require EV-SE modeling during technical due diligence.', recommendedNextSlug: 'margin-engineering' }
    ]
  },
  {
    slug: 'aueb-framework',
    title: 'AI Unit Economics Benchmark (AUEB)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A diagnostic framework calculating the true cost per useful output, hallucination remediation cost, and break-even volume for artificial intelligence features. The AUEB moves beyond raw token costs to incorporate the human and computational overhead required to verify and correct AI-generated results. It establishes a standard methodology for determining whether an AI feature is economically viable at scale. This framework has been referenced extensively in CIO.com publications as the definitive standard for AI margin analysis.',
    whyItMatters: 'Many companies launch AI features based solely on the low cost of API tokens, ignoring the massive hidden costs of error correction, context management, and customer support. The AUEB exposes these hidden costs, providing a realistic picture of feature profitability. Without this benchmark, organizations risk scaling features that become exponentially more expensive as usage grows. It is the fundamental tool for preventing the AI margin collapse point.',
    whoShouldCare: ['Product Managers', 'AI System Architects', 'Finance Business Partners'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The AUEB Methodology', publisher: 'CIO.com', type: 'Tier-1 Article', url: '#' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'CIO.com Publication', publisher: 'CIO.com', date: 'August 2026', summary: 'Publication of the AUEB methodology in CIO.com.' }
    ],
    evidenceLedger: [
      { id: 'cio-claude-api-bill', title: 'Your Claude API Bill Is Higher Than Your Revenue', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'beehiiv-how-to-reduce-llm-api-token-costs-in-production', title: 'How to Reduce LLM API Token Costs in Production', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'beehiiv-ai-unit-economics-burn-rate', title: 'AI Unit Economics: Burn Rate and Technical Insolvency', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'builtin-make-ai-profitable', title: 'How to Make AI Profitable', url: '#', publisher: 'Built In', type: 'Industry Article', strength: 4 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-tokenomics-cogs', relationship: 'depends_on' },
      { slug: 'ai-volatility-tax', relationship: 'extends' },
      { slug: 'margin-engineering', relationship: 'implements' }
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
        { vsConceptSlug: 'cloud-finops', vsTitle: 'Cloud FinOps', keyDifferences: ['Cloud FinOps measures static infrastructure; AUEB measures variable, probabilistic inference workflows.'], whenToUseWhich: 'Use FinOps for servers, AUEB for generative features.' }
      ],
      examples: {
        enterprise: 'A telecom using AUEB to halt the rollout of a customer service chatbot that cost more to supervise than human agents.',
        startup: 'An AI tool modeling the true cost of unbounded context windows before pricing their pro tier.',
        antiPattern: 'Using only raw LLM API costs to declare a feature profitable.',
        commonMistake: 'Failing to include the human time spent reviewing probabilistic outputs.'
      }
    },
    canonicalQuote: 'The true cost of AI is not generation, but verification.',
    positionStatement: 'We must measure AI features by their net profitable output, not their gross generation volume.',
    executableTool: {
      name: 'AUEB Calculator',
      url: '/tools/aueb',
      description: 'Calculates the true unit economics of your AI feature including hallucination costs.',
      type: 'Diagnostic Calculator'
    },
    claims: [
      { statement: 'Factoring in verification costs completely changes the ROI calculus of generative AI.', confidence: 0.95, counterarguments: ['Base models will get so good that verification costs drop to zero.'], supportingData: 'Analyses showing human-in-the-loop costs still dominate production AI deployments.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-tokenomics-cogs', title: 'AI Tokenomics COGS' }],
      applications: ['Feature pricing', 'Margin engineering'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Telemetry must track verification retries, not just API latency.',
      finance: 'Can properly audit the profitability of individual AI features.',
      product: 'Must kill economically unviable AI features early in the prototyping phase.',
      security: 'Limits exposure to high-volume hallucination attacks.'
    },
    whyThisConceptExists: {
      problem: 'Companies launch AI features based solely on low token prices and lose money at scale.',
      existingApproaches: 'Basic cloud FinOps that misses human verification costs.',
      gap: 'No holistic framework for calculating the total cost of a probabilistic feature.',
      solution: 'A benchmark that models all human and compute costs required for a successful AI output.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Product Manager', takeaway: 'Run the AUEB before requesting engineering resources for a new AI feature.', recommendedNextSlug: 'ai-margin-collapse-point' }
    ]
  },
  {
    slug: 'aper-metric',
    title: 'APER (Annualized Productivity to Engineering Ratio)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 2 },
    definition: 'A macro-economic metric calculated by dividing Annual Recurring Revenue (ARR) by Total Engineering Headcount. APER replaces isolated, self-referential metrics like story point velocity with a direct measurement of economic output per engineer. It serves as a high-level indicator of whether engineering investments are translating into actual commercial value. Featured extensively in executive leadership discussions, APER aligns technical execution with corporate financial realities.',
    whyItMatters: 'Engineering teams often declare success because they shipped a high volume of code or completed many story points, even while the companyâ€™s revenue growth stalls. APER forces engineering leadership to take responsibility for commercial outcomes, not just output. It quickly identifies when an organization has hired beyond its capacity to generate revenue. This metric shifts the engineering culture from a factory mindset to a value-creation mindset.',
    whoShouldCare: ['VP of Engineering', 'Chief Executive Officers', 'Board Members'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Beyond Velocity: Introduction to APER', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/aper' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Metric Design', publisher: 'Internal Research', date: 'August 2026', summary: 'Introduced as an alternative to story points for executive reporting.' }
    ],
    evidenceLedger: [
      { id: 'cio-shipping-faster', title: 'Hey, Senior PMs: Shipping Faster Won\'t Get You Promoted', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'mtp-3-financial-metrics', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: '#', publisher: 'Mind the Product', type: 'Industry Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'linkedin-product-economist-structural-shift', title: 'The Product Economist: A Structural Shift', url: '#', publisher: 'LinkedIn', type: 'Post', strength: 3 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'depends_on' },
      { slug: 'ten-man-parity', relationship: 'extends' },
      { slug: 'dora-financial-translation', relationship: 'extends' },
      { slug: 'coordination-tax', relationship: 'extends' }
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
        { vsConceptSlug: 'story-point-velocity', vsTitle: 'Story Point Velocity', keyDifferences: ['Velocity measures motion; APER measures economic progress.'], whenToUseWhich: 'Use velocity for short-term capacity planning; use APER for executive performance evaluation.' }
      ],
      examples: {
        enterprise: 'A public software company using APER to justify a hiring freeze in engineering while revenue catches up.',
        startup: 'A scale-up tracking APER to ensure their engineering team does not outgrow their sales capacity.',
        antiPattern: 'Using APER on a weekly basis to micromanage individual developer output.',
        commonMistake: 'Failing to normalize APER during massive macroeconomic shifts.'
      }
    },
    canonicalQuote: 'Shipping code is a cost. Only shipping value is a victory.',
    positionStatement: 'Engineering leadership must be judged by the commercial success of the product, not the speed of the assembly line.',
    executableTool: {
      name: 'APER Calculator',
      url: '/tools/aper',
      description: 'Calculates your organization\'s APER and compares it to industry benchmarks.',
      type: 'Diagnostic Calculator'
    },
    claims: [
      { statement: 'Adopting APER fundamentally changes how engineering leaders prioritize the roadmap.', confidence: 0.9, counterarguments: ['Engineers should not be held responsible for sales outcomes.'], supportingData: 'Companies adopting APER see an immediate shift toward revenue-generating feature development.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'Product Economist' }],
      applications: ['Board reporting', 'Headcount planning'],
      contrastingConcepts: [{ slug: 'story-point-velocity', title: 'Story Point Velocity', distinction: 'Economic output vs engineering motion' }]
    },
    whatChanges: {
      engineering: 'Teams stop working on features that have no path to revenue generation.',
      finance: 'Can accurately gauge if engineering hiring is pacing with business growth.',
      product: 'Must map every feature clearly to commercial outcomes.',
      security: 'Security investments must be framed as revenue protection to avoid hurting APER.'
    },
    whyThisConceptExists: {
      problem: 'Engineering teams claim success based on velocity while the business stagnates.',
      existingApproaches: 'Measuring engineering solely by story points, DORA metrics, or lines of code.',
      gap: 'Lack of a macro metric tying engineering headcount directly to commercial output.',
      solution: 'A high-level ratio dividing ARR by engineering headcount.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'VP of Engineering', takeaway: 'Report APER at board meetings instead of velocity or burndown charts.', recommendedNextSlug: 'ten-man-parity' }
    ]
  },
  {
    slug: 'four-laws-probabilistic-software',
    title: 'The 4 Laws of Probabilistic Software',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'Four foundational laws governing the behavior, economics, and maintenance of AI-generated code. Law 1: AI code is probabilistic, not deterministic. Law 2: Complexity scales non-linearly with AI assistance. Law 3: The verification cost of AI code exceeds the generation cost. Law 4: AI-generated code accumulates debt faster than human-written code. These laws, coined in Built In, form the baseline for managing modern, AI-augmented engineering teams.',
    whyItMatters: 'The industry is treating AI-generated code as a free lunch, assuming that faster code generation strictly equates to higher productivity. The 4 Laws establish that the physics of software engineering have changed. Because the code is probabilistic, it introduces subtle, compounding errors that require massive human oversight. Ignoring these laws leads directly to the negative-carry code crisis, where systems become unmaintainable due to the sheer volume of unverified, machine-generated complexity.',
    whoShouldCare: ['Engineering Leaders', 'DevOps Engineers', 'AI Tooling Evaluators'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The 4 Laws of Probabilistic Software', publisher: 'Built In', type: 'Tier-1 Article', url: '#' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Built In Publication', publisher: 'Built In', date: 'February 2026', summary: 'Published in Built In as a warning against unmanaged AI code generation.' }
    ],
    evidenceLedger: [
      { id: 'beehiiv-negative-carry-code-crisis', title: 'The Negative-Carry Code Crisis', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'builtin-vibe-coding-era', title: 'The Vibe Coding Era', url: '#', publisher: 'Built In', type: 'Industry Article', strength: 4 as const, role: 'Supports' as const, date: 'August 2026' },
      { id: 'cio-copilot-bottleneck', title: 'The Copilot Bottleneck', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'cio-model-collapse', title: 'Model Collapse', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'linkedin-engineering-bottleneck-illusion', title: 'The Engineering Bottleneck Illusion: What Copilot Adoption Taught Us', url: 'https://www.linkedin.com/pulse/engineering-bottleneck-illusion-what-copilot-adoption-richard-ewing-f5qhc/', publisher: 'LinkedIn', type: 'Newsletter', strength: 5 as const, role: 'Extends' as const, date: 'September 3, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'implements' },
      { slug: 'negative-carry-code-crisis', relationship: 'causes' },
      { slug: 'vibe-coding', relationship: 'contradicts' },
      { slug: 'hallucination-tax', relationship: 'extends' }
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
        { vsConceptSlug: 'deterministic-systems', vsTitle: 'Deterministic Systems', keyDifferences: ['Deterministic systems always yield the same output for a given input; probabilistic systems require constant auditing.'], whenToUseWhich: 'Use deterministic systems for core logic; handle AI generation as untrusted input.' }
      ],
      examples: {
        enterprise: 'A massive CI/CD pipeline blocking direct pushes of AI-generated code without a mandatory senior review.',
        startup: 'A team finding themselves buried in technical debt 3 months after heavily relying on auto-copilots to hit an MVP.',
        antiPattern: 'Deploying agent-generated code directly to production without running determinisic test suites.',
        commonMistake: 'Assuming Law 1 is just a temporary limitation that will be fixed in the next LLM release.'
      }
    },
    canonicalQuote: 'We have automated the typing, but we have not automated the thinking.',
    positionStatement: 'Embrace AI generation, but govern it with ruthless, deterministic verification.',
    claims: [
      { statement: 'Organizations that ignore the verification cost will choke on their own AI-generated technical debt.', confidence: 0.95, counterarguments: ['AI agents will eventually verify their own code perfectly.'], supportingData: 'Rise of AI-induced bugs in enterprise repos.' }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Deterministic Governance', 'Code Review Practices'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Treats AI generation as flawless vs treats it as fundamentally flawed.' }]
    },
    whatChanges: {
      engineering: 'Processes shift focus from writing code to reading, reviewing, and testing code.',
      finance: 'Accounts for the verification tax when forecasting engineering bandwidth.',
      product: 'Adjusts release expectations acknowledging the verification bottleneck.',
      security: 'Implements stricter scanning on AI-generated pull requests.'
    },
    whyThisConceptExists: {
      problem: 'Engineering teams are blindly accepting AI-generated code and accumulating massive technical debt.',
      existingApproaches: 'Treating AI tools as standard IDE autocomplete features.',
      gap: 'No fundamental principles defining the unique economic and structural reality of probabilistic code.',
      solution: 'Four laws that clarify the necessary operational shift for AI-augmented teams.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Engineering Manager', takeaway: 'Increase time allocated for code reviews to account for Law 3.', recommendedNextSlug: 'deterministic-governance' }
    ]
  },
  {
    slug: 'ai-liability-gradient',
    title: 'The AI Liability Gradient',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Executive',
    health: { confidence: 0.90, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A four-zone risk model that maps exponential enterprise liability against increasing AI agent autonomy. Zone 1: Assisted (low liability, human in the loop). Zone 2: Supervised (moderate liability, human approves actions). Zone 3: Delegated (high liability, AI acts with human auditing after the fact). Zone 4: Autonomous (exponential liability, AI acts with full authority and no human oversight). This gradient visually and structurally demonstrates how risk compounds as human control is removed.',
    whyItMatters: 'Organizations are rushing to deploy autonomous agents without understanding the legal and financial liabilities they are assuming. The Liability Gradient provides a strict framework for governance, forcing teams to explicitly declare which zone a new AI feature operates within. By understanding that liability scales exponentially - not linearly - in Zones 3 and 4, companies can implement appropriate fail-safes, insurance, and auditing mechanisms before an autonomous agent triggers a catastrophic failure.',
    whoShouldCare: ['Chief Risk Officers', 'Legal Counsel', 'AI Product Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The AI Liability Gradient', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/liability-gradient' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Framework Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Codified the gradient to address rapid enterprise adoption of autonomous agents.' }
    ],
    evidenceLedger: [
      { id: 'cio-salesforce-sap-workflow-agents', title: 'Salesforce and SAP Workflow Agents', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'builtin-ai-security-breach', title: 'AI Security Breach', url: '#', publisher: 'Built In', type: 'Industry Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'builtin-agentic-ai-analysis', title: 'Agentic AI Analysis', url: '#', publisher: 'Built In', type: 'Industry Article', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'shadow-delegation', relationship: 'correlates_with' },
      { slug: 'deterministic-governance', relationship: 'implements' },
      { slug: 'agent-kill-switch', relationship: 'requires' }
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
        'Human oversight must match the speed and scale of the agentâ€™s actions.',
        'Risk teams must approve any feature moving up the liability gradient.'
      ],
      comparisons: [
        { vsConceptSlug: 'sae-levels', vsTitle: 'Self-Driving Car Autonomy Levels', keyDifferences: ['SAE levels apply to physical safety; the Liability Gradient applies to enterprise software and financial liability.'], whenToUseWhich: 'Use Liability Gradient for software agents.' }
      ],
      examples: {
        enterprise: 'A bank restricting AI loan approval tools strictly to Zone 2 (Supervised).',
        startup: 'An automation platform deploying a Zone 4 agent but wrapping it in EAAP to mitigate risk.',
        antiPattern: 'Deploying an agent into Zone 4 without any financial circuit breakers.',
        commonMistake: 'Assuming a feature is in Zone 2 when users are actually blindly rubber-stamping the output (Shadow Delegation).'
      }
    },
    canonicalQuote: 'Autonomy without governance is just automated liability.',
    positionStatement: 'Every AI agent must be explicitly categorized on the liability gradient before deployment.',
    claims: [
      { statement: 'Categorizing agents by liability forces proactive risk mitigation.', confidence: 0.95, counterarguments: ['Agent frameworks already handle safety natively.'], supportingData: 'Reduction in catastrophic agent failures when risk zoning is enforced.' }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Compliance reporting', 'Agent Kill Switches'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Must build explicit human-in-the-loop mechanisms for Zone 2 features.',
      finance: 'Can accurately assess insurance needs based on the gradient tier.',
      product: 'Forces risk assessment into feature scoping.',
      security: 'Dictates the level of deterministic controls needed (e.g. EAAP) for deployment.'
    },
    whyThisConceptExists: {
      problem: 'Enterprises are deploying AI agents blindly without accounting for the exponential liability of autonomy.',
      existingApproaches: 'Generic "AI Safety" guidelines that do not scale with agent capability.',
      gap: 'No clear mechanism to map software autonomy to financial risk.',
      solution: 'A four-zone framework clarifying exactly how much human control is required at each tier.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Chief Risk Officer', takeaway: 'Audit all existing AI tools and map them to the four zones.', recommendedNextSlug: 'eaap-protocol' }
    ]
  },
  {
    slug: 'retry-inflation',
    title: 'Retry Inflation',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The exponential expansion of API costs and latency that occurs when autonomous AI agents enter unbounded retry loops while attempting to correct their own errors. Because each subsequent attempt often requires passing the entire failure context back to the LLM, token spend compounds rapidly. Retry inflation turns a minor localized error into a cascading financial and computational drain, often resulting in massive, unexpected cloud bills.',
    whyItMatters: 'In traditional software, a failing loop might burn CPU cycles, which are relatively cheap. In LLM-based architectures, a failing loop burns API tokens, which directly hit the gross margin. If an agent tries to fix a script, fails, reads the error, and tries again five times, the context window grows larger with each attempt, making the fifth attempt significantly more expensive than the first. Without strict circuit breakers, retry inflation can destroy the unit economics of an AI application in minutes.',
    whoShouldCare: ['Cloud Architects', 'FinOps Engineers', 'AI Developers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The Economics of Retry Inflation', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/retry-inflation' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Pattern Discovery', publisher: 'Internal Research', date: 'August 2026', summary: 'Identified as a primary driver of unpredictable AI cloud spend.' }
    ],
    evidenceLedger: [
      { id: 'cio-model-collapse', title: 'Model Collapse', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'cio-claude-api-bill', title: 'Your Claude API Bill Is Higher Than Your Revenue', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'beehiiv-ai-unit-economics-burn-rate', title: 'AI Unit Economics: Burn Rate and Technical Insolvency', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'builtin-ai-coding-tools-practical-evaluation', title: 'I Used AI to Build My Startup. Here’s What I Learned. (Cursor vs. Google Antigravity)', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Industry Analysis', strength: 5 as const, role: 'Supports' as const, date: 'August 18, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'causes' },
      { slug: 'context-rot', relationship: 'correlates_with' },
      { slug: 'unreliability-tax', relationship: 'extends' },
      { slug: 'agentic-roi', relationship: 'extends' }
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
        { vsConceptSlug: 'infinite-loop', vsTitle: 'Infinite Loops in Traditional Code', keyDifferences: ['Traditional infinite loops cost cheap CPU cycles; AI infinite loops cost expensive API tokens.'], whenToUseWhich: 'N/A' }
      ],
      examples: {
        enterprise: 'An agent trying to scrape a broken website burning through $500 of tokens over a weekend.',
        startup: 'Truncating error logs before feeding them back into an agent to prevent context bloat.',
        antiPattern: 'Setting agent retries to `Infinity` to improve success rates.',
        commonMistake: 'Failing to implement hard token budgets per agent session.'
      }
    },
    canonicalQuote: 'An agent that refuses to give up is an agent that will bankrupt you.',
    positionStatement: 'All AI agent systems must implement financial circuit breakers on retry logic.',
    claims: [
      { statement: 'Unbounded agent retries represent a critical financial vulnerability in modern software architecture.', confidence: 0.95, counterarguments: ['Agents should be trusted to resolve their own errors without hard stops.'], supportingData: 'FinOps data showing massive token spikes originating from single, failing agent threads.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'context-rot', title: 'Context Rot' }],
      applications: ['Circuit Breaker Implementation'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Architects implement strict token-budget limits per agent session, halting execution when budgets are exceeded.',
      finance: 'Sets hard caps on LLM API keys to prevent unbounded spend.',
      product: 'Designs UX that gracefully hands off to a human when an agent fails.',
      security: 'Monitors agent loops for malicious intent or denial-of-wallet attacks.'
    },
    whyThisConceptExists: {
      problem: 'AI applications incur massive unexpected cloud bills when agents get stuck in failure loops.',
      existingApproaches: 'Treating AI agent retries like standard HTTP retries.',
      gap: 'No framework for understanding how context window expansion turns linear loops into exponential costs.',
      solution: 'Identifying Retry Inflation as a unique, critical architectural anti-pattern.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'FinOps Engineer', takeaway: 'Set up real-time billing alerts for anomalous token consumption spikes indicative of retry inflation.', recommendedNextSlug: 'ai-volatility-tax' }
    ]
  },
  {
    slug: 'eaap-protocol',
    title: 'Exogram Action Admissibility Protocol (EAAP)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An open standard and architectural RFC designed to govern the tool execution boundaries of autonomous AI agents. EAAP defines a strict set of binary admissibility gates that filter and validate proposed agent actions against deterministic allowlists prior to execution. By decoupling the probabilistic reasoning of the LLM from the deterministic execution of the environment, EAAP ensures that agents cannot perform destructive, unauthorized, or financially ruinous actions, even if they hallucinate the intent to do so. This is the foundational protocol powering Exogramâ€™s runtime governance.',
    whyItMatters: 'As agents move into Zone 3 and Zone 4 of the AI Liability Gradient, relying on system prompts to enforce safety is structurally insufficient; LLMs can always be jailbroken or confused. EAAP provides a hard, cryptographic boundary at the execution layer. It guarantees that regardless of what the LLM decides to do, the system will only execute mathematically verified, pre-approved actions. This is the only way to safely deploy autonomous agents in high-stakes enterprise environments without exposing the company to infinite liability.',
    whoShouldCare: ['Security Architects', 'AI Platform Engineers', 'Compliance Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'EAAP Specification', publisher: 'Internal Research', type: 'Protocol Specification', url: '/research/eaap' }
    ],
    provenanceTimeline: [
      { stage: 'Protocol Specification', label: 'Exogram Core RFC', publisher: 'Internal Research', date: 'August 2026', summary: 'Drafted as the core governance protocol for the Exogram platform.' }
    ],
    evidenceLedger: [
      { id: 'cio-salesforce-sap-workflow-agents', title: 'Salesforce and SAP Workflow Agents', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'beehiiv-runtime-governance-architecture', title: 'Runtime Governance Architecture', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'beehiiv-deterministic-control-plane', title: 'Deterministic Control Plane', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'formalizes' },
      { slug: 'agent-kill-switch', relationship: 'extends' },
      { slug: 'state-integrity-hashing', relationship: 'requires' }
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
        { vsConceptSlug: 'prompt-engineering', vsTitle: 'Prompt Engineering Constraints', keyDifferences: ['Prompt constraints are suggestions; EAAP is a cryptographic lock.'], whenToUseWhich: 'Use prompts for style; use EAAP for execution safety.' }
      ],
      examples: {
        enterprise: 'A bank using EAAP to block an agent from initiating wire transfers over $1,000 without multi-sig approval.',
        startup: 'An automation startup implementing EAAP to prevent agents from inadvertently deleting client databases.',
        antiPattern: 'Passing raw LLM output directly into a shell execution environment without an EAAP filter.',
        commonMistake: 'Writing highly complex regex rules instead of using proper EAAP schema validation.'
      }
    },
    canonicalQuote: 'Govern the execution, not the imagination. Let the model dream, but strictly regulate what its hands can touch.',
    positionStatement: 'Enterprise agent deployment is negligent without a deterministic admissibility protocol intercepting all tool calls.',
    claims: [
      { statement: 'EAAP is the mandatory bridge between probabilistic reasoning and deterministic enterprise systems.', confidence: 0.95, counterarguments: ['Future models will be smart enough not to make destructive mistakes.'], supportingData: 'The 100% failure rate of prompt-based security measures over a long enough timeline.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['Agent Security Platforms', 'Exogram Architecture'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Must build explicit deterministic boundaries around every tool exposed to an agent.',
      finance: 'Lowers risk profile of enterprise AI deployments.',
      product: 'Must specify the exact tool parameters needed for a feature to function safely.',
      security: 'Security teams stop auditing prompts and start auditing execution allowlists.'
    },
    whyThisConceptExists: {
      problem: 'System prompts are continually bypassed, leading to dangerous autonomous agent behavior.',
      existingApproaches: 'Telling the AI "do not do this" in the prompt.',
      gap: 'No deterministic execution boundary between the LLM and the real-world environment.',
      solution: 'A formal protocol (EAAP) that validates all agent actions against hard rules before execution.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Security Architect', takeaway: 'Implement EAAP middleware before allowing any LLM to execute database mutations.', recommendedNextSlug: 'state-integrity-hashing' }
    ]
  },
  {
    slug: 'margin-engineering',
    title: 'Margin Engineering',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The architectural discipline of designing and structuring software systems where gross profitability is treated as a first-class engineering constraint, alongside performance, security, and scalability. In AI-native products, because every feature relies on variable compute COGS (like LLM tokens), engineers must model, monitor, and cap the financial cost of inference at the feature level. Margin Engineering requires developers to actively design caching layers, model routing, and fallback mechanisms specifically to protect the companyâ€™s gross margin from unpredictable user behavior.',
    whyItMatters: 'In the SaaS era, software had high fixed costs but negligible variable costs, meaning margin took care of itself once the software was built. Generative AI fundamentally breaks this model; high usage can bankrupt a company if inference costs are not strictly controlled. Margin Engineering forces technical teams to take ownership of the P&L. If an engineer designs a feature that destroys unit economics, it is considered an architectural failure, not just a finance problem. It is the only way to build sustainable AI businesses.',
    whoShouldCare: ['Software Architects', 'Engineering Leaders', 'Founders'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Margin Engineering in AI', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/margin-engineering' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Discipline Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Introduced to align architectural practices with the new realities of AI unit economics.' }
    ],
    evidenceLedger: [
      { id: 'ev-margin-1', title: 'Architecting for Profitability', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-margin-collapse-point', relationship: 'predicts' },
      { slug: 'evergreen-ratio', relationship: 'depends_on' }
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
        { vsConceptSlug: 'performance-optimization', vsTitle: 'Performance Optimization', keyDifferences: ['Performance optimization reduces latency; Margin Engineering reduces COGS. Often they align, but sometimes they conflict.'], whenToUseWhich: 'Balance both depending on business needs.' }
      ],
      examples: {
        enterprise: 'A healthcare platform implementing semantic caching to serve 80% of LLM queries at zero marginal cost.',
        startup: 'A code-assist tool routing trivial autocomplete requests to Llama-3 and complex refactoring requests to GPT-4.',
        antiPattern: 'Sending every single user interaction to the most expensive frontier model by default.',
        commonMistake: 'Failing to model the cost of context window expansion as a user interaction gets longer.'
      }
    },
    canonicalQuote: 'If your architecture cannot guarantee a positive gross margin, it is a broken architecture.',
    positionStatement: 'We must improve financial viability to the same level of architectural importance as security and uptime.',
    claims: [
      { statement: 'Treating margin as an engineering problem prevents business model failure in AI companies.', confidence: 0.95, counterarguments: ['Engineers should focus on user experience; finance should worry about margin.'], supportingData: 'Startups failing due to runaway API costs despite high user growth.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-unit-economics', title: 'AI Unit Economics' }],
      applications: ['System Architecture', 'Model Routing'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Architectural reviews now require a signed-off economic model before code is written.',
      finance: 'P&L becomes highly predictable despite variable usage patterns.',
      product: 'Features must be designed with cost ceilings built-in.',
      security: 'Rate limiting becomes a primary defense against margin destruction.'
    },
    whyThisConceptExists: {
      problem: 'Generative AI applications with high variable costs are destroying gross margins.',
      existingApproaches: 'Relying on after-the-fact FinOps to cut cloud costs.',
      gap: 'No practice for proactively designing systems specifically to protect unit economics.',
      solution: 'An architectural discipline that forces gross margin constraints directly into code.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Software Architect', takeaway: 'Implement semantic caching immediately to reduce redundant LLM calls and protect margin.', recommendedNextSlug: 'ai-margin-collapse-point' }
    ]
  },
  {
    slug: 'ai-margin-collapse-point',
    title: 'The AI Margin Collapse Point',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The specific, calculable query volume threshold where the variable costs of operating an AI feature exceed the fixed subscription revenue generated by the user. Beyond this mathematical inflection point, the productâ€™s unit economics invert, and every additional user interaction actively erodes gross margin. Identifying the collapse point is critical for setting pricing tiers, throttling usage, and designing cost-aware system architectures.',
    whyItMatters: 'Many companies offer "unlimited" AI generation as a marketing tactic, relying on the assumption that average usage will remain low. When power users discover the utility of the tool, they rapidly cross the Margin Collapse Point, turning the companyâ€™s best customers into its biggest financial liabilities. If leadership does not know where this point exists, they cannot implement the necessary throttling, caching, or tiering required to survive hyper-growth.',
    whoShouldCare: ['Pricing Strategists', 'Product Managers', 'Chief Financial Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Defining the Collapse Point', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/margin-collapse' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Threshold Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Defined the mathematical threshold for AI feature unprofitability.' }
    ],
    evidenceLedger: [
      { id: 'ev-collapse-1', title: 'Power User Deficits', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationship: 'depends_on' },
      { slug: 'aueb-framework', relationship: 'implements' }
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
        { vsConceptSlug: 'traditional-saas-churn', vsTitle: 'Traditional SaaS Churn', keyDifferences: ['In SaaS, you worry about users leaving; in AI, you worry about power users staying and generating too much.'], whenToUseWhich: 'Monitor churn for baseline health; monitor the collapse point for unit viability.' }
      ],
      examples: {
        enterprise: 'A SaaS company quietly throttling generation speed for top 5% users to keep them below the collapse point.',
        startup: 'Replacing an "Unlimited" plan with a credit-based system to enforce positive unit economics.',
        antiPattern: 'Offering truly unlimited frontier model access for a flat monthly fee.',
        commonMistake: 'Failing to recalculate the collapse point when upgrading to a more capable, more expensive LLM version.'
      }
    },
    canonicalQuote: 'In the AI era, your power users can destroy your P&L if you do not know where the collapse point lies.',
    positionStatement: 'Never deploy a flat-rate pricing model for an AI feature without mathematically proving the margin collapse point is safely out of reach for 99% of users.',
    claims: [
      { statement: 'Identifying the collapse point forces rational pricing strategies for generative AI products.', confidence: 0.95, counterarguments: ['Venture funding will cover early losses until API prices drop.'], supportingData: 'The collapse of numerous AI wrappers offering flat-rate pricing.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'margin-engineering', title: 'Margin Engineering' }],
      applications: ['Pricing strategy', 'Rate limiting'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Must build telemetry to warn users as they approach their individual collapse threshold.',
      finance: 'Can accurately forecast profitability based on varied usage tiers.',
      product: 'Companies move away from unlimited tiers and implement hard usage caps.',
      security: 'DDoS attacks are treated as direct financial attacks aiming to trigger the collapse point.'
    },
    whyThisConceptExists: {
      problem: 'Flat-rate AI features lose money at scale.',
      existingApproaches: 'Hoping that average user engagement stays low.',
      gap: 'No mathematical threshold used to explicitly cap variable feature costs.',
      solution: 'A formulaic threshold identifying exactly when a customer becomes unprofitable.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Pricing Strategist', takeaway: 'Ensure all pricing tiers have a safety valve when users approach the Margin Collapse Point.', recommendedNextSlug: 'aueb-framework' }
    ]
  },
  {
    slug: 'complexity-tax',
    title: 'The Complexity Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The economic phenomenon where the quadratic formula for connections (n * (n-1)/2) is applied directly to feature bloat within software products. The Complexity Tax dictates that each new feature does not add a linear, isolated cost; rather, it creates combinatorial integration surface area with every existing feature in the system. This tax manifests as exponentially slower release cycles, massive QA burdens, and degraded user experiences as the system grows.',
    whyItMatters: 'Product teams continually justify new features by looking only at the isolated cost to build them. They ignore the Complexity Tax - the permanent, compounding cost of maintaining that feature and ensuring it does not break the rest of the system. This ignorance leads to feature bloat, where the organization eventually spends 80% of its engineering capacity just maintaining the connections between features rather than creating new value. Understanding this tax is essential for knowing when to sunset legacy features.',
    whoShouldCare: ['Product Managers', 'Engineering Managers', 'System Architects'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The Mathematics of Bloat', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/complexity-tax' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Feature Mathematics', publisher: 'Internal Research', date: 'August 2026', summary: 'Formalized the mathematical relationship between feature count and maintenance burden.' }
    ],
    evidenceLedger: [
      { id: 'ev-tax-1', title: 'Quadratic Burden', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'feature-bloat-calculus', relationship: 'depends_on' },
      { slug: 'product-debt-index', relationship: 'implements' }
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
        { vsConceptSlug: 'linear-cost', vsTitle: 'Linear Development Costs', keyDifferences: ['Linear models assume feature 100 costs the same to build as feature 1. The Complexity Tax proves feature 100 costs exponentially more because it must integrate with the previous 99.'], whenToUseWhich: 'Use linear for single scripts; use complexity tax for enterprise applications.' }
      ],
      examples: {
        enterprise: 'A CRM platform that takes 6 months to add a single button because QA must test it against 500 legacy integrations.',
        startup: 'Deleting the bottom 20% of features to instantly speed up engineering velocity by 30%.',
        antiPattern: 'Keeping an unused feature live because "it is already built and costs nothing".',
        commonMistake: 'Failing to calculate the testing and integration overhead when scoping a new epic.'
      }
    },
    canonicalQuote: 'Every feature you add is a tax on everything you build tomorrow.',
    positionStatement: 'A healthy product roadmap must prioritize feature deletion as highly as feature creation.',
    claims: [
      { statement: 'Recognizing the Complexity Tax forces teams to justify features based on long-term systemic impact.', confidence: 0.95, counterarguments: ['Microservices isolate complexity completely.'], supportingData: 'The inevitable slowing of velocity in all mature codebases regardless of architecture.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'feature-bloat-calculus', title: 'Feature Bloat Calculus' }],
      applications: ['Roadmap planning', 'Code deprecation'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Adopts strict "one in, one out" policies for system architecture.',
      finance: 'Accounts for compounding maintenance overhead in long-term R&D budgets.',
      product: 'Actively hunts for features to sunset.',
      security: 'Surface area reduction becomes a primary defense strategy.'
    },
    whyThisConceptExists: {
      problem: 'Organizations constantly add features but never remove them, choking their own velocity.',
      existingApproaches: 'Treating legacy features as free once they are shipped.',
      gap: 'No mathematical model explaining why velocity grinds to a halt as feature counts grow.',
      solution: 'Applying quadratic network effects directly to software feature portfolios.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Product Manager', takeaway: 'Audit product analytics and delete the bottom 10% of features by usage to immediately lower the Complexity Tax.', recommendedNextSlug: 'product-debt-index' }
    ]
  },
  {
    slug: 'evergreen-ratio',
    title: 'The Evergreen Ratio',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.9, evidenceCount: 2, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A financial diagnostic metric representing the ratio of fixed-cost software revenue (traditional SaaS features) to variable-cost AI revenue within a product portfolio. A high Evergreen Ratio indicates a stable, high-margin business with strong structural safety. A declining Evergreen Ratio signals that a company is becoming dangerously dependent on high-COGS AI features, exposing it to AI margin squeeze and severe valuation compression.',
    whyItMatters: 'As traditional SaaS companies rapidly bolt on AI features, they are unknowingly altering their fundamental economic structure. They are trading high-margin, predictable revenue for low-margin, variable-cost revenue. If the Evergreen Ratio drops too low, the company ceases to be a highly valued software company and begins to look economically like a low-margin services or manufacturing business. Tracking this ratio is essential for maintaining enterprise value during an AI transition.',
    whoShouldCare: ['Chief Financial Officers', 'Board Members', 'SaaS Founders'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The Evergreen Ratio', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/evergreen-ratio' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Metric Formalization', publisher: 'Internal Research', date: 'August 2026', summary: 'Introduced as a board-level metric for monitoring AI transition risk.' }
    ],
    evidenceLedger: [
      { id: 'ev-evergreen-1', title: 'Margin Dilution in SaaS', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationship: 'implements' },
      { slug: 'ai-margin-collapse-point', relationship: 'predicts' }
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
        { vsConceptSlug: 'arr-growth', vsTitle: 'Total ARR Growth', keyDifferences: ['ARR growth tracks top-line success; the Evergreen Ratio tracks the structural health and profitability of that revenue.'], whenToUseWhich: 'Track both simultaneously.' }
      ],
      examples: {
        enterprise: 'A legacy CRM company strictly maintaining a 80/20 Evergreen Ratio to preserve its valuation multiple.',
        startup: 'An AI-first startup struggling to raise Series B because their Evergreen Ratio is near 0%.',
        antiPattern: 'Celebrating massive revenue growth driven entirely by low-margin AI API usage.',
        commonMistake: 'Failing to segment AI variable revenue from standard fixed subscription revenue in accounting.'
      }
    },
    canonicalQuote: 'Trading zero-marginal-cost software for high-variable-cost AI is a dangerous economic bargain.',
    positionStatement: 'Companies must actively manage their Evergreen Ratio to prevent their SaaS valuation multiples from collapsing.',
    claims: [
      { statement: 'Monitoring the Evergreen Ratio prevents accidental self-sabotage during an AI pivot.', confidence: 0.9, counterarguments: ['All software will become AI software, rendering the ratio obsolete.'], supportingData: 'Immediate multiple compression seen in public SaaS companies with uncontrolled AI COGS.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'margin-engineering', title: 'Margin Engineering' }],
      applications: ['Board reporting', 'Valuation modeling'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Teams must balance AI integrations with high-margin deterministic features.',
      finance: 'Segments revenue streams to monitor the structural health of the business.',
      product: 'Designs AI features specifically to funnel users into evergreen retention loops.',
      security: 'N/A'
    },
    whyThisConceptExists: {
      problem: 'SaaS companies are bolting on AI features and destroying their own gross margins.',
      existingApproaches: 'Treating all ARR as equal value.',
      gap: 'No board-level metric identifying the specific risk of high-variable-cost AI revenue dilution.',
      solution: 'A ratio tracking the balance between zero-marginal-cost software and high-variable-cost AI.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CFO', takeaway: 'Include the Evergreen Ratio in all quarterly board decks to contextualize ARR growth.', recommendedNextSlug: 'ev-se-framework' }
    ]
  },
  {
    slug: 'four-tiers-of-autonomy',
    title: 'Four Tiers of Autonomy',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Career Economics',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A four-stage career progression framework defining how professionals evolve in their capacity to handle complexity and generate value. Tier 1 (The Reporter) identifies problems and waits for instruction. Tier 2 (The Solver) is given a problem and independently executes a solution. Tier 3 (The Communicator) anticipates systemic problems, proposes solutions, and aligns cross-functional teams. Tier 4 (The Architect/Apex) designs resilient systems that prevent entire classes of problems from existing in the first place.',
    whyItMatters: 'Most career ladders focus on technical skills or years of experience, which poorly correlate with actual business impact. The Four Tiers of Autonomy shift the focus entirely to agency and problem-solving scope. It clarifies exactly why someone is or is not ready for promotion. A Tier 2 engineer might write brilliant code, but if they cannot align a team (Tier 3), they cannot be a staff engineer. This framework provides clear, actionable language for professional development and performance reviews.',
    whoShouldCare: ['Engineering Managers', 'Human Resources', 'Individual Contributors'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The Four Tiers', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/four-tiers' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Framework Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Formalized the autonomy framework to standardize promotion criteria.' }
    ],
    evidenceLedger: [
      { id: 'linkedin-hardest-truth-clarity', title: 'The Hardest Truth: Don\'t Hire Visionaries, Hire for Clarity', url: '#', publisher: 'LinkedIn', type: 'Post', strength: 3 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'beehiiv-senior-pm-trap', title: 'The Senior PM Trap', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'linkedin-product-economist-structural-shift', title: 'The Product Economist: A Structural Shift', url: '#', publisher: 'LinkedIn', type: 'Post', strength: 3 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'linkedin-ai-economist-leading-product-strategy', title: 'The AI Economist: Leading Product Strategy When Build Costs Approach Zero', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', publisher: 'LinkedIn', type: 'Executive Publication' as const, strength: 5 as const, role: 'Extends' as const, date: 'August 20, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'double-diamond-career-trajectory', relationship: 'extends' },
      { slug: 'product-economist', relationship: 'implements' },
      { slug: 'ai-economist', relationship: 'extends' },
      { slug: 'aper-metric', relationship: 'extends' }
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
        { vsConceptSlug: 'traditional-ladders', vsTitle: 'Traditional Career Ladders', keyDifferences: ['Traditional ladders measure inputs; this framework measures autonomy and scope.'], whenToUseWhich: 'Use tiers of autonomy for actual promotion readiness.' }
      ],
      examples: {
        enterprise: 'A company rewriting its engineering leveling guide entirely around autonomy instead of years of experience.',
        startup: 'A founder forcing junior hires to immediately act at Tier 2 to survive fast-paced pivots.',
        antiPattern: 'Promoting a brilliant Tier 2 coder to management without verifying Tier 3 communication skills.',
        commonMistake: 'Assuming someone at Tier 4 never writes code.'
      }
    },
    canonicalQuote: 'Do not reward the firefighter for putting out the blaze; reward the architect who built the building out of stone.',
    positionStatement: 'Career progression must be strictly tied to an individualâ€™s ability to handle increasingly ambiguous, systemic complexity.',
    claims: [
      { statement: 'Evaluating employees by their Tier of Autonomy drastically improves the quality of leadership promotions.', confidence: 0.95, counterarguments: ['Technical mastery should be enough for senior promotions.'], supportingData: 'Reduction in Peter Principle failures post-adoption.' }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Performance Reviews', 'Leveling Guides'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Promotions focus on systemic impact rather than pure coding speed.',
      finance: 'Aligns compensation strictly with the level of business problems solved.',
      product: 'Teams expect engineers to actively propose solutions, not just build tickets.',
      security: 'Requires architects to prevent vulnerabilities via systemic design (Tier 4).'
    },
    whyThisConceptExists: {
      problem: 'Brilliant individual contributors fail when promoted to leadership.',
      existingApproaches: 'Promoting based on years of experience or pure technical mastery.',
      gap: 'No framework clarifying that leadership requires a fundamental shift in agency and problem scope.',
      solution: 'A four-tier model explicitly defining how autonomy scales.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Individual Contributor', takeaway: 'Stop waiting to be assigned tasks; identify systemic issues and propose complete solutions to move to Tier 3.', recommendedNextSlug: 'double-diamond-career-trajectory' }
    ]
  },
  {
    slug: 'double-diamond-career-trajectory',
    title: 'Double Diamond Career Trajectory',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Career Economics',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A visual model mapping the critical "Leadership Reset" point in a professional\'s career. The first diamond represents the expansion and mastery of deep individual contributor (IC) skills. The narrowing between the diamonds represents the painful reset where those specialized skills hit diminishing returns. To enter the second diamond (executive and systemic leadership), the professional must abandon the tactics that made them successful in the first diamond and build entirely new skills in delegation, systems thinking, and economic alignment.',
    whyItMatters: 'Many brilliant engineers and designers stall in their careers because they try to solve second-diamond problems using first-diamond tools - usually by just working harder or writing more code. The Double Diamond visualizes why this fails. What got you to the peak of the first diamond will actively prevent you from entering the second. Acknowledging this reset helps professionals navigate the psychological difficulty of feeling like a beginner again when transitioning to senior leadership roles.',
    whoShouldCare: ['Senior Engineers', 'New Managers', 'Executive Coaches'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Why Static Resumes Are Dead: The Shift to Career Operating Systems', publisher: 'LinkedIn', type: 'Executive Essay', url: 'https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c' },
      { step: 2, title: 'The Double Diamond', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/double-diamond' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'Why Static Resumes Are Dead', publisher: 'LinkedIn', date: 'August 20, 2026', url: 'https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c', summary: 'Outlined the death of flat resume PDFs and the rise of dynamic Career Operating Systems that map verifiable talent trajectories across the double diamond.' },
      { stage: 'Observation', label: 'Trajectory Model', publisher: 'Internal Research', date: 'August 2026', summary: 'Created to explain the high failure rate of senior ICs transitioning to management.' }
    ],
    evidenceLedger: [
      { id: 'linkedin-why-static-resumes-dead', title: 'Why Static Resumes Are Dead: The Shift to Career Operating Systems', url: 'https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c', publisher: 'LinkedIn', type: 'Executive Publication' as const, strength: 5 as const, role: 'Supports' as const, date: 'August 20, 2026' },
      { id: 'ev-diamond-1', title: 'The Leadership Reset', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'four-tiers-of-autonomy', relationship: 'depends_on' },
      { slug: 'product-economist', relationship: 'extends' }
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
        { vsConceptSlug: 'linear-growth', vsTitle: 'Linear Career Growth', keyDifferences: ['Linear growth implies a steady climb; the Double Diamond acknowledges a necessary dip and complete paradigm shift in the middle.'], whenToUseWhich: 'Use Double Diamond for transitions to management.' }
      ],
      examples: {
        enterprise: 'A VP of Engineering coaching a struggling new manager through the reset point.',
        startup: 'A technical founder struggling to delegate because they refuse to leave the first diamond.',
        antiPattern: 'A new manager secretly writing code at night because they miss first-diamond productivity.',
        commonMistake: 'Assuming leadership is just doing the IC job, but louder.'
      }
    },
    canonicalQuote: 'The tools of execution cannot build the house of strategy.',
    positionStatement: 'We must normalize and support the painful period of incompetence that occurs when an expert IC transitions to a novice leader.',
    claims: [
      { statement: 'Understanding the Double Diamond prevents burnout in newly promoted engineering leaders.', confidence: 0.95, counterarguments: ['Great coders naturally make great managers.'], supportingData: 'Feedback from leadership training cohorts utilizing the model.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'four-tiers-of-autonomy', title: 'Four Tiers of Autonomy' }],
      applications: ['Leadership Coaching'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Companies provide specialized coaching right at the reset point.',
      finance: 'Accounts for a temporary drop in output when promoting internally to management.',
      product: 'New leaders focus entirely on team alignment rather than building features.',
      security: 'Managers must focus on systemic policies rather than writing individual security patches.'
    },
    whyThisConceptExists: {
      problem: 'Top ICs are promoted to management and immediately fail or burn out.',
      existingApproaches: 'Telling them to just "delegate more".',
      gap: 'No visual or psychological model explaining why the skills that got them promoted are now useless.',
      solution: 'A trajectory model validating the painful reset required to enter true leadership.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'New Engineering Manager', takeaway: 'Accept that your output is no longer measured by your commits, but by the efficiency of your system.', recommendedNextSlug: 'product-economist' }
    ],
    entityUri: 'https://www.richardewing.io/concepts/double-diamond-career-trajectory#entity',
    problemMapping: {
      problemStatement: 'Senior engineers and managers stall at the leadership reset point because flat resume PDFs fail to represent second-diamond systems leadership and economic impact.',
      financialImpact: 'Misaligned hiring and career stagnation cost senior professionals $50k-$150k in annual compensation upside while leading to 40% first-time manager failure rates.',
      operationalBottleneck: 'Hiring platforms evaluate talent on keyword density rather than verifiable trajectory and context.',
      primaryPathway: {
        destination: 'CAREERWIN_PLATFORM',
        relationshipType: 'ADDRESSES',
        channel: 'CAREER_INTELLIGENCE',
        headline: 'Map Trajectory on Career Operating System',
        subtext: 'CareerWin replaces static resume PDFs with dynamic context engines and leadership trajectory mapping.',
        actionUrl: '/careerwin',
        actionLabel: 'Explore CareerWin Platform ↗',
        targetRole: 'Senior Engineers & Engineering Leaders'
      },
      secondaryPathway: {
        destination: 'RICHARD_EWING_ADVISORY',
        relationshipType: 'ADVISES_ON',
        channel: 'EXECUTIVE_ADVISORY',
        headline: 'Retain Career Coaching & Executive Pathing',
        subtext: 'Structured executive career advisory for senior ICs transitioning into engineering leadership and VP roles.',
        actionUrl: '/tools/career-pathing',
        actionLabel: 'Explore Career Pathing Tool ↗',
        targetRole: 'Principal Engineers & Directors'
      }
    }
  },
  {
    slug: 'ai-finops',
    title: 'Feature-Level AI FinOps',
    category: 'Bridge Concept',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The discipline of granular cost attribution and optimization applied specifically to the individual feature level, moving beyond generalized infrastructure monitoring. While traditional FinOps optimizes bulk cloud spend (servers, databases) at the resource layer, Feature-Level AI FinOps traces token costs, inference latency, and API call volumes to specific product features, user cohorts, and even individual prompt interactions. This creates a hyper-accurate, real-time map of exactly which parts of the application are generating or destroying gross margin.',
    whyItMatters: 'In traditional SaaS, costs are smeared across the entire infrastructure, making it acceptable to look at bulk AWS bills. AI completely breaks this. A single poorly designed chat feature can consume 80% of a companyâ€™s API budget in a weekend. Without Feature-Level AI FinOps, finance teams see a massive OpenAI bill but have no idea which feature or user caused it. This discipline allows organizations to quarantine unprofitable features, dynamically route traffic to cheaper models, and enforce strict token budgets at the point of interaction.',
    whoShouldCare: ['FinOps Engineers', 'Platform Architects', 'AI Product Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Feature-Level FinOps', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/ai-finops' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Discipline Evolution', publisher: 'Internal Research', date: 'August 2026', summary: 'Established as the necessary evolution of FinOps for generative AI applications.' }
    ],
    evidenceLedger: [
      { id: 'beehiiv-token-burn-analytics', title: 'Token Burn Analytics: Real-Time LLM Cost Allocation', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'beehiiv-why-scaling-breaks-bank', title: 'Why Scaling Software Suddenly Breaks the Bank', url: '#', publisher: 'Beehiiv', type: 'Newsletter', strength: 4 as const, role: 'Extends' as const, date: 'August 2026' },
      { id: 'cio-claude-api-bill', title: 'Your Claude API Bill Is Higher Than Your Revenue', url: '#', publisher: 'CIO.com', type: 'Tier-1 Article', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'margin-engineering', relationship: 'implements' },
      { slug: 'aueb-framework', relationship: 'depends_on' },
      { slug: 'ai-tokenomics-cogs', relationship: 'extends' },
      { slug: 'inference-economics', relationship: 'extends' }
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
        { vsConceptSlug: 'infrastructure-monitoring', vsTitle: 'Infrastructure Monitoring', keyDifferences: ['Infrastructure monitoring tells you the server is busy; AI FinOps tells you exactly how much money a specific feature just burned.'], whenToUseWhich: 'Use both.' }
      ],
      examples: {
        enterprise: 'A bank requiring all LLM requests to be tagged with a feature-ID to bill costs back to specific business units.',
        startup: 'Instrumenting middleware that automatically cuts off user access when a feature exceeds its daily token budget.',
        antiPattern: 'Relying on the single monthly OpenAI invoice to manage application costs.',
        commonMistake: 'Failing to include vector database query costs in the feature finops calculation.'
      }
    },
    canonicalQuote: 'If you cannot trace the token to the feature, you cannot control the margin.',
    positionStatement: 'Telemetry systems must log the financial cost of every single AI inference at the point of execution.',
    claims: [
      { statement: 'Implementing feature-level tracing immediately exposes massive inefficiencies in AI product design.', confidence: 0.95, counterarguments: ['Adding financial telemetry slows down the application layer.'], supportingData: 'Case studies of startups discovering 50% of their API spend came from a single ghost-feature.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'margin-engineering', title: 'Margin Engineering' }],
      applications: ['Cost Optimization', 'Telemetry Architecture'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Developers are required to append feature-tags and cost-metadata to every LLM API call they write.',
      finance: 'Can accurately audit gross margins feature-by-feature.',
      product: 'Deprecates features that are technically functional but economically toxic.',
      security: 'Identifies token-based attacks through anomalous feature-spend spikes.'
    },
    whyThisConceptExists: {
      problem: 'Companies receive massive API bills and cannot pinpoint which part of the software caused it.',
      existingApproaches: 'Traditional FinOps applied broadly across an AWS account.',
      gap: 'No methodology for tracking highly variable, stochastic token spend down to the UX layer.',
      solution: 'Granular, feature-level financial telemetry for generative AI.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Platform Architect', takeaway: 'Build middleware that automatically tags all outbound LLM requests with the originating feature ID.', recommendedNextSlug: 'ai-unit-economics' }
    ]
  },
  {
    slug: 'ai-unit-economics',
    title: 'AI Unit Economics',
    category: 'Bridge Concept',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 5, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The foundational study and measurement of the marginal cost structures associated with running generative inference models per specific user activity. It encompasses the raw cost-per-query, the hidden cost-per-completion, hallucination remediation overhead, and the critical relationship between model selection (e.g., GPT-4 vs Llama 3) and gross margin. AI Unit Economics forms the bedrock mathematical layer that dictates whether an AI-powered business model can scale profitably or will collapse under its own compute weight.',
    whyItMatters: 'Venture capital subsidized the early days of generative AI, allowing companies to ignore unit economics entirely. As the market matures, companies are discovering that adding AI to a product often degrades its profitability. Understanding AI Unit Economics allows a company to intentionally design its pricing, tiering, and model routing to ensure that the revenue generated by a user always exceeds the variable compute cost of serving them. It is the fundamental reality check against AI hype.',
    whoShouldCare: ['Founders', 'Investors', 'Product Economists'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Introduction to AI Unit Economics', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/ai-unit-economics' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Domain Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Formalized as a required discipline for evaluating AI startup viability.' }
    ],
    evidenceLedger: [
      { id: 'ev-unit-1', title: 'The End of ZIRP AI', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'aueb-framework', relationship: 'formalizes' },
      { slug: 'ai-margin-collapse-point', relationship: 'depends_on' }
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
        { vsConceptSlug: 'saas-economics', vsTitle: 'SaaS Economics', keyDifferences: ['SaaS focuses on CAC vs LTV; AI Unit Economics focuses heavily on COGS per interaction.'], whenToUseWhich: 'Use both.' }
      ],
      examples: {
        enterprise: 'A PE firm passing on an acquisition target because its AI Unit Economics showed a gross margin of 12%.',
        startup: 'A founder switching from Claude to a fine-tuned open-source model purely to achieve positive unit economics.',
        antiPattern: 'Subsidizing negative unit economics indefinitely hoping to "make it up on volume".',
        commonMistake: 'Failing to factor in the compute cost of vector search and embeddings into the overall feature unit cost.'
      }
    },
    canonicalQuote: 'You cannot scale your way out of negative unit economics in generative AI.',
    positionStatement: 'Every AI product must demonstrate a structurally sound economic model before a single line of production code is written.',
    claims: [
      { statement: 'Mastery of AI Unit Economics is the primary survival trait for the next generation of software companies.', confidence: 0.95, counterarguments: ['Foundational model costs will drop so fast that unit economics will not matter.'], supportingData: 'The high mortality rate of AI startups post-Series A due to margin failure.' }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Business Models', 'AUEB Framework'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Must optimize architectures strictly for inference cost reduction.',
      finance: 'Mandates feature-level profitability forecasting.',
      product: 'Designs pricing tiers directly tied to underlying compute expenditure.',
      security: 'Ensures rate limits align with financial survival, not just system load.'
    },
    whyThisConceptExists: {
      problem: 'The software industry is applying zero-marginal-cost assumptions to high-marginal-cost generative models.',
      existingApproaches: 'Growth-at-all-costs mentalities carried over from traditional SaaS.',
      gap: 'No baseline understanding that AI compute fundamentally changes the P&L.',
      solution: 'The strict application of manufacturing-style unit economics to AI inferences.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Founder', takeaway: 'Ensure your pricing model scales linearly or exponentially with the userâ€™s token consumption.', recommendedNextSlug: 'ai-economist' }
    ]
  },
  {
    slug: 'ai-economist',
    title: 'The AI Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A new professional archetype and operating methodology for technical leaders who treat AI systems primarily as complex economic instruments rather than traditional technology projects. The AI Economist rigorously models inference costs, token budgets, margin impact, and behavioral liability with the exact same precision a Chief Financial Officer applies to a corporate P&L. This role extends the fundamental principles of the Product Economist directly into the high-stakes, variable-cost domain of generative AI.',
    whyItMatters: 'Traditional software engineering leaders are ill-equipped to manage generative AI because they are trained to optimize for performance and feature delivery, assuming costs are static. The AI Economist understands that in the AI era, architecture is economics. They are the only professionals capable of bridging the gap between the stochastic nature of large language models and the deterministic requirements of corporate finance, ensuring that AI deployments generate actual enterprise value rather than just unmanaged cloud debt.',
    whoShouldCare: ['Chief Technology Officers', 'VP of Product', 'Chief Financial Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Rise of the AI Economist', publisher: 'Internal Research', type: 'Executive Essay', url: '/research/ai-economist' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Persona Definition', publisher: 'Internal Research', date: 'August 2026', summary: 'Defined the archetype as the required evolution of engineering leadership in the AI era.' }
    ],
    evidenceLedger: [
      { id: 'ev-economist-1', title: 'The Architectural CFO', url: '#', publisher: 'Internal', type: 'Observation', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'extends' },
      { slug: 'margin-engineering', relationship: 'implements' }
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
        { vsConceptSlug: 'traditional-manager', vsTitle: 'Traditional Engineering Manager', keyDifferences: ['The traditional manager optimizes for velocity and uptime; the AI Economist optimizes for gross margin and unit profitability.'], whenToUseWhich: 'Both are needed in modern organizations.' }
      ],
      examples: {
        enterprise: 'A Fortune 500 company hiring a former quant to oversee their generative AI architecture budget.',
        startup: 'A CTO acting as the AI Economist by personally reviewing the cost models of all proposed LLM features.',
        antiPattern: 'Allowing product teams to select models based entirely on leaderboard benchmarks without consulting an AI Economist on cost.',
        commonMistake: 'Treating the AI Economist purely as a finance role rather than a highly technical architectural role.'
      }
    },
    canonicalQuote: 'Do not ask your engineers to build an AI feature until you have asked your AI Economist if you can afford it.',
    positionStatement: 'Every enterprise deploying generative AI at scale must equip an AI Economist with veto authority over architectural decisions.',
    claims: [
      { statement: 'Organizations that employ AI Economists will structurally outcompete those that treat AI purely as an engineering challenge.', confidence: 0.95, counterarguments: ['Standard engineering leaders will eventually learn the economics.'], supportingData: 'The rising demand for FinOps-trained architects in the job market.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'Product Economist' }],
      applications: ['Organizational Design'],
      contrastingConcepts: []
    },
    whatChanges: {
      engineering: 'Must justify all architectural choices to the AI Economist through the lens of gross margin.',
      finance: 'Gains a highly technical translator who can speak P&L.',
      product: 'Scopes features within strict economic boundaries set by the Economist.',
      security: 'Aligns with the Economist to model the financial impact of security failures.'
    },
    whyThisConceptExists: {
      problem: 'There is a massive leadership gap between engineers who build AI and finance teams who pay for it.',
      existingApproaches: 'Leaving AI budget control to generalist product managers.',
      gap: 'No single role accountable for the structural economics of the technical architecture.',
      solution: 'A specialized archetype trained to govern variable inference costs as a core architectural constraint.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CTO', takeaway: 'Adopt the mindset of the AI Economist, or hire one immediately to protect your architecture from margin collapse.', recommendedNextSlug: 'margin-engineering' }
    ]
  }
];
