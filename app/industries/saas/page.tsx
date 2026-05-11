import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics for SaaS & B2B — Debt-to-ARR, COGS, Mar...',
    description: 'Product economics advisory for SaaS and B2B companies. Technical debt impact on ARR growth, COGS optimization, gross margin defense, and R&D capital all...',
    keywords: ['saas technical debt', 'b2b AI economics', 'saas gross margin', 'cogs optimization saas', 'technical debt arr impact', 'saas cto advisor'],
    alternates: { canonical: 'https://www.richardewing.io/industries/saas' },
    openGraph: { title: 'AI Economics for SaaS & B2B', description: 'Why your technical debt is destroying your ARR multiple.', url: 'https://www.richardewing.io/industries/saas', type: 'website' },
};

const challenges = [
    { icon: '📉', title: 'Debt-to-ARR Drag', description: 'Technical debt reduces feature velocity. Reduced velocity slows ARR growth. Slower ARR growth compresses valuation multiples. The economic chain reactio...' },
    { icon: '💰', title: 'COGS Inflation', description: 'AI features, cloud waste, and over-provisioned infrastructure inflate Cost of Goods Sold — the silent killer of SaaS gross margins that investors scruti...' },
    { icon: '🏗️', title: 'Platform Complexity', description: 'Multi-tenant architectures, API ecosystems, and integration layers create compounding technical debt that is uniquely difficult to measure and remediate.' },
    { icon: '🔄', title: 'Feature Bloat', description: 'SaaS companies ship features to close deals. Each feature adds maintenance cost. Zombie features — used by <5% of customers — consume 30%+ of engineerin...' },
];

export default function SaaSPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-violet-400 font-bold">SaaS &amp; B2B</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">SaaS &amp; B2B</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        SaaS economics depend on gross margin, feature velocity, and ARR growth. Technical debt attacks all three simultaneously. The question isn&apos;t whether you have debt — it&apos;s whether the debt is destroying your valuation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-violet-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help SaaS Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-violet-400 mt-1">→</span> <span>Calculate the dollar impact of technical debt on ARR growth rate</span></li>
                            <li className="flex items-start gap-3"><span className="text-violet-400 mt-1">→</span> <span>Identify and sunset zombie features consuming engineering capacity</span></li>
                            <li className="flex items-start gap-3"><span className="text-violet-400 mt-1">→</span> <span>Optimize COGS structure for AI features using the AUEB framework</span></li>
                            <li className="flex items-start gap-3"><span className="text-violet-400 mt-1">→</span> <span>Prepare R&amp;D economics for due diligence and board presentations</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
