import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Teams } from '@/components/teams'
import { Research } from '@/components/research'
import { Internship } from '@/components/internship'
import { Toolkit } from '@/components/toolkit'
import { Mentions } from '@/components/mentions'
import { Contact } from '@/components/contact'

// Order follows priority: flagship teams, then R&D, then the internship, then the rest.
export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Teams />
      <Research />
      <Internship />
      <Toolkit />
      <Mentions />
      <Contact />
    </main>
  )
}
