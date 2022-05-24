var strStr = function (haystack, needle) {
  const strToArr = (str) => {
    const l = str.length;
    let r = [];
    for (let i = 0; i < l; i++) {
      r.push(str[i]);
    }

    return r;
  };

  let result = -1;

  if (haystack.includes(needle)) {
    let hayStack = strToArr(haystack);
    let Needle = strToArr(needle);
    let startingPoint = hayStack.indexOf(Needle[0]);

    for (let i = startingPoint; i < hayStack.length; i++) {
      const se = Needle.length;
      const sliced = hayStack
        .slice(i, i + se)
        .toString()
        .replaceAll(",", "");
      if (sliced === needle) {
        return i;
      } else {
        result = -1;
      }
    }
  } else {
    return -1;
  }

  return result;
};

console.log(strStr("hello", "ll"));
