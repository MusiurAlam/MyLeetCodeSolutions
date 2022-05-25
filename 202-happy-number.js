var isHappy = function (n) {
  let counter = 0;
  const returnSquare = (num) => {
    num = num.toString();
    let rResult = 0;

    for (let i = 0; i < num.length; i++) {
      //   console.log(num, num[i]);
      rResult = rResult + Math.pow(parseInt(num[i]), 2);
    }

    if (rResult === 1) {
      return rResult;
    } else {
      if (counter > 100) {
        return false;
      } else {
        counter++;
        return returnSquare(rResult);
      }
    }
  };

  if (n < 1) {
    return false;
  } else {
    return returnSquare(n);
  }
};

console.log(isHappy(19));
