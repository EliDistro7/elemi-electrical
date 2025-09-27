'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    projects: 'Projects',
    equipment: 'Equipment',
    certifications: 'Certifications',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: "Tanzania's Leading Electrical Engineering Contractor",
    heroSubtitle: 'Innovative. Skilled. Reliable electrical solutions since 2019',
    viewProjects: 'View Our Projects',
    getQuote: 'Get Quote',
    
    // About Section
    aboutTitle: 'About Elemi Electrical',
    aboutSubtitle: 'Professional Excellence Since 2019',
    directorMessage: "Director's Message",
    directorName: 'Baraka M. Mwakitwange, Managing Director',
    missionTitle: 'Our Mission',
    visionTitle: 'Our Vision',
    mission: 'To provide professional electrical contracting services with technical competence and ethical practices.',
    vision: 'To be a catalyst for job creation and economic development through professional electrical services.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive Electrical Solutions',
    transmissionTitle: 'Transmission & Distribution',
    transmissionDesc: 'Construction of transmission lines, MV & LV distribution, transformer installations',
    solarTitle: 'Solar Power Systems',
    solarDesc: 'Design and installation of comprehensive solar energy solutions',
    commercialTitle: 'Commercial & Residential',
    commercialDesc: 'Lighting systems, fire alarms, and television installations',
    hvacTitle: 'HVAC Services',
    hvacDesc: 'Air conditioning and refrigeration system installations',
    supplyTitle: 'General Supply',
    supplyDesc: 'Equipment and electrical materials supply',
    
    // Projects
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Major Electrical Infrastructure Projects',
    projectValue: 'Project Value',
    
    // Stats
    statsTitle: 'Company Statistics',
    established: 'Established',
    projectValueTotal: 'Total Project Value',
    majorClients: 'Major Clients',
    staffMembers: 'Staff Members',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch for your electrical needs',
    headOffice: 'Head Office',
    branchOffice: 'Branch Office',
    phone: 'Phone',
    email: 'Email',
    
    // Values
    valuesTitle: 'Our Core Values',
    innovative: 'Innovative',
    skilled: 'Skilled',
    reliable: 'Reliable',
    integrity: 'Integrity',
    quality: 'Quality',
    transparency: 'Transparency',
    
    // CTA
    requestQuote: 'Request Quote',
    learnMore: 'Learn More',
    downloadProfile: 'Download Profile',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu Sisi',
    services: 'Huduma',
    projects: 'Miradi',
    equipment: 'Vifaa',
    certifications: 'Vyeti',
    contact: 'Wasiliana',
    
    // Hero Section
    heroTitle: 'Mkontrakta Mkuu wa Uhandisi wa Umeme Tanzania',
    heroSubtitle: 'Suluhisho za umeme za kisasa, mahiri na za kuaminika tangu 2019',
    viewProjects: 'Tazama Miradi Yetu',
    getQuote: 'Omba Bei',
    
    // About Section
    aboutTitle: 'Kuhusu Elemi Electrical',
    aboutSubtitle: 'Ubora wa Kitaalamu Tangu 2019',
    directorMessage: 'Ujumbe wa Mkurugenzi',
    directorName: 'Baraka M. Mwakitwange, Mkurugenzi Mkuu',
    missionTitle: 'Dhamira Yetu',
    visionTitle: 'Maono Yetu',
    mission: 'Kutoa huduma za ukontrakta wa umeme kwa ustadi wa kitaalamu na maadili.',
    vision: 'Kuwa chombo cha kuongoza katika kuunda ajira na maendeleo ya kiuchumi kupitia huduma za kitaalamu za umeme.',
    
    // Services
    servicesTitle: 'Huduma Zetu',
    servicesSubtitle: 'Suluhisho Kamili za Umeme',
    transmissionTitle: 'Usambazaji wa Umeme',
    transmissionDesc: 'Ujenzi wa mistari ya umeme, usambazaji wa MV na LV, usakinishaji wa vitransfa',
    solarTitle: 'Mifumo ya Umeme wa Jua',
    solarDesc: 'Muundo na usakinishaji wa suluhisho kamili za nishati ya jua',
    commercialTitle: 'Biashara na Makazi',
    commercialDesc: 'Mifumo ya mwanga, kengele za moto, na usakinishaji wa televisheni',
    hvacTitle: 'Huduma za HVAC',
    hvacDesc: 'Usakinishaji wa mifumo ya hewa baridi na barafu',
    supplyTitle: 'Usambazaji wa Jumla',
    supplyDesc: 'Usambazaji wa vifaa na vifaa vya umeme',
    
    // Projects
    projectsTitle: 'Miradi Mikuu',
    projectsSubtitle: 'Miradi Mikuu ya Miundombinu ya Umeme',
    projectValue: 'Thamani ya Mradi',
    
    // Stats
    statsTitle: 'Takwimu za Kampuni',
    established: 'Ilianzishwa',
    projectValueTotal: 'Jumla ya Thamani ya Miradi',
    majorClients: 'Wateja Wakuu',
    staffMembers: 'Wafanyakazi',
    
    // Contact
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Wasiliana nasi kwa mahitaji yako ya umeme',
    headOffice: 'Ofisi Kuu',
    branchOffice: 'Ofisi ya Tawi',
    phone: 'Simu',
    email: 'Barua Pepe',
    
    // Values
    valuesTitle: 'Maadili Yetu',
    innovative: 'Ubunifu',
    skilled: 'Ustadi',
    reliable: 'Kuaminika',
    integrity: 'Uadilifu',
    quality: 'Ubora',
    transparency: 'Uwazi',
    
    // CTA
    requestQuote: 'Omba Bei',
    learnMore: 'Jifunze Zaidi',
    downloadProfile: 'Pakua Profaili',
    
    // Footer
    followUs: 'Tufuate',
    allRightsReserved: 'Haki zote zimehifadhiwa',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sw')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}