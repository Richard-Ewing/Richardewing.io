'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Cpu, Activity, Zap, CheckCircle } from 'lucide-react';

// LEVELS REMOVED - UNIVERSAL PROTOCOL ACTIVE

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
                    // No level sent - backend defaults to Universal Gauntlet
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
        <div className="min-h-screen bg-[#0a0c10] text-[#f0f6fc] font-sans selection:bg-[#58a6ff]/30 flex flex-col">

            {/* HEADER */}
            <div className="px-10 py-5 border-b border-[#30363d] flex justify-between items-center bg-[#0a0c10]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="font-mono font-bold tracking-tight text-lg">
                    PRODUCT ECONOMIST <span className="text-[#58a6ff]">// PROTOCOL</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#238636]/10 border border-[#238636]/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#238636] animate-pulse"></div>
                    <span className="text-[10px] font-bold text-[#3fb950] tracking-widest">SYSTEM OPERATIONAL</span>
                </div>
            </div>

            {/* STAGE */}
            <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-10 gap-20 max-w-7xl mx-auto w-full">

                {/* CONTEXT PANE */}
                <div className="flex-1 max-w-lg space-y-8 animate-in slide-in-from-left-6 duration-700">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8b949e]">
                        Assess<br />Judgment,<br />Not Syntax.
                    </h1>
                    <p className="text-[#8b949e] text-lg leading-relaxed">
                        The industry standard for auditing <strong className="text-[#f0f6fc]">Technical & Capital Judgment</strong> in the age of AI.
                        Select a protocol to begin the calibration.
                    </p>

                    <div className="flex gap-12 pt-4 border-t border-[#30363d]/50">
                        <div>
                            <div className="font-mono text-3xl font-bold text-[#f0f6fc]">12,408</div>
                            <div className="text-[10px] text-[#8b949e] uppercase tracking-widest font-bold mt-1">Audits Run</div>
                        </div>
                        <div>
                            <div className="font-mono text-3xl font-bold text-[#f0f6fc]">$4.2B</div>
                            <div className="text-[10px] text-[#8b949e] uppercase tracking-widest font-bold mt-1">Capital Risk Detected</div>
                        </div>
                    </div>
                </div>

                {/* MATRIX PANE */}
                <div className="flex-1 max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-right-6 duration-700 delay-150">

                    {/* UNIVERSAL PROTOCOL HEADER */}
                    <div className="md:col-span-2 p-5 text-[#8b949e] font-mono text-sm border-b border-[#30363d] mb-4">
                        &gt; INITIALIZING UNIVERSAL PROTOCOL...<br />
                        &gt; CALIBRATION MODE: ACTIVE<br />
                        &gt; TARGET: LEVEL DETERMINATION (L3 - L8)
                    </div>

                    {/* ENG CARD */}
                    <button
                        onClick={() => startAudit('engineering')}
                        disabled={loading}
                        className="group relative bg-[#161b22] border border-[#30363d] rounded-xl p-8 hover:-translate-y-1 hover:border-[#238636] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all text-left disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">⚙️</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#238636] transition-colors">Engineering Audit</h3>
                        <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                            Test for Verification Depth and Capital Efficiency in AI-generated codebases.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['VERIFICATION', 'ARCHITECTURE', 'COST'].map(tag => (
                                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-[#8b949e] border border-transparent group-hover:border-[#238636]/30 group-hover:bg-[#238636]/10 group-hover:text-[#3fb950] transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </button>

                    {/* PM CARD */}
                    <button
                        onClick={() => startAudit('pm')}
                        disabled={loading}
                        className="group relative bg-[#161b22] border border-[#30363d] rounded-xl p-8 hover:-translate-y-1 hover:border-[#a371f7] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all text-left disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#a371f7] transition-colors">Value Audit</h3>
                        <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                            Test for Unit Economics, Roadmap Governance, and "Willingness to Kill."
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['ECONOMICS', 'STRATEGY', 'LEVERAGE'].map(tag => (
                                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-[#8b949e] border border-transparent group-hover:border-[#a371f7]/30 group-hover:bg-[#a371f7]/10 group-hover:text-[#d2a8ff] transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </button>

                </div>
            </main>

            {loading && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 animate-pulse">
                        <div className="w-12 h-12 border-2 border-[#58a6ff] border-t-transparent rounded-full animate-spin"></div>
                        <div className="font-mono text-sm uppercase tracking-widest text-[#58a6ff]">Calibrating Protocol Level...</div>
                    </div>
                </div>
            )}
        </div>
    );
}
