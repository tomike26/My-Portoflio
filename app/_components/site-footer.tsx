import Link from "next/link";
import { links, navItems, profile } from "../_lib/content";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-gunmetal">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-10 text-body-sm">
        <p className="text-steel">
          <span className="font-medium text-white">{profile.name}</span>, {profile.role}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-steel">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={links.github.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={links.linkedin.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
