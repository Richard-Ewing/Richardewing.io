"use client";

import { PageReveal } from "@/components/PageReveal";

export default function Template({ children }: { children: React.ReactNode }) {
    return <PageReveal>{children}</PageReveal>;
}
