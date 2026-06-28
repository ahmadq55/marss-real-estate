import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://marssrealestate.com"),
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
              alt="Marss Real Estate"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">Marss Real Estate</span>
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-colors px-4 py-1.5 rounded"
          >
            Submit a Deal
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#1a1a1a] py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">Marss Real Estate &bull; Frisco, TX &bull; <a href="tel:9727796787" className="hover:text-yellow-400 transition-colors">972.779.6787</a></p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">All Resources</Link>
            <Link href="/" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">marssrealestate.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
