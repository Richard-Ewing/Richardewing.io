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
      targetEl.style.backgroundColor = 'var(--background, #0a0a0a)';

      // Use a custom scale to improve PDF sharpness from canvas
      const canvas = await html2canvas(targetEl, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0a0a0a' // Assuming the site uses a dark theme
      });

      targetEl.style.backgroundColor = originalBg;

      const imgData = canvas.toDataURL('image/png');
      
      // Calculate aspect ratio
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      const pdf = new jsPDF('p', 'mm', 'a4');
      
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
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('There was an issue generating the PDF. Please try again.');
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
          ? 'bg-[#18181b] text-zinc-950 cursor-not-allowed border-zinc-400 border' 
          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]'
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
            <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
