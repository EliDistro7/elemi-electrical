'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Equipment } from '@/components/Equipment';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import Carousel from '@/components/Carousel';
import PDFCarousel from '@/components/PDFCarousel';

export default function Home() {
    const certs = [
    { id: 1, title: "Company Profile 2025", url: "/elemipro.pdf" },

  ];
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Equipment />
          <Contact />
        <PDFCarousel pdfs={certs} title="Get Our Profile Docs" />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}