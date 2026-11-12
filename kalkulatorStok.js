// Fungsi murni penghitung sisa stok bahan segar
function hitungSisaStok(daftarMutasi) {
  if (!Array.isArray(daftarMutasi)) {
    throw new Error('Data mutasi harus berupa array');
  }

  return daftarMutasi.reduce((akumulator, transaksi) => {
    const { bahan, jenis, jumlah } = transaksi;

    if (akumulator[bahan] === undefined) {
      akumulator[bahan] = 0;
    }

    if (jenis === 'masuk') {
      akumulator[bahan] += jumlah;
    } else if (jenis === 'terpakai' || jenis === 'terbuang') {
      if (akumulator[bahan] < jumlah) {
        console.warn(`[PERINGATAN] Mutasi ${jenis} ${bahan} sebesar ${jumlah} ditolak! Sisa stok hanya ${akumulator[bahan]}`);
      } else {
        akumulator[bahan] -= jumlah;
      }
    }

    return akumulator;
  }, {});
}

module.exports = { hitungSisaStok };