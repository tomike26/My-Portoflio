import Link from "next/link";
import { projects, type Project } from "../_lib/projects";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon } from "./icon";
import { ProjectImage } from "./project-image";

// A real capture of a live site, framed as a browser window.
function BrowserPreview({ project }: { project: Project }) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : "";
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-navy-deep shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="flex-1 truncate rounded-full bg-raised px-3 py-1 text-center text-xs text-muted">{host}</span>
      </div>
      <div className="relative aspect-[1440/690]">
        <ProjectImage src={project.image} title={project.title} sizes="(min-width: 1024px) 1100px, 100vw" />
      </div>
    </div>
  );
}

// Typographic cover for work that can't be shown (private products).
function TypeCover({ project, tall }: { project: Project; tall: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line bg-navy-deep ${tall ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -right-1/4 size-[80%] bg-[radial-gradient(closest-side,rgb(159_224_193/0.28),transparent)] transition-transform duration-700 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1/3 -left-1/4 size-[70%] bg-[radial-gradient(closest-side,rgb(159_224_193/0.2),transparent)]"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
        {project.chips && (
          <ul className="mb-auto flex flex-wrap gap-2" aria-label="Features">
            {project.chips.map((c) => (
              <li key={c} className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-text">
                {c}
              </li>
            ))}
          </ul>
        )}
        <p className="display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1] text-accent">{project.cover.value}</p>
        <p className="mt-2.5 max-w-[34ch] text-muted">{project.cover.label}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  const hasImage = publicFileExists(project.image);
  return (
    <article
      className={`group flex h-full flex-col rounded-3xl border border-line bg-raised p-4 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50 md:p-5 ${wide ? "lg:grid lg:grid-cols-12 lg:items-center lg:gap-8" : ""}`}
    >
      <div className={wide ? "lg:col-span-8" : ""}>
        {hasImage && project.liveUrl ? <BrowserPreview project={project} /> : <TypeCover project={project} tall={wide} />}
      </div>
      <div className={`flex flex-1 flex-col px-3 pt-6 pb-3 md:px-4 ${wide ? "lg:col-span-4 lg:pt-0" : ""}`}>
        <p className="text-sm text-accent">{project.category}</p>
        <h3 className="display mt-2 text-[1.7rem] leading-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:border-accent"
            >
              Visit the site
              <Icon name="arrowUpRight" className="size-4" />
              <span className="sr-only">: {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  // The live site leads; it is the one project with a real screenshot.
  const order = [...projects].sort((a, b) => Number(Boolean(b.liveUrl)) - Number(Boolean(a.liveUrl)));
  const [lead, ...rest] = order;
  return (
    <section id="work" aria-labelledby="work-heading" className="band-navy !bg-navy-deep">
      <Container className="py-24 md:py-32">
        <p className="text-lg text-accent">Selected work</p>
        <h2 id="work-heading" className="display mt-4 max-w-[20ch] text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1.05]">
          Products I&apos;ve built the frontend for.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <ProjectCard project={lead} wide />
          </div>
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} wide={false} />
          ))}
        </div>
      </Container>
    </section>
  );
}
