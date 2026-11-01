export interface Faq {
  q: string;
  a: string;
}

/** Shown on the home page and mirrored into FAQPage JSON-LD, so keep answers plain text. */
export const HOME_FAQS: Faq[] = [
  {
    q: "What is Hostayo?",
    a: "Hostayo is booking and front-desk software for homestays, guest houses, bnbs, villas, small resorts and staycations in the Philippines. It keeps your calendar, guests, balances, cleaning checklists and expenses in one place. We built it while getting our own bnb ready to open.",
  },
  {
    q: "Will Hostayo stop double bookings?",
    a: "It helps, but no app can promise it. Hostayo keeps one calendar for all your units and blocks overlapping bookings entered in it, even when two people book at once. Bookings made on other channels only appear after a sync, so there is always a short window to double-check before you confirm.",
  },
  {
    q: "Can I track deposits and balances for each guest?",
    a: "Yes. Record each deposit and payment against the booking and see what is collected and what is still owed. Your guest sees the same balance on their welcome page.",
  },
  {
    q: "Does Hostayo sync with Airbnb or Booking.com?",
    a: "Not yet. iCal import and export is on the roadmap. Syncs refresh on a delay, so Hostayo will flag overlaps for you to resolve rather than claim they never happen. Today it is built for hosts who take bookings directly, for example from Messenger and Facebook.",
  },
  {
    q: "How much does Hostayo cost?",
    a: "Your first property is free, with as many units as it has. Each property after that will need a subscription; we will announce the price before paid plans start. Early hosts also get help setting up their first units.",
  },
  {
    q: "Can guests pay online?",
    a: "Not yet. Online payments are planned. Today you record GCash, Maya, bank and cash payments yourself, and guests can send proof of payment from their welcome page for you to check.",
  },
  {
    q: "Can my cleaner use it?",
    a: "Yes. Turnover checklists appear when a guest checks out, and your cleaner ticks them off from a phone.",
  },
  {
    q: "Is Hostayo made for the Philippines?",
    a: "Yes. Amounts are in pesos, dates follow Asia/Manila time, and the workflow fits hosts who take bookings through Messenger and Facebook.",
  },
];
