'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Deliverable {
    label: string;
    url: string;
}

interface Phase {
    number: string;
    title: string;
    timeline: string;
    focus: string;
    deliverables: Deliverable[];
    color: string;
}

interface ResearchTimelineProps {
    phases: Phase[];
}

export default function ResearchTimeline({ phases }: ResearchTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Track scroll progress of the timeline section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Animate height scaling from 0 to 1
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="mb-20 relative">
            {/* Center static grey line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-300 -translate-x-1/2" />
            
            {/* Center animated gradient line */}
            <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 -translate-x-1/2"
            />

            <div className="space-y-12">
                {phases.map((phase, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={phase.number} className={`flex flex-col sm:flex-row items-start sm:items-center relative ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10" />

                            {/* Content Card */}
                            <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                                <div className={`p-6 bg-white border border-zinc-300 rounded-3xl shadow-sm hover:border-indigo-500 transition-colors ${phase.color}`}>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded">
                                            {phase.number}
                                        </span>
                                        <span className="text-xs font-mono font-bold text-zinc-950">
                                            {phase.timeline}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-2">
                                        {phase.title}
                                    </h3>
                                    <p className="text-xs text-zinc-900 leading-relaxed font-semibold mb-4">
                                        {phase.focus}
                                    </p>
                                    
                                    {/* Deliverable Links */}
                                    <div className="pt-3 border-t border-zinc-200">
                                        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-2">Core Deliverables</span>
                                        <div className="flex flex-col gap-1.5">
                                            {phase.deliverables.map((del, dIdx) => (
                                                <Link 
                                                    key={dIdx} 
                                                    href={del.url}
                                                    target={del.url.startsWith('http') ? '_blank' : undefined}
                                                    rel={del.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-xs font-bold text-cyan-900 hover:text-cyan-950 transition-colors inline-flex items-center gap-1"
                                                >
                                                    • {del.label} <span className="opacity-60 text-[9px]">{del.url.startsWith('http') ? '↗' : '→'}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Invisible spacer to balance the flex row */}
                            <div className="hidden sm:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
