
import { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import NavLinks from '@/components/NavLinks';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'বাজার দর - আজকের বাজারের দাম',
  description:
    'চাল, ডাল, তেল, সবজি, মাছ, মাংস ও নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর জানুন।',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#FBFCFA]">
        <Navbar />

        <Suspense
          fallback={
            <div className="h-10 border-t border-black/10 bg-[#FBFCFA]" />
          }
        >
          <NavLinks />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-10 border-y border-black/5 bg-[#FBFCFA]" />
          }
        >
          <Marquee />
        </Suspense>

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}