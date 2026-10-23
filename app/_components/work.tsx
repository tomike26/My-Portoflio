import { projects, type Project } from "../_lib/projects";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon } from "./icon";
import { ProjectImage } from "./project-image";
import { SectionHeading } from "./section-heading";

// Live work shows a real capture; private products show their headline result.
function Preview({ project }: { project: Project }) {
  if (publicFileExists(project.image)) {
    return (
      <div className="relative aspect-[1440/690] overflow-hidden rounded-[10px] border border-gunmetal">
        <ProjectImage src={project.image} title={project.title} sizes="(min-width: 1024px) 560px, 100vw" />
      </div>
    );
  }
  return (
    <div className="flex aspect-[1440/690] flex-col justify-end rounded-[10px] border border-gunmetal bg-canvas p-6">
      {project.chips && (
        <ul className="mb-auto flex flex-wrap gap-2" aria-label="Main features">
          {project.chips.map((c) => (
            <li key={c} className="rounded-full border border-gunmetal px-3 py-1 text-body-sm text-frost">
              {c}
            </li>
          ))}
        </ul>
      )}
      <p className="display tnum text-heading leading-none">{project.cover.value}</p>
      <p className="mt-2 text-body-sm text-steel">{project.cover.label}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-gunmetal bg-surface p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-periwinkle/40">
      <Preview project={project} />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="text-body-sm text-steel">{project.category}</p>
        <h3 className="mt-1 text-subheading font-medium">{project.title}</h3>
        <p className="mt-2 text-body-sm text-frost">{project.description}</p>
        <p className="mt-4 text-body-sm text-steel">
          <span className="sr-only">Technologies: </span>
          {project.tags.join(", ")}
        </p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-1 text-body-sm font-medium text-periwinkle hover:underline"
          >
            Visit {new URL(project.liveUrl).host}
            <Icon name="arrowUpRight" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function Work() {
  const [first, second, ...rest] = projects;
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-gunmetal">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="work-heading"
          title="Selected work"
          intro="Products I built the frontend for, from my current role back to earlier projects."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div data-reveal>
            <ProjectCard project={first} />
          </div>
          <div data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <ProjectCard project={second} />
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((p, i) => (
            <div key={p.slug} data-reveal style={{ "--d": i } as React.CSSProperties}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
