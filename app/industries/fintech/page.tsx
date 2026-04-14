import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics for FinTech — R&D Audit & AI Governance',
    description: 'Product economics advisory for FinTech companies. Technical debt assessment for regulated financial services, AI governance for banking, and compliance ...',
    keywords: ['fintech technical debt', 'fintech CTO advisor', 'banking AI governance', 'financial services engineering audit', 'fintech product economics', 'regulated software debt'],
    alternates: { canonical: 'https://www.richardewing.io/industries/fintech' },
    openGraph: { title: 'Product Economics for FinTech', description: 'R&D audit and AI governance for regulated financial services.', url: 'https://www.richardewing.io/industries/fintech', type: 'website' },
};

const challenges = [
    { icon: '⚖️', title: 'Regulatory Debt', description: 'SOX, PCI-DSS, GDPR, and state regulations create compliance-driven technical debt that compounds faster than any other industry.' },
    { icon: '🔒', title: 'Security Overhead', description: 'Financial data requires encryption, access controls, and audit trails that add 30-50% to every feature cost. This must be factored into unit economics.' },
    { icon: '🤖', title: 'AI Governance Gap', description: 'AI in lending, fraud detection, and insurance creates regulatory liability. Models must be explainable, auditable, and bias-tested — or face enforcement...' },
    { icon: '📊', title: 'Legacy Systems', description: 'Core banking systems built on COBOL, mainframes, and monoliths create the highest technical debt loads in any industry. Migration risk is existential.' },
];

export default function FinTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-emerald-400 font-bold">FinTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">FinTech</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-12 max-w-2xl">
                        Financial services carry the highest regulatory debt burden in any industry. When compliance consumes 40% of engineering capacity, every remaining sprint must generate maximum economic value.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-200 p-6 hover:border-emerald-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-600 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help FinTech Companies</h2>
                        <ul className="space-y-3 text-zinc-700 mb-8">
                            <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">→</span> <span>Quantify regulatory debt in dollar terms (not just compliance checkboxes)</span></li>
                            <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">→</span> <span>Calculate Technical Insolvency Date factoring compliance overhead</span></li>
                            <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">→</span> <span>Audit AI model governance for regulatory defensibility</span></li>
                            <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">→</span> <span>Evaluate build-vs-buy for core banking modernization</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
