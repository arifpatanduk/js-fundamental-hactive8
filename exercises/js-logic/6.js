function gcd(firstNumber, secondNumber) {
  let min = Math.min(firstNumber, secondNumber);

  for (let i = min; i >= 1; i--) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }

  return 1;
}

// Contoh penggunaan fungsi
const bilangan1 = 12;
const bilangan2 = 18;

const fpbResult = hitungFPB(bilangan1, bilangan2);
console.log(fpbResult);
