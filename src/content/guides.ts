export interface Guide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  sections: { h2: string; body?: string[]; list?: string[]; ordered?: boolean }[];
  related: string[];
  published: string;
}

/** Short, scannable guides. Each H2 is the question a host would type into search. */
export const GUIDES: Guide[] = [
  {
    slug: "avoid-double-booking",
    title: "How to avoid double booking your staycation unit",
    description:
      "Two guests asked for the same weekend? How staycation hosts in the Philippines reduce double bookings with one calendar, fast blocking and a final check.",
    h1: "How do I avoid double booking my short-stay unit?",
    answer:
      "You can reduce double bookings a lot, but not guarantee zero. Keep one calendar that every booking goes into, block the dates the moment someone says yes, and re-check your other channels before you confirm.",
    sections: [
      {
        h2: "Why do double bookings happen?",
        list: [
          "Two guests message about the same dates within the same hour.",
          "A booking from one channel is not copied to the others.",
          "Dates are saved in a chat or a screenshot, not on a calendar.",
          "Someone on your team books without checking.",
        ],
      },
      {
        h2: "What is the simplest way to prevent them?",
        ordered: true,
        list: [
          "Pick one calendar as the source of truth for every unit.",
          "Block the dates as soon as a guest agrees, before the deposit arrives.",
          "Use a hold for guests who are still deciding, with a deadline.",
          "Give everyone who books the same calendar, not their own copy.",
        ],
      },
      {
        h2: "What if two guests ask at the same time?",
        body: [
          "Reply to the first message first, and block the dates before you answer the second. Software helps here: Hostayo refuses a second booking on dates that are already taken in it, even when two people book at once.",
        ],
      },
      {
        h2: "Does calendar sync fix it completely?",
        body: [
          "No. iCal sync refreshes on a schedule, so two channels can still sell the same night inside that gap, and it never sees bookings that start in Messenger. Hostayo does not sync with Airbnb or Booking.com yet, so keep any channel calendar in step by hand. When iCal arrives, treat it as a safety net: check the calendar right before you confirm.",
        ],
      },
    ],
    related: ["track-guest-deposits", "turnover-cleaning-checklist"],
    published: "2026-10-13",
  },
  {
    slug: "track-guest-deposits",
    title: "How to track guest deposits and balances",
    description:
      "Lost track of who paid the deposit? A simple way for staycation hosts to record deposits, balances and refunds so you and your guest see the same number.",
    h1: "How do I track guest deposits and balances?",
    answer:
      "Record every payment against the booking the moment it arrives, with the amount, date and method. Keep the security deposit separate from income. Then share the balance with the guest so there is one number.",
    sections: [
      {
        h2: "What should I record for each payment?",
        list: [
          "The booking it belongs to.",
          "The amount and the date it arrived.",
          "How it was paid, for example GCash or bank transfer.",
          "Whether it is a reservation deposit, a balance or a security deposit.",
        ],
      },
      {
        h2: "Is a security deposit income?",
        body: [
          "No. It is money you hold and may return. Count it separately from what you earned, or your numbers will look better than they are. Hostayo shows cash collected, deposits you are holding and expenses as separate lines.",
        ],
      },
      {
        h2: "How do I stop the “nasend ko na po” back and forth?",
        body: [
          "Let the guest see their own balance. A welcome page with the dates, house rules and amount due answers most payment questions before they are asked.",
        ],
      },
      {
        h2: "How do I handle refunds and damage deductions?",
        body: [
          "Log the deduction against the booking with a short note, then record the refund of what remains. A clear paper trail avoids arguments later.",
        ],
      },
    ],
    related: ["avoid-double-booking", "turnover-cleaning-checklist"],
    published: "2026-10-13",
  },
  {
    slug: "turnover-cleaning-checklist",
    title: "Turnover cleaning checklist for a staycation unit",
    description:
      "A simple turnover cleaning checklist for staycation units, plus how to hand it to your cleaner so every unit is guest-ready before the next arrival.",
    h1: "What goes on a turnover cleaning checklist?",
    answer:
      "A good checklist covers the bed, bathroom, kitchen, floors, restock and a final walk-through, in the same order every time. Send it the moment a guest checks out so the unit is Ready before the next arrival.",
    sections: [
      {
        h2: "What should a turnover checklist include?",
        list: [
          "Strip and remake the beds with fresh linens.",
          "Clean and restock the bathroom: towels, soap, tissue.",
          "Wash dishes, wipe the kitchen, empty the fridge and trash.",
          "Sweep and mop floors; check under the beds.",
          "Check the aircon, lights and appliances work.",
          "Look for damage or missing items and take photos.",
          "Final walk-through, then lock up.",
        ],
      },
      {
        h2: "How do I get the checklist to my cleaner?",
        body: [
          "Do not retype it every time. Keep one checklist per unit. In Hostayo it appears when the guest checks out, and your cleaner ticks items off from their phone.",
        ],
      },
      {
        h2: "How do I know the unit is ready?",
        body: [
          "When every item is ticked, mark the unit Ready. You can then see at a glance which units are guest-ready and which need attention.",
        ],
      },
      {
        h2: "What if the cleaner finds damage?",
        body: [
          "Log it against the booking with notes and photos, then resolve it. If it leads to a deduction from the security deposit, you already have the record.",
        ],
      },
    ],
    related: ["avoid-double-booking", "track-guest-deposits"],
    published: "2026-10-13",
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
