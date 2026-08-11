import { Reveal } from '@/components/reveal'

export function CadShowcase() {
  return (
    <section id="engineering" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            CAD · Mechanical Design
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Mechanisms modelled before they move.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Structural layouts, drive mechanisms, and moving assemblies are developed in
            CAD to validate motion, packaging and integration. These renders capture the
            mechanical design stage of the robotics builds.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
              <img
                src="/assets/cad-01.jpeg"
                alt="CAD render of a robot with dual vertical lift columns, truss linkages and a manipulator arm positioned over a competition field"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                Assembly · Lift & Manipulator
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
              <img
                src="/assets/cad-02.jpeg"
                alt="Alternate CAD render of the robotic platform showing the drive base, roller wheels, framing and vertical structure"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                Drive Base · Structural View
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-4">
          <figure className="group relative overflow-hidden rounded-lg border border-border bg-surface">
            <video
              className="h-full w-full object-cover"
              autoPlay
              playsInline
              muted
              loop
              preload="auto"
              poster="/assets/cad-01.jpeg"
            >
              <source src="/assets/r1-demonstration.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* subtle gradient for label legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />

            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2.5 px-4 py-3.5">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent/70" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/90">
                Live Demonstration · Mechanism in motion
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
