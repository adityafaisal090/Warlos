# WARLOS

Website WARLOS berbasis React + Vite.

## Menjalankan di lokal

1. Install dependency:

	- `npm ci`

2. Jalankan mode development:

	- `npm run dev`

3. Build production:

	- `npm run build`

4. Preview build:

	- `npm run preview`

## Deploy ke Vercel

Repo ini sudah disiapkan untuk Vercel (Vite + SPA routing) lewat `vercel.json`.

Di Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Lalu pilih **Deploy**. Untuk routing React Router (mis. refresh di URL selain `/`), konfigurasi rewrite sudah ditangani.
