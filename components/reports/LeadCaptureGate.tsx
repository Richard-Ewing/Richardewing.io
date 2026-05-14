'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { Lock } from 'lucide-react';
import { NewsletterForm } from '@/components/newsletter-form';

interface LeadCaptureGateProps {
    toolName: string;
    extraData?: Record<string, any>;
    children: React.ReactNode;
}

export function LeadCaptureGate({ toolName, extraData, children }: LeadCaptureGateProps) {
    const { isSignedIn } = useUser();
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        // Automatically grant access if they are signed in via Clerk
        if (isSignedIn) {
            setHasAccess(true);
        } else {
            // Check session storage to see if they unlocked this gate recently
            const unlocked = sessionStorage.getItem(`lead_gate_${toolName}`);
            if (unlocked === 'true') {
                setHasAccess(true);
            }
        }
    }, [isSignedIn, toolName]);

    const handleSuccess = () => {
        sessionStorage.setItem(`lead_gate_${toolName}`, 'true');
        setHasAccess(true);
    };

    if (hasAccess) {
        return <>{children}</>;
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-md mt-6">
            {/* Softened blur effect */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none blur-[2px] overflow-hidden">
                 {children}
            </div>

            <div className="relative z-10 p-6 md:p-10 text-center bg-gradient-to-b from-white/80 to-zinc-50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-200">
                    <Lock className="w-5 h-5 text-zinc-600" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Executive Access Required</h3>
                <p className="text-zinc-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                    Unlock the full operational report, category benchmark comparisons, and deterministic governance recommendations.
                </p>

                <div className="max-w-sm mx-auto">
                    <NewsletterForm 
                        buttonText="Unlock Executive Report" 
                        extraData={{ tool: toolName, ...extraData }}
                        redirectTo="" // Don't redirect, let them see it here
                        onSuccess={handleSuccess}
                    />
                </div>
            </div>
        </div>
    );
}
