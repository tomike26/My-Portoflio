import Image from "next/image";
import { publicFileExists } from "../_lib/public-file";

// Renders an approved screenshot only when the file exists in /public.
export function ProjectImage({
  src,
  title,
  sizes,
  className = "",
  priority = false,
}: {
  src?: string;
  title: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  if (!publicFileExists(src)) return null;
  return (
    <Image
      src={src}
      alt={`Screenshot of ${title}`}
      fill
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      className={`object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] ${className}`}
    />
  );
}
