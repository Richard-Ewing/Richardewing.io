export const articles = [
    {
        slug: "innovation-tax-audit-rd-opex",
        title: "The innovation tax audit: Is your R&D actually just OpEx?",
        description: "Discover how to audit your software portfolio for Zombie Assets and why a Sunset Committee is better than just funding new features.",
        date: "Apr 2026",
        readTime: "10 min read",
        source: "CIO.com",
        externalUrl: "https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html"
    },
    {
        slug: "make-ai-projects-profitable",
        title: "Most AI Projects Just Burn Cash. Here's How to Make Them Profitable.",
        description: "An expert analysis on AI unit economics, the 'Evergreen Ratio', and calculating the AI Volatility Tax to stop bleeding cash on inferencing.",
        date: "Apr 2026",
        readTime: "8 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/make-ai-projects-profitable"
    },
    {
        slug: "model-collapse-financial-modeling",
        title: "The hidden inflation of AI: Why model collapse is a business risk",
        description: "Everyone is worried about AI ethics, but few are talking about AI economics. AI is not a deploy-and-forget asset. It is a depreciating one that requires continuous CapEx to maintain.",
        date: "Apr 2026",
        readTime: "11 min read",
        source: "CIO.com"
    },
    {
        slug: "calculating-technical-debt-ebitda-impact-private-equity",
        title: "Calculating Technical Debt's EBITDA Impact in Private Equity Due Diligence",
        description: "A financial framework for Private Equity operating partners to translate legacy code maintenance burdens directly into EBITDA compression forecasts.",
        date: "Apr 2026",
        readTime: "8 min read",
        source: "The Canon",
        content: `
            <p>During technical due diligence, evaluating software architecture is standard practice. However, translating those architectural findings into financial models is where most Private Equity firms fail. When a target company's engineering team spends 45% of their time keeping legacy systems running, that isn't just an engineering inefficiency—it is a direct drag on EBITDA margins.</p>
            <h3>The Hidden Cost of Legacy Integration</h3>
            <p>Every dollar spent on maintenance is a dollar not spent on growth. If you are modeling a 3x enterprise value expansion based on aggressive feature shipping, but the target holds massive undocumented liabilities, those feature roadmaps will stall. This is why establishing <a href="/glossary/technical-debt" class="text-cyan-900 font-extrabold font-semibold hover:font-bold border-b border-cyan-500/30 transition-all">core technical debt principles</a> during the diligence phase is critical. It allows operating partners to quantify the exact CapEx required to refactor the platform before it scales.</p>
            <p>Using the Product Debt Index (PDI) framework, PE firms can convert abstract engineering complaints into a concrete $M liability on the balance sheet, adjusting the purchase price or carving out specific remediation tranches.</p>
        `
    },
    {
        slug: "how-to-translate-dora-metrics-into-financial-technical-debt",
        title: "How to Translate DORA Metrics into Financial Technical Debt",
        description: "Deployment frequency and lead times are useful for engineers, but CFOs need dollar values. Here is the formula.",
        date: "Apr 2026",
        readTime: "6 min read",
        source: "The Canon",
        content: `
            <p>Engineering leaders frequently present DORA metrics (Deployment Frequency, Lead Time, Change Failure Rate, MTTR) to executive boards to justify refactoring budgets. The problem? Boards do not allocate capital based on "Deployment Frequency." They allocate capital based on Return on Invested Capital (ROIC) and risk mitigation.</p>
            <h3>The Financial Translation Layer</h3>
            <p>To secure budget for system modernization, you must convert DORA regressions into dollar-cost abstractions. A rising Change Failure Rate isn't just an operational nuisance; it is an active tax on engineering payroll. By applying <a href="/glossary/technical-debt" class="text-cyan-900 font-extrabold font-semibold hover:font-bold border-b border-cyan-500/30 transition-all">core technical debt principles</a>, you can map the exact number of hours lost to incident recovery against the fully-loaded cost of your engineering team.</p>
            <p>If your Mean Time To Recovery (MTTR) increases by 2 hours over a quarter across 50 engineers averaging $150/hr, that is a hard financial loss. Showing CFOs the literal bleed rate of technical debt guarantees funding for the fix.</p>
        `
    },
    {
        slug: "technical-debt-governance-frameworks-for-ai-startups",
        title: "Technical Debt Governance Frameworks for AI Startups",
        description: "AI startups accumulate technical debt faster than any previous generation of software companies. This guide provides a rapid governance framework to survive the scale phase.",
        date: "Apr 2026",
        readTime: "9 min read",
        source: "The Canon",
        content: `
            <p>In the sprint to achieve Agentic AI breakthroughs and secure Series A funding, AI startups are writing code at unprecedented speeds, heavily assisted by LLM copilots. The result is "Vibe Coding Debt"—a rapid accumulation of undocumented, poorly architected probabilistic systems.</p>
            <h3>Governing the AI Codebase</h3>
            <p>Unlike deterministic CRUD apps, AI features carry a Cost of Predictivity that scales non-linearly. If the underlying prompt orchestrations and vector DB retrievals are tangled in spaghetti code, iterating on model accuracy becomes mathematically impossible without breaking the system.</p>
            <p>AI CTOs must implement <a href="/glossary/technical-debt" class="text-cyan-900 font-extrabold font-semibold hover:font-bold border-b border-cyan-500/30 transition-all">core technical debt principles</a> from day one. This includes separating deterministic business logic from probabilistic LLM calls, enforcing strict API boundaries around AI agents, and using the Kill Switch Protocol on experimental endpoints that generate API costs but no user value.</p>
            <p>Failing to govern technical debt early means hitting the Technical Insolvency Date right when you need to scale.</p>
        `
    },
    {
        slug: "anthropic-academy-ai-courses-curated",
        title: "Anthropic Just Made AI Education Free — Here's What Leaders Should Take",
        description: "A curated walkthrough of all 15 Anthropic Academy courses, grouped by audience — leaders, builders, architects, and educators — with editorial commentary on which ones matter and why.",
        date: "Mar 2026",
        readTime: "5 min read",
        source: "The Canon",
        externalUrl: "/resources/ai-courses"
    },
    {
        slug: "why-your-cfo-hates-your-agile-transformation",
        title: "Why Your CFO Hates Your Agile Transformation",
        description: "CIOs speak in sprints; CFOs speak in quarters. That language barrier is the number one reason R&D budgets get slashed. This article introduces the Capitalization Matrix for bridging the gap between engineering velocity and financial governance.",
        date: "Mar 2026",
        readTime: "8 min read",
        source: "CIO.com",
        externalUrl: "https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html"
    },
    {
        slug: "vibe-coding-era-software-engineering-role",
        title: "In the Vibe Coding Era, What Does a Software Engineer Even Do?",
        description: "An expert analysis of the changing nature of software development work. Introduces the 4 Laws of Probabilistic Software Development and the new role of the Systems Governor.",
        date: "Mar 2026",
        readTime: "9 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/vibe-coding-era-software-engineering-role"
    },
    {
        slug: "agentic-ai-scientific-economic-analysis",
        title: "AI Agents Won't Crash the Economy. Bad Governance Might.",
        description: "An expert analysis of the AI science and economics behind the Citrini Research report on agentic AI. Examines the liability gradient, macro regression loops, and the variable cost of intelligence.",
        date: "Mar 2026",
        readTime: "9 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/agentic-ai-scientific-economic-analysis"
    },
    {
        slug: "innovation-requires-deleting-code",
        title: "Real Innovation Requires Deleting Code, Not Writing It",
        description: "An expert analysis of how to audit for features you can deprecate and how to delete them. Introduces the Sunset Protocol for governing subtraction.",
        date: "Feb 2026",
        readTime: "6 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/innovation-requires-deleting-code"
    },
    {
        slug: "audit-interview-scorecard",
        title: "When AI Writes the Code, What Are Employers Hiring For?",
        description: "An expert discussion of how to conduct better software engineering interviews in the age of AI. Introduces the 4 Dimensions of Engineering Judgment scorecard.",
        date: "Feb 2026",
        readTime: "7 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/audit-interview-scorecard"
    },
    {
        slug: "financial-metrics-scorecard",
        title: "The 3 Financial Metrics Every PM Needs on Their Scorecard",
        description: "Selected for the Mind the Product Newsletter. This article on product P&L ownership and capital efficiency was featured in Mind the Product’s curated newsletter.",
        date: "Feb 2026",
        readTime: "5 min read",
        source: "Mind the Product",
        externalUrl: "https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/"
    },
    {
        slug: "reimagining-coding-interview",
        title: "Reimagining the Coding Interview",
        description: "AI can generate code. The scarce skill is catching what AI gets wrong. This article introduces the Audit Interview.",
        date: "Feb 2026",
        readTime: "6 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/reimagining-coding-interview"
    },
    {
        slug: "shipping-faster-wont-get-you-promoted",
        title: "Hey, senior PMs: Shipping faster won’t get you promoted",
        description: "Shipping fast felt great — until margins tanked, and I learned that real product leadership means understanding how features make or lose money.",
        date: "Feb 2026",
        readTime: "6 min read",
        source: "CIO.com",
        externalUrl: "https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html"
    },
    {
        slug: "ai-product-business-test",
        title: "The AI Product Business Test",
        description: "Validating AI unit economics before writing code. (Editor's Pick)",
        date: "Jan 2026",
        readTime: "6 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/ai-product-business-test"
    },
    {
        slug: "technical-insolvency-date",
        title: "The Technical Insolvency Date",
        description: "The exact quarter when maintenance costs mathematically consume 100% of engineering capacity.",
        date: "Jan 2026",
        readTime: "4 min read",
        source: "The Canon",
        legacyUrl: "/canonical/technical-insolvency.html",
        content: `
            <p>The Technical Insolvency Date (TID) is the theoretical point where a software organization's maintenance burden consumes 100% of its available engineering capacity.</p>
            <h3>The Mathematics of Stagnation</h3>
            <p>It is calculated as: <code>Capacity - (Codebase_Size * Maintenance_Factor)</code>.</p>
            <p>When this reaches zero, feature velocity stops. The organization is zombie-walking.</p>
        `
    },
    {
        slug: "innovation-tax",
        title: "The Innovation Tax",
        description: "Why 80% of your R&D budget is actually just keeping the lights on.",
        date: "Dec 2025",
        readTime: "6 min read",
        source: "CIO.com",
        legacyUrl: "/canonical/innovation-tax.html"
    },
    {
        slug: "cost-of-predictivity",
        title: "The Cost of Predictivity",
        description: "As AI correctness increases, cost scales exponentially. The hidden unit economics of LLMs.",
        date: "Nov 2025",
        readTime: "5 min read",
        source: "Built In",
        legacyUrl: "/canonical/ai-margin-autopsy.html"
    },
    {
        slug: "feature-bloat-calculus",
        title: "Feature Bloat Calculus",
        description: "A framework for calculating the negative carry of unused features.",
        date: "Oct 2025",
        readTime: "4 min read",
        source: "Mind the Product",
        legacyUrl: "/canonical/governance-of-subtraction.html"
    },
    {
        slug: "best-ai-product-zero-customers",
        title: "The Best AI Product I Ever Led Had Zero Customers",
        description: "A retrospective on why technical excellence doesn't guarantee product-market fit.",
        date: "Sep 2025",
        readTime: "7 min read",
        source: "HackerNoon",
        externalUrl: "https://hackernoon.com/the-best-ai-product-i-ever-led-had-zero-customers"
    }
];

export const frameworks = [
    {
        slug: 'technical-insolvency-date',
        name: 'Technical Insolvency Date',
        definition: `The Technical Insolvency Date (TID) is the specific future quarter when an organization's technical debt maintenance will consume 100% of engineering capacity, leaving zero time for new feature development.\n\nEvery software organization accumulates technical debt over time — shortcuts taken under deadline pressure, aging infrastructure, deprecated dependencies, and code that nobody understands anymore. This debt isn't free. It requires ongoing maintenance hours: bug fixes, security patches, dependency updates, and workarounds for architectural limitations.\n\nThe critical insight is that maintenance burden grows faster than most leaders realize. If your team currently spends 40% of its time on maintenance and that percentage is growing 3% per quarter, you can calculate the exact quarter when maintenance reaches 100%. That quarter is your Technical Insolvency Date.\n\nAt the TID, your engineering team is fully consumed by keeping existing systems alive. Feature velocity drops to zero. No new capabilities. No competitive response. No innovation. Your R&D investment becomes pure maintenance spend — you're paying innovation-era salaries for maintenance-era output.\n\nThe concept draws from financial insolvency: the point where a company's liabilities exceed its assets and it cannot meet its obligations. Technical insolvency is the same idea applied to engineering capacity — the point where your maintenance obligations exceed your available engineering hours.\n\nMost organizations don't realize they're approaching the TID because they track technical debt qualitatively rather than quantitatively. Telling a board "we have technical debt" gets deprioritized. Telling a board "we are 8 quarters from technical insolvency — the point where we can no longer ship any new features" gets immediate action and budget allocation.`,
        whyItMatters: `The TID transforms technical debt from a vague engineering concern into a concrete, dated financial risk that CFOs and board members can understand and act on.\n\nFor investors performing due diligence, the TID is a red flag indicator. A company approaching its TID is a company whose product will stop evolving — making it a poor acquisition target and an increasingly risky investment.\n\nFor CFOs, the TID provides a clear ROI framework for technical debt remediation. If $500K of refactoring investment extends the TID by 8 quarters, that investment is preserving $2M+ of annual feature development capacity.\n\nFor engineering leaders, the TID is the most powerful communication tool for securing refactoring budget. It converts abstract technical concerns into business-critical timeline risks that executives understand.`,
        howToCalculate: [
            'Measure current maintenance percentage (% of engineering time on bugs, debt, maintenance, keeping-the-lights-on)',
            'Track growth rate quarter-over-quarter for at least 2-3 quarters',
            'Project forward: current maintenance % + (growth rate × quarters) = 100%',
            'That quarter is your Technical Insolvency Date',
            'Calculate the dollar value: maintenance hours × fully-loaded engineer cost = annual maintenance spend',
            'Use the Product Debt Index (PDI) calculator at richardewing.io/tools/pdi for automated calculation'
        ],
        relatedArticles: [
            { title: 'Why Your CFO Hates Agile', publication: 'CIO.com', date: 'Mar 2026', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
            { title: 'The Technical Insolvency Date', publication: 'The Canon', date: 'Jan 2026', url: '/articles/technical-insolvency-date' }
        ],
        relatedTool: { name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }
    },
    {
        slug: 'innovation-tax',
        name: 'Innovation Tax',
        definition: `The Innovation Tax is the hidden cost of maintenance work that gets reported as innovation investment. It is OpEx masquerading as R&D investment, causing organizations to dramatically overestimate their effective engineering velocity and R&D productivity.\n\nHere's how it works: A VP of Engineering reports to the CEO that "65% of engineering time is spent on new features." The actual breakdown, when forensically audited, reveals that only 23% of engineering time produces genuine new capabilities. The remaining 42% is maintenance work embedded within feature sprints — bug fixes bundled into feature stories, infrastructure upgrades coded as dependencies, and refactoring disguised as feature prerequisites.\n\nThis 42-point gap between reported and actual innovation investment is the Innovation Tax. It's not fraud — it's systematic self-deception enabled by the way agile teams organize work. When a sprint contains 10 stories and 4 of them are technical debt cleanup dressed as "tech stories" within a feature epic, the team genuinely believes they're spending 100% on features.\n\nThe Innovation Tax is insidious because it compounds. As the maintenance burden grows quarter-over-quarter, the tax increases. But because teams don't measure it, CFOs and boards continue to believe R&D spending is generating proportional innovation output. By the time the gap becomes visible (missed deadlines, slow feature delivery, competitive lag), the organization is often approaching the Technical Insolvency Date.\n\nBenchmarks from Richard Ewing's audits show that most engineering organizations have an Innovation Tax between 30-50%. Organizations with Innovation Tax above 40% are in dangerous territory. Above 70% is terminal — the organization is approaching technical insolvency within 4-6 quarters.`,
        whyItMatters: `The Innovation Tax explains the disconnect executives feel when engineering teams report high velocity but competitive position erodes. "We shipped 200 features last year!" doesn't matter if 150 of those "features" were maintenance work relabeled.\n\nFor CFOs, the Innovation Tax reveals that R&D capitalization may be overstated. If maintenance work is being capitalized as R&D, the company's financials may not accurately reflect its true operating costs.\n\nFor boards evaluating management performance, the Innovation Tax is a leading indicator of organizational health. An Innovation Tax trending upward means the company is slowly losing its ability to innovate — even if revenue metrics look healthy today.\n\nThe Innovation Tax is the first metric Richard Ewing calculates in every R&D Capital Audit engagement. It sets the baseline for all subsequent analysis.`,
        howToCalculate: [
            'Audit 3 months of completed sprints by categorizing every story/ticket',
            'Categories: genuine new capability, maintenance/bugs, tech debt reduction, infrastructure, dependencies',
            'Calculate: reported innovation % minus actual new capability % = Innovation Tax',
            'Express in dollars: Innovation Tax % × total R&D spend = wasted "innovation" spend',
            'Benchmark: <30% healthy, 30-50% concerning, 50-70% dangerous, >70% terminal'
        ],
        relatedArticles: [
            { title: 'The Innovation Tax', publication: 'CIO.com / Foundry', date: 'Dec 2025', url: '/articles/innovation-tax' },
            { title: 'Why Your CFO Hates Your Agile Transformation', publication: 'CIO.com', date: 'Mar 2026', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' }
        ],
        relatedTool: { name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }
    },
    {
        slug: 'cost-of-predictivity',
        name: 'Cost of Predictivity',
        definition: `The Cost of Predictivity measures the variable cost of AI accuracy. Unlike traditional software with near-zero marginal costs, AI features have significant variable costs that scale with both usage AND accuracy requirements. As AI correctness increases, cost scales exponentially — not linearly.\n\nThis is the fundamental economic challenge of AI products. Traditional software follows a simple cost model: high fixed development cost, near-zero marginal cost per user. Build the feature once, serve it to millions for pennies. AI products break this model entirely.\n\nEvery AI query costs compute. Every inference requires GPU cycles. Every improvement in accuracy requires either more sophisticated prompts (more tokens = more cost), retrieval-augmented generation (vector DB queries + embedding generation), or fine-tuned models (massive training costs amortized over queries). The cost structure looks more like a manufacturing business than a software business.\n\nThe exponential curve is the killer. Moving from 80% accuracy to 90% accuracy might cost 2x. Moving from 90% to 95% might cost 5x. Moving from 95% to 99% often costs 10-20x. This is because the easy cases are solved by the base model, and each additional percentage point of accuracy requires increasingly sophisticated (and expensive) techniques to handle edge cases.\n\nThis creates what Richard Ewing calls the AI Margin Collapse Point: the usage volume at which AI feature costs exceed the revenue they generate. Many AI features that work beautifully in prototype (low volume, don't need high accuracy) become economically devastating in production (high volume, users demand high accuracy).\n\nThe AI Unit Economics Benchmark (AUEB) calculator at richardewing.io/tools/aueb helps companies calculate their Cost of Predictivity and identify their specific margin collapse point before it hits their P&L.`,
        whyItMatters: `Most AI products fail on economics, not technology. The product works — it just costs more to run than it generates in revenue. The Cost of Predictivity explains why: success makes you poorer unless you understand the exponential relationship between accuracy and cost.\n\nFor product leaders, the Cost of Predictivity should be calculated BEFORE building AI features, not after launching them. Many teams discover the economics are unworkable only after they've committed to an AI-first architecture.\n\nFor investors, the Cost of Predictivity is a due diligence essential. "What's your cost per useful AI output, and how does it change as you scale?" separates AI companies with viable economics from those that are quietly burning cash on inference costs.\n\nFor CFOs, AI costs are often buried in cloud compute bills rather than attributed to specific features. The Cost of Predictivity framework forces feature-level cost attribution — revealing which AI features are profitable and which are margin destroyers.`,
        howToCalculate: [
            'Total AI compute cost per month (API calls + inference + embedding generation + vector DB)',
            'Divided by useful outputs generated (outputs that users actually accepted/used)',
            'Equals Cost of Predictivity per useful output',
            'Track this metric at different accuracy thresholds to see the exponential curve',
            'Calculate your AI Margin Collapse Point: the volume where AI costs exceed feature revenue',
            'Use the AUEB calculator at richardewing.io/tools/aueb for automated benchmarking'
        ],
        relatedArticles: [
            { title: 'The Cost of Predictivity', publication: 'Built In', date: 'Nov 2025', url: '/articles/cost-of-predictivity' },
            { title: 'The AI Product Business Test', publication: 'Built In (Editor\'s Pick)', date: 'Jan 2026', url: 'https://builtin.com/articles/ai-product-business-test' }
        ],
        relatedTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }
    },
    {
        slug: 'audit-interview',
        name: 'Audit Interview',
        definition: `The Audit Interview is a hiring protocol that tests verification skills instead of code generation skills. In the AI age, the scarce human skill is not writing code — it's catching what AI gets wrong.\n\nTraditional coding interviews ask candidates to write algorithms on a whiteboard or in a shared editor. This was a reasonable proxy for engineering skill when humans wrote all the code. But in 2026, AI tools like GitHub Copilot, Cursor, and Claude generate code faster and often more correctly than human candidates under interview pressure.\n\nWhen Anthropic discovered that candidates were using Claude to pass their own coding interviews, it proved that traditional interviews are testing the wrong thing. They're testing a skill that AI performs better than humans under artificial conditions.\n\nThe Audit Interview flips the model. Instead of asking candidates to generate code, it presents them with AI-generated code that contains hidden flaws — security vulnerabilities, logic errors, performance anti-patterns, edge case failures, and architectural problems. The candidate's job is to find the bugs, rank them by severity, and make a ship/no-ship recommendation.\n\nThe protocol works like this: candidates receive a realistic code review scenario (500-1000 lines of AI-generated code with 3-5 hidden flaws). They have 10 minutes to review the code, identify issues, and present their findings. The evaluation scores 4 dimensions of engineering judgment:\n\n1. Verification: How many bugs did they find? Did they catch the security vulnerability?\n2. Prioritization: Did they correctly rank issues by severity?\n3. Communication: Can they explain the risk to a non-technical stakeholder?\n4. Judgment: Would they ship this code? Under what conditions? With what caveats?\n\nThe free Audit Interview tool at richardewing.io/tools/audit-interview generates realistic AI-written code with calibrated flaws for interviewers to use immediately.`,
        whyItMatters: `When AI writes the code, employers need to hire for judgment, not syntax. The Audit Interview tests the skills that actually matter in AI-age engineering: finding problems, assessing risk, and making informed ship decisions.\n\nFor hiring managers, the Audit Interview provides a more realistic assessment of how candidates will perform on the job. Modern engineers spend more time reviewing AI-generated code than writing code from scratch.\n\nFor engineering leaders building interview processes, the Audit Interview is resistant to AI cheating — you can't use AI to find problems in AI-generated code as effectively as an experienced engineer can. The nuanced judgment calls (Is this a P0 security issue or a P3 style issue?) require human experience.\n\nFor candidates, the Audit Interview is actually more humane than traditional coding interviews. It reduces anxiety (you're not writing code under pressure) and it tests practical skills that candidates use daily.`,
        howToCalculate: [
            'Present AI-generated code with 3-5 hidden bugs of varying severity',
            'Give candidate 10 minutes to review and identify issues',
            'Score Verification: bugs found ÷ total bugs (weighted by severity)',
            'Score Prioritization: correct severity ranking (P0/P1/P2/P3)',
            'Score Communication: clarity of risk explanation',
            'Score Judgment: quality of ship/no-ship recommendation and reasoning',
            'Try it free at richardewing.io/tools/audit-interview'
        ],
        relatedArticles: [
            { title: 'When AI Writes the Code, What Are Employers Hiring For?', publication: 'Built In', date: 'Feb 2026', url: 'https://builtin.com/articles/audit-interview-scorecard' },
            { title: 'Reimagining the Coding Interview for the AI Generation', publication: 'Built In', date: 'Feb 2026', url: 'https://builtin.com/articles/reimagining-coding-interview' }
        ],
        relatedTool: { name: 'Audit Interview Tool', url: '/tools/audit-interview' }
    },
    {
        slug: 'kill-switch-protocol',
        name: 'Kill Switch Protocol',
        definition: `The Kill Switch Protocol is a structured framework for identifying and deprecating "Zombie Features" — code that requires ongoing maintenance but generates zero incremental business value.\n\nMost software organizations have a dangerous bias: they add features but never remove them. Product teams celebrate launches. Nobody celebrates deletions. Over time, this creates what Richard Ewing calls "feature gravity" — a constantly growing codebase where 40-60% of the code serves no active users and generates no measurable revenue, yet still consumes engineering maintenance hours.\n\nZombie features come in several varieties:\n\n- **Ghost Features**: features that were built, launched, and never adopted. They sit in the codebase, requiring maintenance, but have near-zero usage.\n- **Legacy Bridges**: compatibility layers, deprecated API versions, and backward-compatible code paths that serve a tiny percentage of users but add complexity to every future change.\n- **Vanity Features**: features built because a senior stakeholder wanted them, not because users needed them. Often protected by organizational politics rather than business merit.\n- **Abandoned Experiments**: A/B test variants that were never cleaned up, prototypes that became permanent, and "temporary" solutions that became load-bearing.\n\nThe Kill Switch Protocol provides a systematic approach to identification, evaluation, and deprecation:\n\n1. **Identify**: Flag features with less than 5% of peak usage, zero revenue attribution, or maintenance cost exceeding 10% of the feature's value contribution.\n2. **Quantify**: Calculate the total cost of keeping each zombie alive (maintenance hours × fully-loaded engineer cost × opportunity cost multiplier).\n3. **Assess Risk**: Evaluate deprecation risk — what breaks if this feature is removed? What customers are affected?\n4. **Sunset Timeline**: Create a communication plan and graduated deprecation (warning → deprecation notice → feature flag → removal).\n5. **Execute**: Remove the code with rollback capability. Monitor for unexpected breakage.\n\nThe typical Kill Switch audit reveals that 30-50% of maintenance burden comes from zombie features. Removing them frees up 15-25% of engineering capacity for actual innovation.`,
        whyItMatters: `Every feature you keep makes every future feature harder. The Kill Switch Protocol provides the organizational discipline to subtract — which is harder politically than adding but often creates more value.\n\nFor product leaders, the Kill Switch Protocol is the economic argument for saying "no" to feature preservation. When you can show that keeping a feature costs $180K/year in maintenance and generates $0 in attributable revenue, the kill decision becomes obvious.\n\nFor engineering leaders, the Kill Switch Protocol frees up capacity trapped in maintenance. A team that reclaims 20% of its capacity from zombie features effectively gets 20% more engineering headcount without any new hires.\n\nFor CFOs and boards, zombie features represent pure waste — capital spent maintaining things that don't generate value. The Kill Switch Protocol turns that waste into available capacity.`,
        howToCalculate: [
            'Inventory all features and map to usage metrics (DAU, MAU, revenue attribution)',
            'Flag features below 5% of peak usage or $0 revenue attribution',
            'Calculate maintenance cost per feature: maintenance hours × fully-loaded engineer cost',
            'Calculate opportunity cost: what else could those engineers build?',
            'Rank zombies by maintenance cost (highest cost = kill first)',
            'Execute sunset protocol: communicate → deprecate → remove → monitor'
        ],
        relatedArticles: [
            { title: 'Real Innovation Requires Deleting Code, Not Writing It', publication: 'Built In', date: 'Feb 2026', url: 'https://builtin.com/articles/innovation-requires-deleting-code' },
            { title: 'Feature Bloat Calculus', publication: 'Mind the Product', date: 'Oct 2025', url: '/articles/feature-bloat-calculus' }
        ],
        relatedTool: { name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }
    },
    {
        slug: 'feature-bloat-calculus',
        name: 'Feature Bloat Calculus',
        definition: `Feature Bloat Calculus is the economic formula for determining when a feature's maintenance cost exceeds its value contribution. It quantifies the hidden tax of feature accumulation — the compounding cost that makes every new feature harder and more expensive to build.\n\nThe formula considers three cost components:\n\n1. **Direct Maintenance Cost**: The engineering hours spent maintaining the feature (bug fixes, compatibility updates, dependency management, test maintenance). This is typically 2-5% of original development cost per quarter.\n\n2. **Opportunity Cost**: What else could those maintenance engineers be building? If 3 engineers spend 20% of their time maintaining a low-value feature, that's 0.6 FTE that could be building high-value new capabilities.\n\n3. **Complexity Tax**: This is the compounding factor that most organizations miss entirely. Every feature in the codebase makes every other feature harder to maintain and every new feature harder to build. Adding feature #101 to a system doesn't just add feature #101's maintenance cost — it increases the maintenance cost of features #1-100.\n\nThe Complexity Tax follows a roughly quadratic curve. A system with 50 features has approximately 1,225 potential interaction points (n × (n-1) / 2). A system with 100 features has 4,950 potential interaction points. Doubling features doesn't double complexity — it quadruples it.\n\nFeature Bloat Calculus quantifies this by comparing a feature's total cost (direct + opportunity + complexity) against its value contribution (revenue attribution, user engagement, strategic importance). When total cost exceeds value, the feature has "negative carry" — it's costing more to keep than it's worth.\n\nFeatures with negative carry should be evaluated through the Kill Switch Protocol for potential deprecation. The highest-negative-carry features should be killed first, as they free up the most capacity per removal.`,
        whyItMatters: `Feature Bloat Calculus quantifies what every experienced engineer feels intuitively: "the system is getting harder and harder to work with." It provides the economic argument for subtraction over addition.\n\nFor product managers who want to build new features, Feature Bloat Calculus provides the answer to "what should we remove to make room?" Every new feature should be paired with a deprecation candidate.\n\nFor engineering teams feeling overwhelmed by maintenance, Feature Bloat Calculus provides data-driven evidence that the problem isn't team performance — it's feature accumulation. A team that's 30% slower than last year isn't failing; it's losing to complexity compounding.\n\nFor executives considering "just add more engineers" as a solution, Feature Bloat Calculus shows why adding headcount has diminishing returns when the root cause is feature bloat. Brooks's Law meets feature economics.`,
        howToCalculate: [
            'For each feature, calculate Direct Maintenance Cost: maintenance hours × fully-loaded cost',
            'Calculate Opportunity Cost: maintenance hours × revenue-per-engineering-hour for your top-performing features',
            'Estimate Complexity Tax: number of integration points with other features × average interaction maintenance cost',
            'Total Feature Cost = Direct + Opportunity + Complexity Tax',
            'Compare to Feature Value: revenue attribution + strategic importance score',
            'Negative Carry = Total Cost > Feature Value (feature costs more than it earns)',
            'Use the PDI calculator at richardewing.io/tools/pdi to benchmark your overall feature portfolio'
        ],
        relatedArticles: [
            { title: 'Feature Bloat Calculus', publication: 'Mind the Product', date: 'Oct 2025', url: '/articles/feature-bloat-calculus' },
            { title: 'The 3 Financial Metrics Every PM Needs on Their Scorecard', publication: 'Mind the Product', date: 'Feb 2026', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' }
        ],
        relatedTool: { name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }
    },
    {
        slug: 'vibe-coding-debt',
        name: 'Vibe Coding Debt',
        definition: `Vibe Coding Debt is the specific architectural liability created when engineers use AI copilots to generate large volumes of probabilistic code without deeply understanding the underlying system logic.\n\nA rapidly trending concept in 2026, "vibe coding" describes an experimental, iterative workflow where developers prompt an AI to generate features, accepting the code because it "vibes" or appears to work, without verifying edge cases or structural integrity. While this produces unprecedented short-term velocity, it creates a massive undocumented liability.\n\nVibe Coding Debt is uniquely dangerous because unlike traditional technical debt—which human engineers usually understand because they wrote it—vibe coding debt is opaque. When an LLM-generated abstraction breaks three quarters later, the original human "author" has zero context on why the code was structured that way, making the Mean Time To Recovery (MTTR) catastrophic.`,
        whyItMatters: `For startups rushing to ship AI features, Vibe Coding Debt is the silent killer. It creates isolated pockets of code that nobody on the team fully understands, severely complicating future scaling or security audits.\n\nFor CTOs and engineering leaders, governing vibe coding requires a structural shift in how teams operate: moving developers from being code generators to being systems auditors. Relying on the Product Debt Index (PDI) to track opaque code regions ensures that vibe coding velocity doesn't trigger unexpected Technical Insolvency.`,
        howToCalculate: [
            'Audit code contributions to identify segments exclusively authored by AI copilots',
            'Measure the test coverage of AI-generated vs. human-authored code',
            'Calculate MTTR for incidents within AI-generated modules vs. legacy human code',
            'Index these factors through the Product Debt Index (PDI) calculator'
        ],
        relatedArticles: [
            { title: 'Technical Debt Governance Frameworks for AI Startups', publication: 'The Canon', date: 'Apr 2026', url: '/articles/technical-debt-governance-frameworks-for-ai-startups' },
            { title: 'Vibe Coding Debt: The Silent Killer of AI-Native Startups', publication: 'The Canon', date: 'Apr 2026', url: '/blog/vibe-coding-debt-the-silent-killer-of-ai-native-startups' }
        ],
        relatedTool: { name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }
    },
    {
        slug: 'shadow-agents',
        name: 'Shadow Agents',
        definition: `Shadow Agents represent the next, more dangerous evolution of Shadow IT: autonomous, AI-driven workflows deployed by business units without centralized IT governance or security oversight.\n\nWhile traditional Shadow IT typically involves employees using unsanctioned SaaS tools, a Shadow Agent acts as an autonomous digital worker. It operates continuously, often holding elevated API permissions or scraping sensitive corporate data into unvetted vector databases across different platforms. Because they operate at machine speed, Shadow Agents can trigger systemic failures, budget overruns, or data exfiltration events in milliseconds.\n\nIn 2026, the primary cybersecurity challenge for enterprises is mapping the "traceability black hole" caused by these non-human actors orchestrating complex workflows beyond the visibility of the CISO.`,
        whyItMatters: `For CISOs, Shadow Agents exponentially multiply the enterprise threat surface. Attackers leveraging prompt injection techniques can hijack a poorly secured Shadow Agent to execute authenticated commands across the internal network.\n\nFor CIOs managing budgets, Shadow Agents trigger unmonitored API inference loops, resulting in massive, unexpected cloud consumption spikes.\n\nGoverning Shadow Agents requires implementing Zero-Trust pipelines and strict Boundary Control Protocols, ensuring every autonomous action is deterministically evaluated for admissibility before execution.`,
        howToCalculate: [
            'Deploy API monitoring to detect non-human traffic patterns from unsanctioned namespaces',
            'Conduct a centralized inventory audit mapping all authorized autonomous actions',
            'Enforce Exogram Action Admissibility Protocol (EAAP) verification across all external APIs',
            'Score the organizational risk profile using the Enterprise Value Scenario Engine (EV-SE)'
        ],
        relatedArticles: [
            { title: 'The Rise of Shadow Agents: Why Your Next Data Breach Will Be Automated', publication: 'The Canon', date: 'Apr 2026', url: '/blog/the-rise-of-shadow-agents-why-your-next-data-breach-will-be-automated' }
        ],
        relatedTool: { name: 'Enterprise Value Scenario Engine (EV-SE)', url: '/tools/ev-se' }
    },
    {
        slug: 'agentic-drift',
        name: 'Agentic Drift (Logic Drift)',
        definition: `Agentic Drift, or Logic Drift, is the compounding error rate that occurs when probabilistic AI systems operate recursively without deterministic human verification or hard enforcement boundaries.\n\nAs autonomous agents execute multi-step plans, they continuously reinterpret past context windows and intermediate results to determine their next action. Because language models hallucinate or misweigh instructions slightly on each pass, a minor interpretation error at step 1 geometrically expands by step 4. This causes the agent to "drift" from its original objective, potentially executing destructive commands or hallucinating false operational states.\n\nAgentic drift is why prototype agents work perfectly on simple deterministic test cases, but repeatedly fail in dynamic, unpredictable enterprise production environments.`,
        whyItMatters: `Agentic drift is the primary reason enterprise AI initiatives fail to scale. Without addressing drift, human-in-the-loop (HITL) overrides become structurally required, defeating the entire ROI of automation.\n\nMitigating Agentic Drift requires wrapping probabilistic models in deterministic state machines, utilizing structural schema validation, Threat Prevention Layers, and cryptographic State Hashing to ground the agent at every iteration loop—all core capabilities of the Exogram architecture.`,
        howToCalculate: [
            'Measure the success rate of agent plans as the number of execution steps increases',
            'Calculate the manual intervention rate (MIR) required to correct drifted agents',
            'Deploy the Exogram Schema Integrity Engine to force deterministic checkpointing between reasoning loops'
        ],
        relatedArticles: [
            { title: 'AI Agents Won\'t Crash the Economy. Bad Governance Might.', publication: 'Built In', date: 'Mar 2026', url: 'https://builtin.com/articles/agentic-ai-scientific-economic-analysis' }
        ],
        relatedTool: { name: 'Exogram Diagnostic', url: '/' }
    },
    {
        slug: 'return-on-ai-investment',
        name: 'ROAI (Return on AI Investment)',
        definition: `ROAI is the strict financial framework used to measure the tangible margin improvements derived from AI deployments, marking the end of the "AI at any cost" experimentation era.\n\nThroughout 2024 and 2025, enterprises funded AI pilots based on strategic FOMO (Fear Of Missing Out), rarely scrutinizing the precise unit economics of inference costs versus generated value. By 2026, CFOs demand quantifiable ROAI. If an AI feature costs $0.05 per inference to operate but only generates $0.01 of measurable productivity or revenue lift, it holds Negative Carry and destroys margins.\n\nROAI demands that every AI integration is evaluated against its Cost of Predictivity. Moving an AI model from 85% to 95% accuracy often requires a 10x increase in compute costs through RAG pipelines and sophisticated multi-agent orchestrations. ROAI establishes the exact AI Margin Collapse Point where the pursuit of algorithmic perfection bankrupts the product.`,
        whyItMatters: `For product owners, failing to prove ROAI means losing executive sponsorship and budget. The market no longer rewards companies simply for having "AI inside"; it rewards capital-efficient execution.\n\nFor Private Equity evaluating technical operations, negative ROAI is an immediate red flag indicating untracked CapEx burn disguised as innovation.\n\nOptimizing ROAI requires precise benchmarking, isolating token costs per transaction, and comparing them directly to the human labor replaced or the premium pricing enabled.`,
        howToCalculate: [
            'Calculate the exact API inference and hosting costs per successful user transaction',
            'Determine the fractional revenue or productivity value assigned to that transaction',
            'Plot the Margin Collapse curve comparing cost-per-accuracy tier',
            'Directly validate ROAI using the AI Unit Economics Benchmark (AUEB) tool'
        ],
        relatedArticles: [
            { title: 'ROAI is the New ROI: Why CFOs Are Killing Your AI Pilots in 2026', publication: 'The Canon', date: 'Apr 2026', url: '/blog/roai-is-the-new-roi-why-cfos-are-killing-your-ai-pilots-in-2026' },
            { title: 'The Cost of Predictivity', publication: 'Built In', date: 'Nov 2025', url: '/articles/cost-of-predictivity' }
        ],
        relatedTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }
    },
    {
        slug: 'dspm',
        name: 'Data Security Posture Management (DSPM)',
        definition: `Data Security Posture Management (DSPM) is the automated discovery, mapping, and continuous monitoring of sensitive data across multi-cloud environments, specifically architected to prevent data exfiltration by autonomous AI agents.\n\nIn the era of shadow agents and zero-trust boundaries, traditional perimeter security fails because AI workloads dynamically ingest vast quantities of unstructured corporate data (emails, Slack logs, PDFs). DSPM enforces strict identity access management (IAM) at the vector-database level, ensuring that AI models can only query data authorized for the specific execution context.`,
        whyItMatters: `Without DSPM, an executive assistant agent interacting with a procurement system could be maliciously prompted into returning highly sensitive financial forecasts. DSPM mathematically restricts the agent's context window.`,
        howToCalculate: [
            'Audit unstructured data locations (S3 buckets, OneDrive, Slack)',
            'Deploy automated classification to tag PII and financial data',
            'Enforce zero-trust retrieval policies before vector embedding'
        ],
        relatedArticles: [
            { title: 'The Rise of Shadow Agents: Why Your Next Data Breach Will Be Automated', publication: 'The Canon', date: 'Apr 2026', url: '/blog/the-rise-of-shadow-agents-why-your-next-data-breach-will-be-automated' }
        ],
        relatedTool: { name: 'Shadow AI Defensibility', url: '/tools/shadow-ai' }
    },
    {
        slug: 'sovereign-ai',
        name: 'Sovereign AI',
        definition: `Sovereign AI refers to large language models and inference architectures deployed entirely within a nation's or enterprise's physical borders, adhering to strict data localization laws.\n\nFueled by geopolitical tensions and the rise of the EU AI Act, Sovereign AI mandates that prompt data, model weights, and inference hardware remain air-gapped from major foreign cloud providers. In the enterprise context, 'corporate sovereignty' involves repatriating cloud workloads to bare-metal servers.`,
        whyItMatters: `For Fortune 500 CISOs, sending customer financial data to an API endpoint outside their jurisdiction is a catastrophic regulatory risk. Sovereign AI allows companies to achieve near-frontier model performance via open-weights models (like LLaMA) on private infrastructure.`,
        howToCalculate: [
            'Compare the TCO of API inference vs bare-metal server leasing',
            'Model the capital expenditure of H100 clusters',
            'Assess regulatory exposure under GDPR or CCPA for multi-tenant model caching'
        ],
        relatedArticles: [
            { title: 'The Cost of Predictivity', publication: 'Built In', date: 'Nov 2025', url: '/articles/cost-of-predictivity' }
        ]
    },
    {
        slug: 'graph-rag',
        name: 'Graph RAG (Retrieval-Augmented Generation)',
        definition: `Graph RAG (Retrieval-Augmented Generation) evolves standard vector-based semantic search by combining knowledge graphs with vector embeddings, allowing LLMs to reason over complex, deeply interconnected enterprise datasets.\n\nStandard RAG fails at global queries (e.g., "Summarize the entire procurement strategy") because it only retrieves the top 10 most semantically similar text chunks. Graph RAG builds an ontological map of relationships, enabling the model to traverse nodes and synthesize answers from disparate documents with massive accuracy improvements.`,
        whyItMatters: `If an enterprise relies on LLMs for legal discovery or complex financial auditing, standard RAG hallucination rates are unacceptably high. Graph RAG significantly lowers the Cost of Predictivity for complex reasoning loops.`,
        howToCalculate: [
            'Abstract entity extraction costs during indexing',
            'Measure the latency increase from multi-hop graph queries',
            'Audit hallucination reduction vs traditional BM25/Vector retrieval'
        ],
        relatedArticles: [],
        relatedTool: { name: 'RAG Cost Extrapolator', url: '/tools/rag-chunking-visualizer' }
    },
    {
        slug: 'slm',
        name: 'Small Language Models (SLM)',
        definition: `Small Language Models (SLMs) are highly distilled AI models typically containing under 8 billion parameters. They are optimized for specific, deterministic tasks rather than emergent general reasoning.\n\nWhile frontier models (GPT-4) cost fractions of a cent per token and latency is high, SLMs can run locally on edge devices (laptops, phones) or highly optimized serverless endpoints. They drastically reduce inferencing costs and eliminate the need to send data off-site.`,
        whyItMatters: `In the pursuit of positive Return on AI Investment (ROAI), using a 1-trillion parameter model to route support tickets is economically devastating. SLMs right-size the intelligence to the task, achieving margin preservation.`,
        howToCalculate: [
            'Identify repetitive classification tasks in the AI orchestration chain',
            'Calculate the cost delta between frontier API calls and local SLM inference',
            'Implement routing architecture to leverage SLMs as the frontline tier'
        ],
        relatedArticles: [
            { title: 'ROAI is the New ROI: Why CFOs Are Killing Your AI Pilots in 2026', publication: 'The Canon', date: 'Apr 2026', url: '/blog/roai-is-the-new-roi-why-cfos-are-killing-your-ai-pilots-in-2026' }
        ],
        relatedTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' }
    }
];
