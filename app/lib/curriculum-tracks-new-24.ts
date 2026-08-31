import { CurriculumModule, m, l, d } from './curriculum-data';

export function populateTrack24(modules: Record<string, CurriculumModule>) {
    modules['ai-economics/24-1'] = m(
        '24-1',
        '24.1 The End of Zero Marginal Cost Software',
        'Understand the fundamental shift from fixed-cost software architectures to variable-cost intelligent systems, and how this structural shift permanently breaks traditional SaaS valuation and pricing models.',
        'AI Economics & Margin Engineering',
        [
            'Traditional SaaS Economics: High fixed development cost, near-zero marginal cost per additional user.',
            'The AI Structural Shift: Intelligence is a consumable resource. Every user interaction drives direct, variable infrastructure costs.',
            'Why traditional SaaS metrics (DAU/MAU) become toxic when uncoupled from exact inference cost analysis.',
            'The structural differences between shipping deterministic code (fixed) and shipping raw compute (variable).',
            'How venture capital and public markets are mispricing AI startups by using outdated SaaS multiples.'
        ],
        [
            l(
                'Calculating Variable Cost Software Models',
                'In the zero-marginal-cost era, high user engagement was always positive. With generative AI, unconstrained engagement without usage-based billing leads directly to margin collapse. You must rebuild your P&L to account for continuous inference overhead.',
                [
                    d('Zero Marginal Cost', 'The economic foundation of SaaS where adding a user costs nothing.', 'No longer applies to GenAI'),
                    d('Variable Cost Software', 'Systems where every interaction carries a discrete financial price tag.', 'Requires new billing models'),
                    d('Margin Collapse Threshold', 'The specific volume of usage where a customer becomes unprofitable.', 'Must be identified pre-launch')
                ],
                'Conduct a retrospective audit of your last launched feature. Re-calculate its profitability assuming a variable $0.02 cost per user interaction.'
            )
        ]
    );

    modules['ai-economics/24-2'] = m(
        '24-2',
        '24.2 Governing the Turing Tax',
        'Learn why engineering teams consistently overpay for generalized reasoning, and how to govern the Turing Tax by deploying specialized, task-specific architectures.',
        'AI Economics & Margin Engineering',
        [
            'Defining the Turing Tax: The financial penalty of using trillion-parameter models for deterministic logic or basic classification.',
            'The economic disparity between a regex function ($0.000001) and a frontier model API call ($0.03).',
            'Why default-to-GPT-4 engineering cultures destroy EBITDA margins within three quarters of launch.',
            'Small Language Models (SLMs) vs Large Language Models (LLMs): Right-sizing the intelligence to the task.',
            'Architecting Semantic Routers to intercept and downgrade expensive queries before they reach frontier models.'
        ],
        [
            l(
                'Identifying and Eliminating the Turing Tax',
                'Audit your current prompt orchestration layers. If you are invoking Claude Opus or GPT-4 to perform sentiment analysis, extract dates, or format JSON, you are paying the Turing Tax. These tasks must be relegated to deterministic code or highly distilled, local SLMs.',
                [
                    d('Turing Tax', 'The margin penalty for over-indexing on intelligence.', 'Often consumes 80% of AI budgets'),
                    d('Semantic Routing', 'The logic layer that decides which model handles a specific query.', 'The key to margin defense'),
                    d('Model Distillation', 'Training a cheap SLM using the output of an expensive LLM.', 'High ROI architectural pattern')
                ],
                'Map your most frequently called AI endpoint. Design a routing logic tree that offloads 60% of its traffic to an open-weights SLM.'
            )
        ]
    );

    modules['ai-economics/24-3'] = m(
        '24-3',
        '24.3 Power User Liability and Monetization',
        'Discover how highly engaged users actively destroy product margins under flat-rate subscription models, and how to restructure monetization for AI features.',
        'AI Economics & Margin Engineering',
        [
            'The Power User Paradox: Why your most active and loyal customers are mathematically your biggest financial liabilities.',
            'The death of the "All-You-Can-Eat" $20/month SaaS tier in the era of generative AI.',
            'Cross-subsidization failure: When low-usage users can no longer cover the compute debt of power users.',
            'Implementing dynamic usage caps, token-based credit systems, and tiered degradation strategies.',
            'How to communicate usage limits to enterprise buyers without causing churn.'
        ],
        [
            l(
                'Restructuring Monetization for Variable Costs',
                'If a user pays $20/month but generates $40 in compute, they are toxic revenue. You must mathematically link your pricing tiers directly to your Synthetic COGS, ensuring that increased usage triggers up-sells rather than margin compression.',
                [
                    d('Power User Liability', 'The margin erosion caused by unconstrained AI consumption.', 'Requires usage-based billing'),
                    d('Toxic Revenue', 'Subscription revenue that costs more to service than it yields.', 'A symptom of bad AI pricing'),
                    d('Dynamic Degradation', 'Automatically switching users to cheaper models when caps are hit.', 'Preserves the user experience while protecting margins')
                ],
                'Calculate the exact number of complex RAG queries a standard user can execute before their monthly subscription yields a negative gross margin.'
            )
        ]
    );

    modules['ai-economics/24-4'] = m(
        '24-4',
        '24.4 Architecting Deterministic Control Layers',
        'Design the architectural governance structures required to safely deploy probabilistic AI models in enterprise environments without sacrificing cost control.',
        'AI Economics & Margin Engineering',
        [
            'Why probabilistic engines (LLMs) cannot be trusted with direct API execution or write-level access.',
            'The Deterministic Control Layer as a financial and operational firewall.',
            'Implementing strict schema validation and business logic guardrails outside of the prompt context.',
            'Semantic caching strategies to prevent duplicate generation costs (The Evergreen Ratio).',
            'Admissibility routing: Blocking expensive or dangerous queries before they incur token costs.'
        ],
        [
            l(
                'Building the Financial Firewall',
                'Do not wire user inputs directly to foundation models. Intercept every request. Check the semantic cache. Run intent classification. Enforce RBAC permissions. Only pass the request to the expensive frontier model after it clears all deterministic checks.',
                [
                    d('Deterministic Control Layer', 'The immutable governance architecture surrounding an AI agent.', 'Mandatory for enterprise scale'),
                    d('Semantic Caching', 'Returning pre-computed answers for similar questions.', 'Drives the Evergreen Ratio'),
                    d('Admissibility Guardrails', 'Pre-inference checks that block invalid or excessively expensive queries.', 'Reduces hallucination risk')
                ],
                'Draft a system architecture diagram showing a user request passing through three deterministic validation gates before reaching an LLM.'
            )
        ]
    );

    modules['ai-economics/24-5'] = m(
        '24-5',
        '24.5 Escaping the Compute Reseller Trap',
        'Analyze the existential risk of building thin wrappers around foundation models and learn how to construct defensible, proprietary value layers.',
        'AI Economics & Margin Engineering',
        [
            'The definition of a Compute Reseller: Buying API tokens wholesale and selling them via a UI wrapper.',
            'Why thin wrappers lack economic leverage and face a continuous race to the bottom on price.',
            'The risk of platform absorption: When OpenAI or Anthropic launch your core feature natively.',
            'Building deep moats through proprietary enterprise data, specialized RAG architectures, and complex agentic workflows.',
            'Owning the domain-specific outcome rather than just selling access to raw intelligence.'
        ],
        [
            l(
                'The Defensibility Test',
                'If your underlying API provider released your exact feature tomorrow, would your customers stay? If the answer is no, you are in the Reseller Trap. You must immediately pivot to incorporating siloed organizational data that foundation models cannot scrape.',
                [
                    d('Compute Reseller Trap', 'Operating a business with no proprietary value beyond the LLM API.', 'Highly vulnerable to platform risk'),
                    d('Platform Absorption', 'When a foundation model native update obsoletes a startup product category.', 'E.g., "Chat with PDF" wrappers'),
                    d('Proprietary Value Layer', 'The specific workflow or data integration that makes your application unique.', 'The source of your economic moat')
                ],
                'Perform a Defensibility Audit on your core product. List three capabilities that rely entirely on your proprietary architecture rather than the underlying LLM.'
            )
        ]
    );

    modules['ai-economics/24-6'] = m(
        '24-6',
        '24.6 Synthetic COGS and AI Unit Economics Benchmarking',
        'Master the AI Unit Economics Benchmark (AUEB) framework to accurately forecast gross margins and model the true cost of intelligence.',
        'AI Economics & Margin Engineering',
        [
            'Deconstructing Synthetic COGS: Breaking down a single transaction into its constituent infrastructure costs.',
            'The hidden costs of RAG: Embedding generation, vector database indexing, and massive context window retrieval.',
            'Input tokens vs Output tokens: Modeling the cost asymmetry of generative responses.',
            'The Cost of Predictivity: Why pushing model accuracy from 90% to 99% scales costs exponentially, not linearly.',
            'Utilizing the AUEB framework to track unit profitability across different feature sets.'
        ],
        [
            l(
                'Modeling the True Cost of Intelligence',
                'Never calculate AI costs based solely on the LLM API pricing page. You must calculate the full chain: the compute to process the document, the cost to store the vector embedding, the database retrieval latency, the prompt token packaging, and the final generative inference.',
                [
                    d('Synthetic COGS', 'Intelligence reclassified as a direct, variable cost of goods sold.', 'Fundamentally alters gross margins'),
                    d('Cost of Predictivity', 'The exponential cost curve required to achieve higher model accuracy.', 'Limits the ROI of algorithmic perfection'),
                    d('AUEB', 'AI Unit Economics Benchmark.', 'The primary diagnostic tool for AI profitability')
                ],
                'Select your most resource-intensive AI workflow. Calculate its exact Synthetic COGS down to the thousandth of a cent using the AUEB methodology.'
            )
        ]
    );

    modules['ai-economics/24-7'] = m(
        '24-7',
        '24.7 The Evergreen Ratio and Margin Defense',
        'Implement advanced caching strategies and continuous margin optimization techniques to defend your gross margins against escalating inference costs.',
        'AI Economics & Margin Engineering',
        [
            'Defining the Evergreen Ratio: The percentage of user queries successfully served from a cache without live inference.',
            'How a high Evergreen Ratio directly correlates with massive EBITDA expansion.',
            'Identifying highly repetitive user queries and standardizing reporting outputs for pre-computation.',
            'Asynchronous Inference: Shifting non-urgent AI tasks to background workers to manage compute spikes and utilize cheaper infrastructure.',
            'Context Budgeting: Pruning input context windows to eliminate token waste.'
        ],
        [
            l(
                'Maximizing Pre-Computed Value',
                'If a thousand users ask an AI to summarize the same standard quarterly earnings report, generating it 1,000 times live is financial malpractice. Generate it once, store it in a semantic cache, and serve it for free 999 times. That is the essence of margin defense.',
                [
                    d('Evergreen Ratio', 'Cached responses divided by total queries.', 'Target 60-80% for high profitability'),
                    d('Asynchronous Inference', 'Decoupling the user request from the model execution.', 'Protects against latency spikes and cost surges'),
                    d('Context Budgeting', 'Strictly limiting the number of tokens passed to the model.', 'Reduces the input portion of Synthetic COGS')
                ],
                'Review your platform telemetry. Identify the top three most commonly asked questions or generated reports that can be moved to a static semantic cache today.'
            )
        ]
    );

    modules['ai-economics/24-8'] = m(
        '24-8',
        '24.8 Negative-Carry Code and the Vibe Coding Debt Crisis',
        'Manage the massive inflation of technical debt caused by AI code assistants and the transition from software construction to software curation.',
        'AI Economics & Margin Engineering',
        [
            'The illusion of velocity: Why burning story points faster does not equal shipping valuable assets.',
            'Vibe Coding Debt: The unique architectural liability created when engineers accept probabilistic code they do not fully understand.',
            'How AI-generated code inflates the volume of the codebase, accelerating the organization toward the Technical Insolvency Date.',
            'The necessity of the Audit Interview: Hiring engineers for verification and risk assessment rather than raw code generation.',
            'Enforcing rigorous human-in-the-loop architectural reviews for all AI-generated pull requests.'
        ],
        [
            l(
                'Surviving the AI Debt Bubble',
                'AI copilots make generating code functionally free. Because it is free, we are overproducing it. LLMs lack architectural judgment; they write verbose, inefficient code that creates massive downstream maintenance burdens. You must shift your engineering culture from code creation to code curation.',
                [
                    d('Negative-Carry Code', 'High-volume, AI-generated code whose maintenance OpEx exceeds its marginal value creation.', 'Creates an ongoing capital drain in your repository'),
                    d('Vibe Coding Debt', 'Code accepted because it "looks right" rather than being mathematically verified.', 'Causes catastrophic MTTR during incidents'),
                    d('The Audit Interview', 'Testing engineers on finding bugs in AI code, not writing algorithms.', 'The new standard for technical hiring')
                ],
                'Conduct an Audit Interview simulation with your lead engineer using a 500-line block of flawed, AI-generated code. Assess their ability to find the architectural vulnerabilities.'
            )
        ]
    );

    modules['ai-economics/24-9'] = m(
        '24-9',
        '24.9 Passing the Product P&L Test',
        'Establish strict financial gating mechanisms before approving any new AI feature development, shifting focus from "AI for AI\'s sake" to proven ROI.',
        'AI Economics & Margin Engineering',
        [
            'Why FOMO-driven AI feature development is destroying R&D capital efficiency across the industry.',
            'The three pillars of the Product P&L Test: Exact Cost of Inference, Margin Threshold, and Defensible Differentiation.',
            'The Painkiller vs Vitamin assessment: If the AI requires heavy human editing to be useful, it hasn\'t eliminated labor costs.',
            'Transitioning from an experimental mindset to a rigorous, unit-economics-first product culture.',
            'How to successfully kill "Zombie AI Features" that generate compute costs but no demonstrable business value.'
        ],
        [
            l(
                'Financial Gating for AI Innovation',
                'Do not let your engineering team spend six months building an LLM integration if you have not mathematically proven the unit economics. You must know the exact cost per transaction, the volume where the feature becomes unprofitable, and why a competitor cannot copy it tomorrow.',
                [
                    d('Product P&L Test', 'The mandatory financial review before approving AI roadmaps.', 'Prevents the Generative Margin Squeeze'),
                    d('Painkiller vs Vitamin', 'Assessing whether the AI fully automates a task or just creates a sloppy draft.', 'Determines true user value'),
                    d('Zombie AI Features', 'Deployed models that consume API costs but have less than 5% adoption.', 'Must be killed immediately')
                ],
                'Run your currently planned AI feature through the complete Product P&L Test. If you cannot answer the three pillar questions with hard numbers, pause development.'
            )
        ]
    );

    modules['ai-economics/24-10'] = m(
        '24-10',
        '24.10 Executive Synthesis and Board Leadership',
        'Master the communication frameworks required to translate complex AI unit economics into financial realities for CFOs, Boards of Directors, and Private Equity partners.',
        'AI Economics & Margin Engineering',
        [
            'The translation gap: Why engineers speak in tokens and latency, while the Board speaks in EBITDA and CapEx.',
            'How to present AI infrastructure investments as long-term CapEx rather than immediate OpEx margin hits.',
            'Explaining the Turing Tax and Power User Liability to a non-technical CFO to secure budget for architectural refactoring.',
            'Using the Product Debt Index (PDI) to demonstrate how technical debt limits future AI scale.',
            'Establishing a unified organizational doctrine for profitable, governed AI deployment.'
        ],
        [
            l(
                'Leading the AI Transition',
                'You cannot secure funding for a Deterministic Control Layer by talking about vector databases. You secure it by explaining how the investment will protect gross margins, eliminate Power User Liability, and create a defensible economic moat against competitors caught in the Reseller Trap.',
                [
                    d('Executive Translation', 'Converting engineering realities into financial realities.', 'The core function of the AI Economist'),
                    d('CapEx vs OpEx', 'Properly categorizing AI R&D to optimize financial reporting.', 'Critical for PE due diligence'),
                    d('Unified Doctrine', 'Ensuring Product, Engineering, and Finance agree on AI unit economics.', 'The ultimate competitive advantage')
                ],
                'Draft a one-page executive memo to your CFO outlining your strategy to implement a Deterministic Control Layer, explicitly focusing on EBITDA protection and margin expansion.'
            )
        ]
    );
}
