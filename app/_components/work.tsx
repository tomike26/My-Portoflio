import Link from "next/link";
import { projects, type Project } from "../_lib/projects";
import { publicFileExists } from "../_lib/public-file";
import { Icon } from "./icon";
import { ProjectImage } from "./project-image";
import { Section } from "./section";
import { TextLink } from "./text-link";

const coverBands = ["band-lavender", "band-navy"] as const;

function Links({ project, href }: { project: Project; href?: string }) {
  const external = [
    { label: "View live", href: project.liveUrl },
    { label: "View code", href: project.codeUrl },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));
  if (!href && external.length === 0) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
      {href && (
        <TextLink href={href} className="font-medium text-accent">
          Read the case study<span className="sr-only">: {project.title}</span>
        </TextLink>
      )}
      {external.map((l) => (
        <TextLink key={l.label} href={l.href} external icon="arrowUpRight" className="font-medium">
          {l.label}
          <span className="sr-only">: {project.title}</span>
        </TextLink>
      ))}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-sm text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, band }: { project: Project; band: (typeof coverBands)[number] }) {
  const href = project.caseStudy ? `/work/${project.slug}` : undefined;
  const hasImage = publicFileExists(project.image);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-raised transition-transform duration-300 hover:-translate-y-1">
      <div className={`${band} relative aspect-[16/10] overflow-hidden`}>
        {hasImage ? (
          <ProjectImage src={project.image} title={project.title} sizes="(min-width: 768px) 560px, 100vw" />
        ) : (
          project.metric && (
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
              <p className="display text-[clamp(2.75rem,5vw,4.25rem)] leading-none text-accent transition-transform duration-500 group-hover:-translate-y-1">
                {project.metric.value}
              </p>
              <p className="mt-3 max-w-[30ch] text-muted">{project.metric.label}</p>
            </div>
          )
        )}
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <p className="text-sm text-muted">{project.category}</p>
        <h3 className="display mt-2 text-2xl leading-tight md:text-[1.75rem]">
          {href ? (
            <Link href={href} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              {project.title}
              <Icon name="arrowUpRight" className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 text-muted">{project.blurb}</p>
        <div className="mt-auto">
          <Tags tags={project.tags} />
          <Links project={project} href={href} />
        </div>
      </div>
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  const href = project.caseStudy ? `/work/${project.slug}` : undefined;
  return (
    <article className="flex h-full flex-col rounded-lg border border-line p-6 transition-colors duration-300 hover:border-accent">
      <p className="text-sm text-muted">{project.category}</p>
      <h3 className="display mt-2 text-xl leading-tight">{project.title}</h3>
      <p className="mt-3 text-[0.95rem] text-muted">{project.blurb}</p>
      <div className="mt-auto">
        <Tags tags={project.tags} />
        <Links project={project} href={href} />
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
      title="Selected work"
      stacked
      className="!bg-navy-deep"
      aside={<p className="text-sm text-muted">{projects.length} projects</p>}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <li key={project.slug} data-reveal style={{ "--d": i } as React.CSSProperties}>
            <FeaturedCard project={project} band={coverBands[i % coverBands.length]} />
          </li>
        ))}
      </ul>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project, i) => (
          <li key={project.slug} data-reveal style={{ "--d": i } as React.CSSProperties}>
            <SmallCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
