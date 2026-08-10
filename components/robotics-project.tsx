import { Reveal } from '@/components/reveal'

export function RoboticsProject() {
  return (
    <section id="robotics" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
                <img
                  src="/assets/robotics.png"
                  alt="Four-wheeled robotic platform with yellow suspension legs, large wheels and exposed control electronics, with three engineers standing behind it"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <figcaption className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                  Wheeled-Leg Platform · Prototype
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Project 02
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                Robotics & Control
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A wheeled-leg robotic platform bringing together mechanical structure,
                actuation and control electronics. It is a study in electromechanical
                integration — where hardware, wiring and embedded control have to work
                together as one system.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { k: 'Domain', v: 'Robotics' },
                  { k: 'Systems', v: 'Electromechanical' },
                  { k: 'Control', v: 'Embedded' },
                  { k: 'Stage', v: 'Prototype' },
                ].map((item) => (
                  <div key={item.k} className="rounded-lg border border-border bg-surface p-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                      {item.k}
                    </div>
                    <div className="mt-1 font-display text-sm font-semibold">{item.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
