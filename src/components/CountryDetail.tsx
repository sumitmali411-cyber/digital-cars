import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, History, Globe } from 'lucide-react';
import { Country, Car } from '../types';
import CarCard from './CarCard';

interface CountryDetailProps {
  country: Country;
  cars: Car[];
  onBack: () => void;
  onCarClick: (car: Car) => void;
}

export default function CountryDetail({ country, cars, onBack, onCarClick }: CountryDetailProps) {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-50"
          alt={country.name}
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 uppercase tracking-widest text-xs font-mono"
          >
            <ArrowLeft size={16} /> Back to Countries
          </button>
          
          <div className="flex items-center gap-6 mb-4">
            <span className="text-6xl">{country.flag}</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">
              {country.name}
            </h1>
          </div>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-emerald-500">
            <History size={20} />
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Historical Context</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">The Automotive Journey</h2>
          <p className="text-white/60 leading-relaxed text-lg">
            {country.history}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-emerald-500">
            <Globe size={20} />
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Global Impact</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Cultural Heritage</h2>
          <p className="text-white/60 leading-relaxed text-lg">
            {country.automotiveHeritage}
          </p>
        </motion.div>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-bold block mb-2">The Collection</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Iconic Machines</h2>
          </div>
          <span className="text-white/20 font-mono text-xs uppercase tracking-widest">
            {cars.length} Artifacts Found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => onCarClick(car)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
