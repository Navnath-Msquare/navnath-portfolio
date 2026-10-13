import resumePdf from '../assets/NavnathResume.pdf';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  url?: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'IoT / Systems';
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon?: string }[];
}

export const personalInfo = {
  name: "Navnath Bandgar",
  role: "Full Stack Developer",
  tagline: "Building Modern, Scalable Web Experiences",
  location: "Pune, Maharashtra, India",
  email: "navnathbandgar7481@gmail.com",
  phone: "+91 9175730171",
  displayPhone: "+91 9175730171",
  availability: "Available for Full Stack Opportunities",
  resumePath: resumePdf,
  resumeFilename: "Navnath_Bandgar_Resume.pdf",
  bio: "B.Tech Computer Science graduate with hands-on industry experience in Full Stack and Frontend Development. Expert in engineering responsive, user-centric web applications using React.js, Next.js, Angular, TypeScript, PHP, and MySQL. Passionate about blending clean code architecture with creative, intuitive user interfaces and seamless cloud deployments.",
  initials: "NB",
  // Social URLs
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/navnath-b-8a5aba241/",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building fast, reactive, and responsive interfaces with modern component architectures",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Developing robust RESTful APIs, business logic, and database schemas",
    skills: [
      { name: "PHP" },
      { name: "MySQL" },
      { name: "REST API Development" },
      { name: "API Integration" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    description: "Managing deployments, version control, and visual design tooling",
    skills: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Plesk Server" },
      { name: "Canva Design" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "msquare",
    role: "Full Stack Developer",
    company: "MSquare Software Pvt. Ltd.",
    companyUrl: "https://msquaresoftware.com",
    period: "April 2026 – Present (Join Date: 03/04/2026)",
    location: "Pune, India",
    type: "Full-time",
    description: [
      "Developed dynamic, scalable web applications using React.js, Angular, and Tailwind CSS.",
      "Engineered full-stack features, handled complex REST API integrations, and resolved critical UI/UX bugs.",
      "Delivered multiple production-ready React and Angular client projects with responsive, mobile-first interfaces.",
      "Configured and managed project deployments on Plesk Server with continuous production maintenance.",
      "Utilized Git and GitHub for branch management, code reviews, and structured version control.",
    ],
    skills: ["React.js", "Angular", "Tailwind CSS", "API Integration", "Plesk", "Git", "GitHub"],
  },
  {
    id: "ohana",
    role: "Frontend Developer",
    company: "Ohana Technologies",
    companyUrl: "https://ohanatechnologies.in",
    period: "August 2025 – 2026 (Join Date: 08/2025)",
    location: "Pune, India",
    type: "Full-time",
    description: [
      "Developed and maintained high-performance web applications using React.js, Next.js, and Tailwind CSS.",
      "Architected interactive user interfaces focused on fluid page navigation and optimal Core Web Vitals.",
      "Created digital brand assets, social media promotional collateral, and animated promo videos using Canva.",
      "Managed cloud asset hosting and deployments using AWS (EC2, S3), with Git for version tracking.",
    ],
    skills: ["React.js", "Next.js", "Tailwind CSS", "AWS EC2", "AWS S3", "Canva", "Git"],
  },
  {
    id: "convivial",
    role: "Full Stack Developer Intern",
    company: "Convivial Software",
    companyUrl: "https://www.convivialsoftware.com",
    period: "January 2025 – July 2025",
    location: "Pune, India",
    type: "Internship (6 Months)",
    description: [
      "Completed intensive 6-month full-stack development internship building websites with SQL, PHP, Express.js, React, and Node.js.",
      "Developed REST APIs and engineered role-based access control (RBAC) and authentication workflows.",
      "Designed visual brand collateral, logos, and marketing infographics to amplify digital identity.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "PHP", "MySQL", "REST APIs", "Brand Design"],
  },
];

export const projects: Project[] = [
  {
    id: "msquare-platform",
    title: "MSquare Software",
    tagline: "Software Company Web Platform & Digital Presence",
    description:
      "Official corporate website and software service platform. Contributed to responsive web application development, custom UI components, REST API integration, bug troubleshooting, and production deployment on Plesk Server.",
    url: "https://msquaresoftware.com/",
    technologies: ["React.js", "Angular", "Tailwind CSS", "REST API", "Plesk"],
    category: "Full Stack",
    featured: true,
    highlights: [
      "Production deployment and Plesk server configuration",
      "Modular UI components with high responsiveness",
      "Seamless API data flow and bug fixes",
    ],
  },
  {
    id: "welearn-india",
    title: "WeLearn India",
    tagline: "Study Abroad LMS & Online Counselling Platform",
    description:
      "Comprehensive education and global counselling portal. Designed and maintained responsive learning management workflows, interactive dashboards for courses and batches, counselling appointment booking with Role-Based Access Control (RBAC), and secure payment gateway checkout.",
    url: "https://welearnindia.com/en",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Payment Gateway", "RBAC"],
    category: "Full Stack",
    featured: true,
    highlights: [
      "Interactive course & batch dashboards with RBAC",
      "Online counselling booking and scheduling flow",
      "Integrated secure payment checkout with optimized loading",
    ],
  },
  {
    id: "pralekh",
    title: "Pralekh",
    tagline: "Digital Legal & Documentation Services Platform",
    description:
      "Modern digital documentation services platform providing streamlined service workflows, accessible legal documentation guidelines, intuitive client interfaces, and mobile-friendly layouts.",
    url: "https://pralekh.co.in/",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
    category: "Frontend",
    featured: true,
    highlights: [
      "Clean, modern documentation workflow UI",
      "Fully responsive navigation across mobile and desktop",
      "Fast, lightweight component structure",
    ],
  },
  {
    id: "karobooking",
    title: "KaroBooking",
    tagline: "Online Travel & Bus Booking Platform",
    description:
      "Online travel reservation portal engineered for smooth bus ticket bookings, route inquiries, and schedule discovery. Focused on responsive layout styling, interactive form workflows, and fluid mobile UX.",
    url: "https://karobooking.com/",
    technologies: ["React.js", "Tailwind CSS", "REST API Integration", "UI/UX"],
    category: "Frontend",
    featured: true,
    highlights: [
      "User-friendly booking search and selection interfaces",
      "Responsive cards for travel schedules and seat selection",
      "Cross-browser tested and touch-friendly mobile controls",
    ],
  },
  {
    id: "mysocietysuite-app",
    title: "MySocietySuite Portal",
    tagline: "Society, Security Guard & Billing Web Application",
    description:
      "Enterprise society management application portal featuring security guard checkpoint management, resident directory, maintenance billing workflows, visitor check-in, and role-based administrative dashboards.",
    url: "https://application.mysocietysuite.com/",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "RBAC", "Billing System"],
    category: "Full Stack",
    featured: true,
    highlights: [
      "Security guard gatekeeper & visitor management modules",
      "Automated maintenance billing and resident ledger workflows",
      "High-performance role-based access dashboard",
    ],
  },
  {
    id: "mysocietysuite-web",
    title: "MySocietySuite Website",
    tagline: "Official Society Management Platform Website",
    description:
      "Commercial marketing and service platform for MySocietySuite. Showcases community management capabilities, gatekeeper security modules, accounting automations, resident app features, and client demo onboarding.",
    url: "https://mysocietysuite.com/",
    technologies: ["React.js", "Tailwind CSS", "Responsive UI", "REST API", "Cloud Hosting"],
    category: "Frontend",
    featured: true,
    highlights: [
      "Modern, responsive product showcase & feature catalog",
      "Cross-device optimized onboarding and inquiry workflows",
      "Smooth UI with high Core Web Vitals",
    ],
  },
  {
    id: "chem-sep",
    title: "ChemSepT Engineering",
    tagline: "Turnkey Industrial Process & Separation Technology Platform",
    description:
      "Full-featured web platform for ChemSepT Engineering Pvt. Ltd., leaders in separation technology. Features comprehensive equipment catalog (reactors, evaporators, distillation columns), 3D plant modeling showcase, engineering calculation sheets, and multi-tier service workflows.",
    url: "https://chem-sep-t.vercel.app/",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Turbopack"],
    category: "Full Stack",
    featured: true,
    highlights: [
      "Industrial product catalog for reactors, evaporators & columns",
      "Interactive calculation sheets and 3D plant engineering showcase",
      "Ultra-fast Next.js architecture with modern responsive UI",
    ],
  },
  {
    id: "remembering-me",
    title: "Remembering Me Foundation",
    tagline: "Official Non-Profit Foundation Web Presence",
    description:
      "Designed and developed the official foundation website to highlight social initiatives, facilitate donor and community engagement, and share impact stories. Built with mobile-first responsiveness, React, Tailwind CSS, and custom visual assets designed in Canva.",
    // No URL as instructed (do not invent fake URL)
    technologies: ["React.js", "Tailwind CSS", "Canva", "Responsive UI"],
    category: "Frontend",
    featured: false,
    highlights: [
      "Community engagement showcase and initiative archives",
      "High-contrast, accessible layouts with Canva visuals",
      "Optimized rendering and fast mobile page speeds",
    ],
  },
  {
    id: "saferoads",
    title: "Saferoads Intelliguard",
    tagline: "IoT-Based Road Safety System & Accident Detection Dashboard",
    description:
      "Engineered an innovative IoT-based road safety platform featuring a real-time monitoring dashboard for rapid accident detection, emergency notification workflows, and telemetry data visualization.",
    // No URL as instructed (do not invent fake URL)
    technologies: ["IoT Integration", "Real-Time Dashboard", "JavaScript", "React.js"],
    category: "IoT / Systems",
    featured: false,
    highlights: [
      "Real-time sensor event monitoring and dashboard telemetry",
      "Automated alert triggering logic for rapid accident notification",
      "Data visualization for incident logs and location mapping",
    ],
  },
];

export const educationList: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Bharati Vidyapeeth College of Engineering, Kolhapur",
    period: "07/2020 – 05/2024 (Graduated 2024)",
    location: "Kolhapur, India",
    score: "CGPA: 7.5",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jath High School and Junior College, Jath",
    period: "07/2019 – 03/2020",
    location: "Jat, India",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Janta Vidyamandir, Ajivli, Panvel",
    period: "07/2017 – 04/2018",
    location: "Panvel, India",
  },
];
