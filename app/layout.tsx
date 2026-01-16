import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { SurveillanceEvents } from "@/components/SurveillanceEvents";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Dock } from "@/components/magicui/dock";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Richard Ewing | Product Economist",
  description: "The Global Digital Headquarters for Product Economics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "overflow-x-hidden bg-obsidian text-gray-300 font-sans antialiased min-h-screen",
        inter.variable
      )}>
        <GoogleAnalytics />
        <SurveillanceEvents />
        <ScrollProgress />
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-screen">
          <Sidebar />
          <main className="p-8 lg:p-24 flex flex-col justify-center min-h-screen relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[128px] pointer-events-none" />
            {children}
            <Dock
              items={[
                { label: "Home", href: "/" },
                { label: "Advisory", href: "/advisory" },
                { label: "System", href: "/system" },
                { label: "Briefs", href: "/briefs" },
                { label: "Book", href: "/book" },
              ]}
              className="mb-8"
            />
          </main>
        </div>
      </body>
    </html>
  );
}
