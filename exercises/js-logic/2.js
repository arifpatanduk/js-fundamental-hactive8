function reverseString(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

const originalString = "Hello";
const reversedString = reverseString(originalString);

console.log(originalString, reversedString);
