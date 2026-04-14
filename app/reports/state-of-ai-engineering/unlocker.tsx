"use client";

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ReportUnlocker() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const router = useRouter();

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setLoading(true);
        // Simulate an auth/capture delay
        setTimeout(() => {
            setLoading(false);
            setUnlocked(true);
            
            // In a real app we would set a massive cookie or call Clerk here.
            localStorage.setItem('has_unlocked_ai_report', 'true');
            
            // Redirect them to the dashboard/command center immediately to consume their unlocked asset.
            setTimeout(() => {
                router.push("/tools/dashboard?unlocked=ai-report-2026");
            }, 1500);
            
        }, 1200);
    };

    if (unlocked) {
        return (
            <div className="animate-in fade-in zoom-in duration-500 p-6 rounded-xl bg-green-500/10 border border-green-500/30 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
                <h4 className="text-xl font-bold text-white">Access Granted</h4>
                <p className="text-sm text-green-200">
                    Securing your telemetry packet... Transferring to Command Center.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Executive Email</label>
                <input 
                    type="email" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="cto@enterprise.com"
                    className="w-full bg-black border border-zinc-200 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-mono text-sm"
                />
            </div>
            
            <button 
                type="submit"
                disabled={loading}
                className="w-full relative group overflow-hidden bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <span className="animate-pulse">Authenticating...</span>
                ) : (
                    <>
                        <Sparkles size={16} /> 
                        Unlock Now 
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
            <p className="text-[10px] text-zinc-600 font-mono text-center">
                By unlocking, you agree to receive high-leverage architectural intelligence. No spam. Ever.
            </p>
        </form>
    );
}
