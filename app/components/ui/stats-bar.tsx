import { HTMLAttributes } from 'react';
import { cn } from '@/app/lib/utils';

interface StatsBarProps extends HTMLAttributes<HTMLDivElement> {
    stats: {
        value: React.ReactNode;
        label: string;
    }[];
}

export function StatsBar({ stats, className, ...props }: StatsBarProps) {
    return (
        <div
            className={cn(
                'grid grid-cols-2 gap-8 border-y border-steel py-8 sm:grid-cols-4',
                className
            )}
            {...props}
        >
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="font-grotesk text-3xl font-bold sm:text-4xl tabular-nums">
                        {stat.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.1em] text-gray-500 font-grotesk">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
