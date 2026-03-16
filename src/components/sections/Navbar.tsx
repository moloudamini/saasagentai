import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Zap } from 'lucide-react';
export function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed w-full top-0 z-50 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Telography</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('features')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Process
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Pricing
            </button>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle className="static top-0 right-0" />
            <Button className="btn-gradient hidden sm:flex">
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}