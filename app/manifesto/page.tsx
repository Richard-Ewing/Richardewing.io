import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Manifesto | Richard Ewing",
};

export default function Manifesto() {
    return (
        <>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="capsule-container rounded-[2rem] p-12 lg:p-20 max-w-4xl w-full mx-auto relative z-10 animate-fade-in-up">
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.3em] mb-12 block text-center opacity-80">The Doctrine of Sovereignty</span>

                <h1 className="text-5xl lg:text-7xl font-serif text-white mb-16 text-center leading-[0.95] tracking-tight">
                    The Era of the <br /><span className="italic text-zinc-600">"Happy Builder"</span> is Over.
                </h1>

                <article className="prose prose-invert prose-lg mx-auto leading-relaxed">
                    <p className="first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:text-white first-letter:font-serif text-zinc-300">
                        For fifteen years, we have been told that the job of a Product Leader is to "empathize." We
                        built "Feature Factories" disguised as "Agile Squads." We celebrated velocity while our unit
                        economics quietly decayed.
                    </p>

                    <div className="my-16 relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-50" />
                        <p className="text-3xl font-serif italic text-white leading-tight m-0 pl-4">
                            "Innovation without Solvency is just Philanthropy."
                        </p>
                    </div>

                    <p className="text-zinc-300">
                        The ZIRP era is dead. The Board no longer cares about your "User Journey Maps." They care about <strong className="text-white font-bold">Yield</strong>. This is not a demotion; it is an evolution.
                    </p>

                    <p className="text-zinc-300">
                        We are not just builders anymore. We are <strong className="text-white font-bold">Architects of Capital</strong>. We must learn to speak the language of the P&L, or we will be relegated to the children's table while the CFO makes the real roadmap decisions.
                    </p>

                    <div className="mt-20 pt-12 border-t border-white/10 flex items-center gap-8 delay-200 animate-fade-in-up">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#D4AF37] blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10">
                                <img src="/assets/images/headshot.jpg" className="w-full h-full object-cover grayscale" alt="Richard Ewing" />
                            </div>
                        </div>
                        <div>
                            <div className="font-serif text-white text-2xl italic mb-1">Richard Ewing</div>
                            <div className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase">The Product Economist</div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
