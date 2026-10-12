import { Fragment } from "react";

// Sets figures (40+, 30%, 3.2s, 2 weeks …) in white so results are easy to scan.
const FIGURE = /(\d+(?:\.\d+)?(?:\+|%|s\b| weeks| days)?)/g;

export function Emphasize({ text }: { text: string }) {
  return text.split(FIGURE).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-medium text-text">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
