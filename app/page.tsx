import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProjectOverview } from '@/components/project-overview'
import { KartProject } from '@/components/kart-project'
import { CadShowcase } from '@/components/cad-showcase'
import { RoboticsProject } from '@/components/robotics-project'
import { TeamSection } from '@/components/team-section'
import { FinalCTA } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectOverview />
      <KartProject />
      <CadShowcase />
      <RoboticsProject />
      <TeamSection />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
