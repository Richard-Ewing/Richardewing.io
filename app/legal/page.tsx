'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import Link from 'next/link';

export default function LegalPage() {
    return (
        <main className="pt-24 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto w-full relative z-10">
                <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                    <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-zinc-800">Signal</span>
                    <span>/</span>
                    <span className="text-zinc-950 font-bold">Legal</span>
                </div>

                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16 border border-zinc-400 bg-surface/50">
                        <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Compliance</span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-none mb-8">
                            Legal &amp;<br />Terms of Use
                        </h1>

                        <div className="space-y-8 max-w-4xl">
                            <section>
                                <h2 className="text-xl sm:text-2xl text-zinc-950 font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-0.5 bg-cyan-400" />
                                    Terms of Service
                                </h2>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base mb-4">
                                    By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                                </p>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base">
                                    If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl text-zinc-950 font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-0.5 bg-emerald-400" />
                                    Privacy Policy
                                </h2>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base mb-4">
                                    Your privacy is critical. We do not sell your data. Any information collected via the "Briefs" subscription, "Book Waitlist," or "Advisory" inquiry forms is used solely for the purpose of communication regarding Richard Ewing's services and publications.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                    <GlowCard className="p-4" glowColor="cyan">
                                        <div className="text-cyan-400 text-lg mb-2">🔒</div>
                                        <div className="text-zinc-950 font-bold text-sm mb-1">Secure Storage</div>
                                        <div className="text-zinc-950 text-xs">Email addresses stored securely, never shared</div>
                                    </GlowCard>
                                    <GlowCard className="p-4" glowColor="cobalt">
                                        <div className="text-cobalt text-lg mb-2">🚫</div>
                                        <div className="text-zinc-950 font-bold text-sm mb-1">No Tracking</div>
                                        <div className="text-zinc-950 text-xs">No cookies beyond essential functionality</div>
                                    </GlowCard>
                                    <GlowCard className="p-4" glowColor="gold">
                                        <div className="text-gold text-lg mb-2">✉️</div>
                                        <div className="text-zinc-950 font-bold text-sm mb-1">Data Deletion</div>
                                        <div className="text-zinc-950 text-xs">Request deletion anytime via email</div>
                                    </GlowCard>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl text-zinc-950 font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-0.5 bg-gold" />
                                    Intellectual Property
                                </h2>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base mb-4">
                                    The following are registered trademarks and proprietary intellectual property of Richard Ewing:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-cyan-500/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">APER™</div>
                                        <div className="text-zinc-800 text-xs font-medium">Team Efficiency Diagnostic</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-red-500/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">AUEB™</div>
                                        <div className="text-zinc-800 text-xs font-medium">AI Unit Economics Benchmark</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-emerald-500/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">PDI™</div>
                                        <div className="text-zinc-800 text-xs font-medium">Product Debt Index</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-purple-500/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">EV-SE™</div>
                                        <div className="text-zinc-800 text-xs font-medium">Valuation Scenario Engine</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-cobalt/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">Q-PEP™</div>
                                        <div className="text-zinc-800 text-xs font-medium">Quarterly Protocol</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-gold/30 transition">
                                        <div className="text-zinc-800 text-xs font-medium">Methodology & Brand</div>
                                    </div>
                                    <div className="p-3 border border-zinc-400 rounded-lg text-center hover:border-emerald-500/30 transition">
                                        <div className="text-zinc-950 font-bold text-sm">AUDIT™</div>
                                        <div className="text-zinc-800 text-xs font-medium">Audit Interview Protocol</div>
                                    </div>
                                </div>
                                <p className="text-zinc-950 text-xs mt-4">
                                    Unauthorized reproduction or commercial use without express written consent is prohibited.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl text-zinc-950 font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-0.5 bg-red-400" />
                                    Advisory Disclaimer
                                </h2>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base">
                                    The information provided on this website and through advisory services is for general informational purposes only. It does not constitute legal, financial, or professional advice. Clients should consult with qualified professionals for specific business decisions.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl text-zinc-950 font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-0.5 bg-zinc-500" />
                                    Limitation of Liability
                                </h2>
                                <p className="text-zinc-900 leading-relaxed text-sm sm:text-base">
                                    The materials on this website are provided "as is." Richard Ewing makes no warranties, expressed or implied, and hereby disclaims all other warranties without limitation.
                                </p>
                            </section>

                            <section className="capsule-container p-6 rounded-xl">
                                <h2 className="text-lg text-zinc-950 font-bold mb-4">Contact</h2>
                                <p className="text-zinc-900 text-sm mb-4">
                                    For questions regarding these terms:
                                </p>
                                <a
                                    href="mailto:richardewing@exogram.ai"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-zinc-900 transition font-mono text-sm"
                                >
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    richardewing@exogram.ai
                                </a>
                            </section>

                            <div className="pt-8 border-t border-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-950 text-xs sm:text-sm font-mono">
                                <span>Last Updated: January 2026</span>
                                <span>© 2026 Richard Ewing. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
