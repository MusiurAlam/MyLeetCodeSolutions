var largestNumber = function (nums) {
  const prevResult = nums[0].toString();

  const solver = (nums, i, prevResult) => {
    let result;
    const currentNum = nums[i];
    if (currentNum) {
      const front = parseInt(prevResult + currentNum.toString());

      const back = parseInt(currentNum.toString() + prevResult);

      if (front > back) {
        result = front.toString();
      } else {
        result = back.toString();
      }

      console.log(nums[i + 1])
      if (nums[i + 1]) {
        solver(nums, i + 1, result);
      }

    }

    return prevResult + result;
  };

  return solver(nums, 1, prevResult);
};

console.log(largestNumber([3, 30, 34, 5, 9]));
