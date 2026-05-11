import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics for HealthTech — R&D Audit & AI Compliance',
    description: 'Product economics advisory for HealthTech companies. HIPAA-driven technical debt, clinical AI validation, FDA SaMD compliance costs, and healthcare engi...',
    keywords: ['healthtech technical debt', 'healthcare AI governance', 'HIPAA compliance engineering', 'clinical AI validation', 'healthtech CTO advisor', 'FDA SaMD compliance'],
    alternates: { canonical: 'https://www.richardewing.io/industries/healthtech' },
    openGraph: { title: 'AI Economics for HealthTech', description: 'R&D audit and clinical AI compliance for healthcare technology.', url: 'https://www.richardewing.io/industries/healthtech', type: 'website' },
};

const challenges = [
    { icon: '🏥', title: 'HIPAA Debt', description: 'HIPAA compliance creates technical debt through encryption requirements, access logging, BAA management, and PHI handling. Non-compliance carries $1.5M+...' },
    { icon: '🧬', title: 'Clinical AI Validation', description: 'AI/ML models used in clinical decision support require FDA oversight (SaMD), algorithmic validation, and ongoing performance monitoring.' },
    { icon: '🔐', title: 'Interoperability Mandates', description: 'HL7 FHIR, TEFCA, and CMS interoperability rules require API standards that add engineering complexity and compliance burden.' },
    { icon: '⏱️', title: 'Slow Validation Cycles', description: 'Clinical validation timelines (months to years) make technical debt uniquely dangerous — you can\'t iterate fast when deployment requires regulatory cle...' },
];

export default function HealthTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-blue-900 font-extrabold font-semibold font-bold">HealthTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">HealthTech</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Healthcare engineering operates under the tightest regulatory constraints in any industry. HIPAA, FDA, and CMS rules mean that every line of technical debt carries outsized risk.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-blue-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help HealthTech Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-blue-900 font-extrabold font-semibold mt-1">→</span> <span>Quantify HIPAA-driven technical debt and compliance carry costs</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-900 font-extrabold font-semibold mt-1">→</span> <span>Audit clinical AI models for regulatory defensibility (FDA SaMD)</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-900 font-extrabold font-semibold mt-1">→</span> <span>Calculate the economic impact of interoperability mandates on engineering capacity</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-900 font-extrabold font-semibold mt-1">→</span> <span>Design validation-friendly architecture that minimizes rework</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
