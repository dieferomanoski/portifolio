import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import PortalShell from "@/components/PortalShell";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name – Portfolio",
  description: "Dark neon portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] text-slate-100 antialiased">
        <PortalShell>
          <BackgroundEffects />
          <Navbar />
          <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </PortalShell>
      </body>
    </html>
  );
}
