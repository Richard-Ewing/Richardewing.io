'use client';

import React from 'react';
import { Lock } from 'lucide-react';
import Link from 'next/link';

export interface RecommendedTrack {
    id: string;
    title: string;
    desc: string;
}

interface VaultUpsellProps {
    recommendedTracks: RecommendedTrack[];
    urgencyLevel?: 'critical' | 'growth';
}

export function VaultUpsell({ recommendedTracks, urgencyLevel = 'critical' }: VaultUpsellProps) {
    const isCritical = urgencyLevel === 'critical';
    
    // Theming logic based on urgency 
    const borderColor = isCritical ? 'border-red-500/30' : 'border-emerald-500/30';
    const glowColor = isCritical ? 'bg-red-500/10' : 'bg-emerald-500/10';
    const headerBorderColor = isCritical ? 'border-red-500/20' : 'border-emerald-500/20';
    const iconColor = isCritical ? 'text-red-500' : 'text-emerald-500';
    const cardHoverColor = isCritical ? 'hover:border-red-500/30' : 'hover:border-emerald-500/30';
    const trackIdColor = isCritical ? 'text-red-800 font-semibold' : 'text-emerald-800 font-semibold';
    
    // Copy modifications depending on the tool's calculated score
    const headline = isCritical ? "The Architecture is Failing. Deploy the Fix." : "Accelerate Your Market Lead.";
    const subheadline = isCritical 
        ? "You are bleeding capital. Do not execute a single line of code until your executive team understands the economic physics of engineering debt and AI displacement logic."
        : "Your baseline is stable, but entropy never sleeps. Arm your executive team with the exact economic blueprints specifically required to dominate your competitors.";

    return (
        <div className={`capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 my-8 border-2 ${borderColor} overflow-hidden relative`} data-html2canvas-ignore>
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${glowColor} rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none`}></div>
            
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 relative z-10 border-b ${headerBorderColor} pb-6`}>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Lock className={`w-4 h-4 ${iconColor}`} />
                        <span className={`font-mono text-xs uppercase tracking-widest ${iconColor} font-bold`}>Mandatory Executive Training</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-2">{headline}</h3>
                    <p className="text-zinc-900 max-w-2xl text-sm leading-relaxed">
                        {subheadline}
                    </p>
                </div>
                {/* Value Anchor Frame */}
                <div className="bg-white/50 border border-zinc-400 rounded-xl p-4 shrink-0 text-center w-full sm:w-auto">
                    <div className="text-xs font-medium font-mono uppercase tracking-widest text-zinc-950 mb-1">Consulting Equivalent Value</div>
                    <div className={`text-xl font-bold text-zinc-950 line-through decoration-2 mb-1 ${isCritical ? 'decoration-red-500/50' : 'decoration-emerald-500/50'}`}>$15,000+</div>
                    <div className="text-xs font-medium font-mono text-cyan-500">Vault Access: $1,495</div>
                </div>
            </div>

            {/* Injected Curriculum Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-10">
                {recommendedTracks.map((track, idx) => (
                    <div key={idx} className={`bg-white border border-zinc-400 rounded-xl p-5 transition-colors ${cardHoverColor}`}>
                        <div className={`text-xs font-mono mb-2 ${trackIdColor}`}>{track.id}</div>
                        <div className="text-lg font-bold text-zinc-950 mb-2">{track.title}</div>
                        <div className="text-sm text-zinc-950 leading-relaxed">{track.desc}</div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <a 
                    href="/api/buy/enterprise/enterprise_curriculum_license" 
                    className={`w-full sm:w-2/3 py-5 bg-gradient-to-r font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 hover:text-black ${
                        isCritical 
                        ? 'from-red-600 to-orange-600 hover:from-white hover:to-white shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]' 
                        : 'from-emerald-600 to-cyan-600 hover:from-white hover:to-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]'
                    }`}
                >
                    <Lock className="w-5 h-5" /> Unlock Full Enterprise Framework Now
                </a>
                <p className="text-xs font-medium font-mono text-zinc-800 mt-4 uppercase tracking-widest">Instant access to all 29 tracks • 290+ technical modules</p>
            </div>
        </div>
    );
}
