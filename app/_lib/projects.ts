// Projects shown on the page. Only confirmed information belongs here.

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
  // otherwise the card cover shows `cover` in large type.
  image?: string;
  cover: { value: string; label: string };
  // Optional feature names shown as chips on the cover.
  chips?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nansi-credit-controller",
    title: "Nansi Credit Controller",
    category: "Dufuna, current role",
    description:
      "A multi-tenant SaaS platform for invoicing, expense management and accounts receivable automation. I build and maintain the invoicing, expense and bank reconciliation features in React and TypeScript.",
    highlights: [],
    tags: ["React", "TypeScript", "Axios", "Keycloak", "Mono"],
    image: "/assets/projects/nansi-credit-controller.jpg",
    cover: { value: "Bank reconciliation", label: "Matching imported bank transactions to invoices and expenses" },
    chips: ["Invoicing", "Expenses", "Bank reconciliation"],
    featured: true,
  },
  {
    slug: "everlasting-hills",
    title: "Everlasting Hills Church Platform",
    category: "Project, 2026",
    description:
      "Frontend features for a church management platform: membership, attendance, home cells, visitor follow-up, events, courses, reading plans and online giving.",
    highlights: [],
    tags: ["Paystack", "NestJS APIs", "Framer Motion"],
    liveUrl: "https://everlastinghills.church",
    image: "/assets/projects/everlasting-hills.jpg",
    cover: { value: "Live site", label: "everlastinghills.church, June – October 2026" },
    featured: true,
  },
  {
    slug: "sparkpay",
    title: "Sparkpay payroll platform",
    category: "Sparkpay, 2022 – 2025",
    description:
      "The frontend of a multi-tenant payroll platform: salary processing, PAYE calculations and statutory deductions. I built the shared component library the team used and made the payroll dashboard much faster.",
    highlights: [],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest"],
    image: "/assets/projects/sparkpay.jpg",
    cover: { value: "3.2s → 1.1s", label: "Payroll dashboard Largest Contentful Paint" },
  },
  {
    slug: "scouvela",
    title: "Scouvela",
    category: "Hackathon, September 2026",
    description:
      "A team project for the She Code Africa BuildHer Hackathon: a platform that helps African SMEs find grants and tenders. I built the searchable Next.js frontend that pulls data from an Apify Actor.",
    highlights: [],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Apify"],
    image: "/assets/projects/scouvela.jpg",
    cover: { value: "Top 10", label: "of 500+ entries, She Code Africa BuildHer Hackathon" },
  },
  {
    slug: "everycity-mission",
    title: "EveryCity Mission",
    category: "Website",
    description:
      "I turned UI designs into accessible, responsive React components and improved performance across devices, cutting page load time by 18%.",
    highlights: [],
    tags: ["React", "Tailwind CSS"],
    image: "/assets/projects/everycity-mission.jpg",
    cover: { value: "18%", label: "Faster page loads" },
  },
];
