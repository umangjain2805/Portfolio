export const nav = [
  ["home", "Home", "I"],
  ["about", "About", "II"],
  ["experience", "Experience", "III"],
  ["work", "Work", "IV"],
  ["skills", "Skills", "V"],
  ["proof", "Problem solving", "VI"],
  ["contact", "Contact", "VII"],
] as const;
export type Project = {
  name: string;
  subtitle: string;
  status: string[];
  description: string;
  detail: string;
  group: string;
  features: string[];
  planned: string;
  tech: string[];
  infrastructure?: string;
  image?: string;
  links: { label: string; url: string }[];
};
export const content = {
  name: "Umang Jain",
  monogram: "UJ",
  title: "Full-Stack Developer",
  year: "2026",
  location: "Indore, Madhya Pradesh, India",
  email: "umangjain2805@gmail.com",
  sectionsLabel: "Sections",
  description:
    "I'm an Information Technology student at SGSITS, Indore. I build websites and the systems behind them, and explore how AI can help solve practical problems.",
  resume: { enabled: true, url: "/resume.pdf", label: "View Resume" },
  ui: {
    skip: "Skip to content",
    menu: "Open menu",
    closeMenu: "Close menu",
    close: "Close details",
    skipIntro: "Skip introduction",
    open: "Open details",
    copy: "Copy email",
    copied: "Copied",
    copyFailed: "Please copy the email address below.",
    external: "opens in a new tab",
    scroll: "Scroll to explore",
    view: "View",
    openCursor: "Open",
    navigate: "Navigate",
    elsewhere: "Elsewhere",
    contact: "Contact",
    back: "Back to top",
    media: "Project media",
    implemented: "Implemented",
    planned: "Planned",
    current: "Current work and foundation",
    expansion: "Planned expansion",
    infrastructure: "Planned infrastructure",
    visit: "Visit website",
    education: "Education",
    leadership: "Leadership & activities",
    tech: "Technology",
    total: "0003",
    count: "03",
    features: "Features",
  },
  hero: {
    eyebrow: "Hi, I'm Umang Jain",
    before: "I build web apps that make",
    accent: "everyday tasks",
    after: "easier.",
    work: "View My Work",
    contact: "Get in Touch",
    callouts: ["Full-stack developer", "SGSITS · Indore", "Scroll to explore"],
  },
  about: {
    eyebrow: "About",
    title: "Turning ideas into things people can",
    accent: "use",
    paragraphs: [
      "I enjoy turning ideas into things people can use. My work covers both what users see on a website and the systems running behind it.",
      "I have contributed to the official SGSITS website and worked on the frontend of Prashikshan AI, an interview preparation platform. My projects explore business management, temporary file sharing, and AI-assisted dispute resolution.",
      "I care about clear interfaces, organized code, and understanding how an application works from start to finish. Alongside development, I practice data structures and algorithms to strengthen my problem-solving skills.",
    ],
    facts: [
      ["Role", "Full-Stack Developer"],
      ["Base", "Indore, Madhya Pradesh, India"],
      ["Studying", "B.Tech, Information Technology"],
      ["Institute", "SGSITS, Indore"],
      ["Graduating", "June 2028 (expected)"],
    ],
    portrait: null as string | null,
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've",
    accent: "worked",
    roles: [
      {
        role: "Frontend Developer Intern",
        name: "Prashikshan AI",
        org: "Sarthi Initiative, SGSITS, Indore",
        dates: "15 Feb 2026 – 15 Apr 2026",
        summary:
          "Worked on the frontend of an AI-powered platform that helps users prepare for interviews through practice questions and personalized preparation content.",
        bullets: [
          "Developed responsive, interactive interfaces using React.",
          "Built reusable components for sign-in, interview setup, and practice sessions.",
          "Connected the interface to backend APIs for account and interview workflows.",
          "Added state management and error handling to support those workflows.",
        ],
        tech: ["React", "FastAPI", "REST APIs", "JWT", "PostgreSQL"],
        url: "",
        badge: "",
      },
      {
        role: "Web Developer",
        name: "Official SGSITS Website",
        org: "Shri Govindram Seksaria Institute of Technology and Science, Indore",
        dates: "",
        summary:
          "Contributed to the development and improvement of my institute's official website as part of a collaborative development effort.",
        bullets: [
          "Helped develop new website modules and add features for institutional needs.",
          "Improved existing functionality and usability.",
          "Worked with the development team to maintain and extend website components.",
        ],
        tech: [],
        url: "https://www.sgsits.ac.in/",
        badge:
          "Recognised — received a letter recognizing technical contributions",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Projects",
    previous: "Previous project",
    next: "Next project",
    projects: [
      {
        name: "CRM Platform",
        subtitle: "Business Management and Automation",
        status: ["Freelance project", "Ongoing development"],
        description:
          "A business management platform designed to bring customer details, sales follow-ups, team access, and billing into one workspace.",
        detail:
          "Small businesses often manage customer information, follow-ups, and payments across different tools. I'm working on a platform that brings these activities together. Each business has its own workspace, data, and team permissions.",
        group: "current",
        features: [
          "Separate business workspaces and database rules to keep company data apart.",
          "Account authentication and permissions for different team members.",
          "Subscription billing and invoice management.",
          "Modular backend APIs and database models.",
          "A demo for exploring customer tracking and sales workflows.",
        ],
        planned:
          "Broader customer management, WhatsApp automation, employee management, and connected business workflows are being developed in phases.",
        tech: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Fastify",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "BullMQ",
          "Docker",
          "pnpm",
          "Turborepo",
        ],
        links: [],
      },
      {
        name: "TrustZero",
        subtitle: "AI-Assisted Dispute Resolution",
        status: ["Demo project", "Simulated payments"],
        description:
          "A demo that uses AI to review evidence from buyers and sellers, explain a dispute decision, and send uncertain cases to a human administrator.",
        detail:
          "TrustZero explores what happens when a buyer and seller disagree about delivered work. It simulates holding a payment until the agreement is completed. When a dispute is raised, AI reviews the evidence and considers both sides. A rule-based check determines whether the system acts on the decision or requests human review.",
        group: "features",
        features: [
          "Separate accounts for buyers, sellers, and administrators.",
          "Simulated wallets, payment holding, releases, and refunds.",
          "Evidence submission and AI-assisted review.",
          "A live view of the review process and its reasoning.",
          "A recorded history of financial actions and decisions.",
        ],
        planned: "Real payment integration is planned.",
        tech: [
          "Java",
          "Spring Boot",
          "React",
          "Vite",
          "Tailwind CSS",
          "PostgreSQL",
          "Spring Security",
          "Fireworks AI",
        ],
        links: [],
      },
      {
        name: "SnapShare",
        subtitle: "Temporary File and Code Sharing",
        status: ["In development"],
        description:
          "A project in development for sharing files and code through links with passwords, expiration times, and limited access.",
        detail:
          "Sometimes a file only needs to be shared briefly. SnapShare is being developed to give users more control over how long a link remains available and how it can be used.",
        group: "implemented",
        features: [
          "Account registration, sign-in, and sign-out.",
          "A dashboard accessible after signing in.",
          "Responsive React interfaces and shared input validation.",
          "Password hashing, cookie-based sessions, and login rate limits.",
          "API security middleware, structured logs, and account-flow tests.",
        ],
        planned:
          "File uploads, code snippet sharing, password-protected links, expiration controls, one-time claims, notifications, and automatic storage cleanup.",
        tech: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "Zod",
        ],
        infrastructure: "AWS S3 and Redis/BullMQ workers (planned).",
        links: [],
      },
    ] as Project[],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tools I",
    accent: "work",
    after: "with",
    groups: [
      ["Languages", ["C/C++", "Java", "JavaScript", "TypeScript", "SQL"]],
      ["Frontend", ["React", "Next.js", "Tailwind CSS", "Redux Toolkit"]],
      ["Backend", ["Node.js", "Express", "REST APIs", "JWT", "Zod"]],
      ["Databases", ["MongoDB", "PostgreSQL", "Prisma"]],
      ["Tools", ["Git", "GitHub", "Docker", "Postman", "Redis"]],
      [
        "Fundamentals",
        [
          "Data Structures and Algorithms",
          "OOP",
          "DBMS",
          "Operating Systems",
          "Computer Networks",
        ],
      ],
    ] as [string, string[]][],
  },
  proof: {
    eyebrow: "Problem solving",
    title: "Practice,",
    accent: "daily",
    intro:
      "I practice problem solving to improve how I break down problems, compare approaches, and write efficient code.",
    stats: [
      {
        value: 400,
        suffix: "+",
        caption: "Data structures & algorithms problems solved on LeetCode",
      },
      { value: 2, suffix: "★", caption: "CodeChef rating 1400+" },
      { value: 31494, suffix: "", caption: "All India Rank, JEE Main 2024" },
    ],
    note: "Figures as reported on my resume.",
    education: {
      name: "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
      degree: "B.Tech in Information Technology",
      place: "Indore, Madhya Pradesh",
      dates: "September 2024 – June 2028 (expected)",
      description:
        "Studying Information Technology while building full-stack projects and strengthening my understanding of software development and computer science.",
    },
    activities: [
      {
        title: "Head of Marketing — HackIndore 4.0",
        description:
          "Core member of Club HashInclude. Led promotions, outreach, and branding activities to encourage participation in the event.",
      },
      {
        title: "Member — BIS Club, SGSITS",
        description:
          "Participate in collaborative initiatives and club activities.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    accent: "useful.",
    description:
      "Have a project in mind or an opportunity to share? I'd love to hear about it.",
    cta: "Say Hello",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/umangjain2805",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/umang-jain-1647a6335/",
        icon: "linkedin",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/umang0528/",
        icon: "leetcode",
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/users/umang0528",
        icon: "codechef",
      },
    ],
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/umang-jain-1647a6335/",
    },
    { name: "GitHub", url: "https://github.com/umangjain2805" },
  ],
  footer: "Umang Jain — Building useful things. Learning along the way.",
  metadata: { title: "Umang Jain — Full-Stack Developer" },
};
