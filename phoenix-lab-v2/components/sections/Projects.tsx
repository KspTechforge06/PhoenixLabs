'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const projects = [
  {
    title: 'AI CRM Dashboard',
    category: 'Dashboard',
    image: 'bg-gradient-to-br from-[#1a0222] to-[#0a0a0f]',
    description: 'Neural-powered customer relationship management with predictive analytics.'
  },
  {
    title: 'Automation Control Panel',
    category: 'Web App',
    image: 'bg-gradient-to-br from-[#120014] to-[#07070a]',
    description: 'Centralized command center for business process automation.'
  },
  {
    title: 'Luxury Brand Website',
    category: 'Website',
    image: 'bg-gradient-to-br from-[#0a0a0f] to-[#1a0222]',
    description: 'Immersive e-commerce experience with WebGL product visualization.'
  },
  {
    title: 'Smart WhatsApp Assistant',
    category: 'AI Bot',
    image: 'bg-gradient-to-br from-[#07070a] to-[#120014]',
    description: 'Intelligent conversational agent handling 10k+ daily interactions.'
  }
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="relative py-32 px-4 md:px-8 lg:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-clash text-4xl md:text-6xl font-bold mb-4">
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="font-satoshi text-[#8b8b95] max-w-xl mx-auto">
            Digital experiences that push boundaries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={index === 0 || index === 3 ? 'md:col-span-2' : ''}
            >
              <GlassCard className="group relative overflow-hidden p-0 h-[400px] md:h-[500px]" hoverEffect={false}>
                <div className={`absolute inset-0 ${project.image} opacity-50 group-hover:scale-105 transition-transform duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-satoshi text-xs uppercase tracking-widest text-[#b026ff] mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-clash text-2xl md:text-3xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="font-satoshi text-[#8b8b95] max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#b026ff]/20 to-transparent" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
