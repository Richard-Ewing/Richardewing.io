import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Manufacturing & Robotics AI Economics | Richard Ewing',
    description: 'Industrial AI and robotics economics: edge computing constraints, IoT data ingestion latency, and robotic process automation costs.',
    keywords: ['manufacturing technical debt', 'robotics CTO advisor', 'industrial AI governance', 'edge AI economics', 'manufacturing software debt'],
    alternates: { canonical: 'https://www.richardewing.io/industries/manufacturing' },
    openGraph: { title: 'AI Economics for Manufacturing & Robotics', description: 'R&D audit and AI governance for industrial systems.', url: 'https://www.richardewing.io/industries/manufacturing', type: 'website' },
};

const challenges = [
    { icon: '🏭', title: 'Edge Computing Constraints', description: 'Industrial IoT and robotics often operate in latency-sensitive, bandwidth-constrained environments. Cloud reliance creates physical production risks.' },
    { icon: '⏱️', title: 'Latency Liability', description: 'In manufacturing, inference latency isn\'t just a bad user experience—it\'s physical damage or yield reduction. This creates an extreme penalty for non-deterministic AI.' },
    { icon: '🔧', title: 'Hardware Integration Debt', description: 'Bridging modern AI models with legacy PLCs and SCADA systems from the 1990s creates massive, fragile integration layers.' },
    { icon: '🤖', title: 'Automation Margin Erosion', description: 'Robotic process automation often masks broken underlying processes. The compute cost of continuous computer vision models often exceeds the human labor saved.' },
];

export default function ManufacturingPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-stone-900 font-extrabold font-semibold font-bold">Manufacturing & Robotics</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-cyan-400">Manufacturing & Robotics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        In industrial systems, software debt translates directly into physical production downtime. When edge inference latency or IoT ingestion bottlenecks occur, physical yield drops and hardware is damaged.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-stone-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-stone-500/30 bg-stone-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help Industrial Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-stone-900 font-extrabold font-semibold mt-1">→</span> <span>Calculate the exact Margin Collapse caused by cloud inference latency</span></li>
                            <li className="flex items-start gap-3"><span className="text-stone-900 font-extrabold font-semibold mt-1">→</span> <span>Audit the integration debt between modern AI and legacy SCADA systems</span></li>
                            <li className="flex items-start gap-3"><span className="text-stone-900 font-extrabold font-semibold mt-1">→</span> <span>Evaluate local SLMs (Small Language Models) for edge deployment economics</span></li>
                            <li className="flex items-start gap-3"><span className="text-stone-900 font-extrabold font-semibold mt-1">→</span> <span>Quantify the true ROI of robotic process automation vs. process refactoring</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-stone-500 to-cyan-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    
                        <AdvisoryCTA variant="industry" />
                    </div>
                </div>
            </div>
        </main>
    );
}
