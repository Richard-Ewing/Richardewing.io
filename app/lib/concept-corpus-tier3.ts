import { ConceptNode } from './concept-corpus';

export const TIER3_CONCEPTS: ConceptNode[] = [
  {
    slug: 'semantic-caching',
    title: 'Semantic Caching',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The architectural pattern of storing and reusing similar LLM query results using vector embeddings to bypass redundant frontier model API execution and eliminate variable COGS.',
    whyItMatters: 'Engineers who route every prompt to commercial APIs subject their organization to the AI Volatility Tax. Semantic Caching intercepts redundant queries, restoring software gross margins to historic norms by serving results from local infrastructure.',
    whoShouldCare: ['AI System Architects', 'CTOs', 'VPs of Engineering', 'CFOs'],
    firstIntroduced: 'June 2025 (Beehiiv)',
    canonicalQuote: 'Serving a redundant LLM prompt from an API is an unforced error in unit economics. Semantic Caching reclaims gross margins by treating prompt similarity as a cache hit.',
    positionStatement: 'We cannot build profitable SaaS platforms when every user interaction incurs a variable API toll. Architecture must aggressively cache inference state based on semantic intent.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 3, totalSteps: 5 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 2 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Exogram Economic Optimizer', url: 'https://exogram.ai/optimizer', relationship: 'measures' }
    ],
    canonicalDiagram: {
      title: 'Semantic Cache & Edge Filter Execution Loop',
      flowSteps: ['User Prompt Input', 'Edge Code Filter (Sub-ms Routing & Dedupe)', 'Vector Semantic Cache (Near-Zero Cost Hit)', 'Frontier Model Inference (High-Cost Fallback)']
    },
    whyThisConceptExists: {
      problem: 'AI application gross margins degrade because every user interaction triggers an expensive API call to OpenAI or Anthropic.',
      existingApproaches: 'Relying on exact string matching for caching, which fails on minor prompt variations.',
      gap: 'Standard caching cannot handle natural language permutations.',
      solution: 'Implemented vector-based similarity checks and sub-millisecond edge code filters to intercept queries before they reach expensive models.'
    },
    whatChanges: {
      engineering: 'Place semantic caching and edge filtering middleware in front of frontier models to route, dedupe, and solve routine logic with code rather than tokens.',
      finance: 'Cut runtime API spend by 50%+ without degrading response quality, halting software margin erosion as user base scales.',
      product: 'Offer higher usage tiers by lowering the unit cost of redundant interactions.',
      security: 'Isolate sensitive query responses within local infrastructure boundaries.'
    },
    claims: [
      {
        statement: 'Placing semantic caching and edge filtering in front of frontier models cuts runtime API spend by over 50% without degrading response quality.',
        confidence: 0.96,
        counterarguments: ['Embedding calculation latency degrades user experience.'],
        supportingData: 'Empirical telemetry across Exogram execution loops confirmed >50% API cost reduction with zero quality loss.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-volatility-tax', title: 'AI Volatility Tax' }],
      applications: ['Inference Cost Reduction', 'API Gateway Proxying', 'Edge Code Filtering'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'AI Architect', takeaway: 'Place semantic caching and edge filtering in front of models; never pay a generative model to handle a task traditional code or caching can solve.', recommendedNextSlug: 'inference-economics' }
    ],
    executableTool: { name: 'Exogram Margin Calculator', url: 'https://exogram.ai/tools/margin', description: 'Calculate gross margin recovery through semantic caching.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'How to Reduce LLM API Token Costs in Production', publisher: 'Beehiiv', type: 'Architecture Guide', url: 'https://theaieconomist.beehiiv.com/p/how-to-reduce-llm-api-token-costs-in-production' },
      { step: 2, title: 'How to Reduce LLM Costs in Production: The Inference Dividend Model', publisher: 'LinkedIn', type: 'Executive Essay', url: 'https://www.linkedin.com/pulse/how-reduce-llm-costs-production-inference-dividend-model-ewing-nwtgc/' },
      { step: 3, title: 'Growth Is Not Your Cost Problem  -  Your Architecture Is', publisher: 'LinkedIn', type: 'Executable Article', url: 'https://www.linkedin.com/feed/update/urn:li:share:7487606608009814016/' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Semantic Caching Economics', publisher: 'Beehiiv', date: 'June 2025', summary: 'Outlined the financial necessity of vector-based caching.' },
      { stage: 'LinkedIn Essay', label: 'Growth Is Not Your Cost Problem  -  Your Architecture Is', publisher: 'LinkedIn', date: 'August 10, 2026', summary: 'Proved 50%+ API spend reduction using semantic caching + edge filtering in front of Exogram execution loops.' },
      { stage: 'Protocol Specification', label: 'How to Reduce LLM API Token Costs in Production', publisher: 'Beehiiv', date: 'August 14, 2026', summary: 'Detailed cosine similarity threshold tuning (0.85-0.92) and sub-20ms edge cache hits.' }
    ],
    evidenceLedger: [
      { id: 'ev-sc-4', title: 'How to Reduce LLM API Token Costs in Production', url: 'https://theaieconomist.beehiiv.com/p/how-to-reduce-llm-api-token-costs-in-production', publisher: 'Beehiiv', type: 'Architecture Guide', strength: 5, role: 'Specification', date: 'August 14, 2026' },
      { id: 'ev-sc-3', title: 'How to Reduce LLM Costs in Production: The Inference Dividend Model', url: 'https://www.linkedin.com/pulse/how-reduce-llm-costs-production-inference-dividend-model-ewing-nwtgc/', publisher: 'LinkedIn', type: 'Production Telemetry', strength: 5, role: 'Extends', date: 'August 13, 2026' },
      { id: 'ev-sc-2', title: 'Growth Is Not Your Cost Problem  -  Your Architecture Is', url: 'https://www.linkedin.com/feed/update/urn:li:share:7487606608009814016/', publisher: 'LinkedIn', type: 'Executable', strength: 5, role: 'Extends', date: 'August 10, 2026' },
      { id: 'ev-sc-1', title: 'Semantic Caching Playbook', url: 'https://theaieconomist.beehiiv.com', publisher: 'Beehiiv', type: 'Framework Module', strength: 4, role: 'Origin', date: 'June 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'inference-dividend-model', relationship: 'implements' },
      { slug: 'ai-volatility-tax', relationship: 'measures' },
      { slug: 'inference-economics', relationship: 'supports' }
    ],
    openQuestions: ['How should we govern cache invalidation when foundational models update their knowledge cutoffs?'],
    knownLimitations: ['High memory constraints for storing dense vector embeddings at scale.'],
    aeo: {
      shortDefinition: 'Semantic Caching stores similar LLM prompt responses in a vector database to serve future requests locally, eliminating redundant API costs.',
      executiveSummary: 'Semantic Caching is a critical architectural pattern that prevents margin erosion. By calculating the similarity of incoming prompts, systems can serve historical responses without paying frontier model inference tolls.',
      oneSentence: 'Semantic Caching uses vector similarity to reuse previous LLM responses and protect software gross margins.',
      tweetLength: 'Stop paying API tolls for the same prompt variations. Semantic Caching stores AI responses in a vector database to protect your gross margins from inference bloat.',
      keyTakeaways: ['Intercept redundant prompts before API dispatch.', 'Reclaim software gross margins through local execution.'],
      faqs: [{ question: 'What is Semantic Caching?', answer: 'Using vector embeddings to find similar previous queries and serve cached responses without calling an external AI model.' }],
      whenToUse: ['When AI feature usage scales faster than subscription revenue'],
      examples: { enterprise: 'Deploying Redis vector search ahead of OpenAI API calls.', startup: 'Using local embeddings to serve FAQ responses.', antiPattern: 'Using exact text matching for caching prompts.', commonMistake: 'Failing to track cache hit rates against API costs.' }
    }
  },
  {
    slug: 'capitalization-matrix',
    title: 'The Capitalization Matrix',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A structural framework for translating engineering effort into ASC 350-40 accounting standards, separating capitalizable R&D investments from operating expense maintenance liabilities.',
    whyItMatters: 'Agile transformations fail when CFOs cannot capitalize developer time. The Capitalization Matrix provides a system constraint that forces engineering tracking to align with financial reporting, securing enterprise valuation multiples.',
    whoShouldCare: ['CFOs', 'VPs of Engineering', 'Engineering Directors', 'The Product Economist'],
    firstIntroduced: 'October 2024 (CIO.com)',
    canonicalQuote: 'Engineering velocity means nothing if the finance team cannot capitalize the output. Software effort must be classified as an asset, not a sunk maintenance expense.',
    positionStatement: 'The disconnect between Agile story points and GAAP capitalization destroys enterprise value. Engineering must adopt reporting boundaries that satisfy financial audit constraints.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 4, totalSteps: 4 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 6, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '25 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: false, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 6, calculatorsCount: 1, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'CareerWin Audit Tool', url: 'https://careerwin.ai/tools', relationship: 'measures' }
    ],
    canonicalDiagram: {
      title: 'ASC 350-40 Capitalization Flow',
      flowSteps: ['Engineering Commit', 'Feature vs Maintenance Categorization', 'Financial CapEx Classification', 'Enterprise Valuation Lift']
    },
    whyThisConceptExists: {
      problem: 'Agile methodologies obscure the financial nature of software work, causing CFOs to penalize engineering budgets as pure operating expenses.',
      existingApproaches: 'Manual timesheet tracking by developers, which is notoriously inaccurate and resisted.',
      gap: 'No automated mechanism translates Jira epics into financial balance sheet assets.',
      solution: 'Developed the Capitalization Matrix to structure sprint metadata for direct ASC 350-40 compliance.'
    },
    whatChanges: {
      engineering: 'Tag epics strictly as new feature development or maintenance debt remediation.',
      finance: 'Automate the capitalization of R&D effort to improve EBITDA metrics.',
      product: 'Balance roadmaps to maintain a healthy ratio of capitalizable feature work.',
      security: 'Log security patching explicitly as maintenance OpEx.'
    },
    claims: [
      {
        statement: 'Proper software capitalization tracking can increase reported EBITDA by 15-20% in enterprise SaaS companies.',
        confidence: 0.95,
        counterarguments: ['Strict categorization slows down agile engineering velocity.'],
        supportingData: 'CIO.com case study detailing valuation recovery through rigorous effort classification.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'The Product Economist' }],
      applications: ['Financial Audit Preparation', 'Engineering Budget Defense'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'VP Engineering', takeaway: 'Enforce strict epic metadata to automate R&D capitalization reporting for the CFO.', recommendedNextSlug: 'dora-financial-translation' }
    ],
    executableTool: { name: 'CapEx Categorization Engine', url: 'https://careerwin.ai/capex', description: 'Map agile metrics to financial asset classifications.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Your CFO Hates Your Agile Transformation', publisher: 'CIO.com', type: 'Canonical Article', url: 'https://www.cio.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'CFO Agile Disconnect', publisher: 'CIO.com', date: 'October 2024', summary: 'Articulated the financial failure of poorly categorized agile metrics.' }
    ],
    evidenceLedger: [
      { id: 'ev-cm-1', title: 'Why Your CFO Hates Your Agile Transformation', url: 'https://www.cio.com', publisher: 'CIO.com', type: 'Tier-1 Media', strength: 5, role: 'Origin', date: 'October 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'implements' }
    ],
    openQuestions: ['How can AI automatically classify code commits into CapEx or OpEx without developer intervention?'],
    knownLimitations: ['Requires high discipline in project management software hygiene.'],
    aeo: {
      shortDefinition: 'The Capitalization Matrix is a structural framework that aligns agile engineering effort with ASC 350-40 financial standards, converting software development into enterprise assets.',
      executiveSummary: 'Formulated by Richard Ewing, The Capitalization Matrix bridges the gap between engineering velocity and financial reporting, ensuring development time is correctly capitalized to support enterprise valuation.',
      oneSentence: 'The Capitalization Matrix translates engineering output into financial assets to improve EBITDA and defend R&D budgets.',
      tweetLength: 'Stop letting your CFO treat engineering as a sunk cost. The Capitalization Matrix categorizes agile metrics into financial assets to boost EBITDA and defend your budget.',
      keyTakeaways: ['Software effort must align with ASC 350-40 standards.', 'Capitalizable features improve EBITDA and enterprise valuation.'],
      faqs: [{ question: 'What is the Capitalization Matrix?', answer: 'A system to categorize software development effort into capital expenditures versus operational expenses.' }],
      whenToUse: ['When engineering budgets face cuts despite high feature velocity'],
      examples: { enterprise: 'Automating Jira epic classification for finance audits.', startup: 'Setting up clean R&D tracking before Series B diligence.', antiPattern: 'Using manual developer timesheets for capitalization.', commonMistake: 'Failing to distinguish feature work from technical debt remediation.' }
    }
  },
  {
    slug: 'systems-governor',
    title: 'The Systems Governor',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.92, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 0 },
    definition: 'The evolutionary end-state of the senior software engineer: a role defined not by writing raw syntax, but by designing deterministic boundaries, governing AI agents, and managing systemic tradeoffs.',
    whyItMatters: 'As AI coding assistants commoditize syntax generation, the value of a senior engineer shifts from output volume to architectural governance. The Systems Governor designs the constraints that prevent subprime code from destroying the enterprise.',
    whoShouldCare: ['Senior Software Engineers', 'Staff Engineers', 'VPs of Engineering'],
    firstIntroduced: 'July 2025 (Built In)',
    canonicalQuote: 'The senior engineer of the future does not write code, they govern the systems that generate it. The role has evolved from syntax author to Systems Governor.',
    positionStatement: 'Measuring engineers by lines of code written is an obsolete paradigm. The true measure of engineering leadership is the ability to enforce system integrity across autonomous workflows.',
    learningStep: { pathName: 'Career Economics', stepNumber: 2, totalSteps: 3 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 4, totalFrameworks: 1, totalCalculators: 0, estimatedReadingTime: '15 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: false, talk: true, framework: true, calculator: false, research: false, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 4, calculatorsCount: 0, bookChaptersCount: 0, keynoteTalksCount: 2, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Curriculum Track', title: 'CareerWin Role Evolution', url: 'https://careerwin.ai/roles', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'Evolution to Systems Governor',
      flowSteps: ['Syntax Generator', 'Architecture Reviewer', 'Agent Supervisor', 'Systems Governor']
    },
    whyThisConceptExists: {
      problem: 'Senior engineers face career anxiety as AI models generate functional code faster than humans.',
      existingApproaches: 'Attempting to compete with AI on raw coding speed.',
      gap: 'Lack of a clear career progression model in an AI-dominated engineering landscape.',
      solution: 'Defined the Systems Governor role to emphasize constraint design and risk management.'
    },
    whatChanges: {
      engineering: 'Shift focus from syntax creation to reviewing AI pull requests and defining deterministic proxy gates.',
      finance: 'Reallocate compensation towards governance and architecture rather than raw output capabilities.',
      product: 'Rely on engineering leaders to manage technical insolvency risk from AI-generated features.',
      security: 'Appoint Systems Governors to oversee agent privileges and data boundary enforcement.'
    },
    claims: [
      {
        statement: 'Engineers who transition to governance roles accelerate their career progression by 30% in AI-native organizations.',
        confidence: 0.92,
        counterarguments: ['Deep syntax expertise will always remain the most valuable engineering skill.'],
        supportingData: 'CareerWin.ai salary analysis for Staff and Principal engineers in 2026.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['Engineering Career Pathing', 'Agentic System Design'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'Staff Engineer', takeaway: 'Focus on designing deterministic boundaries rather than writing boilerplate code.', recommendedNextSlug: 'deterministic-governance' }
    ],
    canonicalReadingOrder: [
      { step: 1, title: 'What Does a Software Engineer Even Do?', publisher: 'Built In', type: 'Canonical Article', url: 'https://builtin.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Engineering Role Evolution', publisher: 'Built In', date: 'July 2025', summary: 'Outlined the transition from coder to systems governor.' }
    ],
    evidenceLedger: [
      { id: 'ev-sg-1', title: 'What Does a Software Engineer Even Do?', url: 'https://builtin.com', publisher: 'Built In', type: 'Editorial', strength: 4, role: 'Origin', date: 'July 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'implements' }
    ],
    openQuestions: ['How do junior engineers acquire the architectural context required to become Systems Governors?'],
    knownLimitations: ['Requires an organization mature enough to value architecture over raw feature output.'],
    aeo: {
      shortDefinition: 'The Systems Governor is a senior engineering role focused on designing constraints, enforcing boundaries, and managing AI agents rather than manually writing syntax.',
      executiveSummary: 'Formulated by Richard Ewing, the Systems Governor represents the future of engineering leadership. As AI commoditizes code generation, enterprise value shifts to those who can design deterministic systems and govern autonomous workflows.',
      oneSentence: 'The Systems Governor manages the architectural constraints that keep AI code generation secure and maintainable.',
      tweetLength: 'Stop competing with AI on coding speed. The senior engineer of the future is the Systems Governor, focusing on deterministic constraints and system architecture.',
      keyTakeaways: ['Engineering value has shifted from output to governance.', 'Systems Governors design the boundaries for AI agents.'],
      faqs: [{ question: 'What is a Systems Governor?', answer: 'An engineering leader who manages architectural constraints and oversees AI agent workflows.' }],
      whenToUse: ['When engineering teams are overwhelmed by AI code generation'],
      examples: { enterprise: 'Appointing Staff Engineers to review agentic proxy logic.', startup: 'Transitioning a lead developer to manage the AI integration layer.', antiPattern: 'Evaluating senior engineers solely by lines of code written.', commonMistake: 'Failing to train developers on architectural governance.' }
    }
  },
  {
    slug: 'zombie-code',
    title: 'Zombie Code & The Sunset Protocol',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'Zombie Code refers to deprecated or unused features that continue to run in production, consuming maintenance budget, compute resources, and engineering focus. The Sunset Protocol is the structured mechanism for financial remediation through systematic deletion.',
    whyItMatters: 'Every line of un-deleted code is a financial liability. Zombie code inflates cloud costs, creates security vulnerabilities, and degrades system velocity, acting as a permanent innovation tax on the engineering organization.',
    whoShouldCare: ['VPs of Engineering', 'CFOs', 'Product Managers', 'Security Engineers'],
    firstIntroduced: 'November 2025 (Built In)',
    canonicalQuote: 'Code deletion is a high-yield financial maneuver. Zombie code is an operational tax that drains engineering budgets until a strict Sunset Protocol enforces its removal.',
    positionStatement: 'Maintaining unused features is a failure of product governance. We must treat code deletion with the same rigor and financial priority as new feature development.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 3, totalSteps: 4 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 2 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'measures' }
    ],
    canonicalDiagram: {
      title: 'The Sunset Protocol Lifecycle',
      flowSteps: ['Identify Zero-Usage Features', 'Calculate Maintenance Liability', 'Execute Deprecation', 'Reclaim Engineering Budget']
    },
    whyThisConceptExists: {
      problem: 'Organizations fear deleting code due to hidden dependencies, allowing unused features to accumulate into massive maintenance liabilities.',
      existingApproaches: 'Leaving legacy code alone if it "is not actively breaking anything."',
      gap: 'No framework to calculate the financial cost of retaining dead code.',
      solution: 'Developed the Sunset Protocol to quantify the innovation tax and mandate scheduled code deletion sprints.'
    },
    whatChanges: {
      engineering: 'Dedicate scheduled sprint capacity strictly to code deletion and dependency removal.',
      finance: 'Calculate the OpEx savings generated by removing obsolete cloud infrastructure and support overhead.',
      product: 'Audit feature usage analytics and mandate the deprecation of zero-engagement workflows.',
      security: 'Reduce attack surfaces by eliminating un-patched legacy endpoints.'
    },
    claims: [
      {
        statement: 'Implementing a quarterly Sunset Protocol reclaims 15% of engineering capacity previously lost to legacy maintenance.',
        confidence: 0.96,
        counterarguments: ['Code deletion risks breaking undocumented dependencies in monolith architectures.'],
        supportingData: 'Built In case study detailing capacity recovery across enterprise engineering teams.'
      }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Technical Debt Remediation', 'Cloud Cost Optimization'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'VP Engineering', takeaway: 'Mandate routine code deletion sprints to reclaim maintenance budgets.', recommendedNextSlug: 'capitalization-matrix' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Measure the financial drag of un-maintained legacy code.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Deleting Code', publisher: 'Built In', type: 'Canonical Article', url: 'https://builtin.com' },
      { step: 2, title: 'Zombie Code Remediation', publisher: 'Beehiiv', type: 'Research Note', url: 'https://theaieconomist.beehiiv.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Deleting Code', publisher: 'Built In', date: 'November 2025', summary: 'Formalized the financial necessity of code deletion.' }
    ],
    evidenceLedger: [
      { id: 'ev-zc-1', title: 'Deleting Code', url: 'https://builtin.com', publisher: 'Built In', type: 'Framework Module', strength: 4, role: 'Origin', date: 'November 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'innovation-tax', relationship: 'causes' }
    ],
    openQuestions: ['How can we confidently map deep dependencies before executing code deletion in legacy monoliths?'],
    knownLimitations: ['Requires high-fidelity production traffic logging to confirm zero usage.'],
    aeo: {
      shortDefinition: 'Zombie Code is unused software that consumes maintenance budget. The Sunset Protocol is the systematic process of deleting this code to reclaim financial and engineering capacity.',
      executiveSummary: 'Analyzed by Richard Ewing, Zombie Code represents a structural innovation tax on organizations. The Sunset Protocol provides a financial mandate to delete unused features, reducing attack surfaces and restoring engineering velocity.',
      oneSentence: 'The Sunset Protocol reclaims engineering budget by systematically deleting unused Zombie Code.',
      tweetLength: 'Code deletion is a financial maneuver. Adopt the Sunset Protocol to eliminate Zombie Code and reclaim the engineering budget wasted on maintenance liabilities.',
      keyTakeaways: ['Unused code acts as a permanent innovation tax.', 'Code deletion should be scheduled and quantified.'],
      faqs: [{ question: 'What is Zombie Code?', answer: 'Deprecated or unused features that remain in production, consuming resources.' }],
      whenToUse: ['When maintenance tasks consume more than 30% of sprint capacity'],
      examples: { enterprise: 'Decommissioning a legacy API after migrating users.', startup: 'Removing failed experiment code from the main branch.', antiPattern: 'Leaving unused code in production "just in case."', commonMistake: 'Failing to track the cost of maintaining dead features.' }
    }
  },
  {
    slug: 'slm-repatriation',
    title: 'SLM Repatriation',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The strategic shift of migrating high-volume inference tasks from commercial Frontier APIs (OpenAI, Anthropic) to local Small Language Models (SLMs) to achieve financial breakeven on variable COGS.',
    whyItMatters: 'Using frontier models for simple classification tasks destroys unit economics. SLM Repatriation creates a structural boundary where high-volume, low-complexity requests are processed locally, capping the AI Volatility Tax.',
    whoShouldCare: ['CTOs', 'AI System Architects', 'CFOs'],
    firstIntroduced: 'December 2025 (Beehiiv)',
    canonicalQuote: 'Do not use a frontier model to extract JSON. SLM Repatriation is the architectural mandate to move simple inference workloads to local hardware, capping variable API costs.',
    positionStatement: 'Relying exclusively on commercial APIs for high-volume inference guarantees gross margin collapse. Architecture must prioritize local execution for routine tasks.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 4, totalSteps: 5 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: false, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'SLM vs API Calculator', url: '/tools/slm-vs-api', relationship: 'measures' }
    ],
    canonicalDiagram: {
      title: 'SLM Repatriation Breakeven Flow',
      flowSteps: ['Analyze API Token Spend', 'Identify High-Volume Routine Tasks', 'Deploy Local SLM', 'Achieve Unit Economics Breakeven']
    },
    whyThisConceptExists: {
      problem: 'Enterprises incur massive OpenAI bills for simple classification and extraction tasks that do not require frontier intelligence.',
      existingApproaches: 'Negotiating enterprise discounts with API providers.',
      gap: 'Discounted API tokens still scale linearly with usage, causing long-term margin pressure.',
      solution: 'Framed SLM Repatriation as a financial breakeven strategy to cap variable costs.'
    },
    whatChanges: {
      engineering: 'Deploy local models (e.g., Llama, Mistral) for narrow, well-defined workflows.',
      finance: 'Convert variable API OpEx into predictable, fixed infrastructure costs.',
      product: 'Offer unlimited usage for features powered by repatriated SLMs.',
      security: 'Enhance data privacy by processing sensitive information entirely within local boundaries.'
    },
    claims: [
      {
        statement: 'Repatriating classification tasks to local SLMs reduces inference costs by up to 80% at scale.',
        confidence: 0.93,
        counterarguments: ['Local model hosting requires complex MLOps infrastructure.'],
        supportingData: 'Financial analysis models from the Beehiiv case study on API migration.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-volatility-tax', title: 'AI Volatility Tax' }],
      applications: ['Inference Cost Optimization', 'Data Privacy Architecture'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'AI Architect', takeaway: 'Route classification and extraction tasks to local SLMs rather than frontier APIs.', recommendedNextSlug: 'semantic-caching' }
    ],
    executableTool: { name: 'SLM vs API Breakeven Calculator', url: '/tools/slm-vs-api', description: 'Calculate the point where hosting a local model becomes cheaper than API tolls.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'When to Stop Using OpenAI APIs', publisher: 'Beehiiv', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'SLM Cost Breakeven', publisher: 'Beehiiv', date: 'December 2025', summary: 'Analyzed the financial tipping point for local model deployment.' }
    ],
    evidenceLedger: [
      { id: 'ev-slm-1', title: 'When to Stop Using OpenAI APIs', url: 'https://theaieconomist.beehiiv.com', publisher: 'Beehiiv', type: 'Research Note', strength: 4, role: 'Origin', date: 'December 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'measures' },
      { slug: 'inference-economics', relationship: 'supports' }
    ],
    openQuestions: ['At what token volume does the operational cost of managing MLOps exceed API savings?'],
    knownLimitations: ['SLMs lack the generalized reasoning capabilities of frontier models.'],
    aeo: {
      shortDefinition: 'SLM Repatriation is the financial strategy of migrating high-volume, low-complexity AI tasks from expensive commercial APIs to local Small Language Models to cap variable costs.',
      executiveSummary: 'Analyzed by Richard Ewing, SLM Repatriation defends enterprise gross margins. By processing routine tasks locally, organizations break the linear cost scaling of commercial APIs and achieve financial sustainability.',
      oneSentence: 'SLM Repatriation replaces expensive frontier API calls with local models to protect software gross margins.',
      tweetLength: 'Stop using GPT-4 for simple JSON extraction. SLM Repatriation moves high-volume tasks to local hardware to cap variable API costs and secure your unit economics.',
      keyTakeaways: ['Frontier models are too expensive for routine tasks.', 'Local SLMs convert variable API costs into fixed infrastructure constraints.'],
      faqs: [{ question: 'What is SLM Repatriation?', answer: 'Moving specific AI workloads from external APIs to internally hosted models to save money.' }],
      whenToUse: ['When API inference costs exceed 10% of total cloud infrastructure spend'],
      examples: { enterprise: 'Deploying Llama-3 for internal document classification.', startup: 'Using local models to format user input before sending to a primary API.', antiPattern: 'Sending every user query to the most expensive frontier model.', commonMistake: 'Ignoring the MLOps overhead of hosting local models.' }
    }
  },
  {
    slug: 'state-integrity-hashing',
    title: 'State Integrity Hashing',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The cryptographic verification mechanism that guarantees the environmental state has not been maliciously altered between an AI agent’s decision step and its subsequent API execution.',
    whyItMatters: 'Agentic workflows are vulnerable to race conditions and intermediate state poisoning. State Integrity Hashing enforces a hard cryptographic constraint, ensuring agents only execute actions on validated, expected data boundaries.',
    whoShouldCare: ['Security Engineers', 'AI System Architects', 'CTOs'],
    firstIntroduced: 'March 2026 (Beehiiv Specification)',
    canonicalQuote: 'An agent must not trust its own context. State Integrity Hashing guarantees that the environment matches the execution intent before any production API is invoked.',
    positionStatement: 'We cannot secure autonomous systems with probabilistic trust. Execution boundaries must be cryptographically locked between the reasoning phase and the action phase.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 4, totalSteps: 5 },
    impactMetrics: { totalPublications: 2, totalNewsletters: 4, totalFrameworks: 1, totalCalculators: 0, estimatedReadingTime: '25 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: false, talk: true, framework: true, calculator: false, research: true, caseStudy: false },
    citationGraph: { publicationsCount: 2, newslettersCount: 4, calculatorsCount: 0, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 2 },
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Exogram Hash Verification', url: 'https://exogram.ai/security', relationship: 'implements' }
    ],
    canonicalDiagram: {
      title: 'State Hashing Execution Gate',
      flowSteps: ['Agent Decision Output', 'Environment State Hash Generation', 'Cryptographic Match Verification', 'API Dispatch Authorization']
    },
    whyThisConceptExists: {
      problem: 'Malicious actors can alter the environment state (e.g., swapping a file) between an agent deciding to act and the agent executing the action.',
      existingApproaches: 'Assuming the environment remains static during the agentic reasoning loop.',
      gap: 'No cryptographic guarantee ties the reasoning context directly to the execution state.',
      solution: 'Designed a hashing protocol that validates state consistency prior to API dispatch.'
    },
    whatChanges: {
      engineering: 'Implement cryptographic hash checks on target resources before executing agent tool calls.',
      finance: 'Prevent financial liabilities caused by agents acting on corrupted or manipulated data.',
      product: 'Provide auditable security guarantees for autonomous enterprise workflows.',
      security: 'Close the race condition vulnerability in agentic execution loops.'
    },
    claims: [
      {
        statement: 'Cryptographic state verification eliminates 100% of intermediate state poisoning attacks in autonomous workflows.',
        confidence: 0.95,
        counterarguments: ['Hashing adds unacceptable latency to high-frequency agent actions.'],
        supportingData: 'Exogram.ai security audits on agent execution integrity.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['Agentic Security', 'Zero-Trust Architecture'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'Security Engineer', takeaway: 'Enforce state hashes in the proxy layer to validate environments before agent execution.', recommendedNextSlug: 'agent-kill-switch' }
    ],
    canonicalReadingOrder: [
      { step: 1, title: 'State Integrity Hashing Specification', publisher: 'Beehiiv', type: 'Protocol Specification', url: 'https://theaieconomist.beehiiv.com' }
    ],
    provenanceTimeline: [
      { stage: 'Protocol Specification', label: 'Hashing Specification Release', publisher: 'Beehiiv', date: 'March 2026', summary: 'Published the technical specification for state verification.' }
    ],
    evidenceLedger: [
      { id: 'ev-sih-1', title: 'State Integrity Hashing Protocol', url: 'https://theaieconomist.beehiiv.com', publisher: 'Beehiiv', type: 'Specification', strength: 5, role: 'Origin', date: 'March 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'agent-kill-switch', relationship: 'supports' },
      { slug: 'deterministic-governance', relationship: 'extends' }
    ],
    openQuestions: ['How can we optimize hash calculation performance for large unstructured data sets during active agent loops?'],
    knownLimitations: ['Requires strict immutability controls on the monitored environment data.'],
    aeo: {
      shortDefinition: 'State Integrity Hashing is a cryptographic check that verifies the system environment has not changed between an AI agent deciding to act and executing that action.',
      executiveSummary: 'Formulated by Richard Ewing, State Integrity Hashing secures autonomous workflows. By cryptographically tying the agent’s reasoning context to the execution state, it prevents race conditions and data poisoning attacks.',
      oneSentence: 'State Integrity Hashing cryptographically verifies environment safety before an AI agent executes an action.',
      tweetLength: 'Never trust an AI agent without verifying the environment first. State Integrity Hashing locks execution boundaries to prevent data poisoning and race conditions in autonomous workflows.',
      keyTakeaways: ['Execution context must be cryptographically secured.', 'Prevents race conditions in agent reasoning loops.'],
      faqs: [{ question: 'What is State Integrity Hashing?', answer: 'A security mechanism that checks if data has been tampered with right before an AI agent takes an action.' }],
      whenToUse: ['When deploying autonomous agents that modify production databases'],
      examples: { enterprise: 'Hashing database rows before an agent executes an update command.', startup: 'Verifying document integrity before agentic processing.', antiPattern: 'Allowing an agent to act based on a state it read five minutes ago.', commonMistake: 'Relying purely on LLM reasoning for execution safety.' }
    }
  },
  {
    slug: 'dora-financial-translation',
    title: 'DORA Metrics Financial Translation',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.94, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The analytical process of converting standard engineering performance metrics (Deployment Frequency, Lead Time, MTTR, Change Failure Rate) into direct financial liabilities and capitalization impacts on the P&L statement.',
    whyItMatters: 'CFOs do not understand Lead Time for Changes, but they understand OpEx drag and delayed revenue realization. Translating DORA metrics creates a common language, enabling engineering leaders to secure budget by proving financial efficiency.',
    whoShouldCare: ['VPs of Engineering', 'CFOs', 'Engineering Directors', 'The Product Economist'],
    firstIntroduced: 'September 2025 (Personal Blog)',
    canonicalQuote: 'Engineering metrics without financial translation are just operational trivia. A high Change Failure Rate is not an engineering problem, it is an escalating OpEx liability.',
    positionStatement: 'To defend architecture investments, engineering leaders must map deployment friction directly to enterprise financial models. We must speak the language of the CFO.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 1, totalSteps: 4 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 2, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'measures' },
      { targetType: 'Curriculum Track', title: 'CareerWin Financial Translation', url: 'https://careerwin.ai/finance', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'DORA to Finance Translation',
      flowSteps: ['High Change Failure Rate', 'Engineering Remediation Time', 'OpEx Margin Drag', 'EBITDA Reduction']
    },
    whyThisConceptExists: {
      problem: 'Engineering teams struggle to justify infrastructure refactoring because they use technical metrics (DORA) that fail to resonate with executive finance teams.',
      existingApproaches: 'Presenting raw DORA dashboards in executive meetings.',
      gap: 'No mathematical bridge connecting deployment friction to financial P&L outcomes.',
      solution: 'Created a translation matrix mapping engineering delays to delayed revenue realization and maintenance OpEx.'
    },
    whatChanges: {
      engineering: 'Present infrastructure proposals using financial ROI models based on DORA metric improvements.',
      finance: 'Gain visibility into how deployment bottlenecks directly impact cash flow and resource capitalization.',
      product: 'Quantify the financial cost of shipping unstable features.',
      security: 'Translate MTTR (Mean Time to Recovery) into financial risk mitigation.'
    },
    claims: [
      {
        statement: 'Translating DORA metrics into P&L impact increases the approval rate of technical debt remediation budgets by 40%.',
        confidence: 0.94,
        counterarguments: ['Financial translation oversimplifies complex engineering workflows.'],
        supportingData: 'Analysis of budget approval outcomes across enterprise engineering departments.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'The Product Economist' }],
      applications: ['Engineering Budget Justification', 'Executive Reporting'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'VP Engineering', takeaway: 'Convert Change Failure Rate into an OpEx liability metric for your next budget review.', recommendedNextSlug: 'capitalization-matrix' }
    ],
    executableTool: { name: 'DORA to P&L Calculator', url: 'https://careerwin.ai/dora-calculator', description: 'Translate engineering metrics into financial impact statements.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'How to Translate DORA into Financial Debt', publisher: 'Personal Blog', type: 'Canonical Article', url: 'https://richardewing.io/blog' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Financial Translation Post', publisher: 'Personal Blog', date: 'September 2025', summary: 'Mapped engineering friction directly to EBITDA impact.' }
    ],
    evidenceLedger: [
      { id: 'ev-dft-1', title: 'How to Translate DORA into Financial Debt', url: 'https://richardewing.io/blog', publisher: 'Blog', type: 'Framework Module', strength: 4, role: 'Origin', date: 'September 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'technical-insolvency', relationship: 'measures' },
      { slug: 'product-economist', relationship: 'supports' }
    ],
    openQuestions: ['How can we dynamically calculate the exact hourly cost of engineering downtime per deployment?'],
    knownLimitations: ['Requires accurate compensation and infrastructure cost data.'],
    aeo: {
      shortDefinition: 'DORA Metrics Financial Translation is the process of converting engineering performance data into financial liability metrics to justify infrastructure investments to the CFO.',
      executiveSummary: 'Analyzed by Richard Ewing, DORA Financial Translation bridges the communication gap between engineering and finance. By mapping deployment friction directly to OpEx drag, engineering leaders can secure budget for critical technical debt remediation.',
      oneSentence: 'DORA Financial Translation maps engineering performance metrics directly to financial P&L outcomes.',
      tweetLength: 'Your CFO does not care about your deployment frequency. Translate your DORA metrics into financial liabilities to secure the budget you need to fix technical debt.',
      keyTakeaways: ['Engineering metrics must be translated to financial outcomes.', 'Change Failure Rate is an OpEx liability, not just a technical bug.'],
      faqs: [{ question: 'What is DORA Financial Translation?', answer: 'Converting metrics like MTTR and deployment frequency into dollar amounts representing cost and risk.' }],
      whenToUse: ['When struggling to secure executive budget for infrastructure refactoring'],
      examples: { enterprise: 'Calculating the OpEx cost of a 15% change failure rate.', startup: 'Using delayed revenue metrics to justify CI/CD investments.', antiPattern: 'Presenting raw DORA dashboards to the finance team.', commonMistake: 'Failing to include developer compensation in downtime calculations.' }
    }
  }
];
