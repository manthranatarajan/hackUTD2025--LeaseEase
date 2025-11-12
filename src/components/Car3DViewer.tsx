import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { X, RotateCcw, Maximize2 } from 'lucide-react';
import { Car } from '../lib/supabase';

interface Car3DViewerProps {
  car: Car;
  onClose: () => void;
}

function CarModel({ modelPath }: { modelPath: string }) {
  const meshRef = useRef<THREE.Group>(null);

  try {
    const gltf = useLoader(GLTFLoader, modelPath);

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;
      }
    });

    return (
      <primitive
        ref={meshRef}
        object={gltf.scene}
        scale={1.5}
        position={[0, -1, 0]}
      />
    );
  } catch (error) {
    return <FallbackCar />;
  }
}

function FallbackCar() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 1.5, 2]} />
        <meshStandardMaterial color="#cc0000" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[3.5, 0.3, 1.8]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-1.5, -0.8, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[1.5, -0.8, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[-1.5, -0.8, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[1.5, -0.8, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[1.8, 0.3, 0]}>
        <boxGeometry args={[0.1, 0.8, 1.6]} />
        <meshStandardMaterial color="#88ccff" transparent opacity={0.3} metalness={0.1} roughness={0.1} />
      </mesh>
      <mesh position={[-1.8, 0.3, 0]}>
        <boxGeometry args={[0.1, 0.8, 1.6]} />
        <meshStandardMaterial color="#88ccff" transparent opacity={0.3} metalness={0.1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Car3DViewer({ car, onClose }: Car3DViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  const controlsRef = useRef<any>(null);

  const getModelPath = (carModel: string) => {
    const modelName = carModel.toLowerCase().replace(/\s+/g, '-');
    return `/models/${modelName}.glb`;
  };

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full flex flex-col">
        <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {car.year} {car.make} {car.model}
            </h2>
            <p className="text-sm text-gray-400">{car.trim}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                autoRotate ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              Auto-Rotate
            </button>
            <button
              onClick={resetCamera}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <Maximize2 className="w-4 h-4" />
              Reset View
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
            <OrbitControls
              ref={controlsRef}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={autoRotate}
              autoRotateSpeed={2}
              minDistance={3}
              maxDistance={15}
            />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-10, 10, -5]} intensity={0.5} />
            <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.5} />

            <Suspense fallback={<FallbackCar />}>
              <CarModel modelPath={getModelPath(car.model)} />
            </Suspense>

            <Environment preset="sunset" />

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Canvas>

          <div className="absolute bottom-6 left-6 bg-gray-900 bg-opacity-90 text-white p-4 rounded-lg max-w-sm">
            <h3 className="font-semibold mb-2">Controls</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>🖱️ Left Click + Drag: Rotate view</li>
              <li>🖱️ Right Click + Drag: Pan view</li>
              <li>🖱️ Scroll: Zoom in/out</li>
              <li>📱 Touch: Pinch to zoom, drag to rotate</li>
            </ul>
          </div>

          <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg">
            <div className="text-2xl font-bold">${car.monthly_payment}/mo</div>
            <div className="text-sm">MSRP: ${car.msrp.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
