var toHex = (num) => {
  if (num < 0) {
    num = 0xffffffff + num + 1;
  }

  return num.toString(16);
};

console.log(toHex(26));
