// Langkah 1: Input Jari-jari
const r = parseFloat(prompt("Masukkan jari-jari lingkaran: "));

// Langkah 2: Menghitung Luas Lingkaran
const luas = Math.PI * Math.pow(r, 2);

// Langkah 3: Menghitung Keliling Lingkaran
const keliling = 2 * Math.PI * r;

// Langkah 4: Tampilan Hasil
console.log(`Luas lingkaran: ${luas.toFixed(2)}`);
console.log(`Keliling lingkaran: ${keliling.toFixed(2)}`);
