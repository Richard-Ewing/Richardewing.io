import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'pricing';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border border-steel bg-graphite transition-colors duration-200',
                    {
                        'hover:border-cyan': variant === 'default',
                        'bg-none p-6': variant === 'default', // Padding handled by children or className if flexible
                        // Pricing card specific basic styles if any distinct ones
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export { Card };
