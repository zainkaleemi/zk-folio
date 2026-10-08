import { ArrowUpRight, FileText } from 'lucide-react'
import { EMAIL, EXTERNAL_LINK_PROPS, LINKEDIN_URL, RESUME_FILENAME, RESUME_URL } from '@/lib/links'
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
          <p className="mono-label text-accent">06 · Contact</p>
          <h2 className="display mx-auto mt-8 max-w-5xl text-balance text-[clamp(3rem,10vw,9rem)] leading-[0.88]">
            Let&apos;s build <span className="serif-accent text-gradient">something.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            For internships, research and collaboration, reach me by email or LinkedIn.
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

      <div className="mx-auto mt-16 max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="edge-glow glass group mx-auto flex max-w-2xl items-center justify-between gap-5 rounded-2xl p-5 text-left transition hover:bg-surface sm:p-6"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <FileText className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block font-display text-lg text-foreground sm:text-xl">Download full résumé</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">PDF · one page</span>
              </span>
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowUpRight className="h-5 w-5 rotate-90" />
            </span>
          </a>
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
