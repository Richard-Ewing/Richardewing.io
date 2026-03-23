import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Framework Comparisons — Head-to-Head Analysis | Richard Ewing',
    description: 'Side-by-side comparisons of engineering frameworks, metrics, and methodologies. PDI vs DORA, Build vs Buy, Agile vs Kanban, and more. Data-driven analysis by a Product Economist.',
    keywords: ['PDI vs DORA', 'build vs buy', 'agile vs kanban', 'framework comparison', 'engineering metrics comparison'],
    alternates: { canonical: 'https://www.richardewing.io/comparisons' },
};

const comparisons = [
    {
        slug: 'pdi-vs-dora',
        title: 'PDI vs. DORA Metrics',
        subtitle: 'Which Framework Measures What Matters?',
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
        verdict: 'Use both. PDI tells you WHERE to invest. DORA tells you IF your investment is improving delivery. Together they give a complete picture of engineering health.',
        tools: ['/tools/pdi', '/tools/aper'],
    },
    {
        slug: 'build-vs-buy',
        title: 'Build vs. Buy',
        subtitle: 'The $500K Decision Most CTOs Get Wrong',
        left: { name: 'Build', color: 'emerald' },
        right: { name: 'Buy', color: 'amber' },
        description: 'Building in-house gives control but costs 3-5x the initial estimate. Buying is faster but creates vendor lock-in. Here\'s the TCO framework that reveals the true cost.',
        rows: [
            { dimension: 'Time to Value', left: '3-12 months', right: '1-4 weeks' },
            { dimension: 'Year 1 Cost', left: '$200K-$1M+ (development)', right: '$12K-$100K (license)' },
            { dimension: 'Year 3 TCO', left: '$500K-$3M (build + maintain)', right: '$50K-$500K (license + integration)' },
            { dimension: 'Customization', left: 'Unlimited', right: 'Limited to vendor roadmap' },
            { dimension: 'Risk', left: 'Scope creep, team dependency', right: 'Vendor lock-in, sunset risk' },
            { dimension: 'Core Competency', left: 'When the capability IS your product', right: 'When it\'s infrastructure' },
        ],
        verdict: 'Build your differentiation. Buy your infrastructure. The line between them is where most CTOs make expensive mistakes.',
        tools: ['/tools/aueb', '/tools/ev-se'],
    },
    {
        slug: 'revenue-per-engineer',
        title: 'Revenue Per Engineer Benchmarks',
        subtitle: 'How Elite Companies Compare',
        left: { name: 'Elite ($1M+)', color: 'cyan' },
        right: { name: 'Average ($200-500K)', color: 'zinc' },
        description: 'Revenue per engineer varies 10x between elite and average companies. Here\'s what drives the gap and how to close it.',
        rows: [
            { dimension: 'Example Companies', left: 'Stripe ($3.2M), Figma ($2.8M)', right: 'Most growth-stage SaaS' },
            { dimension: 'Team Size', left: 'Lean, senior-heavy', right: 'Growing, mixed levels' },
            { dimension: 'Tech Debt Ratio', left: '<20% Innovation Tax', right: '40-60% Innovation Tax' },
            { dimension: 'Feature Usage', left: '>50% features used monthly', right: '20-30% features used' },
            { dimension: 'Automation', left: 'Everything automated', right: 'Manual processes persist' },
            { dimension: 'Platform Strategy', left: 'Strong internal platform', right: 'Teams duplicate work' },
        ],
        verdict: 'RPE is not about cutting engineers — it\'s about maximizing the value each engineer creates. The gap is almost always due to organizational friction, not individual skill.',
        tools: ['/tools/aper', '/tools/ev-se'],
    },
    {
        slug: 'technical-debt-types',
        title: 'Technical Debt Classification',
        subtitle: 'Not All Debt Is Created Equal',
        left: { name: 'Prudent Debt', color: 'emerald' },
        right: { name: 'Reckless Debt', color: 'red' },
        description: 'Some technical debt is strategic (shipping faster to capture market). Some is negligent (no one noticed). Here\'s how to classify and prioritize.',
        rows: [
            { dimension: 'Intent', left: 'Deliberate trade-off', right: 'Accidental or ignorant' },
            { dimension: 'Documentation', left: 'Logged with remediation plan', right: 'Unknown until it breaks' },
            { dimension: 'ROI', left: 'Positive (speed to market)', right: 'Negative (pure liability)' },
            { dimension: 'Priority', left: 'Scheduled remediation', right: 'Emergency triage' },
            { dimension: 'Board Impact', left: 'Explainable investment', right: 'Hidden liability' },
            { dimension: 'Example', left: 'Hardcoded config for launch', right: 'Copy-paste code everywhere' },
        ],
        verdict: 'Prudent debt is a tool. Reckless debt is a cancer. The difference is documentation, intent, and a remediation timeline.',
        tools: ['/tools/pdi', '/tools/scoring'],
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
    cyan: 'text-cyan-400',
    violet: 'text-violet-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    red: 'text-red-400',
    zinc: 'text-zinc-400',
};

const toolNames: Record<string, string> = {
    '/tools/pdi': 'PDI Calculator',
    '/tools/aper': 'APER Calculator',
    '/tools/aueb': 'AUEB Calculator',
    '/tools/ev-se': 'EV-SE Calculator',
    '/tools/scoring': 'Scoring Tool',
};

export default function ComparisonsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Head-to-Head Analysis</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Framework <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Comparisons</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Side-by-side analysis of engineering frameworks, metrics, and methodologies. Data-driven. No opinions without evidence.
                        </p>
                    </div>

                    <div className="space-y-12 mb-16">
                        {comparisons.map((comp) => (
                            <section key={comp.slug} id={comp.slug} className="scroll-mt-24">
                                <div className="card p-6 sm:p-8 border-white/10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.left.color]}`}>
                                            {comp.left.name}
                                        </span>
                                        <span className="text-zinc-600 text-xs">vs</span>
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.right.color]}`}>
                                            {comp.right.name}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-grotesk font-bold text-white mb-1">{comp.title}</h2>
                                    <p className="text-sm font-mono text-zinc-500 mb-3">{comp.subtitle}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{comp.description}</p>

                                    {/* Comparison Table */}
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

                                    {/* Verdict */}
                                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5 mb-4">
                                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">⚖️ Verdict</div>
                                        <p className="text-zinc-300 text-sm">{comp.verdict}</p>
                                    </div>

                                    {/* Tool Links */}
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
                    <div className="grid sm:grid-cols-3 gap-4 mb-12">
                        <Link href="/glossary" className="card p-5 text-center hover:border-cyan-500/20 transition-all group">
                            <div className="text-2xl mb-2">📚</div>
                            <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Glossary</div>
                            <div className="text-[10px] text-zinc-500">420+ terms</div>
                        </Link>
                        <Link href="/guides" className="card p-5 text-center hover:border-violet-500/20 transition-all group">
                            <div className="text-2xl mb-2">📖</div>
                            <div className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">Guides</div>
                            <div className="text-[10px] text-zinc-500">Definitive playbooks</div>
                        </Link>
                        <Link href="/curriculum/tracks" className="card p-5 text-center hover:border-emerald-500/20 transition-all group">
                            <div className="text-2xl mb-2">🎓</div>
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Curriculum</div>
                            <div className="text-[10px] text-zinc-500">24 modules</div>
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="card p-8 text-center border-violet-500/20 mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need a Custom Comparison for Your Org?</h2>
                        <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Book a strategy session for a framework comparison tailored to your stack, team, and business model.</p>
                        <a href="https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity">
                            Book Strategy Session →
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
