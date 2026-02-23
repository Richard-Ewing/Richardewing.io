'use client';

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, ArrowRight, Loader2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolGateProps {
    children: React.ReactNode;
    toolName?: string;
}

export default function ToolGate({ children, toolName = "This Diagnostic" }: ToolGateProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [hasCheckedState, setHasCheckedState] = useState(false);

    // Using the same form ID as the newsletter form for consistent tracking
    const formId = "xzddbpwy";
    const [state, handleSubmit] = useForm(formId);

    useEffect(() => {
        // Check local storage on component mount
        const unlockStatus = localStorage.getItem('richardewing_tools_unlocked');
        if (unlockStatus === 'true') {
            setIsUnlocked(true);
        }
        setHasCheckedState(true);
    }, []);

    useEffect(() => {
        if (state.succeeded) {
            localStorage.setItem('richardewing_tools_unlocked', 'true');
            setIsUnlocked(true);
        }
    }, [state.succeeded]);

    if (!hasCheckedState) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-t-2 border-cyan-500 animate-spin"></div>
            </div>
        );
    }

    if (isUnlocked) {
        return <>{children}</>;
    }

    return (
        <div className="w-full bg-zinc-900/30 border border-white/10 rounded-3xl text-white flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden my-8 shadow-2xl backdrop-blur-sm">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl w-full text-center z-10"
            >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <Lock className="w-8 h-8 text-cyan-400" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
                    Access Restricted
                </h1>

                <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
                    Enter your email to unlock {toolName} and all other board-room ready diagnostics.
                </p>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="hidden" name="source" value={`${toolName} Gate`} />

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                disabled={state.submitting}
                                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="absolute -bottom-6 left-0 text-xs text-red-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="mt-2 w-full py-4 bg-white hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {state.submitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Unlock Diagnostics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-[10px] text-zinc-500 font-mono mt-6 uppercase tracking-widest">
                        Zero spam. Just high-leverage insights for product leaders.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
