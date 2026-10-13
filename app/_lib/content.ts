// Site copy. Edit text here; components only handle presentation.

export const profile = {
  name: "Tomike Kolajo",
  firstName: "Tomike",
  lastName: "Kolajo",
  monogram: "TK",
  role: "Frontend Engineer",
  email: "kolajoelizabeth@gmail.com",
  // Hero portrait in /public. Remove the file to fall back to the code card.
  photo: "/assets/tomike.jpg",
  photoAlt: "Portrait of Tomike Kolajo",
};

// Availability indicator in the hero. Set `show: false` to hide it, or
// change the label and tone ("open" shows a blue dot, "busy" a grey one).
export const availability = {
  show: true,
  tone: "open" as "open" | "busy",
  label: "Open to frontend roles",
};

export const links = {
  github: { label: "GitHub", display: "github.com/tomike26", href: "https://github.com/tomike26" },
  linkedin: {
    label: "LinkedIn",
    display: "linkedin.com/in/tomikekolajo",
    href: "https://linkedin.com/in/tomikekolajo",
  },
  email: {
    label: "Email",
    display: "kolajoelizabeth@gmail.com",
    href: "mailto:kolajoelizabeth@gmail.com",
  },
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "approach", label: "Approach" },
] as const;

export const hero = {
  headline: "Building products people can actually use.",
  // Word in the headline set in italic.
  italic: "actually",
  supporting:
    "I build web applications with React, Next.js and TypeScript, from responsive interfaces to dashboards and features that connect to APIs.",
  primaryCta: "View Selected Work",
  secondaryCta: "Get in Touch",
  // Shown in the hero's code card. Facts only, from the sections below.
  card: {
    role: "Frontend Engineer",
    experience: "4+ years",
    stack: ["React", "Next.js", "TypeScript"],
    focus: ["Components", "APIs", "Performance"],
    currently: "Sparkpay",
  },
};

export const about = {
  heading: "A little about how I work.",
  lead: "I've been building web applications for over four years, mostly with React, Next.js and TypeScript. Right now I'm at Sparkpay, working on the frontend of a multi-tenant payroll platform.",
  day: "Day to day, that means reusable components, connecting screens to backend APIs, reviewing pull requests and fixing the bugs that only show up in production.",
  quote:
    "A dashboard that felt fine on my machine was slow for the people using it. Since then, I measure performance instead of trusting how fast something feels.",
  experienceHeading: "What I mostly work on",
  experienceAreas: [
    "Multi-tenant products for businesses",
    "Payroll workflows and dashboards",
    "Shared component libraries",
    "Connecting interfaces to REST APIs",
    "Page speed and Core Web Vitals",
    "Tests, bug fixes and accessibility",
  ],
  // `context` notes where each figure comes from, so they aren't read as one
  // project or as external benchmarks.
  highlights: [
    { value: "4+ years", label: "Building frontends", context: "Across all roles" },
    { value: "40+", label: "Components in the shared library I built", context: "Sparkpay" },
    { value: "3.2s → 1.1s", label: "Payroll dashboard load (LCP)", context: "Sparkpay" },
  ],
  highlightsNote: "Figures from my CV.",
};

export const skills = {
  heading: "Skills and tools",
  core: {
    label: "What I use most days",
    note: "The core of my work",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  additionalLabel: "Also used",
  groups: [
    { label: "Frameworks and state", items: ["Vue.js", "Redux", "Context API", "Zustand"] },
    { label: "Testing", items: ["Jest", "React Testing Library", "Cypress"] },
    { label: "Tools", items: ["Vite", "Webpack", "npm", "Git", "GitHub", "Vercel"] },
  ],
};

export type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  current?: boolean;
  summary: string;
  details: string[];
};

export const experience: Role[] = [
  {
    company: "Sparkpay",
    title: "Frontend Developer",
    location: "Nigeria",
    dates: "April 2025 – Present",
    current: true,
    summary: "Frontend for a multi-tenant payroll platform.",
    details: [
      "I build payroll features in Next.js and React, covering salary processing, PAYE calculations and statutory deductions from start to finish.",
      "I built a shared library of 40+ components with Tailwind CSS and TypeScript. New features now take about 30% less time, and the team works from one shared set of design standards.",
      "I brought Largest Contentful Paint on the payroll dashboards down from 3.2s to 1.1s with code splitting and lazy loading, and layout shift from 0.15 to 0.05 with image optimization.",
      "I track down and fix production bugs and slow spots in the payroll workflows people rely on most.",
      "I review pull requests and helped agree team conventions for how we structure components and call APIs.",
      "I wrote unit and integration tests with Jest and React Testing Library for the most critical payroll components, reaching 75% coverage.",
    ],
  },
  {
    company: "Intel Region",
    title: "Frontend Developer, Contract",
    location: "Nigeria",
    dates: "January 2024 – April 2025",
    summary: "Reusable React components and API-driven dashboards.",
    details: [
      "I built 15+ reusable React components and custom hooks. That cut duplicated code by about 40%, and features that used to take 2 weeks took about 5 days.",
      "I connected dashboards to REST APIs so people could actually act on the backend data.",
      "I took UI work from design handoff to production, matching the designs closely on desktop and mobile.",
      "I fixed performance, compatibility and rendering issues that made the app unstable on some devices and browsers.",
    ],
  },
  {
    company: "Merkle",
    title: "Salesforce Software Engineer",
    location: "US",
    dates: "July 2022 – November 2023",
    summary: "Salesforce Commerce Cloud storefronts for enterprise clients.",
    details: [
      "I customized Salesforce Commerce Cloud storefronts (SFRA) for enterprise clients, including AO Smith.",
      "I wrote custom controllers, pipelines and scripts for client-specific shopping flows.",
      "I supported releases for international clients with distributed teams, from development through to launch.",
    ],
  },
  {
    company: "Dufuna (Cotta-Cush)",
    title: "Frontend Developer",
    location: "Lagos",
    dates: "May 2022 – June 2022",
    summary: "Short role building complete web applications.",
    details: ["I built complete web applications, writing reusable interface components and connecting them to APIs."],
  },
  {
    company: "REACH Africa",
    title: "Intern",
    location: "Lagos",
    dates: "February 2021 – April 2022",
    summary: "Where I started: client websites in Vue.js.",
    details: [
      "I built and maintained client website interfaces in Vue.js.",
      "I fixed 20+ production issues across client sites and worked with senior developers on accessibility fixes that improved mobile usability scores by 35%.",
    ],
  },
];

export const approach = {
  heading: "Beyond the interface.",
  intro: "A few things I care about that don't show up in a screenshot.",
  themes: [
    {
      title: "Build it once",
      body: "I'd rather build a component or hook once and use it everywhere than copy it into five places. At Sparkpay that grew into a shared library of 40+ components.",
    },
    {
      title: "Measure, don't guess",
      body: "How fast a page feels on my laptop isn't how it feels for users. I check real numbers, then fix what's actually slow.",
    },
    {
      title: "Connect it properly",
      body: "Most of what I build runs on backend data, so a big part of my work is connecting interfaces to REST APIs and keeping application state predictable.",
    },
    {
      title: "Leave it working",
      body: "I write tests for the parts people depend on most, and I take production bugs, accessibility and cross-browser issues seriously.",
    },
  ],
};

export const contact = {
  heading: "Let's build something useful.",
  supporting:
    "I'm open to frontend roles, contract work and collaborations. Email is the quickest way to reach me.",
};
