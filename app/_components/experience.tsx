import { experience } from "../_lib/content";
import { Container } from "./container";
import { Emphasize } from "./emphasize";
import { Icon } from "./icon";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="band-navy">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-lg text-accent">Experience</p>
              <h2 id="experience-heading" className="display mt-4 text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1.05]">
                Where I&apos;ve worked.
              </h2>
              <p className="mt-5 max-w-[32ch] text-lg text-muted">Four roles, newest first. Open one for the details.</p>
            </div>
          </div>
          <ol className="relative space-y-5 border-l border-line pl-7 md:pl-9 lg:col-span-8">
            {experience.map((role) => (
              <li key={`${role.company}-${role.dates}`} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute top-9 -left-[calc(1.75rem+6px)] size-[11px] rounded-full md:-left-[calc(2.25rem+6px)] ${role.current ? "bg-accent shadow-[0_0_14px_rgb(159_224_193/0.9)]" : "border border-field bg-bg"}`}
                />
                <details className="expand group rounded-3xl border border-line bg-raised transition-colors duration-300 open:border-accent/50 hover:border-accent/40">
                  <summary className="cursor-pointer p-7 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                      <div className="min-w-0">
                        <h3 className="display text-2xl leading-tight">{role.company}</h3>
                        <p className="mt-1 text-muted">{role.title}</p>
                      </div>
                      <p className="tnum flex items-center gap-2 text-sm text-muted">
                        {role.current && (
                          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-on-accent">Now</span>
                        )}
                        {role.dates}
                      </p>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-6">
                      <p className="max-w-[54ch]">{role.summary}</p>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:bg-accent group-open:text-on-accent">
                        <Icon name="plus" className="size-4 transition-transform duration-300 group-open:rotate-45" />
                        <span className="sr-only">Show details for {role.company}</span>
                      </span>
                    </div>
                  </summary>
                  <div className="border-t border-line px-7 pt-6 pb-7 md:px-8">
                    <ul className="max-w-[64ch] space-y-3 text-muted">
                      {role.details.map((d) => (
                        <li key={d} className="relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-1.5 before:rounded-full before:bg-accent/70">
                          <Emphasize text={d} />
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm text-muted">{role.location}</p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
