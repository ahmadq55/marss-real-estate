import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marss Real Estate | Transforming Property Into Possibilities",
  description:
    "Marss Real Estate is a real estate and business-backed investment firm specializing in equity carry financing. We partner with agents, brokers, and sellers to create win-win real estate transactions.",
  keywords: "real estate investment, equity carry financing, buy box, real estate investor, commercial real estate",
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
