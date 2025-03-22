import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Configure Cairo font (supports Arabic)
const cairo = Cairo({ 
  subsets: ['latin', 'arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

// Load custom Amazigh font
const amazigh = localFont({
  src: [
    {
      path: '../public/fonts/Amazigh-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Amazigh-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-amazigh',
});

export const metadata: Metadata = {
  title: 'Authentic Algerian Meals - Curated Daily by AI',
  description: 'Get personalized Algerian meal plans tailored to your taste, dietary needs, and local ingredients – no more meal planning stress!',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${cairo.variable} ${amazigh.variable}`}>
      <body className="font-cairo text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
