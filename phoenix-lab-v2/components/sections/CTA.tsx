'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from '../ui/MagneticButton'

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! We will contact you soon.')
  }

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#b026ff] blur-[200px] opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            LET'S BUILD SOMETHING<br />
            <span className="gradient-text">IMPOSSIBLE.</span>
          </h2>
          <p className="font-satoshi text-lg text-[#8b8b95] max-w-2xl mx-auto">
            Transform your business with AI-powered digital systems.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-3xl p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-satoshi text-sm text-[#8b8b95]">Name</label>
              <input
                type="text"
                required
                className="w-full glass-input rounded-xl px-4 py-3 text-white font-satoshi"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="font-satoshi text-sm text-[#8b8b95]">Email</label>
              <input
                type="email"
                required
                className="w-full glass-input rounded-xl px-4 py-3 text-white font-satoshi"
                placeholder="john@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-satoshi text-sm text-[#8b8b95]">Project Details</label>
            <textarea
              required
              rows={4}
              className="w-full glass-input rounded-xl px-4 py-3 text-white font-satoshi resize-none"
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <div className="pt-4">
            <MagneticButton className="w-full bg-gradient-to-r from-[#b026ff] to-[#ff2fd1] text-white font-bold py-4">
              Initiate Project
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
