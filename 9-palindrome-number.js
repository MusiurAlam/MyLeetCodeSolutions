var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let digitNum = x.toString().length;
  if (digitNum === 1) {
    return true;
  }
  const numToArr = (num) => {
    let r = [];
    for (let i = 0; i < digitNum; i++) {
      r.push(parseInt(num.toString()[i]));
    }

    return r;
  };
  let xAsArr = numToArr(x);
  let isPalindrome = false;
  let loopTime = 0;
  if (digitNum % 2 === 0) {
    loopTime = xAsArr.length / 2;
  } else {
    loopTime = Math.floor(xAsArr.length / 2);
  }
  for (let i = 0; i < loopTime; i++) {
    if (xAsArr[i] === xAsArr[xAsArr.length - 1 - i]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

console.log(isPalindrome(121));
