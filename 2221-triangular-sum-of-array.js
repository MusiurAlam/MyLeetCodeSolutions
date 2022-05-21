var triangularSum = function (nums) {
  const reduceRowOnce = (arr) => {
    const tempArr = arr;
    arr = [];
    for (let i = 0; i < tempArr.length - 1; i++) {
      const tempNum = `${tempArr[i] + tempArr[i + 1]}`;
      arr[i] = parseInt(tempNum[tempNum.length - 1]);
    }

    // return arr;

    if (arr.length === 1) {
      return arr;
    } else {
      arr = reduceRowOnce(arr);
    }

    return arr;
  };

  if (nums.length === 1) {
    return nums[0];
  } else {
    return reduceRowOnce(nums);
  }
};

console.log(triangularSum([5, 5]));
