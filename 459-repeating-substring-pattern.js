var repeatedSubstringPattern = function (s) {
  const strToArr = (str) => {
    const l = str.length;
    let r = [];
    for (let i = 0; i < l; i++) {
      r.push(str[i]);
    }

    return r;
  };

  let result = false;

  if (strToArr(s).length < 2) {
    return false;
  } else {
    let sAsArr = strToArr(s);
    let tempSAsArr = sAsArr.slice(1);

    let endOfPattern = tempSAsArr.indexOf(sAsArr[0]);

    const pattern = sAsArr.slice(0, endOfPattern + 1);

    sAsArr = sAsArr.slice(endOfPattern + 1);

    const patternAsStr = pattern.toString().replaceAll(",", "");

    for (let i = 0; i < sAsArr.length; i++) {
      const cSlice = sAsArr
        .slice(i, i + pattern.length)
        .toString()
        .replaceAll(",", "");

      i = i + pattern.length - 1;

      if (cSlice === patternAsStr) {
        result = true;
      } else {
        return false;
      }
    }
  }

  return result;
};

console.log(repeatedSubstringPattern("abcabcabd"));
// if (sAsArr.length < pattern.length * 2) {
//   return false;
// } else {

// }

//   console.log(i, i + pattern.length, sAsArr, cSlice);
