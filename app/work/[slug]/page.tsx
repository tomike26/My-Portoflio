import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../_components/container";
import { Icon } from "../../_components/icon";
import { ProjectImage } from "../../_components/project-image";
import { RevealObserver } from "../../_components/reveal-observer";
import { SiteFooter } from "../../_components/site-footer";
import { SiteNav } from "../../_components/site-nav";
import { Spotlight } from "../../_components/spotlight";
import { publicFileExists } from "../../_lib/public-file";
import { caseStudies, getCaseStudy, type CaseStudy } from "../../_lib/projects";

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
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[50rem] overflow-hidden">
        <div className="aurora"><span /><span /><span /></div>
        <div className="dots absolute inset-0" />
      </div>
      <SiteNav />
      <main id="main" tabIndex={-1} className="relative outline-none">
        <article>
          <header id="top" className="pt-32 pb-16 md:pt-44 md:pb-20">
            <Container>
              <Link
                href="/#work"
                className="intro group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-muted transition-colors hover:border-text hover:text-text"
              >
                <Icon name="arrowLeft" className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to selected work
              </Link>

              <p
                className="intro mt-14 font-mono text-xs tracking-[0.18em] text-blue uppercase"
                style={{ "--d": 1 } as React.CSSProperties}
              >
                Case study · {project.category}
              </p>
              <h1
                className="intro mt-5 max-w-[16ch] text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-balance"
                style={{ "--d": 2 } as React.CSSProperties}
              >
                {project.title}
                <span className="text-blue">.</span>
              </h1>
              <p
                className="intro mt-8 max-w-[48ch] text-xl text-muted md:text-2xl"
                style={{ "--d": 3 } as React.CSSProperties}
              >
                {study.intro}
              </p>

              <dl
                className="intro mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
                style={{ "--d": 4 } as React.CSSProperties}
              >
                {[...study.meta, { label: "Stack", value: project.tags.join(", ") }].map((m) => (
                  <div key={m.label} className="bg-surface p-5">
                    <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{m.label}</dt>
                    <dd className="mt-2">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </header>

          {hasImage && (
            <Container>
              <div data-reveal className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
                <ProjectImage src={project.image} title={project.title} sizes="(min-width: 1200px) 1120px, 100vw" priority />
              </div>
            </Container>
          )}

          <Container className="pb-24 md:pb-32">
            {visible.map((chapter, i) => {
              const value = study[chapter.key];
              return (
                <section
                  key={chapter.key}
                  aria-labelledby={`${chapter.key}-heading`}
                  data-reveal
                  className="grid gap-5 border-t border-line py-12 md:py-14 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-4">
                    <p aria-hidden="true" className="font-mono text-xs text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 id={`${chapter.key}-heading`} className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {chapter.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    {value === undefined ? (
                      <p className="rounded-xl border border-dashed border-line-strong p-4 font-mono text-xs text-muted">
                        Development only: nothing here yet. Add <code>{chapter.key}</code> to the {project.slug} case
                        study in app/_lib/projects.ts. This note never appears on the live site.
                      </p>
                    ) : Array.isArray(value) ? (
                      <dl className="grid gap-4 sm:grid-cols-2">
                        {value.map((o) => (
                          <div key={o.label} className="spotlight flex flex-col rounded-2xl card border border-line p-6">
                            <dt className="order-2 mt-3 text-[0.95rem] text-muted">{o.label}</dt>
                            <dd className="order-1 text-[2.25rem] leading-none font-semibold tracking-[-0.04em] text-blue">
                              {o.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <p className="max-w-[64ch] text-lg leading-[1.75] text-muted">{value}</p>
                    )}
                  </div>
                </section>
              );
            })}

            {study.note && <p className="border-t border-line pt-6 font-mono text-xs text-muted">{study.note}</p>}

            <nav aria-label="More work" className="mt-20 grid gap-4 sm:grid-cols-2">
              <Link
                href="/#work"
                className="spotlight group rounded-2xl card border border-line p-6 transition-colors hover:border-line-strong"
              >
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                  <Icon name="arrowLeft" className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  Back
                </span>
                <span className="mt-3 block text-xl font-semibold tracking-[-0.02em]">All selected work</span>
              </Link>
              {next.slug !== project.slug && (
                <Link
                  href={`/work/${next.slug}`}
                  className="spotlight group rounded-2xl border border-blue/40 bg-blue/10 p-6 transition-colors hover:border-blue sm:text-right"
                >
                  <span className="flex items-center gap-2 font-mono text-xs text-blue sm:justify-end">
                    Next case study
                    <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-3 block text-xl font-semibold tracking-[-0.02em]">{next.title}</span>
                </Link>
              )}
            </nav>
          </Container>
        </article>
      </main>
      <SiteFooter />
      <RevealObserver />
      <Spotlight />
    </>
  );
}
