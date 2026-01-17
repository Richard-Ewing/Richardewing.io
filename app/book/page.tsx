export default function BookPage() {
    return (
        <main className="p-8 lg:p-16 flex flex-col justify-center min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="capsule-container rounded-[2rem] p-8 lg:p-16 w-full max-w-4xl mx-auto animate-fade-in-up">
                <span className="font-mono text-cobalt text-xs uppercase tracking-widest mb-4 block">Upcoming Work</span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">The Product <br />Economist</h1>
                <p className="text-xl text-zinc-300 leading-relaxed mb-8 border-b border-white/10 pb-8">
                    Financial Fluency, AI Unit Economics, and Capital Allocation for Aspiring Executives.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold mb-4">The Premise</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            In every tech company, there is a &quot;Senior Ceiling.&quot; High-performing leaders in Engineering and Product hit a wall. They are elite at shipping code, but illiterate in Capital Allocation.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            They view themselves as &quot;builders,&quot; while their CEOs view them as &quot;cost centers.&quot;
                        </p>
                        <p className="text-white font-bold text-sm leading-relaxed">
                            This book is the manual for crossing that chasm. It argues that the language of the C-Suite is not Python, Jira, or Figma—it is Finance.
                        </p>
                    </div>

                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Key Concepts</span>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-cobalt">&bull;</span>
                                <span className="text-sm text-zinc-300"><strong>The Specialization Trap:</strong> Why you were trained to ignore money.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cobalt">&bull;</span>
                                <span className="text-sm text-zinc-300"><strong>Financial Conway&apos;s Law:</strong> Architecture mirrors funding models.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cobalt">&bull;</span>
                                <span className="text-sm text-zinc-300"><strong>The AI Tax:</strong> Modeling the unit economics of GenAI.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <form name="book-waitlist" method="POST" className="max-w-md">
                        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Notify me when published</label>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="email@address.com"
                                required
                                className="flex-1 bg-black border border-zinc-800 text-white px-4 py-3 rounded-lg focus:border-cobalt outline-none font-mono text-sm transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-bold uppercase text-xs px-6 py-3 rounded-lg hover:bg-cobalt hover:text-white transition-all tracking-widest"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
