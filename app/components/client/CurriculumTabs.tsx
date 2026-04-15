'use client';

import React, { useState } from 'react';

interface TabCategory {
    id: string;
    label: string;
    description: string;
    color: string;
}

const CATEGORIES: TabCategory[] = [
    { id: 'foundations', label: '1. Fundamentals', description: 'Core Economic Principles (1-4)', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-800 font-semibold shadow-[0_0_20px_rgba(34,211,238,0.15)] ring-1 ring-cyan-500/30' },
    { id: 'architectures', label: '2. Architectures', description: 'Systems & Infrastructure (5-14)', color: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/40 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)] ring-1 ring-violet-500/30' },
    { id: 'industry', label: '3. Industry Verticals', description: 'Applied Sector Strategies (18-30)', color: 'from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)] ring-1 ring-pink-500/30' },
    { id: 'operations', label: '4. Operations', description: 'Scaling & Execution (31-35)', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30' },
    { id: 'leadership', label: '5. Executive Leadership', description: 'Board-Level Communication (36-40)', color: 'from-orange-500/20 to-red-500/20 border-orange-500/40 text-orange-800 font-semibold shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/30' },
    { id: 'corporate', label: '6. Enterprise IT', description: 'Legacy Modernization (41-50)', color: 'from-zinc-400/20 to-zinc-500/20 border-zinc-500/40 text-zinc-950 shadow-[0_0_20px_rgba(161,161,170,0.15)] ring-1 ring-zinc-500/30' },
    { id: 'playbooks', label: '7. Execution Guides', description: 'Tactical Open Blueprints (15-17)', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-800 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30' },
];

export default function CurriculumTabs({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<string>('foundations');

    // Children array mapping to match the 7 categories above.
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full">
            {/* The Horizontal Scrolling Tabs UI */}
            <div className="relative mb-14 group">
                {/* Fade edges for infinite scroll feel */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-x-auto hide-scrollbar gap-2 snap-x px-4 py-2 bg-zinc-50 backdrop-blur-xl border border-zinc-400 shadow-2xl rounded-2xl">
                    {CATEGORIES.map(category => {
                        const isActive = activeTab === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`snap-start relative flex-shrink-0 text-left px-6 py-4 rounded-xl transition-all duration-500 ease-out group/btn overflow-hidden ${
                                    isActive 
                                        ? `bg-gradient-to-br ${category.color} scale-[1.02]` 
                                        : 'bg-white/[0.01] hover:bg-white/[0.04] text-zinc-900 hover:text-zinc-900 border-transparent'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="text-sm font-bold whitespace-nowrap tracking-wide">{category.label}</div>
                                    <div className={`text-xs font-medium font-mono mt-1 uppercase tracking-widest ${isActive ? 'opacity-90' : 'opacity-50 text-zinc-950 group-hover/btn:text-zinc-800'}`}>
                                        {category.description}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* The Rendered Active Content */}
            <div className="animate-in fade-in duration-500">
                {CATEGORIES.map((category, index) => (
                    <div 
                        key={category.id} 
                        className={activeTab === category.id ? 'block' : 'hidden'}
                    >
                        {childrenArray[index]}
                    </div>
                ))}
            </div>
        </div>
    );
}
