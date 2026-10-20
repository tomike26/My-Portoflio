import Image from "next/image";
import Link from "next/link";
import { hero, links, profile } from "../_lib/content";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon, type IconName } from "./icon";

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "github", label: "GitHub", href: links.github.href },
  { icon: "linkedin", label: "LinkedIn", href: links.linkedin.href },
  { icon: "mail", label: "Email", href: links.email.href },
];

export function SocialButtons() {
  return (
    <ul className="flex gap-2.5">
      {socials.map((s) => {
        const external = s.href.startsWith("http");
        return (
          <li key={s.label}>
            <a
              href={s.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex size-12 items-center justify-center rounded-2xl border border-line bg-raised/60 text-muted transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-text"
            >
              <Icon name={s.icon} className="size-5" />
              <span className="sr-only">
                {s.label}
                {external ? " (opens in a new tab)" : ""}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// A quiet line of the tools I use most, under the hero.
function StackLine() {
  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-6">
      <p className="text-sm text-muted">Tools I use most</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.95rem]">
        {hero.stack.map((item) => (
          <li key={item} className="text-text/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  const hasPhoto = publicFileExists(profile.photo);
  return (
    <section id="top" aria-labelledby="hero-title" className="band-navy relative overflow-hidden">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />

      <Container className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <div className="intro flex flex-wrap items-center gap-3 text-lg text-muted">
              <p>
                {hero.greeting} <span className="font-medium text-text">{profile.name}</span>
              </p>
            </div>

            <h1
              id="hero-title"
              className="intro mt-6 text-[clamp(3.5rem,9vw,7.75rem)] leading-[0.92] font-medium tracking-[-0.055em]"
              style={{ "--d": 1 } as React.CSSProperties}
            >
              {hero.title}
              <span className="glow-dot">.</span>
            </h1>

            <p className="intro mt-8 max-w-[44ch] text-xl leading-relaxed text-muted" style={{ "--d": 2 } as React.CSSProperties}>
              {hero.supporting}
            </p>

            <div className="intro mt-10 flex flex-wrap items-center gap-4" style={{ "--d": 3 } as React.CSSProperties}>
              <Link
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 font-medium text-on-accent transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_rgb(159_224_193/0.9)]"
              >
                {hero.primaryCta}
                <Icon name="arrowDown" className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
              <SocialButtons />
            </div>
          </div>

          {hasPhoto && (
            <div className="intro relative mx-auto w-full max-w-[24rem] lg:col-span-5 lg:mr-0" style={{ "--d": 2 } as React.CSSProperties}>
              <div aria-hidden="true" className="absolute -inset-16 bg-[radial-gradient(closest-side,rgb(159_224_193/0.32),transparent)]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-accent/40 transition-transform duration-500 lg:rotate-2 lg:hover:rotate-0">
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover object-[52%_40%]"
                />
              </div>
            </div>
          )}
        </div>
      </Container>

      <Container className="relative pb-20">
        <StackLine />
      </Container>
    </section>
  );
}
