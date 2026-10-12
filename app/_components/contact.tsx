import { contact, links } from "../_lib/content";
import { ContactForm } from "./contact-form";
import { Container } from "./container";
import { Icon, type IconName } from "./icon";

export function Contact() {
  // The form only accepts submissions when a delivery service is configured.
  const formEnabled = Boolean(process.env.RESEND_API_KEY);
  const items: { icon: IconName; label: string; display: string; href: string }[] = [
    { icon: "mail", ...links.email },
    { icon: "github", ...links.github },
    { icon: "linkedin", ...links.linkedin },
  ];
  const [lead, ...tail] = contact.heading.split(" ");
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32">
      <Container>
        <div className="panel-glow relative overflow-hidden rounded-[2rem] border border-blue/20 shadow-[0_40px_120px_-60px_rgb(79_139_255/0.6)]">
          <div aria-hidden="true" className="dots pointer-events-none absolute inset-0" />
          <div className="relative grid gap-14 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
            <div data-reveal className="lg:col-span-5">
              <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-blue uppercase">
                <span aria-hidden="true">06</span>
                <span aria-hidden="true" className="h-px w-8 bg-blue/50" />
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-5 text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
              >
                {lead} <span className="text-muted">{tail.slice(0, -1).join(" ")}</span>{" "}
                <span className="text-blue">{tail.at(-1)}</span>
              </h2>
              <p className="mt-5 max-w-[42ch] text-lg text-muted">{contact.supporting}</p>
              <ul className="mt-10 space-y-3">
                {items.map((item) => {
                  const external = item.href.startsWith("http");
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-4 rounded-2xl border border-line bg-bg/60 p-3.5 pr-5 transition-colors duration-300 hover:border-blue/60"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                          <Icon name={item.icon} className="size-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{item.label}</span>
                          <span className="block truncate">{item.display}</span>
                        </span>
                        {external && <span className="sr-only">(opens in a new tab)</span>}
                        <Icon
                          name="arrowUpRight"
                          className="ml-auto size-4 shrink-0 text-muted transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="lg:col-span-6 lg:col-start-7">
              <ContactForm enabled={formEnabled} email={links.email.display} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
