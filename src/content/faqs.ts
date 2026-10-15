export interface Faq {
  q: string;
  a: string;
}

/** Shown on the home page and mirrored into FAQPage JSON-LD, so keep answers plain text. */
export const HOME_FAQS: Faq[] = [
  {
    q: "What is Hostayo?",
    a: "Hostayo is a management app for your staycation. It keeps your calendar, guests, balances, cleaning checklists and expenses in one place.",
  },
  {
    q: "Will Hostayo stop double bookings?",
    a: "It helps, but no app can promise it. Hostayo keeps one calendar for your staycation and blocks overlapping bookings entered in it, even when two people book at once. Bookings made on other channels only appear after a sync, so there is always a short window to double-check before you confirm.",
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
    a: "Hostayo is free. Early hosts also get help setting up their first units.",
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
