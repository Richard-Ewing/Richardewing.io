import Link from 'next/link';

export default function HowToDeploySLMs() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                            <span>Guides</span><span>/</span><span>Technical How-To</span><span>/</span><span className="text-white">SLMs</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            How to Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Small Language Models (SLMs)</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed font-mono">
                            The 2026 Guide to bypassing API oligopolies by running highly specialized, quantized inference on edge devices.
                        </p>
                    </div>

                    {/* Meta Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Primary ROI</div>
                            <div className="text-sm font-bold text-white">90% Latency Reduction</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Hardware Target</div>
                            <div className="text-sm font-bold text-white">Mac M3 / Edge CPUs</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Parameter Count</div>
                            <div className="text-sm font-bold text-white">3B to 8B Params</div>
                        </div>
                        <div className="card p-4">
                            <div className="text-[10px] text-zinc-500 uppercase mb-1">Economic Lever</div>
                            <div className="text-sm font-bold text-white">Zero Token Cost</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-cyan max-w-none">
                        <div className="card p-8 mb-12 bg-emerald-500/5 border-emerald-500/20">
                            <h2 className="text-2xl font-grotesk font-bold text-white mb-4 mt-0">The SLM Revolution</h2>
                            <p className="text-zinc-400">
                                Relying exclusively on GPT-4 or Claude 3.5 Opus is a heavy <Link href="/glossary/margin-tax" className="text-cyan-400 hover:underline">Margin Tax</Link>. 
                                In 2026, the competitive advantage belongs to teams utilizing <Link href="/glossary/small-language-models" className="text-cyan-400 hover:underline">Small Language Models</Link> (like Llama 3 8B or Phi-3) running directly inside the user's infrastructure.
                            </p>
                        </div>

                        <h3>Step 1: Quantization is Mandatory</h3>
                        <p>
                            You cannot casually deploy an unoptimized 8B parameter model natively without destroying user RAM. You must utilize <Link href="/glossary/quantization" className="text-cyan-400 hover:underline">Quantization</Link> (specifically 4-bit or 8-bit techniques like GGUF) to shrink memory bounds while retaining 95% of semantic performance.
                        </p>

                        <h3>Step 2: Orchestrating Local Inference</h3>
                        <p>
                            Utilize Ollama or Llama.cpp as your underlying inference engine. Your Next.js/Node application should fallback gracefully: attempt local SLM execution first (zero token cost, zero network latency, maximum privacy), and only route to Anthropic/OpenAI APIs if the task complexity exceeds the SLM's capability threshold.
                        </p>
                        
                        <h3>Step 3: Edge Vector Databases</h3>
                        <p>
                            Pairing an SLM with massive cloud RAG defeats the purpose. Use embedded, in-memory instances of tools like ChromaDB or SQLite with `pgvector`-like extensions to operate entirely locally.
                        </p>

                        <div className="my-12 p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all" />
                            <h3 className="text-2xl font-grotesk font-bold text-white mb-2 relative z-10">Stop Paying the Margin Tax</h3>
                            <p className="text-zinc-400 mb-6 max-w-xl relative z-10">
                                Start evaluating model portfolios economically. Don't use a trillion-parameter model to summarize a paragraph.
                            </p>
                            <Link href="/curriculum" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-black font-bold text-sm tracking-wide hover:bg-emerald-400 transition-colors relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                Enroll in Track 11: AI Operations →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
