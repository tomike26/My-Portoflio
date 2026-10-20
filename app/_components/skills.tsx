import { education, skills } from "../_lib/content";
import { Container } from "./container";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="band-navy !bg-navy-deep">
      <Container className="py-24 md:py-32">
        <p className="text-lg text-accent">Skills</p>
        <h2 id="skills-heading" className="display mt-4 text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1.05]">
          What I work with.
        </h2>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.groups.map((g, i) => (
            <li
              key={g.label}
              className={`rounded-3xl border border-line bg-raised p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50 ${i === skills.groups.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <h3 className="text-accent">{g.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-bg px-3 py-1.5 text-[0.95rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <h3 className="display text-[1.9rem] leading-tight lg:col-span-4">{education.heading}</h3>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {education.items.map((e) => (
              <li key={e.title} className="border-t border-line py-5">
                <p className="font-medium">{e.title}</p>
                {(e.detail || e.dates) && <p className="mt-1 text-muted">{[e.detail, e.dates].filter(Boolean).join(", ")}</p>}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
