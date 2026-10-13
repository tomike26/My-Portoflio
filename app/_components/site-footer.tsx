import Link from "next/link";
import { links, navItems, profile } from "../_lib/content";
import { Container } from "./container";
import { TextLink } from "./text-link";

export function SiteFooter() {
  return (
    <footer className="band-navy !bg-navy-deep">
      <Container className="py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-12 gap-y-8">
          <div>
            <p className="display text-2xl leading-none">{profile.name}</p>
            <p className="mt-2 text-sm text-muted">{profile.role}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={`/#${item.id}`} className="link pb-0.5 hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-x-6 text-[0.95rem]">
            {[links.github, links.linkedin].map((l) => (
              <li key={l.label}>
                <TextLink href={l.href} external icon="arrowUpRight">
                  {l.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
          <p>© {profile.name}</p>
          <a href="#top" className="link pb-0.5 hover:text-text">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
