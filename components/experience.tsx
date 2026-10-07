import { EXPERIENCE } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { WorkEntry } from '@/components/work-entry'

export function Experience() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title={
            <>
              Built with teams where <span className="serif-accent text-gradient">constraints</span> are real.
            </>
          }
          intro="Competition robots, an off-road vehicle and a kart, each designed in CAD, then cut, welded, printed and tested. Spin the models; they are the real assemblies."
        />
        <div className="mt-20 space-y-24 sm:space-y-32">
          {EXPERIENCE.map((entry, i) => (
            <WorkEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
