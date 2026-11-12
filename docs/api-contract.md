# Kontrak API — StokSegar API (v1)

Dokumen kesepakatan endpoint, format request/response JSON, dan HTTP status code antara backend dan frontend Lapak Steak.

## Informasi Umum
- **Base URL (Lokal):** `http://localhost:3000/api/v1`
- **Content-Type:** `application/json`
- **Konvensi Penamaan:** Resource kata benda (`/bahan`, `/mutasi`), JSON field `snake_case`.

## Format Respons Seragam

### Sukses
```json
{
  "success": true,
  "message": "Pesan ringkas hasil operasi",
  "data": {}
}
```

### Error
```json
{
  "success": false,
  "error": {
    "code": "KODE_ERROR_TERSTANDAR",
    "message": "Penjelasan error yang ramah pengguna",
    "details": []
  }
}
```

---

## Resource: Bahan (`/bahan`)

### 1. Daftar Semua Bahan
- **Method & URL:** `GET /api/v1/bahan`
- **Deskripsi:** Mengambil seluruh master bahan segar beserta ringkasan sisa stok terkini.
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Daftar bahan berhasil diambil",
  "data": [
    {
      "id": 1,
      "nama": "ayam",
      "satuan": "kg",
      "batas_simpan_hari": 3,
      "batas_stok_minim": 2,
      "sisa_stok": 5.5
    }
  ]
}
```

### 2. Tambah Master Bahan Baru
- **Method & URL:** `POST /api/v1/bahan`
- **Deskripsi:** Mendaftarkan jenis bahan baru (buncis, kentang, wortel, tomat, ayam).
- **Request Body:**
```json
{
  "nama": "buncis",
  "satuan": "kg",
  "batas_simpan_hari": 4,
  "batas_stok_minim": 1.5
}
```
- **Response Sukses (`201 Created`):**
```json
{
  "success": true,
  "message": "Bahan baru berhasil ditambahkan",
  "data": {
    "id": 2,
    "nama": "buncis",
    "satuan": "kg",
    "batas_simpan_hari": 4,
    "batas_stok_minim": 1.5,
    "sisa_stok": 0
  }
}
```
- **Response Error (`400 Bad Request` — validasi gagal):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Input tidak valid",
    "details": ["Field 'nama' wajib diisi"]
  }
}
```

### 3. Detail Satu Bahan
- **Method & URL:** `GET /api/v1/bahan/:id`
- **Deskripsi:** Mengambil detail satu bahan berdasarkan ID.
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Detail bahan berhasil diambil",
  "data": {
    "id": 1,
    "nama": "ayam",
    "satuan": "kg",
    "batas_simpan_hari": 3,
    "batas_stok_minim": 2,
    "sisa_stok": 5.5
  }
}
```
- **Response Error (`404 Not Found`):**
```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Bahan dengan id 99 tidak ditemukan",
    "details": []
  }
}
```

### 4. Ubah Sebagian Data Bahan
- **Method & URL:** `PATCH /api/v1/bahan/:id`
- **Deskripsi:** Memperbarui satu atau beberapa kolom master bahan (misal batas stok minim).
- **Request Body:**
```json
{
  "batas_stok_minim": 3
}
```
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Data bahan berhasil diperbarui",
  "data": {
    "id": 1,
    "nama": "ayam",
    "satuan": "kg",
    "batas_simpan_hari": 3,
    "batas_stok_minim": 3,
    "sisa_stok": 5.5
  }
}
```
- **Response Error (`404 Not Found` / `400 Bad Request`):** Format error seragam (`RESOURCE_NOT_FOUND` atau `VALIDATION_ERROR`).

### 5. Hapus Master Bahan
- **Method & URL:** `DELETE /api/v1/bahan/:id`
- **Deskripsi:** Menghapus bahan berdasarkan ID (khusus pemilik di Modul 5; di Modul 2–3 disiapkan kontraknya).
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Bahan berhasil dihapus",
  "data": null
}
```
- **Response Error (`404 Not Found`):**
```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Bahan dengan id 99 tidak ditemukan",
    "details": []
  }
}
```

---

## Resource: Mutasi Stok (`/mutasi`) & Ringkasan (`/stok`)

### 6. Riwayat Mutasi Stok (Pagination, Filter, Sort)
- **Method & URL:** `GET /api/v1/mutasi`
- **Query Params (Opsional):**
  - `page` (default: `1`)
  - `limit` (default: `10`, maks: `100`)
  - `bahan_id` (filter ID bahan, misal `1`)
  - `jenis` (`masuk` | `terpakai` | `terbuang`)
  - `sort` (`tanggal` untuk urut lama->baru, `-tanggal` untuk baru->lama)
- **Contoh URL:** `/api/v1/mutasi?bahan_id=1&jenis=masuk&page=1&limit=10&sort=-tanggal`
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Riwayat mutasi stok berhasil diambil",
  "data": [
    {
      "id": 12,
      "bahan_id": 1,
      "nama_bahan": "ayam",
      "jenis": "masuk",
      "jumlah": 10,
      "tanggal": "2026-11-12T08:00:00.000Z",
      "catatan": "Belanja pagi supplier"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total_data": 1,
    "total_halaman": 1
  }
}
```

### 7. Catat Mutasi Stok Baru
- **Method & URL:** `POST /api/v1/mutasi`
- **Deskripsi:** Mencatat bahan masuk, terpakai, atau terbuang. Menolak transaksi jika sisa stok menjadi negatif.
- **Request Body:**
```json
{
  "bahan_id": 1,
  "jenis": "terpakai",
  "jumlah": 4.5,
  "tanggal": "2026-11-12T12:30:00.000Z",
  "catatan": "Masak makan siang"
}
```
- **Response Sukses (`201 Created`):**
```json
{
  "success": true,
  "message": "Mutasi stok berhasil dicatat",
  "data": {
    "id": 13,
    "bahan_id": 1,
    "jenis": "terpakai",
    "jumlah": 4.5,
    "tanggal": "2026-11-12T12:30:00.000Z",
    "sisa_stok_terkini": 5.5
  }
}
```
- **Response Error (`422 Unprocessable Content` — stok tidak cukup):**
```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_STOCK",
    "message": "Stok ayam tidak mencukupi (tersisa 5.5 kg, diminta 10 kg)",
    "details": []
  }
}
```

### 8. Detail Satu Mutasi Stok
- **Method & URL:** `GET /api/v1/mutasi/:id`
- **Deskripsi:** Mengambil detail satu catatan transaksi mutasi.
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Detail mutasi berhasil diambil",
  "data": {
    "id": 13,
    "bahan_id": 1,
    "jenis": "terpakai",
    "jumlah": 4.5,
    "tanggal": "2026-11-12T12:30:00.000Z",
    "catatan": "Masak makan siang"
  }
}
```
- **Response Error (`404 Not Found`):** Format error seragam (`RESOURCE_NOT_FOUND`).

### 9. Ringkasan Sisa Stok & Usia Simpan
- **Method & URL:** `GET /api/v1/stok/ringkasan`
- **Deskripsi:** Menampilkan sisa stok otomatis semua bahan beserta status stok minim dan usia simpan sejak tanggal masuk terakhir.
- **Response Sukses (`200 OK`):**
```json
{
  "success": true,
  "message": "Ringkasan stok berhasil diambil",
  "data": [
    {
      "bahan_id": 1,
      "nama": "ayam",
      "satuan": "kg",
      "sisa_stok": 1.5,
      "status_stok": "MENIPIS",
      "usia_simpan_hari": 2,
      "batas_simpan_hari": 3,
      "status_kesegaran": "SEGERA_PAKAI"
    }
  ]
}
```

---

## Katalog Kode Error Seragam

Semua endpoint **wajib** memakai struktur `{ "success": false, "error": { "code", "message", "details" } }` dengan status code berikut:

| Status Code | `error.code` | Kapan Dipakai |
| :--- | :--- | :--- |
| `400 Bad Request` | `VALIDATION_ERROR` | Format JSON rusak, field wajib kosong, atau tipe data salah (misal `jumlah: "sepuluh"`). |
| `401 Unauthorized` | `UNAUTHORIZED` | Token login tidak ada / kedaluwarsa (aktif mulai Modul 5). |
| `403 Forbidden` | `FORBIDDEN` | Sudah login, tapi peran tidak diizinkan (misal karyawan mencoba hapus bahan di Modul 5). |
| `404 Not Found` | `RESOURCE_NOT_FOUND` | ID bahan/mutasi atau URL endpoint tidak ditemukan. |
| `409 Conflict` | `DUPLICATE_RESOURCE` | Bentrok data unik (misal mendaftarkan nama bahan `"ayam"` yang sudah ada). |
| `422 Unprocessable Content` | `INSUFFICIENT_STOCK` | JSON & tipe valid, tapi melanggar aturan bisnis (mutasi membuat stok menjadi minus). |
| `500 Internal Server Error` | `INTERNAL_ERROR` | Error tak terduga di server atau database gagal dihubungi. |
