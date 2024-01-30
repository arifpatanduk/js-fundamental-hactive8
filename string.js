const reverse = (string) => {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  if (string === result) return "palindrome!";
  return result;
};

console.log(reverse("Abba"));
