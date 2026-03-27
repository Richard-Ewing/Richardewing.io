import { GlossaryTerm } from '../types';

// =============================================================================
// NINTH PASS: Trending terms — vibe coding, SaaS finance, developer productivity
// =============================================================================

export const trendingTermsBatch2: GlossaryTerm[] = [
    {
        title: 'Vibe Coding',
        slug: 'vibe-coding',
        definition: `Vibe Coding is an AI-assisted approach to software development where developers interact with large language models (LLMs) to generate and refine code using natural language commands rather than writing code manually.\n\nCoined by Andrej Karpathy in 2025, vibe coding describes an improvisational, prompt-to-code flow where the developer describes what they want, the AI generates code, and the developer accepts, rejects, or iterates on the output.\n\n**Key characteristics:**\n- Natural language prompts replace manual coding\n- AI generates significant portions of the codebase\n- Developer focuses on direction and verification, not syntax\n- Rapid prototyping becomes dramatically faster\n\n**The risk:** Vibe-coded applications accumulate technical debt at unprecedented speed because the developer may not fully understand the generated code. This creates what Richard Ewing calls "AI Hallucination Debt" — errors embedded invisibly in AI-generated code.`,
        whyItMatters: 'Vibe coding democratizes development but accelerates technical debt accumulation. The Product Economist perspective: code written faster without economic understanding creates debt faster. Verification skill (Audit Interview) becomes the scarce differentiator.',
        category: 'Engineering Management',
        relatedTerms: ['ai-technical-debt', 'ai-hallucination-debt', 'audit-interview-protocol', 'refactoring'],
        faqs: [
            { question: 'Is vibe coding real software engineering?', answer: 'Vibe coding is a valid tool for prototyping and exploration. For production systems, it must be combined with verification, code review, and economic analysis — exactly what the Audit Interview Protocol tests.' },
        ],
    },
    {
        title: 'Burn Multiple',
        slug: 'burn-multiple', tier: 'pillar',
        definition: `The Burn Multiple is a capital efficiency metric that measures how much cash a company consumes to generate each new dollar of net Annual Recurring Revenue (ARR).\n\n**Formula:** Burn Multiple = Net Burn / Net New ARR\n\n**Benchmarks (2025-2026):**\n- **< 1.0x:** Best-in-class efficiency (AI-native startups)\n- **1.0x - 1.5x:** Excellent\n- **1.5x - 2.0x:** Good / median\n- **2.0x - 3.0x:** Concerning\n- **> 3.0x:** Unsustainable\n\nThe burn multiple has emerged as one of the most important metrics for Series A and B boards because it captures capital discipline in a single number that's harder to game than growth rate alone.`,
        whyItMatters: 'In the post-ZIRP era, investors scrutinize capital efficiency above raw growth. The burn multiple tells you the true cost of growth. A company growing 100% with a 3.0x burn multiple is economically weaker than one growing 50% with a 0.8x burn multiple.',
        howToMeasure: 'Divide net cash burn by net new ARR for the period. Include all operating expenses. Lower is better.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['arr', 'cac-payback', 'gross-margin-preservation', 'rule-of-40'],
        faqs: [
            { question: 'What burn multiple do investors want to see?', answer: 'For Series A: under 2.0x. For Series B+: under 1.5x. Top-performing AI-native startups achieve sub-1.0x. The burn multiple has replaced growth rate as the primary indicator of capital discipline.' },
        ],
    },
    {
        title: 'Rule of 40',
        slug: 'rule-of-40',
        definition: `The Rule of 40 is a SaaS benchmark stating that a healthy company's combined revenue growth rate and profit margin (typically EBITDA margin) should equal or exceed 40%.\n\n**Formula:** Growth Rate (%) + Profit Margin (%) ≥ 40%\n\n**Examples:**\n- 30% growth + 10% margin = 40% ✅\n- 50% growth + -5% margin = 45% ✅\n- 15% growth + 10% margin = 25% ❌\n\nThe Rule of 40 allows comparison between high-growth, unprofitable companies and slower-growth, profitable ones. It is the standard benchmark used by public market investors, M&A analysts, and board members to evaluate SaaS business health.`,
        whyItMatters: 'Companies that consistently exceed the Rule of 40 trade at higher valuation multiples. Technical debt directly erodes both sides of the equation — it slows growth (velocity impact) and compresses margins (maintenance cost).',
        howToMeasure: 'Add your YoY revenue growth rate to your EBITDA margin percentage. 40+ is healthy; 50+ is elite.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['arr', 'burn-multiple', 'gross-margin-preservation', 'net-revenue-retention'],
        faqs: [
            { question: 'At what stage does the Rule of 40 apply?', answer: 'Typically $5-10M+ ARR. Earlier-stage companies should focus on product-market fit and unit economics. The Rule of 40 becomes the standard benchmark for Series C+ and pre-IPO companies.' },
        ],
    },
    {
        title: 'Net Revenue Retention (NRR)',
        slug: 'net-revenue-retention', tier: 'pillar',
        definition: `Net Revenue Retention (NRR) measures the percentage of recurring revenue retained from existing customers over a period, including expansion, contraction, and churn.\n\n**Formula:** NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR × 100%\n\n**Benchmarks:**\n- **130%+:** World-class (Snowflake, Datadog levels)\n- **120-130%:** Excellent\n- **110-120%:** Good\n- **100-110%:** Acceptable\n- **< 100%:** Revenue is shrinking without new sales\n\nNRR above 100% means your existing customer base generates more revenue each period even if you acquire zero new customers.`,
        whyItMatters: 'NRR is often valued more than new customer acquisition by SaaS investors because it demonstrates product-market fit, pricing power, and customer satisfaction. Technical debt that degrades product quality directly erodes NRR.',
        howToMeasure: 'Track monthly or annual recurring revenue changes from your starting customer cohort, including expansion, downgrades, and churn.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['arr', 'churn-rate', 'customer-lifetime-value', 'rule-of-40'],
        faqs: [
            { question: 'Why is NRR more important than gross retention?', answer: 'NRR includes expansion revenue — it shows whether customers are spending MORE over time, not just whether they stay. A company with 90% gross retention but 130% NRR is healthier than one with 95% gross retention and 105% NRR.' },
        ],
    },
    {
        title: 'Product-Led Growth (PLG)',
        slug: 'product-led-growth',
        definition: `Product-Led Growth (PLG) is a go-to-market strategy where the product itself is the primary driver of customer acquisition, conversion, and expansion. Users discover, try, and adopt the product before encountering a sales team.\n\n**Key characteristics:**\n- Free tier or freemium model\n- Self-serve onboarding\n- In-product upgrade prompts\n- Usage-based expansion triggers\n- Viral loops and sharing mechanics\n\n**Examples:** Slack (team invites), Figma (collaboration), Notion (templates), and Zoom (meeting links) all used PLG to achieve massive adoption.\n\nRichard Ewing's site practices PLG: free diagnostic tools (PDI, AUEB, Audit Interview) serve as the acquisition layer that drives advisory engagement.`,
        whyItMatters: 'PLG companies have lower customer acquisition costs and faster adoption cycles. However, PLG creates a specific form of technical debt — every free tier user consumes infrastructure without revenue, making unit economics critical.',
        category: 'Growth & Marketing',
        relatedTerms: ['customer-acquisition-cost', 'north-star-metric', 'content-marketing', 'seo-for-saas'],
        faqs: [
            { question: 'Is PLG replacing enterprise sales?', answer: 'PLG complements enterprise sales — it does not replace it. Most successful PLG companies layer sales on top of product-led acquisition. The product creates the pipeline; sales converts high-value accounts.' },
        ],
    },
    {
        title: 'Developer Experience (DevEx)',
        slug: 'developer-experience', tier: 'pillar',
        definition: `Developer Experience (DevEx) is the holistic experience of software developers as they interact with tools, processes, systems, and organizational culture to accomplish their work.\n\n**DevEx encompasses:**\n- **Tooling:** IDE quality, CI/CD speed, debugging tools, documentation\n- **Process:** Code review speed, deployment frequency, approval bottlenecks\n- **Environment:** Build times, test reliability, environment provisioning speed\n- **Culture:** Autonomy, knowledge sharing, on-call burden, meeting load\n\nDevEx has become a critical investment area because it directly impacts developer productivity, retention, and code quality. Companies with strong DevEx report 2x faster delivery and 50% lower engineer turnover.`,
        whyItMatters: 'Poor DevEx is a form of organizational technical debt. It compounds because frustrated developers write worse code, take longer to ship, and leave — creating knowledge loss and hiring costs that further degrade the system.',
        howToMeasure: 'Survey-based metrics (DX Core 4), DORA metrics, build/deploy times, PR review cycle times, and engineer satisfaction scores.',
        category: 'Engineering Management',
        relatedTerms: ['engineering-management-role', 'dora-metrics', 'developer-velocity', 'team-topologies'],
        faqs: [
            { question: 'How much should you invest in DevEx?', answer: 'Leading engineering organizations invest 15-20% of engineering capacity in developer experience improvements (internal tools, CI/CD, testing infrastructure). The ROI is measurable in velocity, retention, and code quality.' },
        ],
    },
    {
        title: 'AI COGS',
        slug: 'ai-cogs',
        definition: `AI COGS (Cost of Goods Sold) refers to the variable costs directly attributable to delivering AI-powered features to customers. Unlike traditional SaaS (near-zero marginal cost per user), AI features have significant per-interaction costs.\n\n**Components of AI COGS:**\n- LLM API fees (OpenAI, Anthropic, Google per-token charges)\n- Embedding generation and vector database queries\n- GPU compute for inference or fine-tuning\n- Data retrieval and processing pipeline costs\n- Monitoring, logging, and observability infrastructure\n- Error handling, retry logic, and fallback model costs\n- Human-in-the-loop review costs\n\n**Impact on SaaS economics:** Traditional SaaS enjoys 80%+ gross margins. AI-heavy SaaS products can see margins compress to 40-60%, fundamentally changing valuation multiples and capital requirements.`,
        whyItMatters: 'AI COGS is the #1 reason AI products fail economically. A feature that costs $0.05 per interaction at 100K interactions/month costs $5K/month in COGS alone. At scale, this can exceed revenue. The AUEB calculator models this.',
        howToMeasure: 'Tag every AI inference call with cost. Aggregate by feature, customer, and time period. Compare to feature-level revenue. The AUEB tool at richardewing.io/tools/aueb automates this analysis.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['ai-unit-economics', 'cost-of-predictivity', 'gross-margin-preservation', 'ai-cost-attribution'],
        relatedTools: [{ name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }],
        faqs: [
            { question: 'How do AI COGS affect valuation?', answer: 'SaaS investors apply valuation multiples based on gross margin tier. Traditional SaaS at 80% margin gets 10-15x ARR multiples. AI SaaS at 50% margin may only get 5-8x. Every percentage point of margin matters at scale.' },
        ],
    },
    {
        title: 'Agentic Workflow',
        slug: 'agentic-workflow',
        definition: `An Agentic Workflow is an automated process where one or more AI agents autonomously plan, execute, and iterate on tasks with minimal human intervention. Unlike simple automation (fixed rules) or basic LLM use (single prompt/response), agentic workflows involve chains of reasoning, tool use, and decision-making.\n\n**Characteristics:**\n- Agents break complex goals into subtasks\n- Each agent can call tools, APIs, and other agents\n- Agents evaluate results and adjust their approach\n- The workflow can branch, retry, and recover from errors\n- Human oversight is optional (but recommended via Exogram)\n\nAgentic workflows are the dominant AI architecture trend for 2025-2026, moving beyond chatbots to autonomous business process automation.`,
        whyItMatters: 'Agentic workflows create significant value but also introduce Orchestration Debt and governance challenges. Without proper governance infrastructure (like Exogram), agentic workflows become unauditable black boxes that make decisions no one can trace or explain.',
        category: 'AI & Machine Learning',
        relatedTerms: ['ai-agent', 'orchestration-debt', 'agentic-governance', 'execution-control-plane'],
        faqs: [
            { question: 'What is the difference between agentic AI and regular AI?', answer: 'Regular AI responds to prompts. Agentic AI plans, reasons, uses tools, and takes autonomous action. The difference is like asking someone a question vs giving them a project and authority to execute it.' },
        ],
    },
    {
        title: 'DORA Metrics',
        slug: 'dora-metrics', tier: 'pillar',
        definition: `DORA Metrics are the four key measures of software delivery performance identified by the DevOps Research and Assessment (DORA) team (now part of Google Cloud). They are the industry standard for measuring engineering team effectiveness.\n\n**The four DORA metrics:**\n1. **Deployment Frequency:** How often code is deployed to production\n2. **Lead Time for Changes:** Time from code commit to production\n3. **Change Failure Rate:** Percentage of deployments causing failures\n4. **Time to Restore Service:** How quickly teams recover from failures\n\n**Performance levels (2025):**\n- **Elite:** Deploy on-demand, < 1 hour lead time, < 5% failure rate, < 1 hour MTTR\n- **High:** Deploy daily-weekly, 1 day-1 week lead time, < 15% failure rate, < 1 day MTTR\n- **Low:** Deploy monthly+, 1-6 months lead time, > 30% failure rate, > 1 week MTTR`,
        whyItMatters: 'DORA metrics are the operational evidence of technical debt impact. High technical debt directly degrades all four metrics — slower deployments, longer lead times, more failures, and slower recovery.',
        howToMeasure: 'Track through CI/CD pipeline data, deployment logs, incident management systems, and source control metrics.',
        category: 'Engineering Management',
        relatedTerms: ['developer-velocity', 'change-failure-rate', 'continuous-deployment', 'developer-experience'],
        faqs: [
            { question: 'Should DORA metrics be used for individual performance?', answer: 'No — DORA metrics measure team and organizational performance, not individual output. Using them for individual evaluation creates perverse incentives.' },
        ],
    },
    {
        title: 'AI Hallucination',
        slug: 'ai-hallucination',
        definition: `An AI Hallucination is a response generated by an AI model that is factually incorrect, fabricated, or not grounded in the training data or provided context. The model generates confident, well-structured output that appears correct but contains invented facts, citations, or conclusions.\n\n**Types:**\n- **Factual hallucinations:** Incorrect statements presented as facts\n- **Citation hallucinations:** References to non-existent papers, URLs, or sources\n- **Reasoning hallucinations:** Logical conclusions based on incorrect premises\n- **Context hallucinations:** Answers that ignore or contradict provided context\n\nHallucinations are not bugs — they are inherent to how language models work. Models generate statistically likely text, not verified truth. This is why Exogram's Truth Ledger exists as verification infrastructure separate from generation.`,
        whyItMatters: 'AI hallucinations create AI Hallucination Debt — errors embedded in AI-generated content, code, and decisions that propagate through systems and business processes. Unlike software bugs, hallucinations may not produce errors; they produce wrong answers that look right.',
        category: 'AI & Machine Learning',
        relatedTerms: ['ai-hallucination-debt', 'truth-ledger', 'ai-guardrails', 'rag-architecture'],
        faqs: [
            { question: 'Can you eliminate AI hallucinations?', answer: 'You can reduce them through techniques like RAG, fine-tuning, and constrained generation. But you cannot eliminate them from language models because hallucination is inherent to probabilistic text generation. This is why verification infrastructure (like Exogram) exists as a separate layer.' },
        ],
    },
];
