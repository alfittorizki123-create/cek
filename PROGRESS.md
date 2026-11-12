# Catatan Progres Belajar: StokSegar API

Dokumen ini adalah sumber kebenaran (single source of truth) untuk melacak status modul, fitur yang berjalan, riwayat sesi, dan keputusan teknis. **Diperbarui langsung oleh Navigator/AI.**

---

## Log Aktivitas Terakhir
- **Waktu Pembaruan:** 2026-11-12 09:26:05
- **Modul Sedang Dipelajari:** Modul 0 - Fondasi (Lulus) -> Lanjut Modul 1 - Node.js
- **Langkah Aktif:** [Modul 0 / Langkah 19] Finalisasi Tag `v0-modul0` & Push ke GitHub
- **Topik Pembahasan:**
  - Setup lingkungan kerja Node.js v24 dan Git
  - Logika kalkulasi stok bahan segar (buncis, kentang, wortel, tomat, ayam) + validasi non-negatif (`Array.reduce`)
  - Git branch, merge, remote GitHub (`cek`), Pull Request (#1), `git pull` & `git push`
  - Modularisasi CommonJS (`kalkulatorStok.js`), `Promise`, `async/await`, `try/catch`
  - Fondasi jaringan (client-server, IP, port, DNS, HTTP/HTTPS), DSA `O(1)` Hash Map, intro TypeScript
  - Evaluasi pemahaman 5 pertanyaan Modul 0 selesai

---

## Ringkasan Status Modul
- [x] Modul 0: Fondasi (Lulus - Tag `v0-modul0` dipindah ke commit final & push GitHub)
- [ ] Modul 1: Node.js (Siap dimulai)
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
