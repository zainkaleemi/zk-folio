// All portfolio copy and media live here so sections can be edited without
// touching layout code. To add a photo/video or a CAD model to an entry, drop
// the file into /public and add one line to that entry's `media` or `cad`.

export type MediaItem =
  | {
      type: 'image'
      src: string
      alt: string
      caption: string
      /** Bento sizing in the gallery grid. */
      span?: 'wide' | 'tall' | 'big'
      /** CSS object-position, e.g. 'center 20%'. */
      position?: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
      caption: string
      /** false shows the poster with a play button; the video opens in the lightbox with sound. */
      autoplay?: boolean
      span?: 'wide' | 'tall' | 'big'
      position?: string
    }

export type CadModel = {
  /** Path under /public, e.g. '/models/sae-baja.glb'. Run `pnpm models:optimize` first. */
  src: string
  label: string
  caption: string
  /** Starting camera angles, e.g. '215deg 75deg' (theta phi). Distance is set automatically. */
  angles?: string
  /** Fix models exported lying down, model-viewer `orientation` syntax: 'roll pitch yaw'. */
  orientation?: string
}

export type Entry = {
  id: string
  kicker: string
  title: string
  role?: string
  roleNote?: string
  period: string
  location?: string
  summary: string
  /** Optional background note shown under the summary, e.g. programme or funding context. */
  context?: string
  bullets: string[]
  tags: string[]
  badge?: string
  stats?: { value: string; label: string }[]
  /** Short key facts shown as a row under the title (flagship teams). */
  facts?: { label: string; value: string }[]
  /** Flagship teams only: which side of the work this represents. */
  discipline?: string
  /** Flagship teams only: image for the overview card. */
  cover?: string
  link?: { href: string; label: string }
  /** A single portrait video/photo shown beside the text, e.g. a phone-shot explainer. */
  feature?: MediaItem
  cad?: CadModel[]
  media?: MediaItem[]
}

// Tier 1: the two flagship teams. Identical, equal-weight treatment everywhere.
export const TEAMS: Entry[] = [
  {
    id: 'robocon',
    kicker: 'ABU Robocon',
    title: 'Team Robocon MJCET',
    role: 'Mechanical Head',
    roleNote: 'Promoted twice: Design Engineer → Senior Design Engineer → Mechanical Head',
    period: 'Nov 2024 — Present',
    location: 'MJCET, Hyderabad',
    discipline: 'Robotics',
    cover: '/assets/cad-01.webp',
    facts: [
      { label: 'Role', value: 'Mechanical Head' },
      { label: 'Competition', value: 'ABU Robocon' },
      { label: 'Focus', value: 'Mechanisms & robot structures' },
    ],
    summary:
      'I lead the mechanical side of our ABU Robocon robots: what the mechanisms are, how they get built, and whether they survive the arena.',
    bullets: [
      'Mechanisms designed for kinematics, strength, weight and reliability, then refined through test runs.',
      'Robots taken from CAD and drawings through fabrication and assembly.',
      'Integration with the electrical and programming teams, so the robot works as one machine.',
    ],
    tags: ['Mechanism design', 'SolidWorks', 'Prototyping', 'Fabrication', 'Integration'],
    cad: [
      {
        src: '/models/robocon-r1.glb',
        label: 'R1 · ABU Robocon 2026',
        caption: 'R1: twin vertical lifts and a manipulator on an octagonal omni-wheel base',
      },
      {
        src: '/models/robocon-prototype.glb',
        label: 'Lift prototype',
        caption: 'Belt-driven lift and gripper prototype on an omni-wheel base',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/assets/r1-demonstration.mp4',
        poster: '/assets/cad-01.webp',
        caption: 'R1 prototype testing, open demonstration',
        span: 'big',
      },
      {
        type: 'image',
        src: '/assets/cad-01.webp',
        alt: 'CAD render of the R1 robot with dual vertical lift columns over the competition field',
        caption: 'R1 · CAD assembly',
      },
      {
        type: 'image',
        src: '/assets/cad-02.webp',
        alt: 'CAD render of the R2 robot showing the drive base, roller wheels and structural framing',
        caption: 'R2 · CAD assembly',
      },
      {
        type: 'image',
        src: '/assets/robocon/prototype-01.webp',
        alt: 'CAD of an early Robocon lift mechanism prototype on a triangular frame',
        caption: 'Prototype 01 · Lift mechanism',
      },
      {
        type: 'image',
        src: '/assets/robocon/prototype-02.webp',
        alt: 'CAD of the belt-driven Robocon lift prototype with gripper arm',
        caption: 'Prototype 02 · Belt-driven lift',
      },
    ],
  },
  {
    id: 'mudbrothers',
    kicker: 'SAE BAJA',
    title: 'Team MudBrothers',
    role: 'Vehicle Design Engineer',
    period: 'Mar 2026 — Present',
    location: 'MJCET, Hyderabad',
    discipline: 'Automotive',
    cover: '/assets/baja/zain-mudbrothers.webp',
    facts: [
      { label: 'Role', value: 'Vehicle Design Engineer' },
      { label: 'Competition', value: 'SAE BAJA' },
      { label: 'Focus', value: 'Roll cage & vehicle subsystems' },
    ],
    summary:
      'I design parts and assemblies for our SAE BAJA buggy, a single-seat off-road vehicle built to take jumps, rocks and mud.',
    bullets: [
      'Subsystem design and integration, trading weight against strength and what the shop can fabricate.',
      'Design revisions driven by feedback from manufacturing and testing.',
      'On the shop floor for fabrication, assembly and test runs.',
    ],
    tags: ['Vehicle design', 'Roll cage', 'Subsystems', 'DFM', 'Testing'],
    cad: [
      {
        src: '/models/sae-baja.glb',
        label: 'BAJA vehicle',
        caption: 'Roll cage with engine and drivetrain packaged inside',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/assets/baja/zain-mudbrothers.webp',
        alt: 'Zain in a black racing suit sitting in a red bucket seat in the workshop, helmet beside him and the buggy behind',
        caption: 'In the shop with the MudBrothers buggy',
        span: 'tall',
      },
      {
        type: 'image',
        src: '/assets/baja/baja-chassis.webp',
        alt: 'CAD render of the SAE BAJA roll-cage chassis with engine',
        caption: 'Roll-cage chassis · CAD',
        span: 'big',
      },
    ],
  },
]

// Tier 3: internship.
export const INTERNSHIP: Entry = {
  id: 'jntuh',
  kicker: 'Internship',
  title: 'JNTU Hyderabad',
  role: 'EV Design, Development & Manufacturing Intern',
  period: 'Jul — Aug 2026',
  location: 'Hybrid',
  summary:
    'EV architecture, battery packs, BMS and charging systems, with hands-on MATLAB/Simulink and EV digital twins, plus industry visits and expert sessions.',
  bullets: [],
  tags: ['EV architecture', 'BMS', 'MATLAB/Simulink', 'Digital twins'],
}

// Tier 4: worth a mention.
export const ASPHALT: Entry = {
  id: 'asphalt',
  kicker: 'IKR Go-Kart 2025',
  title: 'Team Asphalt MJCET',
  period: '2025',
  location: 'Indian Karting Race',
  badge: 'AIR 10',
  summary: 'Built and raced a go-kart with Team Asphalt, finishing All India Rank 10 at the Indian Karting Race 2025.',
  bullets: [],
  tags: ['Automotive', 'Competition', 'Fabrication', 'Teamwork'],
  media: [
    {
      type: 'image',
      src: '/assets/kart-01.webp',
      alt: 'Side profile of the number 12 go-kart parked outdoors on wet pavement',
      caption: 'Kart overview',
      span: 'wide',
    },
    {
      type: 'image',
      src: '/assets/award-ceremony.webp',
      alt: 'Receiving a certificate and memento at the SAE MJCET Summit 2025 award ceremony',
      caption: 'SAE MJCET Summit 2025 · Recognition',
      position: 'center 20%',
    },
    {
      type: 'image',
      src: '/assets/team.webp',
      alt: 'Team Asphalt crew and mentors around the flame-liveried go-kart',
      caption: 'Team Asphalt crew',
    },
  ],
}

// Tier 2: R&D, full chapters with CAD.
export const RESEARCH: Entry[] = [
  {
    id: 'safl',
    kicker: 'Institution-funded R&D',
    title: 'S.A.F.L.',
    role: 'Smart Agri Four-Legged Bot · Undergraduate Researcher',
    period: 'Nov 2025 — Present',
    summary:
      'A semi-autonomous four-legged robot that finds weeds and measures soil health in the field, so farmers don’t have to walk every row.',
    bullets: [
      'Mechanical design: CAD assemblies, reinforced steel chassis and articulated legs.',
      'FEA in SolidWorks on critical components, validated to a minimum safety factor of 2.04.',
      'Mechanical interfaces for actuators, soil sensing, cameras and the Jetson Nano.',
      'Prototype build and field trials, including 4–6 hour deployments.',
    ],
    tags: ['FEA', 'SolidWorks', 'Jetson Nano', 'Field testing'],
    stats: [
      { value: '2.04', label: 'Min. safety factor' },
      { value: '9.2 FPS', label: 'Edge weed detection' },
      { value: '4–6 h', label: 'Field deployments' },
    ],
    link: {
      href: 'https://onerealti.github.io/astro-safl/',
      label: 'Read the full engineering documentation',
    },
    cad: [
      {
        src: '/models/safl-quadruped.glb',
        label: 'S.A.F.L. quadruped',
        caption: 'Full assembly: chassis, articulated wheel-legs and electronics bay',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/assets/safl/safl-team.webp',
        alt: 'Three engineers standing behind the four-legged agricultural robot with yellow articulated legs',
        caption: 'Development prototype',
        span: 'tall',
      },
      {
        type: 'image',
        src: '/assets/safl/safl-lab.webp',
        alt: 'The S.A.F.L. quadruped prototype on a lab table with exposed wiring',
        caption: 'Prototype on the bench',
        span: 'big',
      },
    ],
  },
  {
    id: 'exoskeleton',
    kicker: 'YUKTI Innovation Challenge',
    title: 'Wearable Exoskeleton',
    role: 'Mechanical integration',
    period: 'Nov 2025 — Present',
    summary: 'A wearable, cable-driven assist that takes strain and fatigue out of repetitive manual work.',
    context:
      'Supported under the YUKTI Innovation Challenge, a national programme by the Ministry of Education’s Innovation Cell (MIC) and AICTE that identifies, mentors and funds student-led prototypes.',
    bullets: [
      'Mechanical integration and assembly: Dyneema cable, high-torque servos and 3D-printed parts.',
      'Servo control from a headless Raspberry Pi with a Bus Servo Driver HAT.',
    ],
    tags: ['Wearables', '3D printing', 'Servo control', 'Raspberry Pi'],
    cad: [
      {
        src: '/models/exoskeleton.glb',
        label: 'Exoskeleton',
        caption: 'Back-mounted actuator housing with cable routing to the thigh cuffs',
        orientation: '0deg -90deg 0deg',
        angles: '200deg 78deg',
      },
    ],
    feature: {
      type: 'video',
      src: '/assets/exo/exo-explained.mp4',
      poster: '/assets/exo/exo-poster.webp',
      caption: 'The exoskeleton, explained',
      autoplay: false,
    },
  },
]

export const AWARDS = [
  {
    title: '1st Place, AgriTech track',
    org: 'MAKEFORHYDERABAD · Titan Design Impact Movement',
    date: 'May 2026',
  },
  {
    title: 'All India Rank 10',
    org: 'IKR Go-Kart Competition · Team Asphalt MJCET',
    date: '2025',
  },
  {
    title: 'Certified SolidWorks Professional',
    org: 'CSWP · Dassault Systèmes',
    date: 'Certification',
  },
]

export const LEADERSHIP = [
  { role: 'Technical Head', org: 'Club Optimus MJCET', date: 'Sep 2026 — Present' },
  { role: 'Social Media Director', org: 'IEOM MJCET', date: 'Sep 2026 — Present' },
]

// Icon keys map to logos in components/toolkit.tsx.
export const SKILLS = [
  {
    group: 'CAD & Analysis',
    items: [
      { name: 'SolidWorks · CSWP', icon: 'solidworks' },
      { name: 'AutoCAD', icon: 'autocad' },
      { name: 'FEA', icon: 'fea' },
      { name: 'Ansys Workbench', icon: 'ansys' },
      { name: 'MATLAB / Simulink', icon: 'matlab' },
    ],
  },
  {
    group: 'Fabrication',
    items: [
      { name: '3D Printing', icon: 'printing' },
      { name: 'Rapid Prototyping', icon: 'prototyping' },
      { name: 'Mechanical Assembly', icon: 'assembly' },
      { name: 'CNC', icon: 'cnc' },
    ],
  },
  {
    group: 'Electronics & Code',
    items: [
      { name: 'Jetson Nano', icon: 'nvidia' },
      { name: 'RealSense D435', icon: 'intel' },
      { name: 'Raspberry Pi', icon: 'raspberrypi' },
      { name: 'Arduino', icon: 'arduino' },
      { name: 'Servo Control', icon: 'servo' },
      { name: 'Python', icon: 'python' },
      { name: 'C', icon: 'c' },
      { name: 'Arch Linux', icon: 'archlinux' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
]
