'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CloudRepatriationTool = dynamic(() => import('@/app/tools/cloud-repatriation/content'), { ssr: false });
const DueDiligenceTool = dynamic(() => import('@/app/tools/due-diligence/content'), { ssr: false });
const PdiTool = dynamic(() => import('@/app/tools/pdi/content'), { ssr: false });
const AuebTool = dynamic(() => import('@/app/tools/aueb/content'), { ssr: false });
const AperTool = dynamic(() => import('@/app/tools/aper/content'), { ssr: false });
const EvSeTool = dynamic(() => import('@/app/tools/ev-se/content'), { ssr: false });

export default function ToolEmbed({ toolId }: { toolId: string }) {
    switch(toolId) {
        case 'cloud-repatriation': return <div className="mt-12 w-full"><CloudRepatriationTool /></div>;
        case 'due-diligence': return <div className="mt-12 w-full"><DueDiligenceTool /></div>;
        case 'pdi': return <div className="mt-12 w-full"><PdiTool /></div>;
        case 'aueb': return <div className="mt-12 w-full"><AuebTool /></div>;
        case 'aper': return <div className="mt-12 w-full"><AperTool /></div>;
        case 'ev-se': return <div className="mt-12 w-full"><EvSeTool /></div>;
        default: return null;
    }
}
