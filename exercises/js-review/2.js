// A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
let profile = {
  nama_depan: "Arif",
  nama_belakang: "Patanduk",
  hobi: ["futsal", "traveling"],
  angka_favorit: 7,
  memakai_kacamata: true,
};
console.log(profile);

// B. Object tersebut harus memiliki property nama_depan(string), nama_belakang(string), hobi(array ofstrings), angka_favorit(number), memakai_kacamata(boolean), dan boleh memanambahkan propertylainnya
// C. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan

// D. Cetak nama_lengkap dengan console.log
console.log(`${profile.nama_depan} ${profile.nama_belakang}`);

// E. Ubah angka_favorit jadi 8.
profile.angka_favorit = 8;
console.log(profile.angka_favorit);

// F. Tambahkan satu hobi "coding".
profile.hobi.push("coding");
console.log(profile);

// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
profile.lulusan = "Hacktiv8";

// H. Cetak semua hobi satu per satu menggunakan loop.
for (let i = 0; i < profile.hobi.length; i++) {
  console.log(profile.hobi[i]);
}

// I. Cetak semua key milik objek, dan cetak semua values milik objek.
console.log("Keys:", Object.keys(profile));
console.log("Values:", Object.values(profile));

// J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.
for (const key in profile) {
  console.log(`${key} : ${profile[key]}`);
}
