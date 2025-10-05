import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface PDFBookProps {
  pdfFiles: string[];
}

const PDFBook = ({ pdfFiles }: PDFBookProps) => {
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Intersection Observer to trigger user interaction
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasInteracted) {
            // Simulate user interaction by triggering a click
            const iframe = iframeRef.current;
            if (iframe) {
              // Create and dispatch a click event
              const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
              });
              iframe.dispatchEvent(clickEvent);
              setHasInteracted(true);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasInteracted]);

  // Reset interaction flag when PDF changes
  useEffect(() => {
    setHasInteracted(false);
  }, [currentPdfIndex]);

  const handleNext = () => {
    if (currentPdfIndex < pdfFiles.length - 1) {
      setCurrentPdfIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPdfIndex > 0) {
      setCurrentPdfIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-6xl px-4 py-8">
      <div className="flex items-center gap-3 text-white">
        <BookOpen className="w-8 h-8" />
        <h1 className="text-3xl font-bold">OUR CERTIFICATES</h1>
      </div>

      <div ref={containerRef} className="relative w-full">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: '70vh' }}>
          <iframe
            ref={iframeRef}
            src={pdfFiles[currentPdfIndex]}
            className="w-full h-full border-0"
            title={`Certificate ${currentPdfIndex + 1}`}
          />
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
          <button
            onClick={handlePrev}
            disabled={currentPdfIndex === 0}
            className="pointer-events-auto bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPdfIndex >= pdfFiles.length - 1}
            className="pointer-events-auto bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
        <div className="text-sm font-medium">
          Certificate {currentPdfIndex + 1} of {pdfFiles.length}
        </div>
        <div className="h-2 w-64 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
            style={{ 
              width: `${((currentPdfIndex + 1) / pdfFiles.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PDFBook;