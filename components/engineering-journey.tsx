import { Reveal } from '@/components/reveal'
import { SectionMarker } from '@/components/section-marker'

function Tag({ children }: { children: string }) {
  return (
    <span className="mono-label border border-hairline px-3 py-1.5 text-[0.62rem] text-steel">
      {children}
    </span>
  )
}

function MediaCaption({
  primary,
  secondary,
  accent,
}: {
  primary: string
  secondary?: string
  accent?: boolean
}) {
  return (
    <figcaption className="mt-3">
      <span className={`mono-label text-[0.62rem] ${accent ? 'text-accent' : 'text-muted-foreground'}`}>
        {primary}
      </span>
      {secondary && (
        <span className="mono-label mt-1 block text-[0.6rem] text-muted-foreground/70">
          {secondary}
        </span>
      )}
    </figcaption>
  )
}

export function EngineeringJourney() {
  return (
    <section id="teams" className="border-b border-border py-16 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="02" label="Engineering Journey" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display max-w-2xl text-balance text-[clamp(2.2rem,11vw,4.75rem)] leading-[0.98] sm:leading-[0.92]">
              <span className="text-foreground">Built with teams where</span>{' '}
              <span className="text-steel">constraints are real.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="lg:pt-3">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Competition engineering develops a clear respect for trade-offs,
              fabrication, integration, and the quiet precision required to make a
              system perform.
            </p>
          </Reveal>
        </div>

        {/* Entry 01 — Team Robocon MJCET */}
        <article className="mt-14 border-t border-hairline pt-10 sm:mt-20 sm:pt-12">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <span className="mono-label text-accent">01</span>
                  <span className="mono-label text-steel">ABU Robocon</span>
                </div>
                <h3 className="display mt-6 text-balance text-3xl leading-[1] text-foreground min-[380px]:text-4xl sm:text-5xl sm:leading-[0.92]">
                  Team Robocon MJCET
                </h3>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Mechanical robotics experience grounded in the realities of
                  competition: developing mechanisms, robotic structures, actuation,
                  fabrication, testing, and integration under tight constraints.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>Mechanism development</Tag>
                  <Tag>CAD</Tag>
                  <Tag>Fabrication</Tag>
                  <Tag>Actuation</Tag>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    muted
                    loop
                    preload="metadata"
                  >
                    <source src="/assets/r1-demonstration.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <span className="mono-label pointer-events-none absolute left-3 top-3 rounded-sm bg-background/70 px-2 py-1 text-[0.55rem] text-foreground">
                    CAM 1
                  </span>
                </div>
                <MediaCaption primary="R1 Prototype Testing" secondary="Open Demonstration" accent />
              </figure>
              <figure>
                <div className="aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <img
                    src="/assets/cad-01.jpeg"
                    alt="CAD assembly render of the R1 robot with dual vertical lift columns and a manipulator over the competition field"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <MediaCaption primary="R1 / CAD Assembly View" />
              </figure>
              <figure>
                <div className="aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <img
                    src="/assets/cad-02.jpeg"
                    alt="CAD assembly render of the R2 robot showing the drive base, roller wheels and structural framing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <MediaCaption primary="R2 / CAD Assembly View" />
              </figure>
            </div>
          </Reveal>
        </article>

        {/* Entry 02 — Team MudBrothers */}
        <article className="mt-16 border-t border-hairline pt-12">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <span className="mono-label text-accent">02</span>
                  <span className="mono-label text-steel">SAE Baja · MJCET</span>
                </div>
                <h3 className="display mt-6 text-balance text-3xl leading-[1] text-foreground min-[380px]:text-4xl sm:text-5xl sm:leading-[0.92]">
                  Team MudBrothers
                </h3>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Hands-on competition vehicle engineering through mechanical design,
                  automotive systems, fabrication, assembly, testing, and trade-offs
                  shaped by real-world constraints.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>Vehicle systems</Tag>
                  <Tag>Mechanical design</Tag>
                  <Tag>Fabrication</Tag>
                  <Tag>Testing</Tag>
                </div>
              </div>
            </div>
          </Reveal>
        </article>

        {/* Entry 03 — Team Asphalt MJCET */}
        <article className="mt-16 border-t border-hairline pt-12">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <span className="mono-label text-accent">03</span>
                  <span className="mono-label text-steel">Indian Karting Race 2025</span>
                </div>
                <h3 className="display mt-6 text-balance text-3xl leading-[1] text-foreground min-[380px]:text-4xl sm:text-5xl sm:leading-[0.92]">
                  Team Asphalt MJCET
                </h3>
                <span className="mono-label mt-6 inline-block bg-accent px-4 py-2 text-accent-foreground">
                  AIR 10
                </span>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Practical automotive engineering in a performance-focused team
                  environment. The team achieved All India Rank 10 at Indian Karting
                  Race 2025.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>Automotive engineering</Tag>
                  <Tag>Competition</Tag>
                  <Tag>Performance</Tag>
                  <Tag>Teamwork</Tag>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
              <figure>
                <div className="aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <img
                    src="/assets/kart-01.jpeg"
                    alt="Side profile of the number 12 electric go-kart parked outdoors on wet pavement"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <MediaCaption primary="Team Asphalt / Kart Overview" />
              </figure>
              <figure>
                <div className="aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <img
                    src="/assets/award-ceremony.jpeg"
                    alt="Student receiving a certificate and memento from faculty at the SAE MJCET Summit 2025 award ceremony"
                    className="h-full w-full object-cover object-[center_20%]"
                    loading="lazy"
                  />
                </div>
                <MediaCaption primary="SAE MJCET Summit 2025 / Award Recognition" />
              </figure>
              <figure>
                <div className="aspect-[4/3] overflow-hidden border border-hairline bg-surface">
                  <img
                    src="/assets/team.jpeg"
                    alt="Team Asphalt crew and mentors posed around the flame-liveried go-kart outdoors"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <MediaCaption primary="Team Asphalt / Crew" />
              </figure>
            </div>
          </Reveal>
        </article>
      </div>
    </section>
  )
}
