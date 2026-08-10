import { Reveal } from '@/components/reveal'

const STAGES = [
  {
    step: '01',
    title: 'Concept',
    body: 'Framing the problem, defining constraints, and sketching the mechanical intent behind each build.',
  },
  {
    step: '02',
    title: 'CAD',
    body: 'Modelling assemblies, mechanisms, and structural layouts to validate geometry before anything is cut.',
  },
  {
    step: '03',
    title: 'Fabrication',
    body: 'Turning digital models into welded frames, mounted drivetrains, and integrated electronics.',
  },
  {
    step: '04',
    title: 'Testing',
    body: 'Running the finished machine in the real world, observing behaviour, and iterating on the design.',
  },
]

export function ProjectOverview() {
  return (
    <section id="projects" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Engineering Showcase
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            From a design in CAD to a machine on the ground.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every project follows the same honest path — an idea is modelled, built,
            and then tested in reality. The renders and photographs below trace that
            journey across mechanical and robotics work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, i) => (
            <Reveal
              key={stage.step}
              delay={i * 80}
              className="group relative rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="font-display text-sm font-bold text-accent">{stage.step}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
              <img
                src="/assets/cad-01.jpeg"
                alt="CAD render of a mechanical robot assembly with vertical lift towers, linkages and a manipulator on a competition field"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                CAD · Mechanism Assembly
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <figure className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface">
              <img
                src="/assets/kart-01.jpeg"
                alt="Side profile of the fabricated electric go-kart parked outdoors, showing the frame, seat and drivetrain"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                Fabricated · Tested Machine
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
