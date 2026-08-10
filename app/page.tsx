import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Positioning } from '@/components/positioning'
import { EngineeringFocus } from '@/components/engineering-focus'
import { EngineeringJourney } from '@/components/engineering-journey'
import { SelectedProject } from '@/components/selected-project'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Positioning />
      <EngineeringFocus />
      <EngineeringJourney />
      <SelectedProject />
      <Contact />
    </main>
  )
}
