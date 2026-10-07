import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Teams } from '@/components/teams'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Recognition } from '@/components/recognition'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Teams />
      <Experience />
      <Projects />
      <About />
      <Recognition />
      <Contact />
    </main>
  )
}
