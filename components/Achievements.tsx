"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { portfolioData, Achievement } from "@/data/portfolio";
import {
  Trophy,
  FileText,
  X,
  Eye,
  ExternalLink,
  ShieldCheck,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FileCheck2,
  FileSpreadsheet,
  Printer,
} from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribeMounted() {
  return () => {};
}
function getMountedSnapshot() {
  return true;
}
function getMountedServerSnapshot() {
  return false;
}

export function Achievements() {
  const { achievements } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"interactive" | "enhanced">("enhanced");
  const mounted = useSyncExternalStore(subscribeMounted, getMountedSnapshot, getMountedServerSnapshot);

  const openCertificate = (item: Achievement) => {
    setSelectedCert(item);
    setZoomLevel(1);
    setRotation(0);
    setActiveTab("enhanced");
  };

  const closeCertificate = useCallback(() => {
    setSelectedCert(null);
    setZoomLevel(1);
    setRotation(0);
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!selectedCert) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCertificate();
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((z) => Math.min(Number((z + 0.25).toFixed(2)), 2.5));
      } else if (e.key === "-") {
        setZoomLevel((z) => Math.max(Number((z - 0.25).toFixed(2)), 0.5));
      } else if (e.key === "0") {
        setZoomLevel(1);
        setRotation(0);
      } else if (e.key === "r" || e.key === "R") {
        setRotation((r) => (r + 90) % 360);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert, closeCertificate]);

  const handlePrint = () => {
    if (!selectedCert) return;
    const printWindow = window.open(selectedCert.pdfUrl, "_blank");
    if (printWindow) {
      printWindow.focus();
      try {
        printWindow.print();
      } catch {
        // Fallback for browsers blocking script-triggered print
      }
    }
  };

  return (
    <div className="w-full relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              {"05 //"}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-none">
              <FileCheck2 className="w-3 h-3 text-rose-400" />
              Verified PDF Records
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
            Certifications &amp; Achievements
          </h2>
        </div>
        <p className="font-mono text-xs text-muted-foreground sm:text-right max-w-xs">
          Authentic academic &amp; hackathon credentials archived in vector PDF format
        </p>
      </div>

      {/* Grid of PDF Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => {
          const isFeatured = item.featured;

          return (
            <div
              key={item.title}
              onClick={() => openCertificate(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} certificate — ${item.detail}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openCertificate(item);
                }
              }}
              className={`group relative flex flex-col justify-between border cursor-pointer select-none overflow-hidden p-6 sm:p-7 transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none ${
                isFeatured
                  ? "border-accent/40 bg-gradient-to-br from-accent/[0.04] via-background to-muted/30 hover:border-accent/80 hover:shadow-accent/10"
                  : "border-border bg-gradient-to-br from-muted/20 via-background to-muted/10 hover:border-foreground/30 hover:shadow-black/40"
              }`}
            >
              {/* Subtle Animated PDF Scan Line on Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-full h-24 bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent group-hover:animate-pdf-scan" />
              </div>

              {/* Card Top: PDF Metadata Bar */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2">
                    {/* PDF Format Tag */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-rose-950/40 border border-rose-500/30 text-rose-300 font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors duration-500 group-hover:border-rose-400/60 group-hover:bg-rose-900/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                      PDF
                    </div>

                    <span className="font-mono text-[11px] text-muted-foreground">
                      {item.fileSize} • 1 Page
                    </span>
                  </div>

                  {/* Year / Featured Pill */}
                  <div className="flex items-center gap-2">
                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider font-semibold border border-accent/60 bg-accent/15 text-accent">
                        <Trophy className="w-3 h-3 text-accent" />
                        1st Place
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] text-muted-foreground border border-border px-2 py-0.5 bg-muted/30">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Title & Issuer */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-muted-foreground font-semibold">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-foreground/90 leading-snug">
                    {item.detail}
                  </p>

                  <p className="text-xs font-mono text-muted-foreground pt-1 flex items-center gap-1.5">
                    <span className="text-accent/70">●</span> {item.issuer}
                  </p>
                </div>
              </div>

              {/* Embedded Document Preview Foil */}
              <div className="relative my-3 w-full h-44 sm:h-48 border border-border/80 bg-black/40 overflow-hidden group-hover:border-accent/40 transition-all duration-700">
                {/* PDF Document Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                {/* Scaled Preview Image */}
                <div className="relative w-full h-full p-2.5 flex items-center justify-center">
                  <div className="relative w-full h-full shadow-lg transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <Image
                      src={item.certificateImage}
                      alt={`Preview of ${item.title} PDF Certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* PDF Document Corner Ribbon */}
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-background/90 backdrop-blur-sm border border-border text-[10px] font-mono text-muted-foreground">
                  <FileText className="w-3 h-3 text-accent" />
                  <span>PDF PREVIEW</span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground font-mono text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect PDF
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/60 font-mono text-xs mt-2">
                <span className="text-muted-foreground flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  Verified Document
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={item.pdfUrl}
                    download
                    className="p-1.5 text-muted-foreground hover:text-accent border border-transparent hover:border-border transition-colors duration-300"
                    title={`Download ${item.title} PDF`}
                    aria-label={`Download ${item.title} PDF`}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-foreground/80 hover:text-accent border border-border hover:border-accent transition-colors duration-300 font-mono text-[11px]"
                    title={`Open ${item.title} in new tab`}
                  >
                    <span>PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Portal Rendered PDF Document Viewer Modal */}
      {mounted &&
        selectedCert &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} PDF Document Viewer`}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md transition-opacity duration-500 ease-out"
            onClick={closeCertificate}
          >
            <div
              className="relative max-w-5xl w-full h-[92vh] max-h-[880px] bg-background border border-border flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header & PDF Reader Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-border bg-muted/40 shrink-0">
                {/* Document Identity */}
                <div className="flex items-center gap-3">
                  <div className="px-2 py-1 bg-rose-950/60 border border-rose-500/40 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    PDF
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-foreground truncate">
                        {selectedCert.title}
                      </h4>
                      <span className="hidden md:inline-block text-xs font-mono text-muted-foreground border border-border/80 px-1.5 py-0.5 bg-background">
                        {selectedCert.fileSize}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground truncate">
                      {selectedCert.issuer} • {selectedCert.year}
                    </p>
                  </div>
                </div>

                {/* Reader Controls Toolbar */}
                <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
                  {/* View Switcher */}
                  <div className="hidden sm:flex items-center border border-border bg-background p-0.5 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab("enhanced")}
                      className={`cursor-pointer px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors duration-300 ${
                        activeTab === "enhanced"
                          ? "bg-muted text-accent font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Enhanced View
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("interactive")}
                      className={`cursor-pointer px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors duration-300 ${
                        activeTab === "interactive"
                          ? "bg-muted text-accent font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Direct PDF Embed
                    </button>
                  </div>

                  {/* Zoom & Rotate Controls (Enhanced Mode) */}
                  {activeTab === "enhanced" && (
                    <div className="flex items-center gap-1 border border-border bg-background px-1 py-0.5">
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.max(Number((z - 0.25).toFixed(2)), 0.5))}
                        className="cursor-pointer p-1 text-muted-foreground hover:text-foreground transition-colors"
                        title="Zoom Out (-)"
                        aria-label="Zoom Out"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-[11px] text-muted-foreground px-1 min-w-[42px] text-center">
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setZoomLevel((z) => Math.min(Number((z + 0.25).toFixed(2)), 2.5))}
                        className="cursor-pointer p-1 text-muted-foreground hover:text-foreground transition-colors"
                        title="Zoom In (+)"
                        aria-label="Zoom In"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setRotation((r) => (r + 90) % 360)}
                        className="cursor-pointer p-1 text-muted-foreground hover:text-foreground transition-colors border-l border-border/80 ml-0.5 pl-1.5"
                        title="Rotate 90° (R)"
                        aria-label="Rotate Document"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Print & Download Action Buttons */}
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="cursor-pointer hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground border border-border hover:border-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-300"
                    title="Print Certificate"
                    aria-label="Print Certificate"
                  >
                    <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-accent bg-accent/10 border border-accent/40 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-300"
                    title="Download Official PDF"
                    aria-label={`Download official ${selectedCert.title} PDF`}
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">Download PDF</span>
                  </a>

                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-muted-foreground hover:text-accent border border-border hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-300"
                    title="Open Full PDF in New Tab"
                    aria-label={`Open full ${selectedCert.title} PDF in a new tab`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={closeCertificate}
                    className="cursor-pointer p-1.5 text-muted-foreground hover:text-foreground border border-border hover:border-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-300 ml-1"
                    aria-label="Close certificate viewer modal"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Document Display Area */}
              <div className="relative flex-1 w-full bg-[#121214] p-3 sm:p-6 flex items-center justify-center overflow-auto">
                {activeTab === "enhanced" ? (
                  <div className="relative w-full h-full flex items-center justify-center overflow-auto p-2 sm:p-4">
                    <div
                      className="relative max-w-3xl w-full aspect-[4/3] bg-white rounded-none shadow-2xl p-1.5 border-4 border-muted/80 transition-transform duration-500 ease-out"
                      style={{
                        transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                        transformOrigin: "center center",
                      }}
                    >
                      <div className="relative w-full h-full bg-neutral-900">
                        <Image
                          src={selectedCert.certificateImage}
                          alt={`Official Certificate for ${selectedCert.title} - ${selectedCert.detail}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 1000px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full min-h-[400px] bg-neutral-900 border border-border flex flex-col">
                    <object
                      data={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                      type="application/pdf"
                      className="w-full h-full flex-1"
                    >
                      <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
                        <FileSpreadsheet className="w-12 h-12 text-muted-foreground animate-bounce" />
                        <p className="text-muted-foreground text-sm font-mono">
                          Embedded PDF reader not supported on this device/browser.
                        </p>
                        <a
                          href={selectedCert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-mono text-xs font-semibold uppercase tracking-wider"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open PDF Directly
                        </a>
                      </div>
                    </object>
                  </div>
                )}
              </div>

              {/* Modal Bottom Metadata & Verification Status Bar */}
              <div className="px-5 py-3 border-t border-border bg-background flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-muted-foreground shrink-0">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-accent">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Authenticated Certificate</span>
                  </span>
                  <span className="text-border">|</span>
                  <span>
                    Awarded to: <strong className="text-foreground">{portfolioData.name}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px]">
                  <span className="hidden sm:inline">
                    Shortcuts: <kbd className="px-1 border border-border bg-muted text-foreground">+</kbd> / <kbd className="px-1 border border-border bg-muted text-foreground">-</kbd> (Zoom), <kbd className="px-1 border border-border bg-muted text-foreground">R</kbd> (Rotate), <kbd className="px-1 border border-border bg-muted text-foreground">ESC</kbd> (Close)
                  </span>
                  <span className="sm:hidden text-accent">Tap outside to close</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
