import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marssrealestate.com"),
  icons: { icon: "https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg" },
  title: "Marss Real Estate | Real Estate Acquisitions | Texas-Focused",
  description:
    "Marss Real Estate acquires self-storage, mobile home and RV parks, multifamily and value-add hospitality assets. Texas-focused, with select opportunities nationwide.",
  keywords:
    "real estate acquisition, self-storage acquisition, mobile home park acquisition, RV park acquisition, multifamily acquisition, hotel motel acquisition, Texas real estate, Marss Real Estate",
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Marss Real Estate",
              legalName: "Marss LLC",
              description:
                "Real estate acquisition company acquiring income-producing real estate and real-estate-backed businesses. Texas-focused, with select opportunities nationwide.",
              url: "https://www.marssrealestate.com",
              telephone: "+1-972-694-6407",
              email: "support@marssrealestate.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Frisco",
                addressRegion: "TX",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "State", name: "Texas" },
                { "@type": "Country", name: "United States" },
              ],
              sameAs: [
                "https://www.linkedin.com/in/ahmadqawasmeh/",
                "https://www.facebook.com/1082373624969525",
              ],
              founder: { "@type": "Person", name: "Ahmad Qawasmeh" },
            }),
          }}
        />
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
