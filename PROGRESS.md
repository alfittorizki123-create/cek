# Catatan Progres Belajar: StokSegar API

Dokumen ini adalah sumber kebenaran (single source of truth) untuk melacak status modul, fitur yang berjalan, riwayat sesi, dan keputusan teknis.

---

## Log Aktivitas Terakhir
- **Waktu Pembaruan:** 2026-11-10 (Sesi Modul 0 Selesai)
- **Modul Sedang Dipelajari:** Modul 0 - Fondasi
- **Langkah Aktif:** [Modul 0 / Langkah 8] Sinkronisasi Status dan Persiapan Remote GitHub
- **Topik Pembahasan:**
  - Setup lingkungan kerja Node.js v24 dan Git
  - Logika kalkulasi stok bahan segar (buncis, kentang, wortel, tomat, ayam)
  - Validasi bisnis guard clause (pencegahan stok negatif)
  - Refactoring array imperatif ke fungsional (`Array.reduce`)

---

## Ringkasan Status Modul
- [x] Modul 0: Fondasi (Selesai - Siap Tag & Evaluasi)
- [ ] Modul 1: Node.js (Berikutnya)
- [ ] Modul 2: HTTP & REST (Belum dimulai)
- [ ] Modul 3: Express (Belum dimulai)
- [ ] Modul 4: Database PostgreSQL (Belum dimulai)
- [ ] Modul 5: Validasi, Auth & Keamanan (Belum dimulai)
- [ ] Modul 6: Kualitas & Dokumentasi (Belum dimulai)
- [ ] Modul 7: Integrasi Layanan (Belum dimulai)
- [ ] Modul 8: Deployment & DevOps Dasar (Belum dimulai)
- [ ] Modul 9: Lanjutan & Skalabilitas (Belum dimulai)

---

## Informasi Lingkungan & Tooling
- **Sistem Operasi:** Windows
- **Code Editor:** Visual Studio Code
- **Versi Node.js:** v24.14.1
- **Versi npm:** 11.11.0
- **Versi Git:** 2.53.0.windows.1

---

## Keputusan Teknis & Fitur Berjalan
1. **Penyimpanan Memori Sementara:** Menggunakan struktur data objek JavaScript murni di Modul 0 untuk mematangkan logika bisnis sebelum beralih ke database.
2. **Integritas Stok Fisik:** Menolak mutasi `terpakai`/`terbuang` jika kuantitas melebihi sisa stok yang ada (*non-negative stock constraint*).
3. **Konvensi Riwayat Git:** Menerapkan *conventional commits* (`chore:`, `feat:`, `docs:`) untuk mempermudah pelacakan changelog.