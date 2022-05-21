var threeSum = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (
            nums[i] !== nums[j] &&
            nums[j] !== nums[k] &&
            nums[i] !== nums[k]
          ) {
            if (nums[i] + nums[j] + nums[k] === 0) {
              console.log(
                nums[i],
                nums[j],
                nums[k],
                "-----",
                nums[i] + nums[j] + nums[k]
              );
              let entry = [nums[i], nums[j], nums[k]]
              !result.includes(entry) && result.push(entry);
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
