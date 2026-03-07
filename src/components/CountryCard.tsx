import React from 'react';
import { motion } from 'motion/react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

export default function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
      
      {/* Background Image - Using a generic country-related image */}
      <img
        src={`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800`}
        alt={country.name}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <span className="text-4xl mb-4">{country.flag}</span>
        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">
          {country.name}
        </h3>
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider line-clamp-2">
          {country.description}
        </p>
      </div>

      <div className="absolute top-6 right-6 z-20">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
          <span className="text-white text-xs">→</span>
        </div>
      </div>
    </motion.div>
  );
}
