import Image from "next/image";
import Link from "next/link";
import { companies, hero, links, profile, workLog } from "../_lib/content";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon } from "./icon";

// Compact work log that floats over the portrait: shipped work as log lines,
// then the payroll dashboard's load time before and after.
function Console() {
  return (
    <figure className="overflow-hidden rounded-card border border-gunmetal bg-surface/95 shadow-rim backdrop-blur">
      <div className="flex items-center justify-between border-b border-gunmetal px-4 py-2.5">
        <figcaption className="text-body-sm text-frost">Work log</figcaption>
        <span className="flex items-center gap-2 text-caption text-steel">
          <span aria-hidden="true" className="live relative size-1.5 rounded-full bg-periwinkle" />
          Newest first
        </span>
      </div>
      <ol className="divide-y divide-gunmetal">
        {workLog.slice(0, 3).map((line, i) => (
          <li key={line.entry} className="log-line flex items-baseline gap-3 px-4 py-2.5" style={{ "--d": i } as React.CSSProperties}>
            <span className="tnum w-[4.6rem] shrink-0 text-caption text-steel">{line.date}</span>
            <span className="text-body-sm text-white">{line.entry}</span>
          </li>
        ))}
      </ol>
      <div className="border-t border-gunmetal px-4 pt-3 pb-4">
        <p className="text-caption text-frost">Payroll dashboard load time, Sparkpay</p>
        <dl className="tnum mt-2 space-y-2 text-caption">
          <div className="grid grid-cols-[3rem_1fr_2rem] items-center gap-2.5">
            <dt className="text-steel">Before</dt>
            <dd className="h-1.5 overflow-hidden rounded-full bg-gunmetal">
              <div className="bar-grow h-full w-full rounded-full bg-steel/50" style={{ "--d": 0 } as React.CSSProperties} />
            </dd>
            <dd className="text-right text-frost">3.2s</dd>
          </div>
          <div className="grid grid-cols-[3rem_1fr_2rem] items-center gap-2.5">
            <dt className="text-steel">After</dt>
            <dd className="h-1.5 overflow-hidden rounded-full bg-gunmetal">
              <div className="bar-grow h-full w-[34%] rounded-full bg-periwinkle" style={{ "--d": 1 } as React.CSSProperties} />
            </dd>
            <dd className="text-right font-medium text-white">1.1s</dd>
          </div>
        </dl>
      </div>
    </figure>
  );
}

function Portrait() {
  return (
    <div className="intro relative mx-auto w-full max-w-[26rem] pb-40 sm:pb-24 lg:mr-0 lg:pb-0" style={{ "--d": 2 } as React.CSSProperties}>
      {/* A thin ring of light turns slowly around the photo. */}
      <div className="relative overflow-hidden rounded-[28px] p-px">
        <div aria-hidden="true" className="halo absolute -inset-1/2" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-surface">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 416px, 90vw"
            className="object-cover object-[52%_40%]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas/70 to-transparent" />
        </div>
      </div>
      <div className="float absolute right-0 bottom-0 left-4 sm:right-auto sm:left-auto sm:w-[18rem] sm:-translate-x-1/4 lg:-bottom-24 lg:-left-28 lg:translate-x-0">
        <Console />
      </div>
    </div>
  );
}

function Headline() {
  const words = hero.headline.split(" ");
  return words.map((w, i) => (
    <span key={i}>
      <span className="word" style={{ "--d": i } as React.CSSProperties}>
        {w}
      </span>
      {i < words.length - 1 ? " " : ""}
    </span>
  ));
}

function CompanyBar() {
  const items = [...companies, ...companies, ...companies, ...companies];
  return (
    <div className="marquee overflow-hidden">
      <ul className="marquee-track flex w-max items-center" style={{ display: "flex", width: "max-content" }}>
        {items.map((c, i) => (
          <li
            key={`${c}-${i}`}
            aria-hidden={i >= companies.length ? "true" : undefined}
            className="display shrink-0 px-8 text-subheading text-steel sm:px-12"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  const hasPhoto = publicFileExists(profile.photo);
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="aurora">
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />

      <Container className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="intro text-subheading text-frost">Hi, I&apos;m {profile.name}.</p>
            <h1 id="hero-heading" className="display mt-4 max-w-[17ch] text-[40px] leading-[1.1] sm:text-[56px] sm:leading-[1.06]">
              <Headline />
            </h1>
            <p className="intro mt-6 max-w-[46ch] text-subheading text-frost" style={{ "--d": 5 } as React.CSSProperties}>
              {hero.supporting}
            </p>
            <div className="intro mt-10 flex flex-wrap items-center gap-3" style={{ "--d": 6 } as React.CSSProperties}>
              <a href={links.email.href} className="btn-primary inline-flex h-11 items-center rounded-full px-6 font-medium transition-[filter]">
                {hero.primaryCta}
              </a>
              <Link
                href="#work"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-steel/60 px-5 font-medium text-frost transition-colors hover:border-frost hover:text-white"
              >
                {hero.secondaryCta}
                <Icon name="chevronRight" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="intro mt-6 text-body-sm text-steel" style={{ "--d": 7 } as React.CSSProperties}>
              Or find me on{" "}
              <a href={links.github.href} target="_blank" rel="noopener noreferrer" className="text-periwinkle hover:underline">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              and{" "}
              <a href={links.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-periwinkle hover:underline">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-5">{hasPhoto ? <Portrait /> : <Console />}</div>
        </div>
      </Container>

      <div className="relative border-t border-gunmetal/70 py-10">
        <p className="mb-6 text-center text-body-sm text-steel">Teams and clients I&apos;ve built for</p>
        <CompanyBar />
      </div>
    </section>
  );
}
