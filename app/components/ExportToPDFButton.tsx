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
        setIsExporting(true);
        try {
            if (onBeforeExport) {
                const canProceed = await onBeforeExport();
                if (!canProceed) {
                    setIsExporting(false);
                    return;
                }
            }

            const htmlToImage = await import('html-to-image');
            const jsPDFModule = await import('jspdf');
            const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;

            const element = document.getElementById(targetId);
            if (!element) throw new Error(`Element with id ${targetId} not found`);

            // ── Phase 1: Prepare the DOM for capture ──────────────────────
            const originalWidth = element.style.width;
            const originalMaxWidth = element.style.maxWidth;
            const originalTransform = element.style.transform;
            
            // Disable all animations and force visibility
            const animatedElements = element.querySelectorAll('*');
            animatedElements.forEach(el => {
                const node = el as HTMLElement;
                if (node.style) {
                    node.style.setProperty('transition', 'none', 'important');
                    node.style.setProperty('animation', 'none', 'important');
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
            
            // Expand all scrollable containers to full height
            const scrollContainers = element.querySelectorAll('.overflow-y-auto, .overflow-auto, .max-h-64, .max-h-96');
            scrollContainers.forEach(el => {
                const node = el as HTMLElement;
                node.setAttribute('data-pdf-overflow', node.style.overflow);
                node.setAttribute('data-pdf-max-height', node.style.maxHeight);
                node.style.setProperty('overflow', 'visible', 'important');
                node.style.setProperty('max-height', 'none', 'important');
            });
            
            // Wait for reflow
            await new Promise(resolve => setTimeout(resolve, 100));

            // ── Phase 2: Compute optimal slice points ─────────────────────
            // Walk ALL descendant elements (not just direct children) to find
            // every gap between blocks. Then for each page boundary, pick the
            // gap closest to (but before) the boundary to slice at.
            const containerRect = element.getBoundingClientRect();
            const totalHeight = element.scrollHeight;
            const PAGE_WIDTH = 1024;
            const A4_RATIO = 297 / 210; // ~1.4143
            const PAGE_HEIGHT = Math.floor(PAGE_WIDTH * A4_RATIO); // ~1448px

            // Collect bottom edges of all block-level descendants
            const allElements = element.querySelectorAll('div, section, table, ul, ol, h1, h2, h3, h4, p, article, header, footer, main, aside, nav, figure, blockquote, li');
            const bottomEdges: number[] = [];
            
            allElements.forEach(el => {
                const node = el as HTMLElement;
                const style = window.getComputedStyle(node);
                if (style.display === 'none' || style.position === 'fixed') return;
                const rect = node.getBoundingClientRect();
                const bottom = Math.round(rect.bottom - containerRect.top);
                if (bottom > 0 && bottom < totalHeight) {
                    bottomEdges.push(bottom);
                }
            });

            // Deduplicate and sort
            const uniqueEdges = [...new Set(bottomEdges)].sort((a, b) => a - b);

            // For each page boundary, find the best slice point
            const slicePoints: number[] = [0]; // Start of first page
            let pageIndex = 1;
            
            while (pageIndex * PAGE_HEIGHT < totalHeight) {
                const idealCut = pageIndex * PAGE_HEIGHT;
                
                // Search for the nearest element bottom edge that's ABOVE the ideal cut
                // but within a reasonable range (don't go more than 35% back)
                const minCut = idealCut - PAGE_HEIGHT * 0.35;
                
                let bestCut = idealCut; // fallback: hard cut
                let bestDistance = Infinity;
                
                for (const edge of uniqueEdges) {
                    if (edge >= minCut && edge <= idealCut) {
                        const distance = idealCut - edge;
                        if (distance < bestDistance) {
                            bestDistance = distance;
                            bestCut = edge;
                        }
                    }
                }
                
                slicePoints.push(bestCut);
                pageIndex++;
            }
            slicePoints.push(totalHeight); // End of last page

            // Wait for Recharts / SVG rendering
            await new Promise(resolve => setTimeout(resolve, 600));

            // ── Phase 3: Capture the full container as one image ──────────
            const imgData = await htmlToImage.toPng(element, {
                pixelRatio: 2,
                backgroundColor: '#ffffff',
                style: { transform: 'none' },
                filter: (node: HTMLElement) => {
                    if (node?.hasAttribute && node.hasAttribute('data-html2canvas-ignore')) return false;
                    if (node?.classList?.contains('export-ignore')) return false;
                    return true;
                }
            });

            // ── Phase 4: Restore DOM ──────────────────────────────────────
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
            scrollContainers.forEach(node => {
                const el = node as HTMLElement;
                el.style.overflow = el.getAttribute('data-pdf-overflow') || '';
                el.style.maxHeight = el.getAttribute('data-pdf-max-height') || '';
                el.removeAttribute('data-pdf-overflow');
                el.removeAttribute('data-pdf-max-height');
            });

            // ── Phase 5: Slice image and build multi-page PDF ─────────────
            // Load the captured image into a canvas so we can crop regions
            const img = new Image();
            img.src = imgData;
            await new Promise<void>((resolve, reject) => {
                img.onload = () => resolve();
                img.onerror = reject;
            });

            const pixelRatio = 2;
            const imgNaturalWidth = img.naturalWidth;
            const imgNaturalHeight = img.naturalHeight;
            const scaleX = imgNaturalWidth / PAGE_WIDTH;
            const scaleY = imgNaturalHeight / totalHeight;

            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pdfPageWidthMM = pdf.internal.pageSize.getWidth();
            const pdfPageHeightMM = pdf.internal.pageSize.getHeight();

            for (let i = 0; i < slicePoints.length - 1; i++) {
                if (i > 0) pdf.addPage();

                const sliceTop = slicePoints[i];
                const sliceBottom = slicePoints[i + 1];
                const sliceHeightPx = sliceBottom - sliceTop;

                // Crop this slice from the full image
                const cropCanvas = document.createElement('canvas');
                cropCanvas.width = imgNaturalWidth;
                cropCanvas.height = Math.round(sliceHeightPx * scaleY);
                const ctx = cropCanvas.getContext('2d')!;
                
                // Fill white background first
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
                
                // Draw the relevant slice
                ctx.drawImage(
                    img,
                    0, Math.round(sliceTop * scaleY),           // source x, y
                    imgNaturalWidth, Math.round(sliceHeightPx * scaleY), // source w, h
                    0, 0,                                        // dest x, y
                    imgNaturalWidth, Math.round(sliceHeightPx * scaleY)  // dest w, h
                );

                const sliceDataUrl = cropCanvas.toDataURL('image/png');
                
                // Calculate height in mm, maintaining aspect ratio
                const sliceHeightMM = (sliceHeightPx / PAGE_WIDTH) * pdfPageWidthMM * A4_RATIO / A4_RATIO;
                const actualSliceHeightMM = (sliceHeightPx * pdfPageWidthMM) / PAGE_WIDTH;
                
                // Place at top of page
                pdf.addImage(sliceDataUrl, 'PNG', 0, 0, pdfPageWidthMM, actualSliceHeightMM);
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
