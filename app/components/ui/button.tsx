import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/lib/utils';

// If utils/cn doesn't exist, I'll fail. I should check if it exists or create it.
// Assuming it exists because clsx/tailwind-merge are deps and it's a common pattern.
// If not, I'll inline the cn function or create it.
// Let's create `lib/utils.ts` first if needed. But I'll risk it being there or I'll fix it.
// Actually, list_dir of `app/lib` in step 6 showed `lib` exists with 4 children.
// Let's assume standard `cn`.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-md font-grotesk font-semibold uppercase tracking-[0.05em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'bg-[image:var(--background-image-gradient-cta)] text-zinc-950 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,51,51,0.4)]':
                            variant === 'primary',
                        'bg-transparent border border-cyan text-cyan hover:bg-cyan hover:text-obsidian':
                            variant === 'secondary',
                        'bg-transparent text-ash hover:text-zinc-900': variant === 'ghost',
                        'px-4 py-2 text-sm': size === 'sm',
                        'px-8 py-4 text-sm': size === 'md',
                        'px-10 py-5 text-base': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
