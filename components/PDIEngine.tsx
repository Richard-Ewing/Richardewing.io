"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "./ui/NumberTicker";
import { ShineBorder } from "./magicui/shine-border";

export function PDIEngine() {
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [result, setResult] = useState<{ pdi: number; tax: number; label: string; verdict: string; className: string } | null>(null);

    const calculatePDI = async () => {
        if (!input) return;

        setIsThinking(true);
        setResult(null);

        // Fake processing delay for drama
        await new Promise(resolve => setTimeout(resolve, 800));

        const lowerInput = input.toLowerCase();
        const maintenanceKeywords = /fix|bug|refactor|update|maintenance|css|polish|cleanup|migration|debt|patch|compliance|security|infra|admin|meeting/g;
        const revenueKeywords = /new|enterprise|tier|upsell|revenue|client|sale|conversion|onboarding|market|launch|growth|feature|pricing/g;

        const maintCount = (lowerInput.match(maintenanceKeywords) || []).length;
        const revCount = (lowerInput.match(revenueKeywords) || []).length;

        const totalSignals = maintCount + revCount || 1;

        const pdi = Math.round((revCount / totalSignals) * 100);
        const tax = Math.round((maintCount / totalSignals) * 100);

        let label = "STRATEGIC ASSET";
        let className = "text-cyan";
        let verdict = "Top quartile efficiency. Capital flowing to high-leverage outcomes.";

        if (pdi < 40) {
            label = "CAPITAL DESTRUCTIVE";
            className = "text-danger";
            verdict = `Critical misallocation detected. ${tax}% of spend is 'Maintenance Tax'. You are running a Feature Factory.`;
        } else if (pdi < 65) {
            label = "AT RISK";
            className = "text-yellow-500";
            verdict = `Governance deteriorating. Maintenance Tax (${tax}%) is eroding strategic capacity.`;
        }

        setResult({ pdi, tax, label, verdict, className });
        setIsThinking(false);
    };

    return (
        <section id="pdi-engine" className="my-12 relative group">
            <ShineBorder className="w-full relative bg-zinc-900/20 border-white/5 p-0 overflow-hidden rounded-3xl" color={["#FF3333", "#00F0FF", "#0055FF"]}>
                {/* Background scanning effect */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-cyan/20 blur-sm animate-[scan_4s_ease-in-out_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="px-8 md:px-12 relative z-10 py-24">
                    <div className="inline-block bg-danger/10 border border-danger/30 px-3 py-1 rounded-full text-[10px] font-mono text-danger uppercase mb-6 tracking-widest">
                        Diagnostic Standard: PDI-2026
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">Product Debt Index™</h2>
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-10">// QUANTIFYING CAPITAL MISALLOCATION</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                                Paste your recent backlog items. The engine classifies them by economic intent to detect "Maintenance Tax."
                            </p>
                            <div className="bg-black border border-white/10 rounded-2xl p-2 shadow-2xl relative">
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="e.g., Refactored login flow, Fixed CSS bug, Database migration, Q4 Board Deck prep..."
                                    className="w-full h-48 bg-transparent p-6 text-zinc-300 font-mono text-sm focus:outline-none placeholder:text-zinc-700 resize-none"
                                />

                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    onClick={calculatePDI}
                                    disabled={isThinking}
                                    className={cn(
                                        "w-full py-4 font-bold uppercase tracking-widest text-xs transition-all rounded-xl mt-2",
                                        isThinking ? "bg-zinc-800 text-zinc-500 cursor-wait" : "bg-white text-black hover:bg-cyan hover:text-black"
                                    )}
                                >
                                    {isThinking ? "PROCESSING BACKLOG..." : "GENERATE PDI SCORE"}
                                </motion.button>
                            </div>
                        </div>

                        <div className="min-h-[300px] relative">
                            <AnimatePresence mode="wait">
                                {result && !isThinking && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex flex-col justify-between p-8 border border-white/10 bg-black/60 rounded-2xl backdrop-blur-md h-full"
                                    >
                                        <div>
                                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Index Score</div>
                                            <div className="flex items-baseline gap-4 mb-6">
                                                <div className="text-7xl font-bold text-white tracking-tighter">
                                                    <NumberTicker value={result.pdi} />
                                                </div>
                                                <div className={cn("text-xs font-mono uppercase tracking-widest", result.className)}>{result.label}</div>
                                            </div>
                                            <div className="space-y-4 mb-8 border-t border-white/10 pt-6">
                                                <div className="flex justify-between">
                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Maintenance Tax</span>
                                                    <span className="text-xs font-mono text-white">
                                                        <NumberTicker value={result.tax} suffix="%" />
                                                    </span>
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="text-xs text-zinc-300 italic leading-relaxed font-mono"
                                                >
                                                    {result.verdict}
                                                </motion.div>
                                            </div>
                                        </div>
                                        <a href="/advisory" className="block w-full text-center bg-danger text-white font-bold uppercase text-[10px] py-4 rounded tracking-widest hover:bg-white hover:text-black transition-all">
                                            Review Results with The Principal
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </ShineBorder>
        </section>
    );
}
