# StokSegar API

Backend RESTful API untuk manajemen inventaris bahan segar UMKM Lapak Steak.

## Prasyarat Sistem
- Node.js (v24.x atau LTS terbaru)
- Git

## Panduan Menjalankan Skrip
Jalankan skrip kalkulasi sisa stok dari root folder:

```powershell
node hitungStok.js
Contoh Output Terminal
=== LAPORAN SISA STOK BAHAN SEGAR LAPAK STEAK ===
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ ayam    │ 5      │
│ kentang │ 5      │
│ wortel  │ 3      │
│ buncis  │ 4      │
│ tomat   │ 2.5    │
└─────────┴────────┘

#### Penjelasan Bagian Dokumentasi:
- `# StokSegar API`: Judul utama repositori.
- `## Prasyarat Sistem`: Menjelaskan requirement minimum agar orang lain tahu runtime apa yang diperlukan.
- `## Panduan Menjalankan Skrip`: Perintah spesifik yang bisa langsung di-copy oleh penguji.
- `## Contoh Output Terminal`: Bukti hasil eksekusi valid sebagai pembanding.

3. **Lakukan commit ke-3** via terminal VS Code:

```powershell
git add README.md
git commit -m "docs: perbarui panduan eksekusi skrip di readme"
4. Periksa log riwayat Git:
git log --oneline