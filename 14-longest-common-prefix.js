var longestCommonPrefix = function (strs) {
  if (strs.length > 1) {
    const strToArr = (str) => {
      let arr = [];

      if (str) {
        for (let j = 0; j < str.length; j++) {
          arr.push(str[j]);
        }
      }

      return arr;
    };

    let longestPrefix = "";
    let smallestWordLength = strs[0].length;
    let smallestWord = strs[0];

    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length < smallestWordLength) {
        smallestWordLength = strs[i].length;
        smallestWord = strs[i];
      }
    }

    // console.log({smallestWord})
    for (let i = 0; i < smallestWordLength + 1; i++) {
      let temp = strToArr(smallestWord);
      if (temp.length > 1) {
        temp = temp.slice(0, i).toString().replaceAll(",", "");
      } else {
        temp = temp[0];
      }

    //   console.log({temp})
      if (temp) {
        if (temp.length === 1) {
          if (strs.filter((item) => item[0] === temp).length === strs.length) {
            longestPrefix = temp;
          }
        }
        if (strs.filter((item) => item.slice(0, i) === temp).length === strs.length) {
          longestPrefix = temp;
        }
      }
    }

    return longestPrefix;
  } else if (strs.length === 1) {
    return strs[0];
  } else {
    return "";
  }
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
