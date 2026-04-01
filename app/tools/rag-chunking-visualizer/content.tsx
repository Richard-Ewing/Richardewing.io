'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import ShineBorder from '../../components/magicui/shine-border';
import { VaultUpsell } from '../../components/VaultUpsell';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Layers, Database, ArrowRight, Server, FileText, Settings, TriangleAlert, Lock } from 'lucide-react';
import ToolGate from '../../components/tool-gate';

// Helper to chunk text
function chunkText(text: string, chunkSize: number, overlap: number) {
    if (!text || chunkSize <= 0) return [];
    const chunks = [];
    let i = 0;
    while (i < text.length) {
        const end = i + chunkSize;
        const chunkStr = text.slice(i, end);
        chunks.push({
            id: `chunk-${i}`,
            text: chunkStr,
            start: i,
            end: end > text.length ? text.length : end
        });
        if (end >= text.length) break;
        i += (chunkSize - overlap);
        // Prevent infinite loop if overlap >= chunkSize
        if (overlap >= chunkSize) i = end; 
    }
    return chunks;
}

export default function RagChunkingContent() {
    const [rawText, setRawText] = useState('');
    const [chunkSize, setChunkSize] = useState(200);
    const [overlap, setOverlap] = useState(50);
    
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<{
        chunks: { id: string, text: string, start: number, end: number }[];
        brokenWords: number;
        efficiencyScore: number;
        codn: number;
    } | null>(null);
    const [showGate, setShowGate] = useState(false);

    const runChunkingSimulation = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1000));
            
            const generatedChunks = chunkText(rawText, chunkSize, overlap);
            
            // Heuristic calculation: How many chunks slice a word in half at the boundary?
            let brokenWords = 0;
            generatedChunks.forEach(c => {
                // If the end character is not a space/punctuation, and the next character in original text is not space/punctuation, we sheared a word.
                const lastCharObj = c.text[c.text.length - 1];
                const nextCharObj = rawText[c.end];
                if (lastCharObj && nextCharObj && /\w/.test(lastCharObj) && /\w/.test(nextCharObj)) {
                    brokenWords++;
                }
            });

            const penalty = (brokenWords / generatedChunks.length) * 100;
            const score = Math.max(10, Math.round(100 - penalty));
            const codn = brokenWords * 1500; // $1500 annualized support friction / hallucination liability per broken boundary

            setResults({
                chunks: generatedChunks,
                brokenWords,
                efficiencyScore: score,
                codn
            });
        } finally {
            setLoading(false);
        }
    };

    const renderVisuallyHighlightedOverlap = (chunk: {text: string}, index: number, isLast: boolean) => {
        if (overlap === 0 || isLast) return <span>{chunk.text}</span>;
        
        // Split chunk into [Unique Part] and [Overlap Part]
        // Example: If chunkSize is 200, overlap is 50.
        // The last 50 characters of this chunk overlap with the first 50 of the next chunk.
        // But what if the chunk is shorter than chunkSize? (Edge case for end of text)
        const overlapLen = Math.min(overlap, chunk.text.length);
        const uniqueEnd = chunk.text.length - overlapLen;
        
        const uniqueText = chunk.text.substring(0, uniqueEnd);
        const overlapText = chunk.text.substring(uniqueEnd);

        return (
            <>
                <span>{uniqueText}</span>
                <span className="bg-yellow-500/30 border border-yellow-500/50 text-yellow-200 px-0.5 rounded" title="This section duplicates into the next chunk window">
                    {overlapText}
                </span>
            </>
        );
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4 border-b border-transparent">
            <ToolCelebration show={!!results} toolName="CHUNK-VIS" />
            
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    <Link href="/tools" className="hover:text-white transition">Enterprise Diagnostics</Link>
                    <span>/</span>
                    <span className="text-white font-bold">RAG Architecture Visualizer</span>
                </div>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">Semantic Splitting Simulator</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                             See where the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">Meaning Breaks.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                            Vector embedding pipelines fail because blind text-chunking destroys semantic context mid-sentence. Visualize exactly how your Pinecone or Chroma splits behave before committing them to the database.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-6 md:col-span-2">
                                <div>
                                    <label className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <FileText size={14} /> Source Document Pipeline
                                    </label>
                                    <textarea
                                        value={rawText}
                                        onChange={e => setRawText(e.target.value)}
                                        className="w-full h-48 bg-[#0a0a0b] border border-white/10 rounded-xl p-6 font-mono text-xs text-zinc-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700 resize-none shadow-inner"
                                        placeholder="Paste paragraphs, code blocks, or unstructured legal text here to observe how the sliding window tears it apart..."
                                    />
                                    <div className="text-right mt-2 text-[10px] text-zinc-500 font-mono">Payload: {rawText.length} Characters</div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                        <Settings size={14} /> Chunk Size (Chars)
                                    </label>
                                    <div className="text-2xl font-bold text-white font-mono">{chunkSize}</div>
                                </div>
                                <input 
                                    title="Chunk Size (Chars)"
                                    type="range" min="50" max="2000" step="10" value={chunkSize} 
                                    onChange={e => setChunkSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                                <p className="text-[10px] mt-3 font-mono text-zinc-500 leading-relaxed">The absolute length limit of each matrix sent to the embedding model.</p>
                            </div>

                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                        <Layers size={14} /> Overlap Window
                                    </label>
                                    <div className="text-2xl font-bold text-white font-mono">{overlap}</div>
                                </div>
                                <input 
                                    title="Overlap Window"
                                    type="range" min="0" max={Math.floor(chunkSize * 0.9)} step="10" value={overlap} 
                                    onChange={e => setOverlap(parseInt(e.target.value))}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                                />
                                <p className="text-[10px] mt-3 font-mono text-zinc-500 leading-relaxed">Prevents semantic destruction by dragging context across boundaries.</p>
                            </div>
                        </div>

                        <ShineBorder borderColor="rgba(99, 102, 241, 0.6)" duration={2}>
                            <button
                                onClick={() => setShowGate(true)}
                                disabled={loading || rawText.trim().length <= chunkSize}
                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> RUNNING VECTOR SPLIT...</> ) : ( <><Database size={18}/> MAP BOUNDARIES</> )}
                            </button>
                        </ShineBorder>

                        {showGate && (
                            <div className="mt-6">
                                <ToolGate toolName="RAG Visualizer" toolSlug="rag-chunking-visualizer" mappedCurriculumId="29-4" onUnlock={() => { setShowGate(false); runChunkingSimulation(); }}>
                                    <></>
                                </ToolGate>
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ) : (
                <div id="chunk-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-indigo-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">Vector Topology Mapped</h2>
                            <p className="text-sm text-zinc-400">Heuristic breakdown of Context Loss vectors across {results.chunks.length} dimensional slices.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="chunk-pdf-export-zone" fileName={`RAG_Chunking_Strategy.pdf`} />
                        </div>
                    </div>

                    <div id="chunk-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#6366f1" colorTo="#06b6d4" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Hallucination Liability (CODN)</div>
                                        <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.efficiencyScore < 50 ? 'from-rose-500 to-red-600' : 'from-indigo-400 to-cyan-400'}`}>
                                            ${results.codn.toLocaleString()}
                                        </div>
                                        <div className="mt-6">
                                             <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 ${results.efficiencyScore < 60 ? 'bg-red-900/30 text-rose-400 border border-red-900/50' : 'bg-indigo-900/30 text-indigo-400 border border-indigo-900/50'}`}>
                                                <TriangleAlert size={12}/> {results.brokenWords} SEVERED CONTEXT BOUNDARIES
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                                            Each severed semantic boundary creates isolated tokens that the LLM model cannot accurately interpret, forcing it to hallucinate responses. At an enterprise scale, these misinterpretations manifest as an estimated <strong className="text-white">${results.codn.toLocaleString()} in support rework and brand liability.</strong>
                                        </p>
                                    </div>
                                    <div>
                                         <div className="bg-black/50 p-6 rounded-2xl border border-white/5 space-y-4">
                                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3 mb-3">Database Load Topology</div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <span className="text-sm text-zinc-400">Total Vectors (Rows)</span>
                                                    <span className="text-sm font-mono text-indigo-400">{results.chunks.length}</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                    <span className="text-sm text-zinc-400">Overlap Redundancy</span>
                                                    <span className="text-sm font-mono text-cyan-400">{overlap} Chars</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-2">
                                                    <span className="text-xs font-mono text-white">Semantic Cut Penalty</span>
                                                    <span className={`text-sm font-mono font-bold ${results.brokenWords > 0 ? 'text-red-400' : 'text-emerald-400'}`}>-{results.brokenWords * 2}% Loss</span>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* VISUAL CASCADING FLOW OF CHUNKS */}
                        <ScrollReveal delay={150}>
                            <div className="mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Server size={18} className="text-indigo-400"/>
                                    Vector Mapping Simulator
                                </h3>
                                <p className="text-zinc-500 text-sm">Visualizing how the Language Model interprets these physical database rows.</p>
                            </div>
                            
                            <div className="space-y-4">
                                {results.chunks.map((chunk, index) => (
                                    <div key={chunk.id} className="relative group transition-all duration-300">
                                         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-xl opacity-50 group-hover:opacity-100 z-10 transition-opacity"></div>
                                         <div className="bg-[#0a0a0b] border border-white/5 hover:border-white/20 rounded-xl p-6 pl-8 transition-colors">
                                              <div className="flex justify-between items-center mb-3">
                                                  <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                      Vector Index [{index}]
                                                  </div>
                                                  <div className="text-[10px] text-zinc-600 font-mono">Chars: {chunk.start} → {chunk.end}</div>
                                              </div>
                                              <p className="text-sm font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                                  {renderVisuallyHighlightedOverlap(chunk, index, index === results.chunks.length - 1)}
                                              </p>
                                         </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-500">
                                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500/30 border border-yellow-500/50 rounded inline-block"></span> Overlap Safety Net</div>
                            </div>
                        </ScrollReveal>

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                            <VaultUpsell 
                                urgencyLevel={results.efficiencyScore < 70 ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'Module 27-7', title: 'Local Vector Embeddings', desc: 'Execute RAG entirely locally via SQLite Vector.' },
                                    { id: 'Module 29-4', title: 'Cache Hierarchies & Vector DBs', desc: 'Implement strict Semantic Caches to bypass LLM routes.' }
                                ]} 
                            />

                            <div className="flex justify-center flex-wrap gap-6 mt-8" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-500 font-mono tracking-widest text-xs hover:text-white uppercase transition-colors">← Update Padding Parameters</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
