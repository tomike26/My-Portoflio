import Image from "next/image";
import Link from "next/link";
import { availability, hero, profile } from "../_lib/content";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon } from "./icon";
import { SocialLinks } from "./social-links";

// A real TypeScript object built from the content file, shown as code.
function CodeCard({ compact = false }: { compact?: boolean }) {
  const c = hero.card;
  const str = (s: string) => <span className="text-blue-light">&quot;{s}&quot;</span>;
  // Short arrays stay on one line; longer ones break one item per line.
  const list = (items: string[]) =>
    items.join("").length < 24 ? (
      <>
        [
        {items.map((s, i) => (
          <span key={s}>
            {str(s)}
            {i < items.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </>
    ) : (
      <>
        [{"\n"}
        {items.map((s) => (
          <span key={s}>
            {"    "}
            {str(s)},{"\n"}
          </span>
        ))}
        {"  "}]
      </>
    );
  const all: [string, React.ReactNode][] = [
    ["role", str(c.role)],
    ["experience", str(c.experience)],
    ["stack", list(c.stack)],
    ["focus", list(c.focus)],
    ["currently", str(c.currently)],
  ];
  const rows = compact ? all.filter(([key]) => key !== "focus" && key !== "stack") : all;
  return (
    <figure className="spotlight overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <figcaption className="font-mono text-xs text-muted">tomike.ts</figcaption>
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-blue/70" />
        </span>
      </div>
      <pre className={`overflow-x-auto px-5 font-mono text-muted ${compact ? "py-4 text-[12px] leading-6" : "py-5 text-[13px] leading-7"}`}>
        <code>
          <span className="text-blue">export const</span> <span className="text-text">tomike</span> = {"{"}
          {"\n"}
          {rows.map(([key, value]) => (
            <span key={key}>
              {"  "}
              <span className="text-text">{key}</span>: {value},{"\n"}
            </span>
          ))}
          {"}"};<span aria-hidden="true" className="caret ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-blue" />
        </code>
      </pre>
    </figure>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto max-w-[26rem] pb-28 lg:mr-0 lg:ml-auto lg:pb-0">
      <div className="ring-gradient rounded-[2rem] p-px shadow-[0_40px_120px_-40px_rgb(79_139_255/0.55)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] bg-surface-2">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 416px, 90vw"
            className="object-cover object-[52%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 to-transparent" />
        </div>
      </div>
      <div className="absolute right-4 bottom-0 left-4 sm:right-auto sm:w-[22rem] lg:-bottom-10 lg:-left-16">
        <CodeCard compact />
      </div>
    </div>
  );
}

export function Hero() {
  const [first, ...rest] = hero.headline.split(". ");
  const hasPhoto = publicFileExists(profile.photo);
  return (
    <section id="top" aria-labelledby="hero-name" className="relative pt-32 pb-24 md:pt-40 md:pb-36">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          {availability.show && (
            <p className="intro inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 py-1.5 pr-4 pl-3 text-sm text-muted">
              <span
                aria-hidden="true"
                className={`relative size-2 rounded-full ${availability.tone === "open" ? "live bg-blue" : "bg-faint"}`}
              />
              {availability.label}
            </p>
          )}

          <h1 id="hero-name" className="intro mt-8" style={{ "--d": 1 } as React.CSSProperties}>
            <span className="block text-[clamp(3.25rem,8.4vw,7.5rem)] leading-[0.92] font-semibold tracking-[-0.055em]">
              {profile.name}
              <span className="text-blue">.</span>
            </span>
            <span className="mt-4 block font-mono text-sm tracking-[0.18em] text-blue uppercase">
              {profile.role}
            </span>
          </h1>

          <p
            className="intro mt-8 max-w-[24ch] text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.15] font-medium tracking-[-0.03em]"
            style={{ "--d": 2 } as React.CSSProperties}
          >
            {first}.<span className="text-muted"> {rest.join(". ")}</span>
          </p>

          <p className="intro mt-6 max-w-[48ch] text-lg text-muted" style={{ "--d": 3 } as React.CSSProperties}>
            {hero.supporting}
          </p>

          <div className="intro mt-10 flex flex-wrap items-center gap-4" style={{ "--d": 4 } as React.CSSProperties}>
            <Link
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-blue px-6 font-medium text-on-blue transition-[background-color,box-shadow] duration-300 hover:bg-blue-light hover:shadow-[0_0_40px_-6px_rgb(79_139_255/0.7)]"
            >
              {hero.primaryCta}
              <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 font-medium transition-colors duration-300 hover:border-text"
            >
              {hero.secondaryCta}
            </Link>
            <div className="sm:ml-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="intro min-w-0 lg:col-span-5" style={{ "--d": 3 } as React.CSSProperties}>
          {hasPhoto ? <Portrait /> : <CodeCard />}
        </div>
      </Container>
    </section>
  );
}
