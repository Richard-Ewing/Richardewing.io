import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, TrendingUp, ShieldCheck, Zap, ExternalLink, Users, BookOpen, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import CareerWinBenchmarkVisual from '@/app/components/CareerWinBenchmarkVisual';

export const metadata: Metadata = {
    title: 'CareerWin.ai — Career Intelligence for Engineers & Leaders',
    description: 'Role benchmarks, leveling intelligence, and compensation strategy powered by the AI Economics Knowledge Engine. Built for senior engineers, architects, and product leaders.',
    alternates: { canonical: 'https://www.richardewing.io/careerwin' },
    openGraph: {
        title: 'CareerWin.ai — Career Intelligence for Engineers & Leaders',
        description: 'Role benchmarks, leveling intelligence, and compensation strategy powered by the AI Economics Knowledge Engine.',
        url: 'https://www.richardewing.io/careerwin',
        type: 'website',
    },
};

export default function CareerWinPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header / Hero */}
                <ScrollReveal>
                    <div className="mb-16 text-center border-b border-zinc-400 pb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 rounded-full font-mono text-xs uppercase tracking-widest mb-6">
                            <Award className="w-3.5 h-3.5" />
                            <span>Individual Career Intelligence Branch</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                            Career Intelligence for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
                                Engineers & Product Leaders
                            </span>
                        </h1>
                        
                        <p className="text-xl text-zinc-900 font-semibold max-w-2xl mx-auto leading-relaxed mb-8">
                            Role benchmarks, leveling intelligence, and compensation strategy powered by the AI Economics Knowledge Engine.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://careerwin.ai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-md transition-all gap-2"
                            >
                                Explore CareerWin.ai Platform <ExternalLink className="w-4 h-4" />
                            </a>
                            <Link 
                                href="/curriculum"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-zinc-300 text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-50 transition-colors"
                            >
                                Browse Executive Curriculum &rarr;
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Live Interactive Benchmark Visual */}
                <CareerWinBenchmarkVisual />

                {/* Staff+ Verified Testimonial Quote */}
                <ScrollReveal>
                    <div className="my-12 bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-full shrink-0">
                                <Quote className="w-6 h-6" />
                            </div>
                            <div>
                                <blockquote className="text-zinc-900 font-semibold text-lg leading-relaxed mb-4">
                                    &ldquo;Richard&apos;s leveling intelligence helped me negotiate a $40K compensation increase and a Staff Engineer title I didn&apos;t know I qualified for. CareerWin OS turns vague resume claims into recruiter-stopping evidence.&rdquo;
                                </blockquote>
                                <div className="text-xs font-mono font-bold text-zinc-700">
                                    — Senior Engineer → Staff Engineer, Series B SaaS (Verified Outcome)
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Core Pillars */}
                <ScrollReveal>
                    <section className="mb-20">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8 text-center">
                            Three Pillars of Career Intelligence
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm">
                                <div className="p-3 bg-indigo-100 text-indigo-800 rounded-xl w-fit mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">1. Market Value Benchmarks</h3>
                                <p className="text-zinc-900 font-semibold text-sm leading-relaxed">
                                    Real-time compensation data and equity valuation models adjusted for AI leverage, remote tiering, and engineering specialization.
                                </p>
                            </div>

                            <div className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm">
                                <div className="p-3 bg-purple-100 text-purple-800 rounded-xl w-fit mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">2. Leveling Intelligence</h3>
                                <p className="text-zinc-900 font-semibold text-sm leading-relaxed">
                                    Map your technical scope from Senior to Staff, Principal, and VP of Engineering based on architectural leverage, not just tenure.
                                </p>
                            </div>

                            <div className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm">
                                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl w-fit mb-4">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">3. Negotiation Strategy</h3>
                                <p className="text-zinc-900 font-semibold text-sm leading-relaxed">
                                    Data-backed playbooks to negotiate executive compensation packages, performance bonuses, and advisory equity allocations.
                                </p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Integration with AI Economics Ecosystem */}
                <ScrollReveal>
                    <section className="mb-20 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12">
                        <div className="max-w-2xl">
                            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest mb-3 block">
                                Platform Synergy
                            </span>
                            <h2 className="text-3xl font-grotesk font-bold mb-6">
                                How CareerWin Fits Into the Ecosystem
                            </h2>
                            <p className="text-zinc-300 font-semibold text-base leading-relaxed mb-6">
                                While <strong>Exogram</strong> governs enterprise AI runtime architecture and <strong>Advisory Services</strong> audits R&D capital spend for CTOs and CFOs, <strong>CareerWin.ai</strong> weaponizes that same financial data for individual career growth.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs font-mono">
                                <span className="px-3 py-1.5 bg-zinc-800 rounded-lg text-indigo-300">✓ Role Benchmarking</span>
                                <span className="px-3 py-1.5 bg-zinc-800 rounded-lg text-indigo-300">✓ Leveling Playbooks</span>
                                <span className="px-3 py-1.5 bg-zinc-800 rounded-lg text-indigo-300">✓ Executive Equity Analysis</span>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Final CTA */}
                <ScrollReveal>
                    <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                            Ready to baseline your career market value?
                        </h2>
                        <p className="text-zinc-900 font-semibold max-w-xl mx-auto text-base mb-8">
                            Access CareerWin.ai's career intelligence suite or explore our executive curriculum.
                        </p>
                        <a 
                            href="https://careerwin.ai/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-md transition-all gap-2"
                        >
                            Launch CareerWin.ai Platform <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
}
