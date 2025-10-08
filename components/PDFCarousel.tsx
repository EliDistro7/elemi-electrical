'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';

interface PDFItem {
  id: number;
  title: string;
  url: string;
  category?: string;
}

interface PDFCarouselProps {
  pdfs: PDFItem[];
  title?: string;
}

const PDFCarousel: React.FC<PDFCarouselProps> = ({ pdfs = [], title = "Documents" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullView, setShowFullView] = useState(false);
  const [loadedPdfs, setLoadedPdfs] = useState<Record<number, boolean>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    pdfs.forEach((_, index) => {
      setTimeout(() => {
        setLoadedPdfs(prev => ({
          ...prev,
          [index]: true,
        }));
      }, index * 500);
    });
  }, [pdfs]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? pdfs.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === pdfs.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!pdfs || pdfs.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No documents available.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 sm:mb-4 tracking-tighter uppercase border-b-4 border-black pb-3 inline-block animate-fade-in">
            {title}
          </h1>
        </div>

        {/* Main Carousel Container */}
        <div className="relative bg-white border-4 border-black min-h-screen flex flex-col hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          {/* Info Bar */}
          <div className="bg-black text-white p-3 sm:p-4 md:p-6 border-b-4 border-black flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight uppercase truncate animate-slide-in">
                {pdfs[currentIndex].title}
              </h2>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => handleDownload(pdfs[currentIndex].url, pdfs[currentIndex].title)}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-300 font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap hover:scale-105"
              >
                <Download size={16} strokeWidth={3} />
                <span className="hidden sm:inline">Download</span>
              </button>
              <div className="text-right hidden sm:block">
                <span className="text-xl sm:text-2xl md:text-3xl font-black">
                  {currentIndex + 1}
                </span>
                <span className="text-gray-400 mx-1">/</span>
                <span className="text-lg sm:text-xl font-bold text-gray-300">
                  {pdfs.length}
                </span>
              </div>
            </div>
          </div>

          {/* PDF Display */}
          <div className="relative flex-1 min-h-[calc(100vh-180px)] sm:min-h-[calc(100vh-150px)]">
            <div className="absolute inset-0 overflow-hidden">
              {pdfs.map((pdf, index) => (
                <div
                  key={pdf.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="h-full p-1 sm:p-2">
                      <div className="h-full relative bg-gray-100 border-4 border-black animate-zoom-in overflow-hidden">
                        <iframe
                          src={`${pdf.url}#page=1&view=FitH`}
                          className="w-full h-full"
                          title={pdf.title}
                          onClick={() => setShowFullView(true)}
                        />
                      </div>
                      {loadedPdfs[index] && (
                        <iframe
                          src={pdf.url}
                          className="hidden"
                          title={`${pdf.title}-preload`}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-full h-full group-hover:-translate-x-1 transition-transform" strokeWidth={3} />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-full h-full group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
          </div>

          {/* Dots */}
          <div className="bg-black py-3 sm:py-4 flex justify-center gap-2 border-t-4 border-black">
            {pdfs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 border-2 border-white disabled:cursor-not-allowed ${
                  index === currentIndex
                    ? 'bg-white w-10 sm:w-12 h-3 animate-expand'
                    : 'bg-black w-3 h-3 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen View */}
      {showFullView && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-2 animate-fade-in">
          <div className="relative w-full h-full max-w-7xl max-h-[98vh] bg-white border-4 border-black overflow-hidden animate-zoom-in">
            <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 sm:p-3 border-b-4 border-black z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight truncate flex-1">
                  {pdfs[currentIndex].title}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleDownload(pdfs[currentIndex].url, pdfs[currentIndex].title)}
                    className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-300 font-black text-xs uppercase"
                  >
                    <Download size={14} strokeWidth={3} />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  <button
                    onClick={() => setShowFullView(false)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <X size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-12 sm:pt-14 h-full bg-gray-100">
              <iframe
                src={pdfs[currentIndex].url}
                className="w-full h-full border-4 border-black"
                title={pdfs[currentIndex].title}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes expand {
          from { width: 0.75rem; }
          to { width: 2.5rem; }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        .animate-slide-in { animation: slideIn 0.5s ease-out; }
        .animate-zoom-in { animation: zoomIn 0.5s ease-out; }
        .animate-expand { animation: expand 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default PDFCarousel;
