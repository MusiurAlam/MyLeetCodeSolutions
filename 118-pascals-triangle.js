var generate = function (numRows) {
  let result = [];

  let prevArr = [];

  for (let i = 0; i < numRows; i++) {
    let tempArr = [];

    tempArr.length = prevArr.length + 1;

    for (let j = 0; j < tempArr.length; j++) {
      if (j === 0) {
        tempArr[0] = 1;
      } else if (j === tempArr.length - 1) {
        tempArr[tempArr.length - 1] = 1;
      } else {
        tempArr[j] = prevArr[j] + prevArr[j - 1];
      }
    }

    result.push(tempArr);
    prevArr = tempArr;
  }

  return result;
};

console.log(generate(10));
