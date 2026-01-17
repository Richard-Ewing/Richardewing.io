'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import Link from 'next/link';

export default function LegalPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-zinc-400">Signal</span>
                <span>/</span>
                <span className="text-white font-bold">Legal</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16 border border-white/10 bg-surface/50">
                    <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Compliance</span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none mb-8">
                        Legal &amp;<br />Terms of Use
                    </h1>

                    <div className="space-y-8 max-w-4xl">
                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Terms of Service</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base mb-4">
                                By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                            </p>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Privacy Policy</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base mb-4">
                                Your privacy is critical. We do not sell your data. Any information collected via the "Briefs" subscription, "Book Waitlist," or "Advisory" inquiry forms is used solely for the purpose of communication regarding Richard Ewing's services and publications.
                            </p>
                            <ul className="list-disc list-inside text-zinc-400 text-sm space-y-2">
                                <li>Email addresses are stored securely and never shared with third parties</li>
                                <li>No tracking cookies beyond essential site functionality</li>
                                <li>You may request deletion of your data at any time via email</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Intellectual Property</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base mb-4">
                                The content on this website, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-zinc-400 text-sm space-y-2 mb-4">
                                <li><strong className="text-white">APER™ Diagnostic</strong> (Actionable Product Economic Review)</li>
                                <li><strong className="text-white">Q-PEP™ Protocol</strong> (Qualitative-Profitability Efficiency Protocol)</li>
                                <li><strong className="text-white">Product Debt Index™</strong></li>
                                <li><strong className="text-white">Product Quarterback™ Methodology</strong></li>
                            </ul>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                ...is the intellectual property of Richard Ewing. Unauthorized reproduction or commercial use without express written consent is prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Advisory Disclaimer</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                The information provided on this website and through advisory services is for general informational purposes only. It does not constitute legal, financial, or professional advice. Clients should consult with qualified professionals for specific business decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Limitation of Liability</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                The materials on Richard Ewing's website are provided "as is." Richard Ewing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Contact</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                For any questions regarding these terms, please contact: <a href="mailto:richardewing1@gmail.com" className="text-cyan-400 hover:text-white transition">richardewing1@gmail.com</a>
                            </p>
                        </section>

                        <div className="pt-8 border-t border-white/10 text-zinc-500 text-xs sm:text-sm font-mono">
                            Last Updated: January 2026
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
