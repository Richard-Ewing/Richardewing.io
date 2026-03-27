import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'Career Paths: Breaking into AI Operations | Richard Ewing',
    description: 'The definitive career transition roadmap for Senior Engineers looking to pivot into AI Operations, Model Orchestration, and AI FinOps.',
    keywords: ['AI Operations career', 'AIOps transition', 'How to learn AI engineering', 'AI FinOps career', 'LLM orchestrator', 'LangChain engineer', 'Career Path AI'],
    alternates: { canonical: 'https://www.richardewing.io/guides/breaking-into-ai-operations' },
    openGraph: { title: 'Career Paths: Breaking into AI Operations', description: 'The 2026 blueprint for senior engineers scaling into the highest leverage role in tech.', url: 'https://www.richardewing.io/guides/breaking-into-ai-operations', type: 'article' },
};

export default function BreakingIntoAIOpsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Career Paths</Link><span>/</span><span className="text-cyan-400 font-bold">AI Operations</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Career Paths: Breaking into{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">AI Operations</span>
                    </h1>
                    
                    <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                        The era of the "Prompt Engineer" is dead. The highest paying, highest leverage role in modern technology is the <strong>AI Operations (AIOps) Engineer</strong>. This is the individual who understands how to orchestrate multi-agent systems, strictly control inference costs, and deploy zero-trust data boundaries.
                    </p>

                    <div className="mb-12">
                        <PremiumGuideCTA guideSlug="breaking-into-ai-operations" guideName="The AI Operations Playbook" />
                    </div>

                    <div className="prose prose-invert max-w-none mb-16">
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Triad of AI Operations</h2>
                        <p className="text-zinc-300 mb-6">Transitioning from a traditional Senior Backend or DevOps role requires mastering three distinct spheres of competence that dictate the 2026 architectural landscape.</p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                                <div className="text-xl mb-3">🧠</div>
                                <h3 className="text-lg font-bold text-white mb-2">Orchestration Control</h3>
                                <p className="text-sm text-zinc-400">Mastering LangChain, CrewAI, and LlamaIndex. Understanding how to build self-healing agentic loops and dynamic tool selection.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
                                <div className="text-xl mb-3">💸</div>
                                <h3 className="text-lg font-bold text-white mb-2">AI Unit Economics</h3>
                                <p className="text-sm text-zinc-400">Architecting semantic routers to shunt simple queries to cheap on-device SLMs while reserving GPT-4o strictly for complex reasoning.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
                                <div className="text-xl mb-3">🛡️</div>
                                <h3 className="text-lg font-bold text-white mb-2">Agentic Security</h3>
                                <p className="text-sm text-zinc-400">Implementing RBAC strictly inside RAG data planes to ensure Agents cannot leak multi-tenant PII data during inference.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Financial Mandate</h2>
                        <p className="text-zinc-300">
                            The reason AI Operations engineers are commanding tier-one compensation is simple: they directly protect the balance sheet. In 2024, companies lost millions to inefficient LLM API calls, infinite agentic loops, and poorly optimized vector searches. A skilled AIOps engineer pays for their entire salary in a single quarter of infrastructure optimization alone.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-10 text-center mb-16">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Fast-Track Your Transition</h2>
                        <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
                            Don't piece together deprecated YouTube tutorials. The Vault contains the exact enterprise-grade curriculum required to architect, scale, and secure enterprise AI systems.
                        </p>
                        <Link href="/curriculum" className="inline-block px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                            Unlock the Full Curriculum ($199) →
                        </Link>
                    </div>
                
                    <RelatedContent currentSlug="breaking-into-ai-operations" type="guide" count={3} />
                </div>
            </div>
        </main>
    );
}
