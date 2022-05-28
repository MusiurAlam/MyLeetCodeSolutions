var pivotIndex = function (nums) {
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftSum = 0;
      rightSum = nums.slice(1).reduce((acc, cur) => (acc += cur), 0);
    } else if (i === nums.length - 1) {
      rightSum = 0;
      leftSum = nums
        .slice(0, nums.length - 1)
        .reduce((acc, cur) => (acc += cur), 0);
    } else {
      leftSum = nums.slice(0, i).reduce((acc, cur) => (acc += cur), 0);
      rightSum = nums
        .slice(i + 1, nums.length)
        .reduce((acc, cur) => (acc += cur), 0);

    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
