import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Recognition } from '@/components/recognition'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Recognition />
      <Contact />
    </main>
  )
}
