import type { ComponentType } from 'react'
import { Boxes, Cog, Drill, Grid3x3, Printer, Wrench } from 'lucide-react'
import {
  siAnsys,
  siArchlinux,
  siArduino,
  siAutocad,
  siDassaultsystemes,
  siGit,
  siIntel,
  siNvidia,
  siRaspberrypi,
  type SimpleIcon,
} from 'simple-icons'
import { SKILLS } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const BRANDS: Record<string, SimpleIcon> = {
  solidworks: siDassaultsystemes,
  autocad: siAutocad,
  ansys: siAnsys,
  nvidia: siNvidia,
  intel: siIntel,
  raspberrypi: siRaspberrypi,
  arduino: siArduino,
  archlinux: siArchlinux,
  git: siGit,
}

const GENERIC: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  fea: Grid3x3,
  printing: Printer,
  prototyping: Boxes,
  assembly: Wrench,
  cnc: Drill,
  servo: Cog,
}

function Logo({ icon }: { icon: string }) {
  const brand = BRANDS[icon]
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d={brand.path} />
      </svg>
    )
  }
  const Icon = GENERIC[icon] ?? Cog
  return <Icon className="h-7 w-7" strokeWidth={1.5} />
}

export function Toolkit() {
  return (
    <section id="toolkit" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <>
              What I <span className="serif-accent text-gradient">work with.</span>
            </>
          }
        />
        <div className="mt-14 space-y-12">
          {SKILLS.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 80}>
              <h3 className="display flex items-center gap-3 text-2xl text-foreground sm:text-3xl">
                <span aria-hidden className="text-accent">
                  ✱
                </span>
                {g.group}
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-3 min-[520px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
                {g.items.map((item) => (
                  <li
                    key={item.name}
                    className="edge-glow group flex flex-col items-center justify-center gap-3 rounded-2xl border border-hairline bg-surface/60 px-3 py-6 text-center transition-colors hover:bg-surface"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-accent">
                      <Logo icon={item.icon} />
                    </span>
                    <span className="text-sm text-foreground/85">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="edge-glow glass mt-12 flex flex-col gap-2 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mono-label text-[0.6rem] text-accent">Education</p>
            <p className="mt-2 font-display text-xl text-foreground sm:text-2xl">
              B.E. Mechanical Engineering · MJCET, Osmania University
            </p>
          </div>
          <p className="mono-label text-[0.6rem] text-muted-foreground">Expected May 2028</p>
        </Reveal>
      </div>
    </section>
  )
}
