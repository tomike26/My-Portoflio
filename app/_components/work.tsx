import Link from "next/link";
import { publicFileExists } from "../_lib/public-file";
import { projects, type Project } from "../_lib/projects";
import { Icon } from "./icon";
import { ProjectImage } from "./project-image";
import { Section } from "./section";
import { TextLink } from "./text-link";

// Card cover: the approved screenshot if there is one, otherwise the
// project's headline figure set large. No mock UI.
function Cover({ project, featured }: { project: Project; featured: boolean }) {
  const hasImage = publicFileExists(project.image);
  return (
    <div
      className={`relative overflow-hidden border-b border-line bg-surface-2 ${featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:border-r lg:border-b-0" : "aspect-[16/9]"}`}
    >
      {hasImage ? (
        <ProjectImage
          src={project.image}
          title={project.title}
          sizes={featured ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div aria-hidden="true" className="dots absolute inset-0 opacity-70" />
          <div
            aria-hidden="true"
            className="absolute -top-1/3 right-0 size-[70%] rounded-full bg-[radial-gradient(closest-side,rgb(79_139_255/0.35),transparent)] transition-opacity duration-700 group-hover:opacity-100 opacity-60"
          />
          {project.metric ? (
            <div className="relative">
              <p
                className={`font-semibold tracking-[-0.05em] text-blue transition-transform duration-700 group-hover:-translate-y-1 ${featured ? "text-[clamp(3rem,6vw,5rem)]" : "text-5xl"} leading-none`}
              >
                {project.metric.value}
              </p>
              <p className="mt-3 max-w-[32ch] text-sm text-muted">{project.metric.label}</p>
            </div>
          ) : (
            <p aria-hidden="true" className="relative text-6xl leading-none font-semibold tracking-[-0.05em] text-line-strong">
              {project.title}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const href = project.caseStudy ? `/work/${project.slug}` : undefined;
  const external = [
    { label: "View live", href: project.liveUrl },
    { label: "View code", href: project.codeUrl },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <article
      className={`spotlight group flex h-full flex-col overflow-hidden rounded-3xl card border border-line transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-line-strong ${featured ? "lg:grid lg:grid-cols-2" : ""}`}
    >
      <Cover project={project} featured={featured} />
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${featured ? "lg:p-10" : ""}`}>
        <div className="flex items-center justify-between gap-4 font-mono text-xs">
          <span className="text-blue">{project.category}</span>
          <span aria-hidden="true" className="text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3
          className={`mt-4 font-semibold tracking-[-0.04em] text-balance ${featured ? "text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05]" : "text-2xl leading-tight"}`}
        >
          {href ? (
            <Link href={href} className="transition-colors duration-300 hover:text-blue">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-4 text-muted">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-blue" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-8">
          {project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {(href || external.length > 0) && (
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
              {href && (
                <Link
                  href={href}
                  className="group/cta inline-flex items-center gap-2 text-sm font-medium text-blue"
                >
                  Read the case study<span className="sr-only">: {project.title}</span>
                  <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
              )}
              {external.map((l) => (
                <TextLink key={l.label} href={l.href} external icon="arrowUpRight" className="text-sm">
                  {l.label}
                  <span className="sr-only">: {project.title}</span>
                </TextLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section
      id="work"
      number="03"
      label="Selected work"
      title="Things I've"
      muted="helped build."
    >
      <ul className="space-y-5">
        {featured.map((project) => (
          <li key={project.slug} data-reveal>
            <ProjectCard project={project} index={projects.indexOf(project)} featured />
          </li>
        ))}
      </ul>
      <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project, i) => (
          <li key={project.slug} data-reveal style={{ "--d": i } as React.CSSProperties}>
            <ProjectCard project={project} index={projects.indexOf(project)} featured={false} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
