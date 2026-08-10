import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Grid Integration Debt Is Drown & Strategy Diagnostics | Richard Ewing',
    description: 'Grid Integration Debt Is Drown provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['cleantech technical debt', 'clean energy technology', 'carbon accounting systems', 'climate tech engineering', 'cleantech AI economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/cleantech' },
    openGraph: { title: 'CleanTech AI Economics', description: 'R&D capital challenges in clean energy technology.', url: 'https://www.richardewing.io/industries/cleantech', type: 'article' },
};

const sections = [
    { title: 'Energy Grid Integration Debt', description: 'Connecting to utility grids means integrating with legacy infrastructure built in the 1970s-1990s across multiple different API interfaces.', stats: '7 major ISOs × different APIs = massive integration surface', color: 'emerald' },
    { title: 'Carbon Accounting Data Complexity', description: 'GHG Protocol scopes require tracking emissions across supply chains. Scope 3 involves hundreds of suppliers with different data formats.', stats: 'Scope 3: 70-90% of total emissions, hardest to measure', color: 'cyan' },
    { title: 'Regulatory Compliance Across Jurisdictions', description: 'Climate regulations vary by country, state, and municipality. EU taxonomy, SEC rules, and state mandates create complex compliance debt.', stats: 'New climate regulations: 50+ per year globally', color: 'amber' },
    { title: 'IoT & Sensor Network Debt', description: 'Renewable energy projects deploy thousands of IoT devices. Remote device management, connectivity issues, and hardware failure create tech debt.', stats: '10,000+ devices across remote locations', color: 'rose' },
];

const colorMap: Record<string, string> = { emerald: 'border-emerald-500/30 bg-emerald-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', amber: 'border-amber-500/30 bg-amber-500/5', rose: 'border-rose-500/30 bg-rose-500/5' };
const textMap: Record<string, string> = { emerald: 'text-emerald-900 font-extrabold font-semibold', cyan: 'text-cyan-900 font-extrabold font-semibold', amber: 'text-amber-400', rose: 'text-rose-400' };

export default function CleanTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-emerald-900 font-extrabold font-semibold font-bold">CleanTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        CleanTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AI Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Clean energy and climate technology face R&D challenges shaped by legacy grid infrastructure, complex emissions accounting, evolving regulations, and massive IoT deployments.</p>

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
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">CleanTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your grid integration debt, carbon accounting complexity, and IoT infrastructure costs.</p>
                        <Link href="/services" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book CleanTech Audit →</Link>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
