// Centered section title block: a 40px medium headline with an optional line below.
export function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div data-reveal className="mx-auto max-w-2xl text-center">
      <h2 id={id} className="display text-[32px] leading-[1.15] sm:text-heading-lg">
        {title}
      </h2>
      {intro && <p className="mt-4 text-subheading text-frost">{intro}</p>}
    </div>
  );
}
