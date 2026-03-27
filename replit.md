# Portfolio - Monal Dasari

A Next.js 15 personal portfolio website migrated from Vercel to Replit.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Nodemailer (server-side) + EmailJS (client-side)
- **Icons**: React Icons
- **Language**: TypeScript

## Project Structure
- `src/app/` — Next.js App Router pages and API routes
- `src/components/` — Reusable React components
- `public/` — Static assets

## Running the App
The app runs via the "Start application" workflow:
```
npm run dev
```
Runs on port 5000 bound to 0.0.0.0 for Replit compatibility.

## Environment Variables
See `.env.local.example` for available configuration. Key variables:
- `CONTACT_EMAIL` — Where contact form submissions are sent
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — SMTP config for sending emails

All email config is optional; the contact form works without it (emails just won't be delivered).

## Notes
- Scripts updated to use `-p 5000 -H 0.0.0.0` for Replit's preview pane
- Uses npm as package manager (package-lock.json present)
