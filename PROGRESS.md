# Catatan Progres Belajar: StokSegar API

Dokumen ini adalah sumber kebenaran (single source of truth) untuk melacak status modul, fitur yang berjalan, riwayat sesi, dan keputusan teknis. **Diperbarui langsung oleh Navigator/AI.**

---

## Log Aktivitas Terakhir
- **Waktu Pembaruan:** 2026-11-12 22:18:18
- **Modul Sedang Dipelajari:** Modul 1 - Node.js (Lulus) -> Siap Masuk Modul 2 - HTTP dan REST
- **Langkah Aktif:** [Modul 1 / Langkah 10] Kunci Tag `v1-modul1`, Push GitHub, & Cek Prasyarat Modul 2
- **Topik Pembahasan:**
  - Seluruh materi Modul 1 tuntas: V8/Event Loop/Non-blocking I/O, npm/SemVer/`package.json`, CommonJS vs ESM, `node:fs/promises`, `node:path`, `EventEmitter`, `.env` (`dotenv` v18.0.10), Streams & Buffer, Worker Threads
  - 5 pertanyaan evaluasi pemahaman Modul 1 terjawab tepat dan lulus

---

## Ringkasan Status Modul
- [x] Modul 0: Fondasi (Lulus - Tag `v0-modul0` di commit `05c2081`)
- [x] Modul 1: Node.js (Lulus - Siap tag `v1-modul1` & push GitHub)
- [ ] Modul 2: HTTP & REST (Siap dimulai)
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
7. **CLI Persistensi JSON (Modul 1):** CLI pencatat stok di `cli/` (`index.js` + `storage.js`) memakai `node:fs/promises`, `node:path`, `EventEmitter`, dan `dotenv` dengan penyimpanan lokal diabaikan `.gitignore` (`cli/data/`).
