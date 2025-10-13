'use client';

import React from 'react';
import { 
  Shield, Award, CheckCircle2, Download, ExternalLink, 
  FileText, Zap, AlertCircle, Search, Mail, Phone, ZoomIn, ZoomOut
} from 'lucide-react';

// PDFRenderer Component
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
    <div className={`bg-white rounded-2xl shadow-primary overflow-hidden border border-border-default ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-6 border-b border-primary-500/20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">{fileName}</h3>
              <p className="text-sm text-primary-100 font-medium mt-0.5">Government Authorization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/20">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50 || isLoading}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <span className="text-white text-sm font-bold px-2 min-w-[50px] text-center">{zoomLevel}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200 || isLoading}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <button
              onClick={handleOpenInNewTab}
              disabled={isLoading}
              className="p-2.5 text-white hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Open in New Tab"
            >
              <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="p-2.5 text-white hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Download PDF"
            >
              <Download className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative bg-background-300 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-text-primary font-semibold text-base">Loading PDF...</p>
            </div>
          </div>
        )}

        {error ? (
          <div className="flex items-center justify-center h-full bg-white">
            <div className="text-center p-8">
              <FileText className="w-20 h-20 text-primary-600 mx-auto mb-4" strokeWidth={2} />
              <p className="text-text-primary font-bold text-lg mb-2">PDF Preview Unavailable</p>
              <p className="text-text-secondary font-medium text-sm mb-6">
                The PDF file could not be displayed in the browser
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-primary-700 text-white hover:bg-primary-800 rounded-xl font-semibold text-sm shadow-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenInNewTab}
                  className="px-6 py-3 bg-white text-primary-700 hover:bg-primary-50 rounded-xl border-2 border-primary-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
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
            className="w-full h-full border-0 rounded-b-2xl"
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
      <div className="bg-background-200 border-t border-border-default px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-text-primary">
              {error ? "Load Failed" : isLoading ? "Loading..." : "PDF Loaded"}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            {!error && !isLoading && (
              <div className="flex items-center space-x-2 bg-green-500 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                <span className="text-xs font-bold text-white">Verified</span>
              </div>
            )}
            <span className="text-xs font-medium text-text-secondary">Government Document</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Certification data
interface Certification {
  id: string;
  title: string;
  category: 'government' | 'safety' | 'electrical';
  issuer: string;
  pdfUrl: string;
  icon: React.ForwardRefExoticComponent<Omit<React.ComponentProps<'svg'>, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

const certifications: Certification[] = [
  {
    id: 'registered-company',
    title: 'REGISTERED COMPANY',
    category: 'safety',
    issuer: 'Business Registration and Licensing Agency (BRELA)',
    pdfUrl: '/brela.pdf',
    icon: AlertCircle,
  },
  {
    id: 'electrical-license',
    title: 'ELECTRICAL CONTRACTOR LICENSE',
    category: 'government',
    issuer: 'Contractors Registration Board (CRB)',
    pdfUrl: '/crb.pdf',
    icon: Shield,
  },
  {
    id: 'business-license',
    title: 'BUSINESS LICENSE',
    category: 'electrical',
    issuer: 'Tanzania Revenue Authority (TRA)',
    pdfUrl: '/leseni.pdf',
    icon: Zap,
  }
];

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = [
    { value: 'all', label: 'All Certifications', count: certifications.length },
    { value: 'government', label: 'Government Permits', count: certifications.filter(c => c.category === 'government').length },
    { value: 'electrical', label: 'Electrical Certifications', count: certifications.filter(c => c.category === 'electrical').length },
    { value: 'safety', label: 'Safety & Registration', count: certifications.filter(c => c.category === 'safety').length },
  ];

  const filteredCertifications = certifications
    .filter(cert => selectedCategory === 'all' || cert.category === selectedCategory)
    .filter(cert => 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background-100">
      {/* Header Section with Image */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-purple-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-primary-100 font-semibold text-sm uppercase tracking-wider">Official Documents</span>
              </div>
              
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                Official Certifications
                <span className="block text-primary-200 text-3xl sm:text-4xl lg:text-5xl mt-3">
                  & Accreditations
                </span>
              </h1>
              
              <p className="text-lg text-primary-100 mb-8 leading-relaxed font-medium">
                View and download our official certifications and permits. All documents are verified and up-to-date with regulatory authorities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                  <div className="text-4xl font-black text-white">{certifications.length}</div>
                  <div className="text-primary-100 text-sm font-medium mt-1">Active Certificates</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                  <div className="text-4xl font-black text-white">{new Set(certifications.map(c => c.issuer)).size}</div>
                  <div className="text-primary-100 text-sm font-medium mt-1">Certifying Bodies</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-primary-lg border-4 border-white/20">
                <img 
                  src="/jiangsu-reco1.jpg" 
                  alt="Official Certifications" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary text-sm">All Certifications Verified</p>
                        <p className="text-text-secondary text-xs">Updated 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-soft border border-border-light p-6 hover:shadow-medium transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-4 w-5 h-5 text-text-tertiary" strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-border-default rounded-xl focus:outline-none focus:border-primary-500 font-medium text-base transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border-2 border-border-default rounded-xl focus:outline-none focus:border-primary-500 font-medium text-base bg-white transition-colors"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid gap-10">
          {filteredCertifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-soft border border-border-light hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
              >
                {/* Certificate Content */}
                <div className="p-6">
                  {/* PDF Preview */}
                  <div className="mb-6">
                    <PDFRenderer
                      pdfUrl={cert.pdfUrl}
                      fileName={cert.title}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={cert.pdfUrl}
                      download
                      className="flex-1 bg-primary-700 text-white hover:bg-primary-800 rounded-xl px-6 py-4 font-semibold text-sm shadow-primary transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" strokeWidth={2.5} />
                      Download Certificate
                    </a>
                    <button
                      onClick={() => window.open(cert.pdfUrl, '_blank')}
                      className="flex-1 bg-white text-primary-700 hover:bg-primary-50 rounded-xl border-2 border-primary-200 px-6 py-4 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                      Open in New Tab
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-border-light shadow-soft">
            <Search className="w-20 h-20 text-text-tertiary mx-auto mb-4" strokeWidth={2} />
            <h3 className="font-bold text-2xl text-text-primary mb-2">No certifications found</h3>
            <p className="text-text-secondary font-medium">Try adjusting your search terms or filter selection.</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-purple-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-6">Need Verification?</h2>
            <p className="text-lg text-primary-100 mb-12 font-medium">
              Contact us for certificate verification or additional documentation requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a
                href="tel:+255764420826"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary-700 border-2 border-white/20 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
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