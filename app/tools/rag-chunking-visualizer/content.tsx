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
import { Layers, Database, ArrowRight, Server, FileText, Settings, TriangleAlert, Lock, Zap } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { PersonaSwitcher, Persona } from '../../components/PersonaSwitcher';

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
    const [persona, setPersona] = useState<Persona>('VP Eng');
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
                <span className="bg-yellow-500/30 border border-yellow-500/50 text-yellow-900 font-extrabold px-0.5 rounded" title="This section duplicates into the next chunk window">
                    {overlapText}
                </span>
            </>
        );
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4 border-b border-transparent">
            <ToolCelebration show={!!results} toolName="CHUNK-VIS" />
            
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                    <Link href="/tools" className="hover:text-zinc-900 transition">Enterprise Diagnostics</Link>
                    <span>/</span>
                    <span className="text-zinc-950 font-bold">RAG Architecture Visualizer</span>
                </div>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-zinc-400">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest">Semantic Splitting Simulator</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter mb-4">
                             See where the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">Meaning Breaks.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-900 mb-8 max-w-2xl leading-relaxed">
                            Vector embedding pipelines fail because blind text-chunking destroys semantic context mid-sentence. Visualize exactly how your Pinecone or Chroma splits behave before committing them to the database.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-6 md:col-span-2">
                                <div>
                                    <label className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <FileText size={14} /> Source Document Pipeline
                                    </label>
                                    <textarea
                                        value={rawText}
                                        onChange={e => setRawText(e.target.value)}
                                        className="w-full h-48 bg-white border border-zinc-400 rounded-xl p-6 font-mono text-xs font-bold text-zinc-950 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-950 resize-none shadow-inner"
                                        placeholder="Paste paragraphs, code blocks, or unstructured legal text here to observe how the sliding window tears it apart..."
                                    />
                                    <div className="text-right mt-2 text-xs font-bold font-medium text-zinc-950 font-mono">Payload: {rawText.length} Characters</div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2">
                                        <Settings size={14} /> Chunk Size (Chars)
                                    </label>
                                    <div className="text-2xl font-bold text-zinc-950 font-mono">{chunkSize}</div>
                                </div>
                                <input 
                                    title="Chunk Size (Chars)"
                                    type="range" min="50" max="2000" step="10" value={chunkSize} 
                                    onChange={e => setChunkSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                                <p className="text-xs font-bold font-medium mt-3 font-mono text-zinc-950 leading-relaxed">The absolute length limit of each matrix sent to the embedding model.</p>
                            </div>

                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2">
                                        <Layers size={14} /> Overlap Window
                                    </label>
                                    <div className="text-2xl font-bold text-zinc-950 font-mono">{overlap}</div>
                                </div>
                                <input 
                                    title="Overlap Window"
                                    type="range" min="0" max={Math.floor(chunkSize * 0.9)} step="10" value={overlap} 
                                    onChange={e => setOverlap(parseInt(e.target.value))}
                                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                                />
                                <p className="text-xs font-bold font-medium mt-3 font-mono text-zinc-950 leading-relaxed">Prevents semantic destruction by dragging context across boundaries.</p>
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
                <div id="chunk-results-artifact" className="bg-white p-2 sm:p-6 rounded-3xl">
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-indigo-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-indigo-500/20 text-indigo-900 font-extrabold font-semibold border border-indigo-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-zinc-950 mb-1">Vector Topology Mapped</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Heuristic breakdown of Context Loss vectors across {results.chunks.length} dimensional slices.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="chunk-pdf-export-zone" fileName={`RAG_Chunking_Strategy.pdf`} />
                        </div>
                    </div>

                    <PersonaSwitcher activePersona={persona} onChange={setPersona} />

                    <div id="chunk-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-zinc-400">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#6366f1" colorTo="#06b6d4" />
                                <div className="min-h-[300px] relative z-10 w-full">
                                    {persona === 'CFO' && (
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-1">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Hallucination Liability (CODN)</div>
                                                <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.efficiencyScore < 50 ? 'from-rose-500 to-red-600' : 'from-indigo-400 to-cyan-400'}`}>
                                                    ${results.codn.toLocaleString()}
                                                </div>
                                                <div className="mt-6">
                                                     <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 ${results.efficiencyScore < 60 ? 'bg-red-50/30 text-rose-400 border border-red-900/50' : 'bg-indigo-900/30 text-indigo-900 font-extrabold font-semibold border border-indigo-900/50'}`}>
                                                        <TriangleAlert size={12}/> {results.brokenWords} SEVERED CONTEXT BOUNDARIES
                                                    </span>
                                                </div>
                                                <p className="text-sm font-semibold text-zinc-900 font-medium mt-4 leading-relaxed">
                                                    Each severed semantic boundary creates isolated tokens that the LLM model cannot accurately interpret, forcing it to hallucinate responses. At an enterprise scale, these misinterpretations manifest as an estimated <strong className="text-zinc-900">${results.codn.toLocaleString()} in support rework and brand liability.</strong>
                                                </p>
                                            </div>
                                            <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-zinc-400 space-y-4">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3 mb-3">Database Load Topology</div>
                                                <div className="flex justify-between items-center pb-2 border-b border-zinc-400">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Total Vectors (Rows)</span>
                                                    <span className="text-sm font-semibold font-mono text-indigo-900 font-extrabold font-semibold">{results.chunks.length}</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-2 border-b border-zinc-400">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Storage API Run Rate</span>
                                                    <span className="text-sm font-semibold font-mono text-rose-400">Inefficient</span>
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950 font-mono mt-2 italic">Vector databases charge per dimensional float. Storing raw noise directly inflates monthly active spend.</p>
                                            </div>
                                        </div>
                                    )}

                                    {persona === 'VP Eng' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Semantic Integrity Score</div>
                                                <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.efficiencyScore < 50 ? 'from-rose-500 to-red-600' : 'from-indigo-400 to-cyan-400'}`}>
                                                    {results.efficiencyScore}%
                                                </div>
                                                <p className="text-sm font-semibold text-zinc-900 font-medium mt-4 leading-relaxed">
                                                    The current sliding window parameters result in {results.brokenWords} hard word-shears, obliterating meaning.
                                                </p>
                                            </div>
                                            <div className="bg-white/50 p-6 rounded-2xl border border-zinc-400 space-y-4 h-full flex flex-col justify-center">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3 mb-3">Ingest Pipeline Stats</div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Pipeline Input</span>
                                                    <span className="text-sm font-semibold font-mono text-indigo-900 font-extrabold font-semibold">{rawText.length} Chars</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Overlap Redundancy</span>
                                                    <span className="text-sm font-semibold font-mono text-cyan-900 font-extrabold font-semibold">{overlap} Chars</span>
                                                </div>
                                                <div className="flex justify-between items-center border-t border-zinc-400 pt-3">
                                                    <span className="text-xs font-bold font-mono text-zinc-900">Semantic Cut Penalty</span>
                                                    <span className={`text-sm font-semibold font-mono font-bold ${results.brokenWords > 0 ? 'text-red-900 font-extrabold font-semibold' : 'text-emerald-900 font-extrabold font-semibold'}`}>-{results.brokenWords * 2}% Loss</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {persona === 'CISO' && (
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-1 w-full bg-white/50 p-6 rounded-2xl border border-rose-500/20 space-y-4">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3">Data Integrity Defect Pipeline</div>
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center border-b border-zinc-400 pb-2">
                                                        <span className="text-sm font-semibold text-zinc-900 font-medium">Authorization Context Loss</span>
                                                        <span className="text-xs font-bold font-mono text-rose-400 shrink-0">CRITICAL RISK</span>
                                                    </div>
                                                    <div className="flex justify-between items-center border-b border-zinc-400 pb-2">
                                                        <span className="text-sm font-semibold text-zinc-900 font-medium">Access Control Bypass</span>
                                                        <span className="text-xs font-bold font-mono text-amber-400 shrink-0">ELEVATED</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950 font-mono mt-2">When user permissions/access tags are physically chunked into a different embedded matrix than the sensitive data itself, RBAC fails.</p>
                                            </div>
                                        </div>
                                    )}

                                    {persona === 'Legal' && (
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-amber-500/20 space-y-4">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3">Contractual Interpretation Shearing</div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Legal Negation Loss Rate</span>
                                                    <span className="text-sm font-semibold font-mono text-rose-400 font-bold">{Math.min(100, results.brokenWords * 3)}%</span>
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950 font-mono mt-2 leading-relaxed">
                                                    Legal liability soars when the embedding model physically separates sentences like "We are NOT" and "liable for financial damages." into two different chunks. If the LLM retrieves only the second chunk via cosine similarity, the AI issues legally binding falsehoods on behalf of the company.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* VISUAL CASCADING FLOW OF CHUNKS */}
                        <ScrollReveal delay={150}>
                            <div className="mb-6 border-b border-zinc-400 pb-4">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                                    <Server size={18} className="text-indigo-900 font-extrabold font-semibold"/>
                                    Vector Mapping Simulator
                                </h3>
                                <p className="text-zinc-950 text-sm">Visualizing how the Language Model interprets these physical database rows.</p>
                            </div>
                            
                            <div className="space-y-4">
                                {results.chunks.map((chunk, index) => (
                                    <div key={chunk.id} className="relative group transition-all duration-300">
                                         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-xl opacity-50 group-hover:opacity-100 z-10 transition-opacity"></div>
                                         <div className="bg-white border border-zinc-400 hover:border-zinc-500 rounded-xl p-6 pl-8 transition-colors">
                                              <div className="flex justify-between items-center mb-3">
                                                  <div className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-900 font-extrabold font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                      Vector Index [{index}]
                                                  </div>
                                                  <div className="text-xs font-bold font-medium text-zinc-950 font-bold font-mono">Chars: {chunk.start} → {chunk.end}</div>
                                              </div>
                                              <p className="text-sm font-semibold font-mono text-zinc-950 leading-relaxed whitespace-pre-wrap">
                                                  {renderVisuallyHighlightedOverlap(chunk, index, index === results.chunks.length - 1)}
                                              </p>
                                         </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-4 flex items-center gap-4 text-xs font-bold font-mono text-zinc-900">
                                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500/30 border border-yellow-500/50 rounded inline-block"></span> Overlap Safety Net</div>
                            </div>
                        </ScrollReveal>

                        {/* VECTOR REDUNDANCY MAP */}
                        <ScrollReveal delay={200}>
                            <div className="bg-white border border-zinc-400 rounded-2xl p-6 mt-8 mb-8 shadow-2xl relative overflow-hidden shrink-0">
                                <h3 className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest border-b border-zinc-400 pb-3 mb-6 flex justify-between">
                                    <span>Vector Index Bloat Visualization</span>
                                    <span className="text-rose-400">{((overlap / chunkSize) * 100).toFixed(1)}% Storage Redundancy</span>
                                </h3>
                                
                                <div className="relative h-48 w-full border-b border-l border-zinc-400/80 p-4">
                                    <div className="absolute -left-6 top-1/2 -rotate-90 text-xs font-bold font-medium font-mono text-zinc-950 font-bold tracking-widest uppercase">Vector Storage Space</div>
                                    <div className="absolute bottom-1 right-1/2 translate-x-1/2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold tracking-widest uppercase mb-[-20px]">Timeline of Document Chunks</div>
                                    
                                    <div className="w-full h-full relative flex items-end">
                                        {results.chunks.map((chunk: any, i: number) => {
                                            const width = 100 / results.chunks.length;
                                            const overlapWidth = (overlap / chunkSize) * width;
                                            
                                            return (
                                                <motion.div 
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${100 - (i * (30 / Math.max(results.chunks.length, 1)))}%` }}
                                                    transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
                                                    style={{ 
                                                        width: `${width}%`,
                                                        left: `${i * width - (i > 0 ? overlapWidth * i : 0)}%`,
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        zIndex: results.chunks.length - i
                                                    }}
                                                    className="border border-indigo-500/30 rounded-t-sm bg-indigo-500/10 group hover:bg-indigo-500/30 transition-colors"
                                                >
                                                    {i > 0 && overlap > 0 && (
                                                        <motion.div 
                                                            className="absolute top-0 bottom-0 left-0 bg-yellow-500/40 border-r border-yellow-500/50" 
                                                            style={{width: `${(overlap / chunkSize) * 100}%`}}
                                                        ></motion.div>
                                                    )}
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-xs font-bold font-medium font-mono bg-white border border-zinc-400 px-1 py-0.5 rounded text-zinc-900">{chunk.end - chunk.start}c</span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="mt-8 pt-4 text-[11px] text-zinc-950 font-mono leading-relaxed max-w-2xl">
                                    Vectors stacking horizontally with the yellow intersections representing duplicated tokens explicitly stored multiple times inside your Pinecone/Weaviate index. A high redundancy rapidly accelerates RAM consumption and indexing API exhaust.
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* CLOUD API BURN METRICS (NEW STRAT) */}
                        <ScrollReveal delay={220}>
                            <div className="mb-6 border-b border-zinc-400 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                                    <Server size={18} className="text-cyan-900 font-extrabold font-semibold"/>
                                    Enterprise Cloud Margin Impact
                                </h3>
                                <p className="text-zinc-950 text-sm">Fortune 500 cloud infrastructure spend multiplier based on current chunking inefficiency.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                                <div className="bg-white/5 border border-zinc-400 p-5 rounded-xl">
                                    <h4 className="text-zinc-950 font-semibold mb-4 border-b border-zinc-400 pb-2">Vector Database Burn (Pinecone/Milvus)</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1"><span className="text-zinc-950 font-bold">Inefficiency Premium</span><span className="text-rose-400 font-mono font-bold">+${Math.round(results.chunks.length * 14.5).toLocaleString()}/yr</span></div>
                                            <p className="text-sm font-semibold font-medium text-zinc-950 mt-2">Bad chunking necessitates upgrading from cheap s1 (storage optimized) pods to expensive p2 (performance optimized) pods to handle the sheer volume of fragmented, overlapping semantic arrays.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-zinc-400 p-5 rounded-xl">
                                    <h4 className="text-zinc-950 font-semibold mb-4 border-b border-zinc-400 pb-2">Frontier Model API Exhaust</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 text-cyan-900 font-extrabold font-semibold font-bold shrink-0">API</div>
                                            <div>
                                                <div className="text-zinc-950 font-semibold flex justify-between">Retrieval Token Tax <span className="text-rose-400 font-mono text-xs">+{((overlap / chunkSize)*100).toFixed(0)}% Opex</span></div>
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mt-1">Every RAG pipeline query pulls these redundant tokens into the context window, multiplying your per-token prompt costs geometrically.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Board-Ready 3-Step Remediation Playbook */}
                        <ScrollReveal delay={250}>
                             <div className="mb-6 border-b border-zinc-400 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                                    <Database size={18} className="text-indigo-900 font-extrabold font-semibold"/>
                                    Execution Playbook: Semantic Protection
                                </h3>
                                <p className="text-zinc-950 text-sm">Deploy this architecture to eliminate vector hallucination and data shears.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-indigo-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
                                     <div className="text-indigo-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-indigo-500/10 w-8 h-8 rounded flex items-center justify-center border border-indigo-500/20">01</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Sync Embedding Models</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Never use string-length chunking. Always chunk using the exact Byte Pair Encoding (tiktoken) of your target embedding model.</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Validate the exact encoding dictionary (e.g. text-embedding-3-small) to prevent mid-token shearing.</p>
                                     </div>
                                </div>
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-cyan-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                     <div className="text-cyan-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-cyan-500/10 w-8 h-8 rounded flex items-center justify-center border border-cyan-500/20">02</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Recursive Splitting</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Upgrade your ingest pipeline to use Recursive Splitting (paragraphs, then sentences, then cascading down to words).</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Force semantic ideas to stay geometrically bound together in vector space.</p>
                                     </div>
                                </div>
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-emerald-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                                     <div className="text-emerald-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-emerald-500/10 w-8 h-8 rounded flex items-center justify-center border border-emerald-500/20">03</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Window Expansion</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Provide enough surrounding context for the LLM to understand referential pronouns (it, they, he) in isolated queries.</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Configure your chunk overlap to be exactly 15-20% of your total chunk byte size.</p>
                                     </div>
                                </div>
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
                                <button onClick={() => setResults(null)} className="text-zinc-950 font-mono tracking-widest text-xs font-bold hover:text-zinc-900 uppercase transition-colors">← Update Padding Parameters</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
