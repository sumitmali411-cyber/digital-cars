import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Zap, Gauge, Timer, Info, Volume2, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/genai';
import { Car, Manufacturer } from '../types';
import ThreeScene from './ThreeScene';

interface CarDetailProps {
  car: Car;
  manufacturer: Manufacturer;
  onBack: () => void;
}

export default function CarDetail({ car, manufacturer, onBack }: CarDetailProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const handleAiSubmit = async () => {
    if (!aiQuestion.trim()) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setAiResponse('');
      setAiError('AI assistant requires GEMINI_API_KEY to be configured.');
      return;
    }

    setAiLoading(true);
    setAiResponse('');
    setAiError('');

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const result = await model.generateContent(
        `About the ${car.year} ${manufacturer.name} ${car.name}: ${aiQuestion}`
      );
      setAiResponse(result.response.text());
    } catch (err) {
      setAiError('Failed to get a response. Please try again.');
      console.error('Gemini AI error:', err);
    } finally {
      setAiLoading(false);
    }
  };

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

            {/* AI Assistant Section */}
            <div className="pt-8 border-t border-white/5">
              <button
                onClick={() => setAiOpen(prev => !prev)}
                className="flex items-center justify-between w-full text-left group"
              >
                <div className="flex items-center gap-3 text-emerald-500">
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Ask AI About This Car</span>
                </div>
                <span className="text-white/40 group-hover:text-white transition-colors">
                  {aiOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {aiOpen && (
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={aiQuestion}
                      onChange={e => setAiQuestion(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && !aiLoading && handleAiSubmit()}
                      placeholder={`Ask anything about the ${car.year} ${manufacturer.name} ${car.name}...`}
                      className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                    <button
                      onClick={handleAiSubmit}
                      disabled={aiLoading || !aiQuestion.trim()}
                      className="flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:bg-white/10 disabled:text-white/20 text-black font-bold text-xs uppercase tracking-widest rounded transition-colors"
                    >
                      <Send size={14} />
                      {aiLoading ? 'Asking...' : 'Ask'}
                    </button>
                  </div>

                  {aiLoading && (
                    <p className="text-white/40 text-sm animate-pulse">Getting AI response...</p>
                  )}

                  {aiError && (
                    <p className="text-red-400 text-sm">{aiError}</p>
                  )}

                  {aiResponse && !aiLoading && (
                    <div className="bg-white/5 border border-white/10 rounded p-5">
                      <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
                    </div>
                  )}
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
