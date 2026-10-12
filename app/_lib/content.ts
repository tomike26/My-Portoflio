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
// change the label and tone ("open" shows a lime dot, "busy" a grey one).
export const availability = {
  show: true,
  tone: "open" as "open" | "busy",
  label: "Open to frontend opportunities",
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
  headline: "Building interfaces that scale. Crafting experiences that feel effortless.",
  supporting:
    "I turn complex product requirements into responsive, maintainable, and high-performance web experiences.",
  primaryCta: "View Selected Work",
  secondaryCta: "Get in Touch",
  // Shown in the hero's code card. Facts only, from the sections below.
  card: {
    role: "Frontend Engineer",
    experience: "4+ years",
    stack: ["React", "Next.js", "TypeScript"],
    focus: ["Component architecture", "API integration", "Performance"],
    currently: "Sparkpay",
  },
};

export const about = {
  heading: "A little about how I work.",
  intro: [
    "I'm a Frontend Engineer with 4+ years of experience building responsive, scalable web applications. I work primarily with React, Next.js, and TypeScript, with a focus on reusable component architecture, API integration, and frontend performance.",
    "I enjoy building interfaces that are visually accurate, technically sound, and easy to maintain. Getting the design right matters to me, but so does what happens after launch: how components get reused, how data moves through the app, and how quickly each page loads.",
  ],
  experienceHeading: "Where I've spent most of my time",
  experienceAreas: [
    "Enterprise and multi-tenant applications",
    "Payroll workflows and data-driven dashboards",
    "Reusable components and design systems",
    "REST API integration and application state management",
    "Performance optimization and Core Web Vitals",
    "Testing, debugging, accessibility, and cross-browser compatibility",
  ],
  // `context` notes where each figure comes from, so they aren't read as one
  // project or as external benchmarks.
  highlights: [
    { value: "4+ years", label: "Frontend development experience", context: "Across all roles" },
    { value: "40+ components", label: "Reusable component library delivered", context: "Sparkpay" },
    {
      value: "3.2s → 1.1s",
      label: "Largest Contentful Paint improvement",
      context: "Sparkpay, payroll dashboards",
    },
    {
      value: "75%",
      label: "Test coverage achieved for critical payroll components",
      context: "Sparkpay",
    },
  ],
  highlightsNote: "Figures from my CV.",
};

export const skills = {
  heading: "Skills and tools",
  core: {
    label: "Day to day",
    note: "The stack I use regularly",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  additionalLabel: "Also in my toolkit",
  groups: [
    { label: "Frameworks and state management", items: ["Vue.js", "Redux", "Context API", "Zustand"] },
    { label: "Testing", items: ["Jest", "React Testing Library", "Cypress"] },
    { label: "Tools and workflow", items: ["Vite", "Webpack", "npm", "Git", "GitHub", "Vercel"] },
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
    summary:
      "Payroll workflows, a shared component library, and Core Web Vitals work on a multi-tenant platform.",
    details: [
      "Delivered end-to-end payroll workflows covering salary processing, PAYE calculations, and statutory deductions by building responsive features with Next.js and React for a multi-tenant platform.",
      "Built and shipped a reusable component library (40+ components) with Tailwind CSS and TypeScript, reducing new feature development time by about 30% and establishing centralized design standards.",
      "Optimized Core Web Vitals across payroll dashboards, reducing Largest Contentful Paint from 3.2s to 1.1s through code-splitting and lazy loading, and improving Cumulative Layout Shift from 0.15 to 0.05 through image optimization.",
      "Identified and resolved production bugs and frontend performance bottlenecks across critical payroll workflows.",
      "Strengthened code quality by reviewing pull requests and establishing conventions for component architecture and API integration.",
      "Implemented unit and integration test coverage (Jest, React Testing Library) for critical payroll components, achieving 75% code coverage.",
    ],
  },
  {
    company: "Intel Region",
    title: "Frontend Developer, Contract",
    location: "Nigeria",
    dates: "January 2024 – April 2025",
    summary:
      "Reusable components, custom hooks, and API-driven dashboards, from design handoff to production.",
    details: [
      "Built 15+ reusable React components and custom hooks, reducing code duplication by 40% and cutting feature implementation timelines from 2 weeks to about 5 days.",
      "Integrated REST APIs into data-driven dashboards, turning backend data into actionable interfaces for users.",
      "Delivered pixel-accurate, responsive interfaces, owning UI implementation from design handoff through production across desktop and mobile.",
      "Improved application stability across devices and browsers by diagnosing and resolving frontend performance, compatibility, and rendering issues.",
    ],
  },
  {
    company: "Merkle",
    title: "Salesforce Software Engineer",
    location: "US",
    dates: "July 2022 – November 2023",
    summary: "Salesforce Commerce Cloud storefront work for enterprise clients.",
    details: [
      "Enhanced e-commerce functionality for enterprise clients, including AO Smith, by customizing Salesforce Commerce Cloud storefronts using SFRA.",
      "Extended platform capabilities by engineering custom controllers, pipelines, and scripts for tailored commerce workflows.",
      "Supported enterprise releases for international clients across the software development lifecycle, collaborating with distributed teams and meeting quality and compliance standards.",
    ],
  },
  {
    company: "Dufuna (Cotta-Cush)",
    title: "Frontend Developer",
    location: "Lagos",
    dates: "May 2022 – June 2022",
    summary: "Complete web applications built from reusable components and integrated APIs.",
    details: [
      "Delivered complete web applications by building reusable interface components and integrating APIs.",
    ],
  },
  {
    company: "REACH Africa",
    title: "Intern",
    location: "Lagos",
    dates: "February 2021 – April 2022",
    summary: "Client website interfaces in Vue.js, production fixes, and accessibility work.",
    details: [
      "Built and maintained client website interfaces using Vue.js.",
      "Debugged and resolved 20+ production issues across client websites and collaborated with senior developers on accessibility fixes, improving mobile usability scores by 35%.",
    ],
  },
];

export const approach = {
  heading: "Beyond the interface.",
  intro:
    "Styling a page is the visible part. Most of the work that keeps a product healthy happens underneath.",
  themes: [
    {
      title: "Architecture",
      summary: "Reusable components, custom hooks, and maintainable code.",
      body: "I build components and hooks to be reused, not rewritten. At Sparkpay that meant a shared library of 40+ components and agreed conventions for component architecture and API integration.",
    },
    {
      title: "Performance",
      summary: "Code-splitting, lazy loading, and Core Web Vitals.",
      body: "I treat speed as part of the interface. Code-splitting and lazy loading took Largest Contentful Paint on payroll dashboards from 3.2s to 1.1s, and image optimization brought layout shift from 0.15 to 0.05.",
    },
    {
      title: "Integration",
      summary: "API-driven interfaces, application state, and multi-tenant workflows.",
      body: "Most of my work is API-driven: turning REST endpoints into dashboards and workflows, managing application state, and handling the extra care that multi-tenant products need.",
    },
    {
      title: "Quality",
      summary: "Automated tests, accessibility, and production debugging.",
      body: "Unit and integration tests with Jest and React Testing Library, careful pull request reviews, and fixing production, accessibility, and cross-browser issues when they come up.",
    },
  ],
};

export const contact = {
  heading: "Let's build something useful.",
  supporting:
    "I'm open to interesting frontend opportunities, collaborations, and projects where thoughtful engineering and good design matter.",
};
