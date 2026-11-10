// Data transaksi mutasi bahan segar (ditambah kasus uji stok minus)
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
  // Kasus uji: coba pakai ayam 10 kg saat sisa cuma 5 kg
  { bahan: 'ayam', jenis: 'terpakai', jumlah: 10 },
];

// Pendekatan Modern Fungsional dengan Array.reduce & Validasi
function hitungSisaStok(daftarMutasi) {
  return daftarMutasi.reduce((akumulator, transaksi) => {
    const { bahan, jenis, jumlah } = transaksi;

    // Inisialisasi awal bahan jika belum ada di akumulator
    if (akumulator[bahan] === undefined) {
      akumulator[bahan] = 0;
    }

    if (jenis === 'masuk') {
      akumulator[bahan] += jumlah;
    } else if (jenis === 'terpakai' || jenis === 'terbuang') {
      // Guard clause: tolak pengurangan jika stok tidak mencukupi
      if (akumulator[bahan] < jumlah) {
        console.warn(`[PERINGATAN] Mutasi ${jenis} ${bahan} sebesar ${jumlah} ditolak! Sisa stok hanya ${akumulator[bahan]}`);
      } else {
        akumulator[bahan] -= jumlah;
      }
    }

    return akumulator;
  }, {});
}

// Eksekusi
console.log('=== MEMPROSES MUTASI STOK ===');
const laporan = hitungSisaStok(mutasiStok);

console.log('\n=== LAPORAN SISA STOK AKHIR ===');
console.table(laporan);