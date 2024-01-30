const segititaSiku = (n) => {
  for (let i = 0; i < n; i++) {
    let spasi = "";
    for (let j = 0; j < n - i - 1; j++) {
      spasi += " ";
    }

    let icon = "";
    for (let k = n - i - 1; k < n; k++) {
      k % 2 == 0 ? (icon += "#") : (icon += "*");
    }

    console.log(spasi + icon);
  }
};

const segitigaSamaSisi = (n) => {
  for (let i = 1; i <= n; i++) {
    let spasi = "";
    for (let j = 0; j < n - i; j++) {
      spasi += " ";
    }

    let icon = "";
    for (let k = 0; k < i * 2 - 1; k++) {
      k % 2 == 0 ? (icon += "#") : (icon += "*");
    }

    console.log(spasi + icon);
  }
};

segitigaSamaSisi(6);
