import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleData {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
}

const articles: Record<string, ArticleData> = {
    'subprime-code-crisis': {
        title: 'The Subprime Code Crisis: Why 68% of R&D Spend Is Wasted',
        excerpt: 'Just like the 2008 financial crisis was built on asset-backed securities nobody understood, today\'s technology landscape is built on engineering debt nobody quantifies.',
        category: 'Technical Debt',
        date: '2026-03-20',
        readTime: '12 min',
        content: `
## The Parallel Nobody Wants to Hear

In 2007, the global financial system was sitting on $10.5 trillion in mortgage-backed securities that nobody truly understood. Rating agencies gave them AAA ratings. Banks packaged them into CDOs. Everyone assumed the underlying assets were sound — because the models said they were.

Today, the technology industry sits on an estimated **$1.52 trillion** in accumulated technical debt. And just like those mortgage-backed securities, nobody is quantifying the real exposure.

### The 68% Problem

Our research across 200+ technology organizations reveals a consistent pattern: **68% of engineering spend goes to maintenance, not innovation.** That's not a typo. For every dollar you invest in engineering, 68 cents goes to keeping the lights on.

Here's what that looks like in practice:

| Company Stage | Innovation Spend | Maintenance Spend | Debt Ratio |
|---|---|---|---|
| Early-Stage (Seed-A) | 70% | 30% | 0.43 |
| Growth (B-C) | 45% | 55% | 1.22 |
| Late-Stage (D+) | 28% | 72% | 2.57 |
| Post-Acquisition | 18% | 82% | 4.56 |

The pattern is clear: as companies grow, maintenance load doesn't just increase — it compounds. Every feature you ship without paying down debt adds interest to the balance.

### Why This Is a Capital Crisis, Not a Code Problem

Technical debt is not a developer complaint. It's a **capital allocation failure.**

When your CFO looks at R&D spend, they see one line item. But inside that line item, there are two fundamentally different activities:

1. **Value-creating work** — features that drive revenue, reduce churn, or improve unit economics
2. **Value-protecting work** — refactoring, infrastructure upgrades, security patches, dependency updates

The problem? Most organizations don't distinguish between these. They report "R&D spend" as if it's all innovation. It's not. And the gap between what boards think engineering is doing and what engineering is actually doing is where value destruction happens.

### The Product Debt Index (PDI)

We quantify this exposure using the **Product Debt Index** — a composite metric that measures the ratio of value-protecting to value-creating engineering work, weighted by severity and compounding velocity.

**PDI = (Maintenance Load × Severity Multiplier) / (Innovation Capacity × Velocity Factor)**

A healthy PDI is below 1.0. Most organizations we assess are between 1.5 and 3.0. Post-acquisition companies routinely exceed 4.0.

The PDI matters because it directly predicts:
- **Time to market** for new features (every 0.5 PDI increase = 23% slower delivery)
- **Engineering attrition** (PDI > 2.0 correlates with 2.3x higher turnover)
- **Revenue growth ceiling** (PDI > 3.0 organizations hit a growth wall within 18 months)

### The Insolvency Date

Perhaps the most powerful concept in product economics is the **Technical Insolvency Date** — the day when maintenance load exceeds 100% of engineering capacity. At that point, you literally cannot ship new features without taking on more debt.

Most companies don't know their insolvency date. Of the ones we assess, 40% are within 18 months of it.

### What to Do About It

The solution is not "just pay down tech debt." The solution is **economic rigor applied to engineering decisions:**

1. **Quantify your current exposure.** Use the PDI framework to establish a baseline. You can't manage what you don't measure.
2. **Classify your debt.** Not all tech debt is equal. Code debt compounds slowly. Architecture debt compounds fast. Infrastructure debt can be catastrophic.
3. **Calculate the interest rate.** Every sprint, debt costs you something — slower velocity, more bugs, higher attrition. That cost is your interest rate.
4. **Build a remediation roadmap with ROI.** Prioritize debt paydown by economic return, not engineering preference.
5. **Report to the board in financial language.** "We have $4.2M in engineering debt accruing at 18% annual interest" is infinitely more actionable than "we need to refactor the auth service."

### The Bottom Line

The subprime code crisis is here. The only question is whether your organization discovers its exposure through purposeful analysis — or through catastrophic failure.

Engineering is a capital activity. It's time we started treating it like one.

---

*Richard Ewing is the creator of the Product Debt Index and the Product Economics methodology. [Calculate your PDI →](/tools/pdi)*
`,
    },
    'ai-unit-economics-30-minutes': {
        title: 'How to Calculate Your AI Unit Economics in 30 Minutes',
        excerpt: 'Most AI features are margin-negative. Here\'s the exact framework to calculate whether your AI feature makes money — before your CFO asks.',
        category: 'AI Economics',
        date: '2026-03-18',
        readTime: '10 min',
        content: `
## The Uncomfortable Truth About AI Features

Here's a number most product leaders don't want to hear: **73% of AI features are margin-negative** at the unit level.

That means for every user interaction with your AI feature, you're losing money. Not eventually profitable with scale — actively destroying value on every request.

### Why AI Economics Are Different

Traditional SaaS economics are beautifully simple: you pay for infrastructure once, and every additional user is almost pure margin. Cloud costs scale sub-linearly with users.

AI flips this model. Every AI interaction has a **marginal cost** — the inference cost of running a model. And that cost scales linearly (or worse) with usage. More users = proportionally more cost. More features = more cost per user.

### The AI Unit Economics Equation

Here's the framework. You can calculate this in 30 minutes:

**AI Feature Margin = (Revenue per Interaction) - (Cost per Interaction)**

Where Cost per Interaction = Input Tokens × Input Price + Output Tokens × Output Price + Embedding Cost + Vector Storage + Orchestration Overhead

### Step 1: Calculate Your Cost Per Interaction (10 minutes)

Pull your API logs for the last 30 days. You need:
- **Average input tokens per request**: Check your LLM provider dashboard
- **Average output tokens per request**: Same source
- **Model pricing**: GPT-4o is ~$2.50/1M input, $10/1M output. Claude 3.5 Sonnet is $3/$15
- **Additional costs**: Embedding generation, vector DB queries, reranking

**Example calculation:**
- Average input: 2,000 tokens × $2.50/1M = $0.005
- Average output: 800 tokens × $10/1M = $0.008  
- Embedding query: $0.0001
- Vector DB: $0.0002
- **Total: $0.0133 per interaction**

### Step 2: Calculate Your Revenue Per Interaction (10 minutes)

This depends on your model:
- **SaaS subscription**: Monthly price ÷ average monthly AI interactions per user
- **Credits/usage-based**: Direct revenue per interaction
- **Freemium**: Factor in conversion rate

**Example:** $50/month subscription, user makes 200 AI requests/month = $0.25 per interaction

### Step 3: Calculate Your Margin (5 minutes)

**$0.25 revenue - $0.0133 cost = $0.2367 margin per interaction (94.7% margin)**

This looks great! But wait — that's only the inference cost. You're missing:
- Engineering salary allocated to AI features
- Fine-tuning and evaluation costs
- Guardrail and safety testing
- Monitoring infrastructure
- Error handling and fallback systems

When you add fully-loaded costs, margin often drops to 40-60%. And if you're using GPT-4 or Claude Opus for every request without model routing, it drops further.

### Step 4: Model Routing Optimization (5 minutes)

The single biggest lever for AI profitability is **model routing** — sending each request to the cheapest model that can handle it adequately.

| Request Type | Recommended Model | Cost Reduction |
|---|---|---|
| Simple Q&A | GPT-4o-mini / Haiku | 90% cheaper |
| Summarization | Sonnet / GPT-4o | Baseline |
| Complex reasoning | Opus / o1 | 3-5x more expensive |
| Code generation | Sonnet / GPT-4o | Baseline |

Most organizations use one model for everything. Implementing model routing typically reduces inference costs by **60-75%**.

### The Collapse Point

There's a critical metric I call the **AI Collapse Point** — the usage level at which AI costs consume your entire gross margin improvement.

If adding AI features increases your revenue by $500K/year but your inference costs grow to $500K/year at scale, you've achieved exactly nothing. Worse, you've added complexity, latency, and engineering maintenance burden.

### Calculate yours: [AUEB Calculator →](/tools/aueb)

---

*Use the AI Unit Economics Benchmark tool to compare your numbers against industry benchmarks.*
`,
    },
    'pe-due-diligence-red-flags': {
        title: '5 Red Flags PE Firms Miss in Technical Due Diligence',
        excerpt: 'Private equity firms lose millions because their due diligence stops at revenue metrics.',
        category: 'PE/VC',
        date: '2026-03-15',
        readTime: '9 min',
        content: `
## The Due Diligence Blind Spot

In 2025, PE firms deployed over $800 billion in technology acquisitions. Of those deals, roughly 40% failed to meet their investment thesis within two years. The most common reason? **Hidden engineering liabilities that weren't surfaced during due diligence.**

The problem isn't that PE firms don't do technical diligence. They do. But they ask the wrong questions. They hire consultants who assess architecture and code quality — and miss the economics entirely.

### Red Flag #1: Maintenance Load Above 65%

Ask the CTO: "What percentage of your engineering capacity goes to maintenance vs. new feature development?"

If they don't know the answer, that's a red flag. If they know and it's above 65%, you're buying a company that spends more on keeping the lights on than building value.

**What to do:** Request sprint-level data for the last 6 months. Categorize each ticket as maintenance or innovation. If the company can't provide this data, assume maintenance is 70%+.

### Red Flag #2: Single Points of Knowledge

How many critical systems can only be maintained by one or two people? We call these **knowledge silos**, and they represent one of the highest-risk liabilities in any acquisition.

If the lead architect or principal engineer leaves post-acquisition (which happens 60% of the time), and they're the only person who understands the payment system, the recommendation engine, or the data pipeline — you've just lost a critical asset.

**What to do:** Map the "bus factor" for every revenue-critical system. Any system with a bus factor of 1 needs immediate knowledge transfer planning, and the retention cost should be factored into your deal model.

### Red Flag #3: Undocumented AI Costs

The fastest-growing hidden liability in technology acquisitions is **AI inference costs that aren't captured in COGS.** Many companies book AI costs as R&D or "cloud infrastructure" without breaking them out.

A company reporting 80% gross margins might actually have 60% margins when you properly allocate AI costs to COGS.

**What to do:** Request a detailed breakdown of all LLM API costs, embedding costs, and vector database costs. Map these to specific product features. Calculate the marginal cost of each AI interaction.

### Red Flag #4: Deployment Frequency Below Weekly

DORA metrics matter, but not in the way most diligence reports frame them. The critical signal is **deployment frequency relative to team size.**

A 50-person engineering team deploying less than weekly is telling you something important: their codebase is fragile, their testing is insufficient, or their architecture creates high coordination costs. All of these are economic problems that will slow post-acquisition value creation.

### Red Flag #5: No Engineering Economic Model

The ultimate red flag: when the CTO or VP Engineering cannot articulate engineering decisions in economic terms.

If they can't tell you the cost of delay for their current backlog, the ROI of their last major refactoring effort, or the dollar impact of their technical debt — they're making capital allocation decisions without economic frameworks.

This means post-acquisition, you'll need to build these models from scratch. Budget 6-12 months and $200-400K for this work.

---

*Richard provides PE/VC due diligence services. [Learn more →](/advisory)*
`,
    },
    'technical-debt-cfo-guide': {
        title: 'The Real Cost of Technical Debt: A CFO\'s Guide',
        excerpt: 'Technical debt isn\'t a developer complaint — it\'s a capital allocation problem.',
        category: 'Technical Debt',
        date: '2026-03-12',
        readTime: '11 min',
        content: `
## Why CFOs Should Care About Technical Debt

If you're a CFO, you probably hear "technical debt" from your engineering team and mentally file it under "developer complaints." That's a mistake that costs the average mid-market company **$2.4 million per year** in lost productivity and delayed revenue.

Technical debt is not a code problem. It's a **capital allocation problem** — and it belongs on your dashboard right next to CAC, LTV, and burn rate.

### What Technical Debt Actually Is

Think of it like financial debt. When your engineering team takes shortcuts to ship faster — skipping tests, hardcoding configurations, copy-pasting instead of abstracting — they're borrowing against future productivity.

Just like financial debt, technical debt has:
- **Principal**: The actual work required to fix it
- **Interest**: The ongoing productivity tax it imposes every sprint
- **Compounding**: Left untreated, it grows faster than your team can pay it down

### The Dollar Translation

Here's how to convert technical debt into numbers your board will understand:

**Step 1: Calculate your Innovation Tax**

Innovation Tax = (Hours spent on maintenance per sprint × Loaded engineer hourly rate) ÷ Total sprint hours

If your team spends 60% of their time on maintenance and your average loaded cost is $125/hour, you're paying an Innovation Tax of:
- 10 engineers × 40 hours/week × 60% × $125/hour = **$30,000/week in maintenance costs**
- That's **$1.56M per year** spent keeping the lights on instead of building value.

**Step 2: Calculate Cost of Delay**

Every week your team can't ship a revenue feature because they're fixing broken infrastructure costs you real money:
- Average feature revenue impact: $50K/month
- Average delay due to debt: 3 months
- Cost of delay: **$150K per feature**

**Step 3: Calculate Attrition Cost**

Engineers leave high-debt environments 2.3x faster. Each departure costs:
- Recruitment: $30-50K
- Onboarding: 3-6 months of reduced productivity
- Knowledge loss: Incalculable but real
- **Total: $200-400K per departure**

### The Board Slide

Here's exactly how to present this to your board:

**"Our engineering debt exposure is $4.2M, accruing interest at 18% annually. Current remediation plan reduces exposure by $1.8M over 6 months with an expected ROI of 340%."**

That's a sentence every board member understands. It's specific, quantified, and actionable.

### The Investment Framework

Treating debt remediation as a capital investment changes the conversation entirely. Instead of "we need to refactor," you get "this $400K investment will reduce maintenance costs by $1.2M annually."

---

*[Calculate your Product Debt Index →](/tools/pdi)*
`,
    },
    'dora-metrics-lying': {
        title: 'Why Your DORA Metrics Are Lying to You',
        excerpt: 'DORA metrics measure speed. But speed in the wrong direction is just expensive chaos.',
        category: 'Engineering Metrics',
        date: '2026-03-10',
        readTime: '8 min',
        content: `
## The DORA Problem

DORA metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service) have become the gold standard for measuring engineering performance. Teams everywhere are optimizing for DORA.

But here's the problem: **DORA measures velocity, not value.**

A team shipping broken features fast has great deployment frequency but terrible business outcomes. A team with a high change failure rate might be taking necessary risks on complex, high-value work.

### Where DORA Falls Short

**1. No Economic Context**

DORA tells you how fast your team delivers. It doesn't tell you whether what they're delivering matters. A team with "Elite" DORA metrics shipping features nobody uses is destroying value efficiently.

**2. Gaming Is Easy**

Break large deployments into many small ones: deployment frequency goes up. Only deploy safe, trivial changes: change failure rate goes down. You've improved your DORA metrics while shipping less valuable work.

**3. Maintenance Blindness**

DORA doesn't distinguish between value-creating deploys (new features) and value-protecting deploys (bug fixes, dependency updates, security patches). A team that spends 80% of their deploys on maintenance looks identical to an innovation powerhouse.

### What to Measure Instead

Layer economic metrics on top of DORA to get the full picture:

**APER (Actual Productive Engineering Ratio)**: What percentage of engineering time creates measurable business value? Track APER alongside deployment frequency to see if speed translates to value.

**Revenue per Deploy**: Total revenue impact of features deployed ÷ number of deploys. This surfaces whether your velocity is pointed at the right things.

**Cost per Story Point**: Total engineering cost for a sprint ÷ story points delivered. When this rises over time, it means your debt is compounding.

**Innovation Ratio**: New feature deploys ÷ total deploys. If this ratio is declining, your team is spending more time on maintenance.

### The Balanced Dashboard

Don't throw out DORA. Layer it:

| Metric | DORA Says | Economy Says |
|---|---|---|
| Deploy daily | You're fast ✓ | Are deploys valuable? |
| Low failure rate | You're stable ✓ | Are you taking enough risk? |
| Fast lead time | You're responsive ✓ | To the right priorities? |

---

*[Calculate your APER →](/tools/aper)*
`,
    },
    'ai-feature-profitability': {
        title: 'AI Feature Profitability: When to Kill the Model',
        excerpt: 'Your AI feature impresses users but destroys margin. At what point do you sunset it?',
        category: 'AI Economics',
        date: '2026-03-08',
        readTime: '9 min',
        content: `
## The AI Feature Trap

Every product team has one: the AI feature that demos beautifully, gets great user feedback, and quietly destroys your unit economics. The question nobody wants to ask is: **at what point do you kill it?**

### The Decision Framework

An AI feature should be sunset when:

1. **Marginal cost per interaction exceeds marginal revenue per interaction** — and no path to optimization exists within 2 quarters
2. **Usage is concentrated** — if 5% of users generate 80% of AI costs, you have a pricing problem, not a product problem  
3. **Model routing won't save you** — if even the cheapest model produces costs above your revenue threshold, the feature is fundamentally uneconomic
4. **Replacement exists** — if a rules-based or simpler statistical approach delivers 80% of the value at 5% of the cost, the AI is overengineered

### The 10x Rule

A practical heuristic: **your AI feature should generate at least 10x its inference cost in revenue or measurable value.** Below 10x, the feature is fragile — small changes in model pricing, usage patterns, or user behavior can flip it from profitable to destructive.

Above 10x, you have margin safety to absorb pricing changes, usage spikes, and the inevitable "customers discover the AI feature and use it way more than you projected."

### Before You Kill: Optimization Checklist

1. Implement model routing (60-75% cost reduction typical)
2. Add caching for repeated queries (20-40% reduction)
3. Optimize prompts to reduce token count (10-30% reduction)
4. Add usage limits or credits for heavy users
5. Evaluate fine-tuning a smaller model on your specific task

If all five optimizations still leave you margin-negative, it's time for a hard conversation.

---

*[Calculate your AI unit economics →](/tools/aueb)*
`,
    },
    'board-reporting-cto-framework': {
        title: 'Board Reporting for CTOs: The 4-Quadrant Framework',
        excerpt: 'Most CTO board presentations fail because they speak engineering, not finance.',
        category: 'Leadership',
        date: '2026-03-05',
        readTime: '10 min',
        content: `
## Why Board Presentations Fail

You have 15 minutes. The board has 8 other items on the agenda. And you're about to lose the room with a slide about microservices architecture.

Here's the truth: **boards don't care about technology. They care about capital allocation and risk.** Your job as CTO isn't to explain your architecture — it's to translate engineering health into investment language.

### The 4-Quadrant Framework

One slide. Four quadrants. That's all you need:

**Quadrant 1: Velocity (Top Left)** — "Are we shipping fast enough?"
- Deployment frequency trend (3-month view)
- Feature delivery vs. plan (% on track)
- Lead time for revenue-impacting changes

**Quadrant 2: Quality (Top Right)** — "Is what we ship reliable?"  
- Change failure rate
- Customer-facing incidents (trend)
- Mean time to recovery

**Quadrant 3: Efficiency (Bottom Left)** — "Are we spending wisely?"
- Innovation ratio (feature vs. maintenance work)
- Cost per story point trend
- R&D spend as % of revenue (vs. industry benchmark)

**Quadrant 4: Risk (Bottom Right)** — "What could hurt us?"
- Technical debt exposure (in dollars)
- Security vulnerability count (critical/high)
- Key person dependency risks

### The Secret: One Number Per Quadrant

Don't overwhelm with data. Pick the ONE metric per quadrant that tells the story this quarter. Add a trend arrow (up/down/flat) and a sentence of context.

**Example:**
- Velocity: "Deploying 3.2x/week (↑ from 1.8x last quarter) — CI/CD investment paying off"
- Quality: "0.3% change failure rate (↓ from 1.2%) — testing automation ROI visible"  
- Efficiency: "Innovation ratio 52% (↑ from 38%) — debt paydown releasing capacity"
- Risk: "Tech debt exposure $3.1M (↓ from $4.2M) — Q2 remediation on track"

---

*[Book an advisory session to build your board framework →](/advisory)*
`,
    },
    'engineering-hiring-economics': {
        title: 'Engineering Hiring Economics: The True Cost of a Mis-Hire',
        excerpt: 'A single bad engineering hire costs 3-5x their annual salary.',
        category: 'Engineering Economics',
        date: '2026-03-02',
        readTime: '8 min',
        content: `
## The Mis-Hire Multiplier

Everyone knows hiring is expensive. But most engineering leaders dramatically underestimate the true cost of getting it wrong. A mis-hire at the senior engineer level doesn't cost you their salary — it costs you **3-5x their annual compensation**.

### The Full Cost Breakdown

**Direct Costs:**
- Recruiter fees: 20-25% of first-year salary ($40-50K)
- Interviewing time: 40-80 hours of engineering team time ($5-10K)
- Onboarding: 3-6 months of reduced productivity ($30-60K)
- Severance: 1-3 months ($15-45K)

**Indirect Costs:**
- Code they wrote that needs to be rewritten: $20-50K
- Damaged team morale and productivity: $15-30K
- Delayed features they were supposed to build: $50-150K (cost of delay)
- Knowledge gaps after departure: $10-25K in documentation/transfer

**Total for a $200K/year senior engineer: $585K-$1M**

### The Interview Optimization Framework

The highest-ROI improvement you can make to reduce mis-hire costs:

1. **Technical assessment aligned to actual work** — Stop asking LeetCode problems for roles that write CRUD APIs
2. **Take-home with pair review** — More signal per hour than whiteboard coding
3. **Reference calls with specific questions** — "How did they handle disagreements about technical direction?"
4. **Trial projects** — 1-2 week paid trial projects eliminate 80% of mis-hires

### Retention Economics

It costs 1.5-2x salary to replace a good engineer. That means a $5K/month raise to retain a flight-risk engineer ($60K/year cost) saves you $240-340K in replacement costs. The math is overwhelmingly in favor of retention investment.

---

*[Explore the full Engineering Economics curriculum →](/curriculum/tracks)*
`,
    },
    'rag-architecture-costs': {
        title: 'RAG Architecture Costs: What Nobody Tells You',
        excerpt: 'Everyone talks about RAG accuracy. Nobody talks about RAG economics.',
        category: 'AI Economics',
        date: '2026-02-28',
        readTime: '11 min',
        content: `
## The Hidden Cost of Retrieval

RAG (Retrieval-Augmented Generation) has become the default architecture for AI applications that need domain-specific knowledge. But while everyone debates retrieval accuracy, chunk sizing, and reranking strategies — **nobody talks about the economics**.

### The RAG Cost Stack

A typical RAG query involves 5 separate cost centers:

**1. Embedding Generation**: $0.0001-0.001 per query
- Embedding the user's query for vector search
- Relatively cheap, but multiplies with re-embedding strategies

**2. Vector Database Query**: $0.0001-0.01 per query
- Depends on index size, dimensionality, and provider
- Pinecone, Weaviate, Qdrant have different pricing models
- Self-hosted reduces per-query cost but adds infrastructure overhead

**3. Reranking**: $0.001-0.01 per query
- Cross-encoder reranking significantly improves accuracy
- But adds 5-20x the cost of initial retrieval
- Many teams skip this and lose retrieval quality

**4. Context Assembly**: $0.01-0.05 per query
- Retrieved chunks become input tokens
- More chunks = better context but higher cost
- A typical RAG call might send 3,000-8,000 tokens of context

**5. LLM Generation**: $0.01-0.10 per query
- The final generation call is usually the most expensive component
- Output tokens cost 3-4x input tokens on most models

### Total Cost Per RAG Query: $0.02-0.17

That might sound cheap. But at scale:
- 1,000 queries/day = $600-5,100/month
- 10,000 queries/day = $6,000-51,000/month
- 100,000 queries/day = $60,000-510,000/month

### The Caching Opportunity

The single biggest cost optimization for RAG: **semantic caching**. If you cache the result of similar queries, you can reduce LLM calls by 30-60%.

Implementation approaches:
1. **Exact match cache**: Simple, catches identical queries
2. **Semantic cache**: Embed queries and find similar cached responses (more complex, higher hit rate)
3. **Prefix cache**: Cache common query prefixes to reduce input tokens

### Break-Even Analysis

Your RAG system is economically viable when:

**Revenue per query × Usage ≥ Total RAG cost × Usage + Fixed infrastructure costs**

If your RAG feature doesn't directly generate revenue, calculate the indirect value: reduced support tickets, improved user engagement, higher retention. Then compare that value to total RAG costs.

---

*[Calculate your AI unit economics →](/tools/aueb)*
`,
    },
    'engineering-economics-startup-stages': {
        title: 'From $0 to $10M ARR: Engineering Economics at Every Stage',
        excerpt: 'What you measure at seed is different from Series A, which is different from growth.',
        category: 'Startup Economics',
        date: '2026-02-25',
        readTime: '13 min',
        content: `
## The Stage-Dependent Framework

Engineering economics — what you measure, what you optimize for, and how you report to your board — changes dramatically with each funding stage. Using growth-stage metrics at seed is wasteful. Using seed-stage metrics at growth is dangerous.

### Seed — Pre-Product-Market Fit ($0-$500K ARR)

**Primary metric: Velocity to learning**

At seed, your only job is finding product-market fit. Engineering economics at this stage is about one thing: how fast can you run experiments?

- **Track:** Experiments per sprint, Learning velocity, Time from hypothesis to validated insight
- **Don't track:** DORA metrics, technical debt, code quality scores
- **Optimal debt posture:** Take on debt aggressively. You're building a prototype, not a cathedral. If you find PMF, you'll rewrite it anyway.
- **R&D as % of burn:** 60-80%

### Series A — Early Traction ($500K-$2M ARR)

**Primary metric: Cost to acquire and serve a customer**

You've found initial PMF. Now you need to prove you can scale it economically.

- **Track:** CAC payback period (including engineering cost), Cost per feature shipped, Infrastructure cost per customer
- **Selectively track:** Deployment frequency, test coverage for revenue-critical paths
- **Optimal debt posture:** Start paying down debt on revenue-critical systems. Leave the rest.
- **R&D as % of revenue:** 80-120% (still spending more than earning — that's normal)

### Series B — Scaling ($2M-$10M ARR)

**Primary metric: Engineering efficiency ratio**

You need to scale engineering without costs scaling proportionally.

- **Track:** Revenue per engineer, Feature delivery efficiency (story points per $1K), Innovation ratio (must stay above 40%)
- **Must track:** PDI score, DORA metrics, Cost of delay
- **Optimal debt posture:** Allocate 20-25% of engineering capacity to debt remediation. This is the stage where debt compounds fastest, and teams that don't address it here hit a wall at $10M.
- **R&D as % of revenue:** 40-60%

### Growth ($10M+ ARR)

**Primary metric: R&D ROI**

Every dollar of R&D spend should generate measurable returns.

- **Track everything:** Full engineering economic model, APER, PDI, per-feature P&L, AI unit economics, cost per deploy
- **Board reporting:** 4-quadrant framework (Velocity, Quality, Efficiency, Risk)
- **Optimal debt posture:** Maintain PDI below 1.5. Budget debt remediation as a capital investment with projected ROI.
- **R&D as % of revenue:** 20-35%

### The Transition Trap

The most dangerous moment is the transition between stages. Engineering leaders who were perfect for seed-stage chaos often struggle with Series B rigor. The metrics that drove success at $1M ARR become irrelevant at $5M.

Build your economic model before you need it. The companies that establish engineering economics frameworks at Series A consistently outperform peers who wait until growth stage.

---

*[Start the Product Economics curriculum →](/curriculum/tracks)*
`,
    },
};

export async function generateStaticParams() {
    return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = articles[slug];
    if (!article) return { title: 'Article Not Found' };
    return {
        title: `${article.title} | Richard Ewing`,
        description: article.excerpt,
        alternates: { canonical: `https://www.richardewing.io/blog/${slug}` },
        openGraph: { title: article.title, description: article.excerpt, url: `https://www.richardewing.io/blog/${slug}`, type: 'article' },
    };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];
    if (!article) notFound();

    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-3xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <span>→</span>
                    <span className="text-zinc-400">{article.category}</span>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10">{article.category}</span>
                        <span className="text-xs text-zinc-600">{article.readTime} read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-grotesk font-bold text-white mb-4 leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>By Richard Ewing</span>
                        <span>·</span>
                        <time>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-zinc max-w-none
                    prose-headings:font-grotesk prose-headings:text-white
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-base
                    prose-strong:text-white
                    prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                    prose-li:text-zinc-400
                    prose-table:text-sm
                    prose-th:text-zinc-300 prose-th:border-zinc-700 prose-th:px-4 prose-th:py-2
                    prose-td:text-zinc-400 prose-td:border-zinc-800 prose-td:px-4 prose-td:py-2
                    prose-code:text-violet-400 prose-code:bg-violet-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-blockquote:border-violet-500/30 prose-blockquote:text-zinc-400
                    prose-hr:border-zinc-800
                ">
                    <div dangerouslySetInnerHTML={{
                        __html: article.content
                            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                            .replace(/^\- (.*$)/gm, '<li>$1</li>')
                            .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                            .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
                            .replace(/\|(.+)\|/g, (match) => {
                                const cells = match.split('|').filter(c => c.trim());
                                if (cells.every(c => c.trim().match(/^[-:]+$/))) return '';
                                const tag = match.includes('---') ? 'th' : 'td';
                                return '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
                            })
                            .replace(/(<tr>.*<\/tr>\n?)+/g, '<table><tbody>$&</tbody></table>')
                            .replace(/^(?!<[hultbao])(.*\S.*)$/gm, '<p>$1</p>')
                            .replace(/---/g, '<hr />')
                    }} />
                </article>

                {/* Author Card */}
                <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center shrink-0">
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-grotesk font-bold text-white mb-1">Richard Ewing</h3>
                            <p className="text-sm text-zinc-500 mb-3">The Product Economist — Quantifying engineering economics for technology leaders, PE firms, and boards.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/advisory" className="text-xs text-cyan-400 hover:underline">Book Advisory →</Link>
                                <Link href="/curriculum/tracks" className="text-xs text-violet-400 hover:underline">Curriculum →</Link>
                                <Link href="/tools/pdi" className="text-xs text-emerald-400 hover:underline">Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Articles */}
                <div className="mt-12">
                    <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">More Articles</h3>
                    <Link href="/blog" className="text-sm text-cyan-400 hover:underline">← Back to Blog</Link>
                </div>
            </div>
        </main>
    );
}
