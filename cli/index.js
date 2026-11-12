require('dotenv').config({ quiet: true });
const EventEmitter = require('node:events');
const { muatMutasi, simpanMutasi } = require('./storage');
const { hitungSisaStok } = require('../kalkulatorStok');

const JENIS_VALID = ['masuk', 'terpakai', 'terbuang'];
const APP_NAME = process.env.APP_NAME || 'StokSegar CLI';
const DATA_FILE = process.env.DATA_FILE || 'cli/data/mutasi.json';
const BATAS_STOK_MINIM = Number(process.env.BATAS_STOK_MINIM ?? 2);

const stokEvents = new EventEmitter();

stokEvents.on('stok:minim', ({ bahan, sisa }) => {
  console.warn(`[ALERT STOK MINIM] Sisa ${bahan} tinggal ${sisa} kg (batas aman: ${BATAS_STOK_MINIM} kg).`);
});

function tampilkanBantuan() {
  console.log(`=== ${APP_NAME} ===`);
  console.log('Perintah yang tersedia:');
  console.log('  node cli/index.js tambah <bahan> <masuk|terpakai|terbuang> <jumlah>');
  console.log('  node cli/index.js lihat');
}

async function tanganiTambah(args) {
  const [bahanRaw, jenisRaw, jumlahRaw] = args;
  const bahan = bahanRaw ? bahanRaw.trim().toLowerCase() : '';
  const jenis = jenisRaw ? jenisRaw.trim().toLowerCase() : '';
  const jumlah = Number(jumlahRaw);

  if (!bahan || !JENIS_VALID.includes(jenis) || !Number.isFinite(jumlah) || jumlah <= 0) {
    throw new Error('Format salah. Contoh: node cli/index.js tambah ayam masuk 10');
  }

  const daftarMutasi = await muatMutasi(DATA_FILE);
  const stokSebelum = hitungSisaStok(daftarMutasi);
  const sisaSaatIni = stokSebelum[bahan] || 0;

  if ((jenis === 'terpakai' || jenis === 'terbuang') && sisaSaatIni < jumlah) {
    throw new Error(`Mutasi ditolak: stok ${bahan} hanya ${sisaSaatIni} kg, tidak cukup untuk ${jenis} ${jumlah} kg.`);
  }

  const mutasiBaru = {
    bahan,
    jenis,
    jumlah,
    tanggal: new Date().toISOString(),
  };

  daftarMutasi.push(mutasiBaru);
  await simpanMutasi(DATA_FILE, daftarMutasi);

  const stokSesudah = hitungSisaStok(daftarMutasi);
  const sisaBaru = stokSesudah[bahan] || 0;

  console.log(`[SUKSES] ${jenis} ${bahan} sebesar ${jumlah} kg tersimpan. Sisa ${bahan}: ${sisaBaru} kg.`);

  if (sisaBaru <= BATAS_STOK_MINIM) {
    stokEvents.emit('stok:minim', { bahan, sisa: sisaBaru });
  }
}

async function tanganiLihat() {
  const daftarMutasi = await muatMutasi(DATA_FILE);
  console.log(`=== ${APP_NAME} ===`);

  if (daftarMutasi.length === 0) {
    console.log('Belum ada catatan mutasi stok.');
    return;
  }

  const laporan = hitungSisaStok(daftarMutasi);
  console.table(laporan);
}

async function main() {
  const [perintah, ...sisaArgs] = process.argv.slice(2);

  try {
    if (perintah === 'tambah') {
      await tanganiTambah(sisaArgs);
    } else if (perintah === 'lihat') {
      await tanganiLihat();
    } else {
      tampilkanBantuan();
    }
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
    process.exitCode = 1;
  }
}

main();