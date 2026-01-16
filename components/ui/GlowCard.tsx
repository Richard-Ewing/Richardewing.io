"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowCard({
    children,
    className,
    glowColor = "rgba(0, 85, 255, 0.5)" // Default Cobalt
}: GlowCardProps) {
    return (
        <div className={cn("relative group", className)}>
            <div
                className="absolute -inset-0.5 rounded-[2.1rem] opacity-20 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 pointer-events-none"
                style={{ background: `linear-gradient(to right, ${glowColor}, transparent, ${glowColor})` }}
            />
            <div className={cn(
                "relative rounded-[2rem] bg-black/80 backdrop-blur-xl h-full border border-white/10 p-8",
                "transition-all duration-300 hover:border-white/20 hover:scale-[1.01]"
            )}>
                {children}
            </div>
        </div>
    );
}
