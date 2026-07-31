# AI PORT Website

AI PORT marketing site (Export AI, FLY AI, ERP.aero). Next.js Pages Router with static export.

## Commands

```bash
npm install
npm run dev        # http://localhost:3010
npm run build      # production + static export to out/
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_FORMS_API_URL` — Backoffice Forms API base (e.g. `https://backoffice-api.aiport.tr/api`)

On Vercel, set the same variable in Project Settings → Environment Variables.

## Notes

- Static export (`output: 'export'`) for Vercel / static hosting
- Languages: Turkish + English via `lib/i18n.ts`
