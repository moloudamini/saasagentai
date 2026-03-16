import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Send, Bot, Sparkles } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-blue-500/30 text-blue-400 bg-blue-500/5 py-1 px-4">
              ✨ Next-Gen Telegram Automation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Your AI-Powered <br />
              <span className="text-gradient">Newsroom</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
              Automate content curation, image generation, and publishing for your Telegram channels with our advanced AI agent system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient h-12 px-8 text-lg font-semibold">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5 text-white">
                View Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl opacity-50 rounded-full" />
            <div className="relative glass-dark rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Telography AI Bot</h3>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> online
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6 h-[400px] overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col gap-2 max-w-[80%]"
                >
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                    <p className="text-sm text-gray-300">🔍 Searching for latest tech news...</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                  className="flex flex-col gap-2 max-w-[90%] ml-auto items-end"
                >
                  <div className="bg-blue-600/20 p-4 rounded-2xl rounded-tr-none border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-blue-400">AI AGENT FOUND ARTICLE</span>
                    </div>
                    <p className="text-sm text-white font-medium mb-3">
                      "OpenAI announces GPT-5 release window for early 2026."
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" className="h-8 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 text-xs">
                        <Check className="w-3 h-3 mr-1" /> Approve
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 text-gray-400 hover:text-white text-xs">
                        <X className="w-3 h-3 mr-1" /> Ignore
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                <div className="flex-1 bg-black/20 rounded-xl px-4 py-2 text-sm text-gray-500 flex items-center">
                  Type a command...
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}