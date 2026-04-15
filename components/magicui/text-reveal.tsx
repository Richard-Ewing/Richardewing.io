"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/app/lib/utils";

interface TextRevealByWordProps {
    text: string;
    className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
    text,
    className,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
            <div
                className={
                    "sticky top-0 mx-auto flex h-screen max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
                }
            >
                <p
                    className={
                        "flex flex-wrap p-5 text-2xl font-bold text-zinc-950 font-semibold/50 md:text-3xl lg:text-4xl xl:text-5xl"
                    }
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1]); // Start at 0.2 opacity (visible dim), animate to 1 (bright)
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <motion.span style={{ opacity: opacity }} className={"text-zinc-950 font-semibold"}>
                {children}
            </motion.span>
        </span>
    );
};

export default TextRevealByWord;
