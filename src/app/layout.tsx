import NavbarMinimal from "@/components/NavbarMinimal";
import ScrollBackgroundSwitcher from "@/components/ScrollBackgroundSwitcher";
import ScrollIndicator from "@/components/ScrollIndicator";
import NeonCursor from "@/components/NeonCursor";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Portfolio`,
  description: `${siteConfig.role} portfolio.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#020617] text-slate-100 antialiased overflow-x-hidden">
        {/* Liquid Ether background */}
        <ScrollBackgroundSwitcher />
        
        <NeonCursor />
        <ScrollIndicator />
        <NavbarMinimal />
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
