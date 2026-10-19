import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Footer } from "@/footer";
import { networkForms, type NetworkFormKind } from "@/lib/network-forms";

const content = {
  wholesalers: {
    eyebrow: "Marss Real Estate · Deal Origination Network",
    title: "Bring the opportunity.", accent: "Build the relationship.",
    description: "Connect with Marss Real Estate as a wholesaler or deal originator. Share where you work, what you source, and how you work with sellers so we can evaluate opportunities together.",
    points: ["Residential 1–4 units, multifamily, commercial, and businesses with owned real estate", "Nationwide relationships, with Texas and Sunbelt markets a priority", "Experience with seller financing and equity carry is welcome"],
    next: "We review your markets, experience, and seller access, then follow up to discuss fit. Registration does not authorize marketing a property or establish a fee agreement.",
    note: "Already have an opportunity? Submit its details separately so each deal can be reviewed.",
    cta: "/submit-a-deal", ctaLabel: "Submit a deal",
  },
  buyers: {
    eyebrow: "Marss Real Estate · Buyer Network",
    title: "Your criteria.", accent: "Relevant opportunities.",
    description: "Tell us what you buy, where you invest, and the price range and financing structures you consider. We use your criteria to assess potential deal matches.",
    points: ["Share your target markets and preferred asset classes", "Define your acquisition budget and financing preferences", "Connect around specific opportunities that fit your criteria"],
    next: "We review your profile and may contact you to clarify your buy box and acquisition readiness. Opportunities are reviewed individually; registration does not guarantee deal availability or returns.",
    note: "Originate opportunities as well? Join the wholesaler network using a separate registration.",
    cta: "/wholesaler-registration", ctaLabel: "Register as a wholesaler",
  },
  deals: {
    eyebrow: "Marss Real Estate · Opportunity Intake",
    title: "A clear opportunity.", accent: "A focused review.",
    description: "Bring us the property, the known numbers, and your relationship to the seller. Include seller financing or equity carry availability when known so we can evaluate the right next step.",
    points: ["Residential, multifamily, commercial, hospitality, and business + real estate", "Provide asking price, income, and existing debt when verified", "Explain your ownership, representation, or contractual rights"],
    next: "We screen the opportunity and follow up with questions or next steps. Submission is not an offer, acceptance, or authorization to distribute the property. Any compensation or participation must be agreed in writing.",
    note: "Want to build a repeat relationship? Register your markets and experience with our wholesaler network.",
    cta: "/wholesaler-registration", ctaLabel: "Join the wholesaler network",
  },
} as const;

export function NetworkLanding({ kind }: { kind: NetworkFormKind }) {
  const page = content[kind];
  const form = networkForms[kind];
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <a href="#registration-form" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow-400 focus:p-3 focus:text-black">Skip to form</a>
      <header className="border-b border-[#242015] bg-black/90">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Marss Real Estate home">
            <Image src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg" alt="" width={44} height={44} className="rounded" />
            <span><span className="block font-bold tracking-widest text-white">MARSS</span><span className="block text-xs tracking-[0.2em] text-yellow-500">REAL ESTATE</span></span>
          </Link>
          <nav aria-label="Network navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {Object.values(networkForms).map((item) => <Link key={item.path} href={item.path} aria-current={item.path === form.path ? "page" : undefined} className={item.path === form.path ? "font-semibold text-yellow-400" : "text-gray-300 transition-colors hover:text-yellow-400"}>{item.label}</Link>)}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <section className="lg:sticky lg:top-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">{page.eyebrow}</p>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">{page.title}<span className="gold-gradient mt-2 block">{page.accent}</span></h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{page.description}</p>
            <ul className="mt-8 space-y-4">{page.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-300"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" /><span>{point}</span></li>)}</ul>
            <div className="mt-9 rounded-xl border border-yellow-900/40 bg-[#100e08] p-6">
              <h2 className="text-sm font-semibold text-white">What happens next</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{page.next}</p>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-gray-400">{page.note}</p>
            <Link href={page.cta} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300">{page.ctaLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </section>
          <section id="registration-form" aria-labelledby="form-heading" className="min-w-0 scroll-mt-5 overflow-hidden rounded-2xl border border-[#302916] bg-[#101010] shadow-2xl">
            <div className="border-b border-[#302916] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-yellow-500">Start the conversation</p>
              <h2 id="form-heading" className="mt-2 text-2xl font-bold text-white">{form.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">Please use business contact details. Do not submit bank statements, proof of funds, identity documents, or confidential third-party files.</p>
              <a href={form.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-400 underline underline-offset-4">Open form in a new tab<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>
            </div>
            <iframe src={form.url} title={`${form.label} form`} className="block h-[1050px] w-full border-0 bg-white sm:h-[1150px]" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-forms allow-same-origin allow-popups" />
            <p className="px-6 py-4 text-xs leading-relaxed text-gray-400 sm:px-8">By submitting, you ask Marss Real Estate to contact you about your registration or opportunity. Form entries are processed through Baserow for Marss Real Estate.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
