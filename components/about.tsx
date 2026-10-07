import { GraduationCap } from 'lucide-react'
import { SKILLS } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const NUMBERS = [
  { value: 'CSWP', label: 'Certified SolidWorks Professional' },
  { value: '2.04', label: 'Min. safety factor, S.A.F.L. chassis' },
  { value: 'AIR 10', label: 'IKR Go-Kart, Team Asphalt' },
  { value: '1st', label: 'AgriTech, MAKEFORHYDERABAD' },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="Profile"
          title={
            <>
              Design. Build. Test. <span className="serif-accent text-gradient">Iterate.</span>
            </>
          }
          intro="I'm a mechanical engineering student at MJCET who likes machines more when they leave the screen. I care about robotics and automotive engineering equally, so my time is split between Robocon robots, an SAE BAJA off-road vehicle and field robots. A design only counts once it survives fabrication and testing."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 80}
              className="group bg-background p-7 transition-colors hover:bg-surface sm:p-9"
            >
              <p className="display text-5xl text-foreground transition-colors group-hover:text-accent sm:text-6xl">
                {n.value}
              </p>
              <p className="mono-label mt-4 text-[0.6rem] leading-relaxed text-muted-foreground">{n.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="edge-glow glass rounded-[1.5rem] p-7 sm:p-9">
            <GraduationCap className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <p className="mono-label mt-6 text-[0.6rem] text-muted-foreground">Education · Expected May 2028</p>
            <h3 className="display mt-3 text-3xl text-foreground">B.E. Mechanical Engineering</h3>
            <p className="mt-2 text-muted-foreground">
              Muffakham Jah College of Engineering &amp; Technology · Osmania University
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Coursework in scientific computing (Python, C, MATLAB), system modelling, mechanical system analysis,
              thermodynamics, materials science, embedded systems (AVR/8051), statistics and CAD.
            </p>
          </Reveal>

          <Reveal delay={120} className="edge-glow glass rounded-[1.5rem] p-7 sm:p-9">
            <p className="mono-label text-[0.6rem] text-muted-foreground">Toolkit</p>
            <div className="mt-6 space-y-7">
              {SKILLS.map((g) => (
                <div key={g.group}>
                  <p className="font-display text-lg text-foreground">{g.group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-hairline bg-foreground/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
