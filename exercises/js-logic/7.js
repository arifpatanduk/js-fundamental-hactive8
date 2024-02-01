const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Contoh penggunaan fungsi
console.log(isPrime(20));
console.log(isPrime(17));
