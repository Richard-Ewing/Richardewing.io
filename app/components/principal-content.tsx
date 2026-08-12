'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal } from './magicui/scroll-reveal';
import NumberTicker from './magicui/number-ticker';
import { GlowCard } from './magicui/glow-card';
import ShineBorder from './magicui/shine-border';
import Link from 'next/link';

// Simple markdown renderer for AI responses
const renderAIResponse = (text: string) => {
    return text.split('\n').map((line, i) => {
        // Bold text: **text**
        const boldRegex = /\*\*(.+?)\*\*/g;
        const formattedLine = line.replace(boldRegex, '<strong class="text-zinc-950 font-bold">$1</strong>');

        // Bullet points: • or -
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            const bulletContent = line.trim().replace(/^[•-]\s*/, '');
            return (
                <div key={i} className="flex items-start gap-2 mb-2">
                    <span className="text-cyan-900 font-extrabold font-semibold mt-0.5 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bulletContent.replace(boldRegex, '<strong class="text-zinc-950 font-bold">$1</strong>') }} />
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
        } catch (e: any) {
            console.error('AI expand failed', e);
            // Optionally alert if it's a configuration error
            alert("AI Error: " + (e.message || "Failed to connect to AI service."));
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlowCard className="p-6" glowColor={glowColor}>
            <div className="flex items-start gap-4">
                <div className="text-3xl">{icon}</div>
                <div className="flex-1">
                    <div className={`font-mono text-xs font-bold font-medium ${labelColor} uppercase tracking-widest mb-1`}>{label}</div>
                    <h3 className="text-zinc-950 font-bold text-lg mb-2">{title}</h3>
                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-3">{description}</p>

                    <button
                        onClick={askAI}
                        disabled={loading}
                        className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-cyan-900 font-extrabold font-semibold hover:text-zinc-900 transition group"
                    >
                        {loading ? (
                            <>
                                <div className="w-3 h-3 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
                                thinking...
                            </>
                        ) : (
                            <>
                                <span className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center text-[8px] group-hover:bg-cyan-500/40 transition">✦</span>
                                {expanded ? 'Hide Details' : 'Ask AI →'}
                            </>
                        )}
                    </button>

                    {expanded && aiResponse && (
                        <div className="mt-4 pt-4 border-t border-zinc-400 text-sm font-semibold text-zinc-950 leading-relaxed animate-fade-in-up">
                            {renderAIResponse(aiResponse)}
                        </div>
                    )}
                </div>
            </div>
        </GlowCard>
    );
};

export default function PrincipalContent() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Multi-color gradient background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-8 relative overflow-hidden">
                    {/* Subtle animated gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cobalt/10 pointer-events-none" />

                    {/* GEO: Entity Definition Block Schema integrated via wrapping but primarily for visual. Schema is in parent page. */}
                    <div className="relative" id="about-richard-ewing">
                        <span className="font-mono text-cyan-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-[0.3em] mb-6 block">The Principal</span>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
                            <div className="relative group shrink-0">
                                {/* Animated glow ring */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-cobalt to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-zinc-200 border-2 border-zinc-500 overflow-hidden relative">
                                    <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 mb-2">Richard Ewing</h2>
                                <div className="font-mono text-sm font-semibold text-zinc-900 font-medium uppercase tracking-widest mb-4">AI Economist</div>
                                <p className="text-zinc-950 leading-relaxed text-base sm:text-lg">
                                    I operate as <span className="text-zinc-950 font-bold">The AI Economist</span>. I align AI model performance directly with gross margins.
                                </p>
                                <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 italic font-semibold text-base text-zinc-900 my-4 bg-cyan-500/5 rounded-r-xl pr-4">
                                    "I do not manage backlogs. I manage P&Ls. I sit at the exact intersection of CPO thinking, CFO rigor, and CTO reality."
                                </blockquote>
                            </div>
                        </div>

                        {/* Power Stats */}
                        {/* <!-- RESTORE WITH VERIFIED NUMBER --> */}
                    </div>
                </div>
            </ScrollReveal>

            {/* Published In / Authority Badges */}
            <ScrollReveal delay={25}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8">
                    <div className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-4 text-center">Published In & Featured By</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: 'Built In', note: "Editor's Pick", href: 'https://builtin.com/authors/richard-ewing', color: 'text-cyan-900 font-extrabold font-semibold border-cyan-500/30 bg-cyan-500/5' },
                            { name: 'Mind the Product', note: 'Featured Author', href: 'https://www.mindtheproduct.com/profile/richard-ewing', color: 'text-purple-900 font-extrabold font-semibold border-purple-500/30 bg-purple-500/5' },
                            { name: 'HackerNoon', note: 'Contributing Author', href: 'https://hackernoon.com/u/richardewing1', color: 'text-emerald-900 font-extrabold font-semibold border-emerald-500/30 bg-emerald-500/5' },
                            { name: 'Medium', note: 'Author', href: 'https://medium.com/@richardewing', color: 'text-zinc-950 border-zinc-500 bg-white/5' },
                            { name: 'Amazon', note: 'Published Author', href: 'https://www.amazon.com/author/richardewing', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
                            { name: 'AWS Startups', note: 'Showcase Company', href: 'https://aws.amazon.com/startups/showcase/startup-details/3340d267-ae86-4467-8775-4f0e60a3edc5', color: 'text-orange-900 font-extrabold font-semibold border-orange-500/30 bg-orange-500/5' },
                        ].map(pub => (
                            <a
                                key={pub.name}
                                href={pub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex flex-col items-center px-5 py-3 rounded-xl border transition-all hover:scale-105 ${pub.color}`}
                            >
                                <span className="font-bold text-sm">{pub.name}</span>
                                <span className="text-xs font-bold font-medium font-mono uppercase tracking-wider opacity-60 mt-0.5">{pub.note}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* The Thesis */}
            <ScrollReveal delay={50}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-cyan-500">
                    <div className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-3">The Translation Layer</div>
                    <p className="text-2xl sm:text-3xl text-zinc-950 font-bold leading-tight mb-4">
                        "Most executives have two disconnected languages: Tech and Finance."
                    </p>
                    <div className="text-zinc-900 text-base leading-relaxed space-y-4">
                        <div className="grid grid-cols-2 gap-4 my-4 bg-zinc-900/5 p-4 rounded-xl border border-zinc-300">
                            <div>
                                <span className="font-bold text-xs uppercase tracking-wider text-cyan-900 font-mono">Tech Focus</span>
                                <p className="text-xs font-semibold mt-1">velocity, backlog, debt, sprints, architecture</p>
                            </div>
                            <div>
                                <span className="font-bold text-xs uppercase tracking-wider text-purple-900 font-mono">Finance Focus</span>
                                <p className="text-xs font-semibold mt-1">ROI, EBITDA, cash flow, payback, risk</p>
                            </div>
                        </div>
                        <p className="text-sm font-medium">
                            Few people translate cleanly between them. <span className="text-zinc-950 font-bold">That translation layer is where real influence lives.</span> I build the category where product management meets corporate finance and technical reality. My frameworks aren't theoretical: they are <span className="italic font-bold">financial wrappers around technical problems.</span>
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            {/* The Fundamental Flaw */}
            <ScrollReveal delay={75}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-cobalt">
                    <div className="font-mono text-xs font-bold text-cobalt uppercase tracking-widest mb-3">The Fundamental Flaw</div>
                    <p className="text-2xl sm:text-3xl text-zinc-950 font-bold leading-tight mb-4">
                        "You cannot build an autonomous AI being on a foundation that hallucinates and forgets."
                    </p>
                    <div className="text-zinc-900 text-base leading-relaxed space-y-4">
                        <p className="text-sm font-semibold">
                            Everyone is trying to build AGI on top of stochastic text predictors. As we move from basic chat wrappers to autonomous systems taking actions in the real world over the next decade, <span className="font-bold text-zinc-950">admissibility and accountability become existential requirements.</span>
                        </p>
                        <div className="my-4 space-y-2 bg-purple-500/5 p-4 rounded-xl border border-purple-200">
                            <p className="text-xs font-bold text-purple-950">Exogram's Deterministic Approach:</p>
                            <ul className="text-xs font-semibold space-y-1 list-disc pl-4 text-zinc-900">
                                <li><span className="font-bold">Layers 1-2 (Structured Inference):</span> Inject persistent memory to capture immediate value.</li>
                                <li><span className="font-bold">Layers 3-4 (Cryptographic Guardrails):</span> Enforce deterministic execution limits at runtime.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Domain Expertise with AI Expand */}
            <ScrollReveal delay={100}>
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cobalt" /> Domain Expertise
                        <span className="ml-auto text-xs font-bold font-medium font-mono text-cyan-900 font-bold uppercase">✦ AI-Enhanced</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AIExpandCard
                            icon="🎯"
                            label="Capital Auditing"
                            labelColor="text-cyan-900 font-extrabold font-semibold"
                            title="AI Unit Economics & Capital Auditing"
                            description={<>Identifying and eliminating <span className="text-zinc-950 font-bold">AI hallucination debt</span>, zombie infrastructure, and structural margin collapse in B2B SaaS environments.</>}
                            glowColor="cyan"
                            topic="Richard Ewing's methodology for auditing AI unit economics, identifying hallucination debt as a capital liability, and preventing structural margin collapse in enterprise SaaS."
                        />

                        <AIExpandCard
                            icon="🛡️"
                            label="Infrastructure"
                            labelColor="text-cobalt"
                            title="Deterministic AI Infrastructure"
                            description={<>Architecting <span className="text-zinc-950 font-bold">admissibility control planes</span> and state-hashing commit enforcement to prevent autonomous agent liability.</>}
                            glowColor="cobalt"
                            topic="Richard Ewing's work on deterministic AI infrastructure through Exogram, building verification layers that prevent hallucination propagation and ensure admissible AI outputs."
                        />

                        <AIExpandCard
                            icon="📉"
                            label="R&D Efficiency"
                            labelColor="text-gold"
                            title="The Math of Ruin (R&D Efficiency)"
                            description={<>Shifting engineering metrics from shipping velocity to <span className="text-zinc-950 font-bold">Cost of Goods Sold efficiency</span> and gross margin preservation.</>}
                            glowColor="gold"
                            topic="Richard Ewing's framework for measuring engineering productivity through COGS efficiency rather than velocity metrics, preventing the math of ruin in R&D organizations."
                        />

                        <AIExpandCard
                            icon="🔥"
                            label="Turnaround Operations"
                            labelColor="text-red-900 font-extrabold font-semibold"
                            title="Revenue Resurrection Specialist"
                            description={<>Inherited stagnant P&L, drove <span className="text-zinc-950 font-bold">200% YoY growth to $20M</span>. Scaled SaaS from $0 to $25M ARR. <span className="text-gold">$5M cost reduction</span>.</>}
                            glowColor="danger"
                            topic="Richard Ewing's track record as a turnaround executive: scaling B2B SaaS from zero to $25M ARR, driving 200% revenue growth, and executing $5M in strategic cost reductions."
                        />
                    </div>
                </div>
            </ScrollReveal>

            {/* The Methodology */}
            <ScrollReveal delay={150}>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cobalt rounded-full" />
                        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">The Methodology</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 border border-zinc-400 rounded-xl hover:border-cyan-500/30 transition group">
                            <div className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase mb-2">Framework 01</div>
                            <h3 className="text-zinc-950 font-bold mb-2 group-hover:text-cyan-900 font-extrabold font-semibold transition">APER™ Diagnostic</h3>
                            <p className="text-zinc-950 text-sm">Actionable Product Economic Review. Forensic audit of engineering throughput vs. revenue impact.</p>
                        </div>
                        <div className="p-5 border border-zinc-400 rounded-xl hover:border-cobalt/30 transition group">
                            <div className="font-mono text-xs font-bold text-cobalt uppercase mb-2">Framework 02</div>
                            <h3 className="text-zinc-950 font-bold mb-2 group-hover:text-cobalt transition">Q-PEP™ Protocol</h3>
                            <p className="text-zinc-950 text-sm">Qualitative-Profitability Efficiency Protocol. Surgery for unit-economic insolvency.</p>
                        </div>
                        <div className="p-5 border border-zinc-400 rounded-xl hover:border-red-500/30 transition group">
                            <div className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase mb-2">Framework 03</div>
                            <h3 className="text-zinc-950 font-bold mb-2 group-hover:text-red-900 font-extrabold font-semibold transition">Product Debt Index™</h3>
                            <p className="text-zinc-950 text-sm">AI-powered forensic engine to quantify capital leakage in your backlog.</p>
                        </div>
                        <div className="p-5 border border-zinc-400 rounded-xl hover:border-gold/30 transition group">
                            <div className="font-mono text-xs font-bold text-gold uppercase mb-2">Framework 04</div>
                            <h3 className="text-zinc-950 font-bold mb-2 group-hover:text-gold transition">The AI Economist™</h3>
                            <p className="text-zinc-950 text-sm">15+ years of methodology distilled into an executive playbook. <span className="italic">O'Reilly book in progress.</span></p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8">
                    <h2 className="text-lg font-bold text-zinc-950 mb-6 flex items-center gap-3">
                        <span className="w-6 h-0.5 bg-gold" /> Credentials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-zinc-400 rounded-xl hover:border-gold/30 transition group">
                            <div className="font-mono text-xs font-bold text-gold uppercase mb-1">Master of Business Administration</div>
                            <div className="text-zinc-950 font-bold group-hover:text-gold transition">City University of Seattle</div>
                            <div className="text-zinc-950 font-bold text-xs font-bold mt-1">Finance Concentration</div>
                        </div>
                        <div className="p-4 border border-zinc-400 rounded-xl hover:border-cobalt/30 transition group">
                            <div className="font-mono text-xs font-bold text-cobalt uppercase mb-1">Bachelor of Science</div>
                            <div className="text-zinc-950 font-bold group-hover:text-cobalt transition">Computer Science</div>
                            <div className="text-zinc-950 font-bold text-xs font-bold mt-1">Technical Foundation</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={250}>
                <div className="text-center py-8 border-t border-zinc-400">
                    <p className="text-zinc-900 mb-4">Ready to work with a AI Economist?</p>
                    <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                        <Link
                            href="/services"
                            className="inline-block bg-white text-black font-bold uppercase text-sm font-semibold px-10 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            View Intervention Protocols →
                        </Link>
                    </ShineBorder>
                </div>
            </ScrollReveal>
        </div>
    );
}
