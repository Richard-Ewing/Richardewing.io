/**
 * NarrativeCompression  -  The 15-second comprehension layer
 * 
 * Placed between Hero and ClientOutcomes on the homepage.
 * Delivers the full thesis in a single scannable visual:
 * 
 * WHAT BREAKS → WHAT IT COSTS → WHY → THE FIX → THE ENGINE
 * 
 * Grounded in real practitioner pain from Reddit, HN, CIO.com, BuiltIn.
 */
const NarrativeCompression = () => {
    return (
        <section className="py-12">
            <div className="max-w-3xl mx-auto px-6">

                <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">

                    {/* Header */}
                    <div className="px-6 py-4 bg-[#FCFAF7] text-zinc-900">
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">The Bottom Line  -  15 Seconds</p>
                    </div>

                    {/* Compression Grid */}
                    <div className="divide-y divide-zinc-100">
                        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                            <div className="px-6 py-4 bg-rose-50/50">
                                <p className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">What Breaks</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-zinc-900 font-medium">AI agents execute actions without deterministic governance. Models hallucinate. Costs spiral. Code gets rewritten. Permissions cascade.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                            <div className="px-6 py-4 bg-rose-50/50">
                                <p className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">What It Costs</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-zinc-900 font-medium">POCs cost hundreds. Production costs millions. API bills exceed revenue. Engineering capacity consumed by maintenance, not innovation.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                            <div className="px-6 py-4 bg-violet-50/50">
                                <p className="text-xs font-mono font-bold text-violet-600 uppercase tracking-wider">Why</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-zinc-900 font-medium">No verification layer between model inference and execution. Guardrails are probabilistic  -  one guessing system policing another.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                            <div className="px-6 py-4 bg-violet-50/50">
                                <p className="text-xs font-mono font-bold text-violet-600 uppercase tracking-wider">The Fix</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-zinc-900 font-medium">Deterministic governance infrastructure. Inference is probabilistic. Execution must be deterministic. The agent can guess. The execution layer cannot.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                            <div className="px-6 py-4 bg-purple-50/50">
                                <p className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">The Engine</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-sm text-zinc-900 font-medium">
                                    <a href="/exogram" className="text-purple-700 font-bold hover:text-purple-500 transition-colors underline decoration-purple-300 underline-offset-2">Exogram</a>  -  the deterministic verification layer for AI systems. Not optional. Not best practice. <span className="font-bold">Mandatory.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default NarrativeCompression;
