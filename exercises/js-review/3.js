// A. Buatlah sebuah function.
// B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
const printCurrentDate = () => {
  const currentDate = new Date();
  console.log(currentDate.toLocaleDateString());
};

printCurrentDate();

// A. Buatlah function berikutnya.
// B. Function tersebut memberikan tanggal sekarang ketika dipanggil.
const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());
