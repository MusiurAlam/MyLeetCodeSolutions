var isMonotonic = function (nums) {

    if (nums.length === 1) {
        return true;
      }
      
  let state = false;
  let result = false;

  if (nums[0] === nums[1]) {
    let temp = [...nums];
    nums = [];

    for (let i = 0; i < temp.length; i++) {
      if (!nums.includes(temp[i])) {
        nums.push(temp[i]);
      }
    }

    console.log(nums);

    if (nums.length === 1) {
      return true;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      if (nums[i] > nums[0]) {
        state = true;
        result = true;
      } else {
        state = false;
        result = true;
      }
    } else {
      if (state) {
        if (nums[i] < nums[i - 1]) {
          return false;
        } else {
          result = true;
        }
      } else {
        if (nums[i] > nums[i - 1]) {
          return false;
        } else {
          result = true;
        }
      }
    }
  }

  return result;
};

console.log(isMonotonic([1, 1, 1, 0]));
