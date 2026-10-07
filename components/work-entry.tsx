import { ArrowUpRight } from 'lucide-react'
import type { Entry } from '@/lib/content'
import { EXTERNAL_LINK_PROPS } from '@/lib/links'
import { CadViewer } from '@/components/cad-viewer'
import { MediaGallery } from '@/components/media-gallery'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

function Details({ entry }: { entry: Entry }) {
  return (
    <div>
      <p className="text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">{entry.summary}</p>

      {entry.bullets.length > 0 && (
        <ul className="mt-8 space-y-4">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-[0.6rem] h-px w-5 shrink-0 bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {entry.stats && (
        <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
          {entry.stats.map((s) => (
            <div key={s.label} className="bg-background p-4 sm:p-5">
              <dt className="mono-label text-[0.55rem] leading-relaxed text-muted-foreground">{s.label}</dt>
              <dd className="display mt-2 text-2xl text-foreground sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-8 flex flex-wrap gap-2">
        {entry.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-hairline bg-foreground/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {entry.link && (
        <a
          href={entry.link.href}
          {...EXTERNAL_LINK_PROPS}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-accent/60 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground"
        >
          {entry.link.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      )}
    </div>
  )
}

export function WorkEntry({ entry, index }: { entry: Entry; index: number }) {
  const number = String(index + 1).padStart(2, '0')
  const hasCad = Boolean(entry.cad?.length)
  const flip = index % 2 === 1

  return (
    <article id={entry.id} className="relative scroll-mt-24 border-t border-hairline pt-12 sm:pt-16">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="mono-label text-accent">{entry.kicker}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="mono-label text-muted-foreground">{entry.period}</span>
          {entry.location && (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span className="mono-label text-muted-foreground">{entry.location}</span>
            </>
          )}
        </div>
        <div className="mt-6 flex items-start gap-5 sm:gap-8">
          <span aria-hidden className="display text-outline hidden text-[clamp(4rem,9vw,8rem)] leading-[0.8] sm:block">
            {number}
          </span>
          <div className="min-w-0">
            <h3 className="display flex flex-wrap items-center gap-x-5 gap-y-3 text-balance text-[clamp(2.2rem,5.5vw,4.5rem)]">
              {entry.title}
              {entry.badge && (
                <span className="rounded-full bg-accent px-4 py-1.5 font-mono text-sm font-medium tracking-[0.15em] text-accent-foreground shadow-[0_0_40px_-6px_var(--accent)]">
                  {entry.badge}
                </span>
              )}
            </h3>
            {entry.role && (
              <p className="serif-accent mt-3 text-2xl text-[var(--accent-2)] sm:text-3xl">{entry.role}</p>
            )}
            {entry.roleNote && <p className="mono-label mt-3 text-[0.6rem] text-muted-foreground">{entry.roleNote}</p>}
          </div>
        </div>
      </Reveal>

      {hasCad ? (
        <div
          className={cn(
            'mt-12 grid gap-10 lg:gap-14',
            flip ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[0.8fr_1.2fr]',
          )}
        >
          <Reveal className={cn('lg:pt-4', flip && 'lg:order-2')}>
            <Details entry={entry} />
          </Reveal>
          <Reveal delay={120} className={cn(flip && 'lg:order-1')}>
            <CadViewer models={entry.cad!} figure={`Fig. ${number} · Interactive CAD`} />
          </Reveal>
        </div>
      ) : (
        <Reveal className="mt-10 max-w-3xl">
          <Details entry={entry} />
        </Reveal>
      )}

      {entry.media && entry.media.length > 0 && (
        <Reveal delay={80} className="mt-10">
          <MediaGallery items={entry.media} />
        </Reveal>
      )}
    </article>
  )
}
