import type { Metadata } from "next";
import { Playfair_Display, Lora, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://anto-jovita-personal-portfolio.vercel.app"
  ),

  title: "Anto Jovita | AI, Data Science, UI/UX & Frontend",

  alternates: {
    canonical: "/",
  },
  description:
    "Portfolio of Anto Jovita, an AI & Data Science enthusiast exploring Generative AI, RAG, Agentic AI, UI/UX design, frontend development, and creative work.",
  keywords: [
    "Anto Jovita",
    "AI",
    "Artificial Intelligence",
    "Data Science",
    "Generative AI",
    "RAG",
    "Agentic AI",
    "UI/UX Design",
    "Frontend Development",
    "Figma",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Anto Jovita | AI, Data Science, UI/UX & Frontend",
    description:
      "Portfolio of Anto Jovita — exploring AI, Data Science, Generative AI, RAG, Agentic AI, UI/UX, frontend development, and creative work.",
    images: ["/og/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}