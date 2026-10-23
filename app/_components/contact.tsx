import { contact, links } from "../_lib/content";
import { Container } from "./container";
import { Icon } from "./icon";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-gunmetal">
      <div aria-hidden="true" className="aurora">
        <span />
        <span />
      </div>
      <Container className="relative py-24 text-center md:py-32">
        <div data-reveal>
        <h2 id="contact-heading" className="display mx-auto max-w-[18ch] text-[40px] leading-[1.1] sm:text-display sm:leading-[1.08]">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-subheading text-frost">{contact.supporting}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={links.email.href} className="btn-primary inline-flex h-11 items-center rounded-full px-6 font-medium transition-[filter]">
            Email me
          </a>
          {[links.github, links.linkedin].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-steel/60 px-5 font-medium text-frost transition-colors hover:border-frost hover:text-white"
            >
              {l.label}
              <Icon name="arrowUpRight" className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        <p className="mt-6 text-body-sm text-steel">{links.email.display}</p>
        </div>
      </Container>
    </section>
  );
}
