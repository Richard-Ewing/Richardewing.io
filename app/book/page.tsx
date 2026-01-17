export default function BookPage() {
    return (
        <main className="p-8 lg:p-24 flex flex-col justify-center min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto w-full">
                <div className="capsule-container rounded-[2rem] p-12 mb-8 animate-fade-in-up text-center">
                    <span className="font-mono text-zinc-500 text-xs uppercase tracking-widest mb-4 block">The Manuscript</span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        The Product <br />
                        <span className="text-zinc-500">Economist.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
                        How to stop bleeding money on "Agile Rituals" and start acting like a Capital Allocator. A guide for the post-ZIRP era of software development.
                    </p>

                    <form className="max-w-md mx-auto">
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                name="email"
                                placeholder="email@address.com"
                                required
                                className="w-full bg-black border border-zinc-800 text-white px-6 py-4 rounded-lg focus:border-white focus:ring-1 focus:ring-white outline-none font-mono text-sm transition-colors text-center placeholder:text-zinc-700"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-bold uppercase text-xs px-6 py-4 rounded-lg hover:bg-zinc-200 transition-all tracking-widest w-full"
                            >
                                Join Waitlist
                            </button>
                        </div>
                        <p className="text-[10px] text-zinc-600 mt-4 font-mono">
                            Coming Q4 2026. No spam. Only sovereignty.
                        </p>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up delay-100">
                    <div className="capsule-container p-8 rounded-2xl border border-dashed border-zinc-800 hover:border-zinc-700 transition">
                        <h4 className="text-white font-bold text-sm mb-2">Chapter 01: The Death of the Happy Builder</h4>
                        <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className="capsule-container p-8 rounded-2xl border border-dashed border-zinc-800 hover:border-zinc-700 transition">
                        <h4 className="text-white font-bold text-sm mb-2">Chapter 02: Unit Economics of Code</h4>
                        <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className="capsule-container p-8 rounded-2xl border border-dashed border-zinc-800 hover:border-zinc-700 transition">
                        <h4 className="text-white font-bold text-sm mb-2">Chapter 03: The Kill Switch Protocol</h4>
                        <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className="capsule-container p-8 rounded-2xl border border-dashed border-zinc-800 hover:border-zinc-700 transition">
                        <h4 className="text-white font-bold text-sm mb-2">Chapter 04: Algorithmic Solvency</h4>
                        <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
