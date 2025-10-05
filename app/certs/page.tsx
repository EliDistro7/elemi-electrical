'use client';   

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText } from 'lucide-react';
import PDFBook from '@/components/PDFBook';

function App() {
  const router = useRouter();
  const [pdfFiles] = useState<string[]>([
    '/completion.pdf',
    '/nssf.pdf',
  ]);

  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header with back button */}
      <div className="relative z-10 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackHome}
            className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-white border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <PDFBook pdfFiles={pdfFiles} />
      </div>

      {/* Footer info */}
      <div className="relative z-10 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-white/60 text-xs sm:text-sm">
            <FileText className="w-4 h-4" />
            <span>{pdfFiles.length} document{pdfFiles.length !== 1 ? 's' : ''} loaded</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;