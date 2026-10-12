// Projects and case studies. Only confirmed information belongs here.
// To add a missing detail later, fill in the field; empty fields are hidden
// on the live site (and flagged as placeholders during `next dev`).

export type CaseStudy = {
  intro: string;
  meta: { label: string; value: string }[];
  overview?: string;
  requirements?: string;
  role?: string;
  interface?: string;
  architecture?: string;
  data?: string;
  challenges?: string;
  outcomes?: { value: string; label: string }[];
  lessons?: string;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
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
    title: "Scouvela",
    category: "AI and Data Discovery Platform",
    description:
      "Co-built a platform that helps African SMEs discover relevant grants and tenders. Designed a searchable Next.js frontend and integrated data supplied by an Apify Actor.",
    highlights: [
      "Selected among the top 10 teams from more than 500 entries in the She Code Africa BuildHer Hackathon.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Apify"],
    image: "/assets/projects/scouvela.jpg",
    metric: { value: "Top 10", label: "of 500+ entries, She Code Africa BuildHer Hackathon" },
    featured: true,
    caseStudy: {
      intro:
        "A grant and tender discovery platform for African SMEs, built as a team for the She Code Africa BuildHer Hackathon.",
      meta: [
        { label: "My role", value: "Frontend, as part of the team" },
        { label: "Context", value: "She Code Africa BuildHer Hackathon" },
        { label: "Result", value: "Top 10 of 500+ entries" },
      ],
      overview:
        "Scouvela helps African SMEs discover grants and tenders that are relevant to them. It was a team project, built for the She Code Africa BuildHer Hackathon.",
      requirements:
        "The product needed to make grant and tender opportunities searchable for small businesses, using data supplied by an Apify Actor.",
      role: "This was collaborative work. My part was the frontend: I designed the searchable Next.js interface and integrated the data supplied by the Apify Actor.",
      data: "Opportunity data is supplied by an Apify Actor. The Next.js frontend integrates that data and presents it through search.",
      outcomes: [
        { value: "Top 10", label: "Teams selected, She Code Africa BuildHer Hackathon" },
        { value: "500+", label: "Entries in the hackathon" },
      ],
    },
  },
  {
    slug: "sparkpay",
    title: "Enterprise Payroll Platform — Sparkpay",
    category: "Enterprise SaaS",
    description:
      "Built production payroll workflows covering salary processing, PAYE calculations, and statutory deductions for a multi-tenant platform.",
    highlights: [
      "Developed a reusable component library of 40+ components, helping reduce new feature development time by approximately 30%.",
      "Improved Largest Contentful Paint from 3.2 seconds to 1.1 seconds through code-splitting and lazy loading.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest", "React Testing Library"],
    image: "/assets/projects/sparkpay.jpg",
    metric: { value: "3.2s → 1.1s", label: "Largest Contentful Paint" },
    featured: true,
    caseStudy: {
      intro:
        "Production payroll workflows, a shared component library, and performance work on a multi-tenant payroll platform.",
      meta: [
        { label: "My role", value: "Frontend Developer" },
        { label: "Timeline", value: "April 2025 – Present" },
        { label: "Product", value: "Multi-tenant payroll platform" },
      ],
      overview:
        "Sparkpay is a multi-tenant payroll platform. I've worked on its frontend since April 2025, building production features with Next.js and React.",
      requirements:
        "Payroll workflows had to cover salary processing, PAYE calculations, and statutory deductions end to end, in responsive interfaces for a multi-tenant platform.",
      role: "As a Frontend Developer, I deliver payroll features, review pull requests, and helped establish conventions for component architecture and API integration.",
      architecture:
        "I built and shipped a reusable component library of 40+ components with Tailwind CSS and TypeScript. It established centralized design standards and helped reduce new feature development time by about 30%.",
      data: "Part of my work has been establishing conventions for API integration, alongside the component architecture conventions, through pull request reviews.",
      challenges:
        "On the payroll dashboards, I used code-splitting and lazy loading to reduce Largest Contentful Paint from 3.2s to 1.1s, and image optimization to improve Cumulative Layout Shift from 0.15 to 0.05. For critical payroll components, I added unit and integration tests with Jest and React Testing Library, reaching 75% code coverage. I've also identified and resolved production bugs and performance bottlenecks across critical payroll workflows.",
      outcomes: [
        { value: "40+", label: "Components in the shared library" },
        { value: "~30%", label: "Less time to build new features" },
        { value: "3.2s → 1.1s", label: "Largest Contentful Paint, payroll dashboards" },
        { value: "0.15 → 0.05", label: "Cumulative Layout Shift" },
        { value: "75%", label: "Code coverage, critical payroll components" },
      ],
      note: "To respect confidentiality, this case study shows no customer data, company data, or proprietary code.",
    },
  },
  {
    slug: "intel-region",
    title: "Intel Region",
    category: "Contract Frontend Development",
    description:
      "Built reusable React components and custom hooks, integrated REST APIs into data-driven dashboards, and delivered responsive interfaces from design handoff through production.",
    highlights: [
      "Created 15+ reusable components and custom hooks, reducing code duplication by 40%.",
    ],
    // TypeScript not yet confirmed for this project; add it here once it is.
    tags: ["React", "REST APIs", "Responsive CSS"],
    image: "/assets/projects/intel-region.jpg",
    metric: { value: "40%", label: "Less code duplication" },
  },
  {
    slug: "everycity-mission",
    title: "EveryCity Mission",
    category: "Responsive Web Development",
    description:
      "Translated UI designs into accessible, responsive React components and improved performance across devices.",
    highlights: ["Reduced page load time by 18%."],
    tags: ["React", "Tailwind CSS"],
    image: "/assets/projects/everycity-mission.jpg",
    metric: { value: "18%", label: "Faster page loads" },
  },
  {
    slug: "fojo",
    title: "FOJO",
    category: "Web Application Development",
    description:
      "Collaborated with senior developers to build interactive, responsive interfaces using Next.js.",
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
