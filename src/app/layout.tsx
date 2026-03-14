import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chanwoo Song — Problem Finder, Definer, Solver",
  description:
    "I find, define, and solve meaningful problems in the age of AI. AI Project Manager with a growth mindset shaped by global experience.",
  openGraph: {
    title: "Chanwoo Song — Problem Finder, Definer, Solver",
    description:
      "I find, define, and solve meaningful problems in the age of AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#FAFAFA] text-[#09090B] antialiased" style={{ fontFamily: "var(--font-body)" }}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
