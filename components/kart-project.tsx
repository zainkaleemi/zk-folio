import { Reveal } from '@/components/reveal'

export function KartProject() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Project 01
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                Electric Kart
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Designed, fabricated, integrated and tested as a real-world electric
                mobility platform. From the welded chassis to the drivetrain and control
                wiring, the kart was built to move — and then taken out to prove it.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Custom fabricated tubular frame',
                  'Integrated drivetrain and control wiring',
                  'Race-style ergonomics and steering',
                  'Validated through real-world field testing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-5">
              <Reveal className="sm:col-span-3">
                <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
                  <img
                    src="/assets/kart-01.jpeg"
                    alt="Side view of the electric go-kart with number 12 livery and lightning-bolt graphic, parked on a paved outdoor path"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
              <Reveal delay={100} className="sm:col-span-2">
                <figure className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface">
                  <img
                    src="/assets/kart-02.jpeg"
                    alt="Three-quarter front view of the electric go-kart with a helmet resting on the frame, showing steering and seat detail"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Fabricated prototype · Outdoor testing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
