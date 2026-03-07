import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { countries, manufacturers, cars } from './data/museumData';
import ThreeScene from './components/ThreeScene';
import CarDetails from './components/CarDetails';
import { ChevronRight, Globe, LayoutGrid, Car as CarIcon, Search } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [selectedCarId, setSelectedCarId] = useState(cars[0].id);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const currentCar = cars.find(c => c.id === selectedCarId) || cars[0];
  const currentManufacturer = manufacturers.find(m => m.id === currentCar.manufacturerId)!;

  const filteredCars = filterCountry 
    ? cars.filter(c => c.countryId === filterCountry)
    : cars;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation Rail */}
      <nav className="fixed left-0 top-0 bottom-0 w-20 border-r border-white/5 bg-black/20 backdrop-blur-xl z-50 flex flex-col items-center py-8 gap-8">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl mb-8">
          <CarIcon className="text-black" size={24} />
        </div>
        <NavIcon icon={<Globe size={20} />} active={!filterCountry} onClick={() => setFilterCountry(null)} label="All" />
        {countries.map(country => (
          <NavIcon 
            key={country.id} 
            icon={<span className="text-lg">{country.flag}</span>} 
            active={filterCountry === country.id} 
            onClick={() => setFilterCountry(country.id)}
            label={country.name}
          />
        ))}
      </nav>

      <main className="pl-20 min-h-screen">
        {/* Header */}
        <header className="p-8 flex justify-between items-center border-bottom border-white/5">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-1">Digital Archive</h2>
            <h1 className="text-2xl font-serif italic">AutoVault Museum</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                placeholder="Search collection..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors w-64"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Collection List */}
          <div className="lg:col-span-3 border-r border-white/5 h-[calc(100vh-100px)] overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-white/40">
                {filterCountry ? `${filterCountry} Collection` : 'Full Collection'}
              </h3>
              <span className="text-[10px] font-mono text-white/20">{filteredCars.length} Units</span>
            </div>
            
            {filteredCars.map(car => (
              <button
                key={car.id}
                onClick={() => setSelectedCarId(car.id)}
                className={cn(
                  "w-full text-left p-4 rounded-xl transition-all duration-300 group relative overflow-hidden",
                  selectedCarId === car.id ? "bg-white/10 border border-white/20" : "hover:bg-white/5 border border-transparent"
                )}
              >
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-white/40 mb-1">{car.year}</div>
                  <div className="font-medium group-hover:translate-x-1 transition-transform">{car.name}</div>
                  <div className="text-xs text-white/40 mt-1">{manufacturers.find(m => m.id === car.manufacturerId)?.name}</div>
                </div>
                {selectedCarId === car.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Middle Column: 3D Viewer */}
          <div className="lg:col-span-5 p-8 h-[calc(100vh-100px)]">
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0">
                <ThreeScene modelUrl={currentCar.modelUrl} />
              </div>
              <div className="mt-6 flex gap-4">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Origin</div>
                    <div className="flex items-center gap-2">
                      <span>{countries.find(c => c.id === currentCar.countryId)?.flag}</span>
                      <span className="text-sm font-medium">{countries.find(c => c.id === currentCar.countryId)?.name}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/20" />
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Manufacturer</div>
                    <div className="text-sm font-medium">{currentManufacturer.name}</div>
                  </div>
                  <img src={currentManufacturer.logo} alt="" className="w-6 h-6 object-contain grayscale invert opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Reading */}
          <div className="lg:col-span-4 p-8 h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
            <CarDetails car={currentCar} manufacturer={currentManufacturer} />
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}

function NavIcon({ icon, active, onClick, label }: { icon: React.ReactNode, active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative group flex flex-col items-center gap-1 transition-all duration-300",
        active ? "text-emerald-400" : "text-white/30 hover:text-white"
      )}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300",
        active ? "bg-emerald-500/10" : "hover:bg-white/5"
      )}>
        {icon}
      </div>
      <span className="text-[8px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-active"
          className="absolute -right-[21px] top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-l-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        />
      )}
    </button>
  );
}
