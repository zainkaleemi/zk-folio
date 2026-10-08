import { BatteryCharging } from 'lucide-react'
import { INTERNSHIP } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Internship() {
  const e = INTERNSHIP
  return (
    <section id={e.id} className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Internship"
          title={e.title}
          intro="Two months on the electric side of automotive engineering."
        />
        <Reveal className="edge-glow glass mt-12 grid gap-8 rounded-[1.75rem] p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent/15 text-accent">
            <BatteryCharging className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <div>
            <p className="serif-accent text-2xl text-[var(--accent-2)] sm:text-3xl">{e.role}</p>
            <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{e.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline px-3.5 py-1.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-6 lg:flex-col lg:gap-3 lg:text-right">
            <p className="mono-label text-[0.6rem] text-muted-foreground">{e.period}</p>
            <p className="mono-label text-[0.6rem] text-muted-foreground">{e.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
