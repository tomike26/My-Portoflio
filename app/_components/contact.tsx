import { contact, links } from "../_lib/content";
import { Container } from "./container";
import { Icon, type IconName } from "./icon";

export function Contact() {
  const rows: { icon: IconName; label: string; display: string; href: string }[] = [
    { icon: "mail", ...links.email },
    { icon: "github", ...links.github },
    { icon: "linkedin", ...links.linkedin },
  ];
  return (
    <section id="contact" aria-labelledby="contact-heading" className="band-lavender">
      <Container className="grid gap-14 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div data-reveal className="lg:col-span-6">
          <h2 id="contact-heading" className="display max-w-[12ch] text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] text-balance">
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg text-muted">{contact.supporting}</p>
          <a
            href={links.email.href}
            className="group mt-10 inline-flex h-12 items-center gap-2 rounded-[4px] bg-text px-6 font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-on-accent"
          >
            Email me
            <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <ul data-reveal style={{ "--d": 1 } as React.CSSProperties} className="border-t border-line lg:col-span-5 lg:col-start-8">
          {rows.map((row) => {
            const external = row.href.startsWith("http");
            return (
              <li key={row.label} className="border-b border-line">
                <a
                  href={row.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-5"
                >
                  <Icon name={row.icon} className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{row.label}</span>
                    <span className="block truncate text-lg font-medium transition-colors group-hover:text-accent">
                      {row.display}
                    </span>
                  </span>
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                  <Icon
                    name="arrowUpRight"
                    className="ml-auto size-5 shrink-0 text-muted transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
