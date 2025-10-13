'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Shield, Award, CheckCircle2, Download, ExternalLink, 
  Calendar, FileText, Building2, Users, Zap, AlertCircle,
  Star, ArrowRight, Search, Filter, ChevronDown,
  Globe, MapPin, Phone, Mail, ZoomIn, ZoomOut
} from 'lucide-react';

// PDFRenderer Component (inline version matching the actual component)
const PDFRenderer = ({ pdfUrl, fileName, className }: any) => {
  const [zoomLevel, setZoomLevel] = React.useState(75);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const handleZoomIn = () => {
    if (zoomLevel < 200) setZoomLevel(zoomLevel + 25);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel(zoomLevel - 25);
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
    setTimeout(() => {
      setIsLoading(false);
      setError(null);
    }, 500);
  };

  const handleIframeError = () => {
    setError('Failed to load PDF document');
    setIsLoading(false);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className={`bg-white border-2 sm:border-4 border-black overflow-hidden ${className}`}>
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
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 sm:border-8 border-black border-t-transparent animate-spin"></div>
              <p className="text-black font-black text-sm sm:text-base tracking-tight uppercase">Loading PDF...</p>
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
        ) : (
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
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-50 border-t-2 sm:border-t-4 border-black px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm font-black text-black uppercase tracking-wider">
              {error ? "Load Failed" : isLoading ? "Loading..." : "PDF Loaded"}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            {!error && !isLoading && (
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

// Certification data structure
interface Certification {
  id: string;
  title: string;
  category: 'government' | 'safety' | 'quality' | 'electrical' | 'environmental' | 'training';
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'pending';
  description: string;
  pdfUrl?: string;
  verificationCode?: string;
  scope: string[];
  icon: React.ForwardRefExoticComponent<Omit<React.ComponentProps<'svg'>, "ref"> & React.RefAttributes<SVGSVGElement>>;
  priority: number;
}

const certifications: Certification[] = [
 

  {
    id: 'safety-certification',
    title: 'REGISTERED COMPANY',
    category: 'safety',
    issuer: 'Registered by the Business Registration and Licensing Agency (BRELA)',
    issueDate: '2023-11-05',
    expiryDate: '2024-11-04',
    status: 'active',
    description: 'Officially registered as a legal business entity in Tanzania, compliant with all local regulations.',
    pdfUrl: '/brela.pdf',
    verificationCode: 'OSHA-TZ-2023-789',
    scope: [ 'General Contracting', 'Electrical Services', 'Safety Compliance' ],
    icon: AlertCircle,
    priority: 3
  },
   {
    id: 'electrical-license',
    title: 'ELECTRICAL CONTRACTOR LICENSE',
    category: 'government',
    issuer: ' (CRB)',
    issueDate: '2024-01-15',
    expiryDate: '2025-01-14',
    status: 'active',
    description: 'Official government license authorizing electrical contracting and installation services in Tanzania.',
    pdfUrl: '/crb.pdf',
    verificationCode: 'EWURA/EC/2024/001',
    scope: ['Electrical Installation', 'Power Systems', 'Safety Compliance'],
    icon: Shield,
    priority: 1
  },
  {
    id: 'solar-certification',
    title: 'Business License',
    category: 'electrical',
    issuer: 'Issued by the Tanzania Revenue Authority (TRA)',
    issueDate: '2023-08-10',
    expiryDate: '2025-08-09',
    status: 'active',
    description: ' Official business license for operating as an electrical engineering contractor in Tanzania.',
    pdfUrl: '/leseni.pdf',
    verificationCode: 'TRA/BL/2023/456',
    scope: [ 'Electrical Contracting', 'Solar Installations', 'Power Systems' ],
    icon: Zap,
    priority: 4
  }
];

const categoryColors = {
  government: 'bg-black text-white',
  safety: 'bg-white text-black border-2 border-black',
  quality: 'bg-black text-white',
  electrical: 'bg-white text-black border-2 border-black',
  environmental: 'bg-black text-white',
  training: 'bg-white text-black border-2 border-black'
};

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = [
    { value: 'all', label: 'All Certifications', count: certifications.length },
    { value: 'government', label: 'Government Permits', count: certifications.filter(c => c.category === 'government').length },
    { value: 'quality', label: 'Quality Standards', count: certifications.filter(c => c.category === 'quality').length },
    { value: 'electrical', label: 'Electrical Certifications', count: certifications.filter(c => c.category === 'electrical').length },
    { value: 'safety', label: 'Safety & Health', count: certifications.filter(c => c.category === 'safety').length },
    { value: 'environmental', label: 'Environmental', count: certifications.filter(c => c.category === 'environmental').length }
  ];

  const filteredCertifications = certifications
    .filter(cert => selectedCategory === 'all' || cert.category === selectedCategory)
    .filter(cert => 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.priority - b.priority);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-black text-white';
      case 'expired': return 'bg-white text-black border-2 border-black';
      case 'pending': return 'bg-gray-200 text-black border-2 border-black';
      default: return 'bg-gray-100 text-black';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-TZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-black text-white overflow-hidden border-b-4 sm:border-b-8 border-black">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:20px_20px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-black" strokeWidth={2.5} />
              </div>
            </div>
            
            <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 tracking-tighter uppercase">
              Official Certifications
              <span className="block text-gray-300 text-2xl sm:text-3xl lg:text-4xl mt-2 sm:mt-4 tracking-tight">
                & Accreditations
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
              View and download our official certifications and permits. All documents are verified and up-to-date.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-white hover:bg-black hover:border-white transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-black text-black group-hover:text-white tracking-tight">{certifications.filter(c => c.status === 'active').length}</div>
                <div className="text-gray-700 group-hover:text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wide mt-1">Active Certificates</div>
              </div>
              <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-white hover:bg-black hover:border-white transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-black text-black group-hover:text-white tracking-tight">{new Set(certifications.map(c => c.issuer)).size}</div>
                <div className="text-gray-700 group-hover:text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wide mt-1">Certifying Bodies</div>
              </div>
              <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-white hover:bg-black hover:border-white transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-black text-black group-hover:text-white tracking-tight">{categories.length - 1}</div>
                <div className="text-gray-700 group-hover:text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wide mt-1">Categories</div>
              </div>
              <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-white hover:bg-black hover:border-white transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-black text-black group-hover:text-white tracking-tight">2024</div>
                <div className="text-gray-700 group-hover:text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wide mt-1">Latest Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 w-5 h-5 text-black" strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="SEARCH CERTIFICATIONS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 sm:border-4 border-black focus:outline-none focus:border-gray-600 font-bold text-sm sm:text-base uppercase tracking-wide placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 sm:py-4 border-2 sm:border-4 border-black focus:outline-none focus:border-gray-600 font-bold text-sm sm:text-base uppercase bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {filteredCertifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="bg-white border-2 sm:border-4 border-black hover:-translate-y-1 transition-all duration-300"
              >
         

                {/* Certificate Content */}
                <div className="p-4 sm:p-6 bg-gray-50">
                  {/* Info Grid */}
               

              

                  {/* PDF Preview */}
                  {cert.pdfUrl && (
                    <div className="mb-6">
                      <PDFRenderer
                        pdfUrl={cert.pdfUrl}
                        fileName={cert.title}
                        className=""
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {cert.pdfUrl && (
                      <>
                        <a
                          href={cert.pdfUrl}
                          download
                          className="flex-1 bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-black px-4 sm:px-6 py-3 sm:py-4 font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                          Download Certificate
                        </a>
                        <button
                          onClick={() => window.open(cert.pdfUrl, '_blank')}
                          className="flex-1 bg-white text-black hover:bg-black hover:text-white border-2 sm:border-4 border-black px-4 sm:px-6 py-3 sm:py-4 font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                          Open in New Tab
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-white border-2 sm:border-4 border-black">
            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-black mx-auto mb-4" strokeWidth={2} />
            <h3 className="font-black text-xl sm:text-2xl text-black mb-2 uppercase tracking-tight">No certifications found</h3>
            <p className="text-gray-700 font-bold uppercase text-sm">Try adjusting your search terms or filter selection.</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-12 sm:py-16 lg:py-24 border-t-4 sm:border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 uppercase tracking-tighter">Need Verification?</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 font-semibold">
              Contact us for certificate verification or additional documentation requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-black hover:text-white border-2 sm:border-4 border-white px-6 sm:px-8 py-3 sm:py-4 font-black text-sm sm:text-base uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                Contact Support
              </Link>
              <a
                href="tel:+255764420826"
                className="bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-white px-6 sm:px-8 py-3 sm:py-4 font-black text-sm sm:text-base uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                Call Verification
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;