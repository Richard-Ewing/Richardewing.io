import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'For Investors — R&D Capital Due Diligence for PE & VC Firms',
    description: 'R&D Capital Audits for private equity and venture capital firms. Quantify technical debt in dollars, identify Technical Insolvency Date, and de-risk por...',
    keywords: ['R&D due diligence', 'technical due diligence PE', 'VC technology assessment', 'portfolio company audit', 'technical debt valuation', 'Product Debt Index', 'Richard Ewing'],
    alternates: { canonical: 'https://www.richardewing.io/for-investors' },
    openGraph: { title: 'For Investors — R&D Capital Due Diligence', description: 'Quantify technical debt in dollars before you invest.', url: 'https://www.richardewing.io/for-investors', type: 'website' },
};

const useCases = [
    { title: 'Pre-Acquisition Due Diligence', description: 'Quantify the technical debt of an acquisition target before closing. Know the real R&D capital cost — not the story the CTO tells.', icon: '🔍', stats: 'Prevents 20-40% hidden cost surprises' },
    { title: 'Portfolio Company Monitoring', description: 'Ongoing R&D audits for portfolio companies. Track Technical Insolvency Date, Innovation Tax, and engineering velocity across your portfolio.', icon: '📊', stats: 'Quarterly reporting for LPs' },
    { title: 'Value Creation Planning', description: 'Post-acquisition technology roadmap. Prioritize debt remediation, team restructuring, and AI modernization for maximum IRR.', icon: '💎', stats: 'Align engineering to EBITDA' },
    { title: 'Exit Preparation', description: 'Prepare portfolio companies for sale. Clean up technical debt, improve DORA metrics, and create vendor-ready technology documentation.', icon: '🚀', stats: 'Maximize exit multiples' },
];

const metrics = [
    { name: 'Product Debt Index (PDI)', description: 'Single score (0-100) quantifying total technical debt', link: '/tools/pdi' },
    { name: 'Technical Insolvency Date', description: 'When maintenance load exceeds capacity — the "death date" for R&D', link: '/glossary/technical-insolvency-date' },
    { name: 'Innovation Tax', description: 'Percentage of engineering spent on maintenance vs. new features', link: '/glossary/innovation-tax' },
    { name: 'APER Score', description: 'Revenue generated per engineer — the ultimate efficiency metric', link: '/tools/aper' },
    { name: 'AI COGS Analysis', description: 'Variable cost of AI features eating into gross margins', link: '/tools/aueb' },
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
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">For Private Equity & Venture Capital</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Quantify R&D Risk<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Before You Invest</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto mb-8">
                            Technical debt is the #1 hidden cost in technology acquisitions. R&D Capital Audits translate engineering complexity into dollar-denominated risk that LPs, boards, and deal teams understand.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/advisory" className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity">Request Due Diligence Proposal →</Link>
                            <Link href="/tools/pdi" className="px-8 py-4 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5 transition-colors">Try PDI Calculator Free →</Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {useCases.map((uc, i) => (
                            <div key={i} className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
                                <span className="text-3xl mb-4 block">{uc.icon}</span>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">{uc.title}</h2>
                                <p className="text-zinc-900 mb-4">{uc.description}</p>
                                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{uc.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-10 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8 text-center">What We Measure</h2>
                        <div className="space-y-4">
                            {metrics.map((m, i) => (
                                <Link key={i} href={m.link} className="flex items-center justify-between p-5 rounded-xl border border-zinc-400 hover:border-cyan-500/30 transition-colors group">
                                    <div>
                                        <div className="text-zinc-950 font-bold group-hover:text-cyan-400 transition-colors">{m.name}</div>
                                        <div className="text-sm text-zinc-900">{m.description}</div>
                                    </div>
                                    <span className="text-zinc-800 group-hover:text-cyan-400 transition-colors">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Trusted by Top PE Firms</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">R&D Capital Audits have been used in 100+ due diligence engagements. Published frameworks in CIO.com and Built In. Board-ready deliverables.</p>
                        <Link href="/advisory" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg font-bold hover:opacity-90 transition-opacity">Schedule a 30-Minute Briefing →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
