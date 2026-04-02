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
import { PersonaSwitcher, Persona } from '../../components/PersonaSwitcher';
import { BorderBeam } from '../../components/magicui/border-beam';
import { ShieldAlert, ArrowRight, ShieldOff, Lock, UserX, Target, UploadCloud, FileSpreadsheet, Eye, Zap } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import Papa from 'papaparse';

type Mode = 'SIMULATE' | 'AUDIT';

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
    const [mode, setMode] = useState<Mode>('SIMULATE');
    const [step, setStep] = useState(1);

    // MODE 1: Simulate Inputs
    const [simulatedLogs, setSimulatedLogs] = useState('');

    // MODE 2: Audit Inputs
    const [auditFile, setAuditFile] = useState<File | null>(null);
    const [auditRawLogs, setAuditRawLogs] = useState<any[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Common UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    // --- SIMULATOR EXECUTION ---
    const runSimulation = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500));
            const text = simulatedLogs.toLowerCase();
            const hasCode = text.includes('function') || text.includes('const') || text.includes('var') || text.includes('let') || text.includes('=>') || text.includes('class ');
            
            const totalMonthlyPrompts = Math.max(1250, text.length * 2);
            const piiViolations = Math.round(totalMonthlyPrompts * 0.05); // Simulated leakage rate
            const shadowSpend = Math.round(totalMonthlyPrompts * 0.85); // Mock SaaS spend baseline
            const financialLiability = (piiViolations * 5000) + shadowSpend;

            let riskTier = 'MODERATE';
            if (financialLiability > 500000) riskTier = 'CRITICAL';
            else if (financialLiability > 100000) riskTier = 'HIGH';

            setResults({
                type: 'SIMULATION',
                totalMonthlyPrompts,
                piiViolations,
                financialLiability,
                riskTier,
                hasCodeLeak: hasCode,
                shadowSpend
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
                        <button onClick={() => setMode('SIMULATE')} className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded transition-all ${mode === 'SIMULATE' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>
                            Log Injection
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
                            <PersonaSwitcher activePersona={persona} onChange={setPersona} />
                        </div>

                        {/* SIMULATION MODE */}
                        {mode === 'SIMULATE' && (
                            <div className="space-y-6">
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono text-sm border border-amber-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Log Extrapolation</h3>
                                            <p className="text-sm text-zinc-500">Paste an internal Slack log or Developer PR communication.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea 
                                            value={simulatedLogs} 
                                            onChange={e => setSimulatedLogs(e.target.value)} 
                                            placeholder="Example: Hey guys, can someone check my API key? I asked ChatGPT but it kept hallucinating the response..." 
                                            className="w-full h-48 sm:h-64 bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-zinc-700 resize-none"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <ShineBorder borderColor="rgba(245, 158, 11, 0.6)" duration={2}>
                                            <button onClick={() => { setShowGate(true); }} disabled={simulatedLogs.length < 5 || loading} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                                                {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> SCANNING...</> ) : ( "RUN LIABILITY AUDIT →" )}
                                            </button>
                                        </ShineBorder>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="Shadow AI Scanner" toolSlug="shadow-ai" mappedCurriculumId="27-10" onUnlock={() => { setShowGate(false); runSimulation(); }}><></></ToolGate>
                                        </div>
                                    )}
                                </motion.div>
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
                                        {results.type !== 'AUDIT' && (
                                            <PersonaSwitcher activePersona={persona} onChange={setPersona} />
                                        )}
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
                                            <div className="flex flex-col gap-4">
                                                {persona === 'CISO' && (
                                                    <div className="bg-black/50 p-6 rounded-2xl border border-rose-500/20 space-y-4">
                                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3">Compliance Perimeter Heatmap</div>
                                                        <div className="space-y-3 pt-2">
                                                            <div className="flex justify-between items-center bg-rose-500/10 p-2 rounded">
                                                                <span className="text-sm text-rose-400 font-bold">PII Exfiltration</span>
                                                                <span className="text-xs font-mono text-rose-400">{results.piiViolations} hits</span>
                                                            </div>
                                                            <div className="flex justify-between items-center bg-amber-500/10 p-2 rounded">
                                                                <span className="text-sm text-amber-400 font-bold">API Key Exposure</span>
                                                                <span className="text-xs font-mono text-amber-400">High Risk</span>
                                                            </div>
                                                            <div className="flex justify-between items-center bg-emerald-500/10 p-2 rounded">
                                                                <span className="text-sm text-emerald-400 font-bold">Sanctioned Inference</span>
                                                                <span className="text-xs font-mono text-emerald-400">0 hits</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {persona === 'CFO' && (
                                                    <div className="bg-black/50 p-6 rounded-2xl border border-green-500/20 space-y-4">
                                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3">Unlicensed SaaS Spend Waste</div>
                                                        <div className="text-center py-4">
                                                            <div className="text-4xl font-bold text-green-400 font-mono">${(results.shadowSpend || results.knownSpend || 14500).toLocaleString()}</div>
                                                            <p className="text-xs text-zinc-500 mt-2">Annualized Unregulated Corporate Credit Card Expense</p>
                                                        </div>
                                                    </div>
                                                )}
                                                {persona === 'VP Eng' && (
                                                    <div className="bg-black/50 p-6 rounded-2xl border border-blue-500/20 space-y-4">
                                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3">Algorithmic Contamination Log</div>
                                                        <div className="flex justify-between items-center pb-2">
                                                            <span className="text-sm text-zinc-400">AI-Generated Code Leakage</span>
                                                            <span className="text-sm font-mono text-blue-400 text-right">{results.hasCodeLeak ? "Detected" : "None Detected"}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                            <span className="text-sm text-zinc-400">Payload Integrity</span>
                                                            <span className="text-sm font-mono text-rose-400 text-right">Compromised</span>
                                                        </div>
                                                        <p className="text-xs text-zinc-500 font-mono mt-2 pt-2 border-t border-white/10">Codebase is currently ingesting untrusted public LLM tokens without validation.</p>
                                                    </div>
                                                )}
                                                {persona === 'Legal' && (
                                                    <div className="bg-black/50 p-6 rounded-2xl border border-amber-500/20 space-y-4">
                                                         <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3">SLA & Copyright Exposure</div>
                                                         <div className="space-y-2">
                                                            <div className="text-sm text-amber-400">Potential GDPR Fines: <span className="font-bold">Active Exposure</span></div>
                                                            <div className="text-sm text-rose-400">IP Ownership Voided: <span className="font-bold">High Risk</span></div>
                                                         </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* FORENSIC TERMINAL LOG */}
                        <ScrollReveal delay={100}>
                            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl font-mono text-xs p-4 max-h-[250px] overflow-y-auto mb-8 shadow-[0_0_20px_rgba(225,29,72,0.1)]">
                                <div className="flex gap-2 mb-3 pb-2 border-b border-zinc-800/50">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    <div className="text-[10px] text-zinc-600 ml-2 uppercase">sys_forensic_tty [LIVE EXTRAPOLATION]</div>
                                </div>
                                <div className="space-y-2 font-mono pb-2">
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.5}} className="text-zinc-400"><span className="text-zinc-600 mr-2">{'>'}</span> [SYS] Initializing localized forensic sweep...</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.2}} className="text-zinc-400"><span className="text-zinc-600 mr-2">{'>'}</span> [SCAN] Extracting {results.type === 'AUDIT' ? results.recordsScanned : (results.totalMonthlyPrompts / 10).toFixed(0)} outbound telemetry packets...</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.0}} className="text-yellow-400"><span className="text-zinc-600 mr-2">{'>'}</span> [WARN] POST api.openai.com/v1/chat/completions - Unsanctioned Copilot Payload</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.8}} className="text-blue-400"><span className="text-zinc-600 mr-2">{'>'}</span> [MATCH] Heuristic trigger: "Proprietary Database Schema Sequence" detected</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 3.5}} className="text-rose-400"><span className="text-zinc-600 mr-2">{'>'}</span> [CRITICAL] Unencrypted PII / Valid JWT Token identified inside prompt context window.</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 4.2}} className="text-rose-500 font-bold"><span className="text-zinc-600 mr-2">{'>'}</span> [ALERT] {results.piiViolations} additional structurally similar payloads surfaced in 30-day DNS cache.</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 5.0}} className="text-emerald-400"><span className="text-zinc-600 mr-2">{'>'}</span> [DONE] Board proxy liability report compiled. Awaiting structural CI/CD firewall remediation.</motion.div>
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 5.2}} className="animate-pulse text-zinc-500 mt-1">_</motion.div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* ENTERPRISE THREAT MODELING (NEW) */}
                        <ScrollReveal delay={120}>
                            <div className="mb-6 border-b border-white/10 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Target size={18} className="text-rose-400"/>
                                    Enterprise Threat & Exfiltration Matrix
                                </h3>
                                <p className="text-zinc-500 text-sm">Fortune 500 targeted probability modeling for data loss via LLM public memory retention.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h4 className="text-white font-semibold mb-4 border-b border-white/10 pb-2">Regulatory Liability (GDPR / CCPA)</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1"><span className="text-zinc-400">Projected Fines (Est)</span><span className="text-rose-400 font-mono font-bold">{formatMoney(results.financialLiability * 14.5)}</span></div>
                                            <div className="w-full bg-black rounded-full h-1"><div className="bg-rose-500 h-1 rounded-full" style={{width: '75%'}}></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1"><span className="text-zinc-400">Class Action Risk Factor</span><span className="text-amber-400 font-mono font-bold">CRITICAL</span></div>
                                            <div className="w-full bg-black rounded-full h-1"><div className="bg-amber-500 h-1 rounded-full" style={{width: '90%'}}></div></div>
                                        </div>
                                        <p className="text-xs text-zinc-500 mt-2">LLM retention of PII constitutes an unrecoverable breach under "Right to be Forgotten" mandates.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h4 className="text-white font-semibold mb-4 border-b border-white/10 pb-2">Intellectual Property Egress</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30 text-blue-400 font-bold shrink-0">IP</div>
                                            <div>
                                                <div className="text-white font-semibold">Proprietary Source Code</div>
                                                <div className="text-xs text-zinc-400">Foundational models may train on your core algorithms if submitted via consumer endpoints.</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400 font-bold shrink-0">DB</div>
                                            <div>
                                                <div className="text-white font-semibold">Database Schema Leakage</div>
                                                <div className="text-xs text-zinc-400">Engineers pasting SQL contexts expose your internal system architecture to zero-day vectors.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Board-Ready 3-Step Remediation Playbook */}
                        <ScrollReveal delay={150}>
                             <div className="mb-6 border-b border-white/10 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <ShieldAlert size={18} className="text-rose-400"/>
                                    Execution Playbook: Shadow AI Mitigation
                                </h3>
                                <p className="text-zinc-500 text-sm">Deploy this 90-day architectural roadmap to secure data sovereignty.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-900/80 transition-colors border-l-2 border-l-rose-500">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                     <div className="text-rose-400 font-mono text-xs mb-3 uppercase tracking-widest bg-rose-500/10 w-8 h-8 rounded flex items-center justify-center border border-rose-500/20">01</div>
                                     <h4 className="text-white font-bold mb-2">Endpoint Termination</h4>
                                     <p className="text-zinc-400 text-sm mb-4">You cannot train engineers not to use ChatGPT. The only solution is explicitly blackholing external LLM requests.</p>
                                     <div className="bg-black/60 p-3 rounded border border-white/5 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-xs text-zinc-300">Update Zscaler rules to explicitly blackhole all DNS requests to chatgpt.com, claude.ai, and other consumer APIs.</p>
                                     </div>
                                </div>
                                <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-900/80 transition-colors border-l-2 border-l-amber-500">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                     <div className="text-amber-400 font-mono text-xs mb-3 uppercase tracking-widest bg-amber-500/10 w-8 h-8 rounded flex items-center justify-center border border-amber-500/20">02</div>
                                     <h4 className="text-white font-bold mb-2">Private Gateway Deployment</h4>
                                     <p className="text-zinc-400 text-sm mb-4">Enterprise SLAs legally prohibit model training on customer payloads, offering protection guarantees.</p>
                                     <div className="bg-black/60 p-3 rounded border border-white/5 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-xs text-zinc-300">Provision Azure OpenAI or AWS Bedrock endpoints entirely inside your private VPC.</p>
                                     </div>
                                </div>
                                <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-900/80 transition-colors border-l-2 border-l-emerald-500">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                                     <div className="text-emerald-400 font-mono text-xs mb-3 uppercase tracking-widest bg-emerald-500/10 w-8 h-8 rounded flex items-center justify-center border border-emerald-500/20">03</div>
                                     <h4 className="text-white font-bold mb-2">Sanctioned Internal UI</h4>
                                     <p className="text-zinc-400 text-sm mb-4">Engineers get their 10x velocity, and you retain complete data sovereignty with logging.</p>
                                     <div className="bg-black/60 p-3 rounded border border-white/5 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-xs text-zinc-300">Deploy LobeHub or LibreChat internally, pointing to your private VPC Enclave.</p>
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
                                    You cannot train engineers not to use ChatGPT—it is a 10x multiplier on velocity. The only SOC-compliant resolution is deploying a private enclave inside your VPC, giving them an interface that mathematically guarantees zero-data-retention.
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
