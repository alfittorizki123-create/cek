const { hitungSisaStok } = require('./kalkulatorStok');

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
  { bahan: 'ayam', jenis: 'terpakai', jumlah: 10 },
];

// Simulasi pengambilan data asinkron (seperti query ke database)
function ambilDataMutasi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mutasiStok);
    }, 300);
  });
}

async function jalankanLaporan() {
  try {
    console.log('Mengambil data mutasi stok...');
    const data = await ambilDataMutasi();

    console.log('=== MEMPROSES MUTASI STOK ===');
    const laporan = hitungSisaStok(data);

    console.log('\n=== LAPORAN SISA STOK AKHIR ===');
    console.table(laporan);
  } catch (error) {
    console.error(`[ERROR] Gagal membuat laporan: ${error.message}`);
    process.exitCode = 1;
  }
}

jalankanLaporan();