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
        colorClasses: 'from-cyan-50 to-blue-50 border-cyan-300 text-cyan-700 group-hover:border-cyan-400 group-hover:shadow-md ring-cyan-300',
        icon: <BookOpen className="w-6 h-6 mb-4" />,
        stats: 'Tracks 1–4'
    },
    { 
        id: 'ai-economics', 
        label: 'AI, Cloud & Agent Economics', 
        description: 'AI pricing strategy, Cloud FinOps, agent architecture, agentic automation, governance & trust infrastructure, and AI due diligence.', 
        colorClasses: 'from-violet-50 to-fuchsia-50 border-violet-300 text-violet-700 group-hover:border-violet-400 group-hover:shadow-md ring-violet-300',
        icon: <Cpu className="w-6 h-6 mb-4" />,
        stats: 'Tracks 5–11, 19–21'
    },
    { 
        id: 'career', 
        label: 'Career, Leadership & Teams', 
        description: 'From IC to executive. Compensation economics, promotion frameworks, leadership as a learnable skill, remote team economics, and developer experience.', 
        colorClasses: 'from-amber-50 to-orange-50 border-amber-300 text-amber-700 group-hover:border-amber-400 group-hover:shadow-md ring-amber-300',
        icon: <TrendingUp className="w-6 h-6 mb-4" />,
        stats: 'Tracks 12–15, 17, 22'
    },
    { 
        id: 'executive', 
        label: 'Executive & Board Economics', 
        description: 'Board reporting, EBITDA translation, M&A integration, vendor & contract negotiation, executive presence, and board leadership.', 
        colorClasses: 'from-indigo-50 to-purple-50 border-indigo-300 text-indigo-700 group-hover:border-indigo-400 group-hover:shadow-md ring-indigo-300',
        icon: <Crown className="w-6 h-6 mb-4" />,
        stats: 'Tracks 4, 9–10, 13, 16, 18, 23'
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
                                    : 'bg-white hover:bg-zinc-50 text-zinc-500 hover:text-zinc-700 border-zinc-200 hover:border-zinc-300'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className={`relative flex items-center justify-between w-full transition-colors duration-300 ${isActive ? '' : 'text-zinc-600 group-hover:text-zinc-800'}`}>
                                {college.icon}
                                <span className={`text-[10px] font-mono tracking-widest px-2 py-1 rounded-md border ${isActive ? 'bg-white/60 border-zinc-200' : 'bg-transparent border-transparent text-zinc-600'}`}>
                                    {college.stats}
                                </span>
                            </div>

                            <div className="relative z-10 w-full mt-2">
                                <h3 className={`text-lg font-bold font-grotesk tracking-wide mb-2 transition-colors ${isActive ? 'text-zinc-900' : 'group-hover:text-zinc-900'}`}>
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
