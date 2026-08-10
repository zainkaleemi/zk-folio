import { Reveal } from '@/components/reveal'
import { SectionMarker } from '@/components/section-marker'

const CARDS = [
  {
    n: '01',
    title: 'Mechanical Design',
    items: [
      'Part & assembly design',
      'Mechanism development',
      'Design for fabrication',
      'Mechanical integration',
    ],
  },
  {
    n: '02',
    title: 'Robotics',
    items: [
      'Robotic mechanisms',
      'Actuators & actuation',
      'Mechanism integration',
      'Competition robotics',
    ],
  },
  {
    n: '03',
    title: 'Engineering Analysis',
    items: ['FEA', 'Structural analysis', 'Load analysis', 'Design validation'],
  },
  {
    n: '04',
    title: 'Hardware & Embedded',
    items: [
      'NVIDIA Jetson Nano',
      'ESP32 · Arduino · Raspberry Pi',
      'Embedded systems',
      'Motor control & servo systems',
      'Sensors & serial communication',
    ],
  },
  {
    n: '05',
    title: 'Manufacturing',
    items: [
      '3D printing',
      'Mechanical fabrication',
      'Assembly',
      'Iterative hardware development',
    ],
  },
  {
    n: '06',
    title: 'Engineering Tools',
    items: ['SOLIDWORKS', 'CAD', 'Embedded programming', 'Engineering simulation'],
  },
]

export function EngineeringFocus() {
  return (
    <section id="focus" className="border-b border-border py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionMarker index="01" label="Engineering Focus" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display max-w-2xl text-[clamp(2.6rem,5.5vw,4.75rem)]">
              <span className="text-foreground">From design intent</span>
              <br />
              <span className="text-steel">to working hardware.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              A considered engineering stack arranged around the way a physical
              system is developed: define, model, analyse, build, and validate.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.n}
              delay={(i % 3) * 80}
              className="group border-b border-r border-hairline p-8 transition-colors hover:bg-surface lg:p-10"
            >
              <span className="mono-label text-accent">{card.n}</span>
              <h3 className="display mt-8 text-2xl text-foreground">{card.title}</h3>
              <ul className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    <span>{item}</span>
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
