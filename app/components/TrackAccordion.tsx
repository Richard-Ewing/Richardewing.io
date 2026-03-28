'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TrackAccordionProps {
    track: any;
    colorMap: Record<string, string>;
    textMap: Record<string, string>;
}

export default function TrackAccordion({ track, colorMap, textMap }: TrackAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${colorMap[track.color]} ${isOpen ? 'shadow-lg shadow-' + track.color + '-500/10' : ''}`}>
            
            {/* Header (Clickable) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 sm:p-8 flex items-start gap-4 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500/50"
            >
                <div className="flex-shrink-0 text-3xl sm:text-4xl mt-1">{track.icon}</div>
                <div className="flex-grow pr-4">
                    <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{track.subtitle}</div>
                    <h2 className={`text-xl sm:text-2xl font-grotesk font-bold ${textMap[track.color]} transition-colors`}>{track.title}</h2>
                    <p className={`text-sm sm:text-base text-zinc-400 mt-2 line-clamp-2 sm:line-clamp-none ${isOpen ? '' : 'hidden sm:block'}`}>
                        {track.description}
                    </p>
                </div>
                <div className="flex-shrink-0 mt-3 sm:mt-4 text-zinc-500">
                    <svg 
                        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Expandable Body */}
            <div 
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 border-t border-white/5 mt-2 pt-6">
                    <p className="text-zinc-400 mb-8 sm:hidden">{track.description}</p>
                    
                    <div className="space-y-3 mb-8">
                        {track.modules.map((m: any, j: number) => (
                            <Link key={j} href={m.href} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors group">
                                <div className="pr-4">
                                    <div className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">{m.name}</div>
                                    <div className="text-xs text-zinc-500 mt-1">{m.topics}</div>
                                </div>
                                <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap`}>
                                    Start →
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/10 rounded-xl p-6 border border-white/5">
                        <div>
                            <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Related Glossary</h3>
                            <div className="flex flex-wrap gap-2">
                                {track.glossaryTerms.map((t: string) => (
                                    <Link key={t} href={`/glossary/${t}`} className="px-2 py-1 rounded-md bg-white/5 text-xs text-zinc-400 hover:text-white transition-colors border border-white/5 hover:border-white/20">
                                        {t.replace(/-/g, ' ')}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {track.tools && track.tools.length > 0 && (
                            <div>
                                <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">ROI Calculators</h3>
                                <div className="flex flex-wrap gap-2">
                                    {track.tools.map((t: any) => (
                                        <Link key={t.href} href={t.href} className={`px-3 py-1 rounded-md text-xs font-bold ${textMap[track.color]} bg-white/5 border border-white/10 hover:border-current transition-colors`}>
                                            {t.name} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
