var digitSum = function (s, k) {
  let loopTime;
  let tempStrArr = [];
  let slicer = 0;
  const DivideOnce = (str, divider) => {
    if (str.length % 2 === 0 && divider % 2 === 0) {
      loopTime = str.length / divider;
    } else {
      Math.floor(str.length / divider + 1);
    }

    for (let i = 0; i < loopTime; i++) {
      const tempDigit = str.slice(slicer, slicer + divider);
      let tempSum = 0;

      for (let j = 0; j < tempDigit.length; j++) {
        tempSum += parseInt(tempDigit[j]);
      }
      tempStrArr[i] = tempSum;
      slicer += divider;
    }

    let tempRes = tempStrArr;
    if (tempRes.length === divider) {
      tempRes = tempStrArr.toString().replaceAll(",", "");
      return tempRes;
    } else {
      tempRes = tempStrArr.toString().replaceAll(",", "");
      tempRes = DivideOnce(tempRes, divider);
    }

    return tempRes;
  };

  return DivideOnce(s, k);
};

console.log(digitSum("1234", 2));
