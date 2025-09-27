'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('projects'), href: '#projects' },
    { name: t('equipment'), href: '#equipment' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-strong sticky top-0 z-50 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center space-x-4">
           
            <div>
              <h1 className="text-display-sm font-display font-black text-primary-700 leading-none tracking-tight">
                ELEMI ELECTRICAL
              </h1>
              <p className="text-sm font-medium text-text-secondary tracking-wide uppercase mt-0.5">
                Innovative. Skilled. Reliable.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-text-secondary hover:text-primary-600 transition-all duration-300 hover:-translate-y-0.5 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-gradient transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <LanguageToggle />
            <Button className="btn-secondary px-6 py-3 rounded-2xl text-base font-semibold font-display shadow-yellow hover:shadow-yellow-lg transition-all duration-300">
              {t('getQuote')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl border-2 border-border-medium hover:border-primary-400 hover:bg-background-200 transition-all duration-300 hover:shadow-soft"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-text-primary" strokeWidth={2.5} />
              ) : (
                <Menu className="h-6 w-6 text-text-primary" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border-light animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-text-secondary hover:text-primary-600 transition-all duration-300 py-2 px-4 rounded-xl hover:bg-background-200 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="btn-secondary w-full px-6 py-4 rounded-2xl text-lg font-bold font-display shadow-yellow hover:shadow-yellow-lg transition-all duration-300">
                  {t('getQuote')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}