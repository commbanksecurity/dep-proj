/**
 * All business content lives here so it can be updated in one place.
 *
 * IMPORTANT (from the business plan, section 2):
 *  - Never call the product a "deposit", never use "bank" for the product, never say "guaranteed".
 *  - Every rate must be shown with a plain risk warning next to it.
 *  - Replace every value marked PLACEHOLDER before going live, and have compliance review all copy.
 */

export const site = {
  name: "Golden Treasure Capital",
  shortName: "GTC",
  tagline: "Secure. Transparent. Built for Long Term Growth.",
  // PLACEHOLDER contact details (taken from the design mockup)
  phone: "1300 123 456",
  email: "info@goldentreasurecapital.com.au",
  address: "Level 12, 123 Collins Street, Melbourne VIC 3000",
  hours: "Mon – Fri, 9:00am – 5:30pm AEST",
  // PLACEHOLDER licensing details – fill in once the AFSL / authorised representative number is issued
  abn: "00 000 000 000",
  afsl: "AFSL [pending]",
  responsibleEntity: "[Responsible Entity name]",
  // Set to false once real, verified reviews replace the sample testimonials.
  showSampleReviewNotice: true,
  ratesAsAt: "1 November 2026",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/investments", label: "Investments" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about-us", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export type Product = {
  slug: string;
  name: string;
  termMonths: number;
  minimum: number;
  /** PLACEHOLDER target rate, % p.a., variable, after fees. Not a promise. */
  targetRate: number;
  summary: string;
  icon: "calendar" | "chart" | "diamond";
  features: string[];
};

// Products and minimums from the business plan (section 4). Rates are placeholders.
export const products: Product[] = [
  {
    slug: "6-month",
    name: "6 Month Term",
    termMonths: 6,
    minimum: 10000,
    targetRate: 7.35,
    summary: "Shorter commitment with flexible terms.",
    icon: "calendar",
    features: [
      "Minimum investment $10,000",
      "Return paid at maturity",
      "Option to reinvest at maturity",
      "Track online 24/7",
    ],
  },
  {
    slug: "12-month",
    name: "12 Month Term",
    termMonths: 12,
    minimum: 25000,
    targetRate: 10.85,
    summary: "Balanced growth and stability.",
    icon: "chart",
    features: [
      "Minimum investment $25,000",
      "Monthly or at-maturity returns",
      "Option to reinvest at maturity",
      "Track online 24/7",
    ],
  },
  {
    slug: "24-month",
    name: "24 Month Term",
    termMonths: 24,
    minimum: 25000,
    targetRate: 12.25,
    summary: "Longer term for a higher target return.",
    icon: "diamond",
    features: [
      "Minimum investment $25,000",
      "Monthly or at-maturity returns",
      "Option to reinvest at maturity",
      "Track online 24/7",
    ],
  },
];

export const riskWarningShort =
  "Target returns are variable, reviewed monthly and not guaranteed. This is not a bank deposit and is not covered by the Australian Government deposit guarantee. You could lose some or all of your money, and withdrawals may be delayed. Read the PDS and TMD before investing.";

export type Testimonial = { quote: string; name: string; state: string; initials: string };

// SAMPLE testimonials for design preview only. Australian Consumer Law prohibits fake
// reviews – replace these with real, verified reviews before launch.
export const testimonials: Testimonial[] = [
  {
    quote: "A secure and reliable investment partner. The online portal makes it easy to see exactly where my money is.",
    name: "James Carter",
    state: "NSW",
    initials: "JC",
  },
  {
    quote: "Great communication from start to finish. The team explained the risks clearly before I invested.",
    name: "Melissa Taylor",
    state: "QLD",
    initials: "MT",
  },
  {
    quote: "Easy process and fantastic support team. Verification took minutes and the dashboard is very clear.",
    name: "David Wilson",
    state: "WA",
    initials: "DW",
  },
  {
    quote: "Professional service and plain-English documents. I always know when my term matures.",
    name: "Sarah Mitchell",
    state: "VIC",
    initials: "SM",
  },
  {
    quote: "As an SMSF trustee I appreciate the clear reporting and tax statements every year.",
    name: "Robert Nguyen",
    state: "SA",
    initials: "RN",
  },
  {
    quote: "Friendly people on the phone who actually answered my questions. Simple and transparent.",
    name: "Karen O'Brien",
    state: "TAS",
    initials: "KO",
  },
];

export const steps = [
  {
    title: "Create Your Account",
    text: "Sign up in minutes with your name, email and mobile number.",
    icon: "user",
  },
  {
    title: "Choose Your Investment",
    text: "Pick a 6, 12 or 24-month term and read the PDS and TMD.",
    icon: "file",
  },
  {
    title: "Verify & Fund",
    text: "Complete a quick identity check, then transfer funds by PayID or bank transfer.",
    icon: "shield",
  },
  {
    title: "Track Your Growth",
    text: "Monitor your balance, returns and statements in the investor portal.",
    icon: "chart",
  },
] as const;

export const faqs = [
  {
    q: "Is this a term deposit?",
    a: "No. Our fixed-term investments are units in a registered managed investment scheme. They are not bank deposits and are not covered by the Australian Government deposit guarantee (Financial Claims Scheme).",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. Rates shown are target returns. They are variable, reviewed monthly and depend on what the fund actually earns. You could lose some or all of your money.",
  },
  {
    q: "What is the minimum I can invest?",
    a: "$1,000 for the 6 and 12-month terms and $5,000 for the 24-month term.",
  },
  {
    q: "Can I withdraw early?",
    a: "Investments are designed to be held for the full term. Early withdrawal requests are at the responsible entity's discretion and may be delayed or refused. See the PDS for details.",
  },
  {
    q: "How do I fund my investment?",
    a: "Once your identity is verified you can transfer funds from an Australian bank account using PayID or a standard bank transfer.",
  },
  {
    q: "Who can invest?",
    a: "Australian residents aged 18 and over, including individuals, joint investors, companies, trusts and SMSFs, who fall within the Target Market Determination.",
  },
];

export const formatAUD = (n: number, digits = 0) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
