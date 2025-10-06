'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Award, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Footer() {
  const { t, language } = useLanguage();
  const router = useRouter();

  const translations = {
    en: {
      quickLinks: 'Quick Links',
      services: 'Services',
      allRightsReserved: 'All Rights Reserved',
      ourCertificate: 'Our Certificate',
      viewAllCertificates: 'View All Certificates',
      certDescription: 'Licensed & Certified Electrical Contractor',
      tagline: 'Innovative. Skilled. Reliable.'
    },
    sw: {
      quickLinks: 'Viungo vya Haraka',
      services: 'Huduma',
      allRightsReserved: 'Haki Zote Zimehifadhiwa',
      ourCertificate: 'Cheti Chetu',
      viewAllCertificates: 'Tazama Vyeti Vyote',
      certDescription: 'Mkandarasi wa Umeme Aliye na Leseni',
      tagline: 'Ubunifu. Ujuzi. Uaminifu.'
    }
  };

  const texts = translations[language] || translations.en;

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' }
  ];

  const services = [
    'Transmission & Distribution',
    'Solar Power Systems',
    'HVAC Services',
    'Commercial Electrical',
    'General Supply'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-gradient p-3 rounded-2xl shadow-primary">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-display-xs text-white font-display">ELEMI ELECTRICAL</h2>
                <p className="text-text-tertiary text-sm font-medium tracking-wide">{texts.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-pretty">
              Tanzania's leading electrical engineering contractor, providing professional electrical solutions since 2019. 
              Specializing in power infrastructure, solar installations, and electrical services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-primary-800/50 rounded-xl flex items-center justify-center group-hover:bg-primary-700/60 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-300" />
                </div>
                <span className="text-sm leading-relaxed">Buzuruga Plaza Complex, Mwanza</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-green-800/50 rounded-xl flex items-center justify-center group-hover:bg-green-700/60 transition-colors">
                  <Phone className="h-4 w-4 text-green-300" />
                </div>
                <a href="tel:+255764420826" className="text-sm hover:text-green-300 transition-colors">
                  +255 764 420 826
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-yellow-800/50 rounded-xl flex items-center justify-center group-hover:bg-yellow-700/60 transition-colors">
                  <Mail className="h-4 w-4 text-yellow-300" />
                </div>
                <a href="mailto:baraka@elemielectrical.co.tz" className="text-sm hover:text-yellow-300 transition-colors">
                  baraka@elemielectrical.co.tz
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-display">{texts.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-display">{texts.services}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-yellow-300 transition-all duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificate Section  */}
      

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-10 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-6 md:mb-0 text-center md:text-left">
              © 2025 Elemi Electrical Company Limited. {texts.allRightsReserved}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-primary hover:scale-105"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center">
                <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                CRB Registration: E2/96/06/2024
              </span>
              <span className="flex items-center">
                <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                Class II Electrical Contractor
              </span>
              <span className="flex items-center">
                <div className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></div>
                Established 2019
              </span>
              <span className="flex items-center">
                <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                www.elemielectrical.co.tz
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}