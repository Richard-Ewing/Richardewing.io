import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
    title: 'PE & VC AI Capital Due Diligence',
    description: 'Pre-close software forensic audits and margin engineering for private equity firms and growth stage investors.',
    keywords: ['R&D due diligence', 'technical due diligence PE', 'VC technology assessment', 'portfolio company audit', 'technical debt valuation', 'Product Debt Index', 'Richard Ewing'],
    alternates: { canonical: 'https://www.richardewing.io/for-investors' },
    openGraph: { title: 'For Investors  -  R&D Capital Due Diligence', description: 'Quantify technical debt in dollars before you invest.', url: 'https://www.richardewing.io/for-investors', type: 'website' },
};

const useCases = [
    { title: 'Pre-Acquisition Due Diligence', description: 'Quantify the technical debt of an acquisition target before closing. Know the real R&D capital cost  -  not the story the CTO tells.', icon: '🔍', stats: 'Prevents 20-40% hidden cost surprises' },
    { title: 'Portfolio Company Monitoring', description: 'Ongoing R&D audits for portfolio companies. Track Technical Insolvency Date, Innovation Tax, and engineering velocity across your portfolio.', icon: '📊', stats: 'Quarterly reporting for LPs' },
    { title: 'Value Creation Planning', description: 'Post-acquisition technology roadmap. Prioritize debt remediation, team restructuring, and AI modernization for maximum IRR.', icon: '💎', stats: 'Align engineering to EBITDA' },
    { title: 'Exit Preparation', description: 'Prepare portfolio companies for sale. Clean up technical debt, improve DORA metrics, and create vendor-ready technology documentation.', icon: '🚀', stats: 'Maximize exit multiples' },
];

const metrics = [
    { name: 'Product Debt Index (PDI)', description: 'Single score (0-100) quantifying total technical debt', link: '/tools/pdi' },
    { name: 'Technical Insolvency Date', description: 'When maintenance load exceeds capacity, the final boundary for R&D', link: '/articles/frameworks/technical-insolvency-date' },
    { name: 'Innovation Tax', description: 'Percentage of engineering spent on maintenance vs. new features', link: '/articles/frameworks/innovation-tax' },
    { name: 'APER Score', description: 'Revenue generated per engineer, the primary efficiency metric', link: '/tools/aper' },
    { name: 'AI COGS Analysis', description: 'Variable cost of AI features eating into gross margins', link: '/tools/aueb' },
    { name: 'Frontier Model Economics', description: 'Preventing portfolio gross margin collapse from un-routed inference spend', link: '/articles/frameworks/frontier-model-economics' },
    { name: 'The Transaction That Succeeds', description: 'Fiduciary AI risk audit assessing corporate liability from autonomous agents', link: '/articles/frameworks/the-transaction-that-succeeds' },
];

export default function ForInvestorsPage() {
    const schema = {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'R&D Capital Due Diligence for PE & VC', provider: { '@type': 'Person', name: 'Richard Ewing' },
        description: 'Quantify technical debt in dollars for investment decisions.',
        url: 'https://www.richardewing.io/for-investors',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-cyan-500 uppercase tracking-widest mb-4">For Private Equity & Venture Capital</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Quantify R&D Risk<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Before You Invest</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto mb-8">
                            Technical debt is the #1 hidden cost in technology acquisitions. R&D Capital Audits translate engineering complexity into dollar-denominated risk that LPs, boards, and deal teams understand.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/services" className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Request Due Diligence Proposal →</Link>
                            <Link href="/tools/pdi" className="px-8 py-4 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5 transition-colors">Try PDI Calculator Free →</Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {useCases.map((uc, i) => (
                            <div key={i} className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
                                <span className="text-3xl mb-4 block">{uc.icon}</span>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">{uc.title}</h2>
                                <p className="text-zinc-900 mb-4">{uc.description}</p>
                                <span className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">{uc.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-10 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8 text-center">What We Measure</h2>
                        <div className="space-y-4">
                            {metrics.map((m, i) => (
                                <Link key={i} href={m.link} className="flex items-center justify-between p-5 rounded-xl border border-zinc-400 hover:border-cyan-500/30 transition-colors group">
                                    <div>
                                        <div className="text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">{m.name}</div>
                                        <div className="text-sm font-semibold text-zinc-900 font-medium">{m.description}</div>
                                    </div>
                                    <span className="text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* PE & VC Due Diligence Research & Publications */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                            <div>
                                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                                    Primary Source Field Telemetry &bull; Investor Due Diligence
                                </span>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                    Capital Allocation &amp; Due Diligence Research
                                </h2>
                            </div>
                            <Link 
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 uppercase tracking-wider"
                            >
                                Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {RESEARCH_CORPUS.filter(art => 
                                art.domain === 'Software Economics' || 
                                art.domain === 'AI Economics' || 
                                art.title.includes('CFO') || 
                                art.title.includes('Capitalization') || 
                                art.title.includes('Gross Margin') ||
                                art.title.includes('P&L')
                            ).slice(0, 4).map((pub) => (
                                <a
                                    key={pub.id}
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-950 uppercase">{pub.publisher}</span>
                                            <span className="text-zinc-500">{pub.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-950 group-hover:text-emerald-900 transition-colors mb-2 leading-snug">
                                            {pub.title}
                                        </h3>
                                        <p className="text-xs text-zinc-700 leading-relaxed line-clamp-2">
                                            {pub.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-emerald-200/40 text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                                        Read Due Diligence Paper &rarr;
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Trusted by Top PE Firms</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">R&D Capital Audits have been used in 100+ due diligence engagements. Published frameworks in CIO.com and Built In. Board-ready deliverables.</p>
                        <Link href="/services" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Schedule a 30-Minute Briefing →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
