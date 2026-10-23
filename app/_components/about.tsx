import { about, stats } from "../_lib/content";
import { Container } from "./container";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-gunmetal">
      <Container className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h2 id="about-heading" className="display text-[32px] leading-[1.15] sm:text-heading-lg">
              {about.heading}
            </h2>
            <p className="mt-5 max-w-[52ch] text-subheading text-frost">{about.statement}</p>
            <p className="mt-4 max-w-[60ch] text-frost/80">{about.body}</p>
          </div>

          <dl data-reveal style={{ "--d": 1 } as React.CSSProperties} className="grid grid-cols-2 gap-x-8 gap-y-10 self-center">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col gap-1.5">
                <dt className="order-2 text-body-sm text-frost">{s.label}</dt>
                <dd className="display tnum order-1 text-heading-lg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-20 grid gap-5 md:grid-cols-3">
          {about.principles.map((p, i) => (
            <li
              key={p.title}
              data-reveal
              style={{ "--d": i } as React.CSSProperties}
              className="rounded-card border border-gunmetal bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-periwinkle/40"
            >
              <h3 className="text-subheading font-medium">{p.title}</h3>
              <p className="mt-2 text-body-sm text-frost">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
