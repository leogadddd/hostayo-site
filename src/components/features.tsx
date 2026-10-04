import { BarChart3, CalendarDays, Check, ClipboardCheck, FileText, KeyRound, MessageCircle, RefreshCw, Tag } from "lucide-react";
import { Reveal } from "./reveal";

const GROUPS = [
  {
    icon: CalendarDays,
    title: "Bookings & calendar",
    blurb: "Know who’s arriving, staying and leaving, at a glance.",
    items: [
      ["One calendar for every unit", "All your properties and units on a single view. Overlapping bookings are blocked."],
      ["Reservations, start to finish", "Confirm, check in, check out, extend or cancel, all from the booking itself."],
      ["Inventory & availability", "Keep track of what’s in each unit and which dates are open."],
    ],
  },
  {
    icon: FileText,
    title: "Guests",
    blurb: "A better stay starts with one clear page.",
    items: [
      ["A welcome page for every guest", "Each booking gets its own link with the dates, house rules, balance and check-in details."],
      ["House rules per property", "Write them once and they appear on every guest’s welcome page."],
      ["Guest records", "Keep contact details and stay history in one place."],
    ],
  },
  {
    icon: BarChart3,
    title: "Money",
    blurb: "See what came in, what’s owed and what went out.",
    items: [
      ["Deposits & balances", "Record payments by hand and see what’s collected and what’s still owed."],
      ["Refunds & deductions", "Handle damage deductions and refunds with a clear paper trail."],
      ["Expenses & reports", "Track renovations, supplies and utilities, and see what each unit really earns."],
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Operations",
    blurb: "Every turnover handled, nothing left to memory.",
    items: [
      ["Turnover checklists", "The cleaning list appears at checkout, and your team ticks it off from their phone."],
      ["Damage reports", "Log damage with notes and resolve it against the booking."],
      ["Ready-to-book units", "See which units are guest-ready and which still need attention."],
    ],
  },
  {
    icon: KeyRound,
    title: "Team & security",
    blurb: "The right access for everyone, and a record of it.",
    items: [
      ["Roles & permissions", "Owner, Admin, Operations Manager and Staff each see only what they need."],
      ["Two-factor sign-in", "Protect accounts with an authenticator app and recovery codes."],
      ["Audit log", "See who changed what and when, across bookings, payments and settings."],
    ],
  },
] as const;

const COMING_SOON = [
  [Tag, "Seasonal pricing", "Weekend and peak rates, discounts and minimum stays."],
  [RefreshCw, "Calendar sync", "Two-way iCal sync with your other booking channels."],
  [BarChart3, "Owner reports", "Monthly income and profit per unit, exportable as PDF or CSV."],
  [MessageCircle, "Guest messaging", "Automatic confirmation and reminder messages."],
] as const;

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-clay uppercase">Features</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-pine sm:text-6xl">
          Everything a stay needs, from first message to final checkout.
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-pine/10 border-y border-pine/10">
        {GROUPS.map((g) => (
          <Reveal key={g.title} className="grid gap-8 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-sage text-pine">
                <g.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-pine">{g.title}</h3>
              <p className="mt-2 max-w-xs text-pine/65">{g.blurb}</p>
            </div>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {g.items.map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-moss" />
                  <div>
                    <p className="font-semibold text-pine">{title}</p>
                    <p className="mt-1 leading-relaxed text-pine/65">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 rounded-[2rem] bg-sand/70 p-8 sm:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-bold text-pine">On the way</h3>
          <span className="rounded-full bg-clay px-3 py-1 text-xs font-semibold text-white">Coming soon</span>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMING_SOON.map(([Icon, title, body]) => (
            <li key={title}>
              <Icon className="size-6 text-bark" />
              <p className="mt-4 font-semibold text-pine">{title}</p>
              <p className="mt-1 leading-relaxed text-pine/65">{body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
