'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { NumberTicker } from '../components/magicui/number-ticker';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';
import Link from 'next/link';

// Simple markdown renderer for AI responses
const renderAIResponse = (text: string) => {
    return text.split('\n').map((line, i) => {
        // Bold text: **text**
        const boldRegex = /\*\*(.+?)\*\*/g;
        let formattedLine = line.replace(boldRegex, '<strong class="text-white font-bold">$1</strong>');

        // Bullet points: • or -
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            const bulletContent = line.trim().replace(/^[•-]\s*/, '');
            return (
                <div key={i} className="flex items-start gap-2 mb-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bulletContent.replace(boldRegex, '<strong class="text-white font-bold">$1</strong>') }} />
                </div>
            );
        }

        // Empty lines
        if (!line.trim()) return <div key={i} className="h-2" />;

        // Regular lines with bold parsing
        return <p key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    });
};

// AI Expandable Card Component
const AIExpandCard = ({
    icon,
    label,
    labelColor,
    title,
    description,
    glowColor,
    topic
}: {
    icon: string;
    label: string;
    labelColor: string;
    title: string;
    description: React.ReactNode;
    glowColor: 'cyan' | 'cobalt' | 'gold' | 'danger';
    topic: string;
}) => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState('');

    const askAI = async () => {
        if (aiResponse) {
            setExpanded(!expanded);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/expand', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: title, context: topic })
            });
            const data = await res.json();
            if (data.response) {
                setAiResponse(data.response);
                setExpanded(true);
            }
        } catch (e) {
            console.error('AI expand failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlowCard className="p-6" glowColor={glowColor}>
            <div className="flex items-start gap-4">
                <div className="text-3xl">{icon}</div>
                <div className="flex-1">
                    <div className={`font-mono text-[10px] ${labelColor} uppercase tracking-widest mb-1`}>{label}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">{description}</p>

                    <button
                        onClick={askAI}
                        disabled={loading}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-white transition group"
                    >
                        {loading ? (
                            <>
                                <div className="w-3 h-3 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
                                Thinking...
                            </>
                        ) : (
                            <>
                                <span className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center text-[8px] group-hover:bg-cyan-500/40 transition">✦</span>
                                {expanded ? 'Hide Details' : 'Ask AI →'}
                            </>
                        )}
                    </button>

                    {expanded && aiResponse && (
                        <div className="mt-4 pt-4 border-t border-white/10 text-sm text-zinc-300 leading-relaxed animate-fade-in-up">
                            {renderAIResponse(aiResponse)}
                        </div>
                    )}
                </div>
            </div>
        </GlowCard>
    );
};

export default function PrincipalPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Multi-color gradient background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-8 relative overflow-hidden">
                    {/* Subtle animated gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cobalt/10 pointer-events-none" />

                    <div className="relative">
                        <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em] mb-6 block">The Principal</span>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
                            <div className="relative group shrink-0">
                                {/* Animated glow ring */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-cobalt to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-zinc-800 border-2 border-white/20 overflow-hidden relative">
                                    <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Richard Ewing</h1>
                                <div className="font-mono text-sm text-cyan-400 uppercase tracking-widest mb-4">Product Economist</div>
                                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                                    The executive who <span className="text-white font-bold">turns bleeding product organizations into profit engines</span>.
                                    I don't manage backlogs—I manage P&Ls. I don't ship features—I ship ROI.
                                </p>
                            </div>
                        </div>

                        {/* Power Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-8">
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">
                                    <NumberTicker value={25} prefix="$" suffix="M" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">ARR Scaled</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-white">
                                    <NumberTicker value={7} suffix="M+" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Users Migrated</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-cobalt">
                                    <NumberTicker value={5} prefix="$" suffix="M" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Cost Reduced</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-gold">
                                    <NumberTicker value={200} suffix="%" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Revenue Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* The Thesis */}
            <ScrollReveal delay={50}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-cyan-500">
                    <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">The Thesis</div>
                    <p className="text-2xl sm:text-3xl text-white font-bold leading-tight mb-4">
                        "Innovation without Operation<br />is Hallucination."
                    </p>
                    <p className="text-zinc-400 text-base leading-relaxed">
                        Engineering speaks velocity. The C-Suite speaks P&L. When these languages fail to connect,
                        you get features that don't sell and roadmaps that don't ship. <span className="text-white font-semibold">I am the translation layer.</span>
                    </p>
                </div>
            </ScrollReveal>

            {/* Domain Expertise with AI Expand */}
            <ScrollReveal delay={100}>
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cobalt" /> Domain Expertise
                        <span className="ml-auto text-[10px] font-mono text-cyan-400/50 uppercase">✦ AI-Enhanced</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AIExpandCard
                            icon="🏛️"
                            label="Public Sector"
                            labelColor="text-cyan-400"
                            title="Government-Scale Digital Transformation"
                            description={<>Led infrastructure overhaul serving <span className="text-white font-bold">7.7 million citizens</span>. Zero-downtime cloud migration. <span className="text-gold">Governor's Award Recipient</span>.</>}
                            glowColor="cyan"
                            topic="Richard Ewing's experience leading digital transformation for state government serving millions of citizens, including cloud migration and receiving the Governor's Award."
                        />

                        <AIExpandCard
                            icon="💼"
                            label="Professional Services"
                            labelColor="text-cobalt"
                            title="Top-10 Accounting Firm Modernization"
                            description={<>Orchestrated <span className="text-white font-bold">$5M strategic cost reduction</span> via Azure migration. Built 16-person product org from ground up. Doubled velocity.</>}
                            glowColor="cobalt"
                            topic="Richard Ewing's experience as Group Product Manager at a Top-10 accounting firm, driving $5M cost reduction through Azure cloud migration and building a high-performance product organization."
                        />

                        <AIExpandCard
                            icon="🚀"
                            label="Venture-Backed Startups"
                            labelColor="text-gold"
                            title="0-to-1 Product Leadership"
                            description={<>Scaled ERP SaaS from <span className="text-white font-bold">$0 to $25M ARR</span>. Slashed churn 20%. Defined industry standard for enterprise utility platforms.</>}
                            glowColor="gold"
                            topic="Richard Ewing's experience scaling enterprise SaaS products from zero to $25M ARR, reducing churn, and defining product governance standards."
                        />

                        <AIExpandCard
                            icon="🔥"
                            label="Turnaround Operations"
                            labelColor="text-red-400"
                            title="Revenue Resurrection Specialist"
                            description={<>Inherited stagnant P&L, drove <span className="text-white font-bold">200% YoY growth to $20M</span>. Consolidated 4 siloed teams. Improved retention 40%.</>}
                            glowColor="danger"
                            topic="Richard Ewing's experience as a turnaround executive, taking over stagnant P&Ls and driving 200% revenue growth through operational restructuring."
                        />
                    </div>
                </div>
            </ScrollReveal>

            {/* The Methodology */}
            <ScrollReveal delay={150}>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cobalt rounded-full" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white">The Methodology</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition group">
                            <div className="font-mono text-xs text-cyan-400 uppercase mb-2">Framework 01</div>
                            <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition">APER™ Diagnostic</h3>
                            <p className="text-zinc-500 text-sm">Actionable Product Economic Review. Forensic audit of engineering throughput vs. revenue impact.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-cobalt/30 transition group">
                            <div className="font-mono text-xs text-cobalt uppercase mb-2">Framework 02</div>
                            <h3 className="text-white font-bold mb-2 group-hover:text-cobalt transition">Q-PEP™ Protocol</h3>
                            <p className="text-zinc-500 text-sm">Qualitative-Profitability Efficiency Protocol. Surgery for unit-economic insolvency.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-red-500/30 transition group">
                            <div className="font-mono text-xs text-red-400 uppercase mb-2">Framework 03</div>
                            <h3 className="text-white font-bold mb-2 group-hover:text-red-400 transition">Product Debt Index™</h3>
                            <p className="text-zinc-500 text-sm">AI-powered forensic engine to quantify capital leakage in your backlog.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-gold/30 transition group">
                            <div className="font-mono text-xs text-gold uppercase mb-2">Framework 04</div>
                            <h3 className="text-white font-bold mb-2 group-hover:text-gold transition">The Product Economist™</h3>
                            <p className="text-zinc-500 text-sm">15+ years of methodology distilled into an executive playbook. <span className="italic">O'Reilly book in progress.</span></p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-6 h-0.5 bg-gold" /> Credentials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-white/10 rounded-xl hover:border-gold/30 transition group">
                            <div className="font-mono text-xs text-gold uppercase mb-1">Master of Business Administration</div>
                            <div className="text-white font-bold group-hover:text-gold transition">City University of Seattle</div>
                            <div className="text-zinc-600 text-xs mt-1">Finance Concentration</div>
                        </div>
                        <div className="p-4 border border-white/10 rounded-xl hover:border-cobalt/30 transition group">
                            <div className="font-mono text-xs text-cobalt uppercase mb-1">Bachelor of Science</div>
                            <div className="text-white font-bold group-hover:text-cobalt transition">Computer Science</div>
                            <div className="text-zinc-600 text-xs mt-1">Technical Foundation</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={250}>
                <div className="text-center py-8 border-t border-white/10">
                    <p className="text-zinc-400 mb-4">Ready to work with a Product Economist?</p>
                    <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                        <Link
                            href="/advisory"
                            className="inline-block bg-white text-black font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            View Intervention Protocols →
                        </Link>
                    </ShineBorder>
                </div>
            </ScrollReveal>
        </div>
    );
}
