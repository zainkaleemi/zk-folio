import { Reveal } from '@/components/reveal'
import { EXTERNAL_LINK_PROPS, LINKEDIN_URL, PROJECT_URL } from '@/lib/links'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Let&apos;s Build
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Built to move from idea to reality.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore the full project or connect to talk mechanical design, robotics and
            electric mobility.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PROJECT_URL}
              {...EXTERNAL_LINK_PROPS}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore the Project
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href={LINKEDIN_URL}
              {...EXTERNAL_LINK_PROPS}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
