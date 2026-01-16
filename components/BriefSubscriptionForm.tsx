"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BriefSubscriptionFormProps {
    buttonText?: string;
    loadingText?: string;
    successText?: string;
    successMessage?: string;
    title?: string;
    description?: string;
    showSocialProof?: boolean;
    className?: string;
}

export function BriefSubscriptionForm({
    buttonText = "Subscribe for Access",
    loadingText = "AUTHENTICATING...",
    successText = "SUBSCRIBED",
    successMessage = "// WELCOME TO THE BOARD. REDIRECTING...",
    title = "Unlock the Full Archive",
    description = "Get the weekly briefing that 4,000+ product leaders use to bridge the gap between engineering reality and financial viability.",
    showSocialProof = true,
    className
}: BriefSubscriptionFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const PDF_URL = "/canonical/senior-ceiling.html";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                window.location.href = PDF_URL;
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className={cn("flex flex-col justify-center h-full", className)}>
            {showSocialProof && (
                <div className="inline-block bg-cyan/10 text-cyan text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-4 rounded-full self-start">
                    Join 4,000+ Operators
                </div>
            )}

            {title && <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>}
            {description && <p className="text-zinc-400 mb-8 leading-relaxed">{description}</p>}

            <form action="https://formspree.io/f/xzddbpwy" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    name="email"
                    placeholder="enter_corporate_email"
                    required
                    className="bg-black/50 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-cyan transition w-full font-mono text-sm uppercase tracking-widest"
                />

                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="bg-white text-black font-bold px-8 py-4 uppercase tracking-widest text-xs rounded-xl hover:bg-cyan hover:scale-105 transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? loadingText : status === "success" ? successText : buttonText}
                </button>
            </form>

            {status === "success" && (
                <p className="text-cyan font-mono text-xs mt-4 text-center uppercase tracking-widest">
                    {successMessage}
                </p>
            )}
            {status === "error" && (
                <p className="text-danger font-mono text-xs mt-4 text-center uppercase tracking-widest">
                    // ERROR. TRY AGAIN.
                </p>
            )}
        </div>
    );
}
