import { links } from "../_lib/content";
import { Icon, type IconName } from "./icon";

const items: { icon: IconName; label: string; href: string }[] = [
  { icon: "github", label: links.github.label, href: links.github.href },
  { icon: "linkedin", label: links.linkedin.label, href: links.linkedin.href },
  { icon: "mail", label: `Email ${links.email.display}`, href: links.email.href },
];

export function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <li key={item.label}>
            <a
              href={item.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex size-11 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-300 hover:border-blue hover:text-blue"
            >
              <Icon name={item.icon} className="size-[18px]" />
              <span className="sr-only">
                {item.label}
                {external ? " (opens in a new tab)" : ""}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
