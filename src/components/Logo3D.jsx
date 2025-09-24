import { Suspense } from 'react'; // Import Suspense from React
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

const Logo3D = () => {
  return (
    <div className="w-16 h-16 cursor-pointer">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        {/* Wrap your scene in a Suspense component */}
        <Suspense fallback={null}> 
          <ambientLight intensity={1.5} />
          <pointLight position={[0, 0, 5]} intensity={3} />
          
          <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2}>
            <Text
              font="/Poppins-Bold.ttf" // This path must be correct
              fontSize={1.5}
              color="#800020"
              anchorX="center"
              anchorY="middle"
            >
              M
              <meshPhysicalMaterial
                attach="material"
                metalness={0.7}
                roughness={0.2}
                clearcoat={1}
                clearcoatRoughness={0.3}
              />
            </Text>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Logo3D;