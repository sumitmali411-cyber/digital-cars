import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Gauge, Zap } from 'lucide-react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

export default function CarCard({ car, onClick }: CarCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-emerald-500/30 transition-all duration-500"
    >
      {/* Image Preview */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={car.image || `https://picsum.photos/seed/${car.id}/800/500`}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
            {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-emerald-500 transition-colors">
            {car.name}
          </h3>
          <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">
            {car.description}
          </p>
        </div>

        {/* Quick Specs */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Gauge size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{car.specs.topSpeed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{car.specs.zeroToSixty}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-emerald-500 transition-colors">
            View Artifact
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-white transition-all">
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
