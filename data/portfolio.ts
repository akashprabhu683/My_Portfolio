export interface Project {
  title: string;
  category: string;
  event?: string;
  role?: string;
  description?: string;
  contribution?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  issuer: string;
  year: string;
  fileSize: string;
  pdfUrl: string;
  certificateImage: string;
  featured?: boolean;
  category?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  github: string;
  linkedin: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface AboutDetail {
  label: string;
  value: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akashprabhu.dev";

export interface PortfolioData {
  name: string;
  professionalTitle: string;
  heroIntro: string;
  siteUrl: string;
  photo?: string;
  resumeUrl: string;
  cvUrl: string;
  about: {
    paragraphs: string[];
    details: AboutDetail[];
    photo?: string;
  };
  skillGroups: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  achievements: Achievement[];
  contact: ContactInfo;
}

export const portfolioData: PortfolioData = {
  name: "Akash Prabhu",
  professionalTitle: "Frontend Developer & UI Engineer",
  heroIntro:
    "I build clean, responsive web experiences and enjoy turning ideas into working products. Currently expanding from frontend development into backend systems, with a long-term interest in AI and machine learning.",
  siteUrl: siteUrl,
  photo: "/images/akash-prabhu.jpg",
  resumeUrl: "/documents/Akash_Prabhu_Resume.pdf",
  cvUrl: "/documents/Akash_Prabhu_CV.pdf",
  about: {
    photo: "/images/akash-prabhu.jpg",
    paragraphs: [
      "I'm Akash Prabhu, a Computer Science Engineering student with a strong interest in technology and building practical web applications.",
      "My journey into development started with the frontend, where I learned to build responsive interfaces using HTML, CSS and JavaScript. Along the way, I also developed a workflow around Git and GitHub to manage and share my work.",
      "I'm now expanding beyond the frontend by learning backend technologies such as Python, Node.js, Next.js and databases. Looking ahead, I want to explore how AI and machine learning can be combined with software development to build more useful systems.",
      "For me, learning is most valuable when it leads to building something real—whether that's a personal project, a team project or a hackathon prototype.",
    ],
    details: [
      {
        label: "Status",
        value: "Computer Science Engineering Student",
      },
      {
        label: "Current Focus",
        value: "Web Development & Software Engineering",
      },
      {
        label: "Direction",
        value: "Full Stack → AI/ML",
      },
    ],
  },
  skillGroups: [
    {
      title: "Frontend",
      items: [
        { name: "HTML", iconName: "html" },
        { name: "CSS", iconName: "css" },
        { name: "JavaScript", iconName: "javascript" },
        { name: "TypeScript", iconName: "typescript" },
        { name: "React", iconName: "react" },
        { name: "Next.js", iconName: "nextjs" },
        { name: "Tailwind CSS", iconName: "tailwind" },
      ],
    },
    {
      title: "Development Workflow",
      items: [
        { name: "Git", iconName: "git" },
        { name: "GitHub", iconName: "github" },
        { name: "Vercel", iconName: "vercel" },
        { name: "REST APIs", iconName: "api" },
      ],
    },
    {
      title: "Currently Learning",
      items: [
        { name: "Python", iconName: "python" },
        { name: "Node.js", iconName: "nodejs" },
        { name: "PostgreSQL", iconName: "postgresql" },
        { name: "Databases", iconName: "database" },
      ],
    },
    {
      title: "Future Exploration",
      items: [
        { name: "Artificial Intelligence", iconName: "ai" },
        { name: "Machine Learning", iconName: "ml" },
        { name: "Blockchain", iconName: "blockchain" },
      ],
    },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "TalkEase",
      period: "Jan 2026 — Apr 2026",
      location: "Chennai, India",
      highlights: [
        "Built and maintained production front-end features using React and modern JavaScript in an agile team environment.",
      ],
    },
    {
      role: "Founder & Web Developer",
      company: "Independent Digital Agency",
      period: "2025 — Present",
      location: "Chennai, India",
      highlights: [
        "Designed and shipped custom websites and business systems for preschools, tutoring institutes, and local businesses.",
        "Managed Google Business Profile optimization, social media handling, and digital marketing campaigns for small-business clients.",
        "Led client-facing scoping and pitch strategy, shifting client base toward higher-value verticals.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Colab IDE (Open Source)",
      period: "Jan 2026",
      location: "Remote | 7-member team",
      highlights: [
        "Shipped a production-grade, web-based multi-language collaborative code editor using React 18, Vite, and Tailwind CSS.",
        "Led UI/UX design and built responsive layouts; managed version control, testing, and deployment via GitHub and Vercel.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Jaya Engineering College, Anna University",
      period: "Sept 2024 — Apr 2028",
      location: "Chennai, India",
    },
    {
      degree: "Higher Secondary (10th - 12th)",
      institution: "Grace Park Convent Matriculation Higher Secondary School",
      period: "Jun 2022 — Apr 2024",
      location: "Thiruninravur, Chennai",
    },
  ],
  projects: [
    {
      title: "Privacy Leak Detector",
      category: "Hackathon Project",
      event: "Vynorae 2026",
      description:
        "A privacy-focused application designed to help users identify potentially sensitive information in messages before sharing them.",
      contribution: [
        "Integrated AI functionality",
        "Added deterministic privacy detection models",
        "Implemented regex-based detection",
        "Tested detection models using a test dataset",
        "Integrated the frontend, backend and detection systems",
        "Took responsibility for bringing the separate systems together while a teammate focused on preparing the hackathon pitch",
      ],
      liveUrl: "https://privacy-leak-detector.vercel.app/",
      githubUrl: "https://github.com/akashprabhu683/Privacy-Leak-Detector",
      featured: true,
      image: "/projects/privacy-leak-detector.png",
    },
    {
      title: "Premium Tuition",
      category: "Frontend Project",
      role: "Frontend Development",
      liveUrl: "https://premium-tuition.vercel.app/",
      githubUrl: "https://github.com/akashprabhu683/lee-rep",
      featured: false,
      image: "/projects/premium-tuition.png",
    },
    {
      title: "Fitness Freaks",
      category: "Frontend Project",
      liveUrl: "https://fitness-freaks-swart.vercel.app/",
      githubUrl: "https://github.com/akashprabhu683/gym",
      featured: false,
      image: "/projects/fitness-freaks.png",
    },
  ],
  achievements: [
    {
      title: "DEFY'26",
      detail: "1st Place Winner — DeFi Track",
      issuer: "VIT Chennai (BIC & Student Welfare)",
      year: "2026",
      fileSize: "592 KB",
      category: "Hackathon Award",
      featured: true,
      pdfUrl: "/certificates/defy-26.pdf",
      certificateImage: "/certificates/defy-26.jpg",
    },
    {
      title: "VYNORAE 2026",
      detail: "Certificate of Contribution — 24-Hour Hackathon",
      issuer: "Jaya Engineering College (Lions Club)",
      year: "2026",
      fileSize: "428 KB",
      category: "Hackathon",
      featured: false,
      pdfUrl: "/certificates/vynorae-2026.pdf",
      certificateImage: "/certificates/vynorae-2026.jpg",
    },
    {
      title: "INNOVATIA 4.0 / CODECRAFT'25",
      detail: "Paper Powerhouse Presentation — National Symposium",
      issuer: "Sri Sairam Engineering College (Virtusa & IEEE SMC)",
      year: "2025",
      fileSize: "530 KB",
      category: "Paper Presentation",
      featured: false,
      pdfUrl: "/certificates/innovatia-4.pdf",
      certificateImage: "/certificates/innovatia-4.jpg",
    },
    {
      title: "Arithmetic Olympiad",
      detail: "National Level Assessment — Class Rank 274 • Olympiad Rank 2388",
      issuer: "SMRTS Sunshine Education Academy",
      year: "2019",
      fileSize: "284 KB",
      category: "Academic Assessment",
      featured: false,
      pdfUrl: "/certificates/arithmetic-olympiad.pdf",
      certificateImage: "/certificates/arithmetic-olympiad.jpg",
    },
  ],
  contact: {
    email: "akashprabhu0302@gmail.com",
    phone: "+91 95662 31852",
    location: "Chennai, Tamil Nadu, India",
    github: "https://github.com/akashprabhu683",
    linkedin: "https://www.linkedin.com/in/akash-daniel-prabhu",
  },
};
