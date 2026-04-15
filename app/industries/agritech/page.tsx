import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AgriTech Product Economics — Agriculture Technology Debt ...',
    description: 'Product economics for AgriTech: precision agriculture AI costs, IoT sensor infrastructure debt, satellite imagery processing economics, and supply chain...',
    keywords: ['agritech technical debt', 'agriculture technology', 'precision farming AI', 'IoT agriculture', 'agritech engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/agritech' },
    openGraph: { title: 'AgriTech Product Economics', description: 'R&D capital challenges in agriculture technology.', url: 'https://www.richardewing.io/industries/agritech', type: 'article' },
};

const sections = [
    { title: 'Precision Agriculture AI Economics', description: 'Computer vision models for crop disease detection, yield prediction, and weed identification require massive training datasets specific to crops, region...', stats: 'Training data: millions of labeled field images per crop type', color: 'emerald' },
    { title: 'IoT Sensor Infrastructure Debt', description: 'Thousands of field sensors (soil moisture, weather, nutrient levels) deployed across vast areas with intermittent connectivity. Firmware updates, batter...', stats: 'Device lifespan: 2-5 years, replacement cycles are constant', color: 'amber' },
    { title: 'Satellite Imagery Processing', description: 'Processing multi-spectral satellite imagery (Sentinel, Planet Labs) for crop monitoring requires significant compute. Imagery pipelines process terabyte...', stats: 'Storage + compute: $10K-$50K per customer per season', color: 'cyan' },
    { title: 'Supply Chain Traceability', description: 'Farm-to-fork traceability requirements (EU regulations, Whole Foods policies) demand complex data integration across producers, distributors, retailers....', stats: 'Average supply chain: 5-8 integration points', color: 'rose' },
];

const colorMap: Record<string, string> = { emerald: 'border-emerald-500/30 bg-emerald-500/5', amber: 'border-amber-500/30 bg-amber-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', rose: 'border-rose-500/30 bg-rose-500/5' };
const textMap: Record<string, string> = { emerald: 'text-emerald-400', amber: 'text-amber-400', cyan: 'text-cyan-400', rose: 'text-rose-400' };

export default function AgriTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-emerald-400 font-bold">AgriTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AgriTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Product Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Agriculture technology faces R&D challenges unlike any other vertical: extreme model drift tied to growing seasons, IoT at massive scale in remote locations, and complex multi-stakeholder supply chains.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-900 mb-4">{s.description}</p>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">AgriTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your precision agriculture AI costs, IoT infrastructure debt, and satellite processing economics.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-bold hover:opacity-90 transition-opacity">Book AgriTech Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
