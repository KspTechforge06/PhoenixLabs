'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative min-h-screen py-32 px-4 md:px-8 lg:px-16 glowing-grid" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            WE DON'T JUST<br />
            BUILD <span className="gradient-text">WEBSITES.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b026ff] to-[#ff2fd1]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff] rounded-full blur-[80px] opacity-20" />
            <h3 className="font-clash text-2xl font-bold mb-4">About Phoenix Lab</h3>
            <p className="font-satoshi text-[#8b8b95] leading-relaxed mb-6">
              We are a futuristic digital laboratory where AI, automation, and creativity merge. 
              Our team of engineers and designers craft intelligent systems that transform how 
              businesses operate in the digital realm.
            </p>
            <p className="font-satoshi text-[#8b8b95] leading-relaxed">
              From neural network-powered chatbots to immersive WebGL experiences, we push 
              the boundaries of what's possible on the web.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              {[
                { value: '150+', label: 'Projects' },
                { value: '50+', label: 'AI Systems' },
                { value: '99%', label: 'Uptime' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-clash text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="font-satoshi text-xs text-[#8b8b95] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 hidden lg:block pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#b026ff]/20 to-[#ff2fd1]/20 animate-[spin_20s_linear_infinite] backdrop-blur-xl border border-white/10" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#7b61ff]/10 to-transparent border border-white/5" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#b026ff]/10 to-[#ff2fd1]/10 blur-[100px] pointer-events-none" />
    </section>
  )
}
