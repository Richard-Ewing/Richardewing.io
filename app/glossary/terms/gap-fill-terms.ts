import { GlossaryTerm } from '../types';

// =============================================================================
// FOURTEENTH PASS: Category Gap Fill — strengthening thin categories
// =============================================================================

export const gapFillTerms: GlossaryTerm[] = [
    // =========================================================================
    // DESIGN & UX (+5)
    // =========================================================================
    {
        title: 'Design System',
        slug: 'design-system',
        definition: `A design system is a collection of reusable UI components, design tokens, guidelines, and documentation that enables teams to build consistent user interfaces at scale. It is a single source of truth for design and code.\n\n**Components of a design system:**\n- **Design tokens:** Colors, spacing, typography, shadows as variables\n- **Component library:** Buttons, inputs, cards, modals, navigation\n- **Pattern library:** Common layouts, forms, data tables\n- **Documentation:** Usage guidelines, accessibility standards, do's and don'ts\n- **Tooling:** Storybook, Figma libraries, code generators\n\n**Examples:** Material Design (Google), Carbon (IBM), Polaris (Shopify), Primer (GitHub).\n\nDesign systems reduce design debt by standardizing decisions. Without one, every developer invents their own button style, creating visual fragmentation and maintenance burden.`,
        whyItMatters: 'Design systems eliminate a category of technical debt by standardizing UI decisions. Without one, visual inconsistencies multiply across features, creating UX debt that degrades user trust and increases development time.',
        category: 'Design & UX',
        relatedTerms: ['accessibility-a11y', 'design-tokens', 'ux-debt'],
        faqs: [{ question: 'When should you build a design system?', answer: 'When you have 3+ developers or 2+ products sharing UI patterns. Before that, design systems add overhead without enough payoff. Start with design tokens and a few core components, then expand.' }],
    },
    {
        title: 'Design Tokens',
        slug: 'design-tokens',
        definition: `Design tokens are the smallest atomic units of a design system — named values for colors, spacing, typography, shadows, and other visual properties stored as platform-agnostic variables.\n\n**Examples:**\n- \`color-primary: #0066FF\`\n- \`spacing-md: 16px\`\n- \`font-size-lg: 1.25rem\`\n- \`border-radius-lg: 12px\`\n\n**Why tokens matter:** They create a single source of truth. Change \`color-primary\` once and it updates everywhere — web, mobile, email, documentation. Without tokens, every color is hardcoded in dozens of files.\n\nDesign tokens bridge the gap between design (Figma) and code (CSS/React/Swift). Tools like Style Dictionary and Tokens Studio automate token generation across platforms.`,
        whyItMatters: 'Design tokens prevent one of the most common forms of UX debt: inconsistent visual properties scattered across codebases. They enable systematic design changes at scale.',
        category: 'Design & UX',
        relatedTerms: ['design-system', 'accessibility-a11y', 'ux-debt'],
        faqs: [{ question: 'What are design tokens?', answer: 'Named variables for visual properties (colors, spacing, fonts) that create a single source of truth across platforms. Change a token once, it updates everywhere.' }],
    },
    {
        title: 'Accessibility (A11y)',
        slug: 'accessibility-a11y',
        definition: `Accessibility (often abbreviated A11y — "a" + 11 letters + "y") is the practice of designing and building digital products that can be used by people with disabilities, including visual, auditory, motor, and cognitive impairments.\n\n**Standards:** WCAG 2.1/2.2 (Web Content Accessibility Guidelines) defines three conformance levels: A (minimum), AA (standard requirement), AAA (enhanced). Most legal requirements mandate AA compliance.\n\n**Key requirements:**\n- **Screen reader support:** Semantic HTML, ARIA labels, alt text\n- **Keyboard navigation:** All interactions accessible without a mouse\n- **Color contrast:** Minimum 4.5:1 ratio for normal text\n- **Focus management:** Visible focus indicators for keyboard users\n- **Captions:** Video/audio content must have captions\n\n**Legal landscape:** ADA (US), EAA (EU), Section 508 (US Government). Accessibility lawsuits in the US exceeded 4,000/year in 2024.`,
        whyItMatters: 'Accessibility is both a legal requirement and a market opportunity. 15% of the global population has a disability. Inaccessible products face lawsuits, lose customers, and accumulate accessibility debt that compounds over time.',
        category: 'Design & UX',
        relatedTerms: ['design-system', 'design-tokens', 'ux-debt'],
        faqs: [{ question: 'What level of WCAG compliance do I need?', answer: 'AA is the standard. Most legal requirements (ADA, EAA) reference WCAG 2.1 AA. AAA is aspirational but rarely required. Start with AA and prioritize the most impactful improvements.' }],
    },
    {
        title: 'Design Sprint',
        slug: 'design-sprint',
        definition: `A Design Sprint is a five-day process for rapidly solving design problems through prototyping and user testing. Developed at Google Ventures by Jake Knapp, it compresses months of work into one week.\n\n**The five-day framework:**\n- **Monday — Map:** Define the problem and pick a target\n- **Tuesday — Sketch:** Generate competing solutions individually\n- **Wednesday — Decide:** Vote on the best solution to prototype\n- **Thursday — Prototype:** Build a realistic facade (not a working product)\n- **Friday — Test:** Put the prototype in front of real users\n\nDesign sprints prevent the most expensive product mistake: building something nobody wants. By testing with real users before writing code, teams validate or invalidate ideas in 5 days instead of 5 months.`,
        whyItMatters: 'Design sprints are the fastest way to validate a product idea before committing engineering resources. They prevent the accumulation of product debt — features built on assumptions rather than evidence.',
        category: 'Design & UX',
        relatedTerms: ['product-market-fit', 'user-research', 'jobs-to-be-done'],
        faqs: [{ question: 'How many people do you need for a design sprint?', answer: 'The ideal team is 5-7 people: a decider (CEO/PM), a facilitator, a designer, an engineer, a customer expert, and 1-2 domain specialists. You also need 5 user testers for Friday.' }],
    },
    {
        title: 'User Research',
        slug: 'user-research',
        definition: `User research is the systematic investigation of users' needs, behaviors, and motivations through observation, task analysis, interviews, and experiments. It provides evidence for product decisions rather than relying on assumptions.\n\n**Research methods:**\n- **Quantitative:** Analytics, A/B testing, surveys, funnel analysis\n- **Qualitative:** User interviews, usability testing, contextual inquiry, diary studies\n- **Evaluative:** Testing existing designs with users\n- **Generative:** Discovering unmet needs and opportunities\n\n**When to research:** Before building (discovery), during building (usability testing), after launch (analytics, NPS). The ratio should be roughly 60% pre-build, 30% during, 10% post-launch.\n\nUser research prevents the most expensive product failure: building features nobody wants. Every hour of research saves approximately 10 hours of development time on the wrong thing.`,
        whyItMatters: 'User research separates evidence-based product decisions from assumption-based ones. Products built on research have higher retention, lower churn, and better unit economics.',
        category: 'Design & UX',
        relatedTerms: ['jobs-to-be-done', 'design-sprint', 'product-market-fit'],
        faqs: [{ question: 'How many users do you need for usability testing?', answer: 'Jakob Nielsen\'s research shows 5 users find 85% of usability problems. For quantitative research (A/B testing), you need statistical significance — typically 1,000+ users per variant.' }],
    },

    // =========================================================================
    // STARTUP & VC (+5)
    // =========================================================================
    {
        title: 'Series A / B / C Funding',
        slug: 'series-funding',
        definition: `Series A, B, and C are sequential rounds of venture capital financing that fund a startup's growth:\n\n**Pre-Seed / Seed ($500K-$5M):** Product development, initial hiring, finding product-market fit. Investors: angels, micro-VCs. Typical valuation: $5-20M.\n\n**Series A ($5M-$25M):** Scaling after PMF. Build the repeatable sales engine. Investors: early-stage VCs. Typical valuation: $20-100M. Key metric: evidence of PMF (retention, engagement).\n\n**Series B ($15M-$75M):** Aggressive scaling. Expand markets, hire significantly. Investors: growth-stage VCs. Typical valuation: $100-500M. Key metric: revenue growth rate (2-3x YoY).\n\n**Series C+ ($50M-$500M+):** Market dominance, international expansion, M&A preparation. Investors: growth equity, crossover funds. Key metric: path to profitability or market leadership.\n\nEach round comes with dilution — founders typically own 10-20% by Series C.`,
        whyItMatters: 'Understanding funding stages helps product and engineering leaders contextualize their company\'s resources, growth expectations, and timeline to profitability. Technical debt decisions are stage-dependent.',
        category: 'Startup & Venture Capital',
        relatedTerms: ['burn-rate', 'saas-valuation', 'cap-table', 'dilution'],
        faqs: [{ question: 'How long between funding rounds?', answer: 'Typically 18-24 months between rounds. Companies should start fundraising with 9-12 months of runway remaining. Rushing a round from a weak position leads to down rounds and excessive dilution.' }],
    },
    {
        title: 'Cap Table',
        slug: 'cap-table',
        definition: `A capitalization table (cap table) is a spreadsheet or database that records who owns what percentage of a company — all equity shares, stock options, warrants, and convertible instruments.\n\n**Key components:**\n- **Common shares:** Held by founders and employees\n- **Preferred shares:** Held by investors (with liquidation preferences)\n- **Option pool:** Reserved for future employee grants (typically 10-20%)\n- **SAFEs/Convertible notes:** Early-stage instruments that convert to equity\n\n**Why it matters:** A clean cap table attracts investors. A messy cap table (dead equity, unclear ownership, missing documentation) slows fundraising and can kill deals during due diligence.\n\nTools: Carta, Pulley, Capshare, AngelList. Manual spreadsheets work for pre-seed but become error-prone by Series A.`,
        whyItMatters: 'Cap table management is a governance requirement that becomes increasingly complex with each funding round. Errors in cap tables create legal liability and slow fundraising.',
        category: 'Startup & Venture Capital',
        relatedTerms: ['series-funding', 'dilution', 'saas-valuation'],
        faqs: [{ question: 'What is a clean cap table?', answer: 'A cap table with clear ownership, no dead equity (departed founders retaining large stakes), reasonable option pool (10-20%), standard terms, and proper documentation. Investors check this first during due diligence.' }],
    },
    {
        title: 'Dilution',
        slug: 'dilution',
        definition: `Dilution is the reduction in existing shareholders' ownership percentage when a company issues new shares — typically during fundraising, employee option grants, or convertible note conversion.\n\n**Typical dilution per round:**\n- Seed: 15-25% dilution\n- Series A: 20-30% dilution\n- Series B: 15-25% dilution\n- Option pool: 10-20% reserved\n\n**Example:** A founder with 50% ownership who raises a Series A with 25% dilution now owns 37.5% (50% × 75%). After Series B with 20% dilution: 30% (37.5% × 80%).\n\n**Anti-dilution provisions:** Investors often get anti-dilution protection (weighted-average or full-ratchet) that protects their ownership in down rounds, shifting dilution further to founders and employees.`,
        whyItMatters: 'Dilution directly determines how much of the eventual exit founders and early employees receive. Understanding dilution math helps engineering leaders evaluate equity compensation offers.',
        category: 'Startup & Venture Capital',
        relatedTerms: ['cap-table', 'series-funding', 'saas-valuation'],
        faqs: [{ question: 'How much dilution is normal?', answer: '15-30% per funded round is standard. Founders typically own 10-20% by Series C. If you are being diluted more than 30% in a single round, the terms may be unfavorable.' }],
    },
    {
        title: 'Venture Capital Due Diligence',
        slug: 'vc-due-diligence',
        definition: `Venture capital due diligence is the investigation process investors conduct before committing capital. It covers technology, team, market, financials, legal, and governance.\n\n**Technology due diligence specifically examines:**\n- **Architecture quality:** Scalability, maintainability, security\n- **Technical debt level:** Maintenance burden, deployment frequency\n- **Team capability:** Engineering talent depth and retention\n- **IP ownership:** Clear ownership of all code and technology\n- **Dependency risk:** Critical vendor dependencies, open-source licensing\n\nRichard Ewing's R&D Capital Audit framework provides the quantitative assessment investors need: Product Debt Index score, Technical Insolvency Date, Innovation Tax percentage, and dollar-denominated debt.`,
        whyItMatters: 'Technical debt discovered during due diligence can reduce valuation by 20-40% or kill deals entirely. Proactive R&D audits before fundraising prevent last-minute surprises.',
        category: 'Startup & Venture Capital',
        relatedTerms: ['technical-debt', 'technical-insolvency-date', 'product-debt-index', 'cap-table'],
        faqs: [{ question: 'How long does VC due diligence take?', answer: '4-12 weeks typically. Technical due diligence usually takes 2-4 weeks. Having a recent R&D audit (PDI score, DORA metrics, architecture documentation) can accelerate this significantly.' }],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        title: 'Pitch Deck',
        slug: 'pitch-deck',
        definition: `A pitch deck is a presentation (typically 10-15 slides) used by startups to communicate their business opportunity to potential investors. The standard structure follows Guy Kawasaki's 10/20/30 rule: 10 slides, 20 minutes, 30pt font.\n\n**Essential slides:**\n1. **Title/Hook:** Company name, one-line description\n2. **Problem:** What pain point you solve\n3. **Solution:** How your product solves it\n4. **Market size:** TAM, SAM, SOM\n5. **Business model:** How you make money\n6. **Traction:** Growth metrics, customer logos\n7. **Team:** Key team members and backgrounds\n8. **Competition:** Competitive landscape and differentiation\n9. **Financials:** Revenue, projections, unit economics\n10. **Ask:** How much you're raising and what you'll do with it\n\nThe best pitch decks tell a story, not list features. Sequoia's pitch deck template remains the gold standard.`,
        whyItMatters: 'A pitch deck is the first filter in fundraising. Strong decks lead to meetings; weak ones are deleted. Engineering leaders are often asked to contribute to the technology and traction slides.',
        category: 'Startup & Venture Capital',
        relatedTerms: ['series-funding', 'saas-valuation', 'burn-rate'],
        faqs: [{ question: 'How many slides should a pitch deck have?', answer: '10-15 slides. Investors see hundreds of decks. Be concise. The deck\'s job is to get a meeting, not close the deal. Send a more detailed appendix if asked.' }],
    },

    // =========================================================================
    // DATA & ANALYTICS (+4)
    // =========================================================================
    {
        title: 'Data Mesh',
        slug: 'data-mesh',
        definition: `Data mesh is a decentralized data architecture paradigm where domain teams own and publish their data as products, rather than centralizing all data into a single data warehouse or lake managed by a central team.\n\n**Four principles (Zhamak Dehghani):**\n1. **Domain ownership:** Each business domain owns its analytical data\n2. **Data as a product:** Data is treated like a product with an SLA, documentation, and quality guarantees\n3. **Self-serve platform:** A shared infrastructure platform enables domain teams to manage their own data\n4. **Federated governance:** Global standards with local implementation\n\nData mesh solves the central data team bottleneck: as organizations grow, a single data team can't serve every domain's needs. But it requires significant organizational maturity and investment.`,
        whyItMatters: 'Data mesh addresses the scaling challenge of centralized data architectures. For product leaders, it determines who owns and is accountable for data quality — which directly affects AI feature reliability.',
        category: 'Data & Analytics',
        relatedTerms: ['data-lakehouse', 'feature-store', 'mlops'],
        faqs: [{ question: 'When should you adopt data mesh?', answer: 'When your central data team is a bottleneck for 4+ business domains, and you have mature domain teams capable of owning their data. Pre-Series B startups rarely need data mesh — it adds complexity.' }],
    },
    {
        title: 'Data Lakehouse',
        slug: 'data-lakehouse',
        definition: `A data lakehouse is a modern data architecture that combines the best features of data lakes (cheap storage for all data types) and data warehouses (structured querying and ACID transactions).\n\n**Data Lake vs. Warehouse vs. Lakehouse:**\n- **Data Lake:** Stores raw data cheaply (S3, GCS) but queries are slow and governance is weak\n- **Data Warehouse:** Fast queries and strong governance (Snowflake, BigQuery) but expensive for raw data\n- **Data Lakehouse:** Both — cheap raw storage with warehouse-grade query performance and governance\n\n**Technologies:** Delta Lake (Databricks), Apache Iceberg (Netflix), Apache Hudi. These add ACID transactions, schema enforcement, and time travel to data lakes.\n\nThe lakehouse architecture is becoming the default for organizations that need both AI/ML workloads (which need raw data) and business analytics (which need structured queries).`,
        whyItMatters: 'Data lakehouse architecture determines the cost structure of your analytics and AI infrastructure. Wrong architecture choice = either overpaying for storage or suffering slow queries.',
        category: 'Data & Analytics',
        relatedTerms: ['data-mesh', 'feature-store', 'mlops'],
        faqs: [{ question: 'Should I use a data lakehouse or data warehouse?', answer: 'If you only need business analytics: data warehouse (Snowflake, BigQuery). If you also need AI/ML workloads: lakehouse. If you\'re starting fresh in 2025+, lakehouse is the default choice.' }],
    },
    {
        title: 'Feature Store',
        slug: 'feature-store',
        definition: `A feature store is a centralized repository for storing, managing, and serving machine learning features — the input variables that ML models use for predictions.\n\n**Why feature stores exist:** Without one, ML teams rebuild the same features repeatedly across models. Feature engineering often consumes 80% of ML project time.\n\n**Key capabilities:**\n- **Feature registry:** Discover and reuse features across teams\n- **Online serving:** Low-latency feature retrieval for real-time predictions\n- **Offline serving:** Batch feature retrieval for model training\n- **Point-in-time correctness:** Prevent data leakage in training\n- **Monitoring:** Track feature drift and data quality\n\n**Solutions:** Feast (open-source), Tecton, Databricks Feature Store, AWS SageMaker Feature Store.\n\nFeature stores reduce ML engineering debt by centralizing feature logic and ensuring consistency between training and serving.`,
        whyItMatters: 'Feature stores solve one of the most common sources of ML technical debt: inconsistent features between training and production. They reduce duplicate engineering effort and improve model reliability.',
        category: 'Data & Analytics',
        relatedTerms: ['mlops', 'model-drift', 'data-mesh'],
        faqs: [{ question: 'Do I need a feature store?', answer: 'If you have 3+ ML models sharing features, or if your ML team spends more time on feature engineering than modeling, a feature store will pay for itself. For a single model, it\'s over-engineering.' }],
    },
    {
        title: 'MLOps',
        slug: 'mlops',
        definition: `MLOps (Machine Learning Operations) is the set of practices for deploying, monitoring, and managing machine learning models in production. It applies DevOps principles to the ML lifecycle.\n\n**MLOps lifecycle:**\n1. **Data pipeline:** Collection, cleaning, feature engineering\n2. **Model training:** Experimentation, hyperparameter tuning\n3. **Model validation:** Testing, bias detection, performance benchmarking\n4. **Deployment:** Serving models via APIs or batch processing\n5. **Monitoring:** Tracking drift, performance degradation, cost\n6. **Retraining:** Automated or triggered model updates\n\n**Tools:** MLflow (experiment tracking), Kubeflow (Kubernetes-native ML), Weights & Biases (experiment management), DVC (data version control).\n\nMLOps is essential because models degrade over time (model drift). Without MLOps, deployed models silently become less accurate — creating hidden AI technical debt.`,
        whyItMatters: 'MLOps prevents AI technical debt. Every deployed model is a maintenance commitment. Without MLOps, models degrade silently, creating decisions based on increasingly wrong predictions.',
        category: 'Data & Analytics',
        relatedTerms: ['model-drift', 'feature-store', 'ai-technical-debt', 'devops'],
        faqs: [{ question: 'When do I need MLOps?', answer: 'As soon as you deploy your first ML model to production. Even a single model needs monitoring for drift, performance tracking, and a retraining strategy. MLOps maturity should scale with the number of models.' }],
    },

    // =========================================================================
    // AGILE & DELIVERY (+3)
    // =========================================================================
    {
        title: 'Sprint Retrospective',
        slug: 'sprint-retrospective',
        definition: `A sprint retrospective is a meeting held at the end of each sprint where the team reflects on what went well, what didn't, and what to improve. It's the core continuous improvement mechanism in agile development.\n\n**Standard format (Start/Stop/Continue):**\n- **Start:** What should we begin doing?\n- **Stop:** What should we stop doing?\n- **Continue:** What's working that we should keep?\n\n**Alternative formats:** 4Ls (Liked, Learned, Lacked, Longed For), Sailboat (wind = what propels us, anchor = what holds us back), Mad/Sad/Glad.\n\nEffective retros lead to concrete action items (max 2-3 per sprint). Ineffective retros are therapy sessions with no follow-through. The key difference: action items are tracked and reviewed at the next retro.`,
        whyItMatters: 'Retrospectives are the only systematic mechanism for team improvement. Teams that skip retros accumulate process debt — inefficiencies that compound sprint over sprint.',
        category: 'Agile & Delivery',
        relatedTerms: ['kanban', 'story-points', 'dora-metrics'],
        faqs: [{ question: 'How long should a retrospective be?', answer: '60-90 minutes for a 2-week sprint. Shorter retros feel rushed, longer ones lose focus. The facilitator\'s job is to keep discussion focused on actionable improvements.' }],
    },
    {
        title: 'Kanban',
        slug: 'kanban',
        definition: `Kanban is a workflow management method that visualizes work, limits work-in-progress (WIP), and optimizes flow. Unlike Scrum's fixed sprints, Kanban uses continuous flow — items move through stages as capacity allows.\n\n**Core principles:**\n- **Visualize work:** Board with columns (To Do, In Progress, Review, Done)\n- **Limit WIP:** Maximum items per column (e.g., 3 items in "In Progress")\n- **Manage flow:** Optimize cycle time (time from start to done)\n- **Make policies explicit:** Clear definitions of "done" for each stage\n- **Feedback loops:** Regular review of metrics and process\n\n**Kanban metrics:** Cycle time (how long items take), throughput (items completed per week), WIP count, and cumulative flow diagrams.\n\nKanban is ideal for teams with unpredictable work (support, ops, maintenance) or teams that find Scrum sprints too rigid.`,
        whyItMatters: 'Kanban WIP limits prevent the #1 productivity killer: context switching. When developers work on too many things simultaneously, everything slows down. WIP limits force focus and improve throughput.',
        category: 'Agile & Delivery',
        relatedTerms: ['sprint-retrospective', 'story-points', 'dora-metrics'],
        faqs: [{ question: 'Kanban vs Scrum?', answer: 'Scrum: fixed sprints, defined roles, sprint planning. Kanban: continuous flow, WIP limits, pull-based. Scrum is better for product teams with predictable work. Kanban is better for ops, support, and maintenance teams.' }],
    },
    {
        title: 'Story Points',
        slug: 'story-points',
        definition: `Story points are a relative estimation unit used in agile development to measure the effort, complexity, and uncertainty of user stories. They use the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21) to estimate relative size.\n\n**Key principle:** Story points measure relative effort, not time. A 5-point story is roughly twice as complex as a 3-point story. This relative approach accounts for different developers having different speeds.\n\n**Estimation techniques:** Planning Poker (team members independently estimate, then discuss outliers), T-shirt sizing (S, M, L, XL as a first pass), and reference stories (compare new work to previously completed stories).\n\n**The controversy:** Many engineering leaders argue story points are "agile theater" — energy spent estimating instead of building. Richard Ewing's perspective: story points measure activity, not value. Revenue per engineer (APER) measures what actually matters.`,
        whyItMatters: 'Story points can be useful for sprint planning but dangerous when used as performance metrics. They measure activity, not value. Teams optimizing for velocity (points per sprint) often ship more features of less value.',
        category: 'Agile & Delivery',
        relatedTerms: ['sprint-retrospective', 'kanban', 'engineering-productivity'],
        faqs: [{ question: 'Are story points useful?', answer: 'For sprint planning: yes, they help teams commit to realistic amounts of work. As performance metrics: no. They incentivize gaming (inflating estimates) and measure activity, not business value.' }],
    },

    // =========================================================================
    // RICHARD EWING FRAMEWORKS (+3)
    // =========================================================================
    {
        title: 'AI COGS (Cost of Goods Sold)',
        slug: 'ai-cogs',
        definition: `AI COGS is a framework coined by Richard Ewing for quantifying the variable cost of AI features as a component of Cost of Goods Sold. Unlike traditional software with near-zero marginal costs, AI features have significant per-unit costs that directly eat into gross margins.\n\n**AI COGS components:**\n- **Inference costs:** LLM API calls ($0.001-$0.10 per query)\n- **Embedding costs:** Vector generation for RAG systems\n- **Storage costs:** Vector database hosting\n- **Compute costs:** GPU/TPU for self-hosted models\n- **Data enrichment:** Third-party API calls for context\n- **Retraining costs:** Periodic model updates\n\n**Gross margin impact:** Traditional SaaS has 70-80% gross margins. AI-heavy products often see margins compress to 40-60% because AI COGS scale with usage. This is the core of the Cost of Predictivity problem.\n\nThe AUEB calculator at richardewing.io/tools/aueb helps companies calculate their AI COGS and find their margin collapse point.`,
        whyItMatters: 'AI COGS are the hidden margin killer. SaaS companies adding AI features without modeling AI COGS are flying blind. Many discover their AI features are gross-margin negative after millions in investment.',
        category: 'Richard Ewing Frameworks',
        relatedTerms: ['cost-of-predictivity', 'unit-economics', 'large-language-model', 'rag-architecture'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        faqs: [{ question: 'How do you calculate AI COGS?', answer: 'Sum all per-query costs: LLM API fees + embedding costs + vector DB queries + data enrichment. Multiply by average queries per user per month. Compare to subscription price to find margin.' }],
    },
    {
        title: 'EAAP (Exogram Action Admissibility Protocol)',
        slug: 'eaap-protocol',
        definition: `The Exogram Action Admissibility Protocol (EAAP) is an open standard created by Richard Ewing for verifying whether an AI agent's proposed action should be allowed to execute. It provides a governance layer between AI decision and AI action.\n\n**How EAAP works:**\n1. AI agent proposes an action\n2. EAAP evaluates against policy rules, risk thresholds, and context\n3. Action is admitted (allowed), denied (blocked), or escalated (human review)\n4. Complete audit trail is recorded\n\n**The problem EAAP solves:** As AI agents become more autonomous (OpenClaw, NemoClaw, CrewAI), there is no standard protocol for governing what they're allowed to do. EAAP provides this missing governance layer.\n\nEAAP is analogous to OAuth for API authorization — but for AI agent actions. It is open-source and published as an RFC at github.com/exogram-ai/eaap-rfc.`,
        whyItMatters: 'As AI agents proliferate, the governance gap grows. EAAP provides the standard protocol for AI action admissibility — ensuring agents operate within defined boundaries before they cause harm.',
        category: 'Richard Ewing Frameworks',
        relatedTerms: ['agentic-governance', 'ai-agent', 'nemoclaw', 'openclaw'],
        faqs: [{ question: 'How is EAAP different from AI guardrails?', answer: 'Guardrails filter AI outputs (content safety). EAAP governs AI actions — what the agent is allowed TO DO, not just what it says. EAAP operates at the execution layer, guardrails at the generation layer.' }],
    },
    {
        title: 'Orchestration Debt',
        slug: 'orchestration-debt',
        definition: `Orchestration Debt is a framework coined by Richard Ewing for the technical debt that accumulates in AI agent coordination systems. As multi-agent architectures grow in complexity, the orchestration layer — the code that decides which agent does what, when, and how they communicate — becomes the dominant source of system fragility.\n\n**Sources of orchestration debt:**\n- **Agent sprawl:** Too many specialized agents with overlapping capabilities\n- **Communication overhead:** N agents create N² potential communication paths\n- **State management:** Tracking conversation context across agent handoffs\n- **Error cascading:** One agent's failure creates unpredictable downstream effects\n- **Cost multiplication:** Each orchestration step adds LLM calls\n\nOrchestration debt is the AI-era equivalent of microservices communication debt — the same architectural pattern, amplified by the probabilistic nature of LLM-based components.`,
        whyItMatters: 'Multi-agent systems are the fastest-growing architecture pattern in AI, but they accumulate orchestration debt rapidly. Understanding this debt type helps architecture decisions about agent granularity and communication patterns.',
        category: 'Richard Ewing Frameworks',
        relatedTerms: ['agentic-workflow', 'ai-agent', 'ai-cogs', 'technical-debt'],
        faqs: [{ question: 'How do you prevent orchestration debt?', answer: 'Start with fewer, more capable agents rather than many specialized ones. Establish clear communication protocols between agents. Monitor orchestration costs separately from agent inference costs.' }],
    },
];
