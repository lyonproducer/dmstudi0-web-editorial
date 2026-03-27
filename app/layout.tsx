import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blocks/Navbar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "DMStudio Editorial | Luxury Portrait & Video Production",
  description: "Exclusive photography, video, and podcast production in Atlanta. We help high-end brands and individuals look premium through cinematic storytelling.",
  keywords: ["luxury portraits", "editorial photography", "video production", "podcast studio", "atlanta photographer", "luxury branding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-cta/30 selection:text-primary bg-background text-foreground transition-colors duration-500`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
