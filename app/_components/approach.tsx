import { approach } from "../_lib/content";
import { Section } from "./section";

export function Approach() {
  return (
    <Section id="approach" title={approach.heading} intro={approach.intro}>
      <ol className="grid gap-x-10 sm:grid-cols-2">
        {approach.themes.map((theme, i) => (
          <li key={theme.title} data-reveal style={{ "--d": i % 2 } as React.CSSProperties} className="border-t border-line py-7">
            <h3 className="display text-[1.4rem] leading-tight">{theme.title}</h3>
            <p className="mt-3 text-muted">{theme.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
