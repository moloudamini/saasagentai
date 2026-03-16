import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Telography</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Automating the next generation of digital newsrooms. Scalable, AI-driven, and built for modern content creators.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Telography by SaaS Agent Ai. All rights reserved.</p>
          <p className="italic">Note: AI request limits may apply across all user apps in a given time period.</p>
        </div>
      </div>
    </footer>
  );
}