import { experience } from "../_lib/content";
import { Emphasize } from "./emphasize";
import { Icon } from "./icon";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" number="04" label="Experience" title="Experience" muted="at a glance.">
      <ol className="relative ml-1.5 border-l border-line md:ml-[14rem]">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.dates}`} data-reveal style={{ "--d": i } as React.CSSProperties} className="relative pb-10 pl-8 last:pb-0 md:pl-10">
            <span
              aria-hidden="true"
              className={`absolute top-2 -left-[5px] size-[9px] rounded-full ${role.current ? "live bg-blue shadow-[0_0_14px_rgb(79_139_255/0.9)]" : "border border-line-strong bg-bg"}`}
            />
            <p className="font-mono text-xs text-muted md:absolute md:top-1.5 md:right-[calc(100%+2.5rem)] md:w-48 md:text-right md:whitespace-nowrap">
              {role.dates}
            </p>
            <details className="expand group mt-2 md:mt-0">
              <summary className="spotlight -mx-4 cursor-pointer rounded-2xl border border-transparent px-4 py-3 transition-colors duration-300 hover:border-line hover:bg-surface group-open:border-line group-open:bg-surface">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">
                      {role.title}
                      <span className="text-blue"> · {role.company}</span>
                    </h3>
                    <p className="mt-1.5 text-muted">{role.summary}</p>
                  </div>
                  <span className="mt-1 flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-text">
                    <span className="hidden sm:inline group-open:hidden">More</span>
                    <span className="hidden sm:group-open:inline">Less</span>
                    <Icon name="chevronDown" className="size-4 transition-transform duration-300 group-open:rotate-180" />
                    <span className="sr-only">details for {role.company}</span>
                  </span>
                </div>
              </summary>
              <div className="px-0 pt-4 pb-2">
                <ul className="max-w-[68ch] space-y-3 text-[0.95rem] text-muted">
                  {role.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-blue/70" />
                      <span>
                        <Emphasize text={d} />
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs text-muted">{role.location}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </Section>
  );
}
