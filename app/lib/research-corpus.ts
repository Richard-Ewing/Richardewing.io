export interface CorpusArticle {
  id: string;
  title: string;
  url: string;
  publisher: 'CIO.com' | 'Built In' | 'Mind the Product' | 'HackerNoon' | 'Beehiiv' | 'LinkedIn';
  domain: 'AI Economics' | 'AI Governance' | 'Software Economics' | 'Engineering Leadership' | 'Product Leadership' | 'Career Economics';
  type: 'Evergreen' | 'Time-Sensitive' | 'Executable';
  editorsPick?: boolean;
  thesis: string;
  date?: string;
  relatedConceptIds?: string[];
  relatedGlossarySlugs?: string[];
  relatedFrameworkSlugs?: string[];
  relatedToolIds?: string[];
  relatedCaseStudyIds?: string[];
  relatedCurriculumTrackIds?: string[];
}

export const RESEARCH_DOMAINS = [
  'AI Economics',
  'AI Governance',
  'Software Economics',
  'Engineering Leadership',
  'Product Leadership',
  'Career Economics'
] as const;

export const RESEARCH_CORPUS: CorpusArticle[] = [
  // Today's Beehiiv Laboratory Newsletter — August 7, 2026
  {
    id: 'beehiiv-prevent-context-loss',
    title: 'How to Prevent Memory Loss in AI Applications',
    url: 'https://theaieconomist.beehiiv.com/p/how-to-prevent-context-loss-in-ai-applications',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'August 7, 2026',
    thesis: 'Stop AI context decay and errors using a 3-tier memory structure, organized state summaries, and database state separation rather than expanding raw prompt context.',
    relatedConceptIds: ['deterministic-governance', 'ai-governance', 'context-rot', 'inference-economics']
  },
  // Today's LinkedIn Newsletter — August 6, 2026
  {
    id: 'linkedin-bigger-memory-window-confused-worker-inbox',
    title: 'Giving an AI a bigger memory window is like giving a confused worker a bigger inbox.',
    url: 'https://www.linkedin.com/in/richard-ewing-mba/',
    publisher: 'LinkedIn',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'August 6, 2026',
    thesis: 'Expanding an AI agent’s context window without structured indexing creates cognitive clutter rather than intelligence. True operational velocity requires deterministic context filtering over raw token expansion.',
    relatedConceptIds: ['deterministic-governance', 'ai-governance', 'context-rot', 'ai-volatility-tax']
  },
  // Today's Beehiiv Laboratory Newsletter — August 6, 2026
  {
    id: 'beehiiv-claude-search-tool-zero-adoption',
    title: 'Claude Search Fails: Prompting Kills Adoption',
    url: 'https://theaieconomist.beehiiv.com/p/claude-search-tool-zero-adoption',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'August 6, 2026',
    thesis: 'Why relying purely on prompt instructions for search tools causes enterprise adoption to plummet, and how deterministic tool-execution boundaries solve user friction.',
    relatedConceptIds: ['deterministic-governance', 'ai-governance', 'ai-volatility-tax']
  },
  // LinkedIn Post — August 3, 2026
  {
    id: 'linkedin-context-window-clutter',
    title: 'More Memory Creates Clutter: Why 1M-Token Context Windows Break AI Agents',
    url: 'https://www.linkedin.com/in/richard-ewing-mba/',
    publisher: 'LinkedIn',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'August 3, 2026',
    thesis: 'Giving an AI agent a massive unformatted context window creates informational clutter rather than intelligence; performance requires database-managed structured filing over raw memory capacity.',
    relatedConceptIds: ['deterministic-governance', 'ai-governance', 'ai-agents']
  },
  // New Beehiiv Laboratory Newsletter — July 31, 2026
  {
    id: 'beehiiv-stop-unauthorized-db-actions',
    title: 'How to Stop Unauthorized AI Agent Database Actions',
    url: 'https://theaieconomist.beehiiv.com/p/how-to-protect-production-databases-from-unauthorized-ai-agent-actions',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'July 31, 2026',
    thesis: 'Why probabilistic system prompts fail when AI agents execute direct database operations, and how to install sub-5ms binary proxy gates to prevent unauthorized state mutations.',
    relatedConceptIds: ['agent-kill-switch', 'deterministic-governance', 'runtime-vs-alignment', 'ai-governance']
  },
  // LinkedIn Newsletter — July 30, 2026
  {
    id: 'linkedin-ai-taking-actions',
    title: 'The Moment Your AI Starts Taking Actions, the Rules Change',
    url: 'https://www.linkedin.com/pulse/moment-your-ai-starts-taking-actions-rules-change-richard-ewing-zapmc/',
    publisher: 'LinkedIn',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    date: 'July 30, 2026',
    thesis: 'When AI models transition from read-only text generation to taking autonomous actions across enterprise APIs, probabilistic guardrails fail and real-time execution boundaries are required.',
    relatedConceptIds: ['agent-kill-switch', 'deterministic-governance', 'ai-governance', 'ai-agents']
  },

  // Tier 1 Media — CIO.com (7 Articles)
  {
    id: 'cio-shipping-faster',
    title: 'Hey, Senior PMs: Shipping Faster Won’t Get You Promoted',
    url: 'https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html',
    publisher: 'CIO.com',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Shifts product management focus from feature output to margin contribution and P&L ownership.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus","coordination-tax"],
    relatedGlossarySlugs: ["product-debt-index","feature-bloat"],
    relatedToolIds: ["pdi"]
  },
  {
    id: 'cio-cfo-agile',
    title: 'Why Your CFO Hates Your Agile Transformation',
    url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html',
    publisher: 'CIO.com',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Details the hidden financial costs of velocity-centric Agile and their impact on CFO-level capital allocation.',
    relatedConceptIds: ["r-and-d-ponzi","coordination-tax","technical-insolvency"],
    relatedGlossarySlugs: ["technical-debt","technical-insolvency-date"],
    relatedToolIds: ["pdi","ev-se"]
  },
  {
    id: 'cio-model-collapse',
    title: 'The Hidden Inflation of AI: Why Model Collapse Is a Business Risk',
    url: 'https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html',
    publisher: 'CIO.com',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Examines degrading economics and operational risks of recursive AI model training on enterprise margin.',
    relatedConceptIds: ["model-collapse","inference-economics","ai-volatility-tax"],
    relatedGlossarySlugs: ["model-collapse","synthetic-cogs"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'cio-innovation-tax-audit',
    title: 'The Innovation Tax Audit: Is Your R&D Actually Just OpEx?',
    url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html',
    publisher: 'CIO.com',
    domain: 'Software Economics',
    type: 'Executable',
    thesis: 'Provides a framework for auditing R&D spend under ASC 350-40 to distinguish genuine innovation from maintenance OpEx.',
    relatedConceptIds: ["r-and-d-ponzi","technical-insolvency","coordination-tax"],
    relatedGlossarySlugs: ["innovation-tax","technical-debt"],
    relatedToolIds: ["innovation-tax-calculator","pdi"]
  },
  {
    id: 'cio-claude-api-bill',
    title: 'Your Claude API Bill Is Higher Than Your Revenue: Why Simple Python Tasks Are Blowing Up AI Costs',
    url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html',
    publisher: 'CIO.com',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Analyzes model-task mismatch where frontier LLMs are misallocated to low-complexity tasks, destroying SaaS unit economics.',
    relatedConceptIds: ["inference-economics","ai-volatility-tax","ai-margin-squeeze","cost-of-predictivity"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-volatility-tax"],
    relatedToolIds: ["aueb","slm-vs-api"]
  },
  {
    id: 'cio-copilot-bottleneck',
    title: 'GitHub Copilot Is Generating More Code Than Your Team Can Review: Why Senior Engineers Are Now the Bottleneck',
    url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html',
    publisher: 'CIO.com',
    domain: 'Engineering Leadership',
    type: 'Evergreen',
    thesis: 'Identifies the review capacity crunch created when AI code generation outpaces senior engineering verification velocity.',
    relatedConceptIds: ["vibe-coding","subprime-code-crisis","ten-man-parity"],
    relatedGlossarySlugs: ["vibe-coding-debt","subprime-code-crisis"],
    relatedToolIds: ["copilot-roi","audit-interview"]
  },
  {
    id: 'cio-redundant-requests',
    title: 'Why Redundant Requests Are Driving Hidden AI Costs',
    url: 'https://www.cio.com/article/4201936/why-redundant-requests-are-driving-hidden-ai-costs.html',
    publisher: 'CIO.com',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Details the cost impact of un-cached duplicate inference requests and introduces semantic caching mechanisms.',
    relatedConceptIds: ["semantic-caching","inference-economics","ai-volatility-tax"],
    relatedGlossarySlugs: ["semantic-caching","synthetic-cogs"],
    relatedToolIds: ["aueb"]
  },

  // Tier 1 Media — Built In (11 Articles)
  {
    id: 'builtin-fable-vs-gpt5',
    title: 'Fable 5 vs. GPT-5: Comparing Frontier Reasoning Paradigms',
    url: 'https://builtin.com/articles/fable-5-vs-gpt-56-sol',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Evergreen',
    editorsPick: true,
    thesis: 'Compares deterministic versus probabilistic reasoning architectures for enterprise execution.',
    relatedConceptIds: ["model-collapse","cost-of-predictivity","inference-economics"],
    relatedGlossarySlugs: ["model-collapse","frontier-model"]
  },
  {
    id: 'builtin-ai-security-gates',
    title: 'Architecting Deterministic Security Gates for AI Agents',
    url: 'https://builtin.com/articles/ai-agent-security-gates',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Provides implementation specifications for binary admissibility gates in autonomous agent execution pipelines.',
    relatedConceptIds: ["deterministic-governance","agent-kill-switch","runtime-vs-alignment","ai-governance"],
    relatedGlossarySlugs: ["deterministic-governance","agent-kill-switch"],
    relatedToolIds: ["prompt-injection-sandbox","agentic-drift-matrix"]
  },
  {
    id: 'builtin-ai-security-breach',
    title: 'Inside the First Autonomous AI Agent Security Breach',
    url: 'https://builtin.com/articles/ai-agent-security-breach',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Time-Sensitive',
    editorsPick: true,
    thesis: 'A post-mortem analysis of memory poisoning and unauthorized tool execution in production AI agents.',
    relatedConceptIds: ["agent-kill-switch","shadow-ai","ai-governance","deterministic-governance"],
    relatedGlossarySlugs: ["agent-kill-switch","shadow-ai"],
    relatedToolIds: ["shadow-ai","agentic-drift-matrix"]
  },
  {
    id: 'builtin-kill-switch',
    title: 'Your AI Agent Needs a Kill Switch',
    url: 'https://builtin.com/articles/ai-agent-kill-switch',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Executable',
    editorsPick: true,
    thesis: 'Introduces binary execution control layers and state integrity hashing to contain rogue agent behavior.',
    relatedConceptIds: ["agent-kill-switch","deterministic-governance","runtime-vs-alignment","ai-governance"],
    relatedGlossarySlugs: ["agent-kill-switch","deterministic-governance"],
    relatedToolIds: ["agentic-drift-matrix"]
  },
  {
    id: 'builtin-make-ai-profitable',
    title: 'Most AI Projects Just Burn Cash. Here’s How to Make Them Profitable.',
    url: 'https://builtin.com/articles/make-ai-projects-profitable',
    publisher: 'Built In',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Calculates the AI Volatility Tax and provides formulas for establishing positive inference unit economics.',
    relatedConceptIds: ["ai-volatility-tax","inference-economics","ai-margin-squeeze","cost-of-predictivity"],
    relatedGlossarySlugs: ["ai-volatility-tax","synthetic-cogs"],
    relatedToolIds: ["aueb","slm-vs-api"]
  },
  {
    id: 'builtin-vibe-coding-era',
    title: 'In the Vibe Coding Era, What Does a Software Engineer Even Do?',
    url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role',
    publisher: 'Built In',
    domain: 'Engineering Leadership',
    type: 'Evergreen',
    editorsPick: true,
    thesis: 'Defines the 4 Laws of Probabilistic Software Development and the shift from code authoring to system verification.',
    relatedConceptIds: ["vibe-coding","subprime-code-crisis","ten-man-parity"],
    relatedGlossarySlugs: ["vibe-coding-debt"],
    relatedToolIds: ["audit-interview","copilot-roi"]
  },
  {
    id: 'builtin-agentic-ai-analysis',
    title: 'AI Agents Won’t Crash the Economy. Bad Governance Might.',
    url: 'https://builtin.com/articles/agentic-ai-scientific-economic-analysis',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Evergreen',
    thesis: 'Analytic review of agentic macro-economics, systemic risk, and the necessity of deterministic governance.',
    relatedConceptIds: ["ai-governance","deterministic-governance","agent-kill-switch","ai-agents"],
    relatedGlossarySlugs: ["deterministic-governance","ai-agent-sprawl"]
  },
  {
    id: 'builtin-deleting-code',
    title: 'Real Innovation Requires Deleting Code, Not Writing It',
    url: 'https://builtin.com/articles/innovation-requires-deleting-code',
    publisher: 'Built In',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Advocates for negative code velocity (deleting zombie features) to reclaim R&D capital efficiency.',
    relatedConceptIds: ["r-and-d-ponzi","feature-bloat-calculus","technical-insolvency"],
    relatedGlossarySlugs: ["zombie-code","product-debt-index"],
    relatedToolIds: ["pdi"]
  },
  {
    id: 'builtin-audit-interview',
    title: 'When AI Writes the Code, What Skills Are Employers Hiring For?',
    url: 'https://builtin.com/articles/audit-interview-scorecard',
    publisher: 'Built In',
    domain: 'Engineering Leadership',
    type: 'Executable',
    editorsPick: true,
    thesis: 'Presents the 4 Dimensions of Engineering Judgment scorecard for evaluating software engineers in the AI era.',
    relatedConceptIds: ["vibe-coding","ten-man-parity","subprime-code-crisis"],
    relatedGlossarySlugs: ["vibe-coding-debt","audit-interview"],
    relatedToolIds: ["audit-interview"]
  },
  {
    id: 'builtin-reimagining-interview',
    title: 'Is Anthropic’s ‘Cheating’ Scandal the End of the Coding Interview?',
    url: 'https://builtin.com/articles/reimagining-coding-interview',
    publisher: 'Built In',
    domain: 'Engineering Leadership',
    type: 'Time-Sensitive',
    editorsPick: true,
    thesis: 'Replaces traditional leetcode interviews with the Audit Interview framework to test error detection capacity.',
    relatedConceptIds: ["vibe-coding","ten-man-parity"],
    relatedGlossarySlugs: ["audit-interview","vibe-coding-debt"],
    relatedToolIds: ["audit-interview"]
  },
  {
    id: 'builtin-business-test',
    title: 'The AI Product Business Test: 5 Questions Before You Ship',
    url: 'https://builtin.com/articles/ai-product-business-test',
    publisher: 'Built In',
    domain: 'Product Leadership',
    type: 'Executable',
    editorsPick: true,
    thesis: 'Diagnostic evaluation to audit whether an AI feature has viable gross margin potential before deployment.',
    relatedConceptIds: ["cost-of-predictivity","product-economist","ai-margin-squeeze"],
    relatedGlossarySlugs: ["product-debt-index","ai-volatility-tax"],
    relatedToolIds: ["pdi","aueb"]
  },

  // Mind the Product & HackerNoon (2 Articles)
  {
    id: 'mtp-3-financial-metrics',
    title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard',
    url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/',
    publisher: 'Mind the Product',
    domain: 'Product Leadership',
    type: 'Executable',
    thesis: 'Deep dive into product P&L ownership, margin contribution, and capital efficiency metrics for PMs.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus","coordination-tax"],
    relatedGlossarySlugs: ["product-debt-index"],
    relatedToolIds: ["pdi"]
  },
  {
    id: 'hackernoon-zero-customers',
    title: 'The Best AI Product I Ever Led Had Zero Customers',
    url: 'https://hackernoon.com/the-best-ai-product-i-ever-led-had-zero-customers',
    publisher: 'HackerNoon',
    domain: 'Product Leadership',
    type: 'Time-Sensitive',
    thesis: 'Forensic breakdown of technical excellence versus product-market fit failures in AI startups.',
    relatedConceptIds: ["product-economist","cost-of-predictivity","feature-bloat-calculus"],
    relatedGlossarySlugs: ["product-debt-index"]
  },

  // Beehiiv Research Notes & Laboratory Incubator (~60 Articles)
  {
    id: 'beehiiv-clarity-to-compass',
    title: 'From Clarity to Compass: Why I Walked Away and What You’ll Get Here',
    url: 'https://theaieconomist.beehiiv.com/p/from-clarity-to-compass-why-i-walked-away-and-what-you-ll-get-here',
    publisher: 'Beehiiv',
    domain: 'Product Leadership',
    type: 'Time-Sensitive',
    thesis: 'Foundational manifesto introducing the Product Economist framework and research agenda.',
    relatedConceptIds: ["product-economist","ai-economics"]
  },
  {
    id: 'beehiiv-10-brutal-lessons',
    title: '10 Brutal Product Lessons I Learned the Hard Way',
    url: 'https://theaieconomist.beehiiv.com/p/10-brutal-product-lessons-i-learned-the-hard-way',
    publisher: 'Beehiiv',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Hard-earned operational rules on feature bloat, roadmap fantasy, and revenue accountability.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus","coordination-tax"]
  },
  {
    id: 'beehiiv-roadmap-killing-team',
    title: 'Your Roadmap Is Killing Your Team: Let’s Fix It',
    url: 'https://theaieconomist.beehiiv.com/p/your-roadmap-is-killing-your-team-let-s-fix-it',
    publisher: 'Beehiiv',
    domain: 'Product Leadership',
    type: 'Executable',
    thesis: 'Replaces feature timeline roadmaps with outcome-based commitment horizons.',
    relatedConceptIds: ["coordination-tax","product-economist","feature-bloat-calculus"],
    relatedToolIds: ["pdi"]
  },
  {
    id: 'beehiiv-permission-slips',
    title: 'You’re Drowning Your Team in Permission Slips: Time to Burn Them',
    url: 'https://theaieconomist.beehiiv.com/p/you-re-drowning-your-team-in-permission-slips-time-to-burn-them',
    publisher: 'Beehiiv',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Deconstructs governance bureaucracy and establishes autonomous execution parameters.',
    relatedConceptIds: ["coordination-tax","product-economist"]
  },
  {
    id: 'beehiiv-product-vision-wallpaper',
    title: 'Your Product Vision Is Probably Wallpaper',
    url: 'https://theaieconomist.beehiiv.com/p/your-product-vision-is-probably-wallpaper',
    publisher: 'Beehiiv',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Translates abstract vision statements into testable economic hypotheses.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus"]
  },
  {
    id: 'beehiiv-subprime-code-crisis',
    title: 'The Subprime Code Crisis',
    url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis',
    publisher: 'Beehiiv',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Draws parallels between 2008 financial derivatives and unverified AI-generated code accumulating in enterprise repositories.',
    relatedConceptIds: ["subprime-code-crisis","vibe-coding","technical-insolvency"],
    relatedGlossarySlugs: ["subprime-code-crisis","vibe-coding-debt"],
    relatedToolIds: ["pdi","copilot-roi"]
  },
  {
    id: 'beehiiv-ai-unit-economics-burn-rate',
    title: 'AI Unit Economics: Burn Rate and Technical Insolvency',
    url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Formulas for modeling when API costs cross gross margin contribution thresholds into technical insolvency.',
    relatedConceptIds: ["inference-economics","ai-volatility-tax","ai-margin-squeeze","cost-of-predictivity"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-volatility-tax"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'beehiiv-why-built-exogram',
    title: 'Why I Built Exogram: AI Agents Need Deterministic Governance',
    url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Evergreen',
    thesis: 'Architectural rationale for building deterministic verification layers between frontier LLMs and production databases.',
    relatedConceptIds: ["deterministic-governance","agent-kill-switch","ai-governance","runtime-vs-alignment"],
    relatedGlossarySlugs: ["deterministic-governance","agent-kill-switch"]
  },
  {
    id: 'beehiiv-runtime-governance-architecture',
    title: 'The Architecture of Runtime Governance',
    url: 'https://theaieconomist.beehiiv.com/p/the-architecture-of-runtime-governance',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Technical specification for state integrity checks, admissibility gates, and cryptographic audit ledgers.',
    relatedConceptIds: ["deterministic-governance","runtime-vs-alignment","agent-kill-switch","ai-governance"],
    relatedGlossarySlugs: ["deterministic-governance"],
    relatedToolIds: ["agentic-drift-matrix"]
  },
  {
    id: 'beehiiv-product-p-and-l-test',
    title: 'The Product P&L Test: Why Your AI Feature Is Bleeding Cash',
    url: 'https://theaieconomist.beehiiv.com/p/the-product-p-l-test-why-your-ai-feature-is-bleeding-cash',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Practical diagnostic audit for calculating feature-level gross margin contribution.',
    relatedConceptIds: ["cost-of-predictivity","product-economist","ai-margin-squeeze","inference-economics"],
    relatedGlossarySlugs: ["product-debt-index","ai-volatility-tax"],
    relatedToolIds: ["pdi","aueb"]
  },
  {
    id: 'beehiiv-coordination-tax',
    title: 'B2B SaaS Coordination Tax & SaaS Engineering Margins',
    url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins',
    publisher: 'Beehiiv',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Quantifies organizational friction overhead that erodes engineering gross margins at scale.',
    relatedConceptIds: ["coordination-tax","r-and-d-ponzi","ten-man-parity"],
    relatedGlossarySlugs: ["coordination-tax"]
  },
  {
    id: 'beehiiv-generative-ai-margin-squeeze',
    title: 'Generative AI Margin Squeeze & SaaS COGS',
    url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Examines how shifting hosting infrastructure into variable COGS compresses SaaS gross margins.',
    relatedConceptIds: ["ai-margin-squeeze","inference-economics","ai-volatility-tax","cost-of-predictivity"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-volatility-tax"],
    relatedToolIds: ["aueb","slm-vs-api"]
  },
  {
    id: 'beehiiv-deterministic-control-plane',
    title: 'Autonomous AI Agent Deterministic Control Plane',
    url: 'https://theaieconomist.beehiiv.com/p/autonomous-ai-agent-deterministic-control-plane',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Blueprint for separating probabilistic inference from deterministic action execution.',
    relatedConceptIds: ["deterministic-governance","agent-kill-switch","runtime-vs-alignment","ai-governance"],
    relatedGlossarySlugs: ["deterministic-governance"],
    relatedToolIds: ["agentic-drift-matrix"]
  },
  {
    id: 'beehiiv-operational-debt-crisis',
    title: 'AI Operational Debt Crisis in Enterprise Software',
    url: 'https://theaieconomist.beehiiv.com/p/ai-operational-debt-crisis-enterprise-software',
    publisher: 'Beehiiv',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Identifies accumulating maintenance costs of un-governed AI integrations across enterprise stacks.',
    relatedConceptIds: ["technical-insolvency","r-and-d-ponzi","ai-volatility-tax","subprime-code-crisis"],
    relatedGlossarySlugs: ["technical-debt","technical-insolvency-date"],
    relatedToolIds: ["pdi","ev-se"]
  },
  {
    id: 'beehiiv-why-scaling-breaks-bank',
    title: 'Why Scaling Software Suddenly Breaks the Bank',
    url: 'https://theaieconomist.beehiiv.com/p/why-scaling-software-suddenly-breaks-the-bank',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Analyzes non-linear cost scaling when AI model inference scales faster than user revenue.',
    relatedConceptIds: ["ai-margin-squeeze","inference-economics","ai-volatility-tax"],
    relatedGlossarySlugs: ["synthetic-cogs"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'beehiiv-token-burn-analytics',
    title: 'Token Burn Analytics: Real-Time LLM Cost Allocation',
    url: 'https://theaieconomist.beehiiv.com/p/token-burn-analytics-real-time-llm-cost-allocation',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Designing per-tenant token tracking architectures to attribute inference expenses directly to customer subscriptions.',
    relatedConceptIds: ["inference-economics","ai-volatility-tax","semantic-caching"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-tokenomics-cogs"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'beehiiv-semantic-caching-playbook',
    title: 'Semantic Caching Playbook for Enterprise LLMs',
    url: 'https://theaieconomist.beehiiv.com/p/semantic-caching-playbook-for-enterprise-llms',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Vector similarity thresholding strategies to reduce redundant inference queries by 40-60%.',
    relatedConceptIds: ["semantic-caching","inference-economics","ai-volatility-tax"],
    relatedGlossarySlugs: ["semantic-caching"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'beehiiv-slm-repatriation-guide',
    title: 'The SLM Repatriation Guide: When to Stop Using OpenAI APIs',
    url: 'https://theaieconomist.beehiiv.com/p/slm-repatriation-guide-when-to-stop-using-openai-apis',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Financial breakeven analysis for migrating from commercial API endpoints to fine-tuned local small language models.',
    relatedConceptIds: ["inference-economics","ai-margin-squeeze","cost-of-predictivity"],
    relatedGlossarySlugs: ["small-language-model"],
    relatedToolIds: ["slm-vs-api","cloud-repatriation"]
  },
  {
    id: 'beehiiv-prompt-injection-control-plane',
    title: 'Prompt Injection Defense: Why LLM-as-a-Judge Guardrails Fail',
    url: 'https://theaieconomist.beehiiv.com/p/prompt-injection-defense-why-llm-as-a-judge-fails',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Demonstrates vulnerability of using probabilistic models to police probabilistic models.',
    relatedConceptIds: ["deterministic-governance","agent-kill-switch","ai-governance"],
    relatedGlossarySlugs: ["prompt-injection"],
    relatedToolIds: ["prompt-injection-sandbox"]
  },
  {
    id: 'beehiiv-state-hashing-spec',
    title: 'State Integrity Hashing Specification for Multi-Agent Systems',
    url: 'https://theaieconomist.beehiiv.com/p/state-integrity-hashing-specification-multi-agent-systems',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Cryptographic hash checking protocols between agentic decision steps.',
    relatedConceptIds: ["deterministic-governance","runtime-vs-alignment","agent-kill-switch"],
    relatedGlossarySlugs: ["state-integrity-hashing"],
    relatedToolIds: ["agentic-drift-matrix"]
  },
  {
    id: 'beehiiv-shadow-ai-agent-discovery',
    title: 'Discovering Shadow AI Agents in Enterprise API Gateways',
    url: 'https://theaieconomist.beehiiv.com/p/discovering-shadow-ai-agents-enterprise-api-gateways',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Audit tactics for uncovering un-sanctioned autonomous tools executing against internal database endpoints.',
    relatedConceptIds: ["shadow-ai","ai-agent-sprawl","agent-kill-switch","ai-governance"],
    relatedGlossarySlugs: ["shadow-ai","ai-agent-sprawl"],
    relatedToolIds: ["shadow-ai"]
  },
  {
    id: 'beehiiv-rd-capitalization-as-cfo',
    title: 'R&D Capitalization for CFOs: ASC 350-40 Compliance',
    url: 'https://theaieconomist.beehiiv.com/p/rd-capitalization-for-cfos-asc-350-40-compliance',
    publisher: 'Beehiiv',
    domain: 'Software Economics',
    type: 'Executable',
    thesis: 'Accounting heuristics for evaluating software development capitalization under US GAAP.',
    relatedConceptIds: ["r-and-d-ponzi","technical-insolvency","coordination-tax"],
    relatedGlossarySlugs: ["innovation-tax","technical-debt"],
    relatedToolIds: ["innovation-tax-calculator"]
  },
  {
    id: 'beehiiv-zombie-code-remediation',
    title: 'Zombie Code Remediation: Reclaiming 30% R&D Efficiency',
    url: 'https://theaieconomist.beehiiv.com/p/zombie-code-remediation-reclaiming-30-percent-rd-efficiency',
    publisher: 'Beehiiv',
    domain: 'Software Economics',
    type: 'Executable',
    thesis: 'Static analysis strategies to identify and prune dead code paths.',
    relatedConceptIds: ["subprime-code-crisis","technical-insolvency","r-and-d-ponzi"],
    relatedGlossarySlugs: ["zombie-code","technical-debt"],
    relatedToolIds: ["pdi"]
  },

  // LinkedIn Newsletters & Executive Essays (22+ Articles)
  {
    id: 'linkedin-game-product-leadership',
    title: 'The Game of Product Leadership: Why You Need More Than a Hunch',
    url: 'https://www.linkedin.com/pulse/game-product-leadership-why-you-need-more-than-hunch-richard-ewing-qv6qc/',
    publisher: 'LinkedIn',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Replaces intuitive product management with empirical data models and financial metrics.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus"]
  },
  {
    id: 'linkedin-genesis-starting-unfiltered',
    title: 'Genesis: Starting Unfiltered — Why I’m Writing',
    url: 'https://www.linkedin.com/pulse/genesis-starting-unfiltered-why-richard-ewing-4zijc/',
    publisher: 'LinkedIn',
    domain: 'Product Leadership',
    type: 'Time-Sensitive',
    thesis: 'Personal manifesto on bringing intellectual rigor and financial literacy to product management.',
    relatedConceptIds: ["product-economist","ai-economics"]
  },
  {
    id: 'linkedin-hardest-truth-clarity',
    title: 'The Hardest Truth: Don’t Hire Visionaries, Hire for Clarity',
    url: 'https://www.linkedin.com/pulse/hardest-truth-dont-hire-visionaries-clarity-richard-ewing-eto2c/',
    publisher: 'LinkedIn',
    domain: 'Career Economics',
    type: 'Evergreen',
    thesis: 'Why execution clarity and analytical discipline outperform charismatic product vision.',
    relatedConceptIds: ["product-economist","coordination-tax"]
  },
  {
    id: 'linkedin-real-ai-opportunity',
    title: 'The Real AI Opportunity Isn’t a Chatbot: It’s a $25M Strategic Lever',
    url: 'https://www.linkedin.com/pulse/real-ai-opportunity-chatbot-its-25m-strategic-lever-your-ewing-nhyic/',
    publisher: 'LinkedIn',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Shifts executive AI strategy from conversational UI novelties to core operational cost reduction.',
    relatedConceptIds: ["ai-economics","inference-economics","cost-of-predictivity"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'linkedin-product-leaders-secret',
    title: 'Product Leader’s Secret: Why 80% of Managers Are Stuck in 2024 Skills',
    url: 'https://www.linkedin.com/pulse/product-leaders-secret-why-80-managers-stuck-2024-skills-ewing-evu4c/',
    publisher: 'LinkedIn',
    domain: 'Career Economics',
    type: 'Evergreen',
    thesis: 'Defines the skill evolution required for product managers transitioning into AI and financial governance.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus"]
  },
  {
    id: 'linkedin-innovation-tax-deleting-code',
    title: 'Innovation Tax Audit: Why R&D Requires Deleting Code to Protect Margins',
    url: 'https://www.linkedin.com/pulse/innovation-tax-audit-why-rd-requires-deleting-code-protect-ewing-jv2mc/',
    publisher: 'LinkedIn',
    domain: 'Software Economics',
    type: 'Executable',
    thesis: 'Audit guide for eliminating zombie code to protect R&D capital efficiency.',
    relatedConceptIds: ["r-and-d-ponzi","technical-insolvency","subprime-code-crisis"],
    relatedGlossarySlugs: ["innovation-tax","zombie-code"],
    relatedToolIds: ["innovation-tax-calculator","pdi"]
  },
  {
    id: 'linkedin-rd-ponzi-scheme',
    title: 'The R&D Ponzi Scheme: The $891,000 Lie on Your Engineering Dashboard',
    url: 'https://www.linkedin.com/pulse/rd-ponzi-scheme-891000-lie-your-engineering-dashboard-richard-ewing-bkwdc/',
    publisher: 'LinkedIn',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Exposes how velocity metrics mask maintenance OpEx misclassified as strategic R&D investment.',
    relatedConceptIds: ["r-and-d-ponzi","technical-insolvency","coordination-tax"],
    relatedGlossarySlugs: ["r-and-d-ponzi","technical-debt"],
    relatedToolIds: ["pdi","ev-se"]
  },
  {
    id: 'linkedin-ai-variable-cost',
    title: 'AI Is a Variable Cost: Act Like It',
    url: 'https://www.linkedin.com/pulse/ai-variable-cost-act-like-richard-ewing-6qx9c/',
    publisher: 'LinkedIn',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Explains how inference shifts software from zero-marginal-cost economics to variable COGS.',
    relatedConceptIds: ["inference-economics","ai-volatility-tax","ai-margin-squeeze"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-volatility-tax"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'linkedin-claude-search-zero-adoption',
    title: 'Your Claude-Powered Search Tool Has Zero Adoption: Here’s Why',
    url: 'https://www.linkedin.com/pulse/your-claude-powered-search-tool-has-zero-adoption-because-ewing-wruhc/',
    publisher: 'LinkedIn',
    domain: 'AI Governance',
    type: 'Time-Sensitive',
    thesis: 'Case study on why AI features fail when user workflow integration is ignored in favor of model complexity.',
    relatedConceptIds: ["deterministic-governance","ai-governance","cost-of-predictivity"],
    relatedGlossarySlugs: ["deterministic-governance"]
  },
  {
    id: 'linkedin-real-problem-ai-agents',
    title: 'The Real Problem with AI Agents Isn’t Intelligence: It’s Governance',
    url: 'https://www.linkedin.com/pulse/real-problem-ai-agents-isnt-intelligence-richard-ewing-ipbjc/',
    publisher: 'LinkedIn',
    domain: 'AI Governance',
    type: 'Evergreen',
    thesis: 'Argues that agent deployment is blocked by execution safety boundaries rather than model reasoning capacity.',
    relatedConceptIds: ["ai-governance","deterministic-governance","agent-kill-switch","ai-agents"],
    relatedGlossarySlugs: ["deterministic-governance","agent-kill-switch"],
    relatedToolIds: ["agentic-drift-matrix"]
  },
  {
    id: 'linkedin-growth-paradox',
    title: 'The Growth Paradox: When More Users Means Less Profit',
    url: 'https://www.linkedin.com/pulse/growth-paradox-when-more-users-means-less-profit-richard-ewing-mtd6c/',
    publisher: 'LinkedIn',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Examines negative unit margins in AI SaaS where user activity outpaces subscription revenue.',
    relatedConceptIds: ["ai-margin-squeeze","inference-economics","ai-volatility-tax"],
    relatedGlossarySlugs: ["synthetic-cogs","ai-volatility-tax"],
    relatedToolIds: ["aueb"]
  },
  {
    id: 'linkedin-product-economist-structural-shift',
    title: 'The Product Economist: A Structural Shift in Product Leadership',
    url: 'https://www.linkedin.com/pulse/product-economist-structural-shift-richard-ewing-jrlhc/',
    publisher: 'LinkedIn',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Defines the structural shift from output velocity to capital return in software organizations.',
    relatedConceptIds: ["product-economist","feature-bloat-calculus","coordination-tax"]
  },
  {
    id: 'linkedin-boardroom-guide-technical-debt',
    title: 'The Boardroom Guide to Technical Debt Valuation',
    url: 'https://www.linkedin.com/pulse/boardroom-guide-technical-debt-valuation-richard-ewing-k123c/',
    publisher: 'LinkedIn',
    domain: 'Software Economics',
    type: 'Executable',
    thesis: 'Translating code quality metrics into GAAP balance sheet liabilities for board directors.',
    relatedConceptIds: ["technical-insolvency","r-and-d-ponzi","subprime-code-crisis"],
    relatedGlossarySlugs: ["technical-debt","technical-insolvency-date"],
    relatedToolIds: ["ev-se","pdi"]
  },
  {
    id: 'linkedin-why-vibe-coding-breaks-enterprise',
    title: 'Why Vibe Coding Breaks Enterprise Codebases at Scale',
    url: 'https://www.linkedin.com/pulse/why-vibe-coding-breaks-enterprise-codebases-scale-richard-ewing-v991c/',
    publisher: 'LinkedIn',
    domain: 'Engineering Leadership',
    type: 'Evergreen',
    thesis: 'Analyzing the systemic failure points when 50+ engineers generate code with AI without deterministic verification.',
    relatedConceptIds: ["vibe-coding","subprime-code-crisis","ten-man-parity"],
    relatedGlossarySlugs: ["vibe-coding-debt","subprime-code-crisis"],
    relatedToolIds: ["copilot-roi","audit-interview"]
  },
  {
    id: 'linkedin-cost-of-hallucinations-in-production',
    title: 'The Financial Cost of Hallucinations in Production AI Systems',
    url: 'https://www.linkedin.com/pulse/financial-cost-hallucinations-production-ai-systems-richard-ewing-h772c/',
    publisher: 'LinkedIn',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Quantifying downstream customer support and remediation OpEx caused by un-verified model outputs.',
    relatedConceptIds: ["ai-volatility-tax","context-rot","inference-economics"],
    relatedGlossarySlugs: ["ai-hallucination","context-rot"],
    relatedToolIds: ["hallucination-tax"]
  },
  {
    id: 'linkedin-evaluating-ai-product-managers',
    title: 'Evaluating AI Product Managers: The 4 Metrics That Matter',
    url: 'https://www.linkedin.com/pulse/evaluating-ai-product-managers-4-metrics-matter-richard-ewing-m331c/',
    publisher: 'LinkedIn',
    domain: 'Career Economics',
    type: 'Executable',
    thesis: 'Executive hiring framework for AI PMs based on P&L margin contribution and model-task routing efficiency.',
    relatedConceptIds: ["product-economist","ai-economics","feature-bloat-calculus"]
  },
  {
    id: 'cio-10-man-parity',
    title: 'The 10-Man Parity Rule: When AI Adoption Accelerates Faster Than Organizations Can See',
    url: 'https://www.cio.com/article/the-10-man-parity-rule',
    publisher: 'CIO.com',
    domain: 'Engineering Leadership',
    type: 'Evergreen',
    thesis: 'Documents the threshold where AI tooling enables 10-person engineering teams to match output of 50-person teams, compressing hiring economics.',
    date: 'June 2026',
    relatedConceptIds: ['ten-man-parity', 'coordination-tax']
  },
  {
    id: 'builtin-ai-agent-database',
    title: 'Is Anything Standing Between Your AI Agent and Your Database?',
    url: 'https://builtin.com/articles/ai-agent-database-security',
    publisher: 'Built In',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Examines the execution layer vulnerability where autonomous agents possess direct database write credentials without deterministic proxy gates.',
    date: 'July 2026',
    relatedConceptIds: ['agent-kill-switch', 'deterministic-governance', 'state-integrity-hashing']
  },
  {
    id: 'builtin-fable5-gpt5',
    title: 'Fable 5 vs. GPT-5.6 Sol: Which Model Is Better?',
    url: 'https://builtin.com/articles/fable-5-vs-gpt-5',
    publisher: 'Built In',
    domain: 'AI Economics',
    type: 'Evergreen',
    thesis: 'Compares frontier model reasoning paradigms through the lens of enterprise cost-per-task efficiency rather than benchmark leaderboards.',
    date: 'July 2026',
    relatedConceptIds: ['inference-economics', 'model-collapse']
  },
  {
    id: 'builtin-ai-product-nobody-wanted',
    title: 'I Built an Incredible AI Product That Nobody Wanted. Here Is Why.',
    url: 'https://builtin.com/articles/ai-product-nobody-wanted',
    publisher: 'Built In',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Documents the lived experience of building a technically excellent AI product that failed because it optimized for capability rather than user workflow integration.',
    date: 'January 2026',
    relatedConceptIds: ['product-economist', 'feature-bloat-calculus']
  },
  {
    id: 'mtp-financial-metrics-pm',
    title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard',
    url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs/',
    publisher: 'Mind the Product',
    domain: 'Product Leadership',
    type: 'Evergreen',
    thesis: 'Translates engineering velocity into financial contribution metrics that product managers can use to demonstrate P&L impact beyond feature output.',
    date: 'February 2026',
    relatedConceptIds: ['product-economist', 'dora-financial-translation']
  },
  {
    id: 'hackernoon-vibe-coding',
    title: 'Vibe Coding Debt: The Silent Killer of AI-Native Startups',
    url: 'https://hackernoon.com/vibe-coding-debt',
    publisher: 'HackerNoon',
    domain: 'Software Economics',
    type: 'Evergreen',
    thesis: 'Coined the term Vibe Coding Debt to describe how developers accepting AI code without architectural comprehension create exponential maintenance liabilities.',
    date: 'February 2025',
    relatedConceptIds: ['vibe-coding', 'subprime-code-crisis']
  },
  {
    id: 'beehiiv-semantic-caching',
    title: 'The Semantic Caching Playbook: How to Cut LLM API Costs by 60%',
    url: 'https://theaieconomist.beehiiv.com/p/semantic-caching-playbook',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Provides an implementation specification for semantic similarity caching that intercepts redundant LLM queries before they reach paid API endpoints.',
    date: 'May 2026',
    relatedConceptIds: ['semantic-caching', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'beehiiv-state-integrity-hashing',
    title: 'State Integrity Hashing Specification for Multi-Agent Systems',
    url: 'https://theaieconomist.beehiiv.com/p/state-integrity-hashing',
    publisher: 'Beehiiv',
    domain: 'AI Governance',
    type: 'Executable',
    thesis: 'Specifies cryptographic hash verification protocols between autonomous agent decision steps to detect memory poisoning and state drift.',
    date: 'June 2026',
    relatedConceptIds: ['state-integrity-hashing', 'agent-kill-switch', 'deterministic-governance']
  },
  {
    id: 'beehiiv-slm-repatriation',
    title: 'The SLM Repatriation Guide: When to Stop Using OpenAI APIs',
    url: 'https://theaieconomist.beehiiv.com/p/slm-repatriation-guide',
    publisher: 'Beehiiv',
    domain: 'AI Economics',
    type: 'Executable',
    thesis: 'Calculates the financial breakeven point for migrating from commercial frontier model APIs to fine-tuned small language models running on owned infrastructure.',
    date: 'April 2026',
    relatedConceptIds: ['slm-repatriation', 'inference-economics', 'ai-volatility-tax']
  },
  {
    id: 'linkedin-rd-ponzi',
    title: 'The R&D Ponzi Scheme: The $891,000 Lie on Your Engineering Dashboard',
    url: 'https://www.linkedin.com/pulse/rd-ponzi-scheme-richard-ewing/',
    publisher: 'LinkedIn',
    domain: 'Engineering Leadership',
    type: 'Evergreen',
    thesis: 'Exposes how velocity metrics mask the true cost of maintenance OpEx, creating an illusion of engineering productivity while technical debt compounds.',
    date: 'April 2026',
    relatedConceptIds: ['r-and-d-ponzi', 'coordination-tax', 'technical-insolvency']
  }
];
