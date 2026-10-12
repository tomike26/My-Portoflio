import { approach } from "../_lib/content";
import { Section } from "./section";

export function Approach() {
  return (
    <Section
      id="approach"
      number="05"
      label="Engineering approach"
      title="Beyond the"
      muted="interface."
      intro={approach.intro}
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {approach.themes.map((theme, i) => (
          <li
            key={theme.title}
            data-reveal
            style={{ "--d": i % 2 } as React.CSSProperties}
            className="spotlight group rounded-2xl card border border-line p-7 transition-colors duration-300 hover:border-line-strong md:p-8"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{theme.title}</h3>
              <span aria-hidden="true" className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs leading-relaxed text-blue">{theme.summary}</p>
            <p className="mt-5 text-muted">{theme.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
