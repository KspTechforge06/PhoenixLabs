'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { MorphBlob } from './MorphBlob'
import { Particles } from './Particles'
import { useEffect, useState } from 'react'

function PerformanceCanvas() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleVisibility = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        frameloop={visible ? 'always' : 'never'}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#b026ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff2fd1" />
        <MorphBlob />
        <Particles count={80} />
        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export function Scene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#07070a] via-[#120014] to-[#050505]" />
    )
  }

  return <PerformanceCanvas />
}
