import { EXTERNAL_LINK_PROPS, LINKEDIN_URL } from '@/lib/links'
import { Reveal } from '@/components/reveal'

const META = [
  'Hyderabad, India',
  'Mechanical Engineering',
  'MJCET / Osmania University',
]

export function Hero() {
  return (
    <section
      id="profile"
      className="relative border-b border-border pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <div>
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="mono-label text-muted-foreground">
                Mechanical Design · Robotics · R&amp;D
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display text-[clamp(2.9rem,7vw,6rem)]">
              <span className="text-foreground">Mohammed Zainul</span>
              <br />
              <span className="text-steel">Abedin Kaleemi</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mechanical engineering shaped by robotics, precise mechanisms, and
              the discipline of making physical systems work.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              {META.map((item, i) => (
                <span key={item} className="flex items-center gap-4">
                  {i > 0 && (
                    <span aria-hidden className="text-hairline">
                      |
                    </span>
                  )}
                  <span className="mono-label text-muted-foreground">{item}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="mono-label group inline-flex items-center gap-3 bg-accent px-6 py-4 text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Projects
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                {...EXTERNAL_LINK_PROPS}
                className="mono-label group inline-flex items-center gap-3 border border-hairline px-6 py-4 text-foreground transition-colors hover:border-foreground"
              >
                Connect With Me
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <figure className="relative">
            <img
              src="/assets/robotics.png"
              alt="Three engineers standing behind a four-wheeled agricultural field robot with yellow articulated legs and exposed wiring"
              className="aspect-[4/5] w-full border border-hairline object-cover"
            />
            <span className="mono-label pointer-events-none absolute left-4 top-4 text-[0.6rem] text-background">
              Fig. 001 / Field Robot
            </span>
            <span className="mono-label pointer-events-none absolute right-4 top-4 text-[0.6rem] text-accent">
              Mechanical System / S.A.F.L
            </span>
            <span className="mono-label pointer-events-none absolute bottom-4 left-4 text-[0.6rem] text-foreground">
              Development Prototype / Agricultural Robotics
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
