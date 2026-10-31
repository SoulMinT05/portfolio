export const profile = {
  name: 'Nguyen Minh Tam',
  logo: 'Tam Nguyen',
  title: 'Fullstack Developer',
  tagline:
    'Full Stack Software Engineer with over 1 year of experience building scalable web applications with React.js and Node.js (NestJS), including microservices architecture.',
  email: 'minhtam5111993@gmail.com',
  phone: '+84 857942182',
  linkedin: 'https://linkedin.com/in/tamnguyen0511',
  github: 'https://github.com/soulmint05',
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
    points: [
      'Built reusable ReactJS components and RESTful APIs with NestJS, including microservices for modular web applications.',
      'Implemented similarity-based search and generalized it into a reusable search rule adopted across the project.',
      'Optimized data fetching and queries, cutting response time by around 20–30% and fixing N+1 query issues.',
      'Adopted TanStack Query, added Vietnamese/English support with react-i18next, and maintained an education management system serving ~4,000 users.',
    ],
  },
  {
    company: 'FPT Software',
    role: 'Fullstack Developer',
    period: 'Apr 2025 – Oct 2025',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Implemented responsive UI components with ReactJS and Tailwind CSS for internal platform features.',
      'Built 20+ RESTful APIs with ExpressJS and integrated them with frontend components.',
      'Explored microservice architecture, Docker and Apache Kafka through a small e-commerce project.',
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
      'React + Redux frontend and a full RESTful API backend, with JWT and Firebase OAuth authentication.',
      'Real-time chat and notifications with Socket.IO, plus an admin dashboard for products, orders, users and vouchers.',
      'Cut API response time by around 30–40% with Redis caching.',
      'Containerized and deployed with Docker & Docker Compose.',
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
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const
