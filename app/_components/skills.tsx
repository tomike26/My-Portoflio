import { skills } from "../_lib/content";
import { Section } from "./section";

function Chip({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <li
      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-300 ${strong ? "border-blue/40 bg-blue/10 text-text hover:border-blue" : "border-line-strong text-muted hover:border-muted hover:text-text"}`}
    >
      {children}
    </li>
  );
}

export function Skills() {
  return (
    <Section id="skills" number="02" label="Skills" title={skills.heading.split(" and ")[0]} muted={`and ${skills.heading.split(" and ")[1]}`}>
      <div className="grid gap-4 lg:grid-cols-3">
        <div data-reveal className="spotlight rounded-2xl card border border-line p-6 md:p-8 lg:col-span-3">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold">{skills.core.label}</h3>
            <p className="font-mono text-xs text-muted">{skills.core.note}</p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {skills.core.items.map((item) => (
              <Chip key={item} strong>
                {item}
              </Chip>
            ))}
          </ul>
        </div>

        {skills.groups.map((group, i) => (
          <div
            key={group.label}
            data-reveal
            style={{ "--d": i } as React.CSSProperties}
            className="spotlight rounded-2xl card border border-line p-6"
          >
            <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">{skills.additionalLabel}</p>
            <h3 className="mt-2 font-semibold">{group.label}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
