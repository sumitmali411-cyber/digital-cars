import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Car } from 'lucide-react';

export default function ScrollCarProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(scaleX, [0, 1], ['0%', '100%']);
  const rotate = useTransform(scaleX, [0, 1], [0, 10]);
  
  // Smoke particles state
  const [particles, setParticles] = useState<{ id: string; x: number }[]>([]);
  
  // Track direction
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [lastX, setLastX] = useState(0);

  useEffect(() => {
    const unsubscribe = scaleX.on('change', (latest) => {
      // Determine direction
      if (latest > lastX) setDirection('right');
      else if (latest < lastX) setDirection('left');
      setLastX(latest);

      // Add a particle every time progress changes significantly
      if (Math.random() > 0.6) {
        setParticles(prev => [
          ...prev.slice(-20), // Keep last 20 particles
          { id: `${Date.now()}-${Math.random()}`, x: latest * 100 }
        ]);
      }
    });
    return () => unsubscribe();
  }, [scaleX, lastX]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[200] pointer-events-none">
      {/* Road line */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 border-b border-dashed border-white/10" />
      
      {/* Loading bar (Road) */}
      <motion.div 
        className="absolute top-0 left-0 h-full bg-emerald-500/30 origin-left"
        style={{ scaleX }}
      />

      {/* Car Container */}
      <motion.div 
        className="absolute top-0 -translate-y-1/2 flex items-center"
        style={{ left: x }}
      >
        {/* Smoke Particles */}
        <div className={`absolute ${direction === 'right' ? 'right-full mr-1' : 'left-full ml-1'} flex gap-1`}>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0.6, scale: 0.5, x: 0 }}
              animate={{ opacity: 0, scale: 2, x: direction === 'right' ? -30 : 30 }}
              transition={{ duration: 1 }}
              className="w-2 h-2 bg-white/20 rounded-full blur-sm"
            />
          ))}
        </div>

        {/* The Car */}
        <motion.div
          animate={{ rotateY: direction === 'right' ? 0 : 180 }}
          style={{ rotate }}
          className="relative text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-transform duration-300"
        >
          <Car size={24} fill="currentColor" className="transform -scale-x-100" />
          
          {/* Headlight glow */}
          <div className={`absolute ${direction === 'right' ? '-right-4' : '-left-4'} top-1/2 -translate-y-1/2 w-8 h-4 bg-emerald-500/20 blur-md rounded-full`} />
        </motion.div>
      </motion.div>

      {/* Percentage indicator */}
      <motion.div 
        className="absolute top-4 right-4 font-mono text-[10px] text-white/40 tracking-widest uppercase pointer-events-none"
      >
        <motion.span className="pointer-events-none">
          {useTransform(scaleX, (latest) => Math.round(latest * 100))}
        </motion.span>
        % LOADED
      </motion.div>
    </div>
  );
}
