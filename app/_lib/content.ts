// Site copy, aligned with the CV. Edit text here; components only handle presentation.

export const profile = {
  name: "Tomike Kolajo",
  firstName: "Tomike",
  lastName: "Kolajo",
  monogram: "TK",
  role: "Frontend Engineer",
  email: "kolajoelizabeth@gmail.com",
  phone: { display: "+234 810 682 7158", href: "tel:+2348106827158" },
  // Hero portrait in /public.
  photo: "/assets/tomike.jpg",
  photoAlt: "Portrait of Tomike Kolajo",
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
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;

export const hero = {
  greeting: "Hi, I'm",
  title: "Frontend Engineer",
  supporting:
    "I build fast, easy-to-maintain web apps with React, Next.js and TypeScript, most recently for invoicing, payroll and bank reconciliation.",
  primaryCta: "See my work",
  // Tools under the hero, all from the CV.
  stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Axios", "Jest", "Cypress", "Vercel"],
};


export const about = {
  heading: "About me",
  // Lit word by word as it scrolls into view.
  statement:
    "I build reusable component libraries, connect interfaces to REST APIs and make pages faster. Right now I'm at Dufuna, building Nansi Credit Controller, a multi-tenant platform for invoicing, expenses and accounts receivable.",
  body: "I've been building web applications for over four years and I work closely with backend, design and product teams. When integration turns up a backend problem, I write it up with a reproducible case and work with the backend engineers until it's fixed.",
  principles: [
    {
      title: "Build it once",
      body: "I'd rather build a component or hook once and reuse it than copy it into five places. At Sparkpay that grew into a shared library of 40+ components.",
    },
    {
      title: "Measure, don't guess",
      body: "A dashboard that felt fine on my machine was slow for the people using it. Now I check real numbers, then fix what's actually slow.",
    },
    {
      title: "Handle every state",
      body: "Most of what I build runs on backend data, so each screen gets proper loading, error and empty states, not just the happy path.",
    },
  ],
};

export const skills = {
  heading: "Skills and tools",
  groups: [
    { label: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
    { label: "Frontend", items: ["React", "Next.js", "Vue.js", "React Router"] },
    { label: "State management", items: ["Redux", "Redux Toolkit", "Zustand", "Context API"] },
    { label: "Styling", items: ["Tailwind CSS", "Framer Motion"] },
    { label: "API integration", items: ["REST APIs", "Axios", "NestJS APIs", "Paystack"] },
    { label: "Testing", items: ["Jest", "React Testing Library", "Cypress"] },
    { label: "Tools and deployment", items: ["Git", "Vite", "Webpack", "npm", "Vercel"] },
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
    company: "Dufuna",
    title: "Frontend Developer",
    location: "Remote",
    dates: "October 2025 – Present",
    current: true,
    summary: "Nansi Credit Controller, a multi-tenant SaaS platform for invoicing, expenses and accounts receivable.",
    details: [
      "I build and maintain invoicing features (creation, templates, sending and payment tracking) and employee expense management (submission, approval and reimbursement).",
      "I built the bank reconciliation module, which matches imported bank transactions to invoices and expenses. It has suggested-match review, manual picker modals, CSV export and pagination for high-volume statements, with transactions coming from live bank sync through Mono or manual statement upload with AI-based extraction.",
      "I build React and TypeScript interfaces on a Keycloak-authenticated, domain-scoped multi-tenant setup, using a shared Axios API layer across a large codebase.",
      "I find and report backend defects during integration, such as data-matching bugs and extraction pipeline failures, with reproducible test cases, and work with backend engineers to get them fixed.",
      "I work with Git feature branches and pull requests, merging regularly alongside several other branches in progress.",
    ],
  },
  {
    company: "Sparkpay",
    title: "Frontend Developer",
    location: "Nigeria",
    dates: "November 2022 – October 2025",
    summary: "Payroll workflows and a shared component library for a multi-tenant payroll platform.",
    details: [
      "I built end-to-end payroll workflows with React and Next.js, covering salary processing, PAYE calculations and statutory deductions.",
      "I built a reusable library of 40+ components in TypeScript and Tailwind CSS. It cut the time needed for new features by about 30% and set shared design standards.",
      "I brought the payroll dashboard's Largest Contentful Paint down from 3.2s to 1.1s with code splitting and lazy loading.",
      "I fixed production bugs, reviewed pull requests and set conventions for component structure and API integration.",
      "I wrote unit and integration tests with Jest and React Testing Library for critical payroll components.",
    ],
  },
  {
    company: "Intel Region",
    title: "Frontend Developer, Contract",
    location: "Nigeria",
    dates: "January 2024 – April 2025",
    summary: "Reusable React components and hooks, and dashboards connected to REST APIs.",
    details: [
      "I built 15+ reusable React components and custom hooks, reducing code duplication and making the application easier to maintain.",
      "I integrated REST APIs into data-driven dashboards, connecting backend services to interactive interfaces.",
      "I turned UI designs into pixel-accurate, responsive React interfaces, from design handoff through production on desktop and mobile.",
      "I diagnosed and fixed frontend performance issues, rendering bugs and cross-browser problems.",
      "I refactored repetitive UI logic into reusable components and hooks, and worked with designers and backend developers to deliver features that matched product requirements.",
    ],
  },
  {
    company: "Merkle",
    title: "Salesforce Software Engineer, Contract",
    location: "US",
    dates: "July 2022 – November 2023",
    summary: "Salesforce Commerce Cloud storefronts for enterprise clients.",
    details: [
      "I customized Salesforce Commerce Cloud storefronts with SFRA for enterprise clients, including AO Smith.",
      "I wrote custom controllers, pipelines and scripts for client-specific commerce workflows.",
      "I worked with distributed engineering teams on enterprise releases, covering development, debugging and delivery.",
    ],
  },
];

export const education: {
  heading: string;
  items: { title: string; detail?: string; dates?: string }[];
} = {
  heading: "Education and training",
  items: [
    { title: "B.Sc.", detail: "Federal University of Agriculture, Abeokuta, Ogun State", dates: "2014 – 2021" },
    { title: "Self-taught Frontend Developer" },
    { title: "Frontend Development Bootcamp", detail: "Dufuna" },
    { title: "Certified Salesforce Developer" },
  ],
};


export const contact = {
  heading: "Let's build something useful.",
  supporting:
    "I'm open to frontend roles, contract work and collaborations. Email is the quickest way to reach me.",
};
