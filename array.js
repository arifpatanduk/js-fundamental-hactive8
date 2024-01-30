const sort = (arr) => {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        isSorted = false;

        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
};

const arr = [20, 30, 10, 50];
const sortedArray = sort(arr);
sortedArray.forEach((element) => {
  console.log(element);
});
