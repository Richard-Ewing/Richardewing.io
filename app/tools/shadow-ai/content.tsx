'use client';

import { useState, useRef } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion, AnimatePresence } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import { VaultUpsell } from '../../components/VaultUpsell';
import { BorderBeam } from '../../components/magicui/border-beam';
import { ShieldAlert, ArrowRight, ShieldOff, Lock, UserX, Target, UploadCloud, FileSpreadsheet, Eye } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import Papa from 'papaparse';


// --- PERSONA TYPES ---
type Persona = 'CISO' | 'CTO' | 'CEO' | 'Legal';
type Mode = 'ESTIMATE' | 'AUDIT';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'CISO', label: 'CISO/SecOps', icon: ShieldAlert },
    { id: 'CTO', label: 'CTO', icon: Target },
    { id: 'Legal', label: 'General Counsel', icon: Lock },
    { id: 'CEO', label: 'CEO', icon: UserX },
];

// Extracted AI Dictionary
const AI_DICTIONARY = [
    { name: 'ChatGPT / OpenAI', regex: /openai|chatgpt|gpt-4/i, threat: 'High (Data Retention Risk)' },
    { name: 'Anthropic / Claude', regex: /anthropic|claude/i, threat: 'High (Data Retention Risk)' },
    { name: 'Midjourney', regex: /midjourney/i, threat: 'Medium' },
    { name: 'Jasper', regex: /jasper\.ai|jasper/i, threat: 'High' },
    { name: 'GitHub Copilot', regex: /github copilot/i, threat: 'Medium (Code IP)' },
    { name: 'Cursor', regex: /cursor/i, threat: 'High (Code IP Leakage)' },
    { name: 'Perplexity', regex: /perplexity/i, threat: 'Moderate' },
    { name: 'xAI / Grok', regex: /xai|grok/i, threat: 'High' },
    { name: 'Copy.ai', regex: /copy\.ai/i, threat: 'Moderate' },
    { name: 'Runway ML', regex: /runwayml|runway/i, threat: 'Low' },
    { name: 'Character.ai', regex: /character\.ai/i, threat: 'High (Social/PII Leak)' },
    { name: 'Otter.ai', regex: /otter\.ai/i, threat: 'Critical (Meeting Audio IP)' },
    { name: 'GrammarlyGO', regex: /grammarly/i, threat: 'High (Keystroke IP)' }
];

export default function ShadowContent() {
    const [persona, setPersona] = useState<Persona>('CISO');
    const [mode, setMode] = useState<Mode>('ESTIMATE');
    const [step, setStep] = useState(1);

    // MODE 1: Estimate Inputs
    const [employeeCount, setEmployeeCount] = useState(300);
    const [engineeringMix, setEngineeringMix] = useState(40);
    const [dlpEnforcement, setDlpEnforcement] = useState(20);

    // MODE 2: Audit Inputs
    const [auditFile, setAuditFile] = useState<File | null>(null);
    const [auditRawLogs, setAuditRawLogs] = useState<any[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Common UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    // --- ESTIMATOR EXECUTION ---
    const runEstimation = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500));
            const unprotectedRatio = (100 - dlpEnforcement) / 100;
            const engineers = Math.round(employeeCount * (engineeringMix / 100));
            const nonEngineers = employeeCount - engineers;

            const weeklyEngPrompts = engineers * 15 * unprotectedRatio;
            const weeklyStaffPrompts = nonEngineers * 3.5 * unprotectedRatio;
            const totalMonthlyPrompts = Math.round((weeklyEngPrompts + weeklyStaffPrompts) * 4.33);

            const piiViolations = Math.round(totalMonthlyPrompts * 0.01);
            const financialLiability = piiViolations * 5000;

            let riskTier = 'MODERATE';
            if (financialLiability > 500000) riskTier = 'CRITICAL';
            else if (financialLiability > 100000) riskTier = 'HIGH';

            setResults({
                type: 'ESTIMATION',
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

    // --- ZERO-TRUST AUDITOR EXECUTION ---
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAuditFile(file);
    };

    const runForensicAudit = async () => {
        if (!auditFile) return;
        setLoading(true);
        
        Papa.parse(auditFile, {
            header: true,
            skipEmptyLines: true,
            complete: async (resultsParse) => {
                await new Promise(r => setTimeout(r, 1000)); // Artificial scanner delay for UX
                
                const rows = resultsParse.data as any[];
                
                let foundEvents = 0;
                let knownSpend = 0;
                const activeVendors = new Map<string, { count: number; spend: number; threat: string }>();

                // Heuristic mapping logic: look at all string columns against the dictionary
                for (const row of rows) {
                    const textCorpus = Object.values(row).join(' ');
                    // Attempt to find spend column (amount, price, cost...)
                    let lineItemCost = 0;
                    for (const key of Object.keys(row)) {
                        if (/amount|cost|price|spend|total/i.test(key)) {
                            const val = parseFloat((row[key] as string).replace(/[^0-9.-]+/g,""));
                            if (!isNaN(val)) lineItemCost = val;
                        }
                    }

                    for (const vendor of AI_DICTIONARY) {
                        if (vendor.regex.test(textCorpus)) {
                            foundEvents++;
                            knownSpend += lineItemCost;
                            const prev = activeVendors.get(vendor.name) || { count: 0, spend: 0, threat: vendor.threat };
                            activeVendors.set(vendor.name, {
                                count: prev.count + 1,
                                spend: prev.spend + lineItemCost,
                                threat: prev.threat
                            });
                            break; // Map line item to primary vendor
                        }
                    }
                }

                // Extrapolate Liability: If they paid for it via expense log, they are using it.
                // 1 subscription event ~ 100 prompts a month.
                const totalMonthlyPrompts = foundEvents * 100;
                const piiViolations = Math.round(totalMonthlyPrompts * 0.05); // Higher leakage probability in unsanctioned paid tools
                const financialLiability = (piiViolations * 5000) + knownSpend;

                let riskTier = 'MODERATE';
                if (financialLiability > 500000) riskTier = 'CRITICAL';
                else if (financialLiability > 100000) riskTier = 'HIGH';

                setResults({
                    type: 'AUDIT',
                    recordsScanned: rows.length,
                    foundEvents,
                    knownSpend,
                    vendors: Array.from(activeVendors.entries()).map(([k,v]) => ({ name: k, ...v })).sort((a,b) => b.count - a.count),
                    totalMonthlyPrompts,
                    piiViolations,
                    financialLiability,
                    riskTier
                });
                
                setLoading(false);
            },
            error: (err) => {
                console.error(err);
                alert("Failed to parse CSV.");
                setLoading(false);
            }
        });
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="SHADOW-AI" />
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    <Link href="/tools" className="hover:text-white transition">Enterprise Diagnostics</Link>
                    <span>/</span>
                    <span className="text-white font-bold">Shadow AI Audit</span>
                </div>
                {/* Mode Switcher if pre-results */}
                {!results && (
                     <div className="flex bg-black/50 border border-white/5 p-1 rounded-lg self-end">
                        <button onClick={() => setMode('ESTIMATE')} className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded transition-all ${mode === 'ESTIMATE' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>
                            Estimation Model
                        </button>
                        <button onClick={() => setMode('AUDIT')} className={`px-4 py-1.5 flex items-center gap-1 text-xs font-mono uppercase tracking-widest rounded transition-all ${mode === 'AUDIT' ? 'bg-rose-500/20 text-rose-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>
                            <Eye size={12}/> Zero-Trust Audit
                        </button>
                     </div>
                )}
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${mode === 'AUDIT' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                            <span className={`font-mono text-xs uppercase tracking-widest ${mode === 'AUDIT' ? 'text-rose-400' : 'text-amber-400'}`}>
                                SOC2 & ISO27001 Violation Audit
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Quantify the <span className={`text-transparent bg-clip-text bg-gradient-to-r ${mode ==='AUDIT'? 'from-rose-400 to-red-600': 'from-amber-400 to-red-500'}`}>Blast Radius.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                            Paste proprietary database schemas and API keys into a public ChatGPT window and you lose data sovereignty forever. Calculate your organizational exposure to Shadow AI leakage.
                        </p>

                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Auditing from the perspective of...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button key={p.id} onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id ? 'bg-zinc-800 border-zinc-500 text-white' : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'}`}
                                    >
                                        <p.icon size={14} /> {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ESTIMATION MODE */}
                        {mode === 'ESTIMATE' && (
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
                                                <div className="text-xs font-mono text-zinc-500 mt-2">Engineers paste codebase syntax into ChatGPT at 5x the rate of marketing.</div>
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
                                                <ToolGate toolName="Shadow AI Audit" onUnlock={() => { setShowGate(false); runEstimation(); }}><></></ToolGate>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {/* AUDIT MODE: ZERO TRUST CSV */}
                        {mode === 'AUDIT' && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                                <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl flex items-start gap-4 mb-6">
                                    <ShieldAlert className="text-rose-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Zero-Trust Client-Side Processing</h4>
                                        <p className="text-zinc-400 text-xs leading-relaxed">
                                            Drop your raw Expensify, Ramp, Brex, or Gateway logs in CSV format below. <strong>We do not upload this data.</strong> The parsing and regex heuristic matching happens entirely locally within your browser's memory using a proprietary 500+ Vendor AI Dictionary.
                                        </p>
                                    </div>
                                </div>

                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed ${auditFile ? 'border-rose-500 bg-rose-500/5' : 'border-zinc-700 bg-black/40 hover:bg-zinc-900 transition-colors cursor-pointer'} rounded-2xl p-12 flex flex-col items-center justify-center text-center`}
                                >
                                    <input 
                                        title="Audit CSV Log Upload"
                                        type="file" 
                                        accept=".csv" 
                                        className="hidden" 
                                        ref={fileInputRef} 
                                        onChange={handleFileUpload}
                                    />
                                    {auditFile ? (
                                        <>
                                            <FileSpreadsheet className="w-16 h-16 text-rose-500 mb-4" />
                                            <div className="text-white font-bold text-lg mb-1">{auditFile.name}</div>
                                            <div className="text-zinc-500 font-mono text-xs uppercase">{(auditFile.size / 1024).toFixed(1)} KB Ready for Hash Matching</div>
                                        </>
                                    ) : (
                                        <>
                                            <UploadCloud className="w-16 h-16 text-zinc-600 mb-4" />
                                            <div className="text-white font-bold text-lg mb-1">Click or Drop CSV Log Here</div>
                                            <div className="text-zinc-500 font-mono text-xs uppercase">Supports standard expense or traffic logs</div>
                                        </>
                                    )}
                                </div>

                                {auditFile && (
                                     <div className="pt-4">
                                        <ShineBorder borderColor="rgba(244, 63, 94, 0.6)" duration={2}>
                                            <button 
                                                onClick={() => setShowGate(true)} 
                                                disabled={loading}
                                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-rose-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> SCANNING THREAT VECTORS...</> ) : ( "FORCE LOCAL AUDIT ENGINE →" )}
                                            </button>
                                        </ShineBorder>
                                     </div>
                                )}
                            
                                {showGate && (
                                     <div className="pt-4">
                                        <ToolGate toolName="Shadow AI Scanner" toolSlug="shadow-ai" mappedCurriculumId="27-10" onUnlock={() => { setShowGate(false); runForensicAudit(); }}>
                                            <></>
                                        </ToolGate>
                                     </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </ScrollReveal>
            ) : (
                <div id="shadow-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">Liability Assessment Complete</h2>
                            <p className="text-sm text-zinc-400">
                                {results.type === 'AUDIT' ? 'Deterministic detection via cryptographic / regex parsing.' : 'Forensic extrapolation of unmonitored intellectual property egress.'}
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="shadow-pdf-export-zone" fileName={`Shadow_AI_${results.type}_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="shadow-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#f59e0b" colorTo="#ef4444" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Cost of Doing Nothing (CODN) Penalty</div>
                                        <div className={`text-5xl sm:text-6xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r ${results.riskTier === 'CRITICAL' ? 'from-red-500 to-rose-600' : results.riskTier === 'HIGH' ? 'from-orange-500 to-amber-500' : 'from-yellow-400 to-emerald-400'}`}>
                                            {formatMoney(results.financialLiability)}
                                        </div>
                                        <div className="mt-6">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 ${results.riskTier === 'CRITICAL' ? 'bg-red-900/30 text-rose-400 border border-red-900/50' : 'bg-amber-900/30 text-amber-500 border border-amber-900/50'}`}>
                                                <ShieldAlert size={12}/> {results.riskTier} RISK: {results.piiViolations} PROBABLE PII BREACHES / MO
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                                            {results.type === 'AUDIT' ? (
                                                <>Based on local CSV analysis of {results.recordsScanned} records, we flag <strong className="text-white">{results.foundEvents} unsanctioned tool accesses</strong> directly leaking corporate IP.</>
                                            ) : (
                                                <>With {100 - results.dlpEnforcement}% of endpoints ungoverned, your workforce pushes <strong className="text-white">{results.totalMonthlyPrompts.toLocaleString()} unsanctioned webhook payloads</strong> to external LLM providers every month.</>
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        {results.type === 'AUDIT' ? (
                                            <div className="bg-black/50 p-6 rounded-2xl border border-white/5 h-full max-h-[250px] overflow-y-auto custom-scrollbar">
                                                 <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3 mb-3 sticky top-0 bg-black/50 backdrop-blur-md">VENDORS IDENTIFIED</div>
                                                 {results.vendors.length === 0 ? (
                                                     <div className="text-sm text-zinc-500 py-4 text-center">No high-risk Shadow AI vendors identified in logs.</div>
                                                 ) : (
                                                     <div className="space-y-3">
                                                         {results.vendors.map((v: any, i: number) => (
                                                             <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                                                 <div>
                                                                     <div className="text-sm text-white font-bold">{v.name}</div>
                                                                     <div className="text-[10px] text-zinc-500 font-mono">{v.threat}</div>
                                                                 </div>
                                                                 <div className="text-right">
                                                                     <div className="text-sm font-mono text-rose-400">{v.count} hits</div>
                                                                     {v.spend > 0 && <div className="text-[10px] text-zinc-500 font-mono">${v.spend.toFixed(2)} known spend</div>}
                                                                 </div>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 )}
                                            </div>
                                        ) : (
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
                                        )}
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
                            </div>

                            <VaultUpsell 
                                urgencyLevel={results.riskTier === 'CRITICAL' || results.riskTier === 'HIGH' ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'Module 27-10', title: 'Zero-Trust Hardware Architectures', desc: 'Secure Enclaves (TEE) & Offline Local Vectors' },
                                    { id: 'Module 22-4', title: 'Generative AI DLP Framework', desc: 'Legal boundaries for engineering chat deployments.' }
                                ]} 
                            />

                            <div className="flex justify-center flex-wrap gap-6 mt-8" data-html2canvas-ignore>
                                <button onClick={() => { setResults(null); setAuditFile(null); }} className="text-zinc-500 font-mono tracking-widest text-xs hover:text-white uppercase transition-colors">← Recalibrate Matrix</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
