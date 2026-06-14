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
    "Marss Real Estate acquires commercial real estate, operating businesses, and real estate–anchored assets across Texas using creative capital structures including Equity Carry, Owner Financing, and Hybrid Capital Stack.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(regs) {
      regs.forEach(function(reg) { reg.unregister(); });
      if (regs.length > 0 && 'caches' in window) {
        caches.keys().then(function(names) {
          names.forEach(function(name) { caches.delete(name); });
        });
        setTimeout(function() { window.location.reload(true); }, 100);
      }
    });
  }
  if ('caches' in window) {
    caches.keys().then(function(names) {
      names.forEach(function(name) {
        if (name.indexOf('workbox') !== -1 || name.indexOf('vite') !== -1 || name.indexOf('precache') !== -1) {
          caches.delete(name);
        }
      });
    });
  }
})();
`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
