# Panduan Deploy ke GitHub Pages

## Konfigurasi Sudah Selesai ✅

Proyek ini sudah dikonfigurasi untuk deployment ke GitHub Pages dengan pengaturan berikut:

### Konfigurasi Vite
- **Base URL**: `/` (root directory)
- **Host**: `0.0.0.0` (untuk Replit)
- **Port**: `5000`

### GitHub Actions Workflow
File `.github/workflows/deploy.yml` sudah dibuat dan akan otomatis:
1. Build proyek saat ada push ke branch `main`
2. Deploy hasil build ke GitHub Pages

## Cara Setup GitHub Pages

### 1. Push ke GitHub
```bash
git add .
git commit -m "Setup for GitHub Pages"
git push origin main
```

### 2. Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih:
   - Source: **GitHub Actions**
4. Klik **Save**

### 3. Tunggu Deployment
- Workflow akan otomatis berjalan
- Cek tab **Actions** untuk melihat progress
- Setelah selesai, website akan tersedia di:
  ```
  https://<username>.github.io/<repository-name>/
  ```

## Testing Lokal

Untuk testing di Replit:
```bash
npm run dev
```
Server akan berjalan di port 5000.

Untuk testing production build:
```bash
npm run build
npm run preview
```

## Troubleshooting

### Jika halaman blank setelah deploy:
1. Pastikan `base` di `vite.config.ts` sudah benar
2. Untuk repository yang bukan di root (misalnya `username.github.io/project`), update `base`:
   ```typescript
   base: '/project/',  // sesuaikan dengan nama repository
   ```

### Jika 404 pada routing:
GitHub Pages tidak mendukung SPA routing secara native. Solusinya:
1. Tambahkan file `public/404.html` yang sama dengan `index.html`
2. Atau gunakan hash routing di React Router

## Build Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
