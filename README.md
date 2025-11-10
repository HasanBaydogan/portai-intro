# PortAI - Statik Next.js Tanıtım Sitesi

Modern, koyu temalı, cam efektli (glassmorphism) bir tanıtım sitesi. Statik olarak `next export` ile üretilebilir ve cPanel gibi ortamlara kolayca yüklenebilir.

## Komutlar

```bash
npm install
npm run dev        # Geliştirme
npm run build      # Üretim + export (out/ klasörüne)
```

`npm run build` sonrası statik dosyalar `out/` klasöründe oluşur. cPanel üzerinde:

- Alan adının kök klasörüne (örn. `public_html/`) `out/` içeriğini yükleyin.
- İsteğe bağlı olarak `out/` altındaki `index.html` kökte olmalıdır.

## Teknik Notlar
- Next.js (Pages Router) + statik export (`next.config.js > output: 'export'`)
- Görseller için `unoptimized: true` ayarı eklendi.
- Tipografi: Inter fontu
- Koyu tema ve cam efekti, gradient/glow arka planlar


