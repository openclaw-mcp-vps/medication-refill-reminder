import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedRefill – Smart Prescription Refill Reminders",
  description: "Track prescriptions, pharmacy locations, and get SMS/email refill reminders automatically. Never run out of medication again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="836572b5-de19-442f-94ea-f87b2a83f66e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
