'use client';

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PdfExportButtonProps {
  /** The element ID of the container to export. E.g. 'results-container' */
  targetId: string;
  /** The filename of the downloaded PDF. E.g. 'Exogram_PDI_Report.pdf' */
  filename: string;
  /** Button label. Defaults to 'Generate Executive Board Report (PDF)' */
  label?: string;
}

export default function PdfExportButton({
  targetId,
  filename,
  label = 'Generate Executive Board Report (PDF)',
}: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) {
      console.error(`Export Target #${targetId} not found.`);
      return;
    }

    try {
      setIsExporting(true);

      // Temporarily add a class or tweak styles if needed before canvas
      // For instance, forcing white background so transparent dark mode doesn't look bad
      const originalBg = targetEl.style.backgroundColor;
      targetEl.style.backgroundColor = 'var(--background, #ffffff)';

      // Use a custom scale to improve PDF sharpness from canvas
      const htmlToImage = await import('html-to-image');
      const jsPDFModule = await import('jspdf');

      const jsPDFFactory = jsPDFModule.default || jsPDFModule.jsPDF;

      // Disable animations temporarily to prevent Recharts SVG rendering bugs & Framer Motion mid-transition scaling bugs
      const originalWidth = targetEl.style.width;
      const originalMaxWidth = targetEl.style.maxWidth;
      const originalTransform = targetEl.style.transform;
      targetEl.style.width = '1024px';
      targetEl.style.maxWidth = '1024px';
      
      const animatedElements = targetEl.querySelectorAll('*');
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

      // PAGE BREAK SYNCHRONIZATION LOGIC
      // BIG FIX: We only target DIRECT CHILDREN of the export wrapper to prevent grid blowout.
      const A4_HEIGHT_IN_PX = 1024 * (297 / 210); // ~1448.23px
      const blocks = Array.from(targetEl.children);
      
      blocks.forEach((node) => {
          const el = node as HTMLElement;
          const style = window.getComputedStyle(el);
          if (style.position === 'absolute' || style.position === 'fixed') return;
          
          const targetRect = targetEl.getBoundingClientRect(); 
          const rect = el.getBoundingClientRect();
          const relativeTop = rect.top - targetRect.top;
          const height = rect.height;

          if (height === 0 || height > (A4_HEIGHT_IN_PX * 0.8)) return;

          const startPage = Math.floor(relativeTop / A4_HEIGHT_IN_PX);
          const endPage = Math.floor((relativeTop + height) / A4_HEIGHT_IN_PX);

          if (startPage !== endPage) {
              const nextPageStartPx = (startPage + 1) * A4_HEIGHT_IN_PX;
              const pushAmount = nextPageStartPx - relativeTop + 40;
              
              const currentMargin = parseFloat(style.marginTop) || 0;
              el.setAttribute('data-pdf-margin-top', el.style.marginTop);
              el.style.marginTop = `${currentMargin + pushAmount}px`;
          }
      });

      // Uncloak scrollable lists
      const scrollContainers = targetEl.querySelectorAll('.overflow-y-auto, .overflow-auto, .max-h-64, .max-h-96');
      scrollContainers.forEach(el => {
          const node = el as HTMLElement;
          node.setAttribute('data-pdf-overflow', node.style.overflow);
          node.setAttribute('data-pdf-max-height', node.style.maxHeight);
          node.style.setProperty('overflow', 'visible', 'important');
          node.style.setProperty('max-height', 'none', 'important');
      });

      await new Promise(resolve => setTimeout(resolve, 600));

      const imgData = await htmlToImage.toPng(targetEl, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        style: { transform: 'none' },
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

      targetEl.style.width = originalWidth;
      targetEl.style.maxWidth = originalMaxWidth;
      targetEl.style.transform = originalTransform;
      animatedElements.forEach(el => {
          const node = el as HTMLElement;
          if (node.style) {
              node.style.removeProperty('transition');
              node.style.removeProperty('animation');
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

      targetEl.style.backgroundColor = originalBg;
      
      // Calculate aspect ratio
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (targetEl.offsetHeight * imgWidth) / targetEl.offsetWidth;
      
      let heightLeft = imgHeight;
      const pdf = new jsPDFFactory('p', 'mm', 'a4');
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Handle multi-page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    } catch (err: any) {
      console.error('Failed to generate PDF:', err);
      alert('There was an issue generating the PDF. Please try again: ' + String(err.message || err));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`
        mt-8 w-full py-4 rounded-xl font-bold tracking-tight uppercase flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group
        ${isExporting 
          ? 'bg-zinc-50 border border-zinc-200 text-zinc-950 cursor-not-allowed border-zinc-400 border' 
          : 'bg-indigo-600 hover:bg-indigo-700 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]'
        }
      `}
    >
      {/* Glossy overlay effect built in */}
      {!isExporting && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out z-0"></div>
      )}
      
      {/* Icon & Label */}
      <span className="z-10 flex items-center gap-2 relative">
        {isExporting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-indigo-900 font-extrabold font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Report...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            {label}
          </>
        )}
      </span>
    </button>
  );
}
