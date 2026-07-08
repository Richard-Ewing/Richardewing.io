import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'MLS Integration Debt Is Killin & Strategy Diagnostics | Richard Ewing',
    description: 'MLS Integration Debt Is Killin provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['proptech technical debt', 'real estate technology', 'MLS integration', 'property valuation AI', 'proptech engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/proptech' },
    openGraph: { title: 'PropTech AI Economics', description: 'R&D capital challenges in real estate technology.', url: 'https://www.richardewing.io/industries/proptech', type: 'article' },
};

const sections = [
    { title: 'Property Data Integration Debt', description: 'MLS feeds and tax records use different formats and update frequencies, requiring dozens of custom data pipelines.', stats: 'Average PropTech: 15-30 data source integrations', color: 'amber' },
    { title: 'Valuation Model Economics', description: 'Automated Valuation Models (AVM) require continuous retraining, data enrichment, and model drift auditing at scale.', stats: 'Model retraining: $50K-$200K per cycle', color: 'cyan' },
    { title: 'Legacy MLS Infrastructure', description: 'The real estate industry relies on legacy MLS systems. Migration from RETS to RESO APIs is complex and high-maintenance.', stats: 'RETS → RESO Web API migration: 6-12 months', color: 'rose' },
    { title: 'Smart Building IoT Debt', description: 'Commercial PropTech manages thousands of IoT sensors. This creates unique firmware, security, and hardware debt.', stats: '10,000+ devices = massive IoT debt surface', color: 'emerald' },
];

const colorMap: Record<string, string> = { amber: 'border-amber-500/30 bg-amber-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', rose: 'border-rose-500/30 bg-rose-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5' };
const textMap: Record<string, string> = { amber: 'text-amber-400', cyan: 'text-cyan-900 font-extrabold font-semibold', rose: 'text-rose-400', emerald: 'text-emerald-900 font-extrabold font-semibold' };

export default function PropTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-amber-400 font-bold">PropTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        PropTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">AI Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Real estate technology carries unique R&D challenges: massive data integration surfaces, legacy MLS systems, AI valuation accuracy requirements, and IoT infrastructure debt.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-900 mb-4">{s.description}</p>
                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">PropTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your data integration debt, valuation model economics, and IoT infrastructure costs.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book PropTech Audit →</Link>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
