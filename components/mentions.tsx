import { Trophy, Users } from 'lucide-react'
import { ASPHALT, AWARDS, LEADERSHIP } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CompactEntry } from '@/components/work-entry'

function List({
  icon: Icon,
  label,
  rows,
}: {
  icon: typeof Trophy
  label: string
  rows: { title: string; sub: string; date: string }[]
}) {
  return (
    <div className="edge-glow glass rounded-[1.5rem] p-3 sm:p-4">
      <div className="flex items-center gap-3 px-3 pb-1 pt-3">
        <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
        <span className="mono-label text-[0.6rem] text-muted-foreground">{label}</span>
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.title + r.sub} className="flex items-baseline justify-between gap-4 rounded-xl px-3 py-3">
            <div className="min-w-0">
              <p className="font-display text-lg text-foreground">{r.title}</p>
              <p className="text-sm text-muted-foreground">{r.sub}</p>
            </div>
            <span className="mono-label shrink-0 text-[0.55rem] text-muted-foreground">{r.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Everything that isn't headline work but is worth knowing about. */
export function Mentions() {
  return (
    <section id="mentions" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading index="05" eyebrow="Also" title="Worth a mention." />
        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <Reveal className="flex">
            <CompactEntry entry={ASPHALT} />
          </Reveal>
          <Reveal delay={120} className="space-y-4 lg:space-y-6">
            <List
              icon={Trophy}
              label="Awards"
              rows={AWARDS.map((a) => ({ title: a.title, sub: a.org, date: a.date }))}
            />
            <List
              icon={Users}
              label="Leadership"
              rows={LEADERSHIP.map((l) => ({ title: l.role, sub: l.org, date: l.date }))}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
