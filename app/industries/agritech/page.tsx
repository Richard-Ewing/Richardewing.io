import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'IoT Data Debt Is Burying Your & Strategy Diagnostics | Richard Ewing',
    description: 'IoT Data Debt Is Burying Your provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['agritech technical debt', 'agriculture technology', 'precision farming AI', 'IoT agriculture', 'agritech engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/agritech' },
    openGraph: { title: 'AgriTech AI Economics', description: 'R&D capital challenges in agriculture technology.', url: 'https://www.richardewing.io/industries/agritech', type: 'article' },
};

const sections = [
    { title: 'Precision Agriculture AI Economics', description: 'Computer vision models for crop disease detection, yield prediction, and weed identification require massive regional training datasets.', stats: 'Training data: millions of labeled field images per crop type', color: 'emerald' },
    { title: 'IoT Sensor Infrastructure Debt', description: 'Thousands of soil and weather sensors deployed across vast areas require firmware updates, battery changes, and remote troubleshooting.', stats: 'Device lifespan: 2-5 years, replacement cycles are constant', color: 'amber' },
    { title: 'Satellite Imagery Processing', description: 'Processing multi-spectral satellite imagery for crop monitoring requires significant compute, storage, and imagery pipeline maintenance.', stats: 'Storage + compute: $10K-$50K per customer per season', color: 'cyan' },
    { title: 'Supply Chain Traceability', description: 'Farm-to-fork traceability demands complex data integration across producers, distributors, and retailers to comply with global regulations.', stats: 'Average supply chain: 5-8 integration points', color: 'rose' },
];

const colorMap: Record<string, string> = { emerald: 'border-emerald-500/30 bg-emerald-500/5', amber: 'border-amber-500/30 bg-amber-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', rose: 'border-rose-500/30 bg-rose-500/5' };
const textMap: Record<string, string> = { emerald: 'text-emerald-900 font-extrabold font-semibold', amber: 'text-amber-400', cyan: 'text-cyan-900 font-extrabold font-semibold', rose: 'text-rose-400' };

export default function AgriTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-emerald-900 font-extrabold font-semibold font-bold">AgriTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AgriTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">AI Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Agriculture technology faces R&D challenges unlike any other vertical: extreme model drift tied to growing seasons, IoT at massive scale in remote locations, and complex multi-stakeholder supply chains.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-900 mb-4">{s.description}</p>
                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">AgriTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your precision agriculture AI costs, IoT infrastructure debt, and satellite processing economics.</p>
                        <Link href="/services" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book AgriTech Audit →</Link>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
