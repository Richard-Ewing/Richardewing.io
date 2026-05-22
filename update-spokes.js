const fs = require('fs');

let lines = fs.readFileSync('app/lib/spoke-data.ts', 'utf8').split('\n');

const updates = [
  {
    slug: 'dependency-hell',
    headline: 'How do you define and escape dependency hell in enterprise architecture?',
    newAnswer: `<p>Dependency hell occurs when software packages rely on specific, mutually exclusive, or deeply nested versions of other software packages, creating an unresolvable gridlock that prevents updates or deployments.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Architectural Root Cause</h3>
        <p>Dependency hell is almost always a symptom of <strong>tight coupling</strong> and a lack of boundary enforcement. When microservices share common libraries instead of communicating via versioned APIs, or when monoliths import hundreds of external un-pinned packages, you create a fragile ecosystem where one upgrade breaks ten other things.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Escape Route</h3>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Containerization:</strong> Use Docker to isolate application environments so dependencies do not bleed across system boundaries.</li>
            <li><strong>Strict Semantic Versioning:</strong> Enforce strict adherence to SemVer. Never blindly use <code>latest</code> tags in production builds.</li>
            <li><strong>Decoupling via APIs:</strong> Replace shared binary dependencies with shared API contracts. A service should depend on an interface, not a specific library version.</li>
        </ul>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm">🧨</span> The Blast Radius Metric
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-red-500 uppercase tracking-widest mb-2">Coupling Factor</div>
                    <div class="text-2xl font-bold text-zinc-900 mb-1">N² Connections</div>
                    <div class="text-sm font-medium text-zinc-500">Exponential risk scaling with every new internal library added.</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest mb-2">Resolution</div>
                    <div class="text-2xl font-bold text-zinc-900 mb-1">API Gateways</div>
                    <div class="text-sm font-medium text-zinc-500">Abstracting internal library versions behind strict HTTP/gRPC contracts.</div>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
        <p>If your teams spend 30% of their sprints "bumping versions" and resolving merge conflicts rather than shipping features, you have a structural dependency issue. Investing CapEx into decoupling via API contracts will immediately reclaim that lost velocity.</p>`,
    productId: 'module_engineering',
    upsellHeadline: 'Build resilient platform architectures.'
  },
  {
    slug: 'software-entropy',
    headline: 'What is software entropy and how do you calculate its financial drag on an engineering team?',
    newAnswer: `<p>Software entropy, derived from the second law of thermodynamics, dictates that any software system will naturally degrade in quality, become more complex, and harder to maintain over time unless active energy (refactoring) is injected to stabilize it.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Mechanics of Degradation</h3>
        <p>Entropy accelerates through <strong>feature stacking</strong>. When sales demands new features, engineering often bolts them onto the side of the existing architecture without taking the time to redesign the core abstractions. Over years, this creates a "Big Ball of Mud" architecture where no single engineer understands the entire system.</p>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-sm">📉</span> Technical Bankruptcy Timeline
            </h4>
            <div class="grid grid-cols-1 gap-4">
                <div class="bg-white p-4 rounded-xl border-l-4 border-l-yellow-400 shadow-sm">
                    <h5 class="font-bold text-zinc-900">Year 1-2: Rapid Iteration</h5>
                    <p class="text-sm text-zinc-600 mt-1">High velocity. Corners cut are acceptable for market capture.</p>
                </div>
                <div class="bg-white p-4 rounded-xl border-l-4 border-l-orange-400 shadow-sm">
                    <h5 class="font-bold text-zinc-900">Year 3-4: The Friction Zone</h5>
                    <p class="text-sm text-zinc-600 mt-1">Velocity drops 40%. Engineers complain about the codebase. QA cycles extend.</p>
                </div>
                <div class="bg-white p-4 rounded-xl border-l-4 border-l-red-500 shadow-sm">
                    <h5 class="font-bold text-zinc-900">Year 5+: Technical Bankruptcy</h5>
                    <p class="text-sm text-zinc-600 mt-1">Velocity approaches zero. High engineering churn. Complete rewrite proposed.</p>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">The 90-Day Refactoring Plan</h3>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Audit & Quarantine:</strong> Isolate the most entropic modules using cyclomatic complexity scanners.</li>
            <li><strong>Establish the 20% Rule:</strong> Mandate that 20% of every sprint is dedicated strictly to technical debt paydown and architectural refactoring.</li>
            <li><strong>Halt Feature Development:</strong> If defect rates exceed velocity rates, trigger a total feature freeze until stability is restored.</li>
        </ul>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
        <p>Entropy is a financial liability. Refusal to allocate engineering capacity to system maintenance acts as a compounding tax on your R&D budget, eventually leading to a complete halt in product innovation.</p>`,
    productId: 'module_engineering',
    upsellHeadline: 'Reclaim engineering velocity.'
  },
  {
    slug: 'code-smell-engineering-manager',
    headline: 'How should an engineering manager translate code smells into organizational risk metrics?',
    newAnswer: `<p>A "Code Smell" is a surface indication that usually corresponds to a deeper problem in the system. For an Engineering Manager, these aren't just technical issues—they are organizational symptoms indicating process failures, misaligned incentives, or severe skill gaps.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Cultural Translation of Code Smells</h3>
        <p>When an engineer writes a 5,000-line "God Class," it doesn't just mean they don't understand object-oriented programming. It usually means the team lacks architectural oversight, code reviews are being rubber-stamped to meet artificial deadlines, or the feature requirements were changed 10 times during the sprint.</p>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm">🕵️</span> The Cultural Debt Index
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest mb-2">Technical Smell</div>
                    <div class="text-lg font-bold text-zinc-900 mb-1">Duplicated Code</div>
                    <div class="text-sm font-medium text-zinc-500">Copy-pasting logic across multiple files.</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest mb-2">Cultural Root Cause</div>
                    <div class="text-lg font-bold text-zinc-900 mb-1">Siloed Teams</div>
                    <div class="text-sm font-medium text-zinc-500">Engineers do not talk to each other; lack of shared component libraries.</div>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">Managerial Remediation</h3>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Enforce Rigorous Code Reviews:</strong> PRs (Pull Requests) cannot be approved by the author. Require at least one senior engineer review.</li>
            <li><strong>Abstract Complexity:</strong> Invest in a central Platform Engineering team to build paved roads and shared libraries.</li>
            <li><strong>Change the Incentives:</strong> Stop promoting engineers who ship features fast but leave a mess. Reward those who delete code and simplify architectures.</li>
        </ul>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
        <p>Code smells are leading indicators of future outages and velocity collapse. If your managers are ignoring them to hit quarterly product targets, they are stealing from next year's budget to pay for today's bonuses.</p>`,
    productId: 'module_leadership',
    upsellHeadline: 'Align engineering incentives with clean architecture.'
  },
  {
    slug: 'incident-management-cost',
    headline: 'How do you accurately measure the true financial cost of a Sev-1 incident?',
    newAnswer: `<p>Incident Management is often viewed purely as an operational function (PagerDuty alerts, war rooms, post-mortems). However, at the C-suite level, incidents are unbudgeted financial liabilities that actively destroy enterprise valuation through SLA penalties, churn, and diverted R&D capital.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Hidden OpEx Drain</h3>
        <p>The cost of downtime isn't just lost transactions during the outage window. It is the cost of context switching. When a Sev-1 incident occurs, you are pulling 10 highly paid engineers off feature development. After the incident, the subsequent post-mortem and remediation sprint completely derails the roadmap.</p>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-sm">💸</span> The True Cost Formula
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest mb-2">Direct Cost</div>
                    <div class="text-xl font-bold text-zinc-900 mb-1">Lost Revenue</div>
                    <div class="text-sm font-medium text-zinc-500">Transactions halted + SLA SLA credit payouts.</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest mb-2">Indirect Cost</div>
                    <div class="text-xl font-bold text-zinc-900 mb-1">Wasted Wages</div>
                    <div class="text-sm font-medium text-zinc-500">Hourly rate of engineers pulled into the war room.</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div class="text-xs font-mono font-bold text-violet-500 uppercase tracking-widest mb-2">Opportunity Cost</div>
                    <div class="text-xl font-bold text-zinc-900 mb-1">Delayed Features</div>
                    <div class="text-sm font-medium text-zinc-500">Lost market capture from delayed roadmap delivery.</div>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">Strategic Mitigation</h3>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Error Budgets:</strong> Implement strict SRE error budgets. If a service depletes its budget, it is barred from shipping new features until reliability is restored.</li>
            <li><strong>Automated Rollbacks:</strong> Invest in CI/CD infrastructure that automatically rolls back deployments if error rates spike, preventing Sev-1s from requiring human intervention.</li>
            <li><strong>Chaos Engineering:</strong> Intentionally break things during business hours to train your team and validate resilient failovers.</li>
        </ul>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Case Study</h3>
        <p>A major SaaS provider was experiencing $2M/year in SLA credit payouts. By investing $500k in a dedicated SRE team to build automated failovers and enforcing strict error budgets, they reduced Sev-1 incidents by 80%, yielding a 3x ROI in year one while simultaneously accelerating feature velocity.</p>`,
    productId: 'module_financials',
    upsellHeadline: 'Stop bleeding capitalized OpEx.'
  },
  {
    slug: 'integration-risk',
    headline: 'How do you mitigate external integration risk before launching a new product?',
    newAnswer: `<p>Integration Risk is the probability that a product feature or entire application will fail—not because its internal logic is flawed, but because it cannot successfully communicate with external systems, legacy databases, or third-party APIs.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Late-Stage Discovery Tax</h3>
        <p>Most product managers scope the UI and internal business logic extensively, but leave "API integration" as a black box for the final sprint. This is catastrophic. Finding out in week 11 of a 12-week project that a critical third-party API rate-limits you, or doesn't return the necessary payload, means the entire feature is scrapped and the CapEx is wasted.</p>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm">⏱️</span> Shift-Left Integration Timeline
            </h4>
            <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                <div class="flex flex-col space-y-4">
                    <div class="flex items-start gap-3">
                        <div class="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                            <h5 class="font-bold text-zinc-900">Sprint 0: API Proving</h5>
                            <p class="text-sm text-zinc-600">Before writing a line of product code, engineers must write a script to prove the external API can actually support the use case.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                            <h5 class="font-bold text-zinc-900">Sprint 1: Mocking Contracts</h5>
                            <p class="text-sm text-zinc-600">Establish strict schema contracts. Frontend builds against mocks while Backend builds the actual adapters.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</div>
                        <div>
                            <h5 class="font-bold text-zinc-900">Sprint 2+: Core Logic</h5>
                            <p class="text-sm text-zinc-600">Proceed with building the application logic now that integration risk is effectively zero.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">De-Risking Strategies</h3>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>The Anti-Corruption Layer:</strong> Build an abstraction layer between your clean modern code and the messy legacy system you are integrating with.</li>
            <li><strong>Circuit Breakers:</strong> Ensure your product degrades gracefully if the third-party integration goes offline, rather than crashing the entire application.</li>
        </ul>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
        <p>Treat external integrations as volatile dependencies. By forcing your engineering teams to "prove the integration" in Sprint 0, you eliminate the risk of spending millions on a product that structurally cannot launch.</p>`,
    productId: 'module_product_mgmt',
    upsellHeadline: 'De-risk enterprise product delivery.'
  },
  {
    slug: 'calculating-roai',
    headline: 'How do you calculate the financial Return on AI Investment (ROAI)?',
    newAnswer: `<p>ROAI (Return on AI Investment) is the critical financial metric for evaluating generative models, autonomous agents, and RAG pipelines. Unlike traditional software ROI, which is deterministic, ROAI must account for probabilistic outcomes, hallucination costs, and inference burn rates.</p>
        <h3 class="text-xl font-bold mt-8 mb-4">The Token Economics Trap</h3>
        <p>Many enterprises build a prototype using GPT-4 that works brilliantly in a demo. They fail to realize that running that model on 10,000 customer tickets a day will cost $80,000/month in API inference fees. Furthermore, if the model hallucinates on 5% of those tickets, the manual human remediation cost (or brand damage) often vastly exceeds the cost savings of the automation itself.</p>
        <div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 class="text-lg font-bold font-grotesk tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm">🧠</span> The Predictivity Cost Curve
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl border-l-4 border-l-indigo-500 shadow-sm">
                    <h5 class="font-bold text-zinc-900">Positive ROAI Zone</h5>
                    <ul class="text-sm font-medium text-zinc-600 space-y-1 list-disc pl-4 mt-2">
                        <li>High human wage offset (e.g., legal review).</li>
                        <li>Low cost of hallucination.</li>
                        <li>Small model (Llama-3 8B) running on-premise.</li>
                    </ul>
                </div>
                <div class="bg-white p-4 rounded-xl border-l-4 border-l-red-500 shadow-sm">
                    <h5 class="font-bold text-zinc-900">Negative ROAI Zone</h5>
                    <ul class="text-sm font-medium text-zinc-600 space-y-1 list-disc pl-4 mt-2">
                        <li>Low human wage offset (e.g., data entry).</li>
                        <li>Catastrophic cost of hallucination (e.g., medical dosage).</li>
                        <li>Heavy frontier model (GPT-4) API usage.</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mt-8 mb-4">The ROAI Calculation Formula</h3>
        <p><code>ROAI = (Human Wage Savings + Net New Revenue) - (Inference Cost + Human Remediation Cost + Model Fine-Tuning CapEx)</code></p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Inference Cost:</strong> The direct token fees or GPU cloud compute costs.</li>
            <li><strong>Human Remediation Cost:</strong> The time spent by engineers or subject matter experts verifying and correcting model outputs.</li>
        </ul>
        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
        <p>Do not deploy AI for AI's sake. If a deterministic Python script or a SQL query can solve the problem with 100% accuracy for $0 in inference costs, building an LLM agent to do it is financial negligence. Reserve heavy AI models strictly for high-variance, unstructured data problems where the human wage offset justifies the inference burn.</p>`,
    productId: 'module_ai_economics',
    upsellHeadline: 'Master AI unit economics.'
  }
];

updates.forEach(u => {
    let start = lines.findIndex(l => l.includes('questionSlug') && l.includes(u.slug));
    if (start !== -1) {
        let end = start;
        while (!lines[end].includes('upsellHeadline:')) end++;
        
        // Construct the new block
        const newBlock = [
            `                    questionSlug: '${u.slug}',`,
            `                    questionHeadline: '${u.headline}',`,
            `                    answerHtml: \`${u.newAnswer}\`,`,
            `                    recommendedProductId: '${u.productId}',`,
            `                    upsellHeadline: '${u.upsellHeadline}'`
        ];
        
        // Replace
        lines.splice(start, end - start + 1, ...newBlock);
    }
});

fs.writeFileSync('app/lib/spoke-data.ts', lines.join('\n'));
console.log("Updated spoke-data.ts successfully");
