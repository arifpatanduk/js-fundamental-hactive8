function compareNumbers(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) {
    return true;
  } else if (secondNumber === firstNumber) {
    return -1;
  }
  return false;
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));
