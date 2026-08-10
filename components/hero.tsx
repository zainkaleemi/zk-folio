import { EXTERNAL_LINK_PROPS, LINKEDIN_URL, PROJECT_URL } from '@/lib/links'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Mechanical · Robotics · EV
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Engineering Ideas Into Machines
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A hands-on engineering portfolio spanning mechanical design, robotics,
              embedded systems, and electric mobility — carried from CAD concept through
              fabrication and real-world prototyping.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={PROJECT_URL}
                {...EXTERNAL_LINK_PROPS}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Project
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                {...EXTERNAL_LINK_PROPS}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: 'Discipline', v: 'Multidisciplinary' },
                { k: 'Workflow', v: 'CAD → Build' },
                { k: 'Focus', v: 'Real Hardware' },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {item.k}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold sm:text-base">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <figure className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-xl bg-gradient-to-tr from-accent/10 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <img
                  src="/assets/kart-02.jpeg"
                  alt="Custom-built electric go-kart with number 12 livery, exhaust and a helmet resting on the frame, photographed outdoors"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
                <span className="text-accent">●</span> Electric Kart · Field Test
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
