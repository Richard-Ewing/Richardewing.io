import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Shadow AI vs Shadow IT — Untracked Liability vs Subscript...',
    description: 'Why Shadow AI is exponentially more dangerous than Shadow IT. Shadow IT is an unapproved software subscription. Shadow AI is unapproved data extrusion and hallucinations.',
    keywords: ['shadow ai', 'shadow it', 'shadow ai vs shadow it', 'ai governance', 'enterprise ai security', 'generative ai risks'],
    alternates: { canonical: 'https://www.richardewing.io/compare/shadow-ai-vs-shadow-it' },
    openGraph: { title: 'Shadow AI vs Shadow IT — Untracked Liability vs Subscript...', description: 'Shadow IT costs money. Shadow AI costs you your intellectual property and legal defensibility. See the financial breakdown.', url: 'https://www.richardewing.io/compare/shadow-ai-vs-shadow-it', type: 'article' },
};

const rows = [
    { dimension: 'Definition', ai: 'Employees secretly feeding corporate data into public LLMs', it: 'Employees secretly using unapproved SaaS tools' },
    { dimension: 'Primary Risk', ai: 'Irreversible IP leakage and hallucination liability', it: 'Redundant subscription spending' },
    { dimension: 'Detection Method', ai: 'DLP scanning, prompt injection auditing, endpoint monitoring', it: 'Expense report audits, SSO logs' },
    { dimension: 'Remediation Difficulty', ai: 'High (Data is already in the public model weights)', it: 'Low (Cancel the subscription)' },
    { dimension: 'Financial Impact', ai: 'Catastrophic (Lawsuits, regulatory fines, IP loss)', it: 'Annoying ($100/mo wasted on duplicate tools)' },
    { dimension: 'Action Required', ai: 'Strict egress filtering & secure sovereign LLM provision', it: 'IT procurement policy updates' },
    { dimension: 'Board-Level Urgency', ai: '🚨 Immediate Crisis', it: '✅ Standard Operations' },
];

export default function ShadowAIvsShadowITPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">Shadow AI vs Shadow IT</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Shadow AI <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Shadow IT</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        For 20 years, CIOs fought <span className="text-purple-600 font-bold">Shadow IT</span> (rogue SaaS subscriptions). Today, the threat is <span className="text-zinc-950 font-bold">Shadow AI</span>: employees pasting proprietary code, customer data, and financial projections into public LLMs to "work faster."
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">Shadow AI</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-purple-600 uppercase tracking-widest">Shadow IT</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.ai}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.it}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white border border-zinc-200 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 font-semibold mb-4">The Verdict</h2>
                        <p className="text-zinc-800 mb-6"><strong>Shadow IT is an operational inefficiency. Shadow AI is an existential threat.</strong> When an employee uses an unapproved project management tool, you lose $15 a month. When an employee pastes a confidential merger agreement into ChatGPT to summarize it, you have irrevocably breached NDA and forfeited your intellectual property into a public training dataset.</p>
                        <Link href="/glossary/shadow-ai" className="inline-block px-8 py-4 rounded-lg bg-white text-black font-semibold font-bold hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm">Read the Shadow AI Definition →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
