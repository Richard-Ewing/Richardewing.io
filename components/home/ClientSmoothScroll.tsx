"use client";

import dynamic from "next/dynamic";

const SmoothScrollInternal = dynamic(() => import("./SmoothScroll"), {
  ssr: false,
});

export default function ClientSmoothScroll() {
  return <SmoothScrollInternal />;
}
