import { PROJECTS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { WorkEntry } from '@/components/work-entry'

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="blueprint fade-mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Research & Projects"
          title={
            <>
              Robots for the <span className="serif-accent text-gradient">field</span>, and for people.
            </>
          }
          intro="R&D work outside competition season: an agricultural quadruped validated by FEA and field trials, and a cable-driven wearable assist."
        />
        <div className="mt-20 space-y-24 sm:space-y-32">
          {PROJECTS.map((entry, i) => (
            <WorkEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
