'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { language } = useLanguage();

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      equipment: 'Equipment',
      certs: 'Certs',
      contact: 'Contact',
      getQuote: 'Get Quote',
      tagline: 'Innovative. Skilled. Reliable.',
    },
    sw: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      services: 'Huduma',
      projects: 'Miradi',
      equipment: 'Vifaa',
      certs: 'Vyeti',
      contact: 'Wasiliana',
      getQuote: 'Pata Bei',
      tagline: 'Ubunifu. Ujuzi. Uaminifu.',
    },
  };

  const texts = translations[language] || translations.en;

  const navigation = [
    { name: texts.home, href: '#home' },
    { name: texts.about, href: '#about' },
    { name: texts.services, href: '#services' },
    { name: texts.projects, href: '#projects' },
    { name: texts.equipment, href: '#equipment' },
    { name: texts.certs, href: '/certs' },
    { name: texts.contact, href: '#contact' },
  ];

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-50 transition-all duration-500 border-b-4 border-black',
          isScrolled
            ? 'bg-white/95 shadow-2xl backdrop-blur-md'
            : 'bg-white/90 backdrop-blur-sm border-none shadow-lg'
        )}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-3 md:space-x-4 group">
            <div className={clsx(
              "relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl",
              isScrolled ? "w-32 h-24 md:w-32 md:h-24" : "w-32 h-24 md:w-32 md:h-24"
            )}>
              <img
                src="/logo.jpg"
                alt="Elemi Electrical Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>


            <div className="hidden sm:block">
              <h1 className={clsx(
                "font-black text-black leading-none tracking-tighter uppercase transition-all duration-300",
                isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              )}>
                ELEMI ELECTRICAL
              </h1>
              <p className="text-[10px] md:text-xs font-black text-gray-700 tracking-widest uppercase mt-0.5">
                {texts.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
      {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm 2xl:text-base font-black text-black hover:text-gray-600 transition-all duration-300 uppercase tracking-wide relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageToggle />
            <Button
              onClick={() => {
                router.push('/#quote');
              }}
              className="bg-black text-white hover:bg-white hover:text-black border-4 border-black font-black px-4 xl:px-6 2xl:px-8 py-4 xl:py-5 2xl:py-6 text-xs xl:text-sm 2xl:text-base uppercase tracking-widest transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {texts.getQuote}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 border-4 border-black hover:bg-black hover:text-white transition-all duration-300 group"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white" strokeWidth={3} />
              ) : (
                <Menu className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t-4 border-black animate-slide-down bg-white">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base md:text-lg font-black text-black hover:bg-black hover:text-white transition-all duration-300 py-3 md:py-4 px-4 md:px-6 border-4 border-black uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    router.push('/#quote');
                    setIsMenuOpen(false);
                  }}
                  className="bg-black text-white hover:bg-white hover:text-black border-4 border-black font-black w-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg uppercase tracking-widest transition-all duration-300"
                >
                  {texts.getQuote}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>

    {/* Back to Top Button */}
    {showBackToTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-black/40 hover:bg-yellow-400 text-white hover:text-black rounded-md  p-4 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl group animate-fade-in"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-bounce" strokeWidth={3} />
      </button>
    )}
    </>
  );
}