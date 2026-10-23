"use client";

import { useRef, useState } from "react";
import { experience } from "../_lib/content";
import { Emphasize } from "./emphasize";

// Roles as accessible tabs: the list on the left (a scrolling row on small
// screens), the selected role's detail panel on the right.
export function ExperienceTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = experience[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = experience.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[19rem_1fr]">
      <div
        role="tablist"
        aria-label="Roles"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:-mx-10 sm:px-10 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {experience.map((r, i) => {
          const selected = i === active;
          return (
            <button
              key={r.company}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`role-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="role-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group relative shrink-0 rounded-card border px-5 py-4 text-left transition-[background-color,border-color] duration-300 lg:w-full ${selected ? "border-periwinkle/50 bg-surface shadow-rim" : "border-gunmetal hover:border-steel/40 hover:bg-surface/60"}`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-4 bottom-4 left-0 hidden w-0.5 rounded-full bg-periwinkle transition-opacity duration-300 lg:block ${selected ? "opacity-100" : "opacity-0"}`}
              />
              <span className="flex items-center gap-2">
                <span className={`font-medium ${selected ? "text-white" : "text-frost"}`}>{r.company}</span>
                {r.current && (
                  <span className="relative flex size-2" aria-label="Current role">
                    <span className="live relative size-2 rounded-full bg-periwinkle" />
                  </span>
                )}
              </span>
              <span className="tnum mt-0.5 block text-body-sm whitespace-nowrap text-steel">{r.dates}</span>
            </button>
          );
        })}
      </div>

      <div
        id="role-panel"
        role="tabpanel"
        aria-labelledby={`role-tab-${active}`}
        tabIndex={0}
        className="relative overflow-hidden rounded-card border border-gunmetal bg-surface"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 size-[28rem] bg-[radial-gradient(closest-side,rgb(91_99_211/0.22),transparent)]"
        />
        <div key={active} className="panel-in relative p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
            <div>
              <h3 className="display text-heading-sm leading-tight sm:text-heading">{role.title}</h3>
              <p className="mt-1 text-frost">
                {role.company}, {role.location}
              </p>
            </div>
            <p className="tnum rounded-full border border-gunmetal px-3 py-1 text-body-sm text-frost">{role.dates}</p>
          </div>

          <p className="mt-5 max-w-[60ch] text-subheading text-frost">{role.summary}</p>

          <ul className={`mt-7 grid gap-3 ${role.highlights.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {role.highlights.map((h) => (
              <li key={h.value} className="rounded-[12px] border border-gunmetal bg-canvas/60 p-4">
                <p className="display text-subheading text-white">{h.value}</p>
                <p className="mt-1 text-body-sm text-steel">{h.label}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-7 space-y-2.5 text-body-sm text-frost">
            {role.details.map((d) => (
              <li key={d} className="relative pl-5 before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:rounded-full before:bg-periwinkle/70">
                <Emphasize text={d} />
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2 border-t border-gunmetal pt-5" aria-label="Tools used">
            {role.stack.map((t) => (
              <li key={t} className="rounded-full border border-gunmetal px-3 py-1 text-body-sm text-frost">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
