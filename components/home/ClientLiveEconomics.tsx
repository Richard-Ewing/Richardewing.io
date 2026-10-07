"use client";

import dynamic from "next/dynamic";

const LiveEconomicsInternal = dynamic(() => import("./LiveEconomics"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[360px] flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm" />
  ),
});

export default function ClientLiveEconomics() {
  return <LiveEconomicsInternal />;
}
