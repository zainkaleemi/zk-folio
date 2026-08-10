import { Reveal } from '@/components/reveal'

export function TeamSection() {
  return (
    <section id="team" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Team & Collaboration
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Hardware is a team sport.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real machines come together through collaboration — design, fabrication,
            electronics and testing shared across a team. This is a moment from the
            build, gathered around the finished kart.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
            <img
              src="/assets/team.jpeg"
              alt="Group of engineers gathered outdoors around the number 12 electric go-kart, some kneeling in matching red team shirts"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
              <span className="text-accent">●</span> Build Team · With the Electric Kart
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
