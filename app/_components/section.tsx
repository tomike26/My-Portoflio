import { Container } from "./container";

// Plain section shell: a display heading on the left, content on the right.
export function Section({
  id,
  title,
  intro,
  band = "band-navy",
  stacked = false,
  divider = false,
  sticky = false,
  aside,
  className = "",
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  band?: "band-navy" | "band-lavender";
  // Heading above the content instead of beside it, for full-width content.
  stacked?: boolean;
  // Hairline above, for a section that follows one in the same band.
  divider?: boolean;
  // Keep the side heading in view while the content scrolls (side layout only).
  sticky?: boolean;
  // Extra element beside the heading in the stacked layout.
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`${band} ${className}`}>
      <Container className={`grid gap-y-10 py-24 md:py-32 ${divider ? "border-t border-line" : ""} ${stacked ? "md:gap-y-14" : "lg:grid-cols-12 lg:gap-x-10"}`}>
        <div
          data-reveal
          className={stacked ? "flex flex-wrap items-end justify-between gap-6" : `lg:col-span-4 ${sticky ? "lg:sticky lg:top-28 lg:self-start" : ""}`}
        >
          <div>
          <h2 id={`${id}-heading`} className="display max-w-[14ch] text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance">
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-[34ch] text-muted">{intro}</p>}
          </div>
          {aside}
        </div>
        <div className={`min-w-0 ${stacked ? "" : "lg:col-span-8"}`}>{children}</div>
      </Container>
    </section>
  );
}
