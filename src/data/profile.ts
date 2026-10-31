export const profile = {
  name: 'Nguyen Minh Tam',
  logo: 'Tam Nguyen',
  title: 'Fullstack Developer',
  tagline:
    'Full Stack Software Engineer with over 1 year of experience building scalable, maintainable web applications, including microservices architecture.',
  email: 'minhtam5111993@gmail.com',
  phone: '+84 857942182',
  linkedin: 'https://linkedin.com/in/tamnguyen0511',
  github: 'https://github.com/soulmint05',
  // Formspree form endpoint. Public by design (it appears in the page's network requests either way).
  formEndpoint: 'https://formspree.io/f/mpppywgp',
  cvUrl: '/Nguyen_Minh_Tam_Fullstack.pdf',
  cvFileName: 'Nguyen_Minh_Tam_Fullstack.pdf',
  summary: [
    "I'm a Full Stack Software Engineer with over 1 year of hands-on experience in full-stack web development, primarily working with React.js and Node.js.",
    "I'm passionate about building scalable and maintainable web applications, with a growing interest in backend architecture and microservices. I'm always eager to learn new technologies and best practices to build reliable applications and deliver better user experiences.",
  ],
}

export const skills = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript'] },
  {
    title: 'Frontend',
    items: ['React.js', 'Zustand', 'Redux', 'React Router', 'TanStack Query', 'Shadcn UI', 'Tailwind CSS'],
  },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Nest.js'] },
  { title: 'Architecture', items: ['RESTful API', 'Microservices'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'Tools', items: ['Docker', 'Git', 'GitHub', 'GitLab', 'Claude', 'Antigravity', 'Jira', 'Postman'] },
]

export const experience = [
  {
    company: 'TMA Solutions',
    role: 'Fullstack Developer',
    period: 'Dec 2025 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    // Full list from the CV. The card shows the first few and reveals the rest via "See Details".
    points: [
      'Built reusable ReactJS components and integrated them with backend services across multiple features.',
      'Developed RESTful APIs with NestJS and implemented microservices to support scalable and modular web applications.',
      'Implemented similarity-based search to improve search relevance and generalized the approach into a reusable search rule adopted across the project.',
      'Optimized data fetching and database queries, reducing response time by around 20–30% and mitigating performance issues such as N+1 queries.',
      'Adopted TanStack Query for data fetching and server-state management, reducing boilerplate code and improving the maintainability of frontend components.',
      'Implemented multi-language support for Vietnamese and English using react-i18next, enabling a localized experience for Vietnamese customers.',
      'Created responsive and mobile-optimized components with smooth animations and transitions, contributing to an enhanced user experience and professional interface.',
      'Built and maintained an education management system serving approximately 4,000 users.',
      'Collaborated in Agile/Scrum sprints for feature development, debugging, testing, and code reviews, and worked with global BAs to clarify and refine ticket requirements.',
      'Leveraged AI-powered development tools such as Claude and Antigravity to assist with code development, debugging, and refactoring, improving overall development productivity.',
    ],
  },
  {
    company: 'FPT Software',
    role: 'Fullstack Developer',
    period: 'Apr 2025 – Oct 2025',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Implemented responsive UI components with ReactJS and Tailwind CSS for internal platform features.',
      'Built 20+ RESTful APIs with ExpressJS and integrated them with frontend components to support core platform workflows.',
      'Independently developed a small-scale e-commerce project to explore microservice architecture, Docker, and Apache Kafka, gaining hands-on experience with containerization and asynchronous communication.',
      'Participated in daily team sync-ups to provide progress updates, discuss blockers, and align on development tasks.',
    ],
  },
]

export const education = {
  school: 'Can Tho University',
  degree: 'Bachelor of Computer Science',
  period: 'Sep 2021 – Aug 2025',
  location: 'Can Tho, Vietnam',
  notes: ['GPA: 3.74/4.0', '4× 100% Merit Scholarships & Top 3 Student in the major'],
  language: 'IELTS 6.5 – Fluent in reading, intermediate in speaking',
}

export const projects = [
  {
    name: 'RubyStore',
    period: 'Apr 2025 – Sep 2025',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    points: [
      'Built responsive React + Redux frontend and full RESTful API backend.',
      'Implemented authentication & authorization using JWT and Firebase OAuth.',
      'Developed real-time chat & notifications with Socket.IO.',
      'Created admin dashboard for product, order, user, and voucher management.',
      'Significantly reduced API response time (around 30–40%) by applying Redis caching.',
      'Collected large-scale data (16k+ products, 6k+ reviews) using Python for future recommendation features.',
      'Containerized and deployed the system using Docker & Docker Compose.',
    ],
    link: 'https://github.com/SoulMinT05/rubystore',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const
