import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Framework Comparisons — 10 Head-to-Head Analyses | Richard Ewing',
    description: 'Side-by-side comparisons of engineering frameworks, metrics, and methodologies. PDI vs DORA, Build vs Buy, Agile vs Kanban, and more. Data-driven analysis by a Product Economist.',
    keywords: ['PDI vs DORA', 'build vs buy', 'agile vs kanban', 'framework comparison', 'engineering metrics comparison', 'technical debt types'],
    alternates: { canonical: 'https://www.richardewing.io/comparisons' },
};

const comparisons = [
    {
        slug: 'pdi-vs-dora',
        title: 'PDI vs. DORA Metrics',
        subtitle: 'Financial Health vs. Delivery Speed',
        left: { name: 'PDI', color: 'cyan' },
        right: { name: 'DORA', color: 'violet' },
        description: 'DORA measures delivery speed. PDI measures technology capital health. Both are essential — here\'s when to use each and how they complement each other.',
        rows: [
            { dimension: 'Measures', left: 'Technology capital health in dollars', right: 'Delivery throughput and stability' },
            { dimension: 'Audience', left: 'Board, CFO, PE firms', right: 'Engineering managers, CTOs' },
            { dimension: 'Language', left: 'Financial ($, ROI, risk)', right: 'Technical (frequency, time)' },
            { dimension: 'Focus', left: 'Asset health and debt accumulation', right: 'Delivery speed and reliability' },
            { dimension: 'Frequency', left: 'Quarterly or at investment events', right: 'Continuous monitoring' },
            { dimension: 'Blind Spot', left: 'Doesn\'t measure delivery velocity', right: 'Doesn\'t quantify economic impact' },
        ],
        verdict: 'Use both. PDI tells you WHERE to invest. DORA tells you IF your investment is improving delivery. Together they give a complete picture.',
        economicImpact: 'Organizations using only DORA often miss $500K-$2M in hidden technical debt. Adding PDI to your DORA dashboard reveals the financial exposure behind velocity metrics.',
        decisionGuide: 'Run DORA continuously for operations. Run PDI quarterly for strategy. Present DORA to engineering leadership; present PDI to the board.',
        tools: ['/tools/pdi', '/tools/aper'],
    },
    {
        slug: 'build-vs-buy',
        title: 'Build vs. Buy',
        subtitle: 'The $500K Decision Framework',
        left: { name: 'Build', color: 'emerald' },
        right: { name: 'Buy', color: 'amber' },
        description: 'Building in-house gives control but costs 3-5x the initial estimate. Buying is faster but creates vendor lock-in. Here\'s the TCO framework.',
        rows: [
            { dimension: 'Time to Value', left: '3-12 months', right: '1-4 weeks' },
            { dimension: 'Year 1 Cost', left: '$200K-$1M+ (development)', right: '$12K-$100K (license)' },
            { dimension: 'Year 3 TCO', left: '$500K-$3M (build + maintain)', right: '$50K-$500K (license + integration)' },
            { dimension: 'Customization', left: 'Unlimited', right: 'Limited to vendor roadmap' },
            { dimension: 'Risk', left: 'Scope creep, team dependency', right: 'Vendor lock-in, sunset risk' },
            { dimension: 'Core Competency', left: 'When the capability IS your product', right: 'When it\'s infrastructure' },
        ],
        verdict: 'Build your differentiation. Buy your infrastructure. The line between them is where most CTOs make expensive mistakes.',
        economicImpact: 'The average build-vs-buy mistake costs $1.2M over 3 years. Most overruns come from underestimating maintenance costs: each custom system requires 20-30% of original build cost annually to maintain.',
        decisionGuide: 'Decision matrix: Build if (core differentiator + >5 engineers + >12 months runway). Buy if (commodity capability + <5 engineers + need value in <4 weeks).',
        tools: ['/tools/aueb', '/tools/ev-se'],
    },
    {
        slug: 'revenue-per-engineer',
        title: 'Revenue Per Engineer Benchmarks',
        subtitle: 'Elite ($1M+) vs. Average ($200-500K)',
        left: { name: 'Elite ($1M+)', color: 'cyan' },
        right: { name: 'Average', color: 'zinc' },
        description: 'Revenue per engineer varies 10x between elite and average companies. Here\'s what drives the gap and how to close it.',
        rows: [
            { dimension: 'RPE', left: 'Stripe $3.2M, Figma $2.8M', right: '$200-500K (most growth SaaS)' },
            { dimension: 'Team Size', left: 'Lean, senior-heavy', right: 'Growing, mixed levels' },
            { dimension: 'Innovation Tax', left: '<20%', right: '40-60%' },
            { dimension: 'Feature Usage', left: '>50% features used monthly', right: '20-30% features used' },
            { dimension: 'Automation', left: 'Everything automated', right: 'Manual processes persist' },
            { dimension: 'Platform', left: 'Strong internal platform', right: 'Teams duplicate work' },
        ],
        verdict: 'RPE is not about cutting engineers — it\'s about maximizing the value each engineer creates. The gap is organizational friction, not individual skill.',
        economicImpact: 'Moving from $400K to $800K RPE typically requires reducing Innovation Tax from 50% to 20%, consolidating tooling, and implementing platform engineering — not reducing headcount.',
        decisionGuide: 'Track RPE quarterly. Below $300K at Series B+: investigate organizational friction. Above $1M: you’re elite — protect the culture and systems that got you there.',
        tools: ['/tools/aper', '/tools/ev-se'],
    },
    {
        slug: 'technical-debt-types',
        title: 'Technical Debt Classification',
        subtitle: 'Prudent vs. Reckless — Not All Debt Is Equal',
        left: { name: 'Prudent', color: 'emerald' },
        right: { name: 'Reckless', color: 'red' },
        description: 'Some technical debt is strategic. Some is negligent. The difference determines whether debt helps or kills your organization.',
        rows: [
            { dimension: 'Intent', left: 'Deliberate trade-off', right: 'Accidental or ignorant' },
            { dimension: 'Documentation', left: 'Logged with plan', right: 'Unknown until it breaks' },
            { dimension: 'ROI', left: 'Positive (speed to market)', right: 'Negative (pure liability)' },
            { dimension: 'Priority', left: 'Scheduled remediation', right: 'Emergency triage' },
            { dimension: 'Board Impact', left: 'Explainable investment', right: 'Hidden liability' },
            { dimension: 'Example', left: 'Hardcoded config for launch', right: 'Copy-paste code everywhere' },
        ],
        verdict: 'Prudent debt is a tool. Reckless debt is a cancer. The difference is documentation, intent, and a remediation timeline.',
        economicImpact: 'Reckless debt costs 3-5x more to remediate than prudent debt because discovery is the bottleneck: you can\'t fix what you don\'t know about.',
        decisionGuide: 'Before incurring any debt: document it, estimate remediation cost, set a timeline. If you can\'t do all three, you\'re likely being reckless.',
        tools: ['/tools/pdi', '/tools/scoring'],
    },
    {
        slug: 'agile-vs-kanban',
        title: 'Scrum vs. Kanban',
        subtitle: 'Sprint-Based vs. Flow-Based Delivery',
        left: { name: 'Scrum', color: 'cyan' },
        right: { name: 'Kanban', color: 'emerald' },
        description: 'Scrum works great for teams that need structure. Kanban works for teams that need flow. Neither is universally better.',
        rows: [
            { dimension: 'Cadence', left: 'Fixed sprints (1-4 weeks)', right: 'Continuous flow' },
            { dimension: 'Planning', left: 'Sprint planning ceremony', right: 'Just-in-time execution' },
            { dimension: 'WIP Limits', left: 'Sprint capacity', right: 'Explicit per-column limits' },
            { dimension: 'Best For', left: 'Feature development, new teams', right: 'Operations, experienced teams' },
            { dimension: 'Metrics', left: 'Velocity, sprint burndown', right: 'Cycle time, throughput' },
            { dimension: 'Overhead', left: 'High (ceremonies, roles)', right: 'Low (board-driven)' },
        ],
        verdict: 'Scrum for feature teams that need predictability. Kanban for operations teams that need flow. ScrumBan for teams that outgrow Scrum.',
        economicImpact: 'Wrong methodology costs 15-25% of team velocity. Common mistake: forcing Scrum on ops teams (ceremony overhead) or Kanban on junior teams (insufficient structure).',
        decisionGuide: 'New team (<6 months)? Start with Scrum. Experienced team with predictable work? Try Kanban. Team doing both features and maintenance? ScrumBan.',
        tools: ['/tools/aper'],
    },
    {
        slug: 'monolith-vs-microservices',
        title: 'Monolith vs. Microservices',
        subtitle: 'The Architecture Decision That Costs $2M to Reverse',
        left: { name: 'Monolith', color: 'amber' },
        right: { name: 'Microservices', color: 'violet' },
        description: 'Every startup should start with a monolith. Most know when to split. Few know the true cost of premature decomposition.',
        rows: [
            { dimension: 'Team Size', left: 'Up to 20 engineers', right: '20+ with domain ownership' },
            { dimension: 'Deployment', left: 'Single deploy (simple)', right: 'Independent deploys (complex)' },
            { dimension: 'Latency', left: 'In-process calls (fast)', right: 'Network calls (overhead)' },
            { dimension: 'Debugging', left: 'Single codebase (easy)', right: 'Distributed tracing (hard)' },
            { dimension: 'Cost', left: 'Lower infrastructure', right: '2-5x infrastructure cost' },
            { dimension: 'Scaling', left: 'Vertical (limited)', right: 'Horizontal (unlimited)' },
        ],
        verdict: 'Start monolith, extract when Conway\'s Law demands it. The worst outcome is premature microservices — high cost, high complexity, low benefit.',
        economicImpact: 'Premature microservices add $500K-$2M in infrastructure and coordination costs per year. The break-even point is typically 20+ engineers with clear domain boundaries.',
        decisionGuide: 'Under 20 engineers? Monolith. 20-50 with clear domains? Start extracting. Over 50? You probably already need microservices.',
        tools: ['/tools/aueb', '/tools/pdi'],
    },
    {
        slug: 'fine-tuning-vs-rag',
        title: 'Fine-Tuning vs. RAG',
        subtitle: 'Which AI Strategy Actually Makes Economic Sense?',
        left: { name: 'Fine-Tuning', color: 'violet' },
        right: { name: 'RAG', color: 'cyan' },
        description: 'Fine-tuning gives model-level customization but costs $10K-$500K per training run. RAG gives context-level customization at a fraction of the cost.',
        rows: [
            { dimension: 'Setup Cost', left: '$10K-$500K per run', right: '$1K-$10K (once)' },
            { dimension: 'Latency', left: 'Same as base model', right: '+200-500ms (retrieval)' },
            { dimension: 'Data Freshness', left: 'Frozen at training time', right: 'Real-time updates' },
            { dimension: 'Accuracy', left: 'High for style/behavior', right: 'High for factual recall' },
            { dimension: 'Maintenance', left: 'Re-train for updates', right: 'Update knowledge base' },
            { dimension: 'Use Case', left: 'Tone, format, reasoning', right: 'Knowledge retrieval' },
        ],
        verdict: 'Use RAG for knowledge. Use fine-tuning for behavior. Use both when your use case demands it. For most products, start with RAG — it\'s cheaper, faster, and updateable.',
        economicImpact: 'Starting with fine-tuning when RAG would suffice wastes $50K-$500K upfront. RAG prototypes can validate AI features in days; fine-tuning takes weeks to months.',
        decisionGuide: 'Need current knowledge retrieval? RAG. Need consistent tone/format? Fine-tuning. Need both? RAG first, fine-tune the base model second.',
        tools: ['/tools/aueb'],
    },
    {
        slug: 'staff-augmentation-vs-delivery',
        title: 'Staff Augmentation vs. Managed Delivery',
        subtitle: 'Outsourcing Models — Which Burns Less Cash?',
        left: { name: 'Staff Aug', color: 'amber' },
        right: { name: 'Managed', color: 'emerald' },
        description: 'Staff augmentation gives you bodies. Managed delivery gives you outcomes. The wrong choice costs 40% more and delivers 50% less.',
        rows: [
            { dimension: 'Control', left: 'You manage the team', right: 'Vendor manages delivery' },
            { dimension: 'Cost', left: '$150-250/hr per person', right: 'Fixed bid or milestone' },
            { dimension: 'Risk', left: 'On your P&L', right: 'Shared with vendor' },
            { dimension: 'Hiring Speed', left: '2-4 weeks', right: '4-8 weeks (team ramp)' },
            { dimension: 'Knowledge', left: 'Stays with your team', right: 'Risk of vendor lock-in' },
            { dimension: 'Best For', left: 'Known work, capacity gap', right: 'Unknown scope, outcome needed' },
        ],
        verdict: 'Staff aug for capacity gaps with known work. Managed delivery for outcomes you can\'t staff internally. Never use staff aug for innovation — you\'re paying for hours, not ideas.',
        economicImpact: 'Using staff augmentation for innovation/R&D typically costs 40% more and delivers 50% less than managed delivery or internal teams, because you pay for hours regardless of outcomes.',
        decisionGuide: 'Known scope + temporary gap? Staff aug. Unknown scope + specific outcome needed? Managed delivery. Core IP? Always internal.',
        tools: ['/tools/aper', '/tools/ev-se'],
    },
    {
        slug: 'platform-team-vs-sres',
        title: 'Platform Engineering vs. SRE',
        subtitle: 'Two Approaches to Developer Productivity',
        left: { name: 'Platform Eng', color: 'cyan' },
        right: { name: 'SRE', color: 'violet' },
        description: 'Platform engineering builds internal developer tools. SRE keeps systems running. Both reduce friction, but from different angles.',
        rows: [
            { dimension: 'Focus', left: 'Developer experience', right: 'System reliability' },
            { dimension: 'Output', left: 'Internal tools, abstractions', right: 'SLOs, incident response' },
            { dimension: 'Metrics', left: 'Developer satisfaction, MTTR', right: 'SLO compliance, MTTR' },
            { dimension: 'Team Size', left: '2-5% of engineering org', right: '5-10% of engineering org' },
            { dimension: 'ROI Horizon', left: '6-12 months', right: '3-6 months' },
            { dimension: 'Risk of Not Having', left: 'Tooling sprawl, slow onboarding', right: 'Outages, alert fatigue' },
        ],
        verdict: 'Start with SRE (you need reliability first). Add platform engineering when tool sprawl becomes the bottleneck. Best orgs have both.',
        economicImpact: 'Platform engineering ROI takes 6-12 months to materialize. SRE pays back in 3-6 months through reduced incidents. Invest in SRE first to free up time, then invest in platform eng.',
        decisionGuide: 'Frequent outages? SRE first. Slow onboarding + tool sprawl? Platform engineering. Both? You need both — separate teams, shared metrics.',
        tools: ['/tools/aper'],
    },
    {
        slug: 'capex-vs-opex',
        title: 'CapEx vs. OpEx in R&D',
        subtitle: 'How Engineering Costs Hit the Financial Statements',
        left: { name: 'CapEx', color: 'emerald' },
        right: { name: 'OpEx', color: 'amber' },
        description: 'Whether engineering work gets capitalized (CapEx) or expensed (OpEx) changes your EBITDA, tax implications, and how investors value your company.',
        rows: [
            { dimension: 'Accounting', left: 'Capitalized as an asset', right: 'Expensed immediately' },
            { dimension: 'Impact', left: 'Improves EBITDA', right: 'Reduces EBITDA' },
            { dimension: 'Example', left: 'New feature development', right: 'Bug fixes, maintenance' },
            { dimension: 'Valuation', left: 'Increases asset base', right: 'Reduces reported profitability' },
            { dimension: 'PE Impact', left: 'Scrutinized in due diligence', right: 'Expected line item' },
            { dimension: 'Ratio Target', left: '60-70% of R&D', right: '30-40% of R&D' },
        ],
        verdict: 'The CapEx/OpEx ratio reveals engineering health. If less than 50% of R&D is capitalizable, you\'re spending most of your budget keeping the lights on — not innovating.',
        economicImpact: 'Improving CapEx ratio from 40% to 65% on a $5M R&D budget adds $1.25M to your asset base annually, improving EBITDA and potentially adding 0.5-1x to revenue multiples.',
        decisionGuide: 'Track CapEx ratio monthly. Below 50%? Investigate maintenance load. Above 70%? Verify you\'re not under-investing in bug fixes and stability.',
        tools: ['/tools/ev-se', '/tools/pdi'],
    },
];

const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    red: 'text-red-400 bg-red-500/10 border-red-500/20',
    zinc: 'text-zinc-400 bg-white/[0.03] border-white/10',
};

const textColor: Record<string, string> = {
    cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
    amber: 'text-amber-400', red: 'text-red-400', zinc: 'text-zinc-400',
};

const toolNames: Record<string, string> = {
    '/tools/pdi': 'PDI Calculator', '/tools/aper': 'APER Calculator',
    '/tools/aueb': 'AUEB Calculator', '/tools/ev-se': 'EV-SE Calculator',
    '/tools/scoring': 'Scoring Tool',
};

export default function ComparisonsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{comparisons.length} Head-to-Head Analyses</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Framework <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Comparisons</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Side-by-side analysis of engineering frameworks, metrics, and methodologies. Data-driven. No opinions without evidence.
                        </p>
                    </div>

                    {/* Jump Links */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {comparisons.map(c => (
                            <a key={c.slug} href={`#${c.slug}`} className="text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/5 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all">
                                {c.left.name} vs {c.right.name}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-10 mb-16">
                        {comparisons.map((comp) => (
                            <section key={comp.slug} id={comp.slug} className="scroll-mt-24">
                                <div className="card p-6 sm:p-8 border-white/10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.left.color]}`}>{comp.left.name}</span>
                                        <span className="text-zinc-600 text-xs">vs</span>
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.right.color]}`}>{comp.right.name}</span>
                                    </div>
                                    <h2 className="text-2xl font-grotesk font-bold text-white mb-1">{comp.title}</h2>
                                    <p className="text-sm font-mono text-zinc-500 mb-3">{comp.subtitle}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{comp.description}</p>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="text-left py-3 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">Dimension</th>
                                                    <th className={`text-left py-3 px-4 font-mono uppercase tracking-widest text-xs ${textColor[comp.left.color]}`}>{comp.left.name}</th>
                                                    <th className={`text-left py-3 px-4 font-mono uppercase tracking-widest text-xs ${textColor[comp.right.color]}`}>{comp.right.name}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comp.rows.map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5">
                                                        <td className="py-3 px-4 text-white font-medium">{row.dimension}</td>
                                                        <td className={`py-3 px-4 ${textColor[comp.left.color]}`}>{row.left}</td>
                                                        <td className={`py-3 px-4 ${textColor[comp.right.color]}`}>{row.right}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5 mb-4">
                                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">⚖️ Verdict</div>
                                        <p className="text-zinc-300 text-sm">{comp.verdict}</p>
                                    </div>

                                    {(comp as { economicImpact?: string }).economicImpact && (
                                        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mb-4">
                                            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2">💰 Economic Impact</div>
                                            <p className="text-zinc-300 text-sm">{(comp as { economicImpact?: string }).economicImpact}</p>
                                        </div>
                                    )}

                                    {(comp as { decisionGuide?: string }).decisionGuide && (
                                        <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mb-4">
                                            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-2">🧭 Decision Guide</div>
                                            <p className="text-zinc-300 text-sm">{(comp as { decisionGuide?: string }).decisionGuide}</p>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-[10px] text-zinc-500">Run the analysis:</span>
                                        {comp.tools.map((tool) => (
                                            <Link key={tool} href={tool} className="text-xs text-cyan-400 hover:underline">
                                                🛠️ {toolNames[tool] || tool}
                                            </Link>
                                        ))}
                                        <Link href="/advisory" className="text-xs text-violet-400 hover:underline ml-auto">
                                            Want expert analysis? →
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Cross-Links */}
                    <div className="grid sm:grid-cols-4 gap-3 mb-12">
                        <Link href="/glossary" className="card p-4 text-center hover:border-cyan-500/20 transition-all group">
                            <div className="text-xl mb-1">📚</div>
                            <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Glossary</div>
                            <div className="text-[9px] text-zinc-600">420+ terms</div>
                        </Link>
                        <Link href="/guides" className="card p-4 text-center hover:border-violet-500/20 transition-all group">
                            <div className="text-xl mb-1">📖</div>
                            <div className="text-xs font-bold text-white group-hover:text-violet-400 transition-colors">Guides</div>
                            <div className="text-[9px] text-zinc-600">10 playbooks</div>
                        </Link>
                        <Link href="/curriculum/tracks" className="card p-4 text-center hover:border-emerald-500/20 transition-all group">
                            <div className="text-xl mb-1">🎓</div>
                            <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">Curriculum</div>
                            <div className="text-[9px] text-zinc-600">60 modules</div>
                        </Link>
                        <Link href="/tools" className="card p-4 text-center hover:border-amber-500/20 transition-all group">
                            <div className="text-xl mb-1">🛠️</div>
                            <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">Free Tools</div>
                            <div className="text-[9px] text-zinc-600">5 calculators</div>
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="card p-8 text-center border-violet-500/20 mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need a Custom Framework Analysis?</h2>
                        <p className="text-zinc-400 mb-6 max-w-lg mx-auto text-sm">Book a strategy session for a comparison tailored to your stack, team, and business model.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/api/buy/strategy_session" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity">
                                Book Strategy Session →
                            </a>
                            <Link href="/guides" className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                Browse All Guides →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
