import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Zap, Gauge, Timer, Info, Volume2 } from 'lucide-react';
import { Car, Manufacturer } from '../types';
import ThreeScene from './ThreeScene';

interface CarDetailProps {
  car: Car;
  manufacturer: Manufacturer;
  onBack: () => void;
}

export default function CarDetail({ car, manufacturer, onBack }: CarDetailProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio with a more reliable source and cross-origin handling
    const audio = new Audio();
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
    audio.volume = 0.5;
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;
    
    // Pre-load the audio
    audio.load();

    // Resume audio context on first interaction if needed
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          audioRef.current?.pause();
          audioRef.current!.currentTime = 0;
        }).catch(() => {});
      }
    };
    window.addEventListener('click', unlockAudio, { once: true });
    
    return () => {
      window.removeEventListener('click', unlockAudio);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playRev = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const stopRev = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

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
          className="relative h-[50vh] lg:h-full border-r border-white/5 cursor-pointer"
          onMouseEnter={playRev}
          onMouseLeave={stopRev}
        >
          <ThreeScene modelUrl={car.modelUrl} />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/20 pointer-events-none">
            <Volume2 size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Hover to Rev Engine</span>
          </div>
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
            <div onMouseEnter={playRev} onMouseLeave={stopRev}>
              <SpecItem icon={<Cpu size={20} />} label="Engine" value={car.specs.engine} highlight />
            </div>
            <div onMouseEnter={playRev} onMouseLeave={stopRev}>
              <SpecItem icon={<Zap size={20} />} label="Power" value={car.specs.power} highlight />
            </div>
            <div onMouseEnter={playRev} onMouseLeave={stopRev}>
              <SpecItem icon={<Gauge size={20} />} label="Top Speed" value={car.specs.topSpeed} highlight />
            </div>
            <div onMouseEnter={playRev} onMouseLeave={stopRev}>
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
