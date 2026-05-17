export type ProjectCategory = 'featured' | 'academic'

export interface Project {
  id: string
  title: string
  period: string
  category: ProjectCategory
  description: string
  highlights: string[]
  tech: string[]
  links?: { label: string; href: string }[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Miguel P. Rivera',
  shortName: 'Miguel Rivera',
  role: 'IT Student & Web Application Developer',
  specialization: 'Consumer & Enterprise Application Development',
  summary:
    'Detail-oriented Information Technology student specializing in Consumer & Enterprise Application Development, currently upskilling React.js. Experienced in developing responsive and database-driven web applications using HTML, CSS, JavaScript, PHP, and MySQL, with foundational knowledge in UI/UX Design, Software Quality Assurance, Git, and SDLC practices.',
  phones: ['0908 324 9057', '0991 802 5693'],
  emails: ['miguel.rivera@adamson.edu.ph', 'm1gu3l.rivera@gmail.com'],
  github: 'https://github.com/DarkFlask',
  linkedin: '', // e.g. https://linkedin.com/in/your-profile
  resumePdf: '/resume.pdf',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Responsive Web Design'],
  },
  {
    label: 'Backend & Database',
    items: ['PHP', 'MySQL', 'XAMPP'],
  },
  {
    label: 'UI/UX & QA',
    items: ['UI/UX Design', 'Software QA', 'Figma', 'Adobe XD'],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'SDLC'],
  },
]

export const experience = [
  {
    role: 'UI/UX QA Intern',
    company: 'SparkleStar International Corporation',
    period: 'Internship',
    points: [
      'Conducted UI/UX testing and identified usability issues to improve interface quality and user experience.',
      'Collaborated with developers and designers in validating UI implementations and QA workflows.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'theracare',
    title: 'TheraCare — Mental Health Support PWA',
    period: '2025',
    category: 'featured',
    description: 'Group project: modular progressive web app for mental health support with integrated analytics and secure role-based workflows.',
    highlights: [
      '6 integrated mental health modules',
      'Role-based access control',
      'Data visualization with Chart.js',
      'Email automation',
      'XSS protection and input validation',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Chart.js', 'PWA'],
    links: [{ label: 'Live Demo', href: 'https://www.theracareweb.online/landing.php' }],
  },
  {
    id: 'philbox',
    title: 'PhilBox Cargo — Responsive Shipping Website',
    period: '2024–2025',
    category: 'featured',
    description:
      'Personal logistics website with pricing, scheduling, and contact flows—built for responsiveness and accessibility.',
    highlights: [
      'Pricing systems and scheduling',
      'API integrations',
      'Accessibility and UX enhancements',
    ],
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    links: [{ label: 'Live Demo', href: 'https://philboxcargo.com/' }],
  },
  {
    id: 'trackback',
    title: 'TrackBack — Lost & Found System',
    period: 'Academic',
    category: 'academic',
    description: 'Role-based lost-and-found web application for campus use.',
    highlights: ['Role-based authentication', 'Item tracking workflows'],
    tech: ['PHP', 'HTML', 'CSS', 'XAMPP'],
    links: [],
  },
  {
    id: 'ce-lab',
    title: 'CE Lab Reservation Management System',
    period: 'Academic',
    category: 'academic',
    description: 'Reservation system with conflict detection and approval workflows.',
    highlights: [
      'Booking conflict detection',
      'Analytics dashboard',
      'Approval workflows',
    ],
    tech: ['PHP', 'MySQL'],
    links: [],
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  specialization: 'Consumer & Enterprise Application Development',
  school: 'Adamson University',
  period: '2022 – Present',
  graduation: 'Expected Graduation: July 9, 2026',
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date?: string
  /** Path under public/, e.g. /certificates/my-cert.png */
  image?: string
  /** PDF path for industry certs (shown in viewer + thumbnail) */
  pdf?: string
  imageAlt?: string
  verifyUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'capstone-theracare',
    title: 'Best Capstone Project — 2nd Place (TheraCare)',
    issuer: 'Adamson University · College of Computing and Information Technology',
    date: 'March 18, 2026',
    image: '/certificates/capstone-theracare-2nd-place.png',
    imageAlt:
      'Certificate of recognition for TheraCare mental health PWA, 2nd place at the 13th IT&IS Capstone Project Exhibit',
  },
  {
    id: 'sparklestar-internship',
    title: 'Certificate of Completion — On-site Practicum',
    issuer: 'SparkleStar International Corporation · IT Department',
    date: 'February 3 – May 6, 2026 · 486 hours',
    image: '/certificates/sparklestar-internship.png',
    imageAlt: 'SparkleStar International Corporation internship completion certificate for Miguel P. Rivera',
  },
  {
    id: 'certiport-databases-network',
    title: 'Information Technology Specialist – Databases and Network Security',
    issuer: 'Certiport / Pearson',
    pdf: '/certificates/certiport-67164413375.pdf',
    imageAlt: 'Certiport IT Specialist Databases and Network Security certificate',
  },
  {
    id: 'ibm-fundamentals',
    title: 'Information Technology Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Issued July 4, 2025',
    pdf: '/certificates/ibm-fundamentals.pdf',
    imageAlt: 'IBM SkillsBuild Information Technology Fundamentals certificate for Miguel P. Rivera',
  },
]
