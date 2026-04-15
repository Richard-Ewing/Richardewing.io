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
            
            // Disable animations temporarily and force un-scrolled elements to be fully visible and in correct positions
            const animatedElements = element.querySelectorAll('*');
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.setProperty('transition', 'none', 'important');
                    node.style.setProperty('animation', 'none', 'important');
                    
                    // Defeat scroll-reveal hiding logic for blocks outside viewport
                    if (node.classList.contains('opacity-0') || node.classList.contains('translate-y-8')) {
                        node.setAttribute('data-pdf-opacity', node.style.opacity || '');
                        node.setAttribute('data-pdf-transform', node.style.transform || '');
                        node.style.setProperty('opacity', '1', 'important');
                        node.style.setProperty('transform', 'none', 'important');
                    }
                }
            });

            element.style.width = '1024px';
            element.style.maxWidth = '1024px';
            
            // Allow exact DOM reflow so we can calculate pixel heights
            await new Promise(resolve => setTimeout(resolve, 50));

            // PAGE BREAK SYNCHRONIZATION LOGIC
            const A4_HEIGHT_IN_PX = 1024 * (297 / 210); // ~1448.23px
            const blocks = Array.from(element.children);
            
            blocks.forEach((node) => {
                const el = node as HTMLElement;
                const style = window.getComputedStyle(el);
                if (style.position === 'absolute' || style.position === 'fixed') return;
                
                const targetRect = element.getBoundingClientRect(); 
                const rect = el.getBoundingClientRect();
                const relativeTop = rect.top - targetRect.top;
                const height = rect.height;

                if (height === 0 || height > (A4_HEIGHT_IN_PX * 0.75)) return;

                const startPage = Math.floor(relativeTop / A4_HEIGHT_IN_PX);
                const endPage = Math.floor((relativeTop + height) / A4_HEIGHT_IN_PX);
                
                // Account for 5% canvas drift. If the bottom of the block is within 70px of the boundary, push it to the next page.
                const absolutePageBottom = (startPage + 1) * A4_HEIGHT_IN_PX;
                const distanceFromBottom = absolutePageBottom - (relativeTop + height);

                if (startPage !== endPage || distanceFromBottom < 75) {
                    const nextPageStartPx = absolutePageBottom;
                    const pushAmount = nextPageStartPx - relativeTop + 40; // 40px buffer margin
                    
                    const currentMargin = parseFloat(style.marginTop) || 0;
                    el.setAttribute('data-pdf-margin-top', el.style.marginTop);
                    el.style.marginTop = `${currentMargin + pushAmount}px`;
                }
            });

            // SCROLL-TRUNCATION FIX:
            // Any container with max-height and overflow will physically truncate the PDF capture.
            // We must temporarily uncloak them to their full absolute height.
            const scrollContainers = element.querySelectorAll('.overflow-y-auto, .overflow-auto, .max-h-64, .max-h-96');
            scrollContainers.forEach(el => {
                const node = el as HTMLElement;
                node.setAttribute('data-pdf-overflow', node.style.overflow);
                node.setAttribute('data-pdf-max-height', node.style.maxHeight);
                node.style.setProperty('overflow', 'visible', 'important');
                node.style.setProperty('max-height', 'none', 'important');
            });

            // Recharts renders dynamically via ResizeObserver. If we don't wait long enough here, charts disappear.
            await new Promise(resolve => setTimeout(resolve, 600));

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

            // 5) Restore original DOM styles completely invisibly
            element.style.width = originalWidth;
            element.style.maxWidth = originalMaxWidth;
            element.style.transform = originalTransform;
            
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.transition = '';
                    node.style.animation = '';
                    if (node.hasAttribute('data-pdf-opacity')) {
                        node.style.opacity = node.getAttribute('data-pdf-opacity') || '';
                        node.style.transform = node.getAttribute('data-pdf-transform') || '';
                        node.removeAttribute('data-pdf-opacity');
                        node.removeAttribute('data-pdf-transform');
                    }
                }
            });
            blocks.forEach(node => {
                const el = node as HTMLElement;
                if (el.hasAttribute('data-pdf-margin-top')) {
                    el.style.marginTop = el.getAttribute('data-pdf-margin-top') || '';
                    el.removeAttribute('data-pdf-margin-top');
                }
            });
            scrollContainers.forEach(node => {
                const el = node as HTMLElement;
                el.style.overflow = el.getAttribute('data-pdf-overflow') || '';
                el.style.maxHeight = el.getAttribute('data-pdf-max-height') || '';
                el.removeAttribute('data-pdf-overflow');
                el.removeAttribute('data-pdf-max-height');
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
