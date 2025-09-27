'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">ELEMI ELECTRICAL</h2>
                <p className="text-gray-400 text-sm">Innovative. Skilled. Reliable.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tanzania's leading electrical engineering contractor, providing professional electrical solutions since 2019. 
              Specializing in power infrastructure, solar installations, and electrical services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Buzuruga Plaza Complex, Mwanza</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">+255 764 420 826</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm">baraka@elemielectrical.co.tz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Elemi Electrical Company Limited. {t('allRightsReserved')}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>CRB Registration: E2/96/06/2024</span>
              <span>Class II Electrical Contractor</span>
              <span>Established 2019</span>
              <span>www.elemielectrical.co.tz</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}