# 💌 Semangat Skripsi — A Little Reminder for You ♡

Kartu ucapan digital bertema **"Semangat Skripsi"** dengan desain pink pastel bergaya *digital love letter* & *scrapbook* minimalis.
Dibuat dengan **React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React**. Tanpa backend, siap deploy ke Vercel.

## ✨ Fitur

- **Hero** dengan amplop CSS, hiasan floating hearts/sparkles, dan animasi masuk yang lembut.
- **Interactive Letter**: flap amplop terbuka (3D), kertas naik keluar, lalu surat terbuka dengan animasi smooth. Surat bisa ditutup dan dibuka lagi.
- **Motivation Cards**: tiga kartu bergaya scrapbook dengan warna pastel berbeda dan efek hover.
- **Surprise**: animasi hati menyebar yang ringan, plus pesan *virtual hug*.
- **One More Reminder**: pesan motivasi acak (tidak pernah sama dua kali berturut-turut).
- Responsif, aksesibel (semantic HTML, `aria-*`, focus ring), dan menghormati `prefers-reduced-motion`.

## 🚀 Menjalankan Project

```bash
cd semangat-skripsi
npm install
npm run dev
```

Buka URL yang muncul di terminal (biasanya http://localhost:5173).

Build production:

```bash
npm run build
npm run preview
```

## ▲ Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Di Vercel → **Add New Project** → pilih repo. Jika project ada di subfolder, set **Root Directory** ke `semangat-skripsi`.
3. Vercel otomatis mendeteksi **Vite** (Build: `npm run build`, Output: `dist`). Klik **Deploy**.

## 📁 Struktur Folder

```
semangat-skripsi/
├── index.html              # Google Fonts, meta tags
├── package.json
├── vite.config.js          # React + Tailwind v4 plugin
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx             # State & alur buka/tutup surat
    ├── index.css           # Design tokens (warna, font, keyframes) + reduced motion
    ├── data/
    │   └── content.js      # Isi surat & kumpulan reminder (mudah diedit)
    └── components/
        ├── HeroSection.jsx
        ├── Envelope.jsx
        ├── FloatingDecor.jsx
        ├── LetterCard.jsx
        ├── MotivationCards.jsx
        ├── SurpriseSection.jsx
        ├── SurpriseButton.jsx
        ├── OneMoreReminder.jsx
        ├── Footer.jsx
        └── ui/
            ├── PillButton.jsx
            ├── SectionHeading.jsx
            ├── Divider.jsx
            └── WashiTape.jsx
```

## 💗 Personalisasi

- Ubah isi surat atau daftar reminder di `src/data/content.js`.
- Ubah palet warna/font di blok `@theme` dalam `src/index.css`.
