import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Kyyvii Studio | Photostudio Batam & Batu Aji',
  description: 'Photostudio premium di Batam, Batu Aji. Melayani jasa foto profesional, buka 10:00 - 22:00 WIB.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-900 selection:text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
