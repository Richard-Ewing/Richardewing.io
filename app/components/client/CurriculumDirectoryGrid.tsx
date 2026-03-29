'use client';

import React, { useState } from 'react';
import { BookOpen, Server, Building2, Briefcase, GraduationCap, Network, PocketKnife } from 'lucide-react';

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
        label: 'Core Business Strategy', 
        description: 'The foundational economics of engineering. Financial metrics, cost alignment, and strategic planning.', 
        colorClasses: 'from-cyan-950/40 to-blue-900/20 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-cyan-500/30',
        icon: <BookOpen className="w-6 h-6 mb-4" />,
        stats: 'Tracks 1-4'
    },
    { 
        id: 'architectures', 
        label: 'Technology Infrastructure', 
        description: 'Deep dives into the costs and ROI of data pipelines, AI infrastructure, and high-availability systems.', 
        colorClasses: 'from-violet-950/40 to-fuchsia-900/20 border-violet-500/30 text-violet-400 group-hover:border-violet-400/60 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ring-violet-500/30',
        icon: <Server className="w-6 h-6 mb-4" />,
        stats: 'Tracks 5-14'
    },
    { 
        id: 'megatrends', 
        label: 'Hyper-Niche Meta-Trends', 
        description: 'Neural-Symbolic AI, Synthetic Data Economics, Quantum Threat Modeling, and Bio-IT Integrations.', 
        colorClasses: 'from-sky-950/40 to-indigo-900/20 border-sky-500/30 text-sky-400 group-hover:border-sky-400/60 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] ring-sky-500/30',
        icon: <Network className="w-6 h-6 mb-4" />,
        stats: 'Tracks 23-30'
    },
    { 
        id: 'industry', 
        label: 'Industry-Specific Markets', 
        description: 'Targeted economic strategies for B2B SaaS, FinTech, Healthcare, E-Commerce, and DefenseTech sectors.', 
        colorClasses: 'from-pink-950/40 to-rose-900/20 border-pink-500/30 text-pink-400 group-hover:border-pink-400/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] ring-pink-500/30',
        icon: <Building2 className="w-6 h-6 mb-4" />,
        stats: 'Tracks 51-55'
    },
    { 
        id: 'operations', 
        label: 'Core Software Operations', 
        description: 'Mastering classic UI/UX design economics, agile delivery math, and full-stack software development.', 
        colorClasses: 'from-amber-950/40 to-orange-900/20 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] ring-amber-500/30',
        icon: <Briefcase className="w-6 h-6 mb-4" />,
        stats: 'Tracks 18-22, 31-35'
    },
    { 
        id: 'leadership', 
        label: 'Career Trajectory & Leadership', 
        description: 'Breaking into tech, stepping up to Staff/Principal, and crossing the chasm into CTO/VPE Management.', 
        colorClasses: 'from-orange-950/40 to-red-900/20 border-orange-500/30 text-orange-400 group-hover:border-orange-400/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] ring-orange-500/30',
        icon: <GraduationCap className="w-6 h-6 mb-4" />,
        stats: 'Tracks 36-41, 56-57'
    },
    { 
        id: 'corporate', 
        label: 'Corporate & Legacy IT', 
        description: 'Managing massive vendor implementations, legacy ERP migrations, and old-school infrastructure debt.', 
        colorClasses: 'from-zinc-800/40 to-zinc-900/20 border-zinc-500/30 text-zinc-300 group-hover:border-zinc-400/60 group-hover:shadow-[0_0_30px_rgba(161,161,170,0.15)] ring-zinc-500/30',
        icon: <Network className="w-6 h-6 mb-4" />,
        stats: 'Tracks 42-50'
    },
    { 
        id: 'playbooks', 
        label: 'Tactical Playbooks', 
        description: 'Step-by-step survival guides and open-source execution blueprints for immediate implementation.', 
        colorClasses: 'from-emerald-950/40 to-teal-900/20 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-emerald-500/30',
        icon: <PocketKnife className="w-6 h-6 mb-4" />,
        stats: 'Tracks 15-17'
    },
];

export default function CurriculumDirectoryGrid({ children }: { children: React.ReactNode }) {
    const [activeCollegiate, setActiveCollegiate] = useState<string>('foundations');

    // Children array mapping to match the 7 categories above.
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full">
            {/* Executive Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
                {COLLEGES.map(college => {
                    const isActive = activeCollegiate === college.id;
                    return (
                        <button
                            key={college.id}
                            onClick={() => {
                                setActiveCollegiate(college.id);
                                // Optional smooth scroll
                                window.scrollTo({ top: document.getElementById('curriculum-directory-content')?.offsetTop! - 100, behavior: 'smooth' });
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
