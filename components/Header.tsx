'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      equipment: 'Equipment',
      contact: 'Contact',
      getQuote: 'Get Quote',
      tagline: 'Innovative. Skilled. Reliable.'
    },
    sw: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      services: 'Huduma',
      projects: 'Miradi',
      equipment: 'Vifaa',
      contact: 'Wasiliana',
      getQuote: 'Pata Bei',
      tagline: 'Ubunifu. Ujuzi. Kuaminika.'
    }
  };

  const texts = translations[language] || translations.en;

  const navigation = [
    { name: texts.home, href: '#home' },
    { name: texts.about, href: '#about' },
    { name: texts.services, href: '#services' },
    { name: texts.projects, href: '#projects' },
    { name: texts.equipment, href: '#equipment' },
    { name: texts.contact, href: '#contact' },
  ];

  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
         
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-black leading-none tracking-tighter uppercase">
                ELEMI ELECTRICAL
              </h1>
              <p className="text-xs font-black text-gray-700 tracking-widest uppercase mt-1">
                {texts.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-black text-black hover:text-gray-600 transition-all duration-300 uppercase tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageToggle />
            <Button className="bg-black text-white hover:bg-white hover:text-black border-4 border-black font-black px-8 py-6 text-base uppercase tracking-widest transition-all duration-300 hover:scale-105">
              {texts.getQuote}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 border-4 border-black hover:bg-black hover:text-white transition-all duration-300 group"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black group-hover:text-white" strokeWidth={3} />
              ) : (
                <Menu className="h-6 w-6 text-black group-hover:text-white" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 border-t-4 border-black animate-slide-down">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-black text-black hover:bg-black hover:text-white transition-all duration-300 py-4 px-6 border-4 border-black uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="bg-black text-white hover:bg-white hover:text-black border-4 border-black font-black w-full px-8 py-6 text-lg uppercase tracking-widest transition-all duration-300">
                  {texts.getQuote}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}