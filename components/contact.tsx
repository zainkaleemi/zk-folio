import { EMAIL, EXTERNAL_LINK_PROPS, LINKEDIN_URL } from '@/lib/links'
import { Reveal } from '@/components/reveal'
import { SectionMarker } from '@/components/section-marker'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="04" label="Contact" />
        </Reveal>

        <div className="mt-12 grid gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-32">
          <Reveal delay={80}>
            <h2 className="display text-[clamp(2.6rem,6vw,5rem)]">
              <span className="text-foreground">Technical work</span>
              <br />
              <span className="text-steel">starts with a conversation.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="lg:pt-3">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I&apos;m available for enquiries related to mechanical design and
              technical collaboration.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group mt-10 flex max-w-md items-center justify-between border-b border-hairline pb-4 transition-colors hover:border-foreground"
            >
              <span className="font-display text-2xl text-foreground sm:text-3xl">
                {EMAIL}
              </span>
              <span
                aria-hidden
                className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={LINKEDIN_URL}
              {...EXTERNAL_LINK_PROPS}
              className="mono-label mt-8 inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span
                aria-hidden
                className="grid h-5 w-5 place-items-center border border-hairline text-[0.5rem]"
              >
                in
              </span>
              LinkedIn
              <span aria-hidden className="text-[0.7rem]">
                ↗
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer band with oversized monogram */}
      <div className="relative border-t border-border">
        <span
          aria-hidden
          className="display pointer-events-none absolute -bottom-8 left-2 select-none text-[clamp(8rem,20vw,18rem)] leading-none text-foreground/[0.03] sm:left-8"
        >
          ZK
        </span>
        <div className="relative mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="mono-label text-muted-foreground">
            © 2026 Zain Kaleemi
          </span>
          <span className="mono-label hidden text-muted-foreground/70 sm:inline">
            Built With Intent
          </span>
          <a
            href="#profile"
            className="mono-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            Back To Top <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </section>
  )
}
