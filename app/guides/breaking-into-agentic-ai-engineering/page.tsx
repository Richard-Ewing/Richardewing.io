import Link from 'next/link';

export default function BreakingIntoAgenticAI() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                            <span>Guides</span><span>/</span><span>Career Pathways</span><span>/</span><span className="text-white">Agentic AI</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Breaking Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Agentic AI Engineering</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed font-mono">
                            From Single-Prompt LLMs to Multi-Agent Orchestration. The 2026 Blueprint for Autonomous Systems.
                        </p>
                    </div>

                    {/* Meta Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Target Audience</div>
                            <div className="text-sm font-bold text-white">SWEs, Machine Learning Engineers</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Time to Transition</div>
                            <div className="text-sm font-bold text-white">4-6 Months</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">2026 Comp Target</div>
                            <div className="text-sm font-bold text-white">$250K - $450K</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Required Paradigm</div>
                            <div className="text-sm font-bold text-white">Non-Deterministic State</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-cyan max-w-none">
                        <div className="card p-8 mb-12 bg-violet-500/5 border-violet-500/20">
                            <h2 className="text-2xl font-grotesk font-bold text-white mb-4 mt-0">The 2026 Imperative</h2>
                            <p className="text-zinc-400">
                                The era of the "Chatbot" is over. 2026 is defined by <Link href="/glossary/agentic-ai" className="text-cyan-400 hover:underline">Agentic AI</Link>—systems capable of autonomous reasoning, tool use, and multi-step execution. Engineering these systems requires a fundamental shift from deterministic loops to probabilistic orchestration.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-zinc-300 font-mono">LangGraph</span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-zinc-300 font-mono">CrewAI</span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-zinc-300 font-mono">Function Calling</span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-zinc-300 font-mono">State Graphs</span>
                            </div>
                        </div>

                        <h3>Step 1: Mastering the Agentic Runtime</h3>
                        <p>
                            Traditional software executes functions sequentially. Agentic software queries an LLM router to decide <em>which</em> function to execute. You must master the concept of the <strong>cognitive loop</strong>: Observe, Orient, Decide, Act (OODA) implemented in code.
                        </p>
                        <ul>
                            <li><strong>State Management:</strong> Move beyond REST statelessness. Agents require persistent memory windows (Checkpointers).</li>
                            <li><strong>Tool Registration:</strong> Learn to strictly define Zod schema arguments for deterministic <Link href="/glossary/function-calling" className="text-cyan-400 hover:underline">Function Calling</Link>.</li>
                        </ul>

                        <h3>Step 2: Multi-Agent Topologies</h3>
                        <p>
                            A single monolithic agent hallucinates and degrades over long context windows. The 2026 standard is <Link href="/glossary/multi-agent-systems" className="text-cyan-400 hover:underline">Multi-Agent Systems</Link>, where specialized narrow-context agents hand off tasks to one another.
                        </p>
                        
                        <h3>Step 3: Governance and Boundary Control</h3>
                        <p>
                            When agents can read databases and execute API requests, the blast radius of a hallucination is catastrophic. Implement strict <Link href="/glossary/boundary-control" className="text-cyan-400 hover:underline">Boundary Controls</Link> involving Human-in-the-Loop (HITL) for destructive (Write/Delete) operations.
                        </p>

                        <div className="my-12 p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all" />
                            <h3 className="text-2xl font-grotesk font-bold text-white mb-2 relative z-10">Master Agentic Architecture</h3>
                            <p className="text-zinc-400 mb-6 max-w-xl relative z-10">
                                Stop reading blog posts and start building production-ready autonomous systems. 
                                Master state graphs, vector persistence, and multi-agent orchestration.
                            </p>
                            <Link href="/curriculum" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-black font-bold text-sm tracking-wide hover:bg-cyan-400 transition-colors relative z-10 shadow-[0_0_20px_rgba(6,-182,212,0.3)]">
                                Enroll in Track 13: Agent Economics →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
