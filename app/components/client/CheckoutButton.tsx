'use client';

import { useState } from 'react';
import { FileText, Key, Lock } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { PRODUCTS } from '@/lib/products';

interface CheckoutButtonProps {
    productId: string;
    label?: string;
    icon?: 'file' | 'key' | 'lock' | 'none';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    moduleId?: string; // used for single_module routing
    source?: string; // optional attribution slug for client_reference_id
}

export default function CheckoutButton({ productId, label, icon = 'file', variant = 'primary', moduleId, source }: CheckoutButtonProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useUser();

    const handleCheckout = () => {
        setLoading(true);
        try {
            const product = PRODUCTS[productId];
            if (product?.paymentLink && typeof window !== 'undefined') {
                const url = new URL(product.paymentLink, window.location.origin);
                if (url.hostname.endsWith('stripe.com')) {
                    const sanitizeSeg = (val: string, fallback: string, maxLen: number) =>
                        val
                            .replace(/--+/g, '-')
                            .replace(/[^a-zA-Z0-9_-]/g, '')
                            .replace(/^-+|-+$/g, '')
                            .slice(0, maxLen) || fallback;
                    const safeProductId = sanitizeSeg(productId, 'item', 60);
                    if (user?.id) {
                        const safeModuleId = moduleId ? sanitizeSeg(moduleId, 'mod', 40) : '';
                        const referenceId =
                            productId === 'single_module' && safeModuleId
                                ? `${user.id}--module_${safeModuleId}`
                                : `${user.id}--${safeProductId}`;
                        url.searchParams.set('client_reference_id', referenceId.slice(0, 200));
                    } else {
                        const rawPath = window.location.pathname
                            .replace(/^\/+|\/+$/g, '')
                            .replace(/\//g, '_');
                        const safeSource = sanitizeSeg(source || rawPath || 'button', 'button', 40);
                        url.searchParams.set(
                            'client_reference_id',
                            `guest--${safeSource}--${safeProductId}`.slice(0, 200)
                        );
                    }
                    if (user?.primaryEmailAddress?.emailAddress) {
                        url.searchParams.set('prefilled_email', user.primaryEmailAddress.emailAddress);
                    }
                }
                window.open(url.toString(), '_blank', 'noopener,noreferrer');
            }
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    };

    const IconComponent = icon === 'key' ? Key : icon === 'lock' ? Lock : FileText;

    let baseClass = "flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-opacity ";
    if (variant === 'primary') baseClass += "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 shadow-lg";
    else if (variant === 'secondary') baseClass += "bg-emerald-600 text-white hover:bg-emerald-500";
    else if (variant === 'ghost') baseClass = "block w-full py-3 mt-4 text-center text-xs font-bold font-mono uppercase tracking-widest rounded bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors";
    else baseClass += "border border-zinc-500 text-zinc-950 font-bold hover:bg-zinc-50";

    const defaultLabel = `Get Access - $${PRODUCTS[productId]?.price ? PRODUCTS[productId].price / 100 : 29}`;

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
