/**
 * Long-form page content (FAQs, insights, team, values, process steps).
 * Same rules as site.ts: never "deposit" / "bank" for the product, never "guaranteed",
 * and everything marked PLACEHOLDER or SAMPLE must be replaced and compliance-reviewed before launch.
 */

/** Stock photography (Unsplash licence). Download and self-host before going live. */
export const img = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const photos = {
  sydneyNight: "1523482580672-f109ba8cb9be",
  sydneyHarbour: "1506973035872-a4ec16b8e8d9",
  towers: "1486406146926-c627a92ad1ab",
  laptopPhone: "1563986768609-322da13575f3",
  laptopDashboard: "1460925895917-afdab827c52f",
  office: "1497366216548-37526070297c",
  teamWin: "1600880292203-757bb62b4baf",
  calculatorDocs: "1554224154-26032ffc0d07",
  chartsDesk: "1434626881859-194d67b2b86f",
  coinPlant: "1579621970563-ebec7560ff3e",
  analytics: "1551288049-bebda4e38f71",
  paperwork: "1554224155-6726b3ff858f",
  melbourne: "1514395462725-fb4566210144",
  handshake: "1521791136064-7986c2920216",
  signing: "1450101499163-c8848c66ca85",
  onlineForm: "1559526324-4b87b5e36e44",
  family: "1511895426328-dc8714191300",
  teamMeeting: "1556761175-5973dc0f32e7",
};

/* ---------------------------------------------------------------- How it works */

export const journey = [
  {
    n: "01",
    title: "Register",
    lead: "Create your secure online account in about five minutes.",
    points: [
      "Enter your name, email address and Australian mobile number",
      "Choose how you'll invest: individual, joint, company, trust or SMSF",
      "Set a strong password and turn on two factor authentication",
      "No obligation to invest. Explore the portal first if you like",
    ],
    time: "~5 minutes",
  },
  {
    n: "02",
    title: "Verify your identity",
    lead: "Australian law (AML/CTF Act) requires us to confirm who you are.",
    points: [
      "Electronic verification against government data sources in most cases",
      "Have your driver licence, passport or Medicare card ready",
      "Companies, trusts and SMSFs also provide entity and beneficial owner details",
      "Your documents are encrypted and stored on Australian servers",
    ],
    time: "Usually same day",
  },
  {
    n: "03",
    title: "Apply",
    lead: "Choose your term, amount and how you want returns paid.",
    points: [
      "Select a 6, 12 or 24 month term and your investment amount",
      "Pick monthly returns (12 and 24 month terms) or returns at maturity",
      "Read the PDS and TMD and confirm the product suits your needs",
      "Nominate the Australian bank account your returns will be paid into",
    ],
    time: "~10 minutes",
  },
  {
    n: "04",
    title: "Fund",
    lead: "Transfer your funds from an Australian bank account.",
    points: [
      "Pay by PayID or standard bank transfer using your unique reference",
      "Funds are paid into the fund's application account, held by an independent custodian",
      "We never ask for card details, cash or cryptocurrency",
      "You'll receive an email and portal confirmation once funds clear",
    ],
    time: "1 to 2 business days",
  },
  {
    n: "05",
    title: "Earn & track",
    lead: "Your investment starts earning from the day funds are allocated.",
    points: [
      "Monthly returns are paid on or around the first business day of each month",
      "See balances, returns and transaction history in the investor portal 24/7",
      "Annual tax statements are issued each July for your tax return",
      "We'll remind you 30 days before your term matures",
    ],
    time: "During your term",
  },
  {
    n: "06",
    title: "Withdraw or reinvest",
    lead: "At maturity, you decide what happens next.",
    points: [
      "Withdraw your capital and any final return to your nominated account",
      "Reinvest for the same or a different term at the rate applying then",
      "Change your instructions in the portal any time before maturity",
      "If we don't hear from you, the PDS explains the default rollover rules",
    ],
    time: "At term end",
  },
];

export const needToApply = [
  "Australian residential address",
  "Driver licence, passport or Medicare card",
  "Australian bank account in your (or your entity's) name",
  "Tax File Number (optional, avoids withholding tax)",
  "ABN/ACN and trust deed details (where applicable) for companies, trusts and SMSFs",
  "A valid email address and Australian mobile number",
];

/* ---------------------------------------------------------------- About */

export const values = [
  { title: "Integrity", text: "We say what we do and do what we say. Rates, fees and clear terms are always shown together." },
  { title: "Transparency", text: "Clear documents and reporting, with no hidden fees at maturity." },
  { title: "Prudence", text: "We favour conservative, income focused assets and disciplined lending criteria." },
  { title: "Service", text: "Real people based in Australia who pick up the phone and answer your questions." },
  { title: "Accountability", text: "Independent custody, audited accounts and a clear complaints process." },
  { title: "Long term thinking", text: "We measure success by investors who stay with us term after term." },
];

export const milestones = [
  { year: "2024", text: "Golden Age Capital founded in Melbourne by a team with backgrounds in funds management and lending." },
  { year: "2025", text: "Investment framework, custody arrangements and compliance programme established." },
  { year: "2026", text: "Investor portal launched with online sign up, electronic ID verification and 24/7 reporting." },
  { year: "Next", text: "Expanding our product range and investor education programme across Australia." },
];

/** Partner logos (whitespace-trimmed copies) live in /public/partners. */
export const partners = [
  { name: "Macquarie", logo: "/partners/macquarie.png" },
  { name: "ING", logo: "/partners/ing.png" },
  // Squarer logo, so it gets more height to look the same size as the others.
  { name: "AMP", logo: "/partners/amp.png", tall: true },
  { name: "Suncorp", logo: "/partners/suncorp.png" },
];

/** Management team. Photos live in /public/team. */
export const team = [
  { name: "Marcus Dalton", role: "Managing Director", photo: "/team/marcus-dalton.jpeg", bio: "Leads strategy and investor relationships. Background in funds management and corporate finance." },
  { name: "Christian Connor", role: "Chief Investment Officer", photo: "/team/christian-connor.jpeg", bio: "Chairs the Investment Committee and sets the fund's asset allocation and credit policy." },
  { name: "Rebecca Crawford", role: "Head Of Compliance & Governance", photo: "/team/rebecca-crawford.jpeg", bio: "Oversees the compliance plan, AML/CTF program, governance framework and regulatory reporting." },
  { name: "Cameron Shaw", role: "Head Of Client Services", photo: "/team/cameron-shaw.jpeg", photoOffset: 7, bio: "Runs our local based support team and the investor portal experience for every investor." },
];

/* ---------------------------------------------------------------- Reviews */

/** ILLUSTRATIVE scenarios, not real clients. Label them as such on the page. */
export const caseStudies = [
  {
    title: "Retiree building a monthly income stream",
    who: "Couple, 66 and 68, Gold Coast QLD",
    goal: "Supplement their Age Pension with predictable monthly income while keeping capital accessible within two years.",
    approach: "Split $80,000 across 12 and 24 month terms with monthly returns, so one tranche matures each year.",
    outcome: "Monthly payments land in their everyday account, and a staggered maturity gives them a regular decision point.",
    photo: "1511895426328-dc8714191300",
  },
  {
    title: "SMSF trustee diversifying from cash",
    who: "SMSF with two members, Perth WA",
    goal: "Find an income focused option alongside shares and cash, with clear annual reporting for the fund's auditor.",
    approach: "Allocated a portion of cash holdings to a 12 month term with returns paid at maturity.",
    outcome: "Annual statements and an auditor ready summary are downloaded straight from the portal.",
    photo: "1554224155-6726b3ff858f",
  },
  {
    title: "Young professional saving for a home deposit",
    who: "Individual, 31, Sydney NSW",
    goal: "Put savings to work for a set period before buying a first home in around two years.",
    approach: "Started with $10,000 in a 6 month term and adds new investments as savings grow.",
    outcome: "Short terms keep the timeline flexible, and maturity reminders help with planning.",
    photo: "1563986768609-322da13575f3",
  },
];

export const serviceStats = [
  { value: "< 1 day", label: "Target response time for enquiries" },
  { value: "Mon to Fri", label: "Australian based phone support" },
  { value: "24/7", label: "Investor portal access" },
  { value: "30 days", label: "Maximum complaint resolution target" },
];

/* ---------------------------------------------------------------- FAQs */

export type FaqCategory = { id: string; title: string; items: { q: string; a: string }[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "investing",
    title: "Investment questions",
    items: [
      { q: "What exactly am I investing in?", a: "You acquire units in a registered managed investment scheme for a fixed term. The fund pools investor money and invests in Australian income producing assets according to its investment policy, set out in the Product Disclosure Statement (PDS)." },
      { q: "Is this a term deposit?", a: "No. Our fixed term investments are not bank deposits and are not covered by the Australian Government deposit guarantee (Financial Claims Scheme). They carry different risks to a term deposit, which is why target returns are higher." },
      { q: "Are returns guaranteed?", a: "No. Rates shown are target returns. They are variable, reviewed monthly and depend on what the fund actually earns. Actual returns may be lower than the target, or nil, and you could lose some or all of your capital." },
      { q: "What is the minimum investment?", a: "$10,000 for the 6 month term and $25,000 for the 12 and 24 month terms. There is no maximum, although large applications may be subject to additional checks." },
      { q: "Who can invest?", a: "Australian residents aged 18 and over, including individuals, joint investors, companies, trusts and SMSFs, who fall within the product's Target Market Determination (TMD)." },
      { q: "Should I get financial advice?", a: "Information on this website is general only. We recommend you consider your own circumstances and speak with a licensed financial adviser before investing." },
    ],
  },
  {
    id: "registration",
    title: "Account registration",
    items: [
      { q: "How long does it take to open an account?", a: "Around five minutes to register and ten minutes to complete an application. Most identity checks are completed electronically on the same day." },
      { q: "Can I invest through my SMSF, company or trust?", a: "Yes. Choose the relevant investor type during registration. You'll need the entity's ABN, trustee details and, for trusts and SMSFs, details from the trust deed." },
      { q: "Can I open a joint account?", a: "Yes. Both investors register and verify their identity, and either can view the account. Instructions such as withdrawals require authorisation as set out in your application." },
      { q: "I already have an account. How do I add a new investment?", a: "Log in to the investor portal and choose ‘New investment’. Your verified details carry over, so you only need to pick a term and amount." },
    ],
  },
  {
    id: "verification",
    title: "Verification requirements",
    items: [
      { q: "Why do you need to verify my identity?", a: "The Anti Money Laundering and Counter Terrorism Financing Act 2006 requires us to verify every investor before accepting funds. It also protects you against identity fraud." },
      { q: "Which documents are accepted?", a: "An Australian driver licence, Australian or foreign passport, or Medicare card. We'll ask for additional documents if electronic verification can't be completed." },
      { q: "What if electronic verification fails?", a: "Our team will contact you to arrange alternative verification, such as certified copies of documents. Your application stays saved in the meantime." },
      { q: "Do you check beneficial owners for entities?", a: "Yes. For companies and trusts we verify directors, trustees and individuals who own or control 25% or more of the entity." },
    ],
  },
  {
    id: "payments",
    title: "Payments and returns",
    items: [
      { q: "How do I pay for my investment?", a: "By PayID or standard bank transfer from an Australian bank account in your name, using the unique reference shown in your portal. We never accept cash, cards or cryptocurrency." },
      { q: "When are returns paid?", a: "For monthly options, returns are paid on or around the first business day of each month. For at maturity options, returns are paid with your capital at the end of the term." },
      { q: "Can my target rate change during my term?", a: "Target rates are variable and reviewed monthly. The rate you receive depends on the fund's actual earnings and may change during your term. Changes are published on our website and in the portal." },
      { q: "Are there any fees?", a: "There are no application fees and no fees at maturity. Management costs are paid by the fund and are reflected in the target rate, which is shown after fees. Full fee details are in the PDS." },
      { q: "How are returns taxed?", a: "Returns are generally assessable income. We issue an annual tax statement each July. Providing your TFN avoids tax being withheld at the highest marginal rate." },
    ],
  },
  {
    id: "withdrawals",
    title: "Withdrawals",
    items: [
      { q: "What happens when my term matures?", a: "We email you 30 days before maturity. You can choose to withdraw, reinvest for the same term, or switch to a different term at the rate applying at that time." },
      { q: "How long do withdrawals take at maturity?", a: "Funds are usually paid to your nominated account within 2 to 5 business days of maturity. In some circumstances described in the PDS, withdrawals may be delayed or suspended." },
      { q: "Can I withdraw before my term ends?", a: "Investments are designed to be held for the full term. Early withdrawal requests are at the responsible entity's discretion, may incur a reduced rate and may be delayed or refused." },
      { q: "Can I change my nominated bank account?", a: "Yes, through the portal. For your security, changes require two factor authentication and we send a confirmation to your registered email and mobile." },
    ],
  },
  {
    id: "security",
    title: "Security and privacy",
    items: [
      { q: "How is my money held?", a: "Fund assets are held by an independent custodian, separate from Golden Age Capital's own business accounts. The fund's accounts and compliance plan are audited annually." },
      { q: "How do you protect my personal information?", a: "Data is encrypted in transit and at rest, stored with Australian hosted providers and handled in line with the Australian Privacy Principles. See our Privacy Policy for details." },
      { q: "How do I spot a scam using your name?", a: "We will never cold call offering investments, ask you to pay into a personal account, or request cryptocurrency or gift cards. If in doubt, hang up and call us on the number on this website." },
      { q: "What if I have a complaint?", a: "Contact us first and we'll aim to resolve it within 30 days. If you're not satisfied, you can contact the Australian Financial Complaints Authority (AFCA) free of charge." },
    ],
  },
];

/* ---------------------------------------------------------------- Insights */

export type Article = {
  slug: string;
  title: string;
  category: "Market insights" | "Investor education" | "Articles" | "Announcements";
  date: string;
  excerpt: string;
  photo: string;
  body: { h?: string; p: string }[];
};

export const articles: Article[] = [
  {
    slug: "rba-rates-what-it-means-for-income-investors",
    title: "Cash rate on hold: what it means for Australian income investors",
    category: "Market insights",
    date: "12 November 2026",
    excerpt: "With the cash rate steady, we look at how income investors are weighing term based options against at call savings.",
    photo: "1551288049-bebda4e38f71",
    body: [
      { p: "The Reserve Bank's decision to keep the cash rate on hold has given income investors a moment to reassess. Savings account rates tend to move quickly with expectations of rate cuts, while fixed term products can offer more predictability over a set period." },
      { h: "Why the term matters", p: "When rates are expected to fall, some investors prefer to commit funds for longer, while others keep terms short to stay flexible. There is no single right answer. It depends on when you'll need the money and how much certainty you want." },
      { h: "Balancing return and risk", p: "Higher target returns usually reflect higher risk. Before comparing headline rates, check what the product invests in, whether it is covered by the Financial Claims Scheme, and how easily you can access your money." },
      { h: "Our view", p: "We review target rates monthly against the fund's actual earnings. We'll continue to publish any changes on our website and in the investor portal so investors can see exactly where rates stand." },
    ],
  },
  {
    slug: "term-investment-vs-term-deposit",
    title: "Fixed term investment vs term deposit: understanding the difference",
    category: "Investor education",
    date: "28 October 2026",
    excerpt: "They sound similar, but the protections, risks and returns are different. Here's a plain English comparison.",
    photo: "1554224154-26032ffc0d07",
    body: [
      { p: "A bank term deposit and a fixed term managed investment can look alike: both ask you to commit money for a set period in exchange for a return. Underneath, they work very differently." },
      { h: "Who holds the risk", p: "Bank term deposits up to $250,000 per person per institution are covered by the Australian Government's Financial Claims Scheme. Managed investment schemes are not. If the fund's assets underperform, your returns and capital can be affected." },
      { h: "Why returns differ", p: "Because investors take on more risk, managed fixed term products generally offer higher target returns. A target return is not a promise. It can change and may not be achieved." },
      { h: "Questions to ask", p: "What does the fund invest in? Who is the custodian? What happens if many investors want their money back at once? A good PDS answers all of these in plain English." },
    ],
  },
  {
    slug: "smsf-income-strategies-2026",
    title: "Five income ideas SMSF trustees are discussing in 2026",
    category: "Articles",
    date: "15 October 2026",
    excerpt: "From laddering maturities to reviewing cash buffers, here's what's on the agenda for self managed super funds.",
    photo: "1554224155-6726b3ff858f",
    body: [
      { p: "SMSF trustees have a legal duty to invest according to their fund's investment strategy, which must consider diversification, liquidity and the members' needs. Income options are a frequent discussion point." },
      { h: "1. Laddering maturities", p: "Spreading money across 6, 12 and 24 month terms means part of the portfolio matures regularly, helping meet pension payments without selling growth assets." },
      { h: "2. Reviewing the cash buffer", p: "Many funds hold more cash than they need. Reviewing upcoming expenses can free up funds for term based options." },
      { h: "3. Checking the TMD", p: "Every product's Target Market Determination describes who it is designed for. Trustees should check that a product is suitable for their fund before investing." },
      { h: "4. Auditor ready reporting", p: "Look for providers that issue annual statements and holding summaries that your SMSF auditor can rely on." },
      { h: "5. Getting advice", p: "An SMSF specialist adviser can help align any investment with your fund's strategy and members' retirement goals." },
    ],
  },
  {
    slug: "investor-portal-launch",
    title: "Our new investor portal is live",
    category: "Announcements",
    date: "1 October 2026",
    excerpt: "Open an account, verify your identity and track every investment online, all in one secure place.",
    photo: "1460925895917-afdab827c52f",
    body: [
      { p: "We're pleased to announce the launch of the Golden Age Capital investor portal, giving investors 24/7 access to their accounts." },
      { h: "What you can do", p: "Register and apply online, complete electronic identity verification, view balances and returns, download statements and update your maturity instructions." },
      { h: "Built for security", p: "The portal uses two factor authentication, encryption in transit and at rest, and Australian hosted infrastructure." },
    ],
  },
  {
    slug: "how-to-read-a-pds",
    title: "How to read a Product Disclosure Statement in 15 minutes",
    category: "Investor education",
    date: "18 September 2026",
    excerpt: "A PDS can be long. These are the sections that matter most, and the questions to ask as you read.",
    photo: "1450101499163-c8848c66ca85",
    body: [
      { p: "A Product Disclosure Statement (PDS) is a legal document that explains how a financial product works. It can run to dozens of pages, but a few sections deserve most of your attention." },
      { h: "Key features and risks", p: "Start with the summary of key features and the risks section. These tell you what you're investing in and what could go wrong." },
      { h: "Fees and costs", p: "Look for the fees table. Check whether advertised returns are shown before or after fees." },
      { h: "Withdrawals", p: "Understand how and when you can get your money back, and the circumstances in which withdrawals might be delayed." },
    ],
  },
  {
    slug: "melbourne-office-opening",
    title: "Welcome to our Collins Street office",
    category: "Announcements",
    date: "2 September 2026",
    excerpt: "Our team has moved into a new home in Melbourne's CBD, with meeting rooms for investor consultations.",
    photo: "1514395462725-fb4566210144",
    body: [
      { p: "Golden Age Capital has moved into new offices on Collins Street, Melbourne. Investors are welcome to book a face to face consultation with our client services team." },
      { h: "Book a meeting", p: "Use the contact form on our website or call us during business hours to arrange a time." },
    ],
  },
];

export const glossary = [
  { term: "Target return", def: "The return the fund aims to pay, shown as a percentage per annum after fees. It is variable and not a promise." },
  { term: "PDS", def: "Product Disclosure Statement: the legal document describing the product, its fees, risks and how to apply." },
  { term: "TMD", def: "Target Market Determination: describes the type of investor a product is designed for." },
  { term: "Responsible entity", def: "The licensed company that operates a registered managed investment scheme and is responsible to investors." },
  { term: "Custodian", def: "An independent company that holds the fund's assets on behalf of investors, separate from the manager." },
  { term: "Maturity", def: "The date your fixed term ends and you can withdraw or reinvest your capital." },
  { term: "Laddering", def: "Spreading money across different terms so investments mature at regular intervals." },
  { term: "AFCA", def: "Australian Financial Complaints Authority: a free, independent body that resolves financial complaints." },
];
