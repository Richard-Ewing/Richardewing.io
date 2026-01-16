import Link from "next/link";
import Image from "next/image";

export function Sidebar() {
    return (
        <aside className="bg-black/95 backdrop-blur-xl border-r border-white/5 p-8 lg:p-10 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between z-50">
            <div>
                <div className="relative w-32 h-32 mb-6 rounded-full border-2 border-zinc-700 overflow-hidden shadow-2xl">
                    {/* Using standard img for now to avoid next/image config issues with external/local paths until fixed */}
                    <img src="/assets/images/headshot.jpg" alt="Richard Ewing" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-white font-bold tracking-tight text-xl">RICHARD EWING</h3>
                <span className="font-mono text-xs text-titanium tracking-widest block mt-1">PRODUCT ECONOMIST</span>
            </div>

            <nav className="mt-12 lg:mt-0 flex flex-col gap-4 font-mono text-xs tracking-widest uppercase">
                <Link href="/" className="text-zinc-500 hover:text-white transition-colors block mb-6">&larr; Back</Link>
                <div className="space-y-8 mt-10">

                    <div>
                        <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Identity</div>
                        <div className="space-y-1">
                            <Link href="/" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">Home</Link>
                            <Link href="/manifesto" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">01. Manifesto</Link>
                            <Link href="/principal" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">02. The Principal</Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-[9px] font-mono text-danger uppercase mb-3 ml-3 tracking-widest">Intervention</div>
                        <Link href="/advisory" className="block text-white font-bold text-xs py-3 px-3 border-l-2 border-danger bg-danger/5 hover:bg-danger/10 transition-all">
                            03. ADVISORY
                        </Link>
                    </div>

                    <div>
                        <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Intelligence</div>
                        <div className="space-y-1">
                            <Link href="/system" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">04. System</Link>
                            <Link href="/doctrine" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">05. Doctrine</Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Signal</div>
                        <div className="space-y-1">
                            <Link href="/briefs" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">06. Briefs</Link>
                            <Link href="/book" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">07. Book</Link>
                            <Link href="/legal" className="block text-zinc-400 hover:text-white text-xs py-1.5 px-3 border-l border-transparent hover:border-white transition-all">08. Legal</Link>
                        </div>
                    </div>

                </div>
            </nav>
            <div className="font-mono text-[10px] text-zinc-600 mt-12 lg:mt-0">&copy; 2026 Richard Ewing</div>
        </aside>
    );
}
