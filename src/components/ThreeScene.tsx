import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, ContactShadows, useProgress, Html } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';
import { AlertCircle, Box, RotateCcw, Palette, DoorOpen, Eye } from 'lucide-react';
import * as THREE from 'three';

function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = React.useState(0);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setDisplayProgress(Math.round(progress));
    });
    return () => cancelAnimationFrame(raf);
  }, [progress]);

  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300" 
            style={{ width: `${displayProgress}%` }} 
          />
        </div>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          Loading Artifact {displayProgress}%
        </span>
      </div>
    </Html>
  );
}

function ErrorFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 text-center w-64">
        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
          <AlertCircle size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white">Model Unavailable</h4>
          <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">
            The 3D asset could not be retrieved from the archive.
          </p>
        </div>
      </div>
    </Html>
  );
}

function Model({ url, wireframe, color, doorsOpen }: { url: string; wireframe: boolean; color: string; doorsOpen: boolean }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Store original materials to avoid losing them
  const materialsRef = useRef<Record<string, THREE.Material>>({});

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Clone material so we don't affect other instances
          if (!materialsRef.current[mesh.uuid]) {
            materialsRef.current[mesh.uuid] = (mesh.material as THREE.Material).clone();
            mesh.material = materialsRef.current[mesh.uuid];
          }
          
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.wireframe = wireframe;
          
          // Try to identify car body paint material
          // Common names in car models: body, paint, shell, exterior
          const matName = mat.name.toLowerCase();
          if (matName.includes('body') || matName.includes('paint') || matName.includes('exterior') || matName.includes('color')) {
            mat.color.set(color);
          }
        }
      }
    });
  }, [scene, wireframe, color]);

  useFrame((state) => {
    if (modelRef.current) {
      // Subtle floating animation
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02;
    }
    
    // Animate doors if they exist
    scene.traverse((child) => {
      const name = child.name.toLowerCase();
      if (name.includes('door')) {
        const targetRotation = doorsOpen ? Math.PI / 3 : 0;
        // Determine left or right door to rotate correctly
        const isLeft = name.includes('left') || name.includes('l_');
        const direction = isLeft ? -1 : 1;
        
        // Interpolate rotation (assuming Z or Y axis depending on model, we'll try Z which is common for gullwing/scissor, or Y for regular)
        // For a generic approach without knowing the exact model rigging, we'll try rotating on Y and Z slightly
        child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, targetRotation * direction, 0.05);
      }
    });
  });

  return <primitive ref={modelRef} object={scene} />;
}

const COLORS = [
  { name: 'Rosso Corsa', value: '#ff0000' },
  { name: 'Giallo Modena', value: '#ffd700' },
  { name: 'Nero Daytona', value: '#111111' },
  { name: 'Bianco Avus', value: '#ffffff' },
  { name: 'British Racing Green', value: '#004225' },
  { name: 'Miami Blue', value: '#007acc' },
];

export default function ThreeScene({ modelUrl }: { modelUrl: string }) {
  const [error, setError] = useState<Error | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [carColor, setCarColor] = useState(COLORS[0].value);
  const [view, setView] = useState<'default' | 'top' | 'side' | 'interior'>('default');
  const [showColors, setShowColors] = useState(false);
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      setView('default');
    }
  };

  const setCameraView = (newView: 'default' | 'top' | 'side' | 'interior') => {
    setView(newView);
    if (controlsRef.current) {
      if (newView === 'interior') {
        // Move camera inside the car
        controlsRef.current.object.position.set(0.2, 0.5, 0);
        controlsRef.current.target.set(0.2, 0.5, 1);
      } else {
        // Reset to outside
        controlsRef.current.reset();
      }
    }
  };

  React.useEffect(() => {
    setError(null);
  }, [modelUrl]);

  if (error) {
    return (
      <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center p-8">
        <ErrorFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-neutral-900 rounded-2xl overflow-hidden relative group">
      <Canvas 
        key={modelUrl}
        dpr={[1, 2]} 
        shadows={{ type: THREE.PCFShadowMap }}
        camera={{ fov: 45, position: [4, 2, 4] }}
        onError={(e) => {
          console.error("Canvas Error:", e);
          setError(new Error("Canvas failed to initialize"));
        }}
      >
        <color attach="background" args={['#111111']} />
        
        <ErrorBoundary 
          key={modelUrl} 
          fallback={<ErrorFallback />}
        >
          <Suspense fallback={<Loader />}>
            <Stage environment="city" intensity={0.5}>
              <Model url={modelUrl} wireframe={wireframe} color={carColor} doorsOpen={doorsOpen} />
            </Stage>
            <ContactShadows opacity={0.4} scale={10} blur={2} far={10} resolution={256} color="#000000" />
          </Suspense>
        </ErrorBoundary>

        <OrbitControls 
          ref={controlsRef}
          makeDefault 
          autoRotate={!wireframe && view !== 'interior'} 
          autoRotateSpeed={0.5} 
          enablePan={false} 
          minPolarAngle={view === 'interior' ? 0 : Math.PI / 4} 
          maxPolarAngle={view === 'interior' ? Math.PI : Math.PI / 2} 
          minDistance={view === 'interior' ? 0 : 2}
          maxDistance={10}
        />
      </Canvas>

      {/* Controls Overlay - Left */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setWireframe(!wireframe)}
          className={`p-2 rounded-lg transition-all ${wireframe ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:text-white'}`}
          title="Toggle Wireframe"
        >
          <Box size={18} />
        </button>
        <button 
          onClick={() => setDoorsOpen(!doorsOpen)}
          className={`p-2 rounded-lg transition-all ${doorsOpen ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:text-white'}`}
          title="Toggle Doors"
        >
          <DoorOpen size={18} />
        </button>
        <div className="relative">
          <button 
            onClick={() => setShowColors(!showColors)}
            className={`p-2 rounded-lg transition-all ${showColors ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:text-white'}`}
            title="Change Paint Color"
          >
            <Palette size={18} />
          </button>
          
          {/* Color Picker Popup */}
          {showColors && (
            <div className="absolute left-full top-0 ml-2 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10 flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCarColor(c.value)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${carColor === c.value ? 'border-emerald-500' : 'border-transparent'}`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          )}
        </div>
        <button 
          onClick={resetCamera}
          className="p-2 rounded-lg bg-black/50 text-white/60 hover:text-white transition-all"
          title="Reset Camera"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Controls Overlay - Right */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setCameraView('top')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${view === 'top' ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:bg-black/70'}`}
        >
          Top
        </button>
        <button 
          onClick={() => setCameraView('side')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${view === 'side' ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:bg-black/70'}`}
        >
          Side
        </button>
        <button 
          onClick={() => setCameraView('interior')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 ${view === 'interior' ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:bg-black/70'}`}
        >
          <Eye size={12} /> Interior
        </button>
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-white/30 font-mono pointer-events-none">
        Interactive 3D View
      </div>
    </div>
  );
}
