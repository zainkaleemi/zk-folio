import { Trophy, Users } from 'lucide-react'
import { AWARDS, LEADERSHIP } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Recognition() {
  return (
    <section id="recognition" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="Awards & Leadership"
          title={
            <>
              On the podium, and <span className="serif-accent text-gradient">running the room.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Trophy,
              label: 'Awards',
              rows: AWARDS.map((a) => ({ title: a.title, sub: a.org, date: a.date })),
            },
            {
              icon: Users,
              label: 'Leadership',
              rows: LEADERSHIP.map((l) => ({ title: l.role, sub: l.org, date: l.date })),
            },
          ].map((col, ci) => (
            <Reveal key={col.label} delay={ci * 120} className="edge-glow glass rounded-[1.5rem] p-3 sm:p-4">
              <div className="flex items-center gap-3 px-4 pb-3 pt-4">
                <col.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <span className="mono-label text-muted-foreground">{col.label}</span>
              </div>
              <ul>
                {col.rows.map((r) => (
                  <li
                    key={r.title + r.sub}
                    className="group flex flex-col gap-2 rounded-2xl px-4 py-5 transition-colors hover:bg-foreground/[0.04] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-xl text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                        {r.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{r.sub}</p>
                    </div>
                    <span className="mono-label shrink-0 text-[0.6rem] text-muted-foreground">{r.date}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
