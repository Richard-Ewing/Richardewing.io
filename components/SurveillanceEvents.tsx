"use client";

import { useEffect } from "react";

export function SurveillanceEvents() {
    useEffect(() => {
        console.log('SURVEILLANCE ENGINE: ACTIVE [v16.0]');

        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');

            // Toast for Access Denied
            if (href === '#' || href === '') {
                e.preventDefault();
                const toast = document.createElement('div');
                toast.innerText = 'ACCESS DENIED: CLEARANCE REQUIRED';
                toast.style.cssText = `position: fixed; bottom: 20px; right: 20px; background: #FF3333; color: white; padding: 12px 24px; font-family: monospace; font-weight: bold; border: 1px solid white; z-index: 9999; box-shadow: 0 10px 30px rgba(0,0,0,0.5);`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
}
