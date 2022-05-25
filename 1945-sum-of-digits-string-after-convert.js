var addDigits = function (n, k) {
  let counter = 0;
  const returnSum = (num) => {
    num = num.toString();
    let rResult = 0;

    for (let i = 0; i < num.length; i++) {
      rResult = rResult + parseInt(num[i]);
    }

    console.log(num, rResult)
    counter++;
    if (rResult < 10) {
      return rResult;
    } else {
      if (counter === k) {
        return rResult;
      } else {
        return returnSum(rResult);
      }
    }
  };

  if (n < 1) {
    return false;
  } else {
    return returnSum(n);
  }
};

var getLucky = function (s, k) {
  const convertToInt = (str) => {
    const alphabates = "abcdefghijklmnopqrstuvwxyz";

    let convertedString = "";
    for (let i = 0; i < str.length; i++) {
      convertedString += alphabates.indexOf(str[i]) + 1;
    }

    return parseInt(convertedString);
  };

  return addDigits(convertToInt(s), k);
};

// console.log(getLucky("a", 1));
// console.log(getLucky("zbax", 2));
// console.log(getLucky("leetcode", 2));
console.log(getLucky("dbvmfhnttvr", 5));
