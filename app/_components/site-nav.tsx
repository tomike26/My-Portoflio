"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../_lib/content";
import { Icon } from "./icon";

type SectionId = (typeof navItems)[number]["id"];

export function SiteNav() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // Over the lavender hero (home page, not scrolled) the bar uses dark text.
  const onHero = usePathname() === "/" && !scrolled;

  // Scroll spy (home page only; on other pages no sections match).
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const first = sections[0];
      if (first && window.scrollY + window.innerHeight * 0.5 < first.offsetTop) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Full-screen menu: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const button = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(menu?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-500 ${onHero ? "band-lavender !bg-transparent" : "band-navy !bg-navy/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md"}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-[4px] focus:bg-text focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-6 sm:px-10 md:h-[4.5rem]"
        >
          <Link href="/" className="display text-lg leading-none transition-colors hover:text-accent">
            {profile.name}
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-7 text-[0.95rem] lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={`/#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`link pb-0.5 transition-colors duration-300 hover:text-text ${isActive ? "text-text [background-size:100%_1px]" : "text-muted"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/#contact"
              className="hidden h-10 items-center rounded-[4px] bg-text px-4 text-[0.95rem] font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-on-accent sm:inline-flex"
            >
              Get in touch
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 inline-flex size-10 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Icon name="menu" className="size-6" />
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="band-navy fixed inset-0 z-50 flex h-dvh flex-col px-6 sm:px-10 lg:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between">
            <span className="display text-lg">{profile.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="-mr-2 inline-flex size-10 items-center justify-center"
            >
              <span className="sr-only">Close menu</span>
              <Icon name="close" className="size-6" />
            </button>
          </div>
          <ul className="mt-8 flex-1 overflow-y-auto border-t border-line">
            {[...navItems, { id: "contact", label: "Contact" } as const].map((item) => (
              <li key={item.id} className="border-b border-line">
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="display block py-5 text-[2.1rem] leading-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
