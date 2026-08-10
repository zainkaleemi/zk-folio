import { EXTERNAL_LINK_PROPS, PROJECT_URL } from '@/lib/links'
import { Reveal } from '@/components/reveal'
import { SectionMarker } from '@/components/section-marker'

const STATS = [
  {
    label: 'Structural Validation',
    value: '2.04',
    unit: 'Min FOS',
    body: 'Design validated against static, lateral impact, and soil-probe insertion loads.',
  },
  {
    label: 'Edge Perception',
    value: '9.2',
    unit: 'FPS',
    body: 'Real-time weed detection benchmarked on an NVIDIA Jetson Nano.',
  },
  {
    label: 'Mechanical Architecture',
    value: '3-JOINT',
    unit: 'Legs',
    body: 'Articulated planar legs with passive torsional compliance for uneven terrain.',
  },
]

const TAGS = [
  'Engineering Evidence',
  'FEA Validation',
  'Edge Computing',
  'Mechanical Integration',
  'Field-Ready Design',
]

export function SelectedProject() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="03" label="Selected Project" />
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="tech-grid border border-hairline">
            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-16">
              <div>
                <span className="mono-label text-accent">S.A.F.L</span>
                <h2 className="display mt-8 text-[clamp(2.6rem,6vw,5rem)]">
                  <span className="text-foreground">Smart Agri</span>
                  <br />
                  <span className="text-steel">Four Legged Bot</span>
                </h2>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                  A semi-autonomous agricultural robot designed for precision farming
                  through automated weed detection and in-situ soil condition
                  monitoring.
                </p>
                <a
                  href={PROJECT_URL}
                  {...EXTERNAL_LINK_PROPS}
                  className="mono-label group mt-10 inline-flex items-center gap-3 border border-accent px-6 py-4 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Explore The Engineering Documentation
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>

              <div className="space-y-10">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i > 0 ? 'border-t border-hairline pt-10' : ''}
                  >
                    <p className="mono-label text-steel">{stat.label}</p>
                    <p className="mt-4 flex items-baseline gap-2">
                      <span className="display text-5xl text-foreground sm:text-6xl">
                        {stat.value}
                      </span>
                      <span className="mono-label text-muted-foreground">{stat.unit}</span>
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {stat.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-hairline px-8 py-6 sm:px-12 lg:px-16">
              {TAGS.map((tag) => (
                <span key={tag} className="mono-label text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
