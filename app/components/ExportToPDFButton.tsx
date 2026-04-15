'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useUser, useClerk } from '@clerk/nextjs';

export function ExportToPDFButton({ 
    targetId, 
    fileName = 'Exogram_Report.pdf', 
    className = '',
    onBeforeExport
}: { 
    targetId: string, 
    fileName?: string, 
    className?: string,
    onBeforeExport?: () => Promise<boolean>
}) {
    const [isExporting, setIsExporting] = useState(false);
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const handleExport = async () => {
        // [TEMP MOCK FOR DEBUG] Enforce Authentication Paygate for PDF Export
        // if (!isSignedIn) {
        //     openSignIn();
        //     return;
        // }

        setIsExporting(true);
        try {
            if (onBeforeExport) {
                const canProceed = await onBeforeExport();
                if (!canProceed) {
                    setIsExporting(false);
                    return;
                }
            }

            // Dynamically import heavy PDF engines only on click to prevent Next.js SSR crashes
            const h2cModule = await import('html2canvas');
            const jsPDFModule = await import('jspdf');
            
            const html2canvas = h2cModule.default || h2cModule;
            const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;

            const element = document.getElementById(targetId);
            if (!element) throw new Error(`Element with id ${targetId} not found`);

            // 1) Force the element to Desktop Width to guarantee A4 aspect ratio
            const originalWidth = element.style.width;
            const originalMaxWidth = element.style.maxWidth;
            const originalTransform = element.style.transform;
            
            // Disable animations temporarily to prevent Recharts SVG rendering bugs
            const animatedElements = element.querySelectorAll('.recharts-surface, .recharts-layer');
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.transition = 'none';
                    node.style.animation = 'none';
                }
            });

            element.style.width = '1024px';
            element.style.maxWidth = '1024px';
            // Slight delay to allow browser to reflow layout to 1024px
            await new Promise(resolve => setTimeout(resolve, 150));

            // 2) Snapshot the rigid DOM layer into a binary Canvas
            const canvas = await html2canvas(element, {
                scale: 2, // High resolution mode for crisp text
                logging: false,
                useCORS: true, 
                backgroundColor: '#0a0a0b', // Exogram background base
            });

            // 3) Restore the original DOM state instantly
            element.style.width = originalWidth;
            element.style.maxWidth = originalMaxWidth;
            element.style.transform = originalTransform;
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.transition = '';
                    node.style.animation = '';
                }
            });

            // 4) Convert Canvas to jsPDF standard format
            const imgData = canvas.toDataURL('image/png', 1.0);
            
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = pdfHeight;
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(fileName);
            
        } catch (error: any) {
            console.error('[PDF_ENGINE] Failed to synthesize PDF document:', error);
            alert('PDF Generation failed: ' + String(error.message || error));
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className={`flex items-center justify-center gap-2 px-6 py-3 bg-cobalt hover:bg-cobalt/80 text-zinc-950 font-mono text-sm font-semibold uppercase tracking-widest rounded-lg transition-all disabled:opacity-50 disabled:cursor-wait shadow-[0_0_15px_rgba(45,112,253,0.3)] hover:shadow-[0_0_25px_rgba(45,112,253,0.5)] ${className}`}
        >
            {isExporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
            {isExporting ? 'Synthesizing PDF...' : 'Export to PDF'}
        </button>
    );
}
