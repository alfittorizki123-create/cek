# Catatan Progres Belajar: StokSegar API

Dokumen ini adalah sumber kebenaran (single source of truth) untuk melacak status modul, fitur yang berjalan, riwayat sesi, dan keputusan teknis. **Diperbarui langsung oleh Navigator/AI.**

---

## Log Aktivitas Terakhir
- **Waktu Pembaruan:** 2026-11-12 09:48:32
- **Modul Sedang Dipelajari:** Modul 1 - Node.js
- **Langkah Aktif:** [Modul 1 / Langkah 4] Modul `fs/promises`, `path`, & Penyimpanan JSON (`cli/storage.js` sudah dibuat, menunggu uji jalan + commit checkpoint)
- **Topik Pembahasan:**
  - `.env` & `.env.example` dibuat, `dotenv` v18.0.10 teruji, `.gitignore` terkonfirmasi abaikan `.env` & `node_modules/`
  - Klarifikasi peran folder `cli/` (setara command artisan Laravel) vs HTTP API yang dites lewat Postman di Modul 3
  - `cli/storage.js` ditulis memakai `node:fs/promises`, `node:path`, penanganan `ENOENT` & `SyntaxError` JSON corrupt

---

## Ringkasan Status Modul
- [x] Modul 0: Fondasi (Lulus - Tag `v0-modul0` di commit `05c2081`)
- [ ] Modul 1: Node.js (Sedang berjalan — Langkah 4 dari ~7)
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
- **Repo GitHub:** `alfittorizki123-create/cek`

---

## Keputusan Teknis & Fitur Berjalan
1. **Penyimpanan Memori Sementara:** Menggunakan struktur data objek JavaScript murni di Modul 0 untuk mematangkan logika bisnis sebelum beralih ke database.
2. **Integritas Stok Fisik:** Menolak mutasi `terpakai`/`terbuang` jika kuantitas melebihi sisa stok yang ada (*non-negative stock constraint*).
3. **Konvensi Riwayat Git:** Menerapkan *conventional commits* (`chore:`, `feat:`, `docs:`, `refactor:`) dan alur branch + PR.
4. **Modularisasi & Asinkron:** Memisahkan logika ke `kalkulatorStok.js` (CommonJS) serta membungkus alur eksekusi di `hitungStok.js` dengan `async/await` + `try/catch`.
5. **Repo GitHub Aktif:** Repo direname dari `stoksegar-api` ke `cek`.
6. **Pengelolaan Dokumen Progres:** File `PROGRESS.md` selalu diperbarui langsung oleh Navigator/AI.
