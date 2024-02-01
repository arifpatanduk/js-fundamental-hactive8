// A. Buatlah sebuah function yang menerima sebuah angka.
// B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
// C. Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap dalam format string “ganjil” atau “genap”.
// E. Tambahkan pengecekan tipe data di function tersebut.
// F. Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, maka langsung return “Invalid Data”.
const checkOddEven = (n) => {
  // E. Tambahkan pengecekan tipe data
  if (typeof n !== "number" || isNaN(n)) return "Invalid Data";

  // B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
  if (n % 2 === 0) {
    return "genap";
  }

  return "ganjil";
};

// D. Tes dengan console log hasil function tersebut dengan angka: 2, 3, 20, 21
console.log(checkOddEven(2));
console.log(checkOddEven(3));
console.log(checkOddEven(20));
console.log(checkOddEven(21));
