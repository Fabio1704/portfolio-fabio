import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'

function AnimatedMesh({ position, color, speed, factor }){
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01 * speed
    ref.current.rotation.y += 0.02 * speed
    ref.current.rotation.z += 0.005 * speed
    ref.current.position.y = Math.sin(state.clock.elapsedTime * speed) * factor
  })
  return (
    <mesh ref={ref} position={position} scale={[1.6,1.6,1.6]}>
      <icosahedronBufferGeometry args={[1, 2]} />
      <MeshWobbleMaterial color={color} factor={0.8} speed={1.5} attach="material" />
    </mesh>
  )
}

export default function ThreeBackground(){
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60">
      <Canvas gl={{ antialias: true }} camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <AnimatedMesh position={[-2, -0.5, 0]} color="#14b8a6" speed={0.8} factor={0.5} />
        <AnimatedMesh position={[2, 0.5, -1]} color="#06b6d4" speed={1.2} factor={0.7} />
        <AnimatedMesh position={[0, -1, -2]} color="#0ea5e9" speed={1.5} factor={0.3} />
      </Canvas>
    </div>
  )
}
