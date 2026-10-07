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
      span?: 'wide' | 'tall' | 'big'
      position?: string
    }

export type CadModel = {
  /** Path under /public, e.g. '/models/sae-baja.glb'. Run `pnpm models:optimize` first. */
  src: string
  label: string
  caption: string
  /** Optional starting camera, model-viewer `camera-orbit` syntax. */
  orbit?: string
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
  bullets: string[]
  tags: string[]
  badge?: string
  stats?: { value: string; label: string }[]
  link?: { href: string; label: string }
  cad?: CadModel[]
  media?: MediaItem[]
}

export const EXPERIENCE: Entry[] = [
  {
    id: 'robocon',
    kicker: 'ABU Robocon',
    title: 'Team Robocon MJCET',
    role: 'Mechanical Head',
    roleNote: 'Promoted from Design Engineer → Senior Design Engineer',
    period: 'Nov 2024 — Present',
    location: 'MJCET, Hyderabad',
    summary:
      'Leading the mechanical team behind the ABU Robocon robots, taking mechanisms from first sketch through CAD, prototyping, fabrication and assembly, and onto the competition field.',
    bullets: [
      'Lead the mechanical team for the ABU Robocon robot, from design and prototyping to fabrication and assembly.',
      'Design robot mechanisms for kinematics, strength, weight and reliability, iterating through testing.',
      'Produce 3D CAD models and drawings; coordinate integration with the electrical and programming teams.',
    ],
    tags: ['Mechanism design', 'SolidWorks', 'Prototyping', 'Fabrication', 'Integration'],
    cad: [
      {
        src: '/models/robocon-r1.glb',
        label: 'R1 · Robocon 2026',
        caption: 'Full R1 robot assembly with twin vertical lifts and manipulator',
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
        poster: '/assets/cad-01.jpeg',
        caption: 'R1 prototype testing, open demonstration',
        span: 'big',
      },
      {
        type: 'image',
        src: '/assets/cad-01.jpeg',
        alt: 'CAD render of the R1 robot with dual vertical lift columns over the competition field',
        caption: 'R1 · CAD assembly',
      },
      {
        type: 'image',
        src: '/assets/cad-02.jpeg',
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
    summary:
      'Designing parts and assemblies for the team’s all-terrain SAE BAJA vehicle, where every decision trades weight against reliability and what the shop can actually build.',
    bullets: [
      'Design parts and assemblies in CAD for the team’s off-road vehicle.',
      'Work on subsystem design and integration, balancing weight, reliability and what can be fabricated.',
      'Work with the manufacturing and testing teams to revise designs; help with fabrication, assembly and testing.',
    ],
    tags: ['Vehicle design', 'Roll cage', 'Subsystems', 'DFM', 'Testing'],
    cad: [
      {
        src: '/models/sae-baja.glb',
        label: 'BAJA vehicle',
        caption: 'Roll cage with engine and drivetrain packaging',
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
  {
    id: 'asphalt',
    kicker: 'IKR Go-Kart 2025',
    title: 'Team Asphalt MJCET',
    period: '2025',
    location: 'Indian Karting Race',
    badge: 'AIR 10',
    summary:
      'Hands-on automotive engineering in a performance-focused team. The team finished All India Rank 10 at the Indian Karting Race 2025.',
    bullets: [],
    tags: ['Automotive', 'Competition', 'Fabrication', 'Teamwork'],
    media: [
      {
        type: 'image',
        src: '/assets/kart-01.jpeg',
        alt: 'Side profile of the number 12 go-kart parked outdoors on wet pavement',
        caption: 'Kart overview',
        span: 'wide',
      },
      {
        type: 'image',
        src: '/assets/award-ceremony.jpeg',
        alt: 'Receiving a certificate and memento at the SAE MJCET Summit 2025 award ceremony',
        caption: 'SAE MJCET Summit 2025 · Recognition',
        position: 'center 20%',
      },
      {
        type: 'image',
        src: '/assets/team.jpeg',
        alt: 'Team Asphalt crew and mentors around the flame-liveried go-kart',
        caption: 'Team Asphalt crew',
      },
    ],
  },
  {
    id: 'jntuh',
    kicker: 'Internship',
    title: 'JNTU Hyderabad',
    role: 'EV Design, Development & Manufacturing Intern',
    period: 'Jul — Aug 2026',
    location: 'Hybrid',
    summary:
      'Hybrid internship covering EV architecture, battery packs, battery management systems (BMS), charging systems, MATLAB/Simulink and EV digital twins.',
    bullets: [
      'Studied EV architecture, battery packs, BMS and charging systems.',
      'Worked with MATLAB/Simulink and EV digital twins.',
      'Attended industry visits and expert sessions on EV development and manufacturing.',
    ],
    tags: ['EV architecture', 'BMS', 'MATLAB/Simulink', 'Digital twins'],
  },
]

export const PROJECTS: Entry[] = [
  {
    id: 'safl',
    kicker: 'Institution-funded R&D',
    title: 'S.A.F.L.',
    role: 'Smart Agri Four-Legged Bot · Undergraduate Researcher',
    period: 'Nov 2025 — Present',
    summary:
      'A semi-autonomous agricultural quadruped for precision farming: automated weed detection and in-situ soil monitoring on a reinforced steel chassis with articulated legs.',
    bullets: [
      'Mechanical design of the quadruped: 3D CAD assemblies, reinforced steel chassis and articulated legs.',
      'FEA in SolidWorks on critical components; structure validated to a minimum safety factor of 2.04.',
      'Designed mechanical interfaces for actuators, soil sensing, cameras and the onboard computer; assisted with Jetson Nano edge AI.',
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
      label: 'Engineering documentation',
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
    role: 'R&D project',
    period: 'Nov 2025 — Present',
    summary:
      'A wearable assist system that reduces strain and fatigue in manual tasks, using a rope-driven assist built from Dyneema cable, high-torque servos and 3D-printed parts.',
    bullets: [
      'Mechanical integration and assembly of the rope-driven assist (Dyneema cable, high-torque servos, 3D-printed parts).',
      'Servo control from a headless Raspberry Pi with a Bus Servo Driver HAT.',
    ],
    tags: ['Wearables', '3D printing', 'Servo control', 'Raspberry Pi'],
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
  { role: 'Mechanical Head', org: 'Team Robocon MJCET', date: 'Nov 2024 — Present' },
]

export const SKILLS = [
  {
    group: 'CAD & Analysis',
    items: ['SolidWorks (CSWP)', 'AutoCAD', 'FEA'],
  },
  {
    group: 'Fabrication & Systems',
    items: ['3D printing (PLA/PETG)', 'Mechanical assembly', 'Rapid prototyping', 'Linux (Arch)'],
  },
  {
    group: 'Getting started with',
    items: [
      'Ansys Workbench',
      'Git',
      'Jetson Nano',
      'RealSense D435',
      'Raspberry Pi',
      'Arduino',
      'Servo control',
      'CNC',
    ],
  },
]
