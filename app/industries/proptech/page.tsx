import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'PropTech Product Economics — Real Estate Technology Debt & AI | Richard Ewing',
    description: 'Product economics for PropTech: property data integration debt, MLS system legacy debt, AI valuation model economics, and smart building IoT infrastructure. R&D audit for real estate technology.',
    keywords: ['proptech technical debt', 'real estate technology', 'MLS integration', 'property valuation AI', 'proptech engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/proptech' },
    openGraph: { title: 'PropTech Product Economics', description: 'R&D capital challenges in real estate technology.', url: 'https://www.richardewing.io/industries/proptech', type: 'article' },
};

const sections = [
    { title: 'Property Data Integration Debt', description: 'MLS feeds, county records, tax databases — each with different formats, update frequencies, and data quality. PropTech companies maintain dozens of integrations that constantly break.', stats: 'Average PropTech: 15-30 data source integrations', color: 'amber' },
    { title: 'Valuation Model Economics', description: 'AVM (Automated Valuation Models) and Zestimate-style predictions require massive training data, continuous retraining, and accuracy monitoring. Model drift in real estate can mean million-dollar errors.', stats: 'Model retraining: $50K-$200K per cycle', color: 'cyan' },
    { title: 'Legacy MLS Infrastructure', description: 'The real estate industry runs on MLS systems built in the 1990s-2000s. RETS/RESO standards provide some standardization but legacy integration debt is enormous.', stats: 'RETS → RESO Web API migration: 6-12 months', color: 'rose' },
    { title: 'Smart Building IoT Debt', description: 'Commercial PropTech manages thousands of IoT sensors (HVAC, lighting, occupancy). The IoT infrastructure creates unique technical debt: firmware updates across thousands of devices, connectivity failures, and sensor drift.', stats: '10,000+ devices = massive IoT debt surface', color: 'emerald' },
];

const colorMap: Record<string, string> = { amber: 'border-amber-500/30 bg-amber-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', rose: 'border-rose-500/30 bg-rose-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5' };
const textMap: Record<string, string> = { amber: 'text-amber-400', cyan: 'text-cyan-400', rose: 'text-rose-400', emerald: 'text-emerald-400' };

export default function PropTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-amber-400 font-bold">PropTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        PropTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Product Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">Real estate technology carries unique R&D challenges: massive data integration surfaces, legacy MLS systems, AI valuation accuracy requirements, and IoT infrastructure debt.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-400 mb-4">{s.description}</p>
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">PropTech R&D Audit</h2>
                        <p className="text-zinc-300 mb-6">Quantify your data integration debt, valuation model economics, and IoT infrastructure costs.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:opacity-90 transition-opacity">Book PropTech Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
