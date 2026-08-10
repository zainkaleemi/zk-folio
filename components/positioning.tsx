import { Reveal } from '@/components/reveal'
import { SectionMarker } from '@/components/section-marker'

export function Positioning() {
  return (
    <section className="border-b border-border py-16 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="00" label="Positioning" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display max-w-2xl text-balance text-[clamp(2.2rem,11vw,4.75rem)] leading-[0.98] sm:leading-[0.92]">
              <span className="text-foreground">Designing.</span>
              <br />
              <span className="text-steel">Building.</span>
              <br />
              <span className="text-foreground">Testing. real-world systems.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="lg:pt-3">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Mechanical design, robotics and vehicle development. Working across
                R&amp;D, competitive robotics and off-road vehicle design, with a
                focus on CAD, FEA, prototyping and mechanical systems.
              </p>
              <p>
                Currently contributing to S.A.F.L., Team Robocon MJCET and Team
                MudBrothers.{' '}
                <span className="font-medium text-foreground">
                  Design. Build. Test. <span className="text-accent">Iterate.</span>
                </span>
              </p>
            </div>

            <div className="mt-10 space-y-8 border-l border-hairline pl-6">
              <div>
                <p className="mono-label text-accent">Base</p>
                <p className="mt-2 font-medium text-foreground">
                  Hyderabad, Telangana, India
                </p>
              </div>
              <div>
                <p className="mono-label text-accent">Education</p>
                <p className="mt-2 font-medium leading-relaxed text-foreground">
                  B.E. Mechanical Engineering
                  <br />
                  Muffakham Jah College of Engineering and Technology
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
