import { NetworkIntakeForm } from "@/components/network-intake-form";
export const metadata = { title: "Submit an Off-Market Deal | Marss Real Estate" };
export default function SubmitDealPage() {
  return <main className="min-h-screen bg-black px-5 pb-24 pt-32 text-white">
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">Marss Real Estate · Deal Review</p>
      <h1 className="mt-4 text-4xl font-bold">Submit an Investment Opportunity</h1>
      <p className="my-6 text-lg text-gray-300">We evaluate commercial, multifamily, residential 1–4 unit, and business-with-owned-real-estate opportunities. Start with the basic facts.</p>
      <NetworkIntakeForm kind="deals" fields={[
        {name:"name",label:"Your name",required:true},
        {name:"email",label:"Email",required:true},
        {name:"phone",label:"Phone"},
        {name:"address",label:"Property address, city, state",required:true},
        {name:"assetType",label:"Asset category",required:true},
        {name:"askingPrice",label:"Asking or contract price"},
        {name:"income",label:"Current NOI, SDE, or rent (if known)"},
        {name:"debt",label:"Loan balance and assumability (if known)"},
        {name:"control",label:"Relationship to seller or purchase agreement",multiline:true},
        {name:"financing",label:"Seller financing potential",multiline:true},
        {name:"notes",label:"Description and condition",multiline:true}
      ]}/>
      <p className="mt-6 text-sm text-gray-400">Submitting a deal does not constitute an offer or create a compensation agreement.</p>
    </div>
  </main>;
}