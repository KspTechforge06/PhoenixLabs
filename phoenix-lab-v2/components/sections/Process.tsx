'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery', description: 'Deep dive into your business, goals, and technical requirements.' },
  { number: '02', title: 'Strategy', description: 'AI-readiness assessment and digital transformation roadmap.' },
  { number: '03', title: 'Design', description: 'Cinematic UI/UX with immersive interactions and glassmorphism.' },
  { number: '04', title: 'Development', description: 'Next.js, Three.js, and neural network integration.' },
  { number: '05', title: 'Automation', description: 'Connect APIs, train models, deploy intelligent workflows.' },
  { number: '06', title: 'Launch', description: 'Performance optimization, monitoring, and continuous improvement.' }
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="relative py-32 px-4 md:px-8 lg:px-16 glowing-grid" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-clash text-4xl md:text-6xl font-bold mb-4">
            OUR <span className="gradient-text">PROCESS</span>
          </h2>
          <p className="font-satoshi text-[#8b8b95] max-w-xl mx-auto">
            From concept to launch in six phases
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b026ff] to-transparent">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-[#b026ff]"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-clash text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="font-satoshi text-[#8b8b95]">{step.description}</p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center relative group">
                    <span className="font-clash text-xl font-bold gradient-text">{step.number}</span>
                    <div className="absolute inset-0 rounded-full bg-[#b026ff] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
