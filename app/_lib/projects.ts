// Projects and case studies. Only confirmed information belongs here.
// To add a missing detail later, fill in the field; empty fields are hidden
// on the live site (and flagged as placeholders during `next dev`).

// Text chapters take one paragraph, or an array of paragraphs.
export type Prose = string | string[];

export type CaseStudy = {
  intro: string;
  meta: { label: string; value: string }[];
  overview?: Prose;
  requirements?: Prose;
  role?: Prose;
  interface?: Prose;
  architecture?: Prose;
  data?: Prose;
  challenges?: Prose;
  outcomes?: { value: string; label: string }[];
  lessons?: Prose;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  // One or two lines for the project card. The full description is used on case studies.
  blurb: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  // Approved screenshot in /public. Shown only if the file exists;
  // otherwise the card cover shows `metric` in large type.
  image?: string;
  metric?: { value: string; label: string };
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "scouvela",
    blurb: "Grant and tender search for African SMEs, built with a team at a hackathon. I built the Next.js frontend on top of Apify data.",
    title: "Scouvela",
    category: "Hackathon project",
    description:
      "A team project for the She Code Africa BuildHer Hackathon: a platform that helps African SMEs find grants and tenders that fit them. I built the search frontend in Next.js and connected it to data collected by an Apify Actor.",
    highlights: ["We were picked as one of the top 10 teams out of more than 500 entries."],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Apify"],
    image: "/assets/projects/scouvela.jpg",
    metric: { value: "Top 10", label: "of 500+ entries, She Code Africa BuildHer Hackathon" },
    featured: true,
    caseStudy: {
      intro: "A grant and tender search for African SMEs, built with a team during the She Code Africa BuildHer Hackathon.",
      meta: [
        { label: "My part", value: "The frontend" },
        { label: "Event", value: "She Code Africa BuildHer Hackathon" },
        { label: "Result", value: "Top 10 of 500+ entries" },
      ],
      overview:
        "Scouvela helps African SMEs find grants and tenders that are relevant to them. We built it as a team for the She Code Africa BuildHer Hackathon.",
      requirements:
        "The core need was simple to say: small businesses should be able to search for opportunities that fit them, using data collected by an Apify Actor.",
      role: "This was team work, so I won't claim the whole thing. My part was the frontend: I built the search interface in Next.js and connected it to the Apify data.",
      data: "The opportunity data comes from an Apify Actor. The frontend pulls that data in and makes it searchable.",
      outcomes: [
        { value: "Top 10", label: "Teams selected at the hackathon" },
        { value: "500+", label: "Entries in total" },
      ],
    },
  },
  {
    slug: "sparkpay",
    blurb: "Payroll workflows for a multi-tenant platform. I built the shared component library and made the dashboards load much faster.",
    title: "Sparkpay payroll platform",
    category: "My current role",
    description:
      "I work on the frontend of a multi-tenant payroll platform: salary processing, PAYE calculations and statutory deductions. I built the shared component library the team now uses and connect the payroll screens to backend APIs.",
    highlights: ["Brought the payroll dashboards' Largest Contentful Paint down from 3.2s to 1.1s."],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest", "React Testing Library"],
    image: "/assets/projects/sparkpay.jpg",
    metric: { value: "3.2s → 1.1s", label: "Payroll dashboard load (LCP)" },
    featured: true,
    caseStudy: {
      intro: "What I've been working on at Sparkpay since April 2025.",
      meta: [
        { label: "My role", value: "Frontend Developer" },
        { label: "Since", value: "April 2025" },
        { label: "Product", value: "Multi-tenant payroll platform" },
      ],
      overview:
        "Sparkpay is a payroll platform used by multiple businesses (tenants) on the same system. I joined in April 2025 and work on the frontend in Next.js and React.",
      requirements:
        "Payroll has to be right. The features I work on cover salary processing, PAYE calculations and statutory deductions from start to finish, in screens that work on any device.",
      role: "I build payroll features, review pull requests, and helped the team agree on how we structure components and call APIs.",
      architecture:
        "I built a shared library of 40+ components with Tailwind CSS and TypeScript. Instead of rebuilding the same pieces for each feature, we reuse them, which has cut new feature work by about 30%.",
      data: "Most payroll screens are driven by backend data. Along with the component conventions, we agreed on a consistent way to integrate APIs, and I check for it in code review.",
      challenges: [
        "One performance issue I worked on was a dashboard that was taking too long to load. Initially, I thought the problem was mainly the amount of data being displayed, but after investigating, I realized the issue was more than that. Some resources were loading unnecessarily, and parts of the page were doing more work than they needed to.",
        "I worked on improving the loading process through code splitting, lazy loading, and image optimization. I also tested the changes to make sure they improved performance without breaking existing functionality. The result was a reduction in Largest Contentful Paint from 3.2 seconds to 1.1 seconds.",
        "Separately, I wrote unit and integration tests with Jest and React Testing Library for the most critical payroll components, reaching 75% coverage.",
      ],
      outcomes: [
        { value: "40+", label: "Components in the shared library" },
        { value: "~30%", label: "Less time to build new features" },
        { value: "3.2s → 1.1s", label: "Payroll dashboard load (LCP)" },
      ],
      lessons:
        "What humbled me was realizing that a page can look perfectly fine during development and still provide a frustrating experience for users. Since then, I've become more intentional about measuring performance instead of relying on how fast an application feels on my machine.",
      note: "To respect confidentiality, this case study shows no customer data, company data, or proprietary code.",
    },
  },
  {
    slug: "intel-region",
    blurb: "Reusable React components and hooks, and dashboards connected to REST APIs. Cut duplicated code by about 40%.",
    title: "Intel Region",
    category: "Contract",
    description:
      "A contract role where I built reusable React components and custom hooks, connected dashboards to REST APIs, and took UI work from design handoff through to production.",
    highlights: ["The shared components and hooks cut duplicated code by about 40%."],
    // TypeScript not yet confirmed for this project; add it here once it is.
    tags: ["React", "REST APIs", "Responsive CSS"],
    image: "/assets/projects/intel-region.jpg",
  },
  {
    slug: "everycity-mission",
    blurb: "Accessible, responsive React components built from UI designs. Pages load 18% faster.",
    title: "EveryCity Mission",
    category: "Website",
    description:
      "I turned UI designs into accessible, responsive React components and worked on making the pages load faster on every device. Load time dropped by 18%.",
    highlights: [],
    tags: ["React", "Tailwind CSS"],
    image: "/assets/projects/everycity-mission.jpg",
  },
  {
    slug: "fojo",
    blurb: "Interactive, responsive interfaces in Next.js, built alongside senior developers.",
    title: "FOJO",
    category: "Web app",
    description: "I worked with senior developers to build interactive, responsive interfaces in Next.js.",
    highlights: [],
    tags: ["Next.js"],
    image: "/assets/projects/fojo.jpg",
  },
];

export const caseStudies = projects.filter(
  (p): p is Project & { caseStudy: CaseStudy } => Boolean(p.caseStudy),
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((p) => p.slug === slug);
}
