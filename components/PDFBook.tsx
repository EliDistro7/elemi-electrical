import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFBookProps {
  pdfFiles: string[];
}

interface PageData {
  pdfIndex: number;
  pageNumber: number;
}

const PDFBook = ({ pdfFiles }: PDFBookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<PageData[]>([]);
  const [pdfPageCounts, setPdfPageCounts] = useState<number[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);
  const [pageWidth, setPageWidth] = useState(400);

  useEffect(() => {
    const updatePageWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPageWidth(Math.min(width - 80, 300));
      } else if (width < 1024) {
        setPageWidth(280);
      } else if (width < 1280) {
        setPageWidth(320);
      } else {
        setPageWidth(400);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  useEffect(() => {
    const loadPdfPages = async () => {
      const pageCounts: number[] = [];

      for (const pdfFile of pdfFiles) {
        try {
          const loadingTask = pdfjs.getDocument(pdfFile);
          const pdf = await loadingTask.promise;
          pageCounts.push(pdf.numPages);
        } catch (error) {
          console.error(`Error loading ${pdfFile}:`, error);
          pageCounts.push(0);
        }
      }

      setPdfPageCounts(pageCounts);

      const allPages: PageData[] = [];
      pageCounts.forEach((count, pdfIndex) => {
        for (let pageNum = 1; pageNum <= count; pageNum++) {
          allPages.push({ pdfIndex, pageNumber: pageNum });
        }
      });

      setPages(allPages);
    };

    loadPdfPages();
  }, [pdfFiles]);

  const totalPages = pages.length;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const showingSpread = !isMobile && currentPage < totalPages - 1;

  const handleNextPage = () => {
    const increment = isMobile ? 1 : 2;
    if (currentPage < totalPages - 1) {
      setIsFlipping(true);
      setFlipDirection('left');
      setTimeout(() => {
        setCurrentPage(prev => Math.min(prev + increment, totalPages - 1));
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    const decrement = isMobile ? 1 : 2;
    if (currentPage > 0) {
      setIsFlipping(true);
      setFlipDirection('right');
      setTimeout(() => {
        setCurrentPage(prev => Math.max(prev - decrement, 0));
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const leftPage = pages[currentPage];
  const rightPage = showingSpread ? pages[currentPage + 1] : null;

  const pageHeight = pageWidth * 1.375;

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl px-4">
      <div className="flex items-center gap-2 sm:gap-3 text-white">
        <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">OUR CERTIFICATES</h1>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="flex gap-0.5 sm:gap-1 bg-amber-100 p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl" style={{ perspective: '2000px' }}>
          {leftPage && (
            <div
              className={`relative transition-all duration-600 ${
                isFlipping && flipDirection === 'right'
                  ? 'animate-flip-right'
                  : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'right center',
              }}
            >
              <Document
                file={pdfFiles[leftPage.pdfIndex]}
                loading={
                  <div 
                    className="bg-white flex items-center justify-center border-r-2 border-amber-200"
                    style={{ width: `${pageWidth}px`, height: `${pageHeight}px` }}
                  >
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-slate-700"></div>
                  </div>
                }
              >
                <Page
                  pageNumber={leftPage.pageNumber}
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="border-r-2 border-amber-200 shadow-inner"
                />
              </Document>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-xs text-slate-500 font-medium">
                {currentPage + 1}
              </div>
            </div>
          )}

          {rightPage && (
            <div
              className={`relative transition-all duration-600 ${
                isFlipping && flipDirection === 'left'
                  ? 'animate-flip-left'
                  : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
              }}
            >
              <Document
                file={pdfFiles[rightPage.pdfIndex]}
                loading={
                  <div 
                    className="bg-white flex items-center justify-center border-l-2 border-amber-200"
                    style={{ width: `${pageWidth}px`, height: `${pageHeight}px` }}
                  >
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-slate-700"></div>
                  </div>
                }
              >
                <Page
                  pageNumber={rightPage.pageNumber}
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="border-l-2 border-amber-200 shadow-inner"
                />
              </Document>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs text-slate-500 font-medium">
                {currentPage + 2}
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-1 sm:px-2 lg:px-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0 || isFlipping}
            className={`pointer-events-auto bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              currentPage === 0 ? '' : 'hover:shadow-xl'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1 || isFlipping}
            className={`pointer-events-auto bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              currentPage >= totalPages - 1 ? '' : 'hover:shadow-xl'
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white w-full max-w-md">
        <div className="text-xs sm:text-sm font-medium whitespace-nowrap">
          {isMobile ? (
            `Page ${currentPage + 1} of ${totalPages}`
          ) : (
            `Pages ${currentPage + 1}-${Math.min(currentPage + 2, totalPages)} of ${totalPages}`
          )}
        </div>
        <div className="h-2 w-full sm:w-64 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
            style={{ 
              width: `${((currentPage + (isMobile ? 1 : 2)) / totalPages) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PDFBook;