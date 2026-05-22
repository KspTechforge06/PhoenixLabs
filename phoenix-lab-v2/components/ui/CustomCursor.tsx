'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const outerXSpring = useSpring(cursorX, { damping: 35, stiffness: 80 })
  const outerYSpring = useSpring(cursorY, { damping: 35, stiffness: 80 })

  useEffect(() => {
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(touchCheck)
    if (touchCheck) return

    let ticking = false
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          cursorX.set(e.clientX)
          cursorY.set(e.clientY)
          ticking = false
        })
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring, willChange: 'transform' }}
      >
        <motion.div 
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{ width: isHovering ? 40 : 10, height: isHovering ? 40 : 10 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: outerXSpring, y: outerYSpring, willChange: 'transform' }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/30" />
      </motion.div>
    </>
  )
}
