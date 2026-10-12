import { existsSync } from "node:fs";
import path from "node:path";

// True when a file referenced by a public URL (e.g. "/assets/tomike.jpg")
// exists in /public. Optional images are only rendered when present.
export function publicFileExists(url: string | undefined): url is string {
  if (!url) return false;
  return existsSync(path.join(process.cwd(), "public", url));
}
