'use client'

import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden ${className}`}
      whileHover={hoverEffect ? { 
        y: -4, 
        boxShadow: '0 0 30px rgba(176,38,255,0.2)',
        borderColor: 'rgba(176,38,255,0.4)'
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}
