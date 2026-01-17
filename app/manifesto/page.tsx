
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ManifestoPage() {
    return (
        <div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in-up">
            {/* FX Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="capsule-container rounded-[2rem] p-12 lg:p-20 border border-white/10 bg-zinc-900/40 backdrop-blur-md relative z-10">
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.3em] mb-12 block text-center opacity-80">
                    The Doctrine of Sovereignty
                </span>

                <h1 className="text-5xl lg:text-7xl font-serif text-white mb-16 text-center leading-[0.95] tracking-tight">
                    The Era of the <br /><span className="italic text-zinc-600">&quot;Happy Builder&quot;</span> is Over.
                </h1>

                <article className="prose prose-invert prose-lg mx-auto leading-relaxed text-zinc-300">
                    <p className="first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:text-white first-letter:font-serif text-zinc-300">
                        For fifteen years, we have been told that the job of a Product Leader is to &quot;empathize.&quot; We built &quot;Feature Factories&quot; disguised as &quot;Agile Squads.&quot; We celebrated velocity while our unit economics quietly decayed.
                    </p>

                    <div className="my-16 relative pl-8 border-l-2 border-yellow-500/50">
                        <p className="text-3xl font-serif italic text-white leading-tight m-0">
                            &quot;Innovation without Solvency is just Philanthropy.&quot;
                        </p>
                    </div>

                    <p className="text-zinc-300 mb-6">
                        The ZIRP era is dead. The Board no longer cares about your &quot;User Journey Maps.&quot; They care about <strong className="text-white font-bold">Yield</strong>. This is not a demotion; it is an evolution.
                    </p>

                    <p className="text-zinc-300">
                        We are not just builders anymore. We are <strong className="text-white font-bold">Architects of Capital</strong>. We must learn to speak the language of the P&L, or we will be relegated to the children&apos;s table while the CFO makes the real roadmap decisions.
                    </p>

                    <div className="mt-20 pt-12 border-t border-white/10 flex items-center gap-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#D4AF37] blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                            <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-white/10 overflow-hidden relative">
                                <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                            </div>
                        </div>
                        <div>
                            <div className="font-serif text-white text-2xl italic mb-1">Richard Ewing</div>
                            <div className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase">The Product Economist</div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
