'use client';

import React, { useState } from 'react';
import { BookOpen, Cpu, TrendingUp, Crown, Globe, Briefcase } from 'lucide-react';

interface CategoryCard {
    id: string;
    label: string;
    description: string;
    colorClasses: string;
    icon: React.ReactNode;
    stats: string;
}

const COLLEGES: CategoryCard[] = [
    { 
        id: 'foundations', 
        label: 'Engineering Economics', 
        description: 'The core P&L curriculum: productivity metrics, technical debt, cost of delay, R&D capital management, and applied capstone projects.', 
        colorClasses: 'from-cyan-950/40 to-blue-900/20 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-cyan-500/30',
        icon: <BookOpen className="w-6 h-6 mb-4" />,
        stats: 'Tracks 1–4'
    },
    { 
        id: 'ai-economics', 
        label: 'AI & Cloud Economics', 
        description: 'AI pricing strategy, Cloud FinOps, inference cost arbitrage, build vs buy frameworks, technical debt as financial liability, and AI due diligence.', 
        colorClasses: 'from-violet-950/40 to-fuchsia-900/20 border-violet-500/30 text-violet-400 group-hover:border-violet-400/60 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ring-violet-500/30',
        icon: <Cpu className="w-6 h-6 mb-4" />,
        stats: 'Tracks 5–11'
    },
    { 
        id: 'career', 
        label: 'Career, Leadership & Remote Teams', 
        description: 'From IC to executive. Compensation economics, promotion frameworks, leadership as a learnable skill, remote team economics, and developer experience.', 
        colorClasses: 'from-amber-950/40 to-orange-900/20 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] ring-amber-500/30',
        icon: <TrendingUp className="w-6 h-6 mb-4" />,
        stats: 'Tracks 12–15, 17'
    },
    { 
        id: 'executive', 
        label: 'Executive, M&A & Vendor Economics', 
        description: 'Board reporting, EBITDA translation, M&A integration economics, vendor & contract negotiation, and the senior-to-executive transition.', 
        colorClasses: 'from-indigo-950/40 to-purple-900/20 border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400/60 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-indigo-500/30',
        icon: <Crown className="w-6 h-6 mb-4" />,
        stats: 'Tracks 13, 16, 18'
    },
];

export default function CurriculumDirectoryGrid({ children }: { children: React.ReactNode }) {
    const [activeCollegiate, setActiveCollegiate] = useState<string>('foundations');

    // Children array mapping to match the 4 categories above.
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full">
            {/* Executive Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {COLLEGES.map(college => {
                    const isActive = activeCollegiate === college.id;
                    return (
                        <button
                            key={college.id}
                            onClick={() => {
                                setActiveCollegiate(college.id);
                                // Optional smooth scroll
                                const el = document.getElementById('curriculum-directory-content');
                                if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
                            }}
                            className={`group relative flex flex-col items-start text-left p-6 w-full rounded-2xl border transition-all duration-500 ease-out overflow-hidden ${
                                isActive 
                                    ? `bg-gradient-to-br ring-1 scale-[1.02] border-opacity-100 ${college.colorClasses}` 
                                    : 'bg-white/[0.02] hover:bg-white/[0.04] text-zinc-400 hover:text-white border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className={`relative flex items-center justify-between w-full transition-colors duration-300 ${isActive ? '' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                {college.icon}
                                <span className={`text-[10px] font-mono tracking-widest px-2 py-1 rounded-md border ${isActive ? 'bg-black/20 border-white/10' : 'bg-transparent border-transparent text-zinc-600'}`}>
                                    {college.stats}
                                </span>
                            </div>

                            <div className="relative z-10 w-full mt-2">
                                <h3 className={`text-lg font-bold font-grotesk tracking-wide mb-2 transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                                    {college.label}
                                </h3>
                                <p className={`text-xs leading-relaxed transition-opacity ${isActive ? 'opacity-90' : 'opacity-60 group-hover:opacity-80'}`}>
                                    {college.description}
                                </p>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Content Anchor */}
            <div id="curriculum-directory-content" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {COLLEGES.map((college, index) => (
                    <div 
                        key={college.id} 
                        className={activeCollegiate === college.id ? 'block' : 'hidden'}
                    >
                        {childrenArray[index]}
                    </div>
                ))}
            </div>
        </div>
    );
}
