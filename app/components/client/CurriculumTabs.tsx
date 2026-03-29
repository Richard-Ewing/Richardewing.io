'use client';

import React, { useState } from 'react';

interface TabCategory {
    id: string;
    label: string;
    description: string;
    color: string;
}

const CATEGORIES: TabCategory[] = [
    { id: 'foundations', label: '1. Foundations', description: 'Core Executive Tracks (1-4)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { id: 'architectures', label: '2. Architectures', description: 'Specialized Systems (5-14)', color: 'text-violet-400 border-violet-500/30 bg-violet-500/10' },
    { id: 'megatrends', label: '3. Mega Trends', description: 'Hyper-Niche (18-30)', color: 'text-pink-400 border-pink-500/30 bg-pink-500/10' },
    { id: 'operations', label: '4. Operations', description: 'Core Software (31-35)', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { id: 'leadership', label: '5. Leadership', description: 'Promotion Trajectories (36-40)', color: 'text-orange-400 border-orange-500/30 bg-orange-500/10' },
    { id: 'corporate', label: '6. Corporate IT', description: 'Old School Economics (41-50)', color: 'text-zinc-300 border-zinc-500/30 bg-zinc-500/10' },
    { id: 'playbooks', label: '7. Playbooks', description: 'Free Resources (15-17)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
];

export default function CurriculumTabs({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<string>('foundations');

    // Children array mapping to match the 7 categories above.
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full">
            {/* The Horizontal Scrolling Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 pb-4 border-b border-white/5 snap-x">
                {CATEGORIES.map(category => {
                    const isActive = activeTab === category.id;
                    return (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`snap-start flex-shrink-0 text-left px-5 py-3 rounded-xl border transition-all duration-300 ${
                                isActive 
                                    ? category.color + ' shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                                    : 'border-white/5 bg-white/[0.02] text-zinc-500 hover:bg-white/[0.05] hover:text-white'
                            }`}
                        >
                            <div className="text-sm font-bold whitespace-nowrap">{category.label}</div>
                            <div className="text-[10px] font-mono mt-1 opacity-70 uppercase tracking-widest">{category.description}</div>
                        </button>
                    )
                })}
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
