import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics for GovTech & Public Sector — Complianc...',
    description: 'Product economics advisory for GovTech and public sector technology. Legacy system modernization, FedRAMP compliance costs, AI procurement governance, a...',
    keywords: ['govtech technical debt', 'government technology modernization', 'fedramp compliance engineering', 'public sector AI governance', 'govtech cto advisor', 'legacy government systems'],
    alternates: { canonical: 'https://www.richardewing.io/industries/govtech' },
    openGraph: { title: 'Product Economics for GovTech', description: 'Legacy mainframes, FedRAMP compliance, and AI procurement — GovTech has unique engineering economics.', url: 'https://www.richardewing.io/industries/govtech', type: 'website' },
};

const challenges = [
    { icon: '🏛️', title: 'Legacy Mainframe Systems', description: 'Government systems built on COBOL and mainframes in the 1970s-90s carry the highest technical debt loads in existence. Modernization is multi-year and h...' },
    { icon: '🛡️', title: 'FedRAMP & FISMA', description: 'Federal security requirements (FedRAMP, FISMA, CMMC) create compliance-driven engineering costs that are 2-5x higher than commercial equivalents.' },
    { icon: '🤖', title: 'AI Procurement & Ethics', description: 'Government AI deployments face strict procurement rules, algorithmic bias scrutiny, and transparency requirements that commercial AI rarely encounters.' },
    { icon: '👥', title: 'Citizen-Facing Reliability', description: 'Systems that process benefits, taxes, and permits cannot fail. Downtime has real human consequences, making availability requirements extraordinarily high.' },
];

export default function GovTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-sky-400 font-bold">GovTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Product Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">GovTech &amp; Public Sector</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-12 max-w-2xl">
                        Government technology carries decades of legacy debt, strict compliance requirements, and citizen-facing reliability demands. The economic stakes are uniquely high.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-200 p-6 hover:border-sky-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-white mb-2">{c.title}</h3>
                                <p className="text-zinc-600 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">How I Help GovTech Organizations</h2>
                        <ul className="space-y-3 text-zinc-700 mb-8">
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Quantify legacy system modernization costs and timeline risks</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Evaluate AI procurement decisions through an economics lens</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Calculate compliance-driven engineering overhead (FedRAMP, FISMA, CMMC)</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Design phased modernization plans that minimize citizen-facing risk</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-300 text-white font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
