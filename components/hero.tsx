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
      className="relative border-b border-border pt-24 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:gap-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <div>
          <Reveal>
            <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:items-center">
              <span className="animate-pulse-ring mt-1 h-2 w-2 shrink-0 rounded-full bg-accent sm:mt-0" aria-hidden />
              <span className="mono-label min-w-0 leading-relaxed text-muted-foreground">
                Mechanical Design · Robotics · R&amp;D
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display text-balance text-[clamp(2.35rem,12vw,6rem)] leading-[0.98] sm:leading-[0.92]">
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
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
              {META.map((item, i) => (
                <span key={item} className="flex min-w-0 items-center gap-4">
                  {i > 0 && (
                    <span aria-hidden className="hidden text-hairline sm:inline">
                      |
                    </span>
                  )}
                  <span className="mono-label leading-relaxed text-muted-foreground">{item}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:gap-4">
              <a
                href="#projects"
                className="mono-label group inline-flex items-center justify-between gap-3 bg-accent px-5 py-4 text-accent-foreground transition-opacity hover:opacity-90 min-[380px]:justify-start min-[380px]:px-6"
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
                className="mono-label group inline-flex items-center justify-between gap-3 border border-hairline px-5 py-4 text-foreground transition-colors hover:border-foreground min-[380px]:justify-start min-[380px]:px-6"
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
          <figure className="media-zoom group relative border border-hairline" data-cursor="hover">
            <img
              src="/assets/robotics.png"
              alt="Three engineers standing behind a four-wheeled agricultural field robot with yellow articulated legs and exposed wiring"
              className="aspect-[4/5] w-full object-cover [filter:contrast(1.18)_saturate(1.08)]"
            />
            <span className="mono-label pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] bg-background/75 px-2 py-1 text-[0.55rem] leading-relaxed text-foreground sm:left-4 sm:top-4 sm:text-[0.6rem]">
              Fig. 001 / Field Robot
            </span>
            <span className="mono-label pointer-events-none absolute left-3 top-12 max-w-[calc(100%-1.5rem)] bg-background/75 px-2 py-1 text-[0.55rem] leading-relaxed text-accent sm:left-auto sm:right-4 sm:top-4 sm:text-[0.6rem]">
              Mechanical System / S.A.F.L
            </span>
            <span className="mono-label pointer-events-none absolute bottom-3 left-3 right-3 bg-background/75 px-2 py-1 text-[0.55rem] leading-relaxed text-foreground sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[80%] sm:text-[0.6rem]">
              Development Prototype / Agricultural Robotics
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
