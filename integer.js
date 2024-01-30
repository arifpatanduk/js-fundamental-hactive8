const calculate = (arr) => {
  if (arr.length < 3) return "Invalid number of arguments";

  const sortedArray = arr.sort(function (a, b) {
    return b - a;
  });

  let toCalculate = [];
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    if (sortedArray[i] != sortedArray[i + 1]) {
      toCalculate.push(sortedArray[i]);
      result *= sortedArray[i];
    }

    if (toCalculate.length == 3) break;
  }

  return result;
};

const array = [2, 2, 2, 2];
console.log(calculate(array));
