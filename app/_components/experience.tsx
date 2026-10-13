import { experience } from "../_lib/content";
import { Emphasize } from "./emphasize";
import { Icon } from "./icon";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Newest first. Open any role for the details."
      band="band-lavender"
      sticky
    >
      <ol className="relative space-y-4 border-l border-line pl-6 md:pl-8">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.dates}`} data-reveal style={{ "--d": i } as React.CSSProperties} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-8 -left-[calc(1.5rem+5px)] size-[9px] rounded-full md:-left-[calc(2rem+5px)] ${role.current ? "bg-accent" : "border border-field bg-bg"}`}
            />
            <details className="expand group rounded-lg bg-raised">
              <summary className="cursor-pointer p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="min-w-0">
                    <h3 className="display text-xl leading-tight transition-colors group-hover:text-accent md:text-2xl">
                      {role.company}
                    </h3>
                    <p className="mt-1 text-muted">{role.title}</p>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-muted">
                    {role.current && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-on-accent">Current</span>
                    )}
                    {role.dates}
                  </p>
                </div>
                <div className="mt-4 flex items-end justify-between gap-6">
                  <p className="max-w-[54ch]">{role.summary}</p>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent">
                    <span className="group-open:hidden">Details</span>
                    <span className="hidden group-open:inline">Close</span>
                    <Icon name="chevronDown" className="size-4 transition-transform duration-300 group-open:rotate-180" />
                    <span className="sr-only">for {role.company}</span>
                  </span>
                </div>
              </summary>
              <div className="border-t border-line px-6 pt-5 pb-6 md:px-7">
                <ul className="max-w-[64ch] space-y-2.5 text-muted">
                  {role.details.map((d) => (
                    <li key={d} className="relative pl-5 before:absolute before:left-0 before:content-['–']">
                      <Emphasize text={d} />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">{role.location}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </Section>
  );
}
