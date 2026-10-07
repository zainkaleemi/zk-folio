import { MORE_EXPERIENCE } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CompactEntry } from '@/components/work-entry'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          eyebrow="More experience"
          title={
            <>
              On track and <span className="serif-accent text-gradient">in the lab.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {MORE_EXPERIENCE.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 120} className="flex">
              <CompactEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
