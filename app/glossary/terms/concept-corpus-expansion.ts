import { GlossaryTerm } from '../types';

export const conceptCorpusExpansionTerms: GlossaryTerm[] = [
    {
        slug: 'mcp-governance',
        title: 'MCP Governance & Tool Boundary Control',
        category: 'AI Governance & Verification',
        definition: 'The systematic control and auditing of Model Context Protocol (MCP) integrations to prevent unauthorized access and data leakage. It establishes strict capability boundaries between language models and enterprise systems. Read more about [MCP Governance](/concepts/mcp-governance).',
        whyItMatters: 'As autonomous agents gain access to internal tools, the blast radius of a compromised model expands exponentially. Proper governance ensures that agents can only execute authorized functions within specific contexts.',
        howToApply: 'Implement strict principle-of-least-privilege rules for every MCP server. Require human-in-the-loop approval for destructive actions and maintain comprehensive audit logs of all tool executions.',
        whoUsesIt: 'Security Engineers, Platform Architects, AI Governance Leads',
        faqs: [
            { question: 'How does MCP governance differ from standard API security?', answer: 'MCP governance specifically addresses the non-deterministic nature of LLMs deciding when and how to call tools, requiring probabilistic safeguards rather than just static API keys.' },
            { question: 'What is a tool boundary?', answer: 'A tool boundary is a hard limit on what a specific AI agent can do, enforced at the protocol level rather than relying on prompt engineering.' }
        ],
        relatedTerms: ['shadow-ai-governance', 'eaap-protocol', 'context-engineering'],
        tier: 'standard'
    },
    {
        slug: 'context-engineering',
        title: 'Context Engineering',
        category: 'AI & Machine Learning',
        definition: 'The practice of architecting the information environment for language models to ensure they have the exact data needed for specific tasks. It focuses on retrieval precision, context window optimization, and state management. Read more about [Context Engineering](/concepts/context-engineering).',
        whyItMatters: 'Models are entirely dependent on the context provided at inference time. Poor context leads to hallucinations, while optimized context yields highly deterministic and accurate outputs.',
        howToApply: 'Structure data pipelines to inject only highly relevant, dense information into the prompt. Use chunking strategies and metadata filtering to keep the context window focused.',
        whoUsesIt: 'AI Engineers, Data Architects, Machine Learning Practitioners',
        faqs: [
            { question: 'Is context engineering the same as prompt engineering?', answer: 'No. Prompt engineering focuses on instructing the model, while context engineering focuses on architecting the data payload the model operates on.' },
            { question: 'How do you measure context quality?', answer: 'Through retrieval evaluation metrics like NDCG and by tracking the hallucination rate against the provided context.' }
        ],
        relatedTerms: ['eval-driven-development', 'compound-ai-systems', 'mcp-governance'],
        tier: 'standard'
    },
    {
        slug: 'agentic-roi',
        title: 'Agentic ROI & Task-Level Economics',
        category: 'AI & Machine Learning',
        definition: 'A framework for calculating the return on investment of autonomous AI agents by analyzing the unit economics of specific tasks rather than broad productivity metrics. It compares the compute and token costs of an agent against the human labor cost of the same task. Read more about [Agentic ROI](/concepts/agentic-roi).',
        whyItMatters: 'Many organizations fail to realize value from AI because they measure aggregate productivity instead of task-level efficiency. Understanding agentic ROI prevents companies from automating tasks where the compute cost exceeds the labor savings.',
        howToApply: 'Break down workflows into atomic tasks. Calculate the API, compute, and maintenance costs for the agent, then compare it directly to the fully loaded cost of human execution for that specific task.',
        whoUsesIt: 'Engineering Managers, Product Managers, FinOps Practitioners',
        faqs: [
            { question: 'Why is task-level measurement necessary?', answer: 'Broad metrics mask inefficiencies. An agent might save money on writing code but lose money on debugging, making task-level granularity essential.' },
            { question: 'How do token costs factor into ROI?', answer: 'Token costs represent the variable cost of goods sold (COGS) for the agent. They must be tracked per task to ensure positive unit economics.' }
        ],
        relatedTerms: ['ai-unit-economics', 'aueb-framework', 'ai-finops'],
        tier: 'standard'
    },
    {
        slug: 'spec-driven-development',
        title: 'Spec-Driven Development',
        category: 'Architecture Patterns',
        definition: 'An engineering methodology where deterministic specifications, contracts, and types dictate the behavior of probabilistic AI systems. It relies on strict input/output schemas to constrain model generation. Read more about [Spec-Driven Development](/concepts/spec-driven-development).',
        whyItMatters: 'LLMs are inherently unpredictable. Spec-driven development forces them to conform to expected architectural patterns, ensuring system stability and type safety.',
        howToApply: 'Define strict JSON schemas or TypeScript interfaces for all model outputs. Use validation libraries to enforce compliance before the output passes to the next system component.',
        whoUsesIt: 'Software Engineers, Systems Architects, Prompt Engineers',
        faqs: [
            { question: 'Does this limit the creativity of the model?', answer: 'Yes, by design. In enterprise software, predictability and safety are prioritized over creativity.' },
            { question: 'What happens when a model fails the spec?', answer: 'The system triggers a retry with the validation error fed back into the context, allowing the model to correct its mistake.' }
        ],
        relatedTerms: ['eval-driven-development', 'compound-ai-systems', 'retry-inflation'],
        tier: 'standard'
    },
    {
        slug: 'eval-driven-development',
        title: 'Eval-Driven Development',
        category: 'Testing & QA',
        definition: 'A workflow where automated evaluations dictate the acceptance criteria for AI features, similar to test-driven development for traditional software. It uses programmatic assertions and LLM-as-a-judge patterns to verify model behavior. Read more about [Eval-Driven Development](/concepts/eval-driven-development).',
        whyItMatters: 'Without quantitative evaluations, AI development relies on subjective manual testing, which is unscalable and prone to regression. Evals provide continuous assurance of model performance.',
        howToApply: 'Write evaluation scripts before building the AI feature. Integrate these scripts into the CI/CD pipeline to block deployments if accuracy, latency, or safety metrics degrade.',
        whoUsesIt: 'QA Engineers, AI Engineers, Platform Teams',
        faqs: [
            { question: 'How is this different from traditional TDD?', answer: 'Traditional TDD expects exact deterministic outputs. Eval-driven development uses statistical thresholds and fuzzy matching to accommodate probabilistic variations.' },
            { question: 'What is an LLM-as-a-judge?', answer: 'A pattern where a stronger, usually more expensive, model evaluates the output of the primary model against a specific rubric.' }
        ],
        relatedTerms: ['spec-driven-development', 'context-engineering', 'unreliability-tax'],
        tier: 'standard'
    },
    {
        slug: 'ai-coding-tool-economics',
        title: 'AI Coding Tool Economics',
        category: 'AI & Machine Learning',
        definition: 'The financial analysis of AI-assisted development tools, measuring the offset between subscription and compute costs versus engineering time saved. It focuses on the net impact on development margins. Read more about [AI Coding Tool Economics](/concepts/ai-coding-tool-economics).',
        whyItMatters: 'Adopting AI coding tools introduces new variable costs. Organizations must quantify the actual productivity gains to justify these expenses and avoid margin degradation.',
        howToApply: 'Track the APER metric before and after tool adoption. Measure the cost of the tools against the reduction in time-to-merge for standard pull requests.',
        whoUsesIt: 'Engineering Directors, CTOs, FinOps Analysts',
        faqs: [
            { question: 'Are AI coding tools always cost-effective?', answer: 'Not always. If the tools generate low-quality code that increases review time, the net economic impact can be negative.' },
            { question: 'How do you isolate the impact of the tool?', answer: 'By conducting A/B testing with control groups of developers and measuring velocity over multiple sprints.' }
        ],
        relatedTerms: ['aper-metric', 'agentic-roi', 'margin-engineering'],
        tier: 'standard'
    },
    {
        slug: 'compound-ai-systems',
        title: 'Compound AI Systems',
        category: 'Architecture Patterns',
        definition: 'Architectures that combine multiple interacting language models, classical compute components, and external tools to accomplish complex tasks. They move beyond single-prompt interfaces into orchestrated networks of capability. Read more about [Compound AI Systems](/concepts/compound-ai-systems).',
        whyItMatters: 'Single models plateau in capability. Compound systems distribute tasks to specialized sub-components, achieving higher reliability and performance than any single model could manage alone.',
        howToApply: 'Design systems with distinct routing, retrieval, generation, and verification nodes. Use smaller, faster models for routing and verification, reserving large models for complex reasoning.',
        whoUsesIt: 'Systems Architects, AI Engineers, Backend Developers',
        faqs: [
            { question: 'Why not just use the smartest available model?', answer: 'Using a massive model for every step is cost-prohibitive and slow. Compound systems optimize cost and latency by matching task complexity to model size.' },
            { question: 'What is a common compound pattern?', answer: 'Retrieval-Augmented Generation (RAG) is a fundamental compound pattern, combining a retrieval system with a generation model.' }
        ],
        relatedTerms: ['mcp-governance', 'spec-driven-development', 'retry-inflation'],
        tier: 'standard'
    },
    {
        slug: 'shadow-ai-governance',
        title: 'Shadow AI Governance',
        category: 'Security & Compliance',
        definition: 'The detection, management, and securing of unsanctioned artificial intelligence tools operating within an enterprise network. It addresses the risks introduced by employees using consumer-grade AI for corporate tasks. Read more about [Shadow AI Governance](/concepts/shadow-ai-governance).',
        whyItMatters: 'Unsanctioned AI usage leads to intellectual property leakage and compliance violations. Organizations must govern these tools without completely stifling employee productivity.',
        howToApply: 'Deploy network monitoring to detect API calls to known AI endpoints. Provide secure, sanctioned internal alternatives to consumer AI tools to reduce the incentive for shadow usage.',
        whoUsesIt: 'CISO, Security Analysts, IT Administrators',
        faqs: [
            { question: 'Why do employees use shadow AI?', answer: 'Usually because sanctioned corporate tools are either unavailable, too slow, or overly restricted.' },
            { question: 'What is the primary risk of shadow AI?', answer: 'The primary risk is data exfiltration, where proprietary code or customer data is used to train public models.' }
        ],
        relatedTerms: ['mcp-governance', 'ai-liability-gradient', 'complexity-tax'],
        tier: 'standard'
    },
    {
        slug: 'unreliability-tax',
        title: 'The Unreliability Tax',
        category: 'Richard Ewing Frameworks',
        definition: 'The hidden cost incurred when systems must constantly verify, retry, or manually review the non-deterministic outputs of AI models. It represents the margin eroded by probabilistic failures. Read more about [The Unreliability Tax](/concepts/unreliability-tax).',
        whyItMatters: 'Organizations often calculate AI ROI based on perfect execution. The unreliability tax accounts for the real-world friction of hallucination management, revealing the true operational cost of AI features.',
        howToApply: 'Measure the frequency of automated retries and human-in-the-loop interventions. Convert this lost time and compute into a localized financial penalty against the feature\'s ROI.',
        whoUsesIt: 'Product Managers, Engineering Leaders, FinOps Teams',
        faqs: [
            { question: 'Can the unreliability tax be eliminated?', answer: 'No, but it can be minimized through spec-driven development, eval-driven development, and better context engineering.' },
            { question: 'How does this affect unit economics?', answer: 'It increases the variable cost of every transaction, potentially turning a profitable feature into a loss leader if failure rates spike.' }
        ],
        relatedTerms: ['retry-inflation', 'ai-margin-collapse-point', 'agentic-roi'],
        tier: 'pillar'
    },
    {
        slug: 'synthetic-model-collapse',
        title: 'Synthetic Model Collapse',
        category: 'AI & Machine Learning',
        definition: 'A degenerative process where language models trained heavily on data generated by other models lose their representation of the underlying data distribution, resulting in degraded quality and amplified artifacts. Read more about [Synthetic Model Collapse](/concepts/synthetic-model-collapse).',
        whyItMatters: 'As the internet fills with AI-generated content, future models risk training on recursive loops of synthetic data. This threatens the long-term viability and accuracy of foundation models.',
        howToApply: 'Implement rigorous data provenance tracking. Filter synthetic content out of training pipelines and prioritize verifiable, human-generated ground truth data for fine-tuning.',
        whoUsesIt: 'Data Scientists, ML Researchers, Data Engineers',
        faqs: [
            { question: 'Is synthetic data always bad?', answer: 'No. Carefully curated synthetic data is useful for specific tasks, but uncontrolled ingestion of wild synthetic data causes collapse.' },
            { question: 'What are the symptoms of model collapse?', answer: 'Loss of rare vocabulary, repetition of generic phrases, and a sharp drop in factual accuracy over successive training generations.' }
        ],
        relatedTerms: ['eval-driven-development', 'four-laws-probabilistic-software', 'context-engineering'],
        tier: 'standard'
    },
    {
        slug: 'product-debt-index',
        title: 'Product Debt Index (PDI)',
        category: 'Richard Ewing Frameworks',
        definition: 'A metric designed to quantify the accumulation of deferred product decisions, outdated features, and unaddressed user friction. It operates similarly to technical debt but focuses on the user experience and feature lifecycle. Read more about [Product Debt Index](/concepts/product-debt-index).',
        whyItMatters: 'While teams track technical debt rigorously, product debt often goes unnoticed until it severely degrades user retention. PDI provides a concrete number to justify deprecating features or pausing new development.',
        howToApply: 'Audit the product surface area for unused features, disjointed UX flows, and legacy configurations. Assign weighted scores to each issue to calculate the total index, then allocate sprint capacity to reduce it.',
        whoUsesIt: 'Product Managers, UX Designers, Engineering Directors',
        faqs: [
            { question: 'How is product debt different from technical debt?', answer: 'Technical debt affects the codebase and developer velocity. Product debt affects the user interface, cognitive load, and market positioning.' },
            { question: 'When should you pay down product debt?', answer: 'When the PDI crosses an agreed-upon threshold, teams should allocate dedicated time - often a full sprint - to pruning features and standardizing UX.' }
        ],
        relatedTerms: ['complexity-tax', 'evergreen-ratio', 'four-tiers-of-autonomy'],
        tier: 'pillar'
    },
    {
        slug: 'ev-se-framework',
        title: 'Enterprise Value Scenario Engine (EV-SE)',
        category: 'Richard Ewing Frameworks',
        definition: 'A modeling system that simulates the impact of technical architecture choices on long-term enterprise valuation. It translates engineering decisions into financial outcomes based on scaling efficiency and margin expansion. Read more about [Enterprise Value Scenario Engine](/concepts/ev-se-framework).',
        whyItMatters: 'Engineering leaders struggle to communicate the financial necessity of architectural overhauls. EV-SE bridges the gap between technical strategy and board-level financial expectations.',
        howToApply: 'Input current infrastructure costs, projected growth rates, and proposed architectural changes. Run Monte Carlo simulations to project how the technical changes alter EBITDA and overall valuation over a 3-5 year horizon.',
        whoUsesIt: 'CTOs, CFOs, Enterprise Architects',
        faqs: [
            { question: 'What variables go into the EV-SE?', answer: 'Primary inputs include cloud spend, engineering headcount, transaction volume, failure rates, and customer acquisition costs.' },
            { question: 'How accurate are these simulations?', answer: 'They are directional rather than absolute. The goal is to compare the relative financial impact of different technical paths, not to predict the exact stock price.' }
        ],
        relatedTerms: ['margin-engineering', 'ai-margin-collapse-point', 'ai-unit-economics'],
        tier: 'pillar'
    },
    {
        slug: 'aueb-framework',
        title: 'AI Unit Economics Benchmark (AUEB)',
        category: 'Richard Ewing Frameworks',
        definition: 'A standardized measurement model for assessing the profitability of discrete AI operations. It establishes a baseline ratio of inference costs to business value generated per transaction. Read more about [AI Unit Economics Benchmark](/concepts/aueb-framework).',
        whyItMatters: 'Without a standardized benchmark, companies launch AI features that generate revenue but destroy margins due to high API costs. AUEB ensures features are financially sustainable at scale.',
        howToApply: 'Calculate the total cost of executing a single AI task - including tokens, compute, and latency penalties. Compare this to the AUEB baseline for that specific capability class to determine viability.',
        whoUsesIt: 'FinOps Practitioners, Product Managers, AI Engineers',
        faqs: [
            { question: 'What happens if a feature fails the benchmark?', answer: 'The team must optimize the feature - usually through model down-selection, prompt caching, or context pruning - before it can be deployed to production.' },
            { question: 'Does the benchmark change over time?', answer: 'Yes. As foundation models drop in price, the acceptable AUEB baseline shifts, allowing for more complex operations per transaction.' }
        ],
        relatedTerms: ['ai-unit-economics', 'ai-finops', 'margin-engineering'],
        tier: 'pillar'
    },
    {
        slug: 'aper-metric',
        title: 'APER (Annualized Productivity to Engineering Ratio)',
        category: 'Richard Ewing Frameworks',
        definition: 'A specialized metric tracking the net output of engineering teams adjusted for the capital expenditure on developer productivity tools. It quantifies whether spending on tools like AI assistants actually translates to shipped software. Read more about [APER](/concepts/aper-metric).',
        whyItMatters: 'Companies spend heavily on developer tooling with little empirical proof of return. APER forces accountability by correlating tool spend directly with engineering throughput and business impact.',
        howToApply: 'Divide the total annualized value of shipped features by the sum of engineering salaries plus productivity tooling costs. Track the trendline to ensure new tool acquisitions increase the ratio.',
        whoUsesIt: 'Engineering Operations, CTOs, VP of Engineering',
        faqs: [
            { question: 'How do you measure the value of shipped features?', answer: 'Value is typically proxied through story points completed, incident-free days, and direct revenue attribution where applicable.' },
            { question: 'What if the APER decreases after buying an AI tool?', answer: 'It indicates the tool is causing friction - often through increased review times, debugging, or context switching - and should be re-evaluated.' }
        ],
        relatedTerms: ['ai-coding-tool-economics', 'agentic-roi', 'evergreen-ratio'],
        tier: 'pillar'
    },
    {
        slug: 'four-laws-probabilistic-software',
        title: 'The 4 Laws of Probabilistic Software',
        category: 'Richard Ewing Frameworks',
        definition: 'A foundational framework defining the inescapable realities of building applications on top of non-deterministic models. The laws address variance, degradation, liability, and verification. Read more about [The 4 Laws of Probabilistic Software](/concepts/four-laws-probabilistic-software).',
        whyItMatters: 'Engineers trained in deterministic systems often apply the wrong mental models to AI. These laws establish a new paradigm for designing resilient, fault-tolerant applications.',
        howToApply: 'Use the four laws as a design checklist during architectural reviews. Ensure every system component has fallback mechanisms and resilient verification to handle inevitable probabilistic failures.',
        whoUsesIt: 'Software Architects, AI Engineers, Technical Founders',
        faqs: [
            { question: 'What is the first law?', answer: 'The first law states that variance is guaranteed: identical inputs will eventually yield divergent outputs, requiring strict boundary enforcement.' },
            { question: 'How do the laws affect testing?', answer: 'They mandate a shift from static assertions to probabilistic evaluations and continuous monitoring.' }
        ],
        relatedTerms: ['spec-driven-development', 'eval-driven-development', 'retry-inflation'],
        tier: 'pillar'
    },
    {
        slug: 'ai-liability-gradient',
        title: 'The AI Liability Gradient',
        category: 'Richard Ewing Frameworks',
        definition: 'A risk assessment model that plots the severity of potential AI failures against the autonomy level of the system. It helps organizations map out where human-in-the-loop oversight is legally and operationally required. Read more about [The AI Liability Gradient](/concepts/ai-liability-gradient).',
        whyItMatters: 'Deploying autonomous agents creates unprecedented liability. The gradient visualizes the tipping point where automated decisions carry unacceptable risk, guiding governance policies.',
        howToApply: 'Plot planned AI features on the gradient matrix. Features falling in the high-liability zone require hardcoded guardrails, mandatory human approval steps, and strict audit logging.',
        whoUsesIt: 'Compliance Officers, Legal Counsel, AI Governance Leads',
        faqs: [
            { question: 'What is a high-liability task?', answer: 'Tasks involving financial transactions, healthcare diagnostics, or autonomous infrastructure modification carry maximum liability.' },
            { question: 'Does liability decrease over time?', answer: 'Only if the system proves statistically reliable through rigorous evaluation and the legal environment establishes safe harbors.' }
        ],
        relatedTerms: ['mcp-governance', 'four-tiers-of-autonomy', 'shadow-ai-governance'],
        tier: 'pillar'
    },
    {
        slug: 'retry-inflation',
        title: 'Retry Inflation',
        category: 'Richard Ewing Frameworks',
        definition: 'An economic anomaly in AI systems where models caught in validation loops repeatedly consume tokens to correct their own mistakes, silently exploding the cost of a single transaction. Read more about [Retry Inflation](/concepts/retry-inflation).',
        whyItMatters: 'When models fail to conform to schemas, automated systems often prompt them to try again. Without strict limits, this causes runaway compute spend that ruins task-level unit economics.',
        howToApply: 'Implement hard limits on validation retries (e.g., maximum 3 attempts). If the model fails repeatedly, fall back to a deterministic process or escalate to a human operator.',
        whoUsesIt: 'Backend Engineers, FinOps Practitioners, SREs',
        faqs: [
            { question: 'Why do models get stuck in retry loops?', answer: 'Often because the initial prompt is ambiguous, or the requested schema is too complex for the chosen model to reliably output.' },
            { question: 'How do you detect retry inflation?', answer: 'Monitor the ratio of inference calls to successful transaction completions. A sudden spike indicates a model struggling with validation.' }
        ],
        relatedTerms: ['unreliability-tax', 'spec-driven-development', 'ai-margin-collapse-point'],
        tier: 'pillar'
    },
    {
        slug: 'eaap-protocol',
        title: 'Exogram Action Admissibility Protocol (EAAP)',
        category: 'Richard Ewing Frameworks',
        definition: 'A strict security protocol defining how autonomous agents request, verify, and execute actions on external systems. It ensures that all tool calls are syntactically valid and semantically authorized before execution. Read more about [EAAP](/concepts/eaap-protocol).',
        whyItMatters: 'Without an admissibility protocol, agents might execute destructive API calls based on hallucinations. EAAP acts as an immutable firewall between the model\'s intent and the system\'s state.',
        howToApply: 'Wrap all tool executions in an EAAP layer. The layer must verify the agent\'s cryptographic identity, the permissions context, and the safety of the specific payload before allowing the request to proceed.',
        whoUsesIt: 'Security Engineers, Platform Architects, API Developers',
        faqs: [
            { question: 'How does EAAP relate to MCP?', answer: 'MCP defines how tools are exposed; EAAP defines the security and authorization logic that determines if a specific agent is allowed to use a specific tool in a specific context.' },
            { question: 'What happens if a request is deemed inadmissible?', answer: 'The request is blocked, logged for security auditing, and the agent is returned a strict error message detailing the boundary violation.' }
        ],
        relatedTerms: ['mcp-governance', 'shadow-ai-governance', 'spec-driven-development'],
        tier: 'pillar'
    },
    {
        slug: 'margin-engineering',
        title: 'Margin Engineering',
        category: 'Richard Ewing Frameworks',
        definition: 'The discipline of architecting software systems specifically to optimize the gross margin of the business. It treats infrastructure cost, compute efficiency, and cloud spend as first-class architectural constraints. Read more about [Margin Engineering](/concepts/margin-engineering).',
        whyItMatters: 'In a cloud-native and AI-heavy world, sloppy architecture directly destroys company valuation by eroding margins. Margin engineering forces technical teams to align with financial goals.',
        howToApply: 'Require cost-impact analysis during architectural design reviews. Implement aggressive caching, optimize database queries, and route AI requests to the cheapest capable model.',
        whoUsesIt: 'Software Architects, FinOps Practitioners, CTOs',
        faqs: [
            { question: 'Is margin engineering just cost-cutting?', answer: 'No. It is about architectural efficiency. It seeks to maximize the business value delivered per unit of compute, not simply to buy cheaper servers.' },
            { question: 'When should you apply this discipline?', answer: 'From the initial system design phase. Retrofitting efficiency into a bloated architecture is significantly more difficult than building it in from the start.' }
        ],
        relatedTerms: ['ev-se-framework', 'ai-finops', 'ai-unit-economics'],
        tier: 'pillar'
    },
    {
        slug: 'ai-margin-collapse-point',
        title: 'The AI Margin Collapse Point',
        category: 'Richard Ewing Frameworks',
        definition: 'The specific operational threshold where the variable costs of running an AI feature - compute, tokens, and retries - exceed the revenue or labor savings it generates. Read more about [The AI Margin Collapse Point](/concepts/ai-margin-collapse-point).',
        whyItMatters: 'Unlike traditional software, AI costs scale linearly or exponentially with usage. Identifying this collapse point prevents companies from scaling features that will bankrupt them.',
        howToApply: 'Model the cost curve of the feature against projected usage growth. Set automated alerts in your FinOps tools to trigger when transaction costs approach the collapse threshold.',
        whoUsesIt: 'FinOps Analysts, Product Managers, CFOs',
        faqs: [
            { question: 'What triggers margin collapse?', answer: 'Common triggers include sudden spikes in user traffic, retry inflation, or deploying a massive model for a task that only requires a small one.' },
            { question: 'How do you avoid reaching this point?', answer: 'Through aggressive prompt optimization, semantic caching, and dynamically routing requests to smaller models during peak load.' }
        ],
        relatedTerms: ['margin-engineering', 'retry-inflation', 'aueb-framework'],
        tier: 'pillar'
    },
    {
        slug: 'complexity-tax',
        title: 'The Complexity Tax',
        category: 'Richard Ewing Frameworks',
        definition: 'The compounding drag on engineering velocity caused by maintaining overly intricate architectures, excessive microservices, or sprawling dependencies. It represents the time spent fighting the system rather than building features. Read more about [The Complexity Tax](/concepts/complexity-tax).',
        whyItMatters: 'Teams often choose complex architectures for theoretical scale, unintentionally slowing down their day-to-day development. The complexity tax quantifies this loss of speed.',
        howToApply: 'Measure the time it takes for a new engineer to ship their first feature, and track the ratio of maintenance work to new feature development. Simplify the architecture when the tax becomes unbearable.',
        whoUsesIt: 'Engineering Managers, Staff Engineers, CTOs',
        faqs: [
            { question: 'Is all complexity bad?', answer: 'No. Essential complexity is required to solve hard problems. Accidental complexity - caused by over-engineering - is what generates the tax.' },
            { question: 'How do you reduce the complexity tax?', answer: 'By consolidating services, standardizing tech stacks, and aggressively deprecating legacy systems.' }
        ],
        relatedTerms: ['product-debt-index', 'evergreen-ratio', 'ev-se-framework'],
        tier: 'pillar'
    },
    {
        slug: 'evergreen-ratio',
        title: 'The Evergreen Ratio',
        category: 'Richard Ewing Frameworks',
        definition: 'A metric comparing the volume of code or documentation that requires active maintenance against the volume that remains valid indefinitely. It measures the sustainability of a knowledge base or codebase. Read more about [The Evergreen Ratio](/concepts/evergreen-ratio).',
        whyItMatters: 'Systems with a poor evergreen ratio require constant manual updating, draining resources. A high ratio indicates a stable, resilient system that scales without proportional maintenance overhead.',
        howToApply: 'Audit repositories and documentation. Identify components that break frequently due to external changes. Refactor these areas to rely on stable interfaces, pushing the ratio higher.',
        whoUsesIt: 'Technical Writers, DevRel, SREs',
        faqs: [
            { question: 'What constitutes evergreen content?', answer: 'Core architectural principles, stable API contracts, and foundational algorithms that rarely change.' },
            { question: 'How does AI affect the evergreen ratio?', answer: 'AI generated code can lower the ratio if it introduces brittle, undocumented patterns that humans must later maintain.' }
        ],
        relatedTerms: ['complexity-tax', 'product-debt-index', 'aper-metric'],
        tier: 'pillar'
    },
    {
        slug: 'four-tiers-of-autonomy',
        title: 'Four Tiers of Autonomy',
        category: 'Richard Ewing Frameworks',
        definition: 'A classification system for AI agents ranging from Tier 1 (Human-driven, AI-assisted) to Tier 4 (Fully autonomous execution with self-correction). It provides a vocabulary for defining system capabilities and safety requirements. Read more about [Four Tiers of Autonomy](/concepts/four-tiers-of-autonomy).',
        whyItMatters: 'Without a shared classification, stakeholders misalign on what an AI feature is supposed to do. Defining the tier clarifies both technical requirements and legal liability.',
        howToApply: 'Assign a specific autonomy tier to every AI project during the scoping phase. Ensure the governance, logging, and evaluation standards match the requirements of that specific tier.',
        whoUsesIt: 'Product Managers, AI Architects, Governance Boards',
        faqs: [
            { question: 'What defines Tier 3?', answer: 'Tier 3 systems can execute complex workflows and make intermediate decisions, but require human approval before finalizing high-impact actions.' },
            { question: 'Are Tier 4 systems currently safe for production?', answer: 'Only in highly constrained environments with strict EAAP boundaries and low liability consequences.' }
        ],
        relatedTerms: ['ai-liability-gradient', 'mcp-governance', 'eaap-protocol'],
        tier: 'pillar'
    },
    {
        slug: 'double-diamond-career-trajectory',
        title: 'Double Diamond Career Trajectory',
        category: 'Richard Ewing Frameworks',
        definition: 'A framework modeling the modern engineering career path, visualizing the oscillation between broad exploration of new technologies and deep specialization in core domains. Read more about [Double Diamond Career Trajectory](/concepts/double-diamond-career-trajectory).',
        whyItMatters: 'The rapid pace of AI advancement has broken traditional linear career paths. This model helps engineers navigate when to generalize and when to specialize to maintain market relevance.',
        howToApply: 'Use the framework during performance reviews and career planning. Encourage engineers to expand their context (diverge) before committing to a new area of technical mastery (converge).',
        whoUsesIt: 'Engineering Managers, Mentors, Individual Contributors',
        faqs: [
            { question: 'What is the divergence phase?', answer: 'A period of learning new paradigms, such as shifting from traditional backend engineering to studying LLM orchestration.' },
            { question: 'Why is it a double diamond?', answer: 'Because careers now require multiple cycles of unlearning and relearning, rather than a single path to mastery.' }
        ],
        relatedTerms: ['aper-metric', 'evergreen-ratio', 'complexity-tax'],
        tier: 'pillar'
    },
    {
        slug: 'ai-finops',
        title: 'Feature-Level AI FinOps',
        category: 'AI & Machine Learning',
        definition: 'The granular tracking and optimization of AI computing costs at the level of individual product features, rather than aggregate cloud spend. It maps token usage and inference latency directly to business outcomes. Read more about [Feature-Level AI FinOps](/concepts/ai-finops).',
        whyItMatters: 'Aggregate bills hide inefficient models. By tracking costs at the feature level, teams can identify which specific capabilities are eroding margins and optimize them directly.',
        howToApply: 'Implement tagging strategies in your LLM gateways. Route all inference calls through a proxy that logs token consumption against specific feature IDs and user sessions.',
        whoUsesIt: 'FinOps Practitioners, Backend Engineers, Product Managers',
        faqs: [
            { question: 'How is this different from traditional cloud FinOps?', answer: 'Traditional FinOps looks at server uptime and storage. AI FinOps tracks highly variable, probabilistic API calls where a single bad prompt can spike costs.' },
            { question: 'What tools enable feature-level tracking?', answer: 'LLM observability platforms like Helicone or LangSmith, combined with internal proxy layers.' }
        ],
        relatedTerms: ['ai-unit-economics', 'aueb-framework', 'margin-engineering'],
        tier: 'standard'
    },
    {
        slug: 'ai-unit-economics',
        title: 'AI Unit Economics',
        category: 'AI & Machine Learning',
        definition: 'The financial calculation comparing the direct variable cost of an AI operation against the value it delivers. It requires understanding token pricing, compute overhead, and the unreliability tax. Read more about [AI Unit Economics](/concepts/ai-unit-economics).',
        whyItMatters: 'Many AI startups and internal tools fail because they sell AI capabilities for less than the compute cost to run them. Positive unit economics are mandatory for survival.',
        howToApply: 'Before launching, calculate the exact cost of inference for the expected payload size. Ensure the pricing model or internal cost allocation covers this base cost with a healthy margin.',
        whoUsesIt: 'Founders, Product Managers, FinOps Analysts',
        faqs: [
            { question: 'Why are AI unit economics so hard to predict?', answer: 'Because user inputs vary wildly. A user might submit a massive document that costs 10x more to process than the average request.' },
            { question: 'How do you improve AI unit economics?', answer: 'Implement semantic caching to avoid redundant generation, and use smaller, task-specific models instead of general-purpose giants.' }
        ],
        relatedTerms: ['aueb-framework', 'ai-finops', 'ai-margin-collapse-point'],
        tier: 'standard'
    },
    {
        slug: 'ai-economist',
        title: 'The AI Economist',
        category: 'Richard Ewing Frameworks',
        definition: 'A strategic persona and framework dedicated to balancing the capabilities of artificial intelligence against the harsh realities of compute costs, operational margins, and enterprise value. Read more about [The AI Economist](/concepts/ai-economist).',
        whyItMatters: 'Engineering teams often build what is technically possible without considering financial viability. The AI Economist perspective ensures that technical innovation serves sustainable business growth.',
        howToApply: 'Adopt the AI Economist mindset during planning. Demand proof of positive task-level ROI before approving new agentic workflows or expensive model integrations.',
        whoUsesIt: 'CTOs, AI Strategists, Enterprise Architects',
        faqs: [
            { question: 'What is the primary goal of the AI Economist?', answer: 'To maximize the Enterprise Value Scenario Engine (EV-SE) by ensuring every AI deployment improves margins rather than degrading them.' },
            { question: 'Is this a distinct job title?', answer: 'It is emerging as a distinct role, but currently operates as a necessary cross-functional perspective shared by technical and financial leaders.' }
        ],
        relatedTerms: ['margin-engineering', 'ev-se-framework', 'agentic-roi'],
        tier: 'pillar'
    }
];
