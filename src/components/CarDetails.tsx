import React, { useState, useEffect } from 'react';
import { Car, Manufacturer } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Zap, Gauge, Timer, BookOpen } from 'lucide-react';

export default function CarDetails({ car, manufacturer }: { car: Car; manufacturer: Manufacturer }) {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchInsight() {
      setLoading(true);
      try {
        // The Gemini key stays on the server; this goes through the proxy.
        const response = await fetch('/api/insight', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            carName: car.name,
            carYear: car.year,
            manufacturer: manufacturer.name,
          }),
        });

        if (!response.ok) {
          throw new Error(`Insight request failed with status ${response.status}`);
        }

        const data = await response.json();
        setInsight(data.insight || '');
      } catch (e) {
        setInsight('A masterpiece of automotive history, representing the pinnacle of its era.');
      } finally {
        setLoading(false);
      }
    }
    fetchInsight();
  }, [car.id]);

  return (
    <div className="space-y-8">
      <header>
        <div className="flex items-baseline gap-4">
          <h1 className="text-5xl font-serif italic text-white">{car.name}</h1>
          <span className="text-2xl font-mono text-white/40">{car.year}</span>
        </div>
        <p className="text-xl text-white/60 mt-2 font-light tracking-wide">{manufacturer.name}</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SpecItem icon={<Zap size={16}/>} label="Power" value={car.specs.power} />
        <SpecItem icon={<Gauge size={16}/>} label="Top Speed" value={car.specs.topSpeed} />
        <SpecItem icon={<Timer size={16}/>} label="0-60 mph" value={car.specs.zeroToSixty} />
        <SpecItem icon={<BookOpen size={16}/>} label="Engine" value={car.specs.engine} />
      </div>

      <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <div className="flex items-center gap-2 mb-4 text-emerald-400">
          <Info size={18} />
          <h3 className="uppercase text-xs font-bold tracking-widest">Curator's Insight</h3>
        </div>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="h-12 flex items-center"
            >
              <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          ) : (
            <motion.p 
              key="content"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-lg text-white/80 leading-relaxed font-serif italic"
            >
              "{insight}"
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      <section className="space-y-4">
        <h3 className="uppercase text-xs font-bold tracking-widest text-white/40">Manufacturer History</h3>
        <p className="text-white/70 leading-relaxed">
          {manufacturer.history}
        </p>
      </section>
    </div>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
      <div className="flex items-center gap-2 text-white/40 mb-1">
        {icon}
        <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
      </div>
      <div className="text-lg font-mono text-white">{value}</div>
    </div>
  );
}
