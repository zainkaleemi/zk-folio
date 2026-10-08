import { ArrowDownRight } from 'lucide-react'
import { TEAMS } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { WorkEntry } from '@/components/work-entry'

/** The two flagship teams, side by side and then as equal-weight chapters. */
export function Teams() {
  return (
    <section id="teams" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="01"
          eyebrow="Competition teams"
          title={
            <>
              Built to <span className="serif-accent text-gradient">compete.</span>
            </>
          }
          intro="ABU Robocon, the Asia-Pacific robotics contest, and SAE BAJA, where student teams design, build and race an off-road vehicle. Two very different machines, the same unforgiving deadline."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
          {TEAMS.map((team, i) => (
            <Reveal key={team.id} delay={i * 120}>
              <a
                href={`#${team.id}`}
                className="edge-glow group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-hairline bg-surface p-6 sm:aspect-[16/11] sm:p-8"
              >
                <img
                  src={team.cover}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/10"
                />
                <p className="display flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent-2)]">
                  <span aria-hidden className="h-px w-8 bg-[var(--accent-2)]/60" />
                  {team.discipline}
                </p>
                <h3 className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">{team.title}</h3>
                <p className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="serif-accent text-xl text-foreground/85 sm:text-2xl">
                    {team.role} · {team.kicker}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-accent">
                    <ArrowDownRight className="h-5 w-5" />
                  </span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 space-y-28 sm:mt-36 sm:space-y-36">
          {TEAMS.map((team, i) => (
            <div key={team.id} className={i > 0 ? 'border-t border-hairline pt-28 sm:pt-36' : ''}>
              <WorkEntry entry={team} label={`Fig. 0${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
