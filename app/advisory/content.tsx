'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';
import NumberTicker from '../components/magicui/number-ticker';

export default function AdvisoryContent() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intervention</span><span>/</span><span className="text-crimson font-bold">Advisory</span>
            </div>

            {/* Hero */}
            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

                    <div className="relative">
                        {/* Urgency Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-crimson uppercase tracking-widest">Limited Availability • Q1 2026</span>
                        </div>

                        <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4 block">Access Levels</span>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-grotesk font-bold text-white tracking-tight leading-tight mb-4">
                            Intervention<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Protocols.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
                            I sell truth, not hours. These are surgical interventions designed to stop the bleeding and install permanent capital discipline.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums"><NumberTicker value={200} suffix="%" /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Avg Revenue Lift</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums"><NumberTicker value={14} /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Days to Diagnosis</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-gold tabular-nums"><NumberTicker value={9} suffix="x" /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Avg ROI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Service Levels */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 gap-6 mb-12">

                    {/* Level 1: Diagnostic Call */}
                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white font-grotesk">Diagnostic Call</h3>
                            <span className="text-2xl font-bold text-cyan-400 font-mono">$450</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-4">
                            30-Minute Rapid Assessment. You describe the situation, I tell you if it's on fire. No pitch, just triage.
                        </p>
                        <a href="/api/buy/gut_check" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase text-xs py-3 rounded hover:bg-cyan-500/20 transition-all">
                            Book Diagnostic
                        </a>
                    </GlowCard>

                    {/* Level 2: Insolvency Diagnostic */}
                    <GlowCard className="p-6 sm:p-8 relative overflow-hidden" glowColor="red">
                        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-bl-lg">
                            Most Critical
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white font-grotesk">Insolvency Diagnostic</h3>
                            <span className="text-2xl font-bold text-red-500 font-mono">$2,500</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-4">
                            60-minute deep dive. Includes written Risk Exposure Report detailing red/yellow/green flags across 5 failure modes.
                        </p>
                        <a href="/api/buy/insolvency_diagnostic" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-red-600 text-white font-bold uppercase text-xs py-3 rounded hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                            Schedule Deep Dive
                        </a>
                        <div className="mt-4 pt-3 border-t border-white/10 text-center">
                            <span className="text-zinc-500 text-[10px] uppercase tracking-wide block mb-1">Not ready for deep dive?</span>
                            <a href="/api/buy/gut_check" target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 hover:text-white transition-colors underline decoration-dotted">
                                Start with a 30-min Gut-Check ($450) →
                            </a>
                        </div>
                    </GlowCard>

                    {/* Level 3: R&D Capital Audit */}
                    <GlowCard className="p-6 sm:p-8" glowColor="cobalt">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white font-grotesk">R&D Capital Audit</h3>
                            <span className="text-2xl font-bold text-white font-mono">$7,500</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-4">
                            Full forensic review of engineering spend vs. ROI. 2-3 week engagement delivering a complete Audit Package and Turnaround Plan.
                        </p>
                        <a href="/api/buy/full_audit" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/5 border border-white/10 text-white font-bold uppercase text-xs py-3 rounded hover:bg-white/10 transition-all">
                            Commission Audit
                        </a>
                    </GlowCard>

                    {/* Level 4: AI Cost Governance */}
                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white font-grotesk">AI Cost Governance</h3>
                            <span className="text-2xl font-bold text-cyan-400 font-mono">$5,000</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-4">
                            Dedicated AI economics analysis. Unit economics model, collapse point calculation, and margin protection framework.
                        </p>
                        <a href="/api/buy/ai_cost_governance" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase text-xs py-3 rounded hover:bg-cyan-500/20 transition-all">
                            Secure Governance
                        </a>
                    </GlowCard>

                    {/* Level 5: Retainer */}
                    <GlowCard className="p-6 sm:p-8" glowColor="gold">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                            <h3 className="text-xl font-bold text-white font-grotesk">Independent Oversight</h3>
                            <span className="text-2xl font-bold text-gold font-mono">$5,000<span className="text-sm text-zinc-500">/mo</span></span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-4">
                            Board-level economic sanity checks. Asynchronous access for critical buy/build/kill decisions. Minimum 3-month commitment.
                            <br /><br />
                            <span className="text-gold/80 italic text-xs">Engagements are scoped against measurable capital outcomes.</span>
                        </p>
                        <a href="/api/buy/retainer" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gold/10 border border-gold/20 text-gold font-bold uppercase text-xs py-3 rounded hover:bg-gold/20 transition-all">
                            Initialize Retainer
                        </a>
                    </GlowCard>
                </div>
            </ScrollReveal>

            {/* AEO: FAQ Section */}
            <ScrollReveal delay={150}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-white/20">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">Common Questions <span className="text-zinc-500 text-lg font-normal">Answered</span></h2>
                    <div className="space-y-6">
                        <div itemScope itemType="https://schema.org/Question">
                            <h3 itemProp="name" className="text-lg font-bold text-white mb-2">How much does an R&D audit cost?</h3>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p itemProp="text" className="text-zinc-400 text-sm leading-relaxed">
                                    Richard Ewing offers R&D audits starting at <span className="text-white font-bold">$2,500</span> for a 60-minute diagnostic with written report, up to <span className="text-white font-bold">$7,500</span> for a full 2-3 week forensic review. A 30-minute gut-check call is available for $450.
                                </p>
                            </div>
                        </div>
                        <div itemScope itemType="https://schema.org/Question">
                            <h3 itemProp="name" className="text-lg font-bold text-white mb-2">What is the difference between consulting and auditing?</h3>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p itemProp="text" className="text-zinc-400 text-sm leading-relaxed">
                                    Consulting asks "how can we improve?" Auditing asks "what's actually true?" Consultants optimize. Auditors verify. An R&D audit surfaces the facts — the real maintenance ratio, the true technical debt liability, the actual AI unit economics — without assuming the current approach is correct.
                                </p>
                            </div>
                        </div>
                        <div itemScope itemType="https://schema.org/Question">
                            <h3 itemProp="name" className="text-lg font-bold text-white mb-2">How should I prepare before an engagement?</h3>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p itemProp="text" className="text-zinc-400 text-sm leading-relaxed">
                                    Take the free{' '}
                                    <a href="https://anthropic.skilljar.com/ai-fluency-framework-foundations" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors underline decoration-dotted">AI Fluency</a>{' '}
                                    and{' '}
                                    <a href="https://anthropic.skilljar.com/claude-101" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors underline decoration-dotted">Claude 101</a>{' '}
                                    courses from Anthropic Academy. They establish the AI governance vocabulary we&apos;ll use during the audit. View{' '}
                                    <a href="/resources/ai-courses" className="text-cyan-400 hover:text-white transition-colors underline decoration-dotted">all 15 curated courses</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Tools CTA Cross-sell */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-6 border-l-4 border-cyan-500">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">Not Ready for Paid?</div>
                            <h3 className="text-xl font-bold text-white font-grotesk">Run a Free Self-Diagnostic</h3>
                            <p className="text-zinc-400 text-sm mt-2">(Newsletter + Tools)</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-cyan-400 transition-colors">
                                Subscribe Free
                            </a>
                            <Link href="/tools" className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/10 transition-colors">
                                Access Tools
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Board & Fractional Leadership */}
            <ScrollReveal delay={300} className="mt-16 border-t border-white/10 pt-16 mb-20">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Board & Fractional Leadership</h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                For Series B+ companies requiring sustained intervention. I serve as a fractional CPO or Independent Board Director to oversee the implementation of capital efficiency protocols and AI governance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="mailto:richardewing@exogram.ai?subject=Board%20Inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-white transition-all">
                                    Request Board Bio
                                </a>
                                <Link href="/manifesto" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/10 transition-all">
                                    Read Operating Principles
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <GlowCard className="p-6 bg-black/50" glowColor="gold">
                                <div className="text-xs font-mono text-gold uppercase tracking-widest mb-2">Capacity</div>
                                <div className="text-3xl font-bold text-white font-grotesk mb-1">1 Slot</div>
                                <div className="text-sm text-zinc-500 mb-4">Remaining for Q1 2026</div>
                                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-gold rounded-full" />
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
