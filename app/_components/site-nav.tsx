"use client";

import Link from "next/link";
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
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-500 ${scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:text-on-blue"
        >
          Skip to content
        </a>
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-6 sm:px-10 md:h-[4.5rem]"
        >
          <Link href="/" className="group flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-xl border border-blue/40 bg-blue/10 font-mono text-xs font-medium text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-on-blue"
            >
              {profile.monogram}
            </span>
            <span className="font-medium tracking-[-0.02em]">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/60 p-1 text-sm lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex h-9 items-center rounded-full px-4 transition-colors duration-300 ${isActive ? "bg-blue/15 text-text" : "text-muted hover:text-text"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden h-10 items-center rounded-full bg-blue px-5 text-sm font-medium text-on-blue transition-colors duration-300 hover:bg-blue-light sm:inline-flex"
            >
              Get in touch
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:text-text lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Icon name="menu" className="size-5" />
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
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-bg px-6 sm:px-10 lg:hidden"
        >
          <div aria-hidden="true" className="aurora"><span /><span /><span /></div>
          <div className="relative flex h-16 shrink-0 items-center justify-between">
            <span className="font-medium">{profile.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-muted hover:text-text"
            >
              <span className="sr-only">Close menu</span>
              <Icon name="close" className="size-5" />
            </button>
          </div>
          <ul className="relative mt-8 flex-1 overflow-y-auto">
            {[...navItems, { id: "contact", label: "Contact" } as const].map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-5 text-4xl font-semibold tracking-[-0.04em]"
                >
                  <span aria-hidden="true" className="font-mono text-xs font-normal tracking-normal text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
