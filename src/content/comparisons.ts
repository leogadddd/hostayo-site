/**
 * Competitor comparisons. Keep claims to what is widely documented and say
 * "check their site" for anything that changes (pricing, plans, integrations).
 * Hostayo's own gaps are stated plainly: no OTA sync yet, no online payments.
 */

export const COMPARISON_REVIEWED = "October 2026";

export interface Row {
  label: string;
  hostayo: string;
  other: string;
}

export interface Vs {
  slug: string;
  /** Short name used in headings, e.g. "Hostaway". */
  name: string;
  title: string;
  description: string;
  /** H1 phrased as the search query. */
  h1: string;
  answer: string;
  otherSummary: string;
  rows: Row[];
  chooseOther: string[];
  chooseHostayo: string[];
  faqs: { q: string; a: string }[];
}

export const VS: Vs[] = [
  {
    slug: "spreadsheets-and-messenger",
    name: "spreadsheets and Messenger",
    title: "Hostayo vs spreadsheets and Messenger for short-stay hosts",
    description:
      "Run your short-stay on a spreadsheet and Messenger threads, or on one calendar? See where each breaks down, and when a spreadsheet is still enough.",
    h1: "Is a spreadsheet enough to run a short-stay in the Philippines?",
    answer:
      "For one unit and a few bookings a month, yes. A spreadsheet and Messenger work until two guests ask for the same weekend, or until you cannot say who paid the deposit. Hostayo replaces the spreadsheet once those moments start costing you money.",
    otherSummary:
      "A shared spreadsheet for dates, screenshots for payments, and a group chat with the cleaner. It is free and familiar, and it relies on your memory.",
    rows: [
      {
        label: "Double bookings",
        hostayo: "Overlapping bookings are blocked, even when two people book at once.",
        other: "You check by eye. Two chats at the same time can both get a yes.",
      },
      {
        label: "Deposits and balances",
        hostayo: "Each payment is recorded on the booking. Guest and host see the same balance.",
        other: "Payment proof lives in chat screenshots. Balances are your own arithmetic.",
      },
      {
        label: "Cleaning handoff",
        hostayo: "A checklist appears at checkout. Your cleaner ticks it off from a phone.",
        other: "You message the cleaner each time and wait for a reply.",
      },
      {
        label: "Income per unit",
        hostayo: "Collected cash, held deposits and expenses are shown separately per unit.",
        other: "Possible with formulas you build and maintain yourself.",
      },
      {
        label: "Who changed what",
        hostayo: "An audit log records changes to bookings, payments and settings.",
        other: "Version history on the sheet, if you remember to look.",
      },
      {
        label: "Cost",
        hostayo: "Free during early access.",
        other: "Free.",
      },
    ],
    chooseOther: [
      "You host one unit and rarely have overlapping inquiries.",
      "You are the only person who touches bookings.",
      "Your sheet already works and you trust it.",
    ],
    chooseHostayo: [
      "You have two or more units, or a cleaner or caretaker on your team.",
      "You have been double-booked, or nearly were.",
      "You collect deposits and lose track of who owes what.",
    ],
    faqs: [
      {
        q: "Can I import my spreadsheet into Hostayo?",
        a: "There is no import yet. Most hosts add their upcoming bookings by hand when they start, and we help with the first units during early access.",
      },
      {
        q: "Do I have to stop using Messenger?",
        a: "No. Guests still message you on Messenger. Hostayo is where you record the booking afterwards, so the dates, payments and balance are not buried in the thread.",
      },
    ],
  },
  {
    slug: "hostaway",
    name: "Hostaway",
    title: "Hostayo vs Hostaway for Philippine short-stay hosts",
    description:
      "Hostaway is a channel manager for professional rental managers. Hostayo is a simpler tool for direct-booking hosts in the Philippines. Compare what each is built for.",
    h1: "Hostayo vs Hostaway: which fits a small Philippine host?",
    answer:
      "Hostaway is a full vacation rental platform with channel management, built for professional managers. Hostayo is smaller on purpose: it is for hosts who take direct bookings and want deposits, cleaning and expenses in one calm place. If you need two-way sync with Airbnb and Booking.com today, Hostaway is the stronger fit.",
    otherSummary:
      "Hostaway is vacation rental software that connects listing channels, automates guest messaging and manages operations, aimed at property managers with larger portfolios.",
    rows: [
      {
        label: "Built for",
        hostayo: "Small Philippine hosts, from one room to a portfolio.",
        other: "Professional vacation rental managers.",
      },
      {
        label: "Airbnb and Booking.com sync",
        hostayo: "Not yet. iCal calendar sync is planned.",
        other: "Yes. Channel management is a core feature.",
      },
      {
        label: "Bookings that start in Messenger",
        hostayo: "The workflow is built around them.",
        other: "Designed mainly around channel and website bookings.",
      },
      {
        label: "Pesos and Asia/Manila time",
        hostayo: "Throughout.",
        other: "Check their site for currency and region support.",
      },
      {
        label: "Pricing",
        hostayo: "Free during early access.",
        other: "Paid, priced for professional operators. See their site.",
      },
    ],
    chooseOther: [
      "Most of your bookings come from Airbnb, Booking.com or Vrbo.",
      "You need automated two-way sync and guest messaging now.",
      "You manage a larger portfolio for other owners.",
    ],
    chooseHostayo: [
      "Your bookings start in Messenger, Facebook or word of mouth.",
      "You want deposits, balances and cleaning in one place.",
      "You want a lighter tool without a sales call.",
    ],
    faqs: [
      {
        q: "Can I use Hostayo and Hostaway together?",
        a: "They overlap, so most hosts pick one. Until Hostayo adds calendar sync, you would keep the two calendars in step by hand.",
      },
    ],
  },
  {
    slug: "guesty",
    name: "Guesty",
    title: "Hostayo vs Guesty for Philippine short-stay hosts",
    description:
      "Guesty is a property management platform for professional short-term rental managers. See how it compares with Hostayo for small direct-booking hosts in the Philippines.",
    h1: "Hostayo vs Guesty: is Guesty too much for a small host?",
    answer:
      "Guesty is a full property management platform for professional managers, with channel management and automation. For a small host taking direct bookings it can be more than you need. Hostayo covers the daily work (calendar, deposits, cleaning, expenses) without the channel layer.",
    otherSummary:
      "Guesty is property management software for short-term rental professionals, with channel distribution, automation, messaging and owner tools.",
    rows: [
      {
        label: "Built for",
        hostayo: "Small Philippine hosts and their teams.",
        other: "Professional short-term rental managers and larger portfolios.",
      },
      {
        label: "Airbnb and Booking.com sync",
        hostayo: "Not yet. iCal calendar sync is planned.",
        other: "Yes. Channel distribution is a core feature.",
      },
      {
        label: "Deposits and balances",
        hostayo: "Recorded by hand against each booking, visible to the guest.",
        other: "Payments and invoicing are part of the platform. See their site for details.",
      },
      {
        label: "Cleaning checklists",
        hostayo: "Appear automatically at checkout.",
        other: "Task and operations tools are available. See their site for plan details.",
      },
      {
        label: "Pricing",
        hostayo: "Free during early access.",
        other: "Paid, aimed at professional operators. See their site.",
      },
    ],
    chooseOther: [
      "You run a larger portfolio, or manage properties for other owners.",
      "You depend on channel sync and automated messaging.",
      "You need owner statements and accounting integrations.",
    ],
    chooseHostayo: [
      "You take most bookings directly.",
      "You want to start in an afternoon, not after onboarding.",
      "You mainly need the calendar, balances and cleaning under control.",
    ],
    faqs: [
      {
        q: "Does Hostayo have owner statements?",
        a: "Owner reports, with monthly income and profit per unit, are on the roadmap. Today you can see what each unit earns in reports.",
      },
    ],
  },
  {
    slug: "lodgify",
    name: "Lodgify",
    title: "Hostayo vs Lodgify for Philippine short-stay hosts",
    description:
      "Lodgify combines a booking website, channel manager and payments for vacation rentals. Compare it with Hostayo, built for direct-booking hosts in the Philippines.",
    h1: "Hostayo vs Lodgify: do you need a booking website or a back office?",
    answer:
      "Lodgify helps you build a booking website and connect channels. Hostayo does not build websites or take online payments. It is the back office: calendar, deposits, cleaning and expenses. Pick Lodgify if you want guests to book and pay on your own site.",
    otherSummary:
      "Lodgify is vacation rental software that bundles a website builder, a booking engine, a channel manager and online payments for small and mid-size owners.",
    rows: [
      {
        label: "Core idea",
        hostayo: "A back office for stays you already book.",
        other: "A website and booking engine, plus channel management.",
      },
      {
        label: "Guests book online",
        hostayo: "No. You record bookings after the guest messages you.",
        other: "Yes, through a booking website or widget.",
      },
      {
        label: "Airbnb and Booking.com sync",
        hostayo: "Not yet. iCal calendar sync is planned.",
        other: "Yes, through its channel manager.",
      },
      {
        label: "Turnover and expenses",
        hostayo: "Checklists, damage reports and expense tracking are built in.",
        other: "Not the main focus. See their site for current features.",
      },
      {
        label: "Pricing",
        hostayo: "Free during early access.",
        other: "Paid monthly plans. See their site.",
      },
    ],
    chooseOther: [
      "You want guests to book and pay on a website you own.",
      "You want one tool for your site and your listing channels.",
    ],
    chooseHostayo: [
      "You are happy taking bookings in Messenger.",
      "You want help with deposits, cleaning and expenses.",
      "You want peso amounts and Manila time by default.",
    ],
    faqs: [
      {
        q: "Can guests pay through Hostayo?",
        a: "No. Hostayo records payments you receive, for example by GCash or bank transfer. It does not process payments.",
      },
    ],
  },
];

export interface Alternatives {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  options: { name: string; fit: string; note: string; href?: string }[];
}

export const ALTERNATIVES: Alternatives[] = [
  {
    slug: "hostaway",
    name: "Hostaway",
    title: "Hostaway alternatives for small hosts in the Philippines",
    description:
      "Looking for a Hostaway alternative that is lighter and fits direct bookings? Compare Hostayo, Lodgify and a spreadsheet, and when each makes sense.",
    h1: "What are good Hostaway alternatives for a small host?",
    answer:
      "It depends on why you are looking. If Hostaway is too big, a lighter back office like Hostayo fits. If you need channel sync at a lower price, look at tools aimed at small owners. If you have one unit, a spreadsheet may be enough.",
    options: [
      {
        name: "Hostayo",
        fit: "Direct-booking hosts in the Philippines.",
        note: "Calendar, deposits, cleaning and expenses. No channel sync yet.",
        href: "/vs/hostaway",
      },
      {
        name: "Lodgify",
        fit: "Owners who want a booking website plus channel management.",
        note: "Aimed at small and mid-size owners. Priced in plans.",
        href: "/vs/lodgify",
      },
      {
        name: "Guesty",
        fit: "Professional managers with larger portfolios.",
        note: "A similar tier to Hostaway, so not lighter.",
        href: "/vs/guesty",
      },
      {
        name: "A spreadsheet and Messenger",
        fit: "One unit and few overlapping inquiries.",
        note: "Free, and it depends on your memory.",
        href: "/vs/spreadsheets-and-messenger",
      },
    ],
  },
  {
    slug: "guesty",
    name: "Guesty",
    title: "Guesty alternatives for small hosts in the Philippines",
    description:
      "Guesty too large for your stays? See lighter Guesty alternatives for small hosts, including Hostayo, Lodgify and a spreadsheet, and who each one suits.",
    h1: "What are good Guesty alternatives for a small host?",
    answer:
      "Guesty is built for professional managers. For a small host, a lighter tool is usually enough. Choose by how your guests book: through channels, through your own website, or through Messenger.",
    options: [
      {
        name: "Hostayo",
        fit: "Guests who book through Messenger and Facebook.",
        note: "Back office only. No channel sync or online payments yet.",
        href: "/vs/guesty",
      },
      {
        name: "Lodgify",
        fit: "Owners who want their own booking website.",
        note: "Website, booking engine and channel manager in one.",
        href: "/vs/lodgify",
      },
      {
        name: "Hostaway",
        fit: "Managers who need strong channel management.",
        note: "A similar tier to Guesty.",
        href: "/vs/hostaway",
      },
      {
        name: "A spreadsheet and Messenger",
        fit: "One unit and a handful of bookings a month.",
        note: "Free. Breaks at the first double booking.",
        href: "/vs/spreadsheets-and-messenger",
      },
    ],
  },
  {
    slug: "lodgify",
    name: "Lodgify",
    title: "Lodgify alternatives for direct-booking hosts",
    description:
      "Do you really need a booking website? Compare Lodgify alternatives for hosts who take bookings in Messenger: Hostayo, Hostaway, Guesty and a spreadsheet.",
    h1: "What are good Lodgify alternatives for a Messenger-based host?",
    answer:
      "Lodgify is strong when guests book and pay on your own website. If your bookings start in Messenger and you mostly need to keep dates, deposits and cleaning straight, a back-office tool fits better.",
    options: [
      {
        name: "Hostayo",
        fit: "Hosts who take bookings in Messenger and Facebook.",
        note: "Calendar, deposits, cleaning and expenses. No website builder.",
        href: "/vs/lodgify",
      },
      {
        name: "Hostaway",
        fit: "Managers who need channel management at scale.",
        note: "Paid and aimed at professionals.",
        href: "/vs/hostaway",
      },
      {
        name: "Guesty",
        fit: "Larger portfolios and owner reporting.",
        note: "Paid and aimed at professionals.",
        href: "/vs/guesty",
      },
      {
        name: "A spreadsheet and Messenger",
        fit: "Very small operations.",
        note: "Free, but manual.",
        href: "/vs/spreadsheets-and-messenger",
      },
    ],
  },
];
