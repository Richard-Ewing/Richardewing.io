import { allGlossaryTerms } from './terms/index';
export * from './terms/sixteenth-pass';
export * from './terms/saas-metrics';
export * from './terms/trending-2026-batch2';
export * from './terms/ai-economist';
export * from './terms/margin-engineering';
export type { GlossaryTerm } from './types';
import type { GlossaryTerm } from './types';

export const glossaryCategories = [
    'Technical Debt & Code Quality',
    'AI & Machine Learning',
    'SaaS Metrics & Finance',
    'Product Management',
    'Engineering Management',
    'Leadership & Governance',
    'Richard Ewing Frameworks',
    'Cloud & Infrastructure',
    'Data & Analytics',
    'Security & Compliance',
    'Startup & Venture Capital',
    'Design & UX',
    'Agile & Delivery',
    'Finance & Accounting',
    // Phase 3 expansion
    'Platform Engineering',
    'Growth & Marketing',
    'People & Culture',
    'Due Diligence & M&A',
    'API & Integration',
    'Testing & QA',
    'Architecture Patterns',
    'Pricing & Packaging',
    'Compliance & Regulation',
    'Open Source',
    'AI Governance & Verification',
] as const;

const _baseGlossaryTerms: GlossaryTerm[] = [
    // =========================================================================
    // TECHNICAL DEBT & CODE QUALITY
    // =========================================================================
    {
        slug: 'technical-debt',
        title: 'Technical Debt',
        category: 'Technical Debt & Code Quality',
        definition: `Technical debt is the implied cost of future rework caused by choosing an expedient solution now instead of a better approach that would take longer. First coined by Ward Cunningham in 1992, technical debt has become one of the most important concepts in software engineering economics.\n\nLike financial debt, technical debt accrues interest. Every shortcut, every "we'll fix it later," every copy-pasted function adds to the principal. The interest comes in the form of slower development velocity, more bugs, longer onboarding times for new engineers, and increased fragility of the system.\n\nTechnical debt exists on a spectrum from deliberate ("we know this is a shortcut but ship it anyway") to accidental ("we didn't realize this was a bad pattern until later"). Both types compound over time. Organizations that don't actively measure and manage their technical debt risk reaching what Richard Ewing calls the Technical Insolvency Date — the specific quarter when maintenance costs consume 100% of engineering capacity.`,
        whyItMatters: `Most engineering teams track technical debt qualitatively ("we have some debt") rather than quantitatively ("our maintenance burden is 47% of total engineering hours and growing 3% per quarter"). This qualitative approach lets debt accumulate invisibly until it becomes a financial crisis.\n\nFor CFOs and board members, technical debt is invisible unless it's quantified in dollar terms. An engineering team reporting "we need to pay down tech debt" gets deprioritized. An engineering team reporting "we're spending $2.3M annually maintaining code that generates zero revenue, and that number grows by $180K per quarter" gets immediate attention.\n\nThe Product Debt Index (PDI) calculator at richardewing.io/tools/pdi translates technical debt into financial terms that executives and boards can act on.`,
        howToMeasure: `1. **Maintenance Percentage**: Track what percentage of engineering time goes to bugs, maintenance, and keeping-the-lights-on work vs. new feature development.\n2. **Code Quality Score**: Use tools like SonarQube, CodeClimate, or custom dashboards to measure cyclomatic complexity, code duplication, and test coverage.\n3. **DORA Metrics**: Deployment frequency, lead time for changes, change failure rate, and mean time to recovery provide proxies for debt burden.\n4. **Dollar Value**: Multiply maintenance hours × fully-loaded engineer cost to express debt in financial terms.\n5. **Growth Rate**: Track the maintenance percentage quarter-over-quarter. If it's increasing, you're accumulating debt faster than you're paying it down.`,
        faqs: [
            { question: 'What is technical debt in simple terms?', answer: 'Technical debt is the extra work you create for yourself later by taking shortcuts in code today. Like credit card debt, it accrues interest — the longer you leave it, the more expensive it becomes to fix.' },
            { question: 'How do you measure technical debt?', answer: 'The best approach is measuring maintenance percentage (% of engineering time spent on bugs and maintenance vs. new features) and converting it to dollar terms. Use the Product Debt Index calculator at richardewing.io/tools/pdi for a quantitative assessment.' },
            { question: 'What causes technical debt?', answer: 'Common causes include tight deadlines forcing shortcuts, lack of automated testing, poor documentation, outdated dependencies, copy-paste coding, insufficient code reviews, and organizational pressure to ship features without proper architecture.' },
            { question: 'How much technical debt is acceptable?', answer: 'A maintenance percentage below 30% is healthy. Between 30-50% is concerning. Above 50% means more than half of your engineering capacity goes to maintenance rather than innovation. Above 70% is near the Technical Insolvency Date.' },
        ],
        relatedTerms: ['technical-insolvency-date', 'innovation-tax', 'dora-metrics', 'code-smell', 'legacy-code', 'refactoring'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'legacy-code',
        title: 'Legacy Code',
        category: 'Technical Debt & Code Quality',
        definition: `Legacy code is existing software that is difficult to modify, extend, or replace, typically because it was written with older technologies, lacks documentation, has no automated tests, or the original developers have left the organization.\n\nMichael Feathers defines legacy code simply as "code without tests." This definition captures the core problem: legacy code is code you're afraid to change because you can't verify that your changes don't break existing functionality.\n\nLegacy code is not inherently bad — in fact, much legacy code is battle-tested and reliable. The problem is that it becomes increasingly expensive to maintain and nearly impossible to extend. Organizations often spend 60-80% of their engineering budget maintaining legacy systems rather than building new capabilities.`,
        whyItMatters: `Legacy code is the largest hidden cost in most software organizations. When 70% of your engineering team is maintaining systems rather than building new features, you're paying innovation-era salaries for maintenance-era work. This is what Richard Ewing calls the Innovation Tax.\n\nThe decision to rewrite vs. refactor legacy code is one of the highest-stakes decisions a CTO can make. Joel Spolsky famously called rewrites "the single worst strategic mistake that any software company can make." Yet sometimes a rewrite is the only viable path forward.`,
        faqs: [
            { question: 'What is legacy code?', answer: 'Legacy code is existing software that is difficult and risky to modify. It typically lacks tests, documentation, and the original developers may have left the organization.' },
            { question: 'Should you rewrite legacy code?', answer: 'Usually no. Incremental refactoring is safer and less risky than a full rewrite. However, if the legacy system is on an obsolete platform or the Technical Insolvency Date is approaching, a rewrite may be necessary.' },
            { question: 'How much does legacy code cost?', answer: 'Organizations typically spend 60-80% of their engineering budget maintaining legacy systems. Use the Product Debt Index (PDI) at richardewing.io/tools/pdi to calculate the dollar cost of your legacy burden.' },
        ],
        relatedTerms: ['technical-debt', 'refactoring', 'monolith-to-microservices', 'innovation-tax'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'refactoring',
        title: 'Refactoring',
        category: 'Technical Debt & Code Quality',
        definition: `Refactoring is the process of restructuring existing code without changing its external behavior. The goal is to improve the code's internal structure — readability, maintainability, performance — while keeping the software's functionality identical.\n\nMartin Fowler's canonical definition: "Refactoring is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior."\n\nRefactoring is not rewriting. Rewriting means replacing code with new code that does the same thing differently. Refactoring means improving the existing code incrementally. The distinction matters enormously for risk management — refactoring is low-risk because you're making small, testable changes. Rewriting is high-risk because you're replacing working code with untested code.`,
        whyItMatters: `The business case for refactoring is often poorly communicated. Engineers say "we need to refactor" and executives hear "we want to spend time not shipping features." The conversation should be about ROI: a $50K refactoring investment that reduces bug rates by 40% and increases deployment frequency by 3x has a measurable return.\n\nRichard Ewing's framework for evaluating refactoring decisions uses the Feature Bloat Calculus: if the maintenance cost of a component exceeds its value contribution, refactoring (or deprecation) is economically justified.`,
        faqs: [
            { question: 'What is the difference between refactoring and rewriting?', answer: 'Refactoring improves code structure incrementally without changing behavior. Rewriting replaces code entirely. Refactoring is low-risk; rewriting is high-risk.' },
            { question: 'How do you justify refactoring to management?', answer: 'Frame it in financial terms: current maintenance cost, projected cost savings, impact on deployment speed, and bug rate reduction. Use the Product Debt Index to quantify the financial impact.' },
        ],
        relatedTerms: ['technical-debt', 'legacy-code', 'code-smell', 'feature-bloat-calculus'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'code-smell',
        title: 'Code Smell',
        category: 'Technical Debt & Code Quality',
        definition: `A code smell is a surface-level indicator in source code that suggests a deeper problem. The term was popularized by Martin Fowler and Kent Beck. Code smells are not bugs — the code works correctly — but they indicate structural weaknesses that will make future changes harder and more error-prone.\n\nCommon code smells include: duplicated code, long methods, large classes, long parameter lists, divergent change, shotgun surgery, feature envy, data clumps, primitive obsession, and dead code.\n\nCode smells are the early warning system for technical debt. Each smell is a small amount of debt. Individually, they're manageable. Collectively, they compound into the maintenance burden that slowly consumes engineering capacity.`,
        whyItMatters: `Code smells are leading indicators of technical debt. By the time technical debt becomes visible to management (missed deadlines, rising bug counts, slow feature delivery), the underlying code smells have been accumulating for months or years. Teams that actively monitor and address code smells prevent technical debt from reaching critical levels.`,
        faqs: [
            { question: 'What is a code smell?', answer: 'A code smell is a pattern in source code that suggests a deeper structural problem. The code works but is poorly organized, making future changes harder and more risky.' },
            { question: 'What are common code smells?', answer: 'Common code smells include duplicated code, overly long methods, large classes, feature envy (a method that uses another class more than its own), dead code, and shotgun surgery (one change requires editing many files).' },
        ],
        relatedTerms: ['technical-debt', 'refactoring', 'legacy-code'],
    },
    {
        slug: 'dora-metrics',
        title: 'DORA Metrics',
        category: 'Technical Debt & Code Quality',
        definition: `DORA metrics are four key software delivery performance metrics identified by the DevOps Research and Assessment (DORA) team at Google. They are the industry standard for measuring engineering team effectiveness:\n\n1. **Deployment Frequency**: How often code is deployed to production. Elite teams deploy on-demand, multiple times per day.\n2. **Lead Time for Changes**: Time from code commit to production deployment. Elite teams achieve less than one hour.\n3. **Change Failure Rate**: Percentage of deployments that cause failures requiring remediation. Elite teams maintain 0-15%.\n4. **Mean Time to Recovery (MTTR)**: How quickly a team can restore service after an incident. Elite teams recover in less than one hour.\n\nThese metrics are backed by years of research across thousands of organizations worldwide and are validated as predictors of both software delivery performance and organizational performance.`,
        whyItMatters: `DORA metrics provide an objective, research-backed way to measure engineering health. They correlate with business outcomes: organizations with elite DORA metrics deliver features faster, have fewer outages, and generate more revenue per engineer.\n\nFor investors and board members, DORA metrics are a proxy for engineering quality during due diligence. Poor DORA metrics indicate hidden technical debt, fragile infrastructure, and teams that will slow down as the product scales.`,
        howToMeasure: `Track deployment frequency through your CI/CD pipeline. Measure lead time from first commit to production deploy. Calculate change failure rate as failed deployments ÷ total deployments. Track MTTR from incident detection to resolution.\n\nBenchmarks (from DORA State of DevOps Report):\n- **Elite**: Deploy on-demand, <1hr lead time, 0-15% failure rate, <1hr recovery\n- **High**: Weekly-monthly deploys, 1 day-1 week lead time, 16-30% failure rate, <1 day recovery\n- **Medium**: Monthly-biannually, 1-6 months lead time, 16-30% failure rate, 1 day-1 week recovery\n- **Low**: Less than biannually, >6 months lead time, >45% failure rate, >6 months recovery`,
        faqs: [
            { question: 'What are DORA metrics?', answer: 'DORA metrics are four research-backed measures of software delivery performance: deployment frequency, lead time for changes, change failure rate, and mean time to recovery.' },
            { question: 'How do I measure DORA metrics?', answer: 'Track deployments through CI/CD pipelines, measure time from commit to production, calculate the percentage of failed deployments, and track incident recovery times.' },
            { question: 'What are good DORA metric benchmarks?', answer: 'Elite teams deploy on-demand with <1hr lead time, 0-15% failure rate, and <1hr recovery. Most teams fall in the medium range with monthly deploys and day-level lead times.' },
        ],
        relatedTerms: ['technical-debt', 'engineering-productivity', 'devops', 'cicd'],
        relatedTools: [{ name: 'Revenue Per Engineer (APER)', url: '/tools/aper' }],
    },
    {
        slug: 'artificial-intelligence',
        title: 'Artificial Intelligence (AI)',
        category: 'AI & Machine Learning',
        definition: `Artificial intelligence is the simulation of human intelligence by computer systems. AI encompasses machine learning, natural language processing, computer vision, robotics, and expert systems. In 2026, AI has moved from experimental to operational, with enterprise AI adoption exceeding 70% globally.

AI in business falls into three categories: predictive AI (forecasting outcomes from data), generative AI (creating new content like text, images, and code), and agentic AI (autonomous systems that take actions on behalf of users). Each category has different cost structures, risk profiles, and ROI timelines.

For product leaders and executives, the critical question is not 'should we use AI?' but 'what are the unit economics of our AI features?' Richard Ewing's AI Unit Economics Benchmark (AUEB) tool helps answer this question by calculating the true cost per useful AI output.`,
        whyItMatters: `AI is transforming every industry, but most AI initiatives fail due to poor unit economics rather than technical limitations. Understanding AI costs, risks, and governance is essential for any technology leader in 2026.`,
        faqs: [
            { question: 'What is AI in simple terms?', answer: 'AI is software that can learn from data and make decisions or predictions. It ranges from simple recommendation engines to complex autonomous agents.' },
            { question: 'How much does AI cost for businesses?', answer: 'AI costs vary enormously. API-based AI (GPT-4, Claude) costs $0.01-0.10 per query. Custom models can cost $100K-$10M to train. Use the AUEB calculator at richardewing.io/tools/aueb to estimate your specific costs.' }
        ],
        relatedTerms: ['large-language-model', 'agentic-ai', 'ai-hallucination', 'prompt-engineering'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
    },
    {
        slug: 'large-language-model',
        title: 'Large Language Model (LLM)',
        category: 'AI & Machine Learning',
        definition: `A Large Language Model is a type of artificial intelligence trained on vast amounts of text data to understand and generate human language. LLMs like GPT-4, Claude, Gemini, and Llama power chatbots, code assistants, content generation, and enterprise AI applications.

LLMs work by predicting the next token (word or word-piece) in a sequence. They're trained on billions of parameters using transformer architecture. The 'large' in LLM refers to both the training data (often trillions of tokens) and the model size (billions of parameters).

The economics of LLMs are unique: unlike traditional software with near-zero marginal cost, LLMs have significant variable costs that scale with usage. Every query costs compute. This creates what Richard Ewing calls the Cost of Predictivity — as you demand higher accuracy, costs scale exponentially.`,
        whyItMatters: `LLMs are the foundation of the 2026 AI revolution, but they introduce variable cost structures that traditional software economics don't account for. Understanding LLM pricing, capabilities, and limitations is essential for any team building AI features.`,
        faqs: [
            { question: 'What is an LLM?', answer: 'A Large Language Model is AI software trained on massive text datasets to understand and generate human language. Examples include GPT-4, Claude, Gemini, and Llama.' },
            { question: 'How much do LLMs cost?', answer: 'LLM costs range from $0.0001/query for small open-source models to $0.10+/query for frontier models like GPT-4. Cost depends on model size, input/output length, and whether you self-host or use APIs.' }
        ],
        relatedTerms: ['artificial-intelligence', 'prompt-engineering', 'ai-hallucination', 'rag', 'cost-of-predictivity'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
    },
    {
        slug: 'ai-hallucination',
        title: 'AI Hallucination',
        category: 'AI & Machine Learning',
        definition: `An AI hallucination occurs when an artificial intelligence system generates output that is confident, fluent, and completely wrong. LLMs hallucinate because they're optimized to produce plausible-sounding text, not factually accurate text.

Hallucinations range from subtle factual errors to completely fabricated citations, statistics, or events. They're particularly dangerous because the AI presents false information with the same confidence as true information, making them hard to detect without expert verification.

Richard Ewing coined the term AI Hallucination Debt to describe the accumulating liability when hallucinated outputs propagate through decision chains. Unlike technical debt which compounds linearly, hallucination debt compounds exponentially as downstream systems treat hallucinated outputs as ground truth.`,
        whyItMatters: `AI hallucinations create legal, financial, and operational risks. Organizations deploying AI without hallucination detection and verification systems accumulate hidden liabilities that can result in regulatory action, customer harm, or financial losses.`,
        faqs: [
            { question: 'What is an AI hallucination?', answer: 'An AI hallucination is when an AI system generates output that sounds correct and confident but is actually factually wrong. LLMs hallucinate because they optimize for plausibility, not accuracy.' },
            { question: 'How do you prevent AI hallucinations?', answer: 'Prevention strategies include retrieval-augmented generation (RAG), human-in-the-loop verification, confidence scoring, and verification infrastructure like Exogram. No approach eliminates hallucinations entirely.' }
        ],
        relatedTerms: ['large-language-model', 'rag', 'ai-governance', 'cost-of-predictivity'],
    },
    {
        slug: 'agentic-ai',
        title: 'Agentic AI',
        category: 'AI & Machine Learning',
        definition: `Agentic AI refers to artificial intelligence systems that can autonomously plan, reason, and take actions to achieve goals with minimal human oversight. Unlike chatbots that respond to prompts, AI agents can browse the web, execute code, call APIs, manage workflows, and make decisions independently.

In 2026, agentic AI is the dominant trend in enterprise AI adoption. Companies are deploying AI agents for customer support, code generation, data analysis, and process automation. Multi-agent systems — where multiple AI agents collaborate — are emerging for complex workflows.

The key challenge with agentic AI is governance: when an AI agent makes a decision autonomously, who is liable? Richard Ewing's analysis of the AI liability gradient shows that as agent autonomy increases, organizational liability increases non-linearly.`,
        whyItMatters: `Agentic AI promises massive productivity gains but introduces new governance, liability, and cost risks. Organizations deploying AI agents without proper oversight frameworks risk regulatory, legal, and financial consequences.`,
        faqs: [
            { question: 'What is agentic AI?', answer: 'Agentic AI is artificial intelligence that can autonomously plan, reason, and take actions to achieve goals — going beyond simple chatbot responses to independently execute complex workflows.' },
            { question: 'Is agentic AI safe?', answer: 'Agentic AI requires robust governance frameworks. Without proper oversight, AI agents can make costly mistakes, create liability, and take actions that conflict with organizational goals.' }
        ],
        relatedTerms: ['artificial-intelligence', 'ai-governance', 'ai-hallucination', 'large-language-model'],
    },
    {
        slug: 'prompt-engineering',
        title: 'Prompt Engineering',
        category: 'AI & Machine Learning',
        definition: `Prompt engineering is the practice of crafting inputs (prompts) to AI language models to elicit desired outputs. It encompasses techniques like few-shot learning, chain-of-thought reasoning, system prompts, and structured output formatting.

Effective prompt engineering can dramatically improve AI output quality and reduce costs. A well-crafted prompt can reduce token usage by 50-80% while improving accuracy, directly impacting the unit economics of AI features.

As AI models become more capable, prompt engineering is evolving from a technical skill to a strategic capability. In 2026, 'prompt engineer' has become an established role, though many predict it will be absorbed into product management and engineering as AI literacy becomes universal.`,
        whyItMatters: `Prompt engineering directly impacts AI costs and quality. Poor prompts waste tokens and produce unreliable outputs. Good prompts reduce costs, improve accuracy, and make AI features economically viable.`,
        faqs: [
            { question: 'What is prompt engineering?', answer: 'Prompt engineering is designing inputs to AI models to get the best possible outputs. It includes techniques like providing examples, specifying output format, and using chain-of-thought reasoning.' },
            { question: 'Is prompt engineering a real job?', answer: 'Yes. In 2026, prompt engineering is an established role at many companies, though the skills are increasingly expected of all product managers and engineers working with AI.' }
        ],
        relatedTerms: ['large-language-model', 'artificial-intelligence', 'rag'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
    },
    {
        slug: 'rag',
        title: 'Retrieval-Augmented Generation (RAG)',
        category: 'AI & Machine Learning',
        definition: `Retrieval-Augmented Generation (RAG) is an AI architecture pattern that combines a language model with a knowledge retrieval system. Instead of relying solely on the model's training data, RAG retrieves relevant documents from a knowledge base and includes them in the prompt, grounding the AI's responses in specific, verifiable information.

RAG reduces hallucinations by giving the model factual context to work with. It's the most popular enterprise AI pattern in 2026 because it allows organizations to use their proprietary data with general-purpose language models without fine-tuning.

The economics of RAG involve balancing retrieval costs (vector database queries, embedding generation) against the cost of hallucination and the alternative cost of fine-tuning. For most enterprise use cases, RAG is significantly cheaper than fine-tuning while providing better accuracy on domain-specific questions.`,
        whyItMatters: `RAG is the standard architecture for enterprise AI applications in 2026. Understanding RAG economics — the cost of retrieval vs. the cost of hallucination — is essential for building AI features with positive unit economics.`,
        faqs: [
            { question: 'What is RAG in AI?', answer: 'RAG (Retrieval-Augmented Generation) is an AI architecture that retrieves relevant documents from a knowledge base before generating responses, grounding AI outputs in factual, verifiable information.' },
            { question: 'Does RAG eliminate AI hallucinations?', answer: 'RAG significantly reduces hallucinations but doesn\'t eliminate them entirely. The AI can still misinterpret or ignore retrieved context. RAG works best when combined with verification and confidence scoring.' }
        ],
        relatedTerms: ['large-language-model', 'ai-hallucination', 'prompt-engineering', 'artificial-intelligence'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
    },
    {
        slug: 'ai-governance',
        title: 'AI Governance',
        category: 'AI & Machine Learning',
        definition: `AI governance is the framework of policies, processes, and controls that guide how an organization develops, deploys, and monitors artificial intelligence systems. It encompasses ethical guidelines, risk management, compliance, accountability, transparency, and oversight.

In 2026, AI governance has moved from optional to mandatory. The EU AI Act requires risk assessments for high-risk AI systems. SEC disclosure rules require companies to report material AI risks. Board members are expected to understand AI governance at a strategic level.

Effective AI governance includes: model risk management, bias testing, hallucination monitoring, cost governance, data privacy controls, human oversight mechanisms, incident response plans, and regular audits.`,
        whyItMatters: `Without AI governance, organizations face regulatory penalties, legal liability, reputational damage, and uncontrolled AI costs. Boards and executives need AI governance frameworks to fulfill their fiduciary duties.`,
        faqs: [
            { question: 'What is AI governance?', answer: 'AI governance is the set of policies, processes, and controls that guide how organizations develop, deploy, and monitor AI systems — covering ethics, risk, compliance, accountability, and oversight.' },
            { question: 'Why is AI governance important in 2026?', answer: 'The EU AI Act, SEC disclosure rules, and increasing AI liability mean organizations must have AI governance frameworks. Without them, companies face regulatory penalties, legal liability, and uncontrolled costs.' }
        ],
        relatedTerms: ['agentic-ai', 'ai-hallucination', 'artificial-intelligence'],
    },
    {
        slug: 'arr',
        title: 'Annual Recurring Revenue (ARR)',
        category: 'SaaS Metrics & Finance',
        definition: `Annual Recurring Revenue (ARR) is the annualized value of recurring subscription revenue. It's the single most important metric for SaaS businesses and is calculated by multiplying Monthly Recurring Revenue (MRR) by 12, or by summing all active annual subscription values.

ARR is the foundation of SaaS valuation. In 2026, public SaaS companies trade at 5-15x ARR depending on growth rate, retention, and profitability. Private companies in growth stage typically value at 10-30x ARR.

ARR only includes recurring revenue — one-time fees, professional services, and usage overages are excluded unless they're contractually recurring. This distinction matters for valuation because investors value predictable, recurring revenue at a significant premium over variable revenue.`,
        whyItMatters: `ARR is the language of SaaS valuation. Whether you're raising funding, preparing for acquisition, or benchmarking performance, ARR and its growth rate determine how the market values your business. Use the Enterprise Value Scenario Engine (EV-SE) at richardewing.io/tools/ev-se to model how ARR changes affect enterprise value.`,
        faqs: [
            { question: 'What is ARR?', answer: 'Annual Recurring Revenue is the yearly value of recurring subscription revenue. It\'s calculated by multiplying MRR by 12 or summing all active annual subscriptions.' },
            { question: 'What is a good ARR growth rate?', answer: 'It depends on stage. Seed to Series A: 3x year-over-year. Series A to B: 2.5-3x. Series B+: 2x. Public companies: 20-30% is strong.' },
            { question: 'How is ARR used in SaaS valuation?', answer: 'SaaS companies are valued as a multiple of ARR. In 2026, multiples range from 5-15x for public companies and 10-30x for high-growth private companies.' }
        ],
        relatedTerms: ['mrr', 'net-revenue-retention', 'churn-rate', 'saas-valuation', 'rule-of-40'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'mrr',
        title: 'Monthly Recurring Revenue (MRR)',
        category: 'SaaS Metrics & Finance',
        definition: `Monthly Recurring Revenue (MRR) is the predictable, recurring revenue a SaaS business earns each month from its subscription customers. MRR is the building block of ARR (Annual Recurring Revenue = MRR × 12).

MRR can be broken into components: New MRR (from new customers), Expansion MRR (upgrades and add-ons from existing customers), Churned MRR (lost from cancellations), and Contraction MRR (downgrades). Net New MRR = New + Expansion - Churned - Contraction.

Tracking MRR components gives you a much richer picture than total MRR alone. If your total MRR is growing but churned MRR is also growing, you have a leaky bucket that will eventually cap your growth.`,
        whyItMatters: `MRR and its components are the pulse of a SaaS business. MRR growth rate, churn rate within MRR, and expansion MRR ratio are leading indicators of company health and valuation trajectory.`,
        faqs: [
            { question: 'What is MRR?', answer: 'Monthly Recurring Revenue is the total predictable subscription revenue earned each month. MRR × 12 = ARR.' },
            { question: 'What are the components of MRR?', answer: 'MRR breaks into New MRR (new customers), Expansion MRR (upgrades), Churned MRR (cancellations), and Contraction MRR (downgrades). Net New MRR = New + Expansion - Churned - Contraction.' }
        ],
        relatedTerms: ['arr', 'churn-rate', 'net-revenue-retention', 'saas-valuation'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'churn-rate',
        title: 'Churn Rate',
        category: 'SaaS Metrics & Finance',
        definition: `Churn rate is the percentage of customers or revenue lost over a given period. Customer churn (logo churn) measures the percentage of customers who cancel. Revenue churn measures the percentage of recurring revenue lost.

Churn is the silent killer of SaaS businesses. Even small churn rates compound dramatically. At 5% monthly churn, you lose 46% of your customers annually. At 3% monthly churn, you lose 31%. This means you need to acquire that many new customers just to stay flat.

Net revenue churn accounts for expansion revenue. If your customers who stay are upgrading enough to offset losses from cancellations, you achieve negative net churn — the holy grail of SaaS where your existing customer base grows without any new acquisitions.`,
        whyItMatters: `Churn determines the ceiling of your SaaS business. No amount of customer acquisition can overcome high churn. Reducing churn from 5% to 3% monthly has a bigger impact on enterprise value than doubling your sales team.`,
        faqs: [
            { question: 'What is a good churn rate for SaaS?', answer: 'For B2B SaaS: <2% monthly or <5-7% annual logo churn is good. For enterprise SaaS: <1% monthly. Negative net revenue churn (expansion exceeds losses) is the gold standard.' },
            { question: 'How do you calculate churn rate?', answer: 'Monthly churn rate = customers lost during month ÷ customers at start of month × 100. Revenue churn = MRR lost ÷ MRR at start of month × 100.' }
        ],
        relatedTerms: ['arr', 'mrr', 'net-revenue-retention', 'saas-valuation'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'net-revenue-retention',
        title: 'Net Revenue Retention (NRR)',
        category: 'SaaS Metrics & Finance',
        definition: `Net Revenue Retention (NRR), also called Net Dollar Retention (NDR), measures the percentage of recurring revenue retained from existing customers over a period, including expansion, contraction, and churn.

NRR is calculated as: (Starting MRR + Expansion - Contraction - Churn) ÷ Starting MRR × 100.

An NRR above 100% means your existing customers are spending more over time — you're growing even without new customers. Elite SaaS companies achieve 120-150% NRR. Snowflake famously reported 158% NRR. Below 100% means your customer base is shrinking.

NRR is the single best predictor of SaaS company valuation. Companies with 130%+ NRR trade at 2-3x higher multiples than companies with 90% NRR, even with similar growth rates.`,
        whyItMatters: `NRR is the #1 metric investors look at for SaaS companies. It measures product stickiness, expansion potential, and customer satisfaction in a single number. If your NRR is below 100%, you have a leaky bucket.`,
        faqs: [
            { question: 'What is a good NRR for SaaS?', answer: 'Below 90%: Concerning. 90-100%: Average. 100-120%: Good. 120-140%: Excellent. 140%+: Elite (think Snowflake, Datadog).' },
            { question: 'What is the difference between NRR and GRR?', answer: 'NRR includes expansion revenue (upgrades). Gross Revenue Retention (GRR) excludes expansion and only measures churn + contraction. GRR can never exceed 100%.' }
        ],
        relatedTerms: ['arr', 'mrr', 'churn-rate', 'saas-valuation', 'rule-of-40'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'rule-of-40',
        title: 'Rule of 40',
        category: 'SaaS Metrics & Finance',
        definition: `The Rule of 40 is a SaaS benchmark that states a healthy software company's combined revenue growth rate and profit margin should equal or exceed 40%. For example, a company growing at 30% with 10% profit margins meets the Rule of 40. A company growing at 60% can afford -20% margins.

The Rule of 40 balances growth and profitability. High-growth companies can justify burning cash if they're growing fast enough. Slower-growing companies need to show profitability. The formula is: Revenue Growth Rate (%) + EBITDA Margin (%) ≥ 40.

In 2026, the Rule of 40 has become the default benchmark for SaaS board meetings and investor presentations. Companies exceeding the Rule of 40 trade at 2-4x higher valuation multiples than those below it.`,
        whyItMatters: `The Rule of 40 is the single most-referenced SaaS benchmark in board rooms and investor meetings. It determines whether your growth-profitability balance is healthy and directly impacts valuation multiples.`,
        faqs: [
            { question: 'What is the Rule of 40?', answer: 'The Rule of 40 states that a SaaS company\'s revenue growth rate plus profit margin should be at least 40%. A company growing 25% with 15% margins meets it (25+15=40).' },
            { question: 'How do you calculate the Rule of 40?', answer: 'Revenue Growth Rate (year-over-year %) + EBITDA Margin (%) = Rule of 40 score. Above 40 is good. Above 60 is elite.' }
        ],
        relatedTerms: ['arr', 'saas-valuation', 'burn-rate', 'unit-economics'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'saas-valuation',
        title: 'SaaS Valuation',
        category: 'SaaS Metrics & Finance',
        definition: `SaaS valuation is the process of determining the economic value of a software-as-a-service business. SaaS companies are typically valued as a multiple of their Annual Recurring Revenue (ARR), with multiples ranging from 3x for slow-growth companies to 30x+ for high-growth, high-retention businesses.

Key factors that drive SaaS valuation multiples include: ARR growth rate, net revenue retention (NRR), gross margins, Rule of 40 score, capital efficiency, market size (TAM), competitive positioning, and team quality.

In 2026, the median public SaaS company trades at approximately 7-8x forward revenue. High-growth companies (40%+ growth) trade at 12-20x. AI-native SaaS companies with strong unit economics command premium multiples.`,
        whyItMatters: `Understanding SaaS valuation is critical for founders, executives, and investors. Whether you're raising capital, planning an exit, or benchmarking performance, knowing how valuation multiples work determines strategic decisions.`,
        faqs: [
            { question: 'How do you value a SaaS company?', answer: 'SaaS companies are typically valued as a multiple of ARR. Multiples range from 3-30x depending on growth rate, retention, profitability, and market conditions.' },
            { question: 'What drives SaaS valuation multiples?', answer: 'Growth rate (most important), NRR, gross margins, Rule of 40 score, capital efficiency, TAM, and competitive moat all influence multiples.' }
        ],
        relatedTerms: ['arr', 'rule-of-40', 'net-revenue-retention', 'unit-economics', 'burn-rate'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'unit-economics',
        title: 'Unit Economics',
        category: 'SaaS Metrics & Finance',
        definition: `Unit economics measures the direct revenues and costs associated with a particular business unit — typically a customer, transaction, or product unit. In SaaS, unit economics focuses on Customer Acquisition Cost (CAC), Lifetime Value (LTV), and the LTV:CAC ratio.

Healthy SaaS unit economics have: LTV:CAC ratio of 3:1 or higher, CAC payback period under 18 months, and gross margins above 70%. When these metrics are healthy, scaling the business generates increasing returns.

For AI products, unit economics are more complex because AI features have significant variable costs (compute, API calls, inference). Richard Ewing's AI Unit Economics Benchmark (AUEB) tool helps companies calculate the true unit economics of AI features, including the Cost of Predictivity.`,
        whyItMatters: `Unit economics determine whether your business model works at scale. Positive unit economics mean every new customer adds value. Negative unit economics mean growth accelerates losses. Many AI products fail because their unit economics are negative.`,
        faqs: [
            { question: 'What are unit economics?', answer: 'Unit economics measures the profit or loss generated by a single unit of your business (usually one customer). In SaaS: LTV (lifetime value) minus CAC (customer acquisition cost).' },
            { question: 'What is a good LTV:CAC ratio?', answer: '3:1 or higher is the benchmark. Below 1:1 means you\'re losing money on every customer. Between 1:1 and 3:1 is concerning.' }
        ],
        relatedTerms: ['arr', 'churn-rate', 'saas-valuation', 'cost-of-predictivity'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }, { name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'burn-rate',
        title: 'Burn Rate & Runway',
        category: 'SaaS Metrics & Finance',
        definition: `Burn rate is the rate at which a company is spending its cash reserves. Monthly burn rate = total monthly expenses minus total monthly revenue. Runway is how many months of cash a company has left at its current burn rate: Runway = Cash Balance ÷ Monthly Burn Rate.

For startups, burn rate is the clock ticking toward either profitability or the next fundraise. A company with $3M in the bank burning $250K/month has 12 months of runway. Best practice is to maintain at least 12-18 months of runway.

Burn multiple — burn rate divided by net new ARR — measures how efficiently you're converting spending into growth. A burn multiple below 2x is efficient. Above 3x is concerning. Above 5x means you're burning cash without proportional growth.`,
        whyItMatters: `Burn rate determines survival. Too many startups run out of cash because they don't track burn rate rigorously or they overestimate future revenue. The burn multiple is increasingly important for investors in 2026.`,
        faqs: [
            { question: 'What is burn rate?', answer: 'Burn rate is how much cash a company spends each month beyond what it earns. If you spend $500K/month and earn $200K/month, your burn rate is $300K/month.' },
            { question: 'How much runway should a startup have?', answer: '12-18 months minimum. Less than 6 months is a red alert. Start fundraising when you have 9-12 months left.' }
        ],
        relatedTerms: ['arr', 'unit-economics', 'saas-valuation', 'rule-of-40'],
        relatedTools: [{ name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }],
    },
    {
        slug: 'product-market-fit',
        title: 'Product-Market Fit',
        category: 'Product Management',
        definition: `Product-market fit (PMF) is the degree to which a product satisfies strong market demand. Marc Andreessen defined it as 'being in a good market with a product that can satisfy that market.' It's the most important milestone for any startup or new product.

Signs of product-market fit include: organic growth without marketing, high retention rates, customers becoming evangelists, demand exceeding supply, and usage data showing deep engagement rather than surface-level adoption.

Signs you DON'T have product-market fit: high churn, users sign up but don't return, growth only comes from paid acquisition, users need extensive onboarding to see value, and feature requests are scattered across unrelated areas.

Richard Ewing's perspective: 'The best AI product I ever led had zero customers' — a reminder that technical excellence doesn't guarantee product-market fit. Validation must be economic, not just technical.`,
        whyItMatters: `Without product-market fit, nothing else matters. Marketing spend is wasted. Engineering effort is misdirected. Hiring is premature. PMF is the prerequisite for everything else.`,
        faqs: [
            { question: 'What is product-market fit?', answer: 'Product-market fit means you\'ve built something that a specific market wants badly enough to pay for, use repeatedly, and recommend to others.' },
            { question: 'How do you measure product-market fit?', answer: 'Sean Ellis test: ask users \'How would you feel if you could no longer use this product?\' If 40%+ say \'very disappointed,\' you have PMF. Also look at retention curves, organic growth, and NPS.' }
        ],
        relatedTerms: ['north-star-metric', 'rice-framework', 'jobs-to-be-done'],
    },
    {
        slug: 'jobs-to-be-done',
        title: 'Jobs To Be Done (JTBD)',
        category: 'Product Management',
        definition: `Jobs To Be Done (JTBD) is a product strategy framework that focuses on the underlying 'job' a customer is trying to accomplish rather than the customer's demographics or the product's features. Developed by Clayton Christensen, Tony Ulwick, and Bob Moesta, JTBD reframes product decisions around customer needs.

The classic example: 'People don't want a quarter-inch drill. They want a quarter-inch hole.' JTBD goes further: they don't even want the hole — they want to hang a family photo to feel a sense of belonging.

JTBD interviews reveal the functional, emotional, and social dimensions of customer needs, leading to products that customers actually want rather than products that check feature boxes.`,
        whyItMatters: `JTBD prevents the most common product failure: building features nobody wants. By understanding the job customers are hiring your product to do, you build solutions that deliver real value.`,
        faqs: [
            { question: 'What is Jobs To Be Done?', answer: 'JTBD is a product strategy framework that focuses on the underlying task or goal a customer is trying to accomplish, rather than on demographics or feature requests.' },
            { question: 'How do you do JTBD research?', answer: 'Conduct \'switching interviews\' — interview customers who recently switched to or from your product. Ask about the timeline of their decision, what triggered the switch, and what job they needed done.' }
        ],
        relatedTerms: ['product-market-fit', 'rice-framework', 'north-star-metric', 'kano-model'],
    },
    {
        slug: 'engineering-productivity',
        title: 'Engineering Productivity',
        category: 'Engineering Management',
        definition: `Engineering productivity measures how effectively a software engineering team converts resources (time, people, money) into valuable software output. It's one of the most debated topics in technology leadership because measuring it incorrectly can damage morale and incentivize the wrong behaviors.

Common productivity metrics include: DORA metrics (deployment frequency, lead time, change failure rate, MTTR), SPACE framework (satisfaction, performance, activity, communication, efficiency), story points completed, and code review turnaround time.

Richard Ewing's perspective: raw productivity metrics like lines of code or story points are misleading. The Revenue Per Engineer (APER) metric connects engineering output to business outcomes — measuring the revenue generated per engineer rather than the activity generated.`,
        whyItMatters: `Engineering typically consumes 20-40% of a technology company's total spend. Improving engineering productivity by even 10-15% has massive financial impact. But measuring productivity wrong (e.g., lines of code) can be worse than not measuring it at all.`,
        faqs: [
            { question: 'How do you measure engineering productivity?', answer: 'Use a combination of DORA metrics (deployment frequency, lead time, change failure rate, MTTR), the SPACE framework, and business outcome metrics like Revenue Per Engineer (APER).' },
            { question: 'What is a good revenue per engineer?', answer: 'Varies by stage. Pre-product-market-fit: not meaningful. Growth stage: $200K-500K. Scale: $500K-1M+. Elite (Stripe, Figma): $1M+. Use the APER calculator at richardewing.io/tools/aper.' }
        ],
        relatedTerms: ['dora-metrics', 'revenue-per-engineer', 'devops', 'cicd'],
        relatedTools: [{ name: 'Revenue Per Engineer (APER)', url: '/tools/aper' }],
    },
    {
        slug: 'revenue-per-engineer',
        title: 'Revenue Per Engineer',
        category: 'Engineering Management',
        definition: `Revenue Per Engineer is a financial efficiency metric that divides a company's total revenue by the number of engineers. It measures how effectively an engineering organization converts headcount into business value.

Benchmarks vary dramatically by stage and business model. Elite companies like Stripe generate $1M+ per engineer. Growth-stage SaaS companies typically range from $200K-$500K per engineer. Enterprise software companies with large professional services components may be lower.

Richard Ewing's APER (Annualized Productivity-to-Engineering Ratio) diagnostic goes beyond simple revenue/headcount by accounting for engineering mix (senior vs. junior), maintenance burden, and AI tooling impact.`,
        whyItMatters: `Revenue per engineer is the metric that connects engineering investment to business outcomes. When a CFO asks 'are we getting enough value from our engineering team?' this is the metric that answers the question.`,
        faqs: [
            { question: 'What is revenue per engineer?', answer: 'Total company revenue divided by number of engineers. It measures how efficiently the engineering team converts headcount into business value.' },
            { question: 'What is a good revenue per engineer?', answer: 'Growth stage: $200K-500K. Scale: $500K-1M. Elite: $1M+. Use the APER diagnostic at richardewing.io/tools/aper for a detailed benchmark.' }
        ],
        relatedTerms: ['engineering-productivity', 'dora-metrics'],
        relatedTools: [{ name: 'Revenue Per Engineer (APER)', url: '/tools/aper' }],
    },
    {
        slug: 'devops',
        title: 'DevOps',
        category: 'Engineering Management',
        definition: `DevOps is a set of practices, tools, and cultural philosophies that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously.

DevOps practices include: continuous integration and continuous delivery (CI/CD), infrastructure as code, automated testing, monitoring and observability, incident management, and blameless postmortems.

In 2026, DevOps has evolved into Platform Engineering — building internal developer platforms that abstract away infrastructure complexity. Related disciplines include DevSecOps (security integrated into the pipeline), MLOps (ML model lifecycle management), and LLMOps (LLM-specific operations).`,
        whyItMatters: `DevOps directly impacts the DORA metrics that predict engineering team performance. Teams with mature DevOps practices deploy faster, fail less, and recover quicker — translating to better business outcomes.`,
        faqs: [
            { question: 'What is DevOps?', answer: 'DevOps combines software development and IT operations to deliver software faster and more reliably through automation, continuous integration, and collaborative practices.' },
            { question: 'What is the difference between DevOps and Platform Engineering?', answer: 'Platform Engineering is the evolution of DevOps. Instead of every team managing their own infrastructure, a platform team builds an internal developer platform that abstracts complexity for all engineering teams.' }
        ],
        relatedTerms: ['dora-metrics', 'cicd', 'engineering-productivity'],
    },
    {
        slug: 'cicd',
        title: 'CI/CD (Continuous Integration / Continuous Delivery)',
        category: 'Engineering Management',
        definition: `CI/CD is a software development practice that automates the process of integrating code changes (CI) and delivering them to production (CD).

Continuous Integration means developers merge code changes frequently (multiple times per day) into a shared repository, where automated tests verify each change. Continuous Delivery extends this by automatically preparing code for release to production. Continuous Deployment goes further by automatically deploying every change that passes tests to production.

CI/CD is the foundation of modern software delivery. Teams with mature CI/CD pipelines achieve deployment frequencies of multiple times per day with change failure rates below 15% — the hallmarks of elite engineering performance per DORA metrics.`,
        whyItMatters: `CI/CD eliminates the 'integration hell' of infrequent, large merges and enables the rapid, reliable delivery that modern businesses require. It's a prerequisite for achieving elite DORA metrics.`,
        faqs: [
            { question: 'What is CI/CD?', answer: 'CI/CD automates code integration and delivery. CI merges and tests code frequently. CD automatically prepares or deploys tested code to production.' },
            { question: 'What tools are used for CI/CD?', answer: 'Popular CI/CD tools include GitHub Actions, GitLab CI, Jenkins, CircleCI, and Vercel (for frontend). Infrastructure tools include Terraform, Pulumi, and AWS CDK.' }
        ],
        relatedTerms: ['devops', 'dora-metrics', 'engineering-productivity'],
    },
    {
        slug: 'digital-transformation',
        title: 'Digital Transformation',
        category: 'Leadership & Governance',
        definition: `Digital transformation is the process of integrating digital technology into all areas of a business, fundamentally changing how it operates and delivers value to customers. In 2026, digital transformation has evolved beyond basic digitization to encompass AI integration, agentic workflows, and data-driven decision making.

Successful digital transformation requires alignment across technology, processes, people, and culture. Most digital transformations fail not because of technology but because of organizational resistance, unclear strategy, or poor change management.

For CIOs and board members, digital transformation is no longer optional — it's a survival requirement. Companies that haven't transformed digitally face competitive obsolescence, talent flight, and inability to leverage AI capabilities.`,
        whyItMatters: `In 2026, digital transformation is the prerequisite for AI adoption, competitive agility, and talent retention. Companies that haven't transformed face existential risk from digitally-native competitors.`,
        faqs: [
            { question: 'What is digital transformation?', answer: 'Digital transformation is fundamentally changing how a business operates and delivers value through digital technology — beyond just digitizing existing processes.' },
            { question: 'Why do most digital transformations fail?', answer: '70% fail due to organizational resistance, unclear strategy, poor change management, or lack of executive sponsorship — not because of technology problems.' }
        ],
        relatedTerms: ['ai-governance', 'fractional-cto'],
    },
    {
        slug: 'technical-insolvency-date',
        title: 'Technical Insolvency Date',
        category: 'Richard Ewing Frameworks',
        definition: `The Technical Insolvency Date (TID) is a framework coined by Richard Ewing that identifies the specific future quarter when an organization's technical debt maintenance will consume 100% of engineering capacity, leaving zero time for new feature development.

The TID is calculated by projecting the current maintenance percentage growth against available engineering hours. If a team currently spends 45% of time on maintenance and that percentage grows 3% per quarter, the Technical Insolvency Date can be calculated as the quarter when maintenance reaches 100%.

Most organizations track technical debt qualitatively. The TID makes it quantitative and urgent. Telling a board 'we have technical debt' gets ignored. Telling a board 'we are 8 quarters from technical insolvency' gets immediate action.

The Product Debt Index (PDI) calculator at richardewing.io/tools/pdi automates this calculation, translating maintenance burden into dollar terms and projecting the Technical Insolvency Date.`,
        whyItMatters: `The TID transforms technical debt from a vague concern into a concrete, dated financial risk. It gives engineering leaders the language to communicate urgency to CFOs and boards.`,
        faqs: [
            { question: 'What is the Technical Insolvency Date?', answer: 'The TID is the specific quarter when maintenance costs consume 100% of engineering capacity, leaving zero time for new development. Coined by Richard Ewing.' },
            { question: 'How do you calculate the Technical Insolvency Date?', answer: 'Measure current maintenance percentage, track its growth rate, and project forward. Use the PDI calculator at richardewing.io/tools/pdi for automated calculation.' }
        ],
        relatedTerms: ['technical-debt', 'innovation-tax', 'feature-bloat-calculus', 'kill-switch-protocol'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'innovation-tax',
        title: 'Innovation Tax',
        category: 'Richard Ewing Frameworks',
        definition: `The Innovation Tax is a framework coined by Richard Ewing that measures the hidden cost of maintenance work that gets reported as innovation investment. It is OpEx masquerading as R&D investment, causing organizations to dramatically overestimate their effective engineering velocity.

When a team reports '65% of time on new features' but the actual number is 23%, the 42-point gap is the Innovation Tax. This gap causes CFOs and boards to overestimate R&D productivity and make poor capital allocation decisions.

The Innovation Tax is insidious because it's invisible in standard reporting. Engineering teams don't intentionally misreport — the maintenance work is scattered across feature work, making it hard to isolate. Bug fixes get bundled into feature sprints. Infrastructure upgrades get coded as feature dependencies.

Benchmark: >40% Innovation Tax is dangerous. >70% is terminal — the organization is approaching the Technical Insolvency Date.`,
        whyItMatters: `The Innovation Tax explains why organizations feel like they're investing heavily in R&D but not getting proportional innovation output. It quantifies the gap between reported and actual innovation investment.`,
        faqs: [
            { question: 'What is the Innovation Tax?', answer: 'The Innovation Tax is the hidden percentage of R&D budget spent on maintenance rather than real innovation. Coined by Richard Ewing. >40% is dangerous, >70% is terminal.' },
            { question: 'How do you measure the Innovation Tax?', answer: 'Track actual time spent on genuine new capability development vs. maintenance, bugs, and keeping-the-lights-on work. The gap between reported R&D and actual innovation is the Innovation Tax.' }
        ],
        relatedTerms: ['technical-insolvency-date', 'technical-debt', 'feature-bloat-calculus'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'cost-of-predictivity',
        title: 'Cost of Predictivity',
        category: 'Richard Ewing Frameworks',
        definition: `The Cost of Predictivity is a framework coined by Richard Ewing that measures the variable cost of AI accuracy. Unlike traditional software with near-zero marginal costs, AI features have costs that scale with usage and accuracy requirements.

The key insight: as AI correctness increases, cost scales exponentially. Moving from 80% accuracy to 95% accuracy often requires a 10x increase in compute and retrieval costs. Moving from 95% to 99% may require another 10x.

This creates margin compression that traditional engineering metrics don't capture. A feature that works beautifully at 100 users may be economically unviable at 100,000 users because AI inference costs scale linearly with usage while accuracy improvements require exponentially more resources.

The AI Unit Economics Benchmark (AUEB) calculator at richardewing.io/tools/aueb helps companies calculate their Cost of Predictivity and identify their AI margin collapse point.`,
        whyItMatters: `Most AI products fail on economics, not technology. The Cost of Predictivity explains why: success makes you poorer unless you understand the exponential relationship between accuracy and cost.`,
        faqs: [
            { question: 'What is the Cost of Predictivity?', answer: 'The Cost of Predictivity measures the escalating cost of AI accuracy. As you demand higher correctness from AI systems, costs scale exponentially. Coined by Richard Ewing.' },
            { question: 'How do you calculate Cost of Predictivity?', answer: 'Total AI compute cost ÷ useful outputs generated = Cost of Predictivity per output. Track this at different accuracy levels to see the exponential curve. Use the AUEB at richardewing.io/tools/aueb.' }
        ],
        relatedTerms: ['ai-hallucination', 'unit-economics', 'artificial-intelligence'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
    },
    {
        slug: 'kill-switch-protocol',
        title: 'Kill Switch Protocol',
        category: 'Richard Ewing Frameworks',
        definition: `The Kill Switch Protocol is a framework coined by Richard Ewing for identifying and deprecating 'Zombie Features' — code that requires ongoing maintenance but generates zero incremental value.

Most organizations add features but never remove them. Over time, 40-60% of a codebase becomes maintenance burden with no corresponding value. The Kill Switch Protocol provides structured criteria for when to kill a feature and how to execute the deprecation safely.

The protocol involves: identifying zombie features (features with maintenance cost but no usage or revenue contribution), quantifying the cost of keeping them alive, assessing deprecation risk, creating a sunset timeline, communicating to affected stakeholders, and executing the removal with rollback capability.`,
        whyItMatters: `Every feature you keep makes every future feature harder. The Kill Switch Protocol provides the organizational discipline to subtract — which is harder than adding but often more valuable.`,
        faqs: [
            { question: 'What is the Kill Switch Protocol?', answer: 'A framework by Richard Ewing for identifying and removing Zombie Features — code that costs money to maintain but generates zero value. Most codebases have 40-60% zombie features.' },
            { question: 'How do you identify zombie features?', answer: 'Look for features with: zero or declining usage metrics, no revenue attribution, ongoing maintenance costs, and no strategic value. If removing it wouldn\'t hurt any business metric, it\'s a zombie.' }
        ],
        relatedTerms: ['feature-bloat-calculus', 'technical-insolvency-date', 'innovation-tax', 'technical-debt'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'feature-bloat-calculus',
        title: 'Feature Bloat Calculus',
        category: 'Richard Ewing Frameworks',
        definition: `Feature Bloat Calculus is a framework coined by Richard Ewing for determining when a feature's maintenance cost exceeds its value contribution. It quantifies the hidden tax of feature accumulation.

The formula factors in: direct maintenance hours, opportunity cost of those hours (what else the engineers could build), and the compounding effect on system complexity (each feature makes every other feature harder to maintain).

The key insight: every feature you add makes every future feature harder. This compounding effect is invisible in sprint-level metrics but devastating at the portfolio level. Feature Bloat Calculus makes this hidden cost visible so product teams can make rational keep/kill decisions.`,
        whyItMatters: `Feature Bloat Calculus quantifies what every experienced engineer feels intuitively: the system is getting harder to work with. It provides the economic argument for subtraction over addition.`,
        faqs: [
            { question: 'What is Feature Bloat Calculus?', answer: 'A framework by Richard Ewing that calculates when a feature\'s maintenance cost exceeds its value contribution, factoring in direct costs, opportunity costs, and complexity compounding.' },
            { question: 'How do you use Feature Bloat Calculus?', answer: 'For each feature: calculate maintenance hours × cost per hour, add opportunity cost of those hours, multiply by complexity factor. Compare to feature\'s revenue contribution. If cost > value, apply the Kill Switch Protocol.' }
        ],
        relatedTerms: ['kill-switch-protocol', 'technical-insolvency-date', 'innovation-tax', 'technical-debt'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'audit-interview',
        title: 'Audit Interview',
        category: 'Richard Ewing Frameworks',
        definition: `The Audit Interview is a hiring protocol coined by Richard Ewing that tests verification skills instead of code generation skills. Candidates are given AI-generated code with hidden flaws and asked to identify the problems.

The premise: AI can generate code. Catching what AI gets wrong is the scarce human skill. Traditional coding interviews test a skill AI now performs better than humans. The Audit Interview tests the skill that matters in the AI age: engineering judgment.

The protocol: present AI-generated code with 3-5 hidden bugs (security vulnerabilities, logic errors, performance issues, edge cases). Candidate has 10 minutes to find issues. Score based on bugs found, severity ranking, and the 'what would you ship?' judgment call.

The 4 Dimensions of Engineering Judgment scored: Verification (finding bugs), Prioritization (ranking severity), Communication (explaining the risk), and Judgment (ship/no-ship decision).`,
        whyItMatters: `When AI writes the code, employers need to hire for judgment, not syntax. The Audit Interview tests the skills that actually matter: finding problems, assessing risk, and making ship decisions.`,
        faqs: [
            { question: 'What is the Audit Interview?', answer: 'A hiring method by Richard Ewing that tests candidates on finding bugs in AI-generated code rather than writing code from scratch. It measures engineering judgment in the AI age.' },
            { question: 'How does the Audit Interview work?', answer: 'Candidates review AI-generated code with hidden flaws. They have 10 minutes to find issues, rank severity, and make a ship/no-ship recommendation. Try it at richardewing.io/tools/audit-interview.' }
        ],
        relatedTerms: ['engineering-productivity', 'artificial-intelligence'],
        relatedTools: [{ name: 'Audit Interview Tool', url: '/tools/audit-interview' }],
    },
    {
        slug: 'product-economist',
        title: 'AI Economist',
        category: 'Richard Ewing Frameworks',
        definition: `A AI Economist is a role and methodology coined by Richard Ewing that treats product decisions as economic decisions. Instead of measuring velocity, story points, or features shipped, a AI Economist measures Return on Invested Capital (ROIC), Cost of Goods Sold (COGS) efficiency, and technical debt in dollar terms.

The AI Economist methodology recognizes that engineering is capital allocation, not just feature delivery. Every sprint is an investment decision. Every feature has ongoing maintenance costs. Every architecture choice has financial implications.

The AI Economist Doctrine holds four principles: Capital Allocation > Agile Theater, The Truth is in the P&L, Kill Zombies Ruthlessly, and Sovereignty Over Dependency.`,
        whyItMatters: `Traditional product management focuses on velocity and features. AI Economics focuses on financial returns. In an era of belt-tightening and AI cost pressures, the economic lens is essential for survival.`,
        faqs: [
            { question: 'What is a AI Economist?', answer: 'A AI Economist treats every product decision as an economic decision, measuring ROIC, COGS efficiency, and technical debt in dollar terms rather than story points or velocity.' },
            { question: 'Who coined the term AI Economist?', answer: 'Richard Ewing coined the term and methodology. He is published in CIO.com, Built In, and Mind the Product on AI economics topics.' }
        ],
        relatedTerms: ['technical-insolvency-date', 'innovation-tax', 'cost-of-predictivity', 'feature-bloat-calculus'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }, { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }, { name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }, { name: 'Revenue Per Engineer (APER)', url: '/tools/aper' }],
    },
    {
        slug: 'vibe-coding',
        title: 'Vibe Coding',
        category: 'AI & Machine Learning',
        definition: `Vibe coding is a term that emerged in 2025-2026 to describe the practice of using AI to generate code through natural language prompts rather than writing code by hand. The developer describes what they want in plain English, and AI tools like Cursor, GitHub Copilot, or Claude generate the implementation.

Vibe coding dramatically increases initial development speed but introduces new risks: AI-generated code may contain subtle bugs, security vulnerabilities, or architectural anti-patterns that are hard to detect. Richard Ewing warns of 'vibe coding debt' — technical debt that accumulates faster because code is generated without deep understanding of its implications.

The 4 Laws of Probabilistic Software Development (coined by Richard Ewing) address the risks of vibe coding: code generated by probability is correct by probability, not by proof.`,
        whyItMatters: `Vibe coding is transforming how software is built in 2026, but it introduces a new category of technical debt. Understanding its risks is essential for any engineering leader.`,
        faqs: [
            { question: 'What is vibe coding?', answer: 'Vibe coding is using AI to generate code through natural language prompts rather than writing code by hand. It\'s fast but introduces risks around code quality and hidden technical debt.' },
            { question: 'Is vibe coding safe?', answer: 'Vibe coding is productive but risky. AI-generated code needs careful review. Without verification skills, teams accumulate \'vibe coding debt\' — technical debt that\'s harder to find because nobody fully understands the generated code.' }
        ],
        relatedTerms: ['technical-debt', 'artificial-intelligence', 'audit-interview'],
        relatedTools: [{ name: 'Audit Interview Tool', url: '/tools/audit-interview' }],
    },
    {
        slug: 'agentic-process-automation',
        title: 'Agentic Process Automation (APA)',
        category: 'AI & Machine Learning',
        definition: `Agentic Process Automation (APA) is the 2026 evolution of Robotic Process Automation (RPA). Where legacy RPA relied on brittle, deterministic scripts and static screen-scraping to move data, APA uses autonomous language models (agents) to complete unstructured, multi-step workflows.

A traditional RPA bot breaks if a vendor changes their invoice template. An APA agent simply reads the new invoice, understands the structural change, extracts the data, and proceeds with the workflow without human intervention or reprogramming.

However, APA introduces massive governance risks. Because the agents interpret data probabilistically rather than deterministically, they require strict Execution Layers and boundary monitoring to prevent autonomous hallucination cascades.`,
        whyItMatters: `APA represents the shift from 'scripted efficiency' to 'autonomous operations'. Organizations deploying APA realize 10x the operational leverage of legacy RPA, but require entirely new architectures to govern the unpredictable nature of the agents.`,
        faqs: [
            { question: 'What is Agentic Process Automation (APA)?', answer: 'The use of autonomous AI agents instead of rigid rules-based scripts to automate complex, unstructured business workflows.' },
            { question: 'How is APA different from RPA?', answer: 'RPA requires structured data and static workflows. APA can handle unstructured data, unexpected variations, and multi-step reasoning.' }
        ],
        relatedTerms: ['agentic-ai', 'execution-layer', 'ai-volatility-tax'],
    },
    {
        slug: 'model-collapse',
        title: 'Model Collapse (Synthetic Data Exhaust)',
        category: 'AI & Machine Learning',
        definition: `Model Collapse describes the mathematical degradation of generative AI models when they are trained recursively on AI-generated data (Synthetic Data Exhaust) rather than human-generated ground truth.

As the internet becomes overwhelmingly populated by AI-generated text, images, and code, subsequent generations of models inevitably scrape and train on this synthetic data. Over time, the models lose the "tails" of the original human data distribution. They begin to continuously output generic, homogenous, and statistically probable blandness—eventually suffering complete cognitive inbreeding.

In 2026, Model Collapse has created a massive premium on verified, purely human datasets. Organizations that possess walled gardens of human-generated ground truth hold the most valuable assets in the AI economy.`,
        whyItMatters: `The AI internet is poisoning itself. Organizations that solely rely on synthetic data generation or public LLMs for specialized tasks will see their outputs homogenize into mediocrity. First-party human data is the ultimate competitive moat.`,
        faqs: [
            { question: 'What is Model Collapse?', answer: 'The degradation of an AI\'s capabilities that occurs when it is increasingly trained on the output of other AIs rather than original human data.' },
            { question: 'What is Synthetic Data Exhaust?', answer: 'The massive volume of AI-generated content flooding the internet, which inevitably gets scraped and used as training data for future models.' }
        ],
        relatedTerms: ['ai-hallucination', 'ai-response-drift'],
    },

    {
        slug: 'hallucination-entropy',
        title: 'Hallucination Entropy',
        category: 'executive',
        definition: 'A measurable metric describing the rate at which an autonomous agent’s output deviates from factual reality or explicit instructions as the operating context window becomes saturated with multi-turn generative logic.',
        whyItMatters: 'As agents execute looped autonomous workflows, their context windows fill with their own generated tokens. High Hallucination Entropy indicates a "Drift" state, where the agent begins recursively believing its own errors. Executives must mandate "Epoch Sweeping"—forcing agents to compress and reset their context every 5 turns—to prevent catastrophic downstream liability.',
        faqs: [
            {
                question: 'Can prompt engineering eliminate this?',
                answer: 'No. Prompt engineering delays it. Hallucination entropy is a fundamental mathematical property of autoregressive token generation at scale.'
            },
            {
                question: 'How is it measured?',
                answer: 'By deploying secondary "Validator Models" whose sole, deterministic job is to benchmark the output of the primary agent against a grounded Truth Database.'
            }
        ],
        relatedTerms: ['model-collapse', 'cost-of-predictivity', 'prompt-injection'],
        relatedTools: [{ name: 'Volatility Tax Auditor (VTA)', url: '/tools/vta' }],
    },
    {
        slug: 'zombie-assets',
        title: 'Zombie Assets',
        category: 'Technical Debt & Code Quality',
        definition: 'Software features or components that are technically alive (running in production, consuming resources) but functionally dead (delivering zero marginal value to customers). They consume compute resources, inflate test suites, and distract engineering attention without producing ROI.',
        whyItMatters: 'Zombie assets silently drain engineering capacity. When neglected, they continuously increase the maintenance burden, pushing an organization faster toward its Technical Insolvency Date where 100% of capacity is spent on maintenance.',
        faqs: [
            { question: 'How do you identify a Zombie Asset?', answer: 'Apply the Rule of Two: identify features that have not been touched by a user in two months or updated by a developer in two years.' }
        ],
        relatedTerms: ['technical-debt', 'innovation-tax', 'scream-test', 'sunset-committee', 'rule-of-two'],
        relatedTools: [{ name: 'Product Debt Index (PDI)', url: '/tools/pdi' }],
    },
    {
        slug: 'rule-of-two',
        title: 'Rule of Two',
        category: 'Richard Ewing Frameworks',
        definition: 'An auditing heuristic used to identify Zombie Assets in a software portfolio. The rule states: look for features that have not been touched by a user in two months or updated by a developer in two years. If a feature hits both markers, it is a prime candidate for deprecation.',
        whyItMatters: 'It provides a clear, objective criteria for identifying features that should be killed, bypassing the emotional attachment creators might have to their past work.',
        faqs: [
            { question: 'What is the Rule of Two?', answer: 'A simple metric to find dead features: no user activity in 2 months, no developer updates in 2 years.' }
        ],
        relatedTerms: ['zombie-assets', 'scream-test', 'kill-switch-protocol']
    },
    {
        slug: 'sunset-committee',
        title: 'Sunset Committee',
        category: 'Leadership & Governance',
        definition: 'An operational governing body within an engineering organization that has one explicit KPI: code retirement and asset destruction. They formalize the deprecation of legacy systems and zombie assets.',
        whyItMatters: 'Removing code takes courage and carries risk. By formalizing asset destruction through a Sunset Committee, organizations remove the emotional weight of deprecation from the original creators and place it within a structured governance framework.',
        faqs: [
            { question: 'What does a Sunset Committee do?', answer: 'They are tasked specifically with identifying and safely deprecating features and systems that no longer provide value.' }
        ],
        relatedTerms: ['zombie-assets', 'technical-insolvency-date', 'kill-switch-protocol']
    },
    {
        slug: 'scream-test',
        title: 'Scream Test',
        category: 'Agile & Delivery',
        definition: 'A crude but effective method for testing whether a presumed Zombie Asset is actually being used. The feature or service is temporarily turned off (first in staging, then production). If no one "screams" (complains about it being missing), the asset is permanently removed.',
        whyItMatters: 'It is often the cheapest and fastest way to prove a feature has no value, especially when analytics or tracking data is missing or unreliable for legacy systems.',
        faqs: [
            { question: 'When should you use the Scream Test?', answer: 'When you strongly suspect a feature is dead but lack the telemetry to prove it with 100% certainty. Alert support teams before turning it off.' }
        ],
        relatedTerms: ['zombie-assets', 'kill-switch-protocol']
    },
    {
        slug: 'mcp-model-context-protocol',
        title: 'Model Context Protocol (MCP)',
        category: 'Architecture Patterns',
        definition: 'An open-source standard introduced by Anthropic that standardizes how AI agents communicate with external tools and data sources. It functions as a universal plug-and-play adapter, eliminating the need for custom-built API integrations for every new tool.',
        whyItMatters: 'Before MCP, connecting an AI agent to an enterprise database required writing fragile, proprietary integration code. MCP establishes a secure, model-agnostic contract. Platform Engineers can build an MCP server once, and any compliant LLM (Claude, GPT-4, Gemini) can instantly securely query it. It is the architectural foundation for scalable Agentic Workflows.',
        faqs: [
            { question: 'Why use MCP over custom APIs?', answer: 'MCP is model-agnostic and provides standardized schemas for authentication, context windows, and tool execution, reducing technical debt.' }
        ],
        relatedTerms: ['agentic-workflow', 'multi-agent-orchestration', 'technical-debt']
    },
    {
        slug: 'multi-agent-orchestration',
        title: 'Multi-Agent Orchestration',
        category: 'Architecture Patterns',
        definition: 'The architectural pattern of coordinating multiple, highly constrained AI agents (often overseen by a router or supervisor agent) rather than relying on a single monolithic "God Agent" to execute complex workflows.',
        whyItMatters: 'Single agents operating in massive ReAct loops suffer from context bloat and hallucination entropy. Multi-Agent Orchestration enforces separation of concerns—one agent writes SQL, another formats the report, while a supervisor agent routes tasks. This dramatically reduces token costs (Cost of Predictivity) and increases reliability.',
        faqs: [
            { question: 'What is the supervisor pattern?', answer: 'A Multi-Agent Orchestration pattern where a fast, cheap routing model delegates specialized tasks to more capable worker models.' }
        ],
        relatedTerms: ['agentic-process-automation', 'hallucination-entropy', 'cost-of-predictivity']
    },
    {
        slug: 'probabilistic-automation',
        title: 'Probabilistic Automation',
        category: 'AI & Machine Learning',
        definition: 'Workflows driven by LLMs that introduce variance into execution. Unlike deterministic automation (where inputs strictly define outputs), probabilistic automation interprets ambiguous inputs and dynamically plans execution paths.',
        whyItMatters: 'While powerful, probabilistic systems are slower, more expensive, and less reliable than rule-based systems. Product leaders must design Hybrid Architectures—using probabilistic agents to structure messy data, then handing that structured data to highly reliable deterministic pipelines (like Zapier or CI/CD).',
        faqs: [
            { question: 'Does Agentic AI replace rule-based automation?', answer: 'No. The most robust enterprise systems use probabilistic agents as "translators" that feed into rigid deterministic automation layers.' }
        ],
        relatedTerms: ['agentic-process-automation', 'ai-hallucination', 'vibe-coding']
    },
    {
        slug: 'ai-cloud-finops',
        title: 'AI Cloud FinOps',
        category: 'Cloud & Infrastructure',
        definition: 'The financial operations discipline specifically adapted for the token economics of Generative AI. It moves beyond traditional VM right-sizing to optimize prompt caching, model routing, and vector database utilization.',
        whyItMatters: 'Traditional FinOps focuses on idle infrastructure time. AI FinOps focuses on active token usage. Without AI Cloud FinOps, inefficient architectures (like naive RAG loops) will exponentially drive up API costs and destroy SaaS gross margins.',
        faqs: [
            { question: 'How is AI FinOps different from Cloud FinOps?', answer: 'Cloud FinOps optimizes uptime and capacity. AI FinOps optimizes token efficiency, context window utilization, and semantic cache hit rates.' }
        ],
        relatedTerms: ['cost-of-predictivity', 'saas-valuation', 'burn-rate']
    },
    {
        slug: 'codebase-intimacy',
        title: 'Codebase Intimacy',
        category: 'Engineering Management',
        definition: 'The deep, contextual, often undocumented understanding that an engineer develops by physically writing, refactoring, and debugging a specific repository over time. It is the intuitive knowledge of why certain architectural trade-offs were made and how edge cases cascade through the system.',
        whyItMatters: 'With the rise of AI code generation ("Vibe Coding"), developers are outsourcing the actual writing of code to LLMs. While this spikes short-term velocity, it destroys Codebase Intimacy. When a Sev-1 outage occurs in AI-generated code six months later, the Mean Time To Recovery (MTTR) skyrockets because no human understands the system\'s execution paths.',
        faqs: [
            { question: 'Why is Codebase Intimacy important?', answer: 'It is the primary defense against catastrophic system failure. A developer who understands the codebase intuitively can fix a critical bug in 10 minutes; a developer who relied on AI to build it might take days to decipher the AI\'s logic.' }
        ],
        relatedTerms: ['probabilistic-tech-debt', 'vibe-coding', 'audit-interview']
    },
    {
        slug: 'cto-agent-delusion',
        title: 'CTO Agent Delusion',
        category: 'Leadership & Governance',
        definition: 'A dangerous executive cognitive bias that assumes probabilistic autonomous AI agents can act as 1:1 replacements for deterministic engineering and QA teams, driven by a fundamental misunderstanding of the difference between syntax generation and system architecture.',
        whyItMatters: 'CTOs suffering from this delusion optimize entirely for headcount reduction and short-term velocity, completely ignoring the massive accumulation of Probabilistic Tech Debt. They replace human Systems Governors with unmonitored AI agents, leading inevitably to systemic crystallization—where the codebase becomes so complex and undocumented that humans can no longer maintain it.',
        faqs: [
            { question: 'What causes the CTO Agent Delusion?', answer: 'It stems from confusing a localized capability (an AI can write a script) with a systemic capability (an AI can architect, deploy, and maintain a secure enterprise monolith).' }
        ],
        relatedTerms: ['agentic-process-automation', 'probabilistic-tech-debt', 'technical-insolvency-date']
    },
    {
        slug: 'probabilistic-tech-debt',
        title: 'Probabilistic Tech Debt',
        category: 'Technical Debt & Code Quality',
        definition: 'A new category of technical debt generated exclusively by LLMs and AI Copilots. Unlike traditional tech debt (which is usually the result of human shortcuts or outdated frameworks), probabilistic tech debt occurs when AI generates code that technically functions but lacks architectural rigor, security foresight, or edge-case handling.',
        whyItMatters: 'Probabilistic tech debt is insidious because it often passes initial unit tests. It acts like a Trojan horse, entering the main branch seamlessly but failing catastrophically under specific production loads. It requires a shift from traditional PR reviews to rigorous Audit Interviews to detect.',
        faqs: [
            { question: 'How is Probabilistic Tech Debt different from normal Technical Debt?', answer: 'Normal tech debt is deterministic—humans made a conscious trade-off. Probabilistic tech debt is hallucinated—the AI generated an anti-pattern without anyone realizing it until it breaks in production.' }
        ],
        relatedTerms: ['codebase-intimacy', 'vibe-coding', 'technical-debt', 'cost-of-predictivity']
    },
    {
        slug: 'ai-production-gap',
        title: 'AI Production Gap',
        category: 'AI & Machine Learning',
        definition: 'The massive financial and technical chasm between a cheap, successful AI prototype (built for demonstrating potential) and a prohibitively expensive production deployment (built for enterprise scale).',
        whyItMatters: 'Executives frequently fund AI initiatives based on the negligible cost of a pilot. The Production Gap occurs when vector database scaling, inference token costs, and necessary prompt redundancy escalate the production budget by 10x-50x, destroying the anticipated ROI.',
        faqs: [
            { question: 'How do you avoid the AI Production Gap?', answer: 'Require engineering to model the Total Compute Cost (TCC) for production scale before writing the first line of code for the pilot.' }
        ],
        relatedTerms: ['total-compute-cost', 'soft-roi-liability', 'ai-cloud-finops']
    },
    {
        slug: 'total-compute-cost',
        title: 'Total Compute Cost (TCC)',
        category: 'Finance & Strategy',
        definition: 'A comprehensive, holistic metric for evaluating AI infrastructure expenditure. Unlike simple API pricing, TCC accounts for prompt token usage, semantic caching infrastructure, vector storage, and continuous model drift correction.',
        whyItMatters: 'If you only look at vendor API pricing, AI looks cheap. TCC forces the engineering organization to expose the hidden architectural costs of running probabilistic systems, allowing the Board and CFO to make accurate margin calculations.',
        faqs: [
            { question: 'Why does TCC matter for SaaS pricing?', answer: 'Without calculating TCC, you cannot accurately define your Cost of Goods Sold (COGS), leading to AI features that accidentally burn cash.' }
        ],
        relatedTerms: ['ai-production-gap', 'burn-rate', 'saas-valuation']
    },
    {
        slug: 'soft-roi-liability',
        title: 'Soft ROI Liability',
        category: 'Finance & Strategy',
        definition: 'The strategic risk incurred when an organization capitalizes expensive software investments based purely on theoretical "developer productivity" metrics, rather than hard P&L improvements.',
        whyItMatters: 'Boards are rejecting "Soft ROI." If an AI tool saves your engineering team 30% of their time, but you do not reduce headcount or increase shipping velocity, that 30% time savings is a financial liability, not an asset.',
        faqs: [
            { question: 'How do you convert Soft ROI to Hard ROI?', answer: 'By explicitly mapping productivity gains to deferred hiring, reduced cloud spend, or accelerated revenue generation.' }
        ],
        relatedTerms: ['total-compute-cost', 'cto-agent-delusion', 'burn-multiple']
    }
];

// Merge new category file terms with existing terms, deduplicating by slug
const existingSlugs = new Set(_baseGlossaryTerms.map(t => t.slug));
const newTerms = allGlossaryTerms.filter(t => !existingSlugs.has(t.slug));
export const glossaryTerms: GlossaryTerm[] = [..._baseGlossaryTerms, ...newTerms];
