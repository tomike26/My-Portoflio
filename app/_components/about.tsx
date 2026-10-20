import { about } from "../_lib/content";
import { Container } from "./container";

export function About() {
  const words = about.statement.split(" ");
  return (
    <section id="about" aria-labelledby="about-heading" className="band-navy">
      <Container className="py-10 md:py-10">
        <h2 id="about-heading" className="text-lg text-accent">
          {about.heading}
        </h2>
        <p className="mt-6 max-w-[30ch] text-[clamp(1.85rem,3.6vw,3.1rem)] leading-[1.18] font-small tracking-[-0.03em]">
          {words.map((w, i) => (
            <span key={i} className="lit-word">
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <p className="max-w-[60ch] text-lg leading-relaxed text-muted lg:col-span-8">{about.body}</p>
        </div>

        <ul className="mt-20 grid gap-5 md:grid-cols-3">
          {about.principles.map((p) => (
            <li
              key={p.title}
              className="rounded-3xl border border-line bg-raised p-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <h3 className="display text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
