import Link from "next/link";
import { links, navItems, profile } from "../_lib/content";
import { Container } from "./container";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-black">
      <Container className="relative pt-20 pb-10">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              {profile.name}
              <span className="text-blue">.</span>
            </p>
            <p className="mt-1 font-mono text-xs tracking-[0.16em] text-muted uppercase">{profile.role}</p>
            <a href={links.email.href} className="link-group mt-6 inline-block text-muted transition-colors hover:text-blue">
              <span className="link pb-0.5">{links.email.display}</span>
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={`/#${item.id}`} className="transition-colors hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className="transition-colors hover:text-text">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinks />
        </div>

        <p
          aria-hidden="true"
          className="text-fade mt-20 text-[13.5vw] leading-[0.8] font-semibold tracking-[-0.06em] whitespace-nowrap opacity-[0.14] select-none lg:text-[min(13.5vw,11rem)]"
        >
          {profile.name}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-muted">
          <p>© {profile.name}</p>
          <p>Built with Next.js and Tailwind CSS</p>
          <a href="#top" className="transition-colors hover:text-text">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
