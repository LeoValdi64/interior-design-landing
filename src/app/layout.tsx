import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atelier Luxe Interiors | Luxury Interior Design in Los Angeles",
  description:
    "Transform your space with Atelier Luxe Interiors — Los Angeles' premier luxury interior design studio. Residential, commercial, kitchen & bath, color consulting, space planning, and staging services.",
  keywords: [
    "luxury interior design",
    "Los Angeles interior designer",
    "residential interior design",
    "commercial interior design",
    "kitchen and bath design",
    "color consulting",
    "space planning",
    "home staging",
    "LA interior design",
    "high-end interior design",
    "Atelier Luxe Interiors",
  ],
  authors: [{ name: "Atelier Luxe Interiors" }],
  openGraph: {
    title: "Atelier Luxe Interiors | Luxury Interior Design in Los Angeles",
    description:
      "Transform your space with Los Angeles' premier luxury interior design studio. Expert residential and commercial design services.",
    url: "https://atelierluxeinteriors.com",
    siteName: "Atelier Luxe Interiors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Luxe Interiors | Luxury Interior Design in Los Angeles",
    description:
      "Transform your space with Los Angeles' premier luxury interior design studio.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://atelierluxeinteriors.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
