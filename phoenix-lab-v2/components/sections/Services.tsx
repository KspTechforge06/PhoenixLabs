'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { Globe, MessageCircle, Bot, Zap, Palette, LayoutDashboard } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Futuristic, high-performance websites with immersive 3D experiences and smooth interactions.'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description: 'Intelligent messaging systems that automate customer engagement and support workflows.'
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Neural network-powered conversational agents trained on your business knowledge base.'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'End-to-end workflow automation connecting your tools with intelligent decision-making.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Cinematic interface design with glassmorphism, liquid motion, and premium aesthetics.'
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    description: 'Real-time data visualization platforms with interactive charts and AI insights.'
  }
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="services" className="relative py-32 px-4 md:px-8 lg:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-clash text-4xl md:text-6xl font-bold mb-4">
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="font-satoshi text-[#8b8b95] max-w-xl mx-auto">
            Cutting-edge solutions for the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full group cursor-pointer" hoverEffect>
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b026ff]/20 to-[#ff2fd1]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-[#b026ff]" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-xl bg-[#b026ff] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                <h3 className="font-clash text-xl font-bold mb-3 group-hover:text-[#b026ff] transition-colors">
                  {service.title}
                </h3>
                <p className="font-satoshi text-sm text-[#8b8b95] leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-[#b026ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
