import type { GlossaryTerm } from '../types';

export const sovereignExpansionTerms: GlossaryTerm[] = [
    {
        slug: 'autonomous-agent-readiness-index',
        title: 'Autonomous Agent Readiness Index (AARI)',
        category: 'AI Governance & Verification',
        definition: 'A deterministic 15-point engineering diagnostic evaluating codebase architecture, type strictness, and test harness completeness before turning on autonomous coding agents (Claude Code, Antigravity, Devin).',
        whyItMatters: 'Unconstrained coding agents deployed on messy, un-tested codebases cause severe context loss, hallucinated refactors, and silent cross-module API breakages. AARI benchmarks readiness and quantifies annual drift liability.',
        howToMeasure: '1. Audit immutable boundary rules (AGENTS.md).\n2. Verify static compiler gates (tsc --noEmit).\n3. Measure isolated Git worktree concurrency.\n4. Test schema contract coverage (Zod/TypeScript).\n5. Calculate score using the [AARI Diagnostic Tool](/tools/aari).',
        faqs: [
            {
                question: 'What is a passing AARI score?',
                answer: 'A score of 80/100 or higher is required before granting autonomous agents direct terminal or branch execution privileges.'
            },
            {
                question: 'How do we remediate a low AARI score?',
                answer: 'Install AGENTS.md rule files, enforce TypeScript strict mode, and add automated zero-trust compiler hooks on tool actions.'
            }
        ],
        relatedTerms: ['deterministic-governance', 'spec-driven-development', 'vibe-coding-debt']
    },
    {
        slug: 'spec-driven-agent-execution',
        title: 'Spec-Driven Agent Execution (SDAE)',
        category: 'AI Governance & Verification',
        definition: 'The engineering discipline of compiling natural language user requirements into immutable JSON/YAML execution contracts and test suites before allowing coding agents to modify repository files.',
        whyItMatters: 'Prevents agents from hallucinating architectural scope, rewriting unrelated database routes, or generating uncontrolled 50-file pull requests.',
        howToMeasure: 'Ratio of tasks initiated with written execution specifications vs conversational ad-hoc prompts. Target: 100% for multi-file architectural changes.',
        faqs: [
            {
                question: 'Why not use raw natural language prompts?',
                answer: 'Natural language prompts are non-deterministic and suffer from semantic drift as context windows expand over long execution chains.'
            }
        ],
        relatedTerms: ['autonomous-agent-readiness-index', 'deterministic-governance']
    },
    {
        slug: 'zero-trust-type-gate',
        title: 'Zero-Trust Type Gate',
        category: 'Technical Debt & Code Quality',
        definition: 'A post-execution terminal compiler hook that runs mechanical type checking (tsc --noEmit, mypy), linting, and unit assertions on agent-generated code before human review.',
        whyItMatters: 'Eliminates senior engineer review fatigue by preventing syntactically invalid or hallucinated code from ever reaching the pull request queue.',
        howToMeasure: 'Automated CI/CD pass rate of agent-generated commits prior to human review. Target: 100% mechanical pass rate.',
        faqs: [
            {
                question: 'How does this reduce engineering costs?',
                answer: 'Senior engineers spend 40% less time acting as manual human compilers for AI-generated code.'
            }
        ],
        relatedTerms: ['negative-carry-code', 'vibe-coding-debt']
    },
    {
        slug: 'agentic-drift-constant',
        title: 'Agentic Drift Constant',
        category: 'AI Governance & Verification',
        definition: 'The rate at which an autonomous coding agent departs from the original user prompt or architectural rules over successive execution steps in a long context window.',
        whyItMatters: 'In unconstrained agents, drift compounds exponentially after step 3, resulting in erased files, broken imports, and recursive fix loops.',
        howToMeasure: 'Number of unintended file modifications per agent execution turn. Bounded target: <20 lines per discrete step.',
        faqs: [
            {
                question: 'How do you stop agentic drift?',
                answer: 'Enforce immutable boundary rules in root configuration and require step-by-step turn execution rather than unbounded autonomy.'
            }
        ],
        relatedTerms: ['context-rot', 'hallucination-debt']
    },
    {
        slug: 'worktree-concurrency-isolation',
        title: 'Worktree Concurrency Isolation',
        category: 'Architecture Patterns',
        definition: 'The architectural pattern of spawning autonomous agent swarms in isolated Git worktrees and ephemeral test databases to prevent file locks, port collisions, and shared state mutations.',
        whyItMatters: 'Allows multiple subagents to execute in parallel without colliding on local dev servers or corrupting shared repository state.',
        howToMeasure: 'Worktree isolation verified via zero shared lockfile contention and sub-second branch teardown on failed attempts.',
        faqs: [
            {
                question: 'Why is Git worktree preferred over separate repo clones?',
                answer: 'Worktrees share the underlying object storage without disk duplication while maintaining completely isolated file trees.'
            }
        ],
        relatedTerms: ['deterministic-governance', 'runtime-concurrency-meltdown']
    },
    {
        slug: 'inference-dividend-cascade',
        title: 'The 4-Stage Inference Dividend Cascade',
        category: 'Richard Ewing Frameworks',
        definition: 'A tiered request routing framework that recaptures 60%+ of wasted AI token spend by filtering requests through Semantic Caching, SLM Classification, Quantized Fine-Tuning, and Frontier Escalation.',
        whyItMatters: 'Prevents SaaS gross margin collapse by ensuring that routine, repetitive tasks do not default to expensive $15/M token frontier model APIs.',
        howToMeasure: 'Calculate total monthly inference spend with tiered routing vs raw frontier API baseline using the [SLM Break-Even Calculator](/tools/slm-break-even).',
        faqs: [
            {
                question: 'What percentage of queries can be handled by SLMs?',
                answer: 'Empirical telemetry shows 80-85% of enterprise software queries are structured extraction tasks suitable for 8B SLMs.'
            }
        ],
        relatedTerms: ['synthetic-cogs-arbitrage', 'model-right-sizing']
    },
    {
        slug: 'edge-semantic-intent-caching',
        title: 'Edge Semantic Intent Caching',
        category: 'Cloud & Infrastructure',
        definition: 'A sub-20ms vector similarity cache deployed at the network edge that matches and serves semantically identical user queries without invoking LLM inference APIs.',
        whyItMatters: 'Reduces repetitive token OpEx by 30% to 50% while delivering near-instant response times for end users.',
        howToMeasure: 'Cache hit ratio (%) multiplied by average frontier model query cost.',
        faqs: [
            {
                question: 'How do you prevent serving stale semantic cached answers?',
                answer: 'Set semantic cosine similarity thresholds >= 0.96 and enforce dynamic TTL invalidation upon underlying database state changes.'
            }
        ],
        relatedTerms: ['inference-dividend-cascade', 'synthetic-cogs']
    },
    {
        slug: 'slm-intent-router',
        title: 'SLM Intent Router',
        category: 'AI & Machine Learning',
        definition: 'A specialized 1B-3B parameter Small Language Model trained specifically to classify user prompt complexity and route tasks to the lowest-cost competent model tier.',
        whyItMatters: 'Automates model right-sizing, ensuring simple parsing runs on local SLMs while only high-entropy reasoning reaches frontier models.',
        howToMeasure: 'Routing accuracy (%) across an audited test dataset of multi-intent queries.',
        faqs: [
            {
                question: 'What is the routing latency overhead?',
                answer: 'A quantized 1B router on an edge CPU responds in under 15ms, adding negligible overhead.'
            }
        ],
        relatedTerms: ['model-right-sizing', 'inference-dividend-cascade']
    },
    {
        slug: 'quantized-model-specialization',
        title: 'Quantized Model Specialization',
        category: 'AI & Machine Learning',
        definition: 'Fine-tuning quantized 8B-14B parameter models (e.g. 4-bit / 8-bit Llama 3.3 or Gemma 2) on domain-specific corpora to match frontier model accuracy at 90% lower compute cost.',
        whyItMatters: 'Allows B2B SaaS companies to achieve sovereign unit economics and high gross margins without dependency on hyperscaler model markups.',
        howToMeasure: 'Domain accuracy benchmark vs Claude 3.7 Sonnet / GPT-5, evaluated against monthly server cost amortized per query.',
        faqs: [
            {
                question: 'Is fine-tuning expensive for an 8B model?',
                answer: 'Using LoRA or QLoRA on a single rented A10G/H100 instance, specialized fine-tuning runs in 2-4 hours for under $50 in compute.'
            }
        ],
        relatedTerms: ['slm-vs-api-arbitrage', 'synthetic-cogs']
    },
    {
        slug: 'synthetic-cogs-arbitrage',
        title: 'Synthetic COGS Arbitrage',
        category: 'SaaS Metrics & Finance',
        definition: 'The financial strategy of systematically shifting variable GPU inference costs (Synthetic COGS) from third-party vendor APIs to fixed-cost private infrastructure or quantized SLMs to expand SaaS gross margins.',
        whyItMatters: 'Expands B2B SaaS gross profit from 40-50% back to traditional 80%+ levels, driving enterprise exit valuation multiples.',
        howToMeasure: 'SaaS Gross Margin (%) before and after inference tiering. Model via [SLM Break-Even Calculator](/tools/slm-break-even).',
        faqs: [
            {
                question: 'At what query volume does private hosting become cheaper?',
                answer: 'For a typical 1,000-token payload, self-hosting an 8B model on a $1/hr GPU breaks even at approximately 180,000 queries per month.'
            }
        ],
        relatedTerms: ['ai-unit-economics', 'inference-dividend-cascade']
    },
    {
        slug: 'probabilistic-product-management',
        title: 'Probabilistic Product Management (PPM)',
        category: 'Product Management',
        definition: 'A product management discipline designed for non-deterministic AI systems, replacing fixed sprint story-point estimation with confidence intervals, eval benchmarks, and token cost caps.',
        whyItMatters: 'Traditional Scrum/Agile fails for AI because model outputs are probabilistic. PPM manages system uncertainty and unit margins rather than backlog velocity.',
        howToMeasure: 'Eval benchmark pass rate + Feature Gross Margin % across active user cohorts.',
        faqs: [
            {
                question: 'How do sprint commitments work in PPM?',
                answer: 'Commitments are structured around statistical confidence thresholds (e.g. 98% accuracy on 500 gold-standard evals) rather than arbitrary story points.'
            }
        ],
        relatedTerms: ['software-phase-transition', 'general-contractor-pm']
    },
    {
        slug: 'general-contractor-pm',
        title: 'General Contractor PM Model',
        category: 'Product Management',
        definition: 'The operating model where product managers function as general contractors: specifying architectural outcomes, defining verification suites, and managing unit margins rather than writing user stories.',
        whyItMatters: 'When AI writes code in seconds, developer bandwidth ceases to be the constraint. The PM bottleneck shifts to architectural governance and risk mitigation.',
        howToMeasure: 'Spec-to-deployment velocity + defect rate in production.',
        faqs: [
            {
                question: 'What skills does a General Contractor PM need?',
                answer: 'System architecture comprehension, token FinOps, quantitative evaluation design, and contract specification.'
            }
        ],
        relatedTerms: ['probabilistic-product-management', 'software-phase-transition']
    },
    {
        slug: 'negative-carry-ai-feature',
        title: 'Negative-Carry AI Feature',
        category: 'Product Management',
        definition: 'A product capability where variable generative inference costs exceed the incremental subscription revenue generated by active users, meaning increased adoption destroys gross profit.',
        whyItMatters: 'Features that appear highly successful in product analytics can secretly drive the company toward technical and operational insolvency.',
        howToMeasure: 'Calculate via the [AI Feature Margin Matrix](/tools/ai-feature-margin): Monthly Subscription Revenue per user minus (Base Hosting + Monthly Token COGS).',
        faqs: [
            {
                question: 'How do you fix a negative-carry feature?',
                answer: 'Enforce credit-based consumption caps, downgrade background extraction to quantized SLMs, or sunset the route entirely.'
            }
        ],
        relatedTerms: ['ai-margin-squeeze', 'synthetic-cogs']
    },
    {
        slug: 'token-unit-elasticity',
        title: 'Token Unit Elasticity',
        category: 'SaaS Metrics & Finance',
        definition: 'The measure of how user behavior and workflow complexity impact total token consumption and API billing for a specific product feature.',
        whyItMatters: 'High token elasticity on flat subscription pricing guarantees gross margin collapse as power users scale usage.',
        howToMeasure: '% change in total monthly token burn divided by % change in monthly active users.',
        faqs: [
            {
                question: 'What is an inelastic token feature?',
                answer: 'A feature with fixed, bounded prompts (e.g. classification of a standard 200-word form) where token burn per user is strictly predictable.'
            }
        ],
        relatedTerms: ['negative-carry-ai-feature', 'ai-unit-economics']
    },
    {
        slug: 'negative-carry-code',
        title: 'Negative-Carry Code',
        category: 'Technical Debt & Code Quality',
        definition: 'Unverified, AI-generated boilerplate code that appears functional in staging but lacks architectural coherence, strict types, or unit tests, creating an ongoing maintenance tax that exceeds its marginal economic value.',
        whyItMatters: 'Negative-carry code degrades 4x faster than human-written code, accelerating sprint maintenance load toward the Technical Insolvency Date.',
        howToMeasure: 'Calculate the Negative-Carry Risk Score (0-100) using the [Negative-Carry Code Auditor](/tools/negative-carry-code-auditor).',
        faqs: [
            {
                question: 'Why do teams generate negative-carry code?',
                answer: 'Incentives reward raw feature velocity. Autocomplete tools allow developers to ship without understanding edge cases or authoring test harnesses.'
            }
        ],
        relatedTerms: ['vibe-coding-debt', 'technical-insolvency-date']
    },
    {
        slug: 'technical-insolvency-horizon',
        title: 'Technical Insolvency Horizon',
        category: 'SaaS Metrics & Finance',
        definition: 'The projected number of quarters remaining until codebase maintenance, bug patches, and dependency updates consume 100% of engineering bandwidth.',
        whyItMatters: 'At the insolvency horizon, feature velocity drops to zero, rendering the company uncompetitive and destroying M&A exit valuation.',
        howToMeasure: '(100 - Current Maintenance %) divided by Quarter-over-Quarter Maintenance Growth Rate.',
        faqs: [
            {
                question: 'Can hiring more engineers solve technical insolvency?',
                answer: 'No. Adding engineers to an insolvent codebase increases coordination tax and accelerates architectural decay (Brooks Law).'
            }
        ],
        relatedTerms: ['negative-carry-code', 'technical-insolvency-date']
    },
    {
        slug: 'vibe-coding-debt-discount',
        title: 'Vibe Coding Debt Discount',
        category: 'Due Diligence & M&A',
        definition: 'The balance-sheet valuation write-down applied by Private Equity operating partners and M&A buyers to account for the capital required to refactor un-maintainable AI codebases post-close.',
        whyItMatters: 'Protects buyers from overpaying for high apparent sprint velocity that masks severe underlying architectural decay.',
        howToMeasure: 'Estimated refactor engineering payroll (12-18 months) required to achieve 80%+ test coverage and type strictness.',
        faqs: [
            {
                question: 'How common are M&A discounts for AI code debt?',
                answer: 'Increasingly standard in 2026 technical due diligence for SaaS acquisitions valued over $20M.'
            }
        ],
        relatedTerms: ['negative-carry-code', 'pe-due-diligence']
    },
    {
        slug: 'sovereign-proxy-gateway',
        title: 'Sovereign Proxy Gateway',
        category: 'Security & Compliance',
        definition: 'A low-latency network proxy (such as Exogram) that intercepts LLM API traffic at the physical boundary to enforce deterministic token budgets, rate limits, and zero-trust schema validation.',
        whyItMatters: 'Provides physical boundary control that cannot be bypassed by prompt injection or autonomous agent hallucinations.',
        howToMeasure: 'Proxy latency overhead (<10ms) and intercepted malformed/oversized query count.',
        faqs: [
            {
                question: 'Where is the proxy gateway deployed?',
                answer: 'In the application VPC or edge CDN between internal microservices and external LLM provider endpoints.'
            }
        ],
        relatedTerms: ['deterministic-governance', 'shadow-delegation']
    }
];
