import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'R&D Audit ROI Calculator | Prove the Payback',
    description: 'Calculate the exact ROI of an R&D capital audit. Most clients recapture 10-40x the engagement cost through identified savings and efficiency gains.',
    keywords: ['R&D audit ROI', 'technical debt ROI', 'engineering efficiency ROI', 'DORA metrics improvement', 'engineering productivity savings'],
    alternates: { canonical: 'https://www.richardewing.io/roi' },
    openGraph: { title: 'ROI Calculator — R&D Capital Audit ROI', description: 'See the exact dollar value of enterprise engineering and AI optimization across your entire roadmap.', url: 'https://www.richardewing.io/roi', type: 'website' },
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
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5',
};
const textMap: Record<string, string> = { cyan: 'text-cyan-900 font-extrabold font-semibold', emerald: 'text-emerald-900 font-extrabold font-semibold', amber: 'text-amber-400' };

export default function ROIPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-emerald-500 uppercase tracking-widest mb-4">ROI Calculator</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            What&apos;s Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Engineering Waste?</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto mb-8">
                            The average engineering team wastes 40-65% of capacity on maintenance, rework, and invisible overhead. An R&D Capital Audit identifies and eliminates this waste.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                        {scenarios.map((s, i) => {
                            const totalRD = s.engineers * s.avgSalary;
                            const wasteBefore = totalRD * (s.innovationTaxBefore / 100);
                            const wasteAfter = totalRD * (s.innovationTaxAfter / 100);
                            const savings = wasteBefore - wasteAfter;
                            const roi = Math.round((savings / 75000) * 100); // assuming $75K audit cost

                            return (
                                <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                    <h2 className={`text-xl font-grotesk font-bold mb-6 ${textMap[s.color]}`}>{s.title}</h2>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Engineers</span><span className="text-zinc-950 font-mono">{s.engineers}</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Avg Salary</span><span className="text-zinc-950 font-mono">${s.avgSalary.toLocaleString()}</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Total R&D Spend</span><span className="text-zinc-950 font-mono">${(totalRD / 1000000).toFixed(1)}M</span></div>
                                        <div className="border-t border-zinc-400 pt-4"></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Innovation Tax (before)</span><span className="text-rose-400 font-mono">{s.innovationTaxBefore}%</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Innovation Tax (after)</span><span className="text-emerald-900 font-extrabold font-semibold font-mono">{s.innovationTaxAfter}%</span></div>
                                        <div className="border-t border-zinc-400 pt-4"></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">Annual Savings</span><span className={`font-mono font-bold text-lg ${textMap[s.color]}`}>${(savings / 1000000).toFixed(1)}M</span></div>
                                        <div className="flex justify-between"><span className="text-zinc-950 text-sm">ROI on Audit</span><span className={`font-mono font-bold ${textMap[s.color]}`}>{roi}%</span></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-10 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 text-center">How We Calculate Savings</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl mb-3">📊</div>
                                <h3 className="text-zinc-950 font-bold mb-2">Measure Innovation Tax</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Quantify % of engineering spent on maintenance vs. new feature work</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">🎯</div>
                                <h3 className="text-zinc-950 font-bold mb-2">Identify Waste</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Pinpoint specific debt sources: rework, incidents, manual processes</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">💰</div>
                                <h3 className="text-zinc-950 font-bold mb-2">Remediation Plan</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Prioritized playbook to reclaim engineering capacity, measured in dollars</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Get Your Custom ROI Analysis</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">These are illustrative scenarios. A real R&D Capital Audit produces company-specific numbers based on your actual metrics, team structure, and technology stack.</p>
                        <Link href="/advisory" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Request Custom ROI Analysis →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
