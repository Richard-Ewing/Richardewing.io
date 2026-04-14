import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics for Cybersecurity — Security Debt & AI ...',
    description: 'Product economics advisory for cybersecurity companies. Security debt accumulation, AI threat detection costs, compliance-driven engineering, and detect...',
    keywords: ['cybersecurity technical debt', 'security debt', 'AI threat detection cost', 'cybersecurity CTO advisor', 'security engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/cybersecurity' },
    openGraph: { title: 'Product Economics for Cybersecurity', description: 'Security debt compounds faster than any other form of technical debt.', url: 'https://www.richardewing.io/industries/cybersecurity', type: 'website' },
};

const challenges = [
    { icon: '🛡️', title: 'Security Debt Accumulation', description: 'Every unpatched vulnerability, every deferred security review, and every shortcut in authentication creates security debt that accumulates interest in t...' },
    { icon: '🤖', title: 'AI Detection COGS', description: 'AI-powered threat detection processes millions of events per second. Each inference costs money. False positive rates determine whether AI detection is ...' },
    { icon: '⚡', title: 'Zero-Day Response Economics', description: 'When a zero-day is disclosed, the economic clock starts ticking. Every hour unpatched is measured in risk exposure. Engineering velocity on security pat...' },
    { icon: '📋', title: 'Compliance Overhead', description: 'SOC 2, ISO 27001, PCI DSS, CMMC, and FedRAMP create layered compliance requirements. Each framework adds engineering overhead that compounds with every ...' },
];

export default function CybersecurityPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-red-400 font-bold">Cybersecurity</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Cybersecurity</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Security debt compounds faster than any other form of technical debt because the cost of failure is a breach — not slower features, but data loss, regulatory fines, and destroyed trust.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-red-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help Cybersecurity Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">→</span> <span>Quantify security debt in breach risk dollars, not just vulnerability counts</span></li>
                            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">→</span> <span>Model AI detection feature economics — false positive cost vs detection value</span></li>
                            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">→</span> <span>Calculate compliance engineering overhead across multiple framework certifications</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
