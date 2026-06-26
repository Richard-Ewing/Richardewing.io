'use client';

import React from 'react';
import { ShieldAlert, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface DiagnosticCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    metrics?: string[];
    variant?: 'danger' | 'warning' | 'primary';
}

export default function DiagnosticCTA({
    title = "Are you bleeding $58K/engineer/year in hidden AI maintenance costs?",
    subtitle = "Vibe coding creates technical debt. AI hallucinations cause 19% slower reviews. Stop the margin collapse before your CFO asks for the Copilot ROI.",
    buttonText = "Take the AI Economics Diagnostic Audit →",
    metrics = ["41% AI Code", "29% Trust", "58K/yr Debt"],
    variant = 'danger'
}: DiagnosticCTAProps) {
    const colorMap = {
        danger: {
            bg: 'bg-red-500/5',
            border: 'border-red-500/20',
            iconBg: 'bg-red-500/10',
            iconText: 'text-red-600',
            badgeBg: 'bg-red-500/10',
            badgeText: 'text-red-700',
            button: 'bg-red-600 hover:bg-red-700 text-zinc-900 shadow-red-500/20',
            buttonSubtext: 'text-red-600'
        },
        warning: {
            bg: 'bg-amber-500/5',
            border: 'border-amber-500/20',
            iconBg: 'bg-amber-500/10',
            iconText: 'text-amber-600',
            badgeBg: 'bg-amber-500/10',
            badgeText: 'text-amber-700',
            button: 'bg-amber-600 hover:bg-amber-700 text-zinc-900 shadow-amber-500/20',
            buttonSubtext: 'text-amber-600'
        },
        primary: {
            bg: 'bg-cyan-500/5',
            border: 'border-cyan-500/20',
            iconBg: 'bg-cyan-500/10',
            iconText: 'text-cyan-600',
            badgeBg: 'bg-cyan-500/10',
            badgeText: 'text-cyan-700',
            button: 'bg-cyan-600 hover:bg-cyan-700 text-zinc-900 shadow-cyan-500/20',
            buttonSubtext: 'text-cyan-600'
        }
    };

    const colors = colorMap[variant];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full ${colors.bg} ${colors.border} border rounded-2xl p-6 sm:p-8 my-8 relative overflow-hidden`}
        >
            {/* Background elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${colors.iconBg} blur-3xl rounded-full opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                {/* Icon block */}
                <div className={`shrink-0 w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center`}>
                    <ShieldAlert className={`w-8 h-8 ${colors.iconText}`} />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${colors.badgeBg} ${colors.badgeText} flex items-center gap-1.5`}>
                            <Activity className="w-3 h-3" />
                            Diagnostic Interceptor
                        </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 leading-tight mb-2 tracking-tight">
                        {title}
                    </h3>
                    
                    <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                        {subtitle}
                    </p>
                    
                    {/* Metrics Row */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        {metrics.map((m, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${colors.iconBg} drop-shadow-md`} />
                                <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">{m}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a 
                            href="/api/buy/gut_check" 
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl ${colors.button}`}
                        >
                            {buttonText}
                        </a>
                        <a 
                            href="/services" 
                            className={`text-sm font-semibold hover:underline ${colors.buttonSubtext}`}
                        >
                            View Advisory Retainers
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
