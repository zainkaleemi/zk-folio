import { ArrowUpRight } from 'lucide-react'
import { EMAIL, EXTERNAL_LINK_PROPS, LINKEDIN_URL } from '@/lib/links'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden pt-24 sm:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-[-40%] left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_22%,transparent),transparent_55%)]" />
        <div className="blueprint fade-mask-radial absolute inset-0 opacity-50" />
      </div>

      <div className="mx-auto max-w-[1600px] px-5 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="mono-label text-accent">05 · Contact</p>
          <h2 className="display mx-auto mt-8 max-w-5xl text-balance text-[clamp(3rem,10vw,9rem)] leading-[0.88]">
            Let&apos;s build <span className="serif-accent text-gradient">something.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Open to internships, research collaborations and anything with a mechanism in it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex max-w-full items-center gap-3 rounded-full bg-foreground px-7 py-4 font-semibold text-background transition hover:bg-accent hover:text-accent-foreground"
            >
              <span className="truncate">{EMAIL}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href={LINKEDIN_URL}
              {...EXTERNAL_LINK_PROPS}
              className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-foreground transition hover:border-accent"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative mt-28">
        <p
          aria-hidden
          className="display pointer-events-none select-none text-center text-[19vw] font-bold uppercase leading-[0.75] tracking-[-0.06em] text-foreground/[0.04]"
        >
          Kaleemi
        </p>
        <div className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <span className="mono-label text-[0.6rem] text-muted-foreground">© 2026 Zain Kaleemi · Hyderabad</span>
            <a
              href="#top"
              className="mono-label text-[0.6rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
