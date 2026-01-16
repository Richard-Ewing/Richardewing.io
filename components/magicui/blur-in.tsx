"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
}

export function BlurIn({
    word,
    className,
    variant,
    duration = 1,
}: BlurInProps) {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration }}
            viewport={{ once: true }}
            variants={combinedVariants}
            className={cn(
                className,
            )}
        >
            {word}
        </motion.h1>
    );
}
