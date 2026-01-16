"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DockProps {
    items: {
        label: string;
        href: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}

export function Dock({ items, className }: DockProps) {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            className={cn(
                "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-16 items-center gap-4 rounded-2xl border border-white/10 bg-black/50 px-4 backdrop-blur-md shadow-2xl",
                className
            )}
        >
            {items.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="relative group flex items-center justify-center w-10 h-10 rounded-xl transition-all hover:bg-white/10"
                >
                    <span className="sr-only">{item.label}</span>
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
                        {item.label}
                    </span>
                    {item.icon || (
                        <div className="w-4 h-4 bg-zinc-500 rounded-full group-hover:bg-cyan transition-colors" />
                    )}
                </Link>
            ))}
        </motion.div>
    );
}
