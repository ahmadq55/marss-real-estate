/** Form URLs are public submission addresses, never database credentials. */
export const networkForms = {
  wholesalers: { path: "/wholesaler-registration", label: "Wholesaler Registration", url: "https://baserow.io/form/q3TRxlduWfiMI0w6Dyia4nuhuXsh5jl_V9EgVe1WbJY", tableId: 1269267 },
  buyers: { path: "/buyer-registration", label: "Buyer Registration", url: "https://baserow.io/form/QyzFVsdXDFro5HFxNZIm3_tLXYTpk94hbSMyAgMiIzA", tableId: 1269283 },
  // This form is private in Baserow. Sharing must remain off until owner approval.
  deals: { path: "/submit-a-deal", label: "Deal Submission", url: "https://baserow.io/form/RkMZKLM-_sDjQwRQtHF3hLskwa-FKh9_aJ5_asCi1_I", tableId: 1269285 },
} as const;
export type NetworkFormKind = keyof typeof networkForms;
