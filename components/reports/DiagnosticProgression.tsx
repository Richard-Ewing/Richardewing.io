import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Shield, Calculator } from 'lucide-react';
import { getDiagnosticProgression, DiagnosticTool, NextStepRecommendation } from '@/lib/diagnostics/orchestration';

interface DiagnosticProgressionProps {
    currentTool: DiagnosticTool;
    score: number;
}

export function DiagnosticProgression({ currentTool, score }: DiagnosticProgressionProps) {
    const recommendations = getDiagnosticProgression(currentTool, score);

    if (recommendations.length === 0) return null;

    const getIcon = (toolId: string) => {
        switch (toolId) {
            case 'pdi': return <Activity className="w-5 h-5" />;
            case 'aper': return <Calculator className="w-5 h-5" />;
            case 'aueb': return <Calculator className="w-5 h-5" />;
            case 'exogram': return <Shield className="w-5 h-5 text-cyan-600" />;
            default: return <ArrowRight className="w-5 h-5" />;
        }
    };

    return (
        <div className="mt-12 border-t border-zinc-200 pt-8 pb-8">
            <h3 className="text-xl font-bold text-zinc-950 mb-6">Recommended Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((rec, i) => (
                    <Link 
                        key={i} 
                        href={rec.href}
                        className={`block p-6 rounded-xl border transition-all hover:shadow-md ${
                            rec.urgency === 'high' 
                            ? 'bg-zinc-50 border-zinc-300 hover:border-zinc-400' 
                            : 'bg-white border-zinc-200 hover:border-zinc-300'
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${rec.urgency === 'high' ? 'bg-zinc-200' : 'bg-zinc-100'}`}>
                                {getIcon(rec.toolId)}
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-zinc-900">{rec.title}</h4>
                                    {rec.urgency === 'high' && (
                                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-wider">
                                            Priority
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                    {rec.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
