import type { Metadata } from 'next';
import Link from "next/link";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
    title: 'Securing Your Advisory Session | Richard Ewing',
    description: 'Your transaction is pending secure verification. Connect with your advisor to finalize your R&D capital audit or diagnostic call.',
    alternates: {
        canonical: 'https://www.richardewing.io/checkout-pending',
    },
};

export default function CheckoutPending() {
    return (
        <div className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-md w-full mx-4 text-center">
                <div className="w-16 h-16 mx-auto bg-violet-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                    <Lock className="w-8 h-8 text-violet-400" />
                </div>
                <h1 className="text-3xl font-bold font-grotesk text-zinc-950 mb-4">Enterprise Checkout Pending</h1>
                <p className="text-zinc-700 mb-8 leading-relaxed">
                    This premium licensing tier is currently being securely integrated with Stripe. 
                    Please return shortly or contact your account representative to manually process this transaction.
                </p>
                <Link 
                    href="/vault/curriculum/tracks"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-zinc-400 text-zinc-950 font-bold hover:border-violet-400 hover:bg-violet-50/30 transition-all font-mono tracking-widest text-sm uppercase"
                >
                    ← Return to Curriculum
                </Link>
            </div>
        </div>
    );
}
