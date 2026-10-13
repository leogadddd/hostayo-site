export interface Faq {
  q: string;
  a: string;
}

/** Shown on the home page and mirrored into FAQPage JSON-LD, so keep answers plain text. */
export const HOME_FAQS: Faq[] = [
  {
    q: "What is Hostayo?",
    a: "Hostayo is booking and operations software for short-stay hosts in the Philippines. It keeps your calendar, guest balances, cleaning checklists and expenses in one place.",
  },
  {
    q: "How do I stop double bookings?",
    a: "Hostayo keeps one calendar for every unit and blocks overlapping bookings, even when two people book at the same moment.",
  },
  {
    q: "Can I track deposits and balances for each guest?",
    a: "Yes. Record each deposit and payment against the booking and see what is collected and what is still owed. Your guest sees the same balance on their welcome page.",
  },
  {
    q: "Does Hostayo sync with Airbnb or Booking.com?",
    a: "Not yet. Two-way iCal calendar sync is on the roadmap. Today Hostayo is built for hosts who take bookings directly, for example from Messenger and Facebook.",
  },
  {
    q: "How much does Hostayo cost?",
    a: "Hostayo is free while it is in early access. Early hosts also get help setting up their first units.",
  },
  {
    q: "Can my cleaner use it?",
    a: "Yes. Turnover checklists appear when a guest checks out, and your cleaner ticks them off from a phone. Staff only see what their role allows.",
  },
  {
    q: "Is Hostayo made for the Philippines?",
    a: "Yes. Amounts are in pesos, dates follow Asia/Manila time, and the workflow fits hosts who take bookings through Messenger and Facebook.",
  },
];
