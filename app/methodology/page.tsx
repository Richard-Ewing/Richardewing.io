import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Methodology — How R&D Capital Audits Work | Richard Ewing',
    description: 'The step-by-step methodology behind R&D Capital Audits: data collection, technical assessment, economic modeling, and board-ready reporting. How we quan...',
    keywords: ['R&D audit methodology', 'technical debt assessment process', 'engineering audit steps', 'how to quantify technical debt', 'product economics methodology'],
    alternates: { canonical: 'https://www.richardewing.io/methodology' },
    openGraph: { title: 'Methodology — How R&D Capital Audits Work', description: 'The step-by-step process behind R&D Capital Audits.', url: 'https://www.richardewing.io/methodology', type: 'website' },
};

const phases = [
    {
        phase: 1,
        title: 'Discovery & Data Collection',
        duration: 'Week 1',
        description: 'We collect the raw data needed to build an economic model of your engineering organization.',
        activities: ['Engineering team structure and size analysis', 'Technology stack and architecture review', 'JIRA/Linear ticket analysis (last 6-12 months)', 'CI/CD pipeline metrics (build times, deployment frequency)', 'Cost data (cloud spend, tool licenses, headcount)'],
        output: 'Data collection brief + preliminary risk assessment',
        icon: '📋',
    },
    {
        phase: 2,
        title: 'Technical Assessment',
        duration: 'Week 2',
        description: 'Deep analysis of codebase health, architecture patterns, debt accumulation, and AI infrastructure.',
        activities: ['Codebase static analysis (complexity, duplication, coupling)', 'Architecture review (monolith vs. microservices, data flow)', 'Dependency audit (outdated packages, vulnerability surface)', 'AI/ML infrastructure review (model costs, retraining pipelines)', 'Interview key engineering leaders and architects'],
        output: 'Technical risk inventory + architecture debt map',
        icon: '🔬',
    },
    {
        phase: 3,
        title: 'Economic Modeling',
        duration: 'Week 3',
        description: 'Translate technical findings into financial metrics that boards, investors, and executives can act on.',
        activities: ['Product Debt Index (PDI) calculation', 'Innovation Tax quantification (% of R&D on maintenance)', 'Technical Insolvency Date projection', 'APER scoring (revenue per engineer vs. benchmarks)', 'AI COGS analysis (if applicable)'],
        output: 'Dollar-denominated debt summary + insolvency timeline',
        icon: '📊',
    },
    {
        phase: 4,
        title: 'Remediation Roadmap',
        duration: 'Week 4',
        description: 'Prioritized playbook for debt remediation with quarterly milestones and ROI projections.',
        activities: ['Debt remediation priority matrix (impact vs. effort)', 'Quarterly milestone plan with measurable targets', 'Team restructuring recommendations (if needed)', 'Technology modernization recommendations', 'Executive presentation and board slide deck'],
        output: 'Board-ready report + quarterly remediation plan',
        icon: '🗺️',
    },
];

export default function MethodologyPage() {
    const schema = {
        '@context': 'https://schema.org', '@type': 'HowTo',
        name: 'How R&D Capital Audits Work',
        description: 'The step-by-step process for quantifying technical debt in dollars.',
        step: phases.map(p => ({ '@type': 'HowToStep', name: p.title, text: p.description })),
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">Methodology</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            How R&D Audits{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">Work</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            A structured, 4-phase methodology that transforms raw engineering data into board-ready financial clarity. Typical engagement: 4 weeks.
                        </p>
                    </div>

                    <div className="space-y-8 mb-16">
                        {phases.map((p, i) => (
                            <div key={i} className="rounded-2xl border border-zinc-200 bg-white/[0.02] p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl font-bold text-cyan-400">{p.phase}</div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-white">{p.title}</h2>
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{p.duration}</span>
                                    </div>
                                    <span className="text-3xl">{p.icon}</span>
                                </div>
                                <p className="text-zinc-400 mb-4">{p.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-mono text-zinc-600 uppercase tracking-widest mb-2">Activities</h3>
                                        <ul className="space-y-1">
                                            {p.activities.map((a, j) => <li key={j} className="text-sm text-zinc-500 flex items-start gap-2"><span className="text-cyan-500">→</span>{a}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">Deliverable</h3>
                                        <p className="text-sm text-zinc-400">{p.output}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Start Your Audit</h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Board-ready results in 4 weeks. Dollar-denominated. Actionable. No 50-page technical reports that nobody reads.</p>
                        <Link href="/advisory" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-bold hover:opacity-90 transition-opacity">Book R&D Capital Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
