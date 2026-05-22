import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Phoenix Lab | AI Automation & Web Development',
  description: 'We build intelligent digital experiences, AI automation systems, and futuristic websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">
        <LenisProvider>
          <CustomCursor />
          <div className="noise-overlay" />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
