import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="mono-label text-accent">{index}</span>
          <span aria-hidden className="h-px w-10 bg-accent/60" />
          <span className="mono-label text-muted-foreground">{eyebrow}</span>
        </div>
        <h2 className="display mt-6 text-balance text-[clamp(2.6rem,7vw,5.6rem)]">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
