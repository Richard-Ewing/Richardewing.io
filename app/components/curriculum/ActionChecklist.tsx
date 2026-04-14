'use client';

import { useState } from 'react';
import { CheckSquare, Square, Rocket } from 'lucide-react';

export default function ActionChecklist({ items }: { items: string[] }) {
    const [checked, setChecked] = useState<Record<number, boolean>>({});

    const toggle = (idx: number) => {
        setChecked(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const completedCount = Object.values(checked).filter(Boolean).length;
    const progress = Math.round((completedCount / items.length) * 100);

    return (
        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500/10 text-amber-400 border-b border-l border-amber-500/20 text-[10px] font-mono uppercase tracking-widest rounded-bl-lg flex items-center gap-1">
                <Rocket className="w-3 h-3" />
                Execution Checklist
            </div>
            
            <div className="flex items-end justify-between mb-6 pr-32">
                <h3 className="text-lg font-grotesk font-bold text-zinc-900">Action Items</h3>
                <div className="text-xs font-mono text-zinc-900">{progress}% Complete</div>
            </div>

            <div className="w-full bg-white/5 h-1 rounded-full mb-6 overflow-hidden">
                <style dangerouslySetInnerHTML={{ __html: `.action-progress { width: ${progress}%; }` }} />
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out action-progress" />
            </div>
            
            <div className="space-y-2">
                {items.map((item, idx) => {
                    const isChecked = !!checked[idx];
                    return (
                        <button 
                            key={idx}
                            onClick={() => toggle(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${isChecked ? 'bg-zinc-50 border-zinc-400 opacity-60 hover:opacity-100' : 'bg-white/[0.04] border-zinc-400 hover:bg-white/[0.08]'}`}
                        >
                            <div className="shrink-0 mt-0.5 text-amber-500">
                                {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 opacity-50" />}
                            </div>
                            <span className={`text-sm md:text-base transition-all ${isChecked ? 'text-zinc-950 line-through' : 'text-zinc-900'}`}>
                                {item}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
