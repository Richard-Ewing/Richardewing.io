'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberTickerProps {
    value: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    duration?: number;
}

export function NumberTicker({ value, prefix = '', suffix = '', className = '', duration = 2000 }: NumberTickerProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Easing: ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplayValue(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return (
        <span ref={ref} className={`tabular-nums ${className}`}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}
