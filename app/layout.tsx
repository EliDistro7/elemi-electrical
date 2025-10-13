import { Header } from '@/components/Header';

import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';

// Primary font - Inter (improved weight range)
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Display font - Poppins (for headings and emphasis)
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

// Monospace font - JetBrains Mono (for code and numbers)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elemi Electrical Company Limited - Tanzania\'s Leading Electrical Contractor',
  description: 'Professional electrical engineering contractor in Tanzania since 2019. Specializing in power infrastructure, MV & LV lines, solar installations, and electrical services. Serving major clients like North Mara Gold Mine.',
  keywords: 'electrical contractor Tanzania, power infrastructure, solar installation, MV LV lines, electrical engineering, Mwanza electrical services',
  openGraph: {
    title: 'Elemi Electrical Company Limited',
    description: 'Tanzania\'s leading electrical engineering contractor - Innovative. Skilled. Reliable.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'sw_TZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans`}>
        <LanguageProvider>
         <Header />
        {children}
        <Footer />
        </LanguageProvider>
        
      </body>
    </html>
  );
}