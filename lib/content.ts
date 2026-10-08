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
    roleNote: 'Promoted from Design Engineer and Senior Design Engineer',
    period: 'Nov 2024 — Present',
    location: 'MJCET, Hyderabad',
    discipline: 'Robotics',
    cover: '/assets/cad-01.webp',
    facts: [
      { label: 'Role', value: 'Mechanical Head' },
      { label: 'Competition', value: 'ABU Robocon' },
      { label: 'Focus', value: 'Robot mechanisms' },
    ],
    summary:
      'Leading the mechanical team for the ABU Robocon robot, from design and prototyping to fabrication and assembly.',
    bullets: [
      'Design robot mechanisms for kinematics, strength, weight and reliability, iterating through testing.',
      'Produce 3D CAD models and drawings.',
      'Coordinate integration with the electrical and programming teams.',
    ],
    tags: ['Mechanism design', 'SolidWorks', 'Prototyping', 'Fabrication', 'Integration'],
    cad: [
      {
        src: '/models/robocon-r1.glb',
        label: 'R1 · ABU Robocon 2026',
        caption: 'R1 robot assembly',
      },
      {
        src: '/models/robocon-prototype.glb',
        label: 'Prototype',
        caption: 'Prototype assembly',
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
        alt: 'CAD render of the R1 robot',
        caption: 'R1 · CAD assembly',
      },
      {
        type: 'image',
        src: '/assets/cad-02.webp',
        alt: 'CAD render of the R2 robot',
        caption: 'R2 · CAD assembly',
      },
      {
        type: 'image',
        src: '/assets/robocon/prototype-01.webp',
        alt: 'CAD render of Robocon prototype 01',
        caption: 'Prototype 01 · CAD',
      },
      {
        type: 'image',
        src: '/assets/robocon/prototype-02.webp',
        alt: 'CAD render of Robocon prototype 02',
        caption: 'Prototype 02 · CAD',
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
      { label: 'Focus', value: 'Parts, assemblies & subsystems' },
    ],
    summary: 'Designing parts and assemblies in CAD for the team’s SAE BAJA off-road vehicle.',
    bullets: [
      'Work on subsystem design and integration, balancing weight, reliability and what can be fabricated.',
      'Work with the manufacturing and testing teams to revise designs.',
      'Help with fabrication, assembly and testing.',
    ],
    tags: ['Vehicle design', 'CAD', 'Subsystems', 'Fabrication', 'Testing'],
    cad: [
      {
        src: '/models/sae-baja.glb',
        label: 'SAE BAJA vehicle',
        caption: 'SAE BAJA vehicle assembly',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/assets/baja/zain-mudbrothers.webp',
        alt: 'Zain in a racing suit in the Team MudBrothers workshop',
        caption: 'Team MudBrothers workshop',
        span: 'tall',
      },
      {
        type: 'image',
        src: '/assets/baja/baja-chassis.webp',
        alt: 'CAD render of the SAE BAJA chassis',
        caption: 'Chassis · CAD',
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
    'Hybrid internship covering EV architecture, battery packs, Battery Management Systems (BMS), charging systems, MATLAB/Simulink and EV digital twins. Attended industry visits and expert sessions on EV development and manufacturing.',
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
  summary: 'All India Rank 10 at the IKR Go-Kart Competition with Team Asphalt MJCET.',
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
    summary: 'Mechanical design of a semi-autonomous agricultural quadruped.',
    bullets: [
      'Contributed to the mechanical design: 3D CAD assemblies, reinforced steel chassis and articulated legs.',
      'Performed FEA in SolidWorks on critical components; structure validated to a minimum safety factor of 2.04.',
      'Designed mechanical interfaces for the actuators, soil sensing, cameras and onboard computer; assisted with Jetson Nano edge AI and sensor acquisition.',
      'Built and tested the prototype in field trials, including 4–6 hour field deployments.',
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
        caption: 'S.A.F.L. assembly',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/assets/safl/safl-team.webp',
        alt: 'The team with the S.A.F.L. quadruped prototype',
        caption: 'Development prototype',
        span: 'tall',
      },
      {
        type: 'image',
        src: '/assets/safl/safl-lab.webp',
        alt: 'The S.A.F.L. quadruped prototype',
        caption: 'Prototype',
        span: 'big',
      },
    ],
  },
  {
    id: 'exoskeleton',
    kicker: 'YUKTI Innovation Challenge',
    title: 'Wearable Exoskeleton',
    role: 'R&D project',
    period: 'Nov 2025 — Present',
    summary: 'Wearable assist system to reduce strain and fatigue in manual tasks.',
    context:
      'Supported under the YUKTI Innovation Challenge, a national programme by the Ministry of Education’s Innovation Cell (MIC) and AICTE that identifies, mentors and funds student-led prototypes.',
    bullets: [
      'Worked on the mechanical integration and assembly of a rope-driven assist using Dyneema cable, high-torque servos and 3D-printed parts.',
      'Controlled the servos from a headless Raspberry Pi with a Bus Servo Driver HAT.',
    ],
    tags: ['Wearables', '3D printing', 'Servo control', 'Raspberry Pi'],
    cad: [
      {
        src: '/models/exoskeleton.glb',
        label: 'Exoskeleton',
        caption: 'Exoskeleton assembly',
        orientation: '0deg -90deg 0deg',
        angles: '200deg 78deg',
      },
    ],
    feature: {
      type: 'video',
      src: '/assets/exo/exo-explained.mp4',
      poster: '/assets/exo/exo-poster.webp',
      caption: 'Explainer video',
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
  { role: 'Social Media Director', org: 'IEEE IEOM MJCET', date: 'Sep 2026 — Present' },
]

// Mirrors the Skills section of the résumé. Icon keys map to logos in components/toolkit.tsx.
export const SKILLS = [
  {
    group: 'CAD & Analysis',
    items: [
      { name: 'SolidWorks (CSWP)', icon: 'solidworks' },
      { name: 'AutoCAD', icon: 'autocad' },
      { name: 'FEA', icon: 'fea' },
    ],
  },
  {
    group: 'Fabrication & Systems',
    items: [
      { name: '3D Printing (PLA/PETG)', icon: 'printing' },
      { name: 'Mechanical Assembly', icon: 'assembly' },
      { name: 'Rapid Prototyping', icon: 'prototyping' },
      { name: 'Linux (Arch)', icon: 'archlinux' },
    ],
  },
  {
    group: 'Beginner level',
    items: [
      { name: 'Ansys Workbench', icon: 'ansys' },
      { name: 'Git', icon: 'git' },
      { name: 'Jetson Nano', icon: 'nvidia' },
      { name: 'RealSense D435', icon: 'intel' },
      { name: 'Raspberry Pi', icon: 'raspberrypi' },
      { name: 'Arduino', icon: 'arduino' },
      { name: 'Servo Control', icon: 'servo' },
      { name: 'CNC', icon: 'cnc' },
    ],
  },
]
