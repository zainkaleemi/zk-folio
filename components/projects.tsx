import { PROJECTS } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CompactEntry, WorkEntry } from '@/components/work-entry'

export function Projects() {
  // Projects with a CAD model get a full chapter; the rest sit as compact cards.
  const full = PROJECTS.filter((p) => p.cad?.length)
  const compact = PROJECTS.filter((p) => !p.cad?.length)

  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="blueprint fade-mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Research & projects"
          title={
            <>
              Robots for the <span className="serif-accent text-gradient">field</span>, and for people.
            </>
          }
          intro="R&D outside competition season: an agricultural quadruped validated by FEA and field trials, and a cable-driven wearable assist."
        />
        <div className="mt-16 space-y-28 sm:space-y-36">
          {full.map((entry, i) => (
            <WorkEntry key={entry.id} entry={entry} label={`Fig. 0${i + 3}`} />
          ))}
        </div>
        {compact.length > 0 && (
          <div className="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6">
            {compact.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 120} className="flex">
                <CompactEntry entry={entry} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
