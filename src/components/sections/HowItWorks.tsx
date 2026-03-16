import React from 'react';
import { motion } from 'framer-motion';
const steps = [
  {
    number: "01",
    title: "Connect Channel",
    description: "Link your Telegram Bot API key and select your target channels."
  },
  {
    number: "02",
    title: "Configure AI",
    description: "Set your niche, tone of voice, and content sources for the curation agent."
  },
  {
    number: "03",
    title: "Scale Automagically",
    description: "Your newsroom is live. Review suggestions or set to full auto-pilot."
  }
];
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How it Works</h2>
          <p className="text-gray-400">Simple 3-step setup to total automation.</p>
        </div>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10 relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/20 opacity-40" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}