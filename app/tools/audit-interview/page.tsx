'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { ArrowRight, Brain, Briefcase, Search } from 'lucide-react';

export default function AuditInterviewLanding() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const startSession = async (role: 'engineering' | 'pm') => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'CREATE_SESSION',
                    role,
                    candidateId: `CAND-${Math.floor(Math.random() * 1000)}`, // Sim
                    interviewerId: 'INT-001'
                })
            });
            const session = await res.json();
            router.push(`/tools/audit-interview/${session.session_id}`);
        } catch (error) {
            alert('Failed to start session');
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto px-4 py-12">
            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-12">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Product Economist | Protocol V2</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
                        Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Interview System.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        A governed execution engine for technical hiring. Quantify judgment, enforce constraints, and generate defensible hiring artifacts.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-2">
                    <GlowCard className="p-8 cursor-pointer group" glowColor="cyan" onClick={() => startSession('engineering')}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-zinc-900 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                <Search size={24} />
                            </div>
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Track 01</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Engineering Audit</h2>
                        <p className="text-zinc-400 text-sm mb-6">
                            Test verification depth, system architecture, and economic awareness under failure conditions.
                        </p>
                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                            Initialize Protocol <ArrowRight size={14} />
                        </div>
                    </GlowCard>

                    <GlowCard className="p-8 cursor-pointer group" glowColor="cobalt" onClick={() => startSession('pm')}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-zinc-900 rounded-xl text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors">
                                <Briefcase size={24} />
                            </div>
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Track 02</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Product Management</h2>
                        <p className="text-zinc-400 text-sm mb-6">
                            Test constraint identification, metric sacrifice, and "willingness to disappoint" stakeholders.
                        </p>
                        <div className="flex items-center gap-2 text-cobalt font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                            Initialize Protocol <ArrowRight size={14} />
                        </div>
                    </GlowCard>
                </div>

                {loading && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="text-emerald-400 font-mono text-xl animate-pulse">
                            Initializing Session Database...
                        </div>
                    </div>
                )}
            </ScrollReveal>
        </div>
    );
}
