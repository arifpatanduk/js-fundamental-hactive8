const compare = (a, b) => {
  const typeA = typeof a;
  const typeB = typeof b;

  if (typeA === typeB) {
    return a > b ? 1 : -1;
  } else {
    return typeA > typeB ? 1 : -1;
  }
};

const number = (arr) => {
  let tmpCount = 1;
  let max = 0;
  let x;

  arr.sort(compare);

  arr.map(() => {});

  //   for (let i = 1; i < arr.length; ++i) {
  //     arr[i] === arr[i - 1] ? tmpCount++ : (tmpCount = 1);

  //     if (tmpCount > max) {
  //       max = tmpCount;
  //       x = arr[i];
  //     }
  //   }

  return `${x} ${max}`;
};

console.log(number([2, 2, "2", 3, 4, 2, 2, "2", 1, 1]));
