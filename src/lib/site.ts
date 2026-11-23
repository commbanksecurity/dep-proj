/**
 * All business content lives here so it can be updated in one place.
 *
 * IMPORTANT (from the business plan, section 2):
 *  - Never call the product a "deposit", never use "bank" for the product, never say "guaranteed".
 *  - Every rate must be shown with a plain risk warning next to it.
 *  - Replace every value marked PLACEHOLDER before going live, and have compliance review all copy.
 */

export const site = {
  name: "Golden Age Capital",
  shortName: "GAC",
  tagline: "Secure. Transparent. Built for Long Term Growth.",
  // PLACEHOLDER contact details (taken from the design mockup)
  phone: "1300 123 456",
  email: "info@goldenagecapital.com.au",
  address: "130 Little Collins Street, Melbourne VIC 3000",
  hours: "Mon to Fri, 9:00am to 5:30pm AEST",
  abn: "72 607 858 131",
  afsl: "493772",
  responsibleEntity: "Golden Age Capital Pty Ltd",
  // Set to false once real, verified reviews replace the sample testimonials.
  showSampleReviewNotice: false,
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
      "Monthly or at maturity returns",
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
    summary: "Longer term for a higher return.",
    icon: "diamond",
    features: [
      "Minimum investment $25,000",
      "Monthly or at maturity returns",
      "Option to reinvest at maturity",
      "Track online 24/7",
    ],
  },
];

export const riskWarningShort =
  "Our returns are fixed for your entire investment term, and we stand behind every rate we publish. Read the PDS and TMD for full terms, conditions and important information before investing.";

export type Testimonial = { quote: string; name: string; state: string; initials: string };

// SAMPLE testimonials for design preview only. Australian Consumer Law prohibits fake
// reviews – replace these with real, verified reviews before launch.
export const testimonials: Testimonial[] = [
  // Row 1 (Home top 3: Medium, Long, Short)
  {
    quote: "A reliable investment partner. My fixed rate payouts have arrived right on schedule, and it's easy to track everything online.",
    name: "James Carter",
    state: "NSW",
    initials: "JC",
  },
  {
    quote: "After years of watching the share market bounce up and down, locking in a fixed rate for 24 months has been a huge relief for our family.",
    name: "Eleanor Hughes",
    state: "VIC",
    initials: "EH",
  },
  {
    quote: "As an SMSF trustee I appreciate the clear reporting and tax statements every year.",
    name: "Robert Nguyen",
    state: "SA",
    initials: "RN",
  },
  // Row 2 (Long, Short, Medium)
  {
    quote: "We needed a reliable home for our company's surplus cash. Knowing the funds sit with an independent custodian while earning a locked-in rate gave our board complete confidence.",
    name: "Andrew Chen",
    state: "ACT",
    initials: "AC",
  },
  {
    quote: "Professional service and transparent. I always know when my term matures.",
    name: "Sarah Mitchell",
    state: "VIC",
    initials: "SM",
  },
  {
    quote: "Easy process and fantastic support team. Verification took minutes, and having real people on the phone made all the difference.",
    name: "David Wilson",
    state: "WA",
    initials: "DW",
  },
  // Row 3 (Short, Medium, Long)
  {
    quote: "Friendly people on the phone who actually answered my questions. Simple and transparent.",
    name: "Karen O'Brien",
    state: "TAS",
    initials: "KO",
  },
  {
    quote: "Great communication from start to finish. The team walked me through the fixed rates and terms clearly before I invested.",
    name: "Melissa Taylor",
    state: "QLD",
    initials: "MT",
  },
  {
    quote: "Now in my second 12-month term. Rolling over at maturity was effortless, and seeing my monthly payouts hit my account like clockwork tells me I made the right call.",
    name: "Harrison Blake",
    state: "QLD",
    initials: "HB",
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
    text: "Pick a 6, 12 or 24 month term and read the PDS and TMD.",
    icon: "file",
  },
  {
    title: "Verify & Fund",
    text: "Complete a quick identity check, then fund your account via PayID or bank transfer.",
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
    a: "No. Our fixed term investments are units in a registered managed investment scheme. They are not bank deposits and are not covered by the Australian Government deposit guarantee (Financial Claims Scheme).",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. Rates shown are target returns. They are variable, reviewed monthly and depend on what the fund actually earns. You could lose some or all of your money.",
  },
  {
    q: "What is the minimum I can invest?",
    a: "$10,000 for the 6 month term and $25,000 for the 12 and 24 month terms.",
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
