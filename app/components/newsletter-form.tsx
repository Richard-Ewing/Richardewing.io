'use client';

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

interface NewsletterFormProps {
    id?: string;
    placeholder?: string;
    buttonText?: string;
    className?: string;
    extraData?: Record<string, string | number | undefined>;
    redirectTo?: string;
}

export function NewsletterForm({
    id = "xzddbpwy",
    placeholder = "your@email.com",
    buttonText = "Get Updates",
    className = "",
    extraData,
    redirectTo = "/checklist"
}: NewsletterFormProps) {
    const [state, handleSubmit] = useForm(id);
    const lastSubmittedEmailRef = useRef<string>('');
    const router = useRouter();
    const { user } = useUser();
    
    const defaultEmail = user?.primaryEmailAddress?.emailAddress || "";

    // Fire-and-forget to Beehiiv when Formspree succeeds, then redirect
    useEffect(() => {
        if (state.succeeded && lastSubmittedEmailRef.current) {
            const email = lastSubmittedEmailRef.current;
            const source = extraData?.tool ? String(extraData.tool) : 'newsletter_form';
            fetch('/api/beehiiv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source }),
            }).catch(() => {});

            // Redirect after brief success flash
            if (redirectTo) {
                const timer = setTimeout(() => router.push(redirectTo), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [state.succeeded]);

    // Wrap handleSubmit to capture the email before submission
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget);
        lastSubmittedEmailRef.current = formData.get('email') as string || '';
        handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className={`p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center ${className}`}>
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-widest">Signal Received</h3>
                <p className="text-zinc-400 text-xs mt-1">You've been added to the protocol.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleFormSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
            {extraData && Object.entries(extraData).map(([key, value]) => (
                value !== undefined && <input key={key} type="hidden" name={key} value={value} />
            ))}
            <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={placeholder}
                    defaultValue={defaultEmail}
                    readOnly={!!defaultEmail}
                    required
                    disabled={state.submitting}
                    className="w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-white/5 read-only:text-zinc-400 font-mono text-sm"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="absolute -bottom-5 left-0 text-[10px] text-red-500"
                />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-wait"
            >
                {state.submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <>
                        {buttonText} <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
