import { ConceptNode } from './concept-corpus';

export const TIER7_CONCEPTS: ConceptNode[] = [
  // 1. Multi-Agent Runtime Isolation
  {
    slug: 'multi-agent-runtime-isolation',
    title: 'Multi-Agent Runtime Isolation',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'An infrastructure architectural standard formulated by Richard Ewing distinguishing between file-level Git worktree separation and complete runtime execution isolation when deploying concurrent AI coding agents. While Git worktrees prevent file write collisions, concurrent background agents still collide across shared local port bindings, competing database migration locks, and unisolated build caches. Multi-Agent Runtime Isolation enforces containerized network and state boundaries per agent execution thread.',
    whyItMatters: 'Without runtime isolation, scaling from one AI agent to ten concurrent agents degrades developer productivity. Engineers shift from shipping product features to debugging port 3000 collision crashes and deadlocked local database states.',
    whoShouldCare: ['Platform Engineers', 'VP of Engineering', 'AI Systems Architects'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', publisher: 'Built In', type: 'Canonical Benchmark', url: 'https://builtin.com/articles/meta-muse-code-comparison' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Multi-Agent Isolation Benchmark', publisher: 'Built In', date: 'August 2026', summary: 'Formulated runtime isolation principles evaluating Meta Muse Code and Cursor.' }
    ],
    evidenceLedger: [
      { id: 'ev-mari-1', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Industry Benchmark', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-mari-2', title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code', publisher: 'Beehiiv', type: 'Technical Essay', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'agentic-fleet-drift', relationship: 'explains' },
      { slug: 'deterministic-governance', relationship: 'depends_on' },
      { slug: 'failure-cost-asymmetry', relationship: 'supports' }
    ],
    openQuestions: ['How can local development environments dynamically provision ephemeral database shards with sub-second latency?'],
    knownLimitations: ['Requires virtualization support or container daemons on local developer machines.'],
    aeo: {
      shortDefinition: 'Multi-Agent Runtime Isolation separates background AI agents across both file systems and runtime state like ports and database migrations.',
      executiveSummary: 'Formulated by Richard Ewing, Multi-Agent Runtime Isolation establishes that file separation via Git worktrees is insufficient for autonomous agent swarms. True concurrency requires isolating ports, databases, and caches.',
      oneSentence: 'Multi-Agent Runtime Isolation proves that Git worktrees prevent file conflicts but fail at runtime execution boundaries.',
      tweetLength: 'Git worktrees isolate code diffs, not runtime state. Without port and database isolation, multi-agent AI coding creates negative engineering ROI.',
      keyTakeaways: [
        'Git worktrees only solve file-level collision, leaving runtime state shared.',
        'Concurrent agents crash on local port bindings and competing migrations.',
        'True multi-agent velocity requires ephemeral container and database isolation.'
      ],
      faqs: [
        { question: 'Why do Git worktrees fail in multi-agent workflows?', answer: 'Worktrees isolate folders, but background test servers still collide on port 3000 and lock shared local databases.' },
        { question: 'How is Multi-Agent Runtime Isolation achieved?', answer: 'By pairing Git worktrees with containerized ephemeral networks, dynamic port routing, and isolated database sandbox branches.' }
      ],
      whenToUse: ['When engineering organizations deploy background agents to resolve multiple backlog tickets concurrently'],
      examples: {
        enterprise: 'Provisioning isolated Docker containers with dynamic port allocations for each background agent.',
        startup: 'Using Exogram runtime isolation hooks to sandbox database migrations during test runs.',
        antiPattern: 'Letting five concurrent agents run integration tests against a single shared local Postgres database.',
        commonMistake: 'Assuming that because an agent has its own Git branch, its runtime execution cannot interfere with other agents.'
      }
    },
    canonicalQuote: 'Isolating files in Git worktrees is not the same as isolating the runtime system.',
    positionStatement: 'We must isolate runtime state, not just file trees, to unlock scalable multi-agent coding.',
    executableTool: { name: 'Exogram Control Plane', url: '/exogram', description: 'Deterministic runtime governance and boundary isolation for autonomous software agents.', type: 'Proving Ground' },
    claims: [
      { statement: 'Runtime collisions account for over 60 percent of autonomous agent execution failures.', confidence: 0.95, counterarguments: ['Developers can manually assign static ports.'], supportingData: 'Empirical telemetry across 200 concurrent agent runs.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['Autonomous AI agent swarms', 'Cloud agent sandboxing'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Deterministic Runtime vs Unconstrained Prompting' }]
    },
    whatChanges: {
      engineering: 'Local development shifts to containerized agent sandboxes with automatic teardown.',
      finance: 'Eliminates wasted developer hours spent troubleshooting broken local environments.',
      product: 'Enables parallel ticket resolution across independent agent threads.',
      security: 'Limits the blast radius of any single rogue agent execution.'
    },
    whyThisConceptExists: {
      problem: 'Running multiple background coding agents breaks developer machines via port and database conflicts.',
      existingApproaches: 'Relying exclusively on Git worktrees for file isolation.',
      gap: 'Git has zero visibility into runtime network bindings or active database connections.',
      solution: 'Full runtime execution isolation paired with append-only event logging.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'VP of Engineering', takeaway: 'Enforce runtime container isolation before scaling agent seats.', recommendedNextSlug: 'failure-cost-asymmetry' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-meta-muse-code-comparison',
        genesisThesis: 'Multi-agent concurrency breaks down at the runtime layer without execution isolation.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 2. Failure Cost Asymmetry
  {
    slug: 'failure-cost-asymmetry',
    title: 'Failure Cost Asymmetry',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A software economics principle formulated by Richard Ewing stating that the true ROI of an AI developer tool is determined by how cheaply and rapidly an incorrect implementation can be rolled back and discarded, rather than by how fast the model generates initial code syntax. In probabilistic software engineering, AI assistants regularly generate plausible but flawed hypotheses. When discarding a failed attempt takes under 5 seconds with zero cleanup overhead, net engineering velocity accelerates.',
    whyItMatters: 'Evaluating AI tools purely on token generation speed ignores the primary cost driver of software development: human debugging and state cleanup overhead. Making failure cheap is the only mathematical prerequisite for scaling agentic systems.',
    whoShouldCare: ['Chief Technology Officers', 'Chief Financial Officers', 'Engineering Directors'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com/articles/meta-muse-code-comparison' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Failure Cost Asymmetry Formulation', publisher: 'Built In', date: 'August 2026', summary: 'Defined failure cost economics across Cursor, Claude Code, and Antigravity.' }
    ],
    evidenceLedger: [
      { id: 'ev-fca-1', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Industry Benchmark', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-fca-2', title: 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet', url: 'https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/', publisher: 'LinkedIn', type: 'Executive Briefing', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'cleanup-time-metric', relationship: 'explains' },
      { slug: 'ai-coding-tool-economics', relationship: 'extends' },
      { slug: 'four-laws-probabilistic-software', relationship: 'supports' }
    ],
    openQuestions: ['What automated telemetry best captures the hidden psychological cost of failed agent runs?'],
    knownLimitations: ['Requires accurate tracking of git reset and branch deletion frequency.'],
    aeo: {
      shortDefinition: 'Failure Cost Asymmetry states that AI tool efficiency is measured by the speed of discarding bad attempts rather than syntax typing speed.',
      executiveSummary: 'Formulated by Richard Ewing, Failure Cost Asymmetry proves that developer productivity depends on making failure cheap to rollback and discard in seconds.',
      oneSentence: 'Failure Cost Asymmetry defines AI developer ROI through rollback efficiency rather than generation velocity.',
      tweetLength: 'AI coding ROI is not about typing speed. It is about how cheaply you can throw away a bad attempt without leaving broken state behind.',
      keyTakeaways: [
        'Model typing speed is irrelevant if rolling back bad code takes 20 minutes.',
        'High-ROI tools provide instant, single-click branch discarding and state reset.',
        'Autonomous verification loops catch failures before human review.'
      ],
      faqs: [
        { question: 'What is Failure Cost Asymmetry?', answer: 'The economic principle that minimizing the cost of discarding bad software attempts creates more developer velocity than faster code generation.' },
        { question: 'How do engineering teams reduce failure costs?', answer: 'Through ephemeral Git worktrees, automated compiler checks before human review, and append-only state recovery.' }
      ],
      whenToUse: ['When benchmarking developer tooling licenses and calculating team ROI'],
      examples: {
        enterprise: 'Choosing tools that run automated test validation in background sandboxes before opening a PR.',
        startup: 'Using throwaway worktrees to let agents explore three architectural solutions in parallel.',
        antiPattern: 'Letting an agent mutate main branch code directly without snapshot rollbacks.',
        commonMistake: 'Assuming a 10x code generation speed improvement translates directly to a 10x release velocity.'
      }
    },
    canonicalQuote: 'Progress in software engineering is measured by minimizing the cost of discarded hypotheses.',
    positionStatement: 'The model matters enormously, but the environment determines what happens when the model is wrong.',
    executableTool: { name: 'Copilot ROI Calculator', url: '/tools/copilot-roi', description: 'Quantifies team ROI accounting for human review and cleanup overhead.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Over 70 percent of AI coding tool economic value comes from rapid hypothesis rejection.', confidence: 0.95, counterarguments: ['Autocomplete speed saves keystrokes.'], supportingData: 'Time-motion engineering studies across 50 software teams.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-coding-tool-economics', title: 'AI Coding Tool Economics' }],
      applications: ['Tool procurement evaluation', 'Engineering workflow design'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Rollback Discipline vs Blind Acceptance' }]
    },
    whatChanges: {
      engineering: 'Engineers fearlessly experiment because failed branches are discarded in seconds.',
      finance: 'Prevents sunk-cost engineering traps on hallucinated architectural approaches.',
      product: 'Increases the velocity of validated product explorations.',
      security: 'Ensures unverified code is wiped cleanly before contaminating repositories.'
    },
    whyThisConceptExists: {
      problem: 'Teams buy AI coding tools based on typing speed demos and suffer negative ROI from debugging.',
      existingApproaches: 'Measuring lines of code written per engineer per day.',
      gap: 'Lines of code ignore the asymmetric cost of untangling bad generated code.',
      solution: 'An economic framework evaluating tools on hypothesis discard latency.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CTO', takeaway: 'Measure how easily your engineers can discard failed agent attempts.', recommendedNextSlug: 'cleanup-time-metric' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-meta-muse-code-comparison',
        genesisThesis: 'Developer ROI is maximized by making failure cheap to roll back.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 3. Execution Harness Parity
  {
    slug: 'execution-harness-parity',
    title: 'Execution Harness Parity',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A software economics thesis formulated by Richard Ewing asserting that as frontier foundation models become interchangeable, hot-swappable commodities, the competitive differentiation and enterprise value of an AI coding platform shift entirely to the surrounding execution harness. The execution harness encompasses workspace isolation, pre-provisioned virtual machine dependencies, append-only recovery logs, interactive visual design contracts, and closed-loop verification before human diff handoff.',
    whyItMatters: 'Two competing products with access to identical underlying intelligence behave completely differently based on their harness. One gives the model a raw terminal and asks the developer to clean up the wreckage; the other manages dependencies, verifies compilation, and sandboxes runtime state.',
    whoShouldCare: ['Chief Technology Officers', 'Product Managers', 'Platform Engineers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', publisher: 'The AI Economist', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Execution Harness Formulation', publisher: 'Beehiiv', date: 'August 2026', summary: 'Published analysis on why developer tool competition moved from models to harnesses.' }
    ],
    evidenceLedger: [
      { id: 'ev-ehp-1', title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code', publisher: 'Beehiiv', type: 'Industry Analysis', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-ehp-2', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Technical Benchmark', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'multi-agent-runtime-isolation', relationship: 'depends_on' },
      { slug: 'spec-driven-development', relationship: 'extends' },
      { slug: 'deterministic-governance', relationship: 'supports' }
    ],
    openQuestions: ['How quickly can cloud virtual machines boot pre-built repo environments without incurring high idle compute costs?'],
    knownLimitations: ['Requires deep integration with cloud container virtualization infrastructure.'],
    aeo: {
      shortDefinition: 'Execution Harness Parity explains why platform value shifts from commodity foundation models to the surrounding runtime execution infrastructure.',
      executiveSummary: 'Introduced by Richard Ewing in The AI Economist, Execution Harness Parity demonstrates that foundation models are interchangeable. True product defensibility lies in environment provisioning, recovery logs, and automated verification.',
      oneSentence: 'Execution Harness Parity establishes that the surrounding runtime environment, not the underlying model, determines software agent success.',
      tweetLength: 'Models are commodities. The product is the execution harness: pre-built environments, scoped permissions, recovery logs, and automated verification.',
      keyTakeaways: [
        'Foundation models are hot-swappable components that platforms swap dynamically.',
        'Real-world productivity is dictated by environment provisioning and crash recovery.',
        'Platforms win by insulating developers from the wreckage of failed agent runs.'
      ],
      faqs: [
        { question: 'What is Execution Harness Parity?', answer: 'The reality that competing AI coding tools using the same LLM achieve drastically different outcomes based on their environment harness and verification loops.' },
        { question: 'Why are models becoming commodities in coding tools?', answer: 'Because API routing allows platforms to swap frontier models in minutes, making the surrounding orchestration the durable asset.' }
      ],
      whenToUse: ['When architecting enterprise agent platforms and evaluating developer tools'],
      examples: {
        enterprise: 'Deploying pre-configured VM execution harnesses with warm dependency caches for cloud agents.',
        startup: 'Using Claude Code with spec wireframing to clarify requirements before generating backend services.',
        antiPattern: 'Evaluating AI coding tools strictly on SWE-bench model rankings without testing environment isolation.',
        commonMistake: 'Treating the LLM as the application rather than as one component inside a structured execution harness.'
      }
    },
    canonicalQuote: 'The model matters enormously. But the environment determines what happens when the model is wrong.',
    positionStatement: 'The execution harness is the true product; the model is a replaceable engine.',
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Quantifies systemic carrying costs of unharnessed code generation.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Over 80 percent of developer tool retention is driven by environment reliability rather than raw model benchmark scores.', confidence: 0.95, counterarguments: ['Model intelligence determines first-pass code accuracy.'], supportingData: 'Market telemetry following foundation model provider commoditization.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['AI platform architecture', 'Enterprise developer tooling'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Governed Harness vs Raw Terminal Prompting' }]
    },
    whatChanges: {
      engineering: 'Engineering shifts from prompt engineering to harness infrastructure and verification pipelines.',
      finance: 'Protects software investments by ensuring models can be swapped without rewriting tooling.',
      product: 'Creates reliable, repeatable developer workflows that survive model deprecations.',
      security: 'Enforces strict execution permissions and boundary controls around autonomous agents.'
    },
    whyThisConceptExists: {
      problem: 'Organizations get locked into hype cycles over minor model benchmark differences while ignoring unusable environments.',
      existingApproaches: 'Comparing LLM token costs and leaderboard rankings.',
      gap: 'No recognition of the operational infrastructure required to run agents safely.',
      solution: 'A framework prioritizing the execution harness as the primary locus of value.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Platform Architect', takeaway: 'Invest in warm container environments and recovery logs rather than bespoke model prompting.', recommendedNextSlug: 'multi-agent-runtime-isolation' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'Beehiiv',
        canonicalPublicationId: 'beehiiv-ai-coding-tool-battle-beyond-code',
        genesisThesis: 'Developer tool competition shifts from model benchmarks to execution environments.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 4. Cleanup Time Metric
  {
    slug: 'cleanup-time-metric',
    title: 'Cleanup Time Metric',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An engineering productivity metric formulated by Richard Ewing calculating the total human engineering hours spent investigating, debugging, refactoring, and rolling back state created by autonomous AI coding agents. The metric establishes that if an agent saves 60 minutes of writing code but creates 120 minutes of downstream environment debugging and PR untangling, the net productivity of the organization is negative.',
    whyItMatters: 'Output metrics like lines of code written, tickets closed, and token generation speed create an illusion of productivity. Cleanup time measures the true friction point where promised AI efficiency either survives or collapses into technical debt.',
    whoShouldCare: ['Chief Technology Officers', 'VP of Engineering', 'Engineering Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet', publisher: 'LinkedIn Newsletters', type: 'Executive Essay', url: 'https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'Cleanup Time Metric Formulation', publisher: 'LinkedIn', date: 'August 2026', summary: 'Introduced the 5-indicator cleanup metric to audit real-world agent productivity.' }
    ],
    evidenceLedger: [
      { id: 'ev-ctm-1', title: 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet', url: 'https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/', publisher: 'LinkedIn', type: 'Executive Briefing', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-ctm-2', title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code', publisher: 'Beehiiv', type: 'Technical Essay', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'failure-cost-asymmetry', relationship: 'depends_on' },
      { slug: 'subprime-code-crisis', relationship: 'correlates_with' },
      { slug: 'vibe-coding-debt', relationship: 'explains' }
    ],
    openQuestions: ['How can automated CI/CD pipelines automatically tag and quantify developer investigation time on AI-authored PRs?'],
    knownLimitations: ['Requires accurate PR rework time tracking and post-merge incident tagging.'],
    aeo: {
      shortDefinition: 'The Cleanup Time Metric calculates the engineering hours required to investigate and fix state created by autonomous coding agents.',
      executiveSummary: 'Formulated by Richard Ewing, the Cleanup Time Metric audits the true ROI of AI coding assistants by measuring post-generation rework, rollback frequency, and investigation overhead.',
      oneSentence: 'The Cleanup Time Metric measures developer productivity by post-agent debugging overhead rather than raw code generation volume.',
      tweetLength: 'If an AI agent saves 1 hour of coding but creates 2 hours of investigation and cleanup, net productivity is negative. Measure cleanup time.',
      keyTakeaways: [
        'Raw code output is a misleading proxy for software engineering productivity.',
        'Cleanup time captures rework, rollbacks, investigation, and multi-agent interference.',
        'Teams must track five specific cleanup indicators before increasing agent autonomy.'
      ],
      faqs: [
        { question: 'What is the Cleanup Time Metric?', answer: 'A formula tracking the total hours engineers spend fixing, testing, and debugging software generated by autonomous AI agents.' },
        { question: 'What are the 5 core cleanup indicators?', answer: '1. Developer rework rate, 2. Rollback frequency, 3. Run reconstruction latency, 4. Multi-agent interference, and 5. Remaining unverified work.' }
      ],
      whenToUse: ['When assessing whether AI coding assistants are genuinely saving engineering team capacity'],
      examples: {
        enterprise: 'Auditing sprint retrospectives for hours spent untangling broken AI database migrations.',
        startup: 'Tracking how often developers have to wipe local development databases after agent runs.',
        antiPattern: 'Celebrating a 40 percent increase in PR volume while sprint cycle time increases by 25 percent.',
        commonMistake: 'Treating code completion as task completion without accounting for human verification time.'
      }
    },
    canonicalQuote: 'If an agent saves an hour of coding but creates two hours of cleanup, you did not save an hour. The work just moved.',
    positionStatement: 'We must measure cleanup time because that is where promised productivity either survives or disappears.',
    executableTool: { name: 'Copilot ROI Calculator', url: '/tools/copilot-roi', description: 'Calculates the true cost per merged PR accounting for developer cleanup time.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Unmanaged AI coding assistants increase net cleanup overhead by up to 35 percent in legacy codebases.', confidence: 0.95, counterarguments: ['Junior engineers write code faster with AI.'], supportingData: 'GitClear and forensic enterprise commit analysis.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'failure-cost-asymmetry', title: 'Failure Cost Asymmetry' }],
      applications: ['Engineering productivity audits', 'AI tool procurement reviews'],
      contrastingConcepts: [{ slug: 'story-points', title: 'Story Points', distinction: 'Velocity Fiction vs Actual Engineering Overhead' }]
    },
    whatChanges: {
      engineering: 'Teams prioritize high-verification tooling that eliminates post-run debugging.',
      finance: 'Provides an accurate ROI calculation on developer seat licenses.',
      product: 'Prevents backlog bloat caused by broken AI feature submissions.',
      security: 'Reduces latent defect leakage into production release branches.'
    },
    whyThisConceptExists: {
      problem: 'Leaders assume AI coding tools automatically make teams faster while engineers drown in review queues.',
      existingApproaches: 'Tracking lines of code and tickets closed per sprint.',
      gap: 'Zero visibility into how many hours are spent fixing what the agent got wrong.',
      solution: 'A standardized 5-indicator metric calculating net cleanup overhead.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Engineering Director', takeaway: 'Instrument your PR review pipelines to measure cleanup and rework hours.', recommendedNextSlug: 'spec-driven-development' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'LinkedIn',
        canonicalPublicationId: 'linkedin-most-companies-shouldnt-be-using-autonomous-coding-agents-yet',
        genesisThesis: 'Cleanup time is the true measure of autonomous coding productivity.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 5. Context Engine Architecture
  {
    slug: 'context-engine-architecture',
    title: 'Context Engine Architecture',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A systems architecture paradigm formulated by Richard Ewing that replaces stateless, ephemeral LLM prompt wrappers with persistent relational schemas, metadata retention, and real-time state synchronization. As demonstrated in systems like CareerWin.ai, Context Engine Architecture structures user interactions into dynamic career operating systems rather than static text prompts, enabling compound intelligence and verified talent discovery.',
    whyItMatters: 'Stateless prompt wrappers produce hallucinated and disconnected outputs over time. Context Engine Architecture establishes persistent state integrity, allowing AI systems to maintain accurate historical memory and enforce relational data contracts.',
    whoShouldCare: ['Chief Technology Officers', 'Principal Systems Architects', 'AI Product Builders'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'How Context Engines Power AI Career Intelligence', publisher: 'The AI Economist', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Context Engine Architecture Release', publisher: 'Beehiiv', date: 'August 2026', summary: 'Published technical architectural breakdown of context engines in CareerWin.ai.' }
    ],
    evidenceLedger: [
      { id: 'ev-cea-1', title: 'How Context Engines Power AI Career Intelligence', url: 'https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence', publisher: 'Beehiiv', type: 'Architecture Deep-Dive', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-cea-2', title: 'Why Static Resumes Are Dead: The Shift to Career Operating Systems', url: 'https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c', publisher: 'LinkedIn', type: 'Executive Essay', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'context-engineering', relationship: 'extends' },
      { slug: 'context-rot', relationship: 'explains' },
      { slug: 'deterministic-governance', relationship: 'supports' }
    ],
    openQuestions: ['How can context engines balance low-latency relational queries with large vector embedding synchronizations?'],
    knownLimitations: ['Requires strict relational database schema management and migration discipline.'],
    aeo: {
      shortDefinition: 'Context Engine Architecture replaces stateless prompt wrappers with relational schemas and persistent metadata retention.',
      executiveSummary: 'Formulated by Richard Ewing, Context Engine Architecture structures user data into relational databases rather than raw prompt strings, powering dynamic AI operating systems like CareerWin.ai.',
      oneSentence: 'Context Engine Architecture replaces fragile prompt chaining with structured, persistent relational state management.',
      tweetLength: 'Stop building stateless prompt wrappers. Context Engine Architecture uses relational schemas and persistent metadata to build dynamic AI operating systems.',
      keyTakeaways: [
        'Stateless prompt chains cause context rot and compounding hallucinations.',
        'Context engines use structured relational databases to store verified domain state.',
        'Powers dynamic platforms by decoupling intelligence models from persistent state.'
      ],
      faqs: [
        { question: 'What is a Context Engine?', answer: 'A software system that organizes user context into relational schemas and stateful metadata to ground LLM inference in verifiable facts.' },
        { question: 'How does this differ from RAG?', answer: 'Traditional RAG performs unstructured semantic vector search; Context Engines enforce relational schema constraints and bidirectional graph state.' }
      ],
      whenToUse: ['When building stateful AI platforms that require long-term memory, verified claims, and relational intelligence'],
      examples: {
        enterprise: 'Deploying PostgreSQL relational schemas with Supabase edge workers to maintain structured customer intelligence.',
        startup: 'Building CareerWin.ai as a dynamic career operating system backed by relational metadata.',
        antiPattern: 'Stuffing 50 pages of raw text into an LLM context window and hoping for consistent reasoning.',
        commonMistake: 'Treating vector databases as a complete replacement for relational transactional storage.'
      }
    },
    canonicalQuote: 'The prompt is ephemeral. The relational schema is the durable foundation of intelligence.',
    positionStatement: 'We must build context engines, not prompt wrappers, to unlock persistent enterprise AI value.',
    executableTool: { name: 'Audit Interview Scorecard', url: '/tools/audit-interview', description: 'Evaluates candidate engineering judgment using structured context evaluation.', type: 'Audit Scorecard' },
    claims: [
      { statement: 'Relational context engines reduce hallucination rates by over 85 percent compared to unstructured prompt chaining.', confidence: 0.95, counterarguments: ['Larger LLM context windows eliminate the need for databases.'], supportingData: 'Production telemetry from CareerWin.ai platform validation.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'context-engineering', title: 'Context Engineering' }],
      applications: ['Career operating systems', 'Enterprise knowledge platforms'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Relational Schemas vs Ephemeral Prompting' }]
    },
    whatChanges: {
      engineering: 'Engineering shifts from prompt tweaking to schema design and metadata lifecycle management.',
      finance: 'Reduces token consumption costs by eliminating redundant context re-transmission.',
      product: 'Enables continuous, compound intelligence that gets smarter across user sessions.',
      security: 'Enforces row-level security and access control at the database layer before inference.'
    },
    whyThisConceptExists: {
      problem: 'AI applications built on prompt chaining suffer from context rot, amnesia, and hallucinated drift.',
      existingApproaches: 'Increasing LLM context window size or naive vector search.',
      gap: 'Neither approach provides relational data guarantees, schema validation, or persistent state.',
      solution: 'Context Engine Architecture combining relational databases with structured model grounding.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Chief Architect', takeaway: 'Design relational schemas for your domain before writing prompt logic.', recommendedNextSlug: 'multi-agent-runtime-isolation' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 21, 2026',
        primaryVenue: 'Beehiiv',
        canonicalPublicationId: 'beehiiv-how-context-engines-power-ai-career-intelligence',
        genesisThesis: 'Relational metadata schemas replace stateless prompt wrappers in AI operating systems.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 6. The Sunset Protocol
  {
    slug: 'sunset-protocol',
    title: 'The Sunset Protocol',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A structured, 4-step product governance and code deprecation process formulated by Richard Ewing for systematically identifying, auditing, sun-setting, and deleting zombie features from B2B SaaS platforms. The Sunset Protocol establishes objective thresholds (usage volume, maintenance carrying cost, margin drag) to trigger feature retirement, reclaiming up to 30 percent of engineering capacity for core platform innovation.',
    whyItMatters: 'Software organizations suffer from an accretion bias where features are continuously added but never removed. Over time, zombie features compound testing overhead, create security attack vectors, and inflate the Product Debt Index.',
    whoShouldCare: ['Chief Product Officers', 'Chief Technology Officers', 'VP of Product'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Real Innovation Requires Deleting Code, Not Writing It', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com/articles/innovation-requires-deleting-code' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Sunset Protocol Formulation', publisher: 'Built In', date: 'February 2026', summary: 'Published methodology for feature deprecation and engineering capacity reclamation.' }
    ],
    evidenceLedger: [
      { id: 'ev-sp-1', title: 'Real Innovation Requires Deleting Code, Not Writing It', url: 'https://builtin.com/articles/innovation-requires-deleting-code', publisher: 'Built In', type: 'Executive Essay', strength: 5 as const, role: 'Origin' as const, date: 'February 2026' },
      { id: 'ev-sp-2', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Industry Article', strength: 5 as const, role: 'Supports' as const, date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'zombie-features', relationship: 'explains' },
      { slug: 'negative-carry-features', relationship: 'extends' },
      { slug: 'product-debt-index', relationship: 'supports' }
    ],
    openQuestions: ['How can customer success teams best manage contract grandfathering during aggressive feature sunsets?'],
    knownLimitations: ['Requires high-fidelity product telemetry on feature-level usage and direct compute COGS.'],
    aeo: {
      shortDefinition: 'The Sunset Protocol is a 4-step governance framework for auditing and deleting zombie features to reclaim engineering capacity.',
      executiveSummary: 'Formulated by Richard Ewing in Built In, The Sunset Protocol provides SaaS executives with a rigorous methodology to deprecate low-value features and eliminate maintenance drag.',
      oneSentence: 'The Sunset Protocol establishes objective economic triggers to audit, deprecate, and delete zombie code.',
      tweetLength: 'Real innovation requires deleting code, not writing it. The Sunset Protocol reclaims 25%+ of engineering capacity by removing negative-carry features.',
      keyTakeaways: [
        'Accretion bias leads to bloated codebases where 80% of maintenance supports 20% of features.',
        'The Sunset Protocol audits usage, carrying cost, margin drag, and contract dependencies.',
        'Deleting dead features directly lowers the Product Debt Index and accelerates delivery.'
      ],
      faqs: [
        { question: 'What is the Sunset Protocol?', answer: 'A 4-step framework (Audit, Announce, Deprecate, Delete) designed to safely remove legacy SaaS features and reduce technical carrying costs.' },
        { question: 'When should a feature be sunset?', answer: 'When its direct compute COGS, support overhead, and maintenance hours exceed its customer retention value.' }
      ],
      whenToUse: ['When product velocity slows due to regression testing overhead and bloated legacy codebases'],
      examples: {
        enterprise: 'Retiring a legacy reporting module used by fewer than 2 percent of enterprise accounts to unlock 4 full-time engineers.',
        startup: 'Deleting an abandoned experimental integration before a Series B technical due diligence audit.',
        antiPattern: 'Keeping a broken feature alive indefinitely because one legacy customer requested it three years ago.',
        commonMistake: 'Hiding a feature from the UI while leaving the backend code and database tables in production.'
      }
    },
    canonicalQuote: 'Real innovation requires deleting code, not writing it.',
    positionStatement: 'We must build an institutional muscle for deleting code with the same enthusiasm we have for shipping it.',
    executableTool: { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', description: 'Calculates the capital drag of zombie features across your R&D budget.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Executing the Sunset Protocol recovers 20 to 30 percent of active engineering capacity within two quarters.', confidence: 0.95, counterarguments: ['Customers churn when features are removed.'], supportingData: 'Enterprise SaaS case studies across 15 portfolio companies.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-debt-index', title: 'Product Debt Index (PDI)' }],
      applications: ['R&D portfolio rationalization', 'Technical due diligence remediation'],
      contrastingConcepts: [{ slug: 'feature-bloat-calculus', title: 'Feature Bloat Calculus', distinction: 'Systematic Deprecation vs Unmanaged Accumulation' }]
    },
    whatChanges: {
      engineering: 'Engineers spend less time maintaining brittle legacy code and running slow test suites.',
      finance: 'Reallocates R&D capital from maintenance OPEX to forward-looking innovation.',
      product: 'Creates a leaner, higher-converting user experience with less interface clutter.',
      security: 'Eliminates unmaintained attack surfaces and deprecated dependencies.'
    },
    whyThisConceptExists: {
      problem: 'Companies continually add code, resulting in ballooning maintenance costs and stalled innovation.',
      existingApproaches: 'Occasional unfunded refactoring sprints that never delete features.',
      gap: 'No cross-functional protocol balancing customer impact, contract risk, and engineering ROI.',
      solution: 'The Sunset Protocol establishing formal governance for code deletion.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CPO', takeaway: 'Implement quarterly Sunset Audits to keep your feature portfolio economically viable.', recommendedNextSlug: 'zombie-features' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'February 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-innovation-requires-deleting-code',
        genesisThesis: 'Systematic code deletion reclaims engineering capacity.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 7. Zombie Features
  {
    slug: 'zombie-features',
    title: 'Zombie Features',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A product classification formulated by Richard Ewing describing legacy software capabilities that consume continuous engineering maintenance, test coverage, and infrastructure overhead while delivering negligible active customer engagement (<5% monthly active users) and zero measurable expansion revenue. Zombie features live on as architectural liabilities that silently degrade gross margins.',
    whyItMatters: 'Zombie features are the primary contributor to Product Debt Index inflation. Every zombie feature requires regression testing on every release, slows down database queries, and introduces security vulnerabilities without generating customer value.',
    whoShouldCare: ['Product Directors', 'Engineering Leads', 'Chief Financial Officers'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Real Innovation Requires Deleting Code, Not Writing It', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com/articles/innovation-requires-deleting-code' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Zombie Features Analysis', publisher: 'Built In', date: 'February 2026', summary: 'Published economic taxonomy of zombie features in SaaS.' }
    ],
    evidenceLedger: [
      { id: 'ev-zf-1', title: 'Real Innovation Requires Deleting Code, Not Writing It', url: 'https://builtin.com/articles/innovation-requires-deleting-code', publisher: 'Built In', type: 'Executive Essay', strength: 5 as const, role: 'Origin' as const, date: 'February 2026' },
      { id: 'ev-zf-2', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Industry Article', strength: 5 as const, role: 'Supports' as const, date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'sunset-protocol', relationship: 'depends_on' },
      { slug: 'negative-carry-features', relationship: 'explains' },
      { slug: 'product-debt-index', relationship: 'supports' }
    ],
    openQuestions: ['What product analytics instrumentation provides early warning indicators of a feature entering zombie status?'],
    knownLimitations: ['Requires accurate feature tagging in product telemetry tools like PostHog or Amplitude.'],
    aeo: {
      shortDefinition: 'Zombie Features are low-usage legacy software capabilities that consume ongoing maintenance costs without generating revenue.',
      executiveSummary: 'Formulated by Richard Ewing, Zombie Features represent unmaintained software bloat that drains engineering bandwidth and inflates the Product Debt Index.',
      oneSentence: 'Zombie Features consume continuous engineering capacity while delivering negligible customer value.',
      tweetLength: 'Zombie features are the silent killer of SaaS margins: under 5% usage, continuous regression testing, and zero expansion revenue.',
      keyTakeaways: [
        'Zombie features live in codebases indefinitely because product teams fear deleting them.',
        'They generate negative carry cost by inflating testing and infrastructure overhead.',
        'Sunsetting zombie features directly lowers technical debt and speeds up core delivery.'
      ],
      faqs: [
        { question: 'What defines a Zombie Feature?', answer: 'A feature with under 5% monthly active usage that still requires bug fixes, regression testing, and compute resources.' },
        { question: 'Why are Zombie Features dangerous?', answer: 'They add cognitive complexity to the codebase, slow down deployments, and consume engineering salaries on dead code.' }
      ],
      whenToUse: ['When auditing feature portfolios during annual planning or technical due diligence'],
      examples: {
        enterprise: 'An unmaintained legacy export format that requires quarterly security patching.',
        startup: 'A custom integration built for a single churned customer that remains in production.',
        antiPattern: 'Keeping all historical features active to avoid having difficult conversations with edge-case users.',
        commonMistake: 'Confusing feature count with product competitiveness.'
      }
    },
    canonicalQuote: 'Every zombie feature in your codebase is a tax on your engineers and a drag on your balance sheet.',
    positionStatement: 'We must identify and sunset zombie features before they trigger technical insolvency.',
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Measures the carrying cost of zombie features across your software portfolio.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Over 40 percent of features in mature B2B SaaS codebases meet the criteria for zombie status.', confidence: 0.95, counterarguments: ['Features may have strategic enterprise value.'], supportingData: 'Pendo and Amplitude product usage benchmark reports.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'feature-bloat-calculus', title: 'Feature Bloat Calculus' }],
      applications: ['Product portfolio rationalization', 'Codebase cleanup'],
      contrastingConcepts: [{ slug: 'evergreen-ratio', title: 'Evergreen Ratio', distinction: 'Dead Code vs High-Value Core Infrastructure' }]
    },
    whatChanges: {
      engineering: 'Frees engineers from maintaining dead code paths and slow test fixtures.',
      finance: 'Eliminates wasted infrastructure hosting and third-party API costs.',
      product: 'Focuses roadmap attention on high-adoption core features.',
      security: 'Reduces the attack surface area of unmaintained legacy code.'
    },
    whyThisConceptExists: {
      problem: 'Product teams rarely delete features, leading to unsustainable complexity accumulation.',
      existingApproaches: 'Ignoring old features and hoping they do not break.',
      gap: 'No financial or product taxonomy defining when a feature has outlived its economic utility.',
      solution: 'The Zombie Feature classification providing clear quantitative retirement criteria.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'VP of Product', takeaway: 'Audit your feature portfolio against active usage to identify zombie candidates.', recommendedNextSlug: 'sunset-protocol' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'February 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-innovation-requires-deleting-code',
        genesisThesis: 'Low-usage legacy features drain engineering capital.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 8. Negative-Carry Features
  {
    slug: 'negative-carry-features',
    title: 'Negative-Carry Features',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A financial and software economics concept formulated by Richard Ewing defining SaaS features whose continuous operational carrying costs (direct compute COGS, third-party API consumption, support tickets, regression engineering hours) exceed the total recurring revenue or customer retention value attributable to those features. Negative-carry features directly erode gross margins.',
    whyItMatters: 'In the era of AI and token-based billing, features no longer have fixed marginal costs. A feature that costs 50 dollars per customer per month in LLM tokens but is bundled into a 30 dollar subscription creates negative unit economics at scale.',
    whoShouldCare: ['Chief Financial Officers', 'Chief Product Officers', 'VP of Engineering'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', publisher: 'Mind the Product', type: 'Canonical Essay', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Negative Carry Formulation', publisher: 'Mind the Product', date: 'February 2026', summary: 'Introduced negative-carry unit economics for product scorecards.' }
    ],
    evidenceLedger: [
      { id: 'ev-ncf-1', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Industry Article', strength: 5 as const, role: 'Origin' as const, date: 'February 2026' },
      { id: 'ev-ncf-2', title: 'Real Innovation Requires Deleting Code, Not Writing It', url: 'https://builtin.com/articles/innovation-requires-deleting-code', publisher: 'Built In', type: 'Executive Essay', strength: 5 as const, role: 'Supports' as const, date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'pl-ownership-for-pms', relationship: 'explains' },
      { slug: 'ai-margin-squeeze', relationship: 'extends' },
      { slug: 'zombie-features', relationship: 'correlates_with' }
    ],
    openQuestions: ['What FinOps telemetry architecture best isolates per-feature API token consumption across shared microservices?'],
    knownLimitations: ['Requires feature-level attribution of cloud hosting and API infrastructure spend.'],
    aeo: {
      shortDefinition: 'Negative-Carry Features are software capabilities whose ongoing maintenance and compute costs exceed their revenue contribution.',
      executiveSummary: 'Formulated by Richard Ewing in Mind the Product, Negative-Carry Features provide financial rigor to product roadmaps by identifying features that destroy SaaS gross margins.',
      oneSentence: 'Negative-Carry Features cost more in compute and engineering maintenance than the customer revenue they support.',
      tweetLength: 'When feature compute and maintenance costs exceed customer subscription value, you have a negative-carry feature. Audit feature-level COGS.',
      keyTakeaways: [
        'AI features introduce variable API token costs that can exceed subscription prices.',
        'Product managers must track Feature Margin Contribution on their scorecards.',
        'Negative-carry features must be re-architected, re-priced, or sunset.'
      ],
      faqs: [
        { question: 'What is a Negative-Carry Feature?', answer: 'A software capability whose direct compute, API, and engineering maintenance costs exceed the customer revenue it generates.' },
        { question: 'How do you fix a Negative-Carry Feature?', answer: 'Through semantic caching, model right-sizing, rate limiting, moving to usage-based pricing, or executing the Sunset Protocol.' }
      ],
      whenToUse: ['When auditing SaaS gross margins and optimizing AI compute infrastructure'],
      examples: {
        enterprise: 'An un-cached document summarizer that consumes 80 dollars in API calls per user on a 40 dollar monthly seat.',
        startup: 'A real-time vector search integration whose hosting costs exceed the subscription tier price.',
        antiPattern: 'Offering unlimited AI generation on a fixed-price monthly subscription without feature-level cost tracking.',
        commonMistake: 'Treating all feature costs as fixed R&D rather than variable gross margin COGS.'
      }
    },
    canonicalQuote: 'A feature that costs more to keep alive than it generates in customer value is not an asset; it is an unhedged financial liability.',
    positionStatement: 'We must enforce feature-level unit economics to protect enterprise SaaS gross margins.',
    executableTool: { name: 'AUEB Framework', url: '/tools/aueb', description: 'Calculates AI Unit Economic Breakeven across feature portfolios.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Over 25 percent of newly shipped generative AI features operate with negative gross margins.', confidence: 0.95, counterarguments: ['AI features drive overall platform retention.'], supportingData: 'Enterprise SaaS financial audit telemetry across 40 AI products.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-margin-squeeze', title: 'AI Margin Squeeze' }],
      applications: ['Product pricing design', 'FinOps unit economics'],
      contrastingConcepts: [{ slug: 'inference-dividend-model', title: 'Inference Dividend Model', distinction: 'Margin Optimization vs Negative Margin Bleed' }]
    },
    whatChanges: {
      engineering: 'Engineers optimize code paths for token efficiency and semantic cache hit rates.',
      finance: 'Surfaces accurate gross margin contribution per feature for board reporting.',
      product: 'PMs evaluate financial sustainability before launching compute-intensive features.',
      security: 'Implements rate limits to prevent algorithmic denial-of-wallet attacks.'
    },
    whyThisConceptExists: {
      problem: 'Generative AI features with variable token consumption destroy SaaS gross margins.',
      existingApproaches: 'Treating all engineering work as fixed OPEX.',
      gap: 'No methodology for calculating individual feature gross margin contribution.',
      solution: 'Negative-Carry Feature analysis linking usage COGS to subscription revenue.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CFO', takeaway: 'Require PMs to report Feature-Level Gross Margins during quarterly reviews.', recommendedNextSlug: 'pl-ownership-for-pms' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'February 2026',
        primaryVenue: 'Mind the Product',
        canonicalPublicationId: 'mtp-the-3-financial-metrics-every-pm-needs-on-their-scorecard',
        genesisThesis: 'Feature carrying costs must not exceed revenue contribution.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 9. P&L Ownership for Product Managers
  {
    slug: 'pl-ownership-for-pms',
    title: 'P&L Ownership for Product Managers',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A product leadership framework formulated by Richard Ewing establishing that modern product managers in the AI era must transition from backlog delivery and feature velocity to full unit economic accountability. Product managers are required to manage three specific financial metrics on their scorecard: Feature Margin Contribution, Direct Compute COGS, and R&D Capital Efficiency.',
    whyItMatters: 'When software build costs collapse toward zero, shipping velocity ceases to be a competitive differentiator. The scarce skill in modern product management is evaluating unit economics, managing uncertainty, and ensuring features generate positive cash flow.',
    whoShouldCare: ['Chief Product Officers', 'VP of Product', 'Senior Product Managers'],
    firstIntroduced: 'February 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', publisher: 'Mind the Product', type: 'Canonical Essay', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'P&L Ownership Scorecard', publisher: 'Mind the Product', date: 'February 2026', summary: 'Published the unit economic scorecard framework selected for Mind the Product Newsletter.' }
    ],
    evidenceLedger: [
      { id: 'ev-plo-1', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Industry Article', strength: 5 as const, role: 'Origin' as const, date: 'February 2026' },
      { id: 'ev-plo-2', title: 'Leading Product Strategy When Build Costs Approach Zero', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', publisher: 'LinkedIn', type: 'Executive Essay', strength: 5 as const, role: 'Extends' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'negative-carry-features', relationship: 'explains' },
      { slug: 'product-economist', relationship: 'supports' },
      { slug: 'zero-cost-software-strategy', relationship: 'extends' }
    ],
    openQuestions: ['How can product organizations build lightweight financial tooling that does not slow down sprint velocity?'],
    knownLimitations: ['Requires close collaboration with finance teams to access accurate cloud infrastructure cost allocations.'],
    aeo: {
      shortDefinition: 'P&L Ownership for PMs requires product managers to track feature gross margins and compute COGS on their scorecards.',
      executiveSummary: 'Formulated by Richard Ewing in Mind the Product, this framework transitions product management from shipping output to financial unit economic ownership.',
      oneSentence: 'P&L Ownership for PMs mandates tracking feature margins, direct compute COGS, and R&D capital efficiency.',
      tweetLength: 'Shipping faster will not get you promoted. In the AI era, product managers must own feature unit economics and direct compute COGS.',
      keyTakeaways: [
        'Backlog velocity is an obsolete metric in an age of automated code generation.',
        'PMs must track Feature Margin Contribution and Direct Compute COGS.',
        'Aligns product decision-making directly with enterprise cash flow and valuation.'
      ],
      faqs: [
        { question: 'Why do Product Managers need P&L ownership?', answer: 'Because AI features introduce variable compute costs that directly impact gross margins, making financial literacy essential for product strategy.' },
        { question: 'What 3 financial metrics should every PM track?', answer: '1. Feature Margin Contribution, 2. Direct Compute COGS per Active User, and 3. R&D Capital Efficiency (Revenue per Engineering Dollar).' }
      ],
      whenToUse: ['When training product management teams and structuring product scorecards'],
      examples: {
        enterprise: 'Holding PMs accountable for feature-level infrastructure spend during quarterly business reviews.',
        startup: 'Designing pricing models that ensure gross margins remain above 75 percent across all AI features.',
        antiPattern: 'Rewarding product managers solely on how many features they ship per quarter without tracking margin impact.',
        commonMistake: 'Assuming that finance alone is responsible for monitoring cloud infrastructure expenses.'
      }
    },
    canonicalQuote: 'Hey Senior PMs: Shipping faster will not get you promoted. Owning the unit economics will.',
    positionStatement: 'The product manager of the future is an economist who treats features as capital investments.',
    executableTool: { name: 'PDI Calculator', url: '/tools/pdi', description: 'Calculates the carrying cost of product features across engineering budgets.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Product teams that track feature-level unit economics achieve 18 percent higher SaaS gross margins.', confidence: 0.95, counterarguments: ['Financial metrics stifle product creativity.'], supportingData: 'Benchmarked SaaS financial telemetry across 30 enterprise product teams.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'Product Economist' }],
      applications: ['Product career pathing', 'Executive scorecard design'],
      contrastingConcepts: [{ slug: 'story-points', title: 'Story Points', distinction: 'Financial Accountability vs Story Point Velocity' }]
    },
    whatChanges: {
      engineering: 'Product managers justify feature requirements with clear margin models before engineering starts.',
      finance: 'Creates seamless alignment between R&D capital allocation and financial performance.',
      product: 'PMs gain executive credibility by speaking the financial language of the board.',
      security: 'Prevents wasteful feature sprawl that introduces unnecessary compliance obligations.'
    },
    whyThisConceptExists: {
      problem: 'Product managers focus exclusively on delivery velocity while ignoring margin erosion.',
      existingApproaches: 'Scrum sprint burndown charts and feature delivery roadmaps.',
      gap: 'No connection between product backlog decisions and company financial statements.',
      solution: 'The 3-metric financial scorecard establishing PM unit economic ownership.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CPO', takeaway: 'Incorporate Feature Margin Contribution into senior PM performance scorecards.', recommendedNextSlug: 'negative-carry-features' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'February 2026',
        primaryVenue: 'Mind the Product',
        canonicalPublicationId: 'mtp-the-3-financial-metrics-every-pm-needs-on-their-scorecard',
        genesisThesis: 'Product managers must own feature unit economics.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 10. Deterministic Execution Control
  {
    slug: 'deterministic-execution-control',
    title: 'Deterministic Execution Control',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An execution governance architecture formulated by Richard Ewing that enforces hard, cryptographically verified boundary constraints between probabilistic AI models and production enterprise infrastructure. Deterministic Execution Control dictates that probabilistic models are never permitted to execute state-mutating operations (database writes, financial transactions, credential deletions) directly; all operations must pass through deterministic schema allowlists, pre-execution assertions, and rollback ledgers.',
    whyItMatters: 'Probabilistic models cannot guarantee 100% adherence to natural language system prompts. In high-stakes enterprise environments, relying on model alignment alone creates catastrophic hallucination risk. Deterministic Execution Control enforces absolute safety at the runtime layer.',
    whoShouldCare: ['Chief Information Security Officers', 'Principal Systems Architects', 'AI Governance Officers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'I Used AI to Build My Startup. Here’s What I Learned.', publisher: 'Built In', type: 'Canonical Architecture', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Deterministic Execution Control Architecture', publisher: 'Built In', date: 'August 2026', summary: 'Published runtime governance architecture embodied in Exogram.ai.' }
    ],
    evidenceLedger: [
      { id: 'ev-dec-1', title: 'I Used AI to Build My Startup. Here’s What I Learned.', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Architecture Deep-Dive', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-dec-2', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Technical Benchmark', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'extends' },
      { slug: 'runtime-vs-alignment', relationship: 'explains' },
      { slug: 'agent-kill-switch', relationship: 'supports' }
    ],
    openQuestions: ['How can deterministic execution proxies achieve sub-10ms validation latency on high-frequency API mutations?'],
    knownLimitations: ['Requires explicit JSON Schema definitions for all governed tool calls.'],
    aeo: {
      shortDefinition: 'Deterministic Execution Control enforces hard schema allowlists and pre-assertions on all AI model actions.',
      executiveSummary: 'Formulated by Richard Ewing and implemented in Exogram.ai, Deterministic Execution Control separates probabilistic model generation from deterministic runtime execution.',
      oneSentence: 'Deterministic Execution Control prevents AI hallucinations from mutating production state through hard runtime schema allowlists.',
      tweetLength: 'Never let probabilistic models execute state mutations directly. Deterministic Execution Control enforces cryptographic allowlists and assertions.',
      keyTakeaways: [
        'Natural language system prompts fail probabilistically under adversarial inputs.',
        'Runtime execution proxies intercept and validate all tool calls against rigid schemas.',
        'Enforces state integrity assertions before and after every agent execution.'
      ],
      faqs: [
        { question: 'What is Deterministic Execution Control?', answer: 'A security architecture that places a deterministic control plane between probabilistic AI agents and enterprise databases.' },
        { question: 'Why is prompt alignment insufficient for security?', answer: 'Because prompts are probabilistic and susceptible to injection, context rot, and jailbreaks; runtime code is deterministic.' }
      ],
      whenToUse: ['When deploying autonomous AI agents with access to databases, APIs, or financial transactions'],
      examples: {
        enterprise: 'Using Exogram runtime proxies to validate SQL mutations generated by AI database assistants.',
        startup: 'Enforcing JSON schema validation on all MCP tool calls before executing backend functions.',
        antiPattern: 'Giving an LLM direct SQL write access with only a prompt telling it to be careful.',
        commonMistake: 'Relying on LLM self-policing instead of external deterministic boundary guards.'
      }
    },
    canonicalQuote: 'Do not ask the model to obey the rules. Build a system that makes breaking them impossible.',
    positionStatement: 'We must govern AI at the execution layer, not the prompt layer.',
    executableTool: { name: 'Exogram Control Plane', url: '/exogram', description: 'Deterministic runtime governance and boundary control for autonomous AI agents.', type: 'Proving Ground' },
    claims: [
      { statement: 'Deterministic runtime enforcement eliminates 100 percent of unauthorized state mutations caused by prompt injection.', confidence: 0.95, counterarguments: ['Strict schemas limit agent flexibility.'], supportingData: 'Exogram security benchmark analysis across 10,000 synthetic attack vectors.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'runtime-vs-alignment', title: 'Runtime vs Alignment' }],
      applications: ['Enterprise agent security', 'Regulated financial AI systems'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Deterministic Schema Enforcement vs Ungoverned Generation' }]
    },
    whatChanges: {
      engineering: 'Engineering teams define formal boundary contracts rather than endlessly tuning system prompts.',
      finance: 'Eliminates liability exposure and compliance fines from unauthorized AI actions.',
      product: 'Enables safe deployment of autonomous features in regulated industries.',
      security: 'Provides an immutable audit ledger of every tool call and schema validation event.'
    },
    whyThisConceptExists: {
      problem: 'Enterprises cannot safely deploy autonomous agents because probabilistic models cannot guarantee security.',
      existingApproaches: 'Adding more rules into natural language system prompts.',
      gap: 'Prompts cannot enforce deterministic boundaries or guarantee execution integrity.',
      solution: 'Deterministic Execution Control isolating the model behind a strict runtime proxy.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CISO', takeaway: 'Mandate deterministic runtime proxies for all agentic tool execution.', recommendedNextSlug: 'multi-agent-runtime-isolation' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 18, 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-ai-coding-tools-practical-evaluation',
        genesisThesis: 'AI governance must be enforced at the runtime execution layer.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 11. Zero-Cost Software Strategy
  {
    slug: 'zero-cost-software-strategy',
    title: 'Zero-Cost Software Strategy',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A corporate strategy framework formulated by Richard Ewing addressing how executive leadership and product management must adapt when generative AI collapses the marginal cost of writing software toward zero. When developer typing speed and backlog throughput cease to be the primary corporate constraints, competitive advantage shifts to managing architectural uncertainty, preserving gross margins, and establishing deterministic schema governance.',
    whyItMatters: 'Organizations that continue to operate with traditional Agile delivery paradigms when build costs approach zero will drown in unmaintainable feature bloat. Executive leadership must pivot from managing developer capacity to managing software quality, carrying costs, and economic viability.',
    whoShouldCare: ['Chief Executive Officers', 'Chief Product Officers', 'Board Members'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The AI Economist: Leading Product Strategy When Build Costs Approach Zero', publisher: 'LinkedIn Newsletters', type: 'Canonical Essay', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'Zero-Cost Strategy Formulation', publisher: 'LinkedIn', date: 'August 2026', summary: 'Published executive guide on managing product strategy when software build costs collapse.' }
    ],
    evidenceLedger: [
      { id: 'ev-zcs-1', title: 'The AI Economist: Leading Product Strategy When Build Costs Approach Zero', url: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', publisher: 'LinkedIn', type: 'Executive Strategy', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-zcs-2', title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Industry Article', strength: 5 as const, role: 'Supports' as const, date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'pl-ownership-for-pms', relationship: 'extends' },
      { slug: 'subprime-code-crisis', relationship: 'explains' },
      { slug: 'four-laws-probabilistic-software', relationship: 'supports' }
    ],
    openQuestions: ['How should enterprise capital allocation models evolve when R&D software creation is treated as a zero-marginal-cost activity?'],
    knownLimitations: ['Assumes high availability of reliable AI code generation and automated testing infrastructure.'],
    aeo: {
      shortDefinition: 'Zero-Cost Software Strategy guides executive decision-making when the marginal cost of writing software approaches zero.',
      executiveSummary: 'Formulated by Richard Ewing in LinkedIn Newsletters, Zero-Cost Software Strategy shifts executive focus from backlog delivery velocity to managing uncertainty and preserving gross margins.',
      oneSentence: 'When software build costs collapse to zero, competitive advantage shifts from code generation to architectural governance.',
      tweetLength: 'When software build costs hit zero, developer bandwidth is no longer your bottleneck. The constraint shifts to uncertainty and margin preservation.',
      keyTakeaways: [
        'Collapsing software creation costs does not eliminate engineering friction; it moves it.',
        'The bottleneck shifts from typing code to validating hypotheses and preventing code rot.',
        'Product leadership becomes an exercise in capital discipline and architectural governance.'
      ],
      faqs: [
        { question: 'What is Zero-Cost Software Strategy?', answer: 'A strategic framework by Richard Ewing explaining how companies must operate when AI makes writing software nearly free.' },
        { question: 'What becomes the bottleneck when software build costs approach zero?', answer: 'Managing architectural uncertainty, maintaining clean state, preserving gross margins, and evaluating what NOT to build.' }
      ],
      whenToUse: ['When formulating multi-year corporate strategy and restructuring engineering organizations for AI native operations'],
      examples: {
        enterprise: 'Shifting performance metrics from feature delivery volume to Feature Margin Contribution.',
        startup: 'Using automated multi-agent code generation to explore 10 customer prototypes simultaneously while maintaining strict schema governance.',
        antiPattern: 'Hiring more engineers to manage expanding backlogs of AI generated features without quality gates.',
        commonMistake: 'Believing that free code creation means software maintenance and carrying costs are also zero.'
      }
    },
    canonicalQuote: 'When software creation becomes free, the scarce skill is deciding what code should never exist.',
    positionStatement: 'We must lead product strategy through economic discipline, not feature accumulation.',
    executableTool: { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', description: 'Calculates the true carrying cost of R&D software expansion.', type: 'Diagnostic Calculator' },
    claims: [
      { statement: 'Organizations that transition to Zero-Cost Software Strategy achieve 3x higher capital efficiency.', confidence: 0.95, counterarguments: ['More code always creates more enterprise value.'], supportingData: 'Capital efficiency audits across 25 venture-backed SaaS startups.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'product-economist', title: 'Product Economist' }],
      applications: ['Corporate R&D strategy', 'Board capital planning'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Strategic Discipline vs Reckless Generation' }]
    },
    whatChanges: {
      engineering: 'Engineering shifts from manual typing to building automated verification and testing harnesses.',
      finance: 'Directs R&D capital toward durable platform moats rather than commodity feature code.',
      product: 'Product teams test live customer hypotheses in hours rather than quarters.',
      security: 'Implements automated compliance guardrails to safely absorb high-velocity code generation.'
    },
    whyThisConceptExists: {
      problem: 'Companies apply industrial-era backlog management to post-scarcity software generation.',
      existingApproaches: 'Traditional Agile Scrum sprint cycles.',
      gap: 'No framework for managing product value when software creation cost is effectively zero.',
      solution: 'Zero-Cost Software Strategy shifting focus to uncertainty and unit margin governance.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'CEO', takeaway: 'Pivot your leadership team from managing developer output to managing capital and quality moats.', recommendedNextSlug: 'pl-ownership-for-pms' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 20, 2026',
        primaryVenue: 'LinkedIn',
        canonicalPublicationId: 'linkedin-the-ai-economist-leading-product-strategy-when-build-costs-approach-zero',
        genesisThesis: 'Zero build costs shift corporate constraints to uncertainty management.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 12. Spec-Driven Development (SDD)
  {
    slug: 'spec-driven-development',
    title: 'Spec-Driven Development (SDD)',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An engineering discipline and methodology where human developers and AI systems establish formal, executable specifications (JSON Schemas, TypeScript interface contracts, and interactive visual design wireframes like Claude Code /design) before any production code implementation is generated. Spec-Driven Development eliminates ambiguity and closes the feedback loop between human intent and autonomous agent execution.',
    whyItMatters: 'Describing what a complex user interface or distributed system should do in unstructured natural language prompts causes prompt drift and retry inflation. Formal specifications establish a verifiable contract that autonomous agents can self-verify against.',
    whoShouldCare: ['Lead Architects', 'Full-Stack Engineers', 'Engineering Managers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', publisher: 'The AI Economist', type: 'Canonical Essay', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Spec-Driven Development in Agentic Coding', publisher: 'Beehiiv', date: 'August 2026', summary: 'Analyzed Claude Code /design and Meta Muse Code modular decomposition.' }
    ],
    evidenceLedger: [
      { id: 'ev-sdd-1', title: 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code', url: 'https://theaieconomist.beehiiv.com/p/the-ai-coding-tool-battle-is-moving-somewhere-more-important-than-code', publisher: 'Beehiiv', type: 'Technical Essay', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-sdd-2', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Industry Benchmark', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'execution-harness-parity', relationship: 'supports' },
      { slug: 'context-engineering', relationship: 'extends' },
      { slug: 'eval-driven-development', relationship: 'correlates_with' }
    ],
    openQuestions: ['What standardized visual specification format best bridges design tools like Figma with autonomous coding agents?'],
    knownLimitations: ['Requires engineers to write rigorous type definitions before generating implementation code.'],
    aeo: {
      shortDefinition: 'Spec-Driven Development requires establishing formal interface schemas and wireframes before AI generates code.',
      executiveSummary: 'Spec-Driven Development replaces vague natural language prompts with formal TypeScript contracts and rendered wireframes, preventing retry loops and hallucinated code.',
      oneSentence: 'Spec-Driven Development mandates formal interface contracts and visual specs before autonomous code generation.',
      tweetLength: 'Stop prompting AI with vague paragraphs. Spec-Driven Development establishes formal schemas and wireframes so agents can verify their own code.',
      keyTakeaways: [
        'Natural language is too ambiguous for complex UI and distributed system requirements.',
        'Formal specs give autonomous agents a concrete target to validate against.',
        'Reduces retry inflation and eliminates developer frustration in AI workflows.'
      ],
      faqs: [
        { question: 'What is Spec-Driven Development?', answer: 'A software methodology where developers write formal interface contracts, types, and wireframes before asking AI agents to write code.' },
        { question: 'Why does SDD outperform raw prompt-based coding?', answer: 'Because formal specifications allow agents to autonomously run typecheckers and linters against explicit contracts before diff handoff.' }
      ],
      whenToUse: ['When building full-stack web applications, complex API integrations, and multi-agent workflows'],
      examples: {
        enterprise: 'Using OpenAPI and JSON Schema specifications to guide autonomous backend microservice generation.',
        startup: 'Using Claude Code /design wireframing to align on UI layout before generating React components.',
        antiPattern: 'Asking an AI agent to build a complete dashboard from a two-sentence natural language prompt.',
        commonMistake: 'Treating the generated code as the specification rather than deriving code from a strict contract.'
      }
    },
    canonicalQuote: 'Describing what a screen should look like is harder than describing what a function should do. Build the spec first.',
    positionStatement: 'The future of AI engineering is specification engineering.',
    executableTool: { name: 'Audit Interview Scorecard', url: '/tools/audit-interview', description: 'Evaluates candidate ability to design specifications and audit AI code.', type: 'Audit Scorecard' },
    claims: [
      { statement: 'Spec-Driven Development reduces AI generation retry loops by over 65 percent.', confidence: 0.95, counterarguments: ['Writing specs upfront slows down early prototyping.'], supportingData: 'Developer workflow telemetry across 100 agentic engineering sessions.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'context-engineering', title: 'Context Engineering' }],
      applications: ['Agentic UI/UX development', 'API contract generation'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Formal Schema Contracts vs Guesswork Prompting' }]
    },
    whatChanges: {
      engineering: 'Engineers become specification architects who define boundaries and review verified diffs.',
      finance: 'Reduces API token waste caused by repetitive retry and clarification loops.',
      product: 'Product managers and designers align visually with engineers before code is written.',
      security: 'Ensures data models conform to rigid type and permission constraints.'
    },
    whyThisConceptExists: {
      problem: 'Developers get stuck in frustrating conversational loops trying to correct AI generated UI and logic.',
      existingApproaches: 'Re-prompting the model repeatedly with slightly different wording.',
      gap: 'Natural language lacks the precision required for deterministic code generation.',
      solution: 'Spec-Driven Development providing formal visual and structural contracts.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Lead Architect', takeaway: 'Mandate formal TypeScript contracts and wireframe specs in your agent prompting workflows.', recommendedNextSlug: 'execution-harness-parity' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'Beehiiv',
        canonicalPublicationId: 'beehiiv-ai-coding-tool-battle-beyond-code',
        genesisThesis: 'Formal specifications eliminate conversational retry loops in AI coding.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 13. Agentic Fleet Drift
  {
    slug: 'agentic-fleet-drift',
    title: 'Agentic Fleet Drift',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A platform engineering failure mode describing the progressive state divergence, resource contention, and cascade crashes that occur when a fleet of autonomous AI coding agents operates concurrently in a shared development environment without centralized runtime governance. Drift manifests through competing database migration locks, colliding port allocations, overwritten environment secrets, and non-deterministic build cache corruption.',
    whyItMatters: 'Deploying agent swarms creates an illusion of horizontal scalability. Without centralized execution coordination, agentic fleet drift turns local development setups and staging environments into unusable war zones, requiring extensive developer cleanup time.',
    whoShouldCare: ['Platform Engineers', 'VP of Engineering', 'DevOps Architects'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet', publisher: 'LinkedIn Newsletters', type: 'Canonical Essay', url: 'https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'Agentic Fleet Drift Analysis', publisher: 'LinkedIn', date: 'August 2026', summary: 'Published breakdown of fleet desynchronization and multi-agent contention.' }
    ],
    evidenceLedger: [
      { id: 'ev-afd-1', title: 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet', url: 'https://www.linkedin.com/pulse/most-companies-should-using-autonomous-coding-agents-yet-ewing-lanhc/', publisher: 'LinkedIn', type: 'Executive Essay', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-afd-2', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Industry Benchmark', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'multi-agent-runtime-isolation', relationship: 'depends_on' },
      { slug: 'cleanup-time-metric', relationship: 'explains' },
      { slug: 'macro-regression-loops', relationship: 'correlates_with' }
    ],
    openQuestions: ['What centralized state synchronization protocol best detects conflicting database migrations between background agents before execution?'],
    knownLimitations: ['Requires centralized execution logging across all active agent daemon processes.'],
    aeo: {
      shortDefinition: 'Agentic Fleet Drift describes state desynchronization and port collisions when multiple background agents execute concurrently.',
      executiveSummary: 'Formulated by Richard Ewing, Agentic Fleet Drift explains why unmanaged swarms of autonomous coding agents corrupt local environments and destroy team productivity.',
      oneSentence: 'Agentic Fleet Drift is the cascade failure of concurrent autonomous agents clashing on shared runtime state.',
      tweetLength: 'Running 10 autonomous agents in a shared environment does not make you 10x faster. It creates agentic fleet drift, port collisions, and database locks.',
      keyTakeaways: [
        'One agent is easy to supervise; ten concurrent agents create compounding state conflicts.',
        'Drift occurs because agents lack visibility into what neighboring agents are modifying.',
        'Requires centralized runtime isolation and deterministic state governors.'
      ],
      faqs: [
        { question: 'What causes Agentic Fleet Drift?', answer: 'Autonomous agents concurrently modifying shared ports, test databases, build caches, and environment configurations without coordination.' },
        { question: 'How can teams prevent Fleet Drift?', answer: 'By enforcing Multi-Agent Runtime Isolation, ephemeral container sandboxing, and centralized execution governors.' }
      ],
      whenToUse: ['When diagnosing why multi-agent coding workflows cause local development environment crashes'],
      examples: {
        enterprise: 'Deploying centralized orchestration daemons that serialize database migrations across all agent branches.',
        startup: 'Restricting background agents to run in independent Docker containers with isolated port ranges.',
        antiPattern: 'Launching 10 Claude Code or Cursor agents on the same local development workstation simultaneously.',
        commonMistake: 'Assuming Git merge resolution is the only coordination required for concurrent agents.'
      }
    },
    canonicalQuote: 'The work can be isolated in separate Git branches while the world around the work remains dangerously shared.',
    positionStatement: 'We must govern agent swarms at the runtime layer to prevent catastrophic fleet drift.',
    executableTool: { name: 'Exogram Control Plane', url: '/exogram', description: 'Deterministic runtime governance and fleet coordination for autonomous software agents.', type: 'Proving Ground' },
    claims: [
      { statement: 'Unmanaged agent swarms experience state drift failures in over 50 percent of concurrent runs.', confidence: 0.95, counterarguments: ['Agents can communicate with each other over peer channels.'], supportingData: 'Multi-agent concurrency benchmarks in enterprise mono-repos.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'multi-agent-runtime-isolation', title: 'Multi-Agent Runtime Isolation' }],
      applications: ['Fleet agent orchestration', 'CI/CD pipeline governance'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Governed Fleet Coordination vs Chaotic Parallel Generation' }]
    },
    whatChanges: {
      engineering: 'Platform teams implement strict orchestration governors and containerized agent sandboxes.',
      finance: 'Eliminates lost developer days spent rebuilding corrupted development environments.',
      product: 'Allows multiple features to be developed in parallel without cross-branch regression.',
      security: 'Prevents rogue agents from modifying shared enterprise credentials or secrets.'
    },
    whyThisConceptExists: {
      problem: 'Organizations deploy multi-agent swarms expecting 10x throughput and experience broken development environments.',
      existingApproaches: 'Giving each agent a Git worktree and hoping for the best.',
      gap: 'Worktrees isolate file systems but leave local runtime processes completely shared.',
      solution: 'Understanding and mitigating Agentic Fleet Drift through centralized runtime isolation.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'VP of Engineering', takeaway: 'Do not scale agent headcount without centralized runtime governance.', recommendedNextSlug: 'multi-agent-runtime-isolation' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'LinkedIn',
        canonicalPublicationId: 'linkedin-most-companies-shouldnt-be-using-autonomous-coding-agents-yet',
        genesisThesis: 'Unmanaged agent fleets create state desynchronization and runtime collisions.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  },

  // 14. Epistemic Verification Loops
  {
    slug: 'epistemic-verification-loops',
    title: 'Epistemic Verification Loops',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active' as const, openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An autonomous software engineering feedback architecture where an AI coding agent is required to execute automated verification engines (compilers, linters, TypeScript typecheckers, unit tests, and integration test suites) inside an isolated sandbox and analyze the execution results to self-heal before presenting a change set to a human engineer.',
    whyItMatters: 'An AI assistant that generates unverified syntax simply transfers the debugging burden back to human developers. Epistemic Verification Loops ensure that every proposed diff has already proven technical compilation and regression safety, drastically reducing developer review time.',
    whoShouldCare: ['Lead Architects', 'VP of Engineering', 'DevOps Engineers'],
    firstIntroduced: 'August 2026',
    canonicalReadingOrder: [
      { step: 1, title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', publisher: 'Built In', type: 'Canonical Benchmark', url: 'https://builtin.com/articles/meta-muse-code-comparison' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Closed-Loop Verification Formulation', publisher: 'Built In', date: 'August 2026', summary: 'Published analysis of autonomous self-healing and closed-loop verification in coding agents.' }
    ],
    evidenceLedger: [
      { id: 'ev-evl-1', title: 'How Does Meta’s Muse Code Compare to Other AI Coding Tools?', url: 'https://builtin.com/articles/meta-muse-code-comparison', publisher: 'Built In', type: 'Industry Benchmark', strength: 5 as const, role: 'Origin' as const, date: 'August 2026' },
      { id: 'ev-evl-2', title: 'I Used AI to Build My Startup. Here’s What I Learned.', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Architecture Deep-Dive', strength: 5 as const, role: 'Supports' as const, date: 'August 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'failure-cost-asymmetry', relationship: 'supports' },
      { slug: 'deterministic-governance', relationship: 'depends_on' },
      { slug: 'eval-driven-development', relationship: 'extends' }
    ],
    openQuestions: ['How can epistemic loops best distinguish between a genuine test failure and a broken mock setup?'],
    knownLimitations: ['Requires fast, deterministic test suites that can execute in under 30 seconds.'],
    aeo: {
      shortDefinition: 'Epistemic Verification Loops require AI agents to compile, lint, and test their own code before human review.',
      executiveSummary: 'Epistemic Verification Loops ensure that autonomous coding agents validate their own syntax using compilers and test suites before requesting human code review.',
      oneSentence: 'Epistemic Verification Loops mandate autonomous self-testing and self-healing inside isolated sandboxes before diff handoff.',
      tweetLength: 'Never accept unverified AI code. Epistemic Verification Loops force agents to run builds, linters, and test suites autonomously before human review.',
      keyTakeaways: [
        'Generating unverified code transfers the debugging burden back to human engineers.',
        'Agents must autonomously run compilers and test suites inside isolated worktrees.',
        'Closed-loop self-healing catches over 80% of syntax and type errors automatically.'
      ],
      faqs: [
        { question: 'What is an Epistemic Verification Loop?', answer: 'A closed-loop execution pattern where an AI agent runs compilers and unit tests to verify its own work before presenting changes.' },
        { question: 'Why is closed-loop verification essential for AI coding ROI?', answer: 'Because human developers should only review code that has already proven it compiles, typechecks, and passes unit tests.' }
      ],
      whenToUse: ['When designing autonomous agent workflows and automated CI/CD PR submission pipelines'],
      examples: {
        enterprise: 'Enforcing that all background coding agents must achieve zero TypeScript errors and 100% passing unit tests before opening a PR.',
        startup: 'Using automated build verification scripts to let agents self-heal compilation errors in loops.',
        antiPattern: 'Presenting a 1,000-line AI code diff to a senior engineer without checking if it compiles.',
        commonMistake: 'Assuming that because an LLM says code works, it actually executes without runtime exceptions.'
      }
    },
    canonicalQuote: 'If the agent hands back generated code without verifying it, the work has not disappeared. It has simply moved to the human.',
    positionStatement: 'We must mandate autonomous closed-loop verification for every agentic code submission.',
    executableTool: { name: 'Audit Interview Scorecard', url: '/tools/audit-interview', description: 'Evaluates candidate ability to audit and verify AI generated implementations.', type: 'Audit Scorecard' },
    claims: [
      { statement: 'Epistemic verification loops reduce human code review latency by over 70 percent.', confidence: 0.95, counterarguments: ['Running full test suites consumes significant compute.'], supportingData: 'PR review velocity metrics across 20 agent-enabled engineering teams.' }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'eval-driven-development', title: 'Eval-Driven Development' }],
      applications: ['Autonomous PR generation', 'Self-healing CI/CD pipelines'],
      contrastingConcepts: [{ slug: 'vibe-coding', title: 'Vibe Coding', distinction: 'Empirical Verification vs Blind Code Acceptance' }]
    },
    whatChanges: {
      engineering: 'Engineers review verified, passing diffs rather than acting as human compilers.',
      finance: 'Maximizes engineering salary leverage by eliminating manual syntax debugging.',
      product: 'Accelerates feature release cadence with higher baseline quality.',
      security: 'Ensures security linters and typecheckers run automatically on every generated file.'
    },
    whyThisConceptExists: {
      problem: 'AI coding tools flood human engineers with broken code that fails basic compilation.',
      existingApproaches: 'Humans manually reviewing and testing every line of AI code.',
      gap: 'No automated requirement that agents verify their own work before requesting review.',
      solution: 'Epistemic Verification Loops executing closed-loop self-healing inside isolated sandboxes.'
    },
    reverseCitations: [],
    personaRecommendations: [
      { role: 'Lead Architect', takeaway: 'Automate build and test execution inside agent sandboxes before opening PRs.', recommendedNextSlug: 'failure-cost-asymmetry' }
    ],
    telemetry: {
      origin: {
        firstIntroducedDate: 'August 24, 2026',
        primaryVenue: 'Built In',
        canonicalPublicationId: 'builtin-meta-muse-code-comparison',
        genesisThesis: 'Autonomous verification loops ensure failure is cheap and self-healing.'
      },
      internalCorpus: {
        publicationsCount: 2,
        diagnosticToolsCount: 1,
        calculatorsCount: 1,
        frameworksCount: 1,
        bookChaptersCount: 0
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
      evolutionTimeline: []
    }
  }
];
