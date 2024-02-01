const urutHuruf = (text) => {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (var i = 1; i < text.length; i++) {
      if (text[i - 1] > text[i]) {
        isSorted = false;

        var tmp = text[i - 1];
        text[i - 1] = text[i];
        text[i] = tmp;
      }
    }
  }

  return text;
};

urutHuruf("qwertyuio");
