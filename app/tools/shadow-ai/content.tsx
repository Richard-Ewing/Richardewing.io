'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import { BorderBeam } from '../../components/magicui/border-beam';
import { ShieldAlert, ArrowRight, ShieldOff, Lock, UserX, Target } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { NewsletterForm } from '../../components/newsletter-form';

// --- PERSONA TYPES ---
type Persona = 'CISO' | 'CTO' | 'CEO' | 'Legal';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'CISO', label: 'CISO/SecOps', icon: ShieldAlert },
    { id: 'CTO', label: 'CTO', icon: Target },
    { id: 'Legal', label: 'General Counsel', icon: Lock },
    { id: 'CEO', label: 'CEO', icon: UserX },
];

export default function ShadowContent() {
    const [persona, setPersona] = useState<Persona>('CISO');
    const [step, setStep] = useState(1);

    // Inputs
    const [employeeCount, setEmployeeCount] = useState(300);
    const [engineeringMix, setEngineeringMix] = useState(40); // % of employees that are engineers
    const [dlpEnforcement, setDlpEnforcement] = useState(20); // %
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    const analyze = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500));

            // Logic:
            // Average enterprise employee without SSO/DLP blocks uses unsanctioned ChatGPT/Claude 3.5 times a week.
            // Engineers use it 15 times a week.
            const unprotectedRatio = (100 - dlpEnforcement) / 100;
            
            const engineers = Math.round(employeeCount * (engineeringMix / 100));
            const nonEngineers = employeeCount - engineers;

            const weeklyEngPrompts = engineers * 15 * unprotectedRatio;
            const weeklyStaffPrompts = nonEngineers * 3.5 * unprotectedRatio;
            
            const totalMonthlyPrompts = Math.round((weeklyEngPrompts + weeklyStaffPrompts) * 4.33);

            // Assume 1 in 100 unstructured prompts contains PII (Socials, PHI, DB Schema, API Keys)
            const piiViolations = Math.round(totalMonthlyPrompts * 0.01);
            
            // Average SOC2 fine / remediation cost per breach incident is massive, let's value a raw PII/Key leakage event at $5,000 in liability risk.
            const financialLiability = piiViolations * 5000;

            let riskTier = 'MODERATE';
            if (financialLiability > 500000) riskTier = 'CRITICAL';
            else if (financialLiability > 100000) riskTier = 'HIGH';

            setResults({
                engineers,
                nonEngineers,
                totalMonthlyPrompts,
                piiViolations,
                financialLiability,
                riskTier,
                dlpEnforcement
            });

        } catch (error: any) {
            console.error(error);
            alert(`Execution failed: ${error.message}`);
        }
        finally { setLoading(false); }
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="SHADOW-AI" />
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Shadow AI Audit</span>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">SOC2 & ISO27001 Violation Audit</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Quantify the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Blast Radius.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                            Paste proprietary database schemas and API keys into a public ChatGPT window and you lose data sovereignty forever. Calculate your organizational exposure to Shadow AI leakage.
                        </p>

                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Auditing from the perspective of...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button key={p.id} onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'}`}
                                    >
                                        <p.icon size={14} /> {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono text-sm border border-amber-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Employee Scale & Mix</h3>
                                            <p className="text-sm text-zinc-500">Define the size of your human attack vector.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-amber-400 uppercase tracking-widest">Total Employee Headcount</label>
                                                <div className="text-2xl font-bold text-white font-mono">{employeeCount}</div>
                                            </div>
                                            <input title="Employees" type="range" min="10" max="5000" step="10" value={employeeCount} onChange={e => setEmployeeCount(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                                        </div>

                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Engineering Weight</label>
                                                <div className="text-2xl font-bold text-white font-mono">{engineeringMix}%</div>
                                            </div>
                                            <input title="Engineering %" type="range" min="5" max="95" step="5" value={engineeringMix} onChange={e => setEngineeringMix(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                            <div className="text-xs font-mono text-zinc-500 mt-2">
                                                Engineers paste codebase syntax into ChatGPT at 5x the rate of marketing.
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
                                        Next: Compliance Gates <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold font-mono text-sm border border-red-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Device Level Protection (DLP)</h3>
                                            <p className="text-sm text-zinc-500">What % of your endpoints explicitly block public LLM URLs through Zscaler/VPNs?</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-mono text-red-400 uppercase tracking-widest">DLP Endpoint Coverage</label>
                                            <div className="text-3xl font-bold text-white font-mono">{dlpEnforcement}%</div>
                                        </div>
                                        <input title="DLP" type="range" min="0" max="100" step="5" value={dlpEnforcement} onChange={e => setDlpEnforcement(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500" />
                                        <div className="text-xs text-zinc-500 mt-4 leading-relaxed font-mono">
                                            If DLP is 0%, all endpoints have unmonitored access to OpenAI, Anthropic, and xAI.
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-all">Back</button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(245, 158, 11, 0.6)" duration={2}>
                                                <button onClick={() => { setShowGate(true); }} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-500 transition-all flex items-center justify-center gap-3">
                                                    {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> SCANNING...</> ) : ( "RUN LIABILITY AUDIT →" )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="Shadow AI Audit" onUnlock={() => { setShowGate(false); analyze(); }}><></></ToolGate>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                <div id="shadow-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Liability Assessment Complete</h2>
                            <p className="text-sm text-zinc-400">Forensic extrapolation of unmonitored intellectual property egress.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="shadow-pdf-export-zone" fileName={`Shadow_AI_Audit_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="shadow-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#f59e0b" colorTo="#ef4444" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Estimated IP Liability (Monthly)</div>
                                        <div className={`text-5xl sm:text-6xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r ${results.riskTier === 'CRITICAL' ? 'from-red-500 to-rose-600' : results.riskTier === 'HIGH' ? 'from-orange-500 to-amber-500' : 'from-yellow-400 to-emerald-400'}`}>
                                            {formatMoney(results.financialLiability)}
                                        </div>
                                        <div className="mt-6">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 ${results.riskTier === 'CRITICAL' ? 'bg-red-900/30 text-red-500 border border-red-900/50' : 'bg-amber-900/30 text-amber-500 border border-amber-900/50'}`}>
                                                <ShieldAlert size={12}/> {results.riskTier} RISK: {results.piiViolations} PROBABLE PII BREACHES / MO
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                                            With {100 - results.dlpEnforcement}% of your workforce ungoverned, your employees are sending roughly <strong className="text-white">{results.totalMonthlyPrompts.toLocaleString()} unsanctioned webhook payloads</strong> to external LLM providers every month. 
                                        </p>
                                    </div>
                                    <div>
                                        <div className="bg-black/50 p-6 rounded-2xl border border-white/5 space-y-4">
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3 mb-3">Attack Surface Breakdown</div>
                                            <div className="flex justify-between items-center pb-2">
                                                <span className="text-sm text-zinc-400">Engineering Endpoints</span>
                                                <span className="text-sm font-mono text-blue-400">{results.engineers}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                <span className="text-sm text-zinc-400">Standard Staff Endpoints</span>
                                                <span className="text-sm font-mono text-indigo-400">{results.nonEngineers}</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2">
                                                <span className="text-xs font-mono text-rose-500">Unmitigated Payload Count</span>
                                                <span className="text-lg font-mono font-bold text-white">{results.totalMonthlyPrompts.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                             <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-6 border border-white/10 mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldOff size={16} className="text-amber-400" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">The Enterprise Mandate</span>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                                    You cannot train engineers not to use ChatGPT—it is a 10x multiplier on velocity. The only SOC2-compliant solution is deploying a local, private SLM enclave (Llama 3) inside your VPC, giving them an API endpoint that guarantees zero-data-retention.
                                </p>
                                <div className="space-y-3">
                                    <div className="text-sm text-white font-semibold mb-2">Book a Due Diligence Partner to secure your perimeter:</div>
                                    <NewsletterForm buttonText="Deploy Private LLM Enclave" extraData={{ tool: 'SHADOW_AI', liability: results.financialLiability }} />
                                </div>
                            </div>

                            <div className="flex justify-center flex-wrap gap-6 pt-6 border-t border-white/10" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-500 font-mono tracking-widest text-xs hover:text-white uppercase transition-colors">← Recalibrate Matrix</button>
                                <Link href="/advisory" className="text-amber-400 font-mono tracking-widest text-xs hover:text-amber-300 uppercase transition-colors flex items-center gap-1">Advisory Services <ArrowRight size={12}/></Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
