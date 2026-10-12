"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not(.is-visible)";

// Adds .is-visible to [data-reveal] elements as they enter the viewport.
// Also picks up elements added later (re-renders, hot reload), so nothing
// can be left hidden.
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reveal = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(SELECTOR).forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal on entering the viewport, or if it's already been scrolled past.
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const watch = (root: ParentNode) => {
      if (root instanceof Element && root.matches(SELECTOR)) io.observe(root);
      root.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    };
    watch(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations)
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) watch(node);
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
