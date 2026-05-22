import { Scene } from '@/components/three/Scene'
import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { HorizontalScroll } from '@/components/sections/HorizontalScroll'
import { Projects } from '@/components/sections/Projects'
import { Process } from '@/components/sections/Process'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Scene />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <HorizontalScroll />
        <Projects />
        <Process />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
