import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Zap, Gauge, Timer, Info, Clock } from 'lucide-react';
import { Car, Manufacturer } from '../types';
import ThreeScene from './ThreeScene';

interface CarDetailProps {
  car: Car;
  manufacturer: Manufacturer;
  onBack: () => void;
}

export default function CarDetail({ car, manufacturer, onBack }: CarDetailProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-20">
      {/* Navigation */}
      <div className="p-8 flex items-center justify-between border-b border-white/5">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-mono"
        >
          <ArrowLeft size={16} /> Back to Collection
        </button>
        <div className="flex items-center gap-4">
          <img src={manufacturer.logo} alt={manufacturer.name} className="h-6 w-auto opacity-50 grayscale" />
          <span className="text-white/20 font-mono text-xs uppercase tracking-widest">{car.year} Model</span>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left: 3D Scene */}
        <div 
          className="relative h-[50vh] lg:h-full border-r border-white/5 cursor-pointer group/scene"
        >
          <ThreeScene modelUrl={car.modelUrl} />
        </div>

        {/* Right: Info */}
        <div className="p-8 md:p-16 overflow-y-auto space-y-16">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter"
            >
              {car.name}
            </motion.h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl">
              {car.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="cursor-pointer">
              <SpecItem icon={<Cpu size={20} />} label="Engine" value={car.specs.engine} highlight />
            </div>
            <div className="cursor-pointer">
              <SpecItem icon={<Zap size={20} />} label="Power" value={car.specs.power} highlight />
            </div>
            <div className="cursor-pointer">
              <SpecItem icon={<Gauge size={20} />} label="Top Speed" value={car.specs.topSpeed} highlight />
            </div>
            <div className="cursor-pointer">
              <SpecItem icon={<Timer size={20} />} label="0-60 MPH" value={car.specs.zeroToSixty} highlight />
            </div>
          </div>

          {/* History Section */}
          <div className="space-y-8 pt-16 border-t border-white/5">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-emerald-500">
                <Info size={20} />
                <span className="uppercase tracking-[0.3em] text-xs font-bold">Historical Significance</span>
              </div>
              <p className="text-white/60 leading-relaxed text-lg">
                {car.history}
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-3 text-emerald-500">
                <img src={manufacturer.logo} className="h-5 w-auto grayscale invert" alt="" />
                <span className="uppercase tracking-[0.3em] text-xs font-bold">Manufacturer History</span>
              </div>
              <p className="text-white/60 leading-relaxed text-lg italic">
                {manufacturer.history}
              </p>
              
              {/* Manufacturer Timeline */}
              {manufacturer.timeline && manufacturer.timeline.length > 0 && (
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3 text-emerald-500">
                    <Clock size={20} />
                    <span className="uppercase tracking-[0.3em] text-xs font-bold">Evolution Timeline</span>
                  </div>
                  <div className="relative border-l border-white/10 ml-3 space-y-8 pb-4">
                    {manufacturer.timeline.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8"
                      >
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-black" />
                        <div className="text-emerald-500 font-mono text-sm font-bold mb-1">{item.year}</div>
                        <div className="text-white/70 text-sm leading-relaxed">{item.event}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ icon, label, value, highlight }: { icon: React.ReactNode; label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`space-y-2 transition-colors duration-300 ${highlight ? 'hover:text-emerald-500' : ''}`}>
      <div className="flex items-center gap-2 text-white/40">
        {icon}
        <span className="uppercase tracking-widest text-[10px] font-bold font-mono">{label}</span>
      </div>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
    </div>
  );
}
