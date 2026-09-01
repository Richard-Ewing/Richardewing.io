'use client';

import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, ArrowRight, Loader2, Lock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { useUTMs } from '../hooks/useUTMs';

interface ToolGateProps {
    children: React.ReactNode;
    toolName?: string;
    toolSlug?: string;
    mappedCurriculumId?: string;
    /** Called when the user successfully submits their email. Use this to trigger the tool's calculation. */
    onUnlock?: () => void;
}

export default function ToolGate({ children, toolName = "This Diagnostic", toolSlug, mappedCurriculumId, onUnlock }: ToolGateProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [email, setEmail] = useState('');
    const [usesCounter, setUsesCounter] = useState(0);
    const formRef = useRef<HTMLFormElement>(null);
    const utms = useUTMs();

    // Using the same form ID as the newsletter form for consistent tracking
    const formId = "xzddbpwy";
    const [state, handleFormspreeSubmit] = useForm(formId);
    
    const { isLoaded, isSignedIn, user } = useUser();

    // Check usage limits locally on mount
    React.useEffect(() => {
        const storedUses = localStorage.getItem('exogram_tool_uses');
        if (storedUses) {
            setUsesCounter(parseInt(storedUses, 10));
        }
    }, []);

    // Evaluate Paid Entitlements
    const isVaultMaster = user?.publicMetadata?.has_yearly_subscription === true;
    const unlockedAssets = (user?.publicMetadata?.unlocked_items as string[]) || [];
    const hasToolAsset = toolSlug ? unlockedAssets.includes(toolSlug) : false;
    const hasCurriculumAsset = mappedCurriculumId ? unlockedAssets.includes(mappedCurriculumId) : false;
    const hasPaidEntitlement = isVaultMaster || hasToolAsset || hasCurriculumAsset;

    // Auto-access if user has paid entitlements
    React.useEffect(() => {
        if (isLoaded && isSignedIn && hasPaidEntitlement && !isUnlocked) {
            setIsUnlocked(true);
            onUnlock?.();
        }
    }, [isLoaded, isSignedIn, hasPaidEntitlement, isUnlocked, onUnlock]);

    // Auto-access (bypass form) for signed-in free users BUT increment their local counter
    React.useEffect(() => {
        if (isLoaded && isSignedIn && user?.primaryEmailAddress?.emailAddress && !isUnlocked && !hasPaidEntitlement) {
            if (usesCounter < 3) {
                 fetch('/api/beehiiv', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.primaryEmailAddress.emailAddress, source: `${toolName} Gate (Auto)` }),
                }).catch(() => {});
                
                const newCount = usesCounter + 1;
                setUsesCounter(newCount);
                localStorage.setItem('exogram_tool_uses', newCount.toString());
                
                setIsUnlocked(true);
                onUnlock?.();
            }
        }
    }, [isLoaded, isSignedIn, isUnlocked, onUnlock, user, toolName, usesCounter, hasPaidEntitlement]);

    // When Formspree submission succeeds, access and trigger callback
    React.useEffect(() => {
        if (state.succeeded) {
            const newCount = usesCounter + 1;
            setUsesCounter(newCount);
            if (!hasPaidEntitlement) {
                localStorage.setItem('exogram_tool_uses', newCount.toString());
            }
            setIsUnlocked(true);
            onUnlock?.();
        }
    }, [state.succeeded, onUnlock, usesCounter, isSignedIn, hasPaidEntitlement]);

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

        const formData = new FormData();
        formData.append('email', email);
        formData.append('source', `${toolName} Gate`);
        Object.entries(utms).forEach(([key, value]) => {
            formData.append(key, value);
        });
        handleFormspreeSubmit(formData);

        // Step 3: Await Beehiiv to guarantee the request leaves the browser before the component unmounts
        try {
            await fetch('/api/beehiiv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: `${toolName} Gate` }),
            });
        } catch {
            // Ignore Beehiiv errors
        }
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    const isLimitExceeded = usesCounter >= 3 && !hasPaidEntitlement;

    if (isLimitExceeded) {
        return (
            <div className="w-full bg-white/80 border border-red-500/20 rounded-3xl text-zinc-950 flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden my-8 shadow-2xl backdrop-blur-sm shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent_70%)] pointer-events-none" />
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl w-full text-center z-10">
                    <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                        <Lock className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-zinc-900">Diagnostic Limit Reached</h2>
                    <p className="text-zinc-900 text-lg mb-8 max-w-md mx-auto">
                        You have exceeded the maximum number of free generic diagnostic scans. To continue evaluating systems via {toolName}, please join the Vault.
                    </p>
                    <a href="/vault/join" className="block w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest text-sm font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]">
                        Upgrade & Access Vault →
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full bg-white/40 border border-zinc-400 rounded-3xl text-zinc-950 flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden my-8 shadow-2xl backdrop-blur-sm shrink-0">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl w-full text-center z-10"
            >
                <div className="w-16 h-16 bg-white/5 border border-zinc-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <Lock className="w-8 h-8 text-cyan-900 font-extrabold font-semibold" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
                    Enter Email to Continue
                </h1>

                <p className="text-zinc-900 text-lg mb-8 max-w-md mx-auto">
                    Enter your email to access {toolName} results.
                </p>

                <div className="bg-white/5 border border-zinc-400 p-6 md:p-8 rounded-3xl backdrop-blur-md">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="hidden" name="source" value={`${toolName} Gate`} />
                        {Object.entries(utms).map(([key, value]) => (
                            <input key={key} type="hidden" name={key} value={value} />
                        ))}

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-900" />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                disabled={state.submitting || isValidating}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setValidationError(''); }}
                                className="w-full pl-12 pr-4 py-4 bg-white/50 border border-zinc-400 rounded-xl text-zinc-950 placeholder:text-zinc-900 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="absolute -bottom-6 left-0 text-xs font-bold text-zinc-900 font-bold"
                            />
                        </div>

                        {/* Validation error display */}
                        {validationError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-900 font-extrabold font-semibold text-sm"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>{validationError}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={state.submitting || isValidating}
                            className="mt-2 w-full py-4 bg-white hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {(state.submitting || isValidating) ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Get Results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-xs font-bold font-medium text-zinc-950 font-mono mt-6 uppercase tracking-widest">
                        Zero spam. Just high-use insights for product leaders.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
