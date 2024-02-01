function listPrima(angkaPertama, angkaKedua) {
  const primes = [];

  function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = angkaPertama; i <= angkaKedua; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// Contoh penggunaan fungsi
const angkaPertama = 10;
const angkaKedua = 30;

const primesInRange = findPrimesInRange(10, 30);
console.log(primesInRange);
