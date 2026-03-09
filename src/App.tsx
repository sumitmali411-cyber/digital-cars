import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';
import { cars, manufacturers, countries } from './data/museumData';
import { Car, Country } from './types';
import Hero from './components/Hero';
import CountryCard from './components/CountryCard';
import CountryDetail from './components/CountryDetail';
import CarDetail from './components/CarDetail';
import ScrollCarProgress from './components/ScrollCarProgress';

type ViewState = 'hero' | 'countries' | 'country-detail' | 'car-detail';

export default function App() {
  const [view, setView] = useState<ViewState>('hero');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const countryCars = useMemo(() => {
    if (!selectedCountry) return [];
    return cars.filter(car => car.countryId === selectedCountry.id);
  }, [selectedCountry]);

  const carManufacturer = useMemo(() => {
    if (!selectedCar) return null;
    return manufacturers.find(m => m.id === selectedCar.manufacturerId) || null;
  }, [selectedCar]);

  // Scroll to top on view change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedCountry, selectedCar]);

  return (
    <div className="min-h-screen bg-black selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <ScrollCarProgress />
      {/* Global Header */}
      {view !== 'hero' && (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <button 
              onClick={() => setView('hero')}
              className="text-2xl font-black tracking-tighter text-white uppercase italic hover:text-emerald-500 transition-colors"
            >
              AUTO<span className="text-emerald-500">VAULT</span>
            </button>
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setView('countries')}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${view === 'countries' ? 'text-emerald-500' : 'text-white/40 hover:text-white'}`}
              >
                Archive
              </button>
            </div>
          </div>
        </header>
      )}

      <AnimatePresence mode="wait">
        {view === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, x: -100, skewX: 10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            exit={{ opacity: 0, x: 200, skewX: -20, filter: 'blur(10px)', pointerEvents: 'none' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero onEnter={() => setView('countries')} />
          </motion.div>
        )}

        {view === 'countries' && (
          <motion.div
            key="countries"
            initial={{ opacity: 0, x: -200, skewX: 20 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            exit={{ opacity: 0, x: 200, skewX: -20, filter: 'blur(10px)', pointerEvents: 'none' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto px-8 py-32"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-emerald-500">
                  <Globe size={20} />
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Global Archives</span>
                </div>
                <h2 className="text-7xl font-black uppercase italic tracking-tighter text-white">
                  Select <span className="text-emerald-500">Origin</span>
                </h2>
                <p className="text-white/40 max-w-xl text-lg">
                  Explore automotive history through the lens of national heritage and engineering philosophy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countries.map((country) => (
                <CountryCard
                  key={country.id}
                  country={country}
                  onClick={() => {
                    setSelectedCountry(country);
                    setView('country-detail');
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {view === 'country-detail' && selectedCountry && (
          <motion.div
            key="country-detail"
            initial={{ opacity: 0, x: -200, skewX: 10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            exit={{ opacity: 0, x: 200, skewX: -10, filter: 'blur(10px)', pointerEvents: 'none' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CountryDetail
              country={selectedCountry}
              cars={countryCars}
              onBack={() => setView('countries')}
              onCarClick={(car) => {
                setSelectedCar(car);
                setView('car-detail');
              }}
            />
          </motion.div>
        )}

        {view === 'car-detail' && selectedCar && carManufacturer && (
          <motion.div
            key="car-detail"
            initial={{ opacity: 0, x: 300, skewX: -20, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -300, skewX: 20, filter: 'blur(20px)', pointerEvents: 'none' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <CarDetail
              car={selectedCar}
              manufacturer={carManufacturer}
              onBack={() => setView('country-detail')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      {view !== 'hero' && (
        <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <button 
            onClick={() => setView('hero')}
            className="text-2xl font-black tracking-tighter text-white uppercase italic hover:text-emerald-500 transition-colors"
          >
            AUTO<span className="text-emerald-500">VAULT</span>
          </button>
          <div className="flex gap-8 items-center">
            <button 
              onClick={() => setView('countries')}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors"
            >
              Archive
            </button>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
              <span>© 2026 Digital Archive</span>
              <span>Terms of Access</span>
              <span>Privacy Protocol</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
