'use client';

import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, ArrowRight, Loader2, Lock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';

interface ToolGateProps {
    children: React.ReactNode;
    toolName?: string;
    /** Called when the user successfully submits their email. Use this to trigger the tool's calculation. */
    onUnlock?: () => void;
}

export default function ToolGate({ children, toolName = "This Diagnostic", onUnlock }: ToolGateProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [email, setEmail] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    // Using the same form ID as the newsletter form for consistent tracking
    const formId = "xzddbpwy";
    const [state, handleFormspreeSubmit] = useForm(formId);
    
    const { isLoaded, isSignedIn } = useUser();

    // Auto-unlock if user is already authenticated via Clerk
    React.useEffect(() => {
        if (isLoaded && isSignedIn && !isUnlocked) {
            setIsUnlocked(true);
            onUnlock?.();
        }
    }, [isLoaded, isSignedIn, isUnlocked, onUnlock]);

    // When Formspree submission succeeds, unlock and trigger callback
    React.useEffect(() => {
        if (state.succeeded) {
            setIsUnlocked(true);
            onUnlock?.();
        }
    }, [state.succeeded, onUnlock]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidationError('');

        if (!email) {
            setValidationError('Please enter your email address.');
            return;
        }

        // Step 1: Validate email via our API
        setIsValidating(true);
        try {
            const res = await fetch('/api/validate-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();

            if (!data.valid) {
                setValidationError(data.reason || 'Please enter a valid email address.');
                setIsValidating(false);
                return;
            }
        } catch {
            // If validation API fails, allow submission (don't block users)
            console.warn('Email validation API unavailable, proceeding with submission.');
        }
        setIsValidating(false);

        // Step 2: Submit to Formspree using FormData (tracks every tool use for funnel analytics)
        const formData = new FormData();
        formData.append('email', email);
        formData.append('source', `${toolName} Gate`);
        handleFormspreeSubmit(formData);

        // Step 3: Fire-and-forget to Beehiiv (Beehiiv handles dedup automatically)
        try {
            fetch('/api/beehiiv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: `${toolName} Gate` }),
            }).catch(() => {
                // Non-blocking — Beehiiv failure doesn't affect user experience
            });
        } catch {
            // Ignore Beehiiv errors
        }
    };

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
                    Enter Email to Continue
                </h1>

                <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
                    Enter your email to access {toolName} results.
                </p>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="hidden" name="source" value={`${toolName} Gate`} />

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                disabled={state.submitting || isValidating}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setValidationError(''); }}
                                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="absolute -bottom-6 left-0 text-xs text-red-500"
                            />
                        </div>

                        {/* Validation error display */}
                        {validationError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>{validationError}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={state.submitting || isValidating}
                            className="mt-2 w-full py-4 bg-white hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {(state.submitting || isValidating) ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Unlock Results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
