import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random'; // Helper for generating random points

function ParticleCloud(props) {
  const ref = useRef();
  // Generate random points for the particle cloud
  // 5000 particles spread in a sphere with radius 1.5
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  // This hook runs on every frame
  useFrame((state, delta) => {
    // Rotate the particle cloud
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#800020" // Burgundy color from your theme
          size={0.005} // Size of individual particles
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0"> {/* Position behind other content */}
      <Canvas camera={{ position: [0, 0, 1] }}> {/* Camera setup for particles */}
        <ParticleCloud />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;