import { about } from "../_lib/content";
import { Icon } from "./icon";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" number="01" label="About" title="A little about" muted="how I work.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div data-reveal className="space-y-6 lg:col-span-7">
          {about.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "text-xl leading-relaxed text-text" : "text-lg leading-relaxed text-muted"}>
              {p}
            </p>
          ))}
        </div>
        <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="lg:col-span-5">
          <div className="spotlight rounded-2xl card border border-line p-6 md:p-7">
            <h3 className="font-mono text-xs tracking-[0.16em] text-muted uppercase">{about.experienceHeading}</h3>
            <ul className="mt-5 space-y-3.5">
              {about.experienceAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-1 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
                    <Icon name="check" className="size-3" />
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <dl data-reveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((h) => (
          <div key={h.value} className="spotlight flex flex-col rounded-2xl card border border-line p-6">
            <dt className="order-2 mt-3 text-[0.95rem] leading-snug">{h.label}</dt>
            <dd className="order-1 text-[2.1rem] leading-none font-semibold tracking-[-0.04em] text-blue">{h.value}</dd>
            <dd className="order-3 mt-auto pt-4 font-mono text-xs text-muted">{h.context}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 font-mono text-xs text-muted">{about.highlightsNote}</p>
    </Section>
  );
}
