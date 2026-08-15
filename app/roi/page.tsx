import type { Metadata } from 'next';
import Link from 'next/link';
import { ROICalculatorClient } from '../roi-calculator/ROICalculatorClient';

export const metadata: Metadata = {
    title: 'R&D Capital Audit ROI Calculator',
    description: 'Calculate your expected financial return from conducting an independent technical debt and AI spend audit.',
    keywords: ['R&D audit ROI', 'technical debt ROI', 'engineering efficiency ROI', 'DORA metrics improvement', 'engineering productivity savings'],
    alternates: { canonical: 'https://www.richardewing.io/roi' },
    openGraph: { title: 'ROI Calculator  -  R&D Capital Audit ROI | Richard Ewing', description: 'See the exact dollar value of enterprise engineering and AI optimization across your entire roadmap.', url: 'https://www.richardewing.io/roi', type: 'website' },
};

const scenarios = [
    {
        title: 'Series B SaaS Company',
        engineers: 40,
        avgSalary: 185000,
        innovationTaxBefore: 55,
        innovationTaxAfter: 35,
        color: 'cyan',
    },
    {
        title: 'Growth Stage Startup',
        engineers: 25,
        avgSalary: 165000,
        innovationTaxBefore: 60,
        innovationTaxAfter: 38,
        color: 'emerald',
    },
    {
        title: 'Enterprise Division',
        engineers: 100,
        avgSalary: 200000,
        innovationTaxBefore: 65,
        innovationTaxAfter: 40,
        color: 'amber',
    },
];

const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/30 bg-white shadow-sm',
    emerald: 'border-emerald-500/30 bg-white shadow-sm',
    amber: 'border-amber-500/30 bg-white shadow-sm',
};
const textMap: Record<string, string> = { cyan: 'text-cyan-950 font-bold', emerald: 'text-emerald-950 font-bold', amber: 'text-amber-950 font-bold' };

export default function ROIPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="text-xs font-bold font-mono text-emerald-900 uppercase tracking-widest mb-3">Diagnostic Calculator</div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        What&apos;s Your AI & R&D Waste?
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium max-w-2xl mx-auto">
                        The average engineering team wastes 40-65% of capacity on maintenance, rework, and ungoverned API token bloat.
                    </p>
                </div>

                {/* Interactive Dynamic Calculator */}
                <div className="mb-20">
                    <ROICalculatorClient />
                </div>

                {/* Static Benchmark Scenarios */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8 text-center">
                        Benchmark Scenarios Across Organizational Stages
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {scenarios.map((s, i) => {
                            const totalRD = s.engineers * s.avgSalary;
                            const wasteBefore = totalRD * (s.innovationTaxBefore / 100);
                            const wasteAfter = totalRD * (s.innovationTaxAfter / 100);
                            const savings = wasteBefore - wasteAfter;
                            const roi = Math.round((savings / 75000) * 100);

                            return (
                                <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                    <h3 className={`text-xl font-grotesk font-bold mb-6 ${textMap[s.color]}`}>{s.title}</h3>
                                    <div className="space-y-4 mb-6 text-sm font-medium text-zinc-900">
                                        <div className="flex justify-between"><span className="text-zinc-700">Engineers</span><span className="font-mono font-bold text-zinc-950">{s.engineers}</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">Avg Salary</span><span className="font-mono font-bold text-zinc-950">${s.avgSalary.toLocaleString()}</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">Total R&D Spend</span><span className="font-mono font-bold text-zinc-950">${(totalRD / 1000000).toFixed(1)}M</span></div>
                                        <div className="border-t border-zinc-300 pt-4"></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">Innovation Tax (before)</span><span className="text-rose-900 font-mono font-bold">{s.innovationTaxBefore}%</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">Innovation Tax (after)</span><span className="text-emerald-900 font-mono font-bold">{s.innovationTaxAfter}%</span></div>
                                        <div className="border-t border-zinc-300 pt-4"></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">Annual Savings</span><span className="font-mono font-bold text-lg text-emerald-900">${(savings / 1000000).toFixed(1)}M</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-700">ROI on Audit</span><span className="font-mono font-bold text-cyan-900">{roi}%</span></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="rounded-3xl border border-zinc-300 bg-white p-10 text-center shadow-sm">
                    <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Get Your Custom R&D Capital Audit</h2>
                    <p className="text-zinc-700 mb-8 max-w-xl mx-auto font-medium">A real R&D Capital Audit produces company-specific numbers based on your actual metrics, codebase analysis, and token spend.</p>
                    <Link href="/services" className="inline-block px-10 py-5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">Schedule $450 Rapid Audit →</Link>
                </div>
            </div>
        </main>
    );
}
