"use client";

import { cn } from "@/app/lib/utils";

type TColor = string | string[];

interface ShineBorderProps {
    borderRadius?: number;
    borderWidth?: number;
    duration?: number;
    color?: TColor;
    className?: string;
    children: React.ReactNode;
}

/**
 * @name ShineBorder
 * @description A button with a dynamic shine border effect.
 * @param borderRadius The radius of the border.
 * @param borderWidth The width of the border.
 * @param duration The duration of the animation.
 * @param color The color of the shine.
 * @param className The class name of the component.
 * @param children The children of the component.
 */
export default function ShineBorder({
    borderRadius = 8,
    borderWidth = 1,
    duration = 14,
    color = "#000000",
    className,
    children,
}: ShineBorderProps) {
    return (
        <div
            style={
                {
                    "--border-radius": `${borderRadius}px`,
                } as React.CSSProperties
            }
            className={cn(
                "relative min-h-[60px] w-full min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-zinc-50 border border-zinc-300 dark:text-zinc-950 font-semibold",
                className,
            )}
        >
            <div
                style={
                    {
                        "--border-width": `${borderWidth}px`,
                        "--border-radius": `${borderRadius}px`,
                        "--duration": `${duration}s`,
                        "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                        "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color
                            }, transparent, transparent)`,
                    } as React.CSSProperties
                }
                className={`before:bg-shine-size pointer-events-none absolute inset-0 size-full rounded-[--border-radius] p-[--border-width] will-change-[background-position] content-[''] before:absolute before:inset-[-200%] before:animate-shine before:bg-[--background-radial-gradient] before:content-[''] before:[mask-composite:exclude] before:[mask-image:--mask-linear-gradient] motion-safe:before:animate-shine`}
            ></div>
            {children}
        </div>
    );
}
