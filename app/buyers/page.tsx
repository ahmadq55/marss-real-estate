import { NetworkIntakeForm } from "@/components/network-intake-form";
export const metadata = { title: "Buyer & Investor Network | Marss Real Estate" };
export default function BuyersPage() { return <main className="min-h-screen bg-black px-5 pb-24 pt-32 text-white"><div className="mx-auto max-w-4xl">
  <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">Marss Real Estate • Investor Network</p>
  <h1 className="mt-4 text-4xl font-bold">Join Our Buyer Network</h1>
  <p className="my-6 text-lg text-gray-300">Tell us what you buy. We build relationships with active principal buyers and experienced operators across commercial real estate, multifamily, business-plus-property acquisitions, and residential investments.</p>
  <NetworkIntakeForm kind="buyers" fields={[{name:"name",label:"Contact name",required:true},{name:"company",label:"Company"},{name:"email",label:"Email",required:true},{name:"phone",label:"Phone"},{name:"markets",label:"Target markets",required:true},{name:"assetFocus",label:"Asset classes and buy box",multiline:true},{name:"priceRange",label:"Purchase price range"},{name:"funding",label:"Financing approach / buying capacity"},{name:"experience",label:"Acquisition experience",multiline:true}]}/>
  <p className="mt-5 text-sm text-gray-400">This registration is for direct buyers and operators. It is not a securities offering or solicitation for passive investment.</p>
</div></main> }
