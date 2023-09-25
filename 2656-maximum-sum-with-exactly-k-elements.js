var maximizeSum = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i <= k; i++) {
    let m = nums[nums.length - 1];
    result += m;
    nums[nums.length - 1] = m + 1;
  }
  return result;
};

let nums = [4, 2, 5, 1, 3];
console.log(maximizeSum(nums, 3));
