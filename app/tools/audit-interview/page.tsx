'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Cpu, Activity, Zap, CheckCircle, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';

export default function ProtocolInitialization() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const startAudit = async (role: 'engineering' | 'pm') => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    role,
                    candidateId: 'CANDIDATE-' + Math.floor(Math.random() * 10000)
                    // Universal Gauntlet active
                })
            });
            const data = await res.json();
            if (data.sessionId) {
                router.push(`/tools/audit-interview/${data.sessionId}`);
            }
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Fiduciary Protocol</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">

                    {/* STATUS BADGE */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">PROTOCOL V3 | SYSTEM OPERATIONAL</span>
                    </div>

                    {/* HEADLINE */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                        Assess <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">Judgment, Not Syntax.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                        The industry standard for auditing <strong>Technical & Capital Judgment</strong> in the age of AI.
                        Select a track to initialize the Universal Calibration Gauntlet.
                    </p>

                    {/* TRACK SELECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                        {/* ENGINEERING TRACK */}
                        <GlowCard className="p-8 h-full flex flex-col justify-between group cursor-default" glowColor="cyan">
                            <div>
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Cpu className="text-emerald-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Engineering</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    <strong>For Senior+ Engineers & Architects.</strong><br /><br />
                                    Evaluates system design judgment, technical leadership, and ability to balance <strong>Capital Efficiency</strong> vs. <strong>Maintenance Liability</strong>.
                                    Can they prevent technical insolvency at scale?
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['ARCHITECTURE', 'SYSTEMS', 'COST'].map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ShineBorder borderColor="rgba(52, 211, 153, 0.6)" duration={3}>
                                <button
                                    onClick={() => startAudit('engineering')}
                                    disabled={loading}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'INITIALIZING...' : (
                                        <>START PROTOCOL <ArrowRight size={14} /></>
                                    )}
                                </button>
                            </ShineBorder>
                        </GlowCard>

                        {/* PRODUCT TRACK */}
                        <GlowCard className="p-8 h-full flex flex-col justify-between group cursor-default" glowColor="purple">
                            <div>
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Target className="text-indigo-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Product Management</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    <strong>For PMs, Group PMs, and Directors.</strong><br /><br />
                                    Assess for <strong>Unit Economics</strong>, <strong>Strategic Governance</strong>, and product sense.
                                    Do they understand where value really comes from, or are they just shipping features?
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['STRATEGY', 'ECONOMICS', 'LEVERAGE'].map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] font-mono text-indigo-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ShineBorder borderColor="rgba(168, 85, 247, 0.6)" duration={3}>
                                <button
                                    onClick={() => startAudit('pm')}
                                    disabled={loading}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-indigo-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'INITIALIZING...' : (
                                        <>START PROTOCOL <ArrowRight size={14} /></>
                                    )}
                                </button>
                            </ShineBorder>
                        </GlowCard>

                    </div>

                </div>
            </ScrollReveal>

            {/* AUTHORITY CONTENT */}
            <div className="max-w-3xl mx-auto mt-24 mb-24 text-center">
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6">Universal Calibration Standard</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Just keeping simple text placeholders for 'logos' to keep it clean */}
                    {['Google', 'Amazon', 'Stripe', 'Anthropic'].map(corp => (
                        <div key={corp} className="text-zinc-400 font-bold text-lg">{corp}</div>
                    ))}
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 animate-pulse">
                        <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        <div className="font-mono text-sm uppercase tracking-widest text-emerald-500">Constructing Calibration Environment...</div>
                    </div>
                </div>
            )}
        </div>
    );
}
