// Robotics and automotive terms alternate so neither side dominates.
const ITEMS = [
  'ABU Robocon',
  'SAE BAJA',
  'Mechanisms',
  'Roll cage',
  'Kinematics',
  'Drivetrain',
  'Robot structures',
  'Vehicle dynamics',
  'SolidWorks',
  'FEA',
  'Fabrication',
  'Go-kart',
]

export function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-surface/40 py-5" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-2xl text-foreground/80 sm:text-3xl">{item}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
