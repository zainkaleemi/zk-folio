import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { Teams } from '@/components/sections/teams'
import { Research } from '@/components/sections/research'
import { Internship } from '@/components/sections/internship'
import { Toolkit } from '@/components/sections/toolkit'
import { Mentions } from '@/components/sections/mentions'
import { Contact } from '@/components/sections/contact'

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
