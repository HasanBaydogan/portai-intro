# AI PORT Website

AI PORT marketing site (Export AI, FLY AI, ERP.aero). Next.js Pages Router with static export.

## Commands

```bash
npm install
npm run dev        # http://localhost:3010
npm run build      # production + static export to out/
```

## Environment

### Local

```bash
NEXT_PUBLIC_FORMS_API_URL=http://localhost:8090/api
```

### Vercel (recommended — avoids mixed content)

Because the site is HTTPS, the browser must not call `http://…:8091` directly.

```bash
NEXT_PUBLIC_FORMS_API_URL=/api
FORMS_BACKEND_URL=http://185.8.131.94:8091/api
```

Redeploy after changing `FORMS_BACKEND_URL` (it is read at build time for rewrites).

### Static export (optional / cPanel)

```bash
STATIC_EXPORT=true
NEXT_PUBLIC_FORMS_API_URL=https://backoffice-api.aiport.tr/api
```

Static export cannot proxy; the Forms API must be HTTPS.
