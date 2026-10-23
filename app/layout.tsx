import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "./_lib/content";
import "./globals.css";

// Inter stands in for Helvetica Now, with its stylistic sets enabled in CSS.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    "Frontend Engineer building web applications with React, Next.js and TypeScript, from responsive interfaces to dashboards and features that connect to APIs.",
};

export const viewport: Viewport = {
  themeColor: "#0f101a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
