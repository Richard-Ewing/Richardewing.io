import { GlossaryTerm } from '../types';

// =============================================================================
// SIXTEENTH PASS: More terms  -  Architecture, Pricing, AI expansion
// =============================================================================

export const sixteenthPassTerms: GlossaryTerm[] = [
    // Architecture Patterns (+3)
    {
        title: 'Event-Driven Architecture',
        slug: 'event-driven-architecture', tier: 'pillar',
        definition: `Event-driven architecture (EDA) is a software design pattern where services communicate by producing and consuming events  -  asynchronous messages that represent something that happened (e.g., "OrderPlaced", "UserRegistered").\n\n**Components:**\n- **Event producers:** Services that emit events when state changes\n- **Event broker:** Message infrastructure (Kafka, RabbitMQ, AWS EventBridge)\n- **Event consumers:** Services that react to events\n- **Event store:** Persistent log of all events (event sourcing)\n\n**Benefits:** Decoupled services (producers don't know about consumers), natural audit log, easy to add new consumers, horizontal scalability.\n\n**Challenges:** Eventual consistency (not immediate), debugging distributed flows, ordering guarantees, event schema evolution.\n\nEDA is increasingly used with AI systems: model predictions trigger events, AI results are consumed asynchronously, and event stores provide training data.`,
        whyItMatters: 'Event-driven architecture enables scale but creates orchestration complexity. Understanding when EDA is worth the trade-off prevents both under-architecting (monolith bottlenecks) and over-architecting (distributed complexity).',
        category: 'Architecture Patterns',
        relatedTerms: ['microservices-communication', 'event-sourcing', 'domain-driven-design'],
        faqs: [{ question: 'When should I use event-driven architecture?', answer: 'When you need decoupled services, async processing, or an audit trail of all changes. Not ideal for request-response patterns that need immediate consistency. Start with a monolith, evolve to EDA when scale demands it.' }],
    },
    {
        title: 'CQRS',
        slug: 'cqrs',
        definition: `CQRS (Command Query Responsibility Segregation) is an architecture pattern that separates read operations (queries) from write operations (commands) into different models, data stores, or services.\n\n**Traditional approach:** Single model handles both reads and writes (simple but creates contention at scale).\n\n**CQRS approach:**\n- **Command side:** Handles writes, validates business rules, emits events\n- **Query side:** Handles reads, optimized for specific view patterns, denormalized data\n\n**When CQRS helps:**\n- Read/write ratios are heavily skewed (99% reads, 1% writes)\n- Read and write models have different optimization needs\n- You need different views of the same data for different consumers\n- Combined with event sourcing for complete audit trails\n\n**When CQRS hurts:** Simple CRUD applications, small teams, early-stage products where the complexity isn't justified.`,
        whyItMatters: 'CQRS can dramatically improve read performance at scale but adds significant complexity. Misapplying CQRS creates architecture debt without corresponding benefits.',
        category: 'Architecture Patterns',
        relatedTerms: ['event-driven-architecture', 'event-sourcing', 'domain-driven-design'],
        faqs: [{ question: 'Do I need CQRS?', answer: 'Probably not. CQRS is useful at scale when read and write patterns diverge significantly. For most applications, a well-designed traditional architecture is simpler and sufficient.' }],
    },
    {
        title: 'Strangler Fig Pattern',
        slug: 'strangler-fig-pattern',
        definition: `The Strangler Fig pattern is a migration strategy for incrementally replacing a legacy system with a modern one  -  without a risky "big bang" rewrite. Named after strangler fig trees that grow around and eventually replace their host tree.\n\n**How it works:**\n1. **Identify:** Choose a specific capability to migrate\n2. **Build:** Create the new implementation alongside the old\n3. **Route:** Direct traffic to the new implementation (via API gateway, proxy, or feature flag)\n4. **Verify:** Confirm the new implementation works correctly\n5. **Remove:** Decommission the old implementation\n6. **Repeat:** Move to the next capability\n\n**The alternative  -  "big bang" rewrite  -  fails 70% of the time.** Strangler fig succeeds because it's incremental, reversible, and delivers value continuously.\n\nThis pattern is the recommended approach for most legacy system modernizations, including mainframe-to-cloud migrations.`,
        whyItMatters: 'The Strangler Fig pattern is the safest way to pay down massive architecture debt. It replaces "we need to rewrite everything" (which fails) with "we incrementally replace piece by piece" (which succeeds).',
        category: 'Architecture Patterns',
        relatedTerms: ['refactoring', 'modernization', 'legacy-code', 'architecture-debt'],
        faqs: [{ question: 'How long does a strangler fig migration take?', answer: '6 months to 3 years depending on system complexity. The key advantage: you deliver value continuously during migration, unlike a big-bang rewrite where nothing ships for months.' }],
    },

    // Pricing & Packaging (+2)
    {
        title: 'Usage-Based Pricing',
        slug: 'usage-based-pricing',
        definition: `Usage-based pricing (UBP) is a monetization model where customers pay based on how much they use the product  -  API calls, data volume, compute hours, active users, or transactions  -  rather than a fixed subscription fee.\n\n**Examples:**\n- **AWS:** Pay per compute hour, GB stored, API call\n- **Twilio:** Pay per SMS, voice minute, API request\n- **Snowflake:** Pay per compute credit consumed\n- **OpenAI:** Pay per token processed\n\n**Advantages:** Low barrier to entry (start free, pay as you grow), natural expansion revenue (usage grows with customer success), and fair pricing (customers pay for what they use).\n\n**Challenges:** Revenue unpredictability (usage fluctuates monthly), complex billing infrastructure, and margin management (your COGS scales with customer usage).\n\nUsage-based pricing is becoming the default for AI products where inference costs are the dominant COGS.`,
        whyItMatters: 'Usage-based pricing aligns incentives but creates margin challenges. When AI inference is the COGS, every additional unit of usage costs real money  -  unlike traditional SaaS where marginal cost is near zero.',
        category: 'Pricing & Packaging',
        relatedTerms: ['unit-economics', 'ai-cogs', 'gross-margin-preservation', 'net-revenue-retention'],
        faqs: [{ question: 'Is usage-based pricing better than subscriptions?', answer: 'Depends on the product. UBP works when value correlates with usage (API products, infrastructure). Subscriptions work when value is access-based (content, collaboration). Many companies use hybrid models.' }],
    },
    {
        title: 'Freemium Model',
        slug: 'freemium-model',
        definition: `Freemium is a pricing strategy where a basic product is offered for free, with premium features or capabilities available for a paid upgrade. The free tier serves as the top of the acquisition funnel.\n\n**Freemium economics:**\n- **Conversion rate:** 2-5% of free users convert to paid (industry average)\n- **CAC advantage:** Free users acquire other free users (viral growth)\n- **Cost risk:** Free users consume resources without generating revenue\n\n**Freemium design principles:**\n1. Free tier must be genuinely useful (not a stripped-down teaser)\n2. Upgrade trigger should be natural (usage limits, team features, advanced capabilities)\n3. Free tier should demonstrate value that justifies the paid price\n4. Monitor free-to-paid conversion funnel obsessively\n\n**Examples:** Slack (free up to 10K messages), Spotify (free with ads), Figma (free for 3 projects), GitHub (free for public repos). Richard Ewing's site uses freemium: PDI, APER, AUEB calculators are free → advisory is paid.`,
        whyItMatters: 'Freemium is the dominant B2B acquisition model. Understanding freemium economics  -  especially CAC vs. COGS of free users  -  determines whether free tiers are growth engines or money pits.',
        category: 'Pricing & Packaging',
        relatedTerms: ['usage-based-pricing', 'product-led-growth', 'unit-economics', 'customer-acquisition-cost'],
        faqs: [{ question: 'What is a good freemium conversion rate?', answer: '2-5% for consumer products, 5-15% for B2B products. Slack converts at ~30% (exceptional). If your conversion rate is below 2%, your free tier is either too generous or your paid tier doesn\'t add enough value.' }],
    },

    // More AI Terms (+5)
    {
        title: 'AI Inference',
        slug: 'ai-inference',
        definition: `AI inference is the process of running a trained machine learning model to generate predictions, classifications, or outputs from new input data. Unlike training (which teaches the model), inference is the production use  -  every ChatGPT response, every recommendation, every fraud detection is an inference.\n\n**Inference economics:**\n- **Cost per inference:** GPT-4: $0.03-0.12 per 1K tokens. GPT-3.5: $0.002 per 1K tokens. Self-hosted open models: $0.0001-0.001.\n- **Latency:** Real-time inference: <100ms (fraud detection). Batch inference: minutes-hours (recommendations).\n- **Hardware:** GPUs (NVIDIA A100, H100), TPUs (Google), or CPU (for simpler models).\n\n**Inference optimization:**\n- Model quantization (reduce precision: FP32 → INT8)\n- Model distillation (train smaller model to mimic larger)\n- Caching (store common responses)\n- Batching (process multiple requests together)`,
        whyItMatters: 'Inference cost is the dominant variable in AI AI economics. Every AI feature is an ongoing inference expense. Understanding inference economics prevents margin collapse.',
        category: 'AI & Machine Learning',
        relatedTerms: ['ai-cogs', 'large-language-model', 'transformer-architecture', 'token-ai'],
        faqs: [{ question: 'How much does AI inference cost?', answer: 'Depends on model size. GPT-4: ~$0.03-0.12/1K tokens. Open models self-hosted: ~$0.0001-0.001/1K tokens. The 30-100x cost difference explains why many companies are moving to open-source models for production.' }],
    },
    {
        title: 'Synthetic Data',
        slug: 'synthetic-data',
        definition: `Synthetic data is artificially generated data that mimics the statistical properties of real data without containing actual user information. It's created by generative models trained on real datasets.\n\n**Use cases:**\n- **Privacy:** Train models without exposing personal data (GDPR, HIPAA)\n- **Data augmentation:** Generate more training examples for rare events (fraud, disease)\n- **Testing:** Create realistic test datasets without production data risks\n- **Bias reduction:** Generate balanced datasets to reduce model bias\n\n**Quality measures:** Fidelity (does it match real data distributions?), Privacy (can original data be reconstructed?), Utility (do models trained on synthetic data perform well?).\n\n**Tools:** Mostly AI, Gretel, Tonic, CTGAN, and LLM-generated synthetic datasets.\n\nGartner predicts that by 2030, synthetic data will overtake real data in AI model training.`,
        whyItMatters: 'Synthetic data solves the data privacy vs. AI training paradox. Companies that master synthetic data generation can train better models faster without the legal and ethical risks of real user data.',
        category: 'AI & Machine Learning',
        relatedTerms: ['ai-inference', 'model-drift', 'feature-store', 'embeddings'],
        faqs: [{ question: 'Is synthetic data good enough to train AI models?', answer: 'For many use cases: yes. Models trained on high-quality synthetic data achieve 80-95% of the performance of real-data-trained models. For privacy-sensitive applications, the trade-off is worth it.' }],
    },
    {
        title: 'AI Alignment',
        slug: 'ai-alignment',
        definition: `AI alignment is the field of ensuring that AI systems behave in accordance with human values, intentions, and goals. It addresses the problem: how do you make sure an AI does what you want it to do  -  not just what you told it to do?\n\n**Alignment challenges:**\n- **Specification gaming:** AI finds loopholes in reward functions (optimizing the metric, not the goal)\n- **Goal misalignment:** AI pursues sub-goals that conflict with human intentions\n- **Deceptive alignment:** AI appears aligned during testing but behaves differently in deployment\n- **Value learning:** How to infer human values from behavior (inverse reinforcement learning)\n\n**Practical alignment in enterprise AI:**\n- RLHF (Reinforcement Learning from Human Feedback)  -  the method behind ChatGPT\n- Constitutional AI  -  giving AI explicit rules to follow\n- Red teaming  -  adversarial testing for dangerous behaviors\n- EAAP Protocol  -  action admissibility governance for AI agents`,
        whyItMatters: 'AI alignment is the fundamental challenge of building safe AI systems. For product leaders, practical alignment means ensuring AI features do what customers expect without harmful side effects.',
        category: 'AI & Machine Learning',
        relatedTerms: ['agentic-governance', 'ai-red-teaming', 'ai-guardrails', 'eaap-protocol'],
        faqs: [{ question: 'How does AI alignment differ from AI safety?', answer: 'Alignment is about making AI do what humans want (intent). Safety is about preventing AI from causing harm (outcome). Alignment is a subset of safety  -  an aligned AI is naturally safer, but safety includes robustness, security, and reliability beyond alignment.' }],
    },
    {
        title: 'Mixture of Experts (MoE)',
        slug: 'mixture-of-experts',
        definition: `Mixture of Experts (MoE) is a neural network architecture where the model is divided into multiple specialized "expert" sub-networks, and a gating mechanism routes each input to the most relevant experts. Only a subset of experts activate per query.\n\n**How MoE works:**\n1. Input arrives at the gating network\n2. Gate selects top-K experts (typically 2 of 8-64 total)\n3. Only selected experts process the input\n4. Outputs are weighted and combined\n\n**Economics:** MoE models have the knowledge capacity of a large model but the inference cost of a smaller one. GPT-4 is rumored to use MoE with 8 experts, activating 2 per query.\n\n**Mixtral (Mistral's MoE):** 8 experts, 2 active per token, achieves GPT-3.5 performance at a fraction of the cost.\n\nMoE is the architecture pattern that makes large AI models economically viable.`,
        whyItMatters: 'MoE architecture is how the industry is solving the AI cost problem. Understanding MoE helps product leaders evaluate whether "bigger model = better product" is actually true for their use case.',
        category: 'AI & Machine Learning',
        relatedTerms: ['transformer-architecture', 'ai-inference', 'large-language-model', 'ai-cogs'],
        faqs: [{ question: 'Why is Mixture of Experts important?', answer: 'MoE makes large models affordable. A 1.8 trillion parameter MoE model can run at the cost of a 200B model because only a fraction activates per query. It\'s the key architecture behind GPT-4 and Mixtral.' }],
    },
    {
        title: 'AI Orchestration',
        slug: 'ai-orchestration',
        definition: `AI orchestration is the coordination layer that manages how multiple AI models, tools, and data sources work together to complete complex tasks. It's the "conductor" that decides which AI component handles each step.\n\n**Orchestration patterns:**\n- **Sequential chain:** Model A → Model B → Model C (LangChain)\n- **Router:** Gate model decides which specialist model handles the query\n- **Parallel fan-out:** Send to multiple models, aggregate results\n- **Agent loop:** Model plans → acts → observes → repeats until task complete\n\n**Orchestration platforms:** LangChain, LlamaIndex, Semantic Kernel (Microsoft), CrewAI, AutoGen.\n\n**The orchestration cost problem:** Each orchestration step adds an LLM call. A 5-step agent workflow costs 5x a single-model response. This is why Richard Ewing's Orchestration Debt framework matters  -  orchestration complexity compounds cost exponentially.`,
        whyItMatters: 'AI orchestration is where architecture meets economics. Poor orchestration design multiplies AI COGS unnecessarily. Understanding orchestration patterns helps engineering leaders build AI systems that are powerful AND affordable.',
        category: 'AI & Machine Learning',
        relatedTerms: ['orchestration-debt', 'agentic-workflow', 'langchain', 'crewai', 'ai-cogs'],
        faqs: [{ question: 'Which AI orchestration framework should I use?', answer: 'LangChain for general-purpose chains and RAG. CrewAI for multi-agent coordination. LlamaIndex for data-heavy RAG applications. For simple use cases, direct API calls without a framework are often the best choice.' }],
    },
];
