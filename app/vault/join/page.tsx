'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Users, ChevronLeft, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function JoinTeamPage() {
    const router = useRouter();
    const [inviteCode, setInviteCode] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!inviteCode || !inviteCode.startsWith('REQ-')) {
            setStatus('error');
            setErrorMessage('Invalid invite code format. Must start with REQ-');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/team/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inviteCode: inviteCode.trim() }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'Failed to join team');
            }

            setStatus('success');
            // Give them a moment to see the success state before redirecting back to vault
            setTimeout(() => {
                router.push('/vault');
                router.refresh();
            }, 2000);

        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
            <div className="w-full max-w-lg">
                
                <Link href="/vault" className="inline-flex items-center text-xs font-bold text-zinc-800 uppercase tracking-widest hover:text-zinc-900 transition-colors mb-8">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Vault
                </Link>

                <div className="card p-8 md:p-12 border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.05] to-transparent relative overflow-hidden">
                    {/* Background flare */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    
                    <div className="relative z-10 text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                            <Users className="w-8 h-8 text-cyan-500" />
                        </div>
                        <h1 className="text-3xl font-grotesk font-bold text-zinc-950 mb-3">
                            Claim Enterprise Seat
                        </h1>
                        <p className="text-zinc-900 text-sm">
                            Enter the secure team code provided by your administrator to instantly unlock full curriculum and platform access.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="relative z-10">
                        <div className="mb-6">
                            <label htmlFor="inviteCode" className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-2">
                                Team Invite Code
                            </label>
                            <input 
                                type="text" 
                                id="inviteCode"
                                value={inviteCode}
                                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                                placeholder="REQ-XXXXXX-XXXXXX"
                                className="w-full bg-white border border-zinc-400 rounded-xl px-5 py-4 text-zinc-950 font-mono text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors uppercase placeholder:normal-case placeholder:text-zinc-950 placeholder:font-sans"
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>

                        {status === 'error' && (
                            <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-red-200">{errorMessage}</div>
                            </div>
                        )}

                        {status === 'success' ? (
                            <div className="w-full py-4 rounded-xl border border-green-500/50 bg-green-500/20 flex items-center justify-center gap-2 text-green-400 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                <CheckCircle2 className="w-5 h-5" /> Seat Claimed Successfully
                            </div>
                        ) : (
                            <button 
                                type="submit" 
                                disabled={status === 'loading' || !inviteCode}
                                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
                                    status === 'loading' || !inviteCode 
                                    ? 'bg-zinc-200 text-zinc-950 cursor-not-allowed' 
                                    : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                                }`}
                            >
                                {status === 'loading' ? (
                                    <span className="animate-pulse">Verifying Code...</span>
                                ) : (
                                    <>Join Team & Unlock Vault <ArrowRight className="w-4 h-4" /></>
                                )}
                            </button>
                        )}
                        
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-zinc-800 font-mono uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3" /> Encrypted Code Verification
                        </div>
                    </form>
                </div>

            </div>
        </main>
    );
}
