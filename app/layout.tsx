import Header from "@/components/navigation/Header";
import PageTransition from "@/components/transitions/PageTransition";
import StairTransition from "@/components/transitions/StairTransition";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full scroll-smooth">
      <body className={cn(jetBrainsMono.variable, "h-full w-full")}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
