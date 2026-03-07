import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Road Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-40 scale-110"
          style={{ transform: 'perspective(1000px) rotateX(20deg)' }}
        />
      </div>

      {/* Animated Car driving away */}
      <motion.div
        initial={{ scale: 1, y: 0, opacity: 0 }}
        animate={{ scale: 0.2, y: -200, opacity: [0, 1, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute z-20 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=400" 
          alt="Car" 
          className="w-64 h-auto rounded-lg shadow-2xl shadow-red-500/20"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic">
            AUTO<span className="text-emerald-500">VAULT</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-[0.5em] mt-4">
            The Digital Archive of Automotive Excellence
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={onEnter}
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-emerald-500 hover:text-white transition-all duration-500 rounded-full"
        >
          Enter the Vault
          <ChevronRight className="group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
    </div>
  );
}
