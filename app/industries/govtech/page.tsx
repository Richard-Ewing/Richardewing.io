import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'GovTech AI Economics | Legacy Modernization Audit',
    description: 'Public sector AI economics: FedRAMP compliance costs, legacy mainframe replacement strategies, and AI procurement governance frameworks.',
    keywords: ['govtech technical debt', 'government technology modernization', 'fedramp compliance engineering', 'public sector AI governance', 'govtech cto advisor', 'legacy government systems'],
    alternates: { canonical: 'https://www.richardewing.io/industries/govtech' },
    openGraph: { title: 'AI Economics for GovTech', description: 'Legacy mainframes, FedRAMP compliance, and AI procurement — GovTech has unique engineering economics.', url: 'https://www.richardewing.io/industries/govtech', type: 'website' },
};

const challenges = [
    { icon: '🏛️', title: 'Legacy Mainframe Systems', description: 'Government mainframes built on COBOL carry the highest technical debt loads. Modernization is complex and high-risk.' },
    { icon: '🛡️', title: 'FedRAMP & FISMA', description: 'Federal security requirements (FedRAMP, FISMA, CMMC) create compliance-driven engineering costs that are 2-5x higher than commercial equivalents.' },
    { icon: '🤖', title: 'AI Procurement & Ethics', description: 'Government AI deployments face strict procurement rules, algorithmic bias scrutiny, and transparency requirements that commercial AI rarely encounters.' },
    { icon: '👥', title: 'Citizen-Facing Reliability', description: 'Systems that process benefits, taxes, and permits cannot fail. Downtime has real human consequences, making availability requirements extraordinarily high.' },
];

export default function GovTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-sky-400 font-bold">GovTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">GovTech &amp; Public Sector</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Government technology carries decades of legacy debt, strict compliance requirements, and citizen-facing reliability demands. The economic stakes are uniquely high.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-sky-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help GovTech Organizations</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Quantify legacy system modernization costs and timeline risks</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Evaluate AI procurement decisions through an economics lens</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Calculate compliance-driven engineering overhead (FedRAMP, FISMA, CMMC)</span></li>
                            <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">→</span> <span>Design phased modernization plans that minimize citizen-facing risk</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
