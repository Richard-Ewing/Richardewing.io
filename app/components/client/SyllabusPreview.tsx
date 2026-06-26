'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';

interface Module {
    id: string;
    name: string;
    topics: string;
    href: string;
}

interface Track {
    title: string;
    subtitle: string;
    description: string;
    modules: Module[];
    icon?: string;
    color?: string;
}

interface SyllabusPreviewProps {
    tracks: Track[];
}

export default function SyllabusPreview({ tracks }: SyllabusPreviewProps) {
    const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

    const toggleTrack = (idx: number) => {
        setExpandedTrack(prev => (prev === idx ? null : idx));
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4 text-left">
            <div className="text-center mb-10">
                <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-[0.2em] bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    Syllabus Preview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-grotesk text-zinc-950 mt-3">
                    Explore What You'll Master
                </h2>
                <p className="text-xs text-zinc-600 mt-2">
                    Click any authority track to expand its first 3 modules and topics.
                </p>
            </div>

            {tracks.map((track, idx) => {
                const isExpanded = expandedTrack === idx;
                const previewModules = track.modules.slice(0, 3);
                const remainingCount = track.modules.length - 3;
                
                return (
                    <div 
                        key={idx}
                        className={`bg-white border rounded-2xl transition-all duration-300 ${isExpanded ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500/10' : 'border-zinc-300 hover:border-zinc-400 shadow-sm'}`}
                    >
                        {/* Track Header */}
                        <div 
                            onClick={() => toggleTrack(idx)}
                            className="p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-xl shrink-0">
                                    {track.icon || '📚'}
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                                        {track.subtitle}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-grotesk mt-0.5">
                                        {track.title}
                                    </h3>
                                </div>
                            </div>
                            
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-zinc-500 shrink-0"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </div>

                        {/* Collapsible Syllabus Content */}
                        <AnimatePresence initial={false}>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    className="overflow-hidden border-t border-zinc-200 bg-zinc-50/50"
                                >
                                    <div className="p-6 space-y-4">
                                        <p className="text-xs text-zinc-700 leading-relaxed font-semibold italic mb-2">
                                            {track.description}
                                        </p>
                                        
                                        <div className="space-y-3">
                                            {previewModules.map((mod) => (
                                                <Link 
                                                    key={mod.id}
                                                    href={mod.href}
                                                    className="block p-4 rounded-xl border border-zinc-200 bg-white hover:border-indigo-400 hover:shadow-sm transition-all group"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-700 font-mono shrink-0 mt-0.5">
                                                            {mod.id}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs font-bold text-zinc-900 group-hover:text-indigo-700 transition-colors flex items-center gap-1.5">
                                                                {mod.name.replace(/^\d+(\.\d+)?\s*/, '')}
                                                            </h4>
                                                            <p className="text-[10px] text-zinc-500 font-mono mt-1">
                                                                Topics: {mod.topics}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="pt-2 text-center">
                                            <Link 
                                                href="/vault/curriculum/tracks" 
                                                className="inline-flex items-center gap-1.5 text-[10px] font-bold font-mono text-indigo-600 hover:text-indigo-800 uppercase tracking-widest"
                                            >
                                                <GraduationCap className="w-3.5 h-3.5" />
                                                View all {track.modules.length} modules of this track ({remainingCount} more) →
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
