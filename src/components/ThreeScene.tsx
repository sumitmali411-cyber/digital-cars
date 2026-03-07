import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, ContactShadows, useProgress, Html } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';
import { AlertCircle, Box, RotateCcw } from 'lucide-react';
import * as THREE from 'three';

function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = React.useState(0);

  React.useEffect(() => {
    // Defer the state update to avoid "update during render" warning
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

function Model({ url, wireframe }: { url: string; wireframe: boolean }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      // Subtle floating animation
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).wireframe = wireframe;
        }
      }
    });
  }, [scene, wireframe]);

  return <primitive ref={modelRef} object={scene} />;
}

export default function ThreeScene({ modelUrl }: { modelUrl: string }) {
  const [error, setError] = useState<Error | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [view, setView] = useState<'default' | 'top' | 'side'>('default');
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      setView('default');
    }
  };

  const setCameraView = (newView: 'default' | 'top' | 'side') => {
    setView(newView);
    // In a real app, we'd animate the camera position smoothly
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
        shadows 
        camera={{ fov: 45 }}
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
              <Model url={modelUrl} wireframe={wireframe} />
            </Stage>
            <ContactShadows opacity={0.4} scale={10} blur={2} far={10} resolution={256} color="#000000" />
          </Suspense>
        </ErrorBoundary>

        <OrbitControls 
          ref={controlsRef}
          makeDefault 
          autoRotate={!wireframe} 
          autoRotateSpeed={0.5} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2} 
        />
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setWireframe(!wireframe)}
          className={`p-2 rounded-lg transition-all ${wireframe ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60 hover:text-white'}`}
          title="Toggle Wireframe"
        >
          <Box size={18} />
        </button>
        <button 
          onClick={resetCamera}
          className="p-2 rounded-lg bg-black/50 text-white/60 hover:text-white transition-all"
          title="Reset Camera"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setCameraView('top')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${view === 'top' ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60'}`}
        >
          Top
        </button>
        <button 
          onClick={() => setCameraView('side')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${view === 'side' ? 'bg-emerald-500 text-white' : 'bg-black/50 text-white/60'}`}
        >
          Side
        </button>
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-white/30 font-mono">
        Interactive 3D View
      </div>
    </div>
  );
}
