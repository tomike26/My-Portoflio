import { Container } from "./container";

// Shared section shell: a mono index, a two-tone heading and optional intro.
export function Section({
  id,
  number,
  label,
  title,
  muted,
  intro,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  muted?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-24 md:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-blue uppercase">
            <span aria-hidden="true">{number}</span>
            <span aria-hidden="true" className="h-px w-8 bg-blue/50" />
            {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
          >
            {title}
            {muted && <span className="text-muted"> {muted}</span>}
          </h2>
          {intro && <p className="mt-5 max-w-[56ch] text-lg text-muted">{intro}</p>}
        </div>
        <div className="mt-14 md:mt-16">{children}</div>
      </Container>
    </section>
  );
}
