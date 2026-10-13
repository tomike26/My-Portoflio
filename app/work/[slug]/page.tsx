import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../_components/container";
import { Icon } from "../../_components/icon";
import { ProjectImage } from "../../_components/project-image";
import { RevealObserver } from "../../_components/reveal-observer";
import { SiteFooter } from "../../_components/site-footer";
import { SiteNav } from "../../_components/site-nav";
import { publicFileExists } from "../../_lib/public-file";
import { caseStudies, getCaseStudy, type CaseStudy, type Prose } from "../../_lib/projects";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  if (!project) return {};
  return { title: `${project.title} case study`, description: project.caseStudy.intro };
}

// Chapters in reading order. Chapters without confirmed content are hidden
// in production; during `next dev` they show a reminder to fill them in.
const chapters: { key: Exclude<keyof CaseStudy, "intro" | "meta" | "note">; title: string }[] = [
  { key: "overview", title: "Overview" },
  { key: "requirements", title: "The problem and requirements" },
  { key: "role", title: "My role" },
  { key: "interface", title: "Interface and functionality decisions" },
  { key: "architecture", title: "Component architecture" },
  { key: "data", title: "API integration and data handling" },
  { key: "challenges", title: "Performance and testing" },
  { key: "outcomes", title: "Outcomes" },
  { key: "lessons", title: "Lessons learned" },
];

const isDev = process.env.NODE_ENV === "development";

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();
  const study = project.caseStudy;

  const visible = chapters.filter((c) => study[c.key] !== undefined || isDev);
  const index = caseStudies.indexOf(project);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const hasImage = publicFileExists(project.image);

  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1} className="band-navy outline-none">
        <article>
          <header id="top" className="band-lavender">
            <Container className="pt-32 pb-16 md:pt-40 md:pb-20">
              <Link href="/#work" className="intro link-group group inline-flex items-center gap-2 text-sm text-muted hover:text-text">
                <Icon name="arrowLeft" className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                <span className="link pb-0.5">Selected work</span>
              </Link>
              <p className="intro mt-14 text-sm text-muted" style={{ "--d": 1 } as React.CSSProperties}>
                Case study · {project.category}
              </p>
              <h1
                className="intro display mt-3 max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-balance"
                style={{ "--d": 2 } as React.CSSProperties}
              >
                {project.title}
              </h1>
              <p className="intro mt-8 max-w-[46ch] text-xl text-muted md:text-2xl" style={{ "--d": 3 } as React.CSSProperties}>
                {study.intro}
              </p>
              <dl
                className="intro mt-14 grid gap-x-10 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4"
                style={{ "--d": 4 } as React.CSSProperties}
              >
                {[...study.meta, { label: "Stack", value: project.tags.join(", ") }].map((m) => (
                  <div key={m.label}>
                    <dt className="text-sm text-muted">{m.label}</dt>
                    <dd className="mt-1">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </header>

          {hasImage && (
            <Container className="pt-16">
              <div data-reveal className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-raised">
                <ProjectImage src={project.image} title={project.title} sizes="(min-width: 1200px) 1120px, 100vw" priority />
              </div>
            </Container>
          )}

          <Container className="py-20 md:py-28">
            {visible.map((chapter) => {
              const value = study[chapter.key];
              return (
                <section
                  key={chapter.key}
                  aria-labelledby={`${chapter.key}-heading`}
                  data-reveal
                  className="grid gap-5 border-t border-line py-12 lg:grid-cols-12 lg:gap-10"
                >
                  <h2 id={`${chapter.key}-heading`} className="display text-2xl leading-tight lg:col-span-4">
                    {chapter.title}
                  </h2>
                  <div className="lg:col-span-7 lg:col-start-6">
                    {value === undefined ? (
                      <p className="border-l-2 border-dashed border-field pl-4 text-sm text-muted">
                        Development only: nothing here yet. Add <code>{chapter.key}</code> to the {project.slug} case
                        study in app/_lib/projects.ts. This note never appears on the live site.
                      </p>
                    ) : chapter.key === "outcomes" ? (
                      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                        {(value as NonNullable<CaseStudy["outcomes"]>).map((o) => (
                          <div key={o.label} className="flex flex-col border-t border-text/80 pt-4">
                            <dt className="order-2 mt-2 text-muted">{o.label}</dt>
                            <dd className="display order-1 text-[2.25rem] leading-none">{o.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <div className="max-w-[62ch] space-y-5 text-lg leading-[1.75] text-muted">
                        {([] as string[]).concat(value as Prose).map((para) => (
                          <p key={para}>{para}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}

            {study.note && <p className="border-t border-line pt-6 text-sm text-muted italic">{study.note}</p>}

            <nav aria-label="More work" className="mt-20 grid gap-10 border-t border-text/80 pt-10 sm:grid-cols-2">
              <Link href="/#work" className="link-group group">
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Icon name="arrowLeft" className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  Back
                </span>
                <span className="display mt-2 block text-[2rem] leading-tight">
                  <span className="link">All selected work</span>
                </span>
              </Link>
              {next.slug !== project.slug && (
                <Link href={`/work/${next.slug}`} className="link-group group sm:text-right">
                  <span className="flex items-center gap-2 text-sm text-muted sm:justify-end">
                    Next case study
                    <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  <span className="display mt-2 block text-[2rem] leading-tight transition-colors group-hover:text-accent">
                    <span className="link">{next.title}</span>
                  </span>
                </Link>
              )}
            </nav>
          </Container>
        </article>
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
