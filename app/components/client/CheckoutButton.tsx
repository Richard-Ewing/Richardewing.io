'use client';

import { useState } from 'react';
import { FileText, Key, Lock } from 'lucide-react';
import { useUser, useClerk } from '@clerk/nextjs';
import { PRODUCTS } from '@/lib/products';

interface CheckoutButtonProps {
    productId: string;
    label?: string;
    icon?: 'file' | 'key' | 'lock';
    variant?: 'primary' | 'secondary' | 'outline';
    moduleId?: string; // used for single_module routing
}

export default function CheckoutButton({ productId, label, icon = 'file', variant = 'primary', moduleId }: CheckoutButtonProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const { user, isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const handleCheckout = () => {
        if (!isSignedIn) {
            openSignIn();
            return;
        }
        
        setLoading(true);
        const product = PRODUCTS[productId];
        if (product?.paymentLink) {
            const url = new URL(product.paymentLink);
            if (user?.id) {
                const referenceId = productId === 'single_module' && moduleId ? `${user.id}::module_${moduleId}` : user.id;
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

    let baseClass = "flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-opacity ";
    if (variant === 'primary') baseClass += "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90";
    else if (variant === 'secondary') baseClass += "bg-emerald-500 text-black hover:bg-emerald-400";
    else baseClass += "border border-zinc-300 text-white hover:bg-white/5";

    const defaultLabel = `Unlock — $${PRODUCTS[productId]?.price ? PRODUCTS[productId].price / 100 : 29}`;

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className={baseClass}
        >
            <IconComponent className="w-4 h-4" />
            {loading ? 'Redirecting...' : (label || defaultLabel)}
        </button>
    );
}
