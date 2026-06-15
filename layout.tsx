import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marss Real Estate | Commercial & Business Acquisitions | Sunbelt",
  description:
    "Marss Real Estate acquires commercial real estate and essential operating businesses across the Sunbelt. Multiple exit structures for sellers, commission protection for brokers, deal-level co-investment for capital partners.",
  keywords:
    "commercial real estate acquisition, business acquisition, equity carry financing, Sunbelt real estate, EBITDA acquisition, gas station acquisition, car wash acquisition, business backed real estate",
  openGraph: {
    title: "Marss Real Estate | Serious Capital. Creative Structures.",
    description:
      "Active acquirer of commercial real estate and essential operating businesses across the Sunbelt. Sellers, brokers, and investors — we have a path for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
