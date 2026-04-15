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
            const htmlToImage = await import('html-to-image');
            const jsPDFModule = await import('jspdf');
            
            const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;

            const element = document.getElementById(targetId);
            if (!element) throw new Error(`Element with id ${targetId} not found`);

            // 1) Force the element to Desktop Width to guarantee A4 aspect ratio
            const originalWidth = element.style.width;
            const originalMaxWidth = element.style.maxWidth;
            const originalTransform = element.style.transform;
            
            // Disable animations temporarily to prevent Recharts SVG rendering bugs & Framer Motion mid-transition scaling bugs
            const animatedElements = element.querySelectorAll('*');
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.setProperty('transition', 'none', 'important');
                    node.style.setProperty('animation', 'none', 'important');
                }
            });

            element.style.width = '1024px';
            element.style.maxWidth = '1024px';
            // Slight delay to allow browser to reflow layout to 1024px
            await new Promise(resolve => setTimeout(resolve, 150));

            // 2) Snapshot the rigid DOM layer into a binary Canvas via html-to-image
            // html-to-image handles oklch and lab colors perfectly because it uses native SVG rendering
            const imgData = await htmlToImage.toPng(element, {
                pixelRatio: 2,
                backgroundColor: '#ffffff',
                style: {
                    transform: 'none',
                },
                filter: (node: HTMLElement) => {
                    if (node?.hasAttribute && node.hasAttribute('data-html2canvas-ignore')) {
                        return false;
                    }
                    if (node?.classList?.contains('export-ignore')) {
                        return false;
                    }
                    return true;
                }
            });

            // 3) Restore the original DOM state instantly
            element.style.width = originalWidth;
            element.style.maxWidth = originalMaxWidth;
            element.style.transform = originalTransform;
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.removeProperty('transition');
                    node.style.removeProperty('animation');
                }
            });
            // 4) Convert Canvas to jsPDF standard format
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (element.offsetHeight * pdfWidth) / element.offsetWidth;
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
            data-html2canvas-ignore="true"
            className={`export-ignore flex items-center justify-center gap-2 px-6 py-3 bg-cobalt hover:bg-cobalt/80 text-zinc-950 font-mono text-sm font-semibold uppercase tracking-widest rounded-lg transition-all disabled:opacity-50 disabled:cursor-wait shadow-[0_0_15px_rgba(45,112,253,0.3)] hover:shadow-[0_0_25px_rgba(45,112,253,0.5)] ${className}`}
        >
            {isExporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
            {isExporting ? 'Synthesizing PDF...' : 'Export to PDF'}
        </button>
    );
}
