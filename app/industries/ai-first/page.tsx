import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics for AI-First Companies — Margin Defense...',
    description: 'Product economics advisory for AI-first companies. AI unit economics modeling, margin erosion prevention, model dependency analysis, and Exogram integra...',
    keywords: ['AI company technical debt', 'AI margin erosion', 'LLM cost optimization', 'AI-first product economics', 'AI governance advisory', 'LLM unit economics', 'exogram integration'],
    alternates: { canonical: 'https://www.richardewing.io/industries/ai-first' },
    openGraph: { title: 'Product Economics for AI-First Companies', description: 'Margin defense, cost modelinng, and AI governance for companies building on LLMs.', url: 'https://www.richardewing.io/industries/ai-first', type: 'website' },
};

const challenges = [
    { icon: '📉', title: 'Margin Erosion', description: 'Every AI interaction costs money. Unlike traditional SaaS (95%+ gross margin), AI-first products operate at 40-70% margins. At scale, this compresses va...' },
    { icon: '🔗', title: 'Model Dependency', description: 'Building on GPT-4, Claude, or Gemini means your core capability is controlled by someone else. Price changes, deprecations, and capability regressions a...' },
    { icon: '🎭', title: 'Hallucination Liability', description: 'When your AI gives wrong information to a customer, who is liable? AI Hallucination Debt compounds invisibly until it creates a crisis.' },
    { icon: '💰', title: 'Unsustainable Unit Economics', description: 'Most AI features are margin-negative when fully loaded costs are included (inference + retrieval + monitoring + error handling). The AUEB calculator rev...' },
];

export default function AIFirstPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-orange-400 font-bold">AI-First Companies</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">AI-First Companies</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-12 max-w-2xl">
                        AI-first companies face a unique paradox: your core value proposition is your biggest cost center. Every query costs money. Every hallucination creates liability. Every model dependency creates risk.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-200 p-6 hover:border-orange-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-600 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help AI-First Companies</h2>
                        <ul className="space-y-3 text-zinc-700 mb-8">
                            <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">→</span> <span>Model AI unit economics before and after launch using the AUEB calculator</span></li>
                            <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">→</span> <span>Identify which AI features to convert to deterministic code (Evergreen Ratio)</span></li>
                            <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">→</span> <span>Implement AI governance through <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">Exogram</a> integration</span></li>
                            <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">→</span> <span>Audit model dependency risk and create multi-provider strategies</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/aueb" className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:opacity-90">Free AUEB Calculator →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
