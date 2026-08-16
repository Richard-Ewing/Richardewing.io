'use client';

import React, { useState } from 'react';
import { Download, Loader2, FileCheck } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportPDFButtonProps {
  elementId: string;
  fileName?: string;
  reportTitle?: string;
  buttonLabel?: string;
}

export default function ExportPDFButton({
  elementId,
  fileName = 'Executive_Audit_Report.pdf',
  buttonLabel = 'Download Boardroom PDF Report'
}: ExportPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleExport = async () => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id ${elementId} not found`);
      return;
    }

    try {
      setIsGenerating(true);
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#09090b',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(fileName);

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={isGenerating}
      className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-emerald-500/80 text-zinc-100 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-zinc-800 disabled:opacity-50 cursor-pointer shadow-md"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
          <span>Generating Boardroom PDF...</span>
        </>
      ) : isSuccess ? (
        <>
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400">PDF Downloaded</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 text-emerald-400" />
          <span>{buttonLabel}</span>
        </>
      )}
    </button>
  );
}
