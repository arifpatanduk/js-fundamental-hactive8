function threeStepsAB(text) {
  for (let i = 0; i < text.length - 4; i++) {
    if (text[i] === "a" && text[i + 4] === "b") {
      return true;
    }
  }
  return false;
}

const example1 = "abc";
console.log(threeStepsAB(example1));

const example2 = "a123b";
console.log(threeStepsAB(example2));

const example3 = "abcd";
console.log(threeStepsAB(example3));
