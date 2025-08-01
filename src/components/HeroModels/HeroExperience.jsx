import { OrbitControls,Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Room } from './room';
import React from 'react';
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
    <Canvas camera={{ position: [0, 40, 80], fov: 20 }}>
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight position={[10,20,10]} intensity={1.2} />
        <hemisphereLight intensity={0.3} groundColor="#222" />
        <OrbitControls
         enablePan={false}
         enableZoom={!isTablet}
         maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI /5}
            maxPolarAngle={Math.PI / 2}

        />
        <Sparkles
                count={300}
                scale={[20, 20, 20]}
                size={7}
                speed={0.3}
                color="violet"
            />
            <Room />

    </Canvas>
    )
}
export default HeroExperience;