import { contact, links } from "../_lib/content";
import { Container } from "./container";
import { SocialButtons } from "./hero";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="band-navy">
      <Container className="py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/30 bg-raised px-6 py-16 text-center sm:px-12 md:py-24">
          <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative">
            <p className="text-lg text-accent">Contact</p>
            <h2 id="contact-heading" className="display mx-auto mt-4 max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] leading-[1]">
              {contact.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-[44ch] text-lg text-muted">{contact.supporting}</p>
            <div className="mt-10 flex flex-col items-center gap-6">
              <a
                href={links.email.href}
                className="inline-flex h-14 items-center rounded-full bg-accent px-9 text-lg font-medium text-on-accent transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgb(159_224_193/0.9)]"
              >
                Email me
              </a>
              <p className="text-muted">{links.email.display}</p>
              <SocialButtons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
