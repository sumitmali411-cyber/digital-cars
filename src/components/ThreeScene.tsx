import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, ContactShadows, useProgress, Html } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          Loading Artifact {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ThreeScene({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="w-full h-full bg-neutral-900 rounded-2xl overflow-hidden relative">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={['#171717']} />
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.5}>
            <Model url={modelUrl} />
          </Stage>
          <ContactShadows opacity={0.4} scale={10} blur={2} far={10} resolution={256} color="#000000" />
        </Suspense>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-white/30 font-mono">
        Interactive 3D View
      </div>
    </div>
  );
}
