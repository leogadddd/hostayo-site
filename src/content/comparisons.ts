/**
 * Competitor comparisons. These pages lead with what Hostayo does better as a
 * management app for one host's staycation. Keep claims about other tools to
 * what is widely documented and say "check their site" for anything that
 * changes (pricing, plans, integrations). Never claim a competitor lacks a
 * feature we have not verified; describe who they are built for instead.
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
  /** Where Hostayo comes out ahead, led with on the page. */
  advantages: { title: string; body: string }[];
  /** Short, honest note on when the other tool fits better. */
  chooseOther: string[];
  faqs: { q: string; a: string }[];
}

export const VS: Vs[] = [
  {
    slug: "spreadsheets-and-messenger",
    name: "spreadsheets and Messenger",
    title: "Hostayo vs spreadsheets and Messenger for staycation hosts",
    description:
      "Why staycation hosts move from spreadsheets and Messenger threads to one management app for the calendar, guests, deposits, cleaning and expenses.",
    h1: "Why run your staycation on Hostayo instead of a spreadsheet?",
    answer:
      "A spreadsheet only holds dates. Hostayo manages the whole stay: the calendar, a welcome page for each guest, deposits and balances, turnover cleaning and expenses. Everything is in one place, so you stop piecing it together from chat threads and screenshots.",
    otherSummary:
      "A shared spreadsheet for dates, screenshots for payments, and a group chat with the cleaner. It is free and familiar, and it relies on your memory.",
    advantages: [
      {
        title: "One place for the whole stay",
        body: "Dates, guest, payments, house rules and cleaning live on the booking, not across four apps.",
      },
      {
        title: "Clashes show up before you say yes",
        body: "Dates already taken in Hostayo can’t be booked again, even when two people book at once. A sheet can’t stop you typing over a row.",
      },
      {
        title: "Everyone sees the same balance",
        body: "Record each payment once. Your guest sees what’s paid and what’s due on their welcome page, so the “nasend ko na po” chase disappears.",
      },
      {
        title: "Your cleaner knows without being told",
        body: "A checklist appears at checkout and gets ticked off from a phone, so you see Ready before the next arrival.",
      },
      {
        title: "Numbers that mean what they say",
        body: "Cash collected, deposits you’re holding and expenses are separate lines per unit, with no formulas to build or break.",
      },
    ],
    rows: [
      {
        label: "Calendar",
        hostayo: "One calendar for your staycation. Overlapping bookings entered in Hostayo are blocked, even when two people book at once.",
        other: "You check by eye. Two chats at the same time can both get a yes.",
      },
      {
        label: "Deposits and balances",
        hostayo: "Each payment is recorded on the booking. Guest and host see the same balance.",
        other: "Payment proof lives in chat screenshots. Balances are your own arithmetic.",
      },
      {
        label: "Guest information",
        hostayo: "A welcome page per booking with dates, house rules, balance and check-in details.",
        other: "You retype the same details into a message each time.",
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
        hostayo: "Free for your first property.",
        other: "Free.",
      },
    ],
    chooseOther: [
      "You host one unit, take a few bookings a month and are the only person who touches them.",
    ],
    faqs: [
      {
        q: "Can I import my spreadsheet into Hostayo?",
        a: "There is no import yet. Most hosts add their upcoming bookings by hand when they start, and we help with the first units.",
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
    title: "Hostayo vs Hostaway for staycation hosts in the Philippines",
    description:
      "Why a staycation host may prefer Hostayo over Hostaway: simpler to run, peso and Manila time by default, deposits and cleaning built in, and free for your first property.",
    h1: "Hostayo vs Hostaway: why Hostayo suits a staycation host better",
    answer:
      "Hostaway is built for professional managers running many listings across channels. Hostayo is built for one host running their own staycation: pesos and Manila time by default, deposits and balances guests can see, turnover cleaning, and expenses, with no sales call and no setup project.",
    otherSummary:
      "Hostaway is vacation rental software that connects listing channels, automates guest messaging and manages operations, aimed at property managers with larger portfolios.",
    advantages: [
      {
        title: "Made for your scale",
        body: "You get the tools a single host uses every day, without the layers a professional manager needs.",
      },
      {
        title: "Start in an afternoon",
        body: "Add your units, your house rules and your upcoming bookings, then share the first welcome page. No sales call.",
      },
      {
        title: "Deposits you can explain",
        body: "Security deposits are tracked as money you hold, apart from income, with refunds and damage deductions on the record.",
      },
      {
        title: "Built for Messenger bookings",
        body: "The workflow starts where many Philippine bookings start: a message, a hold and a deposit.",
      },
      {
        title: "Pesos and Asia/Manila time throughout",
        body: "Amounts, dates and check-in times follow the Philippines by default.",
      },
    ],
    rows: [
      {
        label: "Built for",
        hostayo: "One host running their own staycation, from one room to a few units.",
        other: "Professional vacation rental managers.",
      },
      {
        label: "Getting started",
        hostayo: "Sign up, add your units and go. Free setup help.",
        other: "A larger platform with more to configure. See their site.",
      },
      {
        label: "Bookings that start in Messenger",
        hostayo: "The workflow is built around them.",
        other: "Designed mainly around channel and website bookings.",
      },
      {
        label: "Deposits, balances and refunds",
        hostayo: "Recorded on each booking and shared with the guest. Held deposits are kept apart from income.",
        other: "See their site for current payment features.",
      },
      {
        label: "Turnover cleaning",
        hostayo: "A checklist appears at checkout and your cleaner ticks it off from a phone.",
        other: "Task tools are available. See their site for plan details.",
      },
      {
        label: "Pesos and Asia/Manila time",
        hostayo: "Throughout.",
        other: "Check their site for currency and region support.",
      },
      {
        label: "Pricing",
        hostayo: "Free for your first property.",
        other: "Paid, priced for professional operators. See their site.",
      },
    ],
    chooseOther: [
      "Most of your bookings come from Airbnb, Booking.com or Vrbo and you need automated two-way sync today.",
      "You manage a larger portfolio for other owners.",
    ],
    faqs: [
      {
        q: "Can I use Hostayo and Hostaway together?",
        a: "They overlap, so most hosts pick one. Hostayo plans iCal import and export; until then you would keep the two calendars in step by hand.",
      },
    ],
  },
  {
    slug: "guesty",
    name: "Guesty",
    title: "Hostayo vs Guesty for staycation hosts in the Philippines",
    description:
      "Why a staycation host may prefer Hostayo over Guesty: a lighter management app with calendar, guests, deposits, cleaning and expenses, free for your first property.",
    h1: "Hostayo vs Guesty: why Hostayo fits a staycation host",
    answer:
      "Guesty is a platform for professional managers with channel distribution, automation and owner tools. Hostayo does the daily work of one host’s staycation (calendar, guests, deposits, cleaning, expenses) in a calmer app you can learn in an afternoon.",
    otherSummary:
      "Guesty is property management software for short-term rental professionals, with channel distribution, automation, messaging and owner tools.",
    advantages: [
      {
        title: "Everything you use, nothing you don’t",
        body: "Calendar, welcome pages, balances, turnover and expenses, without owner statements, accounting integrations or channel layers to wade through.",
      },
      {
        title: "A welcome page for every guest",
        body: "Dates, house rules, balance and check-in details in one link your guest can open without an account.",
      },
      {
        title: "Turnover that runs itself",
        body: "Checklists appear automatically at checkout, and damage reports are logged against the booking.",
      },
      {
        title: "Clear money",
        body: "Collected cash, held deposits and expenses are separate and labelled, per unit.",
      },
      {
        title: "No onboarding project",
        body: "Add your units and go. Free for your first property, with help setting up your first units.",
      },
    ],
    rows: [
      {
        label: "Built for",
        hostayo: "One host running their own staycation.",
        other: "Professional short-term rental managers and larger portfolios.",
      },
      {
        label: "Getting started",
        hostayo: "An afternoon, on your own.",
        other: "A larger platform that typically involves onboarding. See their site.",
      },
      {
        label: "Deposits and balances",
        hostayo: "Recorded against each booking and visible to the guest. Held deposits are kept apart from income.",
        other: "Payments and invoicing are part of the platform. See their site for details.",
      },
      {
        label: "Cleaning checklists",
        hostayo: "Appear automatically at checkout.",
        other: "Task and operations tools are available. See their site for plan details.",
      },
      {
        label: "Pesos and Asia/Manila time",
        hostayo: "Throughout.",
        other: "Check their site for currency and region support.",
      },
      {
        label: "Pricing",
        hostayo: "Free for your first property.",
        other: "Paid, aimed at professional operators. See their site.",
      },
    ],
    chooseOther: [
      "You run a larger portfolio or manage properties for other owners.",
      "You need owner statements, accounting integrations or automated channel messaging now.",
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
    title: "Hostayo vs Lodgify for staycation hosts in the Philippines",
    description:
      "Lodgify builds booking websites. Hostayo manages the stay itself: calendar, guests, deposits, cleaning and expenses. See why staycation hosts pick a management app.",
    h1: "Hostayo vs Lodgify: manage the stay, not just the booking page",
    answer:
      "Lodgify helps you build a booking website. Hostayo manages everything that happens once a guest says yes: the calendar, the guest’s welcome page, deposits and balances, turnover cleaning and expenses. For hosts who take bookings in Messenger, that is the part that costs time.",
    otherSummary:
      "Lodgify is vacation rental software that bundles a website builder, a booking engine, a channel manager and online payments for small and mid-size owners.",
    advantages: [
      {
        title: "Covers the work after the booking",
        body: "Check-in, check-out, extensions, cancellations, turnover and damage reports all live on the booking.",
      },
      {
        title: "Fits how you actually book",
        body: "A message, a hold, a deposit. No website to build or maintain first.",
      },
      {
        title: "Expenses and income per unit",
        body: "Track bills, recurring costs and what each unit really earned, in pesos.",
      },
      {
        title: "Deposit and refund paper trail",
        body: "Security deposits, refunds and damage deductions are recorded against the stay.",
      },
      {
        title: "Free for your first property",
        body: "No monthly plan to pick before you know it fits.",
      },
    ],
    rows: [
      {
        label: "Core idea",
        hostayo: "A management app for the whole stay, from first message to checkout.",
        other: "A website and booking engine, plus channel management.",
      },
      {
        label: "After the booking",
        hostayo: "Welcome page, balances, check-in and check-out, turnover checklist and damage reports.",
        other: "See their site for current operations features.",
      },
      {
        label: "Turnover and expenses",
        hostayo: "Checklists, damage reports and expense tracking are built in.",
        other: "Not the main focus. See their site for current features.",
      },
      {
        label: "Pesos and Asia/Manila time",
        hostayo: "Throughout.",
        other: "Check their site for currency and region support.",
      },
      {
        label: "Guests book online",
        hostayo: "No. You record the booking after the guest messages you.",
        other: "Yes, through a booking website or widget.",
      },
      {
        label: "Pricing",
        hostayo: "Free for your first property.",
        other: "Paid monthly plans. See their site.",
      },
    ],
    chooseOther: [
      "You want guests to book and pay on a website you own.",
      "You want one tool for your site and your listing channels.",
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
  /** Why hosts leaving this tool land on Hostayo. */
  advantages: { title: string; body: string }[];
  options: { name: string; fit: string; note: string; href?: string }[];
}

const SWITCH_ADVANTAGES = [
  {
    title: "Made for one host’s staycation",
    body: "Calendar, guests, deposits, cleaning and expenses without the layers professional managers need.",
  },
  {
    title: "Quick to learn",
    body: "Add your units and go. Your cleaner ticks checklists off from a phone.",
  },
  {
    title: "Money that makes sense",
    body: "Collected cash, held deposits and expenses are separate and labelled, in pesos.",
  },
  {
    title: "Free for your first property",
    body: "No plan to choose before you know it fits.",
  },
];

export const ALTERNATIVES: Alternatives[] = [
  {
    slug: "hostaway",
    name: "Hostaway",
    title: "Hostaway alternative for staycation hosts in the Philippines",
    description:
      "Looking for a Hostaway alternative that is simpler and made for one host? See why staycation hosts choose Hostayo, and how Lodgify, Guesty and a spreadsheet compare.",
    h1: "Why Hostayo is a good Hostaway alternative for a staycation host",
    answer:
      "If Hostaway is more than you need, Hostayo is a lighter management app for one host: calendar, guests, deposits, turnover cleaning and expenses, with pesos and Manila time by default.",
    advantages: SWITCH_ADVANTAGES,
    options: [
      {
        name: "Hostayo",
        fit: "Staycation hosts in the Philippines who want the whole stay managed in one app.",
        note: "Calendar, guest welcome pages, deposits, cleaning and expenses. Free for your first property.",
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
    title: "Guesty alternative for staycation hosts in the Philippines",
    description:
      "Guesty too large for your staycation? See why hosts choose Hostayo, a lighter management app, and how Lodgify, Hostaway and a spreadsheet compare.",
    h1: "Why Hostayo is a good Guesty alternative for a staycation host",
    answer:
      "Guesty is built for professional managers. Hostayo is built for the host who runs their own place, with the daily work in one calm app and nothing to onboard.",
    advantages: SWITCH_ADVANTAGES,
    options: [
      {
        name: "Hostayo",
        fit: "Staycation hosts whose guests book through Messenger and Facebook.",
        note: "A management app for the whole stay. Free for your first property.",
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
        note: "Free, but dates, payments and cleaning stay scattered.",
        href: "/vs/spreadsheets-and-messenger",
      },
    ],
  },
  {
    slug: "lodgify",
    name: "Lodgify",
    title: "Lodgify alternative for staycation hosts in the Philippines",
    description:
      "Do you need a booking website, or help managing the stay? See why staycation hosts choose Hostayo over Lodgify, and how Hostaway, Guesty and a spreadsheet compare.",
    h1: "Why Hostayo is a good Lodgify alternative for a staycation host",
    answer:
      "Lodgify is strong when guests book and pay on your own website. If your bookings start in Messenger, the work is after the booking, and Hostayo manages that: dates, deposits, guest pages, cleaning and expenses.",
    advantages: SWITCH_ADVANTAGES,
    options: [
      {
        name: "Hostayo",
        fit: "Hosts who take bookings in Messenger and Facebook and want the stay managed.",
        note: "Calendar, deposits, cleaning and expenses. Free for your first property.",
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
