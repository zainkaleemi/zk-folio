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

function Meta({ entry }: { entry: Entry }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {[entry.kicker, entry.period, entry.location].filter(Boolean).map((m, i) => (
        <span key={m} className="flex items-center gap-4">
          {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-muted-foreground/50" />}
          <span className={cn('mono-label', i === 0 ? 'text-accent' : 'text-muted-foreground')}>{m}</span>
        </span>
      ))}
    </div>
  )
}

/** Full chapter: header, text beside interactive CAD, then the media gallery. */
export function WorkEntry({ entry, label }: { entry: Entry; label: string }) {
  return (
    <article id={entry.id} className="scroll-mt-24">
      <Reveal>
        {entry.discipline && (
          <p className="display mb-5 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent-2)]">
            <span aria-hidden className="h-px w-10 bg-[var(--accent-2)]/60" />
            {entry.discipline}
          </p>
        )}
        <Meta entry={entry} />
        <h3 className="display mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-balance text-[clamp(2.4rem,6vw,5rem)]">
          {entry.title}
          {entry.badge && (
            <span className="rounded-full bg-accent px-4 py-1.5 font-mono text-sm font-medium tracking-[0.15em] text-accent-foreground">
              {entry.badge}
            </span>
          )}
        </h3>
        {entry.role && <p className="serif-accent mt-3 text-2xl text-[var(--accent-2)] sm:text-3xl">{entry.role}</p>}
        {entry.roleNote && <p className="mono-label mt-3 text-[0.6rem] text-muted-foreground">{entry.roleNote}</p>}

        {entry.facts && (
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
            {entry.facts.map((f) => (
              <div key={f.label} className="bg-background px-5 py-4">
                <dt className="mono-label text-[0.55rem] text-muted-foreground">{f.label}</dt>
                <dd className="mt-1.5 font-display text-lg text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="lg:pt-2">
          <Details entry={entry} />
        </Reveal>
        {entry.cad?.length ? (
          <Reveal delay={120}>
            <CadViewer models={entry.cad} figure={`${label} · Interactive CAD`} />
          </Reveal>
        ) : null}
      </div>

      {entry.media && entry.media.length > 0 && (
        <Reveal delay={80} className="mt-10">
          <MediaGallery items={entry.media} />
        </Reveal>
      )}
    </article>
  )
}

/** Compact card for secondary entries without CAD. */
export function CompactEntry({ entry }: { entry: Entry }) {
  return (
    <article id={entry.id} className="edge-glow glass flex w-full scroll-mt-24 flex-col rounded-[1.5rem] p-6 sm:p-8">
      <Meta entry={entry} />
      <h3 className="display mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-3xl sm:text-4xl">
        {entry.title}
        {entry.badge && (
          <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium tracking-[0.15em] text-accent-foreground">
            {entry.badge}
          </span>
        )}
      </h3>
      {entry.role && <p className="serif-accent mt-2 text-xl text-[var(--accent-2)]">{entry.role}</p>}
      <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{entry.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {entry.tags.map((t) => (
          <span key={t} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
      {entry.media && entry.media.length > 0 && (
        <div className="mt-auto pt-6">
          <MediaGallery items={entry.media.map((m) => ({ ...m, span: undefined }))} compact />
        </div>
      )}
    </article>
  )
}
