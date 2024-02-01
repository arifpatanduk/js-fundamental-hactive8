function isArithmeticProgression(numbers) {
  if (numbers.length < 2) return true;

  const x = numbers[1] - numbers[0];

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== x) {
      return false;
    }
  }

  return true;
}

const contoh1 = [2, 4, 6, 8];
console.log(isArithmeticProgression(contoh1));

const contoh2 = [2, 4, 6, 9];
console.log(isArithmeticProgression(contoh2));
