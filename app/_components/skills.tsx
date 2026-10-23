import { education, skills } from "../_lib/content";
import { Container } from "./container";
import { Icon, type IconName } from "./icon";
import { SectionHeading } from "./section-heading";

// Bento layout: the groups I use most get the wider tiles, in even rows.
const span: Record<string, string> = {
  Frontend: "sm:col-span-2",
  "API integration": "sm:col-span-2",
  "Tools and deployment": "sm:col-span-2 lg:col-span-4",
};

// Frontend first so the widest tiles lead each row.
const order = ["Frontend", "Languages", "State management", "API integration", "Styling", "Testing", "Tools and deployment"];

const eduIcon: IconName[] = ["graduation", "code", "book", "badge"];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative overflow-hidden border-t border-gunmetal">
      <div aria-hidden="true" className="aurora opacity-60">
        <span />
        <span />
      </div>
      <Container className="relative py-20 md:py-28">
        <SectionHeading id="skills-heading" title={skills.heading} intro="The tools behind the work above, grouped the way they appear on my CV." />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...skills.groups].sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label)).map((g, i) => {
            const big = g.label === "Frontend";
            return (
              <li
                key={g.label}
                data-reveal
                style={{ "--d": i % 4 } as React.CSSProperties}
                className={`group relative overflow-hidden rounded-card border border-gunmetal bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-periwinkle/40 ${span[g.label] ?? ""}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 size-64 bg-[radial-gradient(closest-side,rgb(124_135_247/0.25),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <h3 className={`relative ${big ? "display text-heading-sm" : "text-body-sm text-steel"}`}>{g.label}</h3>
                {big && (
                  <p className="relative mt-2 max-w-[34ch] text-body-sm text-frost">
                    What I build with every day, from component libraries to full product features.
                  </p>
                )}
                <ul className={`relative flex flex-wrap gap-2 ${big ? "mt-6" : "mt-4"}`}>
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border border-gunmetal bg-canvas/60 text-white transition-colors duration-300 group-hover:border-steel/40 ${big ? "px-4 py-2 text-subheading" : "px-3 py-1 text-body-sm"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-24">
          <h3 data-reveal className="display text-center text-heading-sm">
            {education.heading}
          </h3>
          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {education.items.map((e, i) => (
              <li
                key={e.title}
                data-reveal
                style={{ "--d": i } as React.CSSProperties}
                className="rounded-card border border-gunmetal bg-surface p-6 transition-colors duration-300 hover:border-periwinkle/40"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-gunmetal bg-canvas text-periwinkle">
                  <Icon name={eduIcon[i] ?? "badge"} className="size-5" />
                </span>
                <p className="mt-5 font-medium">{e.title}</p>
                {e.detail && <p className="mt-1 text-body-sm text-frost">{e.detail}</p>}
                {e.dates && <p className="tnum mt-1 text-body-sm text-steel">{e.dates}</p>}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
