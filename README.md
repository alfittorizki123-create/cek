# StokSegar API

Backend RESTful API untuk manajemen inventaris bahan segar UMKM Lapak Steak.

## Prasyarat Sistem
- Node.js (v24.x atau LTS terbaru)
- npm
- Git

## Instalasi & Konfigurasi Awal
1. Pasang dependensi:
```powershell
npm install
```
2. Salin template environment menjadi `.env` (jangan pernah commit `.env`):
```powershell
Copy-Item .env.example .env
```

## Panduan Menjalankan

### 1. CLI Pencatat Stok (Modul 1)
Menambah mutasi stok (`masuk`, `terpakai`, `terbuang`) yang tersimpan ke file JSON:
```powershell
npm run cli -- tambah ayam masuk 10
npm run cli -- tambah ayam terpakai 8.5
```

Melihat ringkasan sisa stok:
```powershell
npm run cli -- lihat
```

### 2. Skrip Contoh Memori (Modul 0)
```powershell
node hitungStok.js
```
