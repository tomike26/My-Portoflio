import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { profile } from "./_lib/content";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Frontend Engineer building web applications with React, Next.js and TypeScript, from responsive interfaces to dashboards and features that connect to APIs.",
};

export const viewport: Viewport = {
  themeColor: "#0f1714",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
