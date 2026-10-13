import Image from "next/image";
import Link from "next/link";
import { availability, hero, links, profile } from "../_lib/content";
import { publicFileExists } from "../_lib/public-file";
import { Container } from "./container";
import { Icon } from "./icon";
import { TextLink } from "./text-link";

function Headline() {
  const [before, after] = hero.headline.split(hero.italic);
  return (
    <>
      {before}
      <em className="italic">{hero.italic}</em>
      {after}
    </>
  );
}

export function Hero() {
  const hasPhoto = publicFileExists(profile.photo);
  const elsewhere = [links.github, links.linkedin, links.email];
  return (
    <section id="top" aria-labelledby="hero-name" className="band-lavender relative overflow-hidden">
      <Container className="grid items-end gap-y-6 pt-28 lg:min-h-[min(92vh,58rem)] lg:grid-cols-12 lg:gap-x-10 lg:pt-32">
        <div className="min-w-0 pb-6 lg:col-span-7 lg:pb-24">
          {availability.show && (
            <p className="intro flex items-center gap-2.5 text-sm text-muted">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${availability.tone === "open" ? "bg-accent" : "bg-field"}`}
              />
              {availability.label}
            </p>
          )}

          <h1 id="hero-name" className="intro mt-8" style={{ "--d": 1 } as React.CSSProperties}>
            <span className="display block text-[clamp(3rem,7.4vw,6.5rem)] leading-[0.95] tracking-[-0.045em]">
              {profile.name}
            </span>
            <span className="mt-5 block text-lg text-muted">{profile.role}</span>
          </h1>

          <p
            className="intro display mt-10 max-w-[22ch] text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.2]"
            style={{ "--d": 2 } as React.CSSProperties}
          >
            <Headline />
          </p>
          <p className="intro mt-6 max-w-[46ch] text-lg text-muted" style={{ "--d": 3 } as React.CSSProperties}>
            {hero.supporting}
          </p>

          <div className="intro mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--d": 4 } as React.CSSProperties}>
            <Link
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-[4px] bg-text px-6 font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-on-accent"
            >
              {hero.primaryCta}
              <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <TextLink href="#contact" icon={null} className="font-medium">
              {hero.secondaryCta}
            </TextLink>
          </div>

          <ul className="intro mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]" style={{ "--d": 5 } as React.CSSProperties}>
            {elsewhere.map((l) => (
              <li key={l.label}>
                <TextLink
                  href={l.href}
                  external={l.href.startsWith("http")}
                  icon={l.href.startsWith("http") ? "arrowUpRight" : null}
                  className="text-muted hover:text-text"
                >
                  {l.label === "Email" ? l.display : l.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>

        {hasPhoto && (
          <div className="intro relative -mx-6 sm:mx-auto sm:w-full sm:max-w-[28rem] lg:col-span-5 lg:mx-0 lg:-mr-10 lg:max-w-none lg:self-end" style={{ "--d": 2 } as React.CSSProperties}>
            <div className="portrait-fade relative aspect-[4/5] w-full lg:max-h-[min(82vh,50rem)]">
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-[52%_50%]"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
