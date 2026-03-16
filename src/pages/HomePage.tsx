import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}