import Link from "next/link";
import { Icon, type IconName } from "./icon";

// Text link with a drawn-in underline and an optional trailing arrow.
export function TextLink({
  href,
  icon = "arrowRight",
  external = false,
  className = "",
  children,
}: {
  href: string;
  icon?: IconName | null;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="link pb-0.5">{children}</span>
      {icon && (
        <Icon
          name={icon}
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );
  const cls = `group link-group inline-flex items-center gap-1.5 ${className}`;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}
