import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Preloader from "@/components/preloader";
import ScrollProgress from "@/components/scroll-progress";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import CommandPalette from "@/components/command-palette";
import LiveStatus from "@/components/live-status";
import ChameleonAura from "@/components/chameleon-aura";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { profile } from "@/data/profile";
import CustomCursor from "@/components/custom-cursor";
import SmoothScroll from "@/components/smooth-scroll";
import Chatbot from '@/components/chatbot'

// 2. Konfigurasi Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Portofolio Lukman',
  description: 'Portofolio resmi Lukman, Pengembang Web Full-Stack yang berspesialisasi dalam membangun aplikasi modern dan berkinerja tinggi.',
  keywords: ['Web Developer', 'Full-Stack', 'Frontend', 'Backend', 'React', 'Laravel', 'Next.js'],
  authors: [{ name: 'Lukman' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <ChameleonAura />   
            <CommandPalette />  
            <Preloader />        
            <ScrollProgress />   
            <LiveStatus />       
            <CustomCursor />     

            <Navbar />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
            <Chatbot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}