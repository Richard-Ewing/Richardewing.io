import { GlossaryTerm } from '../types';

export const semanticExpansion2026: GlossaryTerm[] = [
    // 1. AI & Machine Learning
    {
        title: 'Small Language Models (SLMs)',
        slug: 'small-language-models',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Small Language Models (SLMs) are compact neural networks designed to perform language tasks locally, on-edge, or with minimal compute resources compared to traditional Large Language Models (LLMs).\n\nUnlike massive models (GPT-4, Claude 3 Opus) which pass 1 Trillion parameters, SLMs typically range from 1B to 8B parameters (e.g., Llama 3 8B, Phi-3, Gemma, Mistral). They sacrifice broad general knowledge but maintain extremely high reasoning capabilities.\n\n**Why they matter in 2025/2026:** SLMs solve the AI margin collapse problem. Because they are 10-50x cheaper to run, organizations are aggressively routing routine tasks to SLMs while reserving expensive LLMs only for highly complex cognitive routing.`,
        whyItMatters: `Transitioning high-volume API calls from LLMs to SLMs is the most effective way to improve AI Unit Economics and correct negative software margins.`,
        faqs: [{ question: 'What is the difference between an LLM and an SLM?', answer: 'SLMs are an order of magnitude smaller (1B-8B parameters vs 100B+). They run faster, cheaper, and can be deployed privately on local edge devices, but possess less broad rote knowledge.' }],
        relatedTerms: ['large-language-model', 'ai-cogs', 'prompt-engineering']
    },
    {
        title: 'Open Weights',
        slug: 'open-weights',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Open Weights refers to AI models where the trained parameters (weights) are made publicly available for download and execution, but the underlying training data and training code are kept proprietary.\n\nIn 2025/2026, the technology industry shifted away from calling models like Llama or Mistral "Open Source" (which legally requires the training data to be public per the OSI definition) and adopted "Open Weights" as the technically accurate term.\n\nOpen weights democratize AI inference, allowing any company to download, self-host, and fine-tune frontier-class models securely within their own VPCs without sending sensitive data to third-party endpoints.`,
        whyItMatters: `Open weights enable enterprise AI adoption by permanently solving the data privacy and vendor lock-in problems associated with proprietary closed models (like OpenAI).`,
        faqs: [{ question: 'Is Llama 3 open source?', answer: 'Technically, no. It is an "Open Weights" model. You can run and fine-tune the model freely, but Meta does not provide the exact dataset or code used to originally train it.' }],
        relatedTerms: ['large-language-model', 'llm-fine-tuning', 'zero-trust']
    },
    {
        title: 'Multimodal AI',
        slug: 'multimodal-ai',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Multimodal AI systems are neural networks capable of processing, understanding, and generating multiple data types - or "modalities" - simultaneously, such as text, images, native audio, and continuous video streams.\n\nEarly AI required distinct models for different tasks (e.g., Whisper for audio, GPT-3 for text). True multimodal models (like Gemini 1.5 Pro and GPT-4o) possess a shared embedding space, allowing them to reason across natively mixed inputs (e.g., "watch this 10-minute video and output the bounding box coordinates for every red car").\n\nThis fundamentally expands AI capabilities from "chatbots" to autonomous real-time visual and auditory agents.`,
        whyItMatters: `Multimodality converts previously "dark data" (meeting recordings, security footage, complex diagrams) into indexable, queryable, and reasoning-capable assets.`,
        faqs: [{ question: 'What makes an AI multimodal?', answer: 'The ability to deeply encode and reason across multiple data formats (audio, text, video, image) simultaneously within the exact same neural architecture.' }],
        relatedTerms: ['large-language-model', 'ai-agent', 'rag-architecture']
    },
    
    // 2. Cloud & Infrastructure
    {
        title: 'Serverless GPUs',
        slug: 'serverless-gpus',
        tier: 'pillar',
        category: 'Cloud & Infrastructure',
        definition: `Serverless GPUs are a cloud compute execution model where organizations run artificial intelligence and machine learning workloads on graphics processing units (GPUs) without provisioning, managing, or scaling the underlying servers.\n\nTraditional GPU clusters require immense upfront commitments, dedicated DevOps management, and suffer from low utilization when idle. Serverless GPU providers (like Modal, Baseten, RunPod) scale compute down to zero instantaneously and bill purely by the millisecond of execution time.\n\nThis architecture is the infrastructure prerequisite for cost-effectively hosting custom Open Weight models or independent AI agents.`,
        whyItMatters: `Serverless GPUs eliminate the massive fixed infrastructure costs of AI deployment, transforming AI compute from a heavy capital expenditure (CapEx) into a variable, highly efficient operational expense (OpEx).`,
        faqs: [{ question: 'Why use Serverless GPUs over AWS EC2?', answer: 'With EC2, you pay for the GPU whether you are running inference or not. With Serverless GPUs, you are billed by the millisecond during request execution, and it scales to zero when idle.' }],
        relatedTerms: ['finops', 'serverless-computing', 'platform-engineering']
    },
    {
        title: 'Cloud Repatriation',
        slug: 'cloud-repatriation',
        tier: 'pillar',
        category: 'Cloud & Infrastructure',
        definition: `Cloud Repatriation is the strategic IT trend of migrating workloads from public cloud environments (AWS, GCP, Azure) back to on-premises data centers or bare-metal colocation facilities.\n\nDriven exponentially in 2025/2026 by the soaring costs of public cloud infrastructure, SaaS margin compression, and exorbitant hardware markups for AI GPU compute, companies (famously popularized by 37signals/Basecamp) move predictable, constant-load architectures off the cloud to collapse their infrastructure bills by 60-80%.\n\nCloud repatriation is rarely an all-or-nothing move; modern hybrid approaches leave spiky, variable workloads in the cloud while pulling high-volume, static database workloads to bare metal.`,
        whyItMatters: `As SaaS multiples drop and profitability becomes the north star metric, cloud repatriation represents the most dramatic lever a CTO can pull to instantly rescue software gross margins.`,
        faqs: [{ question: 'Why are companies leaving the cloud?', answer: 'The cloud charges a premium for elasticity. If your workload size is predictable and constant, you are paying a 300%+ markup for flexibility you do not need.' }],
        relatedTerms: ['finops', 'ai-finops', 'saas-valuation']
    },
    {
        title: 'WebAssembly (Wasm)',
        slug: 'webassembly',
        tier: 'pillar',
        category: 'Cloud & Infrastructure',
        definition: `WebAssembly (Wasm) is a binary instruction format that allows code written in languages like Rust, C++, and Go to run at near-native speed across different environments, from web browsers to cloud edges and serverless backends.\n\nBy 2025/2026, Wasm expanded far beyond the browser. On the server side, Wasm modules effectively act as ultra-lightweight containers with start times in the single milliseconds and a highly restrictive default security sandbox.\n\nIt is rapidly replacing Docker containers for localized edge compute functions and serverless execution because of its unparalleled speed and cross-platform determinism.`,
        whyItMatters: `Wasm provides the highest performance per dollar capability in edge infrastructure, allowing engineers to write severe business logic once and execute it anywhere safely.`,
        faqs: [{ question: 'Is WebAssembly replacing Docker?', answer: 'For micro-functions and edge compute, yes. Wasm cold starts in microseconds, whereas Docker containers take seconds. However, Docker remains dominant for full heavy application stacks.' }],
        relatedTerms: ['serverless-computing', 'microservices']
    },

    // 3. Data & Analytics
    {
        title: 'Semantic Layer',
        slug: 'semantic-layer',
        tier: 'pillar',
        category: 'Data & Analytics',
        definition: `A Semantic Layer is an architectural abstraction that sits between raw database storage (data warehouses/lakehouses) and data consumers (BI tools, AI agents). It centralizes all business logic, metrics definitions, and access governance.\n\nInstead of defining "Revenue" differently in Tableau, looker, and a custom Python script, the Semantic Layer defines "Revenue" once via code. Any downstream tool or AI agent querying that metric receives the exact same mathematically deterministic answer.\n\nIn the era of Agentic AI, the Semantic Layer is non-negotiable. Without it, autonomous LLMs querying direct SQL will constantly hallucinate the wrong business metrics.`,
        whyItMatters: `The Semantic Layer provides the single source of truth for an entire enterprise. It prevents AI agents from generating contradictory answers to basic financial questions.`,
        faqs: [{ question: 'Why do we need a semantic layer?', answer: 'To ensure consistency. Without it, 5 different teams pull "Active Users" 5 different ways, leading to governance chaos and executive mistrust in data.' }],
        relatedTerms: ['data-mesh', 'data-lakehouse', 'agentic-governance']
    },
    {
        title: 'Graph RAG',
        slug: 'graph-rag',
        tier: 'pillar',
        category: 'Data & Analytics',
        definition: `Graph RAG (Retrieval-Augmented Generation) is an advanced AI architecture that integrates Knowledge Graphs with traditional vector databases to drastically improve the reasoning capabilities of Large Language Models.\n\nStandard RAG searches for semantic text similarity. The failure point? It cannot properly connect disjointed concepts across isolated documents. Graph RAG explicitly maps entities (People, Products, Locations) and their relationships (Works For, Depends On) as interconnected nodes.\n\nWhen a model queries Graph RAG, it does not just retrieve a paragraph; it retrieves the entire structural relationship map of the domain, eliminating widespread multi-hop hallucination.`,
        whyItMatters: `Graph RAG fixes the massive reliability and hallucination issues found in baseline Vector RAG, making enterprise AI safe for complex, high-stakes decision routing.`,
        faqs: [{ question: 'How is Graph RAG different from regular RAG?', answer: 'Regular RAG finds similar text snippets. Graph RAG understands structural relationships, allowing the model to answer "Who is the manager of the person who approved this PR?"' }],
        relatedTerms: ['rag-architecture', 'vector-database', 'large-language-model']
    },

    // 4. Security & Compliance
    {
        title: 'DSPM (Data Security Posture Management)',
        slug: 'dspm',
        tier: 'pillar',
        category: 'Security & Compliance',
        definition: `Data Security Posture Management (DSPM) is a cybersecurity framework focused on identifying, mapping, classifying, and protecting sensitive data regardless of where it resides in multicloud and continuous delivery environments.\n\nTraditional security focuses on locking the perimeter (servers, endpoints). DSPM focuses entirely on the data layer itself. It automatically scans AWS, Snowflake, and hidden object storage to uncover "Shadow Data" (untracked PII, secrets, or financial records) and enforces access governance.\n\nIn 2025/2026, DSPM became mandatory due to AI models aggressively ingesting data lakes; if sensitive data is not properly classified by a DSPM, the AI will unintentionally expose it.`,
        whyItMatters: `You cannot secure what you cannot see. DSPM is the required security prerequisite before organizations can safely allow AI agents to navigate their internal corporate data architectures.`,
        faqs: [{ question: 'DSPM vs CSPM?', answer: 'CSPM (Cloud Security) looks for misconfigured servers and open ports. DSPM (Data Security) looks specifically at the actual sensitive data inside those databases.' }],
        relatedTerms: ['zero-trust', 'shadow-ai', 'data-mesh']
    },
    {
        title: 'SBOM (Software Bill of Materials)',
        slug: 'sbom',
        tier: 'pillar',
        category: 'Security & Compliance',
        definition: `A Software Bill of Materials (SBOM) is a comprehensive, machine-readable inventory detailing every third-party component, open-source library, and exact dependency version packed into a software application.\n\nTriggered by massive supply chain attacks (like the Log4j crisis) and mandated by recent federal executive orders, producing a cryptographic SBOM at every build step is now standard compliance for enterprise B2B sales.\n\nWhen a zero-day vulnerability breaks out globally, an SBOM allows organizations to determine if they are exposed in minutes rather than months of manual code auditing.`,
        whyItMatters: `Without an SBOM, software supply chains are opaque. Generating continuous SBOMs prevents catastrophic legal and technical debt during major security audits.`,
        faqs: [{ question: 'Is an SBOM required?', answer: 'Yes, if you sell software to the US Federal Government, or to any enterprise that falls under strict modern compliance standards.' }],
        relatedTerms: ['zero-trust', 'platform-engineering', 'infrastructure-as-code']
    },
    {
        title: 'Post-Quantum Cryptography',
        slug: 'post-quantum-cryptography',
        tier: 'pillar',
        category: 'Security & Compliance',
        definition: `Post-Quantum Cryptography (PQC) refers to cryptographic algorithms designed to be entirely secure against an attack by a quantum computer.\n\nStandard encryption algorithms widely used today (like RSA and ECC) rely on mathematical complexities that are theoretically impossible for classical computers to break, but trivial for a sufficiently powerful quantum computer (via Shor's algorithm).\n\nThe "Harvest Now, Decrypt Later" threat model pushed the NIST to finalize PQC standards in late 2024. In 2025/2026, Fortune 500s are undergoing massive, mandatory multi-year architecture overhauls to rip out legacy RSA in favor of quantum-safe lattice-based cryptography.`,
        whyItMatters: `Enterprises that do not begin migrating their infrastructure to Post-Quantum cryptographic standards face existential catastrophic exposure when cryptographically relevant quantum computers come online.`,
        faqs: [{ question: 'Are quantum computers breaking encryption today?', answer: 'No public quantum computer can break RSA yet. However, hostile state actors are actively stealing encrypted data today so they can instantly decrypt it using quantum computers in the near future.' }],
        relatedTerms: ['zero-trust', 'infrastructure-as-code']
    },

    // 5. Product Management
    {
        title: 'AI Product Management',
        slug: 'ai-product-management',
        tier: 'pillar',
        category: 'Product Management',
        definition: `AI Product Management is a specialized discipline of PM focused on building, scaling, and maintaining products explicitly powered by machine learning, LLMs, or autonomous agents.\n\nTraditional Product Management focuses on deterministic behaviors: "If the user clicks this, X happens." AI Product Managers must operate probabilistically. They manage hallucination rates, precision vs recall tradeoffs, AI Unit Economics (AI COGS), non-deterministic testing, and specific prompt boundaries.\n\nIn 2025/2026, the transition from SaaS PM to AI PM demands a hard pivot toward empirical data analytics and data-pipeline architectural comprehension.`,
        whyItMatters: `Treating an AI feature like a traditional software feature is guaranteed failure. AI Product Managers are responsible for the fragile bridge between raw model capability and actual user value.`,
        faqs: [{ question: 'Do AI Product Managers need to code?', answer: 'Not necessarily, but they must fluently understand data science concepts (training data, vectors, recall, embeddings) and the specific marginal costs of API token orchestration.' }],
        relatedTerms: ['product-led-growth', 'ai-cogs', 'prompt-engineering']
    },
    {
        title: 'Continuous Discovery',
        slug: 'continuous-discovery',
        tier: 'pillar',
        category: 'Product Management',
        definition: `Continuous Discovery is a product management framework popularized by Teresa Torres emphasizing a steady, weekly cadence of customer touchpoints executed jointly by the product trio (PM, Designer, Lead Engineer).\n\nUnlike traditional "project discovery" (which happens once at the beginning of a quarter), Continuous Discovery leverages Opportunity Solution Trees. It acknowledges that building a product is a continuous flow of risky assumptions, and those assumptions must be co-tested alongside active development rather than segmented entirely up front.\n\nThe framework prevents the accumulation of Product Debt.`,
        whyItMatters: `Continuous Discovery ensures that engineering teams do not drift. It binds developers directly to user feedback, preventing the most expensive mistake in software: building a brilliant solution to a problem no one has.`,
        faqs: [{ question: 'Who participates in Continuous Discovery?', answer: 'The "Product Trio"  -  the Product Manager, the Lead Designer, and the Lead Engineer. Engineers must be present to measure technical viability in real-time.' }],
        relatedTerms: ['product-led-growth', 'developer-experience', 'okrs']
    },

    // 6. Engineering & Architecture
    {
        title: 'MACH Architecture',
        slug: 'mach-architecture',
        tier: 'pillar',
        category: 'Engineering & Architecture',
        definition: `MACH stands for Microservices-based, API-first, Cloud-native SaaS, and Headless. It is a set of architectural principles guiding enterprise organizations to build highly modular, pluggable tech stacks.\n\n- **Microservices:** Individual pieces of business logic scaled separately.\n- **API-first:** All functionality exposed programmatically.\n- **Cloud-native:** Serverless and auto-scaling horizontally.\n- **Headless:** The frontend UI is completely decoupled from the backend logic.\n\nBy 2025/2026, MACH became the dominant modernization strategy for the enterprise eCommerce and CMS space, allowing corporations to swap out vendors (e.g., changing from Stripe to Adyen or Contentful to Sanity) without rewriting the entire core application.`,
        whyItMatters: `MACH Architecture eliminates platform lock-in and allows enterprises to continuously iterate front-end experiences independently from heavy legacy backend infrastructure.`,
        faqs: [{ question: 'What is "headless" in MACH architecture?', answer: 'It means the backend logic (processing an order) has no concept of a UI or website. It simply serves data via an API, allowing front-end teams to build custom UIs on web, mobile, or even smartwatches without touching the backend code.' }],
        relatedTerms: ['microservices', 'event-driven-architecture', 'platform-engineering']
    },
    {
        title: 'eBPF',
        slug: 'ebpf',
        tier: 'pillar',
        category: 'Engineering & Architecture',
        definition: `eBPF (Extended Berkeley Packet Filter) is a revolutionary Linux kernel technology that allows developers to run sandboxed, high-performance programs directly inside the operating system kernel without changing kernel source code or loading vulnerable modules.\n\neBPF completely dominates the 2025/2026 cloud-native landscape. Because eBPF sits at the kernel level, it observes every network packet, system call, and execution metric in a massive Kubernetes cluster with near-zero performance overhead.\n\nIt is the foundational technology powering modern high-performance cloud security, container networking (Cilium), and deep system observability tools.`,
        whyItMatters: `eBPF allows deep, comprehensive system observation and security enforcement across thousands of containers without requiring engineers to inject heavy, slow sidecar proxies into their applications.`,
        faqs: [{ question: 'Why is eBPF better than traditional monitoring agents?', answer: 'Traditional agents run in the user space and require context-switches, which slow down the software. eBPF runs at the absolute lowest kernel level natively safely, achieving unprecedented visibility with almost no performance tax.' }],
        relatedTerms: ['platform-engineering', 'zero-trust', 'microservices']
    },

    // 7. Finance & Operations (FinOps)
    {
        title: 'AI FinOps',
        slug: 'ai-finops',
        tier: 'pillar',
        category: 'Finance & Operations (FinOps)',
        definition: `AI FinOps is the specialized sub-discipline of Financial Operations focused entirely on maximizing the Unit Economics, visibility, and forecasting of Artificial Intelligence and Machine Learning workloads.\n\nStandard Cloud FinOps deals with predictable EC2 instances and object storage. AI FinOps tracks extreme variability: billions of stateless token generations, vast embedding databases, RAG compute overhead, model fine-tuning jobs, and Serverless GPU spin-ups.\n\nWithout AI FinOps, high-growth AI companies rapidly succumb to the "Cost of Predictivity" - where the raw expense of LLM API calls completely degrades their software gross margins down to unsalvageable levels.`,
        whyItMatters: `Because AI API calls carry per-interaction marginal costs, deploying AI without AI FinOps directly threatens the survival and valuation of the entire organization.`,
        faqs: [{ question: 'How is AI FinOps different from general FinOps?', answer: 'It requires mapping costs to literal tokens via prompt payloads and managing the heavy capex of GPUs, rather than simply analyzing standard fixed AWS compute bills.' }],
        relatedTerms: ['finops', 'ai-cogs', 'saas-valuation']
    },

    // 8. Startup & Venture Capital
    {
        title: 'Down Round',
        slug: 'down-round',
        tier: 'pillar',
        category: 'Startup & Venture Capital',
        definition: `A down round occurs when a private company raises capital from investors at a lower pre-money valuation than the valuation established in its previous financing round.\n\nDriven by the massive zero-interest valuation hyper-inflation of 2021/2022, 2025/2026 became the hallmark era of the "Down Round." Startups that were previously valued at $1B+ (Unicorns) were forced to raise new capital at $200M-$400M valuations to survive.\n\nDown rounds trigger severe toxic anti-dilution provisions for earlier investors, aggressively wiping out the percentage ownership of common stock held by founders and employees.`,
        whyItMatters: `A down round massively dilutes engineering and product team equity, often resetting the cap table and destroying employee morale, requiring total leadership transparency to maintain team cohesion.`,
        faqs: [{ question: 'What is a cram-down?', answer: 'An extreme down round orchestrated by new or existing investors that effectively wipes out all prior common shareholder equity (founders and early employees) in order to save the company from bankruptcy.' }],
        relatedTerms: ['saas-valuation', 'burn-multiple']
    },
    {
        title: 'DPI (Distributions to Paid-In Capital)',
        slug: 'dpi',
        tier: 'pillar',
        category: 'Startup & Venture Capital',
        definition: `DPI (Distributions to Paid-In Capital) is a core private equity and venture capital metric that measures the ratio of actual, realized cash returned to Limited Partners (LPs) compared to the capital those LPs originally invested into the fund.\n\nIf LP investors gave a VC fund $100M, and the VC fund has returned $20M through IPOs and acquisitions, the DPI is 0.20x.\n\nIn 2025/2026, the entire venture capital landscape shifted furiously from TVPI (paper valuations) to DPI. High interest rates demanded that VCs prove they could return actual cash to investors instead of simply marking up illiquid SaaS valuations on a spreadsheet.`,
        whyItMatters: `The focus on DPI aggressively pressures portfolio companies towards liquidity events (M&A or IPO) and profitability, completely restricting further rounds of "growth-at-all-costs" capital.`,
        faqs: [{ question: 'What is IRR vs DPI?', answer: 'IRR measures the annualized percentage rate of return over time. DPI is simply the hard multiple of actual cash money returned into the bank accounts of the investors.' }],
        relatedTerms: ['saas-valuation', 'net-revenue-retention']
    },

    // 9. Agile & Delivery
    {
        title: 'AI-Assisted Development',
        slug: 'ai-assisted-development',
        tier: 'pillar',
        category: 'Agile & Delivery',
        definition: `AI-Assisted Development encompasses the integration of advanced Large Language Models, coding agents, and generative copilots directly into the software development lifecycle (SDLC).\n\nBy 2025/2026, tools like Cursor, GitHub Copilot, Devin, and SWE-Agent evolved from simple autocomplete engines to autonomous architectural reasoning systems. The paradigm shifted developers away from "writing code" and towards "prompt supervision, structural review, and security verification."\n\nWhile AI Dev tools radically boost individual throughput, they create significant systemic risks around codebase vastness (software entropy), undocumented context fragmentation, and the unprecedented generation of undetectable AI Technical Debt.`,
        whyItMatters: `AI-Assisted Development compresses the time to write code by 10x, but scales the difficulty of reading, verifying, and maintaining that code linearly. Engineering leadership must govern it aggressively.`,
        faqs: [{ question: 'Does AI-assisted development replace developers?', answer: 'No, it shifts the developer role from "manual syntax generator" to "reviewer & orchestrator," demanding higher architectural skill but less rote typing.' }],
        relatedTerms: ['developer-experience', 'dora-metrics', 'shadow-ai']
    },
    
    // 10. 2026 Enterprise Mega-Trends
    {
        title: 'Agentic Workflows',
        slug: 'agentic-workflows',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Agentic Workflows refer to multi-step, autonomous processes where AI agents dynamically plan, execute, and course-correct to achieve a high-level goal without human intervention at every step.\n\nContrasted with simple direct-prompting, agentic workflows use tools, browse the web, verify sub-tasks, and orchestrate other specialized agents to synthesize an outcome. In 2026, agentic workflows represent the final shift from AI as a "Co-Pilot" (assistant) to AI as an "Auto-Pilot" (executor).`,
        whyItMatters: `Agentic workflows dramatically increase enterprise productivity but require strict Execution Layers and deterministic boundaries to prevent runaway costs, hallucinations, or unauthorized destructive actions.`,
        faqs: [{ question: 'What is the difference between an AI model and an AI agent?', answer: 'An AI model predicts the next word. An AI agent uses a model as its "brain" to execute an Agentic Workflow by calling APIs, reading files, and taking iterative actions.' }],
        relatedTerms: ['execution-layer', 'artificial-intelligence', 'prompt-engineering']
    },
    {
        title: 'Sovereign AI',
        slug: 'sovereign-ai',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Sovereign AI refers to artificial intelligence capabilities - including physical infrastructure, foundation models, and training datasets - that are entirely owned, governed, and localized by a specific nation-state, enterprise, or coalition to protect intellectual property and national security.\n\nBy 2026, regulatory pressures and data privacy mandates have forced governments and Fortune 500 enterprises to abandon multi-tenant cloud AI models in favor of sovereign architectures hosted physically within their own borders or Virtual Private Clouds.`,
        whyItMatters: `Sovereign AI mitigates the existential risk of corporate or national secrets leaking into public foundation models, ensuring complete compliance with data residency laws.`,
        faqs: [{ question: 'Why is Sovereign AI necessary?', answer: 'Because using a public API like OpenAI means risking highly classified state or corporate data being used to train a model that foreign adversaries or competitors might access.' }],
        relatedTerms: ['open-weights', 'ai-governance', 'cloud-repatriation']
    },
    {
        title: 'Model Routing',
        slug: 'model-routing',
        tier: 'pillar',
        category: 'AI & Machine Learning',
        definition: `Model Routing is a dynamic architectural capability where incoming API requests are algorithmically distributed to different AI models (e.g., GPT-4, Claude 3 Haiku, Llama 3 8B) based on the specific intent, complexity, latency requirement, and cost-profile of the prompt.\n\nInstead of hardcoding a single LLM, an enterprise routing gateway assesses the task. Simple summarization is routed to an ultra-cheap, fast SLM. Complex reasoning is routed to an expensive frontier model.`,
        whyItMatters: `Model Routing is the ultimate lever for optimizing AI Unit Economics. Without it, companies suffer from the Cost of Predictivity by overpaying for simple tasks using frontier intelligence.`,
        faqs: [{ question: 'What is a Model Router?', answer: 'An intelligent gateway that dynamically sends a user prompt to the fastest, cheapest, or smartest AI model available based entirely on what the prompt actually needs.' }],
        relatedTerms: ['small-language-models', 'ai-finops', 'cost-of-predictivity']
    },
    {
        title: 'Internal Developer Platforms (IDPs)',
        slug: 'internal-developer-platforms',
        tier: 'pillar',
        category: 'Engineering & Architecture',
        definition: `An Internal Developer Platform (IDP) is a self-service paved road built by Platform Engineering teams that allows developers to spin up environments, deploy code, and manage cloud resources without waiting for DevOps or infrastructure teams.\n\nBy 2026, constructing an IDP is mandatory for engineering scale. It abstracts away the massive underlying complexities of Kubernetes, CI/CD, and Terraform into a unified Golden Path, significantly reducing developer cognitive load.`,
        whyItMatters: `IDPs unlock engineering velocity. They reduce onboarding time, slash deployment bottlenecks, and standardize security policies globally across the entire technology organization.`,
        faqs: [{ question: 'What is the purpose of an IDP?', answer: 'To stop developers from having to understand 40 different infrastructure tools, allowing them to focus entirely on writing business logic while the IDP handles the plumbing.' }],
        relatedTerms: ['devops', 'cicd', 'platform-engineering']
    },
    {
        title: 'Synthetic Data',
        slug: 'synthetic-data',
        tier: 'pillar',
        category: 'Data & Analytics',
        definition: `Synthetic Data is information that is artificially generated by AI algorithms rather than collected from real-world events or users. It is designed to perfectly mimic the statistical properties of production data without containing any personally identifiable information (PII).\n\nIn 2026, the AI industry hit the "Data Wall" (running out of high-quality human text to train on). Synthetic data became the primary fuel for fine-tuning models, testing edge cases safely, and sharing datasets across borders without violating GDPR or HIPAA.`,
        whyItMatters: `Synthetic Data eliminates the security risk of using production data in lower environments while enabling organizations to train specialized AI agents on edge-cases that rarely occur in real life.`,
        faqs: [{ question: 'Is synthetic data as good as real data?', answer: 'Yes, and often better. It can be mathematically guaranteed to contain no bias, no PII, and perfectly represent edge-cases that you would otherwise have to wait years to collect organically.' }],
        relatedTerms: ['ai-governance', 'machine-learning', 'data-security-posture-management']
    },
    {
        title: 'AI Explainability Mandate',
        slug: 'ai-explainability-mandate',
        tier: 'pillar',
        category: 'Security & Compliance',
        definition: `An AI Explainability Mandate is a formal regulatory or corporate policy requiring that any decision made, influenced, or routed by an Artificial Intelligence system can be transparently audited, reasoned, and understood by a human operator.\n\nHistorically, neural networks were "black boxes". By 2026, aggressive consumer protection laws and enterprise risk committees mandated that if an AI denies a loan, flags a transaction, or routes a critical workflow, the engineering team must be able to prove exactly 'Why' mathematically.`,
        whyItMatters: `Failing an Explainability Mandate results in immediate loss of compliance, heavy fines, and the forced shutdown of the offending AI agents. It is the core tenet of modern AI Risk Management.`,
        faqs: [{ question: 'Can you explain how a neural network makes a decision?', answer: 'Increasingly, yes. Explainable AI (XAI) tools map the activation weights and prompt rationales (chain-of-thought) to create an audit log understandable by non-technical regulators.' }],
        relatedTerms: ['ai-governance', 'responsible-ai', 'post-quantum-cryptography']
    }
];
