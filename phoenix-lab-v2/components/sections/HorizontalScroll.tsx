'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  'NEURAL NETWORKS',
  'IMMERSIVE WEBGL',
  'AI AUTOMATION',
  'DIGITAL TRANSFORMATION'
]

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const trigger = triggerRef.current
    if (!section || !trigger) return

    if (window.innerWidth < 768) return

    const scrollWidth = trigger.scrollWidth - window.innerWidth

    const tween = gsap.to(trigger, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#050505] hidden md:block">
      <div ref={triggerRef} className="flex h-full items-center gap-16 px-8 w-max">
        <div className="flex-shrink-0 w-screen flex items-center justify-center">
          <h2 className="font-clash text-5xl md:text-8xl font-bold text-center leading-tight">
            EXPLORE THE<br />
            <span className="gradient-text">POSSIBILITIES</span>
          </h2>
        </div>

        {items.map((item) => (
          <div 
            key={item} 
            className="flex-shrink-0 w-[50vw] h-[60vh] glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/10 to-[#ff2fd1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-clash text-4xl md:text-6xl font-bold text-glow relative z-10 text-center px-8">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
