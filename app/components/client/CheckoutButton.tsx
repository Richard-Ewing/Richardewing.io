'use client';

import { useState } from 'react';
import { FileText, Key, Lock } from 'lucide-react';
import { useUser, useClerk } from '@clerk/nextjs';
import { PRODUCTS } from '@/lib/products';

interface CheckoutButtonProps {
    productId: string;
    label?: string;
    icon?: 'file' | 'key' | 'lock' | 'none';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    moduleId?: string; // used for single_module routing
}

export default function CheckoutButton({ productId, label, icon = 'file', variant = 'primary', moduleId }: CheckoutButtonProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const { user, isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const handleCheckout = () => {

        setLoading(true);
        const product = PRODUCTS[productId];
        if (product?.paymentLink) {
            const url = new URL(product.paymentLink);
            if (user?.id) {
                const referenceId = productId === 'single_module' && moduleId ? `${user.id}::module_${moduleId}` : `${user.id}::${productId}`;
                url.searchParams.append('client_reference_id', referenceId);
            }
            if (user?.primaryEmailAddress?.emailAddress) {
                url.searchParams.append('prefilled_email', user.primaryEmailAddress.emailAddress);
            }
            window.open(url.toString(), '_blank');
        }
        setTimeout(() => setLoading(false), 1000);
    };

    const IconComponent = icon === 'key' ? Key : icon === 'lock' ? Lock : FileText;

    let baseClass = "flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm font-semibold transition-opacity ";
    if (variant === 'primary') baseClass += "bg-gradient-to-r from-violet-600 to-purple-600 text-zinc-950 font-semibold hover:opacity-90 shadow-lg";
    else if (variant === 'secondary') baseClass += "bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400";
    else if (variant === 'ghost') baseClass = "block w-full py-3 mt-4 text-center text-xs font-bold font-mono uppercase tracking-widest rounded bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors";
    else baseClass += "border border-zinc-500 text-zinc-950 font-bold hover:bg-zinc-50";

    const defaultLabel = `Get Access  -  $${PRODUCTS[productId]?.price ? PRODUCTS[productId].price / 100 : 29}`;

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className={baseClass}
        >
            {icon !== 'none' && <IconComponent className="w-4 h-4 inline-block mr-2" />}
            {loading ? 'Redirecting...' : (label || defaultLabel)}
        </button>
    );
}
