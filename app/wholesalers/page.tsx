import Link from "next/link";
import { NetworkIntakeForm } from "@/components/network-intake-form";
export const metadata = { title: "Join Our Wholesaler Network | Marss Real Estate" };
export default function WholesalersPage() { return <main className="min-h-screen bg-black px-5 pb-24 pt-32 text-white"><div className="mx-auto max-w-4xl">
  <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">Marss Real Estate • Nationwide Network</p>
  <h1 className="mt-4 text-4xl font-bold md:text-5xl">Partner With Our Acquisition Network</h1>
  <p className="mt-5 text-lg text-gray-300">We build lasting relationships with experienced wholesalers and deal originators sourcing off-market commercial property, multifamily, businesses with owned real estate, and residential 1–4 unit opportunities.</p>
  <section className="my-10 grid gap-5 md:grid-cols-2">{["Direct acquisitions using disciplined underwriting","Equity Carry and seller financing expertise","Nationwide commercial and residential buy box","Repeat relationships and transparent deal review"].map(s=><div key={s} className="rounded-lg border border-zinc-800 p-5 text-gray-200">{s}</div>)}</section>
  <h2 className="mb-5 text-2xl font-bold">Register as a Sourcing Partner</h2>
  <NetworkIntakeForm kind="wholesalers" fields={[{name:"name",label:"Contact name",required:true},{name:"company",label:"Company"},{name:"email",label:"Email",required:true},{name:"phone",label:"Phone"},{name:"markets",label:"Markets covered",required:true},{name:"assetFocus",label:"Property specialties",multiline:true},{name:"experience",label:"Completed deals / relevant experience",multiline:true},{name:"sellerAccess",label:"Seller access or contract control",multiline:true}]}/>
  <p className="mt-6 text-sm text-gray-400">Submissions are reviewed individually. No assignment fee or other compensation is promised without a separate, legally compliant written agreement.</p>
  <p className="mt-6"><Link className="text-yellow-400 underline" href="/submit-deal">Already have a deal? Submit it here.</Link></p>
</div></main> }
