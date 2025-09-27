import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}