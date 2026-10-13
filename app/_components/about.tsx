import { about } from "../_lib/content";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title={about.heading} stacked>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div data-reveal className="lg:col-span-7">
          <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">{about.lead}</p>
          <p className="mt-5 max-w-[56ch] text-lg text-muted">{about.day}</p>
          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p className="display text-xl leading-snug md:text-2xl">&ldquo;{about.quote}&rdquo;</p>
          </blockquote>
        </div>

        <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="lg:col-span-5">
          <div className="rounded-lg bg-raised p-6 md:p-8">
            <h3 className="text-sm text-muted">{about.experienceHeading}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {about.experienceAreas.map((area) => (
                <li key={area} className="rounded-full border border-line px-3.5 py-1.5 text-[0.95rem]">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <dl data-reveal className="mt-12 grid gap-4 sm:grid-cols-3">
        {about.highlights.map((h) => (
          <div
            key={h.value}
            className="flex flex-col rounded-lg bg-raised p-6 md:p-7"
          >
            <dt className="order-2 mt-3 font-medium">{h.label}</dt>
            <dd className="display order-1 text-[clamp(2rem,3.2vw,2.75rem)] leading-none text-accent">{h.value}</dd>
            <dd className="order-3 mt-auto pt-4 text-sm text-muted">{h.context}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted">{about.highlightsNote}</p>
    </Section>
  );
}
