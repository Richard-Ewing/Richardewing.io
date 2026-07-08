import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Actuarial AI Is Burning Cash F & Strategy Diagnostics | Richard Ewing',
    description: 'Actuarial AI Is Burning Cash F provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['insurtech technical debt', 'insurance technology economics', 'legacy insurance systems', 'AI underwriting cost', 'insurtech AI economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/insurtech' },
    openGraph: { title: 'InsurTech AI Economics', description: 'The hidden engineering costs destroying InsurTech margins.', url: 'https://www.richardewing.io/industries/insurtech', type: 'article' },
};

const challenges = [
    {
        title: 'Legacy Core System Debt',
        description: 'Most insurers run on legacy policy systems. Modernization is expensive, and maintenance of COBOL monoliths consumes most IT budget.',
        icon: '🏛️',
        metric: '75% of IT budget on legacy maintenance',
    },
    {
        title: 'Regulatory Compliance Overhead',
        description: 'Insurance operates under state regulations. Every product change requires filing review, which accumulates compliance debt.',
        icon: '⚖️',
        metric: '$2M-$10M/yr compliance engineering cost',
    },
    {
        title: 'AI Underwriting Economics',
        description: 'AI-powered underwriting introduces variable compute costs: inference, data enrichment APIs, and model retraining cycles.',
        icon: '🤖',
        metric: '$0.50-$5.00 per AI underwriting decision',
    },
    {
        title: 'Claims Processing Debt',
        description: 'Claims systems accumulate complex technical debt as edge cases become hardcoded exceptions, creating audit and maintenance risks.',
        icon: '📋',
        metric: '40-60% of claims code is undocumented business rules',
    },
];

export default function InsurTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-amber-400 font-bold">InsurTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">InsurTech</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Insurance technology carries the heaviest legacy system burden of any industry. 75% of IT budgets go to maintaining 30+ year old systems. AI underwriting is promising but introduces new cost structures most InsurTech companies don&apos;t model.
                    </p>
                    <div className="space-y-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 hover:border-amber-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{c.icon}</span>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h2>
                                        <p className="text-zinc-900 mb-3">{c.description}</p>
                                        <span className="text-xs font-bold font-mono text-amber-400 uppercase tracking-widest">{c.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">InsurTech Advisory</h2>
                        <p className="text-zinc-950 mb-6">Richard Ewing advises InsurTech companies on legacy modernization economics, AI underwriting unit costs, and regulatory compliance debt. R&D Capital Audits for insurance technology.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book InsurTech Advisory →</Link>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
