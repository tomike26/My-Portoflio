import { skills } from "../_lib/content";
import { Section } from "./section";

export function Skills() {
  const rows = [{ label: skills.core.label, items: skills.core.items, core: true }, ...skills.groups];
  return (
    <Section id="skills" title={skills.heading} divider>
      <dl data-reveal className="border-b border-line">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
            <dt className="text-muted sm:pt-1">{row.label}</dt>
            <dd className={"core" in row ? "display text-[1.4rem] leading-snug" : "text-lg"}>{row.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
