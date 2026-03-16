import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for starting out",
    features: ["1 Telegram Channel", "5 AI Posts / month", "Basic AI Curation", "Standard Support"],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "The automation powerhouse",
    features: ["5 Telegram Channels", "Unlimited AI Posts", "AI Image Generation", "Advanced Scheduling", "Priority Support"],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Business",
    price: "$99",
    description: "Scale your media empire",
    features: ["Unlimited Channels", "White-labeling", "Custom AI Models", "API Access", "Dedicated Manager"],
    cta: "Contact Sales",
    popular: false
  }
];
export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that fits your growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300",
                plan.popular 
                  ? "bg-blue-600/5 border-blue-500/50 scale-105 shadow-[0_0_40px_rgba(37,99,235,0.15)]" 
                  : "glass-dark border-white/5 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className={cn(
                  "w-full h-12 text-md font-bold",
                  plan.popular ? "btn-gradient" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}