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
    <section id="projects" className="border-b border-border py-16 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="03" label="Selected Project" />
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="tech-grid border border-hairline">
            <div className="grid gap-10 p-5 min-[380px]:p-6 sm:gap-12 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-16">
              <div>
                <span className="mono-label text-accent">S.A.F.L</span>
                <h2 className="display mt-6 text-balance text-[clamp(2.2rem,11vw,5rem)] leading-[0.98] sm:mt-8 sm:leading-[0.92]">
                  <span className="text-foreground">Smart Agri</span>
                  <br />
                  <span className="text-steel">Four Legged Bot</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                  A semi-autonomous agricultural robot designed for precision farming
                  through automated weed detection and in-situ soil condition
                  monitoring.
                </p>
                <a
                  href={PROJECT_URL}
                  {...EXTERNAL_LINK_PROPS}
                  className="mono-label group mt-10 flex w-full items-center justify-between gap-3 border border-accent px-4 py-4 leading-relaxed text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex sm:w-auto sm:justify-start sm:px-6"
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
                    <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
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

            <div className="flex flex-wrap gap-x-5 gap-y-4 border-t border-hairline px-5 py-5 min-[380px]:px-6 sm:gap-x-8 sm:px-12 sm:py-6 lg:px-16">
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
