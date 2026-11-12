const fs = require('node:fs/promises');
const path = require('node:path');

function selesaikanJalur(jalurFile) {
  if (!jalurFile) {
    throw new Error('Konfigurasi DATA_FILE belum disetel.');
  }
  return path.resolve(__dirname, '..', jalurFile);
}

async function muatMutasi(jalurFile) {
  const lokasiPenuh = selesaikanJalur(jalurFile);

  try {
    const isiTeks = await fs.readFile(lokasiPenuh, 'utf8');
    const data = JSON.parse(isiTeks);

    if (!Array.isArray(data)) {
      throw new Error(`Format ${jalurFile} tidak valid: isi harus berupa array JSON.`);
    }

    return data;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }

    if (error instanceof SyntaxError) {
      throw new Error(`File data rusak (${jalurFile}): JSON tidak valid -> ${error.message}`);
    }

    throw error;
  }
}

async function simpanMutasi(jalurFile, daftarMutasi) {
  const lokasiPenuh = selesaikanJalur(jalurFile);
  const folderInduk = path.dirname(lokasiPenuh);

  await fs.mkdir(folderInduk, { recursive: true });
  const jsonTeks = JSON.stringify(daftarMutasi, null, 2);
  await fs.writeFile(lokasiPenuh, jsonTeks, 'utf8');
}

module.exports = { muatMutasi, simpanMutasi, selesaikanJalur };