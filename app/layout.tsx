import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marss Real Estate | Commercial Acquisitions & Creative Financing",
  description:
    "Marss Real Estate acquires commercial real estate, operating businesses, and real estate\u2013anchored assets across Texas using creative capital structures including Equity Carry, Owner Financing, and Hybrid Capital Stack.",
  keywords:
    "commercial real estate acquisition, equity carry financing, owner financing, Texas real estate, Marss Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
