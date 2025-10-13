'use client';

import React, { useState, useRef } from 'react';
import { 
  ZoomIn, ZoomOut, Download, 
  Shield, FileText, CheckCircle2, ExternalLink
} from 'lucide-react';

// Simple PDF Renderer Component using iframe
interface PDFRendererProps {
  pdfUrl?: string;
  fileName?: string;
  className?: string;
}

const PDFRenderer: React.FC<PDFRendererProps> = ({ 
  pdfUrl = "/nafaka.pdf", 
  fileName = "NAFAKA Government Permit",
  className = "" 
}) => {
  const [zoomLevel, setZoomLevel] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when component is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger load after a small delay to ensure smooth scrolling
            setTimeout(() => {
              setShouldLoad(true);
            }, 200);
            // Once we've triggered loading, we can disconnect
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '50px 0px', // Start loading 50px before it comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-hide loading after a reasonable time (only if shouldLoad is true)
  React.useEffect(() => {
    if (!shouldLoad) return;
    
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000); // Hide loading after 3 seconds

    return () => clearTimeout(timer);
  }, [isLoading, shouldLoad]);

  // Try to detect when iframe content is ready (only if shouldLoad is true)
  React.useEffect(() => {
    if (!shouldLoad) return;

    const checkIframeLoaded = () => {
      if (iframeRef.current) {
        try {
          // Try to access iframe document (may fail due to cross-origin)
          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc && iframeDoc.readyState === 'complete') {
            setIsLoading(false);
            setError(null);
          }
        } catch (e) {
          // Cross-origin restriction, assume loaded after short delay
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
      }
    };

    const timer = setTimeout(checkIframeLoaded, 1000);
    return () => clearTimeout(timer);
  }, [pdfUrl, shouldLoad]);

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
      updateIframeSrc();
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
      updateIframeSrc();
    }
  };

  const updateIframeSrc = () => {
    if (iframeRef.current) {
      const newSrc = `${pdfUrl}#zoom=${zoomLevel}&toolbar=0&navpanes=0&scrollbar=1`;
      iframeRef.current.src = newSrc;
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleIframeLoad = () => {
    // Small delay to ensure PDF is actually rendered
    setTimeout(() => {
      setIsLoading(false);
      setError(null);
    }, 500);
  };

  const handleIframeError = () => {
    setError('Failed to load PDF document');
    setIsLoading(false);
  };

  const handleManualLoad = () => {
    setShouldLoad(true);
    setIsLoading(true);
    setError(null);
  };

  return (
    <div 
      ref={containerRef}
      className={`bg-white border-2 sm:border-4 border-black overflow-hidden hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="bg-black p-4 md:p-5 lg:p-6 border-b-2 sm:border-b-4 border-black">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white flex items-center justify-center">
              <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-black text-sm md:text-base lg:text-lg text-white tracking-tight uppercase whitespace-nowrap">{fileName}</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap mt-0.5">Government Authorization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <div className="flex items-center gap-1 bg-white/10 px-2 py-1">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50 || isLoading}
                className="p-2 text-white hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <span className="text-white text-sm font-black px-2 tracking-wider min-w-[50px] text-center">{zoomLevel}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200 || isLoading}
                className="p-2 text-white hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="w-px h-8 bg-white/30"></div>
            
            <button
              onClick={handleOpenInNewTab}
              disabled={isLoading}
              className="p-2.5 text-white hover:bg-white hover:text-black border-2 border-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              title="Open in New Tab"
            >
              <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="p-2.5 text-white hover:bg-white hover:text-black border-2 border-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              title="Download PDF"
            >
              <Download className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative bg-gray-50 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        {(!shouldLoad || (isLoading && shouldLoad)) && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-10 border-2 border-black">
            <div className="flex flex-col items-center space-y-4">
              {!shouldLoad ? (
                <>
                  <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-black" strokeWidth={2} />
                  <p className="text-black font-bold text-sm sm:text-base tracking-tight uppercase">PDF will load when scrolled into view</p>
                  <button
                    onClick={handleManualLoad}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-black font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                  >
                    Load PDF Now
                  </button>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 sm:border-8 border-black border-t-transparent animate-spin"></div>
                  <p className="text-black font-black text-sm sm:text-base tracking-tight uppercase">Loading PDF...</p>
                </>
              )}
            </div>
          </div>
        )}

        {error ? (
          <div className="flex items-center justify-center h-full bg-white">
            <div className="text-center p-6 sm:p-8">
              <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-black mx-auto mb-4" strokeWidth={2} />
              <p className="text-black font-black text-base sm:text-lg mb-2 uppercase tracking-tight">PDF Preview Unavailable</p>
              <p className="text-gray-700 font-bold text-xs sm:text-sm mb-6 uppercase">
                The PDF file could not be displayed in the browser
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-black font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenInNewTab}
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black hover:bg-black hover:text-white border-2 sm:border-4 border-black font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300"
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          </div>
        ) : shouldLoad ? (
          <iframe
            ref={iframeRef}
            src={`${pdfUrl}#zoom=${zoomLevel}&toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={fileName}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ 
              backgroundColor: '#ffffff',
              minHeight: '500px'
            }}
          />
        ) : null}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-50 border-t-2 sm:border-t-4 border-black px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm font-black text-black uppercase tracking-wider">
              {error ? "Load Failed" : !shouldLoad ? "Ready to Load" : isLoading ? "Loading..." : "PDF Loaded"}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            {!error && !isLoading && shouldLoad && (
              <div className="flex items-center space-x-2 bg-black px-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                <span className="text-xs font-black text-white uppercase tracking-wider">Verified</span>
              </div>
            )}
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Government Document</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alternative Simple PDF Viewer Component
export const SimplePDFViewer: React.FC<{ pdfUrl: string; title?: string }> = ({ 
  pdfUrl, 
  title = "PDF Viewer" 
}) => (
  <div className="w-full border-2 sm:border-4 border-black overflow-hidden">
    <div className="bg-black p-4 border-b-2 sm:border-b-4 border-black flex justify-between items-center flex-wrap gap-3">
      <span className="text-sm sm:text-base font-black text-white uppercase tracking-tight">{title}</span>
      <div className="flex gap-2 sm:gap-3">
        <button
          onClick={() => window.open(pdfUrl, '_blank')}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black hover:bg-black hover:text-white border-2 border-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
        >
          Open in New Tab
        </button>
        <a
          href={pdfUrl}
          download
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black hover:bg-black hover:text-white border-2 border-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
        >
          Download
        </a>
      </div>
    </div>
    <iframe
      src={pdfUrl}
      width="100%"
      height="800px"
      title={title}
      className="border-0"
      style={{ backgroundColor: '#ffffff' }}
    />
  </div>
);

export default PDFRenderer;