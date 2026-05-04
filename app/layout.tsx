import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Focus Session Tracker",
  description: "Track and gamify team focus sessions in Discord. Leaderboards, focus mode channels, and distraction blocking for remote dev teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66e98b73-d7bd-434d-acdb-a228655c1e4b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
