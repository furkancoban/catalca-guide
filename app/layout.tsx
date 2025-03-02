import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Çatalca - Tarih ve Doğa',
  description: 'Çatalca\'nın tarihi ve doğal güzellikleri',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
    viewportFit: 'cover',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16 overflow-x-hidden">
          <div className="container-fluid">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
