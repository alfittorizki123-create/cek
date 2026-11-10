// Data contoh mutasi bahan segar Lapak Steak
const mutasiStok = [
  { bahan: 'ayam', jenis: 'masuk', jumlah: 10 },
  { bahan: 'kentang', jenis: 'masuk', jumlah: 8 },
  { bahan: 'wortel', jenis: 'masuk', jumlah: 5 },
  { bahan: 'buncis', jenis: 'masuk', jumlah: 4 },
  { bahan: 'tomat', jenis: 'masuk', jumlah: 3 },
  { bahan: 'ayam', jenis: 'terpakai', jumlah: 4 },
  { bahan: 'kentang', jenis: 'terpakai', jumlah: 3 },
  { bahan: 'ayam', jenis: 'terbuang', jumlah: 1 },
  { bahan: 'wortel', jenis: 'terpakai', jumlah: 2 },
  { bahan: 'tomat', jenis: 'terbuang', jumlah: 0.5 },
];

// Fungsi kalkulasi sisa stok
function hitungSisaStok(daftarMutasi) {
  const stokAkhir = {};

  daftarMutasi.forEach((transaksi) => {
    const { bahan, jenis, jumlah } = transaksi;

    // Inisialisasi bahan jika belum tercatat di objek
    if (!stokAkhir[bahan]) {
      stokAkhir[bahan] = 0;
    }

    // Kalkulasi mutasi
    if (jenis === 'masuk') {
      stokAkhir[bahan] += jumlah;
    } else if (jenis === 'terpakai' || jenis === 'terbuang') {
      stokAkhir[bahan] -= jumlah;
    }
  });

  return stokAkhir;
}

// Eksekusi dan cetak hasil
const hasil = hitungSisaStok(mutasiStok);
console.log('=== LAPORAN SISA STOK BAHAN SEGAR LAPAK STEAK ===');
console.table(hasil);