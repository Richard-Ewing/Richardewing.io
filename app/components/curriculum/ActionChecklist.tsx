'use client';

import { useState, useEffect } from 'react';
import { CheckSquare, Square, Rocket } from 'lucide-react';

interface ActionChecklistProps {
    id: string;
    items: string[];
}

export default function ActionChecklist({ id, items }: ActionChecklistProps) {
    const [checked, setChecked] = useState<Record<number, boolean>>({});
    const [loaded, setLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(`curriculum-checklist-${id}`);
            if (stored) {
                try {
                    setChecked(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse checklist progress", e);
                }
            }
            setLoaded(true);
        }
    }, [id]);

    const toggle = (idx: number) => {
        const next = { ...checked, [idx]: !checked[idx] };
        setChecked(next);
        if (typeof window !== 'undefined') {
            localStorage.setItem(`curriculum-checklist-${id}`, JSON.stringify(next));
        }
    };

    const completedCount = Object.values(checked).filter(Boolean).length;
    const progress = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
    const safeId = id.replace(/[^a-zA-Z0-9-]/g, '');

    return (
        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 mt-8 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500/10 text-amber-500 border-b border-l border-amber-500/20 text-xs font-bold font-medium font-mono uppercase tracking-widest rounded-bl-lg flex items-center gap-1">
                <Rocket className="w-3 h-3" />
                Execution Checklist
            </div>
            
            <div className="flex items-end justify-between mb-6 pr-32">
                <h3 className="text-lg font-grotesk font-bold text-zinc-900">Action Items</h3>
                <div className="text-xs font-bold font-mono text-zinc-900">{progress}% Complete</div>
            </div>

            <div className="w-full bg-zinc-200 h-1 rounded-full mb-6 overflow-hidden">
                <style dangerouslySetInnerHTML={{ __html: `.action-progress-${safeId} { width: ${progress}%; }` }} />
                <div className={`h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out action-progress-${safeId}`} />
            </div>
            
            <div className="space-y-2">
                {items.map((item, idx) => {
                    const isChecked = !!checked[idx];
                    return (
                        <button 
                            key={idx}
                            onClick={() => toggle(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${isChecked ? 'bg-zinc-50 border-zinc-400 opacity-60 hover:opacity-100' : 'bg-white border-zinc-300 hover:bg-zinc-100/50'}`}
                        >
                            <div className="shrink-0 mt-0.5 text-amber-500">
                                {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 opacity-50" />}
                            </div>
                            <span className={`text-sm font-semibold md:text-base transition-all ${isChecked ? 'text-zinc-950 line-through font-medium' : 'text-zinc-900'}`}>
                                {item}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
