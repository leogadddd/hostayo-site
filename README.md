# Hostayo site

The marketing site for [Hostayo](https://hostayo.casa), a calmer way for
Philippine short-stay hosts to run their bookings, payments and turnovers. The
product itself lives in [hostayo](https://github.com/leogadddd/hostayo-app)
(app.hostayo.casa).

## What's here

A single-page site: hero, a scroll-told "day with Hostayo", the story of the
name, features, and an early-access request form. Requests are saved in the app
and emailed to the team, and the visitor gets a confirmation email.

## Stack

- Next.js (App Router), React and TypeScript
- Tailwind CSS v4, Lenis for smooth scrolling
- Resend for email (Gmail SMTP as a fallback)
- Deployed on Vercel

> This Next.js version has breaking changes from older releases. Read the guide
> in `node_modules/next/dist/docs/` before changing framework-level code.

## Getting started

```bash
npm install
cp .env.example .env     # then fill in the values below
npm run dev              # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `start` | Production build and server |
| `npm run typecheck` | TypeScript check |

## Environment

All variables are documented in [`.env.example`](./.env.example). Server-only
values never get the `NEXT_PUBLIC_` prefix. Set the same ones in Vercel.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_DEMO_URL` | Where "Try the live demo" links go |
| `NEXT_PUBLIC_APP_URL` | App host; footer legal links point here |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Footer "Email us" link |
| `NEXT_PUBLIC_GA_ID` | Google Analytics, loaded only after a visitor accepts cookies |
| `RESEND_API_KEY`, `EARLY_ACCESS_TO_EMAIL`, `EARLY_ACCESS_FROM` | Early-access emails (verify `hostayo.casa` in Resend to send from your own address) |
| `EARLY_ACCESS_API_SECRET`, `EARLY_ACCESS_API_URL` | Saves each request in the app; must match the app's `EARLY_ACCESS_API_SECRET` |

Generate a secret with `openssl rand -base64 32`.

## How the early-access form works

1. The visitor submits name, email, Facebook or Instagram, number of units and
   where bookings come from.
2. A server action ([`src/app/early-access-action.ts`](./src/app/early-access-action.ts))
   saves the request to the app (`POST /api/early-access`) and emails the team,
   in parallel. The visitor only sees an error if both fail.
3. A confirmation email goes to the visitor.
4. The team reads requests in the app at `/early-access` (L1 operators only).

The form has a hidden honeypot field and an in-memory rate limit per visitor.

## Project layout

```
src/app/             page, layout, share images, server action
src/components/      page sections and the early-access form
src/lib/             form validation, mailer, app inbox client
public/              brand assets and booking-platform logos
```

## License

All rights reserved. No license is granted to use, copy or distribute this code.
