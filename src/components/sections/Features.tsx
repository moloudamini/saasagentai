import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Image as ImageIcon, Clock, Globe, Shield, Zap } from 'lucide-react';
const features = [
  {
    title: "AI Curation",
    description: "Our agents scan thousands of sources to find the exact content your audience craves.",
    icon: Brain,
    color: "blue"
  },
  {
    title: "AI Image Gen",
    description: "Automatically generate matching professional thumbnails for every post.",
    icon: ImageIcon,
    color: "purple"
  },
  {
    title: "Smart Scheduling",
    description: "Deploy content at peak engagement times automatically across timezones.",
    icon: Clock,
    color: "indigo"
  },
  {
    title: "Multi-Source",
    description: "Pull from RSS, Twitter, Webhooks, and directly from news sites.",
    icon: Globe,
    color: "cyan"
  },
  {
    title: "Safety Filter",
    description: "Built-in AI moderation ensures your channel remains professional and compliant.",
    icon: Shield,
    color: "emerald"
  },
  {
    title: "Instant Setup",
    description: "Connect your Telegram bot in under 60 seconds and start automating.",
    icon: Zap,
    color: "orange"
  }
];
export function Features() {
  return (
    <section id="features" className="py-24 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to run a high-traffic newsroom without lifting a finger.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-dark border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}