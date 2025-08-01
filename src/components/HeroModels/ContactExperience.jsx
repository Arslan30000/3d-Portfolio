import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sparkles } from '@react-three/drei';
import {Model} from './Optimized-room'; // assuming this is your GLTF component

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 15, 10], fov: 15 }}
      style={{ background: 'linear-gradient(to bottom, #1a1a1a, #3a3a3a)' }} // background color
    >
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.4} />

      {/* Main directional light */}
      <directionalLight
        castShadow
        position={[10, 20, 10]}
        intensity={1.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light for softer shadows */}
      <spotLight
        position={[-10, 15, -5]}
        angle={0.3}
        intensity={0.6}
        penumbra={1}
        castShadow
      />

      {/* Optional Hemisphere light for realism */}
      <hemisphereLight intensity={0.3} groundColor="#222" />

      {/* Controls */}
     <OrbitControls
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}     
  minPolarAngle={Math.PI / 4}     
  ></OrbitControls>
  <Sparkles
                  count={300}
                  scale={[20, 20, 20]}
                  size={7}
                  speed={0.3}
                  color="violet"
              />
<Model position={[0, -1.5, 0]} />
    </Canvas>
  );
};

export default ContactExperience;
