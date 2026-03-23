import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'InsurTech — Product Economics for Insurance Technology | Richard Ewing',
    description: 'Technical debt economics for InsurTech companies: legacy system modernization, regulatory compliance debt, AI underwriting costs, and actuarial model maintenance.',
    keywords: ['insurtech technical debt', 'insurance technology economics', 'legacy insurance systems', 'AI underwriting cost', 'insurtech product economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/insurtech' },
    openGraph: { title: 'InsurTech Product Economics', description: 'The hidden engineering costs destroying InsurTech margins.', url: 'https://www.richardewing.io/industries/insurtech', type: 'article' },
};

const challenges = [
    {
        title: 'Legacy Core System Debt',
        description: 'Most insurers run on 30-40 year old COBOL/mainframe policy administration systems. Modernization costs $50M-$500M+ and takes 3-7 years. The maintenance burden on legacy systems consumes 70-85% of IT budgets.',
        icon: '🏛️',
        metric: '75% of IT budget on legacy maintenance',
    },
    {
        title: 'Regulatory Compliance Overhead',
        description: 'Insurance operates under state-by-state regulation (50+ jurisdictions in the US alone). Every product change requires filing review. Compliance debt accumulates when systems can\'t adapt to new regulations without manual workarounds.',
        icon: '⚖️',
        metric: '$2M-$10M/yr compliance engineering cost',
    },
    {
        title: 'AI Underwriting Economics',
        description: 'AI-powered underwriting promises speed and accuracy but introduces variable costs: model inference, data enrichment APIs, and continuous model retraining. The Cost of Predictivity applies directly — higher accuracy underwriting costs exponentially more.',
        icon: '🤖',
        metric: '$0.50-$5.00 per AI underwriting decision',
    },
    {
        title: 'Claims Processing Debt',
        description: 'Claims systems accumulate the worst technical debt: every edge case becomes a hardcoded exception. Over time, claims adjudication logic becomes a labyrinth of business rules that nobody fully understands.',
        icon: '📋',
        metric: '40-60% of claims code is undocumented business rules',
    },
];

export default function InsurTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-amber-400 font-bold">InsurTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Product Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">InsurTech</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        Insurance technology carries the heaviest legacy system burden of any industry. 75% of IT budgets go to maintaining 30+ year old systems. AI underwriting is promising but introduces new cost structures most InsurTech companies don&apos;t model.
                    </p>
                    <div className="space-y-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 hover:border-amber-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{c.icon}</span>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-white mb-2">{c.title}</h2>
                                        <p className="text-zinc-400 mb-3">{c.description}</p>
                                        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{c.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">InsurTech Advisory</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing advises InsurTech companies on legacy modernization economics, AI underwriting unit costs, and regulatory compliance debt. R&D Capital Audits for insurance technology.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:opacity-90 transition-opacity">Book InsurTech Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
