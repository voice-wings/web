import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedShapes() {
  const sphereRef1 = useRef();
  const sphereRef2 = useRef();
  const sphereRef3 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sphereRef1.current) sphereRef1.current.rotation.x = time * 0.2;
    if (sphereRef2.current) sphereRef2.current.rotation.y = time * 0.3;
    if (sphereRef3.current) sphereRef3.current.rotation.z = time * 0.1;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-4, 2, -5]}>
        <Sphere ref={sphereRef1} args={[2.5, 64, 64]}>
          <MeshDistortMaterial color="#40247C" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[6, -1, -8]}>
        <Sphere ref={sphereRef2} args={[3.5, 64, 64]}>
          <MeshDistortMaterial color="#F281B3" attach="material" distort={0.4} speed={1.5} roughness={0.1} metalness={0.9} />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1} position={[-2, -6, -10]}>
        <Sphere ref={sphereRef3} args={[4, 64, 64]}>
          <MeshDistortMaterial color="#5DC1CD" attach="material" distort={0.3} speed={1} roughness={0.3} metalness={0.5} />
        </Sphere>
      </Float>
    </>
  );
}

export default function WebGLBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#F281B3" />
        <directionalLight position={[0, -10, 0]} intensity={0.8} color="#5DC1CD" />
        <Environment preset="city" />
        <AnimatedShapes />
      </Canvas>
    </div>
  );
}
