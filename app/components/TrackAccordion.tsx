'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import progressStyles from '../styles/progress.module.css';

interface TrackAccordionProps {
    track: any;
    colorMap: Record<string, string>;
    textMap: Record<string, string>;
    serverCompletedModuleIds?: string[];
}

export default function TrackAccordion({ track, colorMap, textMap, serverCompletedModuleIds = [] }: TrackAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [completedModules, setCompletedModules] = useState<string[]>(serverCompletedModuleIds);

    useEffect(() => {
        const updateProgress = () => {
             let localProgress: string[] = [];
             try {
                 const stored = localStorage.getItem('vault_progress');
                 if (stored) {
                     const parsed = JSON.parse(stored);
                     if (Array.isArray(parsed)) localProgress = parsed;
                 }
             } catch (e) {
                 console.error('Failed to parse vault_progress', e);
             }
             // Merge local progress with server progress to ensure instant UI reactivity while fetching
             const merged = Array.from(new Set([...serverCompletedModuleIds, ...localProgress]));
             setCompletedModules(merged);
        };
        updateProgress();
        window.addEventListener('vault_progress_updated', updateProgress);
        return () => window.removeEventListener('vault_progress_updated', updateProgress);
    }, [serverCompletedModuleIds]);

    const completionCount = track.modules.filter((m: any) => completedModules.includes(m.id)).length;
    const progressPercent = track.modules.length > 0 ? (completionCount / track.modules.length) * 100 : 0;

    return (
        <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${colorMap[track.color]} ${isOpen ? 'shadow-lg shadow-' + track.color + '-500/10' : ''}`}>
            
            {/* Header (Clickable) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 sm:p-8 flex items-start gap-4 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500/50"
            >
                <div className="flex-shrink-0 text-3xl sm:text-4xl mt-1">{track.icon}</div>
                <div className="flex-grow pr-4">
                    {/* Framework Support Badge Calculation */}
                    {(() => {
                        const match = track.subtitle.match(/Track\s+(\d+)/i);
                        const trackNumber = match ? parseInt(match[1], 10) : 1;
                        const supportsFramework = [2, 5, 6, 7, 8, 11, 24].includes(trackNumber)
                            ? 'AI Unit Economics'
                            : 'Production AI Governance';
                        return (
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                                    {track.subtitle}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
                                    Supports Framework: {supportsFramework}
                                </span>
                                {completionCount > 0 && (
                                    <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider border border-emerald-200 px-2 py-0.5 rounded bg-emerald-50">
                                        {completionCount}/{track.modules.length} Done
                                    </span>
                                )}
                            </div>
                        );
                    })()}
                    <h2 className={`text-xl sm:text-2xl font-grotesk font-bold ${textMap[track.color]} transition-colors`}>{track.title}</h2>
                    <p className={`text-sm font-semibold sm:text-base text-zinc-950 mt-2 line-clamp-2 sm:line-clamp-none ${isOpen ? '' : 'hidden sm:block'}`}>
                        {track.description}
                    </p>
                    {completionCount > 0 && !isOpen && (
                        <div className="w-full max-w-xs h-1 bg-zinc-200 overflow-hidden rounded-full mt-4">
                            <div className={`h-full bg-emerald-500 ${progressStyles[`w_${Math.round(progressPercent)}`]}`} />
                        </div>
                    )}
                </div>
                <div className="flex-shrink-0 mt-3 sm:mt-4 text-zinc-900">
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
                <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 border-t border-zinc-400 mt-2 pt-6">
                    <p className="text-zinc-950 mb-8 sm:hidden">{track.description}</p>
                    
                    {completionCount > 0 && (
                        <div className="w-full h-1.5 bg-zinc-200 overflow-hidden rounded-full mb-8 border border-zinc-500">
                            <div className={`h-full bg-emerald-500 transition-all duration-500 ${progressStyles[`w_${Math.round(progressPercent)}`]}`} />
                        </div>
                    )}
                    
                    <div className="space-y-3 mb-8">
                        {track.modules.map((m: any, j: number) => {
                            const isDone = completedModules.includes(m.id);
                            return (
                                <Link key={j} href={m.href} className={`flex items-center justify-between p-4 rounded-xl border transition-colors group ${isDone ? 'bg-emerald-50 border-emerald-200 hover:border-emerald-300' : 'bg-white border-zinc-400 hover:border-zinc-500 shadow-sm'}`}>
                                    <div className="pr-4 flex items-center gap-3">
                                        <div className="flex-shrink-0 text-zinc-900 font-bold text-sm font-semibold w-6">
                                            {isDone ? <span className="text-emerald-900 font-extrabold">✓</span> : <span className="text-zinc-950 font-bold">{j + 1}.</span>}
                                        </div>
                                        <div>
                                            <div className={`font-bold text-sm font-semibold transition-colors ${isDone ? 'text-zinc-950 font-bold group-hover:text-emerald-900 font-extrabold' : 'text-zinc-900 group-hover:text-purple-900 font-extrabold'}`}>{m.name}</div>
                                            <div className="text-xs font-bold text-zinc-950 mt-1">{m.topics}</div>
                                        </div>
                                    </div>
                                    <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold font-mono border whitespace-nowrap ${isDone ? 'bg-zinc-100 text-emerald-900 font-extrabold border-emerald-200' : 'bg-emerald-50 text-emerald-900 font-extrabold border-emerald-200'}`}>
                                        {isDone ? 'Review ↺' : 'Start →'}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-zinc-50 rounded-xl p-6 border border-zinc-400">
                        {track.glossaryTerms && track.glossaryTerms.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">Related Glossary</h3>
                                    {track.glossaryTerms.map((t: string) => {
                                        const isKeep = ['ic-vs-management-track', 'engineering-levels', 'career-levels', 'ai-cost-attribution', 'ai-unit-economics', 'ai-cogs', 'calculating-roai', 'hallucination-debt', 'model-right-sizing', 'orchestration-debt'].includes(t);
                                        const href = isKeep ? `/glossary/${t}` : `/glossary#${t}`;
                                        return (
                                            <Link key={t} href={href} className="px-2 py-1 rounded-md bg-white text-xs font-bold text-zinc-900 font-bold hover:text-zinc-900 transition-colors border border-zinc-400 hover:border-zinc-500">
                                                {t.replace(/-/g, ' ')}
                                            </Link>
                                        );
                                    })}
                            </div>
                        )}
                        {track.tools && track.tools.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">Tools & Assets</h3>
                                <div className="flex flex-wrap gap-2">
                                    {track.tools.map((t: any) => (
                                        <Link key={t.href} href={t.href} className={`px-3 py-1 rounded-md text-xs font-bold ${textMap[track.color]} bg-white border border-zinc-400 hover:border-current transition-colors`}>
                                            {t.name} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {progressPercent >= 100 && (
                        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 flex-shrink-0">
                                    <span className="text-3xl">🏆</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-grotesk font-bold text-emerald-900 font-extrabold mb-2">Track Mastered</h3>
                                    <p className="text-sm font-semibold text-zinc-950">
                                        You have successfully completed every module in this architecture. To help you implement these exact systems in your organization, you've earned a complimentary 30-minute implementation audit with Richard Ewing, or you can roll this out to your engineering managers with a Team License.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                                    <Link href="/services" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm text-center hover:bg-emerald-500 transition-colors whitespace-nowrap shadow-md">
                                        Claim Advisory Audit →
                                    </Link>
                                    <a href="/api/buy/enterprise/enterprise_curriculum_license" className="px-6 py-3 rounded-lg bg-white border border-zinc-400 text-zinc-950 font-bold text-sm font-semibold text-center hover:bg-zinc-50 transition-colors whitespace-nowrap">
                                        Add Enterprise Team License
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
