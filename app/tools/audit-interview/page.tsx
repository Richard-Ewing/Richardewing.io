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
                    action: 'START_SESSION', // FIXED: Added missing action
                    role,
                    candidateId: 'CANDIDATE-' + Math.floor(Math.random() * 10000)
                })
            });
            const data = await res.json();

            if (data.error) {
                alert("Protocol Init Error: " + data.error);
                setLoading(false);
                return;
            }

            if (data.sessionId) {
                router.push(`/tools/audit-interview/${data.sessionId}`);
            }
        } catch (e) {
            console.error(e);
            alert("Network Error: Failed to reach Audit Core.");
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto px-4 pb-24">

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Fiduciary Protocol</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden">

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
                    <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                        The industry standard for auditing <strong>Technical & Capital Judgment</strong> in the age of AI.
                        Select a track to initialize the Universal Calibration Gauntlet.
                    </p>

                    {/* TRACK SELECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

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


                    {/* --- SYSTEM DOCTRINE (Why Now) --- */}
                    <div className="py-20 border-t border-white/5 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#0a0a0a] text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">System Doctrine</div>

                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Signal Has Collapsed.</h2>
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                                AI generates syntax for free. LeetCode measures memorization. Traditional interviews are optimizing for a commodity.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left">
                                <p className="text-zinc-300 leading-relaxed font-mono text-sm md:text-base">
                                    We must stop testing for <strong className="text-white">Construction</strong> (writing code) and start testing for <strong className="text-white">Verification</strong> (auditing code).
                                    <br /><br />
                                    The Fiduciary Protocol™ measures the only three signals that remain scarce: <span className="text-emerald-400 border-b border-emerald-500/50">Skepticism</span>, <span className="text-emerald-400 border-b border-emerald-500/50">System Thinking</span>, and <span className="text-emerald-400 border-b border-emerald-500/50">Capital Stewardship</span>.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* --- THE GAUNTLET (Methodology) --- */}
                    <div className="py-20 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-white mb-2">The 5-Phase Calibration Standard</h3>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Every candidate runs the same simulation</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {[
                                { id: '01', title: 'The Signal', desc: 'Detect ambiguity in metrics before touching code.', color: 'emerald' },
                                { id: '02', title: 'The Audit', desc: 'Verify AI artifacts for "Subprime" debt and toxicity.', color: 'cyan' },
                                { id: '03', title: 'The Triage', desc: 'Prioritize "Uptime" vs "Revenue" under fire.', color: 'indigo' },
                                { id: '04', title: 'The Arch.', desc: 'Predict second-order effects of architectural changes.', color: 'violet' },
                                { id: '05', title: 'The Defense', desc: 'Defend capital allocation against hostile stakeholders.', color: 'rose' },
                            ].map((phase) => (
                                <div key={phase.id} className="p-6 bg-[#0f1115] border border-white/10 rounded-xl hover:border-white/20 transition-all hover:-translate-y-1 group">
                                    <div className={`text-4xl font-mono font-bold text-white/10 mb-4 group-hover:text-${phase.color}-500/20 transition-colors`}>{phase.id}</div>
                                    <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">{phase.title}</div>
                                    <div className="text-xs text-zinc-500 leading-relaxed h-16">{phase.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* --- UNIVERSAL LEVELING MATRIX (Outcome) --- */}
                    <div className="py-20 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-white mb-2">Universal Leveling Matrix (L3 - L8)</h3>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Google-grade Assessment Standard</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-zinc-500 text-xs uppercase tracking-widest">
                                        <th className="py-4 px-6">Level</th>
                                        <th className="py-4 px-6">Designation</th>
                                        <th className="py-4 px-6">Primary Signal Detected</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { l: 'L3', d: 'Associate', s: 'Syntax Logic. Can they identify why the code is broken?' },
                                        { l: 'L4', d: 'Product Eng.', s: 'Feature Scope. Can they ship without breaking UX?' },
                                        { l: 'L5', d: 'Senior', s: 'Unit Economics. Can they prevent "Cloud Shock"?' },
                                        { l: 'L6', d: 'Staff', s: 'System Solvency. Can they prevent collapse at scale?' },
                                        { l: 'L8', d: 'Principal', s: 'Capital Governance. Can they align engineering with EV?' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                                            <td className="py-4 px-6 font-bold text-white group-hover:text-emerald-400 transition-colors">{row.l}</td>
                                            <td className="py-4 px-6 text-zinc-300">{row.d}</td>
                                            <td className="py-4 px-6 text-zinc-400">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </ScrollReveal>

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
