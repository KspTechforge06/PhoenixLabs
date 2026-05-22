'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' }
]

export function Footer() {
  return (
    <footer className="relative py-16 px-4 md:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-clash text-3xl font-bold gradient-text"
          >
            PHOENIX LAB
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-satoshi text-sm text-[#8b8b95] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#8b8b95] hover:text-[#b026ff] hover:border-[#b026ff]/50 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#b026ff]/30 to-transparent mb-8" />

        <div className="text-center font-satoshi text-xs text-[#8b8b95]">
          <p>© 2024 Phoenix Lab. All rights reserved. Built with neural precision.</p>
        </div>
      </div>
    </footer>
  )
}
