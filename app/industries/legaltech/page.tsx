import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'LegalTech Product Economics — Legal Technology Debt & AI',
    description: 'Product economics for LegalTech: document processing AI costs, compliance data infrastructure, contract analytics model economics, and legal data securi...',
    keywords: ['legaltech technical debt', 'legal technology', 'contract AI economics', 'legal document processing', 'legaltech engineering economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries/legaltech' },
    openGraph: { title: 'LegalTech Product Economics', description: 'R&D capital challenges in legal technology.', url: 'https://www.richardewing.io/industries/legaltech', type: 'article' },
};

const sections = [
    { title: 'Document Processing AI Economics', description: 'Legal document analysis (contract review, due diligence, discovery) relies on NLP and LLMs. Processing costs scale with document volume — and legal docu...', stats: 'LLM cost per legal document: $0.50-$5.00', color: 'violet' },
    { title: 'Regulatory Compliance Data Debt', description: 'LegalTech products must track jurisdictional regulations across 50+ states and 200+ countries. Each jurisdiction updates independently. The data mainten...', stats: '50+ US jurisdictions × monthly regulatory changes', color: 'cyan' },
    { title: 'Contract Analytics Model Drift', description: 'AI models trained on historical contracts degrade as legal language evolves. New clauses, regulatory changes, and industry-specific terms create continu...', stats: 'Model accuracy drops 5-15% per year without retraining', color: 'rose' },
    { title: 'Legal Data Security Requirements', description: 'Attorney-client privilege data requires highest-tier security. LegalTech companies face SOC 2 Type II, data residency, encryption-at-rest, and audit log...', stats: 'Security compliance: $200K-$500K/year for LegalTech', color: 'emerald' },
];

const colorMap: Record<string, string> = { violet: 'border-violet-500/30 bg-violet-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', rose: 'border-rose-500/30 bg-rose-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5' };
const textMap: Record<string, string> = { violet: 'text-violet-400', cyan: 'text-cyan-800 font-semibold', rose: 'text-rose-400', emerald: 'text-emerald-800 font-semibold' };

export default function LegalTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-800 font-semibold">Industries</Link><span>/</span><span className="text-violet-400 font-bold">LegalTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        LegalTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Product Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Legal technology faces unique R&D economics: massive document processing costs, jurisdictional data maintenance, contract AI model drift, and highest-tier security requirements.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-900 mb-4">{s.description}</p>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">LegalTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your document processing AI costs, compliance data debt, and security infrastructure burden.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book LegalTech Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
