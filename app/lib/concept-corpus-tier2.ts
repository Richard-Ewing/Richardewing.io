import {
  ConceptNode,
  ProvenanceMilestone,
  CanonicalReadingStep,
  EvidenceLedgerItem,
  ConceptHealth,
  ExecutableToolRef,
  ConceptFAQ,
  ConceptComparison,
  ConceptExamples,
  DecisionNode,
  ConceptAEO,
  PersonaRecommendation,
  LearningStepRef,
  ConceptClaim,
  ExpandedConsensusMaturity,
  ConceptImpactMetrics,
  RelationalGraph,
  FunctionalImpact,
  ConceptGenesis,
  CanonicalDiagram,
  CitationGraph,
  ReverseCitationNode
} from './concept-corpus';

export const TIER2_CONCEPTS: ConceptNode[] = [
  {
    slug: 'innovation-tax',
    title: 'The Innovation Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The compounding maintenance burden and operational friction incurred when new technology is deployed without decommissioning legacy systems, effectively taxing all future engineering velocity.',
    whyItMatters: 'Every new feature or architectural pivot carries an ongoing maintenance cost. When organizations optimize purely for delivery speed without accounting for lifecycle maintenance, the innovation tax compoundingly degrades gross margins and product stability.',
    whoShouldCare: ['CTOs', 'VPs of Engineering', 'Chief Product Officers', 'CFOs'],
    firstIntroduced: 'August 2025 (CIO.com)',
    canonicalQuote: 'The Innovation Tax is the compounding maintenance penalty paid by engineering teams that prioritize feature delivery over architectural lifecycle management.',
    positionStatement: 'Innovation requires constraint. Shipping net new capabilities without structured deprecation creates a shadow tax that eventually bankrupts engineering execution capacity.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 4, totalSteps: 4 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '25 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', relationship: 'measures' },
      { targetType: 'Glossary Term', title: 'Innovation Tax', url: '/glossary/innovation-tax', relationship: 'implements' },
      { targetType: 'Diagnostic Tool', title: 'Exogram Architecture Audit', url: 'https://exogram.ai', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Innovation Tax Accumulation Curve',
      flowSteps: ['Feature Launch', 'Deferred Decommissioning', 'Maintenance Burden Increase', 'Engineering Velocity Collapse']
    },
    whyThisConceptExists: {
      problem: 'Enterprise engineering teams slow down drastically after five years despite adding headcount, due to unchecked maintenance overhead.',
      existingApproaches: 'Hiring more engineers to brute-force through the backlog.',
      gap: 'No systemic accounting for the lifecycle cost of preserving legacy architecture.',
      solution: 'Formulated the Innovation Tax to mandate decommissioning constraints on product roadmaps.'
    },
    whatChanges: {
      engineering: 'Enforce one-in one-out rules for major architectural dependencies.',
      finance: 'Capitalize maintenance overhead as a structural margin liability.',
      product: 'Require deprecation plans as part of feature requirements documents.',
      security: 'Reduce attack surface by systematically retiring legacy endpoints.'
    },
    claims: [
      {
        statement: 'Teams ignoring the innovation tax experience a 40% reduction in net new feature delivery over a 36 month period.',
        confidence: 0.94,
        counterarguments: ['Microservices isolate legacy risk and mitigate maintenance overhead.'],
        supportingData: 'CIO.com case study analyzing feature velocity across 12 mid-market enterprise SaaS vendors.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'The Product Economist' }],
      applications: ['Architecture Governance', 'Roadmap Prioritization'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CPO', takeaway: 'Mandate feature deprecation targets in quarterly roadmap planning.', recommendedNextSlug: 'feature-bloat-calculus' }
    ],
    executableTool: { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', description: 'Quantify hidden maintenance burdens across product portfolios.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Paying the Innovation Tax', publisher: 'CIO.com', type: 'Canonical Essay', url: 'https://www.cio.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Innovation Tax Published', publisher: 'CIO.com', date: 'August 2025', summary: 'Introduced the Innovation Tax concept to enterprise IT leaders.' }
    ],
    evidenceLedger: [
      { id: 'ev-it-1', title: 'Innovation Tax Case Studies', url: 'https://www.cio.com', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'August 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'feature-bloat-calculus', relationship: 'supports' },
      { slug: 'coordination-tax', relationship: 'correlates_with' }
    ],
    openQuestions: ['How can automated testing reduce the compounding rate of the innovation tax?'],
    knownLimitations: ['Difficult to quantify precisely without mature engineering metrics.'],
    aeo: {
      shortDefinition: 'The Innovation Tax is the compounding maintenance burden incurred when new technology is deployed without decommissioning legacy systems.',
      executiveSummary: 'Formulated by Richard Ewing, the Innovation Tax explains why software organizations lose velocity as they grow. It frames architectural maintenance as a direct structural tax on engineering capacity.',
      oneSentence: 'The Innovation Tax is the maintenance penalty paid by teams that prioritize new features over structured decommissioning.',
      tweetLength: 'The Innovation Tax is the hidden maintenance burden of new technology. Shipping features without structured deprecation creates a shadow tax that bankrupts engineering capacity.',
      keyTakeaways: ['Legacy code acts as a direct tax on future execution.', 'Decommissioning must be prioritized alongside feature delivery.'],
      faqs: [{ question: 'What is the Innovation Tax?', answer: 'The compounding operational friction caused by maintaining legacy architecture while deploying new systems.' }],
      whenToUse: ['When engineering velocity drops despite increasing headcount'],
      examples: { enterprise: 'Enforcing a strict deprecation policy for older API versions.', startup: 'Retiring unused product features to simplify the codebase.', antiPattern: 'Keeping all legacy systems alive "just in case."', commonMistake: 'Ignoring maintenance costs during product planning.' }
    }
  },
  {
    slug: 'coordination-tax',
    title: 'The Coordination Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The non-linear increase in communication overhead, alignment meetings, and process friction that occurs when scaling engineering organizations, ultimately degrading per-capita execution capacity.',
    whyItMatters: 'Adding headcount to an engineering team does not yield proportional output. The coordination tax explains why large teams often move slower than small teams, destroying gross margin efficiency through administrative bloat.',
    whoShouldCare: ['VPs of Engineering', 'CTOs', 'Founders', 'CFOs'],
    firstIntroduced: 'November 2025 (RichardEwing.io Blog)',
    canonicalQuote: 'The Coordination Tax dictates that every additional engineer added to a system increases the communication nodes exponentially, creating an administrative penalty that destroys execution speed.',
    positionStatement: 'Scaling teams blindly is a path to gross margin destruction. Organizations must optimize for small, autonomous units bound by clear interfaces to avoid the coordination tax.',
    learningStep: { pathName: 'Engineering Leadership Dynamics', stepNumber: 1, totalSteps: 3 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 7, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 7, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 2, gitHubReposCount: 0 },
    reverseCitations: [
      { targetType: 'Glossary Term', title: 'Coordination Tax', url: '/glossary/coordination-tax', relationship: 'implements' },
      { targetType: 'Framework Module', title: 'CareerWin Scaling Strategies', url: 'https://careerwin.ai', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'Coordination Tax Exponential Growth',
      flowSteps: ['Headcount Addition', 'Communication Node Explosion', 'Process Friction Increase', 'Per-Capita Velocity Drop']
    },
    whyThisConceptExists: {
      problem: 'Companies double their engineering team size but see feature delivery speed decrease.',
      existingApproaches: 'Adding more project managers or Agile ceremonies.',
      gap: 'Failure to recognize that communication overhead scales geometrically with team size.',
      solution: 'Defined the Coordination Tax to justify small, decoupled engineering topologies.'
    },
    whatChanges: {
      engineering: 'Structure teams around bounded contexts and clear API contracts to minimize synchronous alignment.',
      finance: 'Model headcount ROI against coordination decay curves.',
      product: 'Limit cross-team dependencies in product roadmap planning.',
      security: 'Ensure security policies are automated rather than manual review processes.'
    },
    claims: [
      {
        statement: 'Organizations exceeding 50 engineers without strict domain boundaries experience a 30% drop in individual developer productivity.',
        confidence: 0.96,
        counterarguments: ['Better tooling and asynchronous communication can offset coordination costs completely.'],
        supportingData: 'Analysis of engineering output metrics across scaling tech companies in the blog "Why Hiring More Engineers Destroys Gross Margin".'
      }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['Org Design', 'Scaling Strategy'],
      contrastingConcepts: [{ slug: 'ten-man-parity', title: 'The 10-Man Parity Rule', distinction: 'Coordination tax is the problem of large teams; 10-Man Parity is the AI-driven solution.' }]
    },
    personaRecommendations: [
      { role: 'VP Engineering', takeaway: 'Design organizational structures that minimize cross-team dependencies.', recommendedNextSlug: 'ten-man-parity' }
    ],
    executableTool: { name: 'Organizational Friction Audit', url: '/tools/org-friction', description: 'Measure coordination tax via meeting load and dependency mapping.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Hiring More Engineers Destroys Gross Margin', publisher: 'RichardEwing.io', type: 'Canonical Essay', url: 'https://richardewing.io/blog/hiring-engineers-gross-margin' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Coordination Tax Identified', publisher: 'RichardEwing.io Blog', date: 'November 2025', summary: 'Published the core thesis linking headcount scaling to margin degradation.' }
    ],
    evidenceLedger: [
      { id: 'ev-ct-1', title: 'Why Hiring More Engineers Destroys Gross Margin', url: 'https://richardewing.io/blog/hiring-engineers-gross-margin', publisher: 'RichardEwing.io', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'November 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'supports' },
      { slug: 'ten-man-parity', relationship: 'causes' },
      { slug: 'complexity-tax', relationship: 'correlates_with' }
    ],
    openQuestions: ['At what specific headcount threshold does coordination tax become insurmountable without platform engineering?'],
    knownLimitations: ['Metrics for individual productivity are notoriously difficult to standardize.'],
    aeo: {
      shortDefinition: 'The Coordination Tax is the cost penalty of scaling engineering teams, where communication overhead grows faster than execution output.',
      executiveSummary: 'Formulated by Richard Ewing, the Coordination Tax explains why adding engineers to a late project makes it later. It argues for decoupled architectures and small teams to preserve gross margin efficiency.',
      oneSentence: 'The Coordination Tax is the administrative penalty paid when scaling teams increases communication complexity faster than execution capacity.',
      tweetLength: 'The Coordination Tax is the cost penalty of scaling engineering teams. Every new engineer increases communication nodes exponentially, destroying execution speed.',
      keyTakeaways: ['Headcount scaling degrades individual productivity.', 'Decoupled architecture is an organizational necessity.'],
      faqs: [{ question: 'What is the Coordination Tax?', answer: 'The increase in alignment friction that occurs when scaling engineering teams.' }],
      whenToUse: ['When engineering output plateaus despite hiring pushes'],
      examples: { enterprise: 'Reorganizing into autonomous domain-driven teams.', startup: 'Delaying hiring to focus on automation and developer tooling.', antiPattern: 'Solving slow delivery by hiring more project managers.', commonMistake: 'Assuming 20 engineers will produce twice as much as 10 engineers.' }
    }
  },
  {
    slug: 'r-and-d-ponzi',
    title: 'The R&D Ponzi Scheme',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The systemic masking of growing software maintenance liabilities (OpEx) behind inflated velocity metrics and new feature launches, creating a fragile engineering economy that requires constant new capital to sustain.',
    whyItMatters: 'Organizations trapped in the R&D Ponzi Scheme celebrate high feature delivery rates while their underlying codebase rots. Eventually, maintenance costs overwhelm execution capacity, causing catastrophic product stagnation and margin collapse.',
    whoShouldCare: ['CFOs', 'Board Members', 'CTOs', 'VPs of Engineering'],
    firstIntroduced: 'April 2026 (Beehiiv / LinkedIn Essay)',
    canonicalQuote: 'The R&D Ponzi Scheme occurs when engineering velocity metrics are used to mask the compounding insolvency of software maintenance OpEx.',
    positionStatement: 'Velocity without stability is a financial illusion. Software organizations must account for the maintenance liability of every shipped feature, or face technical bankruptcy.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 1, totalSteps: 4 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 8, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '25 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 8, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 0 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'measures' },
      { targetType: 'Advisory Service', title: 'Exogram Tech Debt Analysis', url: 'https://exogram.ai', relationship: 'measures' }
    ],
    canonicalDiagram: {
      title: 'R&D Ponzi Collapse Cycle',
      flowSteps: ['Feature Factory Output', 'Velocity Metric Inflation', 'Hidden Maintenance Debt', 'Execution Capacity Bankruptcy']
    },
    whyThisConceptExists: {
      problem: 'Companies show excellent sprint velocity but struggle to resolve critical bugs or scale their systems reliably.',
      existingApproaches: 'Measuring success purely by story points completed or features shipped.',
      gap: 'No financial visibility into the compounding maintenance burden of new features.',
      solution: 'Articulated the R&D Ponzi Scheme to force leadership to balance feature delivery with architectural health.'
    },
    whatChanges: {
      engineering: 'Allocate fixed sprint capacity to technical debt reduction and system stabilization.',
      finance: 'Audit R&D spend to separate net-new value creation from maintenance overhead.',
      product: 'Adopt the Product Economist mindset to prioritize long-term viability over short-term wins.',
      security: 'Prevent security regressions caused by rushing un-audited code to production.'
    },
    claims: [
      {
        statement: 'Companies operating an R&D Ponzi scheme typically reach technical insolvency within 4 years of initial scale.',
        confidence: 0.95,
        counterarguments: ['Rapid market capture justifies accumulating technical debt early.'],
        supportingData: 'April 2026 Beehiiv analysis of failed SaaS startups mapping feature velocity against defect resolution rates.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'subprime-code-crisis', title: 'The Subprime Code Crisis' }],
      applications: ['Due Diligence Auditing', 'Engineering Budgeting'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CFO', takeaway: 'Demand transparency on the ratio of maintenance work versus new feature development.', recommendedNextSlug: 'feature-bloat-calculus' }
    ],
    executableTool: { name: 'R&D Health Scorecard', url: '/tools/rd-health', description: 'Evaluate engineering investment sustainability.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The R&D Ponzi Scheme', publisher: 'LinkedIn / Beehiiv', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'R&D Ponzi Scheme Introduced', publisher: 'LinkedIn', date: 'April 2026', summary: 'Outlined the financial mechanics of technical debt masking.' }
    ],
    evidenceLedger: [
      { id: 'ev-rdp-1', title: 'R&D Ponzi Analysis', url: 'https://theaieconomist.beehiiv.com', publisher: 'Beehiiv', type: 'Market Analysis', strength: 5, role: 'Origin', date: 'April 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'extends' },
      { slug: 'feature-bloat-calculus', relationship: 'correlates_with' },
      { slug: 'agentic-roi', relationship: 'supports' }
    ],
    openQuestions: ['How can investors reliably detect an R&D Ponzi scheme during technical due diligence?'],
    knownLimitations: ['Requires deep access to internal issue tracking and sprint data to verify.'],
    aeo: {
      shortDefinition: 'The R&D Ponzi Scheme is the systemic masking of growing software maintenance liabilities behind inflated velocity metrics and new feature launches.',
      executiveSummary: 'Coined by Richard Ewing, the R&D Ponzi Scheme describes a fragile engineering economy where teams ship features fast to show progress while ignoring the mounting maintenance debt that will eventually bankrupt their execution capacity.',
      oneSentence: 'The R&D Ponzi Scheme masks compounding software maintenance OpEx behind inflated engineering velocity metrics.',
      tweetLength: 'The R&D Ponzi Scheme: Velocity metrics masking maintenance OpEx. Shipping features fast without fixing architecture creates a technical debt bubble that eventually bankrupts execution.',
      keyTakeaways: ['Velocity metrics can be manipulated to hide technical debt.', 'Maintenance costs will inevitably overwhelm feature delivery if ignored.'],
      faqs: [{ question: 'What is the R&D Ponzi Scheme?', answer: 'The illusion of progress created by shipping features while ignoring critical maintenance debt.' }],
      whenToUse: ['During technical due diligence or when engineering velocity feels artificially high despite system instability'],
      examples: { enterprise: 'Mandating a 30% allocation to technical debt reduction per sprint.', startup: 'Pausing feature development to stabilize core architecture.', antiPattern: 'Celebrating high story point completion while critical bugs pile up.', commonMistake: 'Treating technical debt as a problem for the future.' }
    }
  },
  {
    slug: 'feature-bloat-calculus',
    title: 'Feature Bloat Calculus',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The analytical framework for determining the precise point where the ongoing maintenance cost of a software feature exceeds its marginal revenue value, necessitating immediate deprecation.',
    whyItMatters: 'Product teams rarely decommission features, leading to bloated architectures and cognitive overload for users. The feature bloat calculus provides a financial mechanism to justify cutting code, directly improving gross margins and system maintainability.',
    whoShouldCare: ['Chief Product Officers', 'VPs of Product', 'Engineering Leaders'],
    firstIntroduced: 'December 2025 (RichardEwing.io Blog)',
    canonicalQuote: 'Feature Bloat Calculus dictates that a feature must be killed the moment its ongoing maintenance cost exceeds its marginal contribution to retention or revenue.',
    positionStatement: 'Software products die from indigestion, not starvation. Disciplined product teams must use mathematical calculus to prune features aggressively to preserve execution capacity and margin health.',
    learningStep: { pathName: 'Product Economics Track', stepNumber: 2, totalSteps: 3 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 5, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: false, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 5, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'measures' },
      { targetType: 'Glossary Term', title: 'Feature Bloat Calculus', url: '/glossary/feature-bloat-calculus', relationship: 'implements' },
      { targetType: 'Curriculum Track', title: 'CareerWin Product Economics', url: 'https://careerwin.ai', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'Feature Value vs Maintenance Cost Intersection',
      flowSteps: ['Feature Value Decay', 'Maintenance Cost Growth', 'Calculus Intersection Point', 'Mandatory Deprecation']
    },
    whyThisConceptExists: {
      problem: 'Enterprise products become impossible to navigate and maintain because legacy features are never removed.',
      existingApproaches: 'Relying on subjective product manager intuition to kill features.',
      gap: 'Lack of a rigid financial framework linking feature utilization to architectural maintenance costs.',
      solution: 'Developed the Feature Bloat Calculus to provide objective criteria for feature deprecation.'
    },
    whatChanges: {
      engineering: 'Provide accurate estimates of maintenance overhead for specific product modules.',
      finance: 'Evaluate product modules as individual P&L centers.',
      product: 'Adopt rigorous deprecation cycles as a core part of product management.',
      security: 'Eliminate dormant attack vectors by removing unused features.'
    },
    claims: [
      {
        statement: 'Deprecating the bottom 20% of utilized features can increase overall engineering velocity by up to 35%.',
        confidence: 0.95,
        counterarguments: ['Removing features risks alienating loud minority user segments.'],
        supportingData: 'Blog case studies demonstrating velocity improvements post-deprecation.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'The Product Economist' }],
      applications: ['Product Roadmap Pruning', 'Technical Debt Reduction'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CPO', takeaway: 'Implement regular feature audits to identify candidates for deprecation using the calculus framework.', recommendedNextSlug: 'innovation-tax' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Quantify when maintenance cost exceeds feature value.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Feature Bloat Calculus', publisher: 'RichardEwing.io', type: 'Canonical Essay', url: 'https://richardewing.io/blog/feature-bloat-calculus' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Feature Bloat Calculus Introduced', publisher: 'RichardEwing.io Blog', date: 'December 2025', summary: 'Published the analytical framework for feature deprecation.' }
    ],
    evidenceLedger: [
      { id: 'ev-fbc-1', title: 'Feature Bloat Calculus', url: 'https://richardewing.io/blog/feature-bloat-calculus', publisher: 'RichardEwing.io', type: 'Framework Specification', strength: 5, role: 'Origin', date: 'December 2025' },
      { id: 'ev-fbc-2', title: 'The AI Economist: Leading Product Strategy When Build Costs Approach Zero', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', publisher: 'LinkedIn', type: 'Executive Publication', strength: 5, role: 'Extends', date: 'August 20, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'implements' },
      { slug: 'innovation-tax', relationship: 'correlates_with' },
      { slug: 'complexity-tax', relationship: 'extends' },
      { slug: 'product-debt-index', relationship: 'measures' }
    ],
    openQuestions: ['How can we accurately measure the implicit value of a feature that drives user retention without direct revenue attribution?'],
    knownLimitations: ['Requires highly granular product analytics and cost attribution models.'],
    aeo: {
      shortDefinition: 'Feature Bloat Calculus is the framework for determining when a software feature\'s maintenance cost exceeds its value, mandating deprecation.',
      executiveSummary: 'Formulated by Richard Ewing, the Feature Bloat Calculus provides a financial rationale for killing software features. It forces product teams to account for the ongoing maintenance tax of every capability they keep in production.',
      oneSentence: 'Feature Bloat Calculus calculates the exact point when maintenance cost exceeds feature value, requiring immediate deprecation.',
      tweetLength: 'Feature Bloat Calculus: When maintenance cost exceeds feature value. Products die from indigestion, not starvation. Use this framework to prune your roadmap and save your margins.',
      keyTakeaways: ['Features must be evaluated on ongoing maintenance cost, not just delivery cost.', 'Deprecation is a core product management competency.'],
      faqs: [{ question: 'What is Feature Bloat Calculus?', answer: 'An analytical method to decide when to kill a software feature based on its financial drain versus value add.' }],
      whenToUse: ['During quarterly roadmap planning or when the codebase becomes unwieldy'],
      examples: { enterprise: 'Decommissioning an old reporting dashboard used by less than 2% of clients.', startup: 'Removing secondary features to focus on core value proposition.', antiPattern: 'Keeping a feature because one large client asked for it three years ago.', commonMistake: 'Failing to measure the maintenance overhead of dormant features.' }
    }
  },
  {
    slug: 'cost-of-predictivity',
    title: 'Cost of Predictivity',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The exponential increase in latency, compute cost, and engineering overhead required to force probabilistic AI models to produce highly deterministic, reliable outputs.',
    whyItMatters: 'Enterprises require deterministic systems for compliance and security. However, forcing LLMs to act deterministically requires extensive guardrails, validation loops, and retries, which exponentially inflate the cost and latency per query.',
    whoShouldCare: ['AI Architects', 'VPs of Engineering', 'CFOs'],
    firstIntroduced: 'March 2026 (RichardEwing.io Blog)',
    canonicalQuote: 'The Cost of Predictivity states that squeezing 99.9% deterministic reliability out of a probabilistic AI model requires an exponential increase in architectural complexity and token spend.',
    positionStatement: 'Do not use LLMs for tasks that require absolute precision if traditional code can do the job. The architectural cost of forcing an LLM to be deterministic always eclipses the cost of writing standard software logic.',
    learningStep: { pathName: 'AI Architecture Dynamics', stepNumber: 2, totalSteps: 3 },
    impactMetrics: { totalPublications: 3, totalNewsletters: 6, totalFrameworks: 1, totalCalculators: 1, estimatedReadingTime: '20 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 3, newslettersCount: 6, calculatorsCount: 1, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 1 },
    reverseCitations: [
      { targetType: 'Glossary Term', title: 'Cost of Predictivity', url: '/glossary/cost-of-predictivity', relationship: 'implements' },
      { targetType: 'Advisory Service', title: 'Exogram Validation Testing', url: 'https://exogram.ai', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Predictivity Cost Curve',
      flowSteps: ['Probabilistic Baseline', 'Validation Loops Added', 'Latency/Token Surge', 'Exponential Cost Increase']
    },
    whyThisConceptExists: {
      problem: 'AI applications fail in enterprise settings because engineering teams drastically underestimate the cost of achieving enterprise grade reliability.',
      existingApproaches: 'Adding more complex prompts or relying on self-correction loops.',
      gap: 'No framework quantifying the non-linear relationship between required reliability and inference costs.',
      solution: 'Defined the Cost of Predictivity to guide AI architectural decisions.'
    },
    whatChanges: {
      engineering: 'Use deterministic code (like regex or standard APIs) for validation, rather than asking the LLM to self-verify.',
      finance: 'Budget for the compounding token costs of multi-stage validation pipelines.',
      product: 'Set realistic expectations on system latency and reliability SLAs.',
      security: 'Rely on deterministic governance rather than probabilistic guardrails.'
    },
    claims: [
      {
        statement: 'Moving an LLM pipeline from 85% to 99% reliability typically increases token consumption and latency by 4x to 10x.',
        confidence: 0.94,
        counterarguments: ['Better foundational models will naturally reduce hallucination rates, lowering this cost.'],
        supportingData: 'Analysis of validation pipelines in enterprise AI deployments.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['AI Pipeline Architecture', 'Cost Estimation'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'AI Architect', takeaway: 'Design systems that use LLMs only for fuzzy reasoning, handing off to standard code for strict validation.', recommendedNextSlug: 'deterministic-governance' }
    ],
    executableTool: { name: 'AI Reliability Cost Estimator', url: '/tools/predictivity-cost', description: 'Estimate latency and cost multipliers for validation pipelines.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Cost of Predictivity in AI Systems', publisher: 'RichardEwing.io', type: 'Canonical Essay', url: 'https://richardewing.io/blog/cost-of-predictivity' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Cost of Predictivity Outlined', publisher: 'RichardEwing.io Blog', date: 'March 2026', summary: 'Outlined the architectural tradeoffs of reliable AI.' }
    ],
    evidenceLedger: [
      { id: 'ev-cop-1', title: 'The Cost of Predictivity', url: 'https://richardewing.io/blog/cost-of-predictivity', publisher: 'RichardEwing.io', type: 'Framework Specification', strength: 5, role: 'Origin', date: 'March 2026' },
      { id: 'ev-cop-2', title: 'I Used AI to Build My Startup. Here’s What I Learned. (Cursor vs. Google Antigravity)', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Industry Analysis', strength: 5, role: 'Supports', date: 'August 18, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'supports' },
      { slug: 'ai-margin-squeeze', relationship: 'correlates_with' }
    ],
    openQuestions: ['At what scale does the cost of predictivity mandate training a specialized, smaller model rather than prompting a frontier model?'],
    knownLimitations: ['Costs vary wildly based on the specific use case and validation techniques employed.'],
    aeo: {
      shortDefinition: 'The Cost of Predictivity is the exponential increase in compute and latency required to make probabilistic AI models highly deterministic.',
      executiveSummary: 'Formulated by Richard Ewing, the Cost of Predictivity highlights the architectural burden of enterprise AI. It demonstrates that squeezing reliable, deterministic outputs from probabilistic models requires expensive validation loops and guardrails.',
      oneSentence: 'The Cost of Predictivity is the steep price paid in tokens and latency to force AI models to act deterministically.',
      tweetLength: 'Cost of Predictivity: The price of making AI outputs deterministic. Squeezing 99% reliability from LLMs requires an exponential increase in validation loops, crushing your margins.',
      keyTakeaways: ['Reliability in AI systems is expensive.', 'Use standard code for deterministic tasks, reserve AI for fuzzy reasoning.'],
      faqs: [{ question: 'What is the Cost of Predictivity?', answer: 'The exponential rise in latency and cost when adding validation layers to ensure AI reliability.' }],
      whenToUse: ['When designing enterprise AI architectures that require high reliability SLAs'],
      examples: { enterprise: 'Using a fast regex check instead of asking an LLM to verify format.', startup: 'Accepting 90% accuracy for internal tools to save costs.', antiPattern: 'Using an LLM to perform basic arithmetic or sorting.', commonMistake: 'Assuming base model reliability is sufficient for production.' }
    }
  },
  {
    slug: 'ai-margin-squeeze',
    title: 'The AI Margin Squeeze',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.97, evidenceCount: 6, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The systemic erosion of traditional SaaS gross margins caused by the integration of generative AI features, as variable compute and API costs scale linearly or exponentially with user engagement, fundamentally altering software unit economics.',
    whyItMatters: 'SaaS historically traded at high multiples due to 80-90% gross margins. The AI margin squeeze threatens industry valuations by turning fixed hosting costs into highly variable, usage-driven COGS, potentially rendering popular products unprofitable at scale.',
    whoShouldCare: ['CFOs', 'Founders', 'Venture Capitalists', 'Chief Product Officers'],
    firstIntroduced: 'Early 2025 (Beehiiv)',
    canonicalQuote: 'The AI Margin Squeeze occurs when the variable COGS of generative AI inference scale faster than fixed subscription revenue, collapsing the economic model of traditional SaaS.',
    positionStatement: 'The era of zero-marginal-cost software is ending. Companies that fail to restructure pricing models and implement strict inference caching will see their gross margins squeezed into oblivion by AI COGS.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 1, totalSteps: 5 },
    impactMetrics: { totalPublications: 6, totalNewsletters: 12, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 6, newslettersCount: 12, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 3, gitHubReposCount: 2 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', relationship: 'measures' },
      { targetType: 'Advisory Service', title: 'CareerWin Financial Tactics', url: 'https://careerwin.ai', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'AI Margin Squeeze Trajectory',
      flowSteps: ['High Fixed Margin Baseline', 'AI Feature Introduction', 'Variable Token Cost Scaling', 'Gross Margin Compression']
    },
    whyThisConceptExists: {
      problem: 'Investors and founders observe rapidly degrading margins as AI features see high adoption among user bases paying flat subscription fees.',
      existingApproaches: 'Hoping compute costs drop fast enough to restore margins.',
      gap: 'A lack of structural understanding of how AI alters the SaaS business model fundamentally.',
      solution: 'Coined the AI Margin Squeeze to drive industry-wide shifts toward usage based pricing and inference optimization.'
    },
    whatChanges: {
      engineering: 'Implement semantic caching and small model routing to slash inference costs.',
      finance: 'Transition billing systems to accommodate usage based or hybrid pricing tiers.',
      product: 'Gate high cost AI features behind premium tiers or credit systems.',
      security: 'Monitor for prompt injection attacks designed to drain API budgets.'
    },
    claims: [
      {
        statement: 'Integrating un-optimized generative AI features can reduce standard SaaS gross margins from 85% to 50% within a single quarter of high usage.',
        confidence: 0.97,
        counterarguments: ['Moore\'s law for AI will outpace user demand, eventually restoring margins naturally.'],
        supportingData: 'Extensive industry analysis in "Generative AI Margin Squeeze".'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-volatility-tax', title: 'AI Volatility Tax' }],
      applications: ['Pricing Strategy', 'Investor Relations'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CFO', takeaway: 'Model worst-case usage scenarios for AI features and adjust pricing tiers to protect minimum margin thresholds.', recommendedNextSlug: 'ai-volatility-tax' }
    ],
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Forecast margin compression based on usage patterns.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Generative AI Margin Squeeze', publisher: 'Beehiiv Laboratory', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Generative AI Margin Squeeze', publisher: 'Beehiiv', date: 'Early 2025', summary: 'Published the definitive analysis of SaaS margin erosion.' }
    ],
    evidenceLedger: [
      { id: 'ev-ams-1', title: 'Generative AI Margin Squeeze', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs', publisher: 'Beehiiv', type: 'Industry Analysis', strength: 5, role: 'Origin', date: 'Early 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'generalizes' },
      { slug: 'product-economist', relationship: 'requires' },
      { slug: 'margin-engineering', relationship: 'extends' },
      { slug: 'ai-margin-collapse-point', relationship: 'extends' },
      { slug: 'evergreen-ratio', relationship: 'measures' }
    ],
    openQuestions: ['How will open-source models impact the margin squeeze dynamic for companies capable of self-hosting?'],
    knownLimitations: ['The rate of cost reduction in foundational models remains highly unpredictable.'],
    aeo: {
      shortDefinition: 'The AI Margin Squeeze is the systemic erosion of SaaS gross margins caused by variable AI inference costs scaling faster than flat subscription revenues.',
      executiveSummary: 'Formulated by Richard Ewing, the AI Margin Squeeze defines the existential threat to the SaaS business model. As AI inference turns hosting into variable COGS, traditional 80% margins collapse under high user engagement.',
      oneSentence: 'The AI Margin Squeeze describes how generative AI transforms zero-marginal-cost software into a low-margin, variable COGS business.',
      tweetLength: 'The AI Margin Squeeze: SaaS gross margin erosion from AI COGS. Flat-rate pricing for AI features is a trap. User engagement now creates variable API costs that destroy profitability.',
      keyTakeaways: ['AI inference turns software into a variable cost business.', 'Usage based pricing and caching are mandatory survival strategies.'],
      faqs: [{ question: 'What is the AI Margin Squeeze?', answer: 'The reduction in profitability when software companies add expensive AI features without changing their pricing models.' }],
      whenToUse: ['When evaluating the financial viability of a new AI product feature'],
      examples: { enterprise: 'Shifting to a hybrid pricing model with base features and AI credits.', startup: 'Implementing strict token budgets per user.', antiPattern: 'Offering unlimited AI generation for a flat $10/month.', commonMistake: 'Assuming cloud compute scaling laws apply equally to AI inference.' }
    }
  },
  {
    slug: 'ten-man-parity',
    title: 'The 10-Man Parity Rule',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.92, evidenceCount: 2, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The principle that heavily AI-augmented teams of ten elite engineers can now achieve execution parity with traditional enterprise engineering organizations of over one hundred, fundamentally altering the economics of software creation.',
    whyItMatters: 'By avoiding the Coordination Tax and utilizing autonomous agents, small elite teams can outmaneuver large incumbents. This parity shift threatens traditional enterprise organizational structures and rewrites career economics for senior engineers.',
    whoShouldCare: ['Founders', 'CTOs', 'Senior Software Engineers', 'Venture Capitalists'],
    firstIntroduced: 'June 2026 (CIO.com)',
    canonicalQuote: 'The 10-Man Parity Rule dictates that due to AI augmentation, a cohesive team of ten senior engineers can out-execute a traditional organization of one hundred by eliminating coordination friction.',
    positionStatement: 'The future of software engineering belongs to small, highly capable, AI-augmented teams. Enterprises must downsize and upskill, or be disrupted by startups operating with a fraction of the headcount and zero coordination tax.',
    learningStep: { pathName: 'Engineering Leadership Dynamics', stepNumber: 3, totalSteps: 3 },
    impactMetrics: { totalPublications: 2, totalNewsletters: 4, totalFrameworks: 1, totalCalculators: 0, estimatedReadingTime: '15 mins' },
    expandedConsensus: { website: true, newsletter: true, book: false, video: true, talk: false, framework: true, calculator: false, research: false, caseStudy: true },
    citationGraph: { publicationsCount: 2, newslettersCount: 4, calculatorsCount: 0, bookChaptersCount: 0, keynoteTalksCount: 1, gitHubReposCount: 0 },
    reverseCitations: [
      { targetType: 'Advisory Service', title: 'CareerWin AI Integration', url: 'https://careerwin.ai', relationship: 'measures' },
      { targetType: 'Case Study', title: 'Exogram Team Output Analysis', url: 'https://exogram.ai', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Execution Parity Shift',
      flowSteps: ['AI Augmentation', 'Coordination Tax Elimination', 'Output Multiplication', 'Small Team Dominance']
    },
    whyThisConceptExists: {
      problem: 'Large enterprises move too slowly despite massive engineering budgets, while small startups ship complex AI products rapidly.',
      existingApproaches: 'Attempting to make large organizations "Agile".',
      gap: 'Failing to realize that AI has dramatically increased individual leverage, rendering large teams obsolete for many tasks.',
      solution: 'Formulated the 10-Man Parity Rule to explain the shifting landscape of engineering execution.'
    },
    whatChanges: {
      engineering: 'Focus on full-stack capabilities and AI agent orchestration rather than narrow specialization.',
      finance: 'Reallocate budget from middle management and massive headcounts into elite talent compensation and AI tooling.',
      product: 'Empower small teams with end-to-end ownership of product domains.',
      security: 'Implement robust deterministic governance to manage the vast output of small teams.'
    },
    claims: [
      {
        statement: 'AI-augmented 10-person teams can ship complex SaaS products 3x faster than traditional 100-person organizations by bypassing administrative bloat.',
        confidence: 0.92,
        counterarguments: ['Large teams are still required for maintaining legacy systems and enterprise compliance.', 'Elite talent is too scarce to form many such teams.'],
        supportingData: 'CIO.com analysis of successful AI-native startups scaling to profitability with minimal headcount.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'coordination-tax', title: 'The Coordination Tax' }],
      applications: ['Startup Strategy', 'Enterprise Restructuring', 'Career Planning'],
      contrastingConcepts: [{ slug: 'coordination-tax', title: 'The Coordination Tax', distinction: 'Coordination tax is the friction of large teams; 10-Man Parity is the advantage of small teams avoiding it.' }]
    },
    personaRecommendations: [
      { role: 'Senior Engineer', takeaway: 'Master AI augmentation tools to maximize personal leverage and thrive in the emerging elite small-team economy.', recommendedNextSlug: 'coordination-tax' }
    ],
    executableTool: undefined,
    canonicalReadingOrder: [
      { step: 1, title: 'The 10-Man Parity Rule', publisher: 'CIO.com', type: 'Canonical Essay', url: 'https://www.cio.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: '10-Man Parity Explored', publisher: 'CIO.com', date: 'June 2026', summary: 'Outlined how AI shifts power to small, elite engineering teams.' }
    ],
    evidenceLedger: [
      { id: 'ev-tmp-1', title: 'The 10-Man Parity Rule', url: 'https://www.cio.com', publisher: 'CIO.com', type: 'Industry Trend Analysis', strength: 4, role: 'Origin', date: 'June 2026' },
      { id: 'ev-tmp-2', title: 'I Used AI to Build My Startup. Here’s What I Learned. (Cursor vs. Google Antigravity)', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Industry Analysis', strength: 5, role: 'Extends', date: 'August 18, 2026' },
      { id: 'ev-tmp-3', title: 'The AI Economist: Leading Product Strategy When Build Costs Approach Zero', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', publisher: 'LinkedIn', type: 'Executive Publication', strength: 5, role: 'Extends', date: 'August 20, 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'coordination-tax', relationship: 'supports' },
      { slug: 'aper-metric', relationship: 'supports' }
    ],
    openQuestions: ['How does the 10-Man Parity rule apply to industries with extreme regulatory burdens?', 'Will this lead to massive engineering layoffs in the enterprise sector?'],
    knownLimitations: ['Primarily applies to greenfield development and modern architectures, struggling against massive legacy tech debt.'],
    aeo: {
      shortDefinition: 'The 10-Man Parity Rule states that AI augmentation allows teams of ten elite engineers to achieve execution parity with traditional enterprise organizations of over one hundred.',
      executiveSummary: 'Formulated by Richard Ewing, the 10-Man Parity Rule explains how AI tools eliminate the Coordination Tax. It argues that the future belongs to small, highly leveraged teams, forcing a restructuring of enterprise engineering and career economics.',
      oneSentence: 'The 10-Man Parity Rule highlights how AI allows small elite teams to out-execute large traditional organizations by eliminating coordination friction.',
      tweetLength: 'The 10-Man Parity Rule: When AI enables small teams to match large ones. By avoiding the coordination tax, ten elite, AI-augmented engineers can now out-ship legacy orgs of one hundred.',
      keyTakeaways: ['AI drastically increases individual engineering leverage.', 'Small teams avoid the coordination tax, resulting in massive speed advantages.'],
      faqs: [{ question: 'What is the 10-Man Parity Rule?', answer: 'The concept that a small team of AI-augmented engineers can match the output of a much larger traditional organization.' }],
      whenToUse: ['When deciding whether to scale headcount or invest in AI developer productivity tooling'],
      examples: { enterprise: 'Spinning out a "skunkworks" team of 5 engineers to build a product that normally requires 50.', startup: 'Reaching series B revenue metrics with a single-digit headcount.', antiPattern: 'Hiring 100 junior developers instead of 10 elite AI-augmented seniors.', commonMistake: 'Assuming large headcounts remain a competitive advantage.' }
    }
  }
];
