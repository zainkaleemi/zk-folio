import { RESEARCH } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { WorkEntry } from '@/components/work-entry'

export function Research() {
  return (
    <section id="research" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="blueprint fade-mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          eyebrow="Research & development"
          intro="S.A.F.L., an institution-funded R&D program, and a wearable exoskeleton supported under the YUKTI Innovation Challenge."
          title={
            <>
              Research that leaves <span className="serif-accent text-gradient">the lab.</span>
            </>
          }
        />
        <div className="mt-16 space-y-28 sm:space-y-36">
          {RESEARCH.map((entry, i) => (
            <div key={entry.id} className={i > 0 ? 'border-t border-hairline pt-28 sm:pt-36' : ''}>
              <WorkEntry entry={entry} label={`Fig. 0${i + 3}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
